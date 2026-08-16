#!/usr/bin/env node
/**
 * thin-page-audit.mjs — measure the Bing-exclusive thin-page surface.
 * ───────────────────────────────────────────────────────────────────
 * Why this exists: the figure "~14k thin pages" was repeated across
 * bingIndexing.ts, bing-pages.xml, bing-sitemap.xml, robots.txt, the Bing
 * operator doc and docs/geo-llm-strategy.md — and by 2026-08 it was wrong by
 * roughly 3x. Prior consolidation (cityConsolidation, removedSlugs,
 * removedBlogDoorways) had already retired most of the location pages, but
 * nothing re-measured. That stale number was then used to argue an
 * architectural decision (see geo-llm-strategy.md §6 A1), which is exactly
 * how a wrong number does damage.
 *
 * This script re-derives the numbers from the same modules that build
 * bing-pages.xml, so it cannot drift the way a hand-written comment does.
 *
 * Usage:
 *   npm run audit:thin              # human-readable table
 *   npm run audit:thin -- --json    # machine-readable
 *
 * It measures three things:
 *   1. How many URLs bing-pages.xml actually advertises, by family.
 *   2. How thin those pages are — words of unique content per page, parsed
 *      straight out of the question banks.
 *   3. The dilution ratio against the curated Google sitemap, which is the
 *      figure that matters for ChatGPT (it grounds on the Bing index).
 */

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const json = process.argv.includes('--json');

/* ── 1. URL counts, via tsx so the real TS modules are the source ────────── */

const probe = `
import { buildAllPracticeSlugs } from '@/data/practice';
import { buildAllPYQSlugs } from '@/data/pyq';
import { buildAllNEETPracticeSlugs } from '@/data/neet-practice';
import { buildAllNEETPYQSlugs } from '@/data/neet-pyq';
import { getLocationRoutes } from '@/data/cityData';
import { getBingExclusiveUrls, isBingExclusiveThinPage } from '@/lib/bingIndexing';
import {
  getStaticPaths, getChapterPaths, getComparisonPaths, getKeptBlogPaths,
  getExamEventBlogPaths, getExamInfoPaths, getDifferencePaths,
  getCounsellingPaths, getStateHubPaths, getNeetPyqHubPaths,
} from '@/lib/sitemapUrls';

const chapters = (e) => new Set(e.map((x) => x.params.subject + '/' + x.params.chapter)).size;
const banks = {
  'jee-practice':  buildAllPracticeSlugs(),
  'jee-pyq':       buildAllPYQSlugs(),
  'neet-practice': buildAllNEETPracticeSlugs(),
  'neet-pyq':      buildAllNEETPYQSlugs(),
};
const out = { banks: {}, locations: 0, totalBingExclusive: 0, curated: 0 };
for (const [k, v] of Object.entries(banks)) {
  out.banks[k] = {
    questions: v.length,
    eligible: v.filter((x) => isBingExclusiveThinPage(x.slug)).length,
    chapters: chapters(v),
  };
}
out.locations = getLocationRoutes().filter((r) => isBingExclusiveThinPage(r.path)).length;
out.totalBingExclusive = getBingExclusiveUrls().length;
out.curated = [
  getStaticPaths(), getChapterPaths(), getComparisonPaths(), getKeptBlogPaths(),
  getExamEventBlogPaths(), getExamInfoPaths(), getDifferencePaths(),
  getCounsellingPaths(), getStateHubPaths(), getNeetPyqHubPaths(),
].reduce((n, a) => n + a.length, 0);
console.log('___JSON___' + JSON.stringify(out));
`;

