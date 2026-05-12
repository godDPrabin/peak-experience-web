import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Mountain,
  Snowflake,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  Compass,
  Sparkles,
  Tent,
  Utensils,
  Hotel,
  Camera,
  Menu,
  X as XIcon,
} from "lucide-react";
import { JotformModal } from "@/components/JotformModal";
import { Lightbox } from "@/components/Lightbox";

import header from "@/assets/sparsa/header.jpg";
import img1 from "@/assets/sparsa/img1.jpg";
import img2 from "@/assets/sparsa/img2.jpg";
import img3 from "@/assets/sparsa/img3.jpg";
import img4 from "@/assets/sparsa/img4.jpg";
import agency from "@/assets/sparsa/agency.jpg";
import logo from "@/assets/sparsa/logoo.png";

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

const PHONE = "0452549408";
// Australia mobile in international format for WhatsApp (drop leading 0, add 61)
const WHATSAPP = "61452549408";
const ADDRESS = "555 Princess Highway, Rockdale, NSW, Australia";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparsa Travels — Snowy Mountain Escapes in Perisher Valley, Australia" },
      {
        name: "description",
        content:
          "Sparsa Travels & Services curates unforgettable snowy mountain escapes to Perisher Valley, Australia — guided ski trips, cozy stays, scenic short trips and bespoke itineraries.",
      },
      { name: "keywords", content: "Sparsa Travels, Perisher Valley, snow trip Australia, ski tours, Rockdale travel agency, snowy mountain holiday, short trips Sydney" },
      { name: "theme-color", content: "#0c1733" },
      { property: "og:title", content: "Sparsa Travels — Snowy Mountain Escapes" },
      { property: "og:description", content: "Guided snowy mountain escapes to Perisher Valley. Book your alpine adventure with Sparsa Travels & Services." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: header },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sparsa Travels — Snowy Mountain Escapes" },
      { name: "twitter:description", content: "Guided snowy mountain escapes to Perisher Valley, Australia." },
      { name: "twitter:image", content: header },
    ],
    links: [
      { rel: "canonical", href: "https://sparsatravels.com/" },
      { rel: "preload", as: "image", href: header, fetchpriority: "high" } as any,
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" } as any,
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Sparsa Travels & Services",
          image: header,
          telephone: "+61452549408",
          email: "info@sparsatravels.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "555 Princess Highway",
            addressLocality: "Rockdale",
            addressRegion: "NSW",
            addressCountry: "AU",
          },
          areaServed: "Perisher Valley, Australia",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "experiences", label: "Experiences" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

