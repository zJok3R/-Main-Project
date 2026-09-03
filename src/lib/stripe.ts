// Server-only Stripe client. NIE in eine Client-Komponente importieren —
// STRIPE_SECRET_KEY darf den Server niemals verlassen.
import Stripe from "stripe";

let client: Stripe | null = null;

export function getStripe(): Stripe {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY fehlt — in .env setzen.");
    }
    client = new Stripe(key);
  }
  return client;
}
