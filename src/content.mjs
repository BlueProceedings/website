// All texts and data of the website in one place. Legal texts live in legal.mjs. Visible text is German.

export const SITE = {
  url: "https://blueproceedings.de",
  name: "RiskScope",
  company: "BlueProceedings",
  linkedin: "https://www.linkedin.com/company/blueproceedings",
  githubOrg: "BlueProceedings",
  repoCode: "riskscope",
  repoCommunity: "riskscope-community",
  mail: "info@blueproceedings.de",
  mailPrivacy: "datenschutz@blueproceedings.de",
  mailSecurity: "security@blueproceedings.de",
  mailWebmaster: "webmaster@blueproceedings.de",
  firstRelease: "Januar 2027",
  founder: "Xhoan Qazimi",
};

// Prefilled email for interested parties; the subject makes the message easy to find in the inbox.
export const INTEREST_MAIL = `mailto:${SITE.mail}?subject=${encodeURIComponent("Interesse an RiskScope")}&body=${encodeURIComponent("Hallo,\n\nwir interessieren uns für RiskScope.\n\nInstitution / Branche:\nUngefähre Größe des ISMS-Teams:\nWas uns heute am meisten Arbeit macht:\n\n")}`;

// Pre-alpha test phase: eleven volunteers from the start date. The email asks for what matters for selection and feedback.
export const TEST_PHASE = {
  start: "11.11.2026",
  seats: 11,
  mail: `mailto:${SITE.mail}?subject=${encodeURIComponent("Interessiert an der Testteilnahme")}&body=${encodeURIComponent("Hallo,\n\nich möchte an der Testphase von RiskScope ab dem 11.11.2026 teilnehmen.\n\nInstitution / Branche (ohne Namen ist in Ordnung):\nMeine Rolle im ISMS:\nErfahrung mit IT-Grundschutz oder Grundschutz++:\nDocker-Umgebung zum Testen vorhanden (ja/nein):\n\nBereitschaft zur Rückmeldung:\n[ ] Ich teste in den ersten Wochen regelmäßig und melde Fehler und Unklarheiten.\n[ ] Ich nehme mir Zeit für ein kurzes Gespräch zu meinen Eindrücken.\n\nWas ich zuerst ausprobieren möchte:\n\n")}`,
};

export const github = (repo = "") => `https://github.com/${SITE.githubOrg}${repo ? "/" + repo : ""}`;

export const AREAS = [
  { title: "Kontext", why: "Wer und was wirkt auf die Institution: Grundlage für Geltungsbereich und Sicherheitsniveau.", items: ["Stakeholder", "interne und externe Faktoren", "Compliance", "Geltungsbereich"] },
  { title: "Struktur", why: "Was geschützt wird und wie es zusammenhängt.", items: ["Prozesse", "Informationen", "Komponenten", "Dienstleister", "Standorte", "Schutzbedarf"] },
  { title: "Anforderungen", why: "Der Grundschutz++-Katalog und weitere OSCAL-Kataloge, angepasst an die Institution und nachvollziehbar migriert.", items: ["Grundschutz++-Katalog", "weitere Kataloge", "Blaupausen", "Parameter", "Nachweise", "Katalog-Migration"] },
  { title: "Risiken", why: "Bewertung mit Herkunft und Historie. Auswirkungen werden über Abhängigkeiten sichtbar.", items: ["Risikoregister", "Ausbreitungsprüfung", "Risikohistorie", "Akzeptanz mit Wiedervorlage"] },
  { title: "Verantwortung", why: "Wer entscheidet, wer vertritt, und welche Freigabe vier Augen braucht.", items: ["Rollen", "RACI", "Vertretungen", "Vier-Augen-Freigaben"] },
  { title: "Überwachung", why: "Ob Maßnahmen wirken, nicht nur ob sie erledigt sind.", items: ["Kennzahlen", "Auditprogramm", "Prüfpaket", "Wirksamkeitsprüfung", "Managementbewertung"] },
  { title: "Notfall", why: "Notfallvorsorge (BCM): vorbereitet sein, bevor es ernst wird, und aus Vorfällen und Übungen lernen.", items: ["Sicherheitsvorfälle", "BIA", "Notfallorganisation", "Notfallszenarien", "Krisenläufe", "Übungen"] },
  { title: "Berichte", why: "Berichte merken, wenn sie nicht mehr stimmen, und sagen warum.", items: ["Veraltet-Warnung", "Ursachen", "Konsistenzprüfungen", "OSCAL-Export"] },
  { title: "Schneller Start", why: "Vom ersten Tag an arbeitsfähig, auch ohne Vorwissen zur neuen Methodik.", items: ["Vorlagen", "Einrichtungsassistent", "Lern-Modus"] },
];
export const AREA_START = 3;

