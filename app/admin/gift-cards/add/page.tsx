"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiftCard } from "../../types/giftcard";
import { addGiftCard } from "../../lib/api"; // API function to add a gift card
import Link from "next/link";

export default function AddGiftCardPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!title || !amount) {
      setError("Please provide both title and amount.");
      setLoading(false);
      return;
    }

    const newCard: Partial<GiftCard> = {
      title,
      description,
      amount,
      active,
    };

    try {
      await addGiftCard(newCard); // Call your API function
      router.push("/admin/gift-cards"); // Redirect to list page
    } catch (err) {
      console.error(err);
      setError("Failed to add gift card.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#E5E5E5]">
        <h1 className="text-3xl font-semibold text-[#1C1C1C]">Add New Gift Card</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Fill out the details below to create a new gift card.
        </p>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-primary focus:border-primary"
              placeholder="$50 Gift Card"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-primary focus:border-primary"
              placeholder="Perfect for a single wellness session"
              rows={3}
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-gray-900 focus:ring-primary focus:border-primary"
              placeholder="50"
            />
          </div>

          {/* Active */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label className="text-gray-700 px-3 text-sm">Active</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full text-white"
            >
              {loading ? "Saving..." : "Add Gift Card"}
            </button>

            <Link
              href="/admin/gift-cards"
              className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
