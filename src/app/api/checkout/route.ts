import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

// POST /api/checkout — erzeugt einen PaymentIntent für Produkt X.
//
// Sicherheits-Kern: Betrag UND Währung kommen aus dem Stripe-Price
// (serverseitig abgefragt), niemals aus dem Request-Body. Der Client kann
// den zu zahlenden Betrag also nicht manipulieren.

// ── Rate-Limit: pro IP max. MAX_REQUESTS Requests je Fenster ─────────────
// In-Memory-Sliding-Window. Schützt vor Intent-Spam; echtes Anti-DoS gehört
// an den Reverse-Proxy (nginx/Caddy) vor der App.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 20;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Speicher begrenzen: alte Einträge aufräumen, wenn die Map groß wird.
  if (hits.size > 10_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => t < now - WINDOW_MS)) hits.delete(key);
    }
  }
  const cutoff = now - WINDOW_MS;
  const recent = (hits.get(ip) ?? []).filter((t) => t > cutoff);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

// ── Idempotenz: Client schickt pro Seitenaufruf eine checkoutId ──────────
// Stripe dedupliziert gleiche Idempotenz-Keys (24h): doppelte Klicks und
// Netzwerk-Retries erzeugen keinen zweiten Intent.
function sanitizeIdempotencyKey(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
  return cleaned.length > 0 ? cleaned : undefined;
}

function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

export async function POST(req: Request) {
  // Rate-Limit zuerst: schützt auch den billigen Pfad vor Spam.
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const priceId = process.env.STRIPE_PRICE_ID;

  // Grundgerüst: Preis wird später eingeführt. Ohne STRIPE_PRICE_ID gibt es
  // (noch) nichts zu bezahlen — der Client zeigt dann den "awaiting price"-Zustand.
  if (!priceId) {
    return NextResponse.json({ error: "price_not_configured" }, { status: 503 });
  }

  let checkoutId: string | undefined;
  try {
    const body = await req.json().catch(() => ({}));
    checkoutId = sanitizeIdempotencyKey(body?.checkoutId);
  } catch {
    // Body optional — ohne checkoutId läuft es ohne Dedup weiter.
  }

  try {
    const stripe = getStripe();
    const price = await stripe.prices.retrieve(priceId, { expand: ["product"] });

    if (!price.active || price.unit_amount == null) {
      return NextResponse.json({ error: "price_invalid" }, { status: 422 });
    }

    const intent = await stripe.paymentIntents.create(
      {
        amount: price.unit_amount, // ← aus Stripe, nicht vom Client
        currency: price.currency, // ← aus Stripe, nicht vom Client
        automatic_payment_methods: { enabled: true },
        metadata: { priceId, checkoutId: checkoutId ?? "" },
      },
      checkoutId ? { idempotencyKey: checkoutId } : undefined,
    );

    const product =
      price.product &&
      typeof price.product === "object" &&
      !("deleted" in price.product)
        ? price.product
        : null;

    return NextResponse.json({
      clientSecret: intent.client_secret,
      amount: price.unit_amount,
      currency: price.currency,
      productName: product?.name ?? null,
    });
  } catch (err) {
    console.error("[checkout] PaymentIntent fehlgeschlagen:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