export const TIMELINE = [
  { when: "Anfang 2026", date: "2026-01", title: "Entwicklung beginnt", text: "Von Grundschutz++ gibt es erst Umrisse." },
  { when: "Oktober 2026", date: "2026-10", title: "Pre-Alpha", text: "Feinschliff in Teilen öffentlich, Fortschritte regelmäßig auf LinkedIn.", current: true },
  { when: "27.10.2026", date: "2026-10-27", title: "BSI auf der it-sa", text: "Vorstellung von Grundschutz++ in Nürnberg." },
  { when: "11.11.2026", date: "2026-11-11", title: "Testphase", text: "Elf Freiwillige testen die Pre-Alpha und geben Rückmeldung." },
  { when: "01.01.2027", date: "2027-01-01", title: "Zertifizierbar", text: "Grundschutz++ wird laut BSI zertifizierbar." },
  { when: "Januar 2027", date: "2027-01", title: "Erste Version", text: "Geplant: Download, Quelltext und Community-Einreichungen." },
];

export const GAPS = [
  { title: "Aktualität", text: "Dass ein Konzept nach Monaten veraltet ist, wissen die meisten. NIS2, DORA und CRA landen bei kleinen Teams, oft bei einer Person.", answer: "Veraltet-Warnung mit Ursache, Arbeit verteilt auf Fachbereiche" },
  { title: "Verantwortung", text: "Sie steht im Organigramm, doch im Alltag bleibt offen, wer entscheidet. Das Vier-Augen-Prinzip gilt oft nur, bis es eilig wird.", answer: "Rollen, RACI, Vertretungen, Vier-Augen-Freigaben im Prozess" },
  { title: "Prüfung", text: "Aus „erledigt“ wird schnell „wirksam“, ohne dass jemand geprüft hat.", answer: "Wirksamkeitsprüfung, Auditprogramm, Prüfpaket" },
  { title: "Verbesserung", text: "Abweichungen und Risiken werden notiert, doch ohne Übersicht bleibt unklar, was sie für Prozesse und Systeme bedeuten.", answer: "Auswirkungen über Abhängigkeiten, Risikohistorie" },
];

