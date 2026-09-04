// Locale-Weiterleitung: Pfade ohne Sprach-Präfix (z. B. /, /leistungen,
// /success aus Stripe-Redirects) landen auf /de/… bzw. /en/….
// Sprache wird verhandelt: omnaut-lang-Cookie → Accept-Language → Deutsch.
// Pfade mit gültigem Präfix (/de, /en) laufen unverändert durch.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "omnaut-lang";

function negotiateLocale(request: NextRequest): "de" | "en" {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie === "de" || cookie === "en") return cookie;
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  if (preferred.startsWith("en")) return "en";
  return "de";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (first === "de" || first === "en") return NextResponse.next();

  const locale = negotiateLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, { status: 308 });
}

// Läuft auf allen Pfaden außer API, internen Routen und Dateien mit Endung.
export const config = {
  matcher: ["/((?!api|_next|.*\\.[A-Za-z0-9]+).*)"],
};
