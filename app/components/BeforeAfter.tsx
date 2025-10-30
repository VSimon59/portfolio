"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string; // image "avant"
  afterSrc: string;  // image "après"
  altBefore?: string;
  altAfter?: string;
  // position initiale du curseur (0..1)
  initial?: number;
  // ratio visuel (ex: 'aspect-video' = 16:9)
  className?: string;
};

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  altBefore = "Avant",
  altAfter = "Après",
  initial = 0.5,
  className = "aspect-video",
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(Math.min(1, Math.max(0, initial)));
  const dragging = useRef(false);

  const setPosFromEvent = useCallback((clientX: number) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const next = Math.min(1, Math.max(0, x / rect.width));
    setPos(next);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setPosFromEvent(e.clientX);
  }, [setPosFromEvent]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    setPosFromEvent(e.clientX);
  }, [setPosFromEvent]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  // accessibilité clavier (flèches)
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 0.02));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(1, p + 0.02));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(1);
    }
  }, []);

  // empêcher le scroll pendant drag (mobile)
  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current) e.preventDefault();
    };
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => document.removeEventListener("touchmove", onTouchMove);
  }, []);

  const percent = Math.round(pos * 100);

  return (
    <div className={`relative ${className} select-none`} ref={wrapperRef}>
      <div
        className="absolute inset-0 overflow-hidden rounded-xl bg-neutral-100"
        // zone pointer
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="group"
        aria-label="Comparateur avant / après"
      >
        {/* AFTER (fond) */}
        <Image
          src={afterSrc}
          alt={altAfter}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
          priority
        />

        {/* BEFORE (calque masqué) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${percent}%` }}
          aria-hidden="true"
        >
          <Image
            src={beforeSrc}
            alt={altBefore}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Barre / poignée */}
        <div
          className="absolute inset-y-0"
          style={{ left: `calc(${percent}% - 1px)` }}
          aria-hidden="true"
        >
          <div className="h-full w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" />
          <button
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md border grid place-items-center hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ left: "1px" }}
            aria-label={`Position du comparateur : ${percent}%`}
            title="Glisser pour comparer"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M7 4 L3 10 L7 16 M13 4 L17 10 L13 16" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Légendes discrètes */}
        <div className="absolute left-3 top-3 text-xs px-2 py-1 rounded bg-black/60 text-white">V1</div>
        <div className="absolute right-3 top-3 text-xs px-2 py-1 rounded bg-black/60 text-white">V2</div>
      </div>
    </div>
  );
}
