"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { GiftCard } from "../../../types/giftcard"; // Your type definition
import {
  getGiftCardById,
  updateGiftCard,
} from "../../../lib/api";

export default function EditGiftCardPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [card, setCard] = useState<GiftCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch gift card
  useEffect(() => {
    async function loadCard() {
      try {
        const data = await getGiftCardById(id);
        if (!data) {
          setError("Gift card not found.");
        } else {
          setCard(data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load gift card.");
      } finally {
        setLoading(false);
      }
    }

    if (id) loadCard();
  }, [id]);

  // Handle update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!card) return;

    setSaving(true);
    setError("");

    try {
      await updateGiftCard(card.id, card);
      router.push("/admin/gift-cards");
    } catch (err) {
      console.error(err);
      setError("Failed to update gift card.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-gray-600">Loading gift card...</div>
    );
  }

  if (!card) {
    return (
      <div className="p-10 text-red-500">Gift card not found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#E5E5E5]">
        <h1 className="text-3xl font-semibold text-[#1C1C1C]">
          Edit Gift Card
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Update the details below.
        </p>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={card.title}
              onChange={(e) =>
                setCard({ ...card, title: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={card.description}
              onChange={(e) =>
                setCard({ ...card, description: e.target.value })
              }
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount ($)
            </label>
            <input
              type="number"
              value={card.amount}
              onChange={(e) =>
                setCard({
                  ...card,
                  amount: parseFloat(e.target.value),
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Active */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={card.active}
              onChange={(e) =>
                setCard({ ...card, active: e.target.checked })
              }
              className="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label className="text-gray-700 text-sm px-3">
              Active
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full text-white"
            >
              {saving ? "Updating..." : "Update Gift Card"}
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
