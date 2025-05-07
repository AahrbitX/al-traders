import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain === "bullsbrand") {
    const url = request.nextUrl.clone();
    url.pathname = "/brand"; // Route to your brand route
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|api|images|static|.*\\.(png|jpg|jpeg|gif|svg|webp)).*)",
  ],
};