// Screenshots from the pre-alpha (fictional demo data "Stadtwerke Nordstern"). w/h = file dimensions for width/height.
export const IMAGES = {
  staleReport: { src: "/images/stale-report.webp", w: 1600, h: 693, alt: "Informationsverbund Kunden- und Marktpartnerportal: Hinweis „Das Sicherheitskonzept (Bericht) ist veraltet“, letzter Stand vom 30.09.2026. Je geänderter Bereich steht, wann zuletzt geändert wurde, wie oft und von wem in welcher Rolle, etwa Risiken durch die Institutionsleitung und das Schutzbedarfsprofil durch die Informationssicherheitsbeauftragte." },
  impactGraph: { src: "/images/impact-graph.webp", w: 1600, h: 1245, alt: "Ausbreitungsprüfung als zweiseitiger Graph: in der Mitte das Startobjekt PostgreSQL-Cluster, links seine Voraussetzungen, rechts die davon abhängigen Objekte, je Spalte eine Ebene. Drei Objekte sind bestätigt, zwei veraltet, eines verworfen, eines nicht entscheidbar, acht noch zu prüfen. Eine Legende erklärt die Randformen." },
  crisisRun: { src: "/images/crisis-run.webp", w: 1600, h: 915, alt: "Verfahrensvergleich eines Übungslaufs: bester Plan mit 1.027.530 Euro Gesamtverlust im Planungszeitraum, verglichen mit 3.531.600 Euro, wenn kein betroffener Prozess im Planungszeitraum wieder anliefe. Drei verschiedene Ergebnisse aus fünf Verfahren (Greedy, Branch-and-Bound, Priority Rule, Parallel SGS, MTPD-gewichtete Priority Rule) mit Abstand zum besten Plan." },
  informationDomainTemplates: { src: "/images/information-domain-templates.webp", w: 1600, h: 1422, alt: "Übersicht der Informationsverbundvorlagen als Karten: eine schreibgeschützte BSI-Vorlage SAP HR-Management, eine lokale Ableitung und vier Referenzen der Institution für Kundenportal, Netzleitstelle, Messdatenplattform und Büro-IT, jeweils mit vier bis sechs Komponentenrollen, sieben bis dreizehn Anforderungen, Anwendung in Informationsverbünden und Freigabestatus." },
  componentSetTemplate: { src: "/images/component-set-template.webp", w: 1088, h: 1158, alt: "Freigegebene Komponentensatz-Vorlage „Virtualisierungsumgebung – Standard“ für das eigene Rechenzentrum mit Virtualisierungscluster, Speichersystem, Verwaltung der Virtualisierung und Backup-Plattform, Katalogstand und der Aktion „Anwenden vorbereiten“." },
  effectivenessCycle: { src: "/images/effectiveness-cycle.webp", w: 1600, h: 386, alt: "Prüfkreis einer Verbesserungsmaßnahme in vier Schritten: Feststellung aus dem Audit bestätigt, Maßnahme in Umsetzung und offen, Wirksamkeitsprüfung offen mit dem Hinweis „Kriterien festlegen“, Abschluss gesperrt, bis die Wirksamkeitskriterien festgelegt und gespeichert sind." },
  componentTemplates: { src: "/images/component-templates.webp", w: 1600, h: 578, alt: "Zwei freigegebene Komponentenvorlagen für virtuelle Maschinen mit Linux und Windows Server im eigenen Virtualisierungscluster, jeweils abhängig von Virtualisierungscluster und Speichersystem, mit Verantwortung und der Aktion „Aus Vorlage erstellen“." },
  exercise: { src: "/images/exercise.webp", w: 1600, h: 904, alt: "Planspiel zur Verschlüsselung der zentralen Plattformdienste: Beteiligte mit Rollen, Annahme, Sicherheits- und Abbruchbedingung, zwei Soll-Zeiten von je einer Stunde, ein Erfolgskriterium und das Szenario mit Container-Plattform und Identitätsdienst gestört sowie Datenbank-Cluster verloren." },
};

export const FEATURES = [
  {
    id: "impact-graph", kicker: "Risiken", title: "Bei einem Vorfall sehen, was mitbetroffen ist.", wide: true,
    text: "Ein Sicherheitsvorfall trifft eine Komponente. RiskScope schlägt über Abhängigkeiten und bestätigte Schnittstellen vor, was mitbetroffen sein könnte: links die Voraussetzungen, rechts die abhängigen Objekte. Erreichbar heißt nicht betroffen. Erst eine Bestätigung mit Aussage je Schutzziel macht ein Objekt zum Betroffenen.",
    points: ["Jedes Objekt mit Zustand in Wort und Randform", "Verwerfen und „nicht entscheidbar“ mit Begründung", "Bestätigte Objekte werden zu Risiken oder Teilrisiken"],
    image: "impactGraph",
  },
  {
    id: "crisis-run", kicker: "Notfall", title: "Wiederanlauf und Wiederherstellung planen, bevor es ernst wird.", wide: true,
    text: "Ausgefallene Standorte oder Objekte wählen, verfügbares Personal angeben: RiskScope plant über die Abhängigkeiten, in welcher Reihenfolge Notbetrieb und Wiederherstellung anlaufen, und vergleicht fünf etablierte Verfahren von Greedy bis Branch-and-Bound. Als Maßstab dient der Verlust, wenn im Planungszeitraum nichts wieder anliefe. Das Ergebnis ist ein Planungsvorschlag, keine Entscheidung des Krisenstabs.",
    points: ["Gesamtverlust je Verfahren und Abstand zum besten Plan", "Reihenfolge und Zeiten je Notfallprozess", "Als Übung oder echter Krisenlauf speicherbar"],
    image: "crisisRun",
  },
  {
    id: "continuity", kicker: "Notfall", title: "Notfallvorsorge auf demselben Bestand.", wide: true,
    text: "Business-Impact-Analyse, Notfallszenarien und Übungen beziehen sich auf dieselben Prozesse, Komponenten und Standorte wie das übrige ISMS. Ein Szenario hält fest, welche Objekte gestört oder verloren sind. Übungen haben Ziele, Kriterien und Sollzeiten, und was dabei auffällt, wird zur Folgearbeit.",
    points: ["Planspiel, Funktions-, Wiederherstellungs- und Kommunikationstest", "Planung, Durchführung und Abschluss als getrennte Stände", "Unveränderliche Zeitlinie und Folgearbeit nach der Übung"],
    image: "exercise",
  },
  {
    id: "effectiveness", kicker: "Überwachung", title: "Erledigt ist nicht wirksam.", wide: true,
    text: "Maßnahmen entstehen aus Risiken, Sicherheitsvorfällen, Audit-Feststellungen, Kennzahlen oder neuen Vorgaben. Abgeschlossen ist eine Maßnahme erst, wenn vorab festgelegte Kriterien geprüft sind und ein gültiger Nachweis vorliegt. Bis dahin bleibt der Abschluss gesperrt und sagt, was fehlt. Die Schließung gibt eine zweite Person frei. Im Kleinunternehmen-Modus entfällt nur die personelle Trennung, nicht die Prüfung.",
    points: ["Messbare Wirksamkeitskriterien, bevor geprüft wird", "Nur akzeptierte, gültige Nachweise schließen ab", "Aus „nicht bestanden“ entsteht die Feststellung automatisch"],
    image: "effectivenessCycle",
  },
];

