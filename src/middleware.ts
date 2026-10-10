import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";

  // If traffic comes through the vercel.app domain, permanently redirect (301) to official custom domain
  if (host.includes("vercel.app")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.sampangroup.com.bd";
    url.port = "";

    const response = NextResponse.redirect(url, 301);
    // Explicitly add noindex header as an extra safeguard
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, PDFs, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|pdfs/|videos/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
