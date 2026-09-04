import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Diese Erklärung informiert gemäß Art. 13 DSGVO über die Verarbeitung
        personenbezogener Daten beim Besuch dieser Website und bei der
        Nutzung der angebotenen Leistungen.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        Max Gaube
        <br />
        Omnaut (Einzelunternehmen)
        <br />
        Bonhoefferplatz 24, 01157 Dresden
        <br />
        E-Mail: kontakt@omnaut.de
      </p>

      <h2>Hosting (Vercel)</h2>
      <p>
        Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
        91789, USA, gehostet (Serverstandort EU, Region Frankfurt). Beim Aufruf
        der Seite verarbeitet Vercel in unserem Auftrag technische
        Zugriffsdaten (u. a. IP-Adresse, Browsertyp, Datum und Uhrzeit des
        Zugriffs) in Server-Logfiles. Die Verarbeitung erfolgt auf Grundlage
        von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
        sicheren und stabilen Betrieb). Mit Vercel besteht ein
        Auftragsverarbeitungsvertrag; Vercel ist unter dem EU-U.S. Data Privacy
        Framework zertifiziert.
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Das Kontaktformular öffnet dein E-Mail-Programm mit einer
        vorausgefüllten Nachricht. Deine Angaben werden dabei nicht über
        unsere Server geleitet; verarbeitet werden sie erst, wenn du die
        E-Mail absendest und sie uns erreicht. Rechtsgrundlage ist Art. 6 Abs.
        1 lit. b DSGVO (Anbahnung/Vertrag) bzw. lit. f DSGVO (Bearbeitung
        deiner Anfrage). Wir löschen die Daten, sobald deine Anfrage
        abschließend bearbeitet ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>Zahlungsabwicklung über Stripe</h2>
      <p>
        Für die Zahlungsabwicklung nutzen wir Stripe (Stripe Payments Europe,
        Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland).
        Bei einer Zahlung werden die dafür erforderlichen Daten (u. a.
        Zahlungsmittel, Betrag, Transaktionsdaten) direkt über ein
        eingebettetes Stripe-Bezahlfeld an Stripe übermittelt und dort
        verarbeitet — die Kartendaten erreichen unsere Server nicht. Dabei
        kann es zu einer Übermittlung in die USA kommen; Stripe ist unter dem
        EU-U.S. Data Privacy Framework zertifiziert. Auf den Bezahlseiten
        setzt Stripe technisch notwendige Cookies (z. B. zur
        Betrugsprävention und zur Sitzungssteuerung). Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Vertrags). Einzelheiten in
        der Datenschutzerklärung von Stripe: https://stripe.com/de/privacy.
      </p>

      <h2>Zahlungsstatus (Webhook)</h2>
      <p>
        Zur Abwicklung deiner Bestellung verarbeitet Stripe in unserem
        Auftrag Zahlungsstatus-Ereignisse (z. B. „Zahlung erfolgreich“).
        Verarbeitet werden dabei Transaktionsdaten wie Zahlungsbetrag,
        Zeitpunkt und Status. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>Cookies</h2>
      <p>
        Diese Website setzt selbst keine Tracking- oder Analyse-Cookies.
        Technisch notwendige Cookies können im Rahmen der Zahlungsabwicklung
        durch Stripe gesetzt werden (siehe oben). Ein Cookie-Banner ist daher
        nicht erforderlich.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden gelöscht, sobald der Zweck der
        Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten
        (insbesondere handels- und steuerrechtliche, § 147 AO, § 257 HGB)
        entgegenstehen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die
        Verarbeitung. Zur Ausübung genügt eine E-Mail an kontakt@omnaut.de.
        Zudem hast du ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde (zuständig für uns: der Sächsische
        Datenschutzbeauftragte).
      </p>
    </LegalPage>
  );
}
