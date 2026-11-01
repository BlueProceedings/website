import { createSign } from "node:crypto";

const SITEMAP = "https://blueproceedings.de/sitemap.xml";
const konto = process.env.GSC_SERVICE_ACCOUNT_JSON;
const site = process.env.GSC_SITE || "sc-domain:blueproceedings.de";
if (!konto) { console.log("Google: Dienstkonto nicht gesetzt, übersprungen."); process.exit(0); }

try {
  const { client_email, private_key } = JSON.parse(konto);
  if (typeof client_email !== "string" || typeof private_key !== "string") throw new Error();
  if (!["sc-domain:blueproceedings.de", "https://blueproceedings.de/"].includes(site)) throw new Error();
  const b64 = (x) => Buffer.from(typeof x === "string" ? x : JSON.stringify(x)).toString("base64url");
  const jetzt = Math.floor(Date.now() / 1000);
  const kopf = b64({ alg: "RS256", typ: "JWT" });
  const inhalt = b64({ iss: client_email, scope: "https://www.googleapis.com/auth/webmasters", aud: "https://oauth2.googleapis.com/token", iat: jetzt, exp: jetzt + 600 });
  const signatur = createSign("RSA-SHA256").update(`${kopf}.${inhalt}`).sign(private_key).toString("base64url");
  const antwortToken = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", redirect: "error", signal: AbortSignal.timeout(20000),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${kopf}.${inhalt}.${signatur}` }),
  });
  if (!antwortToken.ok) throw new Error();
  const token = await antwortToken.json();
  if (typeof token.access_token !== "string" || !token.access_token) throw new Error();
  const antwort = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps/${encodeURIComponent(SITEMAP)}`, {
    method: "PUT", redirect: "error", signal: AbortSignal.timeout(20000),
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  console.log(`Google: Sitemap-Meldung für ${site}, HTTP ${antwort.status}.`);
  if (!antwort.ok) process.exitCode = 1;
} catch {
  console.error("Google: Sitemap konnte nicht gemeldet werden. Dienstkonto, Berechtigungen, Property und Netzwerk prüfen.");
  process.exitCode = 1;
}
