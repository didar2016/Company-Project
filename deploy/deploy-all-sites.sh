#!/bin/bash
# Redeploys all MENA sites from the `main` branch.
# Each site directory is a self-contained git checkout whose `out/`
# (static export) is served directly by nginx — no separate build
# source, no rsync step. `.env.local`/`.env` are untracked and
# permanent per site, so `git pull` never touches them.
set -uo pipefail

SITES=(
  "menaplaza:3001"
  "mena-apart:3002"
  "mena-halfmoon:3003"
  "mena-nasriya:3004"
  "mena-hotel-tabuk:3005"
)

LOG_FILE="/var/log/mena-deploy.log"
log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*" | tee -a "$LOG_FILE"; }

log "=== Deploy run started ==="

FAILED=()

for entry in "${SITES[@]}"; do
  name="${entry%%:*}"
  port="${entry##*:}"
  dir="/var/www/sites/$name"

  log "--- $name (port $port) ---"

  if [ ! -d "$dir/.git" ]; then
    log "ERROR: $dir is not a git checkout, skipping"
    FAILED+=("$name")
    continue
  fi

  (
    cd "$dir" || exit 1
    git checkout -- . 2>&1
    git pull origin main 2>&1
    npm install 2>&1
    rm -rf .next out
    npm run build 2>&1
  ) >>"$LOG_FILE" 2>&1

  if [ $? -ne 0 ]; then
    log "ERROR: build failed for $name"
    FAILED+=("$name")
    continue
  fi

  if curl -sf -o /dev/null "http://127.0.0.1:$port/"; then
    log "OK: $name is responding on port $port"
  else
    log "WARNING: $name did not respond on port $port after deploy"
    FAILED+=("$name")
  fi
done

if [ ${#FAILED[@]} -eq 0 ]; then
  log "=== Deploy run finished: all sites OK ==="
  exit 0
else
  log "=== Deploy run finished: FAILED sites: ${FAILED[*]} ==="
  exit 1
fi
