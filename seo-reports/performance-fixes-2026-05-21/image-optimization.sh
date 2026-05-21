#!/bin/bash
# Image optimization script for MindPeak Institute
# Converts all JPEG/PNG images in /public/images/ to WebP
# Prerequisites: cwebp (brew install webp / apt install webp)
#
# Run from repo root: bash seo-reports/performance-fixes-2026-05-21/image-optimization.sh
#
# After running:
#   1. Update all src/components and src/views that reference .jpg/.jpeg/.png to use .webp
#   2. Update app/layout.tsx preload link: hero-bg.jpg → hero-bg.webp
#   3. Test locally, then commit

set -e

IMAGES_DIR="public/images"
QUALITY=85

if ! command -v cwebp &>/dev/null; then
  echo "ERROR: cwebp not found."
  echo "  macOS:  brew install webp"
  echo "  Ubuntu: sudo apt install webp"
  exit 1
fi

echo "=== MindPeak Image Optimization ==="
echo "Converting images in $IMAGES_DIR to WebP (quality=$QUALITY)"
echo ""

TOTAL_SAVED=0

convert_image() {
  local src="$1"
  local dst="${src%.*}.webp"
  local src_size
  src_size=$(wc -c < "$src")

  if cwebp -q "$QUALITY" "$src" -o "$dst" -quiet; then
    local dst_size
    dst_size=$(wc -c < "$dst")
    local saved=$(( src_size - dst_size ))
    local saved_kb=$(( saved / 1024 ))
    echo "  ✓ $(basename "$src") → $(basename "$dst") (saved ${saved_kb}KB)"
    TOTAL_SAVED=$(( TOTAL_SAVED + saved ))
  else
    echo "  ✗ Failed: $src"
  fi
}

# Critical — the three giant JPEGs (P0)
echo "--- Critical (>2MB) ---"
for f in \
  "$IMAGES_DIR/mentoring-session.jpg" \
  "$IMAGES_DIR/study-routine.jpg" \
  "$IMAGES_DIR/mentoring.jpg"; do
  [ -f "$f" ] && convert_image "$f"
done

# High priority (>300KB)
echo ""
echo "--- High priority (300KB–500KB) ---"
for f in \
  "$IMAGES_DIR/mentoring-session-2.jpg" \
  "$IMAGES_DIR/aarav-sharma.jpg" \
  "$IMAGES_DIR/rohan-gupta.jpg" \
  "$IMAGES_DIR/priya-patel.jpg" \
  "$IMAGES_DIR/student-studying.jpg" \
  "$IMAGES_DIR/mentoring-session-1.jpg"; do
  [ -f "$f" ] && convert_image "$f"
done

# Logo files
echo ""
echo "--- Logos ---"
for f in \
  "$IMAGES_DIR/logo.jpeg" \
  "$IMAGES_DIR/jee-logo.jpeg" \
  "$IMAGES_DIR/neet-logo.jpeg" \
  "$IMAGES_DIR/mindpeak-logo-pdf.jpeg"; do
  [ -f "$f" ] && convert_image "$f"
done

# Background and other images
echo ""
echo "--- Backgrounds & misc ---"
for f in \
  "$IMAGES_DIR/hero-bg.jpg" \
  "$IMAGES_DIR/methodology-bg.jpg" \
  "$IMAGES_DIR/student-studying.jpg" \
  "$IMAGES_DIR/student-1.jpg" \
  "$IMAGES_DIR/student-2.jpg" \
  "$IMAGES_DIR/student-3.jpg" \
  "$IMAGES_DIR/student-4.jpg"; do
  [ -f "$f" ] && convert_image "$f"
done

# PNG icons
echo ""
echo "--- PNG Icons ---"
for f in "$IMAGES_DIR/icons/"*.png "$IMAGES_DIR/"*.png; do
  [ -f "$f" ] && convert_image "$f"
done

# OG images
echo ""
echo "--- OG images ---"
for f in "$IMAGES_DIR/og/"*.jpg "$IMAGES_DIR/og/"*.png; do
  [ -f "$f" ] && convert_image "$f"
done

echo ""
echo "=== Done ==="
TOTAL_SAVED_MB=$(echo "scale=1; $TOTAL_SAVED / 1048576" | bc)
echo "Total saved: ~${TOTAL_SAVED_MB} MB"
echo ""
echo "NEXT STEPS:"
echo "  1. Update references in src/ from .jpg/.jpeg/.png to .webp"
echo "  2. Update app/layout.tsx preload: /images/hero-bg.jpg → /images/hero-bg.webp"
echo "  3. Update inline CSS in app/layout.tsx: hero-bg.jpg → hero-bg.webp"
echo "  4. Delete duplicate: rm public/hero-bg.jpg"
echo "  5. Run: npx vitest run"
echo "  6. Run: npm run build"
echo "  7. Commit and push"
