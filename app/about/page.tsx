import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";

export const revalidate = false;

const BASE = 'https://mindpeakinstitute.com';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE}/mentors#devansh`,
      name: 'Devansh',
      jobTitle: 'Founder & Physics Mentor',
      description: 'I teach JEE and NEET Physics with a concept-first approach — students build physical intuition before reaching for formulas.',
      worksFor: {
        '@type': 'EducationalOrganization',
        '@id': `${BASE}/#organization`,
        name: 'MindPeak Institute',
        url: BASE,
      },
      knowsAbout: ['Physics', 'JEE Preparation', 'NEET Preparation'],
      hasCredential: ['MBBS'],
      url: `${BASE}/mentors`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'About MindPeak', item: `${BASE}/about` },
      ],
    },
  ],
};

export const metadata: Metadata = {
  ...buildSEOLandingMetadata("about"),
  other: {
    'script:ld+json': JSON.stringify(aboutSchema),
  },
};

export default function Page() { return <SEOLandingPage />; }
