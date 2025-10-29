// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://vsimon59.vercel.app/sitemap.xml
  `.trim();

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
