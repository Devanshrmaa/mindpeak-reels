#!/usr/bin/env node
/**
 * keyword-audit.mjs
 *
 * Reads src/data/seoPageData.ts and src/data/keywordTargets.ts, then for each
 * page that has a target set, counts every target keyword (case-insensitive,
 * word-boundary match) in the page's visible body text and reports under /
 * over / on-target results.
 *
 * Targets are stored as density windows (per 1,000 words). The script
 * resolves each window against the page's actual word count, so the same
 * target set works for short and long pages.
 *
 * Usage:
 *   node scripts/keyword-audit.mjs                       # all configured pages, table output
 *   node scripts/keyword-audit.mjs --json                # machine-readable JSON
 *   node scripts/keyword-audit.mjs --no-exit             # don't exit non-zero on misses
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
const noExit = args.includes('--no-exit');
const slugFilter = new Set(args.filter((a) => !a.startsWith('--')));

// ─── Parse keywordTargets.ts ────────────────────────────────────────────────

/**
 * Parse one KeywordTarget literal — supports either the new density schema
 * (`per1k: { min, max }`, optional `floor`) or the legacy absolute schema
 * (`min`, `max`) for backwards compatibility.
 */
function parseTargetLiteral(literal) {
  const term = /term:\s*['"]([^'"]+)['"]/.exec(literal)?.[1];
  if (!term) return null;
  const priority = /priority:\s*['"]([a-z]+)['"]/.exec(literal)?.[1] ?? 'semantic';
  const per1k = /per1k:\s*\{\s*min:\s*(\d+)\s*,\s*max:\s*(\d+)\s*\}/.exec(literal);
  const floor = /floor:\s*(\d+)/.exec(literal);
  if (per1k) {
    return {
      term,
      per1k: { min: +per1k[1], max: +per1k[2] },
      floor: floor ? +floor[1] : 0,
      priority,
    };
  }
  // Legacy schema: { term, min, max, priority }
  const min = /[^a-z_]min:\s*(\d+)/.exec(literal);
  const max = /[^a-z_]max:\s*(\d+)/.exec(literal);
  if (min && max) {
    return {
      term,
      per1k: null,
      legacy: { min: +min[1], max: +max[1] },
      floor: 0,
      priority,
    };
  }
  return null;
}

function extractTargetLiterals(body) {
  // Extract each `{ term: '...', ... }` literal from a keyword array body.
  // We use a brace-balanced walker so nested `per1k: { min, max }` works.
  const literals = [];
  let i = 0;
  while (i < body.length) {
    if (body[i] !== '{') { i++; continue; }
    let depth = 0;
    const start = i;
    for (; i < body.length; i++) {
      if (body[i] === '{') depth++;
      else if (body[i] === '}') { depth--; if (depth === 0) { i++; break; } }
    }
    const lit = body.slice(start, i);
    if (lit.includes('term:')) literals.push(lit);
  }
  return literals;
}

function parseKeywordTargets(source) {
  // First pass: named keyword-array constants (`const jeeCommon: KeywordTarget[] = [...]`).
  const constMap = {};
  const constRe = /const\s+([a-zA-Z_$][\w$]*)\s*:\s*KeywordTarget\[\]\s*=\s*\[([\s\S]*?)\n\];/g;
  let cm;
  while ((cm = constRe.exec(source)) !== null) {
    const name = cm[1];
    const literals = extractTargetLiterals(cm[2]);
    constMap[name] = literals.map(parseTargetLiteral).filter(Boolean);
  }

  // Second pass: each page entry inside `keywordTargets: PageKeywordTargets[] = [...]`.
  // Anchor on the `=` so we don't lock onto the `[]` inside the type annotation.
  const declMatch = /keywordTargets\s*:\s*PageKeywordTargets\[\]\s*=\s*\[/.exec(source);
  if (!declMatch) return [];
  const p = declMatch.index + declMatch[0].length - 1; // position of the array's opening `[`
  // Brace-balanced walk through the array, collecting each top-level page object.
  const pages = [];
  let depth = 0;
  let bracket = 0;
  let objStart = -1;
  for (let i = p; i < source.length; i++) {
    const ch = source[i];
    if (ch === '[') bracket++;
    else if (ch === ']') { bracket--; if (bracket === 0) break; }
    else if (ch === '{') {
      if (depth === 0) objStart = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && objStart >= 0) {
        const obj = source.slice(objStart, i + 1);
        const slug = /slug:\s*['"]([a-z0-9-]+)['"]/.exec(obj)?.[1];
        const tier = +(/tier:\s*(\d)/.exec(obj)?.[1] ?? 0);
        // Pull keywords array body.
        const kwIdx = obj.indexOf('keywords:');
        if (slug && kwIdx >= 0) {
          // Find the opening `[` of the keywords array.
          let kbStart = obj.indexOf('[', kwIdx);
          let kbDepth = 0;
          let kbEnd = kbStart;
          for (let j = kbStart; j < obj.length; j++) {
            if (obj[j] === '[') kbDepth++;
            else if (obj[j] === ']') { kbDepth--; if (kbDepth === 0) { kbEnd = j; break; } }
          }
          const kwBody = obj.slice(kbStart + 1, kbEnd);
          // Spread references.
          const spreads = [...kwBody.matchAll(/\.\.\.([a-zA-Z_$][\w$]*)/g)].map((s) => s[1]);
          const literals = extractTargetLiterals(kwBody).map(parseTargetLiteral).filter(Boolean);

          // Merge spreads + literals, dedupe by term (literal overrides spread).
          const merged = [];
          const seen = new Set();
          for (const lit of literals) {
            merged.push(lit);
            seen.add(lit.term.toLowerCase());
          }
          for (const sp of spreads) {
            for (const kw of constMap[sp] ?? []) {
              if (!seen.has(kw.term.toLowerCase())) {
                merged.push(kw);
                seen.add(kw.term.toLowerCase());
              }
            }
          }
          pages.push({ slug, tier, keywords: merged });
        }
        objStart = -1;
      }
    }
  }
  return pages;
}

// ─── Density → effective count ──────────────────────────────────────────────

function resolveWindow(target, wordCount) {
  if (target.per1k) {
    const scale = Math.max(0, wordCount) / 1000;
    const rawMin = Math.round(target.per1k.min * scale);
    const rawMax = Math.round(target.per1k.max * scale);
    const min = Math.max(rawMin, target.floor ?? 0);
    const max = Math.max(rawMax, min + 1);
    return { min, max };
  }
  // Legacy absolute window.
  return { min: target.legacy.min, max: target.legacy.max };
}

// ─── Parse seoPageData.ts and extract visible-text per page ─────────────────

function extractPageText(source, slug) {
  // Find the page object literal whose `slug: '<slug>'` matches and walk
  // braces to extract the full literal.
  const slugRe = new RegExp(`slug:\\s*['"]${slug}['"]`);
  const slugMatch = slugRe.exec(source);
  if (!slugMatch) return null;
  let open = slugMatch.index;
  while (open > 0 && source[open] !== '{') open--;
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

  // Pull every quoted string in the block — these are visible-text fields
  // (title, description, h1, heroSubtitle, content, bullets, q, a, ...).
  // Match only strings preceded by `:`, `,`, or `[` to skip property keys.
  const stringRe = /(?:^|[:\[,])\s*(['"`])((?:\\.|(?!\1).)*?)\1/gs;
  const parts = [];
  let sm;
  while ((sm = stringRe.exec(block)) !== null) {
    const raw = sm[2];
    if (/^[a-z0-9-]+$/.test(raw)) continue;        // slug-like
    if (raw.startsWith('/') || raw.startsWith('http')) continue; // hrefs
    if (/^(EducationalOrganization|Course|WebPage|FAQPage|Article|BreadcrumbList)$/.test(raw)) continue;
    parts.push(raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\$\{[^}]+\}/g, ' '));
  }
  return parts.join(' \n ');
}

function listAllSlugsFromSEO(source) {
  const slugs = new Set();
  const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
  let m;
  while ((m = re.exec(source)) !== null) slugs.add(m[1]);
  return slugs;
}

function countTerm(text, term) {
  const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
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
const knownSlugs = listAllSlugsFromSEO(seoSource);

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
    const { min, max } = resolveWindow(kw, wordCount);
    let status;
    if (count < min) status = 'UNDER';
    else if (count > max) status = 'OVER';
    else status = 'OK';
    const density = wordCount > 0 ? +(count * 1000 / wordCount).toFixed(1) : 0;
    return {
      term: kw.term,
      priority: kw.priority,
      count,
      min,
      max,
      density,
      per1k: kw.per1k ?? null,
      floor: kw.floor ?? 0,
      status,
    };
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
  const headers = ['term', 'count', 'min', 'max', 'per1k', 'priority', 'status'];
  const colWidths = [22, 6, 5, 5, 10, 10, 6];
  const fmt = (cells) =>
    cells.map((v, i) => String(v).padEnd(colWidths[i])).join(' ');
  console.log(dim(fmt(headers)));
  for (const r of page.results) {
    const statusColored =
      r.status === 'UNDER' ? red(r.status) :
      r.status === 'OVER' ? yellow(r.status) :
      green(r.status);
    const per1kStr = r.per1k ? `${r.per1k.min}-${r.per1k.max}` : '(legacy)';
    const line = fmt([r.term, r.count, r.min, r.max, per1kStr, r.priority, '']);
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

const primaryUnder = report
  .flatMap((p) => p.results ?? [])
  .filter((r) => r.priority === 'primary' && r.status === 'UNDER').length;
if (primaryUnder > 0) {
  console.log(red(`${primaryUnder} primary keyword(s) under target.`));
  if (!noExit) process.exit(1);
}
