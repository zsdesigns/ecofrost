import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "3 Shady Seringa, Richards Bay, 3900",
    href: "https://maps.google.com/?q=3+Shady+Seringa+Richards+Bay+3900",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "071 295 6332",
    href: "tel:0712956332",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@ecofrost.co.za",
    href: "mailto:info@ecofrost.co.za",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Residential Solar", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi EcoFrost, I'd like a quote.\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/27712956332?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Request Your Free Quote
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and our team will get back to you fast.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.icon === MapPin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-emerald)] text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block font-display font-bold text-foreground transition-colors group-hover:text-primary">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
              <a
                href="https://wa.me/27712956332"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-gold)] px-5 py-4 font-bold text-gold-foreground transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your request is ready to send via WhatsApp. We'll respond as
                    soon as possible — or call us on 071 295 6332.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-foreground">
                        Full name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-foreground">
                        Phone
                      </label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="071 000 0000"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      I'm interested in
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    >
                      <option>Residential Solar</option>
                      <option>Commercial Solar</option>
                      <option>Industrial Container Solar</option>
                      <option>Battery Backup</option>
                      <option>Electrical Services</option>
                      <option>Maintenance & Repairs</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your property and energy needs…"
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gradient-emerald)] px-6 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.01]"
                  >
                    <Send className="h-4 w-4" />
                    Send My Request
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
