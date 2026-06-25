import { Check, ShieldCheck } from "lucide-react";

const items = [
  "Residential Solar",
  "Commercial Solar",
  "Industrial Container Solutions",
  "Battery Backup Systems",
  "Electrical Installations",
  "Maintenance & Repairs",
];

export function TrustBar() {
  return (
    <section className="relative z-20 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex shrink-0 items-center gap-2.5 text-gold">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Trusted Installer
            </span>
          </div>
          <div className="hidden h-8 w-px bg-white/15 lg:block" />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 lg:justify-start">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
