import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

// POST /api/webhook — Stripe-Webhook-Endpoint.
//
// Sicherheits-Kern: Jedes Event wird per Signatur gegen das
// STRIPE_WEBHOOK_SECRET verifiziert. Ohne gültige Signatur (bzw. ohne
// konfiguriertes Secret) wird nichts verarbeitet — niemand kann gefälschte
// "Zahlung erfolgreich"-Events einschleusen.

// Idempotenz: Stripe wiederholt Events bei Timeouts mit gleicher event.id.
// Bereits verarbeitete IDs werden gemerkt (begrenzter Puffer).
const processedEvents = new Map<string, number>(); // event.id -> timestamp
const PROCESSED_MAX = 1_000;
const PROCESSED_TTL_MS = 24 * 60 * 60 * 1_000;

function remember(eventId: string): boolean {
  const now = Date.now();
  if (processedEvents.size > PROCESSED_MAX) {
    for (const [id, ts] of processedEvents) {
      if (ts < now - PROCESSED_TTL_MS) processedEvents.delete(id);
    }
  }
  if (processedEvents.has(eventId)) return false;
  processedEvents.set(eventId, now);
  return true;
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secret) {
    // Ohne Secret keine Verarbeitung — sicherer Ausfallzustand.
    return NextResponse.json({ error: "webhook_not_configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing_signature" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch {
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  if (!remember(event.id)) {
    // Replay/Retry desselben Events — nichts doppelt verarbeiten.
    return NextResponse.json({ received: true });
  }

  switch (event.type) {
    case "payment_intent.succeeded": {
      // FULFILLMENT-HOOK: Hier greift die Lieferung — "Digitaler Zugang sofort
      // nach Zahlung". Konkret: Zugang freischalten, Zugangsdaten/E-Mail senden.
      // Achtung: event.data.object ist der PaymentIntent; NIE dem Client-Teil
      // der Antwort vertrauen, nur dem verifizierten Webhook-Event.
      const paymentIntent = event.data.object;
      console.info(
        `[webhook] payment_intent.succeeded id=${paymentIntent.id} amount=${paymentIntent.amount} ${paymentIntent.currency}`,
      );
      // TODO(fulfillment): Produktzugang für paymentIntent.metadata.priceId
      // freischalten und Bestätigungs-E-Mail senden.
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      console.warn(
        `[webhook] payment_intent.payment_failed id=${paymentIntent.id}`,
      );
      break;
    }
    default:
      // Unbekannte/irrelevante Events: Signatur ist verifiziert, Inhalt wird
      // nicht verarbeitet. Kein Fehler — Stripe sonst ständig Retries schickt.
      break;
  }

  return NextResponse.json({ received: true });
}
