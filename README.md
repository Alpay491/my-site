```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()

## Projektbeschreibung

Dies ist meine persönliche Homepage, gebaut mit **Hono**, **Tailwind CSS** und bereitgestellt als **Cloudflare Workers**.

- **Live-Link:** https://my-site.alpayfuh26.workers.dev
- **Installation:** `npm install`
- **Entwicklung starten:** `npm run dev`
```
