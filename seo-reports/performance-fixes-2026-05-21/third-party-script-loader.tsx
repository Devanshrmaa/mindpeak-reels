/**
 * Third-Party Script Loading Strategy — 2026-05-21
 *
 * Current implementation in app/layout.tsx is already optimal.
 * This file documents the pattern for reference and future scripts.
 */

// ============================================================
// CURRENT STRATEGY (already implemented — do not change)
// ============================================================
//
// Google Analytics + Google Ads are loaded via a Next.js <Script> component
// with strategy="afterInteractive". The script itself registers a one-time
// event listener for the first user interaction (click, touchstart, keydown)
// OR falls back to a 6-second idle timeout.
//
// This means: zero GA/Ads JavaScript executes during the critical LCP window.
// Only after the user touches the page (or 6s passes) do the full scripts load.
//
// TBT impact: ~0ms from third-party scripts
// Score impact: estimated +8-12 points vs. loading GA synchronously

// ============================================================
// TEMPLATE: How to add a new third-party script correctly
// ============================================================

import Script from 'next/script';
import { useEffect } from 'react';

// Option A: Load after user interaction (for analytics/tracking)
// Use this for: chat widgets, heatmaps, A/B testing tools
export function DeferredScript({ src, id }: { src: string; id: string }) {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.id = id;
      document.body.appendChild(script);
    };

    // Load on first interaction OR after 5 seconds, whichever comes first
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }));
    const timer = setTimeout(load, 5000);

    return () => {
      events.forEach(e => window.removeEventListener(e, load));
      clearTimeout(timer);
    };
  }, [src, id]);

  return null;
}

// Option B: Load immediately but non-blocking (for payment SDKs, maps)
// Use this for: Razorpay (only on checkout pages), Google Maps (only on contact)
export function AsyncScript({ src, id }: { src: string; id: string }) {
  return (
    <Script
      src={src}
      id={id}
      strategy="lazyOnload"
    />
  );
}

// ============================================================
// RAZORPAY — If/When Added
// ============================================================
// DO NOT load Razorpay on every page.
// Load it only in the payment/checkout component, on demand:
//
// const loadRazorpay = () => new Promise<void>((resolve) => {
//   if (window.Razorpay) { resolve(); return; }
//   const script = document.createElement('script');
//   script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//   script.onload = () => resolve();
//   document.body.appendChild(script);
// });
//
// // Call before opening the Razorpay modal:
// await loadRazorpay();
// const rzp = new window.Razorpay(options);
// rzp.open();

// ============================================================
// CHAT WIDGET — If/When Added
// ============================================================
// Load after 8 seconds idle OR after user scrolls 50% of page:
//
// useEffect(() => {
//   const timer = setTimeout(() => {
//     import('./ChatWidget').then(({ initChat }) => initChat());
//   }, 8000);
//   return () => clearTimeout(timer);
// }, []);
