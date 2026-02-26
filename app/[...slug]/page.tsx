/**
 * Catch-all route handler (Server Component).
 *
 * Exports generateMetadata so Next.js renders <title>, <meta>, canonical,
 * and OG tags at SSR time — critical for Google indexing.
 *
 * The actual UI is delegated to CatchAllClient (client component).
 */

import type { Metadata } from "next";
import { resolveSlugMetadata } from "@/lib/resolveSlugMetadata";
import CatchAllClient from "./CatchAllClient";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    return resolveSlugMetadata(slug);
  } catch (err) {
    // Keep error visible even in production (console.error is preserved)
    // eslint-disable-next-line no-console
    console.error("[generateMetadata] failed for catch-all route:", err);
    return {
      title: "MindPeak Institute",
      description:
        "Personalized JEE & NEET coaching by MindPeak Institute.",
    };
  }
}

export default async function CatchAllPage({ params }: Props) {
  // Await params to satisfy Next.js dynamic route contract
  await params;
  return <CatchAllClient />;
}
