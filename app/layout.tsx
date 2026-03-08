import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { ScrollToTop } from "./scroll-to-top";
import "./globals.css";

/* ── Fonts ── */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ── Metadata (migrated from index.html) ── */
export const metadata: Metadata = {
  title: {
    default:
      "MindPeak Institute — #1 Personalized JEE & NEET Coaching 2026 | 95% Success",
    template: "%s",
  },
  description:
    "Transform your JEE/NEET preparation with personalized 1-on-1 coaching. Achieve AIR <5K with adaptive curriculum, dedicated mentors. Trusted by 500+ students.",
  keywords: [
    "jee coaching",
    "neet coaching",
    "online jee coaching",
    "personalized coaching",
    "iit jee coaching",
    "one on one jee coaching",
    "best jee coaching",
    "neet online coaching",
    "jee preparation",
    "neet preparation",
    "1-on-1 coaching",
  ],
  authors: [{ name: "MindPeak Institute" }],
  robots: "index, follow",
  metadataBase: new URL("https://mindpeakinstitute.com"),
  alternates: {
    canonical: "https://mindpeakinstitute.com/",
    languages: {
      "en-in": "https://mindpeakinstitute.com/",
      "x-default": "https://mindpeakinstitute.com/",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://mindpeakinstitute.com/",
    title: "MindPeak Institute — #1 Personalized JEE & NEET Coaching",
    description:
      "Achieve AIR <5K with personalized 1-on-1 coaching, adaptive curriculum, and dedicated mentors. 95% success rate. Trusted by 500+ students.",
    images: [
      {
        url: "https://mindpeakinstitute.com/hero-bg.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    siteName: "MindPeak Institute",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindpeakins",
    title: "MindPeak Institute — #1 Personalized JEE & NEET Coaching",
    description:
      "Achieve AIR <5K with personalized 1-on-1 coaching. 95% success rate. Trusted by 500+ students across India.",
    images: ["https://mindpeakinstitute.com/hero-bg.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Kota, Rajasthan, India",
    "geo.position": "25.2138;75.8648",
    ICBM: "25.2138, 75.8648",
    language: "English",
    "revisit-after": "7 days",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0e27",
};

/* ── JSON-LD structured data (from index.html) ── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://mindpeakinstitute.com/#organization",
      name: "MindPeak Institute",
      alternateName: "MindPeak",
      url: "https://mindpeakinstitute.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://mindpeakinstitute.com/#logo",
        url: "https://mindpeakinstitute.com/favicon.ico",
        width: 64,
        height: 64,
      },
      description:
        "India's #1 personalized 1-on-1 JEE and NEET coaching with 95% success rate.",
      telephone: "+91-82194-57704",
      email: "mindpeak@mindpeakinstitute.com",
      foundingDate: "2018",
      areaServed: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kota",
        addressRegion: "Rajasthan",
        postalCode: "324005",
        addressCountry: "IN",
      },
      sameAs: [
        "https://instagram.com/mindpeakinstitute",
        "https://www.facebook.com/profile.php?id=61584805776923",
        "https://www.linkedin.com/company/mindpeak-institute/",
        "https://x.com/mindpeakins",
        "https://www.youtube.com/@mindpeakinstitute",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mindpeakinstitute.com/#website",
      url: "https://mindpeakinstitute.com",
      name: "MindPeak Institute",
      publisher: { "@id": "https://mindpeakinstitute.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://mindpeakinstitute.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: ["en-IN", "hi-IN"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className="bg-background text-foreground antialiased"
        style={{ backgroundColor: "hsl(225, 43%, 7%)", color: "hsl(210, 40%, 98%)" }}
      >
        <ScrollToTop />
        <Providers>{children}</Providers>

        {/* Google Analytics 4 — deferred */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MM0L1F7JJ6"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MM0L1F7JJ6', { send_page_view: true });
            gtag('config', 'AW-17962731707');
          `}
        </Script>
      </body>
    </html>
  );
}
