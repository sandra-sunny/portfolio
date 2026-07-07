"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = sessionStorage.getItem("portfolio_sid");
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("portfolio_sid", sid);
  }
  return sid;
}

export function usePageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Don't track if env vars aren't set (local dev without Supabase)
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, session_id: getSessionId() }),
    }).catch(() => {});
  }, [pathname]);
}
