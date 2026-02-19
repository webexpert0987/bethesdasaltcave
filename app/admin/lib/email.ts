// app/lib/email.ts - CREATE THIS FILE
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

// Log configuration on startup
console.log('📧 Email Configuration:', {
  hasApiKey: !!process.env.NEXT_PUBLIC_RESEND_API_KEY,
  fromEmail: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL,
  adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
});

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
  
  const customerEmailTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D2691E 0%, #8B4513 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .gift-card-code { background: white; border: 2px dashed #D2691E; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px; }
          .code { font-size: 28px; font-weight: bold; color: #D2691E; letter-spacing: 2px; font-family: monospace; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎁 Your Gift Card is Ready!</h1>
          </div>
          <div class="content">
            <p>Hi ${customerName},</p>
            <p>Thank you for your purchase at Bethesda Salt Cave! Your gift card is ready to use.</p>
            
            <div class="gift-card-code">
              <p style="margin: 0; font-size: 14px; color: #666;">Gift Card Code:</p>
              <div class="code">${giftCardCode}</div>
              <p style="margin: 10px 0 0 0; font-size: 18px; color: #333;">Amount: <strong>$${amount.toFixed(2)}</strong></p>
            </div>
            
            <p><strong>How to Redeem:</strong></p>
            <ol>
              <li>Present this code at Bethesda Salt Cave</li>
              <li>Valid for any services or products</li>
              <li>Non-refundable and cannot be exchanged for cash</li>
            </ol>
            
            ${orderId ? `<p style="color: #999; font-size: 12px;">Order ID: ${orderId}</p>` : ''}
            
            <p style="margin-top: 30px;">We look forward to seeing you soon!</p>
            <p><strong>Bethesda Salt Cave</strong><br>
            Your wellness destination</p>
          </div>
          <div class="footer">
            <p>If you have any questions, please contact us at info@bethesdasaltcave.com</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const adminEmailTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; }
          .info-box { background: white; border-left: 4px solid #D2691E; padding: 15px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Gift Card Order</h1>
          </div>
          <div class="content">
            <h2>Order Details</h2>
            <div class="info-box">
              <p><strong>Customer:</strong> ${customerName}</p>
              <p><strong>Email:</strong> ${to}</p>
              <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
              <p><strong>Gift Card Code:</strong> <code>${giftCardCode}</code></p>
              ${orderId ? `<p><strong>Order ID:</strong> ${orderId}</p>` : ''}
            </div>
            <p>Customer has been sent their gift card code via email.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    console.log('📤 Attempting to send email:', {
      to,
      from: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL || 'Bethesda Salt Cave <onboarding@resend.dev>',
      isAdmin,
    });

    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL || 'Bethesda Salt Cave <onboarding@resend.dev>',
      to: to,
      subject: isAdmin ? '🔔 New Gift Card Order!' : '🎁 Your Bethesda Salt Cave Gift Card',
      html: isAdmin ? adminEmailTemplate : customerEmailTemplate,
    });

    console.log('✅ Email sent successfully to:', to);
    console.log('📧 Resend response:', data);
    return data;
  } catch (error: any) {
    console.error('❌ Email sending failed:', {
      error: error.message,
      statusCode: error.statusCode,
      name: error.name,
      to,
    });
    throw error;
  }
}
