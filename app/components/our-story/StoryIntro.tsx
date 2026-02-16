"use client";

import Image from "next/image";

export default function OurStoryHero() {
  return (
    <section className="relative bg-[#F8F6F3] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Small Label */}
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Our Story
        </p>

        {/* Main Heading */}
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1C1C1C]">
          A Journey Toward Healing & Wellness
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-relaxed">
          What began as a personal search for natural healing evolved into a
          sanctuary designed to bring calm, clarity, and balance to our
          community. Bethesda Salt Cave was created to offer a peaceful escape
          where wellness meets intentional care.
        </p>
      </div>
    </section>
  );
}
