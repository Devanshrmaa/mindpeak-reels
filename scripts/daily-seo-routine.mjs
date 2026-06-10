/**
 * Daily SEO Routine — hygiene checks + GSC trend monitor.
 * ────────────────────────────────────────────────────────
 * Usage:
 *   node scripts/daily-seo-routine.mjs                 # production checks only
 *   GSC_KEY_FILE=key.json node scripts/daily-seo-routine.mjs   # + GSC trends
 *
 * Exit code 0 = all green. Non-zero = at least one regression detected
 * (use this to trigger alerts in CI).
 *
 * What it guards (each was a real production regression found 2026-06-10):
 *   - doorway URLs must serve 410, not 200 soft-404s
 *   - topic/notes pages must 301 to parent chapters (prerender bypass bug)
 *   - core sitemap families must NOT carry noindex (56 pages did)
 *   - homepage must keep its server-rendered link hub (was 10 links)
 *   - sitemap must stay clean of doorway patterns and advertise no 404s
 *   - GSC impressions must not fall off a cliff vs the prior week
 */
import fs from 'node:fs';
import crypto from 'node:crypto';

const BASE = 'https://mindpeakinstitute.com';
let failures = 0;
const ok = (msg) => console.log(`  ✅ ${msg}`);
const bad = (msg) => { failures++; console.log(`  ❌ ${msg}`); };

async function head(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: 'manual' });
  return { status: res.status, location: res.headers.get('location') || '', res };
}
async function html(path) {
  const res = await fetch(`${BASE}${path}`);
  return { status: res.status, body: await res.text() };
}

console.log(`═══ DAILY SEO ROUTINE — ${new Date().toISOString().slice(0, 10)} ═══`);

/* ── 1. Doorway removal signals ── */
console.log('\n1. Doorway removal signals');
for (const p of [
  '/blog/best-ap-eamcet-coaching-in-calgary-2026',
  '/blog/cost-of-jee-preparation-in-delhi-2026',
  '/jee-coaching-in-bahrain',
]) {
  const { status } = await head(p);
  status === 410 ? ok(`${p} → 410`) : bad(`${p} → ${status} (expected 410)`);
}

/* ── 2. Consolidation redirects ── */
console.log('\n2. Topic/notes/study-guide consolidation');
for (const [p, target] of [
  ['/jee-physics-kinematics/notes', '/jee-physics-kinematics'],
  ['/jee-physics-kinematics/motion-in-a-straight-line', '/jee-physics-kinematics'],
  ['/how-to-study-projectile-motion-for-jee', '/jee-physics-kinematics'],
]) {
  const { status, location } = await head(p);
  status === 301 && location.includes(target)
    ? ok(`${p} → 301 ${target}`)
    : bad(`${p} → ${status} ${location} (expected 301 ${target})`);
}

/* ── 3. Soft-404 guard ── */
console.log('\n3. Soft-404 guard');
{
  const { status } = await head('/this-page-should-never-exist-xyz123');
  status === 404 ? ok('unknown slug → 404') : bad(`unknown slug → ${status} (expected 404 — soft-404 regression!)`);
  const { status: s2 } = await head('/blog/this-post-should-never-exist-xyz123');
  s2 === 404 ? ok('unknown blog slug → 404') : bad(`unknown blog slug → ${s2} (expected 404)`);
}

/* ── 4. Indexable families must stay indexable ── */
console.log('\n4. No-noindex guard on core sitemap families');
for (const p of [
  '/jee-main-syllabus-2027',
  '/difference-between-dna-and-rna',
  '/jee-physics-important-questions',
  '/jee-mock-test-strategy',
  '/jee-coaching-in-delhi',
  '/jee-coaching-in-maharashtra',
]) {
  const { status, body } = await html(p);
  if (status !== 200) { bad(`${p} → HTTP ${status} (expected 200)`); continue; }
  /noindex/i.test(body.match(/name="robots" content="([^"]*)"/)?.[1] || '')
    ? bad(`${p} serves noindex (regression!)`)
    : ok(`${p} indexable`);
}

