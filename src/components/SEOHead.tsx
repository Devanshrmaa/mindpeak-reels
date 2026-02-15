import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

/**
 * Dynamically sets <title>, meta description, canonical, OG tags,
 * and injects JSON-LD structured data into the <head>.
 */
export const SEOHead = ({ title, description, canonical, ogImage, jsonLd }: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://mindpeakinstitute.com';
  const fullCanonical = canonical || `${baseUrl}${location.pathname}`;
  const fullOgImage = ogImage || `${baseUrl}/og-image.jpg`;

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

    // JSON-LD
    const scriptId = 'seo-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      const ldArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      const content = ldArray.map((ld) => JSON.stringify(ld)).join('\n');
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      // For multiple schemas, wrap in array
      scriptEl.textContent = ldArray.length === 1 ? JSON.stringify(ldArray[0]) : JSON.stringify(ldArray);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, fullCanonical, fullOgImage, jsonLd]);

  return null;
};
