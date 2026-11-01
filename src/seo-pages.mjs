const BSI_GSPP = "https://www.bsi.bund.de/dok/grundschutz-plus-plus";
const BSI_STANDARD_300_1 = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_300-1.pdf?__blob=publicationFile&v=1";
const BSI_OSCAL = "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Grundschutz-in-der-Informationssicherheit/Stand-der-Technik/OSCAL/oscal_node.html";
const BSI_BIBLIOTHEK = "https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek";
const NIST_OSCAL = "https://pages.nist.gov/OSCAL/";
const NIS2_RL = "https://eur-lex.europa.eu/eli/dir/2022/2555/oj";
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
  ["/funktionen/dienstleistersteuerung/", "Dienstleister"],
  ["/funktionen/weiteres/", "Weiteres"],
];

const produktReading = [
  ["Arbeitsweise", "welches Problem die Funktion löst und wie der Ablauf zusammenhängt"],
  ["Produktstand", "was heute in der Pre-Alpha vorhanden ist und wo ihre Grenzen liegen"],
];



export const SEO_SEITEN = {
  "/funktionen/": {
    title: "ISMS-Funktionen nach BSI-Standard 300-1",
    description: "Alle Funktionen von BlueProceedings ISMS nach den fünf Prozessschritten des BSI-Standards 300-1: Kontext, Risiken, Nachweise, Berichte, BCM, Dienstleister.",
    crumb: "Funktionen",
    asOf: "2026-11-01", mailTopic: "Funktionen", topics: "produkt", reading: produktReading,
    cta: { h: "Die Verbindung ist die eigentliche Funktion.", text: "Auf der Softwareseite folgt ein vollständiger Weg vom OSCAL-Katalog bis zur Überwachung." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/risikomanagement/", "/funktionen/bcm-notfallmanagement/"],
    sources: [produktQuelle],
  },

  "/funktionen/erhebung-und-planung/": {
    modified: "2026-11-01",
    title: "Erhebung und Planung nach BSI-Standard 300-1",
    description: "Prozessschritt 1 nach BSI-Standard 300-1: Kontext, Compliance, Anwendungsbereich, interessierte Parteien, Schutzbedarfsfeststellung bis Risikorahmen in der Software.",
    crumb: "Schritt 1: Erhebung und Planung", h1: "Prozessschritt 1: Erhebung und Planung, alle elf Teilschritte.",
    lede: "Der BSI-Standard 300-1 beschreibt Prozessschritt 1 in elf Teilschritten, vom Kontext der Institution bis zum Rahmen für die Risikobetrachtung (Kapitel 2.1 bis 2.11). Auf dieser Seite steht je Teilschritt, was der Standard verlangt und wie BlueProceedings ISMS es umsetzt, danach, was die Anwendung darüber hinaus kann. Der Grundgedanke: Fachlich ist Schritt 1 schlüssig, im Alltag läuft aber fast alles über zwei Personen. Die Anwendung verteilt die Arbeit, ohne die Verantwortung der Leitung zu verwässern, und hält fest, warum etwas entschieden wurde.",
    asOf: "2026-11-01", mailTopic: "Schritt 1 Erhebung und Planung", topics: "produkt",
    reading: [["Veröffentlicht", "was der BSI-Standard 300-1 in Kapitel 2 verlangt, sinngemäß zusammengefasst"], ["Auslegung", "wie die Pre-Alpha von BlueProceedings ISMS den Teilschritt umsetzt"]],
    sections: [
      {"type": "text", "anchor": "zusammenhang", "h": "Vom Anlass bis zur Entscheidung.", "paragraphs": ["Ein geänderter Vertrag kann eine Compliance-Verpflichtung betreffen; eine Erwartung des Auftraggebers kann zusätzliche Anforderungen begründen. Die Kontextspur hält diese Verbindungen zur Entscheidung fest. Die Leitungsmappe zeigt die Freigaben im Zusammenhang.", "Was daraus zuerst bearbeitet wird, soll erklärbar bleiben: Einflussfaktoren, Stakeholder und Compliance-Verpflichtungen können die Priorität von Anforderungen und Maßnahmen begründen. Die Anwendung zeigt die Beiträge; die Verantwortlichen entscheiden über die Reihenfolge. Den weiteren Weg zeigen <a href=\"/funktionen/risikomanagement/\">Risikomanagement</a> und <a href=\"/funktionen/nachweismanagement/\">Nachweismanagement</a>."]},
      { type: "pairs", id: "teilschritte", h: "Elf Teilschritte: was der Standard verlangt, was die Anwendung tut.", lede: "Die Bilder zu den Teilschritten folgen weiter unten in derselben Reihenfolge. Die ersten vier Teilschritte klären vor der ersten Maßnahme: Was wirkt auf uns? Was müssen wir einhalten? Wofür gilt das ISMS? Wer erwartet was?", items: [
        { title: "2.1 Kontext der Institution", ref: "Kapitel 2.1", bsi: "Die Faktoren erfassen, die von außen (unter anderem Geopolitik, Recht und Regulierung, Technologie, Wirtschaft, Gesellschaft, Umwelt) und von innen (unter anderem Strategie, Struktur, Prozesse, IT, Kultur, Ressourcen) auf die Institution wirken, und knapp festhalten, welche das ISMS prägen.", app: "Einflussfaktoren mit Quelle, Annahmen, Unsicherheit und Termin zur Überprüfung, eingeordnet in die zwölf Gruppen des Standards oder in eigene Gruppen. Die Kontextlandkarte zeigt, zu welcher Gruppe noch nichts erfasst ist; eingeordnet wird nichts automatisch. Entscheidungen und Maßnahmen nennen ihre Faktoren. Ändert sich ein Faktor, erscheinen Prüfhinweise bei allem, was auf ihm beruht." },
        { title: "2.2 Compliance-Management", ref: "Kapitel 2.2, 3.4.3", bsi: "Rechtskataster, Gesetze, Anforderungskataloge und interne Regelwerke analysieren, zuständige Compliance-Stellen anhören, gesetzliche und vertragliche Verpflichtungen dokumentieren. Die daraus folgenden Anforderungen gehören ins Anforderungspaket.", app: "Ein Compliance-Register mit eigenem Katalog, Kritikalität und Quelle je Compliance-Verpflichtung, dazu die Dokumentation nach Kapitel 2.2 (Anhörung, interne Regelwerke, Rechtskataster). Die Geltungsmatrix zeigt je Verpflichtung und Objekt, ob sie dort gilt, warum, und wie viele Anforderungen umgesetzt sind. Erfüllt zählt nur mit gültigem, akzeptiertem Nachweis. „Was fehlt noch?“ nennt Objekte ohne Verpflichtung, Verpflichtungen ohne Objekt und Dienstleister ohne gültigen Nachweis." },
        { title: "2.3 Anwendungsbereich", ref: "Kapitel 2.3", bsi: "Die Institutionsleitung legt aus Kontext und Verpflichtungen fest, welche Geschäftsprozesse, Institutionseinheiten, Standorte, Anwendungen und IT-Systeme dazugehören und welche externen Partner und Dienstleister berücksichtigt werden. Ausgeschlossenes kann benannt werden.", app: "Wir drehen es um: Alles Erfasste gehört dazu, ein Ausschluss braucht eine Begründung. Der Überblick zeigt die Objekte im Anwendungsbereich nach Objektart, nennt die ausgeschlossenen Objekte und zeigt die Schnittstellen zu Objekten außerhalb. Eine Entscheidungsvorlage fasst für die Leitung Ausschlüsse, Dienstleister-Abhängigkeiten und offene Befunde zusammen. In der Oberfläche heißt der Anwendungsbereich „Geltungsbereich“." },
        { title: "2.4 Interessierte Parteien", ref: "Kapitel 2.4", bsi: "Interne und externe Stakeholder identifizieren, ihre Erwartungen dokumentieren, Relevanz und Priorität festlegen und mit der Institutionsleitung klären, was verbindlich ins ISMS aufgenommen wird.", app: "Stakeholder in Gruppen auf einer Landkarte; jede Erwartung mit der Entscheidung, ob sie übernommen wird, und ihrer Begründung. Der Erwartungs-Trichter zeigt, was erfasst, entschieden, übernommen und mit Maßnahmen hinterlegt ist. Freigegebene Gewichte von 1 bis 5 auf Kataloge, Anforderungen, Maßnahmen, Kennzahlen oder Compliance-Verpflichtungen fließen in einen Vorschlag für die Reihenfolge ein." },
        { title: "2.5 Geschäftsprozesse", ref: "Kapitel 2.5, Anhang 2", bsi: "Die Geschäftsprozesse im Anwendungsbereich identifizieren und dokumentieren, etwa über Prozesslandkarten oder die vereinfachte Analyse aus Anhang 2. Es reicht, wenn der Zweck im Hinblick auf die Institutionsziele erkennbar ist.", app: "Prozessregister und Prozesslandkarte mit Haupt- und Teilprozessen, wahlweise mit Kennung, Zweck und Ergebnis, Beitrag zu den Zielen, Quelle und wesentlichen Anwendungen. Abhängigkeiten zwischen Prozessen tragen Wiederanlaufzeit (RTO) und tolerierbaren Datenverlust (RPO); Widersprüche stehen am Pfeil." },
        { title: "2.6 Schutzbedarfsfeststellung", ref: "Kapitel 2.6", bsi: "Je Geschäftsprozess den Schutzbedarf für Vertraulichkeit, Integrität und Verfügbarkeit feststellen: normal oder hoch, orientiert an Schadensszenarien. Bei hohem Schutzbedarf ist eine Risikobetrachtung erforderlich.", app: "Eine Matrix mit Prozessen und Schutzzielen zeigt den Schutzbedarf in Symbol und Wort, Abweichungen vom vererbten Vorschlag und ob die nötige Risikobetrachtung fehlt, abgelaufen oder vorhanden ist. Neue Installationen starten mit den fünf Schadensszenarien des Standards. Begründet wird wahlweise gesamt oder je Schutzziel; eigene Schutzziele sind möglich." },
        { title: "2.7 Informationssicherheitsleitlinie", ref: "Kapitel 2.7", bsi: "Eine Leitlinie mit Verpflichtung der Leitung, konkreten und messbaren Zielen, Strategie und Sicherheitsorganisation. Die Leitung gibt sie frei, allen Mitarbeitenden wird sie kommuniziert.", app: "Die Leitlinie hat Fassungen mit Freigabe, Termin zur Überprüfung und bestätigter Kommunikation. Das Dokument entsteht als PDF aus dem freigegebenen Stand, mit einer Momentaufnahme der Kennzahlen zu den Zielen. Die Ziele lassen sich mit Kennzahlen aus dem KPI-Register verbinden." },
        { title: "2.8 Rollen und Zuständigkeiten", ref: "Kapitel 2.8", bsi: "Rollen und Zuständigkeiten mit Qualifikationen festlegen, Interessenskonflikte vermeiden (IT-Leitung und ISB, DSB und ISB) und Schnittstellen festlegen.", app: "RACI-Matrix für die Institution und je Informationsverbund, Vertretungsplan und eine Konfliktmatrix, in der die Paare des Standards voreingestellt sind. Die Rollenkarte zeigt je Rolle Besetzung, Vertretung, RACI und Funktionstrennung; Rollen mit offener Absicherung stehen oben." },
        { title: "2.9 Dokumentation und Kommunikation", ref: "Kapitel 2.9", bsi: "Ein Verfahren für die interne und externe Kommunikation, auch bei sicherheitsrelevanten Projekten, und eine Dokumentenlenkung, die Nachvollziehbarkeit, Aktualität und Vollständigkeit über den Lebenszyklus sichert.", app: "Ein Dokumentregister mit Version, Status, Klassifikation, Überprüfung und Aufbewahrung. Wer laut RACI-Matrix zu konsultieren (C) oder zu informieren (I) ist, sieht die betreffenden Vorgänge unter „Beratung und Information“; wird ohne Beratung freigegeben, bleibt das festgehalten. Berichte haben ein Erzeugungsintervall und aufbewahrte Stände." },
        { title: "2.10 Festlegung und Freigabe der Vorgehensweise", ref: "Kapitel 2.10", bsi: "Die Verantwortung liegt bei der Institutionsleitung und kann nicht delegiert werden. Ihr werden Entscheidungsvorlagen vorgelegt, unter anderem zu Anwendungsbereich, Schutzbedarf, Reihenfolge der Geschäftsprozesse, Ressourcen und Leitlinie.", app: "Jede Freigabe hat eine Fassung, eine freigebende Rolle, ein Datum und einen Termin zur Überprüfung; Begründung und Einflussfaktoren lassen sich an der Freigabe festhalten. Die Leitungsmappe zeigt alle Freigaben an einem Ort, dazu neuere Fassungen, die noch warten, und Restrisiken, über die die Leitung entscheiden soll." },
        { title: "2.11 Initiierung der Risikobetrachtung", ref: "Kapitel 2.11, Anhang 3", bsi: "Den Rahmen auf drei Ebenen schaffen: strategisch (Risikoappetit, Akzeptanzkriterien), methodisch (Verfahren, Kriterien) und organisatorisch (Rollen, Risikoeigentümer). Die Institutionsleitung autorisiert ihn (Anhang 3, Kriterium 9).", app: "Ein Überblick zeigt die drei Ebenen mit ihrem Stand; was sich nicht laden lässt, heißt „unbekannt“ und zählt nie als Lücke. In der Risikomatrix legt die Leitung je Zelle fest, ob ein Restrisiko vorab akzeptiert, einzeln entschieden oder abgelehnt wird. Befristete Ausnahmen bleiben möglich." },
      ] },
      { type: "gaps", id: "darueber-hinaus", h: "Darüber hinaus: Fragen, die der Standard nicht stellt.", lede: "Der Standard sagt, was festzuhalten ist. Im Alltag kommen Fragen dazu, die eine Liste nicht beantwortet. Dafür hat die Pre-Alpha eigene Ansichten; sie zeigen an und bewerten nicht.", items: [
        { title: "Wo steht Prozessschritt 1?", text: "Eine Karte zeigt je Teilschritt 2.1 bis 2.11 den Stand und genau eine nachprüfbare Tatsache, etwa „neuere Fassung wartet auf Freigabe“, mit Sprung an die Stelle. Es gibt bewusst keine Gesamtzahl." },
        { title: "Warum tun wir das?", text: "Die Kontextspur zeigt zu einem Prozess, welche Stakeholder, Compliance-Verpflichtungen und Einflussfaktoren zu welchen Entscheidungen geführt haben, als Graph oder als Liste. Fehlt ein Objektbezug, steht dort „Ohne Objektbezug“, statt einen zu erfinden." },
        { title: "Hat sich etwas verändert?", text: "Ein Faktor kann an eine Kennzahl gebunden sein, etwa die Zahl überfälliger Maßnahmen. Nennt eine Entscheidung den Faktor, bleibt der damalige Wert festgehalten und steht neben dem heutigen. Ob neu entschieden wird, entscheiden die Zuständigen." },
        { title: "Was steht in den nächsten 90 Tagen an?", text: "Anstehende Überprüfungen und auslaufende Gültigkeiten von Faktoren, Stakeholdern und Compliance-Verpflichtungen an einer Stelle, nach Zeitraum geordnet und mit Kennzeichnung überfälliger Termine." },
        { title: "Was ist zuerst dran?", text: "Für Maßnahmen schlägt die Anwendung eine Priorität von P1 bis P5 vor. Es gibt keine Gesamtpunktzahl: Die höchste Einzelklasse bestimmt den Vorschlag, und die Erklärung nennt den Grund, etwa eine überschrittene Frist, die Gewichtung eines Stakeholders oder eine Compliance-Verpflichtung. Eine manuell gesetzte Priorität bleibt sichtbar." },
        { title: "Warum existiert diese Maßnahme?", text: "An jeder Maßnahme stehen Anlass, Bezüge und Einflussfaktoren an einer Stelle. So bleibt erkennbar, ob ihr Grund noch besteht." },
        { title: "Ein Nachweis, mehrere Verpflichtungen", text: "Ein Nachweis kann mehrere Compliance-Verpflichtungen stützen. Wird er ungültig oder läuft er ab, fällt er bei allen weg, und die Lücke wird sichtbar." },
        { title: "Dienstleister im Anwendungsbereich", text: "Ein ausgeschlossener Dienstleister, der eine Komponente im Anwendungsbereich betreibt, und Dienstleister ohne jeden Bezug werden gemeldet. Mehr dazu auf der Seite <a href=\"/funktionen/dienstleistersteuerung/\">Dienstleister und Lieferkette</a>." },
      ] },
      {"type": "feature", "id": "schritt1-stand", "h": "Wo steht Prozessschritt 1?", "paragraphs": ["Die Karte „Stand der Vorbereitung“ zeigt jeden Teilschritt mit Zustand und einer nachprüfbaren Tatsache. Von dort geht es zur passenden Stelle in der Anwendung. Eine Gesamtpunktzahl gibt es nicht.", "Im Beispiel warten neue Fassungen auf Freigabe, andere Grundlagen wurden seit der Freigabe geändert. Die Prozesse sind erfasst; beim Rahmen für die Risikobetrachtung gibt es noch offene Punkte. Die Aufnahme zeigt fiktive Demodaten vom 01.11.2026."], "image": "schritt1Stand"},
      { type: "feature", h: "Nacheinander oder parallel.", paragraphs: ["Klassisch holt der ISB jeden Fachbereich in einen Termin, trägt die Ergebnisse zusammen und geht mit den Risiken zur Leitung. Jede Rückfrage braucht einen neuen Termin.", "In BlueProceedings ISMS erfassen die Fachbereiche ihre Prozesse und Objekte gleichzeitig selbst. Der ISB bündelt und meldet direkt zurück, die Leitung prüft im Rahmen ihrer Regeln. Die Darstellung ist schematisch und keine Messung: Die Fachbereiche arbeiten etwas mehr, ISB und Leitung deutlich weniger."], image: "parallelWork" },
      { type: "feature", id: "t2-1", h: "2.1 Kontext: Wenn sich ein Faktor ändert.", paragraphs: ["Interne und externe Einflussfaktoren, etwa ein neues Gesetz oder eine Änderung in der Lieferkette, lassen sich mit Entscheidungen verknüpfen. Quelle, Annahmen, Unsicherheit und der Termin der nächsten Überprüfung stehen beim Faktor.", "Wird eine inhaltlich geänderte Fassung freigegeben, zeigt seine Seite, welche Freigaben, Risikobewertungen, Schutzbedarfe, Dokumente und Maßnahmen neu zu prüfen sind, jeweils mit Namen und Link. Der Faktor ändert keine Bewertung selbst; die Verantwortlichen entscheiden."], image: "contextFactor" },
      { type: "feature", id: "t2-2", h: "2.2 Compliance: Verpflichtungen an einem Ort.", paragraphs: ["Gesetze, Verträge und Satzungen sind der Ursprung vieler Anforderungen. Im Compliance-Register steht jede Compliance-Verpflichtung mit ihrem eigenen Katalog, ihrer Kritikalität und ihrer Quelle. Eigene Compliance-Verpflichtungen lassen sich direkt in der Oberfläche anlegen.", "Im Beispiel gehören DSGVO, TLS-Mindeststandard, NIS2 und ISO/IEC 27001 Annex A je zu einem anderen Katalog. Neu eingelesene Kataloge stehen auf „Noch nicht bewertet“, bis jemand den Erfüllungsstand erhebt."], image: "compliance" },
      { type: "feature", id: "t2-3", h: "2.3 Anwendungsbereich: Alles gehört dazu, außer es ist begründet.", paragraphs: ["Jedes erfasste Objekt liegt standardmäßig im Geltungsbereich. Wer etwas herausnimmt, begründet es, und der Zeitpunkt bleibt sichtbar. Das beugt Schatten-IT vor, weil kein System aus Versehen herausfällt.", "Für den Überblick lässt sich die Liste nach Objektart filtern und durchsuchen. Im Beispiel sind zwei Komponenten begründet ausgeschlossen."], image: "scope" },
      { type: "feature", id: "t2-4", h: "2.4 Interessierte Parteien: Wer erwartet was?", paragraphs: ["Stakeholder werden mit ihren Erwartungen erfasst. Jeder kann einen ganzen Katalog, eine einzelne Anforderung, eine Maßnahme oder eine Kennzahl von 1 bis 5 gewichten.", "Aus den Gewichtungen aller Stakeholder entsteht eine Rangfolge der Anforderungen und Maßnahmen. Sie hilft, die Reihenfolge der Umsetzung zu begründen."], image: ["stakeholderWeights", "stakeholderRanking"], imageLabels: ["Gewichtung", "Rangfolge"] },
      { type: "feature", id: "t2-5", h: "2.5 Geschäftsprozesse: Wer braucht wen?", paragraphs: ["Geschäftsprozesse werden mit Abhängigkeiten, Schutzbedarf, Wiederanlaufzeit (RTO) und tolerierbarem Datenverlust (RPO) erfasst. Passen die Zeitvorgaben nicht zusammen, steht der Konflikt am Pfeil.", "Im Beispiel soll die Netzleitstelle nach zwei Stunden wieder laufen, braucht aber die Smart-Meter-Erfassung mit einer RTO von vier Stunden. Das fällt beim Erfassen auf, nicht erst in der Notfallübung."], image: "processDependencies" },
      { type: "feature", id: "t2-6", h: "2.6 Schutzbedarf: Normal oder hoch, mit Begründung.", paragraphs: ["Grundschutz++ kennt zwei Schutzbedarfskategorien. Schadensszenarien legen fest, wann ein Schaden normal oder hoch ist; Kriterien begründen, wann vom vererbten Vorschlag nach oben oder unten abgewichen wird.", "Neben Vertraulichkeit, Integrität und Verfügbarkeit lassen sich eigene Schutzziele führen, im Beispiel Authentizität (AUTH) und Nachvollziehbarkeit (TRACE). Schon ein hohes Schutzziel löst die eigene Risikobetrachtung aus (BSI-Standard 300-1, Anhang 3, Kriterium 32)."], image: ["damageScenarios", "protectionCriteria"], imageLabels: ["Schadensszenarien", "Kriterien"] },
      { type: "feature", id: "t2-7", h: "2.7 und 2.9: Leitlinie und Dokumente.", paragraphs: ["Die Leitlinie hat Fassungen, eine Freigabe durch die Leitung und einen Termin zur nächsten Überprüfung. Je freigegebener Fassung wird bestätigt, wann sie an alle Mitarbeitenden kommuniziert wurde. Das Dokument selbst entsteht als PDF aus dem freigegebenen Stand.", "Alle ISMS-Dokumente stehen in einem Register mit Version, Status, Klassifikation, Überprüfung und Aufbewahrung. Das ist die Dokumentenlenkung, die Kapitel 2.9 verlangt."], image: ["policy", "documentRegister"], imageLabels: ["Leitlinie", "Dokumente"] },
      { type: "feature", id: "t2-8", h: "2.8 Rollen: Verteilen, ohne zu verwässern.", paragraphs: ["Wer einen Prozess oder ein System verantwortet, macht die Angaben dazu selbst. Der ISB steuert, die Leitung gibt frei. Die RACI-Matrix hält fest, wer etwas ausführt (R), wer es verantwortet und freigibt (A, genau eine Rolle), wer vorher gefragt wird (C) und wer das Ergebnis erfährt (I).", "Neben der Matrix für die Institution kann jeder Informationsverbund eine eigene haben, im Beispiel mit zwei konsultierten und mehreren informierten Rollen. Wer bei Abwesenheit einspringt, regelt getrennt davon der Vertretungsplan. Die Zahl der Nutzenden ist nicht begrenzt: Jede Fachabteilung kann mitarbeiten."], image: ["raciInstitution", "raciDomain"], imageLabels: ["Institution", "Informationsverbund"] },
      {"type": "feature", "id": "leitungsmappe", "h": "Freigaben an einem Ort.", "paragraphs": ["Die Leitungsmappe führt die Freigabestände je Thema zusammen: Fassung, Datum, freigebende Rolle, Gültigkeit und nächste Überprüfung. Neue Fassungen bleiben neben dem bisher freigegebenen Stand erkennbar. Entschieden wird in den verlinkten Bereichen.", "Im Beispiel sind die Risikomatrix und die Einstellung zur Leitungsfreigabe der Restrisiken freigegeben. Die Leitlinie hat eine neuere Fassung im Entwurf, beim Geltungsbereich wird auf eine inhaltliche Änderung hingewiesen. Die Aufnahme zeigt fiktive Demodaten vom 01.11.2026."], "image": "leitungsmappe"},
      { type: "feature", id: "t2-11", h: "2.10 und 2.11: Die Leitung setzt die Regel.", paragraphs: ["Nach Anhang 3, Kriterium 30 autorisiert die Leitung jedes Restrisiko, und Risiken kommen mindestens jährlich und bei wesentlichen Änderungen wieder auf den Tisch. In BlueProceedings ISMS legt sie stattdessen für jede Zelle der Risikomatrix fest, ob ein Restrisiko vorab akzeptiert, einzeln entschieden oder abgelehnt wird.", "Grüne Zellen mit dicker Linie sind vorab akzeptiert, rot gestrichelte abgelehnt; dort braucht jedes Risiko Maßnahmen. Die runde Zahl zeigt, wie viele Risiken nach Maßnahmen in der Zelle liegen. Die Freigabe der Matrix als Autorisierung zu werten, ist unsere Auslegung. Wer jedes Restrisiko einzeln freigeben will, stellt das mit einem Schalter ein."], image: "riskMatrix" },
      {"type": "feature", "id": "rahmen-risikobetrachtung", "h": "2.11: Strategisch, methodisch, organisatorisch.", "paragraphs": ["Der Überblick zum Rahmen für die Risikobetrachtung zeigt die drei Ebenen getrennt: Risikoappetit und Akzeptanzkriterien, Verfahren und Bewertungskriterien sowie die Zuordnung zu Risikoeigentümern. Zustände stehen mit Symbol und Wort bei den einzelnen Punkten.", "Im gezeigten Demostand ist noch keine Risikomatrix freigegeben. Das Verfahren ist beschrieben, ein Teil der Risiken hat aber noch keinen Risikoeigentümer. Die offenen Punkte werden sichtbar, ohne den gesamten Rahmen pauschal zu bewerten."], "image": "risikorahmen"},
      { type: "feature", id: "t2-11-ausnahme", h: "2.11: Ausnahmen bleiben möglich, aber befristet.", paragraphs: ["Liegt ein Risiko in einer gesperrten Zelle, beantragt der Risikoeigentümer eine Ausnahme mit Begründung, Chancen und kompensierenden Maßnahmen. Die Leitung entscheidet mit Frist und Auflagen.", "Die Befristung folgt Anhang 3, Kriterium 28; in der Anwendung beträgt sie höchstens ein Jahr. Bei einer nicht erfüllten MUSS-Anforderung ist keine Ausnahme möglich."], image: "exception" },
      { type: "faq", id: "fragen", h: "Fragen zu Prozessschritt 1.", items: [
        { q: "Was gehört nach BSI-Standard 300-1 zu Prozessschritt 1?", a: "Elf Teilschritte in Kapitel 2: Kontext der Institution, Compliance-Management, Anwendungsbereich, interessierte Parteien, Geschäftsprozesse, Schutzbedarfsfeststellung, Informationssicherheitsleitlinie, Rollen und Zuständigkeiten, Dokumentation und Kommunikation, Freigabe der Vorgehensweise und Initiierung der Risikobetrachtung." },
        { q: "Wie ausführlich muss der Kontext der Organisation dokumentiert werden?", a: "Der Standard verlangt, wesentliche Aspekte knapp festzuhalten (Kapitel 2.1). BlueProceedings ISMS hält jeden Faktor kurz, verbindet ihn aber mit den Entscheidungen und Maßnahmen, die auf ihm beruhen, und gibt ihm einen Termin zur Überprüfung." },
        { q: "Welche Schutzbedarfskategorien kennt Grundschutz++?", a: "Zwei: normal und hoch, je Geschäftsprozess und Schutzziel (Kapitel 2.6). Eigene Kategorien sind möglich, müssen aber auf diese beiden abgebildet werden. Bei hohem Schutzbedarf ist eine eigene Risikobetrachtung erforderlich." },
        { q: "Braucht jeder Geschäftsprozess eine eigene Risikobetrachtung?", a: "Nein. Bei normalem Schutzbedarf deckt die allgemeine Risikobetrachtung des Anwenderkatalogs ab. Eine explizite Risikobetrachtung ist nötig bei hohem Schutzbedarf, bei nicht hinreichend abgedeckten Assets und bei dauerhaft nicht erfüllten SOLLTE-Anforderungen (Kapitel 2.11, Anhang 3, Kriterien 32 bis 34)." },
        { q: "Wer gibt in Prozessschritt 1 frei?", a: "Die Institutionsleitung. Ihre Verantwortung kann sie nicht delegieren (Kapitel 2.10). Die Anwendung verteilt Erfassung und Vorbereitung auf Fachbereiche und ISB; die Freigaben bleiben bei der Leitung und stehen gesammelt in der Leitungsmappe." },
        { q: "Was ist der Unterschied zwischen Anwendungsbereich und Informationsverbund?", a: "Der Anwendungsbereich legt den formalen und organisatorischen Umfang des ISMS fest (Kapitel 2.3). Der Informationsverbund ist seine inhaltlich-technische Abbildung mit den Assets; ein Anwendungsbereich kann mehrere Informationsverbünde enthalten (Kapitel 3.1)." },
      ] },
      { type: "note", h: "Die Verantwortung bleibt bei der Leitung.", text: "Die Anwendung verteilt Erfassung und Vorbereitung, sie trifft keine Entscheidung. Anwendungsbereich, Schutzbedarf, Leitlinie, Risikorahmen und Restrisiken gibt weiterhin die Leitung frei (BSI-Standard 300-1, Kapitel 2.10 und Anhang 3). Alle Bilder zeigen fiktive Demodaten aus der Pre-Alpha. Einige Aufnahmen zeigen den Stand vom 28.10.2026." },
    ],
    cta: { h: "Verteilt erfassen. Zentral steuern. Einmal freigeben.", text: "Die Beiträge <a href=\"/neuigkeiten/schritt-1-erhebung-und-planung/\">Schritt 1: Erhebung und Planung</a> und <a href=\"/neuigkeiten/prozessschritt-1-im-detail/\">Prozessschritt 1 im Detail</a> zeigen die Teilschritte als Folien. Die Testphase ist ab dem 11.11.2026 geplant." },
    next: ["/bsi-standard-300-1/", "/grundschutz-plus-plus/umsetzung/", "/funktionen/risikomanagement/"],
    sources: [produktQuelle, gsQuelle],
  },

  "/funktionen/oscal-katalogverwaltung/": {
    modified: "2026-11-01",
    title: "OSCAL-Software: Kataloge verwalten",
    description: "OSCAL-Software für Import, Profile, Katalogversionen und Migration: So verwaltet BlueProceedings ISMS Grundschutz++-Anforderungen nachvollziehbar.",
    crumb: "OSCAL-Katalogverwaltung",
    asOf: "2026-11-01", mailTopic: "OSCAL Software", topics: "produkt", reading: produktReading,
    cta: { h: "Katalogwechsel ohne stille Nebenwirkung.", text: "BlueProceedings ISMS behandelt einen neuen Katalogstand als sichtbare Änderung, nicht als Überschreiben." },
    next: ["/grundschutz-plus-plus/oscal/", "/grundschutz-plus-plus/anwenderkatalog/", "/funktionen/risikomanagement/"],
    sources: [[NIST_OSCAL, "NIST: OSCAL", "Modelle, Formate und Beziehungen"], [BSI_OSCAL, "BSI: OSCAL", "Einordnung des Formats"], [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Grundschutz++-Kataloge und Profile"]],
  },

  "/funktionen/risikomanagement/": {
    modified: "2026-11-01",
    title: "ISMS-Risikomanagement Software",
    description: "Risikomanagement nach BSI-Standard 300-1: Risikorahmen, Risikoappetit, Risikoanalyse je Asset, Restrisiko, befristete Ausnahmen und Wiedervorlage in einer Software.",
    crumb: "Risikomanagement",
    asOf: "2026-11-01", mailTopic: "ISMS Risikomanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Vom Auslöser bis zur Wiedervorlage.", text: "Die Risikoakte hält fest, wie eine Entscheidung entstanden ist und wann sie wieder auf den Tisch kommt." },
    next: ["/grundschutz-plus-plus/software/", "/funktionen/nachweismanagement/", "/funktionen/bcm-notfallmanagement/"],
    sources: [produktQuelle],
  },

  "/funktionen/nachweismanagement/": {
    modified: "2026-11-01",
    title: "ISMS-Nachweismanagement Software",
    description: "ISMS-Nachweismanagement für gültige, geprüfte und zugeordnete Nachweise: Ablauf, Vier-Augen-Prüfung und Auditvorbereitung in BlueProceedings ISMS.",
    crumb: "Nachweismanagement",
    asOf: "2026-11-01", mailTopic: "ISMS Nachweismanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Nachweise mit Ablauf und Prüfstatus.", text: "Damit aus „Datei vorhanden“ nicht vorschnell „Anforderung erfüllt“ wird." },
    next: ["/funktionen/berichtswesen/", "/funktionen/risikomanagement/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle],
  },

  "/funktionen/berichtswesen/": {
    modified: "2026-11-01",
    title: "ISMS-Berichtswesen und Auditvorbereitung",
    description: "ISMS-Berichte mit Datenstand und Veraltet-Erkennung: Sicherheitskonzept, Leitlinie, aufbewahrte Stände, Prüfpaket und OSCAL-Exporte in BlueProceedings ISMS.",
    crumb: "Berichtswesen",
    asOf: "2026-11-01", mailTopic: "ISMS Berichtswesen", topics: "produkt", reading: produktReading,
    cta: { h: "Veraltet statt falsch-grün.", text: "Berichte sollen nicht nur gut aussehen, sondern sagen, wenn ihre Grundlage nicht mehr stimmt." },
    next: ["/funktionen/nachweismanagement/", "/grundschutz-plus-plus/oscal/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle, [NIST_OSCAL, "NIST: OSCAL", "Maschinenlesbare Implementierungs- und Prüfmodelle"]],
  },

  "/funktionen/learn-while-using/": {
    title: "Geführte ISMS-Software mit Lern-Modus",
    description: "ISMS-Software mit Anleitung: Einrichtungsassistent, Feldhilfe und Lern-Modus erklären Grundschutz++ direkt im Arbeitsablauf – getrennt von echten Daten.",
    asOf: "2026-11-01", mailTopic: "ISMS Lern-Modus", topics: "produkt", reading: produktReading,
    cta: { h: "Weniger zwischen Werkzeug und Handbuch wechseln.", text: "Die Hilfe bleibt nah an der Entscheidung, die gerade ansteht." },
    next: ["/grundschutz-plus-plus/umsetzung/", "/grundschutz-plus-plus/software/", "/funktionen/"],
    sources: [produktQuelle],
  },

  "/funktionen/bcm-notfallmanagement/": {
    modified: "2026-11-01",
    title: "BCM-Software & ISMS-Notfallmanagement",
    description: "BCM-Software für BIA, Notfallplanung, Wiederanlauf, Krisenmanagement und Übungen – verbunden mit Prozessen, Ressourcen und Risiken im ISMS.",
    crumb: "BCM und Notfallmanagement",
    asOf: "2026-11-01", mailTopic: "BCM Software und Notfallmanagement", topics: "produkt", reading: produktReading,
    cta: { h: "Notfallvorsorge auf demselben Bestand.", text: "BIA, Pläne, Ressourcen, Krisenläufe und Übungen bleiben mit dem übrigen ISMS verbunden." },
    next: ["/funktionen/risikomanagement/", "/funktionen/berichtswesen/", "/grundschutz-plus-plus/software/"],
    sources: [produktQuelle],
  },

  "/funktionen/dienstleistersteuerung/": {
    modified: "2026-11-01",
    title: "Dienstleistersteuerung und Lieferkette",
    description: "Dienstleister im ISMS steuern: Verantwortung je Leistungsmodell, Zusicherungen mit Ablauf, Subdienstleister-Ketten, Risikomeldungen per OSCAL und Angebotsvergleich.",
    crumb: "Dienstleister und Lieferkette",
    h1: "Dienstleister und Lieferkette steuern, nicht nur auflisten.",
    lede: "Ein Rechenzentrum, ein SaaS-Anbieter, dahinter dessen Unterauftragnehmer: Ein großer Teil der Sicherheit liegt heute bei Dienstleistern. Eine Liste mit Vertragsnummern beantwortet aber nicht, welche Anforderungen sie für euch erfüllen, ob ihre Zusicherung noch gilt und was ein Risiko bei einem Subdienstleister für euren Prozess bedeutet. BlueProceedings ISMS verbindet Dienstleister mit Komponenten, Anforderungen, Nachweisen und Prozessen.",
    asOf: "2026-11-01", mailTopic: "Dienstleistersteuerung", topics: "produkt", reading: produktReading,
    sections: [
      {"type": "text", "anchor": "bia-und-wiederanlauf", "h": "BIA und Wiederanlauf auf denselben Abhängigkeiten.", "paragraphs": ["Die Business-Impact-Analyse (BIA) bewertet die Auswirkungen eines Ausfalls auf die Geschäftsprozesse. Wiederanlaufzeit (RTO), tolerierbarer Datenverlust (RPO) und benötigte Komponenten machen die Planung konkret. Hängt der Prozess an einem externen Dienst, gehört auch die <a href=\"/funktionen/dienstleistersteuerung/\">Dienstleisterkette</a> dazu.", "Der berechnete Wiederanlauf bleibt ein Vorschlag auf Basis der erfassten Annahmen und Mittel. Während einer Übung oder eines Vorfalls wird der tatsächliche Verlauf dokumentiert. Daraus kann Folgearbeit für <a href=\"/funktionen/risikomanagement/\">Risiken</a> und die <a href=\"/funktionen/nachweismanagement/\">Wirksamkeitsprüfung</a> entstehen. Eine vollständige Abdeckung von BSI-Standard 200-4 oder ISO 22301 wird damit nicht zugesagt."]},
      {"type": "text", "anchor": "prozessbezug", "h": "Eine Zusicherung muss zum betroffenen Prozess passen.", "paragraphs": ["Hängt ein Prozess an einem Dienstleister und dessen Unterauftragnehmern, gehört eine Sicherheitszusage zu dieser Abhängigkeit. Welche Leistung ist gemeint, welche Anforderung betrifft sie und bis wann gilt der Nachweis? Die Anwendung hält diese Bezüge zusammen.", "Eine importierte Erklärung allein bestätigt keine Umsetzung. Die zuständigen Rollen prüfen ihre Aussagekraft. Offene Fragen führen zum <a href=\"/funktionen/nachweismanagement/\">Nachweismanagement</a> oder zur <a href=\"/funktionen/risikomanagement/\">Risikobetrachtung</a>. Für den Ausfall derselben Leistung nutzt das <a href=\"/funktionen/bcm-notfallmanagement/\">Notfallmanagement</a> die erfassten Abhängigkeiten."]},
      {"type": "text", "anchor": "katalogwechsel", "h": "Neue Katalogversion: erst vergleichen, dann wechseln.", "paragraphs": ["Die Vorschau unterscheidet übertragbare, geänderte und entfallene Regeln sowie neue Anforderungen. Bei Parametern zeigt sie, welche Werte weiter nutzbar sind und wo eine Entscheidung nötig ist. So wird der Arbeitsbedarf vor dem Wechsel sichtbar.", "Eine Blaupause hilft, eine Auswahl wiederzuverwenden; ihre Voraussetzungen und Herkunft müssen zum neuen Kontext passen. Die <a href=\"/grundschutz-plus-plus/oscal/\">OSCAL-Einordnung</a> erklärt die Formate. Warum ein Katalogwechsel etwas anderes ist als die Übernahme eines alten Sicherheitskonzepts, steht unter <a href=\"/grundschutz-plus-plus/it-grundschutz-migration/\">Umstieg und Migration</a>."]},
      {"type": "text", "anchor": "pruefungsstand", "h": "Aktueller Nachweis und aufbewahrter Bericht sind zwei Stände.", "paragraphs": ["Ein Nachweis kann inzwischen ergänzt oder neu geprüft sein, während ein bereits erzeugter Bericht den damaligen Stand festhält. Für die Vorbereitung eines Audits braucht ihr beides: den nachvollziehbaren Berichtsstand und den Blick auf die Änderungen seit seiner Erstellung.", "Die Anwendung zeigt erkannte Änderungen an den Berichtsgrundlagen. Die Verantwortlichen prüfen, ob eine neue Ausgabe erforderlich ist. Welche Aussagen hinter den Dateien stehen, erklärt das <a href=\"/funktionen/nachweismanagement/\">Nachweismanagement</a>; den fachlichen Anlass hält die <a href=\"/funktionen/risikomanagement/\">Risikoakte</a> fest."]},
      {"type": "text", "anchor": "auditvorbereitung", "h": "Nachweise verwalten, ein Audit vorbereiten.", "paragraphs": ["Bei einer Maßnahme zur Speicherverschlüsselung muss erkennbar sein, welche Systeme geprüft wurden, für welchen Zeitraum die Aussage gilt und wer den Nachweis akzeptiert hat. Die Datei bleibt mit ihrem Gegenstand verbunden; der Prüfstatus ist eine eigene Aussage.", "Für die Auditvorbereitung werden daraus nachvollziehbare Zusammenhänge: <a href=\"/funktionen/risikomanagement/\">Risiko und Behandlung</a>, Maßnahme, Nachweis und Freigabe. Das <a href=\"/funktionen/berichtswesen/\">Berichtswesen</a> hält einen Stand für den Austausch mit Prüfenden fest. Es ersetzt deren fachliche Prüfung nicht."]},
      {"type": "text", "anchor": "risiko-und-nachweis", "h": "Eine offene Anforderung, ein nachvollziehbarer Weg.", "paragraphs": ["Ist etwa die Speicherverschlüsselung noch nicht umgesetzt, wird die Lücke im Zusammenhang mit dem betroffenen Objekt betrachtet. Die Risikoakte hält Ursache, Bewertung, Behandlung und Restrisiko zusammen. Die Maßnahme bekommt Verantwortung, Frist und Kriterien für die Wirksamkeitsprüfung.", "Ob die Maßnahme wirkt, braucht einen geeigneten, geprüften <a href=\"/funktionen/nachweismanagement/\">Nachweis</a>. Was zu einem bestimmten Zeitpunkt dokumentiert und freigegeben war, zeigt ein <a href=\"/funktionen/berichtswesen/\">Berichtsstand</a>. Eine erledigte Aufgabe allein beantwortet diese Fragen nicht."]},
      { type: "pairs", h: "Wo der BSI-Standard 300-1 Dienstleister nennt.", lede: "Der Standard hat kein eigenes Kapitel zur Dienstleistersteuerung. Dienstleister tauchen aber in mehreren Teilschritten auf; links, was dort steht, rechts, was die Anwendung daraus macht.", items: [
        { title: "Anwendungsbereich", ref: "Kapitel 2.3", bsi: "Bei der Festlegung des Anwendungsbereichs ist zu klären, welche externen Partner oder Dienstleister vom ISMS berücksichtigt werden.", app: "Dienstleister liegen wie jedes Objekt im Geltungsbereich, außer sie sind begründet ausgeschlossen. Betreibt ein ausgeschlossener Dienstleister eine Komponente innerhalb, oder hat ein Dienstleister keinen Bezug, meldet die Anwendung das. Die Entscheidungsvorlage für die Leitung nennt die Dienstleister-Abhängigkeiten." },
        { title: "Outsourcing-Abgrenzung", ref: "Kapitel 3.1", bsi: "Für den Informationsverbund ist zu dokumentieren, welche organisatorischen, technischen und infrastrukturellen Teile lokal betrieben und welche ausgelagert werden und welche Cloud-Dienste genutzt werden.", app: "An der Komponente steht, wer sie betreibt und nach welchem Leistungsmodell (IaaS, PaaS, SaaS oder Outsourcing). Eine Verantwortungsvorlage ordnet jede Praktik „wir“, „Dienstleister“ oder „geteilt“ zu; organisatorische Praktiken bleiben immer bei euch. Abweichungen je Anforderung brauchen eine Begründung." },
        { title: "Vertragliche Verpflichtungen", ref: "Kapitel 2.2", bsi: "Vertragliche Verpflichtungen sind zusammenzustellen; die daraus folgenden Anforderungen gehören ins Anforderungspaket.", app: "Eine Compliance-Verpflichtung am Dienstleister gilt direkt für ihn. „Was fehlt noch?“ nennt Dienstleister mit vertraglichen Verpflichtungen ohne gültigen, akzeptierten Nachweis." },
        { title: "Nachweis der Umsetzung", ref: "Kapitel 4.3", bsi: "Die zur Beurteilung herangezogenen Nachweise sind der Maßnahme eindeutig zuzuordnen, damit die Umsetzung nachvollzogen werden kann.", app: "Was ein Dienstleister übernimmt, gilt erst mit gültiger Zusicherung als umgesetzt. Die Zusicherung nennt Komponenten und Anforderungen oder ganze Praktiken, Gültigkeit und Vertrauensstufe: Selbstauskunft, Vertragsklausel oder unabhängiges Testat." },
        { title: "Interessierte Parteien und Kontext", ref: "Kapitel 2.1.1, 2.4", bsi: "Dienstleister sind externe interessierte Parteien; Abhängigkeiten von Lieferketten sind ein Beispiel für äußere Einflussfaktoren.", app: "„Dienstleister“ ist eine Standardgruppe der Stakeholder-Landkarte. Ein Faktor zur Lieferkette lässt sich mit den Entscheidungen verbinden, die auf ihm beruhen, etwa einem Wechsel des Anbieters." },
      ] },
      { type: "chain", h: "Vom Vertrag bis zur Wirkung auf euren Prozess.", items: [
        { title: "Verantwortung festlegen", text: "Komponente, Betreiber und Leistungsmodell wählen; die Vorlage verteilt die Praktiken. Neue Vorlagenversionen ändern nichts still: Sie erzeugen einen Prüfhinweis mit Vorher und Nachher je Anforderung." },
        { title: "Zusicherung erfassen", text: "Versioniert: Eine Verlängerung oder ein neues Testat ersetzt die Vorgängerversion, die alte bleibt lesbar. Läuft sie ab, fallen die übernommenen Anforderungen auf „nicht zugesichert“ zurück." },
        { title: "Kette abbilden", text: "Subdienstleister und deren Unterauftragnehmer bis zu 15 Stufen tief. Zyklen werden abgelehnt; derselbe Subdienstleister über mehrere Pfade zählt einmal, die Pfade bleiben sichtbar." },
        { title: "Risikomeldungen übernehmen", text: "Die Risikoerklärung des Dienstleisters kommt manuell, als JSON oder CSV oder als OSCAL-Dokument (POA&amp;M oder Assessment Results). Vorschau und Abgleich mit der Vorfassung zeigen, was neu ist." },
        { title: "Wirkung bewerten", text: "Ein Risiko auf einer tieferen Stufe wirkt auf alle Dienstleister darüber und über deren Betrieb auf eure Komponenten und Prozesse. Je betroffenem Prozess bewertet eine Person Wirkung und Begründung." },
      ], loop: "<b>Nichts wird automatisch bewertet.</b> Eine Risikomeldung wird erst durch ausdrückliche Übernahme zum Risikokandidaten, nie direkt zum Risiko. Die Einstufung des Dienstleisters bleibt Quellenangabe." },
      { type: "gaps", h: "Was die Anwendung dafür hat.", items: [
        { title: "Dienstleister-Cockpit", text: "Je Dienstleister: betriebene Komponenten, übernommene Anforderungen mit und ohne gültige Zusicherung, geteilte Anforderungen, Zusicherungen mit Ablauf, Vertragsende, was ihr selbst noch tun müsst, und die betroffenen Prozesse." },
        { title: "Fristen im Blick", text: "Vertragsende und Ablauf einer Zusicherung erscheinen als Fälligkeitshinweise, mit dem Vorschlag einer Maßnahme mit Bezug zum Dienstleister." },
        { title: "Eigene Lage bleibt ehrlich", text: "An Dienstleister abgegebene Anforderungen tragen das Kennzeichen „durch Dienstleister“ und zählen nicht in die Kennzahlen zur eigenen Lage; geteilte Verantwortung bleibt in der eigenen Zählung." },
        { title: "Delegationskette im Prüfpaket", text: "Das Prüfpaket enthält je Prozess die benötigten Dienstleister, ihre Subdienstleister, die abgegebenen Anforderungen und die gültigen Zusicherungen. Fehlt eine gültige Zusicherung, steht das ausdrücklich dabei." },
        { title: "Angebotsvergleich", text: "Der aktuelle Dienstleister neben bis zu zwei Angeboten: Leistungsmodell, Zusicherungen, Auditrecht, Meldefrist, Exit-Regelung, Rechtsraum, Standorte, Subdienstleister, erklärte Risiken und Kosten. Bewusst ohne Gesamtzahl und Rangfolge; die Entscheidung trägt eine Begründung." },
        { title: "Wechsel nachvollziehbar", text: "Entscheidet sich die Institution für ein Angebot, entsteht daraus ein neuer Dienstleister; der bisherige bleibt mit seiner Geschichte bestehen." },
      ] },
      { type: "faq", h: "Fragen zur Dienstleistersteuerung.", items: [
        { q: "Was verlangt NIS2 zur Lieferkette?", a: "Die NIS-2-Richtlinie nennt in Artikel 21 Absatz 2 Buchstabe d die Sicherheit der Lieferkette, einschließlich der Beziehungen zu unmittelbaren Anbietern und Diensteanbietern, als eine der Risikomanagementmaßnahmen. Wie eine Institution das umsetzt und ob es genügt, beurteilt sie selbst; BlueProceedings ISMS macht dazu keine Konformitätsaussage." },
        { q: "Bewertet die Anwendung Dienstleister automatisch?", a: "Nein. Sie zeigt Zusicherungen, Fristen, Ketten und gemeldete Risiken nebeneinander. Ob ein Risiko auf euch wirkt und welches Angebot besser passt, entscheiden Menschen mit Begründung." },
        { q: "Was ist eine Zusicherung?", a: "Die Erklärung oder der Nachweis eines Dienstleisters, dass er bestimmte Anforderungen für bestimmte Komponenten erfüllt, mit Gültigkeit und Vertrauensstufe: Selbstauskunft, Vertragsklausel oder unabhängiges Testat. Ohne gültige Zusicherung zählt eine abgegebene Anforderung nicht als umgesetzt." },
        { q: "Wie kommen Risiken eines Dienstleisters in die Anwendung?", a: "Manuell, als JSON- oder CSV-Datei mit Spaltenzuordnung oder als OSCAL-Dokument (Plan of Action and Milestones oder Assessment Results). Was sich nicht abbilden lässt, steht als Hinweis in der Vorschau." },
      ] },
      { type: "note", h: "Verantwortung lässt sich nicht auslagern.", text: "Ein Dienstleister kann Anforderungen umsetzen, die Verantwortung für das ISMS bleibt bei der Institutionsleitung (BSI-Standard 300-1, Kapitel 2.10). Die Anwendung macht sichtbar, was abgegeben ist und worauf ihr euch dabei stützt. Bilder aus der Pre-Alpha folgen." },
    ],
    cta: { h: "Die Lieferkette gehört ins ISMS.", text: "Dienstleister, Zusicherungen und gemeldete Risiken stehen beim selben Bestand wie Prozesse, Risiken und Nachweise." },
    next: ["/funktionen/risikomanagement/", "/funktionen/nachweismanagement/", "/grundschutz-plus-plus/oscal/"],
    sources: [produktQuelle, [NIS2_RL, "Richtlinie (EU) 2022/2555 (NIS-2)", "Artikel 21: Risikomanagementmaßnahmen, darunter die Sicherheit der Lieferkette"], [NIST_OSCAL, "NIST: OSCAL", "Modelle Plan of Action and Milestones und Assessment Results"]],
  },

  "/funktionen/weiteres/": {
    title: "Weitere Funktionen von BlueProceedings ISMS",
    description: "Was BlueProceedings ISMS außerdem kann: Aufgaben, Kalender, Angreifer, Gefährdungen, Vorfälle, Papierkorb, signierte Vorlagen und verschlüsselte Datenbank.",
    crumb: "Weiteres",
    h1: "Was sonst noch in der Pre-Alpha steckt.",
    lede: "Nicht jede Funktion passt zu einem Prozessschritt des BSI-Standards 300-1. Manche machen die tägliche Arbeit leichter, andere schützen die Daten oder halten fest, wer was entschieden hat. Hier stehen die, die auf den übrigen Seiten keinen eigenen Platz haben.",
    asOf: "2026-11-01", mailTopic: "Weitere Funktionen", topics: "produkt", reading: produktReading,
    sections: [
      { type: "gaps", h: "Im Alltag.", items: [
        { title: "Meine Aufgaben", text: "Jede Person sieht gebündelt aus ihren Rollen, was bei ihr liegt: Fälligkeiten, offene Risikobetrachtungen und Freigaben, für den ISB zusätzlich anstehende Überprüfungen und Lücken in der RACI-Matrix." },
        { title: "Fälligkeiten im Kalender", text: "Fristen und Überprüfungstermine lassen sich als Kalenderdatei (ICS) herunterladen und im eigenen Kalender ansehen." },
        { title: "Wo braucht euer ISMS heute Aufmerksamkeit?", text: "Die Lage-Seite sammelt, was gerade eine Entscheidung oder Bearbeitung braucht, und führt von dort an die Stelle." },
        { title: "Beratung und Information", text: "Wen die RACI-Matrix beraten (C) oder informieren (I) lässt, sieht die anstehenden Entscheidungen in einer eigenen Liste und bestätigt sie mit einer Notiz. Die Anwendung versendet dafür nichts." },
        { title: "Glossar", text: "Zentrale Begriffe für Rollen, Freigaben, Geltungsbereich, Schutzbedarf und Sicherheitskonzepte; die Feldhilfe springt direkt zum passenden Eintrag. <a href=\"/funktionen/learn-while-using/\">Zum Lern-Modus</a>." },
        { title: "Papierkorb", text: "Gelöschte Risikobetrachtungen, Nachweise und Ausnahmen bleiben zunächst erhalten und lassen sich wiederherstellen." },
      ] },
      { type: "gaps", h: "Bedrohungen und Vorfälle.", items: [
        { title: "Angreifer", text: "Angreifer mit Merkmalen und Lageeinschätzung, zugeordnet zu Gefährdungen. Versioniert und erst nach Freigabe durch die Institutionsleitung wirksam (BSI-Standard 300-1, Anhang 3, Kriterien 9 und 10)." },
        { title: "Gefährdungen", text: "Die Gefährdungen aus den Katalogen der Informationsverbünde mit Herkunft und den nicht erfüllten Anforderungen, bei denen sie auftreten; eigene Gefährdungen ergänzen sie. Die Risikoanalyse je Asset greift darauf zurück. <a href=\"/funktionen/risikomanagement/\">Zum Risikomanagement</a>." },
        { title: "Sicherheitsvorfälle melden", text: "Ein Ereignis wird über ein eigenes Formular gemeldet. Jeder Sicherheitsfall hat ein nur anhängbares, hashverkettetes Ereignisprotokoll, lesbar als Zeitlinie. <a href=\"/funktionen/bcm-notfallmanagement/\">Zu BCM und Notfallmanagement</a>." },
      ] },
      { type: "gaps", h: "Sicherheit und Betrieb.", items: [
        { title: "Auf eurer Infrastruktur", text: "BlueProceedings ISMS läuft als Docker-Container On-Premises, die Datenbank ist verschlüsselt, und es gibt keine Hersteller-Cloud. Daten verlassen die Anwendung nur durch einen bewusst erzeugten Export." },
        { title: "Funktionstrennung", text: "Eine Konfliktmatrix mit den Paaren des Standards als Voreinstellung (IT-Leitung und ISB, DSB und ISB) und eigenen Regeln. Eine Zuweisung gegen die Funktionstrennung braucht eine begründete Entscheidung." },
        { title: "Kleinunternehmen-Modus", text: "Wo es keine zweite Person gibt, lockert der Modus die personelle Trennung beim Vier-Augen-Prinzip, ohne die fachlichen Prüfungen abzuschalten." },
        { title: "Signierte Vorlagenpakete", text: "Vorlagen aus der Community sind signiert. Welchen Schlüsseln die Institution vertraut, legt sie selbst fest, mit Rotation und Widerruf. Ein Import erzeugt immer einen lokalen Entwurf. <a href=\"/community/\">Zur Community</a>." },
        { title: "Entscheidungen mit Begründung", text: "Einreichen, Freigeben und Ablehnen tragen eine Begründung und auf Wunsch die Einflussfaktoren dahinter; das Ereignis wird zusammen mit dem Statuswechsel gespeichert." },
      ] },
      { type: "faq", h: "Fragen zu Betrieb und Zusammenarbeit.", items: [
        { q: "Wo liegen die Daten?", a: "Auf der Infrastruktur des Betreibers. BlueProceedings ISMS läuft als Docker-Container, die Datenbank ist verschlüsselt, und ihr verwaltet die Zugänge selbst." },
        { q: "Ist die Zahl der Nutzenden begrenzt?", a: "Nein. Jede Fachabteilung soll mitarbeiten können; die Rollen und die RACI-Matrix regeln, wer was tut und wer freigibt." },
        { q: "Was passiert mit gelöschten Einträgen?", a: "Risikobetrachtungen, Nachweise und Ausnahmen landen zunächst im Papierkorb und lassen sich von dort wiederherstellen." },
      ] },
      { type: "note", h: "Pre-Alpha.", text: "Die Funktionen beschreiben den Stand der Pre-Alpha und können sich bis zur ersten Version ändern, die für Januar 2027 geplant ist. Die Testphase beginnt am 11.11.2026." },
    ],
    cta: { h: "Mehr als eine Momentaufnahme.", text: "Die <a href=\"/funktionen/\">Funktionsübersicht</a> ordnet alles nach den fünf Prozessschritten des BSI-Standards 300-1." },
    next: ["/funktionen/", "/funktionen/dienstleistersteuerung/", "/funktionen/learn-while-using/"],
    sources: [produktQuelle],
  },
};

const produktseiten = {
  "/funktionen/": {
    h1: "Ein ISMS, das im Alltag mitläuft.",
    lede: "Mit der Freigabe ist ein ISMS nicht fertig. Neue Systeme, Vorgaben und Dienstleister ändern seine Grundlagen. BlueProceedings ISMS verbindet die Arbeit von der Planung bis zur Prüfung – damit sichtbar bleibt, was gilt, wer entscheidet und was erneut auf den Tisch gehört. Die Funktionen sind nach den fünf Prozessschritten des BSI-Standards 300-1 geordnet: <a href=\"#schritt-1\">1 Erhebung und Planung</a> · <a href=\"#schritt-2\">2 Anforderungsanalyse</a> · <a href=\"#schritt-3\">3 Realisierung</a> · <a href=\"#schritt-4\">4 Überwachung</a> · <a href=\"#schritt-5\">5 Kontinuierliche Verbesserung</a> · <a href=\"#querschnitt\">quer durch alle Schritte</a>.",
    sections: [
      { type: "gaps", id: "schritt-1", h: "1. Den Rahmen festlegen.", lede: "Erhebung und Planung nach BSI-Standard 300-1, Kapitel 2: Die Leitung gibt den Rahmen vor, die Arbeit wird auf mehrere Schultern verteilt. <a href=\"/funktionen/erhebung-und-planung/\">Alle elf Teilschritte mit Bildern aus der Pre-Alpha</a>.", items: [
        { title: "Kontext und Verpflichtungen", text: "Interne und externe Einflussfaktoren, gesetzliche und vertragliche Verpflichtungen sowie Entscheidungen dazu stehen an einem Ort. Ändert sich ein verwendeter Faktor wesentlich, weist die Anwendung auf betroffene Entscheidungen zur Prüfung hin." },
        { title: "Geltungsbereich und Stakeholder", text: "Prozesse, Systeme und andere erfasste Objekte gehören grundsätzlich dazu; Ausschlüsse werden begründet. Erwartungen interessierter Parteien lassen sich erfassen und gewichten." },
        { title: "Prozesse und Schutzbedarf", text: "Geschäftsprozesse werden mit ihren Informationen und Abhängigkeiten beschrieben. Schadensszenarien helfen, den Schutzbedarf je Schutzziel zu begründen." },
        { title: "Leitlinie und Dokumente", text: "Sicherheitsziele, Leitlinie und ISMS-Dokumente erhalten einen nachvollziehbaren Stand mit Freigabe und Kommunikation." },
        { title: "Rollen, RACI und Vertretung", text: "Fachbereiche pflegen ihre Angaben, der ISB steuert, die Leitung entscheidet. Die RACI-Matrix zeigt Zuständigkeiten; der Vertretungsplan warnt vor unbesetzten Rollen." },
        { title: "Risikomethodik und Risikoappetit", text: "Die Leitung legt den Rahmen für Bewertungen und Entscheidungen fest. Sie kann bestimmen, ob Restrisiken anhand freigegebener Regeln oder einzeln zur Entscheidung vorgelegt werden." },
        { title: "Kontextlandkarte und Gruppen", text: "Einflussfaktoren und Stakeholder werden den Gruppen des Standards (Kapitel 2.1.1, 2.1.2 und 2.4) oder eigenen Gruppen zugeordnet. Die Landkarte zeigt, wozu noch nichts erfasst ist. <a href=\"/funktionen/erhebung-und-planung/#t2-1\">Zum Kontext</a>." },
        { title: "Messfaktor", text: "Ein Faktor kann an eine Kennzahl gebunden sein. Nennt eine Entscheidung ihn, bleibt der damalige Wert festgehalten und steht neben dem heutigen." },
        { title: "Was steht in den nächsten 90 Tagen an?", text: "Überprüfungen und Fristen von Faktoren, Stakeholdern und Compliance-Verpflichtungen an einer Stelle, nach überfällig und Zeitraum." },
        { title: "Geltungsmatrix und „Was fehlt noch?“", text: "Je Compliance-Verpflichtung und Objekt: gilt sie hier, warum, und wie viele Anforderungen sind umgesetzt? Erfüllt zählt nur mit gültigem Nachweis. Darunter stehen Objekte ohne Verpflichtung und Verpflichtungen ohne Objekt. <a href=\"/funktionen/erhebung-und-planung/#t2-2\">Zur Compliance</a>." },
        { title: "Anwendungsbereich mit Innen und Außen", text: "Objekte innerhalb je Art, Ausschlüsse namentlich mit Begründung und die Schnittstellen über die Grenze; eine Entscheidungsvorlage bereitet die Freigabe durch die Leitung vor." },
        { title: "Erwartungen und Prioritätsvorschlag", text: "Stakeholder-Landkarte und Erwartungs-Trichter zeigen, welche Erwartungen übernommen und mit Maßnahmen hinterlegt sind. Freigegebene Gewichte fließen in einen Vorschlag P1 bis P5 ein, ohne Gesamtpunktzahl und mit dem Grund. <a href=\"/funktionen/erhebung-und-planung/#t2-4\">Zu den interessierten Parteien</a>." },
        { title: "Kontextspur: Warum tun wir das?", text: "Zu einem Prozess zeigt die Anwendung, welche Stakeholder, Compliance-Verpflichtungen und Faktoren zu welchen Entscheidungen geführt haben. Ändert sich eine Quelle, führt der Weg direkt zu dem, was neu zu prüfen ist. <a href=\"/funktionen/erhebung-und-planung/#darueber-hinaus\">Darüber hinaus</a>." },
        { title: "Stand von Schritt 1 und Leitungsmappe", text: "Je Teilschritt 2.1 bis 2.11 ein Stand mit einer nachprüfbaren Tatsache, ohne Gesamtzahl. Die Leitungsmappe zeigt alle Freigaben mit Fassung, Rolle, Datum und Termin zur Überprüfung." },
        { title: "Rollenkarte und Beratung", text: "Je Rolle Besetzung, Vertretung, RACI und Funktionstrennung. Wer laut RACI beraten oder informiert wird, sieht es in einer eigenen Liste." },
        { title: "Mitarbeit ohne Lizenzgrenze", text: "Die Zahl der Nutzenden ist nicht begrenzt: Jede Fachabteilung pflegt ihre Prozesse und Objekte selbst, der ISB bündelt, die Leitung gibt frei." },
      ] },
      { type: "gaps", id: "schritt-2", h: "2. Den Informationsverbund verstehen.", lede: "Anforderungsanalyse nach BSI-Standard 300-1, Kapitel 3: vom Geschäftsprozess zum passenden Anforderungspaket.", items: [
        { title: "Bestand und Abhängigkeiten", text: "Prozesse, Informationen, Komponenten, Dienstleister, Standorte und Schnittstellen werden verknüpft. Derselbe Bestand dient auch Risiken, Berichten und Notfallvorsorge." },
        { title: "OSCAL und Katalogstände", text: "Kataloge werden mit Version und Herkunft eingelesen. Ein Vergleich zeigt Änderungen, bevor ein Informationsverbund auf einen neuen Stand wechselt. <a href=\"/funktionen/oscal-katalogverwaltung/\">Zur Katalogverwaltung</a>." },
        { title: "Blaupausen und Anforderungen", text: "Zielobjektkategorien, Kataloge und Blaupausen führen zum Anforderungspaket. Herkunft, Parameter und begründete Ausnahmen bleiben sichtbar." },
        { title: "Vorlagen wiederverwenden", text: "Informationsverbund-, Komponentensatz- und Komponentenvorlagen helfen, wiederkehrende Strukturen und Erfahrungswissen erneut zu nutzen." },
        { title: "Folgen eines Katalogwechsels", text: "Vor dem Wechsel auf einen neuen Katalogstand zeigt eine eigene Seite je Informationsverbund, welche Anforderungen neu, geändert oder entfallen sind und welcher Status sich dadurch ändert." },
        { title: "Eine Seite je Anforderung", text: "Jede Anforderung hat eine eigene Seite mit Gliederung, Status je Objekt, Risikokandidaten und Verlauf." },
        { title: "Sicherheitsniveau", text: "Ein institutionsweites Mindestniveau und ein Zielniveau je Informationsverbund steuern, welche Anforderungen gelten; „erhöht“ verlangt eine aktuelle Schutzbedarfsfeststellung. <a href=\"/grundschutz-plus-plus/anwenderkatalog/\">Mehr im Anwenderkatalog</a>." },
        { title: "Verantwortung beim Dienstleister", text: "Je Komponente und Leistungsmodell (IaaS, PaaS, SaaS, Outsourcing) wird festgelegt, welche Praktiken bei euch, beim Dienstleister oder geteilt liegen (Kapitel 3.1, Outsourcing-Abgrenzung). <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
      ] },
      { type: "gaps", id: "schritt-3", h: "3. Lücken und Risiken bearbeiten.", lede: "Realisierung nach BSI-Standard 300-1, Kapitel 4: vom Umsetzungsstand zur begründeten Entscheidung.", items: [
        { title: "Anforderungen bearbeiten", text: "Verantwortliche erfassen den Umsetzungsstand und planen offene Arbeit. Herkunft und Bezug zum eigenen Objekt bleiben an der Anforderung." },
        { title: "Betroffenheit prüfen", text: "Ein Graph zeigt, welche Objekte über Abhängigkeiten mitbetroffen sein könnten. Die Anwendung schlägt vor; Menschen bestätigen, verwerfen oder klären die Vorschläge." },
        { title: "Vom Auslöser zum Restrisiko", text: "Die Risikoakte verbindet Ursache, Bewertung, betroffene Objekte, Behandlung, Maßnahme, Restrisiko und Wiedervorlage. <a href=\"/funktionen/risikomanagement/\">Zum Risikomanagement</a>." },
        { title: "Maßnahmen planen", text: "Verantwortung, Frist und Fortschritt stehen bei der Maßnahme. Was nach der Behandlung verbleibt, wird erneut bewertet und zur Entscheidung vorgelegt." },
        { title: "Warum existiert diese Maßnahme?", text: "Anlass, Bezüge und Einflussfaktoren stehen an der Maßnahme. Die vorgeschlagene Priorität nennt ihren Grund, etwa eine überschrittene Frist oder die Gewichtung eines Stakeholders." },
        { title: "Risikoanalyse je Asset", text: "Gefährdungen aus dem Register werden je Asset betrachtet; am Ende stehen Risikokandidaten, kein automatisch angelegtes Risiko. Jeder Informationsverbund entscheidet, ob die Analyse für ihn hinreichend ist." },
        { title: "Regel statt Einzelfall", text: "Die Leitung legt je Zelle der Risikomatrix fest, ob ein Restrisiko vorab akzeptiert, einzeln entschieden oder abgelehnt wird. Ausnahmen sind befristet, bei MUSS-Anforderungen ausgeschlossen. <a href=\"/funktionen/erhebung-und-planung/#t2-11\">Zum Risikorahmen</a>." },
      ] },
      { type: "gaps", id: "schritt-4", h: "4. Prüfen, ob es wirkt.", lede: "Überwachung nach BSI-Standard 300-1, Kapitel 5: Ein vorhandenes Dokument und ein erledigter Arbeitsschritt sind noch keine Wirksamkeitsprüfung.", items: [
        { title: "Nachweise", text: "Bezug, Gültigkeit und Prüfstatus stehen beim Nachweis. <a href=\"/funktionen/nachweismanagement/\">Zum Nachweismanagement</a>." },
        { title: "Audit und Managementbewertung", text: "Auditprogramm, Feststellungen, Kennzahlen und Managementbewertung führen Prüfergebnisse und Entscheidungen zusammen." },
        { title: "Berichte mit Datenstand", text: "Ein Sicherheitskonzept ist eine Momentaufnahme. Ändern sich Grundlagen, zeigt ein Hinweis, warum es veraltet ist. <a href=\"/funktionen/berichtswesen/\">Zum Berichtswesen</a>." },
        { title: "Austausch mit Prüfenden", text: "Erwartungen werden importiert und Nachweise als Prüfpaket exportiert. Der Austausch benötigt kein Gastkonto." },
        { title: "Kennzahlen in einem Register", text: "Eingebaute, berechnete und manuell gemessene Kennzahlen mit Zielwert, Schwellen und Zeitreihe; Ziele der Leitlinie lassen sich mit ihnen verbinden. Der Wert wird angezeigt, nicht bewertet." },
        { title: "Berichte mit aufbewahrten Ständen", text: "Je Bericht ein Erzeugungsintervall und aufbewahrte Stände; das Dokument entsteht aus einem gewählten Stand. <a href=\"/funktionen/berichtswesen/\">Zum Berichtswesen</a>." },
        { title: "Audits mit Prüfmodus", text: "Die dem Audit zugeordneten Anforderungen als Checkliste; ein eingereichtes Audit ist als Ergebnisstand eingefroren, Korrekturen laufen über einen protokollierten Rücksetzvorgang." },
      ] },
      { type: "gaps", id: "schritt-5", h: "5. Aus Erkenntnissen besser werden.", lede: "Kontinuierliche Verbesserung nach BSI-Standard 300-1, Kapitel 6: Aus Feststellungen wird Folgearbeit, deren Wirkung geprüft wird.", items: [
        { title: "Erledigt ist nicht wirksam", text: "Eine Maßnahme lässt sich erst abschließen nach geprüften Wirksamkeitskriterien, gültigem Nachweis und erforderlicher Freigabe. Im Kleinunternehmen-Modus entfällt nur die personelle Trennung." },
        { title: "Sicherheitsvorfälle", text: "Eine Zeitlinie hält Ereignisse und Entscheidungen fest; Korrekturen werden ergänzt. Erkenntnisse können bewusst in Folgearbeit übernommen werden." },
        { title: "Notfallvorsorge und Übungen", text: "BIA, Verfahren, Organisation und Übungen nutzen den gemeinsamen Bestand. Im Lagezentrum stehen Plan und Ist nebeneinander. <a href=\"/funktionen/bcm-notfallmanagement/\">Zu BCM und Notfallmanagement</a>." },
        { title: "Lernen während der Arbeit", text: "Einrichtungsassistent, Feldhilfe und eine getrennte Übungsumgebung helfen beim Einstieg. <a href=\"/funktionen/learn-while-using/\">Zum Lern-Modus</a>." },
        { title: "Wesentliche Änderung erkannt", text: "Berührt ein Ereignis ein bestehendes Risiko inhaltlich, etwa Sicherheitsniveau oder Schutzziel, steht das Risiko wieder zur Prüfung an (Anhang 3, Kriterium 35). Ein geänderter Einflussfaktor erzeugt Prüfhinweise an den Entscheidungen, die auf ihm beruhen." },
        { title: "Wiederanlauf planen", text: "Für den Ausfall eines Standorts oder Objekts vergleicht die Anwendung Planungsverfahren für die Reihenfolge des Wiederanlaufs mit begrenztem Personal. Das Ergebnis ist ein Planungsvorschlag, keine Lagebeurteilung. <a href=\"/funktionen/bcm-notfallmanagement/\">Zu BCM und Notfallmanagement</a>." },
      ] },
      { type: "gaps", id: "querschnitt", h: "Quer durch alle Schritte.", lede: "Einige Funktionen gehören zu keinem einzelnen Prozessschritt.", items: [
        { title: "Dienstleister und Lieferkette", text: "Dienstleister-Cockpit, versionierte Zusicherungen, Subdienstleister-Ketten, Risikomeldungen auch im OSCAL-Format, Wirkung je Prozess und Angebotsvergleich. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
        { title: "Entscheidungen mit Begründung", text: "Einreichen, Freigeben und Ablehnen tragen eine Begründung und auf Wunsch die Einflussfaktoren, die die Entscheidung geprägt haben. Das Ereignis wird zusammen mit dem Statuswechsel gespeichert." },
        { title: "Veraltet statt falsch-grün", text: "Ein Sicherheitskonzept kennt seinen Datenstand. Ändern sich danach Risiken, Schutzbedarf oder andere Grundlagen, nennt ein Hinweis die betroffenen Bereiche. <a href=\"/funktionen/berichtswesen/\">Zum Berichtswesen</a>." },
        { title: "Betrieb, Sicherheit und Zusammenarbeit", text: "Persönliche Aufgaben, Kalenderdatei der Fälligkeiten, Papierkorb, signierte Vorlagenpakete, verschlüsselte Datenbank und weiteres. <a href=\"/funktionen/weiteres/\">Zu den weiteren Funktionen</a>." },
      ] },
      { type: "note", h: "Das ist noch nicht alles.", text: "Weitere Funktionen sind bereits umgesetzt; die Beitragsreihe stellt sie Prozessschritt für Prozessschritt vor. Schaut in die <a href=\"/neuigkeiten/\">Neuigkeiten</a> oder folgt BlueProceedings auf LinkedIn." },
    ],
    cta: { h: "Die Arbeit hängt zusammen.", text: "Auf der Startseite zeigen wir anhand von Demodaten, wie einzelne Schritte in der Pre-Alpha aussehen." },
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
      { type: "gaps", h: "Darüber hinaus.", items: [
        { title: "Auswirkung eines Katalogwechsels", text: "Eine eigene Seite zeigt vor dem Wechsel je Informationsverbund den Status vorher und nachher, die Art der Änderung mit Wortvergleich, entstehende Lücken, den geschätzten Aufwand und die Aufgaben, die folgen (BSI-Standard 300-1, Kapitel 5.5: Anpassungen an der Stand-der-Technik-Bibliothek)." },
        { title: "Eine Seite je Anforderung", text: "Gliederung, Status je Objekt, Risikokandidaten und Verlauf einer Anforderung an einem Ort, verlinkt aus der Liste und dem Seitenfenster." },
        { title: "Kataloge für Compliance-Verpflichtungen", text: "Jede Compliance-Verpflichtung kann ihren eigenen Katalog haben, etwa einen Datenschutz-Anforderungskatalog oder einen Mindeststandard. Ein Katalog, zu dem nur Kennungen und Titel vorliegen, lässt sich ebenfalls führen. <a href=\"/funktionen/erhebung-und-planung/#t2-2\">Zur Compliance</a>." },
        { title: "OSCAL auch von Dienstleistern", text: "Die Risikoerklärung eines Dienstleisters kann als OSCAL-Dokument (POA&amp;M oder Assessment Results) eingelesen werden; was sich nicht abbilden lässt, steht als Hinweis in der Vorschau. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
      ] },
      { type: "faq", h: "Fragen zur OSCAL-Katalogverwaltung.", items: [
        { q: "Welche OSCAL-Modelle liest BlueProceedings ISMS ein?", a: "Kataloge und Profile, darunter den Grundschutz++-Anwenderkatalog des BSI, sowie für Risikoerklärungen von Dienstleistern Plan of Action and Milestones und Assessment Results. Ausgegeben werden unter anderem Katalog, Profil, Component Definition, System Security Plan, Assessment Plan, Assessment Results und POA&M." },
        { q: "Was passiert mit dem Erfüllungsstand, wenn ein neuer Katalogstand erscheint?", a: "Nichts still. Jeder Informationsverbund bleibt auf seinem Katalogstand, bis der Wechsel begründet und freigegeben ist. Danach werden betroffene Anforderungen zur Neubewertung gestellt; ein alter Erfüllungsstand belegt nicht automatisch den neuen Text." },
        { q: "Kann ich eigene Kataloge verwenden?", a: "Ja, weitere OSCAL-Kataloge lassen sich mit Version und Herkunft einlesen, etwa für Compliance-Verpflichtungen. Eine Blaupause kann mehrere Kataloge kombinieren." },
      ] },
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
      { type: "pairs", h: "Mindestkriterien und wie die Anwendung sie umsetzt.", lede: "Das Verfahren ist frei wählbar, solange die Mindestkriterien aus Anhang 3 erfüllt sind (Kapitel 2.11). Eine Auswahl:", items: [
        { title: "Rahmen in drei Ebenen", ref: "Kapitel 2.11, Kriterium 9", bsi: "Strategisch Risikoappetit und Akzeptanzkriterien, methodisch Verfahren und Kriterien, organisatorisch Rollen und Risikoeigentümer. Die Institutionsleitung autorisiert den Rahmen.", app: "Ein Überblick über der Risikomatrix zeigt die drei Ebenen mit ihrem Stand, etwa „Risikoappetit: noch keine freigegebene Matrix“ oder „7 Risiken ohne Risikoeigentümer“. Nicht ladbare Angaben heißen „unbekannt“ und zählen nie als Lücke." },
        { title: "Risikoidentifikation je Asset", ref: "Kriterien 10, 11, 13", bsi: "Methodische Grundlage festlegen und Risiken auf Ebene der Geschäftsprozesse und kritischer Assets identifizieren.", app: "Die Risikoanalyse je Asset greift auf das Gefährdungsregister zurück; fehlende Gefährdungen werden als vorläufig vorgeschlagen und übernommen, zusammengeführt oder ignoriert. Am Ende stehen Risikokandidaten mit Herkunft, kein automatisch angelegtes Risiko. Jeder Informationsverbund entscheidet je Asset, ob die Analyse ihn hinreichend abdeckt." },
        { title: "Ausnahmegenehmigung", ref: "Kriterien 27 und 28", bsi: "Nicht weiter behandelte Risiken autorisiert die Leitung ausdrücklich; eine Risikoakzeptanz kann temporär sein.", app: "Der Risikoeigentümer beantragt eine Ausnahme mit Begründung, Chancen und kompensierenden Maßnahmen; die Leitung entscheidet mit Frist und Auflagen. Die Ausnahme endet mit der Befristung, einem Wechsel der Risikomatrix oder einer schlechteren Restbewertung." },
        { title: "Autorisierung der Restrisiken", ref: "Kriterium 30", bsi: "Die Institutionsleitung autorisiert die Restrisiken.", app: "Die Leitung sieht in „Zu entscheidende Risiken“ die Anträge, über die sie entscheidet. Je Zelle der Risikomatrix legt sie vorab fest, was akzeptiert, einzeln entschieden oder abgelehnt wird; wer jedes Restrisiko einzeln freigeben will, stellt das mit einem Schalter ein. Die Matrixfreigabe als Autorisierung zu werten, ist unsere Auslegung." },
        { title: "Überprüfung", ref: "Kriterium 35", bsi: "Die Risikobetrachtung ist mindestens jährlich und bei wesentlichen Änderungen zu überprüfen.", app: "Berührt ein Ereignis ein bestehendes Risiko inhaltlich, etwa Sicherheitsniveau oder Schutzziel, steht es wieder zur Prüfung an, mit sichtbarer Bewertungsfolge. Ein geänderter Einflussfaktor erzeugt Prüfhinweise bei den Risikobewertungen, die ihn nennen." },
      ] },
      { type: "gaps", h: "Darüber hinaus.", items: [
        { title: "Woher wissen wir, was zuerst dran ist?", text: "Für Maßnahmen schlägt die Anwendung eine Priorität P1 bis P5 vor. Die höchste Einzelklasse bestimmt den Vorschlag, nicht eine Summe; die Erklärung nennt Faktoren, Stakeholder und Compliance-Verpflichtungen. Kapitel 4.3 nennt unter anderem die Höhe der Risiken und die strategische Bedeutung als Kriterien." },
        { title: "Risikoanalyse je Geschäftsprozess", text: "Für Prozesse mit hohem Schutzbedarf gibt es eine eigene Risikoanalyse am Prozess; das Schutzbedarf-Raster zeigt, ob sie fehlt, abgelaufen oder vorhanden ist (Kriterium 32)." },
        { title: "Risiken aus der Lieferkette", text: "Risikomeldungen von Dienstleistern wirken über die Subdienstleister-Kette auf eure Komponenten und Prozesse; übernommen wird nur ausdrücklich. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
        { title: "Faktoren an der Bewertung", text: "Eine Risikobewertung nennt die Einflussfaktoren, auf denen sie beruht; die Auswahl richtet sich nach der gewählten Dimension der Bewertung und weist auf eine unpassende Einflussart hin." },
      ] },
      { type: "faq", h: "Fragen zum Risikomanagement nach Grundschutz++.", items: [
        { q: "Wann verlangt Grundschutz++ eine eigene Risikobetrachtung?", a: "Bei hohem Schutzbedarf eines Geschäftsprozesses in mindestens einem Schutzziel, bei nicht hinreichend abgedeckten Assets und bei dauerhaft nicht erfüllten SOLLTE-Anforderungen (BSI-Standard 300-1, Kapitel 2.11, Anhang 3, Kriterien 32 bis 34). Bei normalem Schutzbedarf deckt die allgemeine Risikobetrachtung des Anwenderkatalogs ab." },
        { q: "Kann eine MUSS-Anforderung per Risikoakzeptanz entfallen?", a: "Nein. MUSS-Anforderungen erlauben keine Ausnahme und keine Risikoakzeptanz (Kapitel 4.1.2). Die Anwendung sperrt Ausnahme und Risikoakzeptanz bei MUSS-Anforderungen." },
        { q: "Was ist der Unterschied zwischen Risikokandidat und Risiko?", a: "Ein Risikokandidat ist ein Hinweis, etwa aus einer Lücke, einer Analyse oder einer Meldung eines Dienstleisters. Erst die bewusste Übernahme durch Verantwortliche macht daraus ein formales Risiko mit Eigentümer, Bewertung und Behandlung." },
        { q: "Welches Verfahren muss ich verwenden?", a: "Der Standard schreibt keines vor. Gängige Standards wie ISO/IEC 27005 oder ISO 31000 sind möglich, sofern die Mindestkriterien aus Anhang 3 erfüllt sind." },
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
      { type: "pairs", h: "Was der Standard zu Nachweisen sagt.", items: [
        { title: "Nachweis der Umsetzung", ref: "Kapitel 4.3", bsi: "Die zur Beurteilung herangezogenen Nachweise sind der jeweiligen Maßnahme eindeutig zuzuordnen. Bei automatisierter Prüfung sind Tool, Zeitpunkt und Ergebnis zu dokumentieren; Änderungen sollen in einer Historie nachvollziehbar bleiben.", app: "Ein Nachweis hängt an Anforderung, Maßnahme oder Prüfung, mit Gültigkeit, Prüfstatus, prüfender Person und Zeitpunkt. Wird er ungültig oder läuft er ab, zählt er nirgends mehr als erfüllt." },
        { title: "Evaluation", ref: "Kapitel 6.4", bsi: "Klare, messbare Kriterien für die Wirksamkeit jeder Maßnahme definieren, nach der Umsetzung gezielt prüfen und das Ergebnis dokumentieren.", app: "Eine Maßnahme lässt sich erst abschließen mit geprüften Wirksamkeitskriterien, akzeptiertem gültigem Nachweis und der erforderlichen Freigabe durch eine zweite Person. Im Kleinunternehmen-Modus entfällt nur die personelle Trennung." },
        { title: "Auditaufzeichnungen", ref: "Kapitel 5.2.2", bsi: "Der Auditteamleitung werden Ziele, Kriterien, Dokumente, Umfang, Methoden und Zeitrahmen übermittelt; Auditberichte, Nachweise und Feststellungen werden gepflegt und abgelegt.", app: "Die Anwendung zeigt, welche dieser Bestandteile für die Übergabe an die Teamleitung noch fehlen. Ein eingereichtes Audit ist als Ergebnisstand eingefroren; Korrekturen laufen über einen protokollierten Rücksetzvorgang." },
      ] },
      { type: "gaps", h: "Darüber hinaus.", items: [
        { title: "Ein Nachweis, mehrere Compliance-Verpflichtungen", text: "Derselbe Nachweis kann mehrere Verpflichtungen stützen; der Bericht je Verpflichtung zeigt, welche anderen ihn mitnutzen. Ohne gültigen Nachweis gilt eine Verpflichtung am Objekt nicht als erfüllt. <a href=\"/funktionen/erhebung-und-planung/#t2-2\">Zur Geltungsmatrix</a>." },
        { title: "Zusicherungen von Dienstleistern", text: "Was ein Dienstleister übernimmt, braucht eine gültige Zusicherung mit Vertrauensstufe. Läuft sie ab, fällt die Anforderung auf „nicht zugesichert“ zurück. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
        { title: "Erwartungen der prüfenden Stelle", text: "Eine Erwartungsliste als CSV oder JSON wird eingelesen; jede Position wird einer Grundschutz++-Anforderung oder einer ISO-27001-Stelle zugeordnet, und die Anwendung zeigt, was dazu vorliegt." },
        { title: "Prüfmodus", text: "Die einem Audit zugeordneten Anforderungen als Checkliste. Ergebnisse, die etwas nachzubessern oder nachzuprüfen ergeben, führen zu Feststellungen." },
      ] },
      { type: "faq", h: "Fragen zum Nachweismanagement.", items: [
        { q: "Was ist im ISMS ein Nachweis?", a: "Eine Aufzeichnung, die die Umsetzung einer Maßnahme oder Anforderung nachvollziehbar macht, etwa ein Prüfbericht, eine Konfiguration oder ein Protokoll. Der BSI-Standard 300-1 verlangt, sie der Maßnahme eindeutig zuzuordnen (Kapitel 4.3)." },
        { q: "Reicht eine hochgeladene Datei als Nachweis?", a: "Nein. In BlueProceedings ISMS zählt ein Nachweis erst, wenn er geprüft, akzeptiert und gültig ist. Ob er eine Anforderung ausreichend belegt, beurteilen Menschen." },
        { q: "Was passiert, wenn ein Nachweis abläuft?", a: "Er zählt nicht mehr, auch bei allen Compliance-Verpflichtungen, die ihn mitnutzen. Die Lücke wird sichtbar; vor dem Ablauf erscheint ein Fälligkeitshinweis." },
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
      { type: "pairs", h: "Was der Standard von Berichten erwartet.", items: [
        { title: "Dokumentenlenkung", ref: "Kapitel 2.9", bsi: "Ein Verfahren zur Lenkung aller ISMS-relevanten Dokumente sichert Nachvollziehbarkeit, Aktualität und Vollständigkeit über den gesamten Lebenszyklus.", app: "Je Bericht ein Erzeugungsintervall und eine Zahl aufbewahrter Stände; das Dokument entsteht bei Bedarf aus einem gewählten Stand. Formal freigegebene Berichte stehen im Dokumentregister und zählen nicht zur Aufbewahrungsgrenze. Wer laut RACI durchführt (R) und verantwortet (A), ist automatisch beteiligt." },
        { title: "Leitlinie", ref: "Kapitel 2.7", bsi: "Die Leitlinie beschreibt Ziele, Strategie und Organisation und legt die Verantwortung der Leitung fest; sie wird freigegeben und allen kommuniziert.", app: "Die Leitlinie entsteht als PDF aus dem freigegebenen Stand, gegliedert nach dem Standard und mit einer Momentaufnahme der Kennzahlen zu den Zielen." },
        { title: "Managementbewertung", ref: "Kapitel 5.3", bsi: "Die Leitung prüft auf Grundlage des Managementberichts, ob das ISMS geeignet, angemessen und wirksam ist, unter anderem mit Auditergebnissen, Leistungsbewertung, Vorfällen und Stand der Risikobehandlung.", app: "Eine neue Managementbewertung wird aus dem aktuellen Datenstand vorausgefüllt und endet mit einem Urteil der Leitung. Die Leitungsmappe zeigt daneben alle Freigaben mit Fassung, Rolle, Datum und Termin zur Überprüfung." },
      ] },
      { type: "gaps", h: "Weitere Berichte und Ausgaben.", items: [
        { title: "Prüfpaket mit Delegationskette", text: "Das Prüfpaket enthält je Prozess die benötigten Dienstleister, ihre Subdienstleister, abgegebene Anforderungen und gültige Zusicherungen. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
        { title: "Bericht je Compliance-Verpflichtung", text: "Fasst eine Verpflichtung zusammen und zeigt unter anderem, welche anderen Verpflichtungen dieselben Nachweise mitnutzen." },
        { title: "Vorfall- und Übungsbericht", text: "Für einen abgeschlossenen Sicherheitsvorfall und für eine Übung gibt es je einen Bericht, druckbar und als JSON; eine redigierte Fassung lässt sich getrennt ausgeben. <a href=\"/funktionen/bcm-notfallmanagement/\">Zu BCM und Notfallmanagement</a>." },
        { title: "Kennzeichen „durch Dienstleister“", text: "Abgegebene Anforderungen werden in den Berichten gesondert gezählt und nicht in die eigene Lage eingerechnet." },
      ] },
      { type: "faq", h: "Fragen zum Berichtswesen.", items: [
        { q: "Woran erkenne ich, dass ein Sicherheitskonzept veraltet ist?", a: "Das Sicherheitskonzept speichert seinen Ausgabestand. Ändern sich danach Risiken, Schutzbedarf oder andere Grundlagen, zeigt die Anwendung einen Hinweis mit den betroffenen Bereichen und dem Zeitpunkt der Änderung." },
        { q: "In welchen Formaten gibt es die Berichte?", a: "Je nach Bericht als HTML und PDF; für den Austausch zusätzlich als Prüfpaket und als OSCAL-Ausgaben wie System Security Plan, Assessment Results und POA&M." },
        { q: "Kann ich alte Berichtsstände wieder aufrufen?", a: "Ja. Je Bericht werden Stände in der festgelegten Zahl aufbewahrt, und ein Dokument lässt sich aus einem gewählten Stand erzeugen." },
      ] },
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
      { type: "gaps", h: "Darüber hinaus.", items: [
        { title: "Ein Bestand für ISMS und BCM", text: "Der BSI-Standard 300-1 empfiehlt, bei der Identifizierung der Geschäftsprozesse auf bestehende Managementsysteme wie ein BCMS zurückzugreifen (Kapitel 2.5). In BlueProceedings ISMS nutzen BIA, Schutzbedarf, Risiken und Notfallvorsorge dieselben Prozesse, Komponenten und Standorte." },
        { title: "Vorfall- und Übungsbericht", text: "Für einen abgeschlossenen Sicherheitsvorfall und für eine Übung entsteht je ein Bericht, druckbar und als JSON, wahlweise in einer redigierten Fassung." },
        { title: "Notfallkontakte aktuell halten", text: "Die Überprüfung der Notfallkontakte erscheint wie andere Fristen als Fälligkeitshinweis." },
        { title: "Dienstleister im Notfall", text: "Welche Dienstleister und Subdienstleister ein Prozess braucht, zeigt die Delegationskette; Risikomeldungen eines Dienstleisters lassen sich je Prozess bewerten. <a href=\"/funktionen/dienstleistersteuerung/\">Zur Dienstleistersteuerung</a>." },
      ] },
      { type: "faq", h: "Fragen zu BCM und Notfallmanagement.", items: [
        { q: "Was ist eine Business-Impact-Analyse (BIA)?", a: "Sie ermittelt je Geschäftsprozess, wie schwer ein Ausfall wiegt und wie lange er tragbar ist. Daraus folgen Wiederanlaufzeit (RTO), tolerierbarer Datenverlust (RPO) und Mindestbetrieb. In BlueProceedings ISMS steht die BIA am Prozess, mit Annahmen und Begründungen." },
        { q: "Erkennt die Anwendung widersprüchliche Wiederanlaufzeiten?", a: "Ja. Braucht ein Prozess einen anderen, der später wieder verfügbar ist, steht der Konflikt am Pfeil der Abhängigkeit." },
        { q: "Ersetzt die Berechnung des Wiederanlaufs die Entscheidung des Krisenstabs?", a: "Nein. Sie ist ein modellbasierter Planungsvorschlag aus den hinterlegten Abhängigkeiten, Zeiten, Kapazitäten und Verlustannahmen. Der Krisenstab prüft die tatsächliche Lage und entscheidet." },
      ] },
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
const oscalSeite = produktseiten["/funktionen/oscal-katalogverwaltung/"].sections;
oscalSeite.splice(2, 0,
  { type: "gaps", h: "Katalogstände vergleichen und migrieren.", items: [
    { title: "Versionen einer Katalogfamilie", text: "Neue Stände werden als eigene Versionen mit Herkunft geführt. Bestehende Informationsverbünde wechseln nicht unbemerkt auf einen neuen Katalog." },
    { title: "Vorher sehen, was sich ändert", text: "Der Vergleich zeigt neue, geänderte und entfallene Anforderungen sowie Änderungen an Parametern. So lässt sich der Umfang der Folgearbeit vor der Übernahme einschätzen." },
    { title: "Mit Entscheidung übernehmen", text: "Die Migration erfolgt bewusst und mit Freigabe. Betroffene Anforderungen werden zur erneuten Bewertung gestellt; ein alter Erfüllungsstand belegt nicht automatisch den neuen Text." },
  ] },
  { type: "gaps", h: "Parameter machen Anforderungen konkret.", lede: "Der Anwenderkatalog beschreibt Anforderungen strukturiert in OSCAL. Manche enthalten Platzhalter, deren Werte für den jeweiligen Kontext festgelegt werden müssen.", items: [
    { title: "Vom Katalog zum konkreten Wert", text: "Katalog, Profil und Blaupause können Werte vorgeben. Noch offene Parameterwerte werden im Informationsverbund ergänzt; die Herkunft des jeweils geltenden Werts bleibt nachvollziehbar." },
    { title: "Unvollständiges erkennen", text: "Die Übersicht zeigt festgelegte und offene Parameter. So bleibt sichtbar, wo eine Anforderung noch nicht vollständig konkretisiert ist." },
    { title: "Änderungen prüfen", text: "Ändern sich Parameter mit einem neuen Katalogstand oder einer Auswahl, gehören sie zum Vergleich und zur fachlichen Neubewertung." },
  ] }
);
const risikoSeite = produktseiten["/funktionen/risikomanagement/"].sections;
risikoSeite.splice(2, 0,
  { type: "feature", h: "Was könnte mitbetroffen sein?", paragraphs: ["Fällt eine Komponente aus, können auch davon abhängige Prozesse und Systeme betroffen sein. Die Ausbreitungsprüfung folgt den erfassten Beziehungen und schlägt mögliche Betroffenheiten vor.", "Im Beispiel steht ein Datenbank-Cluster im Mittelpunkt. Ihr bestätigt oder verwerft die Vorschläge mit Begründung oder haltet fest, welche Informationen für eine Entscheidung fehlen."], image: "impactGraph" },
  { type: "feature", h: "Wenn sich eine Entscheidungsgrundlage ändert.", paragraphs: ["Interne und externe Einflussfaktoren, etwa eine Änderung der Rechtslage oder der Lieferkette, lassen sich mit Risikobewertungen und anderen Entscheidungen verknüpfen. Quelle, Annahmen, Unsicherheit und der Termin der nächsten Überprüfung bleiben beim Faktor.", "Wird eine inhaltlich geänderte Folgeversion freigegeben oder ein verwendeter Faktor zurückgezogen, zeigt die Anwendung Prüfhinweise bei den betroffenen Entscheidungen: etwa Risiken, Schutzbedarfen, Dokumenten und Maßnahmen. Die Verantwortlichen prüfen, ob sich ihre Entscheidung ändern muss. Der Faktor erzeugt nicht automatisch ein neues Risiko und ändert keine Bewertung selbst.", "Das Beispiel zeigt einen Faktor mit seinen offenen Prüfhinweisen und Links zu den Entscheidungen."], image: "contextFactor" },
  { type: "gaps", h: "Risiken im Betrieb verfolgen.", items: [
    { title: "Kandidaten prüfen", text: "Lücken, Vorfälle, Auditfeststellungen oder Kennzahlen können Anlass für einen Risikokandidaten sein. Erst die bewusste Übernahme macht daraus ein formales Risiko." },
    { title: "Bewertung nachvollziehen", text: "Die freigegebene Risikomatrix verbindet Eintritt und Auswirkung zu einer nachvollziehbaren Risikostufe. Risikoeigentümer, Schutzziele und betroffene Objekte bleiben zugeordnet." },
    { title: "Behandlung und Wirksamkeit", text: "Maßnahmen tragen Verantwortung, Fristen und Fortschritt. Nachweise und Wirksamkeitsprüfung zeigen, ob die Behandlung trägt." },
    { title: "Risikolage und Überprüfung", text: "Übersichten zeigen verbleibende Belastungen und führen zu den einzelnen Risiken zurück. Wiedervorlagen und Änderungen geben Anlass, Bewertungen und befristete Entscheidungen erneut zu prüfen." },
  ] }
);
const berichtSeite = produktseiten["/funktionen/berichtswesen/"].sections;
berichtSeite.splice(2, 0,
  { type: "feature", h: "Eine Vorlage, verschiedene Berichte.", paragraphs: ["Eine Berichtsvorlage legt fest, welche Abschnitte ein Auditbericht enthält, zum Beispiel Prüfumfang, Nachweise, Feststellungen, Risiken und Kennzahlen. Ihr wählt das Audit; die Anwendung stellt den Bericht aus dem gepflegten Datenstand zusammen.", "Die Beispiele zeigen die Vorlagenübersicht, einen Kurzbericht und einen Bericht für die Leitung mit fiktiven Daten."], image: ["reportTemplateCards", "reportTemplates", "reportLeadership"], imageLabels: ["Vorlagen", "Kurzbericht", "Leitung"] },
  { type: "gaps", h: "Berichte vorbereiten und austauschen.", items: [
    { title: "Vorlagen übernehmen", text: "Berichtsvorlagen lassen sich als Datei weitergeben und einlesen, etwa von einer prüfenden Stelle oder einer anderen Institution. Verwendet Vorlagen aus vertrauenswürdigen Quellen und prüft sie vor ihrer Verwendung." },
    { title: "Aus dem ISMS-Bestand", text: "Sicherheitskonzept, Management- und Auditberichte greifen auf gepflegte Informationen zurück. So müssen dieselben Angaben nicht für jeden Bericht erneut zusammengestellt werden." },
    { title: "Version und Freigabe", text: "Das Dokumentregister hält Dokumentversionen, Klassifikation, Freigabe und Überprüfung zusammen. Ein freigegebener Stand bleibt als Momentaufnahme nachvollziehbar." },
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
lernen.h1 = "Grundschutz++ lernen, während ihr damit arbeitet.";
lernen.lede = "Grundschutz++ und der BSI-Standard 300-1 bringen eine neue Methodik und neue Abläufe mit. Sie zu verstehen braucht Übung. Im Lern-Modus lernt ihr direkt in der Anwendung, wie die Schritte zusammenhängen und was eure Rolle dazu beiträgt.";
lernen.sections.splice(1, 0,
  { type: "gaps", h: "Lernen im Zusammenhang, nicht nur Begriffe lesen.", items: [
    { title: "Ein Modul wählen", text: "Geführte Module führen durch konkrete Aufgaben, etwa Rollen zuweisen, einen Katalog importieren, Risiken behandeln oder ein Audit vorbereiten. Lernziel, Rolle und Voraussetzungen geben Orientierung." },
    { title: "In der Anwendung üben", text: "Eine Anleitung begleitet euch durch die echten Arbeitsoberflächen. Sie erklärt den nächsten Schritt, den fachlichen Hintergrund und warum die Aufgabe für das ISMS wichtig ist." },
    { title: "Ohne echte Daten ausprobieren", text: "Der Lern-Modus verwendet eine getrennte Umgebung mit fiktiven Übungsdaten. Dort könnt ihr Abläufe nachvollziehen und Entscheidungen erproben, ohne den produktiven Bestand zu verändern." },
    { title: "Rollen und Freigaben verstehen", text: "Ein ISMS entsteht gemeinsam. Im Lern-Modus lässt sich auch ausprobieren, wie Aufgaben zwischen Rollen weitergegeben und Entscheidungen eingereicht und freigegeben werden." },
    { title: "Eigenständig erkunden", text: "Neben geführten Schritten könnt ihr die Übungsumgebung frei erkunden und Zusammenhänge im eigenen Tempo nachvollziehen." },
    { title: "Alle Module auf einer Seite", text: "Eine Übersicht zeigt alle Lern-Module, zuerst den Einstieg mit Musterbeispielen, danach die Module je Lernpfad in der Reihenfolge des Katalogs." },
  ] }
);
lernen.sections.splice(lernen.sections.length - 1, 0,
  { type: "faq", h: "Fragen zum Lern-Modus.", items: [
    { q: "Verändert der Lern-Modus echte ISMS-Daten?", a: "Nein. Er nutzt eine getrennte Übungsumgebung mit fiktiven Daten. Der produktive Bestand bleibt unberührt." },
    { q: "Brauche ich Vorwissen zu Grundschutz++?", a: "Nein. Die Module erklären die Schritte des BSI-Standards 300-1 an konkreten Aufgaben, die Feldhilfe erklärt Begriffe direkt am Feld und verweist auf das Glossar." },
    { q: "Ersetzt der Lern-Modus eine Schulung zum GS++-Praktiker?", a: "Nein. Er erklärt die Arbeit in der Anwendung und die Zusammenhänge der Methodik. Für Schulungskonzepte und Qualifizierungen ist das BSI zuständig." },
  ] }
);
for (const [pfad, inhalt] of Object.entries(produktseiten)) Object.assign(SEO_SEITEN[pfad], inhalt);
const ueberblick = SEO_SEITEN["/funktionen/"].sections;
ueberblick.splice(1, 0, { type: "feature", h: "Sehen, wer einspringt, bevor eine Rolle unbesetzt ist.", paragraphs: ["Fällt jemand aus, bleibt oft offen, wer die Aufgaben übernimmt. Der Vertretungsplan legt Abwesenheiten und Vertretungen je Rolle nebeneinander und weist auf Lücken hin.", "Im Beispiel fehlt während einer Abwesenheit die Vertretung für die Rolle Auditor. Der Plan zeigt die eingetragenen Abwesenheiten, nicht deren Grund."], image: "deputyPlan" });
ueberblick.splice(4, 0, { type: "feature", h: "Bei einem Vorfall sehen, was mitbetroffen sein könnte.", paragraphs: ["Ein Datenbank-Cluster fällt aus. Welche Prozesse und Komponenten davon abhängen, zeigt die Ausbreitungsprüfung anhand der erfassten Beziehungen.", "Die Anwendung schlägt mögliche Betroffenheiten vor. Ihr prüft jeden Vorschlag und bestätigt oder verwerft ihn mit Begründung."], image: "impactGraph" });
ueberblick.splice(7, 0, { type: "feature", h: "Ein Plan ohne Übung sagt wenig.", paragraphs: ["Im Lagezentrum steht der Plan eines Krisenlaufs neben dem tatsächlichen Ablauf: Was läuft, was ist abgeschlossen und wo entsteht Verzug?", "Das Beispiel zeigt eine Funktionsübung mit mehreren Teams. Die Fortschreibung hilft beim Überblick; der Krisenstab beurteilt die Lage."], image: "planVsActual" });

const nachAbschnitt = (id) => ueberblick.findIndex((s) => s.id === id) + 1;
ueberblick.splice(nachAbschnitt("schritt-1"), 0, { type: "feature", id: "verteilt", h: "Nacheinander oder parallel.", paragraphs: ["Klassisch holt der ISB jeden Fachbereich in einen Termin, trägt die Ergebnisse zusammen und geht mit den Risiken zur Leitung. Jede Rückfrage braucht einen neuen Termin.", "In BlueProceedings ISMS erfassen die Fachbereiche ihre Prozesse und Objekte gleichzeitig selbst. Der ISB bündelt und meldet zurück, die Leitung prüft im Rahmen ihrer Regeln. Die Darstellung ist schematisch und keine Messung."], image: "parallelWork" });
ueberblick.splice(nachAbschnitt("schritt-3"), 0, { type: "feature", id: "risikoweg", h: "Von der Ursache bis zum Restrisiko, auf einer Seite.", paragraphs: ["Eine Zeile im Risikoregister verrät nicht, woher ein Risiko kommt, was dagegen getan wird und was übrig bleibt. Jedes Risiko hat deshalb eine eigene Seite mit Ursache, Bewertung, Behandlung, Maßnahme und Restrisiko.", "Im Beispiel ist die Anforderung zur Speicherverschlüsselung noch nicht umgesetzt; die Maßnahme ist in Umsetzung. Mehr auf der Seite <a href=\"/funktionen/risikomanagement/\">Risikomanagement</a>."], image: ["riskPath", "riskFile"], imageLabels: ["Risikoweg", "Risikoakte"] });
ueberblick.splice(nachAbschnitt("schritt-4"), 0, { type: "feature", id: "veraltet", h: "Veraltet statt falsch-grün.", paragraphs: ["Ein Sicherheitskonzept hält einen Stand fest. Ändern sich danach seine Grundlagen, zeigt die Anwendung, welche Bereiche betroffen sind und wann sie geändert wurden.", "Das Beispiel zeigt einen Informationsverbund mit Demodaten. Die Verantwortlichen prüfen, was neu bewertet und berichtet werden muss."], image: "staleReport" },
  { type: "feature", id: "wirksam", h: "Erledigt ist nicht wirksam.", paragraphs: ["Eine Maßnahme lässt sich erst abschließen, wenn Wirksamkeitskriterien geprüft sind, ein gültiger Nachweis akzeptiert ist und die erforderliche Freigabe vorliegt (BSI-Standard 300-1, Kapitel 6.4). Fehlt etwas, sagt die Anwendung, was.", "Im Beispiel stammt die Maßnahme aus einer Audit-Feststellung; die Kriterien für die Wirksamkeitsprüfung fehlen noch. Mehr auf der Seite <a href=\"/funktionen/nachweismanagement/\">Nachweismanagement</a>."], image: "effectivenessCycle" });
ueberblick.splice(nachAbschnitt("schritt-5"), 0, { type: "feature", id: "wiederanlauf", h: "Wiederanlauf planen, bevor es ernst wird.", paragraphs: ["Fällt ein Standort oder ein Objekt aus, muss schnell entschieden werden, was zuerst wieder anläuft. Mit begrenztem Personal gibt es viele mögliche Reihenfolgen.", "Die Anwendung vergleicht Planungsverfahren anhand der hinterlegten Abhängigkeiten und Annahmen. Das Ergebnis ist ein Planungsvorschlag; der Krisenstab beurteilt die tatsächliche Lage."], image: "crisisRun" });

SEO_SEITEN["/funktionen/risikomanagement/"].sections.splice(1, 0, {"type": "feature", "id": "rahmen-risikobetrachtung", "h": "Der Rahmen vor der einzelnen Risikobewertung.", "paragraphs": ["Wie viel Risiko ist tragbar, wie wird bewertet und wer trägt die Risiken? Der Überblick zeigt strategische, methodische und organisatorische Grundlagen getrennt. Fehlende Freigaben und noch nicht zugewiesene Risiken bleiben sichtbar.", "Die Aufnahme zeigt einen fiktiven Demostand vom 01.11.2026 ohne freigegebene Risikomatrix. Wie dieser Rahmen in Prozessschritt 1 vorbereitet wird, zeigt die <a href=\"/funktionen/erhebung-und-planung/#rahmen-risikobetrachtung\">Erhebung und Planung</a>."], "image": "risikorahmen"});
