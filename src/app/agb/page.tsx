import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "AGB — Produkt X" };

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p>
        <strong>Platzhalter.</strong> AGB sind für den Verkauf an Verbraucher
        nicht zwingend, aber empfehlenswert. Über einen Generator passend zu
        deinem digitalen Produkt erstellen und hier einsetzen.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>[…]</p>

      <h2>2. Vertragsschluss</h2>
      <p>
        Mit Klick auf „Zahlungspflichtig bestellen“ gibst du ein verbindliches
        Angebot ab. [Beschreibung des Vertragsschlusses ergänzen.]
      </p>

      <h2>3. Preise und Zahlung</h2>
      <p>
        Alle Preise verstehen sich inkl. der gesetzlichen Umsatzsteuer. Die
        Zahlung wird über Stripe abgewickelt.
      </p>

      <h2>4. Leistung / digitale Inhalte</h2>
      <p>[Art und Umfang der digitalen Leistung beschreiben.]</p>

      <h2>5. Widerrufsrecht</h2>
      <p>
        Es gilt die <a href="/widerruf">Widerrufsbelehrung</a>.
      </p>
    </LegalPage>
  );
}
