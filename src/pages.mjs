import { SITE, github, INTEREST_MAIL, AREAS, AREA_START, TIMELINE, GAPS, IMAGES, APP_ORT, FEATURES, CHAIN, ROLES, FAQ, COMMUNITY_KINDS, SUBMISSION_STEPS, SUBMISSION_PRIVACY, LIABILITY, DISCUSSION_CATEGORIES, INDEPENDENCE, TEST_PHASE, B2B_HINWEIS, ALPHA_LIZENZ, UNTERSTUETZUNG, DATENFLUSS, MODELLHINWEIS } from "./content.mjs";
import { LEGAL_PAGES } from "./legal.mjs";
import { FACHSEITEN, FACHSEITEN_PFADE, THEMEN, STANDARD_300_1 } from "./fachseiten.mjs";
import { PRODUKT_THEMEN } from "./seo-pages.mjs";

import fs from "node:fs";
import { createHash } from "node:crypto";
const fassung = (datei) => createHash("sha256").update(fs.readFileSync(new URL(datei, import.meta.url))).digest("hex").slice(0, 10);
const APP_ANSICHTEN = (() => { try { return JSON.parse(fs.readFileSync(new URL("./app-ansichten.json", import.meta.url), "utf8")); } catch { return {}; } })();

export const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const ico = (id, cls = "") => `<svg class="ico ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const formatDate = (iso) => { const [y, m, d] = iso.split("-"); return `${d}.${m}.${y}`; };

const SYMBOLS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="logo" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="34" fill="none" stroke="var(--logo-a)" stroke-width="5.5" stroke-linecap="round" pathLength="99" stroke-dasharray="29 4" transform="rotate(-84 50 50)"/>
<circle cx="50" cy="50" r="21" fill="none" stroke="var(--logo-b)" stroke-width="5.5" stroke-linecap="round" pathLength="99" stroke-dasharray="29 4" transform="rotate(-30 50 50)"/>
<circle cx="50" cy="50" r="8.5" fill="var(--logo-b)"/>
<circle cx="50" cy="7" r="6" fill="var(--logo-a)"/><circle cx="13" cy="71" r="6" fill="var(--logo-a)"/><circle cx="87" cy="71" r="6" fill="var(--logo-a)"/>
</symbol>
<symbol id="i-file" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8zM14 3v5h5M8.5 13h7M8.5 16.5h5"/></symbol>
<symbol id="i-layers" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3 21 8l-9 5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5"/></symbol>
<symbol id="i-stack" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 4h16v5H4zM4 9.5h16v5H4zM4 15h16v5H4zM7.5 6.5h.01M7.5 12h.01M7.5 17.5h.01"/></symbol>
<symbol id="i-box" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 2.8 20.5 7.5v9L12 21.2 3.5 16.5v-9zM3.5 7.5 12 12.2l8.5-4.7M12 12.2v9"/></symbol>
<symbol id="i-alert" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3.5 21.5 20h-19zM12 10v4.5M12 17.2v.3"/></symbol>
<symbol id="i-flag" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M5 21V4M5 4h11l-2 4 2 4H5"/></symbol>
<symbol id="i-report" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M5 20V10M10 20V4M15 20v-7M20 20V8"/></symbol>
<symbol id="i-chat" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4A1.5 1.5 0 0 1 4 14.5z"/></symbol>
<symbol id="i-git" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.1-.65.36-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2"/></symbol>
<symbol id="i-in" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.75h4V21H3zM9.5 9.75h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z"/></symbol>
<symbol id="i-window" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M3 9h6"/></g></symbol>
<symbol id="i-sun" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></g></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 20.2s-7.5-4.5-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.5c0 5.6-7.5 10.1-7.5 10.1z"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
<symbol id="i-loop" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.7 5.6L4 15.3M4 20v-4.7h4.7"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></symbol>
<symbol id="i-zoom" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5"/></symbol>
<symbol id="i-prev" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/></symbol>
<symbol id="i-next" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/></symbol>
<symbol id="i-x" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></symbol>
<symbol id="i-moon" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></symbol>
</defs></svg>`;

const NAV_GRUPPEN = [
  {
    label: "Funktionen",
    klasse: "nav-panel-breit",
    aktiv: (path) => path.startsWith("/funktionen/") || path === "/grundschutz-plus-plus/software/" || path.startsWith("/isms-software/"),
    links: [
      ["/funktionen/", "Alle Funktionen", "Überblick über die Arbeitsbereiche"],
      ["/isms-software/bsi-grundschutz/", "Für BSI-Grundschutz++", "Informationssicherheit nach Standard 300-1"],
      ["/funktionen/erhebung-und-planung/", "Schritt 1: Erhebung und Planung", "Kontext, Rollen und Risikorahmen"],
      ["/funktionen/oscal-katalogverwaltung/", "OSCAL-Katalogverwaltung", "Kataloge importieren und fortschreiben"],
      ["/funktionen/risikomanagement/", "Risikomanagement", "Risiken und Maßnahmen verknüpfen"],
      ["/funktionen/nachweismanagement/", "Nachweismanagement", "Gültigkeit und Prüfung im Blick behalten"],
      ["/funktionen/berichtswesen/", "Berichtswesen", "Änderungen in Berichten erkennen"],
      ["/funktionen/bcm-notfallmanagement/", "BCM & Notfallmanagement", "BIA, Abhängigkeiten und Wiederanlauf"],
      ["/funktionen/learn-while-using/", "Lern-Modus", "Fachliche Hinweise im Arbeitsablauf"],
      ["/funktionen/weiteres/", "Weiteres", "Mehr entdecken und das Projekt unterstützen"],
    ],
  },
  {
    label: "Grundschutz++",
    aktiv: (path) => (path.startsWith("/grundschutz-plus-plus/") && path !== "/grundschutz-plus-plus/software/") || path === "/bsi-standard-300-1/",
    links: [
      ["/grundschutz-plus-plus/", "Grundschutz++ im Überblick", "Methodik und Einordnung"],
      ["/bsi-standard-300-1/", "BSI-Standard 300-1", "Standard, Mindestkriterien und Status"],
      ["/grundschutz-plus-plus/umsetzung/", "Umsetzung", "Vom Geltungsbereich zum laufenden ISMS"],
      ["/grundschutz-plus-plus/anwenderkatalog/", "Anwenderkatalog", "Anforderungen, Praktiken und Parameter"],
      ["/grundschutz-plus-plus/oscal/", "OSCAL erklärt", "Maschinenlesbare Anforderungen"],
      ["/grundschutz-plus-plus/it-grundschutz-migration/", "Umstieg", "Vom IT-Grundschutz zu Grundschutz++"],
      ["/grundschutz-plus-plus/zeitplan/", "Zeitplan", "Veröffentlichung und Übergangsphase"],
    ],
  },
];

const NAV = [
  ["/community/", "Community"],
  ["/neuigkeiten/", "Neuigkeiten"],
  ["/#download", "Download"],
  ["/#fragen", "Fragen"],
];

const navAktiv = (path, href) => path === href;
const navLink = (path, [href, label, beschreibung]) => `<a href="${href}"${navAktiv(path, href) ? ' aria-current="page"' : ""}><span>${label}</span>${beschreibung ? `<small>${beschreibung}</small>` : ""}</a>`;

const desktopNavigation = (path) => NAV_GRUPPEN.map((gruppe) => `<li>
  <details class="nav-group${gruppe.aktiv(path) ? " active" : ""}">
    <summary>${gruppe.label}</summary>
    <div class="nav-panel ${gruppe.klasse ?? ""}">${gruppe.links.map((link) => navLink(path, link)).join("")}</div>
  </details>
</li>`).join("") + NAV.map((link) => `<li>${navLink(path, link)}</li>`).join("");

const mobileNavigation = (path) => NAV_GRUPPEN.map((gruppe) => `<li class="menu-gruppe">
  <span>${gruppe.label}</span>
  <ul>${gruppe.links.map((link) => `<li>${navLink(path, link)}</li>`).join("")}</ul>
</li>`).join("") + NAV.map((link) => `<li>${navLink(path, link)}</li>`).join("");

