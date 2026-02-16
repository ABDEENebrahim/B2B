#!/usr/bin/env bash
set -euo pipefail

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is required. Install it first: npm i -g pnpm"
  exit 1
fi

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

echo "Installing workspace dependencies..."
pnpm install

echo "Starting infrastructure services..."
docker compose up -d

echo "Setup complete."
echo "- Run all apps in dev mode: pnpm dev"
echo "- Stop infrastructure: docker compose down"
