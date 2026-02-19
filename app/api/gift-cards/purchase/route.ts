// app/api/gift-cards/purchase/route.ts
import connectToDatabase, { Order } from '@/app/admin/lib/db';
import { sendGiftCardEmail } from '@/app/admin/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Connect to database
    await connectToDatabase();

    const { customerEmail, customerName, amount, giftCardCode } = await request.json();

    // ✅ Now Order works
    const order = await Order.create({
      customerEmail,
      customerName,
      amount,
      giftCardCode,
      paymentStatus: "paid",
    });

    // Send customer email
    await sendGiftCardEmail({
      to: customerEmail,
      customerName,
      amount,
      giftCardCode,
      orderId: order._id.toString(),
    });

    // Send admin notification
    await sendGiftCardEmail({
      to: "admin@yourdomain.com", // your admin email
      customerName,
      amount,
      giftCardCode,
      isAdmin: true,
    });

    return NextResponse.json({ 
      success: true, 
      orderId: order._id,
      giftCardCode 
    });
  } catch (error) {
    console.error("Purchase error:", error);
    return NextResponse.json({ error: "Purchase failed" }, { status: 500 });
  }
}
