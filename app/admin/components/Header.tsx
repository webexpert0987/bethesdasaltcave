"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.png"; // Replace with your admin/logo image
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const router = useRouter(); 

  const handleLogout = () => {
  // Remove token
  localStorage.removeItem("token");

  // Optional: clear any other user data
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  // Redirect to login page
  router.push("/login");
};

  // Load user name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    console.log("Header: Loading userName from localStorage:", storedName);
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  
  console.log("Header: Current userName state:", userName);

  // Get first letter of name for avatar
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "U";

  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <Link href="/admin/dashboard" className="flex items-center">
        <Image src={Logo} alt="Admin Logo" width={40} height={40} />
        <span className="ml-3 text-xl font-semibold text-gray-800">Admin Panel</span>
      </Link>

      {/* Right: Profile */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          <span className="font-medium text-gray-700">{userName || "User"}</span>
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
            {userInitial}
          </div>
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
            <Link
              href="/admin/settings"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setDropdownOpen(false)}
            >
              Profile
            </Link>    
            <button
          className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
                  </div>
                )}
              </div>
    </header>
  );
}