function pageHead({ title, description, path, robots = "index,follow", jsonld = null, ogType = "website" }) {
  const url = SITE.url + path;
  return `<!DOCTYPE html>
<html lang="de" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robots}">
<meta name="color-scheme" content="dark light">
<meta name="theme-color" content="#fffdf8">
<link rel="canonical" href="${url}">
<meta property="og:locale" content="de_DE">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="BlueProceedings ISMS">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE.url}/images/share.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="BlueProceedings ISMS: Mehr als eine Momentaufnahme. Ein ISMS, das mitläuft.">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/figtree-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/plex-sans-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css?v=${fassung("./styles.css")}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>\n` : ""}<script>try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;if(t==="dark")document.querySelector('meta[name="theme-color"]').content="#050f2e"}catch(e){}</script>
</head>
<body>
${SYMBOLS}
<a class="skip" href="#inhalt">Zum Inhalt springen</a>
<header class="nav">
  <div class="wrap">
    <a class="brand" href="/">${ico("logo")}<span><b>BlueProceedings ISMS</b> <small>für Grundschutz++</small></span><span class="sr">, Startseite</span></a>
    <nav aria-label="Hauptnavigation"><ul class="nav-links">${desktopNavigation(path)}</ul></nav>
    <button class="theme" type="button" data-theme-toggle aria-label="Helle Darstellung" hidden>${ico("i-sun", "sun")}${ico("i-moon", "moon")}</button>
    <a class="btn ghost small nav-in" href="${SITE.linkedin}" rel="noopener" aria-label="BlueProceedings auf LinkedIn folgen">${ico("i-in")}<span>Folgen</span></a>
    <details class="menu"><summary aria-label="Menü">${ico("i-menu", "m-open")}${ico("i-x", "m-close")}</summary>
      <nav aria-label="Menü"><ul>${mobileNavigation(path)}<li><a href="${SITE.linkedin}" rel="noopener">${ico("i-in")}BlueProceedings auf LinkedIn</a></li></ul></nav>
    </details>
  </div>
</header>
<main id="inhalt">`;
}

function pageFoot() {
  const year = new Date().getFullYear();
  return `</main>
<footer>
  <div class="wrap">
    <span>© ${year} BlueProceedings · Bonn</span>
    <nav aria-label="Fußnavigation"><a href="/grundschutz-plus-plus/">Grundschutz++</a><a href="/#ueber">Über</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/barrierefreiheit/">Barrierefreiheit</a><a href="/lizenzen/">Herkunft und Lizenzen</a><a href="${SITE.kofi}" rel="noopener">Projekt unterstützen</a></nav>
    <span>Keine eigenen Analyse- oder Marketing-Cookies, kein eigenes Besuchertracking</span>
  </div>
</footer>
<script src="/site.js?v=${fassung("./site.js")}" defer></script>
</body>
</html>`;
}

const sectionHead = (eyebrow, h, id, lede = "", tag = "h2") => `<div class="section-head">${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}<${tag} id="${id}">${h}</${tag}>${lede ? `<p class="lede">${lede}</p>` : ""}</div>`;

function appKnopf(name) {
  const a = APP_ANSICHTEN[name];
  if (!a) return "";
  return `<div class="shot-float"><button type="button" class="shot-app" aria-label="Wie sieht das in der App aus?" hidden data-app="${esc(JSON.stringify({ src: a.src, w: a.w, h: a.h, mark: a.mark, weiter: a.weiter, ort: APP_ORT[name] ?? "" }))}">${ico("i-window")}<span>Wie sieht das in der App aus?</span></button></div>`;
}

export function screenshot(name, { large = false, bar = "BlueProceedings ISMS · Pre-Alpha", caption = "Fiktive Demo-Daten aus der Pre-Alpha" } = {}) {
  const b = IMAGES[name];
  return `<figure class="shot${large ? " large" : ""}">
<div class="shot-bar"><i></i><i></i><i></i><span>${bar}</span></div>
<div class="shot-body"><a href="${b.src}" class="shot-img"><img src="${b.src}" width="${b.w}" height="${b.h}" alt="${esc(b.alt)}" loading="lazy" decoding="async"></a>${appKnopf(name)}</div>
<figcaption>${caption}</figcaption>
</figure>`;
}

export function screenshotSwitch(names, labels, opts = {}) {
  if (!Array.isArray(names)) return screenshot(names, opts);
  return `<div class="shot-set">
<div class="shot-switch" role="group" aria-label="Ansicht wählen" hidden>${names.map((n, i) => `<button type="button" aria-pressed="${i === 0}">${labels[i]}</button>`).join("")}</div>
${names.map((n) => screenshot(n, opts)).join("\n")}
</div>`;
}

function perimeter() {
  const R = 45.5;
  const nodes = AREAS.map((a, i) => {
    const ang = i * (360 / AREAS.length);
    const rad = ((ang - 90) * Math.PI) / 180;
    const x = (50 + Math.cos(rad) * R).toFixed(2), y = (50 + Math.sin(rad) * R).toFixed(2);
    return `<div class="node${ang > 180 ? " left" : ""}" style="left:${x}%;top:${y}%" data-i="${i}" data-ang="${ang}"${i === AREA_START ? ' aria-current="true"' : ""}><span class="dot"></span><span class="label">${a.title}</span></div>`;
  }).join("");
  const a = AREAS[AREA_START];
  return `<div class="scope" role="group" aria-label="Was BlueProceedings ISMS abdeckt">
