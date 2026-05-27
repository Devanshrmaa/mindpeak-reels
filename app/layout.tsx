import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { ScrollToTop } from "./scroll-to-top";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import "./globals.css";

/* ── Fonts ── */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

/* ── Metadata (migrated from index.html) ── */
export const metadata: Metadata = {
  title: {
    default: `MindPeak Institute — #1 Personalized JEE & NEET Coaching ${CURRENT_EXAM_YEAR} | 95% Success`,
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
  robots: { index: true, follow: true },
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
    "geo.region": "IN-HP",
    "geo.placename": "Dehra Gopipur, Kangra, Himachal Pradesh, India",
    "geo.position": "32.4394;76.5362",
    ICBM: "32.4394, 76.5362",
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
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://mindpeakinstitute.com/#organization",
      name: "MindPeak Institute",
      alternateName: "MindPeak",
      url: "https://mindpeakinstitute.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://mindpeakinstitute.com/#logo",
        url: "https://mindpeakinstitute.com/images/logo.jpeg",
        width: 200,
        height: 200,
      },
      description:
        "India's #1 personalized 1-on-1 JEE and NEET online coaching. Himachal Pradesh's own coaching institute with a 95%+ success rate.",
      telephone: "+91-82194-57704",
      email: "mindpeak@mindpeakinstitute.com",
      foundingDate: "2018",
      priceRange: "₹₹",
      areaServed: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nehran Pukhar Road",
        addressLocality: "Dehra Gopipur",
        addressRegion: "Himachal Pradesh",
        postalCode: "176110",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.4394,
        longitude: 76.5362,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": "https://mindpeakinstitute.com/mentors#devansh",
        name: "Devansh",
        jobTitle: "Founder & Physics Mentor",
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
        {/* DNS-prefetch for deferred analytics */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        {/*
          Critical CSS — inlined so the browser can paint the hero H1 (LCP element)
          without waiting for external CSS chunks to download.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: [
              ':root{--background:225 43% 7%;--foreground:210 40% 98%;--primary:43 72% 52%;--muted-foreground:215 20% 65%;--gradient-gold:linear-gradient(135deg,hsl(43 80% 65%),hsl(43 72% 52%),hsl(43 65% 42%));--font-display:"Space Grotesk",sans-serif;--font-body:"Inter",system-ui,sans-serif}',
              'body{background:hsl(225,43%,7%);color:hsl(210,40%,98%);margin:0;font-family:var(--font-body);-webkit-font-smoothing:antialiased}',
              'h1,h2,h3{font-family:var(--font-display);letter-spacing:-0.02em}',
              '#hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background-image:url(/images/hero-bg.jpg);background-size:cover;background-position:center top}',
              '.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}',
              '.z-10{z-index:10}.z-\\[3\\]{z-index:3}',
              '.flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}',
              '.w-full{width:100%}.text-center{text-align:center}.mx-auto{margin-left:auto;margin-right:auto}',
              '.block{display:block}.overflow-hidden{overflow:hidden}',
              '.font-display{font-family:var(--font-display)}.font-black{font-weight:900}.uppercase{text-transform:uppercase}',
              '.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}',
              '.text-gradient-gold{background:var(--gradient-gold);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
              '.bg-gradient-to-b{background:linear-gradient(to bottom,var(--tw-gradient-stops))}',
              '.from-black\\/70{--tw-gradient-from:rgba(0,0,0,.7);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,transparent)}',
              '.via-black\\/30{--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.3),var(--tw-gradient-to,transparent)}',
              '.to-black\\/80{--tw-gradient-to:rgba(0,0,0,.8)}',
              '.vignette{background:radial-gradient(ellipse at center,transparent 0%,hsl(225 43% 7%/.8) 100%)}',
              '.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}',
            ].join(''),
          }}
        />
        {/*
          Hero background preload — the hero now uses CSS background-image (not
          next/image), so we preload the raw JPEG here.  This is the only consumer
          of this URL so there is no duplicate-download risk.
        */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          // @ts-expect-error fetchpriority is valid HTML but not yet in TS types
          fetchpriority="high"
        />
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

        <Script id="ga-init" strategy="afterInteractive">
          {`
            (function () {
              var started = false;
              function bootAnalytics() {
                if (started) return;
                started = true;

                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', 'G-MM0L1F7JJ6', { send_page_view: true });
                window.gtag('config', 'AW-17962731707');

                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MM0L1F7JJ6';
                document.head.appendChild(script);
              }

              var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
              var cleanup = function () {
                events.forEach(function (name) {
                  window.removeEventListener(name, onFirstInput, { passive: true });
                });
              };
              var onFirstInput = function () {
                cleanup();
                bootAnalytics();
              };

              events.forEach(function (name) {
                window.addEventListener(name, onFirstInput, { passive: true, once: true });
              });

              if ('requestIdleCallback' in window) {
                requestIdleCallback(bootAnalytics, { timeout: 6000 });
              } else {
                setTimeout(bootAnalytics, 6000);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
