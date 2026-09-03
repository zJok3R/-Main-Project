import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Datenschutzerklärung — Produkt X" };

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Diese Erklärung informiert gemäß Art. 13 DSGVO über die Verarbeitung
        personenbezogener Daten beim Besuch und beim Kauf über diese Seite.
      </p>

      <h2>Verantwortlicher</h2>
      <p>[Name, Anschrift, E-Mail — wie im Impressum].</p>

      <h2>Zahlungsabwicklung über Stripe</h2>
      <p>
        Für die Zahlungsabwicklung nutzen wir Stripe (Stripe Payments Europe,
        Ltd.). Bei einer Zahlung werden die dafür erforderlichen Daten (u. a.
        Zahlungsmittel, Betrag, Transaktionsdaten) an Stripe übermittelt und
        dort verarbeitet. Dabei kann es zu einer Übermittlung in die USA kommen.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Vertrags).
        Einzelheiten in der Datenschutzerklärung von Stripe.
      </p>

      <h2>Server-Logs &amp; Hosting</h2>
      <p>
        [Hosting-Anbieter eintragen. Beschreibung der automatisch erhobenen
        Server-Logfiles, Speicherdauer, Rechtsgrundlage Art. 6 Abs. 1 lit. f
        DSGVO.]
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein
        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
      </p>

      <p>
        <strong>Platzhalter:</strong> Vollständige Angaben (Cookies, Tracking,
        Kontaktformular, Auftragsverarbeitung etc.) über einen Generator oder
        Anwalt ergänzen.
      </p>
    </LegalPage>
  );
}
