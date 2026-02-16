"use client";
import Image from "next/image";
import MassageOne from "../../public/assets/images/massage1.jpg";
import MassageTwo from "../../public/assets/images/massage2.jpg";

export default function WorkingHoursSection() {
  return (
    <section className="bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative h-[450px] w-full overflow-hidden">
            <Image
              src={MassageOne}
              alt="Massage Therapy"
              fill
              className="object-cover"
            />
          </div>

          {/* Working Hours Card */}
          <div className="absolute -bottom-16 left-10 bg-[#c79c86] text-white w-[400px] p-10 shadow-xl">

            <h3 className="text-3xl font-marcellus mb-8">
              Working Hours
            </h3>

            <div className="space-y-6 text-sm">

              <div className="flex justify-between border-b border-white/30 pb-4">
                <span>Monday</span>
                <span>Closed</span>
              </div>

              <div className="flex justify-between border-b border-white/30 pb-4">
                <span>Tuesday</span>
                <span>10 am – 6 pm</span>
              </div>

              <div className="flex justify-between border-b border-white/30 pb-4">
                <span>Wednesday – Saturday</span>
                <span>10 am – 8 pm</span>
              </div>

              <div className="flex justify-between border-b border-white/30 pb-4">
                <span>Sunday</span>
                <span>10 am – 6 pm</span>
              </div>

            </div>

            {/* Quote */}
            <div className="mt-8 pt-6 border-t border-white/30 text-sm opacity-90">
              <p>
                “The time to relax is when you don’t have time for it.”
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative h-[550px] w-full overflow-hidden">
          <Image
            src={MassageTwo}
            alt="Spa Treatment"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
