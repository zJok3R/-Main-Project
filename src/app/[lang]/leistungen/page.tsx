import type { Metadata } from "next";
import { packages } from "@/lib/site-data";
import type { LocalizedPackage } from "@/lib/site-data";
import { PriceCard } from "@/components/price-card";
import { Checkout } from "@/components/checkout";
import { CtaBand } from "@/components/cta-band";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.packagesPage.title,
    description: t.packagesPage.metaDescription,
    alternates: pageAlternates(locale, "/leistungen"),
  };
}

export default async function LeistungenPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";

  const all: LocalizedPackage[] = packages.map((p) => ({
    ...p,
    ...t.packages[p.id],
  }));
  const workshop = all.find((p) => p.id === "ki-workshop");

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            {t.packagesPage.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {t.packagesPage.intro}
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {all.map((p) => (
            <PriceCard key={p.id} pkg={p} headingLevel="h2" />
          ))}
        </div>
      </section>

      <section id="direkt-buchen" className="px-5 py-12 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.packagesPage.bookHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t.packagesPage.bookIntro}
          </p>
          <div className="mt-8">
            <Checkout
              productName={workshop?.name ?? t.packages["ki-workshop"].name}
              amountCents={workshop?.priceCents ?? 290000}
              t={t.checkout}
              lang={lang}
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            {t.packagesPage.faqHeading}
          </h2>
          <div className="mt-6 grid gap-3">
            {t.faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-line bg-surface px-5 py-4"
              >
                <summary className="cursor-pointer text-sm font-medium text-ink">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t.packagesPage.ctaTitle} text={t.packagesPage.ctaText} />
    </main>
  );
}
