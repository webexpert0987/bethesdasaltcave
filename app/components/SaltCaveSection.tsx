"use client";

import Image from "next/image";
import Link from "next/link";
import EndosphereImg from "../../public/assets/images/endosphere.jpg";

export default function SaltCaveSection() {
  return (
    <section className="w-full bg-[#f3eee9]">

      <div className="grid lg:grid-cols-2">

        {/* LEFT FULL IMAGE */}
        <div className="relative h-[800px] w-full">
          <Image
            src="/assets/images/salt-cave.jpeg"
            alt="Endosphere Therapy"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT FULL HEIGHT */}
        <div className="flex items-center px-16 py-24">

          <div className="max-w-xl">

            {/* Background Script Text */}
            <h3 className="absolute text-[120px] font-marcellus text-[#804f33]/10 pointer-events-none select-none">
              What We Do
            </h3>

            {/* Title */}
            <h2 className="text-5xl font-marcellus text-primary mb-6 relative">
              Endosphere Bodywork
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-10 font-inter">
              Artemis Endosphère Therapy is a globally recognized protocol
              aimed at treating the face and body imperfections. The Endosphere
              technology stimulates blood flow, enhances oxygenation,
              improves elasticity and increases collagen reproduction
              in skin and muscle.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">

              <div>
                <div className="text-4xl text-primary mb-3">💆</div>
                <h4 className="font-marcellus text-xl text-primary mb-2">
                  Circulation Boost
                </h4>
                <p className="text-gray-600 text-sm">
                  Improves blood flow and oxygenation.
                </p>
              </div>

              <div>
                <div className="text-4xl text-primary mb-3">✨</div>
                <h4 className="font-marcellus text-xl text-primary mb-2">
                  Skin Rejuvenation
                </h4>
                <p className="text-gray-600 text-sm">
                  Enhances elasticity and collagen production.
                </p>
              </div>

              <div>
                <div className="text-4xl text-primary mb-3">🌿</div>
                <h4 className="font-marcellus text-xl text-primary mb-2">
                  Detox & Sculpt
                </h4>
                <p className="text-gray-600 text-sm">
                  Helps tone and contour naturally.
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-[#e2d6cc] pt-8 mb-10 grid md:grid-cols-3 gap-6 text-gray-700">

              <ul className="space-y-3">
                <li>• Golden Glow Therapy</li>
                <li>• Aromatic Flow Ritual</li>
              </ul>

              <ul className="space-y-3">
                <li>• Nirvana Oil Symphony</li>
                <li>• Liquid Gold Renewal</li>
              </ul>

              <ul className="space-y-3">
                <li>• Zen Infusion Massage</li>
                <li>• Soul Soothing Elixir</li>
              </ul>

            </div>

            {/* Your Saved Button Style */}
            <Link
              href="#"
              className="bg-[#804f33] hover:bg-[#1f2a50] transition-all duration-300 
              px-12 py-5 font-semibold rounded-full 
              font-roboto inline-block text-white"
            >
              Learn More
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
