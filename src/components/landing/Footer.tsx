import { MapPin, Phone, Mail } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Savings Calculator", href: "#calculator" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoAsset.url}
                alt="EcoFrost Solar Solutions"
                className="h-11 w-auto rounded-lg bg-white object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Electrical & Solar Solutions. Helping homes and businesses across
              Northern KwaZulu-Natal become energy independent since 2018.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                3 Shady Seringa, Richards Bay, 3900
              </li>
              <li>
                <a
                  href="tel:0712956332"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  071 295 6332
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ecofrost.co.za"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  info@ecofrost.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} EcoFrost Electrical & Solar Solutions. All
            rights reserved.
          </p>
          <p className="text-xs text-white/50">Richards Bay • Northern KZN</p>
        </div>
      </div>
    </footer>
  );
}
