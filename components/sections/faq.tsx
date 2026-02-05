'use client';

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQProps {
  language: 'en' | 'fr'
}

const translations = {
  en: {
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is Miira-Cell+?',
        answer: 'Miira-Cell+ is a plant-based food supplement formulated with 13 natural ingredients designed to support cellular health and overall wellness.',
      },
      {
        question: 'Is it a drug?',
        answer: 'No, Miira-Cell+ is a food supplement, not a drug. It is formulated to support general wellness and nutritional needs.',
      },
      {
        question: 'How do I take it?',
        answer: 'Follow the dosage instructions on the product label. For specific guidance, consult with a healthcare professional.',
      },
      {
        question: 'Is it safe for long-term use?',
        answer: 'Miira-Cell+ is designed for daily wellness use. It is suitable for long-term use, but we recommend consulting a healthcare professional before starting any new supplement.',
      },
    ],
  },
  fr: {
    title: 'Questions Fréquemment Posées',
    faqs: [
      {
        question: 'Qu\'est-ce que Miira-Cell+?',
        answer: 'Miira-Cell+ est un complément alimentaire à base de plantes formulé avec 13 ingrédients naturels conçu pour soutenir la santé cellulaire et le bien-être général.',
      },
      {
        question: 'Est-ce un médicament?',
        answer: 'Non, Miira-Cell+ est un complément alimentaire, pas un médicament. Il est formulé pour soutenir le bien-être général et les besoins nutritionnels.',
      },
      {
        question: 'Comment le prendre?',
        answer: 'Suivez les instructions de dosage sur l\'étiquette du produit. Pour des conseils spécifiques, consultez un professionnel de santé.',
      },
      {
        question: 'Est-ce sûr pour une utilisation à long terme?',
        answer: 'Miira-Cell+ est conçu pour un usage quotidien de bien-être. Il convient à une utilisation à long terme, mais nous recommandons de consulter un professionnel de santé avant de commencer tout nouveau supplément.',
      },
    ],
  },
}

export default function FAQ({ language }: FAQProps) {
  const t = translations[language]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-4">{t.title}</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about Miira-Cell+</p>
        </div>
        
        <div className="space-y-4">
          {t.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                openIndex === idx 
                  ? 'border-accent/50 bg-gradient-to-r from-accent/5 to-red-600/5' 
                  : 'border-border bg-background hover:border-accent/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <h3 className="font-bold text-foreground text-left text-lg">{faq.question}</h3>
                <ChevronDown
                  className="w-6 h-6 text-accent flex-shrink-0 ml-4 transition-transform duration-500"
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-8 pb-6 pt-2 text-muted-foreground border-t-2 border-accent/20 bg-gradient-to-r from-accent/3 to-transparent animate-in fade-in slide-in-from-top-2">
                  <p className="leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-accent/5 to-red-600/5 rounded-2xl border-2 border-accent/30">
          <p className="text-foreground font-semibold mb-2">Still have questions?</p>
          <p className="text-muted-foreground">Contact us on WhatsApp for personalized support</p>
        </div>
      </div>
    </section>
  )
}
