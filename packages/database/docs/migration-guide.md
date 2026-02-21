# Database Migration Guide

This project uses Prisma migrations for PostgreSQL.

## 1) Configure environment

Set the connection string in `.env`:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/b2b_marketplace?schema=public"
```

## 2) Generate Prisma client

```bash
pnpm --filter @packages/database generate
```

## 3) Create and apply a local migration

```bash
pnpm --filter @packages/database migrate:dev --name init_marketplace_schema
```

## 4) Apply migrations in CI/CD / production

```bash
pnpm --filter @packages/database migrate:deploy
```

## 5) Seed sample data

```bash
pnpm --filter @packages/database seed
```

## 6) Open Prisma Studio (optional)

```bash
pnpm --filter @packages/database studio
```

## Migration strategy

- Keep migrations immutable once merged.
- Use additive changes first; backfill data before dropping legacy fields.
- Favor nullable new columns during rollout to avoid downtime.
- When adding unique constraints, clean duplicates first with a data migration.
- Use `deletedAt` for soft deletion on business-critical tables where historical retention is required.
