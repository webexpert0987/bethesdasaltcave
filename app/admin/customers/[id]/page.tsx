"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Customer } from "../../types/customer";
import { getCustomerById } from "../../lib/api";

export default function CustomerDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [customer, setCustomer] =
    useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCustomer() {
      const data = await getCustomerById(id);
      setCustomer(data);
      setLoading(false);
    }

    if (id) loadCustomer();
  }, [id]);

  if (loading) {
    return <div className="p-10">Loading customer...</div>;
  }

  if (!customer) {
    return (
      <div className="p-10 text-red-500">
        Customer not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#E5E5E5]">
        <h1 className="text-3xl font-semibold text-[#1C1C1C]">
          Customer Details
        </h1>

        <div className="mt-6 space-y-4 text-sm">
          <p>
            <strong>ID:</strong> {customer.id}
          </p>
          <p>
            <strong>Name:</strong> {customer.name}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>
          <p>
            <strong>Total Orders:</strong>{" "}
            {customer.totalOrders}
          </p>
          <p>
            <strong>Total Spent:</strong> $
            {customer.totalSpent}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(
              customer.createdAt
            ).toLocaleString()}
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/admin/customers"
            className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block"
          >
            Back to Customers
          </Link>
        </div>
      </div>
    </div>
  );
}
