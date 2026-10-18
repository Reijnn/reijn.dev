# hello-friend-ng (reijn.dev edition)

The theme of [reijn.dev](https://reijn.dev). It started as [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) and is now a heavily modified copy that lives in this repo; there is no upstream to sync with. Edit the files here directly. `LICENSE.md` keeps the original authors' MIT copyright notices, which the license requires.

What it does differently from the original:

- Styles compile with Dart Sass (`sass-embedded` from npm) and use `@use` modules; the CSS is inlined into every page.
- Diagrams: ```` ```mermaid ```` code blocks render in the browser with [Pele](https://pele.run), loaded only on pages that have one.
- Comments use utterances; the saved light/dark choice is applied before the first paint.
- Only the features, icons, share buttons, flags and translations (`en`, `nl`) this site uses are kept.
