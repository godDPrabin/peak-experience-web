import { useEffect, useMemo, useState } from "react";
import {
  Mountain,
  Snowflake,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Check,
  Star,
  Menu,
  X as XIcon,
  Compass,
} from "lucide-react";
import { JotformModal } from "@/components/JotformModal";
import { Lightbox } from "@/components/Lightbox";
import { WelcomePopup } from "@/components/WelcomePopup";

import header from "@/assets/sparsa/hero.jpg";
import img1 from "@/assets/sparsa/img1.jpg";
import img2 from "@/assets/sparsa/img2.jpg";
import img3 from "@/assets/sparsa/img3.jpg";
import img4 from "@/assets/sparsa/img4.jpg";
import agency from "@/assets/sparsa/agency.jpg";

import g1 from "@/assets/gallery/pic1.jpeg";
import g2 from "@/assets/gallery/pic2.jpeg";
import g3 from "@/assets/gallery/pic3.jpeg";
import g4 from "@/assets/gallery/pic4.jpeg";
import g5 from "@/assets/gallery/pic5.jpeg";
import g6 from "@/assets/gallery/pic6.jpeg";
import g7 from "@/assets/gallery/pic7.jpeg";
import g8 from "@/assets/gallery/pic8.jpeg";
import g9 from "@/assets/gallery/pic9.jpeg";
import g10 from "@/assets/gallery/pic10.jpeg";
import g11 from "@/assets/gallery/pic11.jpeg";
import g12 from "@/assets/gallery/pic12.jpeg";
import g13 from "@/assets/gallery/pic13.jpeg";
import g14 from "@/assets/gallery/pic14.jpeg";
import g15 from "@/assets/gallery/pic15.jpeg";
import g16 from "@/assets/gallery/pic16.jpeg";
import g17 from "@/assets/gallery/pic17.jpeg";
import g18 from "@/assets/gallery/pic18.jpeg";
import g19 from "@/assets/gallery/pic19.jpeg";

const PHONE = "0420 638 932";
const PHONE_INTL = "+61420638932";
const WHATSAPP = "61420638932";
const EMAIL = "info.sparsaservices@gmail.com";
const ADDRESS = "555 Princess Highway, Rockdale, NSW 2216";

