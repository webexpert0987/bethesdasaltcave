"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CtaSection from "./CtaSection";


export default function EnospheresNeveskinPage() {
  const [open, setOpen] = useState(false);
  const [widgetId, setWidgetId] = useState("8148248df58"); // Default widget ID

  // Dynamically load Mindbody script only when popup opens
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open, widgetId]);

  // Example sub-services
  const subServices = [
    {
      id: 1,
      name: "Full Body Therapy",
      desc: "Comprehensive treatment for body sculpting and toning.",
      duration: "60 mins",
      price: "$120",
      widgetId: "8148248df58",
    },
    {
      id: 2,
      name: "Targeted Facial Treatment",
      desc: "Advanced skin rejuvenation and hydration session.",
      duration: "45 mins",
      price: "$90",
      widgetId: "8148240df58",
    },
    {
      id: 3,
      name: "Express Toning Session",
      desc: "Quick session for targeted problem areas.",
      duration: "30 mins",
      price: "$60",
      widgetId: "8148244df58",
    },
  ];

  // Example staff
  const staff = [
    {
      id: 1,
      name: "Sophia Lee",
      title: "Lead Therapist",
      image: "/assets/images/staff/team1.png",
      widgetId: "8148248df58",
    },
    {
      id: 2,
      name: "David Chen",
      title: "Therapy Specialist",
      image: "/assets/images/staff/team2.png",
      widgetId: "8148244df58",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-[#F8F6F3] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1C1C1C]">
            Enosphères & Neveskin Therapy
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            A revolutionary non-invasive treatment designed to sculpt, tone,
            and rejuvenate your body using advanced therapeutic technology.
          </p>
          <div className="mt-10">
            <button
              onClick={() => {
                setWidgetId("8148248df58");
                setOpen(true);
              }}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE DESCRIPTION + BENEFITS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1C1C1C]">
              What Is Enosphères & Neveskin?
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              This innovative therapy combines compressive micro-vibration and
              advanced cooling technology to reduce inflammation, improve
              circulation, and support natural detoxification. Perfect for
              enhancing body contour, skin tone, and overall wellness.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#E9E2DB] p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2">Duration</h3>
                <p className="text-gray-600">30–60 mins depending on session</p>
              </div>
              <div className="bg-[#E9E2DB] p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2">Benefits</h3>
                <p className="text-gray-600">
                  Reduces cellulite, tones muscles, boosts circulation, and more
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/wellness-spa.jpg"
              alt="Enosphères & Neveskin Therapy"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* SUB-SERVICES / PACKAGES */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#1C1C1C] text-center">
            Our Packages
          </h2>
          <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
            Choose from a variety of packages designed to fit your wellness goals.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {subServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <p className="text-gray-500 text-sm">
                    Duration: {service.duration}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">Price: {service.price}</p>
                </div>
                <button
                  onClick={() => {
                    setWidgetId(service.widgetId);
                    setOpen(true);
                  }}
                  className="bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-3 font-semibold rounded-full inline-block text-white mt-4"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#1C1C1C] text-center">
            Our Specialists
          </h2>
          <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
            Book a session with a specialist of your choice.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {staff.map((person) => (
              <div
                key={person.id}
                className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-500 mb-4">{person.title}</p>
                <button
                  onClick={() => {
                    setWidgetId(person.widgetId);
                    setOpen(true);
                  }}
                  className="bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-3 font-semibold rounded-full inline-block text-white"
                >
                  Book with {person.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      
      <CtaSection
        title="Ready to Experience Enosphères & Neveskin?"
        desc="Book your session today and take the first step towards a more sculpted, toned, and rejuvenated you."
        buttonText="Book Now"
        onClick={() => {
          setWidgetId("8148248df58");
          setOpen(true);
        }}
      />

      {/* BOOKING MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white w-full max-w-4xl rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-6">Book Your Session</h3>
            {/* Mindbody Widget */}
            <div
              className="mindbody-widget"
              data-widget-type="Appointments"
              data-widget-id={widgetId}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
