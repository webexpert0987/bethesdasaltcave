"use client";

export default function MissionVision() {
  return (
    <section className="bg-[#E9E2DB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-600">
            Our Purpose
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C]">
            Guided by Care, Inspired by Wellness
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#6B6B6B]">
            Everything we do is rooted in intention — to create a peaceful
            sanctuary that supports healing, relaxation, and holistic balance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-medium text-[#1C1C1C]">
              Our Mission
            </h3>
            <p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed">
              To provide a calming and therapeutic environment where individuals
              and families can experience the natural benefits of salt therapy.
              We are committed to promoting respiratory wellness, relaxation,
              and overall well-being through intentional care and a peaceful
              atmosphere.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E5E5] transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-medium text-[#1C1C1C]">
              Our Vision
            </h3>
            <p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed">
              To become a trusted wellness destination where the community can
              reconnect with calm, restore balance, and prioritize natural
              healing. We envision a space where mindful wellness becomes a
              part of everyday life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
