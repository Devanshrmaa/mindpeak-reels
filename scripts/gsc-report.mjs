#!/usr/bin/env node
/**
 * Weekly Google Search Console recovery monitor.
 *
 * Pulls authenticated GSC data (performance trend, top pages/queries,
 * sitemap status) and inspects every indexable coaching page discovered in
 * the live sitemap — producing a dated report and, crucially, a
 * "Request-Indexing TODO" list of pages Google hasn't indexed yet (the key
 * recovery lever after the March 2026 Spam Update).
 *
 * No external dependencies — Node 18+ built-in crypto + fetch only.
 *
 * Auth (a Google service account with `siteFullUser`/owner on the property):
 *   - GSC_SERVICE_ACCOUNT_JSON : the full service-account JSON (string), OR
 *   - GSC_SA_FILE / GOOGLE_APPLICATION_CREDENTIALS : path to that JSON.
 * Config:
 *   - GSC_SITE (default 'sc-domain:mindpeakinstitute.com')
 *   - GSC_ORIGIN (default 'https://mindpeakinstitute.com')
 *
 * Run locally:  GSC_SA_FILE=./gsc-sa.json node scripts/gsc-report.mjs
 * NB: Manual Actions are NOT exposed by the GSC API — check that screen by hand.
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const SITE = process.env.GSC_SITE || 'sc-domain:mindpeakinstitute.com';
const ORIGIN = (process.env.GSC_ORIGIN || 'https://mindpeakinstitute.com').replace(/\/$/, '');

/* ── Load + normalise the service account (tolerates smart-quote pastes) ── */
function loadServiceAccount() {
  let raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    const file = process.env.GSC_SA_FILE || process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (file && fs.existsSync(file)) raw = fs.readFileSync(file, 'utf8');
  }
  if (!raw) {
    console.error('ERROR: no service account. Set GSC_SERVICE_ACCOUNT_JSON or GSC_SA_FILE.');
    process.exit(1);
  }
  // Repair common copy-paste damage: curly quotes, em/en-dash PEM markers.
  raw = raw.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
  let sa;
  try { sa = JSON.parse(raw); } catch (e) { console.error('ERROR parsing SA JSON:', e.message); process.exit(1); }
  if (sa.private_key) {
    sa.private_key = sa.private_key
      .replace(/[—–-]+BEGIN PRIVATE KEY[—–-]+/, '-----BEGIN PRIVATE KEY-----')
      .replace(/[—–-]+END PRIVATE KEY[—–-]+/, '-----END PRIVATE KEY-----');
  }
  return sa;
}

const b64url = (b) => Buffer.from(b).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function getToken(sa, scope) {
  const now = Math.floor(Date.now() / 1000);
  const input = `${b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))}.${b64url(JSON.stringify({
    iss: sa.client_email, scope, aud: sa.token_uri || 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  }))}`;
  const sig = b64url(crypto.sign('RSA-SHA256', Buffer.from(input), sa.private_key));
  const res = await fetch(sa.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: input + '.' + sig }),
  });
  const j = await res.json();
  if (!j.access_token) { console.error('ERROR getting token:', JSON.stringify(j).slice(0, 300)); process.exit(1); }
  return j.access_token;
}

const api = (token) => async (url, opts = {}) => {
  const r = await fetch(url, { ...opts, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...(opts.headers || {}) } });
  return { status: r.status, json: r.status === 204 ? {} : await r.json().catch(() => ({})) };
};

const ymd = (d) => d.toISOString().slice(0, 10);
function daysAgo(n) { const d = new Date(); d.setDate(d.getDate() - n); return d; }
function monthsAgo(n) { const d = new Date(); d.setMonth(d.getMonth() - n); return d; }

async function searchAnalytics(call, body) {
  const { json } = await call(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', body: JSON.stringify(body) });
  return json.rows || [];
}

async function inspect(call, url) {
  const { status, json } = await call('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST', body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
  });
  if (status !== 200) return { url, coverage: `(api ${status})`, verdict: '-' };
  const x = json.inspectionResult?.indexStatusResult || {};
  return { url, coverage: x.coverageState || '(none)', verdict: x.verdict || '-', lastCrawl: x.lastCrawlTime || 'never' };
}

/* Discover indexable coaching pages (keepers + hubs) from the live sitemap. */
async function discoverCoachingUrls() {
  try {
    const r = await fetch(`${ORIGIN}/sitemap.xml`);
    const xml = await r.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    return locs.filter((u) => u.includes('coaching-in-'));
  } catch { return []; }
}

async function mapLimit(items, limit, fn) {
  const out = []; let i = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]); }
  });
  await Promise.all(workers);
  return out;
}

/* ── main ── */
const sa = loadServiceAccount();
const token = await getToken(sa, 'https://www.googleapis.com/auth/webmasters.readonly');
const call = api(token);
const END = ymd(daysAgo(3)); // GSC has ~2-3d latency

// 1. Monthly trend (up to 16 months)
const trendRows = await searchAnalytics(call, { startDate: ymd(monthsAgo(16)), endDate: END, dimensions: ['date'], rowLimit: 500 });
const months = {};
for (const row of trendRows) { const m = row.keys[0].slice(0, 7); (months[m] ??= { c: 0, i: 0 }); months[m].c += row.clicks; months[m].i += row.impressions; }

// 2. 28d vs prior 28d
const totRow = async (s, e) => (await searchAnalytics(call, { startDate: s, endDate: e, dimensions: [], rowLimit: 1 }))[0] || { clicks: 0, impressions: 0, position: 0 };
const cur = await totRow(ymd(daysAgo(30)), END);
const prev = await totRow(ymd(daysAgo(58)), ymd(daysAgo(31)));

// 3. Top pages + queries (28d)
const pages = await searchAnalytics(call, { startDate: ymd(daysAgo(30)), endDate: END, dimensions: ['page'], rowLimit: 10 });
const queries = await searchAnalytics(call, { startDate: ymd(daysAgo(30)), endDate: END, dimensions: ['query'], rowLimit: 10 });

// 4. Sitemaps
const { json: smj } = await call(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps`);
const sitemaps = smj.sitemap || [];

// 5. Inspect indexable coaching pages → Request-Indexing TODO
const coachingUrls = await discoverCoachingUrls();
const inspected = coachingUrls.length ? await mapLimit(coachingUrls, 5, (u) => inspect(call, u)) : [];
const indexed = inspected.filter((r) => /indexed/i.test(r.coverage) && !/not\s/i.test(r.coverage));
const todo = inspected.filter((r) => !indexed.includes(r));

/* ── render report ── */
const DATE = ymd(new Date());
const pct = (a, b) => (b ? `${(((a - b) / b) * 100).toFixed(0)}%` : 'n/a');
const lines = [];
lines.push(`# GSC Recovery Monitor — ${DATE}`);
lines.push(`**Property:** \`${SITE}\` · **Window end:** ${END} · _Generated by scripts/gsc-report.mjs_`);
lines.push(`\n> Manual Actions are NOT exposed by the GSC API — check \`GSC → Security & Manual actions\` by hand.`);

lines.push(`\n## Performance — last 28d vs prior 28d`);
lines.push(`| Window | Clicks | Impressions | Avg pos |`);
lines.push(`|---|---|---|---|`);
lines.push(`| last 28d | ${Math.round(cur.clicks)} | ${Math.round(cur.impressions)} | ${(cur.position || 0).toFixed(1)} |`);
lines.push(`| prior 28d | ${Math.round(prev.clicks)} | ${Math.round(prev.impressions)} | ${(prev.position || 0).toFixed(1)} |`);
lines.push(`| change | ${pct(cur.clicks, prev.clicks)} | ${pct(cur.impressions, prev.impressions)} | — |`);

lines.push(`\n## Monthly trend (clicks / impressions)`);
lines.push('| Month | Clicks | Impr |'); lines.push('|---|---|---|');
for (const m of Object.keys(months).sort()) lines.push(`| ${m} | ${Math.round(months[m].c)} | ${Math.round(months[m].i)} |`);

lines.push(`\n## Indexing of coaching pages (keepers + hubs from sitemap)`);
lines.push(`Discovered **${inspected.length}** indexable coaching URLs · **${indexed.length} indexed** · **${todo.length} NOT yet indexed**.`);
if (todo.length) {
  lines.push(`\n### 🔴 Request-Indexing TODO (paste into GSC URL Inspection)`);
  for (const r of todo) lines.push(`- \`${r.url}\` — ${r.coverage} (last crawl ${r.lastCrawl})`);
}

lines.push(`\n## Top pages (28d)`);
for (const r of pages) lines.push(`- ${Math.round(r.clicks)}c ${Math.round(r.impressions)}i pos${r.position.toFixed(1)} — ${r.keys[0]}`);
lines.push(`\n## Top queries (28d)`);
for (const r of queries) lines.push(`- ${Math.round(r.clicks)}c ${Math.round(r.impressions)}i pos${r.position.toFixed(1)} — ${r.keys[0]}`);

lines.push(`\n## Sitemaps`);
for (const s of sitemaps) lines.push(`- \`${s.path}\` — lastDownloaded:${s.lastDownloaded || 'never'} errors:${s.errors || 0} warnings:${s.warnings || 0} pending:${s.isPending}`);

const report = lines.join('\n') + '\n';
const dir = path.join('seo-reports', 'gsc');
fs.mkdirSync(dir, { recursive: true });
const outFile = path.join(dir, `gsc-${DATE}.md`);
fs.writeFileSync(outFile, report);
console.log(report);
console.log(`\nWrote ${outFile}`);

// GitHub Actions: surface a concise summary in the run.
if (process.env.GITHUB_STEP_SUMMARY) {
  const summary = [
    `### GSC Monitor — ${DATE}`,
    `- Impr 28d: **${Math.round(cur.impressions)}** (${pct(cur.impressions, prev.impressions)} vs prior) · Clicks: ${Math.round(cur.clicks)}`,
    `- Coaching pages indexed: **${indexed.length}/${inspected.length}** · ${todo.length} need Request-Indexing`,
    `- Full report: \`${outFile}\``,
  ].join('\n');
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
}
