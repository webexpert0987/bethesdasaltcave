"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Order } from "../types/order";
import { fetchOrders } from "../lib/api";


export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      const data = await fetchOrders();
      setOrders(data);
      setLoading(false);
    }
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-8">
          Orders
        </h1>

        {loading ? (
          <p className="text-gray-600">Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-600">No orders found.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-md border border-[#E5E5E5] overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#F1ECE6]">
                <tr>
                  <th className="p-4 text-sm font-semibold">Order ID</th>
                  <th className="p-4 text-sm font-semibold">Customer</th>
                  <th className="p-4 text-sm font-semibold">Gift Card</th>
                  <th className="p-4 text-sm font-semibold">Amount</th>
                  <th className="p-4 text-sm font-semibold">Status</th>
                  <th className="p-4 text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t border-[#E5E5E5]"
                  >
                    <td className="p-4 text-sm">{order.id}</td>
                    <td className="p-4 text-sm">
                      {order.customerName}
                      <br />
                      <span className="text-gray-500 text-xs">
                        {order.customerEmail}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      {order.giftCardTitle}
                    </td>
                    <td className="p-4 text-sm">
                      ${order.amount}
                    </td>
                    <td className="p-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.paymentStatus === "paid"
                            ? "bg-green-100 text-green-700"
                            : order.paymentStatus === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-4 py-2 font-semibold rounded-full text-xs"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
