import Link from "next/link";


export default function YourGiftCards() {
  return (  
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div className="relative">
        <img          
          src="/assets/images/gift-cards-home.jpg"
          alt="Gift Card"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <p className="font-semibold text-subheading font-roboto uppercase tracking-widest mb-4">
          Special Gift
        </p>

        <h2 className="text-4xl md:text-5xl mb-6 text-primary leading-tight">
          Purchase Your Gift Cards
        </h2>

        <p className="font-roboto text-lg text-gray-600 mb-8 leading-relaxed">
          Give the gift of relaxation and wellness. Our gift cards are perfect 
          for birthdays, anniversaries, holidays, or simply to show someone you care. 
          Let your loved ones experience the calming benefits of our salt cave.
        </p>

        <Link
          href="#"
          className="bg-[#804f33] hover:bg-[#1f2a50] transition-all duration-300 
          px-12 py-5 font-semibold rounded-full 
          font-roboto inline-block text-white"
        >
          Purchase Now
        </Link>
      </div>

    </div>
  </div>
</section>
    );
}   