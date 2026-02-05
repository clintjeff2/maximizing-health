"use client";

import Image from "next/image";
import { Button } from "../ui/button";

interface PricingProps {
  language: "en" | "fr";
  onWhatsAppClick: (message: string) => void;
}

const translations = {
  en: {
    title: "Order Miira-Cell+",
    subtitle: "Choose the plan that matches your wellness goals",
    boxes: [
      {
        quantity: "1 Box",
        supply: "24 Days Supply",
        price: "Professional starter pack",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: false,
        message:
          "Hello, I would like to order 1 box of Miira-Cell+. Please confirm availability, total cost, and delivery details.",
      },
      {
        quantity: "2 Boxes",
        supply: "48 Days Supply",
        price: "Best value plan",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: true,
        savings: "Preferred plan",
        message:
          "Hello, I would like to order 2 boxes of Miira-Cell+. Please confirm availability, total cost, and delivery details.",
      },
      {
        quantity: "10 Boxes",
        supply: "240 Days Supply",
        price: "Premium commitment pack",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: false,
        savings: "Executive plan",
        message:
          "Hello, I would like to order 10 boxes of Miira-Cell+. Please confirm availability, total cost, and delivery details.",
      },
    ],
    orderNow: "Order Now",
    bestValue: "Best Value",
    consult: "Need a recommendation? Chat with a wellness advisor.",
  },
  fr: {
    title: "Commander Miira-Cell+",
    subtitle: "Choisissez le plan adapté à vos objectifs de bien-être",
    boxes: [
      {
        quantity: "1 Boîte",
        supply: "Approvisionnement de 24 jours",
        price: "Pack de démarrage professionnel",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: false,
        message:
          "Bonjour, je souhaite commander 1 boîte de Miira-Cell+. Merci de confirmer la disponibilité, le coût total et les détails de livraison.",
      },
      {
        quantity: "2 Boîtes",
        supply: "Approvisionnement de 48 jours",
        price: "Meilleure valeur",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: true,
        savings: "Plan recommandé",
        message:
          "Bonjour, je souhaite commander 2 boîtes de Miira-Cell+. Merci de confirmer la disponibilité, le coût total et les détails de livraison.",
      },
      {
        quantity: "10 Boîtes",
        supply: "Approvisionnement de 240 jours",
        price: "Pack premium engagement",
        image: "/images/miira-cell-box.jpg",
        sachetImage: "/images/miira-cell-sachet.jpg",
        popular: false,
        savings: "Plan exécutif",
        message:
          "Bonjour, je souhaite commander 10 boîtes de Miira-Cell+. Merci de confirmer la disponibilité, le coût total et les détails de livraison.",
      },
    ],
    orderNow: "Commander Maintenant",
    bestValue: "Meilleure Valeur",
    consult:
      "Besoin d’une recommandation ? Discutez avec un conseiller bien-être.",
  },
};

export default function Pricing({ language, onWhatsAppClick }: PricingProps) {
  const t = translations[language];

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.boxes.map((box, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl transition-all duration-500 overflow-hidden ${
                box.popular
                  ? "border-2 border-accent shadow-2xl transform hover:-translate-y-4 md:scale-105 bg-gradient-to-br from-background to-secondary"
                  : "border border-border shadow-lg hover:shadow-xl transform hover:-translate-y-2 bg-background"
              }`}
            >
              {box.popular && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-red-600 text-white px-6 py-2 rounded-b-2xl text-sm font-bold z-10">
                  {t.bestValue}
                </div>
              )}

              {box.savings && (
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold">
                  {box.savings}
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Product Image */}
                <div className="relative h-64 mb-6 -mx-8 -mt-8 overflow-hidden rounded-b-3xl bg-gradient-to-b from-secondary to-background flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="relative z-10 flex items-end gap-4">
                    <Image
                      src={box.image || "/placeholder.svg"}
                      alt={box.quantity}
                      width={170}
                      height={230}
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <Image
                      src={box.sachetImage || "/placeholder.svg"}
                      alt={`${box.quantity} sachet`}
                      width={110}
                      height={180}
                      className="object-contain translate-y-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {box.quantity}
                  </h3>
                  <p className="text-muted-foreground text-lg font-semibold">
                    {box.supply}
                  </p>
                  <div className="h-1 w-12 bg-gradient-to-r from-accent to-red-600 rounded-full" />
                </div>

                {/* Price Tag */}
                <div className="bg-gradient-to-r from-accent/10 to-red-600/10 rounded-xl p-4 border border-accent/30">
                  <p className="text-center font-bold text-foreground text-lg">
                    {box.price}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => onWhatsAppClick(box.message)}
                  className="w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 text-white shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#25d366" }}
                >
                  {t.orderNow}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-base">{t.consult}</p>
        </div>
      </div>
    </section>
  );
}
