import { Building2, Calendar, Globe2 } from "lucide-react";

interface AboutProps {
  language: "en" | "fr";
}

const translations = {
  en: {
    title: "About Maximizing Health",
    content:
      "Maximizing Health is a premium wellness brand committed to helping individuals and families make informed, responsible decisions about everyday health. Our approach centers on education, consistent habits, and access to high-quality nutritional support.\n\nWe partner with Revoobit International, a Malaysian wellness company established in 2019 with a global footprint across more than 70 countries. Their plant-based formulations are built on rigorous sourcing standards, careful ingredient selection, and a focus on long-term, sustainable wellbeing.",
    revoobit: "Revoobit International",
    since: "Since 2019",
    countries: "70+ Countries",
    statsLabel: {
      parent: "Parent Company",
      established: "Established",
      presence: "Global Presence",
    },
  },
  fr: {
    title: "À Propos de Maximizing Health",
    content:
      "Maximizing Health est une marque de bien-être premium engagée à aider les individus et les familles à faire des choix éclairés et responsables pour leur santé au quotidien. Notre approche privilégie l’éducation, la régularité et l’accès à un soutien nutritionnel de haute qualité.\n\nNous collaborons avec Revoobit International, une entreprise de bien-être basée en Malaisie et fondée en 2019, présente dans plus de 70 pays. Leurs formulations à base de plantes reposent sur des standards rigoureux de sélection des ingrédients et une vision durable du bien-être.",
    revoobit: "Revoobit International",
    since: "Depuis 2019",
    countries: "70+ Pays",
    statsLabel: {
      parent: "Maison Mère",
      established: "Fondée",
      presence: "Présence Internationale",
    },
  },
};

export default function About({ language }: AboutProps) {
  const t = translations[language];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance">
              {t.title}
            </h2>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
              {t.content.split("\n").map((paragraph, idx) => (
                <p key={idx} className="group-hover:text-foreground transition">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats - Premium Card Design */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                label: t.statsLabel.parent,
                value: t.revoobit,
                icon: Building2,
              },
              {
                label: t.statsLabel.established,
                value: t.since,
                icon: Calendar,
              },
              {
                label: t.statsLabel.presence,
                value: t.countries,
                icon: Globe2,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl blur-xl transition duration-500" />

                <div className="relative bg-gradient-to-br from-accent/10 to-red-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-accent/15 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>

                  {/* Label */}
                  <p className="text-xs font-bold text-accent mb-2 sm:mb-3 uppercase tracking-widest">
                    {stat.label}
                  </p>

                  {/* Value */}
                  <p className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition duration-300">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
