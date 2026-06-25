import { Reveal } from "./Reveal";
import { Search, PencilRuler, HardHat, LifeBuoy } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Consultation",
    desc: "We assess your energy requirements.",
  },
  {
    n: "02",
    icon: PencilRuler,
    title: "System Design",
    desc: "A customised solar solution is designed specifically for your property.",
  },
  {
    n: "03",
    icon: HardHat,
    title: "Professional Installation",
    desc: "Our experienced technicians complete the installation safely and efficiently.",
  },
  {
    n: "04",
    icon: LifeBuoy,
    title: "Ongoing Support",
    desc: "Maintenance, monitoring and technical support whenever you need it.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            From Quote to Switch-On
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div className="relative text-center">
                  <div className="mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl btn-emerald text-primary-foreground shadow-[var(--shadow-glow)]">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <span className="mt-4 block font-display text-xs font-extrabold tracking-[0.3em] text-gold">
                    STEP {s.n}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
