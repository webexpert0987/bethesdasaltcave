"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GiftCardsPage() {
  const [giftCards, setGiftCards] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  // Pagination calculations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = giftCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(giftCards.length / cardsPerPage);

  useEffect(() => {
    async function fetchGiftCards() {
      const res = await fetch("/api/admin/gift-cards");
      const data = await res.json();
      setGiftCards(data.giftCards);
    }

    fetchGiftCards();
  }, []);

  return (
    <main className="bg-[#F8F6F3] text-[#1C1C1C]">
      {/* Hero Section */}
      <section className="py-24 pb-15 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Gift Cards
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Share the gift of relaxation and wellness with your loved ones.
        </p>
      </section>

      {/* Gift Card Options */}
      <section className="pt-5 py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {currentCards.map((card) => (
          <div
            key={card._id}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center"
          >
            <Image
              src={card.image}
              alt={card.name}
              width={300}
              height={150}
              className="rounded-lg mb-6"
            />
            <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <p className="text-2xl font-semibold mb-6">${card.price}</p>

            <Link
              href={`/checkout?title=${encodeURIComponent(
                card.name
              )}&price=${card.price}`}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
            >
              Buy Now
            </Link>
          </div>
        ))}
        
      </section>
      {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end items-center gap-3 pb-16 max-w-7xl mx-auto px-6">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

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
