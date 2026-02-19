import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {});

export async function POST(req: Request) {
  const { giftTitle, amount, billingName, billingEmail } = await req.json();

  // create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: giftTitle },
          unit_amount: amount * 100, // in cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.get("origin")}/checkout`,
    metadata: {
      giftCardTitle: giftTitle,
      customerName: billingName,
      customerEmail: billingEmail,
    },
  });

  return NextResponse.json({ url: session.url });
}