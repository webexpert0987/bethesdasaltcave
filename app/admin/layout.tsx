import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F8F6F3]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
