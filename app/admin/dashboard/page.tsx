"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getOrders } from "@/app/admin/lib/orders"; // adjust path

type Order = {
  _id: string;
  customerName: string;
  customerEmail: string;
  giftCardTitle: string;
  amount: number;
  paymentStatus: string;
};

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalGiftCards: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getOrders();

      if (!data) return;

      // Calculate stats dynamically
      const totalRevenue = data
        .filter((o) => o.paymentStatus === "paid")
        .reduce((sum, o) => sum + Number(o.amount), 0);

      const uniqueGiftCards = new Set(
        data.map((o) => o.giftCardTitle)
      );

      setStats({
        totalGiftCards: uniqueGiftCards.size,
        totalOrders: data.length,
        totalRevenue,
      });

      // Show latest 5 orders
      setOrders(data.slice(0, 5));
    }

    loadData();
  }, []);

  return (
    <div className="p-6 space-y-12 bg-gray-50 min-h-screen">

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <StatCard title="Total Gift Cards" value={stats.totalGiftCards} />
        <StatCard title="Total Orders" value={stats.totalOrders} />
        <StatCard title="Total Revenue" value={`$${stats.totalRevenue}`} />

      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Recent Orders
          </h2>
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Gift Card</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-6 py-4 font-medium">{order._id}</td>
                  <td className="px-6 py-4">{order.customerName}</td>
                  <td className="px-6 py-4">{order.giftCardTitle}</td>
                  <td className="px-6 py-4 font-semibold">${order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.paymentStatus === "paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
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

/* Reusable Stat Card */
function StatCard({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all">
      <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
      <p className="text-5xl font-bold text-gray-900 mt-4">{value}</p>
    </div>
  );
}
