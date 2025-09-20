# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
bun dev

# Build for production (exports static files)
bun run build

# Preview production build
bun run preview

# Install dependencies
bun install
```

## Architecture Overview

This is an **Astro** static blog site with the following key technologies:

- **Content Management**: Astro Content Collections for processing MDX files in `/src/content/`
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theming**: next-themes with light/dark mode support
- **Typography**: Custom font setup (Inter + CalSans heading font)
- **Static Export**: Configured for static site generation (`output: "static"`)

## Content Structure

Content is organized by type in the `/src/content/` directory:
- `blog/`: Blog posts (blog collection)
- `pages/`: Static pages (pages collection)
- `guides/`: Guide content (guides collection)

All content uses MDX format with frontmatter fields:
- **Posts**: `title`, `description`, `date`, `published`, `image`
- **Pages**: `title`, `description`
- **Guides**: `title`, `description`, `date`, `published`, `featured`

## Key Architecture Patterns

### Component Organization
- UI components in `/src/components/ui/` (shadcn/ui)
- Site-specific components in `/src/components/`
- React components use `client:load` directive when interactivity is needed

### Styling System
- CSS custom properties for theming in `/src/styles/globals.css`
- Tailwind configuration with custom theme tokens
- Component variants using class-variance-authority

### Content Processing
- Astro content config in `src/content/config.ts` defines collection schemas
- MDX processing with rehype/remark plugins for:
  - Syntax highlighting (rehype-pretty-code with github-dark theme)
  - Auto-linking headings
  - GFM support

### Environment & Configuration
- Astro configuration in `astro.config.mjs` with integrations
- Site URL: `https://soe.moe`
- Path mapping: `@/*` maps to `./src/*`

## File Structure Patterns

```
src/
├── layouts/
│   └── Layout.astro     # Base layout with theme provider
├── pages/
│   ├── index.astro      # Homepage (redirects to /blog)
│   └── blog/
│       ├── index.astro  # Blog listing page
│       └── [...slug].astro # Dynamic blog post routes
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── site-footer.tsx  # Global footer
│   ├── theme-provider.tsx # Theme context
│   └── [other].tsx      # Site-specific components
├── content/
│   ├── config.ts        # Content collections schema
│   ├── blog/           # Blog posts (.mdx)
│   ├── pages/          # Static pages (.mdx)
│   └── guides/         # Guide content (.mdx)
├── lib/
│   └── utils.ts        # Utility functions
└── styles/
    ├── globals.css     # Global styles
    └── mdx.css        # MDX-specific styles
```

## Important Implementation Details

- **Static Site**: Uses `output: "static"` for static generation
- **Content Collections**: Zod schema validation with `z.coerce.date()` for string dates
- **Dynamic Routes**: Blog posts use `[...slug].astro` with `getStaticPaths()`
- **Component Hydration**: React components require `client:load` for interactivity
- **MDX Components**: Custom components (Tip, Callout, MdxCard, Image) passed to `<Content />`
- **Theme Support**: next-themes wrapped with Astro's client directive
- **Path Mapping**: `@/*` alias configured in both `tsconfig.json` and `astro.config.mjs`