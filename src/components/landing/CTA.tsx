import { Reveal } from "./Reveal";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] btn-emerald px-7 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 animate-sun-pulse rounded-full bg-[radial-gradient(circle,oklch(0.9_0.16_85/0.4),transparent_65%)] blur-2xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
                Ready to Switch to Solar?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85">
                Get expert advice and a free quotation today.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <FileText className="h-4 w-4" />
                  Request a Quote
                </a>
                <a
                  href="tel:0712956332"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/27712956332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full btn-gold px-6 py-3.5 text-sm font-bold text-gold-foreground transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
