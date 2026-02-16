"use client";

import { Wind, HeartPulse, Users, Sparkles } from "lucide-react";

export default function HealingExperience() {
  return (
    <section className="bg-[#F8F6F3] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            The Experience
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C]">
            What Makes Our Space Special
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#6B6B6B]">
            Every detail inside Bethesda Salt Cave is thoughtfully designed to
            create a calming, restorative, and truly immersive wellness
            experience.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <Wind className="w-8 h-8 text-black" />
            <h3 className="mt-6 text-xl font-medium text-[#1C1C1C]">
              Natural Salt Therapy
            </h3>
            <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
              Our Himalayan salt environment supports respiratory wellness
              and promotes relaxation through gentle, natural halotherapy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <HeartPulse className="w-8 h-8 text-black" />
            <h3 className="mt-6 text-xl font-medium text-[#1C1C1C]">
              Deep Relaxation
            </h3>
            <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
              A tranquil ambiance, comfortable seating, and calming lighting
              help reduce stress and encourage complete mental reset.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <Users className="w-8 h-8 text-black" />
            <h3 className="mt-6 text-xl font-medium text-[#1C1C1C]">
              Family-Friendly Space
            </h3>
            <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
              Designed for individuals, families, and children to experience
              wellness together in a safe and welcoming setting.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <Sparkles className="w-8 h-8 text-black" />
            <h3 className="mt-6 text-xl font-medium text-[#1C1C1C]">
              Mindful Atmosphere
            </h3>
            <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
              From sound therapy to carefully curated design elements, every
              session encourages balance, clarity, and intentional rest.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
