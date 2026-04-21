import type { Metadata } from 'next';
import { getAllAuthors } from '@/data/authorData';
import MentorsClient from './MentorsClient';

const BASE = 'https://mindpeakinstitute.com';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Our Expert Mentors — IIT & AIIMS Alumni JEE/NEET Faculty | MindPeak Institute',
  description: 'Meet MindPeak Institute\'s expert mentors: IIT Bombay, IIT Delhi, AIIMS Delhi, IIT Kanpur alumni with 8–12 years of 1-on-1 JEE and NEET coaching experience.',
  alternates: { canonical: `${BASE}/mentors` },
  openGraph: {
    type: 'website',
    url: `${BASE}/mentors`,
    title: 'Expert JEE & NEET Mentors — IIT/AIIMS Alumni | MindPeak Institute',
    description: 'IIT Bombay, IIT Delhi, AIIMS Delhi, IIT Kanpur alumni. 8–12 years experience. 700+ students mentored. Meet our verified experts.',
    images: [{ url: `${BASE}/hero-bg.jpg`, width: 1200, height: 630 }],
    siteName: 'MindPeak Institute',
  },
};

export default function MentorsPage() {
  const authors = getAllAuthors();

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MindPeak Institute Expert Mentors',
    description: 'IIT and AIIMS alumni with verified JEE/NEET coaching credentials',
    url: `${BASE}/mentors`,
    numberOfItems: authors.length,
    itemListElement: authors.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        '@id': `${BASE}/mentors/${a.slug}`,
        name: a.name,
        jobTitle: a.credential,
        url: `${BASE}/mentors/${a.slug}`,
        alumniOf: { '@type': 'EducationalOrganization', name: a.institution },
        worksFor: {
          '@type': 'EducationalOrganization',
          '@id': `${BASE}/#organization`,
          name: 'MindPeak Institute',
        },
        knowsAbout: a.subjects.map(s => ({ '@type': 'Thing', name: s })),
        ...(a.linkedIn ? { sameAs: [a.linkedIn] } : {}),
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Our Mentors', item: `${BASE}/mentors` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MentorsClient authors={authors} />
    </>
  );
}
