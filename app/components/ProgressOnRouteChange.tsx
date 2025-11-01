// app/components/ProgressOnRouteChange.tsx
"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

/**
 * Termine NProgress quand l'URL a changé (fallback).
 * Utile si des navigations ne passent pas par SmoothLink.
 */
export default function ProgressOnRouteChange() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    // Quand la route a effectivement changé, terminer NProgress
    NProgress.done();
  }, [pathname, search]);

  return null;
}
