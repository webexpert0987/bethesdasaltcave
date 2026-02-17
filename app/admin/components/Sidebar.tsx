"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Gift Cards", href: "/admin/gift-cards" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Customers", href: "/admin/customers" },
  { name: "Reports", href: "/admin/reports" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
      <nav className="flex flex-col mt-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-6 py-3 hover:bg-gray-100 transition ${
              pathname.startsWith(item.href) ? "bg-gray-200 font-semibold" : "font-medium text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