// The work chain: every link knows its origin. When one changes, it becomes visible what needs reassessment.
export const CHAIN = [
  { title: "Prozesse und Informationen", text: "Was die Institution tut und welche Informationen sie dafür braucht" },
  { title: "Komponenten und Dienstleister", text: "Worauf das läuft, mit Abhängigkeiten und Schnittstellen" },
  { title: "Schutzbedarf", text: "Normal oder hoch, je Schutzziel und mit Begründung" },
  { title: "Anforderungen", text: "Aus dem Grundschutz++-Katalog und weiteren Katalogen, je Objekt und mit Herkunft" },
  { title: "Risiken", text: "Bewertet, behandelt, akzeptiert mit Wiedervorlage" },
  { title: "Maßnahmen", text: "Mit Verantwortung, Frist und Meilensteinen" },
  { title: "Nachweise", text: "Geprüft, versioniert und mit Ablaufdatum" },
  { title: "Wirksamkeit", text: "Gegen Kriterien geprüft, nicht nur abgehakt" },
  { title: "Freigabe", text: "Mit vier Augen, Person, Rolle und Zeitpunkt" },
];

// Who works with RiskScope and what each role wants to know (guiding questions from the positioning).
export const ROLES = [
  { role: "Informationssicherheit", who: "Informationssicherheitsbeauftragte und ihr Team", question: "Wo steht unser ISMS, und was muss ich als Nächstes anstoßen?", answer: "Die Lage über alle Informationsverbünde: offene Nachweise, Fristen und Risiken, veraltete Berichte mit Ursache und Aufgaben, die bei den Verantwortlichen liegen" },
  { role: "Leitung", who: "Institutionsleitung, Geschäftsführung", question: "Welche Entscheidung braucht jetzt meine Aufmerksamkeit?", answer: "Freigaben, Risikoakzeptanz mit Wiedervorlage und eine Managementbewertung mit vorbelegten Eingaben" },
  { role: "Fachbereiche", who: "Prozess- und Objektverantwortliche", question: "Was gilt für meinen Prozess, und was ist meine Aufgabe?", answer: "Eigene Aufgaben statt Rundmail, jede Anforderung mit Herkunft und Bezug zum eigenen Verfahren" },
  { role: "Notfallmanagement", who: "Notfallbeauftragte, Krisenstab", question: "Welche Prozesse müssen zuerst wieder laufen, und was brauchen sie dafür?", answer: "BIA mit Wiederanlaufzeiten, Notfallorganisation, Szenarien, Krisenläufe und Übungen auf denselben Abhängigkeiten wie das übrige ISMS" },
  { role: "IT-Betrieb", who: "Betrieb von Systemen, Netzen und Anwendungen", question: "Welche Maßnahmen und Nachweise erwartet man von uns, und bis wann?", answer: "Zugewiesene Maßnahmen mit Frist, Nachweise mit Ablaufdatum und Komponenten mit ihren Abhängigkeiten. RiskScope selbst läuft per Docker auf eigener Infrastruktur." },
  { role: "Audit und Revision", who: "Interne Revision, Prüfende", question: "Woraus folgt diese Aussage?", answer: "Die Kette von der Anforderung bis zum Nachweis, Prüfmodus, Prüfpaket als Datei und ein Änderungsprotokoll" },
];

