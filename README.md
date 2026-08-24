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

## Deployment

Deployed as its own Vercel project (`creativeacts`), live at:

- https://creativeacts.vercel.app/creativeacts

This app is configured with `basePath: "/creativeacts"` in `next.config.ts` so all routes and assets resolve under that subpath.

### Wiring up www.adptv.xyz/creativeacts

The target URL is `www.adptv.xyz/creativeacts`. `adptv.xyz` is currently served by the `adaptive-erp` Vercel project (a Vite app). To finish routing the subpath there, add this to that project's `vercel.json` (create the file if it doesn't exist) and redeploy:

```json
{
  "rewrites": [
    {
      "source": "/creativeacts/:path*",
      "destination": "https://creativeacts.vercel.app/creativeacts/:path*"
    }
  ]
}
```

This wasn't done automatically because the `adaptive-erp` project's local source could not be located (only a stale `node_modules` remained in its old scratchpad path, and the Vercel project isn't linked to a GitHub repo). Once you point me at its source (or a GitHub repo), I can add the rewrite and redeploy it.

No DNS changes are needed — everything routes through the existing `adptv.xyz` domain once the rewrite is in place.
