"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Sample data - replace with API / Supabase fetch
const sampleStats = {
  totalGiftCards: 12,
  totalOrders: 34,
  totalRevenue: 1250,
};

const recentOrders = [
  { id: "ORD001", customer: "John Doe", giftCard: "Relaxation Spa", total: 50, status: "Completed" },
  { id: "ORD002", customer: "Jane Smith", giftCard: "Wellness Package", total: 75, status: "Pending" },
  { id: "ORD003", customer: "Alice Lee", giftCard: "Meditation Session", total: 40, status: "Completed" },
];

export default function Dashboard() {
  const [stats, setStats] = useState(sampleStats);
  const [orders, setOrders] = useState(recentOrders);

  useEffect(() => {
    // Fetch dynamic data here if needed
  }, []);

  return (
    <div className="p-6 space-y-12 bg-gray-50 min-h-screen">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all">
          <h3 className="text-gray-500 font-medium text-sm">Total Gift Cards</h3>
          <p className="text-5xl font-bold text-gray-900 mt-4">{stats.totalGiftCards}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all">
          <h3 className="text-gray-500 font-medium text-sm">Total Orders</h3>
          <p className="text-5xl font-bold text-gray-900 mt-4">{stats.totalOrders}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all">
          <h3 className="text-gray-500 font-medium text-sm">Total Revenue</h3>
          <p className="text-5xl font-bold text-gray-900 mt-4">${stats.totalRevenue}</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Orders</h2>
          <Link
            href="/admin/orders"
            className="text-[#2c396b] font-medium hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Gift Card</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.giftCard}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">${order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-[#2c396b] font-medium hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
