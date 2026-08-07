import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

/**
 * The site must not carry unverifiable outcome claims.
 *
 * MindPeak has no published, attributable student results, so ranks, success
 * rates, student/city counts and review scores are invented proof — the exact
 * pattern the March 2026 spam penalty punished.
 *
 * History of this file:
 *   • 2026-07-18 — first cleanup, rewrote the homepage testimonials.
 *   • 2026-07-31 — audit found the hero chips, stats band and "results ledger"
 *     had been missed; this test was added to cover 3 homepage files.
 *   • 2026-08-06 — a repo-wide audit found the same pattern in ~330 more
 *     places: 224 built pages shipped "95% success rate" from the [...slug]
 *     meta description alone; JEECoaching/NEETCoaching emitted fabricated
 *     5-star `Review` JSON-LD; cityData.ts carried 90 invented named
 *     testimonials that fed Review schema across city pages; seoPageData.ts
 *     invented seven faculty members with IIT/IISc/AIIMS credentials matching
 *     nobody in authorData.ts. The 3-file scope was the reason it went
 *     unnoticed, so PART 2 below now scans the whole repo.
 *
 * If real, published, consented results ever exist, relax the specific rule
 * here in the same commit that adds the proof — don't delete the file.
 */

/** Strip comments so notes documenting past removals (which necessarily quote
 *  the old copy) aren't mistaken for live claims. */
function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, " ") // block + JSX {/* */} comment bodies
    .replace(/(^|[^:])\/\/.*$/gm, "$1"); // line comments, keeping URLs intact
}

const read = (rel: string) =>
  stripComments(readFileSync(resolve(__dirname, "../..", rel), "utf8"));

/* ═══════════════════════════════════════════════════════════════════════
 * PART 1 — the homepage, held to the strictest standard.
 * app/layout.tsx is included because it supplies the site-wide default title
 * and the og:/twitter: descriptions the homepage renders.
 * ═══════════════════════════════════════════════════════════════════════ */

const HOMEPAGE_FILES = ["app/page.tsx", "app/layout.tsx", "src/views/AscentHome.tsx"];

