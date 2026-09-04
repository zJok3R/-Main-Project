import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.process.title,
    description: t.process.metaDescription,
    alternates: pageAlternates(locale, "/prozess"),
  };
}

export default async function ProzessPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            {t.process.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {t.process.intro}
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          {t.process.steps.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-[4rem_1fr]"
            >
              <p className="text-2xl font-semibold text-primary-strong">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {s.duration}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title={t.process.ctaTitle} text={t.process.ctaText} />
    </main>
  );
}
