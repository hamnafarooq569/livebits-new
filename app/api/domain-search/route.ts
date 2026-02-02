import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain") || "";

  const res = await fetch(
    `https://livebits.pk/ajax/domain_search.php?domain=${encodeURIComponent(domain)}`,
    { cache: "no-store" }
  );

  const text = await res.text();

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
