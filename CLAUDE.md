# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Niels Reijn's personal website and blog built with Hugo, a static site generator. The site is multilingual (English/Dutch) and deployed to Firebase Hosting.

## Architecture

- **Static Site Generator**: Hugo with the "hello-friend-ng" theme
- **Content Management**: Markdown files in `/content/` directory organized by language (.en.md/.nl.md)
- **Theming**: Uses a Git submodule theme at `/themes/hello-friend-ng/`
- **Deployment**: Firebase Hosting with configuration in `firebase.json`
- **Asset Pipeline**: Hugo handles SCSS compilation and JavaScript bundling

## Development Commands

```bash
# Install Hugo (development dependency)
npm install

# Serve site locally for development
hugo serve

# Build static site for production
hugo

# Deploy to Firebase (if firebase-tools is installed)
firebase deploy
```

## Content Structure

- `/content/about.{en,nl}.md` - About pages in both languages
- `/content/posts/YYYY/` - Blog posts organized by year
- `/content/projects/` - Project showcase pages
- All content files use Hugo front matter with multilingual support

## Configuration

- `config.toml` - Main Hugo configuration with theme settings, menus, and multilingual setup
- `firebase.json` - Firebase hosting configuration with caching headers
- Theme configuration includes Google Analytics, Disqus comments, and social media links

## Key Features

- Multilingual site (English/Dutch) with language switching
- RSS feeds for posts
- Theme toggle (dark/light mode)
- Social sharing buttons
- Google Analytics and Disqus integration
- Service worker support
- Custom typography using Inter font

## Content Creation

When adding new content:
- Blog posts go in `/content/posts/YYYY/filename.{en,nl}.md`
- Projects go in `/content/projects/filename.{en,nl}.md`
- Use Hugo front matter format with title, date, and optional tags/categories
- Follow existing naming conventions for multilingual content