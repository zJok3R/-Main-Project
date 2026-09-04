import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>

      <h2>Anbieter</h2>
      <p>
        Max Gaube
        <br />
        Omnaut (Einzelunternehmen)
        <br />
        Bonhoefferplatz 24
        <br />
        01157 Dresden
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:kontakt@omnaut.de">kontakt@omnaut.de</a>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Max Gaube, Anschrift wie oben</p>

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
