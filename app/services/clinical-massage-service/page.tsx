"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClinicalMassagePage() {
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
      question: "Can I submit this service to my insurance?",
      answer:
        "Yes. You may request your treatment notes along with a coded CPT invoice to submit to your health insurance or third-party liability insurer for possible reimbursement.",
      open: false,
    },
    {
      question: "Do you bill insurance companies directly?",
      answer:
        "No. We do not negotiate with or bill insurance companies directly. Payment is due at the time of service.",
      open: false,
    },
    {
      question: "Are FSA or HSA cards accepted?",
      answer:
        "Yes. We accept most FSA and HSA flex spending credit cards.",
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
    "Myo-Fascial Release",
    "Cranial Sacral Therapy",
    "Manual Lymph Drainage",
    "Pre & Post Natal Support",
  ];

  const pricing = [
    { duration: "30 min Clinical Massage", price: "$105" },
    { duration: "50 min Clinical Massage", price: "$165" },
    { duration: "80 min Clinical Massage", price: "$225" },
    { duration: "100 min Clinical Massage", price: "$350" },
  ];

  const testimonials = [
    {
      quote:
        "Professional, knowledgeable, and truly therapeutic. My chronic pain has improved tremendously.",
      author: "– Client Review",
    },
    {
      quote:
        "The myo-fascial work made a noticeable difference in my mobility.",
      author: "– Client Review",
    },
    {
      quote:
        "Highly clinical, highly effective, and incredibly caring therapists.",
      author: "– Client Review",
    },
  ];

  return (
    <div className="font-roboto text-gray-800">

      {/* HERO */}
      <section
        className="relative h-[500px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/clinical-massage-service/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-left w-full md:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Clinical Massage Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              Targeted therapeutic treatments designed to address pain, injury recovery, and clinical wellness needs.
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
            Clinical & Medical Massage Therapy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our Clinical Massage Services include Myo-Fascial Massage Therapy,
            Cranial Sacral Therapy, Manual Lymph Drainage, and Pre/Post Natal
            Massage. These treatments are designed to address specific medical,
            muscular, and rehabilitative needs using advanced therapeutic techniques.
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
            You are entitled to your treatment notes upon request. We can provide
            coded CPT invoices for insurance reimbursement submission. We accept
            most FSA and HSA flex spending cards. Please note that we do not bill
            insurance companies directly.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/wellness-spa.jpg"
            alt="Clinical Massage Therapy"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Treatment Flow */}
      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/images/clinical-massage-service/treatment-specialties-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
            Treatment Specialties
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
          Book Your Clinical Massage Session
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

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-6">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left font-medium text-lg flex justify-between items-center"
            >
              {faq.question}
              <span>{faq.open ? "-" : "+"}</span>
            </button>
            {faq.open && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
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