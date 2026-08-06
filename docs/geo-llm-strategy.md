# GEO Strategy — Ranking MindPeak Inside ChatGPT, Gemini, Grok & Claude

**Owner:** Growth / SEO
**Status:** Plan — approved scope pending
**Last reviewed:** 2026-08-06
**Companion docs:** [`bing-webmaster.md`](./bing-webmaster.md) · single source of truth for URLs is [`src/lib/sitemapUrls.ts`](../src/lib/sitemapUrls.ts)

---

## 0. What we are actually optimising for

Classic SEO wins a **click**. GEO (Generative Engine Optimization) wins a **sentence** — the one where an LLM answers "best online 1-on-1 coaching for JEE" and either names MindPeak or does not.

Three consequences shape everything below:

1. **The unit of ranking is the prompt, not the keyword.** A parent types a paragraph, not a phrase. We rank against ~120 recurring prompts, not 12,000 keywords.
2. **The citation is usually not us.** For commercial "best X" prompts, LLMs overwhelmingly ground on *third-party* sources — Reddit, Quora, YouTube, listicles, news — not on the vendor's own site. Our site controls the *facts*; third parties control the *recommendation*.
3. **Zero-click is the point.** A student who reads "MindPeak does 1-on-1 with a dedicated mentor, free trial available" inside ChatGPT and then searches our brand name directly is a GEO win that shows up in analytics as **direct/brand traffic**, never as AI referral. Measure accordingly (§8).

---

## 1. Current state — what is already built

This site is further along than most. Do not rebuild these:

| Asset | Location | Status |
|---|---|---|
| `llms.txt` curated site guide | [`app/llms.txt/route.ts`](../app/llms.txt/route.ts) | Live, generated from sitemap modules (cannot drift) |
| `llms-full.txt` fact reference | [`app/llms-full.txt/route.ts`](../app/llms-full.txt/route.ts) | Live — fees, refund policy, brand FAQ inlined |
| AI-crawler allowlist | [`public/robots.txt`](../public/robots.txt) | GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, Google-Extended, PerplexityBot, CCBot, meta-externalagent, Applebot-Extended all explicitly allowed |
| Entity `sameAs` graph | [`src/lib/seoEntities.ts`](../src/lib/seoEntities.ts) | Wikipedia URIs for JEE Main/Advanced, NEET-UG, NTA, IIT, NCERT |
| Author + `reviewedBy` E-E-A-T schema | [`src/lib/reviewedByJsonLd.ts`](../src/lib/reviewedByJsonLd.ts) | Named faculty with credentials, `knowsAbout`, `alumniOf` |
| Competitor comparison corpus | [`src/data/comparisonData.ts`](../src/data/comparisonData.ts) | 11 competitors — Allen, Aakash, FIITJEE, PW, Unacademy, Resonance, Narayana, Sri Chaitanya, Vedantu, BYJU'S |
| Brand FAQ hub | `/mindpeak-institute-faq` | Single-page answer surface for brand prompts |
| Bing + IndexNow pipeline | [`src/lib/bingIndexing.ts`](../src/lib/bingIndexing.ts), [`src/lib/indexNow.ts`](../src/lib/indexNow.ts) | Live, instant recrawl |

**The on-site GEO layer is ~80% done. The remaining 20% is high-value and listed in §6. The genuinely missing work is off-site (§5) and measurement (§8).**

---

## 2. The five gaps

### Gap 1 — ChatGPT Search grounds on Bing, and our Bing index is 24:1 thin

This is the highest-severity finding in this audit and it is specific to our architecture.

- ChatGPT's browsing/search grounding is built on the **Bing index**.
- We deliberately keep ~**14,000 thin pages** (individual practice/PYQ questions, auto-generated city pages) **indexed in Bing** while noindexing them for Google — see [`src/lib/bingIndexing.ts`](../src/lib/bingIndexing.ts) and [`proxy.ts`](../proxy.ts).
- Net effect: in the index ChatGPT retrieves from, MindPeak is represented by **~14,000 thin pages vs ~587 substantive ones — a 24:1 noise ratio.**
- Consequence: when ChatGPT retrieves "mindpeakinstitute.com", the passage it grabs is disproportionately likely to be a bare question stub, not `/jee-coaching` or `/methodology`. Thin retrieval → weak or no brand summary → we lose the sentence.

