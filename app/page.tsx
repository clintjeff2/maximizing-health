"use client";

import { useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import MissionVision from "@/components/sections/mission-vision";
import ProductOverview from "@/components/sections/product-overview";
import HowItWorks from "@/components/sections/how-it-works";
import Ingredients from "@/components/sections/ingredients";
import WellnessAreas from "@/components/sections/wellness-areas";
import Testimonials from "@/components/sections/testimonials";
import Approvals from "@/components/sections/approvals";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "237693112496";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onWhatsAppClick={handleWhatsAppClick}
      />
      <Hero language={language} onWhatsAppClick={handleWhatsAppClick} />
      <About language={language} />
      <MissionVision language={language} />
      <ProductOverview language={language} />
      <HowItWorks language={language} />
      <Ingredients language={language} />
      <WellnessAreas language={language} />
      <Testimonials language={language} />
      <Approvals language={language} />
      <Pricing language={language} onWhatsAppClick={handleWhatsAppClick} />
      <FAQ language={language} />
      <Footer language={language} onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
}
