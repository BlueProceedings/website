const BSI_GSPP = "https://www.bsi.bund.de/dok/grundschutz-plus-plus";
const BSI_STANDARD_300_1 = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_300-1.pdf?__blob=publicationFile&v=1";
const BSI_BIBLIOTHEK = "https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek";
const BSI_CONTROL_LAYER = `${BSI_BIBLIOTHEK}/tree/main/control_layer/Grundschutz%2B%2B`;
const NIST_OSCAL = "https://pages.nist.gov/OSCAL/";
const BSIG = (paragraf) => `https://www.gesetze-im-internet.de/bsig_2025/__${paragraf}.html`;
const BSI_NIS2_RISIKO = "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-Risikomanagementmassnahmen/NIS-2-Risikomanagementmassnahmen.html";
const BSI_NIS2_ISO = "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-ISO27001/NIS-2-ISO-27001_node.html";
const BSI_NIS2_FAQ = "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-FAQ/NIS-2-FAQ-allgemein/FAQ-zu-NIS-2.html";
const EU_NIS2 = "https://eur-lex.europa.eu/eli/dir/2022/2555/oj";
const GEPRUEFT = "2026-11-01";

const standardQuelle = [BSI_STANDARD_300_1, "BSI: BSI-Standard 300-1 „Methodik Grundschutz++“, Version 1.0", "Grundlage aller Kapitel- und Kriterienangaben auf dieser Seite"];
const gsQuelle = [BSI_GSPP, "BSI: Grundschutz++", "Meilensteinplan, Stand Oktober 2026, am 01.11.2026 geprüft"];
const bibliothekQuelle = [BSI_CONTROL_LAYER, "Stand-der-Technik-Bibliothek: Grundschutz++", "Anwenderkatalog und Methodik-Anforderungen als OSCAL-Dateien"];

