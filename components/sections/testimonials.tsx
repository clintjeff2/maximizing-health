"use client";

import Image from "next/image";
import { Star, Play } from "lucide-react";
import { useState } from "react";
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
        id: "ysz5S6PUM-U",
        title: "Daily wellness support experience",
        thumbnail: `https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg`,
      },
      {
        id: "jNQXAC9IVRw",
        title: "Consistent routine and wellbeing",
        thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`,
      },
      {
        id: "ScMzIvxBSi4",
        title: "Why I chose Miira-Cell+",
        thumbnail: `https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg`,
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
        id: "ysz5S6PUM-U",
        title: "Expérience de bien-être au quotidien",
        thumbnail: `https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg`,
      },
      {
        id: "jNQXAC9IVRw",
        title: "Routine régulière et bien-être",
        thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`,
      },
      {
        id: "ScMzIvxBSi4",
        title: "Pourquoi j'ai choisi Miira-Cell+",
        thumbnail: `https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg`,
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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            <div className="grid md:grid-cols-3 gap-6">
              {t.videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video.id)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-red-600 to-accent opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition duration-500" />

                  <div className="relative bg-background border-2 border-border group-hover:border-accent/50 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-accent/90 group-hover:bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                          <Play
                            className="w-10 h-10 text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-sm leading-tight">
                          {video.title}
                        </p>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="bg-background dark:bg-slate-900 p-4 text-center">
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video testimonial"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition text-sm font-semibold"
            >
              {language === "en" ? "Close (ESC)" : "Fermer (ESC)"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
