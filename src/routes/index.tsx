import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Packages } from "@/components/landing/Packages";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { Process } from "@/components/landing/Process";
import { Industries } from "@/components/landing/Industries";
import { Promise } from "@/components/landing/Promise";
import { CTA } from "@/components/landing/CTA";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoFrost Electrical & Solar Solutions | Richards Bay, KZN" },
      {
        name: "description",
        content:
          "Professional solar installations, electrical services, maintenance & repairs across Northern KwaZulu-Natal. Residential, commercial & industrial solar. Get a free quote.",
      },
      {
        property: "og:title",
        content: "EcoFrost Electrical & Solar Solutions",
      },
      {
        property: "og:description",
        content:
          "Reliable solar & electrical solutions for homes, businesses and industry in Richards Bay and Northern KZN.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChoose />
        <Packages />
        <RoiCalculator />
        <Process />
        <Industries />
        <Promise />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
