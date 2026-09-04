import type { Metadata } from "next";
import { brand, packages } from "@/lib/site-data";
import { ContactForm } from "@/components/contact-form";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.contact.title,
    description: t.contact.metaDescription,
    alternates: pageAlternates(locale, "/kontakt"),
  };
}

export default async function KontaktPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;

  const options = packages.map((p) => ({
    id: p.id,
    name: `${t.packages[p.id].name} — ${p.price}`,
  }));

  return (
    <main className="flex-1 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
          {t.contact.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {t.contact.intro}
        </p>

        <div className="mt-6 rounded-xl border border-line bg-surface px-5 py-4 text-sm">
          <p className="text-muted">
            {t.contact.emailLabel}{" "}
            <a
              href={`mailto:${brand.email}`}
              className="font-medium text-primary-strong hover:underline"
            >
              {brand.email}
            </a>
          </p>
        </div>

        <ContactForm options={options} t={t.contactForm} />
      </div>
    </main>
  );
}
