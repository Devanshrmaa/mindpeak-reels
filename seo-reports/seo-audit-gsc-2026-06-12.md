# GSC SEO Audit — 2026-06-12

**Source:** Google Search Console API (`sc-domain:mindpeakinstitute.com`), URL Inspection API,
live HTTP checks, and code audit. Comparison periods: last 28 days (May 13 – Jun 9) vs prior
28 days (Apr 15 – May 12); 90-day window (Mar 12 – Jun 9); 6-month daily trend (Dec 1 – Jun 9).

**Fixes shipped in this PR** (see §“Action plan”, items 1–2):
1. `proxy.ts`: 301 stale exam-year blog slugs (`…-2026` → `…-2027`) — they were 404ing with
   all their accrued rankings.
2. `programmaticBlogs.ts`: exam-comparison (30) and exam-strategy (46) posts added to
   `getKeptBlogSlugs()` → sitemap grows 507 → 583. These families render live but had **zero
   discovery path** (404 old URLs + absent from sitemap).

---

## A. Executive summary

1. **Two compounding bugs silently killed the site's best non-brand content around May 1.**
   The exam-year rollover (`CURRENT_EXAM_YEAR` 2026 → 2027) changed every year-suffixed blog
   slug; the old URLs (e.g. `/blog/cuet-vs-jee-main-comparison-2026`, 3,461 impressions at
   position 2.9 in 90d) became 404s with no redirect, **and** the new `-2027` URLs were never
   in the sitemap because `getKeptBlogSlugs()` omitted the comparison and strategy families
   entirely. Both fixed in this PR. This is the single highest-impact action available.
2. **Search traffic is now ~98% brand.** Last 28 days: 50 query-dim clicks, 49 from
   "mindpeak institute" variants. Non-brand: 1 click on 160 impressions.
3. The site is still in **March 2026 spam-update recovery** and the trajectory of the cleanup
   is correct (doorways 410ing, consolidation enforced in middleware). The March "peak"
   (858 clicks/week, 61.6k impressions/week) was doorway traffic and is not coming back —
   don't chase it.
4. Impressions are still falling week over week (May 11 wk: 335 → Jun 1 wk: 97 → Jun 8 wk: 17)
   — this is the year-rollover 404s draining the last equity, **not** a deepening penalty.
   Core pages (/, /jee-coaching, /neet-coaching, /pricing) remain indexed and healthy.
5. **Comparison posts are the proven asset:** "cuet vs jee" pos ~2, "is cuet easier than jee"
   pos 2.2, "is kcet easier than jee" pos 4 — with near-zero CTR from templated titles.
   Title rewrites (section E) on the `-2027` successors are the best CTR play.
6. Mobile massively outperforms desktop (14.1% vs 4.7% CTR; pos 9.4 vs 23.7). India is the
   only market that matters (482 of 770 impressions, all 60+ clicks essentially).
7. Owner actions that no API can do: **Request Indexing** on the top `-2027` comparison posts
   after deploy, check the **Manual Actions** panel, resubmit the sitemap, and **rotate the
   GCP service-account key (it has now been pasted into chat twice — treat as compromised).**

---

## B. GSC findings

### Trend (weekly clicks / impressions)
| Week | Clicks | Impressions | Avg pos | Note |
|---|---|---|---|---|
| Feb 16 | 43 | 199 | 3.9 | pre-spike baseline |
| Mar 9 | 858 | 61,642 | 6.4 | doorway spike peak |
| Mar 23 | 146 | 12,099 | 4.3 | **Mar 25 crash (spam update)** |
| Apr 20 | 31 | 436 | 10.7 | post-penalty plateau |
| May 11 | 20 | 335 | 12.5 | ~May 1: exam-year slug rollover |
| Jun 1 | 3 | 97 | 22.9 | -2026 URLs draining as 404s |
| Jun 8 (partial) | 0 | 17 | 24.1 | effectively brand-only |

### Period comparison (28d vs prior 28d, page dimension)
- Clicks 112 → 73 (−35%), impressions 2,010 → 961 (−52%), pages with impressions 712 → 330 (−54%).
- The drop is concentrated in the dead `-2026` blog URLs and de-indexing doorways — i.e.
  *engineered* decline from cleanup + *unintended* decline from the rollover bug.

