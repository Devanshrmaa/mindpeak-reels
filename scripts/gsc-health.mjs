/**
 * GSC Health Check — real Search Console API data, no `site:` guesswork.
 * ──────────────────────────────────────────────────────────────────────
 * Usage:
 *   GSC_KEY_FILE=/path/to/service-account.json node scripts/gsc-health.mjs
 *
 * The service account must be added as a user on the
 * `sc-domain:mindpeakinstitute.com` Search Console property.
 * NEVER commit the key file to the repo.
 *
 * Reports:
 *   1. Daily clicks/impressions trend (last 28 days)
 *   2. Top pages + top queries (last 28 days)
 *   3. Sitemap submission status
 *   4. Index state of every sitemap URL (URL Inspection API, ~507 calls —
 *      run with --inspect; respects the 2,000/day quota)
 *
 * Background: prior weekly reports used `site:` searches, which both
 * under-counted indexed pages (claimed 38/40 state hubs unindexed when
 * GSC showed many indexed) and missed that 56 sitemap URLs served
 * noindex. See seo-reports/deep-audit-2026-06-10.md.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';

const KEY_FILE = process.env.GSC_KEY_FILE;
if (!KEY_FILE || !fs.existsSync(KEY_FILE)) {
  console.error('Set GSC_KEY_FILE to the service-account JSON path.');
  process.exit(1);
}
const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
const SITE = 'sc-domain:mindpeakinstitute.com';
const SITE_ENC = encodeURIComponent(SITE);
const BASE = 'https://mindpeakinstitute.com';

async function getToken() {
  const b64url = (b) => Buffer.from(b).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: key.token_uri,
    iat: now,
    exp: now + 3600,
  }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${signer.sign(key.private_key, 'base64url')}`;
  const res = await fetch(key.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Auth failed: ' + JSON.stringify(data));
  return data.access_token;
}

const token = await getToken();
const auth = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

async function searchAnalytics(body) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
    method: 'POST', headers: auth, body: JSON.stringify(body),
  });
  return (await res.json()).rows || [];
}

const today = new Date();
const fmt = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => fmt(new Date(today.getTime() - n * 86400_000));

/* 1. Daily trend */
console.log('═══ DAILY TREND (28d) ═══');
const daily = await searchAnalytics({ startDate: daysAgo(28), endDate: fmt(today), dimensions: ['date'], rowLimit: 31 });
for (const r of daily) console.log(`${r.keys[0]}  clicks=${r.clicks}  impr=${r.impressions}  pos=${r.position.toFixed(1)}`);

/* 2. Top pages + queries */
console.log('\n═══ TOP PAGES (28d) ═══');
const pages = await searchAnalytics({ startDate: daysAgo(28), endDate: fmt(today), dimensions: ['page'], rowLimit: 20 });
for (const r of pages) console.log(`clicks=${r.clicks} impr=${r.impressions} pos=${r.position.toFixed(1)}  ${r.keys[0].replace(BASE, '')}`);

console.log('\n═══ TOP QUERIES (28d) ═══');
const queries = await searchAnalytics({ startDate: daysAgo(28), endDate: fmt(today), dimensions: ['query'], rowLimit: 20 });
for (const r of queries) console.log(`clicks=${r.clicks} impr=${r.impressions} pos=${r.position.toFixed(1)}  ${r.keys[0]}`);

/* 3. Sitemaps */
console.log('\n═══ SITEMAPS ═══');
const sm = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${SITE_ENC}/sitemaps`, { headers: auth });
for (const s of (await sm.json()).sitemap || []) {
  console.log(`${s.path}  lastDownloaded=${(s.lastDownloaded || '?').slice(0, 10)}  errors=${s.errors}  warnings=${s.warnings}`);
}

/* 4. Full index inventory (optional, slow) */
if (process.argv.includes('--inspect')) {
  console.log('\n═══ INDEX INVENTORY (URL Inspection of every sitemap URL) ═══');
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const results = [];
  let done = 0;
  async function inspect(u) {
    for (let attempt = 0; attempt < 3; attempt++) {
      const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
        method: 'POST', headers: auth, body: JSON.stringify({ inspectionUrl: u, siteUrl: SITE }),
      });
      if (r.status === 429) { await new Promise((res) => setTimeout(res, 15000 * (attempt + 1))); continue; }
      const i = (await r.json()).inspectionResult?.indexStatusResult || {};
      return { url: u, coverage: i.coverageState || '?', lastCrawl: (i.lastCrawlTime || '').slice(0, 10) };
    }
    return { url: u, coverage: 'inspect-failed', lastCrawl: '' };
  }
  const queue = [...urls];
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      results.push(await inspect(queue.shift()));
      if (++done % 50 === 0) console.log(`  …${done}/${urls.length}`);
    }
  }));
  const byState = {};
  for (const r of results) byState[r.coverage] = (byState[r.coverage] || 0) + 1;
  console.log('\nSummary:');
  for (const [k, v] of Object.entries(byState).sort((a, b) => b[1] - a[1])) console.log(`  ${v}  ${k}`);
  const out = `seo-reports/index-state-${fmt(today)}.csv`;
  fs.writeFileSync(out, ['url,coverage,last_crawl', ...results.map((r) => `${r.url.replace(BASE, '')},${JSON.stringify(r.coverage)},${r.lastCrawl}`)].join('\n') + '\n');
  console.log(`\nWrote ${out}`);
}
