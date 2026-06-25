import {
  Home,
  Building2,
  Container,
  Wrench,
  ArrowUpRight,
  Cable,
  Settings,
  Search,
} from "lucide-react";
import { Reveal } from "./Reveal";
import industrialImg from "@/assets/industrial-container.jpg";

const mainServices = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Reduce electricity bills while protecting your home from load shedding with professionally designed solar systems.",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Lower operating costs with scalable energy solutions built for offices, warehouses, retail stores and businesses.",
  },
  {
    icon: Container,
    title: "Industrial Containerised Solar",
    desc: "High-performance container-based solar systems engineered for large-scale energy requirements.",
    image: industrialImg,
  },
];

const electrical = [
  { icon: Cable, label: "Electrical Installations" },
  { icon: Wrench, label: "Maintenance" },
  { icon: Settings, label: "Repairs" },
  { icon: ArrowUpRight, label: "Upgrades" },
  { icon: Search, label: "Fault Finding" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            End-to-End Solar & Electrical
          </h2>
          <p className="mt-4 text-muted-foreground">
            Complete energy solutions designed, installed and supported by
            certified local experts.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {mainServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]">
                {s.image && (
                  <div className="mb-6 -mx-7 -mt-7 h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1280}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-emerald)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Enquire now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Electrical services strip */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-3xl bg-ink p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Electrical Services
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Certified electrical work for homes, businesses and industry.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {electrical.map((e) => (
                  <li
                    key={e.label}
                    className="flex items-center gap-2 rounded-xl glass-dark px-3 py-2.5 text-xs font-semibold text-white"
                  >
                    <e.icon className="h-4 w-4 shrink-0 text-gold" />
                    {e.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
