#!/bin/bash
# MindPeak Institute — Image Optimization Script
# Run from repository root: bash seo-reports/performance-fixes-2026-05-14/image-optimization.sh
# Requires: cwebp (brew install webp  OR  apt install webp)
#
# STEP 1: Delete orphaned images (confirmed unreferenced in code)
# STEP 2: Convert all remaining JPEG/PNG to WebP
# STEP 3: Update hero preload hint to use WebP

set -e

if ! command -v cwebp &> /dev/null; then
  echo "ERROR: cwebp not found."
  echo "Install it: brew install webp  (macOS)  OR  apt install webp  (Ubuntu/Debian)"
  exit 1
fi

IMAGES_DIR="public/images"

echo "=== Step 1: Delete orphaned images (8.3 MB total) ==="
orphans=(
  "public/images/mentoring-session.jpg"
  "public/images/study-routine.jpg"
  "public/images/mentoring.jpg"
  "public/hero-bg.jpg"
)
for f in "${orphans[@]}"; do
  if [ -f "$f" ]; then
    size=$(du -sh "$f" | cut -f1)
    rm "$f"
    echo "  ✓ Deleted $f ($size)"
  else
    echo "  – $f already gone"
  fi
done

echo ""
echo "=== Step 2: Convert large story images to WebP (q=85) ==="
story_images=(
  "aarav-sharma.jpg"
  "priya-patel.jpg"
  "mentoring-session-1.jpg"
  "student-studying.jpg"
  "rohan-gupta.jpg"
  "mentoring-session-2.jpg"
)
for img in "${story_images[@]}"; do
  src="$IMAGES_DIR/$img"
  dst="${src%.*}.webp"
  if [ -f "$src" ]; then
    before=$(du -sh "$src" | cut -f1)
    cwebp -q 85 "$src" -o "$dst"
    after=$(du -sh "$dst" | cut -f1)
    echo "  ✓ $img: $before → $after (WebP)"
  fi
done

echo ""
echo "=== Step 3: Convert other JPEGs to WebP ==="
other_images=(
  "logo.jpeg"
  "hero-bg.jpg"
  "methodology-bg.jpg"
  "student-1.jpg"
  "student-2.jpg"
  "student-3.jpg"
  "student-4.jpg"
)
for img in "${other_images[@]}"; do
  src="$IMAGES_DIR/$img"
  dst="${src%.*}.webp"
  if [ -f "$src" ]; then
    before=$(du -sh "$src" | cut -f1)
    cwebp -q 85 "$src" -o "$dst"
    after=$(du -sh "$dst" | cut -f1)
    echo "  ✓ $img: $before → $after (WebP)"
  fi
done

echo ""
echo "=== Step 4: Convert PNG icons to WebP ==="
for src in "$IMAGES_DIR/icons/"*.png; do
  dst="${src%.*}.webp"
  if [ -f "$src" ]; then
    before=$(du -sh "$src" | cut -f1)
    cwebp -q 90 "$src" -o "$dst"
    after=$(du -sh "$dst" | cut -f1)
    echo "  ✓ $(basename $src): $before → $after (WebP)"
  fi
done

echo ""
echo "=== Step 5: Patch layout.tsx hero preload to use WebP ==="
# After converting hero-bg.jpg to hero-bg.webp, update the preload link
sed -i 's|href="/images/hero-bg.jpg"|href="/images/hero-bg.webp"|g' app/layout.tsx
sed -i 's|background-image: url(/images/hero-bg.jpg)|background-image: url(/images/hero-bg.webp)|g' app/layout.tsx
echo "  ✓ Updated hero preload + inline CSS to use hero-bg.webp"

echo ""
echo "=== DONE ==="
echo "Next steps:"
echo "  1. Update SuccessGrid.tsx image src constants to use .webp extensions"
echo "     (or keep as .jpg — next/image will serve WebP automatically)"
echo "  2. Verify no broken image refs: grep -r '.jpg' src/ app/ --include='*.tsx' | grep -v og/"
echo "  3. Run: npx vitest run  (to ensure no test regressions)"
echo "  4. Run: npm run build   (verify build succeeds)"