<div class="scope-stage">
<svg class="rings" viewBox="0 0 400 400" aria-hidden="true">
<circle cx="200" cy="200" r="182" fill="none" stroke="var(--line)" stroke-width="1"/>
<circle cx="200" cy="200" r="148" fill="none" stroke="var(--logo-a)" stroke-width="9" stroke-linecap="round" pathLength="99" stroke-dasharray="29 4" transform="rotate(-84 200 200)" opacity=".9"/>
<circle cx="200" cy="200" r="98" fill="none" stroke="var(--logo-b)" stroke-width="9" stroke-linecap="round" pathLength="99" stroke-dasharray="29 4" transform="rotate(-30 200 200)"/>
<circle cx="200" cy="200" r="58" fill="none" stroke="var(--line-strong)" stroke-width="1" stroke-dasharray="2 5"/>
</svg>
<div class="sweep" hidden></div>
${nodes}
<div class="scope-center"><b>${AREAS.length}</b>Bereiche, ein Datenstand</div>
</div>
<div class="scope-panel">
<div class="pane" id="panel">
<header><h2 class="h3" data-p="t">${a.title}</h2><span class="tag" data-p="n">Bereich ${AREA_START + 1} von ${AREAS.length}</span></header>
<p class="why" data-p="w">${a.why}</p>
<ul class="chips" data-p="c">${a.items.map((x) => `<li>${x}</li>`).join("")}</ul>
</div>
${AREAS.map((b) => `<div class="pane sizer" aria-hidden="true"><header><span class="h3">${b.title}</span><span class="tag">Bereich 9 von 9</span></header><p class="why">${b.why}</p><ul class="chips">${b.items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("")}
</div>
<button type="button" class="scope-pause" hidden aria-controls="panel">Anhalten</button>
<noscript><ul class="area-list">${AREAS.map((b) => `<li><b>${b.title}:</b> ${b.why}</li>`).join("")}</ul></noscript>
<script type="application/json" id="areas">${JSON.stringify(AREAS)}</script>
</div>`;
}

function postCard(p) {
  return `<article class="post">
<div class="cover" aria-hidden="true">${ico("logo")}<span class="kicker">${esc(p.series || "Beitrag")}</span><b>${esc(p.title)}</b></div>
<div class="body">
<header><time datetime="${p.date}">${formatDate(p.date)}</time><span>BlueProceedings</span></header>
<h2 class="sr">${esc(p.title)}</h2>
<p>${esc(p.teaser)}</p>
<a href="${esc(p.path)}">Beitrag lesen<span class="sr"> (${esc(p.title)})</span> →</a>
</div>
</article>`;
}

function postText(text, links) {
  const inline = (line) => {
    const safe = esc(line);
    return links ? safe.replace(/https:\/\/[^\s<]+/g, (u) => `<a href="${u}" rel="noopener">${u.replace(/^https:\/\//, "")}</a>`) : safe;
  };
  return text.split(/\n{2,}/).map((block) => {
    const out = [];
    let list = null;
    for (const line of block.split("\n")) {
      const m = line.match(/^(–|→|\d+\.)\s+(.*)$/);
      const kind = m ? (m[1] === "–" ? "dash" : m[1] === "→" ? "arrow" : "num") : null;
      if (kind) {
        if (!list || list.kind !== kind) { list = { kind, items: [] }; out.push(list); }
        list.items.push(inline(m[2]));
      } else {
        list = null;
        out.push(/^#\w/.test(line) ? { tags: line.split(/\s+/) } : { line: inline(line) });
      }
    }
    return out.map((o) => {
      if (o.items) return `<${o.kind === "num" ? "ol" : "ul"} class="${o.kind}">${o.items.map((i) => `<li>${i}</li>`).join("")}</${o.kind === "num" ? "ol" : "ul"}>`;
      if (o.tags) return `<p class="tags">${o.tags.map((t) => `<span>${esc(t)}</span>`).join(" ")}</p>`;
      return `<p>${o.line}</p>`;
    }).join("");
  }).join("");
}

function postSections(body) {
  const sections = {};
  for (const part of body.split(/^@@ /m).slice(1)) {
    const [name, ...rest] = part.split("\n");
    sections[name.trim()] = rest.join("\n").trim();
  }
  return sections;
}

const smallScreenNote = () => `<p class="small-note" role="note">${ico("i-window")}<span><b>Hinweis für kleine Bildschirme:</b> Die Funktionen zeigen wir mit Screenshots. Auf einem PC oder Tablet sind sie größer und besser lesbar, die Seite funktioniert dort deutlich besser.</span></p>`;

function postBody(beitrag, teaser) {
  if (!beitrag) return `<div class="prose"><p>${esc(teaser)}</p></div>`;
  const blocks = beitrag.split(/\n{2,}/);
  const head = blocks.slice(0, 2).join("\n\n");
  const rest = blocks.slice(2).join("\n\n");
  if (!rest) return `<div class="prose">${postText(beitrag, false)}</div>`;
  return `<div class="prose">${postText(head, false)}</div>
<details class="more rest" open><summary>Weiterlesen</summary><div class="prose">${postText(rest, false)}</div></details>`;
}

function postStory(p, heading = "h2") {
  const { beitrag, kommentar } = postSections(p.body ?? "");
  const titles = (p.slide_titles ?? "").split("|").map((t) => t.trim()).filter(Boolean);
  const bild = (i) => `/images/news/${esc(p.slides)}/folie-${String(i + 1).padStart(2, "0")}.jpg`;
  const slides = p.slides ? titles.map((t, i) => `<li><a class="slide-open" href="${bild(i)}" data-titel="${esc(t)}"><img src="${bild(i)}" width="1080" height="1350" ${i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} alt="Folie ${i + 1} von ${titles.length}: ${esc(t)}"><span class="slide-zoom" aria-hidden="true">${ico("i-zoom")}</span><span class="sr"> (groß ansehen)</span></a><span>${i + 1} / ${titles.length}</span></li>`).join("") : "";
  const subheading = heading === "h1" ? "h2" : "h3";
  return `<article class="story">
<header class="story-head">
<span class="kicker">${esc(p.series || "Beitrag")}</span>
<${heading}>${esc(p.title)}</${heading}>
<p class="story-meta"><time datetime="${p.date}">${formatDate(p.date)}</time> · Beitrag auf LinkedIn · ${p.slides ? `Karussell mit ${titles.length} Folien` : "Beitrag"}</p>
<a class="btn ghost small" href="${esc(p.linkedin_url)}" rel="noopener">${ico("i-in")}Auf LinkedIn ansehen<span class="sr"> (${esc(p.title)})</span> ↗</a>
</header>
${slides ? `<section class="story-slides" aria-label="Karussell, ${titles.length} Folien"><ol class="slides" tabindex="0">${slides}</ol><p class="hint">Wischen oder scrollen, zum Vergrößern eine Folie antippen. Alle Bilder zeigen fiktive Demodaten. ${p.pdf ? `<a href="/images/news/${esc(p.slides)}/${esc(p.pdf)}" rel="noopener">Karussell als PDF öffnen</a>${p.pdf_size ? ` (${esc(p.pdf_size)})` : ""}` : ""}</p></section>` : ""}
<div class="story-cols">
<section class="story-post" aria-label="Text des Beitrags">
<${subheading} class="label">Der Beitrag</${subheading}>
${postBody(beitrag, p.teaser)}
</section>
${kommentar ? `<aside class="story-comment" aria-label="Erster Kommentar">
<${subheading} class="label">Erster Kommentar</${subheading}>
<div class="prose">${postText(kommentar, true)}</div>
</aside>` : ""}
</div>
</article>`;
}

function postList(posts, max) {
  const list = max ? posts.slice(0, max) : posts;
  if (!list.length && max) return "";
  if (!list.length) {
    return `<div class="empty"><p><b>Noch keine Beiträge.</b> Die Reihe startet auf der LinkedIn-Seite von BlueProceedings. Neue Beiträge erscheinen hier, sobald sie veröffentlicht sind.</p></div>`;
  }
  return `<div class="news">${list.map(postCard).join("")}</div>`;
}

function storyList(posts) {
  if (!posts.length) return postList(posts);
  return posts.map(postStory).join("");
}

function downloadSection(data) {
  const rel = data.release;
  const status = rel
    ? `<p class="dl-status"><b>Version ${esc(rel.tag)}</b> · veröffentlicht am ${formatDate(rel.date)}</p><a class="btn primary" href="${esc(rel.url)}" rel="noopener">${ico("i-box")}Zur Version auf GitHub</a>`
    : `<p class="dl-status"><b>Verfügbar ab ${SITE.firstRelease}</b></p><p>Docker-Container und Installationsanleitung erscheinen mit der ersten Version. Bis dahin zeigen die Beiträge auf LinkedIn, was entsteht.</p>`;
  return `<section class="band alt" id="download" aria-labelledby="dl-title">
<div class="wrap">
${sectionHead("", "Läuft bei euch. Die Produktdaten bleiben im Standardbetrieb auf eurer Infrastruktur.", "dl-title", DATENFLUSS)}
<div class="download">
<div>
<div class="coming${rel ? " released" : ""}">
<div class="coming-ring" aria-hidden="true">${ico("logo")}</div>
<div class="coming-text">${status}</div>
</div>
<div class="repos">
<a class="repo" href="${github(SITE.repoCode)}" rel="noopener">${ico("i-box")}<span><b>${SITE.githubOrg}/${SITE.repoCode}</b><span>Container, Installation, Sicherheitshinweise · ${rel ? "verfügbar" : "ab " + SITE.firstRelease}</span></span></a>
<a class="repo" href="${github(SITE.repoCommunity)}" rel="noopener">${ico("i-git")}<span><b>${SITE.githubOrg}/${SITE.repoCommunity}</b><span>Vorlagen, Erfahrungen, Diskussionen · Diskussionen jetzt offen</span></span></a>
</div>
</div>
<dl class="facts">
<div><dt>Stand</dt><dd>${rel ? "Erste Version veröffentlicht" : `Pre-Alpha, erste Version für ${SITE.firstRelease} geplant`}</dd></div>
<div><dt>Betrieb</dt><dd>On-Premises per Docker, ohne Hersteller-Cloud, ohne Zugriff von BlueProceedings auf Produktdaten</dd></div>
<div><dt>Daten</dt><dd>Verschlüsselte Datenbank auf eigener Infrastruktur. Daten verlassen sie nur durch einen bewusst erzeugten Export, etwa im offenen Format OSCAL.</dd></div>
<div><dt>Alpha-Lizenz</dt><dd>Unentgeltlich. Sie endet für alle Alpha-Installationen gemeinsam spätestens zwei Jahre nach dem allgemeinen Veröffentlichungsdatum der Alpha. Enddatum und Bedingungen stehen vor dem Download. Für spätere Versionen sind keine Preise zugesagt.</dd></div>
<div><dt>Methodik</dt><dd>Grundschutz++-Katalog des BSI im OSCAL-Format, weitere OSCAL-Kataloge importierbar</dd></div>
<div><dt>Für wen</dt><dd>Nur Unternehmer, juristische Personen des öffentlichen Rechts und öffentlich-rechtliche Sondervermögen, keine Verbraucher</dd></div>
</dl>
<p class="muted">${UNTERSTUETZUNG} <a href="${SITE.kofi}" rel="noopener">Projekt unterstützen (Ko-fi)</a></p>
<p class="muted">${B2B_HINWEIS} Die Angabe wird bei der Lizenzvergabe ausdrücklich bestätigt.</p>
</div>
${rel ? "" : `<section class="test-phase" aria-labelledby="test-title">
<div><h3 id="test-title">Vorher testen: Bewerbung für die Testphase ab ${TEST_PHASE.start}</h3>
<p>Für die geplante Testphase ab dem ${TEST_PHASE.start} können sich bis zu ${TEST_PHASE.seats === 11 ? "elf" : TEST_PHASE.seats} Personen aus der ISMS-Praxis bewerben. Wir suchen Menschen, die regelmäßig ausprobieren und offen sagen, was fehlt, hakt oder unklar ist. Die Auswahl erfolgt manuell nach diesen Voraussetzungen. Eine Bewerbung begründet keinen Anspruch auf Teilnahme, Support oder eine spätere Lizenz. Getestet wird mit Übungsdaten, nicht mit dem echten ISMS. Wie wir mit Bewerbungen umgehen, steht in der <a href="/datenschutz/#alpha">Datenschutzerklärung</a>.</p></div>
<a class="btn primary" href="${TEST_PHASE.mail}">${ico("i-mail")}Für die Testphase bewerben</a>
</section>`}
</div>
</section>`;
}

function discussions(data) {
  const d = data.discussions ?? [];
  const list = d.length
    ? `<ul class="discussions">${d.map((x) => `<li><a href="${esc(x.url)}" rel="noopener">${esc(x.title)}</a><span>${esc(x.category)} · ${x.replies} ${x.replies === 1 ? "Antwort" : "Antworten"}</span></li>`).join("")}</ul>`
    : `<p class="muted">Die Diskussionen sind eröffnet. Kategorien: ${DISCUSSION_CATEGORIES.join(", ")}.</p>`;
  return `<div class="side-card">
<h3>Aktuell diskutiert</h3>
${list}
<a class="btn ghost" href="${github(SITE.repoCommunity)}/discussions" rel="noopener">${ico("i-git")}Zu den Diskussionen</a>
</div>`;
}

const RULE = `<div class="side-card rule"><h3>Eine Regel vorab</h3><p>Keine echten Unternehmensdaten, keine Namen, keine vertraulichen Sicherheitsdetails. Beschreibe alles so, dass niemand auf deine Institution schließen kann. BlueProceedings ISMS prüft Vorlagen vor der Einreichung auf solche Angaben, aber ein Muster ist keine Garantie.</p><a href="/community/#datenschutz">Was beim Einreichen mit deinen Daten passiert</a></div>`;

function chain() {
  return `<section class="band alt" id="kette" aria-labelledby="chain-title">
<div class="wrap">
${sectionHead("", "Eine Kette statt Dateiinseln.", "chain-title", "In BlueProceedings ISMS weiß jede Angabe, woher sie kommt und was von ihr abhängt. Ändert sich ein Glied, wird nach dem erfassten Stand sichtbar, was neu zu bewerten sein könnte, statt dass ein alter Stand weiter grün aussieht.")}
<ol class="chain">${CHAIN.map((k) => `<li><b>${k.title}</b><span>${k.text}</span></li>`).join("")}</ol>
<p class="chain-loop">${ico("i-loop")}<span><b>Und wieder von vorn.</b> Neue Komponente, geänderter Schutzbedarf, abgelaufener Nachweis oder ein neuer Katalogstand: BlueProceedings ISMS markiert, was betroffen sein kann, und Berichte wie das Sicherheitskonzept zeigen, seit wann und aus welchem Grund sie nicht mehr zum Datenstand passen.</span></p>
</div>
</section>`;
}

function roles() {
  return `<section class="band" id="rollen" aria-labelledby="roles-title">
<div class="wrap">
${sectionHead("", "Gebaut für alle, die ein ISMS tragen.", "roles-title", "Ein ISMS hängt selten an einer Person, auch wenn es sich oft so anfühlt. BlueProceedings ISMS gibt jeder Rolle die Antwort auf ihre eigene Frage, aus demselben Datenstand, und zeigt, wer einspringt, wenn jemand fehlt.")}
<dl class="roles">${ROLES.map((r) => `<div><dt>${r.role}<span>${r.who}</span></dt><dd><q>${r.question}</q><p>${r.answer}</p></dd></div>`).join("")}</dl>
</div>
</section>`;
}

function faq() {
  return `<section class="band" id="fragen" aria-labelledby="faq-title">
<div class="wrap faq-wrap">
${sectionHead("", "Häufige Fragen", "faq-title", `Was hier nicht steht, beantworten wir gern per E-Mail an <a href="mailto:${SITE.mail}">${SITE.mail}</a>.`)}
<div class="faq">${FAQ.map((q) => `<details><summary>${q.q}</summary><p>${q.a}</p></details>`).join("")}</div>
</div>
</section>`;
}

const HOME_LD = [
  { "@context": "https://schema.org", "@type": "Organization", name: SITE.company, url: SITE.url, email: SITE.mail, logo: `${SITE.url}/favicon.svg`, sameAs: [SITE.linkedin, github()], address: { "@type": "PostalAddress", addressLocality: "Bonn", addressCountry: "DE" } },
  { "@context": "https://schema.org", "@type": "SoftwareApplication", name: SITE.name, url: SITE.url, applicationCategory: "BusinessApplication", operatingSystem: "Self-hosted environment using Docker", inLanguage: "de", publisher: { "@type": "Organization", name: SITE.company }, description: "ISMS-Software für BSI Grundschutz++ mit OSCAL-Katalogverwaltung, Risikomanagement, Nachweisen, Berichtswesen und BCM. On-Premises per Docker; derzeit Pre-Alpha." },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })) },
];