export const EINSTIEG_SEITEN = {
  "/bsi-standard-300-1/": {
    title: "BSI-Standard 300-1: Grundschutz++ erklärt",
    description: "BSI-Standard 300-1 (BSI 300-1) erklärt: Aufbau, fünf Prozessschritte mit Kapiteln, Teilschritte 2.1 bis 2.11 und die 35 Mindestkriterien der Risikobetrachtung.",
    crumb: "BSI-Standard 300-1",
    crumbs: [["/", "Startseite"], ["/grundschutz-plus-plus/", "Grundschutz++"], ["/bsi-standard-300-1/", "BSI-Standard 300-1"]],
    h1: "BSI-Standard 300-1 (BSI 300-1): die Methodik Grundschutz++ erklärt.",
    lede: "Der BSI-Standard 300-1, oft kurz „BSI 300-1“ genannt, ist die Methodik Grundschutz++ des BSI. Er beschreibt in sechs Kapiteln und vier Anhängen, wie eine Institution ein ISMS in fünf Prozessschritten aufbaut, betreibt und verbessert: Erhebung und Planung, Anforderungsanalyse, Realisierung, Überwachung und kontinuierliche Verbesserung. Version 1.0 wurde am 27. Oktober 2026 vorgestellt. Diese Seite fasst den Standard mit Kapitel- und Kriteriennummern zusammen und sagt jeweils getrennt davon, wie wir ihn in BlueProceedings ISMS auslegen.",
    asOf: GEPRUEFT, mailTopic: "BSI-Standard 300-1", topics: "grundschutz",
    sections: [
      { type: "text", h: "Methodik hier, Anforderungen dort.", paragraphs: [
        "Wer mit IT-Grundschutz gearbeitet hat, kennt die BSI-Standards der Reihe 200 und das Kompendium mit seinen Bausteinen. Grundschutz++ trennt anders: <b>Der BSI-Standard 300-1 beschreibt das Vorgehen</b>, also was ihr in welcher Reihenfolge erhebt, entscheidet und dokumentiert. <b>Die Anforderungen selbst stehen im Anwenderkatalog</b>, den das BSI maschinenlesbar im OSCAL-Format in der Stand-der-Technik-Bibliothek veröffentlicht. Wer den Standard liest und eine Liste von Maßnahmen erwartet, sucht an der falschen Stelle.",
        "Version 1.0 richtet sich laut Einleitung in erster Linie an „Early Adopters“, also erfahrene Institutionen, die Grundschutz++ früh einführen wollen (Kapitel 1). Sie wurde mit der Grundschutz-Community entwickelt und in ausgewählten Pilotierungsinstitutionen erprobt. Der Ablauf folgt dem PDCA-Zyklus; erst die Wiederholung des Zyklus baut das ISMS schrittweise aus.",
        "Der Standard verweist selbst auf die ISO/IEC 27001: In Prozessschritt 1 werden die Aktivitäten aus deren Kapiteln 4 und 5 durchgeführt, in Prozessschritt 2 die aus Kapitel 6 und 10, und die Methodik-Anforderungen im Katalog bilden die Kapitel 4 bis 10 der Norm ab (Kapitel 2, 3 und 3.4). Laut Meilensteinplan des BSI können ab dem 1. Januar 2027 Anträge auf eine ISO-27001-Zertifizierung auf Basis von Grundschutz++ gestellt werden.",
      ] },
      { type: "diagram", kind: "gruppen", h: "Aufbau des Standards.", label: "Nach BSI-Standard 300-1, Inhaltsverzeichnis", lede: "Sechs Kapitel und vier Anhänge. Kapitel 2 bis 6 sind die fünf Prozessschritte; die Anhänge liefern Hilfsmittel und die verbindlichen Mindestkriterien für die Risikobetrachtung.", groups: [
        { title: "Einleitung", items: [{ n: 1, text: "Zielgruppe, Entstehung und der PDCA-Zyklus mit den fünf Prozessschritten (Abbildung 1)" }] },
        { title: "Prozessschritte", items: [
          { n: 2, text: "Erhebung und Planung, elf Teilschritte 2.1 bis 2.11" },
          { n: 3, text: "Anforderungsanalyse: Informationsverbund, Assets, Blaupausen, Anforderungspaket" },
          { n: 4, text: "Realisierung: Umsetzungsstatus, Risikobetrachtung, Umsetzungsplan" },
          { n: 5, text: "Überwachung: Leistungsbewertung, Audits, Managementbewertung, Monitoring" },
          { n: 6, text: "Kontinuierliche Verbesserung: Nicht-Konformitäten, Korrekturen, Evaluation" },
        ] },
        { title: "Anhänge", items: [
          { n: "A1", text: "Zielobjektkategorien mit Definition und Beispielen" },
          { n: "A2", text: "Vereinfachte Geschäftsprozessanalyse" },
          { n: "A3", text: "35 Mindestkriterien für die Risikobetrachtung" },
          { n: "A4", text: "47 elementare Gefährdungen" },
        ] },
      ] },
      { type: "diagram", kind: "zyklus", h: "Fünf Prozessschritte, ein Kreislauf.", label: "Nach BSI-Standard 300-1, Kapitel 1, Abbildung 1", center: "PDCA", centerSub: "Plan · Do · Check · Act", svgTitle: "Kreislauf der fünf Prozessschritte: 1 und 2 gehören zu Plan, 3 zu Do, 4 zu Check, 5 zu Act.", lede: "Die ersten beiden Schritte bilden die Phase Plan, die Realisierung ist Do, die Überwachung Check und die kontinuierliche Verbesserung Act. Danach beginnt der Zyklus erneut, etwa mit dem nächsten Geschäftsprozess.", items: [
        { tag: "Plan", title: "Erhebung und Planung", ref: "Kapitel 2", text: "Den Rahmen schaffen: Kontext, Compliance, Anwendungsbereich, interessierte Parteien, Geschäftsprozesse, Schutzbedarf, Leitlinie, Rollen, Dokumentation, Freigaben und der Rahmen der Risikobetrachtung." },
        { tag: "Plan", title: "Anforderungsanalyse", ref: "Kapitel 3", text: "Informationsverbund abgrenzen, Assets mit Abhängigkeiten erfassen, Blaupausen auswählen, Zielobjektkategorien zuordnen und das Anforderungspaket bilden." },
        { tag: "Do", title: "Realisierung", ref: "Kapitel 4", text: "Umsetzungsstatus je Anforderung ermitteln, fehlende Umsetzungen nach Modalverb bewerten, Risiken betrachten, Maßnahmen planen und den Fortschritt verfolgen." },
        { tag: "Check", title: "Überwachung", ref: "Kapitel 5", text: "Leistung bewerten, interne Audits planen und durchführen, Managementbewertung, Monitoring von Vorfällen, Schwachstellen und Bedrohungen, Anforderungen validieren." },
        { tag: "Act", title: "Kontinuierliche Verbesserung", ref: "Kapitel 6", text: "Nicht-Konformitäten mit Ursachenanalyse behandeln, Verbesserungen priorisieren, in den Umsetzungsplan übernehmen und ihre Wirksamkeit evaluieren." },
      ] },
      { type: "gaps", anchor: "prozessschritt-1", h: "Prozessschritt 1: elf Teilschritte.", lede: "Kapitel 2 legt die organisatorischen und rechtlichen Grundlagen. Die Institutionsleitung bestimmt hier, welche Bereiche das ISMS abdeckt und welche nicht. So beschreibt der Standard die Teilschritte; wie BlueProceedings ISMS jeden davon umsetzt, zeigt die Seite <a href=\"/funktionen/erhebung-und-planung/\">Erhebung und Planung</a>.", items: [
        { title: "2.1 Kontext der Institution", text: "Faktoren von außen (Geopolitik, Recht und Regulierung wie NIS-2 oder DORA, Technologie, Lieferketten, Gesellschaft, Umwelt am Standort) und von innen (Strategie, Struktur, Prozesse, IT-Landschaft, Kultur, Ressourcenmangel) erfassen und prüfen, welche das ISMS beeinflussen. Knapp festhalten genügt." },
        { title: "2.2 Compliance-Management", text: "Rechtskataster, Gesetze, Anforderungskataloge und interne Regelwerke analysieren, Compliance-Stellen anhören, gesetzliche und vertragliche Verpflichtungen dokumentieren. Was daraus folgt, ergänzt später das Anforderungspaket (Kapitel 3.4.3)." },
        { title: "2.3 Anwendungsbereich", text: "Die Leitung legt fest, wofür das ISMS gilt: betrachtete Geschäftsprozesse vollständig, Institutionseinheiten, Standorte, Anwendungen, IT-Systeme und berücksichtigte Dienstleister. Ausgeschlossene Bereiche dürfen benannt werden." },
        { title: "2.4 Interessierte Parteien", text: "Interne und externe Stakeholder und ihre Erwartungen dokumentieren, Relevanz und Priorität festlegen und mit der Leitung entscheiden, welche verbindlichen Verpflichtungen als Anforderungen ins ISMS aufgenommen werden." },
        { title: "2.5 Geschäftsprozesse", text: "Die Prozesse im Anwendungsbereich identifizieren und dokumentieren; ihr Zweck für die Institutionsziele muss erkennbar sein. Ohne Prozesslandkarte hilft die vereinfachte Analyse aus Anhang 2." },
        { title: "2.6 Schutzbedarf", text: "Je Geschäftsprozess und Grundwert normal oder hoch, abgeleitet aus möglichen Schäden. Empfehlung: mit dem wichtigsten Prozess der höchsten Kategorie beginnen. Hoher Schutzbedarf verlangt eine Risikobetrachtung." },
        { title: "2.7 Leitlinie", text: "Verpflichtung der Leitung, messbare Ziele, Strategie und Sicherheitsorganisation. Die Leitung gibt die Leitlinie frei, alle Mitarbeitenden erfahren davon." },
        { title: "2.8 Rollen und Zuständigkeiten", text: "Rollen mit Qualifikation festlegen, Interessenkonflikte vermeiden (etwa IT-Leitung und ISB), Schnittstellen klären und bestimmen, wann der ISB in sicherheitsrelevante Projekte eingebunden wird." },
        { title: "2.9 Dokumentation und Kommunikation", text: "Ein Verfahren für interne und externe Kommunikation und eine Dokumentenlenkung, die alle ISMS-relevanten Dokumente über ihren Lebenszyklus nachvollziehbar, aktuell und vollständig hält." },
        { title: "2.10 Freigabe der Vorgehensweise", text: "Die Verantwortung für das ISMS liegt bei der Leitung und ist nicht delegierbar. Sie entscheidet mindestens über Anwendungsbereich, Schutzbedarf, Reihenfolge der Prozesse, Ressourcen und Leitlinie." },
        { title: "2.11 Initiierung der Risikobetrachtung", text: "Strategisch Risikoappetit und Akzeptanzkriterien, methodisch Verfahren und Kriterien, organisatorisch Rollen wie den Risikoeigentümer festlegen. Die Leitung autorisiert diesen Rahmen." },
      ] },
      { type: "pairs", h: "Wie wir Prozessschritt 1 lesen.", lede: "Drei Stellen, an denen der Standard Spielraum lässt, und wie BlueProceedings ISMS ihn nutzt.", items: [
        { title: "Kontext, der sich ändert", ref: "Kapitel 2.1", bsi: "Die Faktoren werden erfasst und daraufhin geprüft, ob sie das ISMS beeinflussen. Wesentliche Aspekte sollen knapp festgehalten werden.", app: "Wir führen Faktoren mit Quelle, Annahmen und Unsicherheit in Versionen und verknüpfen sie mit den Entscheidungen, die auf ihnen beruhen. Wird eine inhaltlich geänderte Fassung freigegeben, zeigt die Anwendung, welche Entscheidungen neu zu prüfen sind. Sie ändert keine Bewertung selbst." },
        { title: "Alles gehört dazu, außer es ist begründet", ref: "Kapitel 2.3", bsi: "Der Anwendungsbereich kann die ganze Institution oder einen Teil umfassen; ausgeschlossene Bereiche können benannt werden.", app: "Jedes erfasste Objekt liegt zunächst im Anwendungsbereich (in der Oberfläche: Geltungsbereich). Wer etwas herausnimmt, begründet es. So fällt kein System aus Versehen heraus." },
        { title: "Freigaben als Entscheidung", ref: "Kapitel 2.10", bsi: "Der Leitung werden Entscheidungsvorlagen vorgelegt; sie trägt die Entscheidungen und gibt sie frei.", app: "Freigaben stehen dort, wo entschieden wird, mit Person, Rolle und Zeitpunkt. Eine Übersicht zeigt den Stand jedes Teilschritts von 2.1 bis 2.11 und führt zur Stelle, an der weitergearbeitet wird." },
      ] },
      { type: "diagram", kind: "fluss", h: "Prozessschritt 2: vom Anwendungsbereich zum Anforderungspaket.", label: "Nach BSI-Standard 300-1, Kapitel 3", lede: "Die Anforderungsanalyse übersetzt den Rahmen aus Prozessschritt 1 in konkrete Anforderungen für einen Informationsverbund.", items: [
        { title: "Anwendungsbereich", ref: "Kap. 2.3", text: "formaler Umfang, festgelegt von der Leitung" },
        { title: "Informationsverbund", ref: "Kap. 3.1", text: "inhaltlich-technische Abbildung; ein Anwendungsbereich kann mehrere enthalten" },
        { title: "Assets", ref: "Kap. 3.2", text: "mit Abhängigkeiten, Tiefe je nach Schutzbedarf" },
        { title: "Blaupausen", ref: "Kap. 3.3", text: "Vorauswahl für ein Anwendungsszenario, Version dokumentieren" },
        { title: "Zielobjektkategorien", ref: "Kap. 3.4.2", text: "zuordnen, übergeordnete Kategorien eingeschlossen" },
        { title: "Anforderungspaket", ref: "Kap. 3.4, 3.5", text: "ergänzen und Parameter konkretisieren" },
      ] },
      { type: "text", h: "Drei Arten von Anforderungen.", paragraphs: [
        "Das Anforderungspaket setzt sich aus drei Arten zusammen (Kapitel 3.4): <b>Methodik-Anforderungen</b> gelten für jeden Informationsverbund und bilden die Kapitel 4 bis 10 der ISO/IEC 27001 ab; ein individuelles Vorgehen ist nicht vorgesehen. <b>Technische und organisatorische Anforderungen ohne Zielobjektkategorie</b> sind ebenfalls immer aufzunehmen. <b>Anforderungen mit Zielobjektkategorie</b> gelten, soweit Assets dieser Kategorie zugeordnet sind. Weil ein Asset auch die übergeordneten Kategorien erhält, werden deren Anforderungen vererbt; doppelte Anforderungen zählen nur einmal.",
        "Hinzu kommen Ergänzungen: eigene Anforderungen, wenn ein Asset nicht hinreichend abgedeckt ist, und Verpflichtungen aus Compliance-Management und Stakeholder-Analyse (Kapitel 3.4.3). Parameter wie „regelmäßig“ werden bei oder nach der Erstellung des Pakets konkretisiert, sofern keine Blaupause sie festschreibt (Kapitel 3.5). Anforderungen des Sicherheitsniveaus „erhöht“ sind KANN-Anforderungen und helfen vor allem in der Risikobetrachtung (Kapitel 3.4.2).",
        "Auch der Detaillierungsgrad der Dokumentation richtet sich nach dem Schutzbedarf (Kapitel 3.2): Bei hohem Schutzbedarf werden Zugehörigkeit und Abhängigkeiten der Assets zum Geschäftsprozess dokumentiert, weil sich die Risikobetrachtung an diesen Zusammenhängen orientiert. Bei normalem Schutzbedarf genügen mindestens die Abhängigkeiten zwischen Anwendungen und IT-Systemen sowie zwischen IT-Systemen und Räumen.",
      ] },
      { type: "diagram", kind: "gruppen", h: "Prozessschritt 3: wenn eine Anforderung nicht erfüllt ist.", label: "Nach BSI-Standard 300-1, Kapitel 4.1", lede: "Für jede Anforderung im Paket wird der Umsetzungsstatus vollständig ermittelt: erfüllt, nicht erfüllt oder nicht anwendbar, Letzteres mit Begründung (Kapitel 4.1.1). Was bei „nicht erfüllt“ folgt, entscheidet das Modalverb (Kapitel 4.1.2).", groups: [
        { title: "KANN", items: [{ text: "Optional. Muss nicht berücksichtigt werden." }] },
        { title: "SOLLTE, temporär", items: [{ text: "Erfüllung ist vorgesehen: stichhaltig begründen. Löst keine Risikobetrachtung aus." }, { text: "Das noch nicht gemilderte Risiko wird der Leitung mitgeteilt und von ihr getragen (Kapitel 4.1.1)." }] },
        { title: "SOLLTE, dauerhaft", items: [{ text: "Auf absehbare Zeit oder endgültig nicht erfüllt: Risikobetrachtung (Mindestkriterium 34)." }, { text: "Restrisiken autorisiert die Leitung (Mindestkriterium 30)." }] },
        { title: "MUSS", items: [{ text: "Maßnahmen zur Erfüllung festlegen." }, { text: "Keine Ausnahmegenehmigung, keine Risikoakzeptanz; eine Risikobetrachtung ersetzt die Erfüllung nicht." }] },
      ], caption: "Häufen sich dauerhaft nicht erfüllte SOLLTE-Anforderungen, wird der Stand der Technik insgesamt womöglich nicht erreicht; in einer Zertifizierung könnte das als erhebliche Abweichung gelten (Kapitel 4.1.2)." },
      { type: "text", h: "Vom Plan zur Fortschrittsverfolgung.", paragraphs: [
        "Aus dem Anforderungspaket entsteht ein Umsetzungsplan (Kapitel 4.3). Für jede Anforderung muss erkennbar sein, welche Maßnahmen ihr zugeordnet sind; für jede Maßnahme werden mindestens die Anforderung, das Datum der Umsetzung oder Überprüfung und die dokumentierende oder prüfende Person festgehalten. Nachweise sind der Maßnahme eindeutig zuzuordnen; bei automatisierten Prüfungen auch Werkzeug, Zeitpunkt und Ergebnis. Eine Historie der Änderungen wird empfohlen.",
        "Zuständigkeiten und Fristen gibt die Leitung frei, weil sie die Ressourcen stellt (Kapitel 4.4). Der Fortschritt wird laufend verfolgt, und wer umsetzt, soll nicht zugleich den eigenen Fortschritt überwachen (Kapitel 4.5).",
        "Die Prozessschritte 4 und 5 schließen den Kreis. Die Leistungsbewertung gestalten die Institutionen vorerst selbst, weil einheitliche Vorgaben noch ausstehen (Kapitel 5.1); laut Meilensteinplan soll ein Konzept zur Leistungsmessung im Februar 2027 folgen. Hinzu kommen internes Auditprogramm (5.2), Managementbewertung durch die Leitung (5.3), Verfahren für Vorfälle, Schwachstellen und neue Bedrohungen (5.4) und die Validierung der Anforderungen, etwa wenn sich Bibliothek oder Blaupausen ändern (5.5). In Kapitel 6 werden Nicht-Konformitäten auf ihre Ursachen untersucht, Verbesserungen in einen Korrektur- und Verbesserungsplan übernommen und Maßnahmen anhand messbarer Kriterien auf Wirksamkeit geprüft (6.1 bis 6.4).",
      ] },
      { type: "diagram", kind: "gruppen", h: "Anhang 3: 35 Mindestkriterien für die Risikobetrachtung.", label: "Nach BSI-Standard 300-1, Anhang 3", lede: "Das Verfahren für die Risikobetrachtung dürft ihr selbst wählen, etwa angelehnt an ISO/IEC 27005 oder ISO 31000, solange es diese verbindlichen Mindestkriterien erfüllt (Kapitel 2.11). Sie machen Verfahren vergleichbar und überprüfbar. Die Nummern dienen der Referenz, nicht als Reihenfolge.", groups: [
        { title: "Initiierung", ref: "1–10", items: [
          { n: 1, text: "Verfahren für Identifikation und Bewertung" }, { n: 2, text: "Verfahren für die Behandlung" }, { n: 3, text: "Dokumentation des Verfahrens (Identifikation, Bewertung)" }, { n: 4, text: "Dokumentation des Verfahrens (Behandlung)" }, { n: 5, text: "Rollen, insbesondere Risikoeigentümer" }, { n: 6, text: "Kriterien für Identifikation und Bewertung" }, { n: 7, text: "Risikoappetit" }, { n: 8, text: "Risikoakzeptanzkriterien" }, { n: 9, text: "Autorisierung durch die Leitung" }, { n: 10, text: "Methodische Grundlage, z. B. Risikoszenarien" },
        ] },
        { title: "Identifikation", ref: "11–17", items: [
          { n: 11, text: "Untersuchungsobjekte dokumentieren" }, { n: 12, text: "Vorhandene und geplante Maßnahmen berücksichtigen" }, { n: 13, text: "Ebene Geschäftsprozess, ergänzend kritische Assets" }, { n: 14, text: "Betroffene Schutzziele zuordnen" }, { n: 15, text: "Mindestangaben im Risikoregister" }, { n: 16, text: "Risikoeigentümer zuweisen" }, { n: 17, text: "Elementare Gefährdungen bei dauerhaft offener SOLLTE-Anforderung" },
        ] },
        { title: "Bewertung", ref: "18–22", items: [
          { n: 18, text: "Eintrittshäufigkeit für einen festgelegten Zeitraum" }, { n: 19, text: "Schadensauswirkung begründet" }, { n: 20, text: "Risikoniveau aus beiden" }, { n: 21, text: "Priorisierung" }, { n: 22, text: "Abgleich mit den Akzeptanzkriterien" },
        ] },
        { title: "Behandlung", ref: "23–31", items: [
          { n: 23, text: "Option: reduzieren, vermeiden, transferieren, akzeptieren" }, { n: 24, text: "Maßnahmen zur Reduktion" }, { n: 25, text: "Zuordnung Maßnahme zu Risiko" }, { n: 26, text: "Bewerten und behandeln, bis die Kriterien erfüllt sind" }, { n: 27, text: "Ausnahmegenehmigung durch die Leitung" }, { n: 28, text: "Befristung temporärer Akzeptanz" }, { n: 29, text: "Akzeptierte Risiken dokumentieren" }, { n: 30, text: "Restrisiken durch die Leitung autorisieren" }, { n: 31, text: "Umsetzungsplanung durch Risikoeigentümer freigeben" },
        ] },
        { title: "Phasenübergreifend", ref: "32–35", items: [
          { n: 32, text: "Hoher Schutzbedarf löst Risikobetrachtung aus" }, { n: 33, text: "Nicht hinreichend abgedeckte Assets" }, { n: 34, text: "Dauerhaft nicht erfüllte SOLLTE-Anforderung" }, { n: 35, text: "Überprüfung mindestens jährlich und bei wesentlichen Änderungen" },
        ] },
      ], caption: "Bei normalem Schutzbedarf ist keine eigene Risikobetrachtung nötig: Dem Anwenderkatalog liegt eine allgemeine Risikobetrachtung des BSI zugrunde, deren Gefährdungen in den Metadaten jeder Anforderung stehen (Kapitel 2.11, Anhang 4). Die Kurztitel sind gekürzt; maßgeblich ist der Wortlaut im Standard." },
      { type: "pairs", h: "Wie wir die Mindestkriterien auslegen.", items: [
        { title: "Auslöser erkennen", ref: "Mindestkriterien 32 bis 34", bsi: "Hoher Schutzbedarf, nicht hinreichend abgedeckte Assets und dauerhaft nicht erfüllte SOLLTE-Anforderungen verlangen eine Risikobetrachtung.", app: "Die Anwendung weist auf hohen Schutzbedarf ohne Risikobetrachtung hin und macht aus dauerhaften SOLLTE-Lücken Risikokandidaten. Ob daraus ein Risiko wird, entscheiden die Verantwortlichen." },
        { title: "Restrisiken autorisieren", ref: "Mindestkriterien 8, 22 und 30", bsi: "Jedes Risiko wird mit den Akzeptanzkriterien abgeglichen; Restrisiken autorisiert die Leitung.", app: "Die Leitung legt für jede Zelle der Risikomatrix fest, ob ein Restrisiko vorab akzeptiert, einzeln entschieden oder abgelehnt wird. Die Freigabe der Matrix als Autorisierung zu werten, ist unsere Auslegung." },
        { title: "Ausnahmen befristen", ref: "Mindestkriterien 27 und 28", bsi: "Ein Risiko außerhalb der Akzeptanzkriterien, das nicht weiter behandelt wird, autorisiert die Leitung; temporäre Akzeptanz ist zu befristen.", app: "Eine Ausnahme braucht Begründung und kompensierende Maßnahmen und gilt höchstens ein Jahr. Bei einer nicht erfüllten MUSS-Anforderung lässt die Anwendung keine Ausnahme zu." },
      ] },
      { type: "pairs", h: "Standard, Katalog, OSCAL und Software.", lede: "Vier Dinge, die oft in einen Topf geworfen werden.", items: [
        { title: "BSI-Standard 300-1", ref: "Version 1.0", bsi: "Beschreibt Methodik, Prozessschritte, Entscheidungen und die Mindestkriterien der Risikobetrachtung. Er enthält keine Liste konkreter Sicherheitsanforderungen.", app: "Wir bilden daraus Abläufe, Zustände und Freigaben und nennen Kapitel oder Mindestkriterium dort, wo eine Entscheidung ansteht." },
        { title: "Anwenderkatalog", ref: "Stand-der-Technik-Bibliothek", bsi: "Enthält die Anforderungen, gegliedert in Praktiken der Kategorien Methodik, Technisch und Organisatorisch (Kapitel 3), mit Modalverb, Zielobjektkategorie, Parametern und Gefährdungen.", app: "Wir lesen den Katalog mit Version, Herkunft und Prüfsumme ein; ein neuer Stand wird bewusst übernommen, nach einem Vergleich der neuen, geänderten und entfallenen Anforderungen. Wie eine Anforderung aufgebaut ist, zeigt die Seite zum <a href=\"/grundschutz-plus-plus/anwenderkatalog/\">Anwenderkatalog</a>." },
        { title: "OSCAL", ref: "NIST", bsi: "Das offene Datenformat, in dem das BSI Katalog und Profile veröffentlicht. Es beschreibt auch Umsetzung und Prüfung.", app: "Blaupausen führen wir als OSCAL-Profile; ausgegeben werden unter anderem System Security Plan, Assessment Plan und Results sowie POA&amp;M. Mehr auf der Seite <a href=\"/grundschutz-plus-plus/oscal/\">OSCAL erklärt</a>." },
        { title: "Werkzeug", ref: "Anhang 2", bsi: "Die Form der Dokumentation ist frei wählbar: Tabelle, Prozessverzeichnis, Wiki oder ISMS-Werkzeug. Der Standard verlangt kein Produkt.", app: "BlueProceedings ISMS unterstützt die Vorbereitung und behauptet weder Konformität noch Zertifizierung. Worauf es bei der Auswahl ankommt, steht auf der Seite <a href=\"/grundschutz-plus-plus/software/\">Grundschutz++-Software</a>." },
      ] },
      { type: "gaps", h: "Weiterlesen nach Thema.", items: [
        { title: "Grundschutz++ im Überblick", text: "Was sich gegenüber dem IT-Grundschutz ändert und welche Begriffe überall vorkommen: <a href=\"/grundschutz-plus-plus/\">Überblick</a>." },
        { title: "Den ersten Durchlauf planen", text: "Zehn Schritte vom Auftrag der Leitung bis zur ersten Überwachung: <a href=\"/grundschutz-plus-plus/umsetzung/\">Grundschutz++ umsetzen</a>." },
        { title: "Prozessschritt 1 in der Anwendung", text: "Alle elf Teilschritte mit Bildern aus der Pre-Alpha: <a href=\"/funktionen/erhebung-und-planung/\">Erhebung und Planung</a>." },
        { title: "Risiken nach Anhang 3", text: "Vom Risikokandidaten bis zur Wiedervorlage: <a href=\"/funktionen/risikomanagement/\">Risikomanagement</a>." },
        { title: "Umstieg und Termine", text: "<a href=\"/grundschutz-plus-plus/it-grundschutz-migration/\">Vom IT-Grundschutz zu Grundschutz++</a> und der <a href=\"/grundschutz-plus-plus/zeitplan/\">Zeitplan</a> bis 2031." },
        { title: "NIS2", text: "Was das BSI-Gesetz verlangt und wie Grundschutz++ dazu steht: <a href=\"/isms-software/nis2/\">NIS2 und ISMS</a>." },
      ] },
      { type: "faq", h: "Häufige Fragen zum BSI-Standard 300-1.", items: [
        { q: "Was ist der BSI-Standard 300-1?", a: "Der BSI-Standard 300-1 „Methodik Grundschutz++“ beschreibt, wie eine Institution ein ISMS nach Grundschutz++ in fünf Prozessschritten aufbaut, betreibt und verbessert. Die konkreten Anforderungen stehen nicht im Standard, sondern im maschinenlesbaren Anwenderkatalog des BSI." },
        { q: "Seit wann gibt es den BSI-Standard 300-1?", a: "Version 1.0 trägt in der Änderungshistorie das Datum 20.10.2026 und wurde am 27.10.2026 auf der it-sa in Nürnberg vorgestellt. Sie richtet sich zunächst an Early Adopters." },
        { q: "Ist bei normalem Schutzbedarf eine eigene Risikobetrachtung nötig?", a: "Nein. Dem Anwenderkatalog liegt eine allgemeine Risikobetrachtung des BSI zugrunde. Eine explizite Risikobetrachtung ist bei hohem Schutzbedarf, bei nicht hinreichend abgedeckten Assets und bei dauerhaft nicht erfüllten SOLLTE-Anforderungen nötig (Kapitel 2.11, Anhang 3, Kriterien 32 bis 34)." },
        { q: "Was regeln die Mindestkriterien in Anhang 3?", a: "Sie legen 35 verbindliche Kriterien für Initiierung, Identifikation, Bewertung und Behandlung von Risiken fest, etwa Risikoappetit, Mindestangaben im Risikoregister, die Autorisierung von Restrisiken durch die Leitung und die mindestens jährliche Überprüfung. Das Verfahren selbst ist frei wählbar." },
        { q: "Was gilt, wenn eine MUSS-Anforderung nicht erfüllt ist?", a: "Dann sind Maßnahmen zu ihrer Erfüllung festzulegen. Eine Ausnahmegenehmigung oder Risikoakzeptanz ist nicht möglich, und eine Risikobetrachtung ersetzt die Erfüllung nicht (Kapitel 4.1.2)." },
        { q: "Braucht man für den BSI-Standard 300-1 eine Software?", a: "Nein. Der Standard lässt die Form der Dokumentation offen. Eine Software hilft vor allem beim Einlesen des Katalogs, bei der Vererbung über Zielobjektkategorien und dabei, Entscheidungen, Fristen und Nachweise zusammenzuhalten." },
        { q: "Kann man auf Basis des BSI-Standards 300-1 zertifiziert werden?", a: "Laut Meilensteinplan des BSI können ab dem 01.01.2027 Anträge auf eine ISO-27001-Zertifizierung auf Basis von Grundschutz++ gestellt werden. Ob eine Institution zertifiziert wird, entscheidet die zuständige Stelle." },
      ] },
    ],
    cta: { h: "Vom Standard in die Arbeit.", text: "Wie die Pre-Alpha Prozessschritt 1 umsetzt, zeigt die Seite <a href=\"/funktionen/erhebung-und-planung/\">Erhebung und Planung</a>. Den Ablauf für den ersten Durchlauf beschreibt <a href=\"/grundschutz-plus-plus/umsetzung/\">Grundschutz++ umsetzen</a>." },
    next: ["/grundschutz-plus-plus/umsetzung/", "/funktionen/erhebung-und-planung/", "/grundschutz-plus-plus/anwenderkatalog/"],
    sources: [standardQuelle, gsQuelle, bibliothekQuelle, [NIST_OSCAL, "NIST: OSCAL", "Datenformat für Kataloge, Profile, Umsetzung und Prüfung"]],
  },

  "/grundschutz-plus-plus/software/": {
    title: "Grundschutz++-Software: Worauf es ankommt",
    description: "Grundschutz++-Software auswählen: acht Kriterien aus dem BSI-Standard 300-1, Fragen an Anbieter und ehrlich, wo BlueProceedings ISMS steht und wo es Grenzen hat.",
    crumb: "Software",
    h1: "Worauf es bei Grundschutz++-Software ankommt.",
    lede: "Der BSI-Standard 300-1 schreibt kein Werkzeug vor; Geschäftsprozesse dürfen auch in einer Tabelle oder einem Wiki dokumentiert werden (Anhang 2). Eine Software lohnt sich erst, wenn sie die Methodik richtig abbildet und euch Arbeit abnimmt, die von Hand fehleranfällig ist: Katalogstände, Vererbung, Fristen, Freigaben. Diese Seite leitet Auswahlkriterien aus dem Standard ab und sagt bei jedem, wo BlueProceedings ISMS heute steht.",
    asOf: GEPRUEFT, mailTopic: "Grundschutz++ Software", topics: "grundschutz",
    reading: [["Kriterium", "was der BSI-Standard 300-1 verlangt und was eine Software deshalb können sollte"], ["Stand", "wie BlueProceedings ISMS das in der Pre-Alpha umsetzt und wo die Grenzen liegen"]],
    sections: [
      { type: "pairs", h: "Acht Kriterien aus dem Standard.", lede: "Links steht, was der BSI-Standard 300-1 verlangt, rechts, wie BlueProceedings ISMS damit umgeht.", items: [
        { title: "Katalog einlesen statt abtippen", ref: "Kapitel 3 und 5.5", bsi: "Die Anforderungen stehen im Anwenderkatalog der Stand-der-Technik-Bibliothek im OSCAL-Format. Ändert sich die Bibliothek oder eine Blaupause, sind die Anforderungen zu validieren.", app: "Kataloge werden mit Version, Herkunft und Prüfsumme eingelesen; ein Stand des Anwenderkatalogs liegt bei. Ein neuer Stand gilt erst nach einer bewussten Migration, vor der die Anwendung neue, geänderte und entfallene Anforderungen und Parameter zeigt." },
        { title: "Zielobjektkategorien und Vererbung", ref: "Kapitel 3.4.2", bsi: "Jedes Asset wird mindestens einer Zielobjektkategorie zugeordnet, die übergeordneten ebenfalls. Anforderungen, die mehrfach anfallen, zählen nur einmal.", app: "Die Vererbung rechnet die Anwendung. Die Zuordnung eines Assets treffen und begründen Menschen, und jede Anforderung zeigt, aus welchem Katalog sie kommt und für welches Objekt sie gilt." },
        { title: "Ein Anforderungspaket je Informationsverbund", ref: "Kapitel 3.3 bis 3.5", bsi: "Blaupausen werden mit Version dokumentiert, das Paket um Compliance- und Risikoanforderungen ergänzt, Parameter konkretisiert.", app: "Blaupausen sind versionierte OSCAL-Profile; ein Ausschluss braucht eine Begründung. Parameterwerte stehen mit ihrer Herkunft am Paket, offene Parameter bleiben sichtbar." },
        { title: "Modalverben durchsetzen", ref: "Kapitel 4.1.2", bsi: "Bei MUSS keine Ausnahme und keine Risikoakzeptanz; dauerhaft nicht erfüllte SOLLTE-Anforderungen verlangen eine Risikobetrachtung.", app: "Bei MUSS sperrt die Anwendung Ausnahme und Risikoakzeptanz. Vorübergehende Lücken verlangen Begründung und Frist, dauerhafte SOLLTE-Lücken werden zu Risikokandidaten." },
        { title: "Risikobetrachtung nach Anhang 3", ref: "Mindestkriterien 1 bis 35", bsi: "Das Verfahren ist frei, die Mindestkriterien sind verbindlich: unter anderem Risikoregister mit Mindestangaben, Risikoeigentümer, befristete Akzeptanz, Autorisierung der Restrisiken.", app: "Die Risikoakte verbindet Ursache, Schutzziele, Risikoeigentümer, Bewertung, Behandlung, Maßnahme und Restrisiko. Die Leitung setzt je Zelle der Risikomatrix eine Regel; Ausnahmen gelten höchstens ein Jahr." },
        { title: "Maßnahme, Nachweis und Historie", ref: "Kapitel 4.3 und 6.4", bsi: "Maßnahmen sind mit Anforderungen verknüpft, Nachweise eindeutig zugeordnet, eine Historie wird empfohlen. Die Wirksamkeit wird an messbaren Kriterien geprüft.", app: "Eine Maßnahme lässt sich erst abschließen mit geprüften Wirksamkeitskriterien, gültigem Nachweis und erforderlicher Freigabe. Änderungen werden in einem hashverketteten Protokoll festgehalten, das sich nur um neue Einträge ergänzen lässt." },
        { title: "Entscheidungen bei der Leitung", ref: "Kapitel 2.10 und 4.5", bsi: "Die Verantwortung der Leitung ist nicht delegierbar; zwischen Umsetzung und Fortschrittsverfolgung sind Interessenkonflikte zu vermeiden.", app: "Freigaben tragen Person, Rolle und Zeitpunkt. Im regulären Betrieb verlangt jede Freigabe eine zweite Person; der Kleinunternehmen-Modus lockert nur die personelle Trennung, nicht die fachlichen Bedingungen." },
        { title: "Überwachung mit Datenstand", ref: "Kapitel 5", bsi: "Leistungsbewertung, internes Auditprogramm, Managementbewertung und Validierung der Anforderungen.", app: "Auditprogramm, Managementbewertung und Kennzahlen sind abgebildet; Erwartungen von Prüfenden lassen sich importieren und Nachweise als Prüfpaket exportieren. Berichte zeigen, wenn sich ihre Grundlage seit der Ausgabe geändert hat." },
      ] },
      { type: "gaps", h: "Fragen, die ihr jedem Anbieter stellen solltet.", lede: "Auch an uns. Die Antworten zeigen schnell, ob ein Werkzeug Grundschutz++ abbildet oder IT-Grundschutz mit neuem Etikett.", items: [
        { title: "Welcher Katalogstand, und wie läuft ein Wechsel?", text: "Die Bibliothek bekommt neue Stände. Ein Werkzeug, das den Katalog still überschreibt, verliert die Grundlage bisheriger Bewertungen." },
        { title: "Gibt es Zielobjektkategorien und Blaupausen?", text: "Viele Werkzeuge kommen aus dem IT-Grundschutz mit Bausteinen. Fragt, ob das Anforderungspaket je Informationsverbund aus Zielobjektkategorien, Blaupausen und Ergänzungen entsteht." },
        { title: "Was entscheidet die Software selbst?", text: "Berechnungen und Vorschläge sind hilfreich. Zuordnung, Bewertung und Freigabe gehören Menschen und müssen mit Person und Zeitpunkt nachvollziehbar bleiben." },
        { title: "Wo liegen die Daten?", text: "Eigene Infrastruktur oder Cloud des Anbieters, Verschlüsselung, Export in einem offenen Format. Was passiert mit den Daten, wenn ihr das Werkzeug wechselt?" },
        { title: "Wer darf mitarbeiten?", text: "Sollen Fachbereiche ihre Prozesse und Systeme selbst pflegen, darf die Zahl der Konten kein Hindernis sein. Sonst landet doch wieder alles beim ISB." },
        { title: "Was ist fertig, was geplant?", text: "Grundschutz++ ist neu, und kein Werkzeug ist lange erprobt. Lasst euch zeigen, was heute läuft, und trennt es von Ankündigungen." },
      ] },
      { type: "gaps", h: "Wo BlueProceedings ISMS heute steht.", items: [
        { title: "Pre-Alpha", text: "Ab dem 11.11.2026 testen bis zu elf Personen aus der ISMS-Praxis die Anwendung. Die erste Version ist für Januar 2027 geplant." },
        { title: "Prozessschritt 1", text: "Jeder Teilschritt von 2.1 bis 2.11 hat seinen Platz in der Anwendung; eine Übersicht zeigt den Stand je Teilschritt. Die Einzelheiten stehen auf der Seite <a href=\"/funktionen/erhebung-und-planung/\">Erhebung und Planung</a>." },
        { title: "Betrieb", text: "Docker-Container auf eurer Infrastruktur, verschlüsselte Datenbank, keine Hersteller-Cloud. Die Zahl der Nutzenden ist nicht begrenzt. Mehr zu Betrieb und Rollen auf der Seite <a href=\"/isms-software/bsi-grundschutz/\">ISMS-Software für BSI und NIS2</a>." },
        { title: "Grenzen", text: "Betrieb, Sicherung und Updates liegen bei euch. E-Mail-Benachrichtigungen kommen später. Die Leistungskennzahlen, die das BSI bis März 2027 ergänzen will, sind noch nicht abgebildet. Eine Konformitäts- oder Zertifizierungsaussage trifft die Anwendung nicht." },
      ] },
      { type: "feature", h: "Veraltet statt falsch-grün.", paragraphs: ["Ein Sicherheitskonzept hält einen Stand fest. Ändern sich danach seine Grundlagen, zeigt die Anwendung, welche Bereiche betroffen sind und wann sie geändert wurden.", "Das Beispiel zeigt einen Informationsverbund mit Demodaten. Die Verantwortlichen prüfen, was neu bewertet und berichtet werden muss."], image: "staleReport" },
      { type: "faq", h: "Fragen zur Auswahl.", items: [
        { q: "Braucht man für Grundschutz++ eine Software?", a: "Nicht zwingend. Der BSI-Standard 300-1 lässt die Form der Dokumentation offen. Mit wachsender Zahl von Assets, Katalogständen und Freigaben wird die Pflege von Hand aber fehleranfällig, besonders die Vererbung über Zielobjektkategorien." },
        { q: "Was unterscheidet Grundschutz++-Software von einem IT-Grundschutz-Tool?", a: "Grundschutz++ leitet Anforderungen über Geschäftsprozesse, Assets und Zielobjektkategorien aus einem OSCAL-Katalog ab, nicht über Bausteine. Eine passende Software bildet Anforderungspaket, Blaupausen, Parameter und Katalogstände ab." },
        { q: "Kann eine Software Grundschutz++ automatisch erfüllen?", a: "Nein. Sie kann Anforderungen ableiten, Fristen überwachen und Zusammenhänge zeigen. Umsetzung, Bewertung, Wirksamkeitsprüfung und Leitungsentscheidungen bleiben Aufgaben der Institution." },
        { q: "Läuft BlueProceedings ISMS in der Cloud?", a: "Nein. Die Anwendung läuft als Docker-Container auf eurer eigenen Infrastruktur; es gibt keine Hersteller-Cloud, und BlueProceedings hat keinen Zugriff auf eure Daten." },
      ] },
      { type: "note", h: "Vorbereitung unterstützen, nicht Zertifizierung versprechen.", text: "Die Anwendung hält Arbeit und Entscheidungen nachvollziehbar zusammen. Umsetzung, fachliche Beurteilung und die Entscheidung einer prüfenden Stelle ersetzt sie nicht. BlueProceedings ISMS ist derzeit Pre-Alpha; die erste Version ist für Januar 2027 geplant." },
    ],
    cta: { h: "Prüft uns an diesen Kriterien.", text: "Die Startseite zeigt anhand von Demodaten, wie die Pre-Alpha aussieht. Was fehlt oder anders sein sollte, hören wir gern." },
    next: ["/bsi-standard-300-1/", "/isms-software/bsi-grundschutz/", "/funktionen/"],
    sources: [standardQuelle, gsQuelle, [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Maschinenlesbare Grundschutz++-Artefakte und Mappings"]],
  },

  "/grundschutz-plus-plus/umsetzung/": {
    title: "Grundschutz++ umsetzen: Schritt für Schritt",
    description: "Grundschutz++ umsetzen: der erste Durchlauf in zehn Schritten nach BSI-Standard 300-1, mit Kapiteln, Entscheidungen der Leitung und typischen Stolpersteinen.",
    crumb: "Umsetzung",
    h1: "Grundschutz++ umsetzen: der erste Durchlauf, Schritt für Schritt.",
    lede: "Der häufigste Fehler beim Einstieg ist, alles auf einmal erfassen zu wollen. Der BSI-Standard 300-1 empfiehlt das Gegenteil: mit dem wichtigsten Geschäftsprozess der höchsten Schutzbedarfskategorie beginnen und die übrigen schrittweise folgen lassen (Kapitel 2.6). Diese Seite beschreibt einen ersten Durchlauf in zehn Schritten, mit den Kapiteln, auf die sich jeder stützt.",
    asOf: GEPRUEFT, mailTopic: "Grundschutz++ Umsetzung", topics: "grundschutz",
    sections: [
      { type: "steps", h: "Der erste Durchlauf in zehn Schritten.", lede: "Unser Vorschlag für die Reihenfolge. Die Kapitelangaben beziehen sich auf den <a href=\"/bsi-standard-300-1/\">BSI-Standard 300-1</a>.", items: [
        { title: "Auftrag der Leitung", text: "Die Verantwortung für das ISMS liegt bei der Leitung und ist nicht delegierbar. Ohne ihren Auftrag und Ressourcen beginnt kein Durchlauf (Kapitel 2.10)." },
        { title: "Kontext und Compliance", text: "Einflussfaktoren knapp festhalten, gesetzliche und vertragliche Verpflichtungen zusammenstellen, Compliance-Stellen anhören (Kapitel 2.1, 2.2)." },
        { title: "Anwendungsbereich und Stakeholder", text: "Abgrenzen, wofür das ISMS gilt, und die Erwartungen interessierter Parteien mit Priorität dokumentieren (Kapitel 2.3, 2.4)." },
        { title: "Prozesse und Schutzbedarf", text: "Geschäftsprozesse identifizieren, Schutzbedarf normal oder hoch festlegen und den ersten Prozess wählen (Kapitel 2.5, 2.6)." },
        { title: "Leitlinie, Rollen, Dokumente", text: "Leitlinie freigeben und kommunizieren, Rollen ohne Interessenkonflikte besetzen, Dokumentenlenkung einrichten (Kapitel 2.7 bis 2.9)." },
        { title: "Risikorahmen autorisieren", text: "Risikoappetit, Akzeptanzkriterien, Verfahren und Rollen festlegen und von der Leitung autorisieren lassen (Kapitel 2.11, Anhang 3, Kriterien 1 bis 10)." },
        { title: "Informationsverbund und Assets", text: "Für den gewählten Prozess Assets und Abhängigkeiten erfassen, Schnittstellen und Auslagerungen dokumentieren (Kapitel 3.1, 3.2)." },
        { title: "Anforderungspaket bilden", text: "Blaupausen wählen, Zielobjektkategorien zuordnen, Ergänzungen aufnehmen, Parameter konkretisieren (Kapitel 3.3 bis 3.5)." },
        { title: "Umsetzen und planen", text: "Umsetzungsstatus je Anforderung erheben, Lücken nach Modalverb bewerten, Risiken betrachten, Maßnahmen mit Zuständigkeit und Frist planen (Kapitel 4)." },
        { title: "Überwachen und verbessern", text: "Fortschritt verfolgen, interne Audits und Managementbewertung vorbereiten, Wirksamkeit prüfen, nächsten Prozess beginnen (Kapitel 5, 6)." },
      ] },
      { type: "gaps", anchor: "prozessschritt-1", h: "Prozessschritt 1 im Detail.", lede: "Die <a href=\"/funktionen/erhebung-und-planung/\">Funktionsseite zur Erhebung und Planung</a> zeigt die elf Teilschritte in der Anwendung. Diese Ergebnisse sollten am Ende von Prozessschritt 1 vorliegen.", items: [
        { title: "Rahmen", text: "Eine knappe Notiz zu internen und externen Einflussfaktoren und ein Verzeichnis der Compliance-Verpflichtungen mit Quelle (Kapitel 2.1, 2.2)." },
        { title: "Anwendungsbereich", text: "Ein von der Leitung festgelegter Anwendungsbereich mit Prozessen, Einheiten, Standorten, Anwendungen, IT-Systemen und berücksichtigten Dienstleistern, Ausschlüsse benannt (Kapitel 2.3)." },
        { title: "Stakeholder", text: "Interne und externe interessierte Parteien mit Erwartungen und Priorität, dazu die Entscheidung, welche als verbindliche Anforderungen ins ISMS eingehen (Kapitel 2.4)." },
        { title: "Prozesse und Schutzbedarf", text: "Eine Liste der Geschäftsprozesse mit Zweck, Schutzbedarf je Grundwert und der freigegebenen Reihenfolge der Bearbeitung (Kapitel 2.5, 2.6, 2.10)." },
        { title: "Organisation", text: "Eine freigegebene und kommunizierte Leitlinie, besetzte Rollen und Verfahren für Kommunikation und Dokumentenlenkung (Kapitel 2.7 bis 2.9)." },
        { title: "Risikorahmen", text: "Ein autorisierter Rahmen aus Risikoappetit, Akzeptanzkriterien, Verfahren, Kriterien und Rollen (Kapitel 2.11)." },
      ] },
      { type: "diagram", kind: "gruppen", h: "Wer was entscheidet.", label: "Nach BSI-Standard 300-1", lede: "Ein ISMS scheitert selten an der Methodik, öfter an unklaren Zuständigkeiten. So verteilt der Standard die wichtigsten Entscheidungen.", groups: [
        { title: "Institutionsleitung", items: [
          { text: "Anwendungsbereich, Schutzbedarf, Reihenfolge der Prozesse, Ressourcen, Leitlinie (2.10)" },
          { text: "Rahmen der Risikobetrachtung autorisieren (2.11, Kriterium 9)" },
          { text: "Restrisiken und Ausnahmen autorisieren (Kriterien 27, 30)" },
          { text: "Zuständigkeiten und Fristen freigeben (4.4), Managementbewertung (5.3)" },
        ] },
        { title: "Sicherheitsorganisation", items: [
          { text: "Rollen mit Qualifikation, ohne Interessenkonflikte (2.8)" },
          { text: "ISB wird in sicherheitsrelevante Projekte eingebunden (2.8)" },
          { text: "Fortschritt verfolgen, getrennt von der Umsetzung (4.5)" },
        ] },
        { title: "Prozess- und Risikoeigentümer", items: [
          { text: "Geschäftsprozesseigentümer ist Risikoeigentümer, sofern nichts anderes festgelegt ist (4.2.1)" },
          { text: "Umsetzungsplanung für Risikomaßnahmen autorisieren (Kriterium 31)" },
        ] },
        { title: "Prüfende", items: [
          { text: "Internes Audit mit unparteiischem Auditteam (5.2.2)" },
          { text: "Wirksamkeit nach Abschluss der Umsetzung prüfen (6.4)" },
        ] },
      ] },
      { type: "gaps", h: "Typische Stolpersteine.", items: [
        { title: "Zu fein modellieren", text: "Anhang 2 warnt vor einer zu feinen Aufgliederung der Geschäftsprozesse. Einzelne Tätigkeiten sind keine Prozesse; die Beschreibung soll so einfach wie möglich und so genau wie nötig sein." },
        { title: "Methodik-Anforderungen vergessen", text: "Neben den Anforderungen für Assets gelten die Methodik-Anforderungen für jeden Informationsverbund verpflichtend (Kapitel 3.4.1). Sie decken die Managementsystem-Seite ab." },
        { title: "Entscheidungen nachtragen", text: "Rollen, Begründungen und Freigaben schon im ersten Durchlauf mitführen. Späteres Nachtragen kostet mehr und verliert den Zusammenhang." },
        { title: "Nachweise sammeln statt prüfen", text: "Für jeden Nachweis Bezug, Gültigkeit und Prüfstatus festhalten. Eine Datei allein zeigt noch keine wirksame Umsetzung." },
        { title: "SOLLTE-Lücken als erledigt ansehen", text: "Eine temporäre Lücke braucht eine stichhaltige Begründung, eine dauerhafte eine Risikobetrachtung (Kapitel 4.1.2). Bei MUSS hilft beides nicht." },
        { title: "Den nächsten Zyklus vergessen", text: "Die Risikobetrachtung ist mindestens jährlich und bei wesentlichen Änderungen zu überprüfen (Anhang 3, Kriterium 35). Ein ISMS wird mit der ersten Freigabe nicht fertig." },
      ] },
      { type: "pairs", h: "Was ein Werkzeug dabei abnehmen kann.", items: [
        { title: "Reihenfolge", ref: "Kapitel 2 bis 4", bsi: "Der Standard beschreibt die Schritte, nicht, wann ihr wo weitermacht.", app: "Ein Einrichtungsassistent leitet aus dem erfassten Bestand den nächsten sinnvollen Schritt ab; der Lern-Modus erklärt Abläufe in einer getrennten Übungsumgebung." },
        { title: "Überblick über Prozessschritt 1", ref: "Kapitel 2.1 bis 2.11", bsi: "Elf Teilschritte mit Ergebnissen und Freigaben der Leitung.", app: "Eine Übersicht zeigt je Teilschritt den Stand und führt zur Stelle, an der weitergearbeitet wird. Eine Leitungsmappe zeigt je Thema, was freigegeben ist, wann und von welcher Rolle." },
        { title: "Vererbung und Paket", ref: "Kapitel 3.4", bsi: "Anforderungen ergeben sich aus der Zuordnung von Assets zu Zielobjektkategorien.", app: "Die Anwendung rechnet die Vererbung und hält Herkunft und Parameter jeder Anforderung fest. Die Zuordnung bleibt eine begründete Entscheidung." },
      ] },
      { type: "faq", h: "Fragen zur Einführung.", items: [
        { q: "Wie beginnt man mit Grundschutz++?", a: "Mit dem Auftrag der Leitung, dem Kontext, dem Anwendungsbereich und einem priorisierten Geschäftsprozess. Der BSI-Standard 300-1 empfiehlt, mit dem wichtigsten Prozess der höchsten Schutzbedarfskategorie zu beginnen." },
        { q: "Muss die ganze Institution sofort erfasst werden?", a: "Nein. Der Anwendungsbereich kann die ganze Institution oder einen Teil umfassen, und die Geschäftsprozesse werden nacheinander bearbeitet. Sukzessive sind aber alle Prozesse im Anwendungsbereich zu untersuchen." },
        { q: "Welche Entscheidungen trifft die Leitung?", a: "Mindestens Anwendungsbereich, Schutzbedarf, Reihenfolge der Prozesse, Ressourcen und Leitlinie (Kapitel 2.10), dazu den Rahmen der Risikobetrachtung und die Restrisiken (Anhang 3)." },
        { q: "Was kann eine Software bei der Umsetzung abnehmen?", a: "Sie kann Kataloge einlesen, Anforderungen ableiten, Vererbung rechnen, Fristen überwachen und Zusammenhänge anzeigen. Bewertung, Umsetzung, Wirksamkeitsprüfung und Leitungsentscheidungen bleiben fachliche Aufgaben." },
      ] },
    ],
    cta: { h: "Den ersten Durchlauf überschaubar halten.", text: "Der Einrichtungsassistent und der Lern-Modus führen durch die Reihenfolge, ohne fachliche Entscheidungen vorwegzunehmen." },
    next: ["/bsi-standard-300-1/", "/funktionen/erhebung-und-planung/", "/grundschutz-plus-plus/it-grundschutz-migration/"],
    sources: [standardQuelle, gsQuelle],
  },

  "/isms-software/bsi-grundschutz/": {
    title: "ISMS-Software für BSI und NIS2, On-Premises",
    description: "ISMS-Software für Grundschutz++ nach BSI-Standard 300-1: als Docker-Container auf eigener Infrastruktur, ohne Nutzerbegrenzung, mit Rollen über alle Fachbereiche.",
    crumb: "ISMS-Software BSI",
    h1: "ISMS-Software für BSI-Grundschutz++ und NIS2, auf eurer eigenen Infrastruktur.",
    lede: "Ihr sucht eine ISMS-Software, die nach den Vorgaben des BSI arbeitet, NIS2 nicht aus dem Blick verliert und eure Daten im Haus lässt. BlueProceedings ISMS setzt die Methodik Grundschutz++ (BSI-Standard 300-1) um, läuft als Docker-Container On-Premises und begrenzt die Zahl der Nutzenden nicht, damit Fachbereiche selbst mitarbeiten können.",
    asOf: GEPRUEFT, mailTopic: "ISMS Software BSI",
    reading: [["Zielgruppe und Betrieb", "für wen die Anwendung gedacht ist und wie sie betrieben wird"], ["Produktstand", "was heute in der Pre-Alpha vorhanden ist und wo ihre Grenzen liegen"]],
    sections: [
      { type: "gaps", h: "Für wen BlueProceedings ISMS gedacht ist.", items: [
        { title: "Institutionen, die Grundschutz++ einführen", text: "Behörden, Kommunen und Unternehmen, die nach dem <a href=\"/bsi-standard-300-1/\">BSI-Standard 300-1</a> arbeiten oder vom IT-Grundschutz umsteigen wollen. Version 1.0 des Standards richtet sich an Early Adopters, die Pre-Alpha ebenso." },
        { title: "NIS2-regulierte Einrichtungen", text: "Wer Risikomanagementmaßnahmen nach § 30 BSIG umsetzen und dokumentieren muss, kann sich an Grundschutz++ orientieren; das BSI nennt es als Beispiel eines anerkannten Standards. Was die Anwendung dazu beiträgt, steht auf der Seite <a href=\"/isms-software/nis2/\">NIS2 und ISMS</a>." },
        { title: "Viele Fachbereiche, ein ISB", text: "Wenn Prozesse, Systeme und Dienstleister über viele Abteilungen verteilt sind und der ISB nicht jede Angabe selbst erheben soll." },
        { title: "Noch nicht passend, wenn …", text: "ihr eine gehostete Lösung ohne eigenen Betrieb sucht oder heute ein produktiv freigegebenes Werkzeug braucht. BlueProceedings ISMS ist Pre-Alpha; die erste Version ist für Januar 2027 geplant." },
      ] },
      { type: "gaps", h: "Betrieb On-Premises.", items: [
        { title: "Ein Docker-Container", text: "Die Anwendung läuft als ein Container auf eurer Infrastruktur, mit einem Volume für die verschlüsselte Datenbank." },
        { title: "Keine Hersteller-Cloud", text: "Für den Betrieb auf eurer Infrastruktur ist keine Hersteller-Cloud erforderlich. Die Anwendung übermittelt im Standardbetrieb keine Produktdaten an BlueProceedings. Zugänge, Netzwerkfreigaben und Datensicherungen verwaltet ihr selbst; berechtigte Personen können Daten exportieren." },
        { title: "Katalog im Haus", text: "Ein Stand des Anwenderkatalogs Grundschutz++ liegt bei; neue Stände und weitere OSCAL-Kataloge werden als Datei eingelesen und mit Prüfsumme geführt." },
        { title: "Nachvollziehbar", text: "Änderungen werden in einem hashverketteten Protokoll festgehalten, das sich nur um neue Einträge ergänzen lässt." },
        { title: "Offene Formate", text: "Ergebnisse lassen sich im OSCAL-Format exportieren, unter anderem System Security Plan, Assessment Plan und Results sowie POA&amp;M, dazu Berichte als HTML und PDF." },
      ] },
      { type: "gaps", h: "Rollen über Fachbereiche hinweg.", items: [
        { title: "Nutzende ohne Begrenzung", text: "Die Zahl der Nutzenden ist nicht begrenzt. Jede Fachabteilung kann ihre Prozesse, Komponenten und Nachweise selbst pflegen." },
        { title: "Rollen mit Bezug", text: "Eine Rolle gilt für die ganze Institution oder nur für einen Informationsverbund, einen Prozess, eine Komponente, ein Risiko oder ein Audit. Eigene Rollen lassen sich anlegen." },
        { title: "Mindestbesetzung", text: "Leitung, ISB, Asset-Owner, Risikoeigentümer, Nachweisprüfer, Auditor und HR gehören zur Mindestbesetzung, deren Besetzung die Anwendung schützt." },
        { title: "RACI und Vertretung", text: "Eine RACI-Matrix für die Institution und je Informationsverbund zeigt Zuständigkeiten; der Vertretungsplan weist auf unbesetzte Rollen hin." },
        { title: "Vier Augen", text: "Freigaben verlangen im regulären Betrieb eine zweite Person. Der Kleinunternehmen-Modus lockert nur die personelle Trennung, nicht die fachlichen Bedingungen." },
      ] },
      { type: "gaps", h: "Wer damit arbeitet.", items: [
        { title: "Informationssicherheit", text: "Der ISB behält offene Arbeit, Risiken, Fristen und den Stand der Informationsverbünde im Blick." },
        { title: "Fachbereiche und IT", text: "Verantwortliche pflegen ihre Prozesse und Objekte, bearbeiten Aufgaben und liefern Nachweise." },
        { title: "Institutionsleitung", text: "Die Leitung entscheidet über den Rahmen und erhält die Vorgänge, für die ihre Freigabe gebraucht wird." },
        { title: "Prüfende", text: "Erwartungen lassen sich importieren und Nachweise als Prüfpaket übergeben; ein Gastkonto ist nicht nötig." },
      ] },
      { type: "feature", h: "Fachbereiche arbeiten gleichzeitig.", paragraphs: ["Der ISB muss nicht jede Angabe in aufeinanderfolgenden Terminen selbst aufnehmen. Fachbereiche erfassen ihre Prozesse und Objekte, während der ISB den Stand bündelt und die Leitung die vorgesehenen Entscheidungen trifft.", "Die Darstellung vergleicht zwei mögliche Abläufe. Sie ist schematisch und keine Zeitmessung: Fachbereiche übernehmen eigene Arbeit, Rückmeldungen und Freigaben bleiben nachvollziehbar."], image: "parallelWork" },
      { type: "gaps", h: "Was das für die tägliche Arbeit bedeutet.", items: [
        { title: "Die Leitung setzt den Rahmen", text: "Kontext, Anwendungsbereich, Leitlinie und Risikomethodik bilden die Grundlage. Freigaben und ihre Begründungen bleiben nachvollziehbar (BSI-Standard 300-1, Kapitel 2)." },
        { title: "Mit dem wichtigen Prozess beginnen", text: "Prozesse und ihre Assets werden schrittweise erfasst. Aus dem Katalog entsteht ein auf den Informationsverbund bezogenes Anforderungspaket (Kapitel 3)." },
        { title: "Lücken unterschiedlich behandeln", text: "MUSS- und SOLLTE-Anforderungen folgen unterschiedlichen Wegen. Dauerhaft nicht erfüllte SOLLTE-Anforderungen führen in die Risikobetrachtung (Kapitel 4.1.2)." },
        { title: "Überwachung und Verbesserung", text: "Nachweise, Audits, Managementbewertung und Wirksamkeitsprüfungen begleiten das ISMS über die erste Umsetzung hinaus (Kapitel 5 und 6)." },
        { title: "Aufgaben und Freigaben", text: "Zuständigkeiten, Fristen und Rückmeldungen stehen am Vorgang. Die erforderliche Prüfung und Freigabe bleiben Teil des Ablaufs." },
      ] },
      { type: "gaps", h: "Wiederverwenden, statt erneut anzufangen.", items: [
        { title: "Kataloge und Blaupausen", text: "OSCAL-Kataloge liefern strukturierte Anforderungen. Eine Blaupause hält Auswahl, Ergänzungen, Ausschlüsse und Parameter für einen Kontext zusammen und kann für weitere Informationsverbünde genutzt werden." },
        { title: "Informationsverbundvorlagen", text: "Wiederkehrende Strukturen und Komponentenrollen als Ausgangspunkt nutzen, lokal zuordnen und an den eigenen Informationsverbund anpassen." },
        { title: "Komponenten und Komponentensätze", text: "Eine einzelne virtuelle Maschine oder einen ganzen wiederkehrenden Stack aus Vorlagen anlegen. Die erzeugten Komponenten bleiben eigenständig; spätere Vorlagenänderungen überschreiben sie nicht." },
        { title: "Vererbung und gemeinsame Daten", text: "Schutzbedarf und Anforderungen werden entlang der erfassten Beziehungen abgeleitet. Prozesse, Komponenten und Verantwortlichkeiten dienen zugleich Risiken, Notfallvorsorge und Berichten." },
      ] },
      { type: "feature", h: "Vorlagen für den eigenen Bestand.", paragraphs: ["Eine Virtualisierungsumgebung besteht oft aus denselben Arten von Komponenten. Eine Komponentensatz-Vorlage hält den wiederkehrenden Aufbau zusammen; Komponentenvorlagen helfen bei einzelnen Systemen.", "Im Beispiel entstehen aus einem vorbereiteten Stack neue Komponenten. Namen, Standort und die tatsächliche Umsetzung prüft ihr für euren eigenen Bestand."], image: ["componentSetTemplate", "componentTemplates", "informationDomainTemplates"], imageLabels: ["Komponentensatz", "Komponenten", "Informationsverbünde"] },
      { type: "faq", h: "Fragen zu Betrieb und Einsatz.", items: [
        { q: "Wo läuft BlueProceedings ISMS?", a: "Als Docker-Container auf eurer eigenen Infrastruktur. Die Datenbank ist verschlüsselt, und es gibt keine Hersteller-Cloud." },
        { q: "Wie viele Personen können mitarbeiten?", a: "Die Zahl der Nutzenden ist nicht begrenzt. Rollen lassen sich für die Institution oder für einzelne Informationsverbünde, Prozesse, Komponenten, Risiken oder Audits vergeben." },
        { q: "Unterstützt die Anwendung NIS2?", a: "Sie unterstützt die Vorbereitung und Dokumentation vieler Risikomanagementmaßnahmen nach § 30 BSIG, etwa Risikoanalyse, Vorfallbehandlung, Notfallvorsorge und Lieferkette. Sie trifft keine Konformitätsaussage; Einzelheiten stehen auf der NIS2-Seite." },
        { q: "Ab wann ist die Anwendung verfügbar?", a: "Die Pre-Alpha wird ab dem 11.11.2026 von bis zu elf Personen aus der ISMS-Praxis getestet. Die erste Version ist für Januar 2027 geplant." },
      ] },
      { type: "note", h: "Grundschutz++ statt automatischer Zertifizierung.", text: "BlueProceedings ISMS unterstützt die Vorbereitung auf Grundlage von Grundschutz++. Ein Werkzeug ersetzt weder die Umsetzung in der Institution noch die Beurteilung einer prüfenden Stelle. Veröffentlichte Mappings zum IT-Grundschutz dienen beim Umstieg als Orientierung, nicht als automatische Übernahme einer Erfüllung." },
    ],
    cta: { h: "Ein Datenstand für Sicherheit, Risiko und Kontinuität.", text: "Die Funktionsübersicht zeigt, welche Arbeitsabläufe die Pre-Alpha bereits verbindet." },
    next: ["/isms-software/nis2/", "/grundschutz-plus-plus/software/", "/funktionen/"],
    sources: [standardQuelle, gsQuelle, [BSI_NIS2_RISIKO, "BSI: #nis2know – Risikomanagementmaßnahmen", "Grundschutz++ und ISO 27001 als Beispiele anerkannter Standards"]],
  },

  "/isms-software/nis2/": {
    modified: "2026-11-01",
    title: "NIS2 und ISMS: Anforderungen und Software",
    description: "NIS2 im ISMS: was §§ 30 bis 38 BSIG von Einrichtungen erwarten, wie Grundschutz++ dazu steht und was BlueProceedings ISMS unterstützt und was nicht.",
    crumb: "NIS2",
    crumbs: [["/", "Startseite"], ["/isms-software/bsi-grundschutz/", "ISMS-Software"], ["/isms-software/nis2/", "NIS2"]],
    h1: "NIS2 und ISMS: was das Gesetz erwartet und wo Software hilft.",
    lede: "Seit dem 6. Dezember 2025 gilt in Deutschland das NIS-2-Umsetzungsgesetz; laut BSI betrifft es rund 29.500 Unternehmen und die Bundesverwaltung. Die Kernvorgaben stehen im neu gefassten BSI-Gesetz (BSIG): Risikomanagementmaßnahmen, Meldungen, Registrierung und die Verantwortung der Geschäftsleitung. Diese Seite ordnet ein, was davon ein ISMS leisten kann, wie Grundschutz++ dazu steht und was BlueProceedings ISMS unterstützt. Sie ist keine Rechtsberatung.",
    asOf: GEPRUEFT, mailTopic: "NIS2 ISMS",
    reading: [["Gesetz und BSI", "was das BSIG und das BSI sagen, mit Paragraf und Quelle"], ["Auslegung", "was BlueProceedings ISMS dazu in der Pre-Alpha bietet und was nicht"]],
    sections: [
      {"type": "text", "anchor": "nis2-im-alltag", "h": "NIS2 im Arbeitsalltag des ISMS.", "paragraphs": ["Risikomanagement, Lieferkette und Betriebsfortführung greifen ineinander. Die Anwendung verbindet <a href=\"/funktionen/risikomanagement/\">Risiken und Maßnahmen</a> mit <a href=\"/funktionen/dienstleistersteuerung/\">Dienstleistern und ihren Nachweisen</a>. Das <a href=\"/funktionen/bcm-notfallmanagement/\">BCM und Notfallmanagement</a> nutzt dieselben Geschäftsprozesse und Abhängigkeiten.", "So unterstützt Software die Dokumentation und Vorbereitung. Ob eure Einrichtung betroffen ist, welche gesetzlichen Maßnahmen erforderlich sind und ob eine Meldung abzugeben ist, müsst ihr gesondert prüfen. Die Anwendung trifft keine Betroffenheitsentscheidung und gibt keine NIS2-Konformitätsaussage ab."]},
      { type: "gaps", h: "Was das BSIG von Einrichtungen erwartet.", lede: "Die Vorgaben gelten für besonders wichtige und wichtige Einrichtungen. Ob eure Institution dazugehört, ist vorab zu klären; das BSI bietet dafür eine freiwillige Betroffenheitsprüfung an.", items: [
        { title: "Risikomanagementmaßnahmen (§ 30)", text: "Geeignete, verhältnismäßige und wirksame technische und organisatorische Maßnahmen, die Störungen von Verfügbarkeit, Integrität und Vertraulichkeit vermeiden und Folgen von Vorfällen gering halten. Absatz 2 nennt mindestens zehn Bereiche. Die Umsetzung ist zu dokumentieren." },
        { title: "Meldungen (§ 32)", text: "Erhebliche Sicherheitsvorfälle gehen an die gemeinsame Meldestelle von BSI und BBK: Frühwarnung spätestens nach 24 Stunden, Meldung spätestens nach 72 Stunden, Abschlussmeldung spätestens einen Monat danach." },
        { title: "Registrierung (§ 33)", text: "Spätestens drei Monate, nachdem eine Einrichtung erstmals oder erneut als besonders wichtig oder wichtig gilt, registriert sie sich über die Registrierungsmöglichkeit von BSI und BBK." },
        { title: "Geschäftsleitung (§ 38)", text: "Sie setzt die Maßnahmen nach § 30 um, überwacht sie und haftet bei schuldhafter Verletzung nach dem jeweiligen Gesellschaftsrecht. Sie nimmt regelmäßig an Schulungen teil." },
        { title: "Nachweisfähigkeit", text: "Laut BSI müssen Einrichtungen die Umsetzung angemessen dokumentieren und dem BSI auf Anforderung Nachweisdokumente vorlegen können." },
      ] },
      { type: "diagram", kind: "fluss", h: "Meldefristen bei einem erheblichen Sicherheitsvorfall.", label: "Nach § 32 BSIG", items: [
        { title: "Kenntnis", text: "Die Einrichtung erfährt von einem erheblichen Sicherheitsvorfall." },
        { title: "Frühwarnung", ref: "spätestens 24 Stunden", text: "Verdacht auf rechtswidrige oder böswillige Handlung, mögliche grenzüberschreitende Auswirkungen" },
        { title: "Meldung", ref: "spätestens 72 Stunden", text: "Bestätigt oder aktualisiert die Frühwarnung, erste Bewertung von Schwere und Auswirkungen" },
        { title: "Zwischenmeldung", ref: "auf Ersuchen des BSI", text: "relevante Statusaktualisierungen" },
        { title: "Abschlussmeldung", ref: "spätestens 1 Monat nach der Meldung", text: "Ursache, Abhilfemaßnahmen; dauert der Vorfall an, zunächst eine Fortschrittsmeldung" },
      ] },
      { type: "pairs", h: "Die zehn Bereiche aus § 30 Abs. 2 BSIG.", lede: "Links der Bereich, wie ihn das Gesetz nennt, rechts, was BlueProceedings ISMS dazu beiträgt. Wo die Anwendung nicht hilft, sagen wir das.", items: [
        { title: "Risikoanalyse und Sicherheitskonzepte", ref: "§ 30 Abs. 2 Nr. 1", bsi: "Konzepte in Bezug auf die Risikoanalyse und auf die Sicherheit in der Informationstechnik.", app: "Risikobetrachtung nach den Mindestkriterien des BSI-Standards 300-1 mit Risikoakte und Risikomatrix; ein Sicherheitskonzept je Informationsverbund, das anzeigt, wenn sich seine Grundlage geändert hat." },
        { title: "Bewältigung von Sicherheitsvorfällen", ref: "§ 30 Abs. 2 Nr. 2", bsi: "Verfahren für den Umgang mit Sicherheitsvorfällen.", app: "Ein Sicherheitsfall ist eine Akte mit Klassifikation, Behandlung, Zeitlinie, Nachbesprechung und Folgearbeit. Meldeentscheidungen gegenüber Behörde oder Aufsicht werden mit Begründung, Rechtsgrundlage und Frist dokumentiert. Die Frist erfasst ihr selbst; fest eingebaute NIS2-Fristen und eine Übermittlung an die Meldestelle gibt es nicht." },
        { title: "Aufrechterhaltung des Betriebs", ref: "§ 30 Abs. 2 Nr. 3", bsi: "Backup-Management, Wiederherstellung nach einem Notfall und Krisenmanagement.", app: "Business-Impact-Analyse, Wiederanlaufzeiten und Abhängigkeiten, Wiederanlaufplanung mit begrenzten Mitteln, Krisenläufe mit Plan und Ist sowie Übungen. Die Datensicherung selbst setzt ihr in euren Systemen um." },
        { title: "Sicherheit der Lieferkette", ref: "§ 30 Abs. 2 Nr. 4", bsi: "Sicherheitsaspekte der Beziehungen zu unmittelbaren Anbietern und Diensteanbietern.", app: "Dienstleisterregister mit Übersicht, Unterauftragnehmer-Ketten bis 15 Stufen, Risikoerklärungen von Dienstleistern als JSON, CSV oder OSCAL und ein Angebotsvergleich, der unter anderem Meldefrist und Auditrecht gegenüberstellt." },
        { title: "Erwerb, Entwicklung, Wartung", ref: "§ 30 Abs. 2 Nr. 5", bsi: "Sicherheit bei Erwerb, Entwicklung und Wartung von IT-Systemen, einschließlich Umgang mit und Offenlegung von Schwachstellen.", app: "Die zugehörigen Anforderungen des Katalogs stehen an den betroffenen Objekten. Eine eigene Verwaltung von Schwachstellen hat die Pre-Alpha nicht." },
        { title: "Wirksamkeit bewerten", ref: "§ 30 Abs. 2 Nr. 6", bsi: "Konzepte und Verfahren zur Bewertung der Wirksamkeit von Risikomanagementmaßnahmen.", app: "Maßnahmen schließen erst nach geprüften Wirksamkeitskriterien, gültigem Nachweis und Freigabe. Dazu kommen Kennzahlen, Auditprogramm und Managementbewertung." },
        { title: "Schulungen und Cyberhygiene", ref: "§ 30 Abs. 2 Nr. 7", bsi: "Grundlegende Schulungen und Sensibilisierung im Bereich der Sicherheit in der Informationstechnik.", app: "Eine Schulungsverwaltung gibt es nicht. Schulungsunterlagen und -nachweise lassen sich als Nachweis zur passenden Anforderung ablegen und prüfen." },
        { title: "Kryptografie", ref: "§ 30 Abs. 2 Nr. 8", bsi: "Konzepte und Verfahren für den Einsatz kryptografischer Verfahren.", app: "Das Konzept entsteht bei euch; die Anwendung führt die Anforderungen dazu und das Dokument mit Version, Freigabe und Überprüfung im Dokumentregister." },
        { title: "Personal, Zugriff, Anlagen", ref: "§ 30 Abs. 2 Nr. 9", bsi: "Sicherheit des Personals, Zugriffskontrolle und Management von IT-Systemen, -Produkten und -Prozessen.", app: "Prozesse, Informationen, Komponenten, Standorte und Dienstleister mit Abhängigkeiten und Verantwortlichen bilden das Inventar. Zugriffe in euren Systemen steuert die Anwendung nicht." },
        { title: "Authentifizierung und Kommunikation", ref: "§ 30 Abs. 2 Nr. 10", bsi: "Multi-Faktor- oder kontinuierliche Authentifizierung, gesicherte Kommunikation und gesicherte Notfallkommunikation, soweit angemessen.", app: "Liegt außerhalb der Anwendung. Sie dokumentiert Anforderung, Maßnahme und Nachweis; Notfallkontakte und Notfallorganisation lassen sich im Notfallmanagement erfassen." },
      ] },
      { type: "pairs", h: "Wie Grundschutz++ zu NIS2 steht.", items: [
        { title: "Ein anerkannter Standard", ref: "BSI, #nis2know", bsi: "Die Maßnahmen sollen sich an anerkannten Standards und Sicherheitsnormen orientieren; das BSI nennt Grundschutz++ und ISO 27001 als Beispiele. Eine bestimmte Norm schreibt es nicht vor.", app: "Wir setzen Grundschutz++ um. Für NIS2 ist das ein möglicher Weg, kein vorgeschriebener." },
        { title: "Ein Zertifikat ist keine NIS2-Konformität", ref: "BSI, ISO/IEC 27001 im Kontext NIS-2/BSIG", bsi: "ISO/IEC 27001 deckt viele ISMS-Aspekte ab, enthält aber zum Beispiel die Meldepflichten nach § 32 BSIG nicht, und der Anwendungsbereich kann enger sein als das Gesetz. Eine Zertifizierung kann den Nachweis erleichtern, ist aber gegen den Maßnahmenkatalog zu prüfen und ggf. zu ergänzen.", app: "Daraus folgt für uns: den Anwendungsbereich so festlegen, dass er die regulierten Dienste umfasst, und NIS2 als eigene Compliance-Verpflichtung führen, statt sie als durch Grundschutz++ erledigt anzusehen." },
        { title: "NIS2 gehört in Prozessschritt 1", ref: "BSI-Standard 300-1, Kapitel 2.1.1, 2.2, 3.4.3", bsi: "Der Standard nennt NIS-2 als Beispiel für rechtliche Rahmenbedingungen im Kontext. Gesetzliche Verpflichtungen werden dokumentiert und ergänzen das Anforderungspaket.", app: "NIS2 lässt sich als Kontextfaktor in der Gruppe Recht und Regulierung und als Compliance-Verpflichtung mit Kritikalität, Verantwortlichen, Inkrafttreten und Frist erfassen. Gesetzgeber und Aufsichtsbehörden sind Standardgruppen der interessierten Parteien." },
        { title: "Die Geschäftsleitung entscheidet", ref: "§ 38 BSIG; BSI-Standard 300-1, Kapitel 2.10", bsi: "Das BSIG verlangt Umsetzung und Überwachung durch die Geschäftsleitung; der BSI-Standard 300-1 legt die Verantwortung für das ISMS nicht delegierbar bei der Institutionsleitung.", app: "Eine Leitungsmappe zeigt je Thema, was die Leitung wann freigegeben hat, mit Link zum Objekt. Freigaben, Restrisiken und Managementbewertungen tragen Person, Rolle und Zeitpunkt." },
      ] },
      { type: "gaps", h: "Grenzen, offen gesagt.", items: [
        { title: "Keine Betroffenheitsprüfung", text: "Ob ihr unter das BSIG fallt, klärt ihr selbst, etwa mit der freiwilligen Betroffenheitsprüfung des BSI oder mit rechtlicher Beratung." },
        { title: "Keine Registrierung, keine Meldung aus der Anwendung", text: "Registrierung und Meldungen laufen über BSI und BBK. Die Anwendung dokumentiert Entscheidungen, sie übermittelt nichts." },
        { title: "Kein NIS2-Katalog im Lieferumfang", text: "Mitgeliefert wird ein Stand des Anwenderkatalogs Grundschutz++. Einen eigenen Katalog zu § 30 BSIG könnt ihr als OSCAL-Datei einlesen und der Compliance-Verpflichtung NIS2 zuordnen." },
        { title: "Keine Konformitätsaussage", text: "Die Anwendung unterstützt Vorbereitung und Dokumentation. Ob eure Maßnahmen § 30 BSIG genügen, beurteilt ihr mit euren Prüfenden; die Aufsicht liegt beim BSI." },
      ] },
      { type: "faq", h: "Fragen zu NIS2 und ISMS.", items: [
        { q: "Ist BlueProceedings ISMS NIS2-konform?", a: "Diese Frage stellt sich für eine Software nicht: Die Vorgaben des BSIG richten sich an die Einrichtung. BlueProceedings ISMS unterstützt Vorbereitung und Dokumentation und trifft keine Konformitätsaussage." },
        { q: "Erfüllt Grundschutz++ automatisch NIS2?", a: "Nein. Das BSI nennt Grundschutz++ als Beispiel eines anerkannten Standards, an dem sich die Maßnahmen orientieren können. Gesetzliche Vorgaben wie Registrierung und Meldungen kommen hinzu, und der Anwendungsbereich muss die regulierten Dienste abdecken." },
        { q: "Welche Fristen gelten für NIS2-Meldungen?", a: "Nach § 32 BSIG eine Frühwarnung spätestens 24 Stunden nach Kenntnis eines erheblichen Sicherheitsvorfalls, eine Meldung spätestens nach 72 Stunden und eine Abschlussmeldung spätestens einen Monat nach der Meldung." },
        { q: "Muss die Geschäftsleitung geschult werden?", a: "Ja. Nach § 38 Abs. 3 BSIG nehmen die Geschäftsleitungen regelmäßig an Schulungen teil, um Risiken und Risikomanagementpraktiken erkennen und bewerten zu können. Einen festen Turnus nennt das Gesetz nicht." },
        { q: "Hilft die Anwendung bei der Lieferkette?", a: "Ja, mit einem Dienstleisterregister, Unterauftragnehmer-Ketten bis 15 Stufen, importierbaren Risikoerklärungen und einem Angebotsvergleich. Die Bewertung der Dienstleister bleibt eure Entscheidung." },
      ] },
    ],
    cta: { h: "NIS2 als Teil des ISMS führen, nicht daneben.", text: "BlueProceedings ISMS hält Kontext, Compliance-Verpflichtungen, Risiken, Vorfälle und Lieferkette in einem Datenstand. Die Startseite zeigt die Pre-Alpha." },
    next: ["/isms-software/bsi-grundschutz/", "/bsi-standard-300-1/", "/funktionen/bcm-notfallmanagement/"],
    sources: [
      [BSIG(30), "BSIG § 30: Risikomanagementmaßnahmen", "Zehn Mindestbereiche und Dokumentation, am 01.11.2026 geprüft"],
      [BSIG(32), "BSIG § 32: Meldepflichten", "Frühwarnung, Meldung, Zwischen- und Abschlussmeldung"],
      [BSIG(33), "BSIG § 33: Registrierungspflicht", "Frist von drei Monaten"],
      [BSIG(38), "BSIG § 38: Umsetzungs-, Überwachungs- und Schulungspflicht für Geschäftsleitungen", "Verantwortung und Schulung der Geschäftsleitung"],
      [BSI_NIS2_RISIKO, "BSI: #nis2know – Risikomanagementmaßnahmen", "Anerkannte Standards, Dokumentation und Nachweise"],
      [BSI_NIS2_ISO, "BSI: ISO/IEC 27001 im Kontext NIS-2/BSIG", "Warum ein Zertifikat keine NIS2-Konformität bedeutet"],
      [BSI_NIS2_FAQ, "BSI: Fragen und Antworten zu NIS-2", "Inkrafttreten am 06.12.2025, Zahl der betroffenen Unternehmen, Betroffenheitsprüfung"],
      [EU_NIS2, "EU: Richtlinie (EU) 2022/2555 (NIS-2)", "Europäische Grundlage, Artikel 20, 21 und 23"],
      standardQuelle,
    ],
  },
};
