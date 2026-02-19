"use client";

import { useEffect, useState, useMemo } from "react";
import { jsPDF } from "jspdf";

interface OrderType {
  _id: string;
  customerName: string;
  customerEmail: string;
  giftCardTitle: string;
  amount: number;
  paymentStatus: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);

  const [searchTitle, setSearchTitle] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    }
    loadOrders();
  }, []);

  // ✅ Filter Logic
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesTitle = order.giftCardTitle
        .toLowerCase()
        .includes(searchTitle.toLowerCase());

      const matchesDate = filterDate
        ? new Date(order.createdAt).toISOString().split("T")[0] === filterDate
        : true;

      return matchesTitle && matchesDate;
    });
  }, [orders, searchTitle, filterDate]);

  // ✅ Pagination Logic
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage
  );

  const downloadPDF = (order: OrderType) => {
    const doc = new jsPDF();
    doc.text("Order Details", 20, 20);
    doc.text(`Order ID: ${order._id}`, 20, 40);
    doc.text(`Customer: ${order.customerName}`, 20, 50);
    doc.text(`Email: ${order.customerEmail}`, 20, 60);
    doc.text(`Gift Card: ${order.giftCardTitle}`, 20, 70);
    doc.text(`Amount: $${order.amount}`, 20, 80);
    doc.text(`Status: ${order.paymentStatus}`, 20, 90);
    doc.text(
      `Date: ${new Date(order.createdAt).toLocaleString()}`,
      20,
      100
    );
    doc.save(`order-${order._id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Orders</h1>

        {/* 🔎 Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Gift Title"
            value={searchTitle}
            onChange={(e) => {
              setSearchTitle(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded w-64"
          />

          <input
            type="date"
            value={filterDate}
            onChange={(e) => {
              setFilterDate(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded"
          />
        </div>

        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#F1ECE6]">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Title</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedOrders.map((order, index) => (
                    <tr key={order._id || index} className="border-t">
                      <td className="p-4">{order._id}</td>
                      <td className="p-4">{order.customerName}</td>
                      <td className="p-4">{order.giftCardTitle}</td>
                      <td className="p-4">${order.amount}</td>
                      <td className="p-4">{order.paymentStatus}</td>
                      <td className="p-4">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 flex gap-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-4 py-2 font-semibold rounded-full text-xs"
                        >
                          View
                        </button>
                        
                        <button
                          onClick={() => downloadPDF(order)}                           
                          className="border-2 border-primary text-primary bg-primary-dar hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-4 py-2 font-semibold rounded-full text-xs"
                        >
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 📄 Pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            {/* ✅ Popup Modal */}
{selectedOrder && (
  <div className="fixed inset-0 popup-overlay bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-96 relative shadow-xl">
      <button
        onClick={() => setSelectedOrder(null)}
        className="absolute top-2 right-2 text-red-500 text-lg"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">Order Details</h2>

      <p><strong>Order ID:</strong> {selectedOrder._id}</p>
      <p><strong>Name:</strong> {selectedOrder.customerName}</p>
      <p><strong>Email:</strong> {selectedOrder.customerEmail}</p>
      <p><strong>Gift Card:</strong> {selectedOrder.giftCardTitle}</p>
      <p><strong>Amount:</strong> ${selectedOrder.amount}</p>
      <p><strong>Status:</strong> {selectedOrder.paymentStatus}</p>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(selectedOrder.createdAt).toLocaleString()}
      </p>

      {/* ✅ Copy Button */}
      <button
        onClick={() => {
          const details = `
Order ID: ${selectedOrder._id}
Name: ${selectedOrder.customerName}
Email: ${selectedOrder.customerEmail}
Gift Card: ${selectedOrder.giftCardTitle}
Amount: $${selectedOrder.amount}
Status: ${selectedOrder.paymentStatus}
Date: ${new Date(selectedOrder.createdAt).toLocaleString()}
          `;

          navigator.clipboard.writeText(details);
          alert("Order details copied!");
        }}
        className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
      >
        Copy Details
      </button>
    </div>
  </div>
)}

          </>
        )}
      </div>
    </div>
  );
}