const supportSection = () => `<section class="band support" id="unterstuetzen" aria-labelledby="sup-title">
<div class="wrap support-grid">
<div class="stack">
<span class="eyebrow">Freiwillig, ohne Gegenleistung</span>
<h2 id="sup-title">Hilf mit, dass <span class="nw">BlueProceedings ISMS</span> fertig wird.</h2>
<p class="about-lead">Ein ISMS, das mitläuft, entsteht nicht nebenbei. Je mehr Zeit in dieses Projekt fließen kann, desto sorgfältiger wird das Ergebnis. Deshalb die Bitte: Wenn dir der Ansatz etwas wert ist, unterstütze das Projekt.</p>
<p>Unterstützung ist freiwillig und nie Voraussetzung, um BlueProceedings ISMS auszuprobieren oder zu nutzen. Sie begründet keinen Anspruch auf Funktionen, Support, Verfügbarkeit oder einen Veröffentlichungstermin.</p>
<div class="hero-actions"><a class="btn primary" href="${SITE.kofi}" rel="noopener">${ico("i-heart")}Projekt unterstützen</a></div>
<p class="muted small">Du wechselst dabei zu Ko-fi, einem externen Anbieter. Hinweise dazu stehen in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
</div>
<ul class="support-list" aria-label="Wofür deine Unterstützung stehen kann">
<li>${ico("i-box")}<div><b>Ein eigenständiges Produkt</b><span>Unabhängig entwickelt, nicht im Auftrag eines Arbeitgebers. Ein Werkzeug, das aus der ISMS-Praxis kommt.</span></div></li>
<li>${ico("i-layers")}<div><b>Datenhoheit bleibt bei dir</b><span>On-Premises per Docker, ohne Hersteller-Cloud. Das ist aufwendiger zu bauen und zu prüfen als ein Dienst, den man einfach betreibt.</span></div></li>
<li>${ico("i-loop")}<div><b>Sorgfalt statt Eile</b><span>Mehr Zeit für Tests, Dokumentation und saubere Nachweise, damit „veraltet“ auch wirklich als veraltet erscheint.</span></div></li>
<li>${ico("i-chat")}<div><b>Raum für die Community</b><span>Vorlagen prüfen, Rückmeldungen auswerten und Erfahrungen aus der Praxis sauber einarbeiten.</span></div></li>
</ul>
</div>
</section>`;

