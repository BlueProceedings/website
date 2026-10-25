// Fetches public data from GitHub into data/github.json at build time: latest release, newest discussions, community index.
// If a repository is missing or GitHub is unreachable, that part stays empty, so the build never fails because of it.
// GITHUB_TOKEN (provided automatically in the Action) is required for discussions, which GitHub only serves via GraphQL.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "../src/content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const token = process.env.GITHUB_TOKEN;
const headers = { Accept: "application/vnd.github+json", "User-Agent": "blueproceedings-website", ...(token ? { Authorization: `Bearer ${token}` } : {}) };

async function attempt(name, fn, fallback) {
  try { return await fn(); } catch (e) { console.warn(`github-data: ${name} unavailable (${e.message}).`); return fallback; }
}

async function json(url, init) {
  const r = await fetch(url, { headers, ...init });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

const release = await attempt("release", async () => {
  const r = await json(`https://api.github.com/repos/${SITE.githubOrg}/${SITE.repoCode}/releases/latest`);
  return { tag: r.tag_name, date: r.published_at.slice(0, 10), url: r.html_url };
}, null);

const discussions = await attempt("discussions", async () => {
  if (!token) throw new Error("no GITHUB_TOKEN");
  const query = `query($o:String!,$n:String!){repository(owner:$o,name:$n){discussions(first:5,orderBy:{field:UPDATED_AT,direction:DESC}){nodes{title url category{name} comments{totalCount}}}}}`;
  const r = await json("https://api.github.com/graphql", { method: "POST", body: JSON.stringify({ query, variables: { o: SITE.githubOrg, n: SITE.repoCommunity } }) });
  if (r.errors) throw new Error(r.errors[0].message);
  return r.data.repository.discussions.nodes.map((d) => ({ title: d.title, url: d.url, category: d.category.name, replies: d.comments.totalCount }));
}, []);

// index.json is maintained in the community repository from the front matter of each contribution.
const community = await attempt("community index", async () => {
  const r = await fetch(`https://raw.githubusercontent.com/${SITE.githubOrg}/${SITE.repoCommunity}/main/index.json`);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const index = await r.json();
  return (index.entries ?? []).filter((e) => e.status === "published").map((e) => ({
    title: e.title, kind: e.kind, kindName: e.kind_name, version: e.version, license: e.license,
    url: `https://github.com/${SITE.githubOrg}/${SITE.repoCommunity}/tree/main/${e.path}`,
  }));
}, []);

const target = join(root, "data", "github.json");
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, JSON.stringify({ fetchedAt: new Date().toISOString(), release, discussions, community }, null, 2) + "\n");
console.log(`github-data: release ${release?.tag ?? "none"}, ${discussions.length} discussions, ${community.length} community entries.`);
