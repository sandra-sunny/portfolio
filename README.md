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

Enable **Analytics** on the project in the Vercel dashboard (Project → Analytics).
The `<Analytics />` component is already wired into `app/layout.tsx`, so views,
referrers, and countries appear in Vercel's Analytics tab automatically. No keys,
no database, nothing to maintain.

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
