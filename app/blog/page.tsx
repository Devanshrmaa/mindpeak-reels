import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: `JEE & NEET Preparation Tips ${CURRENT_EXAM_YEAR} — Expert Strategies & Study Guides`,
  description: `Proven JEE/NEET study strategies, time management hacks, and subject-wise tips from IIT/NIT mentors. Updated for ${CURRENT_EXAM_YEAR}. Read free guides now.`,
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
};

export default async function BlogPage() {
  const { getAllPostsSummary } = await import("@/lib/blogResolver");
  const allSummaries = getAllPostsSummary();
  const posts = allSummaries.slice(0, 200).map(({ icon, ...rest }) => rest);
  const { default: BlogClient } = await import("./BlogClient");
  return <BlogClient posts={posts} />;
}
