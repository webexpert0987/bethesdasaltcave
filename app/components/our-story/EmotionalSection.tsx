"use client";

import Link from "next/link";

export default function EmotionalSection() {
  return (
    <section className="bg-[#E9E2DB] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C]">
          More Than Just Salt Therapy
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-relaxed">
          Bethesda Salt Cave was created to be more than a wellness space.
          It is a place to pause. To breathe deeply. To disconnect from the
          noise of everyday life and reconnect with your sense of balance.
        </p>

        <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-relaxed">
          Whether you seek relaxation, respiratory support, or simply a quiet
          moment of calm, our space is here to welcome you with warmth,
          intention, and care.
        </p>

        {/* Subtle CTA Button */}
        <div className="mt-12">
          <Link 
  href="/your-link" 
  className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
>
  Begin Your Wellness Journey
</Link>
          
        </div>

      </div>
    </section>
  );
}
