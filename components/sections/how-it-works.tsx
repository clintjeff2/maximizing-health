interface HowItWorksProps {
  language: 'en' | 'fr'
}

const translations = {
  en: {
    title: 'How Miira-Cell+ Supports Your Body',
    description:
      'Miira-Cell+ works synergistically to support your body\'s natural wellness processes at the cellular level. Each ingredient is carefully selected to contribute to comprehensive health support.',
    items: [
      { title: 'Supports cellular protection', desc: 'Helps defend cells from daily oxidative stress' },
      { title: 'Assists natural cell renewal', desc: 'Promotes the body\'s natural regeneration processes' },
      { title: 'Helps maintain normal cellular function', desc: 'Supports optimal metabolic and cellular operations' },
      {
        title: 'Encourages overall system balance',
        desc: 'Promotes harmony across all body systems',
      },
    ],
  },
  fr: {
    title: 'Comment Miira-Cell+ Soutient Votre Corps',
    description:
      'Miira-Cell+ fonctionne de manière synergique pour soutenir les processus naturels de bien-être de votre corps au niveau cellulaire. Chaque ingrédient est soigneusement sélectionné pour contribuer au soutien complet de la santé.',
    items: [
      { title: 'Soutient la protection cellulaire', desc: 'Aide à défendre les cellules contre le stress oxydatif quotidien' },
      { title: 'Assiste le renouvellement cellulaire naturel', desc: 'Favorise les processus naturels de régénération du corps' },
      { title: 'Aide à maintenir la fonction cellulaire normale', desc: 'Soutient les opérations métaboliques et cellulaires optimales' },
      { title: 'Encourage l\'équilibre général du système', desc: 'Favorise l\'harmonie entre tous les systèmes du corps' },
    ],
  },
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = translations[language]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t.description}</p>
          </div>

          {/* Steps Grid - Enhanced Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.items.map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Connector line for desktop */}
                {idx < t.items.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-1 bg-gradient-to-r from-accent to-transparent z-0" />
                )}

                <div className="relative bg-gradient-to-br from-background to-secondary rounded-3xl p-8 shadow-lg border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2">
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 space-y-4">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-red-600 text-white rounded-2xl font-bold text-2xl shadow-lg group-hover:scale-110 transition duration-500">
                      {idx + 1}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition duration-300">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 w-8 bg-gradient-to-r from-accent to-red-600 rounded-full group-hover:w-full transition-all duration-500 mt-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
