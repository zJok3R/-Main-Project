import type { Metadata } from "next";
import { brand } from "@/lib/site-data";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Warum Omnaut: Festpreis statt Ticket-Uhr, Produktion statt Pilot, Übergabe statt Abhängigkeit — für Unternehmen ohne eigene KI-Abteilung.",
};

const prinzipien = [
  {
    title: "Festpreis statt Ticket",
    text: "Der Preis steht vor dem ersten Arbeitstag. Das Schätzrisiko tragen wir — nicht ihr.",
  },
  {
    title: "Produktion statt Piloten",
    text: "Ein Pilot, der nie produktiv wird, ist teurer als keiner. Wir bauen bis in den Betrieb.",
  },
  {
    title: "Befähigen statt Abhängigkeit",
    text: "Dokumentation und Einweisung stecken in jedem Paket. Ihr könnt jederzeit selbst weiter — müsst aber nicht.",
  },
  {
    title: "Ehrlichkeit statt Hype",
    text: "Wenn KI bei euch nichts bringt, sagen wir es. Unser wertvollstes Gut ist euer Vertrauen, nicht das nächste Projekt.",
  },
];

const technik = [
  {
    tool: "n8n",
    rolle: "Workflow-Automation mit Self-Hosting-Option — DSGVO-freundlich, ohne Lock-in.",
  },
  {
    tool: "LangGraph + LangSmith",
    rolle: "Individuelle Agenten mit Evaluation gegen Halluzination und dokumentierter Qualitätsmessung.",
  },
  {
    tool: "Microsoft Copilot Studio",
    rolle: "Agenten direkt im M365-Umfeld — dort, wo der Mittelstand schon arbeitet.",
  },
  {
    tool: "EU-Hosting",
    rolle: "Deutsche bzw. europäische Rechenzentren sind Standard, nicht Option.",
  },
];

export default function UeberPage() {
  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            Über {brand.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Wir bauen KI für Unternehmen, die keine eigene KI-Abteilung haben:
            10 bis 250 Mitarbeitende, klare Prozesse, echte Probleme. Unser
            Versprechen: Festpreis statt Ticket-Uhr, Produktion statt Pilot,
            Übergabe statt Abhängigkeit.
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Vier Prinzipien
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {prinzipien.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Technik, die zum Mittelstand passt
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {technik.map((t) => (
              <article
                key={t.tool}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="font-semibold text-ink">{t.tool}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.rolle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Lernt uns im kostenlosen KI-Check kennen."
        text="30 Minuten, keine Verpflichtung, ehrliche Einschätzung — danach entscheidet ihr."
      />
    </main>
  );
}
