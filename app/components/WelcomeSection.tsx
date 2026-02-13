export default function WelcomeSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white"
    style={{ backgroundImage: "url('/assets/images/h9-parallax-1.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <p className="font-semibold text-subheading font-roboto uppercase tracking-widest mb-4">
          Welcome to
        </p>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-marcellus text-[#804f33] mb-6">
          Bethesda Salt Cave & Spa
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-4">
          A holistic approach to your Health and Wellness.
        </p>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-gray-600 space-y-6 leading-relaxed">
          <p>
            Bethesda Salt Cave & Spa has come a long way since we opened our
            doors in July 2014. Today we have branched out to become more than
            a salt cave, although our focus has remained committed to sharing
            & living a healing way of life.
          </p>

          <p>
            Join us in our salt cave where you can recharge, leaning back in
            our zero gravity recliners or on our beautiful Guatemalan Handmade
            pillows. Ambient music will ease your spirit & help guide you
            deeper into a meditative state of mind.
          </p>
        </div>

        {/* Offerings */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#804f33] mb-6">
            Our Offerings
          </h3>

          <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            We offer HaloTherapy, Full body Detox Therapies, Massage, Skin Care,
            AntiAging & Transformational treatments, Life / Balance Chaos to Calm
            decluttering Coaching, Energetic & Aromatherapy modalities, Stretching,
            Full Body & Face Lymph Drainage Sculpting plus many amazing workshops
            & classes including Essential Oils, Drumming & Chanting, Meditation,
            Group Energy Clearing, Yoga, Stretching & Crystal Healing Sound Concerts.
          </p>
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="/about"
            className="bg-[#804f33] hover:bg-[#1f2a50] transition-all duration-300 
          px-12 py-5 font-semibold rounded-full 
          font-roboto inline-block text-white"
          >
            About our Cave & HaloTherapy
          </a>
        </div>

      </div>
    </section>
  );
}
