import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE = "https://mindpeakinstitute.com";

/**
 * Blog posts are ISR-rendered on first visit, then cached for 24 hours.
 * Dynamic imports inside the function body prevent the 20MB blogResolver
 * from being bundled at build time — no generateStaticParams = no build-time render.
 */
export const dynamicParams = true;
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog | MindPeak Institute" };
  const canonical = `${BASE}/blog/${post.slug}`;
  const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";
  const { getBlogSeoOverride } = await import("@/lib/blogSeoOverrides");
  const override = getBlogSeoOverride(post.slug);
  const { clampDescription, TITLE_MAX } = await import("@/lib/titleFit");
  // The brand suffix costs 20 of the ~60 characters Google shows. On a post
  // whose own title already fills the budget it bought nothing and pushed the
  // content out of the SERP: /blog/ap-eamcet-vs-jee-main-comparison-2027 was
  // displaying "…Which Is Harder? Full Compariso". Keep the suffix only when
  // the whole title still fits.
  const branded = `${post.title} | MindPeak Institute`;
  const title = override
    ? override.title
    : branded.length <= TITLE_MAX
      ? branded
      : post.title;
  // Word-safe, and at Google's real 160-char limit rather than 155 — the
  // 155 budget was clipping hand-written overrides by a word or two (the
  // olympiad post's snippet ended "…compared with real numbe").
  const desc = clampDescription(override?.description ?? post.excerpt);
  const { isIndexableBlogSlug } = await import("@/lib/indexableBlogSlugs");
  const indexable = isIndexableBlogSlug(post.slug);
  return {
    title,
    description: desc,
    alternates: { canonical },
    ...(indexable ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      type: "article",
      url: canonical,
      title: override ? override.title : post.title,
      description: desc,
      publishedTime: post.publishDate,
      authors: [post.author],
      siteName: "MindPeak Institute",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: override ? override.title : post.title,
      description: desc,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Dynamic import to prevent blogResolver (and its 20MB programmatic content)
  // from being included in the pre-rendered fallback bundle
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) notFound();

  // Serialize: strip icon (React component can't be serialized)
  const serialized = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    author: post.author,
    publishDate: post.publishDate,
    readTime: post.readTime,
    content: post.content,
    color: post.color,
  };

  // Structured data — indexable (sitemap) posts only.
  const { isIndexableBlogSlug } = await import("@/lib/indexableBlogSlugs");
  const indexable = isIndexableBlogSlug(post.slug);

  // FAQPage JSON-LD from the post's Q/A section.
  const { buildBlogFaqJsonLd } = await import("@/lib/blogFaqSchema");
  const faqJsonLd = indexable ? buildBlogFaqJsonLd(post.content) : null;

  // BlogPosting JSON-LD with real author/reviewer entities (E-E-A-T).
  // Dates are pinned to publishDate — never "today" — so schema freshness
  // can't roll daily (the daily-rolling-dates problem fixed in PR #174).
  let articleJsonLd: string | null = null;
  if (indexable) {
    const { buildReviewedByJsonLd } = await import("@/lib/reviewedByJsonLd");
    const subjectTag =
      post.tags.find((t) => ["Physics", "Chemistry", "Mathematics", "Biology"].includes(t)) ??
      post.category;
    articleJsonLd = JSON.stringify({
      ...buildReviewedByJsonLd({
        pageUrl: `/blog/${post.slug}`,
        headline: post.title,
        exam: post.category === "NEET" ? "NEET" : "JEE",
        subject: subjectTag,
        reviewDate: post.publishDate,
        schemaType: "BlogPosting",
      }),
      datePublished: post.publishDate,
      description: post.excerpt,
    }).replace(/</g, "\\u003c");
  }

  return (
    <>
      {articleJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      )}
      <BlogPostClient post={serialized} />
    </>
  );
}
