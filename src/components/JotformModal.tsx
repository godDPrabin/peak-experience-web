import { useEffect } from "react";
import { X } from "lucide-react";

const JOTFORM_URL = "https://form.jotform.com/241081257483456";

export function JotformModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Booking form"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-up"
      style={{ animationDuration: "300ms" }}
    >
      {/* Blur backdrop */}
      <button
        aria-label="Close booking form"
        onClick={onClose}
        className="absolute inset-0 bg-[oklch(0.15_0.05_250/0.55)] backdrop-blur-md"
      />
      {/* Panel */}
      <div className="relative w-full max-w-3xl h-[85vh] rounded-3xl overflow-hidden glass shadow-frost border border-white/40">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 size-10 grid place-items-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-soft transition hover:scale-105"
        >
          <X className="size-5" />
        </button>
        <iframe
          title="Sparsa booking form"
          src={JOTFORM_URL}
          className="w-full h-full bg-white"
          frameBorder={0}
          allow="geolocation; microphone; camera"
        />
      </div>
    </div>
  );
}
