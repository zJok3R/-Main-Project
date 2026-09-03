import Link from "next/link";
import { brand, mainNav } from "@/lib/site-data";

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/widerruf", label: "Widerrufsbelehrung" },
  { href: "/agb", label: "AGB" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-canvas px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted">
          {legalLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted">
          © {year} · {brand.name} · Alle Preise inkl. MwSt.
        </p>
      </div>
    </footer>
  );
}
