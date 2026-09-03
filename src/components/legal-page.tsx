import Link from "next/link";
import type { ReactNode } from "react";

// Geteilte Hülle für die Rechtsseiten. Macht den Platzhalter-Charakter
// unübersehbar — die Inhalte sind KEIN rechtssicherer Text.
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="flex flex-1 justify-center px-5 py-12 sm:py-16">
      <article className="legal w-full max-w-2xl">
        <Link
          href="/"
          className="text-xs font-medium text-primary-strong hover:underline"
        >
          ← Zurück zum Checkout
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink">
          {title}
        </h1>

        <div className="mt-4 rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
          <strong className="text-ink">⚠️ Platzhalter.</strong> Diese Inhalte
          sind kein rechtssicherer Text. Vor Go-Live durch einen
          Rechtstexte-Generator (z. B. eRecht24, IT-Recht-Kanzlei) oder eine
          anwaltliche Prüfung ersetzen.
        </div>

        <div className="mt-8">{children}</div>
      </article>
    </main>
  );
}
