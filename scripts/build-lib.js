#!/usr/bin/env node
/**
 * Compiles only the components (TypeScript) into dist/npm-packages/charts.
 * Creates dist/npm-packages/charts and runs tsc with tsconfig.lib.json.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = process.cwd();
const distDir = path.join(root, 'dist');
const chartsDir = path.join(distDir, 'npm-packages', 'charts');

const log = (msg, ...args) => console.log(`[build-lib] ${msg}`, ...args);

function run() {
  log('Creating dist/npm-packages/charts and compiling components...');
  if (fs.existsSync(chartsDir)) {
    fs.rmSync(chartsDir, { recursive: true });
  }
  fs.mkdirSync(chartsDir, { recursive: true });

  execSync('npx tsc -p tsconfig.lib.json', {
    cwd: root,
    stdio: 'inherit',
  });

  log('Done. Output in dist/npm-packages/charts');
}

run();
