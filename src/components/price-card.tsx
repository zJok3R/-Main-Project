import Link from "next/link";
import type { PricePackage } from "@/lib/site-data";

export function PriceCard({
  pkg,
  headingLevel = "h3",
}: {
  pkg: PricePackage;
  headingLevel?: "h2" | "h3";
}) {
  const featured = Boolean(pkg.featured);
  const titleColor = featured ? "text-summary-ink" : "text-ink";
  const mutedColor = featured ? "text-summary-muted" : "text-muted";
  const buttonClass = featured
    ? "rounded-full bg-summary-ink px-5 py-2 text-sm font-medium text-summary transition-colors duration-200 hover:bg-ink hover:text-canvas"
    : "rounded-full bg-primary px-5 py-2 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong";
  const Heading = headingLevel;

  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 ${
        featured ? "summary-rail border-summary-line" : "border-line bg-surface"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <Heading className={`text-lg font-semibold ${titleColor}`}>
          {pkg.name}
        </Heading>
        <p className="shrink-0 text-right">
          <span className={`text-xl font-semibold ${titleColor}`}>
            {pkg.price}
          </span>
          {pkg.priceUnit ? (
            <span className={`block text-xs ${mutedColor}`}>
              {pkg.priceUnit}
            </span>
          ) : null}
        </p>
      </div>
      <p className={`mt-1 text-xs font-medium uppercase tracking-wide ${mutedColor}`}>
        {pkg.duration}
      </p>
      <p className={`mt-3 text-sm leading-relaxed ${titleColor}`}>{pkg.teaser}</p>
      <p className={`mt-3 text-xs ${mutedColor}`}>Für: {pkg.audience}</p>
      <ul className={`mt-4 space-y-1.5 text-sm ${mutedColor}`}>
        {pkg.includes.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <p className={`mt-4 text-xs ${mutedColor}`}>
        Nicht enthalten: {pkg.excluded.join(" · ")}
      </p>
      <div className="mt-6 pt-2">
        {pkg.buyable ? (
          <Link href="/leistungen#direkt-buchen" className={buttonClass}>
            Jetzt buchen
          </Link>
        ) : (
          <Link href="/kontakt" className={buttonClass}>
            Anfrage stellen
          </Link>
        )}
      </div>
    </article>
  );
}