const BANNED: { label: string; re: RegExp }[] = [
  { label: "AIR rank claim", re: /\bAIR\s*[<>]?\s*\d/i },
  { label: "#1 superiority claim", re: /#1\s|\bno\.?\s*1\s+(coaching|institute)/i },
  { label: "percentile claim", re: /\d+(\.\d+)?\s*percentile/i },
  { label: "success-rate claim", re: /\d+\s*%\s*(overall\s*)?success/i },
  { label: "success rate wording", re: /success rate/i },
  { label: "student-count claim", re: /\d{2,}\s*\+?\s*students\s*(mentored|taught)/i },
  { label: "city-count claim", re: /\d{2,}\s*\+\s*cities/i },
  { label: "star-rating claim", re: /\b\d(\.\d)?\s*\/\s*5\b/ },
  { label: "review-count claim", re: /\d+\s*\+?\s*(parent\s*)?reviews\b/i },
];

describe("homepage carries no unverifiable outcome claims", () => {
  for (const rel of HOMEPAGE_FILES) {
    const src = read(rel);
    for (const { label, re } of BANNED) {
      it(`${rel} has no ${label}`, () => {
        const hit = src.match(re);
        expect(hit, hit ? `Found ${label}: "${hit[0].trim()}" in ${rel}` : "").toBeNull();
      });
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════════
 * PART 2 — repo-wide. Narrower by design than PART 1: it targets claims where
 * MINDPEAK is the subject, so legitimate exam content still passes. Things
 * that must keep working:
 *   • college cutoffs — "KGMU has historically closed under roughly AIR 3,000"
 *   • state-level facts — "Rajasthan has lower JEE Advanced selection rates"
 *   • exam concepts — "99 percentile", "NEET cutoff percentile"
 *   • answer options in question banks — o: ['3/5', '4/5', …]
 *   • exam strategy maths — "random guessing on 4 options: 25% success rate"
 * ═══════════════════════════════════════════════════════════════════════ */

/** Question banks are pure exam data — fractions there are maths, not ratings. */
const EXCLUDED_PATHS =
  /\/(practice|pyq|neet-pyq|neet-practice)\/|no-fabricated-claims\.test\.ts$/;

/**
 * Some shapes are only a problem when MindPeak is the subject. "With centers
 * in 40+ cities, FIITJEE offers…" is a true statement about a competitor and
 * must keep passing; "students from 50+ cities" about us was invented. Rules
 * marked `mindpeakOnly` require a first-party marker near the match.
 */
const FIRST_PARTY = /\b(MindPeak|our|we|us)\b/i;

function nearFirstParty(src: string, index: number, len: number): boolean {
  return FIRST_PARTY.test(src.slice(Math.max(0, index - 160), index + len + 160));
}

const REPO_BANNED: { label: string; re: RegExp; mindpeakOnly?: boolean }[] = [
  // The specific invented ranks that ran through this codebase.
  { label: "invented AIR result", re: /\bAIR\s*(42|89|156)\b/ },
  // "95% success/selection/satisfaction rate" and friends. The leading digits
  // are bounded to 80-100 so exam-strategy maths ("25% success rate" for
  // random guessing) and competitor stats stay legal.
  {
    label: "MindPeak success-rate claim",
    re: /\b(8\d|9\d|100)\s*%\s*(overall\s*)?(success|selection|satisfaction)\s*rate/i,
  },
  // Covers both "500+ students mentored" and "guided 500+ students" — the
  // latter phrasing survived the first sweep because the verb leads.
  { label: "students-mentored count", re: /\b\d{2,},?\d*\s*\+\s*students\s+(mentored|taught|coached|trained)/i, mindpeakOnly: true },
  { label: "students-guided count", re: /\b(mentored|taught|coached|trained|guided|helped)\s+\d{2,},?\d*\s*\+\s*students/i, mindpeakOnly: true },
  { label: "city-count claim", re: /\b\d{2,}\s*\+\s*cities\b/i, mindpeakOnly: true },
  { label: "invented student name", re: /\bAarav Sharma|Rohan Gupta|Rohan Iyer|Ananya Reddy|Sneha Gupta|Karthik Nair\b/ },
  { label: "invented faculty name", re: /\bDr\.\s*Ananya Sharma|Dr\.\s*Priya Nair|Vikram Patel\b/ },
  { label: "faculty selection-rate claim", re: /\b3\s*(%|per cent)\s*(faculty\s*)?(selection|acceptance)\s*rate/i },
  { label: "satisfaction star rating", re: /(rating|satisfaction)['"\s:,]*\s*\d(\.\d)?\s*\/\s*5\b/i },
  { label: "MindPeak dropout-rate claim", re: /<\s*10\s*%\s*dropout/i },
];

const REPO_FILES = execSync(
  "git ls-files 'src/**/*.ts' 'src/**/*.tsx' 'app/**/*.ts' 'app/**/*.tsx'",
  { encoding: "utf8", cwd: resolve(__dirname, "../..") },
)
  .trim()
  .split("\n")
  .filter((f) => f && !EXCLUDED_PATHS.test(f));

describe("no fabricated MindPeak claims anywhere in the repo", () => {
  for (const { label, re, mindpeakOnly } of REPO_BANNED) {
    it(`no ${label}`, () => {
      const offenders: string[] = [];
      const global = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
      for (const rel of REPO_FILES) {
        const src = read(rel);
        global.lastIndex = 0;
        for (const m of src.matchAll(global)) {
          if (mindpeakOnly && !nearFirstParty(src, m.index ?? 0, m[0].length)) continue;
          offenders.push(`${rel}: "${m[0].trim()}"`);
          break;
        }
      }
      expect(
        offenders,
        offenders.length ? `Found ${label} in:\n  ${offenders.join("\n  ")}` : "",
      ).toEqual([]);
    });
  }
});

/* ═══════════════════════════════════════════════════════════════════════
 * PART 3 — structured data. Review/AggregateRating markup is consumed as fact
 * by rich results and answer engines alike, so an unverifiable entry there is
 * worse than none. Both coaching views previously emitted three invented
 * 5-star reviews each, and cityJsonLd built Review schema from the 90 fake
 * testimonials in cityData.ts.
 * ═══════════════════════════════════════════════════════════════════════ */

describe("no fabricated review markup", () => {
  it("no hardcoded Review author names in JSON-LD builders", () => {
    const offenders: string[] = [];
    for (const rel of REPO_FILES) {
      const src = read(rel);
      if (!/'@type':\s*'Review'|"@type":\s*"Review"/.test(src)) continue;
      // A Review whose author name is a string literal is hardcoded, not sourced.
      const m = src.match(/'@type':\s*'Review'[\s\S]{0,200}?name:\s*'[A-Z][a-z]+ [A-Z]/);
      if (m) offenders.push(rel);
    }
    expect(
      offenders,
      offenders.length
        ? `Hardcoded Review author names in: ${offenders.join(", ")}`
        : "",
    ).toEqual([]);
  });

  it("cityData.ts carries no named testimonials (they fed Review schema)", () => {
    const src = read("src/data/cityData.ts");
    expect(src.includes("testimonials: [")).toBe(false);
  });
});
