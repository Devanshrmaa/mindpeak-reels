/**
 * BreadcrumbList JSON-LD generator for SSR metadata.
 * Used by resolveSlugMetadata to inject breadcrumb structured data.
 */

const BASE = 'https://mindpeakinstitute.com';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${BASE}/${item.url}`,
      })),
    ],
  };
}

/* ── Pre-built breadcrumb helpers for common page types ── */

export function subjectBreadcrumb(exam: string, subject: string, slug: string) {
  return buildBreadcrumbJsonLd([
    { name: `${exam} Coaching`, url: `${exam.toLowerCase()}-coaching` },
    { name: `${exam} ${subject}`, url: slug },
  ]);
}

export function chapterBreadcrumb(exam: string, subject: string, chapter: string, slug: string) {
  return buildBreadcrumbJsonLd([
    { name: `${exam} Coaching`, url: `${exam.toLowerCase()}-coaching` },
    { name: `${exam} ${subject}`, url: `${exam.toLowerCase()}-${subject.toLowerCase()}-coaching` },
    { name: chapter, url: slug },
  ]);
}

export function questionBreadcrumb(
  exam: string,
  subject: string,
  chapter: string,
  questionLabel: string,
  slug: string,
  hubUrl: string,
) {
  return buildBreadcrumbJsonLd([
    { name: `${exam} Practice`, url: hubUrl },
    { name: `${exam} ${subject}`, url: hubUrl },
    { name: chapter, url: hubUrl },
    { name: questionLabel, url: slug },
  ]);
}
