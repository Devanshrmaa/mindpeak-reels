#!/usr/bin/env node
/**
 * geo-audit.mjs — LLM answer-engine share-of-voice tracker.
 * ──────────────────────────────────────────────────────────
 * Companion to docs/geo-llm-strategy.md §4 (prompt panel) and §8
 * (measurement). ChatGPT, Gemini, Grok and Claude don't expose a query API
 * that returns their actual consumer-facing answer-engine output, so this
 * script does NOT call any LLM automatically — it manages the manual
 * audit workflow: generate the blank run sheet, log real results by hand
 * after running each prompt in a fresh logged-out session, then report
 * share-of-voice trends from the accumulated history.
 *
 * The log (docs/geo-audit-log.csv) is committed to the repo so
 * share-of-voice trends are versioned alongside the site changes that
 * might explain a swing.
 *
 * Usage:
 *   node scripts/geo-audit.mjs --template          # blank run sheet for today, all prompts x engines
 *   node scripts/geo-audit.mjs --template --tier A,B   # only specific tiers
 *   node scripts/geo-audit.mjs --add --file run.csv    # append a filled-in run sheet to the log
 *   node scripts/geo-audit.mjs --report                # share-of-voice summary from the full log
 *   node scripts/geo-audit.mjs --report --engine claude --since 2026-01-01
 *
 * No dependencies — pure Node + regex/CSV parsing, runs without a build step.
 */

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LOG_PATH = resolve(ROOT, 'docs/geo-audit-log.csv');

const ENGINES = ['chatgpt', 'gemini', 'grok', 'claude'];

// ─── Prompt panel — docs/geo-llm-strategy.md §4 (Tier 1, seed set) ─────────
// Keep this list in sync with the strategy doc when prompts are added or
// retired; both should always describe the same panel.

const PANEL = [
  // A — Category / discovery
  { id: 'A1', tier: 'A', prompt: 'best online 1-on-1 coaching for JEE' },
  { id: 'A2', tier: 'A', prompt: 'best personal tutor for NEET preparation in India' },
  { id: 'A3', tier: 'A', prompt: 'best online NEET coaching for droppers' },
  { id: 'A4', tier: 'A', prompt: 'online JEE coaching with a personal mentor' },
  { id: 'A5', tier: 'A', prompt: 'which coaching is best for a weak student in JEE' },
  { id: 'A6', tier: 'A', prompt: "best NEET coaching for a student who can't keep up in a big batch" },
  // B — Format / thesis
  { id: 'B1', tier: 'B', prompt: 'is 1-on-1 coaching better than batch coaching for JEE' },
  { id: 'B2', tier: 'B', prompt: 'online vs offline coaching for NEET — which is better' },
  { id: 'B3', tier: 'B', prompt: 'is it worth going to Kota for JEE preparation' },
  { id: 'B4', tier: 'B', prompt: 'how many students in a coaching batch is too many' },
  { id: 'B5', tier: 'B', prompt: 'does personal coaching help for NEET biology' },
  // C — Competitor comparison
  { id: 'C1', tier: 'C', prompt: 'Allen vs private tutor for NEET' },
  { id: 'C2', tier: 'C', prompt: 'alternatives to Allen / Aakash / FIITJEE for JEE' },
  { id: 'C3', tier: 'C', prompt: 'is Physics Wallah enough for JEE Advanced' },
  { id: 'C4', tier: 'C', prompt: 'Unacademy vs personal coaching for NEET' },
  { id: 'C5', tier: 'C', prompt: 'cheaper alternatives to Aakash NEET coaching' },
  // D — Pricing
  { id: 'D1', tier: 'D', prompt: 'how much does 1-on-1 JEE coaching cost in India' },
  { id: 'D2', tier: 'D', prompt: 'personal NEET tutor fees per month India' },
  { id: 'D3', tier: 'D', prompt: 'is online coaching cheaper than Kota' },
  // E — Brand (must be 100% accurate — any error here is P1)
  { id: 'E1', tier: 'E', prompt: 'what is MindPeak Institute' },
  { id: 'E2', tier: 'E', prompt: 'is MindPeak Institute legit / genuine' },
  { id: 'E3', tier: 'E', prompt: 'MindPeak Institute fees / reviews / free trial' },
  // F — Informational (feeds A-E via citation authority)
  { id: 'F1', tier: 'F', prompt: 'NEET 2027 exam pattern changes / CBT transition' },
  { id: 'F2', tier: 'F', prompt: 'JEE Main 2027 syllabus changes' },
  { id: 'F3', tier: 'F', prompt: 'how to prepare for NEET in 6 months as a dropper' },
];

const COLUMNS = [
  'run_date', 'engine', 'prompt_id', 'prompt', 'brand_mentioned',
  'position', 'cited_url', 'sentiment', 'factual_errors', 'competitors_named',
];

// ─── CSV helpers ────────────────────────────────────────────────────────────

function csvEscape(value) {
  const s = String(value ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function parseCSV(text) {
  const lines = text.split('\n').filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];
  const header = splitCSVLine(lines[0]);
  return lines.slice(1).map((line) => {
    const cells = splitCSVLine(line);
    return Object.fromEntries(header.map((h, i) => [h, cells[i] ?? '']));
  });
}

function splitCSVLine(line) {
  const cells = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { cur += c; }
    } else if (c === '"') { inQuotes = true; }
    else if (c === ',') { cells.push(cur); cur = ''; }
    else { cur += c; }
  }
  cells.push(cur);
  return cells;
}

// ─── Commands ───────────────────────────────────────────────────────────────

