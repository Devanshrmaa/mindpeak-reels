import { describe, it, expect } from 'vitest';
import { CHAPTER_SLUGS, chapters } from '@/data/chapterData';
import { resolveSlugMetadata } from '@/lib/resolveSlugMetadata';
import { pickDescription, DESCRIPTION_MAX } from '@/lib/titleFit';

const descOf = (slug: string): string =>
  String((resolveSlugMetadata([slug]) as unknown as { description?: string }).description ?? '');

describe('chapter meta descriptions', () => {
  /**
   * These pages earn large impressions at near-zero CTR: in the 28 days to
   * 2026-09-05, /neet-chemistry-organic-basics took 3,052 impressions at 0.39%
   * (position 9.7) and /jee-physics-rotational-motion 1,009 at 0.30%. The
   * pages that DO convert promise something specific the snippet cannot show
   * (/jee-chemistry-formulas 4.86%). So every chapter description must carry
   * concrete, counted deliverables — not the old near-identical
   * "Master X ... 100+ free MCQs. Start now." template.
   */
  it('fits inside the SERP budget for every chapter', () => {
    const over = CHAPTER_SLUGS.filter((s) => descOf(s).length > DESCRIPTION_MAX);
    expect(over).toEqual([]);
  });

  /**
   * The chapter name is the keyword — "goc" is what
   * /neet-chemistry-organic-basics ranks for — so the candidate ladder must
   * trim filler before it trims the name.
   */
  it('always leads with the chapter name, even for the longest names', () => {
    const dropped = chapters.filter((c) => !descOf(c.slug).startsWith(c.chapter));
    expect(dropped.map((c) => c.slug)).toEqual([]);
  });

  it('states the weightage and counts real resources', () => {
    const d = descOf('jee-physics-rotational-motion');
    expect(d).toContain('Rotational Motion');
    expect(d).toMatch(/\d+-\d+% of JEE Physics/);
    expect(d).toMatch(/\d+ key formulas/);
    expect(d).toMatch(/\d+ solved PYQs/);
  });

  it('no longer ships the old generic template', () => {
    for (const s of CHAPTER_SLUGS) {
      expect(descOf(s)).not.toContain('100+ free MCQs');
      expect(descOf(s)).not.toContain('Start now.');
    }
  });

  it('descriptions are not near-identical across chapters', () => {
    // The old template differed only by name and one digit. Require that the
    // first 60 characters — what a scanning reader sees — are distinct.
    const heads = CHAPTER_SLUGS.map((s) => descOf(s).slice(0, 60));
    expect(new Set(heads).size).toBe(heads.length);
  });
});

describe('pickDescription', () => {
  it('returns the first candidate within budget', () => {
    expect(pickDescription(['x'.repeat(200), 'short one'])).toBe('short one');
  });

  it('ellipsis-truncates only when nothing fits', () => {
    const out = pickDescription(['y'.repeat(200)]);
    expect(out.length).toBeLessThanOrEqual(DESCRIPTION_MAX);
    expect(out.endsWith('…')).toBe(true);
  });
});
