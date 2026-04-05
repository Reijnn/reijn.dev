---
title: "Improving reijn.dev: Performance, Privacy, and a Custom Theme Fork"
date: 2026-04-05T12:00:00+02:00
draft: false
description: "A look at the recent changes I made to this site: dropping Google Analytics, forking the theme, switching to Hugo's native asset pipeline, and chasing a better Lighthouse score."
tags:
  - Hugo
  - Performance
  - Privacy
---

Over the past few weeks I made a series of improvements to this site. Nothing dramatic from the outside, but a meaningful cleanup under the hood. Here's a quick overview of what changed and why.

## Dropping Google Analytics

The most straightforward change: I removed Google Analytics. Lighthouse flagged 60 KiB of unused JavaScript loaded from Google's servers on every page visit. Beyond the performance cost, it felt inconsistent to run a site about privacy while silently shipping a third-party tracker. Gone.

## Forking the Theme

This site uses [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) as its theme. Over time I accumulated layout overrides scattered across the site's `layouts/` directory. Rather than maintain a parallel set of overrides, I forked the theme into [Reijnn/hugo-theme-hello-friend-ng](https://github.com/Reijnn/hugo-theme-hello-friend-ng) and consolidated the changes there. The site-level `layouts/` directory now only holds what is genuinely site-specific (like `robots.txt`), while everything else lives in the fork. This makes the relationship between site and theme much easier to reason about.

## Dropping Vite for Hugo's Native Asset Pipeline

The JS build was previously handled by Vite, which added configuration overhead and an extra build step. Hugo has had a capable built-in asset pipeline for a while — it can bundle, minify, fingerprint, and generate SRI hashes. Switching to it removed Vite and its config entirely, moved JS sources into `assets/` where Hugo expects them, and let me delete a bunch of glue code.

As part of this I also migrated from `config.toml` to `hugo.toml` and tightened the Content-Security-Policy in `firebase.json`.

## Lighthouse Optimizations

With the foundation in place I went through a Lighthouse pass:

- **Inlined the typewriter script** on the homepage. It was loaded as a separate file, causing a 499ms critical request chain. Inlining it as an IIFE in the HTML eliminates the extra round-trip.
- **Added font preload hints** for Inter Regular and Bold, so the browser fetches fonts earlier in the page load.
- **Fixed absolute font paths** in the theme fork to make sure fonts resolve correctly regardless of the base URL.
- **Fixed footer contrast** to meet WCAG AA requirements — the footer text wasn't passing the contrast ratio check.

Small changes, but the site is faster, more private, and easier to maintain going forward.
