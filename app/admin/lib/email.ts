// app/lib/email.ts - CREATE THIS FILE
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!); // ← YOUR KEY HERE

export async function sendGiftCardEmail({
  to,
  customerName,
  amount,
  giftCardCode,
  orderId,
  isAdmin = false,
}: {
  to: string;
  customerName: string;
  amount: number;
  giftCardCode: string;
  orderId?: string;
  isAdmin?: boolean;
}) {
  
  const data = await resend.emails.send({
    from: 'Bethesda Salt Cave <no-reply@bethesdasaltcave.com>', // Domain verified
    to: to, // ← CUSTOMER EMAIL
    subject: isAdmin ? '🔔 New Gift Card Order!' : '🎁 Your Gift Card is Ready!',
    html: `
      <h1>Bethesda Salt Cave Gift Card</h1>
      <p>Hi ${customerName},</p>
      <h2>Your Gift Card Code:</h2>
      <h3 style="color: #D2691E; font-size: 2em;">${giftCardCode}</h3>
      <p>Amount: $${amount}</p>
      ${orderId ? `<p>Order ID: ${orderId}</p>` : ''}
      <hr>
      <p>Thank you for your purchase!</p>
    `,
  });

  console.log('✅ Email sent to:', to);
  return data;
}
