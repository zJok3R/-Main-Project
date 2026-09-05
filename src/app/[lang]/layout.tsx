import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { CookieBanner } from "@/components/cookie-banner";
import { ThemeSync } from "@/components/theme-sync";
import { brand } from "@/lib/site-data";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale, locales } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const ogLocale = locale === "en" ? "en_US" : "de_DE";
  const title = `${brand.name} — ${t.brand.tagline}`;
  return {
    metadataBase: new URL("https://www.omnaut.de"),
    title: {
      default: title,
      template: `%s · ${brand.name}`,
    },
    description: t.brand.claim,
    openGraph: {
      type: "website",
      locale: ogLocale,
      siteName: brand.name,
      title,
      description: t.brand.claim,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}

// Theme vor dem ersten Paint setzen — verhindert hell/dunkel-Flackern.
const themeScript = `(function(){try{var t=localStorage.getItem("omnaut-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        {children}
        <Footer />
        <ThemeSync />
        <CookieBanner t={t.cookie} lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
