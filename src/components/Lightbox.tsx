import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;

  const next = useCallback(
    () => index !== null && onIndex((index + 1) % images.length),
    [index, images.length, onIndex]
  );
  const prev = useCallback(
    () => index !== null && onIndex((index - 1 + images.length) % images.length),
    [index, images.length, onIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  if (!open || index === null) return null;
  const img = images[index];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center animate-fade-up" style={{ animationDuration: "250ms" }}>
      <button
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute inset-0 bg-[oklch(0.10_0.04_250/0.85)] backdrop-blur-md"
      />
      <button onClick={prev} aria-label="Previous" className="absolute left-4 sm:left-8 z-10 size-12 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white transition">
        <ChevronLeft className="size-6" />
      </button>
      <img
        src={img.src}
        alt={img.alt}
        className="relative z-0 max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-frost"
      />
      <button onClick={next} aria-label="Next" className="absolute right-4 sm:right-8 z-10 size-12 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white transition">
        <ChevronRight className="size-6" />
      </button>
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 size-10 grid place-items-center rounded-full bg-white/90 text-foreground hover:scale-105 transition">
        <X className="size-5" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest uppercase">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}
