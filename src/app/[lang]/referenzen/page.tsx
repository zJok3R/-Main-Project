import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.references.title,
    description: t.references.metaDescription,
    alternates: pageAlternates(locale, "/referenzen"),
  };
}

export default async function ReferenzenPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            {t.references.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {t.references.intro}
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
            <strong className="text-ink">{t.references.honestPrefix}</strong>{" "}
            {t.references.honestText}
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          {t.references.cases.map((f) => (
            <article
              key={f.branche}
              className="grid gap-6 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-3"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-strong">
                  {f.paket} · {f.dauer}
                </p>
                <h2 className="mt-2 font-semibold text-ink">{f.branche}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <strong className="text-ink">
                    {t.references.caseLabels.initial}
                  </strong>{" "}
                  {f.ausgangslage}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="text-ink">
                    {t.references.caseLabels.implementation}
                  </strong>{" "}
                  {f.umsetzung}
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-muted">
                  {f.ergebnisse.map((e) => (
                    <li key={e}>✓ {e}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title={t.references.ctaTitle} text={t.references.ctaText} />
    </main>
  );
}
