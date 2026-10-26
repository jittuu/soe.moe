# soe.moe

Source for [soe.moe](https://soe.moe), a statically generated personal site and blog.

## Stack

- Astro 7 with MDX 8 content collections and the unified Markdown processor
- Tailwind CSS 4 through its Vite plugin
- Bun for dependency management and scripts
- TypeScript 6 and `astro check` for type diagnostics

## Requirements

- Bun 1.3.14
- Node.js 24.22.1 or newer (pinned in `.node-version`)

## Development

```sh
bun ci
bun dev
```

The development server runs at `http://localhost:4321`.

## Verification

```sh
bun run ci
bun audit --audit-level=high
```

`bun run ci` checks formatting and types, then builds the six static routes into `dist/`.

## Content

Blog posts live in `src/content/blog` as MDX files. Their frontmatter is validated by `src/content.config.ts`.
