import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // LLM/agent discovery: advertise llms.txt per Mintlify-style best practices
  response.headers.set("Link", '</llms.txt>; rel="llms-txt"');
  response.headers.set("X-Llms-Txt", "/llms.txt");

  return response;
}
