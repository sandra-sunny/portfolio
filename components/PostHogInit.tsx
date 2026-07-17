"use client";
import { useEffect } from "react";
import posthog from "posthog-js";

let initialized = false;

export function PostHogInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    // No key (e.g. local dev) → do nothing. Analytics only runs where configured.
    if (!key || initialized) return;
    initialized = true;
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      autocapture: true,
    });
  }, []);

  return null;
}
