import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

/**
 * Sets <title>, meta description, canonical, OG tags via useEffect,
 * and renders JSON-LD structured data server-side as inline <script> tags.
 */
export const SEOHead = ({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) => {
  const pathname = usePathname();
  const baseUrl = 'https://mindpeakinstitute.com';
  const fullCanonical = canonical || `${baseUrl}${pathname}`;
  const fullOgImage = ogImage || `${baseUrl}/images/hero-bg.jpg`;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullCanonical);
  }, [title, description, fullCanonical, fullOgImage]);

  // Render JSON-LD as inline script tags — works during SSR so Google can crawl it
  if (!jsonLd) return null;

  const ldArray = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(
    (ld): ld is object => ld != null && typeof ld === 'object' && Object.keys(ld).length > 0,
  );

  if (ldArray.length === 0) return null;

  return (
    <>
      {ldArray.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
    </>
  );
};
