#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# MindPeak Institute — Image Optimization Script
# Date: 2026-06-04
#
# PURPOSE: Convert all JPEG/PNG images to WebP for maximum compression.
#          Addresses the #1 performance issue: 3 PNG-as-JPG files totalling 8.2 MB.
#
# PREREQUISITES (install on your machine, not required in CI):
#   macOS:  brew install webp imagemagick
#   Ubuntu: sudo apt-get install webp imagemagick
#   Windows: download cwebp from https://developers.google.com/speed/webp/download
#
# USAGE:
#   cd /path/to/mindpeak-reels
#   chmod +x seo-reports/performance-fixes-2026-06-04/image-optimization.sh
#   ./seo-reports/performance-fixes-2026-06-04/image-optimization.sh
#
# WHAT IT DOES:
#   1. Converts all JPEG/PNG in public/images/ to WebP at quality 85
#   2. Resizes the 3 oversized PNG files to max 1200px wide (they were 1288px)
#   3. Removes the duplicate /public/hero-bg.jpg
#   4. Prints a before/after size summary
#
# NOTE: Original JPEG/PNG files are kept (not deleted) so you can verify
#       quality before removing them. Run the cleanup block manually.
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

IMAGES_DIR="public/images"

echo "=== MindPeak Image Optimization ==="
echo ""
echo "Checking prerequisites..."

if ! command -v cwebp &> /dev/null; then
  echo "ERROR: cwebp not found. Install with: brew install webp (macOS) or sudo apt-get install webp (Linux)"
  exit 1
fi

if ! command -v convert &> /dev/null; then
  echo "ERROR: ImageMagick not found. Install with: brew install imagemagick or sudo apt-get install imagemagick"
  exit 1
fi

echo "✓ cwebp found: $(cwebp -version 2>&1 | head -1)"
echo "✓ ImageMagick found"
echo ""

# ─── Before sizes ────────────────────────────────────────────────────────────
echo "=== BEFORE: Image sizes ==="
du -sh "$IMAGES_DIR"/*.{jpg,jpeg,png} 2>/dev/null | sort -rh | head -20
echo ""

# ─── Step 1: Convert the 3 PNG-disguised-as-JPG files ─────────────────────────
echo "=== Step 1: Converting PNG-as-JPG files (2.5–2.9 MB each) ==="

for file in \
  "$IMAGES_DIR/mentoring-session.jpg" \
  "$IMAGES_DIR/study-routine.jpg" \
  "$IMAGES_DIR/mentoring.jpg"; do

  if [ -f "$file" ]; then
    base="${file%.*}"
    output="${base}.webp"
    echo "Converting $file → $output (resize to max 1200px, quality 82)..."
    # Resize to max 1200px wide (they're 1288px — near-identical quality)
    # then convert PNG→WebP
    convert "$file" -resize '1200x>' -quality 85 /tmp/resized_tmp.png
    cwebp -q 82 /tmp/resized_tmp.png -o "$output"
    echo "  Before: $(du -sh "$file" | cut -f1)  After: $(du -sh "$output" | cut -f1)"
  else
    echo "  SKIP: $file not found"
  fi
done

rm -f /tmp/resized_tmp.png

echo ""

# ─── Step 2: Convert remaining large JPEGs ────────────────────────────────────
echo "=== Step 2: Converting large JPEG files ==="

for file in \
  "$IMAGES_DIR/mentoring-session-2.jpg" \
  "$IMAGES_DIR/aarav-sharma.jpg" \
  "$IMAGES_DIR/rohan-gupta.jpg" \
  "$IMAGES_DIR/priya-patel.jpg" \
  "$IMAGES_DIR/student-studying.jpg" \
  "$IMAGES_DIR/mentoring-session-1.jpg"; do

  if [ -f "$file" ]; then
    base="${file%.*}"
    output="${base}.webp"
    echo "Converting $file → $output (quality 85)..."
    cwebp -q 85 "$file" -o "$output"
    echo "  Before: $(du -sh "$file" | cut -f1)  After: $(du -sh "$output" | cut -f1)"
  else
    echo "  SKIP: $file not found"
  fi
done

echo ""

# ─── Step 3: Convert logo ─────────────────────────────────────────────────────
echo "=== Step 3: Converting logo ==="

if [ -f "$IMAGES_DIR/logo.jpeg" ]; then
  cwebp -q 90 "$IMAGES_DIR/logo.jpeg" -o "$IMAGES_DIR/logo.webp"
  echo "  logo.jpeg: $(du -sh "$IMAGES_DIR/logo.jpeg" | cut -f1) → logo.webp: $(du -sh "$IMAGES_DIR/logo.webp" | cut -f1)"
fi

echo ""

# ─── Step 4: Convert PNG icons ────────────────────────────────────────────────
echo "=== Step 4: Converting PNG icons ==="

for file in "$IMAGES_DIR"/icons/*.png "$IMAGES_DIR"/foundation-logo.png; do
  if [ -f "$file" ]; then
    base="${file%.*}"
    output="${base}.webp"
    echo "Converting $file → $output..."
    cwebp -q 85 "$file" -o "$output"
    echo "  Before: $(du -sh "$file" | cut -f1)  After: $(du -sh "$output" | cut -f1)"
  fi
done

echo ""

# ─── Step 5: Remove duplicate hero-bg.jpg from root public/ ──────────────────
echo "=== Step 5: Remove duplicate /public/hero-bg.jpg ==="
if [ -f "public/hero-bg.jpg" ]; then
  echo "Removing duplicate public/hero-bg.jpg (120 KB, identical to public/images/hero-bg.jpg)..."
  rm "public/hero-bg.jpg"
  echo "  ✓ Deleted"
else
  echo "  SKIP: public/hero-bg.jpg already removed"
fi

echo ""

# ─── After sizes ─────────────────────────────────────────────────────────────
echo "=== AFTER: WebP file sizes ==="
du -sh "$IMAGES_DIR"/*.webp "$IMAGES_DIR"/icons/*.webp 2>/dev/null | sort -rh
echo ""

# ─── Summary ─────────────────────────────────────────────────────────────────
echo "=== SUMMARY ==="
total_before=$(du -sc "$IMAGES_DIR"/*.{jpg,jpeg,png} 2>/dev/null | tail -1 | cut -f1)
total_after=$(du -sc "$IMAGES_DIR"/*.webp 2>/dev/null | tail -1 | cut -f1)
echo "Total JPEG/PNG: ${total_before} KB → Total WebP: ${total_after} KB"
echo ""
echo "=== NEXT STEPS ==="
echo "1. Verify WebP quality visually in a browser"
echo "2. Update SuccessGrid.tsx to use <Image> with the new .webp paths"
echo "   OR keep the original paths — <Image> auto-converts to WebP anyway"
echo "3. If using raw <img> tags (not recommended), update src to .webp paths"
echo "4. Optionally delete the original JPEG/PNG files once verified:"
echo "   rm $IMAGES_DIR/mentoring-session.jpg $IMAGES_DIR/study-routine.jpg $IMAGES_DIR/mentoring.jpg"
echo "   rm $IMAGES_DIR/mentoring-session-{1,2}.jpg $IMAGES_DIR/{aarav-sharma,priya-patel,rohan-gupta,student-studying}.jpg"
echo ""
echo "Done! Run 'npm run build && npm start' to verify the site still loads correctly."