### Brand vs non-brand (28d, query dim)
| Segment | Clicks | Impressions | CTR |
|---|---|---|---|
| Brand (4 queries) | 49 | 95 | 51.6% |
| Non-brand (92 queries) | 1 | 160 | 0.6% |

90d non-brand: 132 clicks / 18,499 impressions (0.71%) — almost all on now-dead URLs.

### Devices (28d)
- Mobile: 48 clicks / 341 impr / 14.08% CTR / pos 9.4
- Desktop: 20 clicks / 429 impr / 4.66% CTR / pos 23.7
- Desktop ranks ~14 positions worse: the surviving desktop impressions skew to research-y
  long-tail queries on weaker pages. No device-specific technical issue inferable from GSC.

### Countries (28d)
- India: 60 clicks / 482 impr / 12.45% CTR — the entire business.
- USA: 3 clicks / 205 impr / pos 26 — residue from doorway/NRI-targeted content. Ignore.

### Search appearance
- Only `REVIEW_SNIPPET` (10 impressions, 0 clicks, pos 29). Rich-result presence is
  effectively zero.

### Biggest drops (28d vs prior)
- `/blog/isi-entrance-vs-jee-main-comparison-2026`: 234 → 24 impressions (404 since rollover)
- `/blog/ap-eamcet-vs-neet-comparison-2026`: 153 → 76 (404)
- `/blog/bitsat-vs-jee-main-comparison-2026`: 22 → 0 (404)
- Query "is isi and jee syllabus same": 16 → 0 impressions
- Pattern: every major drop maps to a year-rolled 404, not to ranking losses on live pages.

### Cannibalization
- "best jee coaching in nadiad": 3 subject-city pages split 253 impressions — already
  consolidated by middleware 301s (verified live: `/jee-coaching-in-nadiad` → 301).
- "cuet vs jee" / "is cuet easier than jee": `cuet-vs-jee-main` and `cuet-vs-jee-advanced`
  split impressions at pos ~2 each. Tolerable (different target exams); fix with one
  sentence + link in each post disambiguating Main vs Advanced, not a merge.
- "locomotion and movement pyq neet": two near-identical PYQ *question* pages split 127
  impressions at pos ~5. The chapter hub (`/neet-pyq-biology-…`) should be the ranking page.
- TS vs AP EAMCET dilsukhnagar blog doorways: moot — 410'd.

