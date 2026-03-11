"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DemoModalProvider } from "@/components/DemoBookingModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

/* Defer overlays and toast containers — they are never needed at first paint */
const DeferredOverlays = dynamic(() => import("@/components/DeferredOverlays"), { ssr: false });
const Toaster = dynamic(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })), { ssr: false });
const Sonner = dynamic(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })), { ssr: false });

const IdleOverlays = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(id);
  }, []);
  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <DeferredOverlays />
    </Suspense>
  );
};

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <DemoModalProvider>
            <IdleOverlays />
            {children}
          </DemoModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
