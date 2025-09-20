# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
bun dev

# Build for production (exports static files)
bun run build

# Production server
bun start

# Linting
bun run lint

# Install dependencies
bun install
```

## Architecture Overview

This is a **Next.js 14** static blog site using **App Router** with the following key technologies:

- **Content Management**: Contentlayer for processing MDX files in `/content/`
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theming**: next-themes with light/dark mode support
- **Typography**: Custom font setup (Inter + CalSans heading font)
- **Static Export**: Configured for static site generation (`output: "export"`)

## Content Structure

Content is organized by type in the `/content/` directory:
- `blog/`: Blog posts (Post type)
- `pages/`: Static pages (Page type)
- `guides/`: Guide content (Guide type)

All content uses MDX format with frontmatter fields:
- **Posts**: `title`, `description`, `date`, `published`, `image`
- **Pages**: `title`, `description`
- **Guides**: `title`, `description`, `date`, `published`, `featured`

## Key Architecture Patterns

### Component Organization
- UI components in `/components/ui/` (shadcn/ui)
- Site-specific components in `/components/`
- MDX components handled by `@/components/mdx-components`

### Styling System
- CSS custom properties for theming in `/styles/globals.css`
- Tailwind configuration with custom theme tokens
- Component variants using class-variance-authority

### Content Processing
- Contentlayer config in `contentlayer.config.ts` defines document schemas
- MDX processing with rehype/remark plugins for:
  - Syntax highlighting (rehype-pretty-code with github-dark theme)
  - Auto-linking headings
  - GFM support

### Environment & Configuration
- Type-safe environment variables using @t3-oss/env-nextjs in `env.mjs`
- Required: `NEXT_PUBLIC_APP_URL`
- Next.js configured for static export with unoptimized images

## File Structure Patterns

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx           # Homepage
└── blog/[...slug]/    # Dynamic blog post routes
    └── page.tsx

components/
├── ui/               # shadcn/ui components
├── site-footer.tsx   # Global footer
├── theme-provider.tsx # Theme context
├── mdx-components.tsx # MDX rendering
└── [other].tsx       # Site-specific components

content/
├── blog/            # Blog posts (.mdx)
├── pages/           # Static pages (.mdx)
└── guides/          # Guide content (.mdx)
```

## Important Implementation Details

- **Static Site**: Uses `output: "export"` for static generation
- **Image Optimization**: Disabled (`unoptimized: true`) for static export
- **Dynamic Routes**: Blog posts use catch-all routes `[...slug]`
- **Metadata Generation**: Automatic OG image generation for posts
- **Accessibility**: Auto-generated heading anchors with aria-labels