This was a rational **Google** decision (index breadth on Bing, penalty recovery on Google). It was never evaluated against **ChatGPT**, which did not factor into the original tradeoff. It must be re-decided now with that third consumer in view. See §6, Action A1 — this is a decision to make, not a bug to silently patch.

### Gap 2 — No off-site corpus strategy

Our comparison pages are excellent but they are *ours*. For "best online JEE coaching" prompts, engines synthesise from Reddit threads, Quora answers, YouTube transcripts and listicles. We currently have **no deliberate presence in any of them**. This is the single biggest untapped lever (§5).

### Gap 3 — No measurement. We are flying blind

There is no prompt panel, no citation log, no share-of-voice tracking anywhere in the repo. We cannot currently answer "did we improve?" for any engine. Fix first — before content spend (§8).

### Gap 4 — Freshness policy is tuned for Google, against GEO

`CONTENT_ANCHOR` in [`src/lib/sitemapUrls.ts`](../src/lib/sitemapUrls.ts) deliberately holds `lastmod` **stable** — correct, and non-negotiable given fake freshness contributed to the March 2026 penalty. But LLM search layers weight recency heavily for exam-cycle queries ("NEET 2027 pattern"). Resolution is *real* freshness on a narrow set of exam-event pages, never rolling dates sitewide (§6, A5).

### Gap 5 — Thin entity footprint off-domain

`sameAs` points at exam entities, not at **MindPeak as an entity**. There is no Wikidata item, and brand facts (founded 2018, UDYAM-HP-04-0042530, Dehra Gopipur HP, phone) live only on our own domain. LLMs resolve entities by **corroboration across independent sources**. One source = weak entity = hedged or omitted answers.

---

## 3. Engine-by-engine playbook

The four engines source answers differently. A single strategy under-serves all of them.

| Engine | Grounding source | What moves the needle | Our leverage today |
|---|---|---|---|
| **ChatGPT** (GPT-5.x, SearchGPT) | Bing index + GPTBot/OAI-SearchBot crawl + training corpus | Bing rank for the exact prompt phrasing; clean retrievable passages | **High** — we own a working Bing + IndexNow pipeline. Blocked by Gap 1. |
| **Gemini** | Google index + Google-Extended crawl + **YouTube transcripts** + strong Quora/Reddit weighting | Google rank, YouTube presence, Quora answers | **Medium** — Google recovery still in progress; zero YouTube/Quora presence |
| **Grok** | **X/Twitter real-time firehose** + web | Being *talked about on X*; recency-weighted | **Zero today** — no X presence. Cheapest gap to close. |
| **Claude** | Training corpus + web search; conservative, prefers structured/authoritative sources, cites fewer | Clean structured facts, `llms.txt`, unhedged verifiable claims | **High** — `llms-full.txt` is exactly what Claude rewards |

**Practical read:** ChatGPT and Claude are winnable in one quarter with work we control. Gemini follows Google recovery. Grok needs an X account that posts, and nothing else.

---

## 4. The target prompt panel

This replaces keyword research. Track **~120 prompts across 7 intents**; the seed set below is Tier 1 (run monthly, all 4 engines).

> **The money query, measured.** On 2026-08-06, ChatGPT was asked *"best 1 on 1 coaching for neet"* — the exact product MindPeak sells — and returned a ranked list of five named products (Vedantu One-to-One, ALLEN Digital One2One, Unacademy ICONIC, Aakash Digital Premium, PW + a private mentor). **MindPeak was absent.** It grounded that answer on Vedantu's own dedicated 1-on-1 landing page, two third-party comparisons (findmyguru, academycheck), and two Reddit threads. Three things follow, and they shaped the work in §6: the competitive set for this query is *named 1-on-1 products*, not institutes generally; a dedicated product landing page is table stakes to be in the set at all; and Reddit is load-bearing here, not optional.