let counts;
// The probe is written to a file inside the repo so tsconfig path aliases
// ("@/…") resolve exactly as they do at build time; `tsx -e` does not.
const probeFile = resolve(ROOT, 'scripts/.thin-page-probe.mts');
try {
  writeFileSync(probeFile, probe);
  const raw = execSync(`npx tsx ${JSON.stringify(probeFile)}`, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  counts = JSON.parse(raw.split('___JSON___')[1].trim());
} catch (err) {
  console.error('Could not evaluate the sitemap modules:', err.message);
  process.exit(1);
} finally {
  rmSync(probeFile, { force: true });
}

/* ── 2. Content depth, parsed directly from the question banks ───────────── */

const QUESTION_RE =
  /\{\s*q:\s*(['"`])([\s\S]+?)\1\s*,\s*o:\s*\[([\s\S]*?)\]\s*,\s*a:\s*\d+\s*,\s*s:\s*(['"`])([\s\S]+?)\4/g;

const files = execSync(
  'git ls-files src/data/practice src/data/pyq src/data/neet-practice src/data/neet-pyq',
  { cwd: ROOT, encoding: 'utf8' },
)
  .trim()
  .split('\n')
  .filter((f) => f.endsWith('.ts'));

const lens = [];
for (const f of files) {
  const src = readFileSync(resolve(ROOT, f), 'utf8');
  QUESTION_RE.lastIndex = 0;
  for (const m of src.matchAll(QUESTION_RE)) {
    const text = `${m[2]} ${m[3]} ${m[5]}`;
    lens.push(text.split(/\s+/).filter(Boolean).length);
  }
}
lens.sort((a, b) => a - b);
const pct = (p) => lens[Math.floor(lens.length * p)] ?? 0;
const share = (f) => (lens.length ? Math.round((lens.filter(f).length / lens.length) * 100) : 0);

const depth = {
  parsed: lens.length,
  median: pct(0.5),
  p10: pct(0.1),
  p90: pct(0.9),
  under40pct: share((x) => x < 40),
  under60pct: share((x) => x < 60),
  over100pct: share((x) => x > 100),
};

/* ── 3. Report ──────────────────────────────────────────────────────────── */

const totalQuestions = Object.values(counts.banks).reduce((a, b) => a + b.eligible, 0);
const totalChapters = Object.values(counts.banks).reduce((a, b) => a + b.chapters, 0);
const ratio = counts.curated ? (counts.totalBingExclusive / counts.curated).toFixed(1) : 'n/a';

if (json) {
  console.log(JSON.stringify({ ...counts, depth, totalQuestions, totalChapters, ratio }, null, 2));
  process.exit(0);
}

const pad = (s, n) => String(s).padStart(n);
console.log('\nBing-exclusive thin-page surface');
console.log('─'.repeat(64));
console.log('family            questions   bing-eligible   chapters   q/chapter');
for (const [k, v] of Object.entries(counts.banks)) {
  const per = v.chapters ? (v.eligible / v.chapters).toFixed(1) : '—';
  console.log(`${k.padEnd(17)}${pad(v.questions, 9)}${pad(v.eligible, 16)}${pad(v.chapters, 11)}${pad(per, 12)}`);
}
console.log(`${'location pages'.padEnd(17)}${pad('—', 9)}${pad(counts.locations, 16)}`);
console.log('─'.repeat(64));
console.log(`TOTAL advertised in bing-pages.xml : ${counts.totalBingExclusive}`);
console.log(`Curated URLs (Google sitemap)      : ~${counts.curated}`);
console.log(`Dilution ratio (thin : curated)    : ${ratio} : 1`);

console.log('\nHow thin, measured (words of unique content per question page)');
console.log('─'.repeat(64));
console.log(`  parsed        : ${depth.parsed}`);
console.log(`  median        : ${depth.median} words`);
console.log(`  p10 / p90     : ${depth.p10} / ${depth.p90} words`);
console.log(`  under 40 words: ${depth.under40pct}%`);
console.log(`  under 60 words: ${depth.under60pct}%`);
console.log(`  over 100 words: ${depth.over100pct}%`);

console.log('\nConsolidation target (geo-llm-strategy.md §6 A1)');
console.log('─'.repeat(64));
console.log(`  ${totalQuestions} question URLs could collapse into ${totalChapters} chapter hubs`);
console.log(`  → roughly ${(totalQuestions / Math.max(totalChapters, 1)).toFixed(0)} questions per hub,`);
console.log(`    i.e. ~${Math.round((totalQuestions / Math.max(totalChapters, 1)) * depth.median)} words of real Q&A per hub vs ${depth.median} today.`);
console.log('  Precedent: NEET PYQ already ships chapter/unit hubs that are');
console.log('  indexable for all bots and listed in /sitemap-pyq.xml.\n');
