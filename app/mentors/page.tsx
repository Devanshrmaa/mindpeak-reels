import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import MentorsSchema from "@/components/MentorsSchema";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = buildSEOLandingMetadata("mentors");

export default function Page() {
  return (
    <>
      <MentorsSchema />
      <SEOLandingPage />
    </>
  );
}
