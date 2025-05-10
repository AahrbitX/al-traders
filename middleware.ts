import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];
  const url = request.nextUrl.clone();

  // Only rewrite root-level routes (avoid static files or external requests)
  if (subdomain === "bullsbrand" && !url.pathname.startsWith("/brand")) {
    url.pathname = `/brand${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|api|images|static|.*\\.(?:png|jpg|jpeg|gif|svg|webp)).*)",
  ],
};
