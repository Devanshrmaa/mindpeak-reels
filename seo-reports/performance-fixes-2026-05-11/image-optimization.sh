#!/usr/bin/env bash
# =============================================================================
# MindPeak Institute — Image Optimisation Script
# Date: 2026-05-11
# Purpose: Convert all PNG/JPG in /public to WebP and resize oversized images.
#
# Prerequisites:
#   - cwebp:  sudo apt install webp  (or brew install webp on macOS)
#   - convert: sudo apt install imagemagick  (or brew install imagemagick)
#
# Usage:
#   chmod +x image-optimization.sh
#   ./image-optimization.sh
#
# IMPORTANT: Run from the repo root (mindpeak-reels/).
# The originals are kept; WebP versions are placed alongside them.
# After verification, update all <img src> references to use .webp paths.
# =============================================================================

set -euo pipefail

PUBLIC_DIR="./public"
IMAGES_DIR="$PUBLIC_DIR/images"
ICONS_DIR="$IMAGES_DIR/icons"

# Quality settings
JPEG_QUALITY=82     # Good visual quality for photos
PNG_QUALITY=85      # Good for icons/graphics

# Max display width for story/mentoring images (rendered max ~800px on desktop)
MAX_STORY_WIDTH=1200
# Max display width for small icons/logos
MAX_ICON_WIDTH=160

echo "============================================"
echo "MindPeak Image Optimisation — $(date)"
echo "============================================"

# ----------------------------------------------------------------------------
# Helper: convert a single file to WebP
# ----------------------------------------------------------------------------
convert_to_webp() {
  local src="$1"
  local quality="$2"
  local max_width="${3:-0}"
  local dst="${src%.*}.webp"

  if [ "$max_width" -gt 0 ]; then
    # Resize if wider than max, then convert
    convert "$src" -resize "${max_width}>" -quality 95 /tmp/mindpeak_resize_tmp.jpg 2>/dev/null || cp "$src" /tmp/mindpeak_resize_tmp.jpg
    cwebp -q "$quality" /tmp/mindpeak_resize_tmp.jpg -o "$dst" -quiet
    rm -f /tmp/mindpeak_resize_tmp.jpg
  else
    cwebp -q "$quality" "$src" -o "$dst" -quiet
  fi

  local src_size
  local dst_size
  src_size=$(du -sh "$src" | cut -f1)
  dst_size=$(du -sh "$dst" | cut -f1)
  echo "  ✅  $(basename "$src") ($src_size) → $(basename "$dst") ($dst_size)"
}

# ----------------------------------------------------------------------------
# 1. Critical story/mentoring images (huge files — highest priority)
# ----------------------------------------------------------------------------
echo ""
echo "--- [1/4] Story / mentoring images (HIGH PRIORITY) ---"
echo "Note: These are the 2.5–2.9 MB images causing massive mobile bandwidth waste."
for img in \
  "$IMAGES_DIR/mentoring-session.jpg" \
  "$IMAGES_DIR/study-routine.jpg" \
  "$IMAGES_DIR/mentoring.jpg" \
  "$IMAGES_DIR/mentoring-session-1.jpg" \
  "$IMAGES_DIR/mentoring-session-2.jpg"; do
  [ -f "$img" ] && convert_to_webp "$img" "$JPEG_QUALITY" "$MAX_STORY_WIDTH"
done

# ----------------------------------------------------------------------------
# 2. Student portrait images
# ----------------------------------------------------------------------------
echo ""
echo "--- [2/4] Student portrait images ---"
for img in \
  "$IMAGES_DIR/aarav-sharma.jpg" \
  "$IMAGES_DIR/priya-patel.jpg" \
  "$IMAGES_DIR/rohan-gupta.jpg" \
  "$IMAGES_DIR/student-studying.jpg" \
  "$IMAGES_DIR/student-1.jpg" \
  "$IMAGES_DIR/student-2.jpg" \
  "$IMAGES_DIR/student-3.jpg" \
  "$IMAGES_DIR/student-4.jpg"; do
  [ -f "$img" ] && convert_to_webp "$img" "$JPEG_QUALITY" "$MAX_STORY_WIDTH"
done

# ----------------------------------------------------------------------------
# 3. Logo and background images
# ----------------------------------------------------------------------------
echo ""
echo "--- [3/4] Logo and background images ---"
for img in \
  "$IMAGES_DIR/logo.jpeg" \
  "$IMAGES_DIR/mindpeak-logo-pdf.jpeg" \
  "$IMAGES_DIR/jee-logo.jpeg" \
  "$IMAGES_DIR/neet-logo.jpeg" \
  "$IMAGES_DIR/hero-bg.jpg" \
  "$IMAGES_DIR/methodology-bg.jpg"; do
  [ -f "$img" ] && convert_to_webp "$img" "$JPEG_QUALITY" "$MAX_STORY_WIDTH"
done

# Foundation logo is PNG
[ -f "$IMAGES_DIR/foundation-logo.png" ] && convert_to_webp "$IMAGES_DIR/foundation-logo.png" "$PNG_QUALITY" "$MAX_ICON_WIDTH"

# ----------------------------------------------------------------------------
# 4. Icon PNGs (UI icons shown at 64–84px)
# ----------------------------------------------------------------------------
echo ""
echo "--- [4/4] UI icon PNGs ---"
for img in "$ICONS_DIR"/*.png; do
  [ -f "$img" ] && convert_to_webp "$img" "$PNG_QUALITY" "$MAX_ICON_WIDTH"
done

# ----------------------------------------------------------------------------
# 5. OG images — keep as JPG (Facebook/Twitter scrapers often prefer JPEG)
# ----------------------------------------------------------------------------
echo ""
echo "--- OG images: SKIPPED (keeping as JPEG for social scrapers) ---"

# ----------------------------------------------------------------------------
# 6. Remove duplicate hero-bg.jpg at /public root
# ----------------------------------------------------------------------------
echo ""
echo "--- Removing duplicate /public/hero-bg.jpg ---"
if [ -f "$PUBLIC_DIR/hero-bg.jpg" ]; then
  rm "$PUBLIC_DIR/hero-bg.jpg"
  echo "  ✅  Removed /public/hero-bg.jpg (duplicate of /public/images/hero-bg.jpg)"
else
  echo "  ℹ️   /public/hero-bg.jpg already removed"
fi

# ----------------------------------------------------------------------------
# Summary
# ----------------------------------------------------------------------------
echo ""
echo "============================================"
echo "Conversion complete!"
echo ""
echo "NEXT STEPS:"
echo "1. Update SuccessGrid.tsx to use .webp paths (or switch to <Image> component)"
echo "2. Update ContactSection.tsx logo path"
echo "3. Update layout.tsx preload href to /images/hero-bg.webp"
echo "4. Update HeroSection.tsx backgroundImage to /images/hero-bg.webp"
echo "5. Run: npx vitest run  (verify tests pass)"
echo "6. Run: npm run build   (verify build succeeds)"
echo ""
echo "Total savings estimate:"
echo "  mentoring-session:  2.9MB → ~200KB  saves ~2.7MB"
echo "  study-routine:      2.8MB → ~180KB  saves ~2.6MB"
echo "  mentoring:          2.5MB → ~160KB  saves ~2.3MB"
echo "  All other images:   ~3MB  → ~400KB  saves ~2.6MB"
echo "  TOTAL ESTIMATED SAVINGS: ~10MB per full page view"
echo "============================================"
