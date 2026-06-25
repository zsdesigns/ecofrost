import { ArrowRight, ShoppingBag, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image (drone-style solar shot) */}
      <img
        src={heroImg}
        alt="Aerial view of a home fitted with rooftop solar panels at sunset in KwaZulu-Natal"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 overlay-hero" />
      <div className="absolute inset-0 bg-ink/30" />

      {/* Animated sunlight effect */}
      <div className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] sm:-right-10">
        <div className="absolute inset-0 animate-sun-pulse rounded-full bg-[radial-gradient(circle,oklch(0.88_0.16_85/0.55),transparent_62%)] blur-2xl" />
        <div className="absolute inset-8 animate-sun-rays bg-[conic-gradient(from_0deg,transparent_0deg,oklch(0.85_0.15_85/0.25)_12deg,transparent_24deg,transparent_60deg,oklch(0.85_0.15_85/0.2)_72deg,transparent_84deg)] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="max-w-3xl">
          <span className="animate-float-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            Residential • Commercial • Industrial
          </span>

          <h1
            className="animate-float-up mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Power Your Home & Business with{" "}
            <span className="text-gradient-gold">Reliable Solar</span> &{" "}
            <span className="text-accent">Electrical</span> Solutions
          </h1>

          <p
            className="animate-float-up mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Professional solar installations, electrical services, maintenance,
            repairs, and custom energy solutions across Northern KwaZulu-Natal.
          </p>

          <div
            className="animate-float-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full btn-gold px-7 py-4 text-base font-bold text-gold-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop Solar Packages
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
