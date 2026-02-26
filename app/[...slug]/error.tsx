"use client";

import { useEffect } from "react";
import { Link } from "@/components/RouterLink";

/**
 * Error boundary for the catch-all [...slug] route.
 *
 * Catches both server-component (generateMetadata) and client-component
 * render errors so users see a helpful page instead of the default
 * Next.js "Something went wrong" screen.
 */
export default function CatchAllError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for debugging (preserved even in production)
    // eslint-disable-next-line no-console
    console.error("[CatchAllError]", error.message, error.digest);
  }, [error]);

  return (
    <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-400 text-sm">
          We couldn&apos;t load this page. This might be a temporary issue —
          please try again.
        </p>

        {error.digest && (
          <p className="text-xs text-gray-600 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={reset}
            className="px-6 py-2.5 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-2.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
