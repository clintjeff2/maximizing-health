"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialsProps {
  language: "en" | "fr";
}

const translations = {
  en: {
    title: "Real Experiences With Miira-Cell+",
    videosTitle: "Video Testimonials",
    videoCaption: "Watch Story",
    videos: [
      {
        id: "GDUYY8U7rwE",
        title: "Customer story — renewed daily balance",
        embedUrl: "https://www.youtube.com/embed/GDUYY8U7rwE?rel=0",
      },
      {
        id: "PvTt5ELCQ4U",
        title: "Customer story — consistent vitality",
        embedUrl: "https://www.youtube.com/embed/PvTt5ELCQ4U?rel=0",
      },
      {
        id: "E-k5QPO8thA",
        title: "Customer story — wellness routine",
        embedUrl: "https://www.youtube.com/embed/E-k5QPO8thA?rel=0",
      },
      {
        id: "v3bmZWFpjNk",
        title: "Customer story — daily confidence",
        embedUrl: "https://www.youtube.com/embed/v3bmZWFpjNk?rel=0",
      },
      {
        id: "drive-15ja_XBLNVcG9FxxUnkfszhRNX8f9MGT4",
        title: "Customer story — wellness journey",
        embedUrl:
          "https://drive.google.com/file/d/15ja_XBLNVcG9FxxUnkfszhRNX8f9MGT4/preview",
      },
      {
        id: "drive-1REZ9J3C5k9NOOk_VnwblcwTr6MWRmCC6",
        title: "Customer story — balanced days",
        embedUrl:
          "https://drive.google.com/file/d/1REZ9J3C5k9NOOk_VnwblcwTr6MWRmCC6/preview",
      },
      {
        id: "drive-1Qu-Y7b3XXY2v8k1Ny_UVco7bQ1Wot67J",
        title: "Customer story — improved routine",
        embedUrl:
          "https://drive.google.com/file/d/1Qu-Y7b3XXY2v8k1Ny_UVco7bQ1Wot67J/preview",
      },
    ],
    imageTestimonials: [
      {
        name: "Amara K.",
        location: "Lagos, Nigeria",
        quote:
          "Miira-Cell+ fits seamlessly into my daily routine. I feel more consistent energy and better overall balance without any drastic changes.",
        image: "/images/customer-1.jpg",
      },
      {
        name: "Emmanuel O.",
        location: "Accra, Ghana",
        quote:
          "The guidance I received helped me choose the right plan. The premium quality and the way I feel each day made it a worthwhile decision.",
        image: "/images/customer-2.jpg",
      },
      {
        name: "Zainab M.",
        location: "Kinshasa, DRC",
        quote:
          "I appreciate the transparency about ingredients and the consistent support. It feels like a premium wellness brand, not a quick fix.",
        image: "/images/customer-3.jpg",
      },
    ],
  },
  fr: {
    title: "Expériences Réelles Avec Miira-Cell+",
    videosTitle: "Témoignages Vidéo",
    videoCaption: "Voir l'histoire",
    videos: [
      {
        id: "GDUYY8U7rwE",
        title: "Témoignage — équilibre au quotidien",
        embedUrl: "https://www.youtube.com/embed/GDUYY8U7rwE?rel=0",
      },
      {
        id: "PvTt5ELCQ4U",
        title: "Témoignage — vitalité constante",
        embedUrl: "https://www.youtube.com/embed/PvTt5ELCQ4U?rel=0",
      },
      {
        id: "E-k5QPO8thA",
        title: "Témoignage — routine bien-être",
        embedUrl: "https://www.youtube.com/embed/E-k5QPO8thA?rel=0",
      },
      {
        id: "v3bmZWFpjNk",
        title: "Témoignage — confiance au quotidien",
        embedUrl: "https://www.youtube.com/embed/v3bmZWFpjNk?rel=0",
      },
      {
        id: "drive-15ja_XBLNVcG9FxxUnkfszhRNX8f9MGT4",
        title: "Témoignage — parcours bien-être",
        embedUrl:
          "https://drive.google.com/file/d/15ja_XBLNVcG9FxxUnkfszhRNX8f9MGT4/preview",
      },
      {
        id: "drive-1REZ9J3C5k9NOOk_VnwblcwTr6MWRmCC6",
        title: "Témoignage — journées équilibrées",
        embedUrl:
          "https://drive.google.com/file/d/1REZ9J3C5k9NOOk_VnwblcwTr6MWRmCC6/preview",
      },
      {
        id: "drive-1Qu-Y7b3XXY2v8k1Ny_UVco7bQ1Wot67J",
        title: "Témoignage — routine améliorée",
        embedUrl:
          "https://drive.google.com/file/d/1Qu-Y7b3XXY2v8k1Ny_UVco7bQ1Wot67J/preview",
      },
    ],
    imageTestimonials: [
      {
        name: "Amara K.",
        location: "Lagos, Nigeria",
        quote:
          "Miira-Cell+ s'intègre parfaitement à ma routine. Je ressens une énergie plus stable et un meilleur équilibre au quotidien.",
        image: "/images/customer-1.jpg",
      },
      {
        name: "Emmanuel O.",
        location: "Accra, Ghana",
        quote:
          "Les conseils reçus m'ont aidé à choisir le bon plan. La qualité premium et les sensations au quotidien ont confirmé mon choix.",
        image: "/images/customer-2.jpg",
      },
      {
        name: "Zainab M.",
        location: "Kinshasa, DRC",
        quote:
          "J'apprécie la transparence sur les ingrédients et l'accompagnement. La marque inspire confiance, sans promesses exagérées.",
        image: "/images/customer-3.jpg",
      },
    ],
  },
};

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];

  // Carousel for customer images - 2 at a time
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {/* Main Title */}
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === "en"
                ? "Verified experiences from our community"
                : "Expériences vérifiées de notre communauté"}
            </p>
          </div>

          {/* Video Testimonials Gallery */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center">
              {t.videosTitle}
            </h3>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {t.videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative rounded-3xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition duration-500" />

                  <div className="relative bg-background border-2 border-border group-hover:border-accent/50 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Caption */}
                    <div className="bg-background dark:bg-slate-900 p-4 text-center">
                      <p className="text-foreground font-semibold text-sm mb-1">
                        {video.title}
                      </p>
                      <p className="text-accent font-bold text-sm uppercase tracking-wider">
                        {t.videoCaption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Voices - Carousel */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center">
              {language === "en" ? "Customer Voices" : "Voix de Clients"}
            </h3>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {t.imageTestimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0"
                  >
                    <div className="group relative rounded-3xl overflow-hidden transition-all duration-500 h-full">
                      {/* Gradient border effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition duration-500" />

                      <div className="relative bg-background border-2 border-border group-hover:border-accent/50 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full">
                        {/* Customer Image */}
                        <div className="relative h-80 w-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          {/* Star Rating */}
                          <div className="flex gap-1 text-yellow-400 mb-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star
                                key={index}
                                className="w-4 h-4 fill-current"
                              />
                            ))}
                          </div>

                          {/* Quote */}
                          <p className="text-white font-semibold text-lg mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </p>

                          {/* Name and Location */}
                          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                            <p className="text-white font-bold">
                              {testimonial.name}
                            </p>
                            <p className="text-white/70 text-sm">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
