"use client";

import { useEffect, useState, useMemo } from "react";
import { fetchOrders, fetchCustomers } from "../lib/api";
import { Order } from "../types/order";
import { Customer } from "../types/customer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


interface ReportsData {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  giftCardsSold: number;
  recentOrders: Order[];
}

export default function ReportsPage() {
  const [reportsData, setReportsData] = useState<ReportsData | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

/* ---------------- EFFECT ---------------- */

useEffect(() => {
  async function loadReports() {
    try {
      const res = await fetch("/api/reports", {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch reports");

      const data = await res.json();
      setReportsData(data);

      const ordersData = await fetchOrders();
      setOrders(ordersData || []);
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
  let filtered = [...orders];

  if (dateFilter !== "all") {
    const now = new Date();

    filtered = filtered.filter((order) => {
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
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59);

    filtered = filtered.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= start && orderDate <= end;
    });
  }

  return filtered;
}, [orders, dateFilter, startDate, endDate]);


/* ---------------- CALCULATIONS ---------------- */

const paidOrders =
  dateFilter === "all"
    ? reportsData?.recentOrders || []
    : filteredOrders.filter((o) => o.paymentStatus === "paid");

const totalRevenue =
  dateFilter === "all"
    ? reportsData?.totalRevenue || 0
    : paidOrders.reduce((sum, o) => {
        const value = Number(String(o.amount).replace(/[^0-9.-]/g, ""));
        return Number.isNaN(value) ? sum : sum + value;
      }, 0);

const totalOrdersCount =
  dateFilter === "all"
    ? reportsData?.totalOrders || 0
    : filteredOrders.length;

const totalCustomersCount =
  dateFilter === "all"
    ? reportsData?.totalCustomers || 0
    : new Set(paidOrders.map((o) => o.customerEmail)).size;

const giftCardsSoldCount =
  dateFilter === "all"
    ? reportsData?.giftCardsSold || 0
    : paidOrders.length;

const recentOrders = [...filteredOrders]
  .sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  )
  .slice(0, 5);


/* ---------------- MONTHLY REVENUE ---------------- */

const monthlyRevenue = useMemo(() => {
  const months: Record<string, number> = {};

  filteredOrders.forEach((order) => {
    if (order.paymentStatus !== "paid") return;

    const date = new Date(order.createdAt);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    const amount = Number(String(order.amount).replace(/[^0-9.-]/g, ""));

    months[key] = (months[key] || 0) + amount;
  });

  return Object.entries(months).map(([month, revenue]) => ({
    month,
    revenue,
  }));
}, [filteredOrders]);


/* ---------------- GROWTH DATA ---------------- */

const growthData = useMemo(() => {
  const now = new Date();
  const last7 = new Date();
  last7.setDate(now.getDate() - 7);

  const prev14 = new Date();
  prev14.setDate(now.getDate() - 14);

  let last7Revenue = 0;
  let prev7Revenue = 0;

  orders.forEach((order) => {
    if (order.paymentStatus !== "paid") return;

    const date = new Date(order.createdAt);
    const amount = Number(String(order.amount).replace(/[^0-9.-]/g, ""));

    if (date >= last7) {
      last7Revenue += amount;
    } else if (date >= prev14 && date < last7) {
      prev7Revenue += amount;
    }
  });

  const growth =
    prev7Revenue === 0
      ? 100
      : ((last7Revenue - prev7Revenue) / prev7Revenue) * 100;

  return growth.toFixed(2);
}, [orders]);


/* ---------------- REVENUE BY GIFT CARD ---------------- */

const revenueByGiftCard = useMemo(() => {
  const map: Record<string, number> = {};

  filteredOrders.forEach((order) => {
    if (order.paymentStatus !== "paid") return;

    const amount = Number(String(order.amount).replace(/[^0-9.-]/g, ""));
    map[order.giftCardTitle] =
      (map[order.giftCardTitle] || 0) + amount;
  });

  return Object.entries(map).map(([title, revenue]) => ({
    title,
    revenue,
  }));
}, [filteredOrders]);


/* ---------------- EXPORT FUNCTIONS ---------------- */

const exportCSV = () => {
  const headers = ["Order ID", "Customer", "Amount", "Status"];
  const rows = filteredOrders.map((o) => [
    o._id,
    o.customerName,
    o.amount,
    o.paymentStatus,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const link = document.createElement("a");
  link.href = encodeURI(csvContent);
  link.download = "reports.csv";
  link.click();
};

const exportPDF = () => {
  const doc = new jsPDF();

  doc.text("Reports", 14, 15);

  autoTable(doc, {
    startY: 20,
    head: [["Order ID", "Customer", "Amount", "Status"]],
    body: filteredOrders.map((o) => [
      o._id,
      o.customerName,
      o.amount,
      o.paymentStatus,
    ]),
  });

  doc.save("reports.pdf");
};


/* ---------------- TOP CUSTOMERS ---------------- */

const topCustomers = useMemo(() => {
  const customerMap: Record<
    string,
    {
      name: string;
      email: string;
      totalSpent: number;
      totalOrders: number;
    }
  > = {};

  filteredOrders.forEach((order) => {
    if (!customerMap[order.customerEmail]) {
      customerMap[order.customerEmail] = {
        name: order.customerName,
        email: order.customerEmail,
        totalSpent: 0,
        totalOrders: 0,
      };
    }

    const amount = Number(
      String(order.amount).replace(/[^0-9.-]/g, "")
    );

    customerMap[order.customerEmail].totalSpent += amount;
    customerMap[order.customerEmail].totalOrders += 1;
  });

  return Object.values(customerMap)
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5);
}, [filteredOrders]);



/* ---------------- LOADING ---------------- */

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
        <h1 className="text-4xl font-semibold mb-6">Reports & Analytics</h1>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

  {/* 1️⃣ Monthly Revenue Chart */}
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-6">Monthly Revenue</h3>

    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={monthlyRevenue}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#2c396b" />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* 2️⃣ 7 Day Growth */}
  <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
    <h3 className="text-xl font-semibold mb-4">7 Day Growth</h3>
    <div className="text-4xl font-bold text-[#2c396b]">
      {growthData}%
    </div>
  </div>

  {/* 3️⃣ Revenue by Gift Card */}
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h3 className="text-xl font-semibold mb-6">
      Revenue by Gift Card
    </h3>

    <div className="space-y-2 max-h-[250px] overflow-y-auto">
      {revenueByGiftCard.map((item, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b text-sm"
        >
          <span className="truncate">{item.title}</span>
          <span className="font-medium">
            ${item.revenue.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  </div>

</div>

{/* Export Button Below */}
<div className="mt-6 flex justify-end gap-4">
  <button
    onClick={exportCSV}
    className="bg-black text-white px-6 py-2 rounded-lg"
  >
    Export CSV
  </button>
</div>





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
          <StatCard title="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} />
          <StatCard title="Total Orders" value={totalOrdersCount} />
          <StatCard title="Total Customers" value={totalCustomersCount} />
          <StatCard title="Gift Cards Sold" value={giftCardsSoldCount} />
        </div>

        {/* Recent Orders */}
        <div className="mt-12 bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Recent Orders</h3>
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
              {recentOrders.map((order, index) => (
                <tr
                  key={order._id ? `${order._id}-${index}` : `order-${index}`}
                  className="border-t"
                >
                  <td className="p-4 text-sm">{order._id}</td>
                  <td className="p-4 text-sm">{order.customerName}</td>
                  <td className="p-4 text-sm">
                    ${Number(String(order.amount).replace(/[^0-9.-]/g, "")).toFixed(2)}
                  </td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
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

        {/* Top Customers */}
        <div className="mt-12 bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Top Customers</h3>
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
              {topCustomers.map((customer, index) => (
                <tr key={`${customer.email}-${index}`} className="border-t">
                  <td className="p-4 text-sm">{customer.name}</td>
                  <td className="p-4 text-sm">{customer.email}</td>
                  <td className="p-4 text-sm">{customer.totalOrders}</td>
                  <td className="p-4 text-sm">${customer.totalSpent.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 🆕 FIXED: Proper TypeScript typing for StatCard
interface StatCardProps {
  title: string;
  value: string | number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-semibold mt-2">{value}</h2>
    </div>
  );
}
