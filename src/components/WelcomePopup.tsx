import { useEffect, useState } from "react";
import { X, Snowflake, Phone, ArrowRight } from "lucide-react";

interface Props {
  onBook: () => void;
}

export function WelcomePopup({ onBook }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 animate-fade-up"
      style={{ animationDuration: "400ms" }}
    >
      <button
        aria-label="Close announcement"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-[#0d1410] border border-[#caa46a]/40 shadow-2xl">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-[#caa46a] via-[#f0d9a8] to-[#caa46a]" />

        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        >
          <X className="size-4" />
        </button>

        <div className="px-6 sm:px-9 pt-9 pb-7 text-center text-white">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#caa46a] mb-3">
            <Snowflake className="size-3" /> Sparsa Travels Presents
          </div>
          <h2 id="welcome-title" className="font-display text-3xl sm:text-4xl leading-tight">
            Perisher Snow Tours
            <span className="block text-[#caa46a]">2026</span>
          </h2>
          <p className="mt-3 text-white/70 italic text-sm">Experience the snow like never before</p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <ul className="space-y-2.5 text-sm text-left max-w-xs mx-auto">
            {[
              ["Same Day Return", "from $159"],
              ["2 Days / 1 Night", "from $205"],
              ["3 Days / 2 Nights", "from $305"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2">
                <span className="text-white/85">{k}</span>
                <span className="font-display text-[#caa46a]">{v}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[12px] text-white/75 text-left max-w-xs mx-auto">
            {["Transport included", "Friendly guide", "Perisher entry", "Group & shared"].map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <Snowflake className="size-3 text-[#caa46a]" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-5 inline-block rounded-full bg-[#caa46a]/15 border border-[#caa46a]/40 px-4 py-1.5 text-[11px] tracking-widest uppercase text-[#f0d9a8]">
            Bonus · Free snow gloves
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#caa46a] text-[#0d1410] px-6 py-3.5 text-sm font-medium hover:bg-[#f0d9a8] transition"
            >
              Book now <ArrowRight className="size-4" />
            </button>
            <a
              href="tel:+61420638932"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/5 transition"
            >
              <Phone className="size-4" /> 0420 638 932
            </a>
          </div>

          <p className="mt-5 text-[11px] tracking-widest uppercase text-white/50">
            Limited winter seats · Fast bookings only
          </p>
        </div>
      </div>
    </div>
  );
}
