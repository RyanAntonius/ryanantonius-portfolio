# Hosting plan

This repository is the private source and media backup for [ryanantonius.com](https://www.ryanantonius.com/). The live Wix site remains unchanged.

## Repository layout

- `src/` — editable Astro pages, components, data, and styles
- `public/` — local project images and the favicon
- `docs/` — hosting and migration notes
- GitHub Releases — the complete private Wix image and video backup

## Before publishing outside Wix

The present source builds with Wix's Astro/Cloudflare configuration. To host independently, create a static build that does not depend on Wix's server adapter, then deploy that build from a separate public GitHub Pages repository. Keeping this repository private preserves the full backup and original media.

## Updating the website

Edit the website files in `src/` and `public/`, commit the changes, then rebuild and deploy the separate static site when it is ready.
