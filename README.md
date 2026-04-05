# reijn.dev

Personal website and blog of [Niels Reijn](https://reijn.dev) — software engineer writing about technology, privacy, and development. Built with [Hugo](https://gohugo.io) and deployed to [Firebase Hosting](https://firebase.google.com/products/hosting).

## Getting started

Requires [Node.js](https://nodejs.org). Hugo extended is bundled as a dev dependency.

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
| `npm run deploy` | Build and deploy to Firebase Hosting |
| `npm run clean` | Remove `public/` and `resources/` |

## Writing a post

```bash
hugo new posts/my-post-title.md
```

Posts are in `content/posts/`, organized by year. Set `draft: false` and a future `date` to schedule a post. For bilingual pages, use `.en.md` / `.nl.md` suffixes.

## Theme

Uses a [custom fork of hello-friend-ng](https://github.com/Reijnn/hugo-theme-hello-friend-ng) as a git submodule. Site-level files in `layouts/` and `assets/` override theme defaults — keep customizations there rather than editing the submodule directly.

## License

Content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Code is MIT.
