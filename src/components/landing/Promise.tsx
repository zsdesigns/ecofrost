import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";

export function Promise() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.17_158/0.25),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.15_85/0.2),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <BadgeCheck className="h-4 w-4" />
            Customer Promise
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Quality You Can Depend On
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Every installation is completed with premium products, attention to
            detail and professional workmanship.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Our mission is to help customers become{" "}
            <span className="font-semibold text-accent">energy independent</span>{" "}
            while reducing electricity costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
