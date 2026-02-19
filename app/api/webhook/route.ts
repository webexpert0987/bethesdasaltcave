import Stripe from "stripe";
import { NextResponse } from "next/server";
import connectMongo from "@/app/admin/lib/mongodb";
import Order from "@/app/admin/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.log(err);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    await connectMongo();

    const order = new Order({
      customerName: session.customer_details?.name || "Unknown",
      customerEmail: session.customer_details?.email || "Unknown",
      giftCardTitle: session.metadata?.giftCardTitle || "Unknown",
      amount: Number(session.amount_total! / 100),
      paymentStatus: "paid",
    });

    await order.save();
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
