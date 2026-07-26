import type { Metadata } from "next";
import NEETCBT2027Guide from "@/views/NEETCBT2027Guide";

export const dynamic = "force-static";
export const revalidate = 1800;

const TITLE = "NEET UG 2027 CBT Mode: What Changes & How to Prepare";
const DESCRIPTION =
  "NEET UG shifts fully to Computer-Based Test (CBT) from 2027, ending OMR sheets. Union Education Minister Dharmendra Pradhan confirmed the reform on 15 May 2026. What's changing, what isn't, and how to prepare.";
const CANONICAL = "https://mindpeakinstitute.com/neet-cbt-2027-guide";
const DATE_PUBLISHED = "2026-07-26T10:00:00+05:30";
const DATE_MODIFIED = "2026-07-26T10:00:00+05:30";

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
    url: "https://mindpeakinstitute.com/neet-cbt-2027-guide/opengraph-image",
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  about: [
    { "@type": "Thing", name: "NEET UG 2027" },
    { "@type": "Thing", name: "National Testing Agency" },
    { "@type": "Thing", name: "Computer Based Test" },
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
      name: "Is NEET UG 2027 really going fully computer-based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Union Education Minister Dharmendra Pradhan confirmed on 15 May 2026 that NEET UG will shift completely to Computer-Based Test (CBT) mode from 2027, replacing the OMR pen-and-paper format used every year since NEET began.",
      },
    },
    {
      "@type": "Question",
      name: "Why is NEET UG moving to CBT mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The decision follows the NEET UG 2026 paper leak, which forced NTA to cancel the 3 May 2026 exam and conduct a re-exam on 21 June 2026 for over 22 lakh candidates. The government identified the OMR-based paper system itself as the core vulnerability, and CBT — a secure, NTA-managed digital platform — is intended to close that gap.",
      },
    },
    {
      "@type": "Question",
      name: "Will the NEET 2027 syllabus or marking scheme change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No official notification has changed either. The NMC-notified syllabus and the +4/−1 marking scheme are expected to stay as they are — CBT changes only how you answer, not what or how you're scored. NTA has not yet released a formal notification confirming every detail, and we will update this page when it does.",
      },
    },
    {
      "@type": "Question",
      name: "What actually changes for students on exam day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will read questions and Physics diagrams on a computer screen and select or change answers with a mouse/keyboard instead of shading OMR bubbles with a pencil. There is no paper to carry, no bubble-filling technique to practise, and results processing should be faster since there's no OMR scanning step.",
      },
    },
    {
      "@type": "Question",
      name: "How should I prepare differently for a computer-based NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start taking full-length mock tests on a screen, not just on paper. Practise navigating between questions, marking for review, and reading Physics circuit diagrams on-screen rather than printed. The content you need to know hasn't changed — NCERT-first Biology, formula fluency in Physics and Chemistry — but your exam-day muscle memory needs to shift from a pencil to a mouse well before the real thing.",
      },
    },
    {
      "@type": "Question",
      name: "Does this affect Class 11 students preparing for NEET UG 2027 differently than droppers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not significantly — everyone appearing in 2027 sits the same CBT exam. Class 11/12 students have the advantage of building CBT-style mock practice into their preparation from the start; droppers who trained on paper-based mocks for a previous attempt need to deliberately rebuild that habit around a screen instead of assuming it will transfer automatically.",
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
          url: "https://mindpeakinstitute.com/neet-cbt-2027-guide/opengraph-image",
          width: 1200,
          height: 630,
          alt: "NEET UG 2027 CBT Mode — MindPeak Institute Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mindpeakins",
      title: TITLE,
      description: DESCRIPTION,
      images: [
        "https://mindpeakinstitute.com/neet-cbt-2027-guide/opengraph-image",
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

export default function NEETCBT2027GuidePage() {
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
      <NEETCBT2027Guide />
    </>
  );
}
