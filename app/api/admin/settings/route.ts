import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import Admin from "@/app/admin/models/Admin";
import bcrypt from "bcryptjs";

export async function GET(req: Request) {
  try {
    await connectDB();
    // Prioritize bethesda admin, fallback to any admin
    let admin = await Admin.findOne({ email: "admin@bethesda.com" }).select("name email");
    if (!admin) {
      admin = await Admin.findOne().select("name email");
    }
    
    if (!admin) {
      return NextResponse.json({ success: false, error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      admin: {
        name: admin.name,
        email: admin.email
      }
    });
  } catch (err: any) {
    console.error("Settings fetch error:", err);
    return NextResponse.json({ 
      success: false, 
      error: err.message || "Failed to fetch settings" 
    }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    // Find the admin by email "admin@bethesda.com" first, then fallback to any admin
    let admin = await Admin.findOne({ email: "admin@bethesda.com" });
    if (!admin) {
      admin = await Admin.findOne();
    }
    
    if (!admin) {
      return NextResponse.json({ success: false, error: "Admin not found" }, { status: 404 });
    }

    // Build update data
    const updateData: any = {};
    
    // Only update fields that are actually provided
    if (name && name.trim() !== "") {
      updateData.name = name;
    }
    
    // Only update email if provided and different
    if (email && email.trim() !== "" && email !== admin.email) {
      // Check if email already exists
      const emailExists = await Admin.findOne({ email, _id: { $ne: admin._id } });
      if (emailExists) {
        return NextResponse.json({ 
          success: false,
          error: "Email already in use"
        }, { status: 400 });
      }
      updateData.email = email;
    }
    
    // Only update password if provided
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
      console.log("Password hash created:", updateData.password.substring(0, 20) + "...");
    }

    // If nothing to update, return success
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ 
        success: true,
        message: "No changes provided"
      });
    }

    console.log("Update data:", Object.keys(updateData));

    // Use raw MongoDB collection to update, bypassing Mongoose validators
    const collection = Admin.collection;
    const result = await collection.updateOne(
      { _id: admin._id },
      { $set: updateData }
    );

    console.log("Update result:", { matchedCount: result.matchedCount, modifiedCount: result.modifiedCount });

    if (result.modifiedCount === 0) {
      return NextResponse.json({ 
        success: false,
        error: "Failed to update admin"
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Settings updated successfully"
    });
  } catch (err: any) {
    console.error("Settings update error:", err);
    return NextResponse.json({ 
      success: false, 
      error: err.message || "Failed to update settings" 
    }, { status: 500 });
  }
}
