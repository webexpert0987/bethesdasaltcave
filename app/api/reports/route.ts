import { NextResponse } from "next/server";
import { connectDB } from "@/app/admin/lib/mongodb";
import Order from "@/app/admin/models/Order";

export async function GET() {
  await connectDB();

  /* Only Paid Orders */
  const paidOrders = await Order.find({
    paymentStatus: "paid",
  });

  const totalRevenue = paidOrders.reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const totalOrders = await Order.countDocuments();

  const giftCardsSold = paidOrders.length;

  /* Unique Customers */
  const uniqueCustomers = await Order.aggregate([
    {
      $group: {
        _id: "$customerEmail",
      },
    },
  ]);

  const totalCustomers = uniqueCustomers.length;

  /* Recent Orders (latest 5) */
  const recentOrders = await Order.find()
    .sort({ createdAt: -1 })
    .limit(5);

  return NextResponse.json({
    totalRevenue,
    totalOrders,
    totalCustomers,
    giftCardsSold,
    recentOrders,
  });
}