function cmdTemplate(tierFilter) {
  const today = new Date().toISOString().slice(0, 10);
  const tiers = tierFilter ? new Set(tierFilter.split(',').map((t) => t.trim().toUpperCase())) : null;
  const prompts = tiers ? PANEL.filter((p) => tiers.has(p.tier)) : PANEL;

  const rows = [COLUMNS.join(',')];
  for (const p of prompts) {
    for (const engine of ENGINES) {
      rows.push([
        today, engine, p.id, csvEscape(p.prompt), '', '', '', '', '', '',
      ].join(','));
    }
  }

  const outPath = resolve(ROOT, `geo-audit-run-${today}.csv`);
  writeFileSync(outPath, rows.join('\n') + '\n');
  console.log(`Wrote blank run sheet: ${outPath}`);
  console.log(`${prompts.length} prompts x ${ENGINES.length} engines = ${prompts.length * ENGINES.length} rows to fill in.`);
  console.log('\nFor each row: run the prompt in a fresh, logged-out session on that engine,');
  console.log('then fill brand_mentioned (yes/no), position, cited_url, sentiment');
  console.log('(positive/neutral/hedged/negative), factual_errors (free text — any error is P1),');
  console.log('and competitors_named (semicolon-separated).');
  console.log(`\nWhen done: node scripts/geo-audit.mjs --add --file ${outPath.replace(ROOT + '/', '')}`);
}

function cmdAdd(filePath) {
  if (!filePath) { console.error('--add requires --file <path>'); process.exit(1); }
  const abs = resolve(ROOT, filePath);
  if (!existsSync(abs)) { console.error(`Not found: ${abs}`); process.exit(1); }

  const rows = parseCSV(readFileSync(abs, 'utf8'));
  const filled = rows.filter((r) => r.brand_mentioned?.trim());
  if (filled.length === 0) {
    console.error('No filled-in rows found (brand_mentioned is empty on every row). Nothing to add.');
    process.exit(1);
  }

  const logExists = existsSync(LOG_PATH);
  if (!logExists) writeFileSync(LOG_PATH, COLUMNS.join(',') + '\n');

  const lines = filled.map((r) => COLUMNS.map((c) => csvEscape(r[c])).join(','));
  appendFileSync(LOG_PATH, lines.join('\n') + '\n');
  console.log(`Appended ${filled.length} rows to ${LOG_PATH.replace(ROOT + '/', '')}.`);
  console.log(`(${rows.length - filled.length} unfilled rows skipped.)`);
  console.log('Commit docs/geo-audit-log.csv to version the result alongside site changes.');
}

function cmdReport(engineFilter, since) {
  if (!existsSync(LOG_PATH)) {
    console.error(`No log yet at ${LOG_PATH.replace(ROOT + '/', '')}. Run --template, fill it in, then --add.`);
    process.exit(1);
  }
  let rows = parseCSV(readFileSync(LOG_PATH, 'utf8'));
  if (engineFilter) rows = rows.filter((r) => r.engine === engineFilter);
  if (since) rows = rows.filter((r) => r.run_date >= since);
  if (rows.length === 0) { console.log('No matching rows.'); return; }

  const byEngine = new Map();
  for (const r of rows) {
    if (!byEngine.has(r.engine)) byEngine.set(r.engine, []);
    byEngine.get(r.engine).push(r);
  }

  console.log('Share of Voice — mentions / total prompts, most recent run per engine\n');
  const table = [];
  for (const [engine, engineRows] of byEngine) {
    const latestDate = engineRows.reduce((max, r) => (r.run_date > max ? r.run_date : max), '');
    const latest = engineRows.filter((r) => r.run_date === latestDate);
    const mentioned = latest.filter((r) => /^y/i.test(r.brand_mentioned)).length;
    const errors = latest.filter((r) => r.factual_errors?.trim()).length;
    table.push({
      engine, run_date: latestDate, mentioned, total: latest.length,
      sov: `${((mentioned / latest.length) * 100).toFixed(0)}%`,
      factual_errors: errors,
    });
  }
  table.sort((a, b) => a.engine.localeCompare(b.engine));
  const widths = { engine: 9, run_date: 12, sov: 7, mentioned: 16, factual_errors: 15 };
  console.log(
    'engine'.padEnd(widths.engine) + 'run_date'.padEnd(widths.run_date) +
    'SoV'.padEnd(widths.sov) + 'mentioned/total'.padEnd(widths.mentioned) + 'factual_errors'
  );
  for (const row of table) {
    console.log(
      row.engine.padEnd(widths.engine) + row.run_date.padEnd(widths.run_date) +
      row.sov.padEnd(widths.sov) + `${row.mentioned}/${row.total}`.padEnd(widths.mentioned) +
      (row.factual_errors > 0 ? `${row.factual_errors} — CHECK LOG (P1)` : '0')
    );
  }

  const errorRows = rows.filter((r) => r.factual_errors?.trim());
  if (errorRows.length > 0) {
    console.log('\nFactual errors on record (any is P1 — see docs/geo-llm-strategy.md §4):');
    for (const r of errorRows) {
      console.log(`  [${r.run_date}] ${r.engine} / ${r.prompt_id}: ${r.factual_errors}`);
    }
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const value = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

if (flag('template')) {
  cmdTemplate(value('tier'));
} else if (flag('add')) {
  cmdAdd(value('file'));
} else if (flag('report')) {
  cmdReport(value('engine'), value('since'));
} else {
  console.log(`Usage:
  node scripts/geo-audit.mjs --template              # blank run sheet for today, all prompts x engines
  node scripts/geo-audit.mjs --template --tier A,B   # only specific tiers
  node scripts/geo-audit.mjs --add --file run.csv    # append a filled-in run sheet to the log
  node scripts/geo-audit.mjs --report                # share-of-voice summary from the full log
  node scripts/geo-audit.mjs --report --engine claude --since 2026-01-01`);
  process.exit(1);
}
