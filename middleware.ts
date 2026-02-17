import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("adminToken")?.value;

  // If no token, redirect to admin login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Protect all /admin routes
};
