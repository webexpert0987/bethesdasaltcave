import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="py-24 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-center">

          {/* Card 1 */}
          <div className="p-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/service-1.jpg"
                alt="Massage"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
              Massage
            </h3>

            <h4 className="text-xl text-[#2c396b] mb-4">
              Bodywork
            </h4>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We offer all sorts of different types of massages,
              skin care, reiki, energy work and of course stretching.
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

          {/* Card 2 (Highlighted) */}
          <div className="p-10 bg-[#e9e2db]">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/service-2.jpg"
                alt="Salt Cave"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
              Salt Cave
            </h3>

            <h4 className="text-xl text-[#2c396b] mb-4">
              HaloTherapy
            </h4>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              HaloTherapy has been known to help people of all ages
              with upper respiratory and skin conditions.
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

          {/* Card 3 */}
          <div className="p-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/images/service-3.jpg"
                alt="Workshops"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-marcellus text-[#d2b6a3] mb-2">
              Workshops
            </h3>

            <h4 className="text-xl text-[#2c396b] mb-4">
              Classes
            </h4>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Find balance in a very chaotic world.
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

        </div>

        {/* Bottom Buttons */}
<div className="mt-16 flex justify-center gap-6">
  <Link
    href="#"
    className="bg-[#804f33] hover:bg-[#1f2a50] transition-all duration-300 
          px-12 py-5 font-semibold rounded-full 
          font-roboto inline-block text-white"
  >
    Book Now
  </Link>

  <Link
    href="#"
    className="bg-[#804f33] hover:bg-[#1f2a50] transition-all duration-300 
          px-12 py-5 font-semibold rounded-full 
          font-roboto inline-block text-white"
  >
    Gift Card
  </Link>
</div>

      </div>
    </section>
  );
}