// FAQ. Answers only state what is true today or is named as a plan.
export const FAQ = [
  { q: "Macht mich RiskScope konform oder zertifizierungsbereit?", a: "Nein. RiskScope unterstützt die Vorbereitung: Es hält Anforderungen, Nachweise, Prüfungen und Entscheidungen nachvollziehbar zusammen. Ob eine Institution die Anforderungen erfüllt, beurteilt die prüfende Stelle." },
  { q: "Wo liegen unsere Daten?", a: "Auf eurer eigenen Infrastruktur. RiskScope läuft als Docker-Container On-Premises, die Datenbank ist verschlüsselt, und es gibt keine Hersteller-Cloud. Austausch mit Prüfenden oder der Community geschieht bewusst über Dateien, die ihr selbst exportiert und importiert." },
  { q: "Was kostet RiskScope?", a: "Die ersten zwei Jahre nach der ersten Version ist RiskScope für alle Organisationen kostenfrei. Danach wird es kostenpflichtig. Die Bedingungen werden veröffentlicht, bevor die kostenfreie Zeit endet." },
  { q: "Wann kann ich RiskScope ausprobieren?", a: "Die erste Version ist für Januar 2027 geplant, wenn Grundschutz++ laut BSI zertifizierbar wird. Den letzten Feinschliff machen wir in Teilen öffentlich: Die Beiträge auf LinkedIn zeigen laufend, was fertig wird, und Rückmeldungen fließen direkt ein. Ab dem 11.11.2026 testen elf Freiwillige die Pre-Alpha. Wer dabei sein möchte, meldet sich per E-Mail." },
  { q: "Wir arbeiten noch mit IT-Grundschutz. Passt RiskScope trotzdem?", a: "RiskScope setzt die Methodik Grundschutz++ um und arbeitet mit dem Katalog, den das BSI im OSCAL-Format auf GitHub veröffentlicht. Weitere Kataloge im OSCAL-Format lassen sich zusätzlich importieren. Für den Umstieg gibt es Vorlagen, einen Einrichtungsassistenten, der aus dem tatsächlichen Datenbestand den nächsten Schritt ableitet, und einen Lern-Modus mit eigener Übungsumgebung." },
  { q: "Wir sind ein kleines Team. Ist das nicht zu groß für uns?", a: "Gerade kleine Teams sollen die Arbeit verteilen können: Fachbereiche pflegen ihre Objekte, IT liefert Nachweise, die Leitung entscheidet. Wo es keine zweite Person gibt, lockert der Kleinunternehmen-Modus die personelle Trennung beim Vier-Augen-Prinzip, ohne die fachlichen Prüfungen abzuschalten." },
  { q: "Wie arbeiten wir mit Auditoren zusammen?", a: "Ohne Gastkonten: Ihr importiert die Erwartungsliste der prüfenden Stelle, seht die Lücken und exportiert ein Prüfpaket mit Nachweisen und Prüfsummen. Ergebnisse eines externen Audits lassen sich wieder importieren." },
  { q: "Wer steht hinter RiskScope?", a: "BlueProceedings, ein Einzelunternehmen in Bonn. RiskScope ist ein unabhängiges Projekt und wird nicht im Auftrag eines Arbeitgebers entwickelt." },
];

