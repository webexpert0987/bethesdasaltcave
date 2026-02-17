"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🟢 Login button clicked");
    console.log("📧 Email:", email);
    console.log("🔒 Password:", password);

    setLoading(true);
    setError("");

    try {
      console.log("📡 Sending request to /api/admin/login");

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("📥 Response status:", res.status);

      const data = await res.json();
      console.log("📦 Response data:", data);

      if (!res.ok) {
        setError(data.error || data.message || "Login failed");
        setLoading(false);
        return;
      }

      console.log("✅ Login success");


      console.log("🍪 Token saved in cookie");

      // Redirect dashboard

      router.push("/admin/dashboard");
      router.refresh(); // important

    } catch (err) {
      console.error("🔥 Login error:", err);
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F3] px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-gray-200">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-[#1C1C1C]">
          Admin Login
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Login to manage gift cards dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="admin@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-800 transition-all duration-300 text-white py-3 rounded-lg font-medium"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
