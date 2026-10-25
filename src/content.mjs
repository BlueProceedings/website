// All texts and data of the website in one place. Legal texts live in legal.mjs. Visible text is German.

export const SITE = {
  url: "https://blueproceedings.de",
  name: "BlueProceedings ISMS",
  company: "BlueProceedings",
  linkedin: "https://www.linkedin.com/company/blueproceedings",
  kofi: "https://ko-fi.com/blueproceedings",
  githubOrg: "BlueProceedings",
  repoCode: "blueproceedings-isms",
  repoCommunity: "blueproceedings-community",
  mail: "info@blueproceedings.de",
  mailPrivacy: "datenschutz@blueproceedings.de",
  mailSecurity: "security@blueproceedings.de",
  mailWebmaster: "webmaster@blueproceedings.de",
  firstRelease: "Januar 2027",
  founder: "Xhoan Qazimi",
};

// Prefilled email for interested parties; the subject makes the message easy to find in the inbox.
export const INTEREST_MAIL = `mailto:${SITE.mail}?subject=${encodeURIComponent("Interesse an BlueProceedings ISMS")}&body=${encodeURIComponent("Hallo,\n\nwir interessieren uns für BlueProceedings ISMS.\n\nInstitution / Branche:\nUngefähre Größe des ISMS-Teams:\nWas uns heute am meisten Arbeit macht:\n\n")}`;

// Pre-alpha test phase: eleven volunteers from the start date. The email asks for what matters for selection and feedback.
export const TEST_PHASE = {
  start: "11.11.2026",
  seats: 11,
  mail: `mailto:${SITE.mail}?subject=${encodeURIComponent("Interessiert an der Testteilnahme")}&body=${encodeURIComponent("Hallo,\n\nich möchte an der Testphase von BlueProceedings ISMS ab dem 11.11.2026 teilnehmen.\n\nInstitution / Branche (ohne Namen ist in Ordnung):\nMeine Rolle im ISMS:\nErfahrung mit IT-Grundschutz oder Grundschutz++:\nDocker-Umgebung zum Testen vorhanden (ja/nein):\n\nBestätigung:\n[ ] Ich bewerbe mich als Unternehmer (§ 14 BGB) beziehungsweise für eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, nicht als Verbraucher.\n\nBereitschaft zur Rückmeldung:\n[ ] Ich teste in den ersten Wochen regelmäßig und melde Fehler und Unklarheiten.\n[ ] Ich nehme mir Zeit für ein kurzes Gespräch zu meinen Eindrücken.\n\nWas ich zuerst ausprobieren möchte:\n\n")}`,
};

// Offer is limited to businesses and public bodies; confirmed again when the licence or order is accepted.
export const B2B_HINWEIS = "Das Angebot richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen. Verträge mit Verbrauchern werden nicht geschlossen.";

// Alpha licence: no charge, one common end date for all alpha installations. A concrete date is added once the general alpha release date is fixed.
export const ALPHA_LIZENZ = "Die Alpha-Version wird mit einer unentgeltlichen Alpha-Lizenz bereitgestellt. Alle Alpha-Lizenzen enden spätestens zwei Jahre nach dem allgemeinen Veröffentlichungsdatum der Alpha; die Frist beginnt bei späterer Lizenzvergabe nicht erneut. Das konkrete Enddatum und die Lizenzbedingungen werden vor dem Download deutlich angezeigt. Für eine spätere Produktversion sind noch keine Preise oder Nutzungsbedingungen zugesagt.";
export const UNTERSTUETZUNG = "Kostenpflichtige Unterstützung kann gesondert vereinbart werden. Freiwillige Zuwendungen unterstützen die Weiterentwicklung, begründen aber keinen Anspruch auf Funktionen, Support, Verfügbarkeit oder eine bestimmte Veröffentlichung.";

// Data flow in operation: product data stays with the operator; an export is a deliberate act.
export const DATENFLUSS = "BlueProceedings ISMS wird als Docker-Container auf der Infrastruktur des Betreibers ausgeführt. Es gibt keine Hersteller-Cloud, und BlueProceedings hat keinen Zugriff auf die Produktdaten. Die Anwendung übermittelt im Standardbetrieb keine Produktdaten an BlueProceedings. Daten verlassen die Anwendung nur, wenn ein berechtigter Nutzer bewusst einen Export erzeugt und außerhalb der Anwendung weitergibt. Ab diesem Zeitpunkt verantwortet der Betreiber den Transport, die Empfänger und die weitere Aufbewahrung.";

// Crisis planning figures are a model result, not a decision. Shown at the first crisis planning view.
export const MODELLHINWEIS = "Die Berechnung ist ein modellbasierter Planungsvorschlag. Sie verwendet die im System hinterlegten Abhängigkeiten, Zeiten, Kapazitäten und Verlustannahmen. Unvollständige oder falsche Eingaben verändern das Ergebnis. Der Krisenstab prüft die tatsächliche Lage, Nebenbedingungen und Folgen und trifft die Entscheidung selbst.";

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
  { when: "11.11.2026", date: "2026-11-11", title: "Testphase", text: "Bis zu elf Personen aus der ISMS-Praxis testen die Pre-Alpha und geben Rückmeldung. Bewerbung per E-Mail, Auswahl manuell." },
  { when: "01.01.2027", date: "2027-01-01", title: "Zertifizierbar", text: "Grundschutz++ wird laut BSI zertifizierbar." },
  { when: "Januar 2027", date: "2027-01", title: "Erste Version", text: "Geplant: Download als Docker-Container und Community-Einreichungen. Termine sind Planungen, keine Zusagen." },
];

