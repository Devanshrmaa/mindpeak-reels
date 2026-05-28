/**
 * Category-based OG image resolver.
 * Maps page types to specific OG images instead of generic hero-bg.jpg.
 */

const BASE = 'https://mindpeakinstitute.com';

type PageCategory = 'jee-practice' | 'neet-practice' | 'jee-pyq' | 'neet-pyq' | 'coaching' | 'formula' | 'chapter' | 'default';

const OG_IMAGES: Record<PageCategory, string> = {
  'jee-practice': `${BASE}/images/og/jee-practice.jpg`,
  'neet-practice': `${BASE}/images/og/neet-practice.jpg`,
  'jee-pyq': `${BASE}/images/og/pyq.jpg`,
  'neet-pyq': `${BASE}/images/og/pyq.jpg`,
  coaching: `${BASE}/images/og/coaching.jpg`,
  formula: `${BASE}/images/og/formula.jpg`,
  chapter: `${BASE}/images/og/chapter.jpg`,
  default: `${BASE}/images/hero-bg.jpg`,
};

export function resolveOgImage(slug: string): string {
  if (slug.startsWith('jee-pyq-')) return OG_IMAGES['jee-pyq'];
  if (slug.startsWith('neet-pyq-')) return OG_IMAGES['neet-pyq'];
  if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) return OG_IMAGES['jee-practice'];
  if (/^neet-(biology|physics|chemistry)-/.test(slug)) return OG_IMAGES['neet-practice'];
  if (slug.includes('formula')) return OG_IMAGES.formula;
  if (slug.includes('coaching') || slug.includes('-in-')) return OG_IMAGES.coaching;
  return OG_IMAGES.default;
}

export function resolveOgImageMeta(slug: string) {
  return {
    images: [{ url: resolveOgImage(slug), width: 1200, height: 630 }],
  };
}
