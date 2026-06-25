import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import aboutImg from "@/assets/about-team.jpg";

const stats = [
  { value: 2018, label: "Founded", suffix: "" },
  { value: 7, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Installations", suffix: "+" },
  { value: 100, label: "Northern KZN Focus", suffix: "%" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
              <img
                src={aboutImg}
                alt="EcoFrost technician installing solar panels on a rooftop"
                width={1280}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl btn-emerald px-6 py-5 text-primary-foreground shadow-[var(--shadow-glow)] sm:right-6">
              <p className="font-display text-3xl font-extrabold">
                <Counter to={2018} />
              </p>
              <p className="text-xs font-medium uppercase tracking-wider opacity-90">
                Building smarter energy
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            About EcoFrost
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Building Smarter Energy Since 2018
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Based in Richards Bay, EcoFrost Electrical & Solar Solutions provides
            professional electrical and solar services throughout Northern
            KwaZulu-Natal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From residential homes to commercial buildings and industrial
            projects, we deliver quality workmanship, premium products, and
            dependable after-sales support. The company was founded by{" "}
            <span className="font-semibold text-foreground">Hannes Bester</span>{" "}
            in 2018 and has grown from a side business into a trusted regional
            installer.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <p className="font-display text-2xl font-extrabold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