export const GAPS = [
  { title: "Aktualität", text: "Dass ein Konzept nach Monaten veraltet ist, wissen die meisten. Neue Vorgaben, neue Systeme, neue Dienstleister: Jede Änderung kann Konzept und Risikobewertung überholen, und in kleinen Teams fällt es oft niemandem auf.", answer: "Veraltet-Warnung mit Ursache, Arbeit verteilt auf Fachbereiche" },
  { title: "Verantwortung", text: "Sie steht im Organigramm, doch im Alltag bleibt offen, wer entscheidet und wer einspringt, wenn jemand fehlt. Das Vier-Augen-Prinzip gilt oft nur, bis es eilig wird.", answer: "Rollen, RACI, Vertretungsplan mit Lücken-Warnung, Vier-Augen-Freigaben im Prozess" },
  { title: "Prüfung", text: "Aus „erledigt“ wird schnell „wirksam“, ohne dass jemand geprüft hat.", answer: "Wirksamkeitsprüfung, Auditprogramm, Prüfpaket" },
  { title: "Verbesserung", text: "Abweichungen und Risiken werden notiert, doch ohne Übersicht bleibt unklar, was sie für Prozesse und Systeme bedeuten.", answer: "Auswirkungen über Abhängigkeiten, Risikohistorie" },
];

