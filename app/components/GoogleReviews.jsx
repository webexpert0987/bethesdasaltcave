"use client";
import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return null;

  return (
    <section className="py-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Google Reviews
          </h2>

          <div className="flex justify-center items-center gap-2">
            <div className="text-yellow-500 text-xl">★★★★★</div>
            <span className="text-gray-700 font-medium">
              {data.rating} out of 5 ({data.total}+ Reviews)
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.reviews?.slice(0, 3).map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-yellow-500 mb-4">
                {"★".repeat(review.rating)}
              </div>

              <p className="text-gray-700 mb-6 line-clamp-4">
                {review.text}
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {review.author_name}
                </p>
                <p className="text-sm text-gray-500">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}