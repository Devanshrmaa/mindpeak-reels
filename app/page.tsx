import Index from "@/views/Index";
import { HeroSection } from "@/components/sections/HeroSection";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

/** Fully static — no data fetching. Content only changes on deploy. */
export const revalidate = false;

export const metadata: Metadata = {
  title: `Best JEE & NEET Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 Mentors | 95% Success [Free Demo]`,
  description: `Crack JEE/NEET ${CURRENT_EXAM_YEAR} with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo class today — zero commitment.`,
  alternates: { canonical: "https://mindpeakinstitute.com/" },
};

/**
 * The <Index /> component lazy-loads all subcomponents with Next.js
 * dynamic imports, so the page progressively enhances into a fully
 * interactive experience on the client. SEO metadata is handled by
 * the server-side metadata export above.
 */
export default function HomePage() {
  return (
    <Index>
      <HeroSection />
    </Index>
  );
}

