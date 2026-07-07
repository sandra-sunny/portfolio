# Sandra Liz Sunny — Portfolio Site

Built with **Next.js 15 · Tailwind CSS · Supabase** (view tracking) · Deployed on **Vercel**.

---

## Deploy in ~20 minutes

### Step 1 — Edit your content
Open **`lib/content.ts`** — every word on the site lives in this one file.

### Step 2 — Set up Supabase (view tracking)

1. Go to https://supabase.com → New project (free tier)
2. In the SQL Editor, run:

```sql
create table page_views (
  id bigserial primary key,
  created_at timestamptz default now(),
  path text not null,
  referrer text,
  user_agent text,
  country text,
  session_id text not null
);
create policy "Allow inserts" on page_views
  for insert to anon with check (true);
alter table page_views enable row level security;
```

3. Go to Project Settings → API and copy the three keys into Vercel env vars.

### Step 3 — Push to GitHub

```bash
git init && git add . && git commit -m "initial portfolio"
gh repo create portfolio --public --push
```

### Step 4 — Deploy on Vercel

1. vercel.com → New Project → Import repo
2. Add the 3 Supabase env vars
3. Deploy ✓

## View analytics

Visit `/dashboard` on your live site.

## Local dev

```bash
cp .env.example .env.local   # fill in keys
npm install && npm run dev
```

## Customization

| What | Where |
|---|---|
| All text | lib/content.ts |
| Colors | app/globals.css |
| Sections | app/page.tsx |
| Analytics | app/dashboard/page.tsx |
