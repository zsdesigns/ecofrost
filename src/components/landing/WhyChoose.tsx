import { Reveal } from "./Reveal";

const reasons = [
  {
    emoji: "⭐",
    title: "Expert Installation",
    desc: "Certified workmanship using trusted brands.",
  },
  {
    emoji: "⚡",
    title: "Premium Equipment",
    desc: "Reliable solar products designed for long-term performance.",
  },
  {
    emoji: "🛠",
    title: "Complete After-Sales Support",
    desc: "Maintenance and ongoing technical assistance.",
  },
  {
    emoji: "📍",
    title: "Local Experts",
    desc: "Serving Richards Bay and Northern KZN.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            The EcoFrost Difference
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Why Choose EcoFrost?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-secondary text-3xl transition-transform duration-300 group-hover:scale-110">
                  {r.emoji}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
