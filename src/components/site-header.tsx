import Link from "next/link";
import { brand, mainNav } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink"
        >
          {brand.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
        >
          Kostenloser KI-Check
        </Link>
      </div>
    </header>
  );
}
