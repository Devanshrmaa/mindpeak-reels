/**
 * Third-Party Script Audit — 2026-06-18
 *
 * STATUS: No action required. The current implementation is already optimal.
 *
 * Scripts in use:
 * - Google Analytics 4 (G-MM0L1F7JJ6)
 * - Google Ads (AW-17962731707)
 *
 * Both use the interaction-based deferral strategy in app/layout.tsx:
 * - Fires on first: pointerdown, keydown, touchstart, or scroll
 * - Falls back to requestIdleCallback (or 6s setTimeout) if no interaction
 * - Zero blocking impact on TBT or INP before user interacts
 *
 * No chat widgets, Facebook Pixel, Razorpay, or other blocking third-party
 * scripts were found in the codebase. This is excellent for performance.
 *
 * Included below for reference: the deferred loader pattern.
 */

// Current implementation (app/layout.tsx) — keep this as-is:
const GALoader = `
(function() {
  var fired = false;
  function loadGA() {
    if (fired) return;
    fired = true;
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-MM0L1F7JJ6', { send_page_view: true });
    gtag('config', 'AW-17962731707');
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-MM0L1F7JJ6';
    document.head.appendChild(s);
  }
  var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
  events.forEach(function(e) {
    window.addEventListener(e, loadGA, { once: true, passive: true });
  });
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGA, { timeout: 6000 });
  } else {
    setTimeout(loadGA, 6000);
  }
})();
`;

/**
 * If a Razorpay payment button is ever added to the site, load it only
 * on the page that needs it, never globally:
 */
const RazorpayOnDemandExample = () => {
  // Only run this inside a payment/checkout page component, never in layout.tsx
  const loadRazorpay = () => {
    const existing = document.getElementById("razorpay-script");
    if (existing) return Promise.resolve();
    return new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.id = "razorpay-script";
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = reject;
      document.body.appendChild(s);
    });
  };
  // Call loadRazorpay() only when user clicks "Pay Now", never on mount
  return null;
};

export { GALoader, RazorpayOnDemandExample };
