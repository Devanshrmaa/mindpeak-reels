# Honest Gap Analysis — What's Done vs What's Still Missing — 2026-06-10

Direct answer to "are we sure it's enough?": **the technical/on-site work is now in genuinely
strong shape — but no, it is not enough, because the single biggest gap is off-page and only a
human can close it.** Detail below, with evidence.

---

## ✅ Verified DONE (this week, all live in production)

| Area | State | Evidence |
|---|---|---|
| Doorway removal | 658 blog + all city doorways serve 410/301 | daily guard green |
| Soft-404s | Unknown URLs return real 404s sitewide | daily guard green |
| Noindex bugs | 56 sitemap pages un-noindexed | URL Inspection + live checks |
| Sitemap hygiene | 507 curated URLs, 0 doorways, legacy farm deleted | daily guard green |
| Homepage link equity | 10 → 112 server-rendered links | live |
| **Internal link integrity** | **2,219 unique internal links crawled across all 507 pages — only 3 broken, all fixed this commit** | `/tmp` crawl 2026-06-10 |
| Structured data | JSON-LD valid on all 15 representative page types (54 blocks parsed clean) | sweep 2026-06-10 |
| OG images | All referenced social images exist (200) | checked |
| Blog caching | `[slug]` route was FULLY DYNAMIC (no-store, MISS on every hit — every Googlebot crawl re-ran the 20MB resolver). Fixed: empty `generateStaticParams` enables ISR | this commit |
| Monitoring | Daily Action + weekly/monthly GSC scripts + `/daily-content` loop | merged |
| Content loop | Batch #1 done (3 pages, SERP-gap-informed) | PR #94 |

## 🔴 GENUINELY MISSING — ranked by impact

### 1. Off-page authority: ZERO backlinks (the big one)
`backlinks-2026-06-04.md`: **zero confirmed external backlinks, 5 audits in a row.**
46 outreach targets with pre-written emails (`outreach-emails-ready-to-send.md`) have sat
**NOT STARTED since May 14**. A 0-backlink domain will not rank for competitive coaching
queries no matter how perfect the site is. This is human work, mostly minutes each:

- **Today, ~10 min:** answer the live Quora thread ("Which coaching institute provides the
  best one-on-one mentoring for JEE Main?") — identified in the Week 5 audit as zero-effort.
- **This week:** the OriginEducare "Best 1-on-1 Live IIT-JEE Coaching 2026" listicle (highest
  priority target, untouched since May 20) + AcademyCheck (contact has a phone number — call).
- **This month:** directory listings (careers360, collegedekho, shiksha partner portal),
  Startup India / MSME / HP-startup government directories (high-trust links), 2-3 guest posts.
- **Brand hygiene:** activate `linkedin.com/in/devanshphysics`; the About page should
  disambiguate from the Allen-Kota educator with the same name.

### 2. Manual Actions panel — still unverified
No API exists. If a manual action is recorded, file reconsideration NOW — the cleanup evidence
is strong (this week's PRs + content-log). If the panel is clean, the algorithmic recovery
continues on its own. **This is a 60-second check that gates everything else.**

### 3. Request Indexing for T1 pages — still pending
`/jee-coaching-in-delhi`, `/neet-coaching-in-delhi`, `/jee-coaching-in-mumbai`,
`/jee-coaching-in-hyderabad` are clean live but Google holds stale-noindex crawls from April.

### 4. Core Web Vitals — unmeasured
PSI API anonymous quota was exhausted; lab signals look fine (homepage prerendered/cache HIT,
TTFB 0.15–0.75s) but run https://pagespeed.web.dev on `/`, a chapter page, and a blog post
once. CrUX field data likely absent (too little traffic) — lab metrics are what matter now.

### 5. E-E-A-T depth — structural weakness
All programmatic content is authored by "MindPeak Team" with no author entity, credentials, or
Person schema. Competitors (PW, Aakash) attach real educators. Fix over time: 2-3 genuine
author profiles (IIT/NIT/AIIMS credentials), `author` → Person schema on key content,
mentor-attributed quotes inside chapter pages. Pairs naturally with the /daily-content loop.

### 6. The 176 crawled-not-indexed pages — in progress, ~6 weeks of daily batches
Crawl-path fix (homepage hub) is live; content differentiation continues at 3-5 pages/day via
`/daily-content`. At that rate the chapter-page queue takes ~5-6 weeks. This is the correct
speed — bulk edits would recreate the scaled-content fingerprint.

### 7. Google Business Profile / local presence — not auditable from here
The HP address is on the site; whether a GBP listing exists/is verified is owner-side. For
"coaching near me" style queries a verified GBP with reviews is a meaningful free win.

## Effort split from here

| Who | What | Cadence |
|---|---|---|
| Machine (no effort) | seo-daily Action guards production | daily, automatic |
| Claude session (~30 min) | `/daily-content` — 3-5 page SERP-gap batch | daily |
| **Human (Devansh)** | **Outreach execution (46 targets queued), GSC UI actions, GBP, LinkedIn** | **start today** |

*Everything in §"DONE" is verified against production, not assumed. The crawl, JSON-LD sweep,
and caching evidence are reproducible via `scripts/daily-seo-routine.mjs` and the commands in
this report.*
