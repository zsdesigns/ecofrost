import { Reveal } from "./Reveal";
import {
  Home,
  Tractor,
  GraduationCap,
  Briefcase,
  Factory,
  Warehouse,
  ShoppingCart,
  Building,
} from "lucide-react";

const industries = [
  { icon: Home, label: "Homes" },
  { icon: Tractor, label: "Farms" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Briefcase, label: "Offices" },
  { icon: Factory, label: "Factories" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: ShoppingCart, label: "Shopping Centres" },
  { icon: Building, label: "Industrial Facilities" },
];

export function Industries() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Industries We Serve
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Energy Solutions for Every Sector
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={(i % 4) * 80}>
              <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-bold text-foreground">
                  {ind.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
