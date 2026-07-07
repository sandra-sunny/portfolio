import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json({ ok: false, reason: "not configured" }, { status: 200 });
    }

    const body = await req.json();
    const { path, session_id } = body;
    const referrer = req.headers.get("referer") || null;
    const user_agent = req.headers.get("user-agent") || null;
    const country = req.headers.get("x-vercel-ip-country") || null;

    const res = await fetch(`${supabaseUrl}/rest/v1/page_views`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": serviceKey,
        "Authorization": `Bearer ${serviceKey}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ path, referrer, user_agent, country, session_id }),
    });

    if (!res.ok) throw new Error(await res.text());
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
