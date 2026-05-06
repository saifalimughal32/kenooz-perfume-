# Deploying to Vercel

This project is built on TanStack Start with the Lovable Cloudflare-Workers
preset. The simplest way to ship is **Lovable Publish** (top-right "Publish"
button) — it deploys both client + server in one click.

If you specifically need Vercel:

## Option A — Static (recommended, zero config)

The included `vercel.json` deploys the client bundle as a SPA:

1. Import the repo in Vercel.
2. Vercel auto-detects: build = `bun run build`, output = `dist/client`.
3. All routes fall back to `index.html`, so client-side routing works.

Limitations: server functions (`createServerFn`) and API routes under
`src/routes/api/` will NOT run, because they need the Worker runtime.
For a frontend-only marketing site (this project) that's fine.

## Option B — Full SSR on Vercel

You'd need to swap the Lovable preset for the Vercel preset
(`@tanstack/start-server-functions-vercel`) and add a Vercel-style
`api/[[...slug]].ts` handler. This requires removing
`@lovable.dev/vite-tanstack-config` and setting up TanStack Start manually.
Do this only if you need server-side rendering on Vercel.

## Environment variables

Add the same env vars you use locally (e.g. `VITE_*`) in
**Project → Settings → Environment Variables** on Vercel.
