// app/api/gift-cards/purchase/route.ts
import connectMongo from '@/app/admin/lib/mongodb';
import { sendGiftCardEmail } from '@/app/admin/lib/email';
import { NextResponse } from 'next/server';
import { Order } from '@/app/admin/models/Order';

export async function POST(request: Request) {
  try {
    // Connect to database
    await connectMongo();

    const { customerEmail, customerName, amount, giftCardCode, giftCardTitle } = await request.json();

    // Save order to database
    const order = new Order({
      customerEmail,
      customerName,
      giftCardTitle: giftCardTitle || "Gift Card",
      amount,
      giftCardCode,
      paymentStatus: "paid",
    });

    await order.save();

    console.log("✅ Order saved:", order._id);

    // Send customer email
    try {
      await sendGiftCardEmail({
        to: customerEmail,
        customerName,
        amount,
        giftCardCode,
        orderId: order._id.toString(),
        isAdmin: false,
      });
      console.log("✅ Customer email sent to:", customerEmail);
    } catch (emailError) {
      console.error("❌ Failed to send customer email:", emailError);
    }

    // Send admin notification
    try {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@bethesdasaltcave.com";
      await sendGiftCardEmail({
        to: adminEmail,
        customerName,
        amount,
        giftCardCode,
        orderId: order._id.toString(),
        isAdmin: true,
      });
      console.log("✅ Admin email sent to:", adminEmail);
    } catch (emailError) {
      console.error("❌ Failed to send admin email:", emailError);
    }

    return NextResponse.json({ 
      success: true, 
      orderId: order._id,
      giftCardCode 
    });
  } catch (error) {
    console.error("❌ Purchase error:", error);
    return NextResponse.json({ error: "Purchase failed" }, { status: 500 });
  }
}

