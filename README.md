# Restoration LLC — Health Provider Site

A multi-clinic healthcare provider website built with React, Vite, Express, and PostgreSQL in a pnpm monorepo.

## Prerequisites

- **Node.js 24** — install via [Homebrew](https://brew.sh): `brew install node@24`
- **pnpm** — enable via corepack: `corepack enable && corepack prepare pnpm@latest --activate`
- **PostgreSQL** — install via Homebrew: `brew install postgresql@17 && brew services start postgresql@17`

## Setup

```bash
# Install dependencies (must use pnpm)
pnpm install

# Create the database
createdb health_provider

# Push the DB schema
export DATABASE_URL="postgresql://$USER@localhost:5432/health_provider"
pnpm --filter @workspace/db run push
```

## Running Locally

You need **two terminals** — one for the API and one for the frontend.

### Terminal 1 — API server (port 8081)

```bash
export PORT=8081
export DATABASE_URL="postgresql://$USER@localhost:5432/health_provider"
pnpm --filter @workspace/api-server run dev
```

The API runs at `http://127.0.0.1:8081` and auto-restarts on file changes.

### Terminal 2 — Frontend (port 8080)

```bash
export PORT=8080
export BASE_PATH=/
export API_PROXY_TARGET=http://127.0.0.1:8081
pnpm --filter @workspace/healthcare run dev
```

Open **http://localhost:8080** in your browser.

`API_PROXY_TARGET` forwards `/api/*` requests from the Vite dev server to the API on port 8081.

## Other Commands

| Command | Description |
|---|---|
| `pnpm run build` | Typecheck + build all packages |
| `pnpm run typecheck` | Full typecheck across all packages |
| `pnpm --filter @workspace/api-spec run codegen` | Regenerate API hooks and Zod schemas from OpenAPI spec |
| `pnpm --filter @workspace/db run push` | Push DB schema changes |

## Project Structure

```
artifacts/
  healthcare/    — React + Vite frontend (served at /)
  api-server/    — Express API server
lib/
  api-client-react/  — Generated React Query hooks
  api-spec/          — OpenAPI specification
  api-zod/           — Generated Zod schemas
  db/                — PostgreSQL + Drizzle ORM schema
```
