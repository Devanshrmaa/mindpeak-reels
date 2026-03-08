import SEOLandingPage from "@/views/SEOLandingPage";
import { buildSEOLandingMetadata } from "@/lib/seoLandingMetadata";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  ...buildSEOLandingMetadata("methodology"),
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `MindPeak Coaching Methodology — How We Prepare Students for JEE & NEET ${CURRENT_EXAM_YEAR}`,
      description: `Step-by-step methodology for personalized JEE & NEET ${CURRENT_EXAM_YEAR} coaching at MindPeak Institute.`,
      totalTime: 'P12M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Diagnostic Assessment', text: 'Comprehensive diagnostic test to identify your current level, strengths, weak areas, and learning style across all subjects.' },
        { '@type': 'HowToStep', position: 2, name: 'Personalized Study Plan', text: 'Your dedicated mentor creates a customized month-by-month study plan based on diagnostic results, exam timeline, and target rank.' },
        { '@type': 'HowToStep', position: 3, name: 'Daily 1-on-1 Live Sessions', text: 'Attend daily live video sessions with your personal mentor, 6 days a week. Concepts taught through interactive problem-solving.' },
        { '@type': 'HowToStep', position: 4, name: 'Adaptive Curriculum Updates', text: 'Weekly analytics reviews trigger curriculum adjustments — more time on weak chapters, accelerated pace on strengths.' },
        { '@type': 'HowToStep', position: 5, name: 'Mock Tests & PYQ Practice', text: 'Regular full-length mock tests in exact exam pattern. Previous year questions analyzed chapter-wise with detailed solutions.' },
        { '@type': 'HowToStep', position: 6, name: 'Final Revision & Exam Strategy', text: 'Intensive revision phase with formula sheets, quick-recall sessions, time management strategy, and exam-day preparation.' },
      ],
    }),
  },
};
export default function Page() { return <SEOLandingPage />; }
