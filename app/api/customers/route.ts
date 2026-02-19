import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import Order from "@/app/admin/models/Order";

export async function GET() {
  await connectDB();

  const orders = await Order.find();

  const customerMap = new Map();

  orders.forEach((order) => {
    const email = order.customerEmail;

    if (!customerMap.has(email)) {
      customerMap.set(email, {
        _id: email,
        name: order.customerName,
        email: order.customerEmail,
        totalOrders: 1,
        totalSpent: order.amount,
        createdAt: order.createdAt,
      });
    } else {
      const existing = customerMap.get(email);
      existing.totalOrders += 1;
      existing.totalSpent += order.amount;
    }
  });

  return NextResponse.json(Array.from(customerMap.values()));
}
