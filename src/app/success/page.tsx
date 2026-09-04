import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect_status?: string; payment_intent?: string }>;
}) {
  const { redirect_status, payment_intent } = await searchParams;
  const succeeded = redirect_status === "succeeded";

  // Produktnamen aus dem PaymentIntent auflösen (serverseitig, aus Stripe).
  let productName: string | null = null;
  if (payment_intent) {
    try {
      const stripe = getStripe();
      const intent = await stripe.paymentIntents.retrieve(payment_intent);
      const priceId = intent.metadata?.priceId;
      if (priceId) {
        const price = await stripe.prices.retrieve(priceId, {
          expand: ["product"],
        });
        const product = price.product;
        if (
          product &&
          typeof product === "object" &&
          !("deleted" in product) &&
          product.name
        ) {
          productName = product.name;
        }
      }
    } catch {
      // Kein Fehler für den Kunden — Fallback-Text unten greift.
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-5 py-16">
      <div className="w-full max-w-md text-center">
        <span
          className={`mx-auto grid h-14 w-14 place-items-center rounded-full bg-surface ${
            succeeded ? "text-success" : "text-muted"
          }`}
          aria-hidden
        >
          {succeeded ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
          )}
        </span>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-balance text-ink">
          {succeeded ? "Zahlung erfolgreich" : "Zahlung wird bearbeitet"}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {succeeded
            ? `Danke für deinen Kauf von ${productName ?? "deinem KI-Workshop"}. Deine Zahlungsbestätigung von Stripe ist per E-Mail unterwegs.`
            : "Sobald die Zahlung bestätigt ist, erhältst du deine Bestätigung von Stripe per E-Mail."}
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-strong"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
