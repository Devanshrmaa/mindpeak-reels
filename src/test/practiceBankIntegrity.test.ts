import { describe, it, expect } from 'vitest';
import {
  buildAllPracticeSlugs,
  buildAllPracticeHubSlugs,
  getQuestion,
  subjectBanks,
} from '@/data/practice';
import {
  getChapterPaths,
  getQuestionHubPaths,
  getStaticPaths,
  uniquePaths,
} from '@/lib/sitemapUrls';

const duplicates = (values: string[]): string[] => {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const v of values) {
    if (seen.has(v)) dupes.add(v);
    seen.add(v);
  }
  return [...dupes];
};

describe('practice bank integrity', () => {
  /**
   * Regression: several expansion files re-declared a chapter an earlier file
   * already defined (Gravitation, Properties of Matter, Chemical
   * Thermodynamics, Electrochemistry, Amines, Straight Lines, Circles,
   * Trigonometry). Every lookup resolves a chapter with `.find()`, so the
   * second entry's questions were unreachable. mergeChaptersBySlug() merges
   * them instead of dropping either set.
   */
  it('declares each chapter slug exactly once per subject', () => {
    for (const bank of subjectBanks) {
      expect(duplicates(bank.chapters.map((c) => c.slug))).toEqual([]);
    }
  });

  /**
   * Regression: mergeChaptersBySlug() folds entries sharing a SLUG, so a
   * chapter declared twice under two different slugs slips through and ships
   * two hub URLs with an identical <title>. "Aldehydes, Ketones & Carboxylic
   * Acids" was declared as both 'aldehydes-ketones-acids' and
   * 'aldehydes-ketones-carboxylic' — the only duplicate title left on the site
   * after the 2026-08 merge, found in the 2026-09 production crawl.
   */
  it('declares each chapter name exactly once per subject', () => {
    for (const bank of subjectBanks) {
      expect(duplicates(bank.chapters.map((c) => c.name))).toEqual([]);
    }
  });

  it('declares each topic slug exactly once per chapter', () => {
    for (const bank of subjectBanks) {
      for (const chapter of bank.chapters) {
        expect(duplicates(chapter.topics.map((t) => t.slug))).toEqual([]);
      }
    }
  });

  /**
   * Regression: 180 of 1,842 practice leaf slugs resolved to null, rendering
   * live 200 pages with no question on them — soft 404s, the thin-content
   * pattern the March 2026 penalty punished.
   */
  it('resolves every generated leaf slug to a real question', () => {
    const unresolved = buildAllPracticeSlugs()
      .filter((s) => !getQuestion(s.params))
      .map((s) => s.slug);
    expect(unresolved).toEqual([]);
  });

  it('emits each practice hub slug exactly once', () => {
    expect(duplicates(buildAllPracticeHubSlugs())).toEqual([]);
  });
});

describe('sitemap URL uniqueness', () => {
  it('lists no URL twice across the core and chapters children', () => {
    const core = new Set(getStaticPaths());
    const chapterPaths = uniquePaths(getChapterPaths(), core);
    const hubPaths = uniquePaths(getQuestionHubPaths(), [...core, ...chapterPaths]);
    expect(duplicates([...core, ...chapterPaths, ...hubPaths])).toEqual([]);
  });

  it('uniquePaths preserves order and honours the exclude set', () => {
    expect(uniquePaths(['/a', '/b', '/a', '/c'])).toEqual(['/a', '/b', '/c']);
    expect(uniquePaths(['/a', '/b'], ['/a'])).toEqual(['/b']);
  });
});
