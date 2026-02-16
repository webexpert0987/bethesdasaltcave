"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurSpaceGallery() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Our Space
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#1C1C1C]">
            A Sanctuary Designed for Calm
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#6B6B6B]">
            Step inside a peaceful environment crafted with Himalayan salt,
            soft lighting, and a serene atmosphere to help you relax and restore.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Image 1 */}
          <div className="relative h-[350px] overflow-hidden rounded-2xl group">
            <Image
              src="/assets/images/services-1.jpg"
              alt="Salt Cave Interior"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-[350px] overflow-hidden rounded-2xl group">
            <Image
              src="/assets/images/services-2.png"
              alt="Relaxation Area"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-[350px] overflow-hidden rounded-2xl group">
            <Image
              src="/assets/images/services-3.png"
              alt="Himalayan Salt Wall"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 4 */}
          <div className="relative h-[350px] overflow-hidden rounded-2xl group">
            <Image
              src="/assets/images/services-4.png"
              alt="Wellness Session"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

        </div>

        {/* Optional Button */}
        <div className="mt-16 text-center">
<Link 
  href="/your-link" 
  className="border-2 border-primary text-primary 
  hover:bg-primary-dark hover:!text-white hover:border-primary-dark
  transition-all duration-300 
  px-12 py-5 font-semibold 
  rounded-full inline-block"
>
  View Full Gallery
</Link>

        </div>

      </div>
    </section>
  );
}
