/**
 * LCP Fixes — MindPeak Institute Performance Audit 2026-05-21
 *
 * PRIMARY FIX: Migrate SuccessGrid <img> tags to Next.js <Image> component.
 *
 * Why: The SuccessGrid uses raw <img> tags for student photos. These bypass
 * Next.js image optimization entirely, meaning browsers always download the
 * full original JPEG (up to 2.9 MB each). Switching to <Image> enables:
 *   - Automatic WebP/AVIF serving based on browser support
 *   - Automatic responsive sizing (srcset) so mobile gets smaller images
 *   - Next.js CDN caching with optimized formats
 *   - Correct width/height preventing CLS
 *
 * File to edit: src/components/sections/SuccessGrid.tsx
 *
 * The patch below shows the key changes needed. Apply after running
 * image-optimization.sh and confirming WebP files exist.
 */

// ============================================================
// CURRENT (slow — raw <img>, bypasses Next.js optimizer)
// ============================================================
/*
import React from 'react';

// In SuccessGrid stories map rendering (~line 85-90):
<img
  src={story.image}
  alt={altTextMap[story.id] || story.title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  loading="lazy"
/>

// In SuccessGrid modal (~line 154-158):
<img
  src={selected.image}
  alt={altTextMap[selected.id] || selected.title}
  className="w-full max-h-[70vh] object-contain rounded-xl"
  style={{ aspectRatio: '4/5' }}
/>
*/

// ============================================================
// AFTER (fast — Next.js <Image>, automatic WebP + responsive)
// ============================================================
import Image from 'next/image';

// Story card image — sized to match the card container (approx 600×750 at largest breakpoint)
export const SuccessGridStoryImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <Image
    src={src}
    alt={alt}
    width={600}
    height={750}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
);

// Modal lightbox image — full-width within max-h-[70vh] container
export const SuccessGridModalImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <Image
    src={src}
    alt={alt}
    width={600}
    height={750}
    className="w-full max-h-[70vh] object-contain rounded-xl"
    style={{ aspectRatio: '4/5' }}
    loading="lazy"
    sizes="(max-width: 768px) 100vw, 600px"
  />
);

// ============================================================
// ALSO: Once hero-bg.webp exists, update app/layout.tsx:
// ============================================================

/*
// BEFORE (layout.tsx preload):
<link rel="preload" as="image" href="/images/hero-bg.jpg" fetchPriority="high" />

// AFTER:
<link rel="preload" as="image" href="/images/hero-bg.webp" fetchPriority="high"
  type="image/webp" />

// BEFORE (layout.tsx inline CSS):
#hero { background-image: url(/images/hero-bg.jpg); }

// AFTER:
#hero { background-image: url(/images/hero-bg.webp); }
*/
