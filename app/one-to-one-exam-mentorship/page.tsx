import ExamMentorshipHub from "@/views/ExamMentorshipHub";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `1-on-1 Mentorship for JEE, NEET, BITSAT, CUET & More (${CURRENT_EXAM_YEAR})`,
  // Description ≤155 chars — beyond that Google truncates the snippet.
  description: "One dedicated mentor plans, teaches, and tracks your preparation — 1-on-1 coaching for JEE, NEET, BITSAT, CUET and 10+ more entrance exams.",
  alternates: { canonical: "https://mindpeakinstitute.com/one-to-one-exam-mentorship" },
  openGraph: {
    title: `1-on-1 Exam Mentorship — One Dedicated Mentor for Any Entrance Exam (${CURRENT_EXAM_YEAR})`,
    description: "JEE, NEET, BITSAT, CUET, state CETs, ISI — every exam MindPeak mentors for, with syllabus-overlap notes and links to each program.",
    url: "https://mindpeakinstitute.com/one-to-one-exam-mentorship",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1-on-1 Exam Mentorship — One Dedicated Mentor for Any Entrance Exam",
    description: "JEE, NEET, BITSAT, CUET, state CETs, ISI — every exam MindPeak mentors for, mapped on one page.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default function Page() { return <ExamMentorshipHub />; }
