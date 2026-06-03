import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import { buildFacultySchemas } from "@/components/FacultySchema";
import type { Metadata } from "next";

export const revalidate = false;

const facultyGraph = {
  '@context': 'https://schema.org',
  '@graph': buildFacultySchemas(),
};

export const metadata: Metadata = {
  ...buildSEOLandingMetadata("mentors"),
  other: {
    'script:ld+json': JSON.stringify(facultyGraph),
  },
};

export default function Page() { return <SEOLandingPage />; }
