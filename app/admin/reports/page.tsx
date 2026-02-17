"use client";

import { useEffect, useState } from "react";
import { fetchOrders } from "../lib/api";
import { fetchCustomers } from "../lib/api";
import { Order } from "../types/order";
import  {Customer} from "../types/customer";

export default function ReportsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReports() {
      const ordersData = await fetchOrders();
      const customersData = await fetchCustomers();

      setOrders(ordersData);
      setCustomers(customersData);
      setLoading(false);
    }

    loadReports();
  }, []);

  /* -------------------------------------------------------
     CALCULATIONS
  ------------------------------------------------------- */

  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.amount, 0);

  const totalOrders = orders.length;
  const totalCustomers = customers.length;

  const giftCardsSold = orders.filter(
    (o) => o.paymentStatus === "paid"
  ).length;

  if (loading) {
    return (
      <div className="p-10 text-gray-600">
        Loading reports...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-10">
          Reports & Analytics
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Revenue */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E5E5]">
            <p className="text-sm text-gray-500">
              Total Revenue
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              ${totalRevenue}
            </h2>
          </div>

          {/* Orders */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E5E5]">
            <p className="text-sm text-gray-500">
              Total Orders
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              {totalOrders}
            </h2>
          </div>

          {/* Customers */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E5E5]">
            <p className="text-sm text-gray-500">
              Total Customers
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              {totalCustomers}
            </h2>
          </div>

          {/* Gift Cards Sold */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E5E5]">
            <p className="text-sm text-gray-500">
              Gift Cards Sold
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              {giftCardsSold}
            </h2>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-12 bg-white rounded-2xl shadow-md border border-[#E5E5E5] overflow-hidden">
          <div className="p-6 border-b border-[#E5E5E5]">
            <h3 className="text-xl font-semibold">
              Recent Orders
            </h3>
          </div>

          <table className="w-full text-left">
            <thead className="bg-[#F1ECE6]">
              <tr>
                <th className="p-4 text-sm font-semibold">
                  Order ID
                </th>
                <th className="p-4 text-sm font-semibold">
                  Customer
                </th>
                <th className="p-4 text-sm font-semibold">
                  Amount
                </th>
                <th className="p-4 text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-[#E5E5E5]"
                >
                  <td className="p-4 text-sm">
                    {order.id}
                  </td>
                  <td className="p-4 text-sm">
                    {order.customerName}
                  </td>
                  <td className="p-4 text-sm">
                    ${order.amount}
                  </td>
                  <td className="p-4 text-sm">
                    {order.paymentStatus}
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
