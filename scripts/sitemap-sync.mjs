#!/usr/bin/env node
/**
 * sitemap-sync.mjs — keep CONTENT_ANCHOR honest, automatically.
 * ─────────────────────────────────────────────────────────────
 * `CONTENT_ANCHOR` in src/lib/sitemapUrls.ts drives every `lastmod` in every
 * sitemap. The policy (see that file) is that it moves ONLY when indexable
 * content genuinely changed — never on a schedule, because rolling "today"
 * dates were part of the March 2026 spam penalty.
 *
 * The failure mode in practice is the opposite one: content ships and nobody
 * remembers to bump the anchor, so `lastmod` goes stale and crawlers learn to
 * ignore it. This script closes that gap without ever faking freshness:
 *
 *   • It fingerprints the actual indexable URL set (every sitemap group).
 *   • It compares that fingerprint to the one recorded at the last bump.
 *   • It bumps CONTENT_ANCHOR to today ONLY when the URL set really changed.
 *   • If nothing changed, it exits 0 and writes nothing. No diff, no PR.
 *
 * So the anchor moves on real content releases and stays frozen otherwise —
 * which is exactly the stated policy, just enforced by a machine rather than
 * by someone remembering.
 *
 * Usage:
 *   node scripts/sitemap-sync.mjs           # apply a bump if warranted
 *   node scripts/sitemap-sync.mjs --check   # report only, exit 1 if drifted
 */

import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');

const SITEMAP_FILE = resolve(ROOT, 'src/lib/sitemapUrls.ts');
const STATE_FILE = resolve(ROOT, 'seo-reports/sitemap-fingerprint.json');

/* ── Collect the indexable URL set from the real modules ─────────────────── */

const probe = `
import {
  getStaticPaths, getChapterPaths, getQuestionHubPaths, getComparisonPaths,
  getKeptBlogPaths, getExamEventBlogPaths, getExamInfoPaths, getDifferencePaths,
  getCounsellingPaths, getStateHubPaths, getNeetPyqHubPaths,
} from '@/lib/sitemapUrls';
const all = [
  ...getStaticPaths(), ...getChapterPaths(), ...getQuestionHubPaths(),
  ...getComparisonPaths(), ...getKeptBlogPaths(), ...getExamEventBlogPaths(),
  ...getExamInfoPaths(), ...getDifferencePaths(), ...getCounsellingPaths(),
  ...getStateHubPaths(), ...getNeetPyqHubPaths(),
];
console.log('___JSON___' + JSON.stringify([...new Set(all)].sort()));
`;

const probeFile = resolve(ROOT, 'scripts/.sitemap-sync-probe.mts');
let urls;
try {
  writeFileSync(probeFile, probe);
  const raw = execSync(`npx tsx ${JSON.stringify(probeFile)}`, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  urls = JSON.parse(raw.split('___JSON___')[1].trim());
} catch (err) {
  console.error('Could not enumerate sitemap URLs:', err.message);
  process.exit(1);
} finally {
  rmSync(probeFile, { force: true });
}

const fingerprint = createHash('sha256').update(urls.join('\n')).digest('hex').slice(0, 16);

/* ── Compare against the last recorded state ─────────────────────────────── */

const prev = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, 'utf8')) : null;
const src = readFileSync(SITEMAP_FILE, 'utf8');
const anchorMatch = /export const CONTENT_ANCHOR = '(\d{4}-\d{2}-\d{2})';/.exec(src);
if (!anchorMatch) {
  console.error('Could not find CONTENT_ANCHOR in sitemapUrls.ts');
  process.exit(1);
}
const currentAnchor = anchorMatch[1];
const today = new Date().toISOString().slice(0, 10);

if (prev && prev.fingerprint === fingerprint) {
  console.log(`No indexable-URL change (${urls.length} URLs, fingerprint ${fingerprint}).`);
  console.log(`CONTENT_ANCHOR stays ${currentAnchor}. Nothing to do.`);
  process.exit(0);
}

const added = prev ? urls.filter((u) => !prev.urls.includes(u)) : [];
const removed = prev ? prev.urls.filter((u) => !urls.includes(u)) : [];

console.log(`Indexable URL set changed: ${urls.length} URLs (was ${prev ? prev.urls.length : 'unrecorded'}).`);
if (added.length) console.log(`  + ${added.length} added   e.g. ${added.slice(0, 3).join(', ')}`);
if (removed.length) console.log(`  - ${removed.length} removed e.g. ${removed.slice(0, 3).join(', ')}`);

if (checkOnly) {
  console.log('\n--check: drift detected, not writing.');
  process.exit(1);
}

if (currentAnchor === today) {
  console.log(`CONTENT_ANCHOR is already ${today}; only recording the new fingerprint.`);
} else {
  writeFileSync(
    SITEMAP_FILE,
    src.replace(
      /export const CONTENT_ANCHOR = '\d{4}-\d{2}-\d{2}';/,
      `export const CONTENT_ANCHOR = '${today}';`,
    ),
  );
  console.log(`CONTENT_ANCHOR ${currentAnchor} -> ${today}`);
}

writeFileSync(
  STATE_FILE,
  `${JSON.stringify({ fingerprint, count: urls.length, anchor: today, urls }, null, 2)}\n`,
);
console.log(`Recorded fingerprint ${fingerprint} in ${STATE_FILE.replace(ROOT + '/', '')}.`);
