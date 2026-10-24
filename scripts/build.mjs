// Builds the static website into dist/. No dependencies besides Node 20+.
// Sources: content/posts/*.md (post cards), data/github.json (optional, from fetch-github-data.mjs), public/ (images, fonts).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homePage, communityPage, newsPage, legalPage, errorPage, LEGAL_PATHS } from "../src/pages.mjs";
import { SITE } from "../src/content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

/** Reads simple front matter (`key: value`) between `---` lines. A post card needs nothing more. */
export function frontMatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error(`${file}: front matter between --- is missing.`);
  const fields = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
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
    if (!/^https:\/\/(www\.)?linkedin\.com\//.test(post.linkedin_url ?? "")) throw new Error(`${file}: published, but linkedin_url is missing or does not point to linkedin.com.`);
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
write("/neuigkeiten/", newsPage({ posts }));
for (const p of LEGAL_PATHS) write(p, legalPage(p));
write("404.html", errorPage());

const today = new Date().toISOString().slice(0, 10);
const pages = ["/", "/community/", "/neuigkeiten/", ...LEGAL_PATHS];
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`build: ${pages.length + 1} pages, ${posts.length} published posts, ${data.discussions.length} discussions, release: ${data.release?.tag ?? "none"}`);
