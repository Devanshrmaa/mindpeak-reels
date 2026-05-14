/**
 * LCP Fixes — 2026-05-11
 *
 * MindPeak's LCP is already excellent (H1 text, SSR, critical CSS inlined).
 * These fixes prevent regressions and improve secondary image load perf.
 *
 * CRITICAL RULE: Do NOT add priority={true} or fetchPriority="high" to images
 * that are NOT the LCP element. Over-prioritising images delays the actual LCP.
 *
 * Files to update after running image-optimization.sh:
 */

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1: app/layout.tsx — Update hero preload to use WebP
// (After converting hero-bg.jpg → hero-bg.webp via image-optimization.sh)
//
// FIND this in app/layout.tsx (~line 203):
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
const _layoutHeadBefore = (
  <link
    rel="preload"
    as="image"
    href="/images/hero-bg.jpg"
    // @ts-expect-error fetchpriority is valid HTML but not yet in TS types
    fetchpriority="high"
  />
);

// AFTER (add imagesrcset for responsive WebP preload):
const _layoutHeadAfter = (
  <>
    {/* Preload WebP for browsers that support it, fall back to JPEG */}
    <link
      rel="preload"
      as="image"
      href="/images/hero-bg.webp"
      // @ts-expect-error fetchpriority is valid HTML but not yet in TS types
      fetchpriority="high"
      type="image/webp"
    />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2: src/components/sections/HeroSection.tsx — Update background to WebP
//
// FIND the style prop on the <header> element (~line 29):
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
const _heroBefore = {
  backgroundImage: 'url(/images/hero-bg.jpg)',
};

// AFTER:
const _heroAfter = {
  backgroundImage: 'url(/images/hero-bg.webp)',
};

// Also update the inline critical CSS in app/layout.tsx (~line 180):
// BEFORE: background-image:url(/images/hero-bg.jpg)
// AFTER:  background-image:url(/images/hero-bg.webp)

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3: src/components/sections/SuccessGrid.tsx — Switch from raw <img> to
//         Next.js <Image> component for the story grid images.
//
//         This lets Next.js serve WebP automatically + enforces dimension
//         reservation which eliminates CLS risk.
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE (SuccessGrid.tsx lines ~83–91):
const _successGridBefore = `
<img
  src={story.image}
  alt={altTextMap[story.id] || story.title}
  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
  style={{ objectPosition: story.objectPos || 'center center' }}
  loading="lazy"
  width={600}
  height={750}
/>
`;

// AFTER: Switch to Next.js Image for automatic WebP + size optimisation.
// Note: Next.js Image with fill requires position: relative on the parent,
// which the parent already has (aspect-[4/5] + overflow-hidden).
const _successGridAfter = `
import Image from 'next/image';

// Inside the story card <div className="w-full h-full overflow-hidden">:
<Image
  src={story.image}
  alt={altTextMap[story.id] || story.title}
  fill
  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
  style={{ objectPosition: story.objectPos || 'center center' }}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
`;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 4: src/components/sections/Courses.tsx — Raw <img> for course logos
//
// FIND (~line 54):
// ─────────────────────────────────────────────────────────────────────────────

// BEFORE:
const _courseLogoBefore = `
<img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" />
`;

// AFTER: add explicit dimensions to prevent CLS
const _courseLogoAfter = `
<img src={course.logo} alt={course.name} className="w-full h-full object-contain" loading="lazy" width={48} height={48} />
`;

// ─────────────────────────────────────────────────────────────────────────────
// What NOT to change (these are intentional and correct):
// ─────────────────────────────────────────────────────────────────────────────

// ✅ HeroSection uses CSS background-image (NOT <img>) — LCP is H1 text, not image
// ✅ Navbar logo uses <Image width={36} height={36}> — correct
// ✅ DiscoverySection icons use <img width={84} height={84}> — dimensions present
// ✅ TransformationTimeline icons use <img width={40} height={40}> — dimensions present
// ✅ LogoRings in DiscoverySection uses <Image> with loading="lazy" — correct

export {};
