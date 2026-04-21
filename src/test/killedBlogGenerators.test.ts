/**
 * Guard test: ensures killed blog generators stay dead.
 *
 * These generators were disabled because they produced city-specific
 * doorway pages that triggered Google's scaled-content-abuse penalty.
 * If any slug from a killed generator ever appears in getKeptBlogSlugs(),
 * this test fails loudly before the site is deployed.
 */
import { describe, it, expect } from 'vitest';
import { getKeptBlogSlugs } from '../lib/programmaticBlogs';

const keptSlugs = getKeptBlogSlugs();

/** Patterns that must NEVER appear in the kept slug list */
const KILLED_PATTERNS: { pattern: RegExp; reason: string }[] = [
  {
    pattern: /blog\/cost-of-(jee|neet)-preparation-in-/,
    reason: 'City-specific cost posts — killed as doorway pages',
  },
  {
    pattern: /blog\/(best|top)-(jee|neet|online)-coaching-in-/,
    reason: '"best coaching in [city]" posts — killed as doorway pages',
  },
  {
    pattern: /blog\/is-kota-(coaching-)?worth-it-from-/,
    reason: '"Kota vs [city]" posts — killed as doorway pages',
  },
  {
    pattern: /blog\/(jee|neet)-coaching-center-in-/,
    reason: 'Coaching centre listing posts — killed as doorway pages',
  },
];

describe('Killed blog generators — must stay disabled', () => {
  for (const { pattern, reason } of KILLED_PATTERNS) {
    it(`no slug matches ${pattern.source} (${reason})`, () => {
      const leaking = keptSlugs.filter((s) => pattern.test(s));
      expect(leaking).toEqual([]);
    });
  }

  it('getKeptBlogSlugs returns a non-empty array (sanity check)', () => {
    expect(keptSlugs.length).toBeGreaterThan(0);
  });

  it('every kept slug starts with blog/', () => {
    const invalid = keptSlugs.filter((s) => !s.startsWith('blog/'));
    expect(invalid).toEqual([]);
  });
});
