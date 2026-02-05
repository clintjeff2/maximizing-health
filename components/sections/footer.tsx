"use client";

import { Facebook } from "lucide-react";

interface FooterProps {
  language: "en" | "fr";
  onWhatsAppClick: (message: string) => void;
}

const translations = {
  en: {
    copyright: "Maximizing Health © 2026",
    disclaimer:
      "Miira-Cell+ is a food supplement and not intended to diagnose, treat, cure, or prevent any disease.",
    contact: "Contact Us",
    whatsappMessage:
      "Hello, I would like professional guidance about Miira-Cell+ and the best plan for my wellness goals.",
  },
  fr: {
    copyright: "Maximizing Health © 2026",
    disclaimer:
      "Miira-Cell+ est un complément alimentaire et ne vise pas à diagnostiquer, traiter, guérir ou prévenir toute maladie.",
    contact: "Nous Contacter",
    whatsappMessage:
      "Bonjour, je souhaite obtenir un accompagnement professionnel sur Miira-Cell+ et le plan adapté à mes objectifs de bien-être.",
  },
};

export default function Footer({ language, onWhatsAppClick }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-foreground dark:bg-slate-950 text-white dark:text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="font-bold text-lg text-white">MH</span>
              </div>
              <span className="font-bold text-lg text-white">
                Maximizing Health
              </span>
            </div>
            <p className="text-white/70 dark:text-white/60 text-sm">
              Supporting cellular wellness globally.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70 dark:text-white/60">
              <li>
                <a href="#product" className="hover:text-accent transition">
                  Product
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-accent transition">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t.contact}</h4>
            <div className="flex gap-4">
              <button
                onClick={() => onWhatsAppClick(t.whatsappMessage)}
                className="w-10 h-10 bg-whatsapp hover:opacity-90 rounded-lg flex items-center justify-center transition shadow-lg"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.265c-1.524.756-2.76 1.776-3.592 3.023C2.997 10.332 2.4 12.305 2.4 14.418c0 5.494 4.475 9.986 9.977 9.986 2.096 0 4.122-.55 5.823-1.604l4.147 1.087.56-1.637-1.563-1.604c1.073-1.697 1.732-3.68 1.732-5.832 0-5.494-4.475-9.986-9.977-9.986" />
                </svg>
              </button>
              <a
                href="#"
                className="w-10 h-10 bg-facebook hover:opacity-90 rounded-lg flex items-center justify-center transition shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 pt-8">
          <p className="text-center text-sm text-white/70 dark:text-white/60 mb-4">
            {t.disclaimer}
          </p>
          <p className="text-center text-sm text-white/60 dark:text-white/50">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
