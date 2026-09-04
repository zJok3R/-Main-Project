import type { Metadata } from "next";
import { brand } from "@/lib/site-data";
import { CtaBand } from "@/components/cta-band";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.about.title,
    description: t.about.metaDescription,
    alternates: pageAlternates(locale, "/ueber"),
  };
}

export default async function UeberPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            {t.about.title} {brand.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.about.principlesHeading}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.about.principles.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.about.techHeading}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.about.tech.map((item) => (
              <article
                key={item.tool}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="font-semibold text-ink">{item.tool}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.rolle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t.about.ctaTitle} text={t.about.ctaText} />
    </main>
  );
}
