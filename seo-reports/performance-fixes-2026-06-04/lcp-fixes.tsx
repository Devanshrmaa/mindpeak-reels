/**
 * LCP Fixes — 2026-06-04
 *
 * PRIMARY ACTION: Migrate SuccessGrid from raw <img> to Next.js <Image> component.
 *
 * WHY: The 6 images in SuccessGrid (344–436 KB each) are served as raw JPEGs.
 * next.config.ts has `formats: ['image/avif', 'image/webp']` but this ONLY works
 * for <Image> components — raw <img> tags bypass the optimizer entirely.
 * After this migration, Next.js automatically serves WebP to supporting browsers
 * (95%+ of users) without needing to maintain separate WebP copies.
 *
 * ESTIMATED IMPACT: +5–8 Lighthouse points on mobile (from total page weight reduction).
 *
 * HOW TO APPLY:
 *   Replace the contents of src/components/sections/SuccessGrid.tsx
 *   with the component below, OR apply the diff manually.
 */

// ─── DIFF: src/components/sections/SuccessGrid.tsx ───────────────────────────
//
// BEFORE (line 1-3):
//   import { useState } from 'react';
//   import { motion, AnimatePresence } from 'framer-motion';
//   import { X } from 'lucide-react';
//
// AFTER (add Image import):
//   import { useState } from 'react';
//   import { motion, AnimatePresence } from 'framer-motion';
//   import { X } from 'lucide-react';
//   import Image from 'next/image';
//
// ─── CHANGE 1: Grid card img → <Image> (line 82-92) ─────────────────────────
//
// BEFORE:
//   <div className="w-full h-full overflow-hidden">
//     <img
//       src={story.image}
//       alt={altTextMap[story.id] || story.title}
//       className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
//       style={{ objectPosition: story.objectPos || 'center center' }}
//       loading="lazy"
//       width={600}
//       height={750}
//     />
//   </div>
//
// AFTER:
//   <div className="relative w-full h-full overflow-hidden">
//     <Image
//       src={story.image}
//       alt={altTextMap[story.id] || story.title}
//       fill
//       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
//       style={{ objectPosition: story.objectPos || 'center center' }}
//       loading="lazy"
//       quality={85}
//     />
//   </div>
//
// NOTE: The parent div needs `position: relative` for `fill` to work.
// The `aspect-[4/5]` class on the grandparent container provides the height.
//
// ─── CHANGE 2: Modal img → <Image> (line 150-157) ────────────────────────────
//
// BEFORE:
//   <img
//     src={selected.image}
//     alt={altTextMap[selected.id] || selected.title}
//     className="w-full max-h-[70vh] object-contain rounded-xl"
//     width={800}
//     height={1000}
//     style={{ aspectRatio: '4/5' }}
//   />
//
// AFTER:
//   <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '4/5', maxHeight: '70vh' }}>
//     <Image
//       src={selected.image}
//       alt={altTextMap[selected.id] || selected.title}
//       fill
//       sizes="(max-width: 1024px) 100vw, 900px"
//       className="object-contain"
//       quality={90}
//       priority
//     />
//   </div>
//
// ─── SECONDARY: CourseDetail logo <img> → <Image> ────────────────────────────
//
// File: src/views/CourseDetail.tsx, line 203
//
// BEFORE (already has width/height from this session's fix, but still bypasses optimizer):
//   <img src={course.logo} alt={course.name} className="w-full h-full object-contain" width={80} height={80} />
//
// AFTER:
//   import Image from 'next/image'
//   <Image
//     src={course.logo}
//     alt={course.name}
//     width={80}
//     height={80}
//     className="object-contain"
//     quality={85}
//   />
//
// NOTE: course.logo values are local paths (e.g. '/images/jee-logo.jpeg').
// They are already covered by next.config.ts remotePatterns for mindpeakinstitute.com.
// For local paths (starting with '/'), no remotePatterns entry needed.

export {};
