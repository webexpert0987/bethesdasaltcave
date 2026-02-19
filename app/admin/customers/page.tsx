"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCustomers } from "../lib/api";

interface Customer {
  _id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  createdAt: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);
  const [copied, setCopied] = useState(false);

  const customersPerPage = 8;

  useEffect(() => {
    async function loadCustomers() {
      const data = await fetchCustomers();
      setCustomers(data);
      setFilteredCustomers(data);
      setLoading(false);
    }
    loadCustomers();
  }, []);

  /* 🔎 Search + Date Filter */
  useEffect(() => {
    let result = customers;

    if (search) {
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (dateFilter) {
      result = result.filter(
        (c) =>
          new Date(c.createdAt).toISOString().split("T")[0] === dateFilter
      );
    }

    setFilteredCustomers(result);
    setCurrentPage(1);
  }, [search, dateFilter, customers]);

  /* 📄 Pagination Logic */
  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredCustomers.length / customersPerPage
  );

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-6">
          Customers
        </h1>

        {/* 🔎 Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search name or email..."
            className="border p-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="date"
            className="border p-2 rounded-lg"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>

        {loading ? (
          <p>Loading customers...</p>
        ) : filteredCustomers.length === 0 ? (
          <p>No customers found.</p>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#F1ECE6]">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Orders</th>
                    <th className="p-4">Total Spent</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentCustomers.map((customer) => (
                    <tr
                      key={customer._id}
                      className="border-t"
                    >
                      <td className="p-4">{customer._id}</td>
                      <td className="p-4">{customer.name}</td>
                      <td className="p-4">{customer.email}</td>
                      <td className="p-4">{customer.totalOrders}</td>
                      <td className="p-4">${customer.totalSpent}</td>
                      <td className="p-4 flex gap-2">
                        <button
                          onClick={() => setSelectedCustomer(customer)}
                          className="border px-3 py-1 rounded text-xs"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 📄 Pagination */}
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(totalPages)].map((_, i) => (
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
          </>
        )}

        {/* 🧾 Customer Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 popup-overlay bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96 relative">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="absolute top-2 right-2 text-red-500"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-4">
                Customer Details
              </h2>

              <p><strong>ID:</strong> {selectedCustomer._id}</p>
              <p><strong>Name:</strong> {selectedCustomer.name}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Total Orders:</strong> {selectedCustomer.totalOrders}</p>
              <p><strong>Total Spent:</strong> ${selectedCustomer.totalSpent}</p>
              <p>
                <strong>Joined:</strong>{" "}
                {new Date(selectedCustomer.createdAt).toLocaleString()}
              </p>

              <button
                onClick={() => {
                  const details = `
Customer ID: ${selectedCustomer._id}
Name: ${selectedCustomer.name}
Email: ${selectedCustomer.email}
Orders: ${selectedCustomer.totalOrders}
Total Spent: $${selectedCustomer.totalSpent}
Joined: ${new Date(selectedCustomer.createdAt).toLocaleString()}
                  `;

                  navigator.clipboard.writeText(details);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="mt-4 w-full bg-primary text-white py-2 rounded-lg"
              >
                {copied ? "Copied ✅" : "Copy Details"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
