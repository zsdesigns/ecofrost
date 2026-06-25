import { Check, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const packages = [
  {
    name: "6kW Sungrow Solar Package",
    price: "From R 109,900",
    tag: "Homes",
    features: [
      "6kW Sungrow hybrid inverter",
      "Battery backup ready",
      "Ideal for medium households",
      "Load-shedding protection",
    ],
  },
  {
    name: "8kW Sungrow Solar Package",
    price: "From R 149,900",
    tag: "Most Popular",
    featured: true,
    features: [
      "8kW Sungrow hybrid inverter",
      "Larger battery capacity",
      "Run heavy appliances",
      "Full home backup",
    ],
  },
  {
    name: "15kW Three-Phase Sungrow",
    price: "From R 289,900",
    tag: "Business",
    features: [
      "15kW three-phase inverter",
      "Commercial-grade design",
      "Scalable battery banks",
      "Maximum savings",
    ],
  },
  {
    name: "Custom Solar Designs",
    price: "Tailored Pricing",
    tag: "Bespoke",
    features: [
      "Engineered to your usage",
      "Site assessment included",
      "Premium component options",
      "Future expansion ready",
    ],
  },
  {
    name: "Container-Based Solutions",
    price: "On Request",
    tag: "Industrial",
    features: [
      "Containerised power station",
      "Large-scale energy output",
      "Rapid deployment",
      "Remote-site capable",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Featured Packages
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Solar Packages for Every Need
          </h2>
          <p className="mt-4 text-white/60">
            Premium Sungrow systems and custom designs — request a tailored quote
            in minutes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100}>
              <div
                className={`group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  p.featured
                    ? "bg-[var(--gradient-emerald)] shadow-[var(--shadow-glow)]"
                    : "glass-dark"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      p.featured
                        ? "bg-white/20 text-white"
                        : "bg-gold/15 text-gold"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <Zap
                    className={`h-5 w-5 ${p.featured ? "text-white" : "text-gold"}`}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {p.name}
                </h3>
                <p
                  className={`mt-2 font-display text-2xl font-extrabold ${
                    p.featured ? "text-white" : "text-gold"
                  }`}
                >
                  {p.price}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.featured ? "text-white" : "text-accent"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.03] ${
                    p.featured
                      ? "bg-white text-primary"
                      : "bg-[var(--gradient-gold)] text-gold-foreground"
                  }`}
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