export function homePage({ posts, data }) {
  return pageHead({
    title: "Grundschutz++ ISMS-Software & Werkzeug | BlueProceedings",
    description: "BlueProceedings ISMS: Software für BSI Grundschutz++ mit OSCAL, Risikomanagement, Nachweisen, Berichtswesen und BCM. On-Premises per Docker.",
    path: "/",
    jsonld: HOME_LD,
  }) + `
<section class="hero" aria-labelledby="hero-title">
<div class="wrap">
<div class="hero-copy">
<span class="eyebrow"><span>BlueProceedings ISMS · Grundschutz++ Software · <span class="nw">Pre-Alpha</span></span></span>
<h1 id="hero-title">ISMS-Software für BSI Grundschutz++.<span class="accent">Mehr als eine Momentaufnahme.</span></h1>
<p class="lede">BlueProceedings ISMS verbindet die Anforderungen des BSI Grundschutz++ mit Risiken, Maßnahmen, Verantwortlichkeiten und Nachweisen. Das Werkzeug nutzt den maschinenlesbaren OSCAL-Katalog und macht sichtbar, wenn sich Grundlagen verändern oder Berichte nicht mehr aktuell sind.</p>
<div class="hero-actions"><a class="btn primary" href="#funktionen">So sieht es aus</a><a class="btn ghost" href="${INTEREST_MAIL}">${ico("i-mail")}Interesse melden</a></div>
<p class="hero-hint"><span class="hint-text">${ico("i-heart")}Unabhängig entwickelt. Hilf mit, dass es fertig wird.</span><a class="btn ghost small" href="#unterstuetzen">Projekt unterstützen</a></p>
<ul class="hero-facts">${["Läuft bei euch: Docker, ohne Hersteller-Cloud", `Erste Version für ${SITE.firstRelease} geplant`, "Alpha-Lizenz unentgeltlich"].map((f) => `<li>${ico("i-check")}${f}</li>`).join("")}</ul>
${smallScreenNote()}
</div>
${perimeter()}
</div>
</section>

<section class="band alt" aria-labelledby="practice-title">
<div class="wrap intro-split">
<div>
${sectionHead("Vom Katalog zur Aufgabe", "Grundschutz++ mit einem ISMS-Werkzeug praktisch umsetzen.", "practice-title")}
</div>
<div class="intro-copy">
<p>Ein maschinenlesbarer Katalog ist der Anfang, nicht das ISMS. In BlueProceedings ISMS wird eine OSCAL-Anforderung dem Objekt zugeordnet, für das sie gilt – etwa einem Geschäftsprozess, einer Information oder einer Komponente. Eine verantwortliche Rolle bewertet die Umsetzung. Bleibt eine Lücke, entsteht daraus nachvollziehbar eine Maßnahme oder eine Risikobetrachtung.</p>
<p>Die Maßnahme erhält Verantwortung, Frist, Abhängigkeiten und Wirksamkeitskriterien. Nachweise bleiben mit Anforderung und Maßnahme verbunden und tragen Gültigkeit und Prüfstatus. Ändert sich später ein Katalogstand, ein Objekt oder ein Risiko, zeigt die Anwendung, welche bereits freigegebenen Aussagen neu geprüft werden müssen. Die fachliche Entscheidung bleibt bei den Menschen; das Werkzeug hält Herkunft, Zusammenhang und Freigabe fest.</p>
<div class="hero-actions"><a class="btn ghost" href="/grundschutz-plus-plus/">Was ist BSI Grundschutz++?</a><a class="btn primary" href="/grundschutz-plus-plus/software/">Grundschutz++ Software und Funktionen</a></div>
</div>
</div>
</section>

<section class="band" aria-labelledby="gaps-title">
<div class="wrap">
${sectionHead("", "Mit der Freigabe ist ein ISMS nicht fertig.", "gaps-title", "Tabellen, Vorlagen und One-Pager halten einen Stand fest. Wer länger mit ISMS arbeitet, kennt die vier Stellen, an denen dieser Stand verloren geht.")}
<dl class="gap-list">${GAPS.map((l) => `<div class="gap"><dt>${l.title}</dt><dd><p>${l.text}</p><span class="answer">${l.answer}</span></dd></div>`).join("")}</dl>
<div class="gaps-shot">
<div class="shot-lead"><h3>Veraltet statt falsch-grün.</h3><p>Ändert sich nach der Freigabe eine Grundlage, bleibt ein Bericht schnell stehen und sieht trotzdem aktuell aus.</p><p>BlueProceedings ISMS markiert das Sicherheitskonzept und die übrigen Berichte dann als veraltet. Je Ursache steht dort, wann sie sich zuletzt geändert hat, wie oft und wer in welcher Rolle. Neu erzeugen lässt sich der Bericht mit einem Klick.</p><p>Im Beispiel trägt der Informationsverbund Kunden- und Marktpartnerportal den Hinweis „Das Sicherheitskonzept (Bericht) ist veraltet“, letzter Stand vom 30.09.2026. Die Risiken hat die Institutionsleitung geändert, das Schutzbedarfsprofil die Informationssicherheitsbeauftragte.</p></div>
${screenshot("staleReport")}
</div>
</div>
</section>

${chain()}

<section class="band" id="funktionen" aria-labelledby="fn-title">
<div class="wrap">
${sectionHead("", "So sieht das in der Pre-Alpha aus.", "fn-title", `${["Eine", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"][FEATURES.length - 1]} Funktionen aus neun Bereichen, so wie sie heute in BlueProceedings ISMS laufen, gezeigt mit fiktiven Demo-Daten. Auf <a href="${SITE.linkedin}" rel="noopener">LinkedIn</a> und unter <a href="/neuigkeiten/">Neuigkeiten</a> werden sie nach und nach einzeln vorgestellt, mit dem Problem, das sie löst.`)}
<ul class="kind-chips feature-links"><li><a href="/funktionen/">Alle Funktionen</a></li><li><a href="/funktionen/erhebung-und-planung/">Schritt 1: Erhebung und Planung</a></li><li><a href="/funktionen/oscal-katalogverwaltung/">OSCAL-Kataloge</a></li><li><a href="/funktionen/risikomanagement/">Risikomanagement</a></li><li><a href="/funktionen/nachweismanagement/">Nachweise</a></li><li><a href="/funktionen/berichtswesen/">Berichte</a></li><li><a href="/funktionen/bcm-notfallmanagement/">BCM &amp; Notfallmanagement</a></li><li><a href="/funktionen/learn-while-using/">Lern-Modus</a></li></ul>
<div class="features">${FEATURES.map((f, i) => `<article class="feature${f.wide ? " wide" : i % 2 ? " flip" : ""}" aria-labelledby="f-${f.id}">
<div class="feature-copy"><span class="area-badge">Bereich ${f.kicker}</span><h3 id="f-${f.id}">${f.title}</h3>${f.text.split("\n\n").map((t) => `<p>${t}</p>`).join("")}<details class="more" open><summary>Mehr dazu</summary><ul class="ticks">${f.points.map((p) => `<li>${p}</li>`).join("")}</ul></details>${f.note ? `<p class="fn-note">${f.note}</p>` : ""}</div>
${screenshotSwitch(f.image, f.imageLabels)}
</article>`).join("")}</div>
</div>
</section>

${roles()}

<section class="band alt" aria-labelledby="ms-title">
<div class="wrap">
${sectionHead("", "Grundschutz++ kommt. BlueProceedings ISMS wächst mit.", "ms-title", "Die Entwicklung begann, als es von Grundschutz++ erst Umrisse gab. Die erste Version erscheint, wenn die Methodik zertifizierbar wird.")}
<ol class="timeline">${TIMELINE.map((z) => `<li${z.current ? ' class="now" aria-current="step"' : ""}><time datetime="${z.date}">${z.when}</time><b>${z.title}</b><span>${z.text}</span></li>`).join("")}</ol>
<div class="topic-teaser"><p><b>Neu bei Grundschutz++?</b> Die Methodik kurz erklärt, mit Quellen beim BSI:</p>${themenChips("")}</div>
</div>
</section>

<section class="band" aria-labelledby="com-title">
<div class="wrap community-teaser">
<div>
${sectionHead("", "Gute Vorlagen entstehen in der Praxis. Teilen wir sie.", "com-title", "Blaupausen, Vorlagen für Informationsverbünde und Komponenten, Berichtsvorlagen und Erfahrungen: offen auf GitHub, vor der Aufnahme nach veröffentlichten Kriterien geprüft, importierbar als lokaler Entwurf.")}
<ul class="kind-chips">${COMMUNITY_KINDS.map((a) => `<li><a href="/community/#${a.id}">${ico(a.ico)}${a.name}</a></li>`).join("")}</ul>
<div class="hero-actions"><a class="btn primary" href="/community/">Zur Community</a><a class="btn ghost" href="${github(SITE.repoCommunity)}/discussions" rel="noopener">${ico("i-git")}Diskussionen</a></div>
</div>
<aside class="side">${discussions(data)}${RULE}</aside>
</div>
</section>

${downloadSection(data)}

${faq()}

<section class="band alt" id="neuigkeiten" aria-labelledby="news-title">
<div class="wrap">
${sectionHead("", "Neu auf LinkedIn", "news-title", posts.length ? "Eine Funktion und das Problem dahinter, regelmäßig bis zur ersten Version." : "Die Beitragsreihe startet in diesen Tagen auf der LinkedIn-Seite von BlueProceedings: eine Funktion und das Problem dahinter, regelmäßig bis zur ersten Version.")}
${postList(posts, 3)}
<div class="news-foot"><a class="btn ghost" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}BlueProceedings auf LinkedIn folgen</a>${posts.length > 3 ? `<a class="btn ghost" href="/neuigkeiten/">Alle Beiträge</a>` : ""}</div>
</div>
</section>

<section class="band" id="ueber" aria-labelledby="about-title">
<div class="wrap about">
<div class="stack">
<h2 id="about-title">Warum BlueProceedings ISMS entsteht</h2>
<p class="about-lead">Grundschutz++ ist maschinenlesbar. Damit kann Software übernehmen, was von Hand kaum zu leisten ist: Angaben laufend pflegen, überwachen und nachvollziehen. Dafür entsteht BlueProceedings ISMS.</p>
</div>
<div class="stack">
<p>BlueProceedings ISMS entsteht seit Anfang 2026 bei BlueProceedings, einem Einzelunternehmen von ${SITE.founder} in Bonn. Die Software baut auf Fachwissen aus der ISMS-Praxis und auf dem Grundschutz++-Katalog auf, den das BSI als offene Daten auf GitHub veröffentlicht.</p>
<p class="independence">${INDEPENDENCE} Es wird nicht im Auftrag eines Arbeitgebers entwickelt.</p>
<div class="hero-actions"><a class="btn ghost" href="mailto:${SITE.mail}">${ico("i-mail")}${SITE.mail}</a></div>
</div>
</div>
</section>

${supportSection()}

<section class="closing" aria-labelledby="cta-title">
<div class="wrap">
<div class="closing-ring" aria-hidden="true">${ico("logo")}</div>
<h2 id="cta-title">Bereit sein, wenn Grundschutz++ zertifizierbar wird.</h2>
<p class="lede">Folge der Entwicklung auf LinkedIn oder sag uns, was dir im ISMS heute am meisten Arbeit macht. Jede Rückmeldung aus der Praxis wird für die weitere Produktplanung ausgewertet; ob und wann ein Vorschlag umgesetzt wird, hängt von Sicherheit, Methodik, Aufwand und Priorität ab.</p>
<div class="hero-actions"><a class="btn primary" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}Auf LinkedIn folgen</a><a class="btn ghost" href="${INTEREST_MAIL}">${ico("i-mail")}Interesse melden</a></div>
</div>
</section>` + pageFoot();
}

export function communityPage({ data }) {
  const entries = data.community ?? [];
  return pageHead({
    title: "Grundschutz++-Community und Vorlagen | BlueProceedings",
    description: "Vorlagen und Erfahrungen für Grundschutz++ teilen: Blaupausen, Informationsverbünde, Komponenten und Berichte, offen auf GitHub unter CC BY-SA 4.0.",
    path: "/community/",
  }) + `
<section class="hero slim" aria-labelledby="c-title">
<div class="wrap">
${sectionHead("Community", "Gute Vorlagen entstehen in der Praxis. Teilen wir sie.", "c-title", "Was eine Institution einmal sauber modelliert hat, muss die nächste nicht neu erfinden. Die Community sammelt Vorlagen und Erfahrungen auf GitHub, prüft sie vor der Veröffentlichung nach formalen und technischen Kriterien und stellt sie unter CC BY-SA 4.0 bereit, wie den Grundschutz++-Katalog selbst.", "h1")}
<p class="hero-facts"><span>Diskussionen jetzt offen</span><span>Einreichungen ab ${SITE.firstRelease}</span><span>CC BY-SA 4.0</span></p>
${smallScreenNote()}
</div>
</section>

<section class="band alt" aria-labelledby="kinds-title">
<div class="wrap">
${sectionHead("", `${["Eine", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht"][COMMUNITY_KINDS.length - 1]} Arten von Beiträgen.`, "kinds-title", "Vorlagen tauschst du als Datei aus, die BlueProceedings ISMS importiert; veröffentlichte Pakete sind signiert. Berichtsvorlagen und Erfahrungen werden als Dokument oder in den Diskussionen geteilt.")}
<div class="tabs" role="tablist" aria-label="Arten von Beiträgen" hidden>${COMMUNITY_KINDS.map((a, i) => `<button type="button" class="tab" role="tab" id="tab-${a.id}" aria-controls="${a.id}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ""}>${ico(a.ico)}${a.name}</button>`).join("")}</div>
${COMMUNITY_KINDS.map((a) => `<div class="kind" id="${a.id}">
<div class="kind-copy">
<div class="kind-head"><span class="kind-ico">${ico(a.ico)}</span><div><h3>${a.name}</h3><p class="kind-summary">${a.summary}</p></div></div>
${a.how.split("\n\n").map((t) => `<p>${t}</p>`).join("")}
<h4>Teilen lohnt sich zum Beispiel für</h4>
<ul class="ticks">${a.shareFor.map((t) => `<li>${t}</li>`).join("")}</ul>
<p class="meta"><span>Format: ${a.format}</span></p>
</div>
${a.image ? screenshotSwitch(a.image, a.imageLabels, a.imageBar ? { bar: a.imageBar } : {}) : ""}
</div>`).join("")}
</div>
</section>

<section class="band" aria-labelledby="path-title">
<div class="wrap">
${sectionHead("Ab der ersten Version", "Vom lokalen Entwurf zur geteilten Vorlage.", "path-title", "BlueProceedings ISMS kommuniziert nicht selbst mit der Community. Einreichungen und Importe erfolgen als bewusste Dateioperationen. Erst wenn du eine exportierte Datei selbst an GitHub oder einen anderen Empfänger übermittelst, verlässt sie deine Infrastruktur.")}
<ol class="steps">${SUBMISSION_STEPS.map((s, i) => `<li><span class="step-n">${i + 1}</span><b>${s.title}</b><p>${s.text}</p></li>`).join("")}</ol>
<div class="submission-privacy">
<h3 id="verantwortung">Verantwortung</h3>
<p>${LIABILITY}</p>
</div>
<div class="submission-privacy">
<h3 id="datenschutz">Was beim Einreichen mit deinen Daten passiert</h3>
<dl>${SUBMISSION_PRIVACY.map((d) => `<div><dt>${d.title}</dt><dd>${d.text}</dd></div>`).join("")}</dl>
<p class="muted">Einzelheiten und Rechtsgrundlagen stehen in der <a href="/datenschutz/#community">Datenschutzerklärung</a>.</p>
</div>
</div>
</section>

<section class="band alt" aria-labelledby="library-title">
<div class="wrap community">
<div>
${sectionHead("", "Veröffentlichte Beiträge", "library-title")}
${entries.length
    ? `<ul class="entries">${entries.map((e) => `<li class="entry"><span class="kind-ico">${ico((COMMUNITY_KINDS.find((k) => k.kind === e.kind) ?? COMMUNITY_KINDS[0]).ico)}</span><div><h3><a href="${esc(e.url)}" rel="noopener">${esc(e.title)}</a></h3><div class="meta"><span>${esc(e.kindName ?? e.kind)}</span><span>v${esc(e.version)}</span><span>${esc(e.license)}</span></div></div></li>`).join("")}</ul>`
    : `<div class="empty"><p><b>Noch keine veröffentlichten Beiträge.</b> Einreichungen sind ab der ersten Version im ${SITE.firstRelease} möglich. Wünsche für Vorlagen kannst du schon jetzt in den Diskussionen sammeln.</p></div>`}
</div>
<aside class="side">${discussions(data)}${RULE}</aside>
</div>
</section>` + pageFoot();
}

export function newsPage({ posts }) {
  return pageHead({
    title: "Neuigkeiten zu BlueProceedings ISMS und Grundschutz++",
    description: "Neuigkeiten von BlueProceedings zu ISMS, Grundschutz++, BSI Standard 300-1, OSCAL, Risikomanagement und BCM – mit eigenem Beitrag und LinkedIn-Quelle.",
    path: "/neuigkeiten/",
  }) + `
<section class="hero slim" aria-labelledby="n-title">
<div class="wrap">
${sectionHead("Neuigkeiten von BlueProceedings", "Eine Funktion und das Problem dahinter.", "n-title", "Alle Beiträge, neueste zuerst. Jeder Beitrag hat hier eine eigene, dauerhaft verlinkbare Seite; die ursprüngliche Veröffentlichung auf LinkedIn bleibt erreichbar.", "h1")}
</div>
</section>
<section class="band alt" aria-label="Beiträge">
<div class="wrap">
${postList(posts)}
<div class="news-foot"><a class="btn ghost" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}BlueProceedings auf LinkedIn folgen</a></div>
</div>
</section>` + pageFoot();
}

export function newsPostPage(p) {
  const crumbs = [["/", "Startseite"], ["/neuigkeiten/", "Neuigkeiten"], [p.path, p.title]];
  const jsonld = [
    { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.teaser, datePublished: p.date, dateModified: p.date, inLanguage: "de", mainEntityOfPage: SITE.url + p.path, image: `${SITE.url}/images/share.png`, author: { "@type": "Person", name: SITE.founder, url: `${SITE.url}/#ueber` }, publisher: { "@type": "Organization", name: SITE.company, url: SITE.url, logo: `${SITE.url}/favicon.svg` } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map(([href, name], n) => ({ "@type": "ListItem", position: n + 1, name, item: SITE.url + href })) },
  ];
  return pageHead({ title: `${p.title} | BlueProceedings`, description: p.teaser, path: p.path, jsonld, ogType: "article" }) + `
<section class="band news-detail" aria-label="Beitrag">
<div class="wrap">
<nav class="crumbs" aria-label="Brotkrümelnavigation"><ol>${crumbs.map(([href, name], n) => n === crumbs.length - 1 ? `<li aria-current="page">${esc(name)}</li>` : `<li><a href="${href}">${esc(name)}</a></li>`).join("")}</ol></nav>
${postStory(p, "h1")}
<div class="news-foot"><a class="btn ghost" href="/neuigkeiten/">Alle Neuigkeiten</a><a class="btn ghost" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}BlueProceedings auf LinkedIn folgen</a></div>
</div>
</section>` + pageFoot();
}

