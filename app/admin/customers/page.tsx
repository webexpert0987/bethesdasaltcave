"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Customer } from "../types/customer";
import { fetchCustomers } from "../lib/api";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomers() {
      const data = await fetchCustomers();
      setCustomers(data);
      setLoading(false);
    }
    loadCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-8">
          Customers
        </h1>

        {loading ? (
          <p className="text-gray-600">Loading customers...</p>
        ) : customers.length === 0 ? (
          <p className="text-gray-600">No customers found.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-md border border-[#E5E5E5] overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#F1ECE6]">
                <tr>
                  <th className="p-4 text-sm font-semibold">ID</th>
                  <th className="p-4 text-sm font-semibold">Name</th>
                  <th className="p-4 text-sm font-semibold">Email</th>
                  <th className="p-4 text-sm font-semibold">
                    Orders
                  </th>
                  <th className="p-4 text-sm font-semibold">
                    Total Spent
                  </th>
                  <th className="p-4 text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-t border-[#E5E5E5]"
                  >
                    <td className="p-4 text-sm">
                      {customer.id}
                    </td>
                    <td className="p-4 text-sm">
                      {customer.name}
                    </td>
                    <td className="p-4 text-sm">
                      {customer.email}
                    </td>
                    <td className="p-4 text-sm">
                      {customer.totalOrders}
                    </td>
                    <td className="p-4 text-sm">
                      ${customer.totalSpent}
                    </td>
                    <td className="p-4 text-sm">
                      <Link
                        href={`/admin/customers/${customer.id}`}
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
