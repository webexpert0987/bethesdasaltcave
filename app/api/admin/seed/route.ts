import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import Admin from "@/app/admin/models/Admin";
import bcrypt from "bcryptjs";

export async function GET() {
  await connectDB();

  // check if admin already exists
  const existing = await Admin.findOne({ email: "admin@bethesda.com" });
  if (existing) {
    return NextResponse.json({ message: "Admin already exists" });
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    name: "Admin User",
    email: "admin@bethesda.com",
    password: hashedPassword,
  });

  return NextResponse.json({
    message: "Admin created successfully ✅",
    email: "admin@bethesda.com",
    password: "admin123",
  });
}