**A. Category / discovery — highest value, hardest**
1. best online 1-on-1 coaching for JEE
2. best personal tutor for NEET preparation in India
3. best online NEET coaching for droppers
4. online JEE coaching with a personal mentor
5. which coaching is best for a weak student in JEE
6. best NEET coaching for a student who can't keep up in a big batch

**B. Format / thesis — our home turf, we should own these outright**
7. is 1-on-1 coaching better than batch coaching for JEE
8. online vs offline coaching for NEET — which is better
9. is it worth going to Kota for JEE preparation
10. how many students in a coaching batch is too many
11. does personal coaching help for NEET biology

**C. Competitor-comparison — highest commercial intent**
12. Allen vs private tutor for NEET
13. alternatives to Allen / Aakash / FIITJEE for JEE
14. is Physics Wallah enough for JEE Advanced
15. Unacademy vs personal coaching for NEET
16. cheaper alternatives to Aakash NEET coaching

**D. Pricing**
17. how much does 1-on-1 JEE coaching cost in India
18. personal NEET tutor fees per month India
19. is online coaching cheaper than Kota

**E. Brand — must be 100% accurate, never hedged**
20. what is MindPeak Institute
21. is MindPeak Institute legit / genuine
22. MindPeak Institute fees / reviews / free trial

**F. Informational → nurture (feeds A–E via citation authority)**
23. NEET 2027 exam pattern changes / CBT transition
24. JEE Main 2027 syllabus changes
25. how to prepare for NEET in 6 months as a dropper

**G. Single-brand review — decision-stage, added 2026-08-06 from a ChatGPT conversation export.** These are a different intent from the C-tier "X vs Y" comparisons: the asker has already leaned toward one brand and is checking for red flags before committing. Winning here means being surfaced as "also consider" inside someone else's review, not necessarily being the named subject.
26. Allen Digital review
27. Physics Wallah JEE review
28. Unacademy JEE review
29. Vedantu JEE review
30. Aakash Digital JEE review

> **Brand-prompt rule:** intent E answers are a trust surface. If any engine returns a wrong fee, a wrong location, or "I don't have information about MindPeak Institute", that is a **P1** — it directly kills conversion. Fix via `llms-full.txt` + off-site corroboration.
>
> **Provenance note:** prompts 20-30 and the findmyguru.com/validcollege.com/collegesimplified.in/jeegurukul.com/motion.ac.in/wibest.in outreach targets in §5.5 were identified by pulling real ChatGPT conversation exports (full JSON, including the search results and citations behind the answer) rather than guessing — see the commit history on this doc's PR for the raw exports. That's a repeatable technique: export a ChatGPT conversation for a target prompt, and the `search_result_groups` / `content_references` fields show exactly which pages it retrieved and which ones it actually cited in the final answer.

---

## 5. Off-site corpus — the biggest lever

**Governing rule: participate honestly, disclose affiliation, never astroturf.** Reddit and Quora detect and nuke vendor sockpuppets, and a burned brand is *negative* GEO — engines will surface the accusation thread forever. Every tactic below is disclosed-identity or earned.

### 5.1 Reddit (feeds ChatGPT + Gemini heavily)
Target subs: `r/NEETard`, `r/JEENEETards`, `r/JEE`, `r/NEET`, `r/Indian_Academia`, `r/IndianTeenagers`, `r/CBSE`.

- Establish **one disclosed founder/faculty account** ("I run a 1-on-1 coaching setup — happy to answer format questions"). Comment value-first on threads about batch size, Kota burnout, dropper-year planning. No links unless asked.
- Answer the recurring evergreen threads: *"is Kota worth it"*, *"batch of 300, teacher doesn't know my name"*, *"dropper year plan"*. These threads get cited by LLMs for **years**.
- Run genuine AMAs during result/counselling season (Jun–Aug, Jan–Feb).
- **Never** create fake student accounts. Non-negotiable.
- **Confirmed, not theoretical.** ChatGPT exports on 2026-08-06 directly cited four live Reddit threads across three subs — `r/NEETard` ("Best online coaching for NEET 2027?", "BEST ONLINE COACHING FOR NEET???"), `r/JEENEETards` ("NEET Batch comparison: Researching personalized NEET dropper batches for 2027…"), and an unrelated regional sub, `r/assam` ("Neet coaching"). Two lessons: Reddit is a first-class citation source for exactly our money queries, and *any* India-education-adjacent thread can get pulled in, not just the obvious subs. (An earlier revision of this doc dropped `r/JEENEETards` on the mistaken basis that only `r/NEETard` was real — both are, and both are cited.)
- **Highest-value single thread found so far:** the `r/JEENEETards` "NEET Batch comparison" thread is a student explicitly researching *personalised* NEET dropper batches — comparing THE200 by Padhle, Unacademy ICONIC, ALLEN Digital and PW Yakeen — and ending with "What am I missing?". That is an open, on-topic question in exactly our category, already being cited by ChatGPT. A disclosed, genuinely useful reply there is worth more than a dozen listicle placements.

