import type { Metadata } from "next";
import Link from "next/link";
import { brand, packages } from "@/lib/site-data";
import type { LocalizedPackage } from "@/lib/site-data";
import { PriceCard } from "@/components/price-card";
import { CtaBand } from "@/components/cta-band";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: `${brand.name} — ${t.brand.tagline}`,
    description: t.brand.claim,
    alternates: pageAlternates(locale, ""),
  };
}

export default async function HomePage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";

  const featured: LocalizedPackage[] = packages
    .filter((p) => p.featured)
    .map((p) => ({ ...p, ...t.packages[p.id] }));

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary-strong">
            {t.home.kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            {t.home.titleA}
            <br />
            {t.home.titleB}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t.brand.claim}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${lang}/kontakt`}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
            >
              {t.home.ctaPrimary}
            </Link>
            <Link
              href={`/${lang}/leistungen`}
              className="rounded-full border border-line bg-canvas px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface"
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted">
            {t.home.guarantees.map((g) => (
              <li key={g}>✓ {g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.home.packagesHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t.home.packagesIntro}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <PriceCard key={p.id} pkg={p} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            <Link
              href={`/${lang}/leistungen`}
              className="font-medium text-primary-strong hover:underline"
            >
              {t.home.packagesLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.home.processHeading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="text-xs font-semibold text-primary-strong">
                  {String(i + 1).padStart(2, "0")} · {s.duration}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.home.refsHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t.home.refsIntro}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.references.cases.map((r) => (
              <div
                key={r.branche}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-strong">
                  {r.paket}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                  {r.kennzahl}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {r.kennzahlLabel}
                </p>
                <p className="mt-3 text-xs text-muted">{r.branche}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            <Link
              href={`/${lang}/referenzen`}
              className="font-medium text-primary-strong hover:underline"
            >
              {t.home.refsLink}
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title={t.home.ctaTitle} text={t.home.ctaText} />
    </main>
  );
}
