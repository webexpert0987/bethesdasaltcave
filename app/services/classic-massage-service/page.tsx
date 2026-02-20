"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function ClassicMassageServicesPage() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);
  const [faqs, setFaqs] = useState([
    {
      question: "Which massage is best for relaxation?",
      answer:
        "Our Signature Swedish Massage is ideal for full-body relaxation and stress relief.",
      open: false,
    },
    {
      question: "Do you offer sports recovery massage?",
      answer:
        "Yes. Our Deep Tissue Sports Massage is designed for athletes and active individuals needing muscle recovery and tension relief.",
      open: false,
    },
    {
      question: "Are membership rates available for all services?",
      answer:
        "Yes. Membership pricing applies to all Classic Massage Services durations.",
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
    "AccuPressure Reflexology",
    "Chakra Alignment Therapy Reiki",
    "Deep Tissue Sports Massage",
    "Signature Swedish Trigger Point Therapy",
  ];

  const testimonials = [
    {
      quote:
        "The deep tissue massage relieved months of muscle tension.",
      author: "– Client Review",
    },
    {
      quote:
        "Reiki session left me feeling balanced and centered.",
      author: "– Client Review",
    },
    {
      quote:
        "Best Swedish massage I’ve ever experienced.",
      author: "– Client Review",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">
      {/* HERO */}
      <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/classic-massage-services/our-massage-techniques.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Classic Massage Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Therapeutic massage treatments designed to relax, restore, and rebalance your body and mind.
            </p>
            <div className="mt-10">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Massage Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our Classic Massage Services combine therapeutic techniques with
            relaxation-focused treatments to support muscle recovery,
            stress reduction, and overall wellness.
          </p>

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">30 Minutes</h3>
              <p className="text-lg font-semibold">$95</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">50 Minutes</h3>
              <p className="text-lg font-semibold">$145</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">80 Minutes</h3>
              <p className="text-lg font-semibold">$195</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">110 Minutes</h3>
              <p className="text-lg font-semibold">$295</p>
            </div>
          </div>

          <p className="mt-12 text-gray-600 max-w-2xl">
            Choose from reflexology, Reiki chakra alignment, deep tissue sports therapy,
            or our signature Swedish trigger point massage tailored to your needs.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/wellness-spa.jpg"
            alt="Classic Massage"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Treatment Flow (Service Types) */}
      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/classic-massage-services/our-massage-techniques2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            Our Massage Techniques
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

      {/* Membership & Packages */}
      <section className="py-24 bg-[#F8F6F3] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Membership Rates
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">30 Minutes</h3>
              <p className="text-lg font-semibold">$75</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">50 Minutes</h3>
              <p className="text-lg font-semibold">$120</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium">80 Minutes</h3>
              <p className="text-lg font-semibold">$175</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Wellness Packages
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg font-medium">
                Save $50 on 3 × (50 min) Massages
              </p>
              <p className="text-xl font-semibold mt-2">$385</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg font-medium">
                Save $70 on 3 × (80 min) Massages
              </p>
              <p className="text-xl font-semibold mt-2">$515</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E9E2DB] text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Book Your Massage Experience
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
      {/* BOOKING MODAL */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/70"
      onClick={() => setIsOpen(false)}
    ></div>

    {/* Modal Content */}
    <div className="relative bg-white w-[95%] md:w-[900px] h-[70vh] rounded-2xl shadow-2xl overflow-hidden z-10 py-8 px-6">

      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-20"
      >
        ✕
      </button>
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center mt-4">
        Classic Massage Services
      </h2>
      {/* Iframe */}
      <iframe
        src="https://brandedweb-next.mindbodyonline.com/components/widgets/appointments/view/8148244df58/services"
        className="w-full h-full mindbody-iframe"
      ></iframe>

    </div>
  </div>
)}
    </div>
  );
}