### 5.2 Quora (disproportionately weighted by Gemini for Indian education)
- Indian education Quora is under-moderated and high-yield. Answer the top ~40 questions matching §4 intents A–D under **real faculty identities** (we already have credentialed faculty in [`src/data/authorData.ts`](../src/data/authorData.ts) — MBBS, BDS, MDS, PhD Chemistry, M.Sc.).
- Format for extraction: lead with a direct one-sentence answer, then a short table or numbered list. That shape is what gets lifted verbatim into an LLM answer.

### 5.3 YouTube (the direct line into Gemini)
- Gemini ingests **transcripts**. A 6-minute video with a clean spoken answer is a citable source.
- Ship 2 videos/month: format explainers ("what a 1-on-1 class actually looks like"), exam-change explainers, honest comparisons.
- Upload **full corrected transcripts** — do not rely on auto-captions. The transcript *is* the ranking asset.

### 5.4 X / Twitter (the only thing Grok reads)
- Cheapest gap to close. Post exam-day analysis, paper difficulty takes, NTA notification reactions — fast, on the day. Grok is recency-weighted, so **speed beats polish**.
- Exam-day live posting during JEE/NEET sessions is the single highest-ROI Grok tactic.

### 5.4b Direct 1-on-1 competitors worth watching (not outreach targets)
Surfaced by the 2026-08-06 money-query export — these compete for the exact query, unlike the batch brands:

- **`anandtutorials.com`** — ranks for "best 1 on 1 coaching for neet" with a page titled *"NEET Online Coaching 2026 — 1:1 Personalised Plan"*, arguing 1:1 beats "crowded coaching halls." Closest direct positional competitor found; worth reading their page before revising ours.
- **`prepmed.in`** — NEET institute advertising "24×7 one-to-one doubt-solving" on hybrid batches. A good example of the teaching-vs-mentoring blur that `/best-1-on-1-neet-coaching-compared` exists to clarify.
- **Named competitor products to track by name**, since these are what LLMs actually list: Vedantu One-to-One, ALLEN Digital One2One, Unacademy ICONIC, Aakash Digital Premium, PW Yakeen, THE200 by Padhle.

Do not pitch these for inclusion — they are competitors, not publishers. Track them for positioning.

### 5.5 Third-party listicles & directories
- Get MindPeak into "best online JEE coaching" roundups (Indian ed-tech blogs, Sulekha, UrbanPro, Justdial, Google Business Profile).
- Every listing must carry **byte-identical NAP** — name, address (Dehra Gopipur, HP), phone (+91 82194 57704), founded 2018, UDYAM-HP-04-0042530. Entity resolution is exact-match-sensitive; inconsistency reads as two different businesses.

### 5.6 Wikidata
- Create a Wikidata item for MindPeak Institute **only if notability is genuinely met** (independent coverage). If not, do not force it — a deleted item is worse than none. Revisit after press coverage lands.

---

## 6. On-site work queue

