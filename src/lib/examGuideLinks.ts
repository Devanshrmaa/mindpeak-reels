/**
 * Guide links for exam coaching landing pages.
 * ─────────────────────────────────────────────
 * Every examRegistry exam has a syllabus guide and a comparison post in the
 * curated blog set, but the `/[exam]-coaching` landing pages never linked to
 * them — the guides earn impressions (EAMCET syllabus pos 8-10, comparison
 * posts pos 9-30 in GSC) with almost no internal links pointing at them.
 * SEOLandingPage appends these to the page's relatedPages row.
 *
 * The base-exam choice mirrors generateExamComparisonPosts' skip rules so
 * the target slug is guaranteed to exist:
 *   olympiad            → only the jee-advanced comparison is generated
 *   overlapsWith 'neet' → jee-advanced is skipped, neet exists
 *   'jee' / 'both'      → jee-main exists
 */

import { examRegistry } from '@/data/examRegistry';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export interface GuideLink {
  label: string;
  href: string;
}

export function getExamGuideLinks(pageSlug: string): GuideLink[] {
  const m = pageSlug.match(/^(.+)-coaching$/);
  if (!m) return [];
  const exam = examRegistry.find((e) => e.slug === m[1]);
  if (!exam) return [];

  const base =
    exam.category === 'olympiad'
      ? { slug: 'jee-advanced', name: 'JEE Advanced' }
      : exam.overlapsWith === 'neet'
        ? { slug: 'neet', name: 'NEET' }
        : { slug: 'jee-main', name: 'JEE Main' };

  return [
    {
      label: `${exam.name} Syllabus ${CURRENT_EXAM_YEAR} — Topic-Wise Guide`,
      href: `/blog/${exam.slug}-syllabus-complete-guide-${CURRENT_EXAM_YEAR}`,
    },
    {
      label: `${exam.name} vs ${base.name} — Which Is Harder?`,
      href: `/blog/${exam.slug}-vs-${base.slug}-comparison-${CURRENT_EXAM_YEAR}`,
    },
  ];
}
