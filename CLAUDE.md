# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic personal homepage for Yash Chainani, built with Jekyll using the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) remote theme. Deployed to GitHub Pages via GitHub Actions.

## Build & Development Commands

```bash
# Install dependencies
bundle install

# Run local dev server (http://localhost:4000)
bundle exec jekyll serve

# Build static site (output to _site/)
bundle exec jekyll build
```

No test suite or linter is configured.

## Architecture

**Theme:** Uses `yaoyao-liu/minimal-light` as a remote theme (`_config.yml` line 45). Local files override the remote theme when present.

**Content pages:** `index.md` (homepage), `publications.md`, `blog.md`, `contact.md` — all Markdown with YAML front matter.

**Key data-driven content:**
- `_data/publications.yml` — structured publication entries (title, authors, conference, PDF/DOI links, images). This is the primary file to edit when adding publications.
- `_includes/publications.md` and `_includes/services.md` — Markdown fragments included into pages via Liquid.

**Layouts:** `_layouts/homepage.html` is the main layout with nav bar, dark mode toggle, favicon switcher, and CDN includes (Font Awesome, Academicons, Google Fonts). `_layouts/page.html` is used for non-homepage pages.

**Styling:** `_sass/minimal-light.scss` is the main stylesheet. A no-dark-mode variant exists. Publication-specific styles are in `assets/css/publications.css`. The `auto_dark_mode` config flag controls which stylesheet variant is used.

**JavaScript:** Vanilla JS only — `assets/js/dark-mode-toggle.js` (localStorage-backed theme toggle), `assets/js/favicon-switcher.js` (swaps favicon for dark/light mode), `assets/js/scale.fix.js` (responsive helper).

**Static assets:** Images in `assets/img/`, downloadable files (CV) in `assets/files/`.

## CI/CD

GitHub Actions workflow (`.github/workflows/jekyll.yml`) builds and deploys on push to `main`. Uses Ruby 3.1 and `bundle exec jekyll build`. PRs to `main` also trigger a build (but not deploy).

## Common Content Updates

- **News/updates:** Edit `index.md` directly.
- **Publications:** Add entries to `_data/publications.yml`; place preview images in `assets/img/`.
- **Blog posts:** Add files to `_posts/` following `YYYY-MM-DD-title.md` naming convention.
- **Site metadata** (name, links, social profiles): Edit `_config.yml`.
