import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

/**
 * Blog listing is ISR-rendered and cached for 1 hour.
 * Shorter than individual posts because new posts may appear.
 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: `JEE & NEET Study Guides ${CURRENT_EXAM_YEAR} — Expert Tips | MindPeak`,
  description: `Expert JEE & NEET guides by IIT/AIIMS mentors — personalized study strategies, paper analysis, cutoff trends & dropper roadmaps. Updated ${CURRENT_EXAM_YEAR}. Free.`,
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
  openGraph: {
    title: `Free JEE & NEET Study Guides ${CURRENT_EXAM_YEAR} by MindPeak Experts`,
    description: "100+ expert articles on JEE & NEET preparation — from subject strategies to college admission guides. Written by IIT & AIIMS alumni.",
    url: "https://mindpeakinstitute.com/blog",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `JEE & NEET Expert Study Guides ${CURRENT_EXAM_YEAR} | MindPeak`,
    description: "Free expert guides on JEE & NEET preparation by IIT & AIIMS alumni mentors. Updated for the latest exam patterns.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};

export default async function BlogPage() {
  const { getAllPostsSummary } = await import("@/lib/blogResolver");
  const allSummaries = getAllPostsSummary();
  const posts = allSummaries.slice(0, 200).map(({ icon, ...rest }) => rest);
  const { default: BlogClient } = await import("./BlogClient");
  return <BlogClient posts={posts} />;
}