// Screenshots from the pre-alpha (fictional demo data "Stadtwerke Nordstern"). w/h = file dimensions for width/height.
export const IMAGES = {
  staleReport: { src: "/images/stale-report.webp", w: 1600, h: 693, alt: "Informationsverbund Kunden- und Marktpartnerportal: Hinweis „Das Sicherheitskonzept (Bericht) ist veraltet“, letzter Stand vom 30.09.2026. Je geänderter Bereich steht, wann zuletzt geändert wurde, wie oft und von wem in welcher Rolle, etwa Risiken durch die Institutionsleitung und das Schutzbedarfsprofil durch die Informationssicherheitsbeauftragte." },
  impactGraph: { src: "/images/impact-graph.webp", w: 1600, h: 1245, alt: "Ausbreitungsprüfung als zweiseitiger Graph: in der Mitte das Startobjekt PostgreSQL-Cluster, links seine Voraussetzungen, rechts die davon abhängigen Objekte, je Spalte eine Ebene. Drei Objekte sind bestätigt, zwei veraltet, eines verworfen, eines nicht entscheidbar, acht noch zu prüfen. Eine Legende erklärt die Randformen." },
  crisisRun: { src: "/images/crisis-run.webp", w: 1600, h: 915, alt: "Verfahrensvergleich eines Übungslaufs: bester der berechneten Planungsvorschläge mit einem modellierten Verlust von 1.027.530 Euro im Planungszeitraum, verglichen mit 3.531.600 Euro, wenn kein betroffener Prozess im Planungszeitraum wieder anliefe. Drei verschiedene Ergebnisse aus fünf implementierten Planungsverfahren (Greedy, Branch-and-Bound, Priority Rule, Parallel SGS, MTPD-gewichtete Priority Rule) mit Abstand zum besten berechneten Vorschlag." },
  informationDomainTemplates: { src: "/images/information-domain-templates.webp", w: 1600, h: 1422, alt: "Übersicht der Informationsverbundvorlagen als Karten: eine schreibgeschützte BSI-Vorlage SAP HR-Management, eine lokale Ableitung und vier Referenzen der Institution für Kundenportal, Netzleitstelle, Messdatenplattform und Büro-IT, jeweils mit vier bis sechs Komponentenrollen, sieben bis dreizehn Anforderungen, Anwendung in Informationsverbünden und Freigabestatus." },
  componentSetTemplate: { src: "/images/component-set-template.webp", w: 1088, h: 1158, alt: "Freigegebene Komponentensatz-Vorlage „Virtualisierungsumgebung – Standard“ für das eigene Rechenzentrum mit Virtualisierungscluster, Speichersystem, Verwaltung der Virtualisierung und Backup-Plattform, Katalogstand und der Aktion „Anwenden vorbereiten“." },
  effectivenessCycle: { src: "/images/effectiveness-cycle.webp", w: 1600, h: 386, alt: "Prüfkreis einer Verbesserungsmaßnahme in vier Schritten: Feststellung aus dem Audit bestätigt, Maßnahme in Umsetzung und offen, Wirksamkeitsprüfung offen mit dem Hinweis „Kriterien festlegen“, Abschluss gesperrt, bis die Wirksamkeitskriterien festgelegt und gespeichert sind." },
  componentTemplates: { src: "/images/component-templates.webp", w: 1600, h: 578, alt: "Zwei freigegebene Komponentenvorlagen für virtuelle Maschinen mit Linux und Windows Server im eigenen Virtualisierungscluster, jeweils abhängig von Virtualisierungscluster und Speichersystem, mit Verantwortung und der Aktion „Aus Vorlage erstellen“." },
  blueprintOverview: { src: "/images/blaupause-uebersicht.webp", w: 1400, h: 1850, alt: "Erste Hälfte der Übersicht der Blaupause „Kommunalverwaltung: gesamte IT in einem Informationsverbund“, Version 2, freigegeben, mit Knopf zum Exportieren. Unter dem Titel stehen, wer die Blaupause angelegt, wer die Version eingereicht und wer sie freigegeben hat, jeweils mit Rolle und Zeitpunkt. Die Kernzahl nennt 1.001 geltende Anforderungen aus zwei Katalogen, davon 40 ausgeschlossen, 2 zusätzlich aufgenommen und 7 in der Stufe angepasst. Darunter die Herleitung von 1.043 Anforderungen im Katalogumfang bis 1.001, die Verteilung nach MUSS, SOLLTE und KANN sowie Balken je Praktik und je Zielobjektkategorie." },
  blueprintRules: { src: "/images/blaupause-regeln.webp", w: 1400, h: 1668, alt: "Zweite Hälfte der Übersicht der Blaupause: die begründeten Ausschlüsse, die Ergänzungen und die in der Stufe angepassten Anforderungen, 35 festgelegte von 217 Parametern, die beiden zugrunde liegenden Kataloge, die Gruppen von Anforderungen für den schnellen Einstieg und die Versionen mit Freigabedatum." },
  reportTemplateCards: { src: "/images/berichtsvorlagen.webp", w: 1600, h: 678, alt: "Zwei Berichtsvorlagen für Audits als Karten: „Interne Systemprüfung – Kurzbericht“ mit den Abschnitten Audit-Metadaten, Anforderungsstatus je Praktik, Nachweise und Findings sowie „Auditbericht für die Leitung“ mit Audit-Metadaten, Findings, Risiken, KPI-Trends und Institutionsbranding. Je Karte lässt sich ein Audit wählen, aus dem ein PDF-Bericht entsteht." },
  reportTemplates: { src: "/images/berichte-kurzbericht.webp", w: 1272, h: 1769, alt: "Seite des PDF-Berichts „Interne Systemprüfung – Kurzbericht“ für den Netzleitstellen-Dispatch der Stadtwerke Nordstern: Zusammenfassung der Prüfenden, 87 Prozent der 30 bewerteten Prüfpunkte bestanden, ein Balken für bestanden, nicht bestanden, nicht bewertbar und offen, 32 von 32 Prüfpunkten mit wirksamem Nachweis und zwei ablaufende Nachweise, das Ergebnis je Praktik als Balken und fünf Feststellungen mit Schwere, Maßnahme, Verantwortlichen und Frist." },
  reportLeadership: { src: "/images/berichte-leitung.webp", w: 1272, h: 1769, alt: "Seite des PDF-Berichts „Auditbericht für die Leitung“ mit dem Namen der Institution im Kopf: Kernaussage in drei Sätzen, vier Kennzahlen (87 Prozent bestanden, 5 offene Feststellungen, 3 Fristen in 30 Tagen, 2 ablaufende Nachweise), 13 Risiken vor und nach Behandlung als Balken, drei Kennzahlen im Verlauf mit Zielwert, die nächsten Maßnahmen mit Frist, Verantwortlichen und einer Entscheidung der Leitung sowie Zeilen für die Kenntnisnahme." },
  planVsActual: { src: "/images/plan-vs-actual.webp", w: 1600, h: 2265, alt: "Plan und Ist einer laufenden Funktionsübung „Löschgasauslösung im Rechenzentrum Nord“ fünfeinhalb Stunden nach Beginn: Je Zeile oben der Plan als graue Spur, darunter das Ist; schraffiert ist der Verzug. Acht von zehn begonnenen Schritten laufen später, einer früher als geplant. Die Schritte stehen in Bahnen je Team mit verantwortlicher Rolle, etwa IT-Betrieb, Netzwerk und Firewall oder Datenbankadministration; ein Versuch ist gescheitert, die rechnerische Fortschreibung für die Leitstellen-Plattform liegt dreieinhalb Stunden hinter dem Plan. Darunter stehen die Prozesse mit Frist: Das Notfall-Störungsmanagement Erdgas hat seine Frist von vier Stunden überschritten, beim Netzleitstellen-Dispatch weist die Fortschreibung auf eine mögliche Überschreitung hin. Je Prozess zeigt eine Kette, ob der Krisenstab informiert wurde und ob er die Verantwortlichen informiert hat; eine Information ist überfällig." },
  incidentTimeline: { src: "/images/incident-timeline.webp", w: 1600, h: 2544, alt: "Zeitlinie eines Sicherheitsfalls, der gezielten Phishing-Kampagne gegen den Kundenservice: 49 Ereignisse von vier handelnden Personen, von der ersten Mail um 07:42 Uhr bis zum betrieblich gelösten Fall nach 7:38 Stunden. Senkrechte Zeitleiste mit Uhrzeit, Zeit seit Beginn, Ereignisgruppe, handelnder Person und Rolle. Sichtbar sind Feststellung, Klassifikation, Schweregrad, eine Hypothese, die später durch eine Korrektur ersetzt wird, Eindämmung, Notfallentscheidung und Kommunikationsentscheidungen." },
  riskPath: { src: "/images/risikoweg.webp", w: 1600, h: 1037, alt: "Risikoseite zu einem Risiko im Kunden- und Marktpartnerportal: „Ein entwendetes Datenbank-Volume oder Sicherungsmedium legt Kundenstammdaten im Klartext offen.“ In vier Stationen von links nach rechts: 1 Ursache, die nicht umgesetzte Anforderung KONF.3.2 Speicherverschlüsselung; 2 Risiko, Eintritt mittel, Auswirkung hoch, inhärent hoch; 3 Behandlung Mindern mit der Maßnahme „Volume-Verschlüsselung für Datenbank und Sicherungen einführen“, in Umsetzung, zwei von vier Schritten, IT-Betrieb, bis 18.12.2026; 4 Restrisiko gering nach Umsetzung, akzeptiert durch den Risikoeigentümer, nächste Prüfung 15.02.2027. Darunter eine Skala von Gering bis Kritisch mit den Marken vorher (Hoch) und nachher (Gering) und die vier Schritte der Minderung mit Termin, zwei davon erledigt." },
  riskFile: { src: "/images/risikoakte.webp", w: 1600, h: 1340, alt: "Risikoakte, Reiter Überblick, in zwei Bahnen: links Quelle, Betroffene Objekte und Bewertung, rechts Entscheidung, Maßnahme, Restrisiko und Verantwortung. Die sechs betroffenen Objekte stehen nach Ebene geordnet: Informationsverbund Kunden- und Marktpartnerportal, Prozess Vertragsmanagement, Abrechnung und Marktkommunikation, Information Kunden- und Vertragsdaten, Komponente PostgreSQL-Cluster, Standort Rechenzentrum Nord und Dienstleister NordTech Systems AG, jeweils mit Art des Bezugs. Bei der Maßnahme stehen Titel, Fortschritt, Verantwortliche und Frist. Unten die Herkunft der Anforderung KONF.3.2." },
  deputyPlan: { src: "/images/vertretungsplan.webp", w: 1600, h: 1468, alt: "Vertretungsplan über sechs Wochen mit Kalenderwochen und Tagen. Je abwesender Person ein Block mit schraffiertem Abwesenheitsbalken und einer Bahn je Rolle: Alex Nordstern ist vom 26. bis 30.10. abwesend, App-Admin vertritt Sam, IT-Betrieb vertritt Jonas. Kim Nordstern ist vom 02. bis 13.11. abwesend, ISB und Notfallbeauftragte vertritt Alex. Sam Nordstern ist vom 10. bis 21.11. abwesend: App-Admin ist durch Alex als weiteren Inhaber der Rolle gedeckt, Compliance vertritt Kim, für die Rolle Auditor gibt es keine Vertretung. Darüber steht die Warnung „Keine Vertretung für die Rolle Auditor“ mit dem Zeitraum." },
  preparednessOverview: { src: "/images/preparedness-overview.webp", w: 1600, h: 2027, alt: "Gesamtbild der Notfallvorsorge als Kette aus fünf Stationen: Prozesse mit Frist, hinterlegte Verfahren, Personal und Mittel, Organisation und Kontakte, zuletzt geübt. Darunter Prozesse nach Dringlichkeit mit Balken für die tolerierbare Ausfallzeit, was die letzte Übung gezeigt hat, Teams und Mittel, die Führung im Ernstfall mit Stellvertretung und offene Lücken. Hinweise und Lücken stehen gleichrangig neben dem, was steht." },
  exercise: { src: "/images/exercise.webp", w: 1600, h: 904, alt: "Planspiel zur Verschlüsselung der zentralen Plattformdienste: Beteiligte mit Rollen, Annahme, Sicherheits- und Abbruchbedingung, zwei Soll-Zeiten von je einer Stunde, ein Erfolgskriterium und das Szenario mit Container-Plattform und Identitätsdienst gestört sowie Datenbank-Cluster verloren." },
};

// Where each screenshot comes from in the app (shown in the overlay "Wie sieht es in der App aus?"). Full views and marked sections: src/app-ansichten.json (recorded from the app).
export const APP_ORT = {
  staleReport: "Informationsverbund, Kunden- und Marktpartnerportal: Hinweis „Sicherheitskonzept ist veraltet“",
  impactGraph: "Risikokandidaten, Kandidat mit Ausbreitungsprüfung",
  crisisRun: "Krise & Lagezentrum, Verfahrensvergleich eines Krisenlaufs",
  informationDomainTemplates: "Katalog, GS++-Informationsverbundvorlagen",
  componentSetTemplate: "Bibliothek & Regeln, Komponentensatz-Vorlagen",
  effectivenessCycle: "Monitoring & Audit, Feststellung mit Maßnahme und Prüfkreis",
  componentTemplates: "Bibliothek & Regeln, Komponentenvorlagen",
  blueprintOverview: "Katalog, Blaupause, Reiter Übersicht (oberer Teil)",
  blueprintRules: "Katalog, Blaupause, Reiter Übersicht (unterer Teil)",
  reportTemplateCards: "Bibliothek & Regeln, Berichtsvorlagen",
  exercise: "Übungen, Planspiel, Reiter Definition",
  planVsActual: "Krise & Lagezentrum, laufende Übung mit Plan und Ist",
  incidentTimeline: "Ereignisse & Vorfälle, Sicherheitsfall, Reiter Zeitlinie",
  preparednessOverview: "Notfallvorsorge, Reiter Gesamtbild",
  riskPath: "Risiken, Risiko öffnen, Seite mit dem Weg des Risikos",
  riskFile: "Risiken, Risiko öffnen, Risikoakte, Reiter Überblick",
  deputyPlan: "Benutzerverwaltung, Stellvertretung, Vertretungsplan",
};