const NAV = [
  { id: "home", label: "Home" },
  { id: "story", label: "Journal" },
  { id: "packages", label: "Packages" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

type Tier = { price: string; type: string; tag?: string; inclusions: string[] };
type Pkg = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  duration: string;
  image: string;
  tiers: Tier[];
};

const PACKAGES: Pkg[] = [
  {
    id: "same-day",
    num: "01",
    title: "Same Day Return",
    subtitle: "A full day above the clouds, home by nightfall.",
    duration: "1 Day",
    image: img1,
    tiers: [
      {
        price: "$159",
        type: "Group Deal",
        tag: "Min 10 pax",
        inclusions: [
          "Vehicle & transport included",
          "Friendly driver / tour guide",
          "Perisher entry fee",
          "Group booking only",
        ],
      },
      {
        price: "$180",
        type: "Shared Group",
        tag: "Join others",
        inclusions: [
          "Vehicle & transport included",
          "Friendly driver / tour guide",
          "Perisher entry fee",
          "Shared group formation",
        ],
      },
    ],
  },
  {
    id: "two-day",
    num: "02",
    title: "Two Days · One Night",
    subtitle: "Snow by day, campfire & BBQ by night.",
    duration: "2D / 1N",
    image: img2,
    tiers: [
      {
        price: "$205",
        type: "Basic Group",
        tag: "Min 10 pax",
        inclusions: [
          "Transport included",
          "Driver / guide",
          "Perisher entry fee",
          "Custom itinerary",
          "Accommodation at own cost",
        ],
      },
      {
        price: "$279",
        type: "Standard Package",
        tag: "Shared / Private",
        inclusions: [
          "Accommodation included",
          "Transport & guide",
          "Perisher entry fee",
          "Custom itinerary",
          "Campfire & BBQ night",
        ],
      },
      {
        price: "$299",
        type: "Premium Package",
        tag: "Free snow gloves",
        inclusions: [
          "All $279 inclusions",
          "FREE snow gloves",
          "Full snow experience upgrade",
        ],
      },
    ],
  },
  {
    id: "three-day",
    num: "03",
    title: "Three Days · Two Nights",
    subtitle: "The full alpine immersion — slow, scenic, unforgettable.",
    duration: "3D / 2N",
    image: img3,
    tiers: [
      {
        price: "$305",
        type: "Group Budget",
        tag: "Min 10 pax",
        inclusions: [
          "Transport included",
          "Driver / guide",
          "Perisher entry fee",
          "Custom itinerary",
          "Accommodation at own cost",
        ],
      },
      {
        price: "$449",
        type: "Premium Stay",
        tag: "All inclusive · Free gloves",
        inclusions: [
          "Accommodation included",
          "Transport & guide",
          "Perisher entry fee",
          "Custom itinerary",
          "FREE snow gloves",
          "Premium group experience",
        ],
      },
    ],
  },
];

export default function PageIndex() {
  const [bookOpen, setBookOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const gallery = useMemo(
    () =>
      [g3, g5, g7, g11, g13, g15, g17, g18, g19, g1, g2, g4, g6, g8, g9, g10, g12, g14, g16].map((src, i) => ({
        src,
        alt: `Perisher snow tour moment ${i + 1}`,
      })),
    [],
  );

  const openBook = () => setBookOpen(true);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      {/* Top marquee */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-[var(--forest)] text-[var(--cream)] text-[11px] tracking-[0.25em] uppercase overflow-hidden border-b border-[var(--gold)]/20">
        <div className="flex whitespace-nowrap animate-marquee py-2.5">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex shrink-0 items-center gap-10 px-5">
              {[
                "Perisher Winter '26",
                "✦ Same Day from $159",
                "✦ 2D/1N from $205",
                "✦ 3D/2N from $305",
                "✦ Free snow gloves",
                "✦ Limited seats",
                "✦ Book: 0420 638 932",
              ].map((t) => (
                <span key={t} className="opacity-80">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Snow */}
      <div className="snow" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => {
          const left = (i * 53) % 100;
          const dur = 9 + ((i * 7) % 14);
          const delay = (i * 1.3) % 12;
          const size = 2 + ((i * 3) % 5);
          return (
            <span
              key={i}
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${dur}s`,
                animationDelay: `-${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Header */}
      <header
        className={`fixed top-[36px] inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark text-white py-2.5" : "py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="size-9 rounded-full grid place-items-center bg-[var(--gold)] text-[var(--forest)]">
              <Mountain className="size-4.5" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-tight">Sparsa</div>
              <div className="text-[9px] tracking-[0.3em] uppercase opacity-70 -mt-0.5">Travels & Co.</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative px-4 py-2 text-[13px] tracking-wide transition ${
                  active === n.id ? "opacity-100" : "opacity-65 hover:opacity-100"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--gold)] transition-transform duration-300 origin-left ${
                    active === n.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_INTL}`}
              className="hidden lg:inline-flex items-center gap-2 text-xs opacity-80 hover:opacity-100"
            >
              <Phone className="size-3.5" /> {PHONE}
            </a>
            <button
              onClick={openBook}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-soft)] text-[var(--forest)] px-5 py-2.5 text-[13px] font-medium transition"
            >
              Book now <ArrowRight className="size-3.5" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileNav((v) => !v)}
              className="md:hidden size-10 grid place-items-center rounded-full bg-white/10 border border-white/20"
            >
              {mobileNav ? <XIcon className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileNav && (
          <div className="md:hidden mx-5 mt-3 rounded-2xl glass-dark p-3 animate-fade-up" style={{ animationDuration: "250ms" }}>
            <div className="flex flex-col">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMobileNav(false)}
                  className="px-4 py-3 text-sm border-b border-white/10 last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileNav(false);
                  openBook();
                }}
                className="mt-2 rounded-full bg-[var(--gold)] text-[var(--forest)] px-5 py-2.5 text-sm font-medium"
              >
                Book now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO — editorial split */}
      <section id="home" className="relative min-h-[100svh] pt-[88px] sm:pt-[100px] overflow-hidden bg-[var(--forest)] text-white">
        <img
          src={header}
          alt="Snow-covered peaks of Perisher Valley at dawn"
          className="absolute inset-0 size-full object-cover opacity-65"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest)]/85 via-[var(--forest)]/40 to-[var(--forest)]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-24 grid lg:grid-cols-12 gap-10 items-end min-h-[calc(100svh-100px)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Sparsa Travels Presents
            </div>
            <h1 className="mt-5 font-display text-[14vw] sm:text-[10vw] lg:text-[8.2vw] leading-[0.92] tracking-[-0.04em] animate-fade-up">
              Perisher
              <span className="block serif-italic text-[var(--gold-soft)]">snow tours</span>
              <span className="block">2026.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed animate-fade-up" style={{ animationDelay: "150ms" }}>
              We've spent seven winters perfecting one thing — the way Sydney falls in love with snow.
              Hand-picked group escapes to Perisher Valley with transport, guide and entry handled,
              so you only carry the memories home.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "260ms" }}>
              <button
                onClick={openBook}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-soft)] text-[var(--forest)] px-7 py-3.5 text-sm font-medium transition"
              >
                Reserve your seat <ArrowRight className="size-4" />
              </button>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm hover:bg-white/10 transition"
              >
                See all 3 packages
              </a>
            </div>

            {/* Quick price strip */}
            <div className="mt-12 grid grid-cols-3 max-w-2xl border-t border-white/15 animate-fade-up" style={{ animationDelay: "380ms" }}>
              {[
                ["Same day", "$159"],
                ["2D / 1N", "$205"],
                ["3D / 2N", "$305"],
              ].map(([k, v], i) => (
                <div key={k} className={`py-5 ${i > 0 ? "border-l border-white/15" : ""} pl-4`}>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/55">{k}</div>
                  <div className="mt-1 font-display text-2xl sm:text-3xl text-[var(--gold-soft)]">from {v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6">
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                <span className="text-xs text-white/70 ml-2">4.9 · 187 travellers</span>
              </div>
              <p className="mt-4 font-display italic text-lg leading-snug text-white/90">
                "Felt like a private getaway curated just for our group. Snow, food, stories — flawless."
              </p>
              <div className="mt-4 text-xs tracking-widest uppercase text-white/55">Aisha · Sydney, '25</div>
              <div className="my-5 divider-gold" />
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Sparsa! I'd love info on Perisher snow tours.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm group"
              >
                <span>WhatsApp us now</span>
                <ArrowUpRight className="size-4 text-[var(--gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.4em] uppercase text-white/55 flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* JOURNAL / STORY */}
      <section id="story" className="relative py-24 sm:py-32 bg-background noise">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal lg:sticky lg:top-32">
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" /> Chapter I · The Journal
              </div>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
                Snow, the way
                <br />
                <span className="serif-italic text-[var(--gold)]">it should be felt</span>.
              </h2>
              <div className="mt-8 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm">
                <img src={agency} alt="Sparsa team on a Perisher snow tour" className="size-full object-cover" loading="lazy" />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-16">
              <div className="space-y-10">
                <article className="reveal">
                  <div className="font-display text-7xl text-[var(--gold)] leading-none">01</div>
                  <h3 className="font-display text-3xl mt-3">Born in Rockdale, raised by the alps.</h3>
                  <p className="mt-4 text-[15px] text-foreground/75 leading-[1.85] max-w-2xl">
                    For seven winters we've watched the same magic unfold — Sydneysiders stepping into snow
                    for the very first time, kids throwing the first snowball of their lives, grandparents
                    smiling like they've been let into a secret. That's the only product we sell.
                  </p>
                </article>

                <article className="reveal">
                  <div className="font-display text-7xl text-[var(--gold)] leading-none">02</div>
                  <h3 className="font-display text-3xl mt-3">Small groups. Big mountain feelings.</h3>
                  <p className="mt-4 text-[15px] text-foreground/75 leading-[1.85] max-w-2xl">
                    We cap our trips on purpose. Smaller buses, friendlier guides, and the kind of itinerary
                    that bends with the group — not against it. Custom routes, fireside stops, hot chocolate
                    detours. Whatever the day asks for.
                  </p>
                </article>

                <article className="reveal">
                  <div className="font-display text-7xl text-[var(--gold)] leading-none">03</div>
                  <h3 className="font-display text-3xl mt-3">Everything handled. Nothing missed.</h3>
                  <p className="mt-4 text-[15px] text-foreground/75 leading-[1.85] max-w-2xl">
                    Transport, Perisher entry, the guide, the snacks, the playlist — we take care of all of
                    it so you can stay where the snow is. Just turn up with a warm coat and an open weekend.
                  </p>
                </article>

                <div className="reveal grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-6">
                  {[
                    ["7+", "Winters guiding"],
                    ["1,200+", "Happy travellers"],
                    ["★ 4.9", "Average rating"],
                  ].map(([k, v]) => (
                    <div key={v} className="bg-card px-5 py-7 text-center">
                      <div className="font-display text-3xl">{k}</div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative py-24 sm:py-32 bg-[var(--forest)] text-white noise overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 reveal">
            <div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" /> Chapter II · Packages
              </div>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
                Three ways to <span className="serif-italic text-[var(--gold-soft)]">disappear</span>
                <br /> into the snow.
              </h2>
            </div>
            <p className="max-w-sm text-white/65 text-[15px] leading-relaxed">
              Every package includes vehicle, friendly tour guide and the Perisher entry fee. Choose your length —
              we'll shape the rest around your group.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {PACKAGES.map((pkg, idx) => (
              <article
                key={pkg.id}
                className={`reveal grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <img src={pkg.image} alt={`${pkg.title} — Perisher snow tour`} className="size-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/70 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--forest)] px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-medium">
                      {pkg.duration}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="font-display text-7xl leading-none text-white/20">{pkg.num}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="font-display text-4xl sm:text-5xl leading-tight">{pkg.title}</h3>
                  <p className="mt-3 text-white/70 text-lg italic font-light">{pkg.subtitle}</p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-3">
                    {pkg.tiers.map((t, i) => (
                      <div
                        key={t.price + t.type}
                        className={`relative rounded-2xl p-5 border transition hover:-translate-y-0.5 ${
                          i === pkg.tiers.length - 1
                            ? "border-[var(--gold)]/60 bg-[var(--gold)]/8"
                            : "border-white/15 bg-white/[0.03]"
                        }`}
                      >
                        {t.tag && (
                          <div className="absolute -top-2.5 right-4 bg-[var(--gold)] text-[var(--forest)] text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 rounded-full font-medium">
                            {t.tag}
                          </div>
                        )}
                        <div className="flex items-baseline justify-between gap-3">
                          <div>
                            <div className="text-[10px] tracking-[0.3em] uppercase text-white/55">{t.type}</div>
                            <div className="font-display text-4xl text-[var(--gold-soft)] mt-1">{t.price}</div>
                          </div>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {t.inclusions.map((inc) => (
                            <li key={inc} className="flex items-start gap-2 text-[13px] text-white/80">
                              <Check className="size-3.5 text-[var(--gold)] shrink-0 mt-1" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={openBook}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-soft)] text-[var(--forest)] px-6 py-3 text-sm font-medium transition"
                    >
                      Book this package <ArrowRight className="size-4" />
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Sparsa! I'd like to enquire about the ${pkg.title} snow tour.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/10 transition"
                    >
                      WhatsApp enquiry
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
            <div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" /> Chapter III · Postcards
              </div>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-2xl">
                Frames from <span className="serif-italic text-[var(--gold)]">real</span> Sparsa trips.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Every photo below is from a Sparsa traveller — no stock, no staged smiles. Tap to step inside.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
            {gallery.map((g, i) => {
              const big = [0, 5, 8, 13].includes(i);
              return (
                <button
                  key={g.src}
                  onClick={() => setLightboxIdx(i)}
                  className={`reveal group relative overflow-hidden rounded-2xl bg-muted shadow-soft hover:shadow-warm focus:outline-none focus:ring-2 focus:ring-ring transition ${
                    big ? "row-span-2" : ""
                  }`}
                  style={{ transitionDelay: `${(i % 8) * 40}ms` }}
                >
                  <span className="shimmer absolute inset-0" aria-hidden />
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={(e) => {
                      const prev = e.currentTarget.previousElementSibling as HTMLElement | null;
                      if (prev) prev.style.display = "none";
                    }}
                    className="relative size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[var(--forest)] text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest)]/60 to-[var(--forest)]" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Winter '26 is filling fast</div>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-[0.95]">
            Your mountain is <span className="serif-italic text-[var(--gold-soft)]">waiting</span>.
          </h2>
          <p className="mt-5 text-white/75 max-w-xl mx-auto">
            Limited dates each season. Tell us when you're free and we'll build the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={openBook}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-soft)] text-[var(--forest)] px-8 py-4 font-medium transition"
            >
              Book your escape <ArrowRight className="size-4" />
            </button>
            <a
              href={`tel:${PHONE_INTL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm hover:bg-white/10 transition"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--gold)]" /> Chapter IV · Say hello
            </div>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Let's plan the <span className="serif-italic text-[var(--gold)]">quiet part</span> of your year.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              WhatsApp is fastest. Or drop into our Rockdale studio for a coffee and a map.
            </p>

            <div className="mt-10 space-y-3 max-w-md">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Sparsa! I'd love to plan a Perisher snow trip.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-warm hover:-translate-y-0.5 transition"
              >
                <div className="size-11 rounded-xl bg-[#25D366] grid place-items-center text-white shrink-0">
                  <svg viewBox="0 0 32 32" className="size-5" fill="currentColor" aria-hidden>
                    <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.32L5 27.33l6.16-1.61a10.62 10.62 0 0 0 4.86 1.18h.01c5.88 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.12-7.55a10.61 10.61 0 0 0-7.56-3.13z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp · Call</div>
                  <div className="font-display text-xl">{PHONE}</div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-warm hover:-translate-y-0.5 transition"
              >
                <div className="size-11 rounded-xl bg-secondary grid place-items-center shrink-0">
                  <Mail className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
                  <div className="font-display text-base sm:text-lg truncate">{EMAIL}</div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="size-11 rounded-xl bg-secondary grid place-items-center shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Studio</div>
                  <div className="font-display text-base sm:text-lg">{ADDRESS}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-warm border border-border bg-[var(--forest)] text-white p-7 sm:p-9 relative">
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
              <div className="relative">
                <Compass className="size-7 text-[var(--gold)]" />
                <h3 className="font-display text-3xl mt-3">Request a custom itinerary</h3>
                <p className="text-sm text-white/65 mt-2 max-w-sm">
                  Tell us your group size and preferred dates — we'll reply within 24 hours with a tailored plan.
                </p>
                <button
                  onClick={openBook}
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--gold)] hover:bg-[var(--gold-soft)] text-[var(--forest)] py-4 font-medium transition"
                >
                  Open booking form <ArrowRight className="size-4" />
                </button>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["24h", "Reply"],
                    ["100%", "Tailored"],
                    ["7+ yrs", "Experience"],
                  ].map(([k, v]) => (
                    <div key={v} className="rounded-2xl bg-white/5 border border-white/10 py-4">
                      <div className="font-display text-xl text-[var(--gold-soft)]">{k}</div>
                      <div className="text-[9px] tracking-[0.3em] uppercase text-white/60 mt-1">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[var(--forest)] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-full grid place-items-center bg-[var(--gold)] text-[var(--forest)]">
                <Mountain className="size-4.5" />
              </div>
              <div className="font-display text-xl">Sparsa Travels</div>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Snowy mountain escapes, hand-built from Rockdale, Australia.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-[var(--gold)] text-white/80 transition">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href={`tel:${PHONE_INTL}`} className="hover:text-[var(--gold)]">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-[var(--gold)] break-all">{EMAIL}</a></li>
              <li>{ADDRESS}</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Follow</div>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--forest)] transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 text-xs flex flex-wrap items-center justify-between gap-3 text-white/55">
          <div>© {new Date().getFullYear()} Sparsa Travels & Services. All rights reserved.</div>
          <div>Crafted with snow & care.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Sparsa! I'd love to plan a Perisher snow trip.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sparsa on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-warm hover:scale-110 active:scale-95 transition"
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.32L5 27.33l6.16-1.61a10.62 10.62 0 0 0 4.86 1.18h.01c5.88 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.12-7.55a10.61 10.61 0 0 0-7.56-3.13z" />
        </svg>
      </a>

      <WelcomePopup onBook={openBook} />
      <JotformModal open={bookOpen} onClose={() => setBookOpen(false)} />
      <Lightbox images={gallery} index={lightboxIdx} onClose={() => setLightboxIdx(null)} onIndex={setLightboxIdx} />

      {/* Suppress unused warnings for assets reserved for future sections */}
      <span className="hidden">{[img4].map(() => null)}</span>
    </div>
  );
}
