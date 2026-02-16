"use client";

import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative w-full h-[450px]">
            <Image
              src="/assets/images/gift-cards-home.jpg" // replace with actual image
              alt="Founder of Bethesda Salt Cave"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-xl">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Where It All Began
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C]">
              A Personal Journey Into Natural Healing
            </h2>

            <p className="mt-6 text-[#6B6B6B] leading-relaxed">
              Bethesda Salt Cave was born from a deeply personal experience.
              After discovering the calming and restorative benefits of salt
              therapy, our founder envisioned creating a peaceful sanctuary
              where others could experience the same healing environment.
            </p>

            <p className="mt-6 text-[#6B6B6B] leading-relaxed">
              What started as a search for wellness evolved into a space built
              with intention, care, and a commitment to holistic balance. Every
              detail — from the Himalayan salt walls to the tranquil ambiance —
              reflects a passion for nurturing both body and mind.
            </p>

            <p className="mt-6 text-[#6B6B6B] leading-relaxed">
              Today, Bethesda Salt Cave stands as a calming retreat for the
              community — a place to breathe deeply, disconnect from stress,
              and reconnect with wellness.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
