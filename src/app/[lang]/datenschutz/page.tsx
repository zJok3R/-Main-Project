import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.legal.datenschutz.metaTitle,
    robots: { index: false },
    alternates: pageAlternates(locale, "/datenschutz"),
  };
}

export default async function DatenschutzPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const d = t.legal.datenschutz;

  return (
    <LegalPage title={d.title}>
      <p>{d.intro}</p>

      <h2>{d.controllerH}</h2>
      <p>
        {d.controllerLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <h2>{d.hostingH}</h2>
      <p>{d.hostingP}</p>

      <h2>{d.contactH}</h2>
      <p>{d.contactP}</p>

      <h2>{d.stripeH}</h2>
      <p>{d.stripeP}</p>

      <h2>{d.webhookH}</h2>
      <p>{d.webhookP}</p>

      <h2>{d.resendH}</h2>
      <p>{d.resendP}</p>

      <h2>{d.cookiesH}</h2>
      <p>{d.cookiesP}</p>
      <p>
        <strong>{d.cookiesEssential.strong}</strong> {d.cookiesEssential.rest}
      </p>
      <p>
        <strong>{d.cookiesStats.strong}</strong> {d.cookiesStats.rest}
      </p>

      <h2>{d.retentionH}</h2>
      <p>{d.retentionP}</p>

      <h2>{d.rightsH}</h2>
      <p>{d.rightsP}</p>
    </LegalPage>
  );
}
