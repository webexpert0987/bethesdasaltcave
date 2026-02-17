import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb"; // MongoDB connection

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Check fields
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    // Connect DB
    const client = await clientPromise;
    const db = client.db("bethesdasaltcave");

    // Find admin
    const admin = await db
      .collection("admins")
      .findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
