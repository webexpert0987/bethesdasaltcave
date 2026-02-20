"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DetoxTreatmentsPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is the BioMat safe for everyone?",
      answer:
        "The BioMat is not recommended for pregnant or lactating mothers. Please consult your healthcare provider if you have medical concerns.",
      open: false,
    },
    {
      question: "What should I wear during the session?",
      answer:
        "The BioMat is provided fully clothed. We recommend dressing in light, comfortable clothing.",
      open: false,
    },
    {
      question: "What temperature is used?",
      answer:
        "Although the BioMat can reach up to 155°F, we typically maintain it between 125–135°F for safe therapeutic warmth.",
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
    "Far Infrared Light",
    "Negative Ions",
    "Amethyst",
    "Tourmaline",
  ];

  const enhancements = [
    { name: "Back Detox Treatment", price: "" },
    { name: "Ionic Foot Detox", price: "" },
    { name: "Lymphatic Drainage", price: "" },
  ];

  const pricing = [
    { duration: "Amethyst BioMat (30 min)", price: "$45" },
    { duration: "Service Pairing / Add On", price: "$30" },
  ];

  const testimonials = [
    {
      quote:
        "The gentle infrared warmth helped relieve my deep joint pain and improved my circulation.",
      author: "– Client Review",
    },
    {
      quote:
        "I felt deeply relaxed and slept better after my BioMat session.",
      author: "– Client Review",
    },
    {
      quote:
        "A powerful yet calming detox experience. I highly recommend it.",
      author: "– Client Review",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">
      {/* HERO */}
      <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/detox/detox-treatments-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Detox Treatments
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Restore balance, eliminate toxins, and support your body’s natural healing process.
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
            Amethyst BioMat
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The BioMat is a high quality infrared heating mat used in healing practices all over the world.
            It has helped thousands of people regain their health from a variety of conditions and is designed
            to help the body heal itself naturally.
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
            Many guests enjoy the slow gentle heat emitted by the BioMat and
            often comment how it helps with deep bone and joint discomfort,
            improves circulation, and promotes deep relaxation.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/detox/wellness-spa.jpg"
            alt="Amethyst BioMat"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Healing Components */}
      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/detox/healing-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            The Three Healing Components
          </h2>

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

      {/* How It Works */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            How It Works
          </h2>

          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
                <p className="text-gray-700 font-medium">
                  Fully clothed session in light, comfortable clothing
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
                <p className="text-gray-700 font-medium">
                  Lie face up on the BioMat covered with a protective sheet
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
                <p className="text-gray-700 font-medium">
                  Therapeutic warmth between 125–135°F promotes circulation & detox
                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/assets/images/detox/how-it-works.png"
                alt="BioMat Session"
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
          Additional Detox Treatments
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {enhancements.map((enh) => (
            <div key={enh.name} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">{enh.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Image src="/assets/images/detox/detox1.png" alt="" width={400} height={300} className="rounded-lg" />
            <Image src="/assets/images/detox/detox2.png" alt="" width={400} height={300} className="rounded-lg" />
            <Image src="/assets/images/detox/detox3.png" alt="" width={400} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            FAQ / Notes
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-6 text-left">
                  <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                  <span className={`text-2xl font-light transition-transform duration-300 ${faq.open ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <div className={`grid transition-all duration-300 ease-in-out ${faq.open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E9E2DB] text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Experience Detox Treatments Today
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
    </div>
  );
}