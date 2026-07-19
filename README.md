# NORTH — Deploy on Vercel

A polished creative-studio landing page built with **Next.js**. You do not need to learn much code to get this live — the goal is a clean first Vercel deploy.

## What’s included

- Atmospheric full-bleed landing page (`NORTH` brand)
- Practice + selected work sections
- Contact form that calls a Vercel serverless API route (`/api/inquire`)

## Run it locally (optional)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel (recommended path)

### Option A — GitHub (best for beginners)

1. Create a free account at [vercel.com](https://vercel.com/signup).
2. Push this project to a GitHub repo (if you haven’t already).
3. In Vercel, click **Add New… → Project**.
4. Import your GitHub repo.
5. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output: handled automatically
6. Click **Deploy**.
7. Wait ~1 minute. Vercel gives you a live URL like `https://your-project.vercel.app`.

Every time you push to GitHub, Vercel redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

## Quick checklist after deploy

- [ ] Open the live URL
- [ ] Scroll the full page on phone + desktop
- [ ] Submit the inquire form — you should see a success message
- [ ] Optional: in Vercel → Project → Settings → Domains, add a custom domain

## Project map

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/components/` | Hero, Practice, Work, Inquire, Footer |
| `src/app/api/inquire/route.ts` | Serverless form handler |
| `public/*.jpg` | Hero + work images |

That’s it — deploy, share the URL, you’re done.
