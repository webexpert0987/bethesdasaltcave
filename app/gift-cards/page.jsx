"use client";

import Link from "next/link";
import Image from "next/image";

export default function GiftCardsPage() {
  const giftCards = [
    {
      id: 1,
      title: "100.00 Gift Card At $100.00",
      description: "Treat someone to a relaxing salt therapy session.",
      price: "$100.00",
      image: "/assets/images/gift-cards/gift-card1.png",
    },
    {
      id: 2,
      title: "250.00 Gift Card At $250.00",
      description: "Give the gift of ultimate relaxation and rejuvenation.",
      price: "$250.00",
      image: "/assets/images/gift-cards/gift-card2.jpg",
    },
    {
      id: 3,
      title: "500.00 Gift Card At $500.00",
      description: "A premium gift experience for someone special.",
      price: "$500.00",
      image: "/assets/images/gift-cards/gift-card3.jpg",
    },
  ];

  return (
    <main className="bg-[#F8F6F3] text-[#1C1C1C]">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Gift Cards</h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Share the gift of relaxation and wellness with your loved ones.
        </p>
      </section>

      {/* Gift Card Options */}
      <section className="pt-[5] py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {giftCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={150}
              className="rounded-lg mb-6"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <p className="text-2xl font-semibold mb-6">{card.price}</p>
            <Link
              href={`/checkout?title=${encodeURIComponent(card.title)}&price=${card.price}`} // card.price = 250 (number)
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
            >
              Buy Now
            </Link>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E9E2DB] text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Can't decide? Give a Custom Gift Card
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Choose any amount and let your loved ones select their favorite wellness experience.
        </p>
        <Link
          href="/checkout"
          className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
        >
          Create Custom Gift Card
        </Link>
      </section>
    </main>
  );
}
