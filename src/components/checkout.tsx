"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

// Stripe Payment Link (gehostete Checkout-Seite). Die URL ist öffentlich —
// sie ist dafür da, an Kundinnen weitergegeben zu werden, kein Geheimnis.
// Falls der Link in Stripe neu erstellt wird: NEXT_PUBLIC_STRIPE_PAYMENT_LINK
// in .env setzen — überschreibt diesen Default. `||` statt `??`: auch ein
// leer gesetzter Env-Wert fällt auf den Default zurück.
const PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "https://buy.stripe.com/3cI7sMcUDd2l5S7aOOfw400";

// Regelbesteuert: der deutsche B2C-Bruttopreis enthält die MwSt. bereits.
const VAT_RATE = 0.19;

function formatPrice(amountCents: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amountCents / 100);
}

// MwSt-Anteil aus einem Bruttobetrag (in Cent).
function vatPortion(gross: number) {
  return Math.round(gross - gross / (1 + VAT_RATE));
}

export function Checkout({
  productName,
  amountCents,
  t,
  lang,
}: {
  productName: string;
  amountCents: number;
  t: Dictionary["checkout"];
  lang: string;
}) {
  // Pflicht-Einwilligungen (deutsches Recht):
  const [withdrawalConsent, setWithdrawalConsent] = useState(false); // § 356 V BGB
  const [termsConsent, setTermsConsent] = useState(false);

  const canSubmit = withdrawalConsent && termsConsent;
  const grossLabel = formatPrice(amountCents);
  const vatLabel = formatPrice(vatPortion(amountCents));

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    // Stripe-gehostete Checkout-Seite öffnet sich im selben Tab.
    window.location.href = PAYMENT_LINK;
  }

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
          {t.secure}
        </span>
      </header>

      <div className="panel-shadow grid overflow-hidden rounded-2xl border border-line bg-canvas md:grid-cols-[0.95fr_1.05fr]">
        {/* Bestellübersicht */}
        <aside className="summary-rail flex flex-col px-7 py-8 sm:px-9 sm:py-10">
          <p className="text-xs font-medium tracking-wide text-summary-muted uppercase">
            {t.order}
          </p>
          <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-balance text-summary-ink">
            {productName}
          </h3>
          <p className="mt-2 text-sm text-summary-muted">{t.beginNote}</p>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex items-baseline justify-between">
              <dt className="text-summary-muted">{t.subtotal}</dt>
              <dd className="text-summary-ink tabular-nums">{grossLabel}</dd>
            </div>
          </dl>

          <div className="mt-auto border-t border-summary-line pt-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-summary-ink">{t.total}</span>
              <span className="text-xl font-semibold text-summary-ink tabular-nums">
                {grossLabel}
              </span>
            </div>
            <p className="mt-1 text-right text-xs text-summary-muted">
              {vatLabel
                ? t.vatWith.replace("{vat}", vatLabel)
                : t.vatPlain}
            </p>
          </div>
        </aside>

        {/* Bezahlbereich */}
        <section className="px-7 py-8 sm:px-9 sm:py-10">
          <form onSubmit={onSubmit} className="flex h-full flex-col gap-6">
            <p className="text-sm leading-relaxed text-muted">{t.payIntro}</p>

            <div className="flex flex-col gap-3">
              <Consent checked={withdrawalConsent} onChange={setWithdrawalConsent}>
                {t.withdrawalA}{" "}
                <LegalLink href={`/${lang}/widerruf`}>
                  {t.withdrawalLink}
                </LegalLink>{" "}
                {t.withdrawalB}
              </Consent>
              <Consent checked={termsConsent} onChange={setTermsConsent}>
                {t.termsA} <LegalLink href={`/${lang}/agb`}>{t.termsLink}</LegalLink>{" "}
                {t.termsB}{" "}
                <LegalLink href={`/${lang}/datenschutz`}>
                  {t.privacyLink}
                </LegalLink>
                {t.termsC}
              </Consent>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-strong focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-55"
              >
                {t.orderButton}
              </button>
              {!canSubmit && (
                <p className="text-center text-xs font-medium text-primary-strong">
                  {t.checkHint}
                </p>
              )}
              <p className="text-center text-xs text-muted">
                {t.totalIncl.replace("{total}", grossLabel)}
              </p>
            </div>
          </form>
        </section>
      </div>

      <p className="mt-5 text-center text-xs text-muted">{t.footerNote}</p>
    </div>
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
