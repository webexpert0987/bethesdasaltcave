"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GiftCard } from "../types/giftcard";
import { fetchGiftCards } from "../lib/api"; // API function to fetch gift cards
import GiftCardCard from "../components/GiftCardCard"; // The card component for displaying gift cards


export default function AdminGiftCardsPage() {
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const cardsPerPage = 8;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = giftCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(giftCards.length / cardsPerPage);

  useEffect(() => {
    async function loadGiftCards() {
      try {
        const data = await fetchGiftCards();
        setGiftCards(data);
      } catch (error) {
        console.error("Error fetching gift cards:", error);
      } finally {
        setLoading(false);
      }
    }
    loadGiftCards();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-semibold text-[#1C1C1C]">Gift Cards</h1>
          <Link
            href="/admin/gift-cards/add"
            className="bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-3 font-semibold rounded-full text-white"
          >
            Add New
          </Link>
        </div>

        {/* Gift Cards List */}
        {loading ? (
          <p className="text-gray-600">Loading gift cards...</p>
        ) : giftCards.length === 0 ? (
          <p className="text-gray-600">No gift cards found.</p>
        ) : (
          <div className="grid grid-cols-1 pt-6 md:grid-cols-4 gap-6">
            {currentCards.map((card) => (
              <GiftCardCard key={card.id} card={card} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