const fachUrl = (path) => SITE.url + path;
const themaTitel = (href) => FACHSEITEN[href]?.crumb ?? (href.startsWith("/community/") ? "Community" : href);

function themenChips(path, gruppe = "grundschutz") {
  const themen = gruppe === "produkt" ? PRODUKT_THEMEN : THEMEN;
  const label = gruppe === "produkt" ? "Funktionen" : "Grundschutz++ Themen";
  return `<nav aria-label="${label}"><ul class="kind-chips topic-chips">${themen.map(([href, text]) => `<li><a href="${href}"${href === path ? ' aria-current="page"' : ""}>${text}</a></li>`).join("")}</ul></nav>`;
}

const gapItems = (items) => `<dl class="gap-list">${items.map((l) => `<div class="gap"><dt>${l.title}</dt><dd><p>${l.text}</p>${l.answer ? `<span class="answer">${l.answer}</span>` : ""}</dd></div>`).join("")}</dl>`;

function oscalFigure(s) {
  return `<figure class="shot oscal">
<div class="shot-bar"><i></i><i></i><i></i><span>Anwenderkatalog · OSCAL, gekürzt</span></div>
<dl class="oscal-rows">${s.rows.map(([code, label]) => `<div><dt>${label}</dt><dd><code>${esc(code)}</code></dd></div>`).join("")}
<div class="oscal-prose"><dt>Anforderungstext</dt><dd>${esc(s.prose)}</dd></div></dl>
<figcaption>${s.note}</figcaption>
</figure>`;
}

