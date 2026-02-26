import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

//? This function can be marked `async` if using `await` inside
export function proxy(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/(DashboardLayout)/:path*"],
  // matcher: "/dashboard/:path*",
};
