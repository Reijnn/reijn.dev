# reijn.dev

Personal website and blog of [Niels Reijn](https://reijn.dev) — software engineer writing about technology, privacy, and development. Built with [Hugo](https://gohugo.io) and deployed to [Firebase Hosting](https://firebase.google.com/products/hosting).

## Getting started

Requires [Node.js](https://nodejs.org). Hugo and Dart Sass are installed as dev dependencies, so run Hugo through `npm run` or `npx hugo`.

```bash
npm install
npm run dev     # Start local server at http://localhost:1313 (includes drafts & future posts)
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server with drafts and future posts |
| `npm run start` | Dev server, published content only |
| `npm run build` | Production build to `public/` |
| `npm run build:preview` | Preview build with drafts and future posts |
| `npm run diagrams` | Pre-render ```` ```mermaid ```` diagrams to SVG (runs automatically before `dev`, `start` and `build`) |
| `npm run clean` | Remove `public/`, `resources/` and the generated diagram SVGs |

## Writing a post

```bash
npx hugo new posts/2026/my-post-title.en.md   # then copy it to .nl.md and translate
```

Posts are in `content/posts/`, organized by year. Pushing to `main` deploys the site; set `draft: false` and a future `date` to schedule a post (it appears with the first deploy after that date). For bilingual pages, use `.en.md` / `.nl.md` suffixes.

## Theme

Based on [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) (MIT), heavily modified and kept in this repo at `themes/hello-friend-ng/`. Edit the theme files there directly; there is no upstream to stay in sync with. Its history up to the move lives in the archived [Reijnn/hugo-theme-hello-friend-ng](https://github.com/Reijnn/hugo-theme-hello-friend-ng) fork.

## License

Content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Code is MIT.
