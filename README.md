# Creative Acts

Landing site for Creative Acts, a product lab building at the intersection of innovation and design.

Design language is inspired by [World Labs](https://www.worldlabs.ai/): a light, minimal canvas with a serif display headline (Gilda Display), muted lavender-gray secondary text, hairline dividers, and generous whitespace. Content on the Projects and Our Process pages is sourced from [coaltlab.com](https://www.coaltlab.com/).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4

## Pages

- `/` — hero with taglines
- `/projects` — initiatives, linking out to each project
- `/process` — the five-step process
- `/contact` — email, LinkedIn, X

## Local development

```bash
npm install
npm run dev
```

The site is served at `http://localhost:3000/creativeacts` because of the `basePath` config below.

## Deployment: www.amberliang.xyz/creativeacts

This app is configured with `basePath: "/creativeacts"` in `next.config.ts` so all routes and assets resolve under that subpath.

To host it at `www.amberliang.xyz/creativeacts`:

1. Push this repo to GitHub and import it as its own Vercel project (e.g. `creativeacts`). Deploy it — Vercel will give it a `*.vercel.app` URL where every route is already under `/creativeacts` (e.g. `creativeacts.vercel.app/creativeacts`).
2. In the project that serves `www.amberliang.xyz` (the `amberliang-site` Vercel project), add a rewrite so requests to `/creativeacts/:path*` proxy to the deployed Creative Acts app. In that project's `next.config.ts`:

   ```ts
   async rewrites() {
     return [
       {
         source: "/creativeacts/:path*",
         destination: "https://creativeacts.vercel.app/creativeacts/:path*",
       },
     ];
   }
   ```

   Or configure the equivalent rewrite in `vercel.json` on the `amberliang-site` project if you prefer not to touch `next.config.ts` there.
3. Redeploy `amberliang-site`. `www.amberliang.xyz/creativeacts` will now serve this app while keeping the rest of `amberliang.xyz` untouched.

No DNS changes are needed since everything routes through the existing `amberliang.xyz` domain.
