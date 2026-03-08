import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog — JEE & NEET Preparation Tips",
  description: "Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts.",
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
};

export default async function BlogPage() {
  // Dynamic import to prevent 20MB programmatic blog content from being in the fallback
  const { getAllPostsSummary } = await import("@/lib/blogResolver");
  const allSummaries = getAllPostsSummary();

  // Only send first 200 posts to client to keep page size reasonable
  // (7000+ post summaries would be ~5MB of serialized props)
  const posts = allSummaries.slice(0, 200).map(({ icon, ...rest }) => rest);

  const { default: BlogClient } = await import("./BlogClient");
  return <BlogClient posts={posts} />;
}
