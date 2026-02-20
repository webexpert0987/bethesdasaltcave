"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LymphaticDrainagePage() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is Lymphatic Drainage intense?",
      answer:
        "Although the pressure is light, the detoxifying effect can be intense and may be felt for several days after treatment.",
      open: false,
    },
    {
      question: "How much water should I drink after?",
      answer:
        "It is recommended to drink at least half your body weight in ounces of water daily for seven days following treatment.",
      open: false,
    },
    {
      question: "Is this an Endospheres treatment?",
      answer:
        "No. This is a manual lymphatic drainage session. Call us if you are interested in our high-tech Endospheres option.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  const oils = [
    "Lymph Node Activation",
    "Gentle Pumping Motions",
    "Feathering & Brushing Technique",
    "Fluid Flow Stimulation",
  ];

  const enhancements = [
    { name: "Therma Bliss Hot Stone", price: "$25" },
    { name: "Hot Paraffin Treatment Feet", price: "$25" },
    { name: "Hot Paraffin Treatment Hands", price: "$25" },
  ];

  const pricing = [
    { duration: "Lymphatic Drainage (50 min)", price: "$165" },
    { duration: "Lymphatic Drainage (80 min)", price: "$225" },
  ];

  const testimonials = [
    {
      quote:
        "I felt lighter and less bloated within days of my session.",
      author: "– Client Review",
    },
    {
      quote:
        "The gentle technique was surprisingly powerful and effective.",
      author: "– Client Review",
    },
    {
      quote:
        "My recovery process improved significantly after treatment.",
      author: "– Client Review",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">
      {/* HERO */}
      <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/lymphatic-drainage/lymphatic-drainage-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Lymphatic Drainage
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              A gentle yet powerful detoxifying therapy designed to improve circulation and support immune health.
            </p>
            <div className="mt-10">
              <Link
                href="/book"
                className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Lymphatic Drainage Therapy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This manual therapy uses a very light touch to activate lymph nodes and stimulate the natural flow of lymphatic fluid layered between muscle fibers, skin, and fascia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {pricing.map((p) => (
              <div key={p.duration} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-medium mb-2">{p.duration}</h3>
                <p className="text-lg font-semibold">{p.price}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-600 max-w-2xl">
            Ideal for detox support, pre/post-surgical preparation, and recovery from illness. Hydration is essential before and after treatment to maximize results.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/wellness-spa.jpg"
            alt="Lymphatic Drainage"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Treatment Flow */}
      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/lymphatic-drainage/treatment-flow-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            Treatment Flow
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {oils.map((step) => (
              <div
                key={step}
                className="flex items-center justify-center rounded-lg p-6 text-white w-[calc(25%-1.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.5rem)]
                bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-primary hover:backdrop-blur-none"
              >
                <p className="font-medium text-lg text-center">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
           {/* CTA */}
      <section className="py-24 bg-[#E9E2DB] text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Book Your Lymphatic Drainage Therapy
        </h2>
        <Link
          href="/book"
          className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white mr-4"
        >
          Book Now
        </Link>
        <Link
          href="/contact"
          className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block"
        >
          Contact Us
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <span className="absolute -top-6 left-6 text-6xl text-primary/20 font-serif">
                  "
                </span>
                <p className="text-lg md:text-xl italic text-gray-700 leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep remaining sections EXACT SAME as Back Detox */}
      {/* Recommended Pairings */}
      {/* Gallery */}
      {/* FAQ */}
      {/* CTA */}
      {/* Testimonials */}

    </div>
  );
}