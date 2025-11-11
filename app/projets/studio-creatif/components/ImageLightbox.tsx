"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt = "", onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Bloque le scroll du body quand le lightbox est ouvert
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC pour fermer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // clic en dehors -> fermer
  const onBackdrop = (e: React.MouseEvent) => {
    if (e.target === ref.current) onClose();
  };

  return createPortal(
    <div
      ref={ref}
      onClick={onBackdrop}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/80 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      {/* Conteneur image + header */}
      <div className="relative mx-4 max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_1px_1px_rgba(0,0,0,.15),0_28px_80px_-24px_rgba(0,0,0,.65)]">
        {/* Barre d’actions */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
          <span className="text-sm font-medium text-white/80">{alt || "Aperçu"}</span>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
            aria-label="Fermer"
          >
            Retour
          </button>
        </div>

        {/* Image */}
        <div className="relative flex max-h-[calc(92vh-52px)] items-center justify-center bg-black/20">
          <img
            src={src}
            alt={alt}
            className="max-h-[calc(92vh-52px)] w-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
