import type { Metadata } from "next";
import { CancelForm } from "@/components/cancel-form";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.cancel.title,
    description: t.cancel.metaDescription,
    robots: { index: false },
    alternates: pageAlternates(locale, "/kuendigung"),
  };
}

export default async function KuendigungPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;

  return (
    <main className="flex-1 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
          {t.cancel.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t.cancel.intro}
        </p>
        <CancelForm t={t.cancel} />
      </div>
    </main>
  );
}
