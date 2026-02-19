import { NextResponse } from "next/server";
import connectMongo from "@/app/admin/lib/mongodb";
import Order from "@/app/admin/models/Order"; // Mongoose model for orders
import { OrderType } from "@/app/admin/types/order";

export async function POST(req: Request) {
  try {
    await connectMongo(); // ensure db connected
    const { customerName, customerEmail, giftCardTitle, amount, paymentStatus } = await req.json();

    const order = new Order({
      customerName,
      customerEmail,
      giftCardTitle,
      amount,
      paymentStatus,
    });

    await order.save();

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to save order" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongo();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function fetchOrders(): Promise<OrderType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`);
  return res.json(); // TS now knows it's OrderType[]
}