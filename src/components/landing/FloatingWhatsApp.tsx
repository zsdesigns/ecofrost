import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27712956332"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EcoFrost on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full btn-emerald px-4 py-3.5 font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Chat with us</span>
    </a>
  );
}
