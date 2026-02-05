'use client';

interface QualitySafetyProps {
  language: 'en' | 'fr'
}

const translations = {
  en: {
    title: 'Quality, Safety & Compliance',
    features: [
      'Food supplement formulation',
      'Manufactured under quality standards',
      'Halal compliant',
      'Suitable for daily wellness use',
    ],
  },
  fr: {
    title: 'Qualité, Sécurité et Conformité',
    features: [
      'Formulation de complément alimentaire',
      'Fabriqué selon les normes de qualité',
      'Conforme aux normes Halal',
      'Adapté à l\'utilisation quotidienne de bien-être',
    ],
  },
}

export default function QualitySafety({ language }: QualitySafetyProps) {
  const t = translations[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground text-balance">{t.title}</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {t.features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="font-semibold text-foreground">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
