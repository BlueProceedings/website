
import { SEO_SEITEN } from "./seo-pages.mjs";

const BSI_GSPP = "https://www.bsi.bund.de/dok/grundschutz-plus-plus";
const BSI_METHODIK = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/sonstiges/Methodik_Grundschutz_PlusPlus.pdf";
const BSI_STANDARD_300_1 = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_300-1.pdf?__blob=publicationFile&v=1";
const BSI_OSCAL = "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Grundschutz-in-der-Informationssicherheit/Stand-der-Technik/OSCAL/oscal_node.html";
const BSI_BIBLIOTHEK = "https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek";
const BSI_CONTROL_LAYER = `${BSI_BIBLIOTHEK}/tree/main/control_layer/Grundschutz%2B%2B`;
const BSI_MAPPINGS = `${BSI_BIBLIOTHEK}/tree/main/control_layer/Mappings`;
const NIST_OSCAL = "https://pages.nist.gov/OSCAL/";

const GEPRUEFT = "2026-10-27";
export const LEITFADEN = "Leitfaden zur Methodik Grundschutz++, Version März 2026";
export const STANDARD_300_1 = "BSI-Standard 300-1 „Methodik Grundschutz++“, Version 1.0";

export const THEMEN = [
  ["/grundschutz-plus-plus/", "Überblick"],
  ["/bsi-standard-300-1/", "Standard 300-1"],
  ["/grundschutz-plus-plus/software/", "Software"],
  ["/grundschutz-plus-plus/umsetzung/", "Umsetzung"],
  ["/grundschutz-plus-plus/zeitplan/", "Zeitplan"],
  ["/grundschutz-plus-plus/it-grundschutz-migration/", "Umstieg"],
  ["/grundschutz-plus-plus/anwenderkatalog/", "Anwenderkatalog"],
  ["/grundschutz-plus-plus/oscal/", "OSCAL"],
];

