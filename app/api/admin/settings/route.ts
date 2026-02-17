import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import Admin from "@/app/admin/models/Admin";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    const admin = await Admin.findOne();
    if (!admin) {
      return NextResponse.json({ success: false, error: "Admin not found" }, { status: 404 });
    }

    admin.name = name || admin.name;
    admin.email = email || admin.email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
    }

    await admin.save();

    return NextResponse.json({ success: true, admin });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to update settings" }, { status: 500 });
  }
}
