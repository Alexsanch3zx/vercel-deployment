# Alex Sanchez — Portfolio

Personal portfolio site for **Alex Sanchez**, built with Next.js and ready to deploy on Vercel.

## Featured projects

- **Hartford RAG Video Analytics** — municipal AI video intelligence for the City of Hartford
- **Cloud-Native Fitness App** — scalable fitness product architecture

## Edit your content

All copy and links live in one file:

```
src/lib/site.ts
```

Update:
- Project descriptions / tech stacks
- Your LinkedIn URL (`linkedin` field)
- Bio / location if needed

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub (already tracked if you created `vercel-deployment`).
2. Sign up at [vercel.com](https://vercel.com/signup).
3. **Add New → Project** → import the repo.
4. Keep Next.js defaults → **Deploy**.
5. Share your live URL.

That’s the whole loop — edit `site.ts`, push, Vercel redeploys.
