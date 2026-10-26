# Repository guide

This repository builds the static personal site at `https://soe.moe`.

## Commands

```sh
bun ci             # reproducible install from bun.lock
bun dev            # local server on port 4321
bun run format     # format supported source files
bun run check      # Astro and TypeScript diagnostics
bun run build      # static production build
bun run ci         # formatting, diagnostics, and build
```

## Architecture

- `src/content.config.ts` defines the `blog` content collection with Astro's glob loader.
- `src/content/blog/` contains MDX posts.
- `src/pages/blog/index.astro` lists published posts.
- `src/pages/blog/[...slug].astro` renders each post at `/blog/<id>`.
- `src/components/` contains Astro components used by layouts and MDX.
- `src/styles/globals.css` loads Tailwind CSS 4 and the theme configuration in `tailwind.config.ts`.
- `astro.config.mjs` keeps the unified Markdown processor for heading links. MDX 8 shares this processor and requires `@astrojs/markdown-remark` 7.3 or newer. Astro's built-in Shiki integration handles syntax highlighting.

The site has no hydrated UI framework. Keep new components as Astro components unless browser-side state is required.

## Content schema

Each blog post accepts:

- `title`: required string
- `description`: optional string
- `date`: required date-compatible value
- `published`: optional boolean, defaults to `true`
- `image`: optional string

MDX receives `Callout`, `MdxCard`, `Tip`, and `Image` components from the dynamic blog route.

## Upgrade checks

Run `bun run ci` and `bun audit --audit-level=high` after dependency changes. Commit `bun.lock`; do not recreate the retired binary `bun.lockb`.

Keep TypeScript on 6 until `@astrojs/check` declares support for TypeScript 7. Keep Prettier's `astroCompressHTML` setting aligned with `compressHTML` in `astro.config.mjs`.

`postcss-selector-parser` is overridden to 7.1.6 for [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf), because Tailwind Typography 0.5.20 pins the older 6.0.10. Remove the override when Typography adopts a patched parser, and verify the generated prose CSS after changing it.
