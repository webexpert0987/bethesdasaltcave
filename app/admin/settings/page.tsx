"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "",
    confirmPassword: "",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  /* -------------------------------------------------------
     HANDLE INPUT CHANGE
  ------------------------------------------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* -------------------------------------------------------
     HANDLE SAVE
  ------------------------------------------------------- */

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1️⃣ Check password match first
  if (form.password && form.password !== form.confirmPassword) {
    setMessage("Passwords do not match.");
    return;
  }

  setSaving(true);
  setMessage("");

  try {
    // 2️⃣ Call API to update admin
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password, // only if filled
      }),
    });

    const data = await res.json();

    if (!data.success) throw new Error(data.error || "Failed to update");

    setMessage("Settings updated successfully.");
    setForm((prev) => ({ ...prev, password: "", confirmPassword: "" })); // clear password fields
  } catch (err: any) {
    console.error(err);
    setMessage(err.message || "Something went wrong.");
  } finally {
    setSaving(false);
  }
};



  return (
    <div className="min-h-screen bg-[#F8F6F3] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#E5E5E5]">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-[#1C1C1C]">
          Admin Settings
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Manage your profile and account settings.
        </p>

        {/* Message */}
        {message && (
          <div className="mt-4 text-sm text-green-600">
            {message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block text-white"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>

            <button
              type="button"
              onClick={() =>
                setForm({
                  name: "Admin User",
                  email: "admin@example.com",
                  password: "",
                  confirmPassword: "",
                })
              }
              className="border-2 border-primary text-primary hover:bg-primary-dark hover:!text-white hover:border-primary-dark transition-all duration-300 px-12 py-5 font-semibold rounded-full inline-block"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
