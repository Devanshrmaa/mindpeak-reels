import type { Metadata } from "next";
import NEETUGCancelled2026 from "@/views/NEETUGCancelled2026";

export const dynamic = "force-static";
export const revalidate = 1800;

const TITLE = "NEET UG 2026 Cancelled — What Students Must Know | MindPeak";
const DESCRIPTION =
  "NTA cancelled NEET UG 2026 after paper leak allegations. CBI probe underway. Full update: timeline, FAQs & what aspirants should do next.";
const CANONICAL = "https://mindpeakinstitute.com/neet-ug-2026-cancelled";
const DATE_PUBLISHED = "2026-05-12T10:00:00+05:30";
const DATE_MODIFIED = "2026-05-12T14:30:00+05:30";

/* ── JSON-LD blocks ── */
const newsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESCRIPTION,
  url: CANONICAL,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  author: {
    "@type": "Person",
    name: "Devansh",
    jobTitle: "Founder & Head Mentor",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "MindPeak Institute",
      url: "https://mindpeakinstitute.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "MindPeak Institute",
    url: "https://mindpeakinstitute.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mindpeakinstitute.com/favicon.ico",
      width: 64,
      height: 64,
    },
  },
  image: {
    "@type": "ImageObject",
    url: "https://mindpeakinstitute.com/neet-ug-2026-cancelled/opengraph-image",
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  about: [
    { "@type": "Thing", name: "NEET UG 2026" },
    { "@type": "Thing", name: "National Testing Agency" },
    { "@type": "Thing", name: "Paper Leak" },
  ],
  isAccessibleForFree: true,
  inLanguage: "en-IN",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is NEET UG 2026 cancelled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The National Testing Agency (NTA) officially cancelled NEET UG 2026 on 12 May 2026, citing paper leak allegations that are now under a CBI probe.",
      },
    },
    {
      "@type": "Question",
      name: "When is the NEET UG 2026 re-exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The re-exam date has not been announced yet. NTA has stated that fresh dates will be notified on neet.nta.nic.in. Students should check the official website regularly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to re-register for NEET 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. According to NTA's official statement, students who were registered for NEET UG 2026 do not need to re-register. Their existing registration will be carried forward to the re-exam.",
      },
    },
    {
      "@type": "Question",
      name: "Will my NEET 2026 fees be refunded?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NTA has confirmed that registration fees will be refunded to all candidates. The refund process timeline will be announced separately.",
      },
    },
    {
      "@type": "Question",
      name: "Is the May 3 NEET 2026 result going to be declared?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. With the exam cancelled, no result for the 3 May 2026 attempt will be declared. The result will only be announced after the re-exam is conducted.",
      },
    },
    {
      "@type": "Question",
      name: "What does the CBI probe mean for NEET aspirants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CBI probe focuses on identifying those responsible for the paper leak. It does not directly affect your preparation or eligibility. Students should continue preparing for the re-exam and monitor official communications from NTA.",
      },
    },
    {
      "@type": "Question",
      name: "How should I continue preparing for the re-test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treat this as bonus revision time. Focus on NCERT line-by-line for Biology, strengthen weak chapters in Physics and Chemistry, and maintain a regular practice test schedule. Having a mentor can help you stay consistent and update your strategy as the re-exam date approaches.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://mindpeakinstitute.com/#organization",
  name: "MindPeak Institute",
  alternateName: "MindPeak",
  url: "https://mindpeakinstitute.com",
  logo: {
    "@type": "ImageObject",
    url: "https://mindpeakinstitute.com/favicon.ico",
    width: 64,
    height: 64,
  },
  description:
    "India's #1 personalized 1-on-1 JEE and NEET coaching. UDYAM-HP-04-0042530.",
  telephone: "+91-82194-57704",
  email: "mindpeak@mindpeakinstitute.com",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dehra Gopipur",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "UDYAM",
    value: "UDYAM-HP-04-0042530",
  },
  sameAs: [
    "https://instagram.com/mindpeakinstitute",
    "https://www.facebook.com/profile.php?id=61584805776923",
    "https://www.linkedin.com/company/mindpeak-institute/",
    "https://x.com/mindpeakins",
    "https://www.youtube.com/@mindpeakinstitute",
  ],
};

export function generateMetadata(): Metadata {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: CANONICAL },
    authors: [{ name: "Devansh", url: "https://mindpeakinstitute.com/mentors" }],
    openGraph: {
      type: "article",
      url: CANONICAL,
      title: TITLE,
      description: DESCRIPTION,
      siteName: "MindPeak Institute",
      locale: "en_IN",
      publishedTime: DATE_PUBLISHED,
      modifiedTime: DATE_MODIFIED,
      authors: ["Devansh"],
      images: [
        {
          url: "https://mindpeakinstitute.com/neet-ug-2026-cancelled/opengraph-image",
          width: 1200,
          height: 630,
          alt: "NEET UG 2026 Cancelled — MindPeak Institute Update",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mindpeakins",
      title: TITLE,
      description: DESCRIPTION,
      images: [
        "https://mindpeakinstitute.com/neet-ug-2026-cancelled/opengraph-image",
      ],
    },
    other: {
      "article:published_time": DATE_PUBLISHED,
      "article:modified_time": DATE_MODIFIED,
      "article:author": "Devansh",
      "article:section": "NEET News",
    },
  };
}

export default function NEETUGCancelledPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <NEETUGCancelled2026 />
    </>
  );
}
