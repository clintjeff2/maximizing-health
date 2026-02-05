"use client";

import { Rocket, Target } from "lucide-react";

interface MissionVisionProps {
  language: "en" | "fr";
}

const translations = {
  en: {
    missionTitle: "Our Mission",
    missionContent:
      "To support a global wellness movement where individuals actively care for their health, build sustainable habits, and choose nutrition-led solutions for daily resilience.",
    visionTitle: "Our Vision",
    visionContent:
      "To provide digital opportunities that empower people to build sustainable wellness businesses while improving access to premium, plant-based nutrition worldwide.",
  },
  fr: {
    missionTitle: "Notre Mission",
    missionContent:
      "Soutenir un mouvement mondial de bien-être où les individus prennent soin de leur santé, cultivent des habitudes durables et privilégient une nutrition de qualité au quotidien.",
    visionTitle: "Notre Vision",
    visionContent:
      "Fournir des opportunités numériques qui permettent de bâtir des entreprises de bien-être durables tout en élargissant l’accès à une nutrition premium à base de plantes.",
  },
};

export default function MissionVision({ language }: MissionVisionProps) {
  const t = translations[language];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-background to-accent/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-red-600 opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl blur-xl transition duration-500" />

            <div className="relative bg-gradient-to-br from-background to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-gradient-to-b from-accent to-red-600" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {t.missionTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {t.missionContent}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-accent to-red-600 rounded-full mt-4 sm:mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl blur-xl transition duration-500" />

            <div className="relative bg-gradient-to-br from-red-600/5 to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-gradient-to-b from-red-600 to-accent" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-red-600/10 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-600/15 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {t.visionTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {t.visionContent}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-accent rounded-full mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
