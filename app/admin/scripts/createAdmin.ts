import bcrypt from "bcryptjs";
import { connectDB } from "../lib/mongodb";
import Admin from "../models/Admin";

async function run() {
  await connectDB();

  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    name: "Admin User",
    email: "admin@giftcards.com",
    password: hashed,
  });

  console.log("Admin created successfully");
  console.log("Email: admin@giftcards.com");
  console.log("Password: admin123");
  process.exit();
}

run();
