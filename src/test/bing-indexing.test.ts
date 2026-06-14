import { describe, it, expect } from 'vitest';
import { isBingbot, isBingExclusiveThinPage, getBingExclusiveUrls } from '@/lib/bingIndexing';
import { buildAllPracticeSlugs } from '@/data/practice';
import { buildAllPYQSlugs } from '@/data/pyq';

describe('bing indexing policy', () => {
  it('detects Bing UAs only', () => {
    expect(isBingbot('Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)')).toBe(true);
    expect(isBingbot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(false);
    expect(isBingbot(null)).toBe(false);
    expect(isBingbot('')).toBe(false);
  });

  it('flips real question pages', () => {
    const p = buildAllPracticeSlugs()[0].slug;
    const q = buildAllPYQSlugs()[0].slug;
    expect(isBingExclusiveThinPage(p)).toBe(true);
    expect(isBingExclusiveThinPage('/' + q)).toBe(true);
  });

  it('NEVER flips indexable curated/hub/subject pages (no Google leak)', () => {
    const mustStayIndexable = [
      'jee-coaching', 'neet-coaching', 'best-jee-coaching-in-india',
      'jee-coaching-in-bangalore', 'neet-coaching-in-delhi', // curated T1
      'jee-physics-preparation', 'jee-physics-coaching', 'jee-physics-mechanics',
      'jee-physics-formulas', 'mindpeak-vs-allen', 'blog', '',
    ];
    for (const s of mustStayIndexable) {
      expect(isBingExclusiveThinPage(s), `${s} must NOT be flipped`).toBe(false);
    }
  });

  it('does not flip redirected/gone doorways', () => {
    expect(isBingExclusiveThinPage('neet-coaching-in-guwahati')).toBe(false); // 410 removed
    expect(isBingExclusiveThinPage('jee-coaching-in-bahrain')).toBe(false);   // 410 removed
  });

  it('enumerates a large Bing URL set, all valid', () => {
    const urls = getBingExclusiveUrls();
    console.log('Bing-exclusive URL count:', urls.length);
    expect(urls.length).toBeGreaterThan(1000);
    // every enumerated URL must classify as flippable
    const bad = urls.filter((u) => !isBingExclusiveThinPage(u));
    expect(bad.length).toBe(0);
    // no duplicates
    expect(new Set(urls).size).toBe(urls.length);
  });
});
