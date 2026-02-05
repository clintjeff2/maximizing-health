"use client";

import {
  BatteryCharging,
  Bone,
  Droplets,
  Flower2,
  HeartPulse,
  ShieldCheck,
  Utensils,
} from "lucide-react";

interface WellnessAreasProps {
  language: "en" | "fr";
}

const translations = {
  en: {
    title: "Wellness Areas Commonly Supported",
    subtitle: "Comprehensive cellular support across key wellness dimensions",
    areas: [
      {
        title: "Blood sugar balance",
        description:
          "Supports healthy energy utilization and metabolic balance throughout the day.",
        icon: Droplets,
      },
      {
        title: "Cardiovascular wellness",
        description:
          "Helps maintain heart wellness and circulatory function with daily support.",
        icon: HeartPulse,
      },
      {
        title: "Immune system support",
        description:
          "Contributes to resilient immune response and everyday defenses.",
        icon: ShieldCheck,
      },
      {
        title: "Joint & mobility health",
        description:
          "Supports comfort and flexibility for active, mobile living.",
        icon: Bone,
      },
      {
        title: "Digestive wellness",
        description:
          "Helps maintain digestive balance and nutrient utilization.",
        icon: Utensils,
      },
      {
        title: "Energy & vitality",
        description:
          "Supports steady energy and daily vitality without overstimulation.",
        icon: BatteryCharging,
      },
      {
        title: "Reproductive wellness support",
        description:
          "Promotes overall reproductive wellness within a balanced lifestyle.",
        icon: Flower2,
      },
    ],
  },
  fr: {
    title: "Domaines de Bien-être Généralement Soutenus",
    subtitle: "Soutien cellulaire complet sur des dimensions clés du bien-être",
    areas: [
      {
        title: "Équilibre de la glycémie",
        description:
          "Soutient l’utilisation de l’énergie et l’équilibre métabolique au quotidien.",
        icon: Droplets,
      },
      {
        title: "Bien-être cardiovasculaire",
        description: "Aide à maintenir le bien-être du cœur et la circulation.",
        icon: HeartPulse,
      },
      {
        title: "Soutien du système immunitaire",
        description:
          "Contribue à la résilience immunitaire et aux défenses quotidiennes.",
        icon: ShieldCheck,
      },
      {
        title: "Santé des articulations et mobilité",
        description:
          "Soutient le confort et la mobilité pour un mode de vie actif.",
        icon: Bone,
      },
      {
        title: "Bien-être digestif",
        description:
          "Aide à maintenir l’équilibre digestif et l’assimilation des nutriments.",
        icon: Utensils,
      },
      {
        title: "Énergie et vitalité",
        description: "Soutient une énergie stable et la vitalité au quotidien.",
        icon: BatteryCharging,
      },
      {
        title: "Soutien du bien-être reproductif",
        description:
          "Favorise le bien-être reproductif dans un mode de vie équilibré.",
        icon: Flower2,
      },
    ],
  },
};

export default function WellnessAreas({ language }: WellnessAreasProps) {
  const t = translations[language];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute -top-24 right-0 w-[30rem] h-[30rem] bg-accent/20 blur-[160px]" />
      <div className="absolute -bottom-32 left-0 w-[28rem] h-[28rem] bg-red-600/20 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Wellness Focus
          </p>
          <h2 className="text-5xl sm:text-6xl font-semibold text-white text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.areas.map((area) => (
            <div
              key={area.title}
              className="group relative h-full rounded-3xl overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 h-full shadow-lg transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {area.description}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-accent to-red-500 rounded-full mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/60 max-w-3xl mx-auto">
            {language === "en"
              ? "These statements represent commonly supported wellness areas. Miira-Cell+ is a food supplement formulated with natural ingredients."
              : "Ces affirmations représentent les domaines de bien-être généralement soutenus. Miira-Cell+ est un complément alimentaire formulé avec des ingrédients naturels."}
          </p>
        </div>
      </div>
    </section>
  );
}
