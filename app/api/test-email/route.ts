import { NextResponse } from "next/server";
import { sendGiftCardEmail } from "@/app/admin/lib/email";

export async function GET() {
  try {
    console.log("🧪 Testing email configuration...");
    console.log("NEXT_PUBLIC_RESEND_API_KEY exists:", !!process.env.NEXT_PUBLIC_RESEND_API_KEY);
    console.log("NEXT_PUBLIC_RESEND_FROM_EMAIL:", process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL);
    
    // Test email send
    const result = await sendGiftCardEmail({
      to: "test@example.com", // Change this to your actual email
      customerName: "Test Customer",
      amount: 50,
      giftCardCode: "TEST-1234-5678",
      orderId: "test-order-123",
      isAdmin: false,
    });
    
    console.log("✅ Email test result:", result);
    
    return NextResponse.json({ 
      success: true, 
      message: "Test email sent successfully",
      result 
    });
  } catch (error: any) {
    console.error("❌ Email test failed:", error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: error
    }, { status: 500 });
  }
}
