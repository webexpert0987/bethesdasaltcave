"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import Link from "next/link";

import Slide1 from "../../public/assets/images/slide1.jpg";
import Slide2 from "../../public/assets/images/slide2.jpg";
import Slide3 from "../../public/assets/images/slide3.jpg";
import Slide4 from "../../public/assets/images/slide4.jpg";

export default function HeroSlider() {
  const slides = [
    {
      image: Slide1,
      title: "Relax. Restore. Rejuvenate.",
      desc: "Experience deep relaxation in our therapeutic salt cave.\nA peaceful escape designed for total wellness.",
    },
    {
      image: Slide2,
      title: "Advanced Spa Treatments",
      desc: "Cryoskin, Endosphere and premium body therapies.\nFeel renewed from the inside out.",
    },
    {
      image: Slide3,
      title: "Holistic Healing Experience",
      desc: "Natural therapies that balance body and mind.\nYour wellness journey begins here.",
    },
    {
      image: Slide4,
      title: "Luxury Wellness Retreat",
      desc: "Indulge in tranquility and modern spa comfort.\nDesigned for your complete relaxation.",
    },
  ];

  return (
    <section className="relative w-full h-[85vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-slider h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[85vh]">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover scale-105 animate-[zoom_8s_linear_infinite]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 text-white">

                  <h1 className="font-marcellus text-4xl md:text-6xl mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="font-roboto text-lg md:text-xl mb-8 whitespace-pre-line max-w-2xl">
                    {slide.desc}
                  </p>

                  <Link
                    href="#"
                    className="border-2 border-white text-white 
                    hover:bg-white hover:text-[#804f33]
                    transition-all duration-300
                    px-12 py-5 font-semibold rounded-full 
                    font-roboto inline-block"
                  >
                    Book Now
                  </Link>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scoped Pagination Style */}
      <style jsx>{`
        .hero-slider .swiper-pagination-bullet-active {
          background-color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
