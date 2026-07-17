# Sandra Sunny — Portfolio Site

Built with **Next.js 16 · Tailwind CSS** · Analytics via **Vercel Web Analytics** · Deployed on **Vercel**.

---

## Deploy in ~10 minutes

### Step 1 — Edit your content
Open **`lib/content.ts`** — every word on the site lives in this one file.

### Step 2 — Push to GitHub

```bash
git init && git add . && git commit -m "initial portfolio"
gh repo create portfolio --public --push
```

### Step 3 — Deploy on Vercel

1. vercel.com → New Project → Import repo
2. Deploy ✓ (no environment variables needed)

## View analytics

**Vercel Web Analytics** (aggregate, zero-config): enable Analytics on the project
in the Vercel dashboard. The `<Analytics />` component is already wired into
`app/layout.tsx`, so views, referrers, and countries appear automatically.

**PostHog** (optional, richer: referrers, UTM sources, funnels, session replay):
create a free PostHog project, then set `NEXT_PUBLIC_POSTHOG_KEY` (and optionally
`NEXT_PUBLIC_POSTHOG_HOST`) as environment variables in Vercel and redeploy.
Without the key, PostHog stays off and the site runs normally. Turn on
**Session Replay** in PostHog's project settings to watch anonymized visits.

Tip: add UTM tags to the links you share (`?utm_source=linkedin`,
`?utm_source=resume`, `?utm_source=application&utm_campaign=<company>`) so any
tool can tell you which channel drove each visit.

## Local dev

```bash
npm install && npm run dev
```

## Customization

| What | Where |
|---|---|
| All text | lib/content.ts |
| Colors | app/globals.css |
| Sections | app/page.tsx |
