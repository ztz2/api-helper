@echo off
start cmd /k "pnpm install && cd packages/web && pnpm run build && cd ../server && pnpm run build && pnpm run start:prod"