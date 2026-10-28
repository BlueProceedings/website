const BSI_GSPP = "https://www.bsi.bund.de/dok/grundschutz-plus-plus";
const BSI_STANDARD_300_1 = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_300-1.pdf?__blob=publicationFile&v=1";
const BSI_OSCAL = "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Grundschutz-in-der-Informationssicherheit/Stand-der-Technik/OSCAL/oscal_node.html";
const BSI_BIBLIOTHEK = "https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek";
const NIST_OSCAL = "https://pages.nist.gov/OSCAL/";
const GEPRUEFT = "2026-10-27";

const produktQuelle = [BSI_STANDARD_300_1, "BSI-Standard 300-1 „Methodik Grundschutz++“", "Fachliche Grundlage der beschriebenen Grundschutz++-Arbeitsabläufe"];
const gsQuelle = [BSI_GSPP, "BSI: Grundschutz++", "Überblick, Veröffentlichungsstand und Meilensteine"];

export const PRODUKT_THEMEN = [
  ["/funktionen/", "Überblick"],
  ["/funktionen/erhebung-und-planung/", "Schritt 1"],
  ["/funktionen/oscal-katalogverwaltung/", "OSCAL"],
  ["/funktionen/risikomanagement/", "Risiken"],
  ["/funktionen/nachweismanagement/", "Nachweise"],
  ["/funktionen/berichtswesen/", "Berichte"],
  ["/funktionen/bcm-notfallmanagement/", "BCM"],
  ["/funktionen/learn-while-using/", "Lern-Modus"],
];

const produktReading = [
  ["Arbeitsweise", "welches Problem die Funktion löst und wie der Ablauf zusammenhängt"],
  ["Produktstand", "was heute in der Pre-Alpha vorhanden ist und wo ihre Grenzen liegen"],
];

