// Legal pages (Impressum, privacy, accessibility, licences). Visible text is German.
import { SITE } from "./content.mjs";

const mail = (subject, address = SITE.mail) => `<a href="mailto:${address}${subject ? "?subject=" + encodeURIComponent(subject) : ""}">${address}</a>`;
export const LEGAL_AS_OF = "22.10.2026";

// The postal address is not kept in git: the Action passes it from the repository secret IMPRESSUM_ADDRESS (one line per row).
// Locally a placeholder is used; on GitHub the build fails without it, so the Impressum is never published incomplete.
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const addressLines = (process.env.IMPRESSUM_ADDRESS ?? "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
if (!addressLines.length && process.env.GITHUB_ACTIONS) throw new Error("IMPRESSUM_ADDRESS is missing: set the repository secret before publishing.");
const ADDRESS = addressLines.length ? addressLines.map(escape).join("<br>") : "[Anschrift aus IMPRESSUM_ADDRESS]";

export const LEGAL_PAGES = {
  "/impressum/": {
    title: "Impressum",
    description: "Anbieterkennzeichnung von BlueProceedings, Bonn, nach § 5 DDG und § 18 Abs. 2 MStV.",
    html: `
<h2>Angaben gemäß § 5 DDG</h2>
<p>Xhoan Qazimi<br>BlueProceedings (Einzelunternehmen)<br>${ADDRESS}<br>Deutschland</p>
<h2>Kontakt</h2>
<p>E-Mail: ${mail()}<br>Sicherheitsmeldungen zu RiskScope: ${mail("Sicherheitsmeldung RiskScope", SITE.mailSecurity)}</p>
<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>Xhoan Qazimi, Anschrift wie oben.</p>
<h2>Verbraucherstreitbeilegung</h2>
<p>BlueProceedings ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
<h2>Hinweis zu Grundschutz++</h2>
<p>Grundschutz++ ist eine Methodik des Bundesamts für Sicherheit in der Informationstechnik (BSI). RiskScope ist ein unabhängiges Produkt von BlueProceedings und kein Angebot des BSI.</p>`,
  },
  "/datenschutz/": {
    title: "Datenschutz",
    description: "Datenschutzerklärung für blueproceedings.de: Hosting über GitHub Pages, keine Cookies, kein Tracking.",
    html: `
<p class="as-of">Stand: ${LEGAL_AS_OF}</p>
<h2>Verantwortlicher</h2>
<p>Xhoan Qazimi, BlueProceedings, Bonn. Die vollständige Anschrift steht im <a href="/impressum/">Impressum</a>. E-Mail: ${mail("Datenschutz", SITE.mailPrivacy)}.</p>
<h2>Kurz gesagt</h2>
<p>Diese Website setzt keine Cookies, verwendet kein Tracking und keine Analysewerkzeuge und lädt beim Besuch keine Inhalte von Dritten, auch keine Schriften. Verarbeitet werden nur die Daten, die beim Ausliefern einer Website technisch anfallen.</p>
<h2>Hosting über GitHub Pages</h2>
<p>Die Website wird über GitHub Pages bereitgestellt. Anbieter ist GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf einer Seite verarbeitet GitHub die IP-Adresse Ihres Geräts sowie technische Angaben wie Zeitpunkt, aufgerufene Adresse, Referrer und Browserkennung. GitHub protokolliert und speichert die IP-Adressen der Besucher von GitHub-Pages-Seiten nach eigener Angabe aus Sicherheitsgründen. Auf diese Protokolle hat BlueProceedings keinen Zugriff.</p>
<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe f DSGVO. Das berechtigte Interesse liegt in einer sicheren, stabilen und kostengünstigen Auslieferung der Website. Die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-U.S. Data Privacy Framework (Art. 45 DSGVO). GitHub ist nach eigener Angabe danach zertifiziert. Einzelheiten, auch zur Speicherdauer, finden Sie in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">Datenschutzerklärung von GitHub</a>.</p>
<h2>Gespeicherte Einstellung</h2>
<p>Wenn Sie zwischen dunkler und heller Darstellung wechseln, speichert Ihr Browser diese Wahl lokal (Local Storage). Die Angabe verlässt Ihr Gerät nicht und dient nur dazu, die von Ihnen gewählte Darstellung beizubehalten (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können sie jederzeit über die Browsereinstellungen löschen.</p>
<h2>Inhalte von GitHub und LinkedIn</h2>
<p>Angaben zu Versionen und Diskussionen sowie Community-Inhalte werden beim Erzeugen der Website von GitHub abgerufen und als Teil der Seite ausgeliefert, nicht beim Besuch. Die Beitragskarten unter „Neuigkeiten“ werden aus Dateien im Website-Repository erzeugt. Die Website bettet keine Inhalte von LinkedIn ein.</p>
<p>Links zu LinkedIn und GitHub sind einfache Verweise. Erst wenn Sie einen solchen Link anklicken, verarbeitet der jeweilige Anbieter Ihre Daten nach seinen eigenen Bestimmungen: <a href="https://de.linkedin.com/legal/privacy-policy">LinkedIn</a>, <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">GitHub</a>.</p>
<h2 id="community">Community und Einreichungen auf GitHub</h2>
<p>Diskussionen und Einreichungen im Repository ${SITE.githubOrg}/${SITE.repoCommunity} finden auf GitHub statt. Für Ihr GitHub-Konto und die Verarbeitung auf der Plattform ist GitHub verantwortlich (siehe oben). Beiträge, Benutzername und Zeitpunkt sind dort öffentlich sichtbar.</p>
<p>Reichen Sie eine Vorlage ein, verarbeitet BlueProceedings Ihren GitHub-Benutzernamen und die von Ihnen gewählte Nennung (Name, Pseudonym oder nur Benutzername), um den Beitrag zu prüfen, zu veröffentlichen und die Urheberschaft nach der Lizenz CC BY-SA 4.0 auszuweisen. Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe f DSGVO; das berechtigte Interesse liegt in einer nachvollziehbaren, lizenzgerechten Veröffentlichung. Die Angaben bleiben gespeichert, solange der Beitrag veröffentlicht ist. Auf Wunsch entfernen wir Ihre Nennung, wie es die Lizenz vorsieht, und nehmen den Beitrag aus dem aktuellen Stand. Die Versionsgeschichte des Repositorys und Kopien, die andere bereits erstellt haben, können wir nicht zurückholen.</p>
<p>Vorlagen dürfen keine personenbezogenen Daten Dritter enthalten. Die Prüfung in RiskScope und die Moderation suchen nach solchen Angaben; die Verantwortung für den Inhalt bleibt bei der einreichenden Person.</p>
<h2>Kontakt per E-Mail</h2>
<p>Wenn Sie eine E-Mail schreiben, gehen die Nachricht und ihre Anhänge in einem Mailpostfach von BlueProceedings bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, ein. Informationen zur Verarbeitung durch STRATO finden Sie in den <a href="https://www.strato.de/datenschutz/">Datenschutzhinweisen von STRATO</a>.</p>
<p>Die Verarbeitung dient der Beantwortung Ihrer Anfrage. Ist die Anfrage auf einen Vertrag gerichtet, ist Art. 6 Abs. 1 Buchstabe b DSGVO die Rechtsgrundlage, sonst Art. 6 Abs. 1 Buchstabe f DSGVO mit dem berechtigten Interesse, Anfragen sachgerecht zu beantworten. Kontakt-E-Mails werden zweimal jährlich aufgeräumt; Nachrichten, die beim Löschlauf älter als sechs Monate sind, werden gelöscht. Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
<p>Bitte senden Sie keine vertraulichen Schutzbedarfs-, Sicherheits- oder Kundendaten an die allgemeine Kontaktadresse.</p>
<h2>Produktbetrieb</h2>
<p>RiskScope wird ausschließlich auf der Infrastruktur der Anwender betrieben (On-Premises per Docker). Produktdaten werden weder auf dieser Website noch in einer Hersteller-Cloud verarbeitet.</p>
<h2>Ihre Rechte</h2>
<p>Sie können im Rahmen der gesetzlichen Voraussetzungen Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen. Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchstabe f DSGVO können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, widersprechen. Anfragen richten Sie an ${mail("Datenschutzanfrage", SITE.mailPrivacy)}.</p>
<h2>Beschwerderecht</h2>
<p>Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig am Sitz von BlueProceedings ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, <a href="https://www.ldi.nrw.de/">ldi.nrw.de</a>.</p>`,
  },
  "/barrierefreiheit/": {
    title: "Barrierefreiheit",
    description: "Erklärung zur Barrierefreiheit von blueproceedings.de: Selbstbewertung nach WCAG 2.2 Stufe AA.",
    html: `
<p class="as-of">Stand: ${LEGAL_AS_OF}</p>
<h2>Geltungsbereich und Rechtsrahmen</h2>
<p>Diese Erklärung gilt für die Website blueproceedings.de. Sie richtet sich an Organisationen und bietet weder Verträge noch Dienstleistungen für Verbraucher an. Nach unserer Einschätzung besteht deshalb keine Pflicht nach dem Barrierefreiheitsstärkungsgesetz (BFSG); BlueProceedings ist zudem ein Kleinstunternehmen. Wir richten die Website trotzdem nach den Web Content Accessibility Guidelines (WCAG) 2.2 auf Stufe AA aus und veröffentlichen diese Erklärung freiwillig.</p>
<h2>Stand der Vereinbarkeit</h2>
<p>Die Website ist nach unserer Selbstbewertung weitgehend mit WCAG 2.2 Stufe AA vereinbar. Grundlage sind eine automatische Prüfung aller Seiten mit axe-core in dunkler und heller Darstellung, eine Prüfung der Tastaturbedienung und der Darstellung bei 320 Pixel Breite. Eine Prüfung mit Screenreadern durch Betroffene und eine unabhängige Bewertung stehen aus. Die Erklärung ist keine Zertifizierung.</p>
<h2>Umgesetzt</h2>
<ul>
<li>Sprunglink zum Inhalt, Überschriftenstruktur und Landmarken</li>
<li>Vollständige Tastaturbedienung mit sichtbarem Fokus, auch für die Bereichsauswahl und die Reiter</li>
<li>Kontraste nach Stufe AA in dunkler und heller Darstellung</li>
<li>Bewegung nur, wenn das Betriebssystem keine reduzierte Bewegung verlangt</li>
<li>Alle Inhalte auch ohne JavaScript lesbar</li>
<li>Bildschirmfotos mit Textalternative, die die gezeigte Aussage beschreibt</li>
</ul>
<h2>Bekannte Einschränkungen</h2>
<ul>
<li>Die Bildschirmfotos aus RiskScope zeigen Text als Bild. Die Textalternative fasst die Aussage zusammen, gibt aber nicht jeden Eintrag wieder.</li>
<li>Verlinkte Seiten von GitHub und LinkedIn liegen nicht in unserer Verantwortung.</li>
</ul>
<h2>Barriere melden</h2>
<p>Wenn Sie auf eine Barriere stoßen, schreiben Sie bitte mit Angabe der Seite, Ihres Browsers und gegebenenfalls Ihrer assistiven Technologie an ${mail("Barriere auf blueproceedings.de", SITE.mailWebmaster)}. Wir antworten in der Regel innerhalb von zwei Wochen.</p>`,
  },
  "/lizenzen/": {
    title: "Herkunft und Lizenzen",
    description: "Herkunft der Inhalte, Lizenzen für Katalog, Community-Beiträge, Schriften und Bildschirmfotos.",
    html: `
<h2>Grundschutz++-Katalog</h2>
<p>RiskScope arbeitet mit dem Grundschutz++-Katalog, den das BSI als OSCAL-Daten im Repository <a href="https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek">BSI-Bund/Stand-der-Technik-Bibliothek</a> veröffentlicht. Der Katalog steht unter der Lizenz <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0</a>. Ausgelieferte Kataloginhalte werden mit Quelle, Stand und Änderungskennzeichnung ausgewiesen. RiskScope ist ein unabhängiges Produkt von BlueProceedings und kein Angebot des BSI.</p>
<h2>Software RiskScope</h2>
<p>Quelltext und Container erscheinen mit der ersten Version im ${SITE.firstRelease}. Die Lizenzbedingungen werden vorher veröffentlicht. Die CC-BY-SA-Lizenz des Katalogs gilt nicht für die Software selbst. Für eingesetzte Fremdkomponenten gilt jeweils deren Lizenz; sie werden mit der Version in einem Verzeichnis ausgewiesen.</p>
<h2>Community-Beiträge</h2>
<p>Beiträge im Repository <a href="https://github.com/${SITE.githubOrg}/${SITE.repoCommunity}">${SITE.githubOrg}/${SITE.repoCommunity}</a> stehen unter CC BY-SA 4.0, sofern beim Beitrag nichts anderes angegeben ist. Urheber sind die jeweils genannten Beitragenden.</p>
<h2>Bildschirmfotos</h2>
<p>Die Bildschirmfotos stammen aus der Pre-Alpha von RiskScope und zeigen ausschließlich fiktive Demo-Daten (Stadtwerke Nordstern). Ähnlichkeiten mit realen Organisationen sind nicht beabsichtigt. Der Funktionsumfang kann sich bis zur ersten Version ändern.</p>
<h2>Website</h2>
<ul>
<li>Schriften: Figtree (Erik Kennedy) und IBM Plex Sans und Mono (IBM), jeweils unter der SIL Open Font License 1.1, lokal ausgeliefert</li>
<li>Logo, Texte und Gestaltung: © BlueProceedings</li>
<li>LinkedIn, GitHub und Docker sind Marken ihrer jeweiligen Inhaber.</li>
</ul>`,
  },
};
