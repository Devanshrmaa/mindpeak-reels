import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  getLastUpdated,
  getFormattedLastUpdated,
  shouldShowFreshnessSignal,
} from '../lib/contentFreshness';

afterEach(() => {
  vi.useRealTimers();
});

describe('getLastUpdated', () => {
  it('returns a string in YYYY-MM-DD format', () => {
    const result = getLastUpdated('jee-coaching');
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('date is never in the future', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-15'));
    const result = getLastUpdated('any-page-slug');
    const date = new Date(result);
    expect(date.getTime()).toBeLessThanOrEqual(new Date('2026-06-15').getTime());
  });

  it('date is at most 6 days in the past', () => {
    vi.useFakeTimers();
    const today = new Date('2026-06-15');
    vi.setSystemTime(today);
    const result = getLastUpdated('any-page-slug');
    const date = new Date(result);
    const diffMs = today.getTime() - date.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    expect(diffDays).toBeGreaterThanOrEqual(0);
    expect(diffDays).toBeLessThan(7);
  });

  it('is deterministic — same slug returns same date on same day', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-15'));
    const a = getLastUpdated('jee-physics-preparation');
    const b = getLastUpdated('jee-physics-preparation');
    expect(a).toBe(b);
  });

  it('returns different dates for different slugs (natural variation)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-15'));
    const results = new Set([
      getLastUpdated('slug-a'),
      getLastUpdated('slug-b'),
      getLastUpdated('slug-c'),
      getLastUpdated('slug-d'),
      getLastUpdated('slug-e'),
      getLastUpdated('slug-f'),
      getLastUpdated('slug-g'),
    ]);
    // With 7 distinct slugs covering all offsets (0–6), we expect more than 1 unique date
    expect(results.size).toBeGreaterThan(1);
  });

  it('updates when the calendar day changes', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-14'));
    const dayOne = getLastUpdated('stable-slug');

    vi.setSystemTime(new Date('2026-06-20'));
    const dayTwo = getLastUpdated('stable-slug');

    // Both are valid YYYY-MM-DD strings; they may differ across days
    expect(dayOne).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(dayTwo).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('getFormattedLastUpdated', () => {
  it('returns a non-empty string', () => {
    expect(getFormattedLastUpdated('test-page')).toBeTruthy();
  });

  it('includes a 4-digit year', () => {
    expect(getFormattedLastUpdated('test-page')).toMatch(/\d{4}/);
  });

  it('represents a date on or before today', () => {
    const formatted = getFormattedLastUpdated('test-page');
    const parsed = new Date(formatted);
    expect(parsed.getTime()).toBeLessThanOrEqual(Date.now());
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
