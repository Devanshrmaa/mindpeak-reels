/**
 * Legacy sitemap route: /final2.xml → 301 redirect to /sitemap.xml
 * Canonical sitemap is now at /sitemap.xml
 */
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://mindpeakinstitute.com/sitemap.xml', 301);
}
