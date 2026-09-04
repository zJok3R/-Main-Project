import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import {
  sendCustomerConfirmation,
  sendOwnerNotification,
} from "@/lib/mail";

// POST /api/webhook — Stripe-Webhook-Endpoint.
//
// Sicherheits-Kern: Jedes Event wird per Signatur gegen das
// STRIPE_WEBHOOK_SECRET verifiziert. Ohne gültige Signatur (bzw. ohne
// konfiguriertes Secret) wird nichts verarbeitet — niemand kann gefälschte
// "Zahlung erfolgreich"-Events einschleusen.

// Idempotenz: Stripe wiederholt Events bei Timeouts mit gleicher event.id.
// Bereits verarbeitete IDs werden gemerkt (begrenzter Puffer). Claim vor der
// Verarbeitung, Release bei Fehler — sonst würde Stripe-Retry nach einem
// fehlgeschlagenen Mailversand nichts erneut senden.
const processedEvents = new Map<string, number>(); // event.id -> timestamp
const PROCESSED_MAX = 1_000;
const PROCESSED_TTL_MS = 24 * 60 * 60 * 1_000;

function claim(eventId: string): boolean {
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

function release(eventId: string) {
  processedEvents.delete(eventId);
}

// Kunden-E-Mail aus dem PaymentIntent ziehen. Payment Links sammeln die
// Adresse des Kunden und setzen sie auf receipt_email (Standard-Verhalten,
// sofern E-Mail-Erfassung im Link aktiviert ist).
function extractCustomerEmail(paymentIntent: Stripe.PaymentIntent): string | null {
  return paymentIntent.receipt_email ?? null;
}

// Fulfillment: Bestätigung an den Kunden + interne Notiz an den Vertrieb.
// Wirft bei Sendefehler — dann antwortet der Webhook mit 500 und Stripe
// retried. MAIL_NOT_CONFIGURED wird als dauerhaft behandelt (kein Retry).
async function fulfill(paymentIntent: Stripe.PaymentIntent) {
  const email = extractCustomerEmail(paymentIntent);
  if (!email) {
    // Ohne Kunden-E-Mail ist keine direkte Zustellung möglich.
    console.warn(
      `[webhook] payment_intent.succeeded ohne Kunden-E-Mail id=${paymentIntent.id} — nur interne Notiz`,
    );
  }

  const mail = {
    to: email ?? "keine E-Mail erfasst",
    amountCents: paymentIntent.amount,
    productName: "KI-Workshop",
    customerName: undefined as string | undefined,
  };

  if (email) {
    await sendCustomerConfirmation(mail);
  }
  await sendOwnerNotification(mail);
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

  if (!claim(event.id)) {
    // Replay/Retry desselben Events — nichts doppelt verarbeiten.
    return NextResponse.json({ received: true });
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        console.info(
          `[webhook] payment_intent.succeeded id=${paymentIntent.id} amount=${paymentIntent.amount} ${paymentIntent.currency}`,
        );
        await fulfill(paymentIntent);
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
  } catch (err) {
    if (err instanceof Error && err.message === "MAIL_NOT_CONFIGURED") {
      // Fulfillment-Mail nicht eingerichtet (RESEND_API_KEY/MAIL_FROM fehlen).
      // Laut loggen, aber als verarbeitet quittieren — Stripe-Retries würden
      // an fehlender Konfiguration nichts ändern.
      console.error(
        `[webhook] Fulfillment-Mail nicht konfiguriert (event ${event.id}): RESEND_API_KEY/MAIL_FROM fehlen`,
      );
      return NextResponse.json({ received: true });
    }
    // Verarbeitung fehlgeschlagen (z. B. Mailversand): Claim freigeben, damit
    // der Stripe-Retry das Event erneut verarbeiten kann.
    release(event.id);
    console.error("[webhook] Verarbeitung fehlgeschlagen:", err);
    return NextResponse.json({ error: "processing_failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
