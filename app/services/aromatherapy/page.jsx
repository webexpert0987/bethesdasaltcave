"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "@/app/components/GoogleReviews";

export default function RaindropAromatherapyPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "Does everyone experience Raindrop Technique® the same way?",
      answer:
        "Everyone experiences Raindrop Technique® differently, including fatigue, emotional release, or increased energy.",
      open: false,
    },
    {
      question: "Is it safe for emotional release?",
      answer: "Yes, we provide a safe and supportive space for emotional release.",
      open: false,
    },
    {
      question: "Are there short-term effects?",
      answer:
        "Short-term effects may vary from person to person, including increased energy, relaxation, or mild fatigue.",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  const oils = [
    "Basil",
    "Oregano",
    "Cypress",
    "Peppermint",
    "Marjoram",
    "Thyme",
    "Wintergreen",
  ];

  const enhancements = [
    { name: "Therma Bliss Hot Stone", price: "$25" },
    { name: "Hot Paraffin Treatment Feet", price: "$25" },
    { name: "Hot Paraffin Treatment Hands", price: "$25" },
  ];

  const pricing = [
    { duration: "50 min", price: "$195" },
    { duration: "80 min", price: "$295" },
  ];

  const testimonials = [
    {
      quote:
        "I felt completely rejuvenated and emotionally lighter after my session.",
      author: "– Sarah L.",
    },
    {
      quote: "The oils and technique are simply transformative.",
      author: "– Mark D.",
    },
    {
      quote: "A deeply relaxing and balancing experience.",
      author: "– Emily R.",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">
     {/* HERO */}
        <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"  
        style={{ backgroundImage: "url('/assets/images/aromatherapy/aromatherapy-bg.jpg')" }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
                Raindrop Aromatherapy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
                Rejuvenate the Mind. Re-Balance the Body.
                A deeply harmonizing, rejuvenating, and relaxing experience using authentic essential oils.
            </p>
            <div className="mt-10">
                <button
                onClick={() => {
                    setIframeSrc(getIframeSrc("8148248df58"));
                    setOpen(true);
                }}
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
            Discover the Raindrop Technique®
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This holistic aromatherapy technique combines the use of specific
            essential oils with gentle massage along the spine and feet,
            promoting physical, mental, and emotional balance.{" "}
            <strong>
              This Aromatherapy technique is a revolutionary means of aligning
              the body and mind.
            </strong>
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {pricing.map((p) => (
              <div
                key={p.duration}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-medium mb-2">{p.duration}</h3>
                <p className="text-lg font-semibold">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-600 max-w-2xl mx-auto">
            Everyone may experience fatigue, increased energy, emotional release,
            or other short-term effects. We provide a safe and supportive space.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/wellness-spa.jpg"
            alt="Raindrop Aromatherapy"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>        

      {/* Essential Oils */}
    
        <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/aromatherapy/34513.jpg')" }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            Essential Oils Used
            </h2>

            {/* Flex wrap grid */}
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {oils.map((oil) => (
                <div
                key={oil}
                className="flex items-center justify-center rounded-lg p-6 text-white w-[calc(25%-1.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.5rem)]
                            bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-primary hover:backdrop-blur-none"
                >
                <p className="font-medium text-lg">{oil}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Technique / How It Works */}
    <section className="py-24 bg-[#F8F6F3]">
    <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        How It Works
        </h2>

        <div className="md:flex md:items-center md:gap-12">
        {/* Left Side - Steps */}
        <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                1
            </span>
            <p className="text-gray-700 font-medium">
                Applied along soles and arch of feet
            </p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                2
            </span>
            <p className="text-gray-700 font-medium">
                Along the spine and base of neck
            </p>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                3
            </span>
            <p className="text-gray-700 font-medium">Harmonious drop technique</p>
            </div>
        </div>

        {/* Right Side - Diagram */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
            src="/assets/images/aromatherapy/how-it-works.png"
            alt="Raindrop Technique Diagram"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            />
        </div>
        </div>
    </div>
    </section>

      {/* Recommended Enhancements */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Recommended Enhancements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {enhancements.map((enh) => (
            <div
              key={enh.name}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-medium mb-2">{enh.name}</h3>
              <p className="text-lg font-semibold">{enh.price}</p>
              <p className="mt-2 text-gray-600 text-sm">
                Enhancements added without adding time.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image / Gallery (static) */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Image
            src="/assets/images/aromatherapy/aromatherapy4.jpg"
            alt="Aromatherapy Room"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/assets/images/aromatherapy/aromatherapy2.jpg"
            alt="Essential Oils"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/assets/images/aromatherapy/aromatherapy3.jpg"
            alt="Calming Setup"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        </div>
      </section>

            
        {/* FAQ Section */}
        <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            FAQ / Notes
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
                <div
                key={idx}
                className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                >
                {/* Question */}
                <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left"
                >
                    <h3 className="font-semibold text-lg text-gray-800">
                    {faq.question}
                    </h3>

                    <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                        faq.open ? "rotate-45" : ""
                    }`}
                    >
                    +
                    </span>
                </button>

                {/* Answer with Smooth Animation */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${
                    faq.open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* Call-to-Action */}
      <section className="py-24 bg-[#E9E2DB] text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Experience Raindrop Aromatherapy Today
        </h2>
        <Link
          href="/book"
          className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white mr-4"
        >
          Book Aromatherapy
        </Link>
        <Link
          href="/contact"
          className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block"
        >
          Contact Us for Questions
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
    <GoogleReviews />


  </div>
</section>
    </div>
  );
}