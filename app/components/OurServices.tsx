"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";



export default function OurServices() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}   
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="services-swiper"
        >


          
          {/* Card 1 */}
          <SwiperSlide>
            <div className="service-card p-10 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/services-1.jpg"
                  alt="Enosphères & Neveskin"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
                Book Enosphères & Neveskin
              </h3>

              <h4 className="text-xl text-[#2c396b] mb-4">
                Enosphères
              </h4>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent porttitor.
              </p>

              <Link
                href="/services/enospheres-neveskin"
                className="inline-block px-8 py-3 text-sm font-medium
                border border-[#d2b6a3] text-primary
                hover:bg-[#804f33] hover:!text-white hover:border-[#804f33]
                transition-all duration-300 rounded-full"
              >
                Learn More →
              </Link>
              
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="service-card p-10 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/services-2.png"
                  alt="Salt Cave"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
                Book A HaloTherapy Salt Cave Session
              </h3>

              <h4 className="text-xl text-[#2c396b] mb-4">
                HaloTherapy
              </h4>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent porttitor.
              </p>
              <Link
                href="#"
                className="inline-block px-8 py-3 text-sm font-medium
                border border-[#d2b6a3] text-primary
                hover:bg-[#804f33] hover:!text-white hover:border-[#804f33]
                transition-all duration-300 rounded-full"
              >
                Learn More →
              </Link>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="service-card p-10 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/services-3.png"
                  alt="Classes"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
                Join Our Classes & workshops
              </h3>

              <h4 className="text-xl text-[#2c396b] mb-4">
                Classes
              </h4>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent porttitor.
              </p>

              <Link
                href="#"
                className="inline-block px-8 py-3 text-sm font-medium
                border border-[#d2b6a3] text-primary
                hover:bg-[#804f33] hover:!text-white hover:border-[#804f33]
                transition-all duration-300 rounded-full"
              >
                Learn More →
              </Link>
            </div>
          </SwiperSlide>
          {/* Card 4 */}
          <SwiperSlide>
            <div className="service-card p-10 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/services-4.png"
                  alt="Massage"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
                Schedule Massage & Bodywork
              </h3>

              <h4 className="text-xl text-[#2c396b] mb-4">
                Massage
              </h4>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent porttitor.
              </p>

              <Link
                href="#"
                className="inline-block px-8 py-3 text-sm font-medium
                border border-[#d2b6a3] text-primary
                hover:bg-[#804f33] hover:!text-white hover:border-[#804f33]
                transition-all duration-300 rounded-full"
              >
                Learn More →
              </Link>
            </div>
          </SwiperSlide>
          {/* Card 5 */}
          <SwiperSlide>
            <div className="service-card p-10 text-center transition-all duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/images/services-5.png"
                  alt="Facial"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
                Schedule Facial / Skin Care
              </h3>

              <h4 className="text-xl text-[#2c396b] mb-4">
                Facial
              </h4>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent porttitor.
              </p>
              <Link
                href="#"
                className="inline-block px-8 py-3 text-sm font-medium
                border border-[#d2b6a3] text-primary
                hover:bg-[#804f33] hover:!text-white hover:border-[#804f33]
                transition-all duration-300 rounded-full"
              >
                Learn More →
              </Link>
            </div>
          </SwiperSlide>

        </Swiper>

        {/* Bottom Buttons */}
        <div className="mt-16 flex justify-center gap-6">
          <Link
            href="#"
            className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
          >
            Book Now
          </Link>

         
          <Link href="#" className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block" > Gift Card </Link>
        </div>

      </div>

      {/* Dynamic Center Highlight */}
      <style jsx global>{`


        .services-swiper .swiper-slide-active .service-card {
          background: #e9e2db;
        }
      `}</style>

    </section>
  );
}