export const FACHSEITEN = {
  "/grundschutz-plus-plus/": {
    title: "BSI Grundschutz++: Methodik & Umsetzung",
    description: "Grundschutz++ kurz erklärt: die neue BSI-Methodik, fünf Prozessschritte, maschinenlesbare OSCAL-Anforderungen und ihre Umsetzung in BlueProceedings ISMS.",
    crumb: "Grundschutz++",
    h1: "Grundschutz++, kurz erklärt.",
    lede: "Grundschutz++ ist die neue Methodik des BSI für ein Informationssicherheitsmanagementsystem (ISMS). Sie erscheint als BSI-Standard 300-1 und löst nach einer mehrjährigen Übergangszeit den IT-Grundschutz ab. Neu ist vor allem die Form: Das BSI veröffentlicht jede Anforderung als maschinenlesbaren Eintrag im OSCAL-Format, und der Ablauf folgt in fünf Prozessschritten dem PDCA-Zyklus.",
    asOf: GEPRUEFT,
    mailTopic: "Grundschutz++",
    sections: [
      {
        type: "pairs",
        h: "Was sich gegenüber dem IT-Grundschutz ändert.",
        lede: "Vier Unterschiede, die im Alltag am meisten auffallen. Links steht, was das BSI veröffentlicht hat, rechts, wie wir es in BlueProceedings ISMS auslegen.",
        items: [
          { title: "Anforderungen sind Daten", ref: "Leitfaden 1.1, Seite Grundschutz++", bsi: "Das BSI erfasst jede Anforderung als Regel in einem standardisierten Format. Der Anforderungskatalog liegt in der Stand-der-Technik-Bibliothek auf GitHub und soll sich in strukturierter Form nutzen lassen.", app: "Wir lesen den Katalog direkt ein, mit Version und Herkunft, statt Anforderungen abzutippen. Wir gehen davon aus, dass das BSI im Lauf der Zeit mehrere Katalogstände veröffentlicht. Deshalb ist die Migration auf einen neuen Stand ein eigenes Feature: Ein neuer Stand gilt erst nach einem ausdrücklichen Wechsel, nicht still im laufenden Informationsverbund." },
          { title: "Der Geschäftsprozess steht am Anfang", ref: "Leitfaden 1.4.1, 3.4.1", bsi: "Nach dem Geltungsbereich werden die relevanten Geschäftsprozesse ermittelt und nach Kritikalität priorisiert. Im ersten Durchlauf reicht es, die Assets des wichtigsten Prozesses zu erfassen; weitere folgen in den nächsten Zyklen.", app: "Assets bauen auf den Zielobjektkategorien des Katalogs auf: Jedes Objekt wird einer oder mehreren Kategorien zugeordnet, daraus ergeben sich seine Anforderungen. Prozesse, Informationen, Komponenten, Dienstleister und Standorte sind die Objektarten, die wir dafür als eigene, verknüpfte Objekte führen; die Kategorien des Katalogs sind feiner, und weitere Objektarten sind möglich. Dieselben Objekte nutzen wir auch für Risiken, Notfallvorsorge und Berichte." },
          { title: "Ein Paket je Informationsverbund", ref: "BSI-Standard 300-1, Kapitel 3.4", bsi: "Assets werden Zielobjektkategorien zugeordnet. Zusammen mit den verbundweiten ISMS-Anforderungen, eigenen Verpflichtungen und dem Ergebnis der Risikobetrachtung entsteht das Anforderungspaket.", app: "Jede Anforderung hängt am Objekt, für das sie gilt, und zeigt, woher sie kommt. Ausschließen lässt sie sich nur mit Begründung." },
          { title: "Wirksamkeit gehört zum Ablauf", ref: "BSI-Standard 300-1, Kapitel 5 und 6", bsi: "Überwachung und kontinuierliche Verbesserung sind eigene Prozessschritte. Sie prüfen, ob die umgesetzten Anforderungen wirksam sind, und leiten Korrekturen ab.", app: "Eine Maßnahme ist bei uns erst abgeschlossen, wenn vorab festgelegte Kriterien geprüft sind, ein gültiger Nachweis vorliegt und eine zweite Person freigibt." },
        ],
      },
      {
        type: "chain",
        h: "Fünf Prozessschritte, ein Kreislauf.",
        lede: "So beschreibt der Leitfaden den Sicherheitsprozess (Abschnitt 1.4). Jeder Prozessschritt entspricht einer ISMS-Praktik im Anwenderkatalog. Nach dem ersten Durchlauf dürfen Schritte auch parallel laufen.",
        items: [
          { title: "Erhebung und Planung", text: "Plan · Governance und Compliance. Kontext, interessierte Parteien, Geltungsbereich, Leitlinie, Rollen, Risikomanagement." },
          { title: "Anforderungsanalyse", text: "Plan · Strukturmodellierung. Informationsverbund abgrenzen, Assets erfassen und zuordnen, Anforderungspaket bilden." },
          { title: "Realisierung", text: "Do · Umsetzung. Umsetzungsstand erheben, Maßnahmen planen, Zuständigkeiten, Fristen, Ausnahmen." },
          { title: "Überwachung", text: "Check · Monitoring und Evaluation. Leistungsbewertung, Audits, Managementbewertung." },
          { title: "Kontinuierliche Verbesserung", text: "Act · Verbesserung. Abweichungen behandeln, Korrekturen planen, Wirkung bewerten." },
        ],
        loop: "<b>Wie wir es auslegen:</b> BlueProceedings ISMS führt die fünf Schritte als eine Kette über denselben Datenstand. Ändert sich ein Glied, etwa ein Asset oder ein Katalogstand, zeigt die Anwendung, was neu zu bewerten sein könnte. Die Entscheidungen bleiben bei der Institutionsleitung und den zuständigen Rollen.",
      },
      {
        type: "gaps",
        h: "Fünf Begriffe, die überall vorkommen.",
        lede: "Die Begriffe, wie sie der BSI-Standard 300-1 verwendet.",
        items: [
          { title: "BSI-Standard 300-1", text: "Die Methodik Grundschutz++ liegt jetzt als BSI-Standard 300-1, Version 1.0, vor. Sie richtet sich zunächst an Early Adopters und wurde gemeinsam mit der Grundschutz-Community sowie ausgewählten Pilotierungsinstitutionen entwickelt." },
          { title: "Praktik", text: "Ein Tätigkeitsbereich, nach dem der Anwenderkatalog die Anforderungen gliedert, etwa „Informationen und Assets“. Fünf ISMS-Praktiken bilden die fünf Prozessschritte ab." },
          { title: "Zielobjektkategorie", text: "Eine standardisierte Klasse, für die Anforderungen beschrieben sind, etwa Daten. Anforderungen einer übergeordneten Kategorie werden auf die Kategorien darunter vererbt (Abschnitt 3.5.1)." },
          { title: "Anforderungspaket", text: "Alle Anforderungen, die für einen Informationsverbund gelten. Es ist auf genau diesen Verbund zugeschnitten und bildet die Basis der Umsetzung (Abschnitt 3)." },
          { title: "Blaupause", text: "Eine Auswahl von Anforderungen für einen wiederkehrenden Kontext. Die Stand-der-Technik-Bibliothek veröffentlicht für Grundschutz++ Quellkataloge, ein OSCAL-Profil und den daraus aufgelösten Anwenderkatalog." },
        ],
      },
      {
        type: "pairs",
        h: "Was ein Werkzeug dabei leisten kann.",
        items: [
          { title: "Mit oder ohne Werkzeug", ref: "Leitfaden 1.2, 3", bsi: "Die Standardvorgehensweise lässt sich auch ohne Automatisierung durchführen. Für kleine Institutionen empfiehlt der Leitfaden langfristig die toolgestützte Umsetzung; mittlere und große können durch Automatisierung effizienter arbeiten.", app: "BlueProceedings ISMS automatisiert, was sich aus den Daten ableiten lässt: Anforderungen je Objekt, Vererbung, Fristen, Hinweise auf veraltete Berichte. Was sich nicht ableiten lässt, fragt es ab." },
          { title: "Was automatisiert werden darf", ref: "Leitfaden 3.4.2, 3.5.1", bsi: "Die Zuordnung zu Zielobjektkategorien kann toolgestützt erfolgen, wenn die Kategorien maschinenlesbar vorliegen. Die Vererbung ist deterministisch; ihre Automatisierung ist möglich und empfohlen.", app: "Die Zuordnung eines Assets zu Kategorien treffen und begründen Menschen. Die Vererbung entlang der Hierarchie rechnet die Anwendung selbst." },
          { title: "Was beim Menschen bleibt", ref: "BSI-Standard 300-1, Kapitel 2.10 und 4.1.2", bsi: "Die Institutionsleitung trägt die Verantwortung für das ISMS und gibt die wesentlichen Entscheidungen frei. MUSS-Anforderungen erlauben keine Ausnahme oder Risikoakzeptanz; eine dauerhaft nicht erfüllte SOLLTE-Anforderung erfordert eine Risikobetrachtung und die Freigabe des Restrisikos.", app: "BlueProceedings ISMS trennt diese Wege technisch: Bei MUSS sperrt es Ausnahme, Herabstufung und Risikoakzeptanz; vorübergehende MUSS- und SOLLTE-Lücken verlangen Begründung und Frist. Dauerhafte SOLLTE-Lücken werden zu Risikokandidaten; erforderliche Leitungsentscheidungen laufen als formaler Akzeptanzantrag, im regulären Betrieb mit erzwungener Vier-Augen-Trennung. Die fachliche Entscheidung bleibt bei der Institutionsleitung und den zuständigen Rollen." },
        ],
      },
      {
        type: "timeline",
        h: "Wo Grundschutz++ gerade steht.",
        lede: `Die wichtigsten Termine aus dem Meilensteinplan des BSI. Alle Termine stehen im <a href="/grundschutz-plus-plus/zeitplan/">Zeitplan</a>.`,
        items: [
          { when: "27.10.2026", date: "2026-10-27", title: "BSI-Standard 300-1", text: "Das BSI stellt den BSI-Standard 300-1 (Methodik Grundschutz++) auf der it-sa in Nürnberg vor und stellt ihn der Community zur Anwendung bereit." },
          { when: "01.01.2027", date: "2027-01-01", title: "Zertifizierbar", text: "Anträge auf eine ISO-27001-Zertifizierung auf Basis von Grundschutz++ sind möglich, ebenso auf die Zertifizierung zum GS++-Berater und GS++-Auditteamleiter." },
          { when: "2027", date: "2027", title: "Early-Adopter-Phase", text: "Vom ersten Quartal bis zum 31.12.2027 für die Anwendung des BSI-Standards 300-1." },
          { when: "30.11.2031", date: "2031-11-30", title: "Ende IT-Grundschutz", text: "Die Zertifizierbarkeit nach IT-Grundschutz endet, laut BSI fünf Jahre nach der Veröffentlichung von Grundschutz++." },
        ],
      },
    ],
    cta: { h: "Grundschutz++ nicht in Tabellen nachbauen.", text: "BlueProceedings ISMS setzt die fünf Prozessschritte als verbundene Arbeitskette um. Die Startseite zeigt, wie das in der Pre-Alpha aussieht." },
    next: ["/grundschutz-plus-plus/zeitplan/", "/grundschutz-plus-plus/it-grundschutz-migration/", "/grundschutz-plus-plus/anwenderkatalog/"],
    sources: [
      [BSI_STANDARD_300_1, `BSI: ${STANDARD_300_1}`, "Methodik und Grundlage der Kapitelangaben auf dieser Seite"],
      [BSI_GSPP, "BSI: Grundschutz++", "Überblick und Meilensteinplan (Stand Oktober 2026)"],
      [BSI_CONTROL_LAYER, "Stand-der-Technik-Bibliothek: Grundschutz++", "Anwenderkatalog und Methodik als OSCAL-Dateien auf GitHub"],
    ],
  },

  "/grundschutz-plus-plus/zeitplan/": {
    title: "Grundschutz++-Zeitplan und Zertifizierung",
    description: "Der Grundschutz++-Zeitplan des BSI: Standard 300-1, Zertifizierbarkeit ab 2027, Early-Adopter-Phase und Ende der IT-Grundschutz-Zertifizierung.",
    crumb: "Zeitplan",
    h1: "Grundschutz++: Zeitplan und Zertifizierung.",
    lede: "Laut Meilensteinplan des BSI wird der BSI-Standard 300-1, die Methodik Grundschutz++, am 27.10.2026 auf der it-sa in Nürnberg veröffentlicht. Ab dem 01.01.2027 können Anträge auf eine ISO-27001-Zertifizierung auf Basis von Grundschutz++ gestellt werden. Die Zertifizierbarkeit nach IT-Grundschutz endet am 30.11.2031, fünf Jahre nach der Veröffentlichung von Grundschutz++ (nicht des IT-Grundschutzes).",
    asOf: GEPRUEFT,
    mailTopic: "Zeitplan",
    sections: [
      {
        type: "timeline",
        h: "Alle Meilensteine.",
        lede: "So steht es im Meilensteinplan des BSI, Stand Oktober 2026. Das BSI passt den Plan laufend an; vor einer Entscheidung lohnt der Blick in die Quelle.",
        items: [
          { when: "16.03.2026", date: "2026-03-16", title: "Leitfaden erscheint", text: "Erste Fassung des Leitfadens zur Methodik Grundschutz++, erstellt von BSI und Stand-der-Technik-Community. Dieser Termin steht im Leitfaden selbst, nicht im Meilensteinplan." },
          { when: "01.04.2026", date: "2026-04-01", title: "Pilotierung beginnt", text: "Die Methodik liegt in einer anwendbaren Pilotierungsfassung vor; Pilotierungspartner aus öffentlicher Verwaltung und Wirtschaft erproben sie in der Praxis." },
          { when: "31.08.2026", date: "2026-08-31", title: "Pilotierung endet", text: "Erkenntnisse aus der Pilotierung fließen in die Weiterentwicklung der Methodik ein." },
          { when: "27.10.2026", date: "2026-10-27", title: "BSI-Standard 300-1", text: "Der BSI-Standard 300-1 (Methodik Grundschutz++) wird auf der it-sa 2026 in Nürnberg veröffentlicht und der Community zur Anwendung bereitgestellt.", now: true },
          { when: "30.11.2026", date: "2026-11-30", title: "Schulungskonzepte", text: "Veröffentlichung der neuen Schulungskonzepte für die Ausbildung zum GS++-Praktiker und GS++-Berater." },
          { when: "Dezember 2026", date: "2026-12", title: "Anwendungsbeispiel", text: "Veröffentlichung eines Anwendungsbeispiels anhand der fiktiven Behörde „BDIT“." },
          { when: "01.01.2027", date: "2027-01-01", title: "Zertifizierbar", text: "Zertifizierungsanträge nach ISO 27001 auf Basis von Grundschutz++ können gestellt werden, ebenso für die Zertifizierung zum GS++-Berater und GS++-Auditteamleiter." },
          { when: "1. Quartal 2027", date: "2027-01", title: "Fortbildung zum GS++-Berater und -Auditteamleiter", text: "Für bereits zertifizierte IT-Grundschutz-Berater und Auditteamleiter gibt es eine gesonderte Fortbildung für die Zertifizierung zum GS++-Berater und GS++-Auditteamleiter." },
          { when: "1. Quartal 2027", date: "2027-01", title: "Start der Early-Adopter-Phase", text: "Die Early-Adopter-Phase für die Anwendung des BSI-Standards 300-1 beginnt." },
          { when: "26.02.2027", date: "2027-02-26", title: "Leistungsmessung", text: "Das Konzept zur Leistungsmessung für ein ISMS auf Basis von Grundschutz++ wird in die Methodik integriert." },
          { when: "31.03.2027", date: "2027-03-31", title: "Leistungskennzahlen", text: "Jede Anforderung der ISMS-Praktiken erhält Leistungskennzahlen." },
          { when: "31.12.2027", date: "2027-12-31", title: "Ende der Early-Adopter-Phase", text: "Die Early-Adopter-Phase für den BSI-Standard 300-1 endet." },
          { when: "2027 ff.", date: "2027", title: "Internationalisierung", text: "Andere Managementsysteme sollen in Grundschutz++ integriert werden." },
          { when: "30.11.2031", date: "2031-11-30", title: "Ende IT-Grundschutz", text: "Die Zertifizierbarkeit des IT-Grundschutzes endet, laut BSI fünf Jahre nach der Veröffentlichung von Grundschutz++." },
        ],
      },
      {
        type: "pairs",
        h: "Was das für die Vorbereitung heißt.",
        lede: "Bis 2031 ist Zeit, aber ein Umstieg dauert länger als ein Audit-Zyklus. Links, was bisher veröffentlicht ist, rechts, wie BlueProceedings ISMS damit umgeht.",
        items: [
          { title: "Der Katalog ändert sich", ref: "Seite Grundschutz++, Bibliothek", bsi: "Der Meilensteinplan wird laufend angepasst, und die Stand-der-Technik-Bibliothek erhält neue Stände. Bis Ende 2027 läuft die Early-Adopter-Phase für die Anwendung des BSI-Standards 300-1.", app: "Jeder Informationsverbund arbeitet auf einem festen Katalogstand. Die Anwendung steuert und unterstützt die Migration auf einen neuen Stand: Vor dem Wechsel zeigt sie je Informationsverbund, welche Anforderungen neu, geändert oder entfallen sind und welche Parameter sich ändern. Nach dem Wechsel führt eine Liste der Migrationsänderungen durch die Neubewertung, sichtbar an der Institution, am Informationsverbund und am einzelnen Objekt. Wer übernimmt, begründet den Wechsel; eine Freigabe ist nötig." },
          { title: "Einstieg mit einem Prozess", ref: "Leitfaden 3.4.1", bsi: "Im ersten Durchlauf reicht es, die Assets für den wichtigsten Geschäftsprozess zu erfassen. Weitere Prozesse können in den nächsten Zyklen oder parallel folgen.", app: "Ein Einrichtungsassistent leitet aus dem erfassten Bestand den nächsten Schritt ab, damit der erste Durchlauf überschaubar bleibt. Wer die Methodik erst lernen will, findet dazu den Lernmodus." },
          { title: "Mappings für den Umstieg", ref: "Stand-der-Technik-Bibliothek", bsi: "Das BSI veröffentlicht ein maschinenlesbares Mapping von IT-Grundschutz 2023 auf Grundschutz++. Es beschreibt Beziehungen zwischen alten und neuen Anforderungen, aber keine automatische Erfüllung.", app: "BlueProceedings ISMS nutzt Mappings als Orientierung und bewertet Zuordnung, Umsetzungsstatus und Nachweise im neuen Anforderungspaket neu. Mehr dazu auf der Seite zum Umstieg." },
          { title: "Kennzahlen folgen 2027", ref: "Meilensteinplan", bsi: "Bis zum 31.03.2027 sollen alle Anforderungen der ISMS-Praktiken Leistungskennzahlen erhalten.", app: "Kennzahlen gibt es in der Pre-Alpha schon. Wie sie zu den Kennzahlen des BSI passen, prüfen wir, sobald diese veröffentlicht sind." },
        ],
      },
      {
        type: "note",
        h: "Keine Zertifizierungsaussage.",
        text: "BlueProceedings ISMS unterstützt die Vorbereitung. Ob eine Institution zertifiziert wird, entscheidet die zuständige Stelle nach den dann geltenden Grundlagen. Die erste Version von BlueProceedings ISMS ist für Januar 2027 geplant.",
      },
    ],
    cta: { h: "Bereit sein, wenn Grundschutz++ zertifizierbar wird.", text: "Ab dem 11.11.2026 testen bis zu elf Personen aus der ISMS-Praxis die Pre-Alpha. Die Startseite zeigt, was schon läuft." },
    next: ["/grundschutz-plus-plus/", "/grundschutz-plus-plus/it-grundschutz-migration/", "/grundschutz-plus-plus/anwenderkatalog/"],
    sources: [
      [BSI_GSPP, "BSI: Grundschutz++", "Meilensteinplan, Stand Oktober 2026, am 26.10.2026 geprüft"],
      [BSI_METHODIK, `BSI: ${LEITFADEN}`, "PDF, Änderungshistorie der Pilotierungsfassung"],
    ],
  },

  "/grundschutz-plus-plus/it-grundschutz-migration/": {
    title: "Von IT-Grundschutz zu Grundschutz++",
    description: "Von IT-Grundschutz zu Grundschutz++: Was sich übernehmen lässt, was neu entschieden werden muss und warum BlueProceedings ISMS neu modelliert.",
    crumb: "Umstieg",
    h1: "Von IT-Grundschutz zu Grundschutz++: neu modellieren statt kopieren.",
    lede: "Für den Umstieg veröffentlicht das BSI maschinenlesbare Mappings. Sie zeigen Beziehungen zwischen alten und neuen Anforderungen, belegen aber keine Erfüllung. Grundschutz++ leitet Anforderungen über Geschäftsprozesse, Assets und Zielobjektkategorien ab, nicht über Bausteine. Wir lesen das so: Bisherige Unterlagen sind eine wertvolle Quelle, aber kein fertiges Grundschutz++-Ergebnis.",
    asOf: GEPRUEFT,
    mailTopic: "Umstieg",
    sections: [
      {
        type: "pairs",
        h: "Was bisher dazu veröffentlicht ist.",
        lede: "Links, was das BSI zum Umstieg sagt, rechts, welche Schlüsse BlueProceedings ISMS daraus zieht.",
        items: [
          { title: "Mappings", ref: "Stand-der-Technik-Bibliothek", bsi: "Die Bibliothek enthält maschinenlesbare Mappings, die Beziehungen zwischen Regelwerken beschreiben.", app: "Ein Mapping zeigt, welche Anforderungen zusammenhängen. Es belegt nicht, dass eine alte Umsetzung die neue Anforderung erfüllt; das prüfen Menschen." },
          { title: "Übergangszeit", ref: "Meilensteinplan, Seite ISMS", bsi: "Der IT-Grundschutz bleibt in der mehrjährigen Übergangszeit anwendbar. Die Zertifizierbarkeit nach IT-Grundschutz endet am 30.11.2031.", app: "Es gibt Zeit für einen sauberen Neuaufbau, ohne beide Welten in einem Datenbestand zu vermischen." },
          { title: "Klein anfangen", ref: "Leitfaden 3.4.1", bsi: "Im ersten Durchlauf reicht der wichtigste Geschäftsprozess mit seinen Assets.", app: "Der Neuaufbau beginnt mit einem Prozess und wächst mit jedem Zyklus, unterstützt von Vorlagen und einem Einrichtungsassistenten." },
        ],
      },
      {
        type: "gaps",
        h: "Was du mitnimmst und was du neu entscheidest.",
        lede: "Vier Unterlagen, die fast jedes ISMS hat, liefern Wissen für den Neustart, aber keine fertige Grundschutz++-Aussage.",
        items: [
          { title: "Geltungsbereich und Strukturanalyse", text: "Liefern Objektkandidaten, Verantwortliche und bekannte Abhängigkeiten. Neu zu entscheiden sind die Abgrenzung des Informationsverbunds, die Assets und ihre Zielobjektkategorien." },
          { title: "Umsetzungsbeschreibungen", text: "Zeigen die technische und organisatorische Ausgangslage. Neu zu entscheiden ist, welche Grundschutz++-Anforderung sie betreffen und welche Parameter gelten." },
          { title: "Nachweise", text: "Sind mögliche Belege. Ob sie taugen, hängt an Gegenstand, Zeitraum, Prüfumfang und Aussagekraft für die neue Anforderung." },
          { title: "Risiken und Maßnahmen", text: "Bringen bekannte Ursachen, Szenarien und Zuständigkeiten mit. Neu zu bewerten sind sie nach der aktuellen Methode und mit Bezug zu den neuen Assets." },
        ],
      },
      {
        type: "steps",
        h: "Ein Umstieg in sieben Schritten.",
        lede: "Unser Vorschlag entlang der Prozessschritte des BSI-Standards 300-1. Er beginnt beim gesicherten Altstand und endet bei neu betrachteten Risiken und auf Wirksamkeit geprüften Maßnahmen.",
        items: [
          { title: "Altstand sichern", text: "Geltungsbereich, Inventare, Umsetzungen, Risiken und Nachweise mit Datum archivieren. Sie sind Eingabe, kein Ergebnis." },
          { title: "Rahmen neu festlegen", text: "Kontext, Verpflichtungen, Ziele, Rollen und Risikomethodik nach Prozessschritt 1 beurteilen. Alte Freigaben gelten nicht weiter." },
          { title: "Wichtigsten Prozess modellieren", text: "Für den priorisierten Geschäftsprozess die Assets erfassen und Zielobjektkategorien zuordnen. Weitere Prozesse folgen." },
          { title: "Paket ableiten", text: "Aktueller Katalog, passende Blaupause und Parameter ergeben das Anforderungspaket. Mappings geben Orientierung." },
          { title: "Umsetzung neu bewerten", text: "Umsetzungen und Nachweise der neuen Anforderung zuordnen und prüfen. Lücken bleiben als offene Anforderungen sichtbar." },
          { title: "Risikoanalyse neu durchführen", text: "Risiken nach dem BSI-Standard 300-1 betrachten, mit Bezug zu Geschäftsprozessen, kritischen Assets und offenen Anforderungen. BlueProceedings ISMS führt von Risikokandidaten über Bewertung und Behandlung bis zu Restrisiko, Akzeptanz und Review. Alte Risikobewertungen sind Eingabe, kein Ergebnis." },
          { title: "Maßnahmen bewerten", text: "Maßnahmen aus Lücken und Risiken planen und nach der Umsetzung auf Wirksamkeit prüfen (Prozessschritte 4 und 5). Erst die Wirksamkeitsprüfung zeigt, ob eine Maßnahme das Risiko wirklich senkt." },
        ],
      },
      {
        type: "note",
        h: "Warum wir keinen pauschalen Import anbieten.",
        text: "Der bequemste Transfer wäre fachlich der riskanteste: Er würde genau die unklaren Zuordnungen, überholten Annahmen und lückenhaften Nachweise mitnehmen, die der Wechsel sichtbar machen soll. Das ist unsere Auslegung, keine Vorgabe des BSI.",
      },
    ],
    cta: { h: "Den Umstieg einmal sauber machen.", text: "Wenn du gerade einen Umstieg planst, erzähl uns, wo es hakt. Rückmeldungen aus der Praxis fließen in die Planung der ersten Version ein." },
    next: ["/grundschutz-plus-plus/zeitplan/", "/grundschutz-plus-plus/anwenderkatalog/", "/grundschutz-plus-plus/"],
    sources: [
      [BSI_STANDARD_300_1, `BSI: ${STANDARD_300_1}`, "Methodik, Prozessschritte 1 bis 5 und Risikobetrachtung"],
      [BSI_GSPP, "BSI: Grundschutz++", "Meilensteinplan und Ende der Zertifizierbarkeit nach IT-Grundschutz, am 27.10.2026 geprüft"],
      [BSI_MAPPINGS, "Stand-der-Technik-Bibliothek: Mappings", "Beziehungen zwischen Regelwerken als OSCAL-Dateien"],
    ],
  },

  "/grundschutz-plus-plus/anwenderkatalog/": {
    title: "Grundschutz++-Anwenderkatalog erklärt",
    description: "Den Grundschutz++-Anwenderkatalog lesen: Praktik, Modalverb, Zielobjekt, Sicherheitsniveau, Parameter und Dokumentation verständlich erklärt.",
    crumb: "Anwenderkatalog",
    h1: "Den Grundschutz++-Anwenderkatalog lesen.",
    lede: "Der Anwenderkatalog enthält die Anforderungen von Grundschutz++, gegliedert nach Praktiken. Jede Anforderung ist ein einzelner Eintrag mit festen Feldern. Wer weiß, was in welchem Feld steht, sieht auf einen Blick, was gefordert ist, wie verbindlich es ist und wofür es gilt.",
    asOf: GEPRUEFT,
    mailTopic: "Anwenderkatalog",
    sections: [
      {
        type: "oscal",
        h: "Eine Anforderung, Feld für Feld.",
        lede: "Das Beispiel ist ASST.2.1.1 „Informationsverantwortung“ aus der Praktik „Informationen und Assets“, so wie sie im Katalog steht, gekürzt und ohne Namensräume. Zu jedem Feld steht, was es bedeutet.",
        rows: [
          ['"id": "ASST.2.1.1", "title": "Informationsverantwortung"', "Kennung und Titel"],
          ['"sec_level": "normal-SdT"', "Sicherheitsniveau"],
          ['"effort_level": "3"', "Aufwand"],
          ['"threats": "G 0.18, G 0.16, G 0.17, G 0.45"', "Gefährdungen"],
          ['"params": [{ "label": "einer zuständigen Person oder Rolle" }]', "Parameter"],
          ['"target_object_categories": "Daten"', "Zielobjektkategorie"],
          ['"modal_verb": "SOLLTE"', "Modalverb"],
          ['"action_word": "zuweisen"', "Handlungswort"],
          ['"result": "die Zuständigkeit für deren Verarbeitung"', "Ergebnis"],
          ['"documentation": "Inventar Informationen"', "Dokumentation"],
        ],
        prose: "Informationen und Assets für Daten SOLLTE die Zuständigkeit für deren Verarbeitung {{einer zuständigen Person oder Rolle}} zuweisen.",
        note: "Der Anforderungstext setzt sich aus den Feldern zusammen. Die Erläuterung darunter beschreibt, was gemeint ist, hier das Eigentum oder die interne Zuständigkeit für Informationen und Assets.",
      },
      {
        type: "pairs",
        h: "Sechs Fragen an jede Anforderung.",
        lede: "Links, was Anwenderkatalog und BSI-Standard 300-1 zu dem Feld sagen, rechts, wie BlueProceedings ISMS es verwendet.",
        items: [
          { title: "Was wird gefordert?", ref: "Katalog", bsi: "Handlungswort und Ergebnis sagen, was zu tun ist und was danach gelten soll. Die Erläuterung ordnet es fachlich ein.", app: "Die Anforderung steht am Objekt, mit Text, Erläuterung und der Angabe, aus welchem Katalogstand sie kommt." },
          { title: "Wie verbindlich ist sie?", ref: "Anwenderkatalog; BSI-Standard 300-1, Kapitel 4.1.2", bsi: "KANN-Anforderungen sind optional. Eine vorübergehend nicht erfüllte SOLLTE-Anforderung ist zu begründen; eine dauerhafte Nichterfüllung erfordert eine Risikobetrachtung und die Freigabe des Restrisikos. MUSS-Anforderungen erlauben keine Ausnahme oder Risikoakzeptanz.", app: "BlueProceedings ISMS setzt diese Regeln im Arbeitsablauf durch: Bei MUSS sperrt es Ausnahme, Herabstufung und Risikoakzeptanz; vorübergehende MUSS- und SOLLTE-Lücken verlangen Begründung und Frist. Dauerhafte SOLLTE-Lücken werden zu Risikokandidaten; erforderliche Leitungsentscheidungen laufen als formaler Akzeptanzantrag, im regulären Betrieb mit erzwungener Vier-Augen-Trennung." },
          { title: "Für welches Sicherheitsniveau?", ref: "BSI-Standard 300-1, Kapitel 2.6 und 3.4.2", bsi: "Der Standard unterscheidet die Sicherheitsniveaus „normal-SdT“ und „erhöht“. Anforderungen des erhöhten Niveaus sind optionale KANN-Anforderungen und können in der Risikobetrachtung helfen, zusätzliche Maßnahmen zu bestimmen.", app: "Als zusätzliche Steuerungsfunktion versioniert BlueProceedings ISMS ein institutionsweites Mindestniveau mit Eskalationskriterien und führt es durch einen Freigabeprozess. Jeder Informationsverbund erhält sein eigenes Zielniveau: „erhöht“ verlangt eine aktuelle Schutzbedarfsfeststellung für Vertraulichkeit, Integrität und Verfügbarkeit sowie ein passendes Kriterium; eine Abstufung unter das Mindestniveau verlangt eine vollständige, akzeptierte Risikobetrachtung. Daraus leitet die Anwendung die geltenden Anforderungen ab." },
          { title: "Wofür gilt sie?", ref: "BSI-Standard 300-1, Kapitel 3.4.2", bsi: "Die Zielobjektkategorie nennt die Art von Asset, hier Daten. Ein Asset kann mehreren Kategorien zugeordnet sein; Anforderungen übergeordneter Kategorien werden vererbt.", app: "Die Anwendung rechnet die Vererbung entlang der Hierarchie selbst. Die Zuordnung eines Assets zu einer Kategorie bleibt eine begründete Entscheidung." },
          { title: "Was legt die Institution fest?", ref: "Anwenderkatalog; BSI-Standard 300-1, Kapitel 3.5", bsi: "Parameter sind variabel gestaltbare Elemente einer Anforderung. Sie passen sie an den Kontext an, hier an die Frage, wer zuständig ist.", app: "Den Parameterwert führen wir getrennt vom Text der Anforderung, nachvollziehbar von der Blaupause bis zum einzelnen Objekt." },
          { title: "Was belegt die Umsetzung?", ref: "Katalog", bsi: "Das Feld Dokumentation nennt, welche Dokumentation erwartet wird, hier das Inventar der Informationen.", app: "Wir zeigen den Hinweis an, werten ihn aber nicht als Nachweis. Ein Nachweis hat bei uns Gültigkeit und Prüfstatus und wird von Menschen geprüft." },
        ],
      },
      {
        type: "shot",
        h: "Vom Katalog zum Anforderungspaket.",
        paragraphs: [
          "<b>Was veröffentlicht ist:</b> Blaupausen wählen Anforderungen für einen wiederkehrenden Kontext aus. Die Stand-der-Technik-Bibliothek veröffentlicht für Grundschutz++ Quellkataloge, ein OSCAL-Profil und den daraus aufgelösten Anwenderkatalog.",
          "<b>Wie wir es auslegen:</b> In BlueProceedings ISMS ist eine Blaupause eine versionierte Regelmenge auf einem festen Katalogstand, technisch ein OSCAL-Profil. Jeder Ausschluss braucht eine Begründung. Ein neuer Katalogstand ändert die Blaupause nicht still.",
          "Das Bild zeigt eine Blaupause für eine Kommunalverwaltung mit fiktiven Daten: 1.001 geltende Anforderungen aus zwei Katalogen, 40 ausgeschlossen, 2 ergänzt, 7 in der Stufe angepasst.",
        ],
        image: "blueprintOverview",
      },
    ],
    cta: { h: "Den Katalog lesen lassen, nicht abtippen.", text: "BlueProceedings ISMS liest den Anwenderkatalog des BSI ein und ordnet die Anforderungen deinen Objekten zu. Die Startseite zeigt die Pre-Alpha." },
    next: ["/grundschutz-plus-plus/oscal/", "/grundschutz-plus-plus/", "/community/#blaupausen"],
    sources: [
      [BSI_CONTROL_LAYER, "Stand-der-Technik-Bibliothek: Grundschutz++", "Anwenderkatalog als OSCAL-Datei; das Beispiel stammt aus dem Stand vom 03.07.2026"],
      [BSI_STANDARD_300_1, `BSI: ${STANDARD_300_1}`, "Anforderungsanalyse, Sicherheitsniveaus und Bewertung fehlender Umsetzungen"],
      [NIST_OSCAL, "NIST: OSCAL", "Aufbau von Katalogen und Anforderungen"],
    ],
  },

  "/grundschutz-plus-plus/oscal/": {
    title: "OSCAL in Grundschutz++ erklärt",
    description: "OSCAL in Grundschutz++ erklärt: Katalog, Profil, Component Definition und SSP sowie Import und Export mit BlueProceedings ISMS.",
    crumb: "OSCAL",
    h1: "OSCAL in Grundschutz++: was das Format leistet.",
    lede: "OSCAL (Open Security Controls Assessment Language) ist ein offenes Datenformat des NIST für Sicherheitsanforderungen, ihre Umsetzung und ihre Prüfung. Das BSI veröffentlicht Grundschutz++ in diesem Format. Werkzeuge können die Anforderungen deshalb direkt einlesen, und Institutionen tauschen Daten aus, statt sie abzutippen.",
    asOf: GEPRUEFT,
    mailTopic: "OSCAL",
    sections: [
      {
        type: "chain",
        h: "Sieben Modelle, eine Kette.",
        lede: "So beschreibt das NIST die OSCAL-Modelle. Sie trennen, was gefordert ist, wie es umgesetzt wird und was eine Prüfung festgestellt hat; jedes baut auf dem vorigen auf. Das BSI veröffentlicht für Grundschutz++ vor allem die ersten beiden: Kataloge und Profile.",
        items: [
          { title: "Katalog", text: "Die Anforderungen selbst. Bei Grundschutz++ der Anwenderkatalog des BSI." },
          { title: "Profil", text: "Eine Auswahl aus einem oder mehreren Katalogen, mit Ausschlüssen und gesetzten Parametern." },
          { title: "Aufgelöster Katalog", text: "Das Ergebnis eines Profils, als Katalog lesbar." },
          { title: "Component Definition", text: "Wie eine wiederverwendbare Komponente Anforderungen umsetzt, etwa eine Virtualisierungsumgebung." },
          { title: "System Security Plan", text: "Der Umsetzungsstand eines konkreten Systems oder Informationsverbunds." },
          { title: "Assessment Plan und Results", text: "Was geprüft werden soll und was festgestellt wurde." },
          { title: "POA&amp;M", text: "Offene Feststellungen mit Maßnahmen, Verantwortlichen und Fristen." },
        ],
        loop: `<b>Maschinenlesbar ist nicht erfüllt.</b> Ein gültiges OSCAL-Dokument sagt nichts darüber, ob eine Anforderung richtig umgesetzt und wirksam ist. Das bleibt eine fachliche Entscheidung. Wie eine einzelne Anforderung im Katalog aussieht, zeigt die Seite zum <a href="/grundschutz-plus-plus/anwenderkatalog/">Anwenderkatalog</a>.`,
      },
      {
        type: "pairs",
        h: "Was das BSI liefert und wie wir damit arbeiten.",
        lede: "Links, was veröffentlicht ist, rechts, wie BlueProceedings ISMS das Format verwendet.",
        items: [
          { title: "Einlesen", ref: "Stand-der-Technik-Bibliothek", bsi: "Das BSI stellt Anwenderkatalog und Methodik als OSCAL-Dateien in der Stand-der-Technik-Bibliothek auf GitHub bereit.", app: "Wir lesen den Grundschutz++-Katalog und weitere OSCAL-Kataloge ein, jeweils mit Version und Herkunft." },
          { title: "Neue Stände", ref: "Stand-der-Technik-Bibliothek", bsi: "Die Bibliothek wird laufend weiterentwickelt. Ein neuer Stand kann Anforderungen ändern, hinzufügen oder entfernen.", app: "Ein Katalogwechsel ist bei uns ein eigener, von der Anwendung geführter Schritt mit Vergleich und Neubewertung, nie eine stille Änderung im laufenden Informationsverbund." },
          { title: "Anforderungspakete", ref: "Stand-der-Technik-Bibliothek", bsi: "Die Stand-der-Technik-Bibliothek veröffentlicht für Grundschutz++ Quellkataloge, ein OSCAL-Profil und den daraus aufgelösten Anwenderkatalog.", app: "BlueProceedings ISMS importiert diese versionierten Artefakte, führt eigene Blaupausen als nachvollziehbare OSCAL-Profile und löst daraus je Informationsverbund das konkrete Anforderungspaket auf." },
          { title: "Austausch", ref: "NIST OSCAL", bsi: "OSCAL definiert auch Modelle für Umsetzung und Prüfung, damit Werkzeuge und Prüfende Ergebnisse austauschen können.", app: "Die Pre-Alpha gibt Katalog, Profil, Component Definition, System Security Plan, Assessment Plan, Assessment Results und POA&amp;M aus. Die Daten bleiben auf eurer Infrastruktur, bis jemand einen Export bewusst weitergibt." },
        ],
      },
    ],
    cta: { h: "OSCAL rein, OSCAL raus.", text: "BlueProceedings ISMS liest den Grundschutz++-Katalog ein und gibt Ergebnisse wieder im offenen Format aus. Die Startseite zeigt die Pre-Alpha." },
    next: ["/grundschutz-plus-plus/anwenderkatalog/", "/grundschutz-plus-plus/", "/community/"],
    sources: [
      [NIST_OSCAL, "NIST: OSCAL", "Dokumentation aller OSCAL-Modelle"],
      [BSI_OSCAL, "BSI: OSCAL", "Einordnung des Formats durch das BSI"],
      [BSI_BIBLIOTHEK, "BSI: Stand-der-Technik-Bibliothek", "Repository mit den Grundschutz++-Dateien"],
      [BSI_CONTROL_LAYER, "Stand-der-Technik-Bibliothek: Grundschutz++", "Maschinenlesbare Grundschutz++-Artefakte auf Basis von OSCAL"],
    ],
  },
};

Object.assign(FACHSEITEN, SEO_SEITEN);

export const FACHSEITEN_PFADE = Object.keys(FACHSEITEN);
