import { describe, it, expect } from 'vitest';
import { clampDescription, pickTitle, DESCRIPTION_MAX, TITLE_MAX } from '@/lib/titleFit';
import { getBlogSeoOverride } from '@/lib/blogSeoOverrides';

/**
 * The crawl of 2026-09-11 fetched all 749 URLs in the sitemap index and found
 * 170 shipping a meta description cut mid-word by a bare `.slice(0, 155)` /
 * `.slice(0, 160)`. Those pages carried 13,331 impressions in 28 days — 27%
 * of the site's total — and converted at 0.56% against the site's 0.95%.
 * The worst case was the single highest-impression page on the site,
 * /blog/olympiad-vs-jee-advanced-comparison-2027 (3,204 impressions, position
 * 6.2), whose hand-written snippet reached Google as "…with real numbe".
 */
describe('clampDescription', () => {
  it('returns text within budget untouched — no ellipsis, no trailing space', () => {
    const s = 'ISI is maths-only with a proof-based paper and an interview.';
    expect(clampDescription(s)).toBe(s);
  });

  it('never cuts mid-word', () => {
    const s = `${'word '.repeat(40)}finalword`;
    const out = clampDescription(s);
    expect(out.endsWith('…')).toBe(true);
    // Everything before the ellipsis must be whole words from the source.
    expect(s.startsWith(out.slice(0, -1))).toBe(true);
    expect(out.slice(0, -1)).not.toMatch(/\s$/);
  });

  it('stays within the budget', () => {
    for (const n of [161, 200, 400]) {
      expect(clampDescription('lorem ipsum dolor '.repeat(n / 4)).length).toBeLessThanOrEqual(
        DESCRIPTION_MAX,
      );
    }
  });

  it('drops a separator left dangling at the cut', () => {
    const s = `${'alpha beta '.repeat(14)}gamma, delta epsilon zeta`;
    const out = clampDescription(s);
    expect(out).not.toMatch(/[\s,;:—–-]…$/);
  });

  it('keeps a hard cut for a single token longer than the budget', () => {
    const out = clampDescription('x'.repeat(300));
    expect(out.length).toBe(DESCRIPTION_MAX);
  });

  it('handles empty and whitespace input without throwing', () => {
    expect(clampDescription('')).toBe('');
    expect(clampDescription('   ')).toBe('');
  });

  /**
   * The exact string that was reaching Google truncated. At the old 155-char
   * budget it lost its last word; at 160 it fits whole.
   */
  it('no longer truncates the olympiad post that lost "numbers"', () => {
    const o = getBlogSeoOverride('olympiad-vs-jee-advanced-comparison-2027');
    expect(o).toBeDefined();
    const out = clampDescription(o!.description);
    expect(out).toBe(o!.description);
    expect(out).toMatch(/real numbers\.$/);
    expect(out).not.toContain('…');
  });
});

describe('blog SEO overrides fit the SERP budget', () => {
  // Hand-written overrides are the site's most carefully worded snippets.
  // If one exceeds the budget it gets clamped, which is exactly the defect
  // this change fixes — so none of them may need clamping in the first place.
  const SLUGS = [
    'kcet-vs-jee-advanced-comparison-2027',
    'cuet-vs-jee-main-comparison-2027',
    'cuet-vs-jee-advanced-comparison-2027',
    'bitsat-vs-jee-main-comparison-2027',
    'ts-eamcet-syllabus-complete-guide-2027',
    'olympiad-vs-jee-advanced-comparison-2027',
    'wbjee-vs-jee-advanced-comparison-2027',
    'comedk-vs-jee-advanced-comparison-2027',
    'srmjeee-vs-jee-main-comparison-2027',
    'isi-entrance-vs-jee-main-comparison-2027',
    'mht-cet-vs-jee-advanced-comparison-2027',
    'ap-eamcet-vs-jee-main-comparison-2027',
    'mht-cet-vs-neet-comparison-2027',
  ];

  it('every override description survives clamping unchanged', () => {
    const clipped = SLUGS.filter((s) => {
      const o = getBlogSeoOverride(s);
      return o && clampDescription(o.description) !== o.description;
    });
    expect(clipped).toEqual([]);
  });

  it('every override title fits the title budget', () => {
    const over = SLUGS.map((s) => [s, getBlogSeoOverride(s)?.title ?? ''] as const).filter(
      ([, t]) => t.length > TITLE_MAX,
    );
    expect(over.map(([s, t]) => `${s} (${t.length})`)).toEqual([]);
  });
});

describe('pickTitle fallback', () => {
  it('degrades word-safely when no candidate fits', () => {
    const out = pickTitle(['Rotational Motion and Rigid Body Dynamics for JEE Advanced 2027 Preparation']);
    expect(out.length).toBeLessThanOrEqual(TITLE_MAX);
    expect(out.endsWith('…')).toBe(true);
    expect(out).not.toMatch(/[\s—–-]…$/);
  });
});
