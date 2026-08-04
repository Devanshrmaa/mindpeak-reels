import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * The homepage must not carry unverifiable outcome claims.
 *
 * MindPeak has no published, attributable student results, so ranks, success
 * rates, student/city counts and review scores on the homepage are invented
 * proof — the exact pattern the March 2026 spam penalty punished.
 *
 * A first cleanup on 2026-07-18 rewrote the testimonials but missed the hero
 * chips, the stats band and the whole "results ledger" section, and the gap
 * went unnoticed until an audit on 2026-07-31. This test closes that gap: it
 * scans the rendered source of the homepage, so a partial cleanup fails loudly.
 *
 * If real, published, consented results ever exist, relax the specific rule
 * here in the same commit that adds the proof — don't delete the file.
 */

/**
 * app/layout.tsx is included because it supplies the site-wide default title
 * and the og:/twitter: descriptions that the homepage actually renders — the
 * 2026-07-31 audit found "#1 ... | 95% Success" and "Achieve AIR <5K ...
 * Trusted by 500+ students" still shipping from there after the visible copy
 * had been cleaned.
 */
const FILES = ["app/page.tsx", "app/layout.tsx", "src/views/AscentHome.tsx"];

/** Strip comments so the explanatory notes documenting the removals (which
 *  necessarily quote the old copy) aren't mistaken for live claims. */
function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, " ") // block + JSX {/* */} comment bodies
    .replace(/(^|[^:])\/\/.*$/gm, "$1"); // line comments, keeping URLs intact
}

const BANNED: { label: string; re: RegExp }[] = [
  // matches "AIR 42" and the "AIR <5K" form the layout metadata used
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
  for (const rel of FILES) {
    const src = stripComments(readFileSync(resolve(__dirname, "../..", rel), "utf8"));

    for (const { label, re } of BANNED) {
      it(`${rel} has no ${label}`, () => {
        const hit = src.match(re);
        expect(
          hit,
          hit ? `Found ${label}: "${hit[0].trim()}" in ${rel}` : "",
        ).toBeNull();
      });
    }
  }
});