function Index() {
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

  // Active section observer
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const gallery = useMemo(
    () => [g3, g5, g7, g11, g13, g15, g17, g18, g19, g1, g2, g4, g6, g8, g9, g10, g12, g14, g16].map((src, i) => ({
      src,
      alt: `Snowy mountain moment ${i + 1}`,
    })),
    []
  );

  const openBook = () => setBookOpen(true);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Snowfall ambience */}
      <div className="snow" aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => {
          const left = (i * 53) % 100;
          const dur = 8 + ((i * 7) % 14);
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

      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 glass-dark text-white shadow-soft"
            : "py-4 bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="size-9 rounded-full grid place-items-center bg-white/15 backdrop-blur border border-white/25 group-hover:bg-white/25 transition">
              <Mountain className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg">Sparsa</div>
              <div className="text-[10px] tracking-[0.25em] uppercase opacity-70">Travels & Services</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative px-4 py-2 text-sm transition ${
                  active === n.id ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-px bg-white transition-transform duration-300 origin-left ${
                    active === n.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openBook}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-medium shadow-soft hover:scale-[1.03] active:scale-95 transition"
            >
              Book now <ArrowRight className="size-4" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileNav((v) => !v)}
              className="md:hidden size-10 grid place-items-center rounded-full bg-white/15 border border-white/25"
            >
              {mobileNav ? <XIcon className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
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
                className="mt-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-medium"
              >
                Book now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={header}
          alt="Snowy mountain peaks at Perisher Valley, Australia"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.06_250/0.55)] via-[oklch(0.18_0.06_250/0.25)] to-[oklch(0.18_0.06_250/0.85)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-32 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs tracking-widest uppercase bg-white/10 border border-white/25 backdrop-blur animate-fade-up">
              <Snowflake className="size-3.5" /> Perisher Valley · Winter '26
            </div>
            <h1 className="mt-6 text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] animate-fade-up" style={{ animationDelay: "120ms" }}>
              Where the air is thin
              <br />
              <span className="italic font-light text-[oklch(0.92_0.04_215)]">and the silence is loud.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 animate-fade-up" style={{ animationDelay: "240ms" }}>
              Sparsa curates intimate snowy mountain escapes — guided trails, fireside stays
              and the kind of stillness you only find above the clouds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
              <button
                onClick={openBook}
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-medium shadow-frost hover:scale-[1.03] active:scale-95 transition"
              >
                Plan my escape <ArrowRight className="size-4" />
              </button>
              <a
                href="#experiences"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 backdrop-blur px-7 py-3.5 text-sm hover:bg-white/15 transition"
              >
                Explore experiences
              </a>
            </div>
          </div>

          {/* hero meta strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl text-white/85 animate-fade-up" style={{ animationDelay: "500ms" }}>
            {[
              ["7+", "Years guiding"],
              ["1.2K", "Happy travellers"],
              ["19", "Curated trails"],
              ["★ 4.9", "Average rating"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl sm:text-3xl">{k}</div>
                <div className="text-xs tracking-widest uppercase opacity-70 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              <Compass className="size-3.5" /> Our Story
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Small group journeys.
              <br />
              <span className="italic text-[oklch(0.42_0.08_245)]">Big mountain feelings.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Born in Rockdale, raised by the alps. We've spent years piecing together the perfect
              winter — quiet cabins, warm meals, honest guides, and the kind of routes that don't
              feel rushed. Whether it's your first snowfall or your fortieth, every Sparsa trip is
              hand-built for the people on it.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Sparkles, label: "Hand-crafted" },
                { icon: Tent, label: "Small groups" },
                { icon: Mountain, label: "Local guides" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl bg-secondary/60 border border-border px-4 py-4 flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-white grid place-items-center shadow-soft">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-frost aspect-[4/5]">
              <img src={agency} alt="Sparsa Travels team in the snow" loading="lazy" decoding="async" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl glass px-5 py-4 shadow-frost animate-float">
              <Snowflake className="size-5 text-[oklch(0.42_0.08_245)]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Next escape</div>
                <div className="font-display text-lg">Perisher · Jul 12</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="relative py-24 sm:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                <Sparkles className="size-3.5" /> Experiences
              </div>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
                Four ways to feel the <span className="italic">winter</span>.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Pick a thread and we'll weave the rest — itinerary, transport, stays, all of it.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: img1, icon: Hotel, title: "Cozy Stays", text: "Fireside cabins and mountain lodges hand-picked for warmth." },
              { img: img2, icon: Utensils, title: "Mountain Dining", text: "Hearty alpine plates and slow evenings with local wine." },
              { img: img4, icon: Camera, title: "Scenic Tours", text: "Guided routes to viewpoints most travellers walk past." },
              { img: img3, icon: Tent, title: "Village Strolls", text: "Boutique shops, quiet streets and snow-dusted rooftops." },
            ].map(({ img, icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="reveal group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-frost transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
                    <Icon className="size-3.5" /> Sparsa pick
                  </div>
                  <h3 className="font-display text-2xl mt-1">{title}</h3>
                  <p className="text-sm text-white/80 mt-1 line-clamp-2">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                <Camera className="size-3.5" /> Moments
              </div>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
                A <span className="italic">quiet</span> kind of postcard.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Tap any frame to step inside — every photo is from a real Sparsa journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
            {gallery.map((g, i) => {
              // Vary tile sizes for a magazine-style mosaic
              const big = [0, 5, 8, 13].includes(i);
              return (
                <button
                  key={g.src}
                  onClick={() => setLightboxIdx(i)}
                  className={`reveal group relative overflow-hidden rounded-2xl bg-muted shadow-soft hover:shadow-frost focus:outline-none focus:ring-2 focus:ring-ring transition ${
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
                      const prev = (e.currentTarget.previousElementSibling as HTMLElement | null);
                      if (prev) prev.style.display = "none";
                    }}
                    className="relative size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-sky" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${header})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center text-white reveal">
          <h2 className="text-4xl sm:text-6xl leading-[1.05]">
            Your mountain is <span className="italic">waiting</span>.
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto">
            Limited dates each season. Tell us when you're free and we'll build the rest.
          </p>
          <button
            onClick={openBook}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-medium shadow-frost hover:scale-[1.03] active:scale-95 transition"
          >
            Book your escape <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              <MapPin className="size-3.5" /> Say hello
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Let's plan the <span className="italic">quiet part</span> of your year.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Reach us on WhatsApp for the fastest reply, or drop into the Rockdale studio for a coffee and a map.
            </p>

            <div className="mt-10 space-y-4 max-w-md">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Sparsa! I'd love to plan a snowy mountain trip.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-frost hover:-translate-y-0.5 transition"
              >
                <div className="size-12 rounded-xl bg-[oklch(0.72_0.16_150)] grid place-items-center text-white shrink-0">
                  {/* WhatsApp glyph */}
                  <svg viewBox="0 0 32 32" className="size-6" fill="currentColor" aria-hidden>
                    <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.32L5 27.33l6.16-1.61a10.62 10.62 0 0 0 4.86 1.18h.01c5.88 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.12-7.55a10.61 10.61 0 0 0-7.56-3.13z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp / Call</div>
                  <div className="font-display text-xl">+61 452 549 408</div>
                </div>
                <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="size-12 rounded-xl bg-secondary grid place-items-center shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
                  <div className="font-display text-lg">{ADDRESS}</div>
                </div>
              </div>

              <a
                href="mailto:hello@sparsatravels.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-frost hover:-translate-y-0.5 transition"
              >
                <div className="size-12 rounded-xl bg-secondary grid place-items-center shrink-0">
                  <Mail className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-display text-lg">hello@sparsatravels.com</div>
                </div>
                <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-frost border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-2xl">Request a custom itinerary</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Open the booking form in a glance — we'll get back within 24 hours.
              </p>
              <button
                onClick={openBook}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground py-4 font-medium hover:opacity-90 transition"
              >
                Open booking form <ArrowRight className="size-4" />
              </button>

              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                {[
                  ["24h", "Reply time"],
                  ["100%", "Tailored"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-2xl bg-secondary/60 py-5">
                    <div className="font-display text-2xl">{k}</div>
                    <div className="text-[11px] tracking-widest uppercase text-muted-foreground mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-primary text-primary-foreground pt-16 pb-8 mt-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Sparsa Travels logo" className="h-10 w-auto bg-white rounded-md p-1" loading="lazy" />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Snowy mountain escapes, hand-built from Rockdale, Australia.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-white text-primary-foreground/85">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
              <li>+61 452 549 408</li>
              <li>{ADDRESS}</li>
              <li>hello@sparsatravels.com</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Follow</div>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 text-xs flex flex-wrap items-center justify-between gap-3 text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Sparsa Travels & Services. All rights reserved.</div>
          <div>Crafted with snow & care.</div>
        </div>
      </footer>

      {/* Floating phone → WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Sparsa! I'd love to plan a snowy mountain trip.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sparsa on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 size-14 grid place-items-center rounded-full bg-[oklch(0.72_0.16_150)] text-white shadow-frost hover:scale-110 active:scale-95 transition"
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.32L5 27.33l6.16-1.61a10.62 10.62 0 0 0 4.86 1.18h.01c5.88 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.12-7.55a10.61 10.61 0 0 0-7.56-3.13z"/>
        </svg>
      </a>

      {/* Modals */}
      <JotformModal open={bookOpen} onClose={() => setBookOpen(false)} />
      <Lightbox images={gallery} index={lightboxIdx} onClose={() => setLightboxIdx(null)} onIndex={setLightboxIdx} />
    </div>
  );
}
