"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  language: "en" | "fr";
  onWhatsAppClick: (message: string) => void;
}

const translations = {
  en: {
    headline: "Premium Cellular Wellness, Designed for Daily Life",
    subheadline:
      "Miira-Cell+ is a plant-based food supplement crafted with 13 natural ingredients to support cellular wellness, vitality, and balanced daily performance.",
    highlights: [
      "Supports cellular protection and renewal routines",
      "Helps maintain immune balance and daily resilience",
      "Designed for long-term wellness and quality of life",
    ],
    primaryCta: "Get Professional Guidance",
    secondaryCta: "Explore Ingredients",
    tertiaryCta: "Order 2 Boxes",
    primaryMessage:
      "Hello, I am interested in Miira-Cell+ and would like professional guidance on how many boxes to start with.",
    orderTwoMessage:
      "Hello, I would like to order 2 boxes of Miira-Cell+. Please confirm availability, total cost, and delivery details.",
    learnMore: "Learn More",
  },
  fr: {
    headline: "Bien-être Cellulaire Premium, Conçu pour le Quotidien",
    subheadline:
      "Miira-Cell+ est un complément alimentaire à base de plantes, formulé avec 13 ingrédients naturels pour soutenir le bien-être cellulaire, la vitalité et l’équilibre au quotidien.",
    highlights: [
      "Soutient la protection cellulaire et le renouvellement naturel",
      "Aide à maintenir l’équilibre immunitaire et la résilience",
      "Pensé pour un bien-être durable et une qualité de vie optimale",
    ],
    primaryCta: "Obtenir un Conseil Professionnel",
    secondaryCta: "Découvrir les Ingrédients",
    tertiaryCta: "Commander 2 Boîtes",
    primaryMessage:
      "Bonjour, je suis intéressé par Miira-Cell+ et j’aimerais obtenir des conseils professionnels sur le nombre de boîtes à commencer.",
    orderTwoMessage:
      "Bonjour, je souhaite commander 2 boîtes de Miira-Cell+. Merci de confirmer la disponibilité, le coût total et les détails de livraison.",
    learnMore: "En savoir plus",
  },
};

export default function Hero({ language, onWhatsAppClick }: HeroProps) {
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/40 to-background pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(24,24,24,0.8),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                Miira-Cell+ • Revoobit International
              </p>
              <h1 className="text-5xl sm:text-7xl font-semibold text-foreground text-balance leading-tight">
                {t.headline}
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
                {t.subheadline}
              </p>
            </div>

            <div className="grid gap-4">
              {t.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-0.5" />
                  <p className="text-foreground font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-4 pt-4">
              <Button
                onClick={() => onWhatsAppClick(t.primaryMessage)}
                className="px-8 py-6 text-white font-semibold rounded-full transition transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#25d366" }}
              >
                {t.primaryCta}
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-6 font-semibold rounded-full border-2 border-accent text-foreground hover:bg-accent/10 bg-transparent"
              >
                <a href="#ingredients" className="flex items-center gap-2">
                  {t.secondaryCta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                onClick={() => onWhatsAppClick(t.orderTwoMessage)}
                className="px-8 py-6 font-semibold rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
                variant="ghost"
              >
                {t.tertiaryCta}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] border border-border bg-gradient-to-br from-foreground/95 via-foreground to-foreground/90 p-10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
              <div className="relative z-10 space-y-6 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                  Plant-based formulation
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  Miira-Cell+
                </h2>
                <p className="text-white/80 text-base">
                  13 natural ingredients for daily cellular support
                </p>
                <div className="relative h-72 w-full">
                  <Image
                    src="/images/miira-cell-hero.svg"
                    alt="Miira-Cell+ product packaging"
                    fill
                    className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-6 hidden xl:block">
              <div className="bg-background/90 backdrop-blur border border-border rounded-3xl p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Global Presence
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  70+ Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
