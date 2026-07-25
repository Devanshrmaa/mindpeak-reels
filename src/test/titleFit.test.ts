import { describe, it, expect } from 'vitest';
import { pickTitle, TITLE_MAX } from '../lib/titleFit';
import { resolveSlugMetadata } from '../lib/resolveSlugMetadata';
import { CHAPTER_SLUGS } from '../data/chapterData';
import { buildAllNEETPYQHubSlugs } from '../data/neet-pyq/hierarchy';

/**
 * Guards the 2026-07-21 fix: 84 pages that earned impressions were shipping
 * titles over 65 chars (some >100), so Google truncated their keywords in
 * the SERP. Templated title groups must stay within the SERP budget.
 */

describe('pickTitle', () => {
  it('returns the first candidate that fits', () => {
    expect(pickTitle(['a'.repeat(80), 'short title'])).toBe('short title');
  });

  it('prefers the richest candidate when it fits', () => {
    expect(pickTitle(['rich title', 'short'])).toBe('rich title');
  });

  it('truncates with an ellipsis when nothing fits', () => {
    const out = pickTitle(['x'.repeat(90), 'y'.repeat(80)]);
    expect(out.length).toBeLessThanOrEqual(TITLE_MAX);
    expect(out.endsWith('…')).toBe(true);
  });

  it('never leaves a dangling separator before the ellipsis', () => {
    const out = pickTitle([`${'a'.repeat(58)} — Notes & PYQs`]);
    expect(out).not.toMatch(/[\s—–-]+…$/);
  });
});

describe('templated page titles stay within the SERP budget', () => {
  const titleOf = (slug: string) => {
    const meta = resolveSlugMetadata([slug]) as { title?: string };
    return typeof meta.title === 'string' ? meta.title : '';
  };

  it('chapter pages are all <= TITLE_MAX', () => {
    const over = CHAPTER_SLUGS.filter((s) => titleOf(s).length > TITLE_MAX);
    expect(over).toEqual([]);
  });

  it('NEET PYQ hub pages are all <= TITLE_MAX', () => {
    const over = buildAllNEETPYQHubSlugs()
      .map((h) => h.slug)
      .filter((s) => titleOf(s).length > TITLE_MAX);
    expect(over).toEqual([]);
  });

  it('does not duplicate the word "Formula" on formula sheets', () => {
    expect(titleOf('jee-chemistry-formulas')).not.toMatch(/Formulas Formula/);
  });
});
