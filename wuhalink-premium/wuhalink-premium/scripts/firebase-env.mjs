import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const write = process.argv.includes('--write');

const envKeys = {
  apiKey: 'VITE_FIREBASE_API_KEY',
  authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
  projectId: 'VITE_FIREBASE_PROJECT_ID',
  storageBucket: 'VITE_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'VITE_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'VITE_FIREBASE_APP_ID',
};

let config;
try {
  const raw = execSync('firebase apps:sdkconfig web', {
    cwd: root,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  config = JSON.parse(raw);
} catch {
  console.error('Could not fetch Firebase config. Run these first:');
  console.error('  npm run firebase:login');
  console.error('  npm run firebase:use');
  process.exit(1);
}

const env = Object.entries(envKeys)
  .map(([key, name]) => `${name}=${config[key] ?? ''}`)
  .join('\n')
  .concat('\n');

if (write) {
  writeFileSync(join(root, '.env'), env, 'utf8');
  console.log('Wrote .env with Firebase web app config.');
} else {
  process.stdout.write(env);
}
