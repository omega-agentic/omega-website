import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Subdomain redirect: chat.omega.ms -> omega.ms/chat
  if (host.startsWith("chat.")) {
    const url = request.nextUrl.clone();
    url.host = host.replace("chat.", "");
    url.pathname = "/chat" + url.pathname;
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // LLM/agent discovery: advertise llms.txt per Mintlify-style best practices
  response.headers.set("Link", '</llms.txt>; rel="llms-txt"');
  response.headers.set("X-Llms-Txt", "/llms.txt");

  return response;
}
