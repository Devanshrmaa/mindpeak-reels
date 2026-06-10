# Daily Content Improvement Loop

Deeply improve 3–5 existing pages today using competitor SERP analysis. This is the
editorial half of the SEO recovery routine — quality over quantity, NEVER bulk generation.

## Process (repeat per page, 3–5 pages total)

### 1. Pick targets (in priority order)
1. Pages from `seo-reports/keyword-opportunities-*.md` (proven striking-distance queries).
2. Chapter/subject pages still "Crawled - currently not indexed" in the latest
   `seo-reports/index-state-*.csv`.
3. If GSC access is available (`GSC_KEY_FILE`), pull the last 28 days of query data and pick
   pages with impressions at positions 4–30.

Skip any page improved in the last 14 days (check `seo-reports/content-log.md`).

### 2. Research the SERP for the target query
- WebSearch the exact query the page should win.
- WebFetch the top 1–2 organic results and extract: heading structure, tables, FAQ
  questions, approximate depth, which user intents they cover, what they're missing.
- Identify 2–4 concrete gaps NONE of the top results cover (fees with real numbers,
  decision frameworks, parent-specific guidance, Main-vs-Advanced splits, worked examples…).

### 3. Upgrade our page — substance only
- Find the content source: `src/data/seoPageData.ts` (landing pages),
  `src/data/chapters/*.ts` (chapter pages), `src/data/examInfoData.ts`,
  `src/data/differenceBetweenData.ts`, `src/data/counsellingData.ts`, blog generators in
  `src/lib/`.
- Add the gap content: real numbers, tables, decision checklists, FAQs phrased in the
  searcher's own words. Match the existing data shape exactly.
- Honest tone — comparisons must acknowledge when the alternative is reasonable.
- NEVER: new location×exam pages, thin padding, fake dates, keyword stuffing,
  duplicating an existing page's intent.

### 4. Verify & ship
- `npx vitest run` must stay green (descriptive-links test is strict).
- `npx tsc --noEmit` for the touched data files (ignore pre-existing `.next/` noise).
- Append one line per page to `seo-reports/content-log.md` (date, page, change, target query).
- Commit with a `content:` prefix, push, open a draft PR titled
  `content: daily improvement batch — <date>`.

## Hard limits
- Maximum 5 pages per day. If tempted to do more, improve depth instead.
- Each page edit must add genuinely new information a student/parent would value —
  if the addition could be auto-generated for 100 pages by swapping a noun, don't add it.
