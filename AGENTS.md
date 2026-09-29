# Base44 Dev Environment

## Overview
Vite + React 19 + TypeScript static app ("PF Suvidha" — Provident Fund withdrawal service with fee calculator). No backend, no database.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000
- Node 22 base image, source bind-mounted at `/app`, deps installed on startup via `npm install` (no lockfile committed).
- Vite dev server with HMR; edits hot-reload without rebuild.

## Notes
- `vite.config.ts` defines `process.env.API_KEY` / `process.env.GEMINI_API_KEY` from `GEMINI_API_KEY`, but **no app code reads them** — the app boots without any credentials.
- `index.html` contains an importmap pointing to `aistudiocdn.com`, but Vite's dev server pre-bundles React from local `node_modules`, so the importmap is effectively ignored.
- No lockfile exists; `npm install` (not `--frozen-lockfile`) is intentional.
