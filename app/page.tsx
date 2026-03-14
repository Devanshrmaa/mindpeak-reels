import Index from "@/views/Index";
import { HeroSection } from "@/components/sections/HeroSection";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `Best JEE & NEET Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 Mentors | 95% Success [Free Demo]`,
  description: `Crack JEE/NEET ${CURRENT_EXAM_YEAR} with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo class today — zero commitment.`,
  alternates: { canonical: "https://mindpeakinstitute.com/" },
};

/**
 * SSR-rendered intro content for Googlebot crawlability.
 * The animated hero in <Index /> is client-rendered; this section
 * ensures 200+ words of core content are in the initial HTML.
 */
export default function HomePage() {
  return (
    <>
      {/* SSR-crawlable content block — visible to Googlebot, visually hidden for JS users */}
      <section
        aria-label="About MindPeak Institute"
        className="sr-only"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <h1 itemProp="name">
          MindPeak Institute — Best JEE & NEET Coaching {CURRENT_EXAM_YEAR}
        </h1>
        <p itemProp="description">
          MindPeak Institute is India&apos;s leading personalized 1-on-1 JEE and NEET coaching platform.
          Unlike traditional batch coaching centres with 100+ students per class, MindPeak pairs every
          aspirant with a dedicated personal mentor from IIT, NIT, or AIIMS for daily live sessions,
          6 days a week. Our adaptive AI-driven curriculum identifies each student&apos;s specific weak
          areas and creates a customized study plan that evolves weekly based on performance data.
        </p>
        <p>
          With a 95% success rate and 500+ students mentored, MindPeak has produced an AIR 42 in JEE
          Advanced and 50+ students under AIR 5,000. Our approach combines the depth of Kota-style
          coaching with the convenience of online learning — students from any city in India receive
          world-class personalized preparation without relocating.
        </p>
        <p>
          Key features include real-time 1-on-1 doubt resolution (under 30 minutes response time),
          weekly performance analytics shared with parents, complete JEE Main and Advanced syllabus
          coverage across Physics, Chemistry, and Mathematics, and comprehensive NEET preparation
          with a Biology-first approach and NCERT line-by-line mastery.
        </p>
        <ul>
          <li>500+ students mentored across India</li>
          <li>95% success rate in JEE and NEET</li>
          <li>Best rank: AIR 42 in JEE Advanced</li>
          <li>50+ students under AIR 5,000</li>
          <li>Daily 1-on-1 live sessions, 6 days a week</li>
          <li>AI-driven adaptive curriculum</li>
        </ul>
        <meta itemProp="telephone" content="+91-82194-57704" />
        <meta itemProp="url" content="https://mindpeakinstitute.com" />
      </section>

      <Index>
        <HeroSection />
      </Index>
    </>
  );
}
