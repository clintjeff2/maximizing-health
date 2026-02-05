"use client";

import Image from "next/image";

interface IngredientsProps {
  language: "en" | "fr";
}

const ingredients = [
  {
    id: "swiss-apple",
    image: "/images/ingredient-swiss-apple.jpg",
    en: {
      name: "Swiss Apple Stem Cell",
      desc: "Selected for its role in supporting cellular protection, this extract is valued in premium wellness formulations. It helps maintain the integrity of cells exposed to daily oxidative stress while supporting long-term vitality. Its inclusion reinforces a balanced routine focused on healthy aging support.",
    },
    fr: {
      name: "Cellules Souches de Pomme Suisse",
      desc: "Sélectionné pour son rôle dans la protection cellulaire, cet extrait est prisé dans les formulations de bien-être premium. Il aide à préserver l’intégrité des cellules face au stress oxydatif quotidien et soutient la vitalité sur le long terme. Son intégration renforce une routine axée sur un vieillissement équilibré.",
    },
  },
  {
    id: "ashwagandha",
    image: "/images/ingredient-ashwagandha.jpg",
    en: {
      name: "Ashwagandha",
      desc: "A revered botanical known for supporting calm balance and resilience. It helps the body adapt to everyday stressors and promotes a steady sense of wellbeing. Its traditional use aligns with daily routines focused on composure and vitality.",
    },
    fr: {
      name: "Ashwagandha",
      desc: "Plante reconnue pour soutenir l’équilibre et la résilience face au stress. Elle aide l’organisme à s’adapter aux pressions quotidiennes et favorise une sensation de bien-être stable. Son usage traditionnel s’inscrit dans une routine axée sur la sérénité et la vitalité.",
    },
  },
  {
    id: "aquamin",
    image: "/images/ingredient-aquamin.jpg",
    en: {
      name: "Aquamin",
      desc: "A marine-derived mineral complex providing a broad spectrum of trace minerals. It supports bone and connective tissue wellness while contributing to daily mineral balance. Ideal for long-term routines that prioritize structural support.",
    },
    fr: {
      name: "Aquamin",
      desc: "Complexe minéral d’origine marine offrant un large spectre d’oligo-éléments. Il soutient le bien-être des os et des tissus conjonctifs tout en contribuant à l’équilibre minéral quotidien. Idéal pour une routine durable axée sur le soutien structurel.",
    },
  },
  {
    id: "bee-propolis",
    image: "/images/ingredient-bee-propolis.jpg",
    en: {
      name: "Bee Propolis",
      desc: "A natural resin known for supporting immune defenses and overall vitality. It helps reinforce daily wellness routines by contributing to the body’s natural protective mechanisms. Its rich phytonutrient profile complements plant-based formulations.",
    },
    fr: {
      name: "Propolis d’Abeille",
      desc: "Résine naturelle reconnue pour soutenir les défenses immunitaires et la vitalité. Elle renforce les routines de bien-être quotidiennes en contribuant aux mécanismes naturels de protection. Son profil riche en phytonutriments complète les formules à base de plantes.",
    },
  },
  {
    id: "bilberry",
    image: "/images/ingredient-bilberry.jpg",
    en: {
      name: "Bilberry",
      desc: "Traditionally used to support circulation and eye wellness. Its antioxidant profile helps maintain healthy microvascular function and visual comfort. A valuable ingredient for modern lifestyles with high screen exposure.",
    },
    fr: {
      name: "Myrtille",
      desc: "Utilisée traditionnellement pour soutenir la circulation et le bien-être oculaire. Son profil antioxydant aide à maintenir une microcirculation saine et le confort visuel. Un ingrédient précieux pour les modes de vie modernes avec forte exposition aux écrans.",
    },
  },
  {
    id: "pomegranate",
    image: "/images/ingredient-pomegranate.jpg",
    en: {
      name: "Pomegranate",
      desc: "A nutrient-rich fruit known for supporting antioxidant protection. It contributes to cellular wellness by helping the body manage oxidative stress. Its polyphenol content supports daily vitality and resilience.",
    },
    fr: {
      name: "Grenade",
      desc: "Fruit riche en nutriments reconnu pour son soutien antioxydant. Il contribue au bien-être cellulaire en aidant l’organisme à gérer le stress oxydatif. Sa teneur en polyphénols soutient la vitalité et la résilience au quotidien.",
    },
  },
  {
    id: "soursop",
    image: "/images/ingredient-soursop.jpg",
    en: {
      name: "Soursop",
      desc: "A tropical botanical valued for its natural phytonutrients. It supports overall wellness and complements balanced nutrition strategies. Often included in formulations that prioritize daily nourishment and vitality.",
    },
    fr: {
      name: "Corossol",
      desc: "Plante tropicale appréciée pour ses phytonutriments naturels. Elle soutient le bien-être général et complète les stratégies de nutrition équilibrée. Souvent intégrée aux formules axées sur la vitalité et la nutrition quotidienne.",
    },
  },
  {
    id: "afa",
    image: "/images/ingredient-afa.jpg",
    en: {
      name: "A.F.A (Aphanizomenon flos-aquae)",
      desc: "A nutrient-dense blue-green algae known for supporting antioxidant balance. It provides supportive phytonutrients that align with cellular wellness routines. Included for its holistic contribution to daily vitality.",
    },
    fr: {
      name: "A.F.A (Aphanizomenon flos-aquae)",
      desc: "Algue bleu-vert dense en nutriments reconnue pour soutenir l’équilibre antioxydant. Elle fournit des phytonutriments complémentaires aux routines de bien-être cellulaire. Intégrée pour sa contribution globale à la vitalité quotidienne.",
    },
  },
  {
    id: "salmon-ovary",
    image: "/images/ingredient-salmon-peptide.jpg",
    en: {
      name: "Salmon Ovary Peptide",
      desc: "A specialized marine peptide supporting cellular nourishment. It contributes to wellness formulations focused on renewal and healthy aging support. Included to complement plant-based ingredients with targeted nutritional support.",
    },
    fr: {
      name: "Peptide d’Œuf de Saumon",
      desc: "Peptide marin spécialisé soutenant la nutrition cellulaire. Il contribue aux formules axées sur le renouvellement et le soutien du vieillissement sain. Intégré pour compléter les ingrédients végétaux avec un soutien nutritionnel ciblé.",
    },
  },
  {
    id: "kiwi",
    image: "/images/ingredient-kiwi.jpg",
    en: {
      name: "Kiwi Fruit",
      desc: "A vitamin-rich fruit supporting cardiovascular wellness and daily antioxidant intake. It helps maintain balanced energy while contributing to nutrient diversity. A refreshing addition to a plant-focused formula.",
    },
    fr: {
      name: "Kiwi",
      desc: "Fruit riche en vitamines qui soutient le bien-être cardiovasculaire et l’apport antioxydant quotidien. Il aide à maintenir une énergie équilibrée tout en favorisant la diversité nutritionnelle. Une touche fraîche dans une formule végétale.",
    },
  },
  {
    id: "goji",
    image: "/images/ingredient-goji-berry.jpg",
    en: {
      name: "Goji Berry",
      desc: "A prized berry traditionally used for vitality and metabolic balance. It provides antioxidants that support daily resilience. Included for its nourishing properties and synergy with other botanical extracts.",
    },
    fr: {
      name: "Baie de Goji",
      desc: "Baie reconnue pour soutenir la vitalité et l’équilibre métabolique. Elle fournit des antioxydants qui favorisent la résilience au quotidien. Intégrée pour ses propriétés nourrissantes et sa synergie avec les autres extraits botaniques.",
    },
  },
  {
    id: "vitamin-c",
    image: "/images/ingredient-vitamin-c.jpg",
    en: {
      name: "Vitamin C",
      desc: "A foundational nutrient that supports immune function and antioxidant protection. It helps maintain skin and connective tissue wellness while contributing to overall vitality. Essential for comprehensive daily support.",
    },
    fr: {
      name: "Vitamine C",
      desc: "Nutriment essentiel qui soutient la fonction immunitaire et la protection antioxydante. Il aide à maintenir la santé de la peau et des tissus conjonctifs tout en contribuant à la vitalité globale. Indispensable pour un soutien quotidien complet.",
    },
  },
  {
    id: "proprietary-blend",
    image: "/images/ingredient-swiss-apple.jpg",
    en: {
      name: "Proprietary Blend",
      desc: "A balanced combination of complementary botanicals selected to support overall wellness. This blend reinforces the formula’s comprehensive approach to daily nutrition. Designed to harmonize with the core ingredients for holistic support.",
    },
    fr: {
      name: "Mélange Propriétaire",
      desc: "Combinaison équilibrée de plantes complémentaires sélectionnées pour soutenir le bien-être global. Ce mélange renforce l’approche complète de la formule en matière de nutrition quotidienne. Conçu pour s’harmoniser avec les ingrédients principaux pour un soutien holistique.",
    },
  },
];

const translations = {
  en: {
    title: "13 Natural Ingredients",
    subtitle:
      "Premium plant-based ingredients meticulously selected for superior wellness support",
  },
  fr: {
    title: "13 Ingrédients Naturels",
    subtitle:
      "Ingrédients à base de plantes sélectionnés avec soin pour un soutien au bien-être de qualité supérieure",
  },
};

export default function Ingredients({ language }: IngredientsProps) {
  const t = translations[language];

  return (
    <section
      id="ingredients"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Ingredients Premium Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ingredients.map((ingredient) => {
              const content = ingredient[language];
              return (
                <div
                  key={ingredient.id}
                  className="group relative h-full rounded-3xl overflow-hidden border-2 border-border hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full bg-gradient-to-br from-secondary to-background overflow-hidden">
                    <Image
                      src={ingredient.image}
                      alt={content.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="relative bg-background p-6 space-y-3 transition-colors duration-500 group-hover:bg-foreground">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-white transition duration-300">
                      {content.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80">
                      {content.desc}
                    </p>

                    {/* Bottom accent line */}
                    <div className="h-1 w-8 bg-gradient-to-r from-accent to-red-600 rounded-full group-hover:w-full transition-all duration-500 mt-4" />
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
