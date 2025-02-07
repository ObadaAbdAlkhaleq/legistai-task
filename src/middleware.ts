import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedin = req.cookies.get("isLoggedIn")?.value;
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // If not logged in, redirect to login
  if (!isLoggedin || !token) {
    if (pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If already logged in and trying to access home or login, redirect to dashboard
  if ((pathname === "/" || pathname === "/login") && isLoggedin && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // Allow request to proceed
}

// Apply middleware to specific routes
export const config = {
  matcher: [ "/", "/login", "/dashboard" ], // Paths that should be checked
};
