'use client';

import { useEffect } from 'react';

/**
 * Google Analytics 4 Integration
 * 
 * Set the GA4 Measurement ID via environment variable:
 * NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 * 
 * Falls back to hardcoded G-MM0L1F7JJ6 if not set.
 * The script loads automatically after a 2s delay for performance.
 * Events can be tracked using the `trackEvent` helper.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-MM0L1F7JJ6';

// Extend window for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGA4Script(measurementId: string) {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });
}

/** Drop-in component — renders nothing, just initializes GA4 after 2s delay */
export const GoogleAnalytics = () => {
  useEffect(() => {
    if (GA_ID) {
      // Defer GA loading by 2s for better page load performance
      const timer = setTimeout(() => loadGA4Script(GA_ID), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
};

/** Also configure Google Ads if needed */
export function configureGoogleAds(adsId: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', adsId);
  }
}

/** Track custom events — safe to call even if GA4 isn't loaded */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/** Pre-built event helpers */
export const ga = {
  ctaClick: (location: string, text: string) =>
    trackEvent('cta_click', { cta_location: location, cta_text: text }),
  formSubmit: (formType: string, location: string) =>
    trackEvent('form_submit', { form_type: formType, form_location: location }),
  videoView: (title: string, duration: number) =>
    trackEvent('video_view', { video_title: title, video_duration: duration }),
  scrollDepth: (percent: number) =>
    trackEvent('scroll', { percent_scrolled: percent }),
  pageView: (path: string, title: string) =>
    trackEvent('page_view', { page_location: path, page_title: title }),
};