// Community contribution kinds. `id` is the URL anchor (German, visible), `kind` matches index.json, `how` explains the kind in RiskScope, `shareFor` lists occasions to share.
export const COMMUNITY_KINDS = [
  {
    id: "blaupausen", kind: "blueprint", name: "Blaupausen", ico: "i-layers", format: "OSCAL-Profil",
    summary: "Anforderungsauswahl für eine Art von Informationsverbund.",
    how: "Eine Blaupause ist eine wiederverwendbare Regel-Menge: Ausschlüsse mit Begründung, zusätzliche Anforderungen und Parameterwerte. Ein Informationsverbund nimmt sie als Ganzes an. Sie ist an Katalogversionen gebunden, und bei einem neuen Katalogstand zeigt RiskScope, was sich ändert. Ausgetauscht wird sie als OSCAL-Profil.",
    shareFor: [
      "Branchentypische Auswahl, etwa für Bürgerportale einer Kommune, Kundenportale von Stadtwerken oder Praxisverwaltungen",
      "Begründete Ausschlüsse, die andere nachvollziehen und übernehmen können",
      "Parameterwerte, die sich bewährt haben, zum Beispiel Prüfintervalle und Fristen",
    ],
  },
  {
    id: "informationsverbundvorlagen", kind: "information-domain-template", name: "Informationsverbundvorlagen", ico: "i-file", format: "Vorlagenpaket",
    summary: "Referenz-Sicherheitskonzept für eine Art von Informationsverbund.",
    how: "Die Vorlage legt fest, welche Komponenten und Anforderungen für eine Art von Informationsverbund relevant sind. Sie kopiert keine Komponenten und setzt keinen Umsetzungsstatus. BSI-Vorlagen bleiben schreibgeschützt, eigene Ableitungen sind möglich.",
    shareFor: [
      "Referenz für bekannte Verbünde, zum Beispiel Büro-IT mit Arbeitsplätzen und Fileserver, Abrechnung oder Kundenportal",
      "Lokale Ableitung einer BSI-Vorlage, die zu einer Branche passt",
      "Vorlagen für kleine Institutionen, die mit wenigen Komponenten auskommen",
    ],
    image: "informationDomainTemplates",
  },
  {
    id: "komponentensatzvorlagen", kind: "component-set-template", name: "Komponentensatz-Vorlagen", ico: "i-stack", format: "Vorlagenpaket",
    summary: "Ein bewährter Stack aus mehreren Komponenten.",
    how: "Ein Komponentensatz ist ein Schnappschuss mehrerer Komponenten, etwa eine Virtualisierungsumgebung mit Hosts, Verwaltung, Speicher und Sicherung oder ein Internetportal mit zentraler Anmeldung, WAF und Datenbank. Anwenden erzeugt neue, unabhängige Komponenten. Freigegebene Vorlagen können neuen Anforderungszeilen einen nachvollziehbaren Startstatus mitgeben.",
    shareFor: [
      "Virtualisierungsumgebung im eigenen Rechenzentrum",
      "Standard-Stack für Portale mit externem Zugriff",
      "Fachverfahren mit Datenbank, Dateiablage und Sicherung",
    ],
    image: "componentSetTemplate",
  },
  {
    id: "komponentenvorlagen", kind: "component-template", name: "Komponentenvorlagen", ico: "i-box", format: "Vorlagenpaket",
    summary: "Eine wiederverwendbare Komponente mit Vorbelegungen.",
    how: "Der typische Fall ist die virtuelle Maschine im eigenen Virtualisierungscluster: Eine Komponentenvorlage enthält Beschreibung, Kategorie, Abhängigkeiten, Betriebsmodell und Statusvorbelegungen. Name und Standort werden beim Anlegen bewusst neu festgelegt. Dienstleister erscheinen nur als Archetyp, nie mit Namen.",
    shareFor: [
      "Virtuelle Maschine mit Linux oder Windows Server, gehärtet, gesichert und überwacht",
      "Firewall-Cluster, Mail-Gateway, Identitätsdienst",
      "Typische Cloud-Dienste mit klarer Aufteilung der Verantwortung",
    ],
    image: "componentTemplates",
  },
  {
    id: "berichtsvorlagen", kind: "report-template", name: "Berichtsvorlagen", ico: "i-report", format: "Dokument",
    summary: "Gliederungen und Textbausteine für wiederkehrende Berichte.",
    how: "RiskScope erzeugt Gesamtbericht, Sicherheitskonzept, Prüfpaket und OSCAL-Exporte aus den Daten. Was darüber hinaus berichtet wird, etwa die Managementbewertung oder ein Quartalsbericht an die Leitung, lässt sich als Vorlage teilen.",
    shareFor: [
      "Managementbewertung auf wenigen Seiten",
      "Quartalsbericht zur Sicherheitslage für die Leitung",
      "Gliederung für das interne Audit",
    ],
  },
  {
    id: "erfahrungen", kind: "experience", name: "Erfahrungen", ico: "i-chat", format: "Diskussion",
    summary: "Was funktioniert hat und was nicht.",
    how: "Erfahrungen gehören in die Diskussionen: Umstellung auf Grundschutz++, Schutzbedarf mit Fachbereichen erheben, vier Augen im kleinen Team. Fragen zur Methodik und Wünsche für Vorlagen haben eigene Kategorien.",
    shareFor: [
      "Womit ihr bei der Umstellung auf Grundschutz++ angefangen habt",
      "Wie ihr Fachbereiche zur Pflege ihrer Objekte gebracht habt",
      "Vier Augen ohne zweite Sicherheitsrolle",
    ],
  },
];

