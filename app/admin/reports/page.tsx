"use client";

import { useEffect, useState, useMemo } from "react";
import { fetchOrders, fetchCustomers } from "../lib/api";
import { Order } from "../types/order";
import { Customer } from "../types/customer";

export default function ReportsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    async function loadReports() {
      try {
        const ordersData = await fetchOrders();
        const customersData = await fetchCustomers();

        setOrders(ordersData || []);
        setCustomers(customersData || []);
      } catch (error) {
        console.error("Reports fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  /* ---------------- DATE FILTER ---------------- */

  const filteredOrders = useMemo(() => {
    if (dateFilter === "all") return orders;

    const now = new Date();

    return orders.filter((order) => {
      const orderDate = new Date(order.createdAt);

      if (dateFilter === "today") {
        return orderDate.toDateString() === now.toDateString();
      }

      if (dateFilter === "7days") {
        const last7 = new Date();
        last7.setDate(now.getDate() - 7);
        return orderDate >= last7;
      }

      if (dateFilter === "30days") {
        const last30 = new Date();
        last30.setDate(now.getDate() - 30);
        return orderDate >= last30;
      }

      return true;
    });
  }, [orders, dateFilter]);

  /* ---------------- CALCULATIONS ---------------- */

  const paidOrders = filteredOrders.filter(
    (o) => o.paymentStatus === "paid"
  );

  const totalRevenue = paidOrders.reduce(
    (sum, o) => sum + Number(o.amount),
    0
  );

  const totalOrders = filteredOrders.length;

  const uniqueCustomerEmails = new Set(
    paidOrders.map((o) => o.customerEmail)
  );

  const totalCustomers = uniqueCustomerEmails.size;

  const giftCardsSold = paidOrders.length;

  const recentOrders = [...filteredOrders]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  const topCustomers = [...customers]
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5);

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="p-10 text-gray-600">
        Loading reports...
      </div>
    );
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6">
          Reports & Analytics
        </h1>

        {/* Date Filter */}
        <div className="mb-8">
          <select
            className="border p-2 rounded-lg"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value={`$${totalRevenue}`} />
          <StatCard title="Total Orders" value={totalOrders} />
          <StatCard title="Total Customers" value={totalCustomers} />
          <StatCard title="Gift Cards Sold" value={giftCardsSold} />
        </div>

        {/* Recent Orders */}
        <div className="mt-12 bg-white rounded-2xl shadow-md border overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">
              Recent Orders
            </h3>
          </div>

          <table className="w-full text-left">
            <thead className="bg-[#F1ECE6]">
              <tr>
                <th className="p-4 text-sm font-semibold">Order ID</th>
                <th className="p-4 text-sm font-semibold">Customer</th>
                <th className="p-4 text-sm font-semibold">Amount</th>
                <th className="p-4 text-sm font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="p-4 text-sm">{order._id}</td>
                  <td className="p-4 text-sm">{order.customerName}</td>
                  <td className="p-4 text-sm">${order.amount}</td>
                  <td className="p-4 text-sm">{order.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Customers */}
        <div className="mt-12 bg-white rounded-2xl shadow-md border overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">
              Top Customers
            </h3>
          </div>

          <table className="w-full text-left">
            <thead className="bg-[#F1ECE6]">
              <tr>
                <th className="p-4 text-sm font-semibold">Name</th>
                <th className="p-4 text-sm font-semibold">Email</th>
                <th className="p-4 text-sm font-semibold">Orders</th>
                <th className="p-4 text-sm font-semibold">Total Spent</th>
              </tr>
            </thead>

            <tbody>
              {topCustomers.map((customer) => (
                <tr key={customer._id} className="border-t">
                  <td className="p-4 text-sm">{customer.name}</td>
                  <td className="p-4 text-sm">{customer.email}</td>
                  <td className="p-4 text-sm">{customer.totalOrders}</td>
                  <td className="p-4 text-sm">${customer.totalSpent}</td>
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
function StatCard({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-semibold mt-2">
        {value}
      </h2>
    </div>
  );
}
