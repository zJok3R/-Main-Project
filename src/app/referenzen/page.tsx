import type { Metadata } from "next";
import { brand } from "@/lib/site-data";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Beispiel-Projekte aus typischen Mittelstands-Konstellationen: Workflow-Automation, RAG-Wissensbasis, KI-Chatbot — mit messbaren Ergebnissen.",
};

// Ehrlichkeits-Regel dieser Seite: Wir sind eine junge Agentur. Die Fälle
// unten sind daher klar gekennzeichnete Beispielrechnungen (illustrativ) —
// Struktur, Vorgehen und Zahlenrahmen aus typischen Mittelstandsprojekten.
const faelle = [
  {
    branche: "Produktionsunternehmen, 120 Mitarbeitende",
    paket: "RAG / Knowledge-Agent",
    ausgangslage:
      "Handbücher, Wikis und ERP-Notizen auf fünf Systeme verteilt — Antworten auf Fachfragen dauern Tage.",
    umsetzung:
      "Datenaufbereitung aus fünf Quellen, Retrieval-Pipeline mit Quellenangabe, Rollenrechte für Produktion und Vertrieb.",
    ergebnisse: [
      "Suchzeit von 45 auf 12 Minuten pro Tag und Kopf",
      "Auskunftsfähigkeit ohne Störung von Fachexperten",
    ],
    dauer: "5 Wochen",
  },
  {
    branche: "Handelsbüro, 25 Mitarbeitende",
    paket: "Workflow-Automation",
    ausgangslage:
      "Anfragen, Rechnungen und E-Mail-Sortierung manuell — drei Kollegen, neun Stunden pro Woche.",
    umsetzung:
      "Drei n8n-Workflows: Anfrage → CRM, Rechnung → Buchhaltung, E-Mail-Triage mit KI-Klassifikation.",
    ergebnisse: [
      "9 Stunden pro Woche eingespart",
      "ROI nach unter vier Monaten",
    ],
    dauer: "3 Wochen",
  },
  {
    branche: "Dienstleister, 60 Mitarbeitende",
    paket: "KI-Chatbot",
    ausgangslage:
      "Hotline mit 200 wiederkehrenden Fragen — Kunden warten, Team blockiert.",
    umsetzung:
      "Chatbot auf Website und Teams, Wissensbasis aus 200 FAQs, DSGVO-konformes EU-Hosting, Eskalationsregeln.",
    ergebnisse: [
      "68 % der Anfragen automatisch beantwortet",
      "Hotline-Kapazität für echte Fälle frei",
    ],
    dauer: "4 Wochen",
  },
];

export default function ReferenzenPage() {
  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            Referenzen
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Messbare Ergebnisse zählen. Die folgenden Fälle zeigen Struktur,
            Vorgehen und Ergebnisrahmen typischer Projekte.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
            <strong className="text-ink">Ehrlich vorweg:</strong>{" "}
            {brand.name} ist eine junge Agentur — diese Fälle sind
            Beispielrechnungen aus typischen Mittelstandskonstellationen, keine
            echten Kundenprojekte. Dein Projekt kann das erste echte
            Referenzstück werden.
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          {faelle.map((f) => (
            <article
              key={f.branche}
              className="grid gap-6 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-3"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-strong">
                  {f.paket} · {f.dauer}
                </p>
                <h2 className="mt-2 font-semibold text-ink">{f.branche}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <strong className="text-ink">Ausgangslage:</strong>{" "}
                  {f.ausgangslage}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="text-ink">Umsetzung:</strong>{" "}
                  {f.umsetzung}
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-muted">
                  {f.ergebnisse.map((e) => (
                    <li key={e}>✓ {e}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Dein Projekt als erstes echtes Referenzstück."
        text="Sprechen wir über deinen Use Case — im kostenlosen KI-Check, ohne Verpflichtung."
      />
    </main>
  );
}
