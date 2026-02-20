"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BackDetoxTreatmentPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is the Ionic Foot Detox safe?",
      answer:
        "Yes, the process is safe, relaxing, and non-invasive with no harmful side effects. However, it is not recommended for pregnant or lactating mothers, guests with heart conditions, or those with metal implants.",
      open: false,
    },
    {
      question: "Can I add enhancements without extra time?",
      answer:
        "Yes. Pairings such as Hot Stone or Paraffin Treatments are added into your service without adding additional time.",
      open: false,
    },
    {
      question: "Is Back Detox a stand-alone service?",
      answer:
        "Yes. Back Detox Treatment is a stand-alone 50-minute service, but it can also be enhanced with recommended pairings.",
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
    "Infrared Biomat Therapy",
    "Phytomer Back Scrub",
    "Seaweed Detox Mask",
    "Dead Sea Salt Hydration",
  ];

  const enhancements = [
    { name: "Therma Bliss Hot Stone", price: "$25" },
    { name: "Hot Paraffin Treatment Feet", price: "$25" },
    { name: "Hot Paraffin Treatment Hands", price: "$25" },
  ];

  const pricing = [
    { duration: "Back Detox Treatment (50 min)", price: "$225" },
    { duration: "Ionic Foot Detox (30 min)", price: "$85" },
    { duration: "Ionic Detox Add-On (30 min)", price: "$65" },
  ];

  const testimonials = [
    {
      quote:
        "My skin felt renewed and incredibly smooth after the seaweed mask.",
      author: "– Client Review",
    },
    {
      quote:
        "The combination of Biomat heat and detox scrub was deeply relaxing.",
      author: "– Client Review",
    },
    {
      quote:
        "I loved adding the Ionic Foot Detox — I felt lighter and refreshed.",
      author: "– Client Review",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">
      {/* HERO */}
      <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/back-detox-treatment/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Back Detox Treatment
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              A rejuvenating detox protocol designed to renew, exfoliate, and deeply nourish your skin.
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
            Back Detox Treatment
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Experience a rejuvenating back detox with an expertly designed treatment protocol.
            We begin with a 10-minute session on the Biomat, where infrared light relaxes muscles
            and opens pores.
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
            The treatment continues with a luxurious Phytomer back scrub,
            followed by a mineral-rich seaweed mask to detoxify and revitalize.
            We conclude with soothing hydration therapy for hands and feet using
            Dead Sea salt and seaweed extracts.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/wellness-spa.jpg"
            alt="Back Detox"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Treatment Flow */}
      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/back-detox-treatment/treatment-flow-bg.jpg')" }}
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

      {/* How It Works */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Ionic Foot Detox
          </h2>

          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
                <p className="text-gray-700 font-medium">
                  Feet placed in warm salt water bath
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
                <p className="text-gray-700 font-medium">
                  Magnetic ionic charge stimulates cellular detox
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
                <p className="text-gray-700 font-medium">
                  Heavy metals expelled through feet into water
                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/assets/images/back-detox-treatment/ionic-foot-detox.png"
                alt="Ionic Detox"
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
          Recommended Pairings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {enhancements.map((enh) => (
            <div key={enh.name} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-medium mb-2">{enh.name}</h3>
              <p className="text-lg font-semibold">{enh.price}</p>
              <p className="mt-2 text-gray-600 text-sm">
                Pairings are service enhancements added without extra time.
              </p>
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
            <Image src="/assets/images/back-detox-treatment/detox1.png" alt="" width={400} height={300} className="rounded-lg" />
            <Image src="/assets/images/back-detox-treatment/detox2.png" alt="" width={400} height={300} className="rounded-lg" />
            <Image src="/assets/images/back-detox-treatment/detox3.png" alt="" width={400} height={300} className="rounded-lg" />
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
          Book Your Detox Experience Today
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