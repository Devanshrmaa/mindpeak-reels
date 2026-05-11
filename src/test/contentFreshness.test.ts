import { describe, it, expect } from 'vitest';
import {
  getLastUpdated,
  getFormattedLastUpdated,
  getSourceLastModified,
  shouldShowFreshnessSignal,
  BUILD_BASE_DATE,
} from '../lib/contentFreshness';
import { SOURCE_LAST_MODIFIED } from '../lib/freshnessData.generated';

/**
 * These tests enforce the honest-freshness contract: dates are derived from
 * real git commit timestamps captured at build time. They must be stable
 * across runs (not auto-bumped), anchored to actual content sources, and
 * never invented.
 */

describe('getLastUpdated', () => {
  it('returns a string in YYYY-MM-DD format', () => {
    expect(getLastUpdated('jee-coaching')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('returns a date never in the future (real git dates are always past)', () => {
    const result = new Date(getLastUpdated('any-slug'));
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('is stable across calls — does NOT auto-bump (no fake daily freshness)', () => {
    const a = getLastUpdated('jee-physics-preparation');
    const b = getLastUpdated('jee-physics-preparation');
    expect(a).toBe(b);
  });

  it('routes chapter-pattern slugs to chapterData.ts git date', () => {
    const result = getLastUpdated('jee-physics-mechanics');
    expect(result).toBe(SOURCE_LAST_MODIFIED['src/data/chapterData.ts']);
  });

  it('routes city-pattern slugs to cityData.ts git date', () => {
    const result = getLastUpdated('jee-coaching-in-bangalore');
    expect(result).toBe(SOURCE_LAST_MODIFIED['src/data/cityData.ts']);
  });

  it('routes /online-coaching-* slugs to stateLandingPages.ts git date', () => {
    const result = getLastUpdated('online-coaching-karnataka');
    expect(result).toBe(SOURCE_LAST_MODIFIED['src/data/stateLandingPages.ts']);
  });

  it('routes mindpeak-vs-* slugs to comparisonData.ts git date', () => {
    const result = getLastUpdated('mindpeak-vs-allen');
    expect(result).toBe(SOURCE_LAST_MODIFIED['src/data/comparisonData.ts']);
  });

  it('falls back to BUILD_BASE_DATE when no rule matches', () => {
    expect(getLastUpdated('unmatched-arbitrary-slug')).toBe(BUILD_BASE_DATE);
  });

  it('strips a leading slash from the input', () => {
    expect(getLastUpdated('/jee-physics-mechanics')).toBe(getLastUpdated('jee-physics-mechanics'));
  });
});

describe('getFormattedLastUpdated', () => {
  it('returns a non-empty string with a 4-digit year', () => {
    const formatted = getFormattedLastUpdated('jee-coaching');
    expect(formatted).toBeTruthy();
    expect(formatted).toMatch(/\d{4}/);
  });

  it('formats the same underlying date as getLastUpdated', () => {
    const raw = getLastUpdated('jee-physics-mechanics');
    const formatted = getFormattedLastUpdated('jee-physics-mechanics');
    expect(formatted).toContain(raw.slice(0, 4)); // year
  });
});

describe('getSourceLastModified', () => {
  it('returns the recorded git date for a tracked source', () => {
    expect(getSourceLastModified('src/data/blogData.ts')).toBe(
      SOURCE_LAST_MODIFIED['src/data/blogData.ts'],
    );
  });

  it('falls back to BUILD_BASE_DATE for an unknown source', () => {
    expect(getSourceLastModified('src/data/does-not-exist.ts')).toBe(BUILD_BASE_DATE);
  });
});

describe('BUILD_BASE_DATE', () => {
  it('is a YYYY-MM-DD string', () => {
    expect(BUILD_BASE_DATE).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('is the most recent (or equal-to-most-recent) date across all tracked sources', () => {
    const dates = Object.values(SOURCE_LAST_MODIFIED).sort();
    const newest = dates[dates.length - 1];
    expect(BUILD_BASE_DATE >= newest).toBe(true);
  });
});

describe('shouldShowFreshnessSignal', () => {
  it('returns true for coaching pages', () => {
    expect(shouldShowFreshnessSignal('jee-coaching-in-delhi')).toBe(true);
    expect(shouldShowFreshnessSignal('neet-coaching-overview')).toBe(true);
  });

  it('returns true for blog pages', () => {
    expect(shouldShowFreshnessSignal('blog-post-about-jee')).toBe(true);
  });

  it('returns true for subject and chapter pages', () => {
    expect(shouldShowFreshnessSignal('jee-physics-subject')).toBe(true);
    expect(shouldShowFreshnessSignal('chapter-mechanics')).toBe(true);
    expect(shouldShowFreshnessSignal('topic-kinematics')).toBe(true);
  });

  it('returns true for formula pages', () => {
    expect(shouldShowFreshnessSignal('formula-sheet-physics')).toBe(true);
  });

  it('returns true for pyq and practice pages', () => {
    expect(shouldShowFreshnessSignal('jee-pyq-2023')).toBe(true);
    expect(shouldShowFreshnessSignal('practice-problems')).toBe(true);
  });

  it('returns true for rank-predictor pages', () => {
    expect(shouldShowFreshnessSignal('jee-rank-predictor')).toBe(true);
  });

  it('returns true for exam-specific pages (bitsat, cuet, wbjee, etc.)', () => {
    expect(shouldShowFreshnessSignal('bitsat-preparation')).toBe(true);
    expect(shouldShowFreshnessSignal('cuet-guide')).toBe(true);
    expect(shouldShowFreshnessSignal('wbjee-syllabus')).toBe(true);
    expect(shouldShowFreshnessSignal('mht-cet-2026')).toBe(true);
  });

  it('returns false for pages that do not match any content keyword', () => {
    expect(shouldShowFreshnessSignal('about-us')).toBe(false);
    expect(shouldShowFreshnessSignal('contact')).toBe(false);
    expect(shouldShowFreshnessSignal('pricing')).toBe(false);
    expect(shouldShowFreshnessSignal('')).toBe(false);
  });
});
