#!/usr/bin/env node
/**
 * keyword-audit.mjs
 *
 * Reads src/data/seoPageData.ts and src/data/keywordTargets.ts, then for each
 * page that has a target set, counts every target keyword (case-insensitive,
 * word-boundary match) in the page's visible body text and reports under /
 * over / on-target results.
 *
 * Usage:
 *   node scripts/keyword-audit.mjs                       # all configured pages, table output
 *   node scripts/keyword-audit.mjs --json                # machine-readable JSON
 *   node scripts/keyword-audit.mjs jee-coaching neet-coaching   # filter to slugs
 *
 * No dependencies — pure regex parsing of the TypeScript data files so it can
 * run in CI without a build step.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SEO_PATH = resolve(ROOT, 'src/data/seoPageData.ts');
const TARGETS_PATH = resolve(ROOT, 'src/data/keywordTargets.ts');

const args = process.argv.slice(2);
const jsonMode = args.includes('--json');
const slugFilter = new Set(args.filter((a) => !a.startsWith('--')));

// ─── Parse keywordTargets.ts ────────────────────────────────────────────────

function parseKeywordTargets(source) {
  // Pulls each PageKeywordTargets object out of the array literal.
  // We match objects with `slug: '...'` and capture the keyword array.
  const pages = [];
  const pageRe = /\{\s*slug:\s*['"]([a-z0-9-]+)['"][\s\S]*?keywords:\s*\[([\s\S]*?)\],?\s*\},?/g;
  let m;
  while ((m = pageRe.exec(source)) !== null) {
    const slug = m[1];
    const inner = m[2];
    // Handle the `...jeeCommon,` spread by leaving spread tokens in place and
    // resolving them afterwards.
    const spreads = [...inner.matchAll(/\.\.\.([a-zA-Z_$][\w$]*)/g)].map((s) => s[1]);
    const literals = [];
    const litRe = /\{\s*term:\s*['"]([^'"]+)['"]\s*,\s*min:\s*(\d+)\s*,\s*max:\s*(\d+)\s*,\s*priority:\s*['"]([a-z]+)['"]\s*\}/g;
    let lm;
    while ((lm = litRe.exec(inner)) !== null) {
      literals.push({ term: lm[1], min: +lm[2], max: +lm[3], priority: lm[4] });
    }
    // Tier extraction
    const tierMatch = /tier:\s*(\d)/.exec(source.slice(m.index, m.index + 400));
    const tier = tierMatch ? +tierMatch[1] : 0;
    pages.push({ slug, tier, spreads, literals });
  }

  // Resolve the named keyword-array constants (jeeCommon, neetCommon, ...).
  const constMap = {};
  const constRe = /const\s+([a-zA-Z_$][\w$]*)\s*:\s*KeywordTarget\[\]\s*=\s*\[([\s\S]*?)\];/g;
  let cm;
  while ((cm = constRe.exec(source)) !== null) {
    const name = cm[1];
    const body = cm[2];
    const arr = [];
    const litRe = /\{\s*term:\s*['"]([^'"]+)['"]\s*,\s*min:\s*(\d+)\s*,\s*max:\s*(\d+)\s*,\s*priority:\s*['"]([a-z]+)['"]\s*\}/g;
    let lm;
    while ((lm = litRe.exec(body)) !== null) {
      arr.push({ term: lm[1], min: +lm[2], max: +lm[3], priority: lm[4] });
    }
    constMap[name] = arr;
  }

  // Final shape: merge spreads + literals, dedupe by term (literal wins).
  return pages.map((p) => {
    const merged = [];
    const seen = new Set();
    for (const lit of p.literals) {
      merged.push(lit);
      seen.add(lit.term.toLowerCase());
    }
    for (const sp of p.spreads) {
      for (const kw of constMap[sp] ?? []) {
        if (!seen.has(kw.term.toLowerCase())) {
          merged.push(kw);
          seen.add(kw.term.toLowerCase());
        }
      }
    }
    return { slug: p.slug, tier: p.tier, keywords: merged };
  });
}

// ─── Parse seoPageData.ts and extract visible-text per page ─────────────────

function extractPageText(source, slug) {
  // Find the page object literal whose `slug: '<slug>'` matches. We need a
  // balanced-brace extraction because section content contains commas/braces.
  const slugRe = new RegExp(`slug:\\s*['"]${slug}['"]`);
  const slugMatch = slugRe.exec(source);
  if (!slugMatch) return null;
  // Walk backwards to find the opening `{` of the page object.
  let open = slugMatch.index;
  while (open > 0 && source[open] !== '{') open--;
  // Walk forward counting braces to find the matching close.
  let depth = 0;
  let i = open;
  for (; i < source.length; i++) {
    const ch = source[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  const block = source.slice(open, i);

  // Pull every quoted string in the block — these are all the visible-text
  // fields (title, description, h1, heroSubtitle, content, bullets, q, a, ...).
  // Skip property keys (like `title:`) by matching only after a colon, comma,
  // or `[`. We also strip leading/trailing whitespace.
  const stringRe = /(?:^|[:\[,])\s*(['"`])((?:\\.|(?!\1).)*?)\1/gs;
  const parts = [];
  let sm;
  while ((sm = stringRe.exec(block)) !== null) {
    const raw = sm[2];
    // Skip slugs, hrefs, image paths, schema literals.
    if (/^[a-z0-9-]+$/.test(raw)) continue;
    if (raw.startsWith('/') || raw.startsWith('http')) continue;
    if (/^(EducationalOrganization|Course|WebPage|FAQPage)$/.test(raw)) continue;
    // Un-escape \' and template placeholders.
    parts.push(raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\$\{[^}]+\}/g, ' '));
  }
  return parts.join(' \n ');
}

function listAllSlugsFromSEO(source) {
  const slugs = [];
  const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
  let m;
  while ((m = re.exec(source)) !== null) slugs.push(m[1]);
  return slugs;
}

function countTerm(text, term) {
  // Word-boundary-ish, case-insensitive. Allow phrases (escape regex chars).
  const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  // For single tokens prefer \b; for phrases just allow surrounding non-word.
  const isSingle = /^\w[\w-]*$/.test(term);
  const re = isSingle
    ? new RegExp(`\\b${escaped}\\b`, 'gi')
    : new RegExp(`(^|[^\\w])${escaped}([^\\w]|$)`, 'gi');
  const matches = text.match(re);
  return matches ? matches.length : 0;
}

// ─── Run ────────────────────────────────────────────────────────────────────

const seoSource = readFileSync(SEO_PATH, 'utf8');
const targetsSource = readFileSync(TARGETS_PATH, 'utf8');

const targets = parseKeywordTargets(targetsSource);
const knownSlugs = new Set(listAllSlugsFromSEO(seoSource));

const report = [];
for (const page of targets) {
  if (slugFilter.size && !slugFilter.has(page.slug)) continue;
  if (!knownSlugs.has(page.slug)) {
    report.push({ slug: page.slug, tier: page.tier, missing: true, results: [] });
    continue;
  }
  const text = extractPageText(seoSource, page.slug) ?? '';
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const results = page.keywords.map((kw) => {
    const count = countTerm(text, kw.term);
    let status;
    if (count < kw.min) status = 'UNDER';
    else if (count > kw.max) status = 'OVER';
    else status = 'OK';
    return { ...kw, count, status };
  });
  report.push({ slug: page.slug, tier: page.tier, wordCount, results });
}

if (jsonMode) {
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
  process.exit(0);
}

// Human-readable output
const COLOR = process.stdout.isTTY;
const c = (code, s) => (COLOR ? `\x1b[${code}m${s}\x1b[0m` : s);
const red = (s) => c(31, s);
const green = (s) => c(32, s);
const yellow = (s) => c(33, s);
const dim = (s) => c(2, s);
const bold = (s) => c(1, s);

let totalUnder = 0;
let totalOver = 0;
let totalOk = 0;

for (const page of report) {
  if (page.missing) {
    console.log(`\n${bold(page.slug)} ${dim(`(tier ${page.tier})`)}  ${red('— page not found in seoPageData.ts')}`);
    continue;
  }
  console.log('');
  console.log(`${bold(page.slug)} ${dim(`(tier ${page.tier}, ${page.wordCount} words)`)}`);
  const headers = ['term', 'count', 'min', 'max', 'priority', 'status'];
  const colWidths = [22, 6, 5, 5, 10, 6];
  const fmt = (cells) =>
    cells.map((v, i) => String(v).padEnd(colWidths[i])).join(' ');
  console.log(dim(fmt(headers)));
  for (const r of page.results) {
    const statusColored =
      r.status === 'UNDER' ? red(r.status) :
      r.status === 'OVER' ? yellow(r.status) :
      green(r.status);
    const line = fmt([r.term, r.count, r.min, r.max, r.priority, '']);
    console.log(line.replace(/\s+$/, '') + ' ' + statusColored);
    if (r.status === 'UNDER') totalUnder++;
    else if (r.status === 'OVER') totalOver++;
    else totalOk++;
  }
}

console.log('');
console.log(bold('Summary'));
console.log(`  ${green('OK')}:    ${totalOk}`);
console.log(`  ${red('UNDER')}: ${totalUnder}`);
console.log(`  ${yellow('OVER')}:  ${totalOver}`);
console.log('');

// Exit non-zero if any UNDER on a primary keyword — useful in CI.
const primaryUnder = report
  .flatMap((p) => p.results ?? [])
  .filter((r) => r.priority === 'primary' && r.status === 'UNDER').length;
if (primaryUnder > 0) {
  console.log(red(`${primaryUnder} primary keyword(s) under target.`));
  process.exit(1);
}
