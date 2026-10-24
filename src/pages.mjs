// Page templates as functions returning HTML strings. Everything is prerendered at build time; site.js only adds interaction.
import { SITE, github, INTEREST_MAIL, AREAS, AREA_START, TIMELINE, GAPS, IMAGES, FEATURES, CHAIN, ROLES, FAQ, COMMUNITY_KINDS, SUBMISSION_STEPS, SUBMISSION_PRIVACY, LIABILITY, DISCUSSION_CATEGORIES, INDEPENDENCE, TEST_PHASE } from "./content.mjs";
import { LEGAL_PAGES } from "./legal.mjs";

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
<symbol id="i-sun" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></g></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
<symbol id="i-loop" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.7 5.6L4 15.3M4 20v-4.7h4.7"/></symbol>
<symbol id="i-moon" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></symbol>
</defs></svg>`;

const NAV = [
  ["/#funktionen", "Funktionen"],
  ["/community/", "Community"],
  ["/neuigkeiten/", "Neuigkeiten"],
  ["/#download", "Download"],
  ["/#fragen", "Fragen"],
];

function pageHead({ title, description, path, robots = "index,follow", jsonld = null }) {
  const url = SITE.url + path;
  return `<!doctype html>
<html lang="de" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robots}">
<meta name="color-scheme" content="dark light">
<meta name="theme-color" content="#050f2e">
<link rel="canonical" href="${url}">
<meta property="og:locale" content="de_DE">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RiskScope by BlueProceedings">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE.url}/images/share.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="RiskScope by BlueProceedings: Mehr als eine Momentaufnahme. Ein ISMS, das mitläuft.">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/figtree-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/plex-sans-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>\n` : ""}<script>try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body>
${SYMBOLS}
<a class="skip" href="#inhalt">Zum Inhalt springen</a>
<header class="nav">
  <div class="wrap">
    <a class="brand" href="/" aria-label="RiskScope by BlueProceedings, Startseite">${ico("logo")}<span><b>RiskScope</b><small>by BlueProceedings</small></span></a>
    <nav aria-label="Hauptnavigation"><ul class="nav-links">${NAV.map(([h, t]) => `<li><a href="${h}"${path === h ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}</ul></nav>
    <button class="theme" type="button" data-theme-toggle aria-label="Helle Darstellung" hidden>${ico("i-sun", "sun")}${ico("i-moon", "moon")}</button>
    <a class="btn ghost small" href="${SITE.linkedin}" rel="noopener" aria-label="BlueProceedings auf LinkedIn folgen">${ico("i-in")}<span>Folgen</span></a>
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
    <nav aria-label="Rechtliches"><a href="/#ueber">Über</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="/barrierefreiheit/">Barrierefreiheit</a><a href="/lizenzen/">Herkunft und Lizenzen</a></nav>
    <span>Ohne Cookies, ohne Tracking</span>
  </div>
</footer>
<script src="/site.js" defer></script>
</body>
</html>`;
}

// An eyebrow appears only where it carries information (status, period), not as scaffolding above every section.
const sectionHead = (eyebrow, h, id, lede = "", tag = "h2") => `<div class="section-head">${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}<${tag} id="${id}">${h}</${tag}>${lede ? `<p class="lede">${lede}</p>` : ""}</div>`;

export function screenshot(name, { large = false } = {}) {
  const b = IMAGES[name];
  return `<figure class="shot${large ? " large" : ""}">
<div class="shot-bar"><i></i><i></i><i></i><span>RiskScope · Pre-Alpha</span></div>
<a href="${b.src}" class="shot-img"><img src="${b.src}" width="${b.w}" height="${b.h}" alt="${esc(b.alt)}" loading="lazy" decoding="async"></a>
<figcaption>Fiktive Demo-Daten aus der Pre-Alpha</figcaption>
</figure>`;
}

function perimeter() {
  const R = 45.5;
  const nodes = AREAS.map((a, i) => {
    const ang = i * (360 / AREAS.length);
    const rad = ((ang - 90) * Math.PI) / 180;
    const x = (50 + Math.cos(rad) * R).toFixed(2), y = (50 + Math.sin(rad) * R).toFixed(2);
    return `<button type="button" class="node${ang > 180 ? " left" : ""}" style="left:${x}%;top:${y}%" data-i="${i}" data-ang="${ang}" aria-pressed="${i === AREA_START}" aria-controls="panel"><span class="dot"></span><span class="label">${a.title}</span></button>`;
  }).join("");
  const a = AREAS[AREA_START];
  return `<div class="scope" aria-label="Was RiskScope abdeckt">
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
<div class="pane" id="panel" aria-live="polite">
<header><h2 class="h3" data-p="t">${a.title}</h2><span class="tag" data-p="n">Bereich ${AREA_START + 1} von ${AREAS.length}</span></header>
<p class="why" data-p="w">${a.why}</p>
<ul class="chips" data-p="c">${a.items.map((x) => `<li>${x}</li>`).join("")}</ul>
</div>
${AREAS.map((b) => `<div class="pane sizer" aria-hidden="true"><header><span class="h3">${b.title}</span><span class="tag">Bereich 9 von 9</span></header><p class="why">${b.why}</p><ul class="chips">${b.items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("")}
</div>
<noscript><ul class="area-list">${AREAS.map((b) => `<li><b>${b.title}:</b> ${b.why}</li>`).join("")}</ul></noscript>
<script type="application/json" id="areas">${JSON.stringify(AREAS)}</script>
</div>`;
}

function postCard(p) {
  return `<article class="post">
<div class="cover" aria-hidden="true">${ico("logo")}<span class="kicker">${esc(p.series || "Beitrag")}</span><b>${esc(p.title)}</b></div>
<div class="body">
<header><time datetime="${p.date}">${formatDate(p.date)}</time><span>BlueProceedings</span></header>
<h3 class="sr">${esc(p.title)}</h3>
<p>${esc(p.teaser)}</p>
<a href="${esc(p.linkedin_url)}" rel="noopener">Auf LinkedIn lesen<span class="sr"> (${esc(p.title)})</span> ↗</a>
</div>
</article>`;
}

function postList(posts, max) {
  const list = max ? posts.slice(0, max) : posts;
  // Without posts, the home page only needs the note in the section head and the follow button.
  if (!list.length && max) return "";
  if (!list.length) {
    return `<div class="empty"><p><b>Noch keine Beiträge.</b> Die Reihe startet auf der LinkedIn-Seite von BlueProceedings. Neue Beiträge erscheinen hier, sobald sie veröffentlicht sind.</p></div>`;
  }
  return `<div class="news">${list.map(postCard).join("")}</div>`;
}

function downloadSection(data) {
  const rel = data.release;
  const status = rel
    ? `<p class="dl-status"><b>Version ${esc(rel.tag)}</b> · veröffentlicht am ${formatDate(rel.date)}</p><a class="btn primary" href="${esc(rel.url)}" rel="noopener">${ico("i-box")}Zur Version auf GitHub</a>`
    : `<p class="dl-status"><b>Verfügbar ab ${SITE.firstRelease}</b></p><p>Container, Installationsanleitung und Quelltext erscheinen mit der ersten Version. Bis dahin zeigen die Beiträge auf LinkedIn, was entsteht.</p>`;
  return `<section class="band alt" id="download" aria-labelledby="dl-title">
<div class="wrap">
${sectionHead("", "Läuft bei dir. Deine Daten bleiben bei dir.", "dl-title", "RiskScope wird als Container ausgeliefert und auf eigener Infrastruktur betrieben, ohne Hersteller-Cloud.")}
<div class="download">
<div>
<div class="coming${rel ? " released" : ""}">
<div class="coming-ring" aria-hidden="true">${ico("logo")}</div>
<div class="coming-text">${status}</div>
</div>
<div class="repos">
<a class="repo" href="${github(SITE.repoCode)}" rel="noopener">${ico("i-box")}<span><b>${SITE.githubOrg}/${SITE.repoCode}</b><span>Container, Installation, Quelltext · ${rel ? "verfügbar" : "ab " + SITE.firstRelease}</span></span></a>
<a class="repo" href="${github(SITE.repoCommunity)}" rel="noopener">${ico("i-git")}<span><b>${SITE.githubOrg}/${SITE.repoCommunity}</b><span>Vorlagen, Erfahrungen, Diskussionen · Diskussionen jetzt offen</span></span></a>
</div>
</div>
<dl class="facts">
<div><dt>Stand</dt><dd>${rel ? "Erste Version veröffentlicht" : `Pre-Alpha, erste Version für ${SITE.firstRelease} geplant`}</dd></div>
<div><dt>Betrieb</dt><dd>On-Premises per Docker, ohne Hersteller-Cloud</dd></div>
<div><dt>Daten</dt><dd>Verschlüsselte Datenbank auf eigener Infrastruktur, Export in offenen Formaten wie OSCAL</dd></div>
<div><dt>Kosten</dt><dd>Die ersten zwei Jahre kostenfrei für alle Organisationen, danach kostenpflichtig. Die Bedingungen werden vorher veröffentlicht.</dd></div>
<div><dt>Methodik</dt><dd>Grundschutz++-Katalog des BSI im OSCAL-Format, weitere OSCAL-Kataloge importierbar</dd></div>
<div><dt>Lizenz</dt><dd>Wird vor der ersten Version veröffentlicht</dd></div>
</dl>
</div>
${rel ? "" : `<div class="test-phase" aria-labelledby="test-title">
<div><h3 id="test-title">Vorher testen: ${TEST_PHASE.seats} Plätze ab ${TEST_PHASE.start}</h3>
<p>Ab dem ${TEST_PHASE.start} bekommen ${TEST_PHASE.seats === 11 ? "elf" : TEST_PHASE.seats} Freiwillige die Pre-Alpha zum Testen auf eigener Infrastruktur. Wir suchen Menschen aus der ISMS-Praxis, die regelmäßig ausprobieren und offen sagen, was fehlt, hakt oder unklar ist. Aus den Meldungen wählen wir die Teilnehmenden aus. Getestet wird mit Übungsdaten, nicht mit dem echten ISMS.</p></div>
<a class="btn primary" href="${TEST_PHASE.mail}">${ico("i-mail")}Interessiert an der Testteilnahme</a>
</div>`}
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

const RULE = `<div class="side-card rule"><h3>Eine Regel vorab</h3><p>Keine echten Unternehmensdaten, keine Namen, keine vertraulichen Sicherheitsdetails. Beschreibe alles so, dass niemand auf deine Institution schließen kann. RiskScope prüft Vorlagen vor der Einreichung auf solche Angaben, aber ein Muster ist keine Garantie.</p><a href="/community/#datenschutz">Was beim Einreichen mit deinen Daten passiert</a></div>`;

function chain() {
  return `<section class="band alt" id="kette" aria-labelledby="chain-title">
<div class="wrap">
${sectionHead("", "Eine Kette statt Dateiinseln.", "chain-title", "In RiskScope weiß jede Angabe, woher sie kommt und was von ihr abhängt. Ändert sich ein Glied, wird sichtbar, was danach neu zu bewerten ist, statt dass ein alter Stand weiter grün aussieht.")}
<ol class="chain">${CHAIN.map((k) => `<li><b>${k.title}</b><span>${k.text}</span></li>`).join("")}</ol>
<p class="chain-loop">${ico("i-loop")}<span><b>Und wieder von vorn.</b> Neue Komponente, geänderter Schutzbedarf, abgelaufener Nachweis oder ein neuer Katalogstand: RiskScope markiert, was betroffen ist, und Berichte wie das Sicherheitskonzept sagen, seit wann und warum sie nicht mehr stimmen.</span></p>
</div>
</section>`;
}

function roles() {
  return `<section class="band" id="rollen" aria-labelledby="roles-title">
<div class="wrap">
${sectionHead("", "Gebaut für alle, die ein ISMS tragen.", "roles-title", "Ein ISMS hängt selten an einer Person, auch wenn es sich oft so anfühlt. RiskScope gibt jeder Rolle die Antwort auf ihre eigene Frage, aus demselben Datenstand.")}
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
  { "@context": "https://schema.org", "@type": "SoftwareApplication", name: SITE.name, applicationCategory: "SecurityApplication", operatingSystem: "Docker", inLanguage: "de", publisher: { "@type": "Organization", name: SITE.company }, description: "ISMS-Werkzeug für die BSI-Methodik Grundschutz++, On-Premises per Docker. Erste Version für Januar 2027 geplant." },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })) },
];

export function homePage({ posts, data }) {
  return pageHead({
    title: "RiskScope – ISMS-Werkzeug für Grundschutz++ | BlueProceedings",
    description: "RiskScope hält Anforderungen, Risiken, Verantwortung und Nachweise nach Grundschutz++ aktuell und meldet, wenn ein Sicherheitskonzept veraltet. On-Premises per Docker, ohne Hersteller-Cloud. Erste Version für Januar 2027 geplant, danach zwei Jahre kostenfrei.",
    path: "/",
    jsonld: HOME_LD,
  }) + `
<section class="hero" aria-labelledby="hero-title">
<div class="wrap">
<div class="hero-copy">
<span class="eyebrow"><span>ISMS-Werkzeug für Grundschutz++ · <span class="nw">Pre-Alpha</span></span></span>
<h1 id="hero-title">Mehr als eine Momentaufnahme.<span class="accent">Ein ISMS, das mitläuft.</span></h1>
<p class="lede">RiskScope hält Anforderungen, Risiken, Verantwortung und Nachweise aktuell, prüft sie laufend und verteilt die Arbeit auf Fachbereiche, IT und Leitung. So liegt das Sicherheitskonzept nicht im Ordner, während sich die Institution weiterentwickelt.</p>
<div class="hero-actions"><a class="btn primary" href="#funktionen">So sieht es aus</a><a class="btn ghost" href="${INTEREST_MAIL}">${ico("i-mail")}Interesse melden</a></div>
<ul class="hero-facts">${["On-Premises per Docker, ohne Hersteller-Cloud", `Erste Version für ${SITE.firstRelease} geplant`, "Zwei Jahre kostenfrei für alle"].map((f) => `<li>${ico("i-check")}${f}</li>`).join("")}</ul>
</div>
${perimeter()}
</div>
</section>

<section class="band" aria-labelledby="gaps-title">
<div class="wrap">
${sectionHead("", "Schwierig wird, was nach der Freigabe kommt.", "gaps-title", "Tabellen, Vorlagen und One-Pager halten einen Stand fest. Wer länger mit ISMS arbeitet, kennt die vier Stellen, an denen dieser Stand verloren geht.")}
<dl class="gap-list">${GAPS.map((l) => `<div class="gap"><dt>${l.title}</dt><dd><p>${l.text}</p><span class="answer">${l.answer}</span></dd></div>`).join("")}</dl>
<div class="gaps-shot">
<div class="shot-lead"><h3>Veraltet statt falsch-grün.</h3><p>Ändert sich nach der Freigabe eine Grundlage, markiert RiskScope das Sicherheitskonzept und die übrigen Berichte als veraltet. Je Ursache steht dort, wann sie sich zuletzt geändert hat, wie oft und wer in welcher Rolle. Neu erzeugen lässt sich der Bericht mit einem Klick.</p></div>
${screenshot("staleReport")}
</div>
</div>
</section>

${chain()}

<section class="band" id="funktionen" aria-labelledby="fn-title">
<div class="wrap">
${sectionHead("", "So sieht das in der Pre-Alpha aus.", "fn-title", `${["Eine", "Zwei", "Drei", "Vier", "Fünf"][FEATURES.length - 1]} Funktionen aus neun Bereichen, so wie sie heute in RiskScope laufen, gezeigt mit fiktiven Demo-Daten. Auf LinkedIn stellt jeder Beitrag eine weitere vor, mit dem Problem, das sie löst.`)}
<div class="features">${FEATURES.map((f, i) => `<article class="feature${f.wide ? " wide" : i % 2 ? " flip" : ""}" aria-labelledby="f-${f.id}">
<div class="feature-copy"><span class="area-badge">Bereich ${f.kicker}</span><h3 id="f-${f.id}">${f.title}</h3><p>${f.text}</p><ul class="ticks">${f.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>
${screenshot(f.image)}
</article>`).join("")}</div>
</div>
</section>

${roles()}

<section class="band alt" aria-labelledby="ms-title">
<div class="wrap">
${sectionHead("", "Grundschutz++ kommt. RiskScope wächst mit.", "ms-title", "Die Entwicklung begann, als es von Grundschutz++ erst Umrisse gab. Die erste Version erscheint, wenn die Methodik zertifizierbar wird.")}
<ol class="timeline">${TIMELINE.map((z) => `<li${z.current ? ' class="now" aria-current="step"' : ""}><time datetime="${z.date}">${z.when}</time><b>${z.title}</b><span>${z.text}</span></li>`).join("")}</ol>
</div>
</section>

<section class="band" aria-labelledby="com-title">
<div class="wrap community-teaser">
<div>
${sectionHead("", "Gute Vorlagen entstehen in der Praxis. Teilen wir sie.", "com-title", "Blaupausen, Vorlagen für Informationsverbünde und Komponenten, Berichtsvorlagen und Erfahrungen: offen auf GitHub, vor der Aufnahme moderiert, importierbar als lokaler Entwurf.")}
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
<h2 id="about-title">Warum RiskScope entsteht</h2>
<p class="about-lead">Grundschutz++ ist maschinenlesbar. Damit kann Software übernehmen, was von Hand kaum zu leisten ist: Angaben laufend pflegen, überwachen und nachvollziehen. Dafür entsteht RiskScope.</p>
</div>
<div class="stack">
<p>RiskScope entsteht seit Anfang 2026 bei BlueProceedings, einem Einzelunternehmen von ${SITE.founder} in Bonn. Die Software baut auf Fachwissen aus der ISMS-Praxis und auf dem Grundschutz++-Katalog auf, den das BSI als offene Daten auf GitHub veröffentlicht.</p>
<p class="independence">${INDEPENDENCE} Es wird nicht im Auftrag eines Arbeitgebers entwickelt.</p>
<div class="hero-actions"><a class="btn ghost" href="mailto:${SITE.mail}">${ico("i-mail")}${SITE.mail}</a></div>
</div>
</div>
</section>

<section class="closing" aria-labelledby="cta-title">
<div class="wrap">
<div class="closing-ring" aria-hidden="true">${ico("logo")}</div>
<h2 id="cta-title">Bereit sein, wenn Grundschutz++ zertifizierbar wird.</h2>
<p class="lede">Folge der Entwicklung auf LinkedIn oder sag uns, was dir im ISMS heute am meisten Arbeit macht. Jede Rückmeldung aus der Praxis fließt in die erste Version ein.</p>
<div class="hero-actions"><a class="btn primary" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}Auf LinkedIn folgen</a><a class="btn ghost" href="${INTEREST_MAIL}">${ico("i-mail")}Interesse melden</a></div>
</div>
</section>` + pageFoot();
}

export function communityPage({ data }) {
  const entries = data.community ?? [];
  return pageHead({
    title: "Community – Vorlagen und Erfahrungen für Grundschutz++ | RiskScope",
    description: "Blaupausen, Informationsverbund-, Komponentensatz- und Komponentenvorlagen, Berichtsvorlagen und Erfahrungen für Grundschutz++ teilen. Offen auf GitHub unter CC BY-SA 4.0.",
    path: "/community/",
  }) + `
<section class="hero slim" aria-labelledby="c-title">
<div class="wrap">
${sectionHead("Community", "Gute Vorlagen entstehen in der Praxis. Teilen wir sie.", "c-title", "Was eine Institution einmal sauber modelliert hat, muss die nächste nicht neu erfinden. Die Community sammelt Vorlagen und Erfahrungen auf GitHub, prüft sie vor der Veröffentlichung und stellt sie unter CC BY-SA 4.0 bereit, wie den Grundschutz++-Katalog selbst.", "h1")}
<p class="hero-facts"><span>Diskussionen jetzt offen</span><span>Einreichungen ab ${SITE.firstRelease}</span><span>CC BY-SA 4.0</span></p>
</div>
</section>

<section class="band alt" aria-labelledby="kinds-title">
<div class="wrap">
${sectionHead("", `${["Eine", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht"][COMMUNITY_KINDS.length - 1]} Arten von Beiträgen.`, "kinds-title", "Vorlagen tauschst du als signierte Datei aus, die RiskScope importiert. Berichtsvorlagen und Erfahrungen werden als Dokument oder in den Diskussionen geteilt.")}
<div class="tabs" role="tablist" aria-label="Arten von Beiträgen" hidden>${COMMUNITY_KINDS.map((a, i) => `<button class="tab" role="tab" id="tab-${a.id}" aria-controls="${a.id}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ""}>${ico(a.ico)}${a.name}</button>`).join("")}</div>
${COMMUNITY_KINDS.map((a) => `<div class="kind" id="${a.id}">
<div class="kind-copy">
<div class="kind-head"><span class="kind-ico">${ico(a.ico)}</span><div><h3>${a.name}</h3><p class="kind-summary">${a.summary}</p></div></div>
<p>${a.how}</p>
<h4>Teilen lohnt sich zum Beispiel für</h4>
<ul class="ticks">${a.shareFor.map((t) => `<li>${t}</li>`).join("")}</ul>
<p class="meta"><span>Format: ${a.format}</span></p>
</div>
${a.image ? screenshot(a.image) : ""}
</div>`).join("")}
</div>
</section>

<section class="band" aria-labelledby="path-title">
<div class="wrap">
${sectionHead("Ab der ersten Version", "Vom lokalen Entwurf zur geteilten Vorlage.", "path-title", "RiskScope kommuniziert nie selbst nach außen. Einreichen und Importieren sind bewusste Schritte mit Dateien, und jede Seite entscheidet selbst.")}
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
    title: "Neuigkeiten – Beiträge von BlueProceedings auf LinkedIn | RiskScope",
    description: "Alle Beiträge von BlueProceedings zu RiskScope und Grundschutz++, neueste zuerst, mit Link zu LinkedIn.",
    path: "/neuigkeiten/",
  }) + `
<section class="hero slim" aria-labelledby="n-title">
<div class="wrap">
${sectionHead("Neuigkeiten von LinkedIn", "Eine Funktion und das Problem dahinter.", "n-title", "Alle Beiträge der BlueProceedings-Seite, neueste zuerst. Die Karten führen zum Beitrag auf LinkedIn.", "h1")}
</div>
</section>
<section class="band alt" aria-label="Beiträge">
<div class="wrap">
${postList(posts)}
<div class="news-foot"><a class="btn ghost" href="${SITE.linkedin}" rel="noopener">${ico("i-in")}BlueProceedings auf LinkedIn folgen</a></div>
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
  return pageHead({ title: "Seite nicht gefunden | RiskScope", description: "Diese Seite gibt es nicht.", path: "/404.html", robots: "noindex" }) + `
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
