import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "AGB" };

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über
        die auf dieser Website angebotenen Leistungen von Omnaut (Max Gaube,
        Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de) gegenüber
        Verbrauchern und Unternehmern.
      </p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Es gelten ausschließlich diese AGB. Abweichende Bedingungen des
        Kunden werden nicht anerkannt, es sei denn, wir stimmen ihnen
        ausdrücklich schriftlich zu.
      </p>

      <h2>2. Vertragsschluss</h2>
      <p>
        Die Darstellung der Leistungen auf dieser Website stellt kein
        rechtlich bindendes Angebot dar. Mit Klick auf „Zahlungspflichtig
        bestellen“ und erfolgreicher Zahlung über Stripe kommt der Vertrag
        zustande. Du erhältst eine Bestätigung per E-Mail. Vertragssprache
        ist Deutsch.
      </p>

      <h2>3. Preise und Zahlung</h2>
      <p>
        Alle Preise verstehen sich inkl. der gesetzlichen Umsatzsteuer. Die
        Zahlung wird über Stripe abgewickelt.
      </p>

      <h2>4. Leistung / digitale Inhalte</h2>
      <p>
        Umfang und Dauer der Leistung ergeben sich aus der
        Leistungsbeschreibung des jeweils gebuchten Pakets. Digitale Inhalte
        werden nach Zahlungseingang bereitgestellt.
      </p>

      <h2>5. Widerrufsrecht</h2>
      <p>
        Es gilt die <a href="/widerruf">Widerrufsbelehrung</a>.
      </p>

      <p>
        <em>Hinweis: Vor dem Verkauf komplexer Projektleistungen empfiehlt
        sich eine anwaltliche Prüfung dieser AGB.</em>
      </p>
    </LegalPage>
  );
}
