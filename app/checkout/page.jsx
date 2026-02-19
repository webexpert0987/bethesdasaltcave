"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [giftInfo, setGiftInfo] = useState({ title: "", price: 0 });
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    message: "",
    billingName: "",
    billingEmail: "",
    promoCode: "",
  });
  const [discount, setDiscount] = useState(0);

  // Load gift info from query params
useEffect(() => {
  const title = searchParams.get("title") || "";
  const priceParam = searchParams.get("price") || "0";
  const price = Number(priceParam.replace(/[^0-9.-]+/g, "")); // remove any $ or commas
  setGiftInfo({ title, price });
}, [searchParams]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const applyPromo = () => {
    if (formData.promoCode === "RELAX10") setDiscount(10);
    else setDiscount(0);
  };

  const subtotal = giftInfo.price;
  const total = subtotal - discount;

const handleStripeCheckout = async () => {
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        giftTitle: giftInfo.title,
        amount: total,
        billingName: formData.billingName,
        billingEmail: formData.billingEmail,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // ← redirect to Stripe checkout
    } else {
      alert("Failed to create Stripe session.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong, please try again.");
  }
};

  return (
    <main className="bg-[#F8F6F3] text-[#1C1C1C] min-h-screen">
      {/* Hero */}
      <section className="py-24 pb-0 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Gift Card Checkout
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Complete your purchase for <span className="font-semibold">{giftInfo.title}</span>
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gift Details</h2>
            <p className="text-gray-700 font-medium">{giftInfo.title}</p>
            <p className="text-gray-700 font-semibold text-lg">Amount: ${giftInfo.price}</p>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Recipient Name</label>
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Recipient Email</label>
              <input
                type="email"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Personal Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="billingName"
                value={formData.billingName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="billingEmail"
                value={formData.billingEmail}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Promo Code</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="promoCode"
                  value={formData.promoCode}
                  onChange={handleChange}
                  placeholder="Enter code"
                  className="flex-1 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#804f33]"
                />
                <button
                  type="button"
                  onClick={applyPromo}
                  className="bg-primary hover:bg-primary-dark transition-all duration-300 px-6 py-3 font-semibold rounded-full text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between text-gray-700">
            <span>{giftInfo.title}</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Discount</span>
            <span>-${discount}</span>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            onClick={handleStripeCheckout}
            className="w-full bg-[#635bff] hover:bg-[#4e45d1] transition-all duration-300 px-12 py-5 font-semibold rounded-full text-white mt-4"
          >
            Pay with Card (Stripe)
          </button>
          <p className="mt-4 text-gray-500 text-sm text-center">
            Secure checkout via Stripe. No spam. Terms apply.
          </p>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link
          href="/gift-cards"
          className="text-[#804f33] font-semibold hover:underline"
        >
          ← Back to Gift Cards
        </Link>
      </section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
