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
      '@id': `${BASE}/mentors#devansh-sharma`,
      name: 'Devansh Sharma',
      jobTitle: 'Founder & Physics Mentor',
      description: 'Founder of MindPeak Institute and JEE & NEET Physics faculty. Teaches Physics problem-solving systematically — read the problem, identify the principle at play, and reach the right equation without guessing.',
      worksFor: {
        '@type': 'EducationalOrganization',
        '@id': `${BASE}/#organization`,
        name: 'MindPeak Institute',
        url: BASE,
      },
      knowsAbout: ['Physics', 'JEE Preparation', 'NEET Preparation'],
      hasCredential: ['BDS'],
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
