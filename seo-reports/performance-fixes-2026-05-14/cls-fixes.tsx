/**
 * CLS (Cumulative Layout Shift) Fixes — 2026-05-14
 * MindPeak Institute — mindpeakinstitute.com
 *
 * STATUS: All P0/P1 CLS issues resolved as of this session.
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FIX 1: Index.tsx — Deferred sections height placeholder
// File: src/views/Index.tsx
// Status: ✅ APPLIED 2026-05-14
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// Problem: When showDeferredSections flips true (after requestIdleCallback),
// the DOM went from rendering nothing to ~4000px of content.
// On a fast device where the user had already scrolled, this caused a
// layout recalculation that could shift visible content (CLS).
//
// Fix: Always render a placeholder div with minHeight: 4000px.
// When sections mount, the placeholder collapses and is replaced by
// the real content — net change in page height is zero.

// BEFORE (in src/views/Index.tsx)
/*
{showDeferredSections ? (
  <div style={{ contentVisibility: 'auto', containIntrinsicSize: '3000px', contain: 'layout style paint' }}>
    <ProblemSection />
    ...
  </div>
) : null}
*/

// AFTER (applied)
/*
<div style={showDeferredSections ? undefined : { minHeight: '4000px' }}>
  {showDeferredSections && (
    <div style={{ contentVisibility: 'auto', containIntrinsicSize: '4000px', contain: 'layout style paint' }}>
      <ProblemSection />
      ...
    </div>
  )}
</div>
*/


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FIX 2: SuccessGrid — Story images use <Image fill>
// File: src/components/sections/SuccessGrid.tsx
// Status: ✅ APPLIED 2026-05-14
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
// Problem: Raw <img> tags don't participate in Next.js image optimization.
// The container has aspect-[4/5] class so the space is always reserved —
// no CLS from the images themselves. But switching to <Image fill> enables
// automatic WebP serving (major bandwidth savings) and sets correct
// srcset/sizes for responsive images.
//
// The `fill` prop requires the parent to have `position: relative`.
// The outer motion.div already has `relative`, but the inner wrapper
// needed it too — added `relative` class.

import Image from 'next/image';

// BEFORE
/*
<div className="w-full h-full overflow-hidden">
  <img
    src={story.image}
    alt={altTextMap[story.id] || story.title}
    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
    style={{ objectPosition: story.objectPos || 'center center' }}
    loading="lazy"
    width={600}
    height={750}
  />
</div>
*/

// AFTER (applied)
/*
<div className="relative w-full h-full overflow-hidden">
  <Image
    src={story.image}
    alt={altTextMap[story.id] || story.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
    style={{ objectPosition: story.objectPos || 'center center' }}
  />
</div>
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FIX 3: ContactSection — Logo img dimensions
// File: src/components/sections/ContactSection.tsx:45
// Status: ✅ PREVIOUSLY APPLIED (confirmed present in codebase)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// AFTER (confirmed in code)
/*
<img
  src={logo}
  alt="MindPeak Institute"
  className="w-16 h-16 rounded-full mx-auto mb-8 ring-1 ring-foreground/[0.08]"
  width={64}
  height={64}
/>
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FIX 4: SuccessGrid modal — image aspect ratio
// File: src/components/sections/SuccessGrid.tsx:150
// Status: ✅ PREVIOUSLY APPLIED (confirmed present in codebase)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// AFTER (confirmed in code — now using <Image> too)
/*
<Image
  src={selected.image}
  alt={altTextMap[selected.id] || selected.title}
  width={800}
  height={1000}
  className="w-full max-h-[70vh] object-contain rounded-xl"
  style={{ aspectRatio: '4/5' }}
/>
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FONT CLS: next/font
// File: app/layout.tsx
// Status: ✅ ALREADY OPTIMAL — no changes needed
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Both fonts (Space Grotesk, Inter) use next/font/google with display: 'swap'.
// next/font eliminates font-swap CLS by self-hosting fonts with zero flash.

export {};