| # | Action | Why | Effort | Priority |
|---|---|---|---|---|
| **A1** | **Decide the Bing thin-page policy with ChatGPT in scope.** Options: (a) keep as-is, accept 24:1 dilution; (b) drop thin pages from `bing-sitemap.xml`, keep them crawlable; (c) consolidate question stubs into chapter-level pages with 20–40 questions each. **Recommended: (c), falling back to (b).** Consolidation fixes thinness for Bing, ChatGPT and Google simultaneously. | Gap 1 | L | **P0** |
| **A2** | Add `Course` + `Offer` JSON-LD to `/pricing` and each program page, with real fee ranges matching `llms-full.txt`. | Pricing prompts (§4-D) are unanswerable without machine-readable fees | S | **P0** |
| **A3** | Add an `EducationalOrganization` node with `foundingDate`, `identifier` (UDYAM), `areaServed: IN`, `sameAs` → all social/directory profiles, once §5.5 profiles exist. | Gap 5 — entity corroboration | S | **P0** |
| **A4** | Restructure top-20 money pages for **passage-level extraction**: every H2 asks a real question; the first sentence beneath answers it standalone, with no pronoun referring back to the heading. | LLMs retrieve *passages*, not pages. Self-contained paragraphs get quoted; context-dependent ones don't. | M | **P1** |
| **A5** | Real-freshness lane for exam-event pages only — genuine `dateModified` when content genuinely changes, driven by [`src/lib/examEventBlogs.ts`](../src/lib/examEventBlogs.ts). Sitewide `CONTENT_ANCHOR` policy stays frozen. | Gap 4 without re-triggering the penalty | M | **P1** |
| **A6** | Add a `## Fees` section with an explicit table to `llms-full.txt`, plus a stable "last verified" date. | Closes the most-asked commercial prompt | S | **P1** |
| **A7** | Add comparison-page `FAQPage` schema answering the exact §4-C phrasings verbatim. | Prompt-phrase → passage match | S | **P2** |
| **A8** | Statistics + citations pass on the top-20 pages — cite NTA/NCERT/official sources inline with links. | Measured GEO research consistently finds cited statistics and quotations lift LLM inclusion rate | M | **P2** |

---

## 7. Content principles (how to write so an LLM will quote you)

1. **Answer in the first sentence.** Inverted pyramid. LLMs lift the opening passage.
2. **Self-contained paragraphs.** Every paragraph must survive being extracted alone. No "as mentioned above".
3. **Cite real, checkable numbers with sources.** "NTA reported 23.3 lakh NEET registrations in 2024 [source]" beats "lakhs of students".
4. **Comparison tables.** Structurally trivial for a model to parse and reproduce.
5. **Name the tradeoff, including ours.** "1-on-1 costs more per hour than a batch seat" earns citation *because* it is balanced. Models penalise pure advocacy and reward hedged, complete answers.
6. **Exact prompt phrasing as headings.** H2 = "Is 1-on-1 coaching better than batch coaching for JEE?" not "Our Advantage".
7. **Never fabricate outcomes.** No selection counts, no success rates, no rank claims that are not independently verifiable. This is a hard line — see §9.

---

## 8. Measurement — build this first

**Build `scripts/geo-audit.mjs`.** Monthly, for each of the ~120 panel prompts × 4 engines, log to a committed CSV:

| Field | Values |
|---|---|
| `prompt`, `engine`, `run_date` | — |
| `brand_mentioned` | yes/no |
| `position` | 1st / mid / last / absent among named providers |
| `cited_url` | which URL (ours or third-party) was cited |
| `sentiment` | positive / neutral / hedged / negative |
| `factual_errors` | free text — **any error is P1** |
| `competitors_named` | list — this is share-of-voice |

**North-star metric: Share of Voice** = (prompts where MindPeak is named) ÷ (total category prompts), per engine.

**Baseline targets** (set the real baseline in week 1, before any content spend):

| Horizon | Category prompts (A) | Format prompts (B) | Brand prompts (E) |
|---|---|---|---|
| Day 0 | measure | measure | measure |
| Day 90 | +10pp SoV | ChatGPT + Claude ≥ 50% | 100% accurate, zero errors |
| Day 180 | +25pp SoV | ≥ 70% across all engines | 100% accurate |

**Secondary signals:** direct/brand-search traffic in GA (the real zero-click proxy), AI-referral sessions where headers permit, Bing Webmaster impressions on money pages, branded-search volume in GSC.

**Run each prompt in a fresh, logged-out session.** Personalisation and memory will silently flatter you otherwise.

---

## 9. Guardrails — non-negotiable

These exist because this site has already paid for violating them.

