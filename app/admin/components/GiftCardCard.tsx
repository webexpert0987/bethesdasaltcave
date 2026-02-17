"use client";

import Link from "next/link";
import { GiftCard } from "../types/giftcard";

type Props = {
  card: GiftCard;
  onDelete?: (id: string) => void; // optional delete callback
};

export default function GiftCardCard({ card, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E5E5] flex flex-col justify-between">
      {/* Card Info */}
      <div>
        <h2 className="text-2xl font-medium text-[#1C1C1C]">{card.title}</h2>
        <p className="mt-1 text-gray-600 text-sm">{card.description}</p>
        <p className="mt-2 font-semibold text-[#1C1C1C]">${card.amount}</p>
        {card.active ? (
          <span className="mt-1 inline-block px-4 py-1 mt-2 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Active
          </span>
        ) : (
          <span className="mt-1 inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
            Inactive
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <Link
          href={`/admin/gift-cards/edit/${card.id}`}
          className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-4 py-2 font-semibold rounded-full text-sm"
        >
          Edit
        </Link>
    
        <button
  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 font-semibold rounded-full text-sm"
  onClick={() => {
    if (confirm("Are you sure you want to delete this gift card?")) {
      fetch(`/api/admin/gift-cards?id=${card.id}`, {
        method: "DELETE",
      }).then(() => window.location.reload());
    }
  }}
>
  Delete
</button>
      </div>
    </div>
  );
}
