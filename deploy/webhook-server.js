// Minimal GitHub webhook receiver: verifies the push signature, then
// runs deploy-all-sites.sh in the background. Listens on localhost
// only; nginx proxies /deploy-webhook/github to this port.
const http = require('http');
const crypto = require('crypto');
const { spawn } = require('child_process');

const PORT = process.env.WEBHOOK_PORT || 9000;
const SECRET = process.env.WEBHOOK_SECRET;
const BRANCH = process.env.WEBHOOK_BRANCH || 'refs/heads/main';
const DEPLOY_SCRIPT = process.env.DEPLOY_SCRIPT || '/opt/deploy/deploy-all-sites.sh';

if (!SECRET) {
  console.error('WEBHOOK_SECRET is not set. Refusing to start.');
  process.exit(1);
}

function verifySignature(payload, signatureHeader) {
  if (!signatureHeader || !signatureHeader.startsWith('sha256=')) return false;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  const provided = signatureHeader.slice('sha256='.length);
  const expectedBuf = Buffer.from(expected, 'hex');
  const providedBuf = Buffer.from(provided, 'hex');
  if (expectedBuf.length !== providedBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, providedBuf);
}

let deploying = false;

function runDeploy() {
  if (deploying) {
    console.log('Deploy already in progress, skipping this trigger.');
    return;
  }
  deploying = true;
  console.log('Starting deploy-all-sites.sh ...');
  const proc = spawn('bash', [DEPLOY_SCRIPT], { stdio: 'inherit' });
  proc.on('exit', (code) => {
    deploying = false;
    console.log(`deploy-all-sites.sh exited with code ${code}`);
  });
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || !req.url.endsWith('/github')) {
    res.writeHead(404).end('Not found');
    return;
  }

  const chunks = [];
  req.on('data', (chunk) => chunks.push(chunk));
  req.on('end', () => {
    const payload = Buffer.concat(chunks);
    const signature = req.headers['x-hub-signature-256'];

    if (!verifySignature(payload, signature)) {
      console.warn('Rejected webhook: invalid signature');
      res.writeHead(401).end('Invalid signature');
      return;
    }

    const event = req.headers['x-github-event'];
    if (event === 'ping') {
      res.writeHead(200).end('pong');
      return;
    }

    if (event !== 'push') {
      res.writeHead(200).end(`Ignored event: ${event}`);
      return;
    }

    let body;
    try {
      body = JSON.parse(payload.toString('utf8'));
    } catch (e) {
      res.writeHead(400).end('Invalid JSON');
      return;
    }

    if (body.ref !== BRANCH) {
      res.writeHead(200).end(`Ignored push to ${body.ref}`);
      return;
    }

    res.writeHead(202).end('Deploy triggered');
    runDeploy();
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Webhook receiver listening on 127.0.0.1:${PORT}`);
});
