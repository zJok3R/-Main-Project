import Link from "next/link";

export function CtaBand({
  title,
  text,
  ctaLabel = "Kostenlosen KI-Check vereinbaren",
  ctaHref = "/kontakt",
}: {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="summary-rail mt-16 border-y border-summary-line">
      <div className="mx-auto max-w-5xl px-5 py-12 text-center text-summary-ink">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-summary-muted">
          {text}
        </p>
        <Link
          href={ctaHref}
          className="mt-6 inline-block rounded-full bg-summary-ink px-6 py-2.5 text-sm font-medium text-summary transition-colors duration-200 hover:bg-ink hover:text-canvas"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
