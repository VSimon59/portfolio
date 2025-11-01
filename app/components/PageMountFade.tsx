"use client";
import { useEffect } from "react";
import NProgress from "nprogress";

/**
 * Applique un fade-in au montage ET stoppe NProgress.
 */
export default function PageMountFade() {
  useEffect(() => {
    const page = document.getElementById("page");
    if (page) {
      page.classList.remove("page-fading-out", "opacity-0");
      page.classList.add("page-fading-in");
    }
    // Stoppe la barre de progression (arrivée)
    NProgress.done();
  }, []);

  return null;
}
