import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.legal.agb.metaTitle,
    robots: { index: false },
    alternates: pageAlternates(locale, "/agb"),
  };
}

export default async function AgbPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";
  const d = t.legal.agb;

  return (
    <LegalPage title={d.title}>
      <p>{d.intro}</p>

      <h2>{d.scopeH}</h2>
      <p>{d.scopeP}</p>

      <h2>{d.conclusionH}</h2>
      <p>{d.conclusionP}</p>

      <h2>{d.pricesH}</h2>
      <p>{d.pricesP}</p>

      <h2>{d.serviceH}</h2>
      <p>{d.serviceP}</p>

      <h2>{d.withdrawalH}</h2>
      <p>
        {d.withdrawalP}{" "}
        <Link href={`/${lang}/widerruf`}>{d.withdrawalLink}</Link>
      </p>

      <p>
        <em>{d.note}</em>
      </p>
    </LegalPage>
  );
}
