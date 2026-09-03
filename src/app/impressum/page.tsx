import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Impressum — Produkt X" };

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>

      <h2>Anbieter</h2>
      <p>
        [Vor- und Nachname]
        <br />
        [Straße Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: [Telefonnummer]
        <br />
        E-Mail: [deine@adresse.de]
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>Gemäß § 27a UStG: [DE000000000]</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>[Name, Anschrift wie oben]</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Plattform der EU zur Online-Streitbeilegung:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" rel="noopener">
          ec.europa.eu/consumers/odr
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </LegalPage>
  );
}
