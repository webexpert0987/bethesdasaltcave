"use client";
import Link from "next/link";
import Image from "next/image";
import Spa from "../../public/assets/images/spa.jpg";
import Logo from "../../public/assets/images/logo.png";
import { ChevronDown } from "lucide-react";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#2c396b] font-robotoSlab">
            <Image src={Logo} alt="Logo" width={150} height={100} />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-roboto text-[#2c396b]">

            <Link href="/">Home</Link>

            {/* ===== SERVICES ===== */}
<div className="relative group">
  <button className="py-2 flex items-center gap-1">
    Services
    <ChevronDown
      size={16}
      className="transition-transform duration-300 group-hover:rotate-180"
    />
  </button>

  <MegaContent
    title="Our Services"
    links={[
      "Cryoskin",
      "Endosphere",
      "Massages And Body Work",
      "Salt Cave - Halo Therapy",
      "Salt Cave - Health Benefits",
      "Skin Care",
      "Spa Pricing",
      "Workshops and Classes",
    ]}
  />
</div>


            {/* ===== OUR SPA ===== */}
            <div className="relative group">
              <button className="py-2 flex items-center gap-1">Our Spa
                     <ChevronDown
      size={16}
      className="transition-transform duration-300 group-hover:rotate-180"
    />
              </button>

              <div className="mega-menu">
                <MegaContent
                  title="Our Spa"
                  links={[
                    "Spa Etiquette",
                    "FAQ",
                    "Location",
                  ]}
                />
              </div>
            </div>

            {/* ===== OUR TEAM ===== */}
            <Link href="#">Our Team</Link>

            {/* ===== MEDIA ===== */}
            <div className="relative group">
              <button className="py-2 flex items-center gap-1">Media
                 <ChevronDown
      size={16}
      className="transition-transform duration-300 group-hover:rotate-180"
    />
              </button>

              <div className="mega-menu">
                <MegaContent
                  title="Media"
                  links={[
                    "Social Media",
                    "Salt Cave Blog",
                  ]}
                />
              </div>
            </div>
            
            <Link href="#">Our Story</Link>            
            <div className="flex items-center gap-4">
            {/* ===== BOOK NOW (Button Style Mega) ===== */}
            <div className="relative group">
              <button className="py-2 flex items-center gap-2 bg-[#804f33] text-white px-6 py-2 rounded-full">
                <span className="text-white">Book Now</span>
                 <ChevronDown
      size={16}
      className="transition-transform duration-300 group-hover:rotate-180 text-white"
    />
              </button>

              <div className="mega-menu">
                <MegaContent
                  title="Book Your Experience"
                  links={[
                    "Spa Services",
                    "Salt Cave",
                    "BOOK NOW",
                    "Gift Card",
                  ]}
                />
              </div>
            </div>

            {/* Gift Card Button */}
            <Link
              href="#"
              className="border border-primary px-6 py-2 rounded-full text-primary"
            >
              Gift Cards
            </Link>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
}

/* ============================= */
/* ===== Mega Menu Layout ===== */
/* ============================= */

function MegaContent({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div
      className="
      absolute left-1/2 -translate-x-1/2
      top-full mt-4
      w-[900px]
      bg-white shadow-2xl rounded-2xl p-10
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      "
    >
      <div className="grid grid-cols-2 gap-12">

        {/* Left Side Links */}
        <div>
          <h3 className="font-bold font-robotoSlab text-xl mb-6 text-primary">
            {title}
          </h3>

          <div className="flex flex-col gap-4 font-roboto text-[#2c396b]">
            {links.map((item, index) => (
              <Link key={index} href="#" className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative h-72 w-full rounded-xl overflow-hidden">
          <Image
            src={Spa}
            alt="Spa"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}