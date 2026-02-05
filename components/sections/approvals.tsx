'use client';

import Image from 'next/image'

interface ApprovalsProps {
  language: 'en' | 'fr'
}

const translations = {
  en: {
    title: 'Approved & Certified',
    subtitle: 'Meeting Global Quality Standards',
    description: 'Miira-Cell+ has received approval from the Ministry of Health Malaysia (MOH) and JAKIM (Halal certification), and is registered with NAFDAC. It is produced under strict quality standards ensuring safety, purity, and efficacy.',
    certifications: [
      { name: 'MOH Malaysia', image: '/images/cert-moh.jpg', desc: 'Ministry of Health Malaysia Approved' },
      { name: 'JAKIM Halal', image: '/images/cert-jakim-halal.jpg', desc: 'Halal Certified' },
      { name: 'NAFDAC', image: '/images/cert-nafdac.jpg', desc: 'NAFDAC Registered' },
    ],
  },
  fr: {
    title: 'Approuvé & Certifié',
    subtitle: 'Respecter les Normes Mondiales de Qualité',
    description: 'Miira-Cell+ a reçu l\'approbation du Ministère de la Santé Malaisie (MOH) et JAKIM (Certification Halal), et est enregistré auprès de la NAFDAC. Il est produit selon des normes de qualité strictes garantissant la sécurité, la pureté et l\'efficacité.',
    certifications: [
      { name: 'MOH Malaysia', image: '/images/cert-moh.jpg', desc: 'Approuvé par le Ministère de la Santé Malaisie' },
      { name: 'JAKIM Halal', image: '/images/cert-jakim-halal.jpg', desc: 'Certifié Halal' },
      { name: 'NAFDAC', image: '/images/cert-nafdac.jpg', desc: 'Enregistré NAFDAC' },
    ],
  },
}

export default function Approvals({ language }: ApprovalsProps) {
  const t = translations[language]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">{t.title}</h2>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-r from-accent/5 to-red-600/5 rounded-3xl p-8 border-2 border-accent/30">
            <p className="text-center text-lg text-foreground leading-relaxed">{t.description}</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden border-2 border-border hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-2xl bg-background"
              >
                {/* Certificate Image */}
                <div className="relative h-72 w-full bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 text-center space-y-3">
                  <h3 className="text-2xl font-bold text-accent">{cert.name}</h3>
                  <p className="text-foreground font-semibold">{cert.desc}</p>
                  <div className="h-1 w-12 bg-gradient-to-r from-accent to-red-600 rounded-full mx-auto group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-accent/10 to-red-600/10 rounded-2xl border-2 border-accent/30">
              <p className="text-foreground font-semibold flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                {language === 'en' ? 'Certified Safe, Pure & Effective' : 'Certifié Sûr, Pur et Efficace'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
