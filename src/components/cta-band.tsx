import Link from "next/link";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";

export async function CtaBand({
  title,
  text,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";
  const label = ctaLabel ?? t.cta.defaultLabel;
  const href = ctaHref ?? `/${lang}/kontakt`;

  return (
    <section className="summary-rail mt-16 border-y border-summary-line">
      <div className="mx-auto max-w-5xl px-5 py-12 text-center text-summary-ink">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-summary-muted">
          {text}
        </p>
        <Link
          href={href}
          className="mt-6 inline-block rounded-full bg-summary-ink px-6 py-2.5 text-sm font-medium text-summary transition-colors duration-200 hover:bg-ink hover:text-canvas"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
