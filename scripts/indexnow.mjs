import { readdirSync, readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SITE = "https://blueproceedings.de";

export function validiereUrls(urls) {
  return [...new Set(urls.map((raw) => raw.trim()).filter(Boolean).map((raw) => {
    const url = new URL(raw);
    if (url.origin !== SITE || url.username || url.password || url.search || url.hash || url.href !== raw || /[\s\\]/.test(raw) || !(url.pathname.endsWith("/") || url.pathname.endsWith(".html")) || url.pathname === "/404.html") {
      throw new Error("Nur kanonische öffentliche Seiten-URLs des eigenen Hosts sind zulässig; keine Parameter oder Fragmente.");
    }
    return url.href;
  }))];
}

export const sitemapUrls = (xml) => {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!xml.includes("<urlset") || !urls.length) throw new Error("Sitemap konnte nicht verlässlich gelesen werden; keine Meldung.");
  return validiereUrls(urls);
};
export const normal = (html) => createHash("sha256").update(html.replace(/\?v=[0-9a-f]+/g, "").replace(/© \d{4}/g, "©").replace(/\s+/g, " ").trim()).digest("hex");

async function abrufen(url, init = {}, fetcher = fetch) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetcher(url, { ...init, redirect: "error", signal: AbortSignal.timeout(20000) });
    if ((r.status === 429 || r.status >= 500) && attempt < 2) {
      const retry = r.headers.get("retry-after");
      const delay = retry && /^\d+$/.test(retry) ? Number(retry) : retry ? Math.max(0, (Date.parse(retry) - Date.now()) / 1000) : 0;
      if (delay > 10) throw new Error("Suchdienst verlangt eine spätere Wiederholung; Meldung abgebrochen.");
      await new Promise((done) => setTimeout(done, delay > 0 ? delay * 1000 : 1000 * (attempt + 1)));
      continue;
    }
    return r;
  }
}

export async function geaendert({ fetcher = fetch, lese = (url) => {
  const datei = join(root, "dist", new URL(url).pathname, "index.html");
  if (!existsSync(datei)) throw new Error("Lokale Seite aus Sitemap fehlt; Vergleich abgebrochen.");
  return readFileSync(datei, "utf-8");
}, aktuell = sitemapUrls(readFileSync(join(root, "dist", "sitemap.xml"), "utf-8")) } = {}) {
  aktuell = validiereUrls(aktuell);
  const sitemap = await abrufen(`${SITE}/sitemap.xml`, {}, fetcher);
  if (!sitemap.ok) throw new Error("Live-Sitemap nicht erreichbar; keine Änderungsmeldung.");
  const bisher = sitemapUrls(await sitemap.text());
  const raus = bisher.filter((url) => !aktuell.includes(url));
  for (const url of aktuell) {
    const lokal = lese(url);
    const r = await abrufen(url, {}, fetcher);
    if (r.status === 404 || r.status === 410) { raus.push(url); continue; }
    if (!r.ok) throw new Error("Live-Vergleich fehlgeschlagen; keine Änderungsmeldung.");
    if (normal(await r.text()) !== normal(lokal)) raus.push(url);
  }
  return validiereUrls(raus);
}

export async function senden(urls, { fetcher = fetch } = {}) {
  urls = validiereUrls(urls);
  if (!urls.length) { console.log("IndexNow: keine geänderten URLs."); return; }
  if (urls.length > 10000) throw new Error("IndexNow: höchstens 10000 URLs pro Meldung.");
  const keyDateien = readdirSync(join(root, "public")).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  if (keyDateien.length !== 1) throw new Error("Genau eine IndexNow-Schlüsseldatei wird benötigt.");
  const keyDatei = keyDateien[0];
  const key = readFileSync(join(root, "public", keyDatei), "utf-8").trim();
  if (key !== keyDatei.slice(0, -4)) throw new Error("IndexNow-Schlüsseldatei und Inhalt stimmen nicht überein.");
  const antwort = await abrufen("https://api.indexnow.org/indexnow", {
    method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyDatei}`, urlList: urls }),
  }, fetcher);
  if (![200, 202].includes(antwort.status)) throw new Error(`IndexNow: Meldung nicht angenommen (HTTP ${antwort.status}).`);
  console.log(`IndexNow: ${urls.length} URL(s) angenommen (HTTP ${antwort.status}); Indexierung ist damit nicht zugesagt.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const befehl = process.argv[2];
    if (befehl === "geaendert") console.log((await geaendert()).join("\n"));
    else if (befehl === "senden") {
      const text = process.env.URLS ?? (process.stdin.isTTY ? "" : readFileSync(0, "utf-8"));
      await senden(text.split(/\r?\n/));
    } else throw new Error("Aufruf: node scripts/indexnow.mjs geaendert | senden. Nur nach dem Deploy tatsächlich geänderte URLs melden.");
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