export const FEATURES = [
  {
    id: "impact-graph", kicker: "Risiken", title: "Bei einem Vorfall sehen, was mitbetroffen ist.", wide: true,
    text: "Ein Sicherheitsvorfall trifft eine Komponente, etwa einen Datenbank-Cluster. Du startest die Ausbreitungsprüfung an einem Risikokandidaten und wählst die Richtung: Was braucht das Objekt, was hängt von ihm ab, oder beides? BlueProceedings ISMS folgt den hinterlegten Abhängigkeiten und bestätigten Schnittstellen und schlägt vor, was mitbetroffen sein könnte: links die Voraussetzungen, rechts die abhängigen Objekte. Erreichbar heißt nicht betroffen. Über jeden Vorschlag entscheidest du selbst: Du bestätigst ihn als betroffen und beschreibst, wie das Objekt betroffen sein kann und welche Schutzziele es trifft. Du verwirfst ihn und begründest, warum. Oder du markierst ihn als nicht entscheidbar und hältst fest, was dafür fehlt. Erst die Bestätigung macht ein Objekt zum Betroffenen.",
    points: ["Du gibst vor: Startobjekt und Richtung. Die Anwendung schlägt vor, du entscheidest", "Bestätigen mit Wirkung je Schutzziel, Verwerfen und „nicht entscheidbar“ mit Begründung", "Jedes Objekt mit Zustand in Wort und Randform", "Bestätigte Objekte werden zu Risiken oder Teilrisiken"],
    image: "impactGraph",
  },
  {
    id: "risk-path", kicker: "Risiken", title: "Von der Ursache bis zum Restrisiko, auf einer Seite.", wide: true,
    text: "Jedes Risiko hat eine eigene Seite. Sie zeigt in vier Stationen, woher es kommt, wie es bewertet ist, was dagegen getan wird und was danach übrig bleibt. Im Beispiel entsteht das Risiko, weil eine Anforderung noch nicht umgesetzt ist. Die Behandlung heißt Mindern, die zugehörige Maßnahme steht mit Fortschritt, Schritten, Verantwortlicher und Frist direkt daneben. Das Restrisiko ist die Einschätzung für die Zeit nach der Umsetzung; es braucht die Akzeptanz des Risikoeigentümers und ein Datum für die nächste Prüfung. Die Risikoakte darunter hält fest, welche Objekte aus welcher Ebene betroffen sind.",
    points: ["Ursache: die Anforderung, deren Nichterfüllung das Risiko auslöst", "Maßnahme als Verweis mit Status und Schritten, nicht als Freitext", "Skala vorher und nachher, mit Begründung für das Restrisiko", "Betroffene Objekte aus mehreren Ebenen, je mit Art des Bezugs", "Dieselbe Akte als Seitenfenster in der Liste und als eigene Seite"],
    image: ["riskPath", "riskFile"], imageLabels: ["Risikoweg", "Risikoakte"],
  },
  {
    id: "deputy-plan", kicker: "Verantwortung", title: "The ISMS must go on. Sehen, wer fehlt, bevor eine Rolle unbesetzt ist.", wide: true,
    text: "Wer eine Rolle hält, kann für sie eine Vertretung benennen, für jede Rolle eine andere und für einen Zeitraum oder unbefristet. Der Vertretungsplan legt das neben die Abwesenheiten: Je abwesender Person ein Block, darunter eine Bahn je Rolle. Grün steht, wer übernimmt, gestrichelt, dass eine weitere Person dieselbe Rolle hält und anwesend ist, rot, dass niemand die Aufgaben übernimmt. Eine Lücke steht zusätzlich als Warnung über dem Plan, mit Rolle und Zeitraum, solange noch Zeit bleibt, sie zu schließen.",
    points: ["Vertretung je Rolle und Zeitraum, mit Prüfung auf Funktionstrennung", "Weitreichende Rollen brauchen eine ausdrückliche Bestätigung", "Der Plan zeigt Person und Zeitraum einer Abwesenheit, nie den Grund", "Lücken werden als Warnung benannt, nicht nur eingefärbt"],
    image: "deputyPlan", note: "Der Plan zeigt, was eingetragen ist. Abwesenheiten, die niemand einträgt, kann er nicht kennen. Sie tragen die Person selbst oder die Personalabteilung ein.",
  },
  {
    id: "crisis-run", kicker: "Notfall", title: "Wiederanlauf und Wiederherstellung planen, bevor es ernst wird.", wide: true,
    text: "Ausgefallene Standorte oder Objekte wählen, verfügbares Personal angeben: BlueProceedings ISMS plant über die Abhängigkeiten, in welcher Reihenfolge Notbetrieb und Wiederherstellung anlaufen, und vergleicht fünf implementierte Planungsverfahren, von einfachen Heuristiken (Greedy) bis zur exakten Suche (Branch-and-Bound). Als Maßstab dient der modellierte Verlust auf Grundlage der hinterlegten Annahmen, verglichen mit dem Fall, dass im Planungszeitraum nichts wieder anliefe. Das Ergebnis ist ein modellbasierter Planungsvorschlag, keine Entscheidung des Krisenstabs. Unvollständige oder falsche Eingaben verändern es; der Krisenstab prüft die tatsächliche Lage und entscheidet selbst.",
    points: ["Modellierter Verlust je Verfahren und Abstand zum besten berechneten Planungsvorschlag", "Reihenfolge und Zeiten je Notfallprozess", "Als Übung oder echter Krisenlauf speicherbar"],
    image: "crisisRun", note: MODELLHINWEIS,
  },
  {
    id: "continuity", kicker: "Notfall", title: "Notfallvorsorge auf demselben Bestand.", wide: true,
    text: "Business-Impact-Analyse, Notfallszenarien und Übungen beziehen sich auf dieselben Prozesse, Komponenten und Standorte wie das übrige ISMS. Das Gesamtbild fasst die Notfallvorsorge in fünf Stationen zusammen: Für welche Prozesse ist festgelegt, wie lange ein Ausfall höchstens dauern darf (die tolerierbare Ausfallzeit)? Gibt es für die zugehörigen Objekte ein Wiederanlauf- und ein Wiederherstellungsverfahren? Reichen Personal und Mittel? Sind Organisation und Kontakte benannt? Und wann wurde zuletzt geübt? Darunter steht, was die letzte Übung gezeigt hat und wer im Ernstfall führt und wer vertritt. Lücken und Hinweise erscheinen genauso deutlich wie das, was vorhanden ist. Eine Gesamtnote gibt es bewusst nicht.",
    points: ["Prozesse nach Dringlichkeit, mit tolerierbarer Ausfallzeit als Balken", "Teams, Mittel und Führung im Ernstfall mit Stellvertretung", "Planspiel, Funktions-, Wiederherstellungs- und Kommunikationstest mit Zielen, Kriterien und Sollzeiten", "Was bei einer Übung auffällt, wird zur Folgearbeit"],
    image: ["preparednessOverview", "exercise"], imageLabels: ["Gesamtbild", "Übung planen"],
  },
  {
    id: "plan-vs-actual", kicker: "Notfall", title: "Ein Plan ohne Übung sagt wenig. Der Lauf zeigt, was er wert ist.", wide: true,
    text: "Im Lagezentrum steht der Plan eines Krisenlaufs neben dem, was im aktuellen Durchlauf tatsächlich geschieht. Das Beispiel ist bewusst nicht einfach: zehn begonnene Schritte in mehreren Teams, ein gescheiterter Versuch, ein Prozess mit überschrittener Frist, eine Information, die überfällig ist. Genau bei solchen Abläufen ist es ohne Werkzeug schwer, nach Stunden noch zu überblicken, was geplant war, was läuft und was überfällig wird. Hier hilft die Anwendung beim Überblick; die Lage beurteilt weiterhin der Krisenstab. Jede Zeile ist ein Schritt, gruppiert nach Team mit verantwortlicher Rolle: oben die Planspur, darunter das Ist des laufenden Durchlaufs, also was tatsächlich begonnen, beendet oder gescheitert ist. Schraffiert ist der Verzug, ein früher beendeter Schritt als Vorsprung gekennzeichnet, ein gescheiterter Versuch bleibt sichtbar. Wer seinen Wiederanlauf nur auf dem Papier geplant hat, sieht hier, wie schnell aus einer Stunde Verzug eine überschrittene Frist wird. Die rechnerische Fortschreibung des aktuell erfassten Stands weist darauf hin, welche tolerierbare Ausfallzeit voraussichtlich überschritten werden könnte. Sie ersetzt keine Lagebeurteilung.",
    points: ["Verantwortliche Rolle und Teamgröße je Bahn", "Prozesse gegen ihre tolerierbare Ausfallzeit, überschritten oder nach aktuellem Stand voraussichtlich überschritten", "Meldekette je Prozess: läuft wieder, Krisenstab informiert, Verantwortliche informiert", "Überfällige Informationen werden sichtbar, bevor sie vergessen werden", "Die Informationsfrist von 30 Minuten ist eine Annahme der Anwendung und anpassbar gedacht"],
    image: "planVsActual",
  },
  {
    id: "incident-timeline", kicker: "Notfall", title: "Ein Vorfall, Schritt für Schritt nachvollziehbar.", wide: true,
    text: "Nach einem Sicherheitsvorfall bleibt selten Energie für Berichte und Klärung. Wird der Ablauf schon während des Vorfalls festgehalten und von der Anwendung unterstützt, muss nachher nichts aus dem Gedächtnis rekonstruiert werden. Das Ziel: Der Abschlussbericht entsteht aus der Zeitlinie mit einem Klick, statt Tage zu kosten. Eine passende Berichtsvorlage ist dafür vorgesehen.\n\nJeder Sicherheitsvorfall hat ein nur anhängbares, hashverkettetes Ereignisprotokoll, das als Zeitlinie lesbar ist. Die Anwendung prüft die Kette auf rechnerische Brüche; das Protokoll ersetzt weder einen externen Vertrauensanker noch eine Aufbewahrungsentscheidung des Betreibers. Das Beispiel ist eine gezielte Phishing-Kampagne gegen den Kundenservice: 49 Ereignisse von vier Personen, von der ersten gemeldeten Mail bis zur freigegebenen Nachbesprechung. Zu jedem Ereignis stehen Uhrzeit, die Zeit seit Beginn, die handelnde Person mit Rolle und die Gruppe, etwa Feststellung, Eindämmung oder Kommunikation. Eine Hypothese, die sich als falsch erweist, wird nicht überschrieben, sondern durch eine Korrektur ersetzt, und beides bleibt lesbar. Die Meldeentscheidung an die Aufsicht wird zuerst zurückgestellt und später begründet entschieden. Kennzahlen am Kopf zeigen Erkennung bis Lösung und Anzahl der Korrekturen.",
    points: ["Das Material für den Abschlussbericht entsteht während des Vorfalls, nicht erst danach", "Wer hat wann was entschieden, mit Rolle und Zeit seit Beginn", "Korrekturen werden angehängt, nichts wird überschrieben", "Meldeentscheidungen mit Begründung, auch das Zurückstellen", "Einzelschritte „geplant/begonnen“ standardmäßig ausgeblendet, damit die Zeitlinie lesbar bleibt"],
    image: "incidentTimeline", note: "Die Berichtsvorlage für Sicherheitsvorfälle ist noch nicht Teil der Pre-Alpha. Ob ein Bericht vollständig ist, prüfen die Verantwortlichen.",
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

// Who works with BlueProceedings ISMS and what each role wants to know (one guiding question per role).
export const ROLES = [
  { role: "Informationssicherheit", who: "Informationssicherheitsbeauftragte und ihr Team", question: "Wo steht unser ISMS, und was muss ich als Nächstes anstoßen?", answer: "Die Lage über alle Informationsverbünde nach dem erfassten Stand: offene Nachweise, Fristen und Risiken, veraltete Berichte mit Ursache, Aufgaben bei den Verantwortlichen und Rollen, für die bei Abwesenheit niemand einspringt" },
  { role: "Leitung", who: "Institutionsleitung, Geschäftsführung", question: "Welche Entscheidung braucht jetzt meine Aufmerksamkeit?", answer: "Freigaben, Risikoakzeptanz mit Wiedervorlage und eine Managementbewertung mit vorbelegten Eingaben" },
  { role: "Risikoeigentümer", who: "Wer ein Risiko trägt und über sein Restrisiko entscheidet", question: "Was ist gegen mein Risiko geplant, und was bleibt übrig?", answer: "Eine Seite je Risiko: Ursache, Maßnahme mit Fortschritt und Frist, Restrisiko zur Akzeptanz und der Termin, an dem es erneut geprüft wird" },
  { role: "Fachbereiche", who: "Prozess- und Objektverantwortliche", question: "Was gilt für meinen Prozess, und was ist meine Aufgabe?", answer: "Eigene Aufgaben statt Rundmail, jede Anforderung mit Herkunft und Bezug zum eigenen Verfahren" },
  { role: "Notfallmanagement", who: "Notfallbeauftragte, Krisenstab", question: "Welche Prozesse müssen zuerst wieder laufen, und was brauchen sie dafür?", answer: "BIA mit Wiederanlaufzeiten, Notfallorganisation, Szenarien, Krisenläufe und Übungen auf denselben Abhängigkeiten wie das übrige ISMS" },
  { role: "IT-Betrieb", who: "Betrieb von Systemen, Netzen und Anwendungen", question: "Welche Maßnahmen und Nachweise erwartet man von uns, und bis wann?", answer: "Zugewiesene Maßnahmen mit Frist, Nachweise mit Ablaufdatum und Komponenten mit ihren Abhängigkeiten. BlueProceedings ISMS selbst läuft per Docker auf eigener Infrastruktur." },
  { role: "Audit und Revision", who: "Interne Revision, Prüfende", question: "Woraus folgt diese Aussage?", answer: "Die Kette von der Anforderung bis zum Nachweis, Prüfmodus, Prüfpaket als Datei und ein Änderungsprotokoll" },
];

// FAQ. Answers only state what is true today or is named as a plan.
export const FAQ = [
  { q: "Macht mich BlueProceedings ISMS konform oder zertifizierungsbereit?", a: "Nein. BlueProceedings ISMS unterstützt die Vorbereitung: Es hält Anforderungen, Nachweise, Prüfungen und Entscheidungen nachvollziehbar zusammen. Ob eine Institution die Anforderungen erfüllt, beurteilt die prüfende Stelle." },
  { q: "Wo liegen unsere Daten?", a: "Auf eurer eigenen Infrastruktur. BlueProceedings ISMS läuft als Docker-Container On-Premises, die Datenbank ist verschlüsselt, und es gibt keine Hersteller-Cloud. BlueProceedings hat keinen Zugriff auf eure Produktdaten, und die Anwendung übermittelt im Standardbetrieb keine Produktdaten an BlueProceedings. Daten verlassen die Anwendung nur durch einen Export, den ein berechtigter Nutzer bewusst auslöst. Ab dann verantwortet der Betreiber Transport, Empfänger und Aufbewahrung." },
  { q: "Was kostet BlueProceedings ISMS?", a: `${ALPHA_LIZENZ} ${UNTERSTUETZUNG}` },
  { q: "Wann kann ich BlueProceedings ISMS ausprobieren?", a: "Die erste Version ist für Januar 2027 geplant, wenn Grundschutz++ laut BSI zertifizierbar wird. Den letzten Feinschliff machen wir in Teilen öffentlich: Die Beiträge auf LinkedIn zeigen laufend, was fertig wird. Für die geplante Testphase ab dem 11.11.2026 können sich bis zu elf Personen aus der ISMS-Praxis per E-Mail bewerben. Die Auswahl erfolgt manuell; eine Bewerbung begründet keinen Anspruch auf Teilnahme, Support oder eine spätere Lizenz." },
  { q: "Wir arbeiten noch mit IT-Grundschutz. Passt BlueProceedings ISMS trotzdem?", a: "BlueProceedings ISMS setzt die Methodik Grundschutz++ um und arbeitet mit dem Katalog, den das BSI im OSCAL-Format auf GitHub veröffentlicht. Weitere Kataloge im OSCAL-Format lassen sich zusätzlich importieren. Für den Umstieg gibt es Vorlagen, einen Einrichtungsassistenten, der aus dem tatsächlichen Datenbestand den nächsten Schritt ableitet, und einen Lern-Modus mit eigener Übungsumgebung." },
  { q: "Wir sind ein kleines Team. Ist das nicht zu groß für uns?", a: "Gerade kleine Teams sollen die Arbeit verteilen können: Fachbereiche pflegen ihre Objekte, IT liefert Nachweise, die Leitung entscheidet. Wo es keine zweite Person gibt, lockert der Kleinunternehmen-Modus die personelle Trennung beim Vier-Augen-Prinzip, ohne die fachlichen Prüfungen abzuschalten." },
  { q: "Wie arbeiten wir mit Auditoren zusammen?", a: "Ohne Gastkonten: Ihr importiert die Erwartungsliste der prüfenden Stelle, seht die Lücken und exportiert ein Prüfpaket mit Nachweisen und Prüfsummen. Ergebnisse eines externen Audits lassen sich wieder importieren." },
  { q: "Für wen ist das Angebot?", a: B2B_HINWEIS },
  { q: "Wer steht hinter BlueProceedings ISMS?", a: "BlueProceedings, ein Einzelunternehmen in Bonn. BlueProceedings ISMS ist ein unabhängiges Projekt und wird nicht im Auftrag eines Arbeitgebers entwickelt." },
];

// Community contribution kinds. `id` is the URL anchor (German, visible), `kind` matches index.json, `how` explains the kind in BlueProceedings ISMS, `shareFor` lists occasions to share.
export const COMMUNITY_KINDS = [
  {
    id: "blaupausen", kind: "blueprint", name: "Blaupausen", ico: "i-layers", format: "OSCAL-Profil",
    summary: "Anforderungsauswahl für eine Art von Informationsverbund.",
    how: "Eine Blaupause ist eine wiederverwendbare Regel-Menge: Ausschlüsse mit Begründung, zusätzliche Anforderungen und Parameterwerte. Ein Informationsverbund nimmt sie als Ganzes an. Sie ist an Katalogversionen gebunden, und bei einem neuen Katalogstand zeigt BlueProceedings ISMS, was sich ändert. Ausgetauscht wird sie als OSCAL-Profil.",
    shareFor: [
      "Branchentypische Auswahl, etwa für Bürgerportale einer Kommune, Kundenportale von Stadtwerken oder Praxisverwaltungen",
      "Begründete Ausschlüsse, die andere nachvollziehen und übernehmen können",
      "Parameterwerte, die sich bewährt haben, zum Beispiel Prüfintervalle und Fristen",
    ],
    image: ["blueprintOverview", "blueprintRules"], imageLabels: ["Überblick und Umfang", "Ausschlüsse, Parameter, Versionen"],
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
    how: "BlueProceedings ISMS erzeugt Gesamtbericht, Sicherheitskonzept, Prüfpaket und OSCAL-Exporte aus den Daten. Eine Berichtsvorlage legt zusätzlich fest, welche Abschnitte ein Auditbericht enthält, etwa Prüfumfang, Nachweise, Feststellungen, Risiken oder Kennzahlen. Bericht mit einem Klick: Auf der Karte der Vorlage ein Audit wählen und „Bericht als PDF“ drücken. BlueProceedings ISMS setzt die gewählten Abschnitte aus den aktuellen Daten zusammen, und das PDF trägt den Namen der Institution. Die beiden weiteren Bilder zeigen, wie solche Berichte aussehen können. Die Vorlage selbst lässt sich als Datei weitergeben und in einer anderen Institution einlesen.",
    shareFor: [
      "Managementbewertung auf wenigen Seiten",
      "Quartalsbericht zur Sicherheitslage für die Leitung",
      "Gliederung für das interne Audit",
    ],
    image: ["reportTemplateCards", "reportTemplates", "reportLeadership"], imageLabels: ["Vorlagen", "Beispiel: Kurzbericht", "Beispiel: Bericht für die Leitung"],
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
  { title: "Redaktion prüfen", text: "Der Assistent sucht muster- und regelbasiert in Freitexten nach möglichen Namen, Kontaktdaten, IP-Adressen, Hostnamen und Geheimnissen. Jede Fundstelle braucht eine Entscheidung. Nicht erkannte Angaben bleiben möglich; du kontrollierst die vollständige Datei vor der Weitergabe." },
  { title: "Paket erzeugen", text: "Mit Lizenz, Rechteerklärung und vier Bestätigungen entsteht ein Einreichungspaket samt maschinenlesbarem Prüfbericht." },
  { title: "Moderation", text: "Die Einreichung läuft als Pull Request im Community-Repository auf GitHub. Die Moderation prüft Einreichungen nach veröffentlichten formalen, technischen und plausibilitätsbezogenen Kriterien. Dazu gehören die Vollständigkeit der Erklärungen, erkennbare personenbezogene oder institutionelle Angaben und technisch auffällige Inhalte. Die Prüfung ersetzt keine rechtliche Beratung, Herkunftsgarantie oder vollständige Sicherheitsprüfung." },
  { title: "Signiert veröffentlichen", text: "Angenommene Pakete werden nach dem veröffentlichten Signaturverfahren signiert. Die Signatur bestätigt die Herkunft aus dem Community-Repository und die Unverändertheit seit der Signierung, nicht die fachliche Eignung oder Fehlerfreiheit. Beim Import entsteht immer ein lokaler Entwurf, den du selbst prüfst und freigibst." },
];

// Responsibility: moderation checks in good faith; submitters answer for content, importers for use.
export const LIABILITY = "Auch eine sorgfältige Moderation kann Fehler und schädliche Inhalte nicht ausschließen. Jede Vorlage ist eine lesbare Textdatei, die du vor dem Import vollständig ansehen kannst. Der Import erzeugt nur einen lokalen Entwurf, den du selbst prüfst und freigibst. Für den Inhalt einer Einreichung ist verantwortlich, wer sie einreicht; ob eine Vorlage zur eigenen Institution passt, entscheidet, wer sie importiert. BlueProceedings stellt die Vorlagen unentgeltlich und ohne Gewähr bereit.";

// What happens to personal data when submitting via GitHub. Legal bases are in the privacy policy.
export const SUBMISSION_PRIVACY = [
  { title: "Öffentlich über GitHub", text: "Einreichungen laufen als Pull Request. Dafür brauchst du ein GitHub-Konto; Benutzername, Zeitpunkt und Beitrag sind öffentlich sichtbar. Für dein Konto ist GitHub verantwortlich." },
  { title: "Nennung nach deiner Wahl", text: "CC BY-SA 4.0 sieht eine Nennung vor. Du entscheidest, ob dein Name, ein Pseudonym oder nur dein GitHub-Benutzername erscheint, und kannst die Nennung später entfernen lassen." },
  { title: "Keine Daten Dritter", text: "Vorlagen enthalten keine Namen, Kontaktdaten oder Angaben, die auf Personen oder deine Institution schließen lassen. Wer für eine Institution einreicht, klärt vorher, ob die Vorlage geteilt werden darf." },
  { title: "Rücknahme mit Grenzen", text: "Auf Wunsch nehmen wir einen Beitrag aus dem aktuellen Stand. Die Lizenz lässt sich nicht widerrufen, und die Versionsgeschichte sowie bereits erstellte Kopien bleiben bestehen. Prüfe deshalb vor dem Einreichen, was du teilst." },
];

export const DISCUSSION_CATEGORIES = ["Ankündigungen", "Erfahrungen", "Fragen zur Methodik", "Ideen und Wünsche", "Vorlagen-Wünsche"];

export const INDEPENDENCE = "BlueProceedings ISMS ist ein unabhängiges Projekt und macht keine Aussage über Zertifizierung oder Konformität. Es unterstützt die Vorbereitung.";
