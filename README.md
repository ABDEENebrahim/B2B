# B2B Marketplace Monorepo

Initial production-oriented scaffold for a B2B marketplace platform.

## Apps

- `apps/web` - Next.js 14 frontend
- `apps/user-service` - NestJS user/auth service
- `apps/product-service` - NestJS product service
- `apps/rfq-service` - NestJS RFQ service
- `apps/order-service` - NestJS order service
- `apps/payment-service` - NestJS payment service
- `apps/messaging-service` - NestJS messaging service
- `apps/api-gateway` - Kong gateway integration

## Packages

- `packages/shared-types` - Shared TypeScript contracts
- `packages/database` - Prisma schema and DB client exports

## Quick Start

```bash
cp .env.example .env
pnpm install
bash scripts/setup.sh
pnpm dev
```

## Infrastructure

`docker-compose.yml` includes:
- PostgreSQL primary + replica
- Redis
- Elasticsearch
- RabbitMQ
- MinIO
- Kong + Kong Postgres
