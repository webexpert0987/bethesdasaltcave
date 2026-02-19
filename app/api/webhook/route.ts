import Stripe from "stripe";
import { NextResponse } from "next/server";
import connectMongo from "@/app/admin/lib/mongodb";
import { Order } from "@/app/admin/models/Order";
import { sendGiftCardEmail } from "@/app/admin/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

// Generate a unique gift card code
function generateGiftCardCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 12; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
    if ((i + 1) % 4 === 0 && i < 11) code += '-';
  }
  return code;
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.log("❌ Webhook signature verification failed:", err);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    await connectMongo();

    const giftCardCode = generateGiftCardCode();
    const customerName = session.customer_details?.name || "Unknown";
    const customerEmail = session.customer_details?.email || "Unknown";
    const giftCardTitle = session.metadata?.giftCardTitle || "Gift Card";
    const amount = Number(session.amount_total! / 100);

    // Save order to database
    const order = new Order({
      customerName,
      customerEmail,
      giftCardTitle,
      amount,
      giftCardCode,
      paymentStatus: "paid",
    });

    await order.save();

    console.log("✅ Order saved:", order._id);

    // Send email to customer
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

    // Send email to admin
    try {
      const adminEmail = process.env.ADMIN_EMAIL || "admin@bethesdasaltcave.com";
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
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
