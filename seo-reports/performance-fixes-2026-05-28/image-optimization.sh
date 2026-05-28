#!/usr/bin/env bash
# MindPeak Institute — Image Optimization Script
# Date: 2026-05-28
#
# Run this locally (requires cwebp: brew install webp  OR  apt install webp)
# After running: commit the new .webp files and update any raw <img> src paths.
#
# Expected savings:
#   mentoring-session.jpg   2.9 MB → ~180 KB  (-2.7 MB, -93%)
#   study-routine.jpg       2.8 MB → ~170 KB  (-2.6 MB, -94%)
#   mentoring.jpg           2.5 MB → ~150 KB  (-2.4 MB, -94%)
#   mentoring-session-2.jpg 436 KB → ~60 KB   (-376 KB, -86%)
#   aarav-sharma.jpg        428 KB → ~55 KB   (-373 KB, -87%)
#   rohan-gupta.jpg         368 KB → ~50 KB   (-318 KB, -86%)
#   priya-patel.jpg         364 KB → ~50 KB   (-314 KB, -86%)
#   student-studying.jpg    360 KB → ~48 KB   (-312 KB, -87%)
#   mentoring-session-1.jpg 344 KB → ~46 KB   (-298 KB, -87%)
#   logo.jpeg               196 KB → ~30 KB   (-166 KB, -85%)
#   methodology-bg.jpg      100 KB → ~18 KB   (-82 KB,  -82%)
#   Total:                  ~8.8 MB → ~857 KB (-7.9 MB, -91%)

set -euo pipefail
IMAGES_DIR="$(cd "$(dirname "$0")/../../public/images" && pwd)"
echo "Converting images in: $IMAGES_DIR"

# Quality 82 balances file size vs visual fidelity for photography
# Quality 90 for logos (sharp lines need less compression)
PHOTO_QUALITY=82
LOGO_QUALITY=90

convert_to_webp() {
  local input="$1"
  local quality="$2"
  local output="${input%.*}.webp"
  if [ -f "$output" ]; then
    echo "  SKIP (already exists): $output"
    return
  fi
  cwebp -q "$quality" "$input" -o "$output"
  local before after savings
  before=$(du -k "$input" | cut -f1)
  after=$(du -k "$output" | cut -f1)
  savings=$(( before - after ))
  echo "  $input → $output  (${before}KB → ${after}KB, saved ${savings}KB)"
}

echo ""
echo "=== Converting large story/mentoring images ==="
convert_to_webp "$IMAGES_DIR/mentoring-session.jpg"   $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/study-routine.jpg"       $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/mentoring.jpg"           $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/mentoring-session-2.jpg" $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/mentoring-session-1.jpg" $PHOTO_QUALITY

echo ""
echo "=== Converting student portrait images ==="
convert_to_webp "$IMAGES_DIR/aarav-sharma.jpg"    $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/rohan-gupta.jpg"     $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/priya-patel.jpg"     $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/student-studying.jpg" $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/student-1.jpg"       $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/student-2.jpg"       $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/student-3.jpg"       $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/student-4.jpg"       $PHOTO_QUALITY

echo ""
echo "=== Converting background/hero images ==="
convert_to_webp "$IMAGES_DIR/hero-bg.jpg"         $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/methodology-bg.jpg"  $PHOTO_QUALITY

echo ""
echo "=== Converting logo images ==="
convert_to_webp "$IMAGES_DIR/logo.jpeg"           $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/jee-logo.jpeg"       $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/neet-logo.jpeg"      $LOGO_QUALITY

echo ""
echo "=== Converting PNG icons ==="
convert_to_webp "$IMAGES_DIR/foundation-logo.png"                $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/struggling-student.png"       $PHOTO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/strategy-plan.png"            $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/success-rocket.png"           $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/target-precision.png"         $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/mentoring-icon.png"           $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/analytics-dashboard.png"      $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/trophy-achievement.png"       $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/clarity-lightbulb.png"        $LOGO_QUALITY
convert_to_webp "$IMAGES_DIR/icons/growth-chart.png"             $LOGO_QUALITY

echo ""
echo "=== Conversion complete ==="
echo ""
echo "NEXT STEPS after running this script:"
echo "1. Update SuccessGrid.tsx story image srcs from .jpg to .webp"
echo "   (already using Next.js Image component after 2026-05-28 fix,"
echo "    so Next.js handles WebP serving automatically — no src change needed)"
echo "2. Update ContactSection.tsx logo src from logo.jpeg to logo.webp"
echo "3. Update HeroSection CSS background from hero-bg.jpg to hero-bg.webp"
echo "   (add <picture> or use CSS @supports for WebP with jpg fallback)"
echo "4. Update layout.tsx preload href from hero-bg.jpg to hero-bg.webp"
echo "5. Update Navbar logo from logo.jpeg to logo.webp"
echo "6. Run: git add public/images/*.webp public/images/icons/*.webp"
echo "7. Commit and deploy"
echo ""
echo "NOTE: After deploying WebP images, you can delete the original JPEGs"
echo "      IF you update all code references. Keep originals as fallback"
echo "      until WebP is confirmed working in production."
