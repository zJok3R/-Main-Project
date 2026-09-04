import type { Metadata } from "next";
import { brand, packages } from "@/lib/site-data";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenlosen KI-Check vereinbaren oder direkt ein Paket anfragen — Antwort in der Regel innerhalb eines Werktags.",
};

export default function KontaktPage() {
  const options = packages.map((p) => ({
    id: p.id,
    name: `${p.name} — ${p.price}`,
  }));

  return (
    <main className="flex-1 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
          Kontakt
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Für den kostenlosen KI-Check oder eine Paket-Anfrage: Formular
          ausfüllen oder direkt schreiben. Antwort in der Regel innerhalb
          eines Werktags.
        </p>

        <div className="mt-6 rounded-xl border border-line bg-surface px-5 py-4 text-sm">
          <p className="text-muted">
            E-Mail:{" "}
            <a
              href={`mailto:${brand.email}`}
              className="font-medium text-primary-strong hover:underline"
            >
              {brand.email}
            </a>
          </p>
        </div>

        <ContactForm options={options} />
      </div>
    </main>
  );
}
