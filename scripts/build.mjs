import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homePage, communityPage, weiteresPage, newsPage, newsPostPage, fachseite, legalPage, errorPage, FACHSEITEN_PFADE, LEGAL_PATHS } from "../src/pages.mjs";
import { FACHSEITEN } from "../src/fachseiten.mjs";
import { SITE } from "../src/content.mjs";
import { PRODUKTIONSBUILD } from "../src/legal.mjs";

if (!/^https:\/\/ko-fi\.com\/[A-Za-z0-9_]+$/.test(SITE.kofi)) throw new Error("SITE.kofi must look like https://ko-fi.com/<name>.");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

export function frontMatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error(`${file}: front matter between --- is missing.`);
  const fields = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
  fields.body = text.slice(m[0].length).trim();
  return fields;
}

function readPosts() {
  const folder = join(root, "content", "posts");
  const posts = [];
  for (const file of readdirSync(folder).filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f))) {
    const post = frontMatter(readFileSync(join(folder, file), "utf-8"), file);
    for (const required of ["title", "date", "teaser"]) if (!post[required]) throw new Error(`${file}: field "${required}" is missing.`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date)) throw new Error(`${file}: date must be YYYY-MM-DD.`);
    if (post.published !== "true") continue;
    if (!/^https:\/\/(www\.linkedin\.com|linkedin\.com|lnkd\.in)\//.test(post.linkedin_url ?? "")) throw new Error(`${file}: published, but linkedin_url is missing or does not point to LinkedIn (linkedin.com or lnkd.in).`);
    post.slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
    post.path = `/neuigkeiten/${post.slug}/`;
    posts.push(post);
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

function readGithubData() {
  const file = join(root, "data", "github.json");
  const empty = { release: null, discussions: [], community: [] };
  if (!existsSync(file)) return empty;
  return { ...empty, ...JSON.parse(readFileSync(file, "utf-8")) };
}

function write(path, html) {
  const target = path.endsWith(".html") ? join(dist, path) : join(dist, path, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}

rmSync(dist, { recursive: true, force: true });
cpSync(join(root, "public"), dist, { recursive: true });
cpSync(join(root, "src", "styles.css"), join(dist, "styles.css"));
cpSync(join(root, "src", "site.js"), join(dist, "site.js"));

const posts = readPosts();
const data = readGithubData();
write("/", homePage({ posts, data }));
write("/community/", communityPage({ data }));
write("/funktionen/weiteres/", weiteresPage());
write("/neuigkeiten/", newsPage({ posts }));
for (const post of posts) write(post.path, newsPostPage(post));
for (const p of FACHSEITEN_PFADE) write(p, fachseite(p));
for (const p of LEGAL_PATHS) write(p, legalPage(p));
write("404.html", errorPage());

const VERBOTEN = [
  [new RegExp("risk" + "scope", "i"), "alter Produktname"],
  [/ohne Cookies, ohne Tracking/i, "zu weitgehende Cookie-/Tracking-Aussage"],
  [/kostenfrei|kostenlos/i, "Preisaussage statt unentgeltlicher Alpha-Lizenz"],
  [/Quelltext/i, "Quelltext wird nicht ausgeliefert (nur Docker-Container)"],
  [/etablierte Verfahren/i, "„etabliert“ ohne Quelle"],
  [/unveränderliche Zeitlinie/i, "Protokoll ist nur anhängbar und hashverkettet, nicht „unveränderlich“"],
  [/fließt in die erste Version ein|fließen direkt ein/i, "Umsetzung von Rückmeldungen wird nicht zugesagt"],
  [/nach bestem Wissen und Gewissen/i, "Moderation: formale, technische und Plausibilitätsprüfung"],
  [/Moderation prüft Inhalt, Rechte und Sicherheit/i, "Moderation garantiert keine Rechte-/Sicherheitsprüfung"],
  [/in der Regel innerhalb von zwei Wochen/i, "Reaktionszeit nicht organisatorisch gedeckt"],
  [/zertifizierungsbereit(?! (macht|sein)|\?)/i, "Zertifizierungsversprechen"],
];
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith(".html") ? [join(dir, e.name)] : []);
const verstoesse = htmlFiles(dist).flatMap((f) => { const s = readFileSync(f, "utf-8"); return VERBOTEN.filter(([re]) => re.test(s)).map(([, warum]) => `${f.slice(dist.length)}: ${warum}`); });
if (verstoesse.length) throw new Error("Unzulässige Aussagen im Build:\n" + verstoesse.join("\n"));
if (PRODUKTIONSBUILD && htmlFiles(dist).some((f) => readFileSync(f, "utf-8").includes("[Anschrift aus"))) throw new Error("Impressum enthält einen Platzhalter.");

const pages = ["/", "/community/", "/funktionen/weiteres/", "/neuigkeiten/", ...posts.map((post) => post.path), ...FACHSEITEN_PFADE, ...LEGAL_PATHS];
const newestCheck = Object.values(FACHSEITEN).map((f) => f.asOf).sort().at(-1);
const priority = (p) => p === "/" ? "1.0" : p === "/grundschutz-plus-plus/" ? "0.9" : FACHSEITEN[p] ? "0.8" : p === "/community/" || p === "/neuigkeiten/" ? "0.6" : "0.2";
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => {
  const lastmod = FACHSEITEN[p]?.asOf ?? posts.find((post) => post.path === p)?.date ?? (p === "/" ? newestCheck : undefined);
  return `  <url><loc>${SITE.url}${p}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<priority>${priority(p)}</priority></url>`;
}).join("\n")}\n</urlset>\n`);
const KI_CRAWLER = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "Claude-Web",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Amazonbot",
  "Meta-ExternalAgent", "Meta-ExternalFetcher", "FacebookBot",
  "Bytespider", "CCBot", "cohere-ai", "cohere-training-data-crawler",
  "DuckAssistBot", "MistralAI-User", "Diffbot", "ImagesiftBot", "Omgilibot", "YouBot", "PhindBot", "AI2Bot",
];
writeFileSync(join(dist, "robots.txt"), `# BlueProceedings ISMS: Crawling und KI-Suche sind erwünscht. Hinweise für Sprachmodelle: ${SITE.url}/llms.txt\n\nUser-agent: *\nAllow: /\nDisallow: /404.html\n\n${KI_CRAWLER.map((a) => `User-agent: ${a}\nAllow: /\nDisallow: /404.html\n`).join("\n")}\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`build: ${pages.length + 1} pages, ${posts.length} published posts, ${data.discussions.length} discussions, release: ${data.release?.tag ?? "none"}`);