function fachSection(s, i) {
  const id = `s${i + 1}`;
  const head = sectionHead("", s.h, id, s.lede ?? "");
  let body = "";
  if (s.type === "gaps") body = gapItems(s.items);
  else if (s.type === "pairs") body = `<dl class="roles pairs">${s.items.map((p) => `<div><dt>${p.title}<span>${p.ref}</span></dt><dd><div><span class="pair-label">Veröffentlicht</span><p>${p.bsi}</p></div><div class="pair-app"><span class="pair-label">Auslegung in BlueProceedings ISMS</span><p>${p.app}</p></div></dd></div>`).join("")}</dl>`;
  else if (s.type === "chain") body = `<ol class="chain">${s.items.map((k) => `<li><b>${k.title}</b><span>${k.text}</span></li>`).join("")}</ol>${s.loop ? `<p class="chain-loop">${ico("i-loop")}<span>${s.loop}</span></p>` : ""}`;
  else if (s.type === "steps") body = `<ol class="steps">${s.items.map((t, n) => `<li><span class="step-n">${n + 1}</span><b>${t.title}</b><p>${t.text}</p></li>`).join("")}</ol>`;
  else if (s.type === "timeline") body = `<ol class="timeline vertical">${s.items.map((z) => `<li${z.now ? ' class="now" aria-current="step"' : ""}><time datetime="${z.date}">${z.when}</time><b>${z.title}</b><span>${z.text}</span></li>`).join("")}</ol>`;
  else if (s.type === "oscal") body = oscalFigure(s);
  else if (s.type === "faq") body = `<div class="faq">${s.items.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join("")}</div>`;
  else if (s.type === "note") return `<section class="band" aria-labelledby="${id}"><div class="wrap"><div class="chain-loop">${ico("i-alert")}<div><h2 class="h3" id="${id}">${s.h}</h2><p>${s.text}</p></div></div></div></section>`;
  else if (s.type === "feature") return `<section class="band" aria-labelledby="${id}"><div class="wrap"><div class="features"><article class="feature wide">
<div class="feature-copy"><span class="area-badge">Aus der Pre-Alpha</span><h2 id="${id}">${s.h}</h2>${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
${screenshotSwitch(s.image, s.imageLabels)}
</article></div></div></section>`;
  else if (s.type === "shot") return `<section class="band${i % 2 ? " alt" : ""}" aria-labelledby="${id}"><div class="wrap gaps-shot fach-shot">
<div class="shot-lead"><h2 id="${id}">${s.h}</h2>${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div>
${screenshotSwitch(s.image, s.imageLabels, { caption: "Auslegung in der Pre-Alpha mit fiktiven Daten · kann sich bis zur ersten Version ändern" })}
</div></section>`;
  return `<section class="band${i % 2 ? " alt" : ""}" aria-labelledby="${id}"><div class="wrap">${head}${body}</div></section>`;
}

