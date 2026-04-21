import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = 3600;

const BASE = "https://mindpeakinstitute.com";

export const metadata: Metadata = {
  title: `JEE & NEET Preparation Tips ${CURRENT_EXAM_YEAR} — Expert Strategies & Study Guides`,
  description: `Proven JEE/NEET study strategies, time management hacks, and subject-wise tips from IIT/NIT mentors. Updated for ${CURRENT_EXAM_YEAR}. Read free guides now.`,
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    type: "website",
    url: `${BASE}/blog`,
    title: `JEE & NEET Preparation Blog ${CURRENT_EXAM_YEAR}`,
    description: `Proven JEE/NEET study strategies from IIT/AIIMS mentors. Free guides updated for ${CURRENT_EXAM_YEAR}.`,
    images: [{ url: `${BASE}/hero-bg.jpg`, width: 1200, height: 630 }],
    siteName: "MindPeak Institute",
  },
};

export default async function BlogPage() {
  const { getAllPostsSummary } = await import("@/lib/blogResolver");
  const allSummaries = getAllPostsSummary();
  const posts = allSummaries.slice(0, 200).map(({ icon, ...rest }) => rest);

  // Build CollectionPage + ItemList schema with top 12 featured posts
  const featured = posts.slice(0, 12);
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE}/blog`,
    name: `JEE & NEET Preparation Blog ${CURRENT_EXAM_YEAR}`,
    description: `Expert JEE/NEET preparation guides, study strategies, and subject tips from IIT/AIIMS alumni mentors.`,
    url: `${BASE}/blog`,
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${BASE}/#organization`,
      name: "MindPeak Institute",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: featured.length,
      itemListElement: featured.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  const { default: BlogClient } = await import("./BlogClient");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogClient posts={posts} />
    </>
  );
}
