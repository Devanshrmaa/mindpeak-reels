import Index from "@/views/Index";
import { HeroSection } from "@/components/sections/HeroSection";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

/** Fully static — no data fetching. Content only changes on deploy. */
export const revalidate = false;

export const metadata: Metadata = {
  title: `Personalised 1-on-1 JEE & NEET Coaching Online | MindPeak`,
  description: `Get personalised 1-on-1 JEE/NEET coaching from IIT/NIT mentors. Adaptive study plan, 95% success rate, 500+ students. Book a free demo class today.`,
  alternates: {
    canonical: "https://mindpeakinstitute.com/",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/",
      "x-default": "https://mindpeakinstitute.com/",
    },
  },
  openGraph: {
    title: "Personalised 1-on-1 JEE & NEET Coaching — MindPeak Institute",
    description:
      "Crack JEE/NEET with a dedicated IIT/NIT mentor — not a 200-student batch. Adaptive curriculum, daily doubt sessions, 95% success rate. Book a free demo.",
    url: "https://mindpeakinstitute.com/",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalised 1-on-1 JEE & NEET Coaching — MindPeak Institute",
    description:
      "Not a batch. A dedicated mentor from IIT/NIT who knows your gaps. 95% success rate. Book a free demo class.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

/**
 * The <Index /> component lazy-loads all subcomponents with Next.js
 * dynamic imports, so the page progressively enhances into a fully
 * interactive experience on the client. SEO metadata is handled by
 * the server-side metadata export above.
 *
 * NOTE: The sr-only section below is a server-rendered content shell
 * for Googlebot. The animated hero in <Index /> is client-rendered;
 * this section ensures 200+ words of core content are in the initial
 * HTML so Google can index the page without JS execution.
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
          MindPeak Institute — Best JEE &amp; NEET Coaching {CURRENT_EXAM_YEAR}
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
          Advanced, AIR 89 in JEE Mains, AIR 156 in NEET UG, and 50+ students under AIR 5,000. Our
          approach combines the depth of Kota-style coaching with the convenience of online learning —
          students from any city in India receive world-class personalized preparation without relocating.
        </p>
        <p>
          Key features include real-time 1-on-1 doubt resolution (under 30 minutes response time),
          weekly performance analytics shared with parents, complete JEE Main and Advanced syllabus
          coverage across Physics, Chemistry, and Mathematics, and comprehensive NEET preparation
          with a Biology-first approach and NCERT line-by-line mastery.
        </p>
        <h2>JEE Coaching Programs</h2>
        <p>
          Our JEE programs cover JEE Main and Advanced with personal mentors from IIT and NIT.
          Students receive a customized roadmap targeting their specific rank goal, daily live classes,
          weekly CBT-format mock tests, and strategic exam-day preparation. Whether you are in
          Class 11, Class 12, or a dropper — we have a focused program for every stage.
        </p>
        <h2>NEET Coaching Programs</h2>
        <p>
          MindPeak&apos;s NEET programs follow an NCERT-first approach with specialized Biology mentors
          from AIIMS and top medical colleges. Coverage includes Physics, Chemistry, and Biology with
          topic-wise practice, chapter tests, and full-length NTA-pattern mock exams in CBT format.
        </p>
        <h2>Foundation Programs (Class 6th to 10th)</h2>
        <p>
          Start early with our Foundation programs designed for students in Class 6 through 10.
          Build a strong base for IIT-JEE and NEET alongside board exam preparation. Includes
          Olympiad training, NTSE preparation, and scientific habit building with age-appropriate mentoring.
        </p>
        <h2>Our Methodology</h2>
        <p>
          MindPeak&apos;s teaching methodology is built on four pillars: 1-on-1 Mentoring with a dedicated
          mentor for every student, Adaptive Curriculum that adjusts based on performance analytics,
          Deep Practice emphasizing conceptual understanding over rote memorization, and Progress
          Tracking with weekly analytics reports for data-driven course correction.
        </p>
        <ul>
          <li>500+ students mentored across India</li>
          <li>95% success rate in JEE and NEET</li>
          <li>Best rank: AIR 42 in JEE Advanced</li>
          <li>50+ students under AIR 5,000</li>
          <li>Daily 1-on-1 live sessions, 6 days a week</li>
          <li>AI-driven adaptive curriculum</li>
          <li>Doubt resolution in under 30 minutes</li>
          <li>All sessions recorded for revision</li>
          <li>Weekly parent progress reports</li>
          <li>12+ specialized programs for every need</li>
        </ul>
        <meta itemProp="telephone" content="+91-82194-57704" />
        <meta itemProp="email" content="mindpeak@mindpeakinstitute.com" />
        <meta itemProp="url" content="https://mindpeakinstitute.com" />
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content="Nehran Pukhar Road" />
          <meta itemProp="addressLocality" content="Dehra Gopipur" />
          <meta itemProp="addressRegion" content="Himachal Pradesh" />
          <meta itemProp="postalCode" content="176110" />
          <meta itemProp="addressCountry" content="IN" />
        </span>
      </section>

      <Index>
        <HeroSection />
      </Index>
    </>
  );
}