export const SUBMISSION_STEPS = [
  { title: "Lokal freigeben", text: "Nur eine mit vier Augen freigegebene Version einer Vorlage kann eingereicht werden." },
  { title: "Redaktion prüfen", text: "Der Assistent sucht in Freitexten nach Namen, Kontaktdaten, IP-Adressen, Hostnamen und Geheimnissen. Jede Fundstelle braucht eine Entscheidung." },
  { title: "Paket erzeugen", text: "Mit Lizenz, Rechteerklärung und vier Bestätigungen entsteht ein Einreichungspaket samt maschinenlesbarem Prüfbericht." },
  { title: "Moderation", text: "Die Einreichung läuft als Pull Request im Community-Repository auf GitHub. Die Moderation prüft Inhalt, Rechte und Sicherheit nach bestem Wissen und Gewissen." },
  { title: "Signiert veröffentlichen", text: "Angenommene Pakete werden signiert, damit ihre Herkunft nachvollziehbar ist. Beim Import entsteht immer ein lokaler Entwurf, den du selbst prüfst und freigibst." },
];

// Responsibility: moderation checks in good faith; submitters answer for content, importers for use.
export const LIABILITY = "Auch eine sorgfältige Moderation kann Fehler nicht ausschließen. Jede Vorlage ist eine lesbare Textdatei, die du vor dem Import vollständig ansehen kannst. Der Import erzeugt nur einen lokalen Entwurf, den du selbst prüfst und freigibst. Für den Inhalt einer Einreichung ist verantwortlich, wer sie einreicht; ob eine Vorlage zur eigenen Institution passt, entscheidet, wer sie importiert. BlueProceedings stellt die Vorlagen unentgeltlich und ohne Gewähr bereit.";

// What happens to personal data when submitting via GitHub. Legal bases are in the privacy policy.
export const SUBMISSION_PRIVACY = [
  { title: "Öffentlich über GitHub", text: "Einreichungen laufen als Pull Request. Dafür brauchst du ein GitHub-Konto; Benutzername, Zeitpunkt und Beitrag sind öffentlich sichtbar. Für dein Konto ist GitHub verantwortlich." },
  { title: "Nennung nach deiner Wahl", text: "CC BY-SA 4.0 sieht eine Nennung vor. Du entscheidest, ob dein Name, ein Pseudonym oder nur dein GitHub-Benutzername erscheint, und kannst die Nennung später entfernen lassen." },
  { title: "Keine Daten Dritter", text: "Vorlagen enthalten keine Namen, Kontaktdaten oder Angaben, die auf Personen oder deine Institution schließen lassen. Wer für eine Institution einreicht, klärt vorher, ob die Vorlage geteilt werden darf." },
  { title: "Rücknahme mit Grenzen", text: "Auf Wunsch nehmen wir einen Beitrag aus dem aktuellen Stand. Die Lizenz lässt sich nicht widerrufen, und die Versionsgeschichte sowie bereits erstellte Kopien bleiben bestehen. Prüfe deshalb vor dem Einreichen, was du teilst." },
];

export const DISCUSSION_CATEGORIES = ["Ankündigungen", "Erfahrungen", "Fragen zur Methodik", "Ideen und Wünsche", "Vorlagen-Wünsche"];

export const INDEPENDENCE = "RiskScope ist ein unabhängiges Projekt und macht keine Aussage über Zertifizierung oder Konformität. Es unterstützt die Vorbereitung.";
