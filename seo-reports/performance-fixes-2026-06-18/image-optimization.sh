#!/usr/bin/env bash
# Image Optimization Script — MindPeak Institute
# Run from the project root: bash seo-reports/performance-fixes-2026-06-18/image-optimization.sh
#
# Requires: cwebp (from libwebp) or Node.js with sharp installed globally
# Install cwebp on Ubuntu/Debian: sudo apt-get install webp
# Install cwebp on macOS: brew install webp
# Install sharp globally: npm install -g sharp-cli
#
# Priority order matches LCP impact:
#   1. mentoring-session-2.jpg  — hero LCP element (446KB → ~60KB)
#   2. aarav-sharma.jpg          — results ledger, above virtual fold on desktop
#   3. rohan-gupta.jpg           — results ledger
#   4. priya-patel.jpg           — results ledger
#   5. mentoring-session.jpg     — 2.96MB, used in SuccessGrid on /about
#   6. study-routine.jpg         — 2.80MB
#   7. mentoring.jpg             — 2.58MB
#   8. logo.jpeg                 — 200KB used 4× — ideally replace with SVG instead

set -euo pipefail

SRC="public/images"
QUALITY=82

echo "=== MindPeak Image → WebP Conversion ==="
echo "Source dir: $SRC"
echo "WebP quality: $QUALITY"
echo ""

convert_to_webp() {
  local input="$1"
  local output="${input%.*}.webp"
  local max_width="${2:-1920}"

  if [ -f "$output" ]; then
    echo "  [SKIP] $output already exists"
    return
  fi

  # Try cwebp first, fall back to sharp-cli
  if command -v cwebp &>/dev/null; then
    # Resize if wider than max_width using imagemagick first
    if command -v convert &>/dev/null; then
      convert "$input" -resize "${max_width}>" /tmp/mp_resize_tmp.jpg
      cwebp -q "$QUALITY" /tmp/mp_resize_tmp.jpg -o "$output"
      rm -f /tmp/mp_resize_tmp.jpg
    else
      cwebp -q "$QUALITY" "$input" -o "$output"
    fi
    echo "  [DONE] $(basename "$input") → $(basename "$output") ($(du -sh "$output" | cut -f1))"
  elif command -v sharp &>/dev/null; then
    sharp -i "$input" -o "$output" --webp --quality "$QUALITY" resize "$max_width"
    echo "  [DONE] $(basename "$input") → $(basename "$output") ($(du -sh "$output" | cut -f1))"
  else
    echo "  [SKIP] No conversion tool found for $input — install cwebp or sharp-cli"
  fi
}

echo "--- P0: Hero LCP image (most critical) ---"
convert_to_webp "$SRC/mentoring-session-2.jpg" 1440

echo ""
echo "--- P0: Results ledger student photos ---"
convert_to_webp "$SRC/aarav-sharma.jpg" 120
convert_to_webp "$SRC/rohan-gupta.jpg" 120
convert_to_webp "$SRC/priya-patel.jpg" 120

echo ""
echo "--- P0: Oversize images (2.5–3MB each) ---"
convert_to_webp "$SRC/mentoring-session.jpg" 1440
convert_to_webp "$SRC/study-routine.jpg" 1440
convert_to_webp "$SRC/mentoring.jpg" 1440

echo ""
echo "--- P1: Other homepage images ---"
convert_to_webp "$SRC/logo.jpeg" 64
convert_to_webp "$SRC/hero-bg.jpg" 1440
convert_to_webp "$SRC/methodology-bg.jpg" 1440
convert_to_webp "$SRC/mentoring-session-1.jpg" 1440
convert_to_webp "$SRC/student-studying.jpg" 1440

echo ""
echo "--- P2: Hero avatar stack ---"
for i in 1 2 3 4; do
  convert_to_webp "$SRC/student-${i}.jpg" 80
done

echo ""
echo "=== Conversion complete ==="
echo ""
echo "Next steps:"
echo "1. Update src references to use .webp extensions"
echo "   - HomeTop.tsx: mentoring-session-2.webp, student-*.webp, logo.webp"
echo "   - HomeMid.tsx: aarav-sharma.webp, rohan-gupta.webp, priya-patel.webp"
echo "   - app/layout.tsx: hero-bg.webp (preload link), update critical CSS"
echo "2. Add <picture> wrappers with AVIF + WebP + JPEG fallback for the hero"
echo "3. Delete the duplicate /public/hero-bg.jpg (only /images/hero-bg.jpg is referenced)"
echo ""
echo "Expected savings:"
echo "  mentoring-session-2.jpg: 446KB → ~60KB (-87%)"
echo "  aarav-sharma.jpg:         436KB → ~18KB (-96%)"
echo "  mentoring-session.jpg:   2960KB → ~180KB (-94%)"
echo "  study-routine.jpg:       2800KB → ~160KB (-94%)"
echo "  mentoring.jpg:           2580KB → ~150KB (-94%)"
echo "  TOTAL savings:           ~9200KB → ~580KB for heavy images"