### Ranking opportunities (90d, position 8–20, on content that survives)
| Query | Impr | Pos | Landing page (successor) |
|---|---|---|---|
| cell cycle and cell division neet pyq | 77 | 9.1 | `/neet-pyq-biology-cell-division` |
| haloalkanes and haloarenes neet questions/pyq | 68+ | 9–43 | `/neet-pyq-chemistry-haloalkanes` |
| aiims delhi cut off | 52 | 10 | `/blog/neet-cutoff-aiims-delhi-2027` |
| ap eamcet syllabus (+ weightage variants) | 109 | 8–20 | `/blog/ap-eamcet-syllabus-complete-guide-2027` |
| comedk exam pattern | 31 | 12 | `/blog/comedk-complete-guide-2027` |
| difference between neet and eamcet (cluster) | ~30/28d | 8–10 | `/blog/ap-eamcet-vs-neet-comparison-2027` |
| cuet coaching in bareilly | 8/28d | 18.8 | curated city post (keep, don't multiply) |

---

## C. Priority opportunities table

| P | Issue / opportunity | Evidence (GSC) | Action | Impact | Effort | Notes |
|---|---|---|---|---|---|---|
| 10 | Year-rollover 404s on ranked blog URLs | 11k+ 90d impressions on `-2026` slugs, all 404 live; impressions −52% period-over-period | **DONE this PR**: middleware 301 `-20XX` → current year | High | Done | Future rollovers auto-handled |
| 10 | Comparison/strategy posts absent from sitemap | 30+46 live pages, 0 in sitemap.xml; "cuet vs jee" pos 2 proven | **DONE this PR**: added to `getKeptBlogSlugs()` (507→583) | High | Done | Resubmit sitemap after deploy |
| 9 | Google holds stale crawls | URL Inspection: comparison posts "Excluded by noindex" (crawls May 25–26, pre-fix) | Owner: Request Indexing on top 10 `-2027` posts; resubmit sitemap in GSC | High | 30 min | No API exists; UI only |
| 8 | Templated titles → near-zero CTR at pos 2–5 | kcet-vs-jee-adv: 4,168 impr @ 0.14% @ pos 2.8 | Rewrite titles/metas (section E) | Med-High | Low | Question-led titles matching query phrasing |
| 7 | Manual action status unknown | Penalty behavior consistent with algorithmic, but unverified | Owner: check Security & Manual Actions panel | High if present | 5 min | If listed: reconsideration after this deploys |
| 6 | PYQ chapter hubs at striking distance | cell-division pos 9.1, haloalkanes pos ~9 | Internal links from /neet-coaching + chapter pages; add 2–3 unique intro paragraphs per hub | Med | Low | Page-2 → page-1 push |
| 5 | No fees/cost page despite proven demand | "…coaching fees" cluster ~90 impr pre-crash landed on killed doorways | ONE national "JEE/NEET coaching fees in India (city-wise)" guide | Med | Med | Single data-rich page; never per-city |
| 4 | Rich results absent | Only REVIEW_SNIPPET ×10 | FAQPage schema exists? Verify Course + Breadcrumb schema renders on money pages | Low-Med | Low | Don't expect FAQ rich results (Google restricts); Course schema is the realistic one |
| 2 | Brand clicks split with /about | "mindpeak institute": home 288 impr/151 clicks, /about 157/7 | Nothing — this is normal sitelink behavior | Low | — | Not worth touching |

---

## D. Content plan

**Update first (the `-2027` successors — they inherit the 301'd equity):**
1. `/blog/kcet-vs-jee-advanced-comparison-2027` — add a "KCET vs JEE Main vs Advanced at a
   glance" table + 3 Karnataka-specific paragraphs (CET cell quirks, college outcomes).
2. `/blog/cuet-vs-jee-main-comparison-2027` — answer "is cuet easier than jee" in the first
   100 words verbatim; current template buries it.
3. `/blog/ap-eamcet-syllabus-complete-guide-2027` — add chapter-weightage table (the
   "weightage" query variants are 40% of its impressions).
4. `/blog/neet-cutoff-aiims-delhi-2027` — add year-wise cutoff table 2020–2026. 52 impr at
   pos 10 with 0% CTR means the snippet shows no numbers.
5. `/blog/comedk-complete-guide-2027` — "comedk exam pattern" (pos 12) needs a pattern table
   above the fold.
6. NEET PYQ hubs `/neet-pyq-biology-cell-division`, `/neet-pyq-chemistry-haloalkanes` —
   unique 150-word intros + FAQ block; both are page-2 with proven demand.

**Create (only one):** national "JEE & NEET Coaching Fees in India 2027 — City-wise Breakdown"
(captures the killed-doorway fee demand legitimately).

**Merge:** nothing — consolidation is already done and enforced in middleware.

**Remove/noindex:** nothing new. Do NOT revive any doorway family. The 635 year-less
`how-to-prepare-*` chapter-prep posts stay out of the sitemap deliberately (several rank
anyway; let recrawl decide while penalty quality-gating eases).

---

## E. CTR improvement plan (top 10 by impressions, weak CTR — 90d data, applied to -2027 successors)

> Honest caveat: a chunk of these impressions came from broad navigational queries during the
> March spike ("cuet", "kcet" at pos ~2 — those users want the NTA/KEA site and will never
> click). Realistic CTR gains come from the long-tail "is X easier/harder than Y" and
> "difference between X and Y" queries, where these pages also rank.

Current template: `{Exam} vs {Base} {year} — Complete Comparison Guide` (undifferentiated, no
answer promise). Rewrites:

1. **kcet-vs-jee-advanced-comparison-2027** (4,168 impr, 0.14%, pos 2.8)
   - T1: `Is KCET Easier Than JEE? KCET vs JEE Advanced 2027 — Difficulty, Syllabus, Cutoffs`
   - T2: `KCET vs JEE Advanced 2027: Which Should Karnataka Students Prioritise?`
   - T3: `KCET vs JEE Advanced — Syllabus Overlap %, Difficulty & College Outcomes (2027)`
   - M1: `Yes — KCET is significantly easier than JEE Advanced. See the syllabus overlap, marking scheme and difficulty compared side by side, plus a prep plan covering both.`
   - M2: `KCET vs JEE Advanced compared: difficulty, negative marking, syllabus overlap and which colleges each unlocks. Includes a dual-prep strategy for Karnataka students.`
2. **cuet-vs-jee-main-comparison-2027** (3,461 impr, 0.06%, pos 2.9)
   - T1: `Is CUET Easier Than JEE Main? CUET vs JEE 2027 — Full Difficulty Comparison`
   - T2: `CUET vs JEE Main 2027: Syllabus Overlap, Difficulty & Which to Choose`
   - T3: `CUET or JEE Main? What Class 12 Students Should Pick in 2027 (Compared)`
   - M1: `CUET is easier than JEE Main — but they unlock different colleges. Side-by-side difficulty, syllabus overlap, and a decision framework for engineering vs central universities.`
   - M2: `CUET vs JEE Main compared across difficulty, pattern, negative marking and colleges. Find out if you can prepare for both with one syllabus.`
3. **cuet-vs-jee-advanced-comparison-2027** (2,042 impr, 0.10%, pos 2.4)
   - T1: `CUET vs JEE Advanced 2027 — Difficulty Gap, Syllabus & College Outcomes`
   - T2: `Is CUET Tougher Than JEE Advanced? (No — Here's the Real Gap) | 2027 Guide`
   - M1: `JEE Advanced is in a different difficulty league from CUET. See exactly how big the gap is — syllabus, question depth, time pressure — and which path fits your target college.`
   - M2: `CUET vs JEE Advanced: difficulty, pattern, and admission outcomes compared, with guidance on backup strategy if you're targeting IITs.`
4. **bitsat-vs-jee-main-comparison-2027** (1,569 impr, 0.51%, pos 4.8)
   - T1: `BITSAT vs JEE Main 2027 — Syllabus Overlap %, Difficulty & Which Is Easier`
   - T2: `Is BITSAT Easier Than JEE Main? Speed vs Depth Compared (2027)`
   - M1: `BITSAT trades JEE Main's depth for raw speed — 130 questions in 3 hours. See syllabus overlap, score conversion, and how to prep for both without doubling your workload.`
   - M2: `BITSAT vs JEE Main: difficulty, pattern, overlap and cutoffs compared, plus a one-syllabus strategy to clear both in 2027.`
5. **ap-eamcet-syllabus-complete-guide-2027** (518 impr, 0.77%, pos 8.4)
   - T1: `AP EAMCET Syllabus 2027 (Official) — Chapter-wise Weightage PDF & Analysis`
   - T2: `AP EAMCET 2027 Syllabus & Weightage: Every Chapter Ranked by Marks`
   - M1: `Complete AP EAMCET 2027 syllabus with chapter-wise weightage tables for Maths, Physics and Chemistry — plus the 20 chapters that decide 70% of your rank.`
   - M2: `Official AP EAMCET syllabus broken down chapter by chapter with expected weightage, deleted topics, and a JEE-overlap map so you can prep both together.`
6. **how-to-prepare-biology-for-kcet-2027** (489 impr, 0.82%, pos 4.9)
   - T1: `KCET Biology 2027: Important Chapters, Weightage & 60-Day Prep Plan`
   - T2: `How to Score 100+ in KCET Biology — Chapter Weightage & Strategy (2027)`
   - M1: `KCET Biology prep guide: chapter-wise weightage, NCERT-first strategy, and a 60-day plan used by our Karnataka students to cross 100/120.`
   - M2: `The exact KCET Biology chapters that carry the most marks in 2027, with a week-by-week plan and PYQ practice strategy.`
7. **ts-eamcet-mathematics-strategy-score-high-2027** (478 impr, 1.05%, pos 4.6)
   - T1: `TS EAMCET Maths Strategy 2027 — Score 70+ with These Chapter Priorities`
   - T2: `TS EAMCET Mathematics: Weightage, Shortcuts & 8-Week Plan (2027)`
   - M1: `TS EAMCET Maths rewards speed: chapter weightage, shortcut techniques and an 8-week plan to reach 70+ out of 80, from mentors who coach Telangana toppers 1-on-1.`
   - M2: `Chapter-wise TS EAMCET Maths weightage with a daily practice plan and the formula sheet our students revise from.`
8. **viteee-vs-jee-main-comparison-2027** (418 impr, 0.96%, pos 5.3)
   - T1: `VITEEE vs JEE Main 2027 — Difficulty, Syllabus Overlap & Which to Target`
   - T2: `Is VITEEE Easier Than JEE Main? Full 2027 Comparison + Dual-Prep Plan`
   - M1: `VITEEE is notably easier than JEE Main with ~85% syllabus overlap. See the comparison and how to use JEE prep to clear VITEEE without extra study.`
   - M2: `VITEEE vs JEE Main: pattern, difficulty, negative marking (VITEEE has none) and college outcomes compared for 2027 aspirants.`
9. **neet-cutoff-aiims-delhi-2027** (278 impr, 0.00%, pos 8.4)
   - T1: `AIIMS Delhi Cutoff 2027: Marks & Rank Needed (2020–2026 Trends Table)`
   - T2: `What NEET Score Gets You Into AIIMS Delhi? Year-wise Cutoffs & 2027 Prediction`
   - M1: `AIIMS Delhi closed at AIR ~50 in recent years. Year-wise cutoff marks and ranks 2020–2026, category-wise, plus the realistic 2027 target score.`
   - M2: `Exact NEET marks and ranks needed for AIIMS Delhi, with 7 years of cutoff trends and what they mean for your 2027 target.`
10. **ap-eamcet-vs-neet-comparison-2027** (254 impr 90d + the only one still earning now: 76 impr/28d, 1.32%, pos 8.4)
    - T1: `NEET vs AP EAMCET — Difference in Syllabus, Difficulty & Colleges (2027)`
    - T2: `Difference Between NEET and AP EAMCET: Which Should Bi.P.C. Students Take?`
    - M1: `NEET and AP EAMCET differ in syllabus depth, negative marking and the colleges they unlock. Full comparison plus a dual-prep plan for AP medical aspirants.`
    - M2: `The complete NEET vs AP EAMCET difference — exam pattern, syllabus, difficulty — and how Telugu-state students can prepare for both at once.`

Implementation note: these are programmatic templates — implement by adding a
`titleOverrides`/`metaOverrides` map keyed by slug-without-year in `programmaticBlogs.ts`
(or upgrade the template to question-led phrasing globally), not by hand-editing 76 posts.

## F. Internal linking plan

| From | To | Anchor |
|---|---|---|
| `/jee-coaching` | `/blog/kcet-vs-jee-advanced-comparison-2027` | "KCET vs JEE Advanced compared" |
| `/jee-coaching` | `/blog/bitsat-vs-jee-main-comparison-2027` | "BITSAT vs JEE Main syllabus overlap" |
| `/neet-coaching` | `/blog/ap-eamcet-vs-neet-comparison-2027` | "difference between NEET and AP EAMCET" |
| `/neet-coaching` | `/neet-pyq-biology-cell-division` | "cell cycle and cell division NEET PYQs" |
| `/viteee-coaching` (ranks pos 4) | `/blog/viteee-vs-jee-main-comparison-2027` | "VITEEE vs JEE Main difficulty comparison" |
| State hub `/jee-coaching-in-karnataka` | KCET comparison + `/blog/how-to-prepare-biology-for-kcet-2027` | "KCET preparation guides" |
| State hubs TS/AP | EAMCET strategy + syllabus 2027 posts | "TS EAMCET maths strategy", "AP EAMCET syllabus with weightage" |
| Each comparison post | `/jee-coaching` or `/neet-coaching` | "1-on-1 JEE coaching" (template already does this — verify it survived redesign) |
| `/blog` index | Comparison family hub section | descriptive per-post anchors |

Authority flow: comparison posts collect informational demand → money pages
(`/jee-coaching`, `/neet-coaching`, `/pricing`) must be one descriptive-anchor click away.

## G. Technical SEO notes

**Verified facts (API / live HTTP):**
- Sitemap: 507 URLs submitted, 0 errors; both sitemaps downloaded Jun 10–12. ("indexed: 0" in
  the Sitemaps API is a known unreliable field — URL Inspection contradicts it.)
- Core pages indexed and clean: `/` (crawled Jun 11), `/jee-coaching` (May 26),
  `/neet-coaching` (Jun 2), `/pricing` (May 6).
- `-2026` blog URLs: 404 live (now 301 after this PR); Google's last crawls (May 25–26) saw
  the 404-shell's noindex → "Excluded by 'noindex' tag" states are stale-crawl artifacts.
- Doorway 410s and city/subject 301s behave exactly as designed (spot-checked live).
- `/online-jee-coaching` is "URL unknown to Google" — it's not in the sitemap; either add it
  or accept it as a non-target.

**Hypotheses (NOT verified from GSC):**
- Penalty is algorithmic, not manual — consistent with the overnight Mar 25 impression cliff,
  but only the Manual Actions panel can confirm. Check it.
- "Crawled — currently not indexed" (176 pages on Jun 10) easing is gradual; first state-hub
  indexations (Jun 8 report) support this. No code action can accelerate it beyond what's done.

## H. 30/60/90-day roadmap

**30 days (quick wins):**
- Deploy this PR → resubmit `sitemap.xml` in GSC → Request Indexing for the top 10 `-2027`
  posts + 4 T1 city pages (Delhi/Mumbai/Hyderabad JEE+NEET).
- Check Manual Actions panel; rotate the service-account key.
- Implement title/meta overrides (section E).
- Add section-F internal links (state hubs → exam content; money pages → top comparisons).

**60 days (structural):**
- Watch "Excluded by noindex" fall and 410s drain in Page Indexing report weekly.
- Upgrade the 6 priority posts in section D with tables/weightage data.
- Build the national fees guide.
- Strengthen the 2 indexed state hubs (Chhattisgarh) as templates; iterate hub content where
  GSC shows impressions but no indexation.

**90 days (compounding):**
- If comparison family re-ranks (expect pos 2–7 to return on long-tail), expand to missing
  high-volume pairs only (e.g. "MHT CET vs JEE Main" exists — verify coverage of WBJEE/KEAM
  variants that showed impressions).
- Re-evaluate the 635 sitemap-excluded chapter-prep posts: admit the ~20 with GSC impressions
  ≥100 into the sitemap, leave the rest out.
- Begin modest digital-PR/local citations for brand entity (penalty recovery benefits from
  independent brand signals). No link buying.

## I. Final verdict

**Broken:** the exam-year rollover 404'd every ranked year-suffixed guide on ~May 1 and the
sitemap never listed the comparison/strategy families — together these erased nearly all
surviving non-brand equity. Fixed in this PR; recovery of those rankings is realistic because
the pages still exist and previously ranked pos 2–8.

**Working:** brand search (51.6% CTR, pos 1), core money pages indexed, the doorway cleanup
(correct and necessary), mobile performance, and the comparison/PYQ content themes Google has
already validated.

**Do next:** deploy → resubmit sitemap → Request Indexing → Manual Actions check → title
rewrites → internal links. In that order.

**Don't waste time on:** reviving doorways or per-city content, US/international traffic,
tablet, FAQ rich results, link building at scale during recovery, or interpreting the March
spike as a benchmark — it was spam traffic and its loss is the cure, not the disease.

---

## Weekly dashboard (build from GSC API — extend `scripts/gsc-health.mjs`)

One table per week, 8 columns:
1. Brand clicks / non-brand clicks (query dim, regex `mindpeak`)
2. Non-brand impressions (leading indicator of recovery)
3. Pages with ≥1 impression (page dim row count) — should rise as -2027 posts index
4. Comparison-family impressions (page filter `-comparison-2027`) — the recovery bellwether
5. Striking-distance queries (pos 8–20, impr ≥20) count + top 5 list
6. "Excluded by noindex" + "Not found" counts from Page Indexing (UI, manual)
7. Avg position mobile vs desktop
8. Sitemap indexed count from URL Inspection sampling (the existing 507→583 set)

Alert thresholds: non-brand impressions falling 2 weeks straight post-deploy, or any new
"Excluded by noindex" on sitemap URLs → investigate immediately.
