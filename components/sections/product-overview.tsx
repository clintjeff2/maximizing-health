import { Sparkles } from "lucide-react";

interface ProductOverviewProps {
  language: "en" | "fr";
}

const translations = {
  en: {
    title: "Miira-Cell+ — Advanced Cellular Nutrition",
    content:
      "Miira-Cell+ is a plant-based food supplement formulated with 13 carefully selected natural ingredients. It is designed to support daily nutritional needs, cellular wellness, and overall vitality through consistent use.",
    highlight: "Swiss Apple Stem Cell Extract",
    highlightDesc:
      "Our signature ingredient, selected for its role in supporting cellular protection and renewal within a balanced wellness routine.",
    stats: {
      ingredientsTitle: "13 Natural Ingredients",
      ingredientsSubtitle: "Plant-based formula",
      qualityTitle: "Certified Quality",
      qualitySubtitle: "MOH, JAKIM & NAFDAC registered",
    },
  },
  fr: {
    title: "Miira-Cell+ — Nutrition Cellulaire Avancée",
    content:
      "Miira-Cell+ est un complément alimentaire à base de plantes formulé avec 13 ingrédients naturels soigneusement sélectionnés. Il est conçu pour soutenir les besoins nutritionnels quotidiens, le bien-être cellulaire et la vitalité générale.",
    highlight: "Extrait de Cellules Souches de Pomme Suisse",
    highlightDesc:
      "Notre ingrédient signature, sélectionné pour soutenir la protection et le renouvellement cellulaire dans une routine de bien-être équilibrée.",
    stats: {
      ingredientsTitle: "13 Ingrédients Naturels",
      ingredientsSubtitle: "Formule à base de plantes",
      qualityTitle: "Qualité Certifiée",
      qualitySubtitle: "MOH, JAKIM & NAFDAC enregistrés",
    },
  },
};

export default function ProductOverview({ language }: ProductOverviewProps) {
  const t = translations[language];

  return (
    <section
      id="product"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-background to-secondary"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.content}
            </p>
          </div>

          {/* Key Differentiator - Premium Card */}
          <div className="group relative rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition duration-500" />

            <div className="relative bg-gradient-to-br from-accent/10 to-red-600/10 rounded-3xl p-12 border-2 border-accent/30 group-hover:border-accent/60 transition duration-500 shadow-lg">
              <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition duration-500">
                  <Sparkles className="text-white w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {t.highlight}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.highlightDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 13 Ingredients Badge */}
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground to-accent p-12 text-center shadow-lg hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2">
              <div className="relative z-10 space-y-3">
                <p className="text-5xl sm:text-6xl font-bold text-white">13</p>
                <p className="text-xl font-bold text-white/90">
                  {t.stats.ingredientsTitle}
                </p>
                <p className="text-sm text-white/70">
                  {t.stats.ingredientsSubtitle}
                </p>
              </div>
            </div>

            {/* Quality Promise */}
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-red-600 p-12 text-center shadow-lg hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold text-white">
                  {t.stats.qualityTitle}
                </p>
                <p className="text-sm text-white/80">
                  {t.stats.qualitySubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
