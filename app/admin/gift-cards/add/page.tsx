"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addGiftCard } from "../../lib/api";
import Link from "next/link";


export default function AddGiftCardPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [active, setActive] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!title || !amount) {
      setError("Please provide both title and amount.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("amount", amount.toString());
      formData.append("active", active.toString());

      if (image) {
        formData.append("image", image);
      }

      await addGiftCard(formData); // send FormData
      router.push("/admin/gift-cards");
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
        <h1 className="text-3xl font-semibold text-[#1C1C1C]">
          Add New Gift Card
        </h1>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3"
              placeholder="$50 Gift Card"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3"
              rows={3}
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount ($)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gift Card Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-48 rounded-lg border"
              />
            )}
          </div>

          {/* Active */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">Active</label>
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