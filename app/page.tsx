import AscentHome from "@/views/AscentHome";
import { PageFooter } from "@/components/PageFooter";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

/** Fully static — no data fetching. Content only changes on deploy. */
export const revalidate = false;

export const metadata: Metadata = {
  title: `Personalized JEE & NEET Coaching Online — 1-on-1 | MindPeak`,
  description: `Crack JEE/NEET ${CURRENT_EXAM_YEAR} with one-to-one coaching from personal IIT/NIT mentors. Adaptive study plan, 95% success rate, 500+ students. Book a free demo.`,
  alternates: {
    canonical: "https://mindpeakinstitute.com/",
    languages: {
      "en-IN": "https://mindpeakinstitute.com/",
      "x-default": "https://mindpeakinstitute.com/",
    },
  },
};

/**
 * The <AscentHome /> component renders the "The Ascent" homepage — a
 * topographic navy→gold editorial layout with a scroll altimeter, route-draw
 * method section and count-up stats. It is a client component; SEO metadata is
 * handled by the server-side metadata export above, and the crawlable content
 * shell below plus <PageFooter /> keep the homepage's indexable copy and
 * internal-link equity server-rendered.
 *
 * NOTE: The sr-only section below is a server-rendered content shell
 * for Googlebot. The redesigned homepage is client-rendered; this section
 * ensures 200+ words of core content are in the initial HTML so Google can
 * index the page without JS execution.
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
          MindPeak&apos;s approach combines the depth of Kota-style coaching with the convenience of
          online learning — students from any city in India receive personalized preparation without
          relocating. Every program starts with a diagnostic assessment, builds a plan around the
          student&apos;s weakest chapters, and is measured weekly against real mock-test data.
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
          <li>Dedicated 1-on-1 mentor for every student</li>
          <li>Daily live sessions, 6 days a week</li>
          <li>Adaptive curriculum built from diagnostic assessment</li>
          <li>Weak-chapter-first study plans, rebuilt weekly from mock data</li>
          <li>Same-day doubt resolution</li>
          <li>All sessions recorded for revision</li>
          <li>Weekly parent progress reports</li>
          <li>Programs for Class 6–12 and droppers, JEE and NEET</li>
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

      {/*
        Dark-first homepage: the "night ascent" design is the default experience.
        Runs before the homepage paints; respects an explicit user toggle choice
        (ThemeToggle stores `localStorage.theme`) — only OS-followers are opted
        into dark. Same pre-paint pattern as the theme bootstrap in app/layout.tsx.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){try{if(!localStorage.getItem('theme'))document.documentElement.classList.add('dark')}catch(e){}})();",
        }}
      />
      <AscentHome />

      {/*
       * Server-rendered footer link hub. The redesigned homepage closes with a
       * navy contact CTA but no link directory of its own, so PageFooter remains
       * the site's highest-authority internal-link surface. Its initial HTML
       * carries 120+ chapter/subject/city links — the primary crawl path from
       * the homepage. GSC URL Inspection (2026-06-10) showed those pages
       * "Crawled — currently not indexed"; do not remove this.
       */}
      <PageFooter />
    </>
  );
}

