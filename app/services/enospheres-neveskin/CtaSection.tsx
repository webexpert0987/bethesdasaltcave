import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-primary py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Relax & Rejuvenate?
            </h2>

            <p className="text-white leading-relaxed">
              Experience ultimate wellness and serenity with our premium spa
              treatments. Book your appointment today and let us take care of
              your mind and body.
            </p>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-[#804f33] transition-all duration-300 px-12 py-5 font-semibold rounded-full font-roboto inline-block"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
