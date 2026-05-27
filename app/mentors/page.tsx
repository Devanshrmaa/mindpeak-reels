import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import { buildFacultyGraphSchema } from "@/lib/facultySchema";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = buildSEOLandingMetadata("mentors");

const facultySchema = buildFacultyGraphSchema();

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facultySchema) }}
      />
      <SEOLandingPage />
    </>
  );
}
