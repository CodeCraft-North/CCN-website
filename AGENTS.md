# Repository Guidelines

## Project Structure & Module Organization
This repository is an Eleventy static site. Source files live in `src/`; generated output goes to `dist/` and should be treated as build artefacts. Use `src/_layouts/` for page shells, `src/_includes/` for shared partials, `src/posts/` for blog content, `src/services/` and `src/locations/` for grouped landing pages, `src/css/input.css` for Tailwind v4 tokens/components, and `src/js/script.js` for client-side behaviour. Image assets belong in `src/img/`. Eleventy behaviour and filters are defined in `.eleventy.js`.

## Build, Test, and Development Commands
- `npm run dev`: start Eleventy with watch mode and a local server on port 8080.
- `npm run serve`: serve the site through Eleventy without the extra watch flags used in `dev`.
- `npm run css:build`: watch and compile `src/css/input.css` to `dist/css/styles.css`.
- `npm run css:prod`: build the production CSS once.
- `npm run build`: run the production CSS build, then generate the full site in `dist/`.

For local work, run `npm run css:build` and `npm run dev` in separate terminals.

## Coding Style & Naming Conventions
Follow the existing style in each file type. Nunjucks templates use 4-space indentation and descriptive, kebab-case filenames such as `website-review.njk`. Keep page front matter short and explicit. CSS tokens and custom component classes live in `src/css/input.css`; prefer semantic names like `--color-text-primary` and `btn--primary` over one-off values. JavaScript in `src/js/script.js` currently uses 4-space indentation, single quotes, and defensive DOM checks before adding listeners.

## Testing Guidelines
There is no automated test suite in this repository today. Verify changes by running `npm run build` and checking the affected pages in the local Eleventy server. For UI edits, confirm navigation, theme toggle, forms, and responsive layouts. For content pages and posts, verify permalink structure, metadata, and image rendering.

## Commit & Pull Request Guidelines
Recent commits use short, lowercase, action-focused messages such as `fixed url structure` and `updated links`. Keep that convention: one clear summary per commit, ideally under 60 characters. Pull requests should include a brief description, affected routes, manual verification steps, and screenshots for visible UI changes. Link any related issue or content request before merging.

## Configuration Notes
Do not hand-edit files in `dist/`. Update source files instead. When adding images, prefer the existing Eleventy image shortcode so responsive formats continue to be generated during builds.
