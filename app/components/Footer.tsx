import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import Logo from "../../public/assets/images/logo.png";

export default function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Column 1 - Logo + Contact */}
        <div>
          {/* <Image
            src="/assets/images/logo.png"
            alt="Bethesda Salt Cave"
            width={180}
            height={80}
            className="mb-6"
          /> */}

          <p className="text-sm text-gray-300 mb-2 uppercase tracking-widest">
            Phone & E-mail
          </p>

          <p className="mb-2">+ 301-312-6377</p>
          <p className="mb-6">SaltCave@comcast.net</p>

          <p className="text-sm text-gray-300 mb-2 uppercase tracking-widest">
            Address
          </p>

          <p>
            Bethesda Salt Cave <br />
            4709 Montgomery Lane <br />
            Bethesda, MD 20814
          </p>
        </div>

        {/* Column 2 - Header Menu */}
        <div>
          <h3 className="text-xl font-marcellus mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Opening Times */}
        <div>
          <h3 className="text-xl font-marcellus mb-6">Opening Times</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Monday - Closed</li>
            <li>Tuesday - 10 am - 6 pm</li>
            <li>Wednesday - Saturday 10 am - 8 pm</li>
            <li>Sunday - 10 am - 6 pm</li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="text-xl font-marcellus mb-6">Connect With Us</h3>

          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.facebook.com/bethesdasaltcave/"
              target="_blank"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#804f33] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/bethesdasaltcav"
              target="_blank"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#804f33] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-white/20 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Bethesda Salt Cave. All Rights Reserved.
      </div>
    </footer>
  );
}
