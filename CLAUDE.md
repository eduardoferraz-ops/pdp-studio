# CLAUDE.md

## Project Overview

Marketing landing page for "Copy.ai for Retail" — an AI-powered PDP (Product Description Page) production platform. This is a static marketing site, not a full-stack app. No database, no API routes, no auth.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3, CSS variables for theming (dark mode via class strategy)
- **UI Components:** shadcn/ui (New York style) built on Radix UI primitives
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Serve production build
npm run lint     # ESLint
```

No test framework is configured.

## Project Structure

```
app/              # Next.js App Router — layout.tsx, page.tsx, globals.css
components/       # Page sections (hero, pricing, FAQ, etc.) and reusable components
components/ui/    # shadcn/Radix UI primitives (57 components)
hooks/            # Custom hooks (use-mobile, use-toast)
lib/utils.ts      # cn() helper (clsx + tailwind-merge)
public/           # Static assets, logos, images
styles/           # Additional global CSS
```

## Conventions

- Client components use `"use client"` directive at the top
- Path alias: `@/*` maps to project root
- Component files: kebab-case filenames, PascalCase exports
- Styling: Tailwind utility classes only — no inline styles or CSS modules (one legacy CSS module exists)
- Theming: CSS variables defined in `globals.css`, light and dark modes
- Responsive: mobile-first with `md:` / `lg:` breakpoints
- Navigation: anchor links with scroll-to-id (`#pricing`, `#features`, etc.)

## Things to Know

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't block builds
- Images use `unoptimized: true` for static export compatibility
- The site is entirely client-rendered sections composed in `app/page.tsx`
- No `.env` file needed for local development
