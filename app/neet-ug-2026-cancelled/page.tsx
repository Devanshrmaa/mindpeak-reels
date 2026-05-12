/**
 * NEET UG 2026 Cancellation Coverage Page
 *
 * SINGLE canonical page. Do not create a /news or /blog mirror.
 *
 * ─────────────────────────────────────────────────────────────
 * VERIFICATION CHECKLIST — REVIEW BEFORE PUBLISHING
 * ─────────────────────────────────────────────────────────────
 * Every event-specific claim below is sourced from the task brief, NOT
 * independently verified by the build process. Confirm each against the
 * official NTA notification before this page goes live. Update the
 * VERIFIED_AS_OF constant only after every line is checked.
 *
 *   [ ] NTA cancellation of NEET UG 2026 — date of notification
 *   [ ] Exam date (3 May 2026)
 *   [ ] CBI probe referral — confirmed publicly?
 *   [ ] No re-registration required — quote NTA on this
 *   [ ] Fee refund confirmed — process and timeline
 *   [ ] Timeline events on 8 / 10 / 12 May 2026 — each NTA release URL
 *   [ ] Re-exam date — leave as TBD until announced
 *
 * If any line cannot be ticked, replace the corresponding text with
 * neutral guidance ("Reports indicate..." / "Aspirants should monitor
 * neet.nta.nic.in for the official notification.") before deploying.
 * ─────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next';
import NeetUg2026Cancelled, {
  PAGE_FAQS,
  PAGE_TITLE,
  PAGE_DESCRIPTION,
  PUBLISHED_ISO,
  MODIFIED_ISO,
  BASE_URL,
} from '@/views/NeetUg2026Cancelled';

export const revalidate = 1800;

const CANONICAL = `${BASE_URL}/neet-ug-2026-cancelled`;
const OG_IMAGE = `${BASE_URL}/images/og/neet-practice.jpg`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-IN': CANONICAL, 'x-default': CANONICAL } },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: 'MindPeak Institute',
    locale: 'en_IN',
    publishedTime: PUBLISHED_ISO,
    modifiedTime: MODIFIED_ISO,
    authors: ['Devansh, Founder — MindPeak Institute'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ── JSON-LD: NewsArticle, FAQPage, EducationalOrganization ── */
const newsArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
  author: {
    '@type': 'Person',
    name: 'Devansh',
    jobTitle: 'Founder & Physics Mentor, MindPeak Institute',
  },
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'MindPeak Institute',
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  url: CANONICAL,
  image: OG_IMAGE,
  about: { '@type': 'Thing', name: 'NEET UG 2026', sameAs: 'https://neet.nta.nic.in' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'MindPeak Institute',
  url: BASE_URL,
  description:
    'One-on-one online JEE and NEET coaching by MindPeak Institute, based in Dehra Gopipur, Himachal Pradesh. UDYAM-HP-04-0042530.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dehra Gopipur',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN',
  },
  founder: { '@type': 'Person', name: 'Devansh', jobTitle: 'Founder & Physics Mentor' },
  identifier: 'UDYAM-HP-04-0042530',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <NeetUg2026Cancelled />
    </>
  );
}
