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
  const { slug } = await params;
  return resolveSlugMetadata(slug);
}

export default async function CatchAllPage({ params }: Props) {
  // Await params to satisfy Next.js dynamic route contract
  await params;
  return <CatchAllClient />;
}