export const SEO_SEITEN = {
  "/grundschutz-plus-plus/software/": {
    title: "Grundschutz++ Software & ISMS-Werkzeug",
    description: "Grundschutz++ Software für Anforderungen, Risiken, Maßnahmen und Nachweise: BlueProceedings ISMS mit OSCAL, On-Premises per Docker, derzeit Pre-Alpha.",
    crumb: "Software",
    h1: "Grundschutz++ Software: Anforderungen, Risiken und Nachweise verwalten.",
    asOf: GEPRUEFT,
    mailTopic: "Grundschutz++ Software",
    topics: "grundschutz",
    reading: produktReading,
    cta: { h: "Grundschutz++ nicht in Einzellisten zerlegen.", text: "BlueProceedings ISMS hält Anforderungen, Risiken, Maßnahmen, Nachweise und Entscheidungen in einer Arbeitskette zusammen." },
    next: ["/grundschutz-plus-plus/umsetzung/", "/grundschutz-plus-plus/oscal/", "/funktionen/"],
    sources: [produktQuelle, gsQuelle, [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Maschinenlesbare Grundschutz++-Artefakte und Mappings"]],
  },

  "/grundschutz-plus-plus/umsetzung/": {
    title: "Grundschutz++ umsetzen: Schritt für Schritt",
    description: "Grundschutz++ umsetzen: vom Geltungsbereich über Anforderungsanalyse und Maßnahmen bis Überwachung und Verbesserung – entlang BSI-Standard 300-1.",
    crumb: "Umsetzung",
    h1: "Grundschutz++ umsetzen: vom Geltungsbereich zum laufenden ISMS.",
    lede: "Grundschutz++ beginnt nicht mit einer langen Kontrollliste, sondern mit Kontext, Geltungsbereich und den wichtigsten Geschäftsprozessen. Daraus entsteht schrittweise ein Informationsverbund, dessen Anforderungen umgesetzt, überwacht und verbessert werden.",
    asOf: GEPRUEFT, mailTopic: "Grundschutz++ Umsetzung", topics: "grundschutz",
    sections: [
      { type: "steps", h: "Die fünf Prozessschritte in der Praxis.", items: [
        { title: "Erhebung und Planung", text: "Kontext, interessierte Parteien, Verpflichtungen, Geltungsbereich, Sicherheitsziele, Rollen und Risikomethodik festlegen. Die Institution entscheidet, BlueProceedings hält Stand und Freigaben zusammen." },
        { title: "Anforderungsanalyse", text: "Den wichtigsten Geschäftsprozess mit Informationen, Komponenten, Dienstleistern und Standorten modellieren. Zielobjektkategorien und Blaupause leiten das Anforderungspaket ab." },
        { title: "Realisierung", text: "Umsetzungsstände erheben, Lücken begründen, Maßnahmen mit Verantwortlichen, Budget, Frist und Abhängigkeiten planen und Nachweise zuordnen." },
        { title: "Überwachung", text: "Kennzahlen, Auditprogramm, Nachweisprüfung und Managementbewertung zeigen, ob der erfasste Stand noch trägt und Maßnahmen wirksam sind." },
        { title: "Kontinuierliche Verbesserung", text: "Vorfälle, Findings, abgelaufene Nachweise, neue Anforderungen und Änderungen erzeugen Folgearbeit. Abschluss bedeutet geprüft wirksam, nicht nur erledigt." },
      ] },
      { type: "gaps", h: "Ein sinnvoller erster Durchlauf.", items: [
        { title: "Klein anfangen", text: "Mit einem priorisierten Geschäftsprozess und einem klar abgegrenzten Informationsverbund beginnen, statt den gesamten Bestand gleichzeitig zu modellieren." },
        { title: "Entscheidungen sichtbar machen", text: "Schon beim ersten Durchlauf Rollen, Begründungen und Freigaben mitführen. Späteres Nachtragen kostet mehr und verliert Kontext." },
        { title: "Nachweise nicht sammeln, sondern prüfen", text: "Für jeden Nachweis Gültigkeit, Bezug und Prüfstatus festhalten. Eine Datei allein belegt noch keine wirksame Umsetzung." },
        { title: "Den nächsten Zyklus vorbereiten", text: "Reviewtermine und Änderungsanlässe von Anfang an planen. Ein ISMS wird nicht durch die erste Freigabe fertig." },
      ] },
      { type: "faq", h: "Fragen zur Einführung.", items: [
        { q: "Wie beginne ich mit Grundschutz++?", a: "Mit dem institutionellen Kontext, dem Geltungsbereich und einem priorisierten Geschäftsprozess. Danach werden dessen Assets modelliert und die relevanten Anforderungen abgeleitet." },
        { q: "Muss ich sofort die ganze Institution erfassen?", a: "Nein. Der Ansatz erlaubt einen schrittweisen Einstieg. Der gewählte Geltungsbereich und die Priorisierung müssen jedoch nachvollziehbar entschieden sein." },
        { q: "Was kann eine Software bei der Umsetzung abnehmen?", a: "Sie kann Kataloge einlesen, Anforderungen ableiten, Vererbung rechnen, Fristen überwachen und Zusammenhänge anzeigen. Bewertung, Umsetzung, Wirksamkeitsprüfung und Leitungsentscheidungen bleiben fachliche Aufgaben." },
      ] },
    ],
    cta: { h: "Den ersten Durchlauf überschaubar halten.", text: "Der Einrichtungsassistent und der Lern-Modus führen durch die Reihenfolge, ohne fachliche Entscheidungen vorwegzunehmen." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/learn-while-using/", "/grundschutz-plus-plus/anwenderkatalog/"],
    sources: [produktQuelle, gsQuelle],
  },

  "/bsi-standard-300-1/": {
    title: "BSI-Standard 300-1: Methodik Grundschutz++",
    description: "BSI-Standard 300-1 erklärt: Zweck, fünf Prozessschritte, Anwenderkatalog, OSCAL und praktische Bedeutung für die Einführung von Grundschutz++.",
    crumb: "BSI-Standard 300-1", h1: "BSI‑Standard 300‑1: die Methodik hinter Grundschutz++.",
    lede: "Der BSI-Standard 300-1 beschreibt, wie Institutionen ein ISMS nach Grundschutz++ aufbauen, betreiben, überwachen und verbessern. Version 1.0 wurde am 27. Oktober 2026 vorgestellt. Der Standard ist die methodische Grundlage; der maschinenlesbare Anwenderkatalog enthält die konkreten Anforderungen.",
    asOf: GEPRUEFT, mailTopic: "BSI-Standard 300-1", topics: "grundschutz",
    sections: [
      { type: "gaps", h: "Was der Standard ordnet.", items: [
        { title: "Verantwortung und Rahmen", text: "Kontext, Geltungsbereich, Leitlinie, Rollen, Ziele, Ressourcen und Risikomanagement werden als Führungsaufgabe verankert." },
        { title: "Informationsverbünde", text: "Geschäftsprozesse und ihre Assets werden zu nachvollziehbaren Informationsverbünden modelliert und priorisiert." },
        { title: "Anforderungen und Risiken", text: "Der Anwenderkatalog liefert Anforderungen; Umsetzungslücken und hohe Schutzbedarfe führen in geregelte Risikobetrachtungen." },
        { title: "Leistungsbewertung", text: "Monitoring, Audits und Managementbewertung prüfen nicht nur Vollständigkeit, sondern die Eignung und Wirksamkeit des ISMS." },
      ] },
      { type: "pairs", h: "Standard, Katalog und Software auseinanderhalten.", items: [
        { title: "BSI-Standard 300-1", ref: "Version 1.0", bsi: "Beschreibt die Methodik, Rollen, Prozessschritte und Mindestkriterien für Grundschutz++.", app: "BlueProceedings bildet daraus Arbeitsabläufe, Zustände und Freigaben ab und nennt Kapitel oder Mindestkriterium dort, wo es für eine Entscheidung hilft." },
        { title: "Anwenderkatalog", ref: "OSCAL", bsi: "Enthält die konkreten, strukturierten Anforderungen mit Modalverb, Zielobjektkategorie, Parametern und Dokumentationshinweisen.", app: "Die Anwendung importiert den versionierten Katalog und leitet je Informationsverbund ein konkretes Anforderungspaket ab." },
        { title: "Werkzeug", ref: "Pre-Alpha", bsi: "Der Standard verlangt kein bestimmtes Produkt und eine Datei ist noch keine Umsetzung.", app: "BlueProceedings unterstützt die Vorbereitung, behauptet aber weder Konformität noch Zertifizierung." },
      ] },
    ],
    cta: { h: "Vom Standard in die tägliche Arbeit.", text: "Die Umsetzungsseite zeigt die fünf Prozessschritte als konkreten Einstieg; die Softwareseite erklärt die Werkzeugauswahl." },
    next: ["/grundschutz-plus-plus/", "/grundschutz-plus-plus/umsetzung/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle, gsQuelle, [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Anwenderkatalog und ergänzende maschinenlesbare Artefakte"]],
  },

  "/isms-software/bsi-grundschutz/": {
    title: "ISMS-Software für BSI Grundschutz++",
    description: "ISMS-Software für BSI-orientiertes Sicherheitsmanagement: Anforderungen, Risiken, Nachweise, Audit, BCM und OSCAL in BlueProceedings ISMS.",
    crumb: "ISMS-Software",
    asOf: GEPRUEFT, mailTopic: "ISMS Software BSI", reading: produktReading,
    cta: { h: "Ein Datenstand für Sicherheit, Risiko und Kontinuität.", text: "Die Funktionsübersicht zeigt, welche Arbeitsabläufe die Pre-Alpha bereits verbindet." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/", "/grundschutz-plus-plus/it-grundschutz-migration/"],
    sources: [produktQuelle, gsQuelle],
  },

  "/funktionen/": {
    title: "ISMS-Funktionen in BlueProceedings",
    description: "Funktionen von BlueProceedings ISMS: OSCAL-Kataloge, Risikomanagement, Nachweise, Berichte, BCM, Notfallmanagement und geführte Einführung.",
    crumb: "Funktionen",
    asOf: GEPRUEFT, mailTopic: "Funktionen", topics: "produkt", reading: produktReading,
    cta: { h: "Die Verbindung ist die eigentliche Funktion.", text: "Auf der Softwareseite folgt ein vollständiger Weg vom OSCAL-Katalog bis zur Überwachung." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/risikomanagement/", "/funktionen/bcm-notfallmanagement/"],
    sources: [produktQuelle],
  },

  "/funktionen/erhebung-und-planung/": {
    title: "Grundschutz++ Schritt 1: Erhebung und Planung",
    description: "BSI-Standard 300-1, Schritt 1: Kontext, Compliance, Geltungsbereich, Stakeholder, Prozesse, Schutzbedarf, Leitlinie, Rollen und Risikorahmen in BlueProceedings ISMS.",
    crumb: "Schritt 1: Erhebung und Planung", h1: "Schritt 1: Erhebung und Planung, verteilt statt gebündelt.",
    lede: "Der BSI-Standard 300-1 beschreibt Schritt 1 in elf Teilschritten, vom Kontext der Institution bis zum Risikorahmen (Kapitel 2.1 bis 2.11). Fachlich ist das schlüssig. Im Alltag läuft aber fast alles über zwei Personen: Der ISB bereitet vor, die Leitung gibt frei. BlueProceedings ISMS verteilt die Arbeit, ohne die Verantwortung zu verwässern.",
    asOf: "2026-10-28", mailTopic: "Schritt 1 Erhebung und Planung", topics: "produkt", reading: produktReading,
    sections: [
      { type: "gaps", h: "Elf Teilschritte, ein Ort.", lede: "So bildet die Pre-Alpha jeden Teilschritt aus Kapitel 2 ab.", items: [
        { title: "2.1 Kontext der Institution", text: "Interne und externe Einflussfaktoren mit Quelle, Annahmen und Review, verknüpft mit den Entscheidungen, die auf ihnen beruhen." },
        { title: "2.2 Compliance-Management", text: "Gesetze, Verträge, Satzungen und eigene Pflichten in einem Register, jede mit ihrem eigenen Katalog, ihrer Kritikalität und ihrer Quelle." },
        { title: "2.3 Anwendungsbereich", text: "Jedes erfasste Objekt gehört dazu. Ein Ausschluss braucht eine Begründung." },
        { title: "2.4 Interessierte Parteien", text: "Stakeholder mit ihren Erwartungen und einer Gewichtung, die in die Priorisierung einfließt." },
        { title: "2.5 Geschäftsprozesse", text: "Prozesse mit Abhängigkeiten, RTO, RPO und Wiederanlauf. Widersprüche stehen direkt an der Verbindung." },
        { title: "2.6 Schutzbedarf", text: "Normal oder hoch je Schutzziel, begründet mit Schadensszenarien und Kriterien für Erhöhung und Absenkung." },
        { title: "2.7 Leitlinie", text: "Versioniert, von der Leitung freigegeben und mit Nachweis, wann sie kommuniziert wurde." },
        { title: "2.8 Rollen und Zuständigkeiten", text: "RACI-Matrix für die Institution und je Informationsverbund, dazu Vertretungsplan und Funktionstrennung." },
        { title: "2.9 Dokumentation und Kommunikation", text: "ISMS-Dokumente mit Version, Klassifikation, Freigabe und Review in einem Register." },
        { title: "2.10 Freigabe der Vorgehensweise", text: "Freigaben mit Person, Rolle und Zeitpunkt, dort, wo die Entscheidung getroffen wurde." },
        { title: "2.11 Risikobetrachtung", text: "Risikomatrix mit Risikoappetit und einer Regel je Zelle: automatisch akzeptieren, einzeln entscheiden oder ablehnen." },
      ] },
      { type: "feature", h: "Nacheinander oder parallel.", paragraphs: ["Klassisch holt der ISB jeden Fachbereich in einen Termin, trägt die Ergebnisse zusammen und geht mit den Risiken zur Leitung. Jede Rückfrage braucht einen neuen Termin.", "In BlueProceedings ISMS erfassen die Fachbereiche ihre Prozesse und Objekte gleichzeitig selbst. Der ISB bündelt und meldet direkt zurück, die Leitung prüft im Rahmen ihrer Regeln. Die Darstellung ist schematisch und keine Messung: Die Fachbereiche arbeiten etwas mehr, ISB und Leitung deutlich weniger."], image: "parallelWork" },
      { type: "feature", h: "Verteilen, ohne zu verwässern.", paragraphs: ["Wer einen Prozess oder ein System verantwortet, macht die Angaben dazu selbst. Der ISB steuert, die Leitung gibt frei. Die RACI-Matrix hält fest, wer etwas ausführt (R), wer es verantwortet und freigibt (A, genau eine Rolle), wer vorher gefragt wird (C) und wer das Ergebnis erfährt (I).", "Neben der Matrix für die Institution kann jeder Informationsverbund eine eigene haben, im Beispiel mit zwei konsultierten und mehreren informierten Rollen. Wer bei Abwesenheit einspringt, regelt getrennt davon der Vertretungsplan. Die Zahl der Nutzenden ist nicht begrenzt: Jede Fachabteilung kann mitarbeiten."], image: ["raciInstitution", "raciDomain"], imageLabels: ["Institution", "Informationsverbund"] },
      { type: "feature", h: "Wenn sich ein Faktor ändert.", paragraphs: ["Interne und externe Einflussfaktoren, etwa ein neues Gesetz oder eine Änderung in der Lieferkette, lassen sich mit Entscheidungen verknüpfen. Quelle, Annahmen, Unsicherheit und nächster Review stehen beim Faktor.", "Wird eine inhaltlich geänderte Fassung freigegeben, zeigt seine Seite, welche Freigaben, Risikobewertungen, Schutzbedarfe, Dokumente und Maßnahmen neu zu prüfen sind, jeweils mit Namen und Link. Der Faktor ändert keine Bewertung selbst; die Verantwortlichen entscheiden."], image: "contextFactor" },
      { type: "feature", h: "Pflichten an einem Ort.", paragraphs: ["Gesetze, Verträge und Satzungen sind der Ursprung vieler Anforderungen. Im Compliance-Register steht jede Pflicht mit ihrem eigenen Katalog, ihrer Kritikalität und ihrer Quelle. Eigene Pflichten lassen sich direkt in der Oberfläche anlegen.", "Im Beispiel gehören DSGVO, TLS-Mindeststandard, NIS2 und ISO/IEC 27001 Annex A je zu einem anderen Katalog. Neu eingelesene Kataloge stehen auf „Noch nicht bewertet“, bis jemand den Erfüllungsstand erhebt."], image: "compliance" },
      { type: "feature", h: "Alles gehört dazu, außer es ist begründet.", paragraphs: ["Jedes erfasste Objekt liegt standardmäßig im Geltungsbereich. Wer etwas herausnimmt, begründet es, und der Zeitpunkt bleibt sichtbar. Das beugt Schatten-IT vor, weil kein System aus Versehen herausfällt.", "Für den Überblick lässt sich die Liste nach Objektart filtern und durchsuchen. Im Beispiel sind zwei Komponenten begründet ausgeschlossen."], image: "scope" },
      { type: "feature", h: "Wer was erwartet.", paragraphs: ["Stakeholder werden mit ihren Erwartungen erfasst. Jeder kann einen ganzen Katalog, eine einzelne Anforderung, eine Maßnahme oder eine Kennzahl von 1 bis 5 gewichten.", "Aus den Gewichtungen aller Stakeholder entsteht eine Rangfolge der Anforderungen und Maßnahmen. Sie hilft, die Reihenfolge der Umsetzung zu begründen."], image: ["stakeholderWeights", "stakeholderRanking"], imageLabels: ["Gewichtung", "Rangfolge"] },
      { type: "feature", h: "Wer wen braucht.", paragraphs: ["Geschäftsprozesse werden mit Abhängigkeiten, Schutzbedarf, Wiederanlaufzeit (RTO) und tolerierbarem Datenverlust (RPO) erfasst. Passen die Zeitvorgaben nicht zusammen, steht der Konflikt am Pfeil.", "Im Beispiel soll die Netzleitstelle nach zwei Stunden wieder laufen, braucht aber die Smart-Meter-Erfassung mit einer RTO von vier Stunden. Das fällt beim Erfassen auf, nicht erst in der Notfallübung."], image: "processDependencies" },
      { type: "feature", h: "Normal oder hoch, mit Begründung.", paragraphs: ["Grundschutz++ kennt zwei Schutzbedarfskategorien. Schadensszenarien legen fest, wann ein Schaden normal oder hoch ist; Kriterien begründen, wann vom vererbten Vorschlag nach oben oder unten abgewichen wird.", "Neben Vertraulichkeit, Integrität und Verfügbarkeit lassen sich eigene Schutzziele führen, im Beispiel Authentizität (AUTH) und Nachvollziehbarkeit (TRACE). Schon ein hohes Schutzziel löst die eigene Risikobetrachtung aus (BSI-Standard 300-1, Anhang 3, Kriterium 32)."], image: ["damageScenarios", "protectionCriteria"], imageLabels: ["Schadensszenarien", "Kriterien"] },
      { type: "feature", h: "Leitlinie und Dokumente.", paragraphs: ["Die Leitlinie hat Versionen, eine Freigabe durch die Leitung und einen nächsten Review. Je freigegebener Fassung wird bestätigt, wann sie an alle Mitarbeitenden kommuniziert wurde.", "Alle ISMS-Dokumente stehen in einem Register mit Version, Status, Klassifikation, Review und Aufbewahrung."], image: ["policy", "documentRegister"], imageLabels: ["Leitlinie", "Dokumente"] },
      { type: "feature", h: "Die Leitung setzt die Regel.", paragraphs: ["Nach Anhang 3, Kriterium 30 autorisiert die Leitung jedes Restrisiko, und Risiken kommen mindestens jährlich und bei wesentlichen Änderungen wieder auf den Tisch. In BlueProceedings ISMS legt sie stattdessen für jede Zelle der Risikomatrix fest, ob ein Restrisiko vorab akzeptiert, einzeln entschieden oder abgelehnt wird.", "Grüne Zellen mit dicker Linie sind vorab akzeptiert, rot gestrichelte abgelehnt; dort braucht jedes Risiko Maßnahmen. Die runde Zahl zeigt, wie viele Risiken nach Maßnahmen in der Zelle liegen. Die Freigabe der Matrix als Autorisierung zu werten, ist unsere Auslegung. Wer jedes Restrisiko einzeln freigeben will, stellt das mit einem Schalter ein."], image: "riskMatrix" },
      { type: "feature", h: "Ausnahmen bleiben möglich, aber befristet.", paragraphs: ["Liegt ein Risiko in einer gesperrten Zelle, beantragt der Risikoeigentümer eine Ausnahme mit Begründung, Chancen und kompensierenden Maßnahmen. Die Leitung entscheidet mit Frist und Auflagen.", "Die Befristung folgt Anhang 3, Kriterium 28; in der Anwendung beträgt sie höchstens ein Jahr. Bei einer nicht erfüllten MUSS-Anforderung ist keine Ausnahme möglich."], image: "exception" },
      { type: "note", h: "Die Verantwortung bleibt bei der Leitung.", text: "Die Anwendung verteilt Erfassung und Vorbereitung, sie trifft keine Entscheidung. Anwendungsbereich, Schutzbedarf, Leitlinie, Risikorahmen und Restrisiken gibt weiterhin die Leitung frei (BSI-Standard 300-1, Kapitel 2.10 und Anhang 3). Alle Bilder zeigen fiktive Demodaten aus der Pre-Alpha." },
    ],
    cta: { h: "Verteilt erfassen. Zentral steuern. Einmal freigeben.", text: "Schritt 2, die Anforderungsanalyse, folgt als nächster <a href=\"/neuigkeiten/\">Beitrag</a>. Die Testphase beginnt am 11.11.2026." },
    next: ["/bsi-standard-300-1/", "/grundschutz-plus-plus/umsetzung/", "/funktionen/risikomanagement/"],
    sources: [produktQuelle, gsQuelle],
  },

  "/funktionen/oscal-katalogverwaltung/": {
    title: "OSCAL-Software: Kataloge verwalten",
    description: "OSCAL-Software für Import, Profile, Katalogversionen und Migration: So verwaltet BlueProceedings ISMS Grundschutz++-Anforderungen nachvollziehbar.",
    crumb: "OSCAL-Katalogverwaltung",
    asOf: GEPRUEFT, mailTopic: "OSCAL Software", topics: "produkt", reading: produktReading,
    cta: { h: "Katalogwechsel ohne stille Nebenwirkung.", text: "BlueProceedings ISMS behandelt einen neuen Katalogstand als sichtbare Änderung, nicht als Überschreiben." },
    next: ["/grundschutz-plus-plus/oscal/", "/grundschutz-plus-plus/anwenderkatalog/", "/funktionen/risikomanagement/"],
    sources: [[NIST_OSCAL, "NIST: OSCAL", "Modelle, Formate und Beziehungen"], [BSI_OSCAL, "BSI: OSCAL", "Einordnung des Formats"], [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Grundschutz++-Kataloge und Profile"]],
  },

  "/funktionen/risikomanagement/": {
    title: "ISMS-Risikomanagement Software",
    description: "ISMS-Risikomanagement mit nachvollziehbaren Entscheidungen: Risiken, Maßnahmen, Restrisiko, Akzeptanz und Wiedervorlage in BlueProceedings ISMS.",
    crumb: "Risikomanagement",
    asOf: GEPRUEFT, mailTopic: "ISMS Risikomanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Vom Auslöser bis zur Wiedervorlage.", text: "Die Risikoakte hält fest, wie eine Entscheidung entstanden ist und wann sie wieder auf den Tisch kommt." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/nachweismanagement/", "/funktionen/bcm-notfallmanagement/"],
    sources: [produktQuelle],
  },

  "/funktionen/nachweismanagement/": {
    title: "ISMS-Nachweismanagement Software",
    description: "ISMS-Nachweismanagement für gültige, geprüfte und zugeordnete Nachweise: Ablauf, Vier-Augen-Prüfung und Auditvorbereitung in BlueProceedings ISMS.",
    crumb: "Nachweismanagement",
    asOf: GEPRUEFT, mailTopic: "ISMS Nachweismanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Nachweise mit Ablauf und Prüfstatus.", text: "Damit aus „Datei vorhanden“ nicht vorschnell „Anforderung erfüllt“ wird." },
    next: ["/funktionen/berichtswesen/", "/funktionen/risikomanagement/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle],
  },

  "/funktionen/berichtswesen/": {
    title: "ISMS-Berichtswesen und Auditvorbereitung",
    description: "ISMS-Berichte mit Datenstand und Veraltet-Erkennung: Sicherheitskonzept, Gesamtbericht, Prüfpaket und OSCAL-Exporte in BlueProceedings ISMS.",
    crumb: "Berichtswesen",
    asOf: GEPRUEFT, mailTopic: "ISMS Berichtswesen", topics: "produkt", reading: produktReading,
    cta: { h: "Veraltet statt falsch-grün.", text: "Berichte sollen nicht nur gut aussehen, sondern sagen, wenn ihre Grundlage nicht mehr stimmt." },
    next: ["/funktionen/nachweismanagement/", "/grundschutz-plus-plus/oscal/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle, [NIST_OSCAL, "NIST: OSCAL", "Maschinenlesbare Implementierungs- und Prüfmodelle"]],
  },

  "/funktionen/learn-while-using/": {
    title: "Geführte ISMS-Software mit Lern-Modus",
    description: "ISMS-Software mit Anleitung: Einrichtungsassistent, Feldhilfe und Lern-Modus erklären Grundschutz++ direkt im Arbeitsablauf – getrennt von echten Daten.",
    asOf: GEPRUEFT, mailTopic: "ISMS Lern-Modus", topics: "produkt", reading: produktReading,
    cta: { h: "Weniger zwischen Werkzeug und Handbuch wechseln.", text: "Die Hilfe bleibt nah an der Entscheidung, die gerade ansteht." },
    next: ["/grundschutz-plus-plus/umsetzung/", "/grundschutz-plus-plus/software/", "/funktionen/"],
    sources: [produktQuelle],
  },

  "/funktionen/bcm-notfallmanagement/": {
    title: "BCM-Software & ISMS-Notfallmanagement",
    description: "BCM-Software für BIA, Notfallplanung, Wiederanlauf, Krisenmanagement und Übungen – verbunden mit Prozessen, Ressourcen und Risiken im ISMS.",
    crumb: "BCM und Notfallmanagement",
    asOf: GEPRUEFT, mailTopic: "BCM Software und Notfallmanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Notfallvorsorge auf demselben Bestand.", text: "BIA, Pläne, Ressourcen, Krisenläufe und Übungen bleiben mit dem übrigen ISMS verbunden." },
    next: ["/funktionen/risikomanagement/", "/funktionen/berichtswesen/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle],
  },
};

const produktseiten = {
  "/funktionen/": {
    h1: "Ein ISMS, das im Alltag mitläuft.",
    lede: "Mit der Freigabe ist ein ISMS nicht fertig. Neue Systeme, Vorgaben und Dienstleister ändern seine Grundlagen. BlueProceedings ISMS verbindet die Arbeit von der Planung bis zur Prüfung – damit sichtbar bleibt, was gilt, wer entscheidet und was erneut auf den Tisch gehört.",
    sections: [
      { type: "gaps", h: "1. Den Rahmen festlegen.", lede: "Erhebung und Planung nach BSI-Standard 300-1, Kapitel 2: Die Leitung gibt den Rahmen vor, die Arbeit wird auf mehrere Schultern verteilt. <a href=\"/funktionen/erhebung-und-planung/\">Alle elf Teilschritte mit Bildern aus der Pre-Alpha</a>.", items: [
        { title: "Kontext und Verpflichtungen", text: "Interne und externe Einflussfaktoren, rechtliche und vertragliche Pflichten sowie Entscheidungen dazu stehen an einem Ort. Ändert sich ein verwendeter Faktor wesentlich, weist die Anwendung auf betroffene Entscheidungen zur Prüfung hin." },
        { title: "Geltungsbereich und Stakeholder", text: "Prozesse, Systeme und andere erfasste Objekte gehören grundsätzlich dazu; Ausschlüsse werden begründet. Erwartungen interessierter Parteien lassen sich erfassen und gewichten." },
        { title: "Prozesse und Schutzbedarf", text: "Geschäftsprozesse werden mit ihren Informationen und Abhängigkeiten beschrieben. Schadensszenarien helfen, den Schutzbedarf je Schutzziel zu begründen." },
        { title: "Leitlinie und Dokumente", text: "Sicherheitsziele, Leitlinie und ISMS-Dokumente erhalten einen nachvollziehbaren Stand mit Freigabe und Kommunikation." },
        { title: "Rollen, RACI und Vertretung", text: "Fachbereiche pflegen ihre Angaben, der ISB steuert, die Leitung entscheidet. Die RACI-Matrix zeigt Zuständigkeiten; der Vertretungsplan warnt vor unbesetzten Rollen." },
        { title: "Risikomethodik und Risikoappetit", text: "Die Leitung legt den Rahmen für Bewertungen und Entscheidungen fest. Sie kann bestimmen, ob Restrisiken anhand freigegebener Regeln oder einzeln zur Entscheidung vorgelegt werden." },
      ] },
      { type: "gaps", h: "2. Den Informationsverbund verstehen.", lede: "Anforderungsanalyse nach BSI-Standard 300-1, Kapitel 3: vom Geschäftsprozess zum passenden Anforderungspaket.", items: [
        { title: "Bestand und Abhängigkeiten", text: "Prozesse, Informationen, Komponenten, Dienstleister, Standorte und Schnittstellen werden verknüpft. Derselbe Bestand dient auch Risiken, Berichten und Notfallvorsorge." },
        { title: "OSCAL und Katalogstände", text: "Kataloge werden mit Version und Herkunft eingelesen. Ein Vergleich zeigt Änderungen, bevor ein Informationsverbund auf einen neuen Stand wechselt. <a href=\"/funktionen/oscal-katalogverwaltung/\">Zur Katalogverwaltung</a>." },
        { title: "Blaupausen und Anforderungen", text: "Zielobjektkategorien, Kataloge und Blaupausen führen zum Anforderungspaket. Herkunft, Parameter und begründete Ausnahmen bleiben sichtbar." },
        { title: "Vorlagen wiederverwenden", text: "Informationsverbund-, Komponentensatz- und Komponentenvorlagen helfen, wiederkehrende Strukturen und Erfahrungswissen erneut zu nutzen." },
      ] },
      { type: "gaps", h: "3. Lücken und Risiken bearbeiten.", lede: "Realisierung nach BSI-Standard 300-1, Kapitel 4: vom Umsetzungsstand zur begründeten Entscheidung.", items: [
        { title: "Anforderungen bearbeiten", text: "Verantwortliche erfassen den Umsetzungsstand und planen offene Arbeit. Herkunft und Bezug zum eigenen Objekt bleiben an der Anforderung." },
        { title: "Betroffenheit prüfen", text: "Ein Graph zeigt, welche Objekte über Abhängigkeiten mitbetroffen sein könnten. Die Anwendung schlägt vor; Menschen bestätigen, verwerfen oder klären die Vorschläge." },
        { title: "Vom Auslöser zum Restrisiko", text: "Die Risikoakte verbindet Ursache, Bewertung, betroffene Objekte, Behandlung, Maßnahme, Restrisiko und Wiedervorlage. <a href=\"/funktionen/risikomanagement/\">Zum Risikomanagement</a>." },
        { title: "Maßnahmen planen", text: "Verantwortung, Frist und Fortschritt stehen bei der Maßnahme. Was nach der Behandlung verbleibt, wird erneut bewertet und zur Entscheidung vorgelegt." },
      ] },
      { type: "gaps", h: "4. Prüfen, ob es wirkt.", lede: "Überwachung nach BSI-Standard 300-1, Kapitel 5: Ein vorhandenes Dokument und ein erledigter Arbeitsschritt sind noch keine Wirksamkeitsprüfung.", items: [
        { title: "Nachweise", text: "Bezug, Gültigkeit und Prüfstatus stehen beim Nachweis. <a href=\"/funktionen/nachweismanagement/\">Zum Nachweismanagement</a>." },
        { title: "Audit und Managementbewertung", text: "Auditprogramm, Feststellungen, Kennzahlen und Managementbewertung führen Prüfergebnisse und Entscheidungen zusammen." },
        { title: "Berichte mit Datenstand", text: "Ein Sicherheitskonzept ist eine Momentaufnahme. Ändern sich Grundlagen, zeigt ein Hinweis, warum es veraltet ist. <a href=\"/funktionen/berichtswesen/\">Zum Berichtswesen</a>." },
        { title: "Austausch mit Prüfenden", text: "Erwartungen werden importiert und Nachweise als Prüfpaket exportiert. Der Austausch benötigt kein Gastkonto." },
      ] },
      { type: "gaps", h: "5. Aus Erkenntnissen besser werden.", lede: "Kontinuierliche Verbesserung nach BSI-Standard 300-1, Kapitel 6: Aus Feststellungen wird Folgearbeit, deren Wirkung geprüft wird.", items: [
        { title: "Erledigt ist nicht wirksam", text: "Eine Maßnahme schließt erst nach geprüften Wirksamkeitskriterien, gültigem Nachweis und erforderlicher Freigabe. Im Kleinunternehmen-Modus entfällt nur die personelle Trennung." },
        { title: "Sicherheitsvorfälle", text: "Eine Zeitlinie hält Ereignisse und Entscheidungen fest; Korrekturen werden ergänzt. Erkenntnisse können bewusst in Folgearbeit übernommen werden." },
        { title: "Notfallvorsorge und Übungen", text: "BIA, Verfahren, Organisation und Übungen nutzen den gemeinsamen Bestand. Im Lagezentrum stehen Plan und Ist nebeneinander. <a href=\"/funktionen/bcm-notfallmanagement/\">Zu BCM und Notfallmanagement</a>." },
        { title: "Lernen während der Arbeit", text: "Einrichtungsassistent, Feldhilfe und eine getrennte Übungsumgebung helfen beim Einstieg. <a href=\"/funktionen/learn-while-using/\">Zum Lern-Modus</a>." },
      ] },
      { type: "note", h: "Das ist noch nicht alles.", text: "Weitere Funktionen sind bereits umgesetzt. Wir bereiten ihre Vorstellung noch vor – schau später wieder vorbei." },
    ],
    cta: { h: "Die Arbeit hängt zusammen.", text: "Auf der Startseite zeigen wir anhand von Demodaten, wie einzelne Schritte in der Pre-Alpha aussehen." },
  },
  "/grundschutz-plus-plus/software/": {
    lede: "Der Grundschutz++-Katalog liefert Anforderungen. Erst mit Geschäftsprozessen, Verantwortlichen und Entscheidungen wird daraus die tägliche Arbeit. BlueProceedings ISMS hält diese Schritte in einem Datenstand zusammen.",
    sections: [
      { type: "chain", h: "Ein Weg durch die Anwendung.", lede: "Der BSI-Standard 300-1 beschreibt fünf Prozessschritte. So unterstützt die Pre-Alpha einen Durchlauf:", items: [
        { title: "Rahmen festlegen", text: "Kontext, Geltungsbereich, Schutzbedarf, Rollen und Risikomethodik erfassen; die Leitung gibt wesentliche Grundlagen frei (Kapitel 2)." },
        { title: "Bestand und Anforderungen verbinden", text: "Prozesse und Assets zum Informationsverbund zuordnen. Katalog, Zielobjektkategorien und Blaupause führen zum Anforderungspaket (Kapitel 3)." },
        { title: "Umsetzung planen", text: "Umsetzungsstände erheben, Lücken bearbeiten, Risiken bewerten und Maßnahmen mit Verantwortung und Frist planen (Kapitel 4)." },
        { title: "Überwachen", text: "Nachweise prüfen, Audits und Managementbewertung vorbereiten und Berichte mit ihrem Datenstand ansehen (Kapitel 5)." },
        { title: "Verbessern", text: "Feststellungen und Erkenntnisse bearbeiten und die Wirksamkeit von Maßnahmen prüfen (Kapitel 6)." },
      ], loop: "<b>Ein Kreislauf, keine Einbahnstraße.</b> Neue Informationen oder Änderungen können eine erneute Prüfung auslösen. Die fachliche Entscheidung bleibt bei den Verantwortlichen." },
      { type: "gaps", h: "Was die Verbindung im Alltag bringt.", items: [
        { title: "Aus einem Katalog wird Arbeit", text: "Eine Anforderung zeigt, aus welchem Katalog sie stammt und für welches Objekt sie gilt. Verantwortliche bearbeiten sie dort, wo der Bezug sichtbar ist." },
        { title: "Aus einer Lücke wird ein Risikoweg", text: "Ursache, Bewertung, Behandlung, Maßnahme und Restrisiko bleiben verbunden. Wer entscheidet, sieht auch Frist und nächste Prüfung." },
        { title: "Aus einem Bericht wird kein Dauerzustand", text: "Wird ein Sicherheitskonzept durch spätere Änderungen veraltet, nennt der Hinweis die betroffenen Bereiche." },
        { title: "Arbeit wird verteilt", text: "RACI und persönliche Aufgaben helfen bei der Zusammenarbeit. Der Vertretungsplan zeigt, wenn eine Rolle bei Abwesenheit unbesetzt bleibt." },
      ] },
      { type: "feature", h: "Veraltet statt falsch-grün.", paragraphs: ["Ein Sicherheitskonzept hält einen Stand fest. Ändern sich danach seine Grundlagen, zeigt die Anwendung, welche Bereiche betroffen sind und wann sie geändert wurden.", "Das Beispiel zeigt einen Informationsverbund mit Demodaten. Die Verantwortlichen prüfen, was neu bewertet und berichtet werden muss."], image: "staleReport" },
      { type: "note", h: "Vorbereitung unterstützen, nicht Zertifizierung versprechen.", text: "Die Anwendung hält Arbeit und Entscheidungen nachvollziehbar zusammen. Umsetzung, fachliche Beurteilung und die Entscheidung einer prüfenden Stelle ersetzt sie nicht. BlueProceedings ISMS ist derzeit Pre-Alpha; die erste Version ist für Januar 2027 geplant." },
    ],
  },
  "/isms-software/bsi-grundschutz/": {
    h1: "BSI-orientierte Informationssicherheit im Alltag.",
    lede: "Wer mit dem BSI-Standard 300-1 arbeitet, braucht mehr als eine Liste von Anforderungen. BlueProceedings ISMS verbindet die Methodik Grundschutz++ mit Bestand, Zuständigkeiten und laufenden Entscheidungen.",
    sections: [
      { type: "gaps", h: "Was das für die tägliche Arbeit bedeutet.", items: [
        { title: "Die Leitung setzt den Rahmen", text: "Kontext, Anwendungsbereich, Leitlinie und Risikomethodik bilden die Grundlage. Freigaben und ihre Begründungen bleiben nachvollziehbar (BSI-Standard 300-1, Kapitel 2)." },
        { title: "Mit dem wichtigen Prozess beginnen", text: "Prozesse und ihre Assets werden schrittweise erfasst. Aus dem Katalog entsteht ein auf den Informationsverbund bezogenes Anforderungspaket (Kapitel 3)." },
        { title: "Lücken unterschiedlich behandeln", text: "MUSS- und SOLLTE-Anforderungen folgen unterschiedlichen Wegen. Dauerhaft nicht erfüllte SOLLTE-Anforderungen führen in die Risikobetrachtung (Kapitel 4.1.2)." },
        { title: "Überwachung und Verbesserung", text: "Nachweise, Audits, Managementbewertung und Wirksamkeitsprüfungen begleiten das ISMS über die erste Umsetzung hinaus (Kapitel 5 und 6)." },
      ] },
      { type: "gaps", h: "Wer damit arbeitet.", items: [
        { title: "Informationssicherheit", text: "Der ISB behält offene Arbeit, Risiken, Fristen und den Stand der Informationsverbünde im Blick." },
        { title: "Fachbereiche und IT", text: "Verantwortliche pflegen ihre Prozesse und Objekte, bearbeiten Aufgaben und liefern Nachweise." },
        { title: "Institutionsleitung", text: "Die Leitung entscheidet über den Rahmen und erhält die Vorgänge, für die ihre Freigabe gebraucht wird." },
        { title: "Prüfende", text: "Erwartungen lassen sich importieren und Nachweise als Prüfpaket übergeben; ein Gastkonto ist nicht nötig." },
      ] },
      { type: "note", h: "Grundschutz++ statt automatischer Zertifizierung.", text: "BlueProceedings ISMS unterstützt die Vorbereitung auf Grundlage von Grundschutz++. Ein Werkzeug ersetzt weder die Umsetzung in der Institution noch die Beurteilung einer prüfenden Stelle. Veröffentlichte Mappings zum IT-Grundschutz dienen beim Umstieg als Orientierung, nicht als automatische Übernahme einer Erfüllung." },
    ],
  },
  "/funktionen/oscal-katalogverwaltung/": {
    h1: "Kataloge importieren und bewusst fortschreiben.",
    lede: "Eine Anforderung soll nicht nur lesbar sein. Es muss auch erkennbar bleiben, woher sie kommt, für welches Objekt sie gilt und was ein neuer Katalogstand verändert.",
    sections: [
      { type: "chain", h: "Vom OSCAL-Katalog zum Anforderungspaket.", items: [
        { title: "Importieren", text: "Der Grundschutz++-Katalog und weitere OSCAL-Kataloge werden mit Quelle und Version eingelesen; ein Profil kann die Auswahl und Parameter beeinflussen." },
        { title: "Blaupause auswählen", text: "Eine Blaupause hält die Auswahl, Ergänzungen, begründete Ausschlüsse und Parameter für einen Kontext zusammen." },
        { title: "Objekte zuordnen", text: "Assets werden Zielobjektkategorien zugeordnet. Daraus und aus den verbundweiten Anforderungen entsteht das Anforderungspaket (BSI-Standard 300-1, Kapitel 3.4)." },
        { title: "Neuen Stand vergleichen", text: "Vor dem Wechsel zeigt die Anwendung neue, geänderte und entfallene Anforderungen sowie Änderungen an Parametern." },
        { title: "Bewusst übernehmen", text: "Der Wechsel wird begründet und freigegeben. Betroffene Einträge werden anschließend zur Neubewertung angezeigt." },
      ] },
      { type: "gaps", h: "Was dabei erhalten bleibt.", items: [
        { title: "Herkunft", text: "Katalogstand und Auswahl bleiben an der Anforderung nachvollziehbar – auch wenn mehrere Kataloge genutzt werden." },
        { title: "Vererbung", text: "Die Anwendung berechnet die Vererbung entlang der Zielobjektkategorien. Die Zuordnung eines Assets treffen und begründen Menschen." },
        { title: "Wiederverwendung", text: "Blaupausen und Vorlagen helfen, wiederkehrende Auswahlen und Strukturen für weitere Informationsverbünde zu nutzen." },
      ] },
      { type: "feature", h: "Eine Blaupause mit Herkunft.", paragraphs: ["Die Übersicht zeigt, welche Anforderungen aus den Katalogen gelten, welche begründet ausgeschlossen oder ergänzt wurden und welche Parameter festgelegt sind.", "Im Beispiel ist eine freigegebene Blaupause mit zwei Katalogen und Demodaten zu sehen."], image: ["blueprintOverview", "blueprintRules"], imageLabels: ["Übersicht", "Regeln"] },
      { type: "note", h: "Maschinenlesbar heißt nicht umgesetzt.", text: "Ein Import oder Export im OSCAL-Format überträgt strukturierte Informationen. Ob eine Anforderung umgesetzt ist und wirkt, muss fachlich geprüft werden." },
    ],
  },
  "/funktionen/risikomanagement/": {
    h1: "Risiken und Maßnahmen zusammenhalten.",
    lede: "Eine Zeile im Risikoregister verrät selten, woher ein Risiko kommt, was dagegen getan wird und was danach übrig bleibt. BlueProceedings ISMS hält diesen Weg in einer Risikoakte zusammen.",
    sections: [
      { type: "chain", h: "Von der Ursache zur Wiedervorlage.", items: [
        { title: "Risiko erkennen", text: "Ein Kandidat kann zum Beispiel aus einer Umsetzungslücke, einem Vorfall oder einer Feststellung entstehen. Die Verantwortlichen prüfen ihn und entscheiden über die Übernahme." },
        { title: "Betroffenheit klären", text: "Ein Abhängigkeitsgraph schlägt mögliche betroffene Objekte vor. Erreichbar heißt nicht betroffen: Jeder Vorschlag wird geprüft und begründet." },
        { title: "Bewerten", text: "Eintritt und Auswirkung werden anhand der festgelegten Kriterien eingeschätzt; betroffene Schutzziele und Risikoeigentümer bleiben zugeordnet." },
        { title: "Behandeln", text: "Die gewählte Behandlung verweist auf Maßnahmen mit Verantwortung, Fortschritt und Frist." },
        { title: "Restrisiko entscheiden", text: "Was nach der Behandlung verbleibt, wird bewertet und im festgelegten Rahmen autorisiert. Befristete Entscheidungen erhalten einen Prüftermin." },
      ] },
      { type: "feature", h: "Der Risikoweg auf einer Seite.", paragraphs: ["Im Beispiel ist eine Anforderung zur Speicherverschlüsselung noch nicht umgesetzt. Das Risiko beschreibt die mögliche Offenlegung; daneben stehen die Maßnahme, ihr Fortschritt und das geschätzte Restrisiko.", "Die Risikoakte zeigt zusätzlich, welche Prozesse, Informationen und Komponenten betroffen sind. Das Beispiel verwendet Demodaten."], image: ["riskPath", "riskFile"], imageLabels: ["Risikoweg", "Risikoakte"] },
      { type: "gaps", h: "Wann Grundschutz++ eine Betrachtung verlangt.", lede: "Der BSI-Standard 300-1 nennt in Kapitel 2.11 und Anhang 3 unter anderem diese Auslöser:", items: [
        { title: "Hoher Schutzbedarf", text: "Ein Geschäftsprozess hat bei mindestens einem Schutzziel hohen Schutzbedarf (Mindestkriterium 32)." },
        { title: "Nicht ausreichend abgedecktes Asset", text: "Ein relevantes Asset ist durch Zielobjektkategorien und zugeordnete Anforderungen nicht hinreichend abgedeckt (Mindestkriterium 33)." },
        { title: "Dauerhaft offene SOLLTE-Anforderung", text: "Eine anwendbare SOLLTE-Anforderung wird auf absehbare Zeit oder endgültig nicht erfüllt (Mindestkriterium 34). Eine MUSS-Anforderung lässt sich nicht durch Risikoakzeptanz ersetzen." },
        { title: "Änderung oder regelmäßige Prüfung", text: "Die Risikobetrachtung ist mindestens jährlich und bei wesentlichen Änderungen zu überprüfen (Mindestkriterium 35)." },
      ] },
      { type: "note", h: "Die Leitung verantwortet den Rahmen.", text: "Die Leitung autorisiert Risikomethodik, Kriterien und Risikoappetit sowie Restrisiken (BSI-Standard 300-1, Anhang 3, Kriterien 9 und 30). BlueProceedings bildet dafür festgelegte Regeln und Entscheidungen ab; es trifft die fachliche Entscheidung nicht selbst." },
    ],
  },
  "/funktionen/nachweismanagement/": {
    h1: "Nachweise mit Bezug, Gültigkeit und Prüfung.",
    lede: "Eine Datei allein sagt noch nicht, was sie belegt oder ob sie aktuell ist. BlueProceedings ISMS hält den Nachweis dort, wo er für Anforderungen, Maßnahmen und Prüfungen gebraucht wird.",
    sections: [
      { type: "gaps", h: "Vier Fragen an einen Nachweis.", items: [
        { title: "Wofür gilt er?", text: "Der Bezug zur Anforderung, zum Objekt oder zur Prüfung gibt der Datei ihren Kontext." },
        { title: "Ist er noch gültig?", text: "Gültigkeitszeitraum und Ablaufdatum machen sichtbar, wann ein Nachweis erneut geprüft oder ersetzt werden muss." },
        { title: "Wer hat ihn geprüft?", text: "Prüfstatus, prüfende Person, Zeitpunkt und Begründung bleiben beim Vorgang." },
        { title: "Reicht er für den Abschluss?", text: "Eine Maßnahme braucht geprüfte Wirksamkeitskriterien, einen akzeptierten gültigen Nachweis und die erforderliche Freigabe. Fehlt etwas, bleibt der Abschluss gesperrt." },
      ] },
      { type: "feature", h: "Erledigt ist nicht wirksam.", paragraphs: ["Im Beispiel stammt eine Maßnahme aus einer Audit-Feststellung. Sie ist in Umsetzung, aber die Kriterien für die Wirksamkeitsprüfung fehlen noch.", "Die Anwendung nennt den fehlenden Schritt. Erst nach Prüfung und erforderlicher Freigabe kann die Maßnahme geschlossen werden."], image: "effectivenessCycle" },
      { type: "gaps", h: "Für die Prüfung vorbereiten.", items: [
        { title: "Erwartungen einlesen", text: "Die Erwartungsliste der prüfenden Stelle kann importiert werden. So wird sichtbar, welche Unterlagen noch fehlen." },
        { title: "Prüfpaket übergeben", text: "Nachweise und Prüfinformationen werden als Datei exportiert. Die Weitergabe erfolgt bewusst durch eine berechtigte Person, ohne Gastkonto." },
      ] },
      { type: "note", h: "Prüfung bleibt eine fachliche Aufgabe.", text: "Die Anwendung unterstützt die Dokumentation und Vorbereitung. Ob ein Nachweis eine Anforderung ausreichend belegt, beurteilen die zuständigen Personen und Prüfenden (BSI-Standard 300-1, Kapitel 5)." },
    ],
  },
  "/funktionen/berichtswesen/": {
    h1: "Berichte, die ihren Datenstand kennen.",
    lede: "Ein Bericht ist eine Momentaufnahme. Wenn sich später Risiken, Schutzbedarf oder andere Grundlagen ändern, sollte das sichtbar sein – statt eine alte Fassung weiter für aktuell zu halten.",
    sections: [
      { type: "feature", h: "Veraltet statt falsch-grün.", paragraphs: ["Das Sicherheitskonzept speichert seinen Ausgabestand. Ändern sich danach Grundlagen, zeigt die Anwendung den betroffenen Bereich und Angaben zur Änderung.", "Im Beispiel sind unter anderem Risiken und Schutzbedarfsprofil nach dem Berichtsstand geändert worden. Die Verantwortlichen entscheiden, was neu zu prüfen ist."], image: "staleReport" },
      { type: "gaps", h: "Der passende Bericht für die Aufgabe.", items: [
        { title: "Sicherheitskonzept", text: "Der Bericht fasst den Stand eines Informationsverbunds zusammen und macht spätere Änderungen an seiner Grundlage sichtbar." },
        { title: "Auditbericht", text: "Berichtsvorlagen stellen Prüfungsstand, Ergebnisse und Feststellungen für die jeweilige Prüfung zusammen." },
        { title: "Bericht für die Leitung", text: "Eine Leitungsvorlage bereitet Feststellungen, Risiken, Kennzahlen und anstehende Maßnahmen für Entscheidungen auf." },
        { title: "Prüfpaket und OSCAL", text: "Für den Austausch stehen neben lesbaren Berichten auch Prüfpakete und maschinenlesbare OSCAL-Ausgaben zur Verfügung." },
      ] },
      { type: "feature", h: "Ein Bericht für die Leitung.", paragraphs: ["Im Beispiel fasst der Auditbericht die Kernaussage, offene Feststellungen, Fristen und Risikoverteilung für die Leitung zusammen.", "Die Daten sind fiktiv. Welche Aussage aus ihnen folgt, entscheiden die Verantwortlichen."], image: "reportLeadership" },
      { type: "note", h: "Ein Bericht ersetzt keine Prüfung.", text: "Ein PDF oder ein maschinenlesbarer Export dokumentiert einen Stand. Ob die Angaben vollständig und fachlich tragfähig sind, prüfen Menschen. Der BSI-Standard 300-1 beschreibt Leistungsbewertung und Managementbewertung in Kapitel 5." },
    ],
  },
  "/funktionen/bcm-notfallmanagement/": {
    h1: "BIA, Abhängigkeiten und Wiederanlauf zusammenführen.",
    lede: "Notfallvorsorge besteht oft aus getrennten Unterlagen: Analyse, Verfahren, Personal und Übungen. BlueProceedings ISMS verbindet sie mit denselben Prozessen, Komponenten und Standorten wie das übrige ISMS.",
    sections: [
      { type: "gaps", h: "Von der Vorsorge zur Übung.", items: [
        { title: "Business-Impact-Analyse", text: "Für Prozesse werden Auswirkungen, tolerierbare Ausfallzeit, Wiederanlaufziele und Mindestbetrieb mit Annahmen und Begründungen erfasst." },
        { title: "Verfahren und Abhängigkeiten", text: "Wiederanlauf und Wiederherstellung beziehen sich auf betroffene Objekte, ihre Voraussetzungen und benötigte Mittel." },
        { title: "Organisation und Kontakte", text: "Notfallfunktionen, Teams und Vertretungen zeigen, wer im Ernstfall handeln soll und wo Angaben fehlen." },
        { title: "Übungen", text: "Planspiele und Tests erhalten Szenario, Beteiligte, Ziele, Erfolgskriterien und Abbruchbedingungen. Erkenntnisse werden zur Folgearbeit." },
      ] },
      { type: "feature", h: "Notfallvorsorge auf einen Blick.", paragraphs: ["Das Gesamtbild verbindet Prozesse mit Fristen, Verfahren, Personal und Mitteln, Organisation und den letzten Übungen. Lücken stehen neben dem, was bereits vorbereitet ist.", "Das zweite Bild zeigt ein Planspiel mit Demodaten: Beteiligte, Annahme, Abbruchbedingung und Erfolgskriterium."], image: ["preparednessOverview", "exercise"], imageLabels: ["Gesamtbild", "Übung"] },
      { type: "note", h: "Der Krisenstab entscheidet.", text: "Planungsvorschläge und Fortschreibungen hängen von den erfassten Annahmen ab. Sie ersetzen keine Lagebeurteilung; der Krisenstab prüft die tatsächliche Situation und entscheidet." },
    ],
  },
  "/funktionen/learn-while-using/": {
    crumb: "Lern-Modus",
    lede: "Eine neue Methodik wird nicht leichter, wenn jede Erklärung in einem zweiten Handbuch gesucht werden muss. BlueProceedings ISMS verbindet kurze Hinweise mit einer getrennten Umgebung zum Ausprobieren.",
    sections: [
      { type: "gaps", h: "Hilfe dort, wo sie gebraucht wird.", items: [
        { title: "Einrichtungsassistent", text: "Er orientiert sich am vorhandenen Datenstand und zeigt den nächsten sinnvollen Schritt, statt unabhängig vom Fortschritt einen festen Fragebogen abzuspulen." },
        { title: "Feldhilfe", text: "Kurze Erklärungen an Begriffen und Entscheidungen nennen Zweck und Folgen und verweisen, wo passend, auf den BSI-Standard 300-1." },
        { title: "Lern-Modus", text: "Geführte Module und freies Erkunden nutzen eine getrennte Übungsumgebung. So lassen sich Abläufe ausprobieren, ohne echte ISMS-Daten zu verändern." },
      ] },
      { type: "chain", h: "Ein möglicher Einstieg.", items: [
        { title: "Den Rahmen verstehen", text: "Kontext, Geltungsbereich, Rollen und Verantwortung kennenlernen." },
        { title: "Einen Prozess erfassen", text: "Seine Informationen und Abhängigkeiten verbinden und den Schutzbedarf betrachten." },
        { title: "Anforderungen bearbeiten", text: "Nachvollziehen, wie Katalog und Zielobjektkategorie zum Anforderungspaket beitragen." },
        { title: "Prüfen und verbessern", text: "Maßnahmen, Nachweise und Freigaben im Zusammenhang ansehen." },
      ] },
      { type: "note", h: "Anleitung ersetzt keine Verantwortung.", text: "Der Lern-Modus erklärt den Ablauf und die Anwendung. Risikobewertungen, Freigaben und Entscheidungen trifft weiterhin die zuständige Person." },
    ],
  },
};
const bsiSeite = produktseiten["/isms-software/bsi-grundschutz/"].sections;
bsiSeite.splice(1, 0,
  { type: "feature", h: "Fachbereiche arbeiten gleichzeitig.", paragraphs: ["Der ISB muss nicht jede Angabe in aufeinanderfolgenden Terminen selbst aufnehmen. Fachbereiche erfassen ihre Prozesse und Objekte, während der ISB den Stand bündelt und die Leitung die vorgesehenen Entscheidungen trifft.", "Die Darstellung vergleicht zwei mögliche Abläufe. Sie ist schematisch und keine Zeitmessung: Fachbereiche übernehmen eigene Arbeit, Rückmeldungen und Freigaben bleiben nachvollziehbar."], image: "parallelWork" },
  { type: "gaps", h: "Wiederverwenden, statt erneut anzufangen.", items: [
    { title: "Kataloge und Blaupausen", text: "OSCAL-Kataloge liefern strukturierte Anforderungen. Eine Blaupause hält Auswahl, Ergänzungen, Ausschlüsse und Parameter für einen Kontext zusammen und kann für weitere Informationsverbünde genutzt werden." },
    { title: "Informationsverbundvorlagen", text: "Wiederkehrende Strukturen und Komponentenrollen als Ausgangspunkt nutzen, lokal zuordnen und an den eigenen Informationsverbund anpassen." },
    { title: "Komponenten und Komponentensätze", text: "Eine einzelne virtuelle Maschine oder einen ganzen wiederkehrenden Stack aus Vorlagen anlegen. Die erzeugten Komponenten bleiben eigenständig; spätere Vorlagenänderungen überschreiben sie nicht." },
    { title: "Vererbung und gemeinsame Daten", text: "Schutzbedarf und Anforderungen werden entlang der erfassten Beziehungen abgeleitet. Prozesse, Komponenten und Verantwortlichkeiten dienen zugleich Risiken, Notfallvorsorge und Berichten." },
    { title: "Aufgaben und Freigaben", text: "Zuständigkeiten, Fristen und Rückmeldungen stehen am Vorgang. Die erforderliche Prüfung und Freigabe bleiben Teil des Ablaufs." },
  ] },
  { type: "feature", h: "Vorlagen für den eigenen Bestand.", paragraphs: ["Eine Virtualisierungsumgebung besteht oft aus denselben Arten von Komponenten. Eine Komponentensatz-Vorlage hält den wiederkehrenden Aufbau zusammen; Komponentenvorlagen helfen bei einzelnen Systemen.", "Im Beispiel entstehen aus einem vorbereiteten Stack neue Komponenten. Namen, Standort und die tatsächliche Umsetzung prüfst du für deinen eigenen Bestand."], image: ["componentSetTemplate", "componentTemplates", "informationDomainTemplates"], imageLabels: ["Komponentensatz", "Komponenten", "Informationsverbünde"] }
);
const oscalSeite = produktseiten["/funktionen/oscal-katalogverwaltung/"].sections;
oscalSeite.splice(2, 0,
  { type: "gaps", h: "Katalogstände vergleichen und migrieren.", items: [
    { title: "Versionen einer Katalogfamilie", text: "Neue Stände werden als eigene Versionen mit Herkunft geführt. Bestehende Informationsverbünde wechseln nicht unbemerkt auf einen neuen Katalog." },
    { title: "Vorher sehen, was sich ändert", text: "Der Vergleich zeigt neue, geänderte und entfallene Anforderungen sowie Änderungen an Parametern. So lässt sich der Umfang der Folgearbeit vor der Übernahme einschätzen." },
    { title: "Mit Entscheidung übernehmen", text: "Die Migration erfolgt bewusst und mit Freigabe. Betroffene Anforderungen werden zur erneuten Bewertung gestellt; ein alter Erfüllungsstand belegt nicht automatisch den neuen Text." },
  ] },
  { type: "gaps", h: "Parameter machen Anforderungen konkret.", lede: "Der Anwenderkatalog beschreibt Anforderungen strukturiert in OSCAL. Manche enthalten Platzhalter, deren Werte für den jeweiligen Kontext festgelegt werden müssen.", items: [
    { title: "Vom Katalog zum konkreten Wert", text: "Katalog, Profil und Blaupause können Werte vorgeben. Offene Parameterslots werden im Informationsverbund ergänzt; die Herkunft des jeweils geltenden Werts bleibt nachvollziehbar." },
    { title: "Unvollständiges erkennen", text: "Die Übersicht zeigt festgelegte und offene Parameter. So bleibt sichtbar, wo eine Anforderung noch nicht vollständig konkretisiert ist." },
    { title: "Änderungen prüfen", text: "Ändern sich Parameter mit einem neuen Katalogstand oder einer Auswahl, gehören sie zum Vergleich und zur fachlichen Neubewertung." },
  ] }
);
const risikoSeite = produktseiten["/funktionen/risikomanagement/"].sections;
risikoSeite.splice(2, 0,
  { type: "feature", h: "Was könnte mitbetroffen sein?", paragraphs: ["Fällt eine Komponente aus, können auch davon abhängige Prozesse und Systeme betroffen sein. Die Ausbreitungsprüfung folgt den erfassten Beziehungen und schlägt mögliche Betroffenheiten vor.", "Im Beispiel steht ein Datenbank-Cluster im Mittelpunkt. Du bestätigst oder verwirfst die Vorschläge mit Begründung oder hältst fest, welche Informationen für eine Entscheidung fehlen."], image: "impactGraph" },
  { type: "feature", h: "Wenn sich eine Entscheidungsgrundlage ändert.", paragraphs: ["Interne und externe Einflussfaktoren, etwa eine Änderung der Rechtslage oder der Lieferkette, lassen sich mit Risikobewertungen und anderen Entscheidungen verknüpfen. Quelle, Annahmen, Unsicherheit und nächster Review bleiben beim Faktor.", "Wird eine inhaltlich geänderte Folgeversion freigegeben oder ein verwendeter Faktor zurückgezogen, zeigt die Anwendung Prüfhinweise bei den betroffenen Entscheidungen: etwa Risiken, Schutzbedarfen, Dokumenten und Maßnahmen. Die Verantwortlichen prüfen, ob sich ihre Entscheidung ändern muss. Der Faktor erzeugt nicht automatisch ein neues Risiko und ändert keine Bewertung selbst.", "Das Beispiel zeigt einen Faktor mit seinen offenen Prüfhinweisen und Links zu den Entscheidungen."], image: "contextFactor" },
  { type: "gaps", h: "Risiken im Betrieb verfolgen.", items: [
    { title: "Kandidaten prüfen", text: "Lücken, Vorfälle, Auditfeststellungen oder Kennzahlen können Anlass für einen Risikokandidaten sein. Erst die bewusste Übernahme macht daraus ein formales Risiko." },
    { title: "Bewertung nachvollziehen", text: "Die freigegebene Risikomatrix verbindet Eintritt und Auswirkung zu einer nachvollziehbaren Risikostufe. Risikoeigentümer, Schutzziele und betroffene Objekte bleiben zugeordnet." },
    { title: "Behandlung und Wirksamkeit", text: "Maßnahmen tragen Verantwortung, Fristen und Fortschritt. Nachweise und Wirksamkeitsprüfung zeigen, ob die Behandlung trägt." },
    { title: "Risikolage und Review", text: "Übersichten zeigen verbleibende Belastungen und führen zu den einzelnen Risiken zurück. Wiedervorlagen und Änderungen geben Anlass, Bewertungen und befristete Entscheidungen erneut zu prüfen." },
  ] }
);
const berichtSeite = produktseiten["/funktionen/berichtswesen/"].sections;
berichtSeite.splice(2, 0,
  { type: "feature", h: "Eine Vorlage, verschiedene Berichte.", paragraphs: ["Eine Berichtsvorlage legt fest, welche Abschnitte ein Auditbericht enthält, zum Beispiel Prüfumfang, Nachweise, Feststellungen, Risiken und Kennzahlen. Du wählst das Audit; die Anwendung stellt den Bericht aus dem gepflegten Datenstand zusammen.", "Die Beispiele zeigen die Vorlagenübersicht, einen Kurzbericht und einen Bericht für die Leitung mit fiktiven Daten."], image: ["reportTemplateCards", "reportTemplates", "reportLeadership"], imageLabels: ["Vorlagen", "Kurzbericht", "Leitung"] },
  { type: "gaps", h: "Berichte vorbereiten und austauschen.", items: [
    { title: "Vorlagen übernehmen", text: "Berichtsvorlagen lassen sich als Datei weitergeben und einlesen, etwa von einer prüfenden Stelle oder einer anderen Institution. Vertraue der Quelle und prüfe die Vorlage vor ihrer Verwendung." },
    { title: "Aus dem ISMS-Bestand", text: "Sicherheitskonzept, Management- und Auditberichte greifen auf gepflegte Informationen zurück. So müssen dieselben Angaben nicht für jeden Bericht erneut zusammengestellt werden." },
    { title: "Version und Freigabe", text: "Das Dokumentregister hält Dokumentversionen, Klassifikation, Freigabe und Review zusammen. Ein freigegebener Stand bleibt als Momentaufnahme nachvollziehbar." },
    { title: "Lesbar oder maschinenlesbar", text: "Je nach Bericht stehen HTML und PDF zur Verfügung; für den Austausch gibt es unter anderem OSCAL-Ausgaben und Prüfpakete. Vertrauliche Übergaben können in unterstützten Formaten geschützt werden." },
  ] }
);
const bcmSeite = produktseiten["/funktionen/bcm-notfallmanagement/"].sections;
bcmSeite.splice(2, 0,
  { type: "feature", h: "Abhängigkeiten zeigen, bevor es ernst wird.", paragraphs: ["Ein Prozess kann sein Wiederanlaufziel nur erreichen, wenn auch die benötigten Prozesse rechtzeitig verfügbar sind. Die Übersicht verbindet Prozesse mit Schutzbedarf, Wiederanlaufzeit (RTO) und dem tolerierbaren Datenverlust (RPO).", "Im Beispiel soll die Netzleitstelle nach zwei Stunden wieder laufen, benötigt aber die Smart-Meter-Erfassung mit vier Stunden RTO. Der Konflikt steht direkt an der Verbindung. Auch die RPO-Werte sind an den Prozessen sichtbar; die dargestellte Warnung am Pfeil betrifft die RTO."], image: "processDependencies" },
  { type: "feature", h: "Wiederanlauf mit begrenzten Mitteln planen.", paragraphs: ["Wenn ein Standort oder eine Komponente ausfällt, konkurrieren Wiederanlaufschritte um Personal und Mittel. Die Anwendung vergleicht Planungsverfahren anhand der hinterlegten Abhängigkeiten und Annahmen.", "Das Beispiel zeigt die berechneten Vorschläge und den modellierten Verlust im Vergleich zu einem Ablauf ohne Wiederanlauf. Das Ergebnis ist eine Planungshilfe; der Krisenstab beurteilt die tatsächliche Lage."], image: "crisisRun" },
  { type: "feature", h: "Den Plan mit dem tatsächlichen Verlauf vergleichen.", paragraphs: ["Im Lagezentrum stehen geplante Schritte und der aktuelle Verlauf je Team nebeneinander. Verzug, gescheiterte Versuche und gefährdete Fristen werden sichtbar, solange noch gehandelt werden kann.", "Die Funktionsübung im Beispiel zeigt unter anderem einen überfälligen Prozess und eine ausstehende Information. Die rechnerische Fortschreibung unterstützt den Überblick, sie ersetzt keine Lagebeurteilung."], image: "planVsActual" },
  { type: "feature", h: "Einen Vorfall nachvollziehen.", paragraphs: ["Während eines Vorfalls hält die Zeitlinie fest, was beobachtet, entschieden und getan wurde. Korrekturen werden ergänzt, sodass auch ein geänderter Kenntnisstand nachvollziehbar bleibt.", "Das Beispiel zeigt den Verlauf einer Phishing-Kampagne mit Entscheidungen und beteiligten Rollen. Eine Berichtsvorlage für Sicherheitsvorfälle ist noch nicht Teil der Pre-Alpha."], image: "incidentTimeline" }
);
const lernen = produktseiten["/funktionen/learn-while-using/"];
lernen.h1 = "Grundschutz++ lernen, während du damit arbeitest.";
lernen.lede = "Grundschutz++ und der BSI-Standard 300-1 bringen eine neue Methodik und neue Abläufe mit. Sie zu verstehen braucht Übung. Im Lern-Modus lernst du direkt in der Anwendung, wie die Schritte zusammenhängen und was deine Rolle dazu beiträgt.";
lernen.sections.splice(1, 0,
  { type: "gaps", h: "Lernen im Zusammenhang, nicht nur Begriffe lesen.", items: [
    { title: "Ein Modul wählen", text: "Geführte Module führen durch konkrete Aufgaben, etwa Rollen zuweisen, einen Katalog importieren, Risiken behandeln oder ein Audit vorbereiten. Lernziel, Rolle und Voraussetzungen geben Orientierung." },
    { title: "In der Anwendung üben", text: "Eine Anleitung begleitet dich durch die echten Arbeitsoberflächen. Sie erklärt den nächsten Schritt, den fachlichen Hintergrund und warum die Aufgabe für das ISMS wichtig ist." },
    { title: "Ohne echte Daten ausprobieren", text: "Der Lern-Modus verwendet eine getrennte Umgebung mit fiktiven Übungsdaten. Dort kannst du Abläufe nachvollziehen und Entscheidungen erproben, ohne den produktiven Bestand zu verändern." },
    { title: "Rollen und Freigaben verstehen", text: "Ein ISMS entsteht gemeinsam. Im Lern-Modus lässt sich auch ausprobieren, wie Aufgaben zwischen Rollen weitergegeben und Entscheidungen eingereicht und freigegeben werden." },
    { title: "Eigenständig erkunden", text: "Neben geführten Schritten kannst du die Übungsumgebung frei erkunden und Zusammenhänge in deinem eigenen Tempo nachvollziehen." },
  ] }
);
for (const [pfad, inhalt] of Object.entries(produktseiten)) Object.assign(SEO_SEITEN[pfad], inhalt);
const ueberblick = SEO_SEITEN["/funktionen/"].sections;
ueberblick.splice(1, 0, { type: "feature", h: "Sehen, wer einspringt, bevor eine Rolle unbesetzt ist.", paragraphs: ["Fällt jemand aus, bleibt oft offen, wer die Aufgaben übernimmt. Der Vertretungsplan legt Abwesenheiten und Vertretungen je Rolle nebeneinander und weist auf Lücken hin.", "Im Beispiel fehlt während einer Abwesenheit die Vertretung für die Rolle Auditor. Der Plan zeigt die eingetragenen Abwesenheiten, nicht deren Grund."], image: "deputyPlan" });
ueberblick.splice(4, 0, { type: "feature", h: "Bei einem Vorfall sehen, was mitbetroffen sein könnte.", paragraphs: ["Ein Datenbank-Cluster fällt aus. Welche Prozesse und Komponenten davon abhängen, zeigt die Ausbreitungsprüfung anhand der erfassten Beziehungen.", "Die Anwendung schlägt mögliche Betroffenheiten vor. Du prüfst jeden Vorschlag und bestätigst oder verwirfst ihn mit Begründung."], image: "impactGraph" });
ueberblick.splice(7, 0, { type: "feature", h: "Ein Plan ohne Übung sagt wenig.", paragraphs: ["Im Lagezentrum steht der Plan eines Krisenlaufs neben dem tatsächlichen Ablauf: Was läuft, was ist abgeschlossen und wo entsteht Verzug?", "Das Beispiel zeigt eine Funktionsübung mit mehreren Teams. Die Fortschreibung hilft beim Überblick; der Krisenstab beurteilt die Lage."], image: "planVsActual" });
