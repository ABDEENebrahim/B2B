---
name: nest-microservice-scaffold
description: Use when implementing or expanding NestJS microservices in this monorepo with consistent module/controller/service/dto/test structure and validation-first APIs.
---

# Nest Microservice Scaffold (B2B Monorepo)

## When to use
Use this skill when creating or extending an `apps/*-service` NestJS service in this repository.

## Workflow
1. Update `<service>/package.json` scripts/deps for typecheck + unit/e2e tests.
2. Add `src/app.module.ts` and wire domain modules/services/controllers.
3. Add DTOs with `class-validator` for all request payloads and query params.
4. Keep service logic in dedicated `*.service.ts` and controllers thin.
5. Add global `ValidationPipe` in `src/main.ts` and Swagger setup.
6. Add `jest.config.json` + `test/jest-e2e.json` and at least:
   - one unit/service test
   - one e2e API flow test
7. Validate with:
   - `pnpm --filter <pkg> typecheck`
   - `pnpm --filter <pkg> test`
   - `pnpm --filter <pkg> test:e2e`
   - `pnpm typecheck`

## Conventions
- Prefer in-memory stores for early scaffolding; preserve boundaries for later Prisma/Redis/RabbitMQ integration.
- Keep route prefixes aligned to service domain (e.g. `/rfqs`, `/quotes`).
- Return explicit `{ success: true }` for mutation acknowledgements.
