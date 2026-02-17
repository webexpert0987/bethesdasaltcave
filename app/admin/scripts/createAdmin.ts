import bcrypt from "bcryptjs";
import { connectDB } from "../lib/mongodb";
import Admin from "../models/Admin";

async function run() {
  await connectDB();

  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@giftcards.com",
    password: hashed,
  });

  console.log("Admin created");
  process.exit();
}

run();
