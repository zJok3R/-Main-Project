"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

// Regelbesteuert: der deutsche B2C-Bruttopreis enthält die MwSt. bereits.
const VAT_RATE = 0.19;

// Stripe-Appearance an die Marke angelehnt (Schwarz/Gelb). Greift, sobald ein
// Preis hinterlegt ist und das PaymentElement mountet.
const appearance = {
  theme: "stripe" as const,
  variables: {
    colorPrimary: "#E8C200",
    colorText: "#0A0A0A",
    colorDanger: "#c0392f",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    borderRadius: "10px",
    spacingUnit: "4px",
  },
};

type CheckoutData = {
  clientSecret: string;
  amount: number;
  currency: string;
  productName: string | null;
};

type Status = "loading" | "ready" | "not_configured" | "error";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

// MwSt-Anteil aus einem Bruttobetrag (in Cent).
function vatPortion(gross: number) {
  return Math.round(gross - gross / (1 + VAT_RATE));
}

export function Checkout({ productName }: { productName: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<CheckoutData | null>(null);
  // Einmalige ID pro Seitenaufruf: dient dem Server als Stripe-Idempotenz-Key,
  // damit Retries/Doppelklicks keinen zweiten PaymentIntent erzeugen.
  // Lazy erzeugt (nicht während des Renders — React-Purity-Regel).
  const checkoutIdRef = useRef<string | null>(null);
  function getCheckoutId(): string {
    if (checkoutIdRef.current === null) {
      checkoutIdRef.current =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    return checkoutIdRef.current;
  }

  const load = useCallback(() => {
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checkoutId: getCheckoutId() }),
    })
      .then(async (res) => {
        if (res.status === 503) {
          setStatus("not_configured");
          return;
        }
        if (!res.ok) {
          setStatus("error");
          return;
        }
        setData((await res.json()) as CheckoutData);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const priced = status === "ready" && data ? data : null;
  const displayName = data?.productName ?? productName;
  const grossLabel = priced ? formatPrice(priced.amount, priced.currency) : null;
  const vatLabel = priced
    ? formatPrice(vatPortion(priced.amount), priced.currency)
    : null;

  return (
    <div className="w-full max-w-4xl">
      <header className="mb-7 flex items-center gap-2.5">
        <span
          className="inline-grid h-7 w-7 place-items-center rounded-lg bg-primary text-sm font-bold text-on-primary"
          aria-hidden
        >
          X
        </span>
        <span className="text-sm font-medium tracking-tight text-ink">
          Sichere Bezahlung
        </span>
      </header>

      <div className="panel-shadow grid overflow-hidden rounded-2xl border border-line bg-canvas md:grid-cols-[0.95fr_1.05fr]">
        {/* Bestellübersicht — committed honey rail */}
        <aside className="summary-rail flex flex-col px-7 py-8 sm:px-9 sm:py-10">
          <p className="text-xs font-medium tracking-wide text-summary-muted uppercase">
            Deine Bestellung
          </p>
          <h1 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-balance text-summary-ink">
            {displayName}
          </h1>
          <p className="mt-2 text-sm text-summary-muted">
            Digitaler Zugang · sofort nach Zahlung
          </p>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex items-baseline justify-between">
              <dt className="text-summary-muted">Zwischensumme</dt>
              <dd className="text-summary-ink tabular-nums">
                {grossLabel ?? (
                  <span className="text-summary-muted">Preis folgt</span>
                )}
              </dd>
            </div>
          </dl>

          <div className="mt-auto border-t border-summary-line pt-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-summary-ink">Gesamt</span>
              <span className="text-xl font-semibold text-summary-ink tabular-nums">
                {grossLabel ?? "—"}
              </span>
            </div>
            <p className="mt-1 text-right text-xs text-summary-muted">
              {vatLabel
                ? `inkl. 19% MwSt. (${vatLabel})`
                : "inkl. gesetzl. MwSt."}
            </p>
          </div>
        </aside>

        {/* Bezahlbereich */}
        <section className="px-7 py-8 sm:px-9 sm:py-10">
          {status === "loading" && <PaymentSkeleton />}
          {status === "not_configured" && (
            <AwaitingPrice productName={productName} />
          )}
          {status === "error" && (
            <CheckoutError
              onRetry={() => {
                setStatus("loading");
                load();
              }}
            />
          )}
          {priced && stripePromise && (
            <Elements
              stripe={stripePromise}
              options={{ clientSecret: priced.clientSecret, appearance }}
            >
              <PayForm amountLabel={grossLabel ?? ""} />
            </Elements>
          )}
        </section>
      </div>

      <p className="mt-5 text-center text-xs text-muted">
        Zahlungen werden sicher über Stripe abgewickelt. Wir speichern keine
        Kartendaten.
      </p>
    </div>
  );
}

function PayForm({ amountLabel }: { amountLabel: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Pflicht-Einwilligungen (deutsches Recht):
  const [withdrawalConsent, setWithdrawalConsent] = useState(false); // § 356 V BGB
  const [termsConsent, setTermsConsent] = useState(false);

  const canSubmit = !!stripe && !submitting && withdrawalConsent && termsConsent;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!stripe || !elements || !withdrawalConsent || !termsConsent) return;

    setSubmitting(true);
    setError(null);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    // Hierhin kommt der Code nur bei einem sofortigen Fehler — sonst leitet
    // Stripe zur return_url weiter.
    if (stripeError) {
      setError(
        stripeError.message ?? "Zahlung fehlgeschlagen. Bitte erneut versuchen.",
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <PaymentElement />

      <div className="flex flex-col gap-3">
        <Consent checked={withdrawalConsent} onChange={setWithdrawalConsent}>
          Ich verlange ausdrücklich, dass mit der Ausführung sofort begonnen
          wird, und mir ist bekannt, dass mein{" "}
          <LegalLink href="/widerruf">Widerrufsrecht</LegalLink> mit Beginn der
          Ausführung erlischt.
        </Consent>
        <Consent checked={termsConsent} onChange={setTermsConsent}>
          Ich akzeptiere die <LegalLink href="/agb">AGB</LegalLink> und habe die{" "}
          <LegalLink href="/datenschutz">Datenschutzerklärung</LegalLink>{" "}
          gelesen.
        </Consent>
      </div>

      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-strong focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-55"
        >
          {submitting ? "Wird verarbeitet…" : "Zahlungspflichtig bestellen"}
        </button>
        {amountLabel && (
          <p className="text-center text-xs text-muted">
            Gesamtbetrag {amountLabel} inkl. MwSt.
          </p>
        )}
      </div>
    </form>
  );
}

function Consent({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        required
        className="consent-check mt-0.5 h-4 w-4 shrink-0"
      />
      <span>{children}</span>
    </label>
  );
}

function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="font-medium text-ink underline underline-offset-2 hover:opacity-70"
    >
      {children}
    </Link>
  );
}

function PaymentSkeleton() {
  return (
    <div
      className="flex flex-col gap-4"
      aria-busy="true"
      aria-label="Bezahlfeld wird geladen"
    >
      <div className="skeleton h-11 rounded-lg" />
      <div className="skeleton h-11 rounded-lg" />
      <div className="grid grid-cols-2 gap-4">
        <div className="skeleton h-11 rounded-lg" />
        <div className="skeleton h-11 rounded-lg" />
      </div>
      <div className="skeleton mt-2 h-12 rounded-xl" />
    </div>
  );
}

function AwaitingPrice({ productName }: { productName: string }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-3 py-2">
      <span
        className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-primary-strong"
        aria-hidden
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </span>
      <h2 className="text-base font-semibold text-ink">
        Bezahlfeld wird vorbereitet
      </h2>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        Sobald ein Preis für{" "}
        <span className="font-medium text-ink">{productName}</span> hinterlegt
        ist, erscheint hier das Stripe-Bezahlfeld. Setze dafür{" "}
        <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.8em] text-ink">
          STRIPE_PRICE_ID
        </code>{" "}
        in der{" "}
        <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.8em] text-ink">
          .env
        </code>
        .
      </p>
    </div>
  );
}

function CheckoutError({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="flex h-full flex-col items-start justify-center gap-3 py-2"
      role="alert"
    >
      <h2 className="text-base font-semibold text-ink">
        Etwas ist schiefgelaufen
      </h2>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        Das Bezahlfeld konnte nicht geladen werden. Bitte prüfe deine Verbindung
        und versuche es erneut.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-1 inline-flex h-10 items-center rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
      >
        Erneut versuchen
      </button>
    </div>
  );
}
