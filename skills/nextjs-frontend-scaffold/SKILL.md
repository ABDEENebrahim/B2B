---
name: nextjs-frontend-scaffold
description: Use when implementing or extending the Next.js App Router frontend in this monorepo with consistent layout, navigation, dashboard pages, and reusable UI primitives.
---

# Next.js Frontend Scaffold (B2B Monorepo)

## Workflow
1. Create reusable components under `apps/web/src/components`.
2. Keep route pages in `apps/web/app/**` and favor server components for static pages.
3. Use simple typed mock data helpers in `apps/web/src/lib` for consistent placeholders.
4. Ensure shared shell (`Header`, `Footer`, wrappers) is used in `app/layout.tsx`.
5. Add key routes incrementally (public, auth, dashboard, admin) with lightweight placeholders.
6. Validate with `pnpm --filter @apps/web typecheck` and `pnpm typecheck`.
7. Capture a screenshot when visual pages are added/changed.

## Conventions
- Keep styling with Tailwind utility classes.
- Prefer small presentational components over repeated page markup.
- Use clear section headings and predictable spacing for scaffold pages.