/* ── 5. Homepage link hub ── */
console.log('\n5. Homepage server-rendered link equity');
{
  const { body } = await html('/');
  const links = new Set([...body.matchAll(/href="(\/[a-z][^"]*)"/g)].map((m) => m[1]));
  links.size >= 80
    ? ok(`homepage exposes ${links.size} internal links (threshold 80)`)
    : bad(`homepage exposes only ${links.size} internal links (was 112; lazy-loading regression?)`);
}

/* ── 6. Sitemap hygiene ── */
console.log('\n6. Sitemap hygiene');
{
  const { body } = await html('/sitemap.xml');
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  locs.length >= 400 && locs.length <= 1200
    ? ok(`sitemap.xml has ${locs.length} URLs`)
    : bad(`sitemap.xml has ${locs.length} URLs (expected 400–1200)`);
  // Doorway slugs end in -{city}-{year}; /best-jee-coaching-in-india is a
  // legitimate indexable page and must NOT match.
  const doorway = locs.filter((u) =>
    /best-[a-z0-9-]+-coaching-in-[a-z0-9-]+-\d{4}|cost-of-[a-z]+-preparation-in-[a-z0-9-]+-\d{4}|worth-it-from-/.test(u));
  doorway.length === 0
    ? ok('no doorway patterns in sitemap')
    : bad(`doorway URLs leaked into sitemap: ${doorway.slice(0, 3).join(', ')}`);
  // spot-check 5 random sitemap URLs actually serve 200
  const sample = locs.sort(() => 0.5 - Math.random()).slice(0, 5);
  for (const u of sample) {
    const { status } = await head(u.replace(BASE, ''));
    status === 200 ? ok(`sitemap URL live: ${u.replace(BASE, '')}`) : bad(`sitemap URL ${u.replace(BASE, '')} → ${status} (sitemap advertising non-200!)`);
  }
}

/* ── 7. GSC trend (only if key provided) ── */
const KEY_FILE = process.env.GSC_KEY_FILE;
if (KEY_FILE && fs.existsSync(KEY_FILE)) {
  console.log('\n7. GSC trend');
  const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
  const b64url = (b) => Buffer.from(b).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const h = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const c = b64url(JSON.stringify({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: key.token_uri, iat: now, exp: now + 3600 }));
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${h}.${c}`);
  const jwt = `${h}.${c}.${signer.sign(key.private_key, 'base64url')}`;
  const tr = await fetch(key.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}` });
  const token = (await tr.json()).access_token;
  const SITE = encodeURIComponent('sc-domain:mindpeakinstitute.com');
  const fmt = (d) => d.toISOString().slice(0, 10);
  const daysAgo = (n) => fmt(new Date(Date.now() - n * 86400_000));
  // GSC data lags ~2-3 days; compare day -3 against the average of days -10..-4
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${SITE}/searchAnalytics/query`, {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ startDate: daysAgo(10), endDate: daysAgo(3), dimensions: ['date'], rowLimit: 10 }),
  });
  const rows = (await res.json()).rows || [];
  if (rows.length >= 2) {
    const latest = rows[rows.length - 1];
    const prior = rows.slice(0, -1);
    const avgImpr = prior.reduce((a, r) => a + r.impressions, 0) / prior.length;
    console.log(`  latest (${latest.keys[0]}): ${latest.clicks} clicks, ${latest.impressions} impressions (prior-week avg ${avgImpr.toFixed(0)})`);
    latest.impressions < avgImpr * 0.4 && avgImpr > 20
      ? bad(`impressions dropped >60% vs prior week — check GSC manually`)
      : ok('no impression cliff');
  } else {
    console.log('  (not enough GSC rows yet)');
  }
} else {
  console.log('\n7. GSC trend — skipped (set GSC_KEY_FILE to enable)');
}

console.log(`\n═══ ${failures === 0 ? 'ALL CHECKS PASSED' : failures + ' FAILURE(S) — investigate today'} ═══`);
process.exit(failures === 0 ? 0 : 1);
