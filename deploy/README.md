# Deploy automation

Auto-deploys all MENA sites from `main` on every push, via a GitHub
webhook → a small receiver on the server → `deploy-all-sites.sh`.

## Files

- `deploy-all-sites.sh` — pulls `main`, rebuilds, and verifies all 5
  site deployments in `/var/www/sites/*`. Logs to
  `/var/log/mena-deploy.log`.
- `webhook-server.js` — minimal HTTP server (no dependencies) that
  verifies GitHub's HMAC signature on incoming push events and runs
  the deploy script in the background.

## Server setup (already done on 148.66.156.206)

- `deploy-all-sites.sh` lives at `/opt/deploy/deploy-all-sites.sh`
- `webhook-server.js` lives at `/opt/deploy-webhook/server.js`, run as
  the `mena-deploy-webhook.service` systemd unit, listening on
  `127.0.0.1:9000`
- nginx (`/etc/nginx/sites-available/hotel`) proxies
  `/deploy-webhook/` on port 80 to `127.0.0.1:9000`
- The webhook secret lives only in
  `/opt/deploy-webhook/.env.secret` on the server (never committed)

GitHub webhook config (Settings → Webhooks on the repo):

- Payload URL: `http://148.66.156.206/deploy-webhook/github`
- Content type: `application/json`
- Secret: the value in `/opt/deploy-webhook/.env.secret` on the server
- Events: just the `push` event

## Redeploying the webhook/script after editing them here

```
scp deploy/deploy-all-sites.sh rootmena@148.66.156.206:/opt/deploy/deploy-all-sites.sh
scp deploy/webhook-server.js rootmena@148.66.156.206:/opt/deploy-webhook/server.js
ssh rootmena@148.66.156.206 "sudo systemctl restart mena-deploy-webhook.service"
```

## Manual trigger (no push needed)

```
ssh rootmena@148.66.156.206
sudo bash /opt/deploy/deploy-all-sites.sh
tail -f /var/log/mena-deploy.log
```