function weitereFunktionenHinweis() {
  return `<section class="band" aria-labelledby="weitere-funktionen-title"><div class="wrap"><div class="chain-loop">${ico("i-alert")}<div><h2 class="h3" id="weitere-funktionen-title">Das ist noch nicht alles.</h2><p>Weitere Funktionen sind bereits umgesetzt. Wir bereiten ihre Vorstellung noch vor – schau später wieder vorbei.</p></div></div></div></section>`;
}

export function weiteresPage() {
  const path = "/funktionen/weiteres/";
  return pageHead({ title: "Weiteres | BlueProceedings", description: "Weitere Funktionen von BlueProceedings ISMS werden bald vorgestellt. Folge der Entwicklung und unterstütze das Projekt.", path }) + `
<section class="hero slim" aria-labelledby="weiteres-title">
<div class="wrap">
<nav class="crumbs" aria-label="Brotkrümelnavigation"><ol><li><a href="/">Startseite</a></li><li><a href="/funktionen/">Funktionen</a></li><li aria-current="page">Weiteres</li></ol></nav>
${sectionHead("BlueProceedings ISMS · Pre-Alpha", "Hier entsteht noch mehr.", "weiteres-title", "Diese Seite wächst mit dem Projekt. Weitere Funktionen sind bereits umgesetzt; ihre Vorstellung bereiten wir noch vor. Schau bald wieder vorbei.", "h1")}
<div class="hero-actions"><a class="btn primary" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}Auf LinkedIn folgen</a><a class="btn ghost" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE.url)}" rel="noopener">Seite auf LinkedIn teilen ↗</a></div>
<p class="muted">Wenn dir der Ansatz gefällt, teile die Seite mit anderen und begleite die Entwicklung auf LinkedIn.</p>
</div>
</section>
${weitereFunktionenHinweis()}
${supportSection()}` + pageFoot();
}

export function fachseite(path) {
  const s = FACHSEITEN[path];
  if (!s) throw new Error(`Unbekannte Fachseite: ${path}`);
  const hub = path === "/grundschutz-plus-plus/";
  const productPage = s.topics === "produkt";
  const grundschutzPage = path.startsWith("/grundschutz-plus-plus/");
  const crumbs = s.crumbs ?? [["/", "Startseite"], ...(hub ? [] : productPage ? [["/funktionen/", "Funktionen"]] : grundschutzPage ? [["/grundschutz-plus-plus/", "Grundschutz++"]] : []), [path, s.crumb]];
  const mail = `mailto:${SITE.mail}?subject=${encodeURIComponent(`Interesse an BlueProceedings ISMS (Seite ${s.mailTopic})`)}&body=${encodeURIComponent("Hallo,\n\nwir interessieren uns für BlueProceedings ISMS.\n\nInstitution / Branche:\nWo wir mit Grundschutz++ gerade stehen:\nWas uns heute am meisten Arbeit macht:\n\n")}`;
  const faqItems = s.sections.filter((section) => section.type === "faq").flatMap((section) => section.items);
  const jsonld = [
    { "@context": "https://schema.org", "@type": productPage ? "WebPage" : "Article", headline: s.h1.replace(/\.$/, ""), description: s.description, datePublished: s.asOf, dateModified: s.asOf, inLanguage: "de", mainEntityOfPage: fachUrl(path), image: `${SITE.url}/images/share.png`, author: { "@type": "Person", name: SITE.founder, url: `${SITE.url}/#ueber` }, publisher: { "@type": "Organization", name: SITE.company, url: SITE.url, logo: `${SITE.url}/favicon.svg` } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map(([href, name], n) => ({ "@type": "ListItem", position: n + 1, name, item: fachUrl(href) })) },
    ...(faqItems.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }] : []),
  ];
  const reading = s.reading ?? [["Veröffentlicht", `was das BSI im ${STANDARD_300_1} und in den ergänzenden Quellen herausgegeben hat`], ["Auslegung", "wie BlueProceedings ISMS das in der Pre-Alpha umsetzt"]];
  return pageHead({ title: `${s.title} | BlueProceedings`, description: s.description, path, jsonld, ogType: productPage ? "website" : "article" }) + `
<section class="hero slim" aria-labelledby="f-title">
<div class="wrap">
<nav class="crumbs" aria-label="Brotkrümelnavigation"><ol>${crumbs.map(([href, name], n) => n === crumbs.length - 1 ? `<li aria-current="page">${name}</li>` : `<li><a href="${href}">${name}</a></li>`).join("")}</ol></nav>
${sectionHead(`${productPage ? "Produktstand" : "Grundschutz++"} · geprüft am ${formatDate(s.asOf)}`, s.h1, "f-title", s.lede, "h1")}
<ul class="reading-key" aria-label="So ist diese Seite aufgebaut">${reading.map(([label, text], index) => `<li${index ? ' class="pair-app"' : ""}><b>${label}:</b> ${text}</li>`).join("")}</ul>
${themenChips(path, s.topics)}
</div>
</section>

${s.sections.map(fachSection).join("\n")}
${path !== "/funktionen/" && NAV_GRUPPEN[0].links.some(([href]) => href === path) ? weitereFunktionenHinweis() : ""}

<section class="band alt" aria-labelledby="next-title">
<div class="wrap download">
<div>
${sectionHead("", "Weiterlesen", "next-title")}
<div class="repos">${s.next.map((href) => { const t = FACHSEITEN[href]; const kurz = t ? t.description.split(". ")[0].replace(/\.+$/, "") + "." : "Wiederverwendbare Auswahlen von Anforderungen teilen und importieren."; return `<a class="repo" href="${href}">${ico(t ? "i-file" : "i-layers")}<span><b class="repo-title">${t ? t.h1.replace(/\.$/, "") : "Blaupausen in der Community"}</b><span>${kurz}</span></span></a>`; }).join("")}</div>
</div>
<div class="sources">
<h2 class="h3">Quellen</h2>
<ul>${s.sources.map(([href, label, text]) => `<li><a href="${esc(href)}" rel="noopener">${label}</a><span>${text}</span></li>`).join("")}</ul>
<p class="independence">Geschrieben von ${SITE.founder}, BlueProceedings, zuletzt am ${formatDate(s.asOf)} mit den Quellen abgeglichen. ${productPage ? "Die Funktionsbeschreibung gibt den Stand der Pre-Alpha wieder; methodische Aussagen sind als solche benannt und belegt." : "Was zur Methodik gesagt ist, folgt den Veröffentlichungen des BSI; was zu BlueProceedings ISMS gesagt ist, beschreibt die Pre-Alpha."}</p>
</div>
</div>
</section>

<section class="closing" aria-labelledby="cta-title">
<div class="wrap">
<div class="closing-ring" aria-hidden="true">${ico("logo")}</div>
<h2 id="cta-title">${s.cta.h}</h2>
<p class="lede">${s.cta.text}</p>
<div class="hero-actions"><a class="btn primary" href="/#funktionen">So sieht es aus</a><a class="btn ghost" href="${mail}">${ico("i-mail")}Interesse melden</a></div>
</div>
</section>` + pageFoot();
}

export function legalPage(path) {
  const s = LEGAL_PAGES[path];
  return pageHead({ title: `${s.title} | BlueProceedings`, description: s.description, path }) + `
<section class="band legal" aria-labelledby="l-title">
<div class="wrap narrow">
<span class="eyebrow">Rechtliches</span>
<h1 id="l-title">${s.title}</h1>
<div class="prose">${s.html}</div>
</div>
</section>` + pageFoot();
}

export function errorPage() {
  return pageHead({ title: "Seite nicht gefunden | BlueProceedings ISMS", description: "Diese Seite gibt es nicht.", path: "/404.html", robots: "noindex" }) + `
<section class="band legal" aria-labelledby="e-title">
<div class="wrap narrow">
<span class="eyebrow">404</span>
<h1 id="e-title">Diese Seite gibt es nicht.</h1>
<p class="lede">Vielleicht hilft der Weg zurück zur Startseite oder zur Community.</p>
<div class="hero-actions"><a class="btn primary" href="/">Zur Startseite</a><a class="btn ghost" href="/community/">Zur Community</a></div>
</div>
</section>` + pageFoot();
}

export const LEGAL_PATHS = Object.keys(LEGAL_PAGES);
export { FACHSEITEN_PFADE };
