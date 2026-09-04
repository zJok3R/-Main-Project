import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-16">
      <div className="w-full max-w-md text-center">
        <span
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-surface text-muted"
          aria-hidden
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2.5-3 4" />
            <path d="M12 17h.01" />
          </svg>
        </span>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-balance text-ink">
          Seite nicht gefunden
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Diese Adresse gibt es nicht — vielleicht wurde der Link geändert
          oder die Seite ist umgezogen.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-strong"
          >
            Zurück zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-line px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface"
          >
            Zum Kontakt
          </Link>
        </div>
      </div>
    </main>
  );
}