1. **No fabricated results, ranks, or success rates.** Two separate cleanups have already removed invented claims ([`d1d8540`](https://github.com/Devanshrmaa/mindpeak-reels/commit/d1d8540), and the July 2026 homepage pass). LLMs cross-check claims against third-party sources; an unverifiable claim produces a *hedged or negative* brand answer. Fabrication is actively counterproductive for GEO, independent of ethics.
2. **No doorway-page revival.** GEO does not justify regenerating the deleted static sitemaps or spinning up thin city/topic pages. That pattern caused the March 2026 penalty. Volume is not the GEO lever — corroboration is.
3. **No rolling `lastmod`.** `CONTENT_ANCHOR` stays anchored. Fake freshness was explicitly part of the penalty.
4. **No astroturfing.** Disclosed identities on Reddit/Quora/YouTube, always.
5. **Every new page ships in [`src/lib/sitemapUrls.ts`](../src/lib/sitemapUrls.ts).** No orphans.
6. **`llms.txt` stays curated and generated**, never hand-maintained — it is generated from the sitemap modules precisely so it cannot drift.

---

## 10. 90-day roadmap

### Weeks 1–2 — Instrument and decide
- [ ] Build `scripts/geo-audit.mjs`; run the full panel; **commit the baseline CSV**
- [ ] Make the A1 decision (Bing thin-page policy) — this gates ChatGPT performance
- [ ] Audit brand prompts (§4-E) across all 4 engines; log every factual error as P1
- [ ] Register X account; claim/complete Google Business Profile with exact NAP

### Weeks 3–6 — On-site foundations
- [ ] A2 (`Course`/`Offer` schema), A3 (`EducationalOrganization`), A6 (fees in `llms-full.txt`) — all P0
- [ ] Begin A1 execution (recommend: consolidate question stubs into chapter pages)
- [ ] A4 passage-restructure on the top 20 money pages
- [ ] Reddit + Quora accounts live with disclosed identities; **value-first participation only, no links yet**

### Weeks 7–12 — Off-site compounding
- [ ] 20 Quora answers under credentialed faculty identities
- [ ] 4 YouTube videos with corrected full transcripts
- [ ] Daily X posting; live exam-day coverage
- [ ] 10 directory/listicle placements with byte-identical NAP
- [ ] A5 (real-freshness lane), A7, A8
- [ ] **Re-run the full panel at day 90; compare against baseline; reallocate spend to whatever actually moved**

---

## 11. What success looks like at day 180

> **Prompt:** "best online 1-on-1 coaching for JEE in India"
>
> **Any engine:** "…**MindPeak Institute** focuses specifically on live 1-on-1 online classes with a dedicated mentor per student, rather than batch lectures. It offers a free trial class, and is often mentioned as an alternative for students who struggle in large batches. Fees are higher per hour than batch coaching, which is the main tradeoff…"

Named, accurately described, tradeoff acknowledged, sourced from **both** our site and independent third-party discussion. That last clause is the whole game — and it is the part §5 buys.

---

### Appendix — reference files

| Purpose | File |
|---|---|
| URL source of truth | [`src/lib/sitemapUrls.ts`](../src/lib/sitemapUrls.ts) |
| LLM site guide | [`app/llms.txt/route.ts`](../app/llms.txt/route.ts) |
| LLM fact reference | [`app/llms-full.txt/route.ts`](../app/llms-full.txt/route.ts) |
| AI crawler policy | [`public/robots.txt`](../public/robots.txt) |
| Bing thin-page policy | [`src/lib/bingIndexing.ts`](../src/lib/bingIndexing.ts), [`proxy.ts`](../proxy.ts) |
| Entity schema | [`src/lib/seoEntities.ts`](../src/lib/seoEntities.ts) |
| Author / E-E-A-T schema | [`src/lib/reviewedByJsonLd.ts`](../src/lib/reviewedByJsonLd.ts), [`src/data/authorData.ts`](../src/data/authorData.ts) |
| Competitor corpus | [`src/data/comparisonData.ts`](../src/data/comparisonData.ts) |
| Bing operator checklist | [`docs/bing-webmaster.md`](./bing-webmaster.md) |
