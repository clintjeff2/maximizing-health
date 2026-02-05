"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

interface HeaderProps {
  language: "en" | "fr";
  onLanguageChange: (lang: "en" | "fr") => void;
  onWhatsAppClick: (message: string) => void;
}

const translations = {
  en: {
    orderWhatsApp: "Order Now",
    orderMessage:
      "Hello, I am interested in Miira-Cell+ and would like professional guidance on how many boxes to start with.",
    nav: {
      about: "About",
      product: "Product",
      ingredients: "Ingredients",
      pricing: "Pricing",
      faq: "FAQ",
    },
    themeLabel: "Toggle theme",
  },
  fr: {
    orderWhatsApp: "Commander Maintenant",
    orderMessage:
      "Bonjour, je suis intéressé par Miira-Cell+ et j’aimerais obtenir des conseils professionnels sur le nombre de boîtes à commencer.",
    nav: {
      about: "À propos",
      product: "Produit",
      ingredients: "Ingrédients",
      pricing: "Tarifs",
      faq: "FAQ",
    },
    themeLabel: "Basculer le thème",
  },
};

export default function Header({
  language,
  onLanguageChange,
  onWhatsAppClick,
}: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-red-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">
              Maximizing Health
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition"
            >
              {t.nav.about}
            </a>
            <a
              href="#product"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition"
            >
              {t.nav.product}
            </a>
            <a
              href="#ingredients"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition"
            >
              {t.nav.ingredients}
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition"
            >
              {t.nav.faq}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === "en"
                    ? "bg-white text-accent shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("fr")}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === "fr"
                    ? "bg-white text-accent shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                FR
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-secondary transition"
              aria-label={t.themeLabel}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* CTA Button */}
            <Button
              onClick={() => onWhatsAppClick(t.orderMessage)}
              className="hidden sm:inline-flex text-white rounded-full px-6 font-semibold transition transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#25d366" }}
            >
              {t.orderWhatsApp}
            </Button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 hover:bg-secondary rounded-lg">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
