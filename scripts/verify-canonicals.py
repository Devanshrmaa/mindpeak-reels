#!/usr/bin/env python3
"""
Verify canonical tags on mindpeakinstitute.com pages.

Usage:
  pip install requests beautifulsoup4
  python scripts/verify-canonicals.py

Output: scripts/canonical-audit.csv
"""

import csv
import sys
import time
from urllib.parse import urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Install deps first:  pip install requests beautifulsoup4")
    sys.exit(1)

DOMAIN = "https://mindpeakinstitute.com"

# ── All 119 affected URLs from GSC ──────────────────────────────────────────
URLS = [
    "/pricing",
    "/jee-coaching",
    "/neet-coaching",
    "/free-trial",
    "/about",
    "/contact",
    "/courses",
    "/blog",
    "/study-plan",
    "/methodology",
    "/mentors",
    "/success-stories",
    "/jee-practice",
    "/jee-pyq",
    "/neet-practice",
    "/neet-pyq",
    "/jee-advanced-coaching",
    "/jee-main-coaching",
    "/jee-crash-course",
    "/jee-dropper-coaching",
    "/jee-physics-coaching",
    "/jee-chemistry-coaching",
    "/jee-mathematics-coaching",
    "/neet-ug-coaching",
    "/neet-biology-coaching",
    "/neet-chemistry-coaching",
    "/neet-physics-coaching",
    "/neet-crash-course",
    "/neet-dropper-coaching",
    "/foundation-coaching",
    "/batch-vs-personal-coaching",
    "/online-vs-offline-jee-coaching",
    "/kota-coaching-alternative",
    "/mindpeak-vs-allen",
    "/mindpeak-vs-byjus",
    "/mindpeak-vs-fiitjee",
    "/mindpeak-vs-resonance",
    "/jee-rank-predictor",
    "/neet-rank-predictor",
    "/jee-physics-mechanics",
    "/jee-physics-electrodynamics",
    "/jee-physics-thermodynamics",
    "/jee-physics-optics",
    "/jee-physics-waves",
    "/jee-chemistry-physical",
    "/jee-chemistry-organic",
    "/jee-chemistry-inorganic",
    "/jee-math-algebra",
    "/jee-math-calculus",
    "/jee-math-geometry",
    "/jee-math-trigonometry",
    "/refund-policy",
    "/terms-and-conditions",
    # Add more /neet-* and question URLs below as needed
]


def check_url(path: str) -> dict:
    """Fetch a page and extract its canonical tag."""
    url = f"{DOMAIN}{path}"
    row = {"url": url, "canonical_found": "", "is_correct": False, "error": ""}
    try:
        resp = requests.get(url, timeout=15, allow_redirects=True, headers={
            "User-Agent": "MindPeak-Canonical-Audit/1.0"
        })
        if resp.status_code != 200:
            row["error"] = f"HTTP {resp.status_code}"
            return row

        soup = BeautifulSoup(resp.text, "html.parser")
        link = soup.find("link", rel="canonical")
        if link and link.get("href"):
            canonical = link["href"].rstrip("/")
            row["canonical_found"] = canonical
            expected = url.rstrip("/")
            row["is_correct"] = canonical == expected
            if "www." in canonical:
                row["error"] = "HAS WWW"
            elif canonical != expected:
                row["error"] = f"MISMATCH (expected {expected})"
        else:
            row["error"] = "NO CANONICAL TAG"
    except Exception as e:
        row["error"] = str(e)[:100]
    return row


def main():
    out_path = "scripts/canonical-audit.csv"
    results = []
    total = len(URLS)
    issues = 0

    print(f"Checking {total} URLs on {DOMAIN}...")
    for i, path in enumerate(URLS, 1):
        result = check_url(path)
        results.append(result)
        status = "✓" if result["is_correct"] else "✗"
        if not result["is_correct"]:
            issues += 1
        print(f"  [{i}/{total}] {status}  {result['url']}  {result.get('error', '')}")
        time.sleep(0.3)  # polite crawl delay

    # Write CSV
    with open(out_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["url", "canonical_found", "is_correct", "error"])
        writer.writeheader()
        writer.writerows(results)

    print(f"\nDone. {total - issues}/{total} correct. {issues} issues found.")
    print(f"Report saved to {out_path}")

    if issues > 0:
        print("\n⚠  URLs with issues:")
        for r in results:
            if not r["is_correct"]:
                print(f"  {r['url']}  →  {r['canonical_found'] or 'MISSING'}  ({r['error']})")


if __name__ == "__main__":
    main()
