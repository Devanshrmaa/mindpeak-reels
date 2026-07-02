"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light/dark theme toggle.
 *
 * The site follows the OS preference by default (applied before paint by the
 * inline script in app/layout.tsx). Clicking the toggle overrides it; if the
 * chosen theme matches the OS preference again we clear the override so the
 * site goes back to tracking the system setting automatically.
 *
 * The icon swap is pure CSS (`dark:` variants), so the button renders
 * identically on server and client — no hydration mismatch, no flash.
 */
export function ThemeToggle({ className }: { className?: string }) {
  /* Keep an OS-level theme change applied live while no override is stored. */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return; // manual override wins
      } catch {
        /* storage unavailable — keep following the system */
      }
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    try {
      const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (nextIsDark === systemIsDark) {
        localStorage.removeItem("theme"); // back in sync with the OS
      } else {
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
      }
    } catch {
      /* storage unavailable — the toggle still works for this page view */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      title="Toggle light or dark theme"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
        className
      )}
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
    </button>
  );
}
