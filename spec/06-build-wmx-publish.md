# 06 — Build, WMX, and publish

## npm package pipeline

| Script | Command | Output |
|--------|---------|--------|
| Compile library | `npm run build:lib` | `dist/npm-packages/charts/` via `tsc -p tsconfig.lib.json` |
| Prepare package.json | `npm run prepare:npm` | Writes `package.json`, copies README into dist |
| Both | `npm run generate:package` | `build:lib` + `prepare:npm` |
| Publish | `npm run publish:npm` | Only when explicitly authorized; runs publish in dist |

### tsconfig.lib.json

- `rootDir`: `components/chart`
- `outDir`: `dist/npm-packages/charts`
- `declaration`: true
- Excludes: `wmx/**`, stories, tests, `theme-toggle.tsx`

Published entry: `index.js` + `index.d.ts` at package root in dist.

### prepare-npm-package.js

- Reads root `package.json` for name `@wavemaker/react-native-echarts`, version, metadata.
- Detects compiled `index.js` in dist charts folder.
- Copies README and sets `files` field for npm pack.

**Agents:** do not run `publish:npm` unless the task authorizes release and credentials exist in Paperclip secrets.

## WMX widget pipeline

| Script | Command | Output |
|--------|---------|--------|
| Generate zips | `npm run generate:wmx` | `dist/wmx/charts/*.zip` (default) |

Script: `scripts/generate-wmx.js`

1. Walks `wmx/**/wmx.json`.
2. Splits flat manifest into npm `package.json` fields vs WMX body (see `WMX_BODY_KEYS` in script).
3. Bundles `index.tsx`, `icon.svg`, generated manifests into a zip per widget.
4. Optional `--o=<dir>` copies zips elsewhere.

Schema reference: `components/wmx-context.md` (component, property, event, style schemas).

### wmx.json contents

- Identity: `name`, `displayName`, `description`, `iconUrl`, `webSupport`
- `props`, `events`, `styles` maps for WaveMaker Studio
- `dependencies` pinning `@wavemaker/react-native-echarts` version
- `marketplace` carousel/thumbnail URLs (often Storybook deep links)
- `group` e.g. `chart/line`

### wmx index.tsx

Thin re-export from built package subpath, e.g.:

`import { LineChart } from '@wavemaker/react-native-echarts/line'`

Studio consumes the zip; runtime app depends on the npm chart library.

## dist/ layout (typical)

```
dist/
├── npm-packages/charts/   # Publishable @wavemaker/react-native-echarts
└── wmx/charts/            # *.zip widgets
```

`dist/` is build output — not committed.

## Version alignment

Keep in sync when releasing:

1. Root `package.json` `version`
2. Each `wmx/**/wmx.json` `version` and `dependencies['@wavemaker/react-native-echarts']`
3. Regenerate WMX zips after version bumps

## Local linking (Expo demo)

From README:

```bash
npm install -g yalc
npm run generate:package   # from repo root
cd expo-app && npm install
npx expo start
```

After library changes under `components/chart/`, rerun `npm run generate:package` so yalc consumers update.

## CI-oriented checks (library changes)

| Change type | Minimum verification |
|-------------|----------------------|
| TS/chart logic | `npm run lint`, `npm run build:lib` |
| Public API/types | `build:lib` + inspect `dist/.../*.d.ts` |
| Story/docs | `npm run build-storybook` |
| Native integration | Expo app manual spot-check |

## Scripts directory

| File | Role |
|------|------|
| `build-lib.js` | mkdir dist, run tsc |
| `prepare-npm-package.js` | npm metadata in dist |
| `generate-wmx.js` | WMX zip generation |
| `reset-project.js` | Expo template utility (not library build) |

## Security

Never commit npm tokens, `.npmrc` auth, or customer data. Escalate publish credentials to CEO/Paperclip secrets workflow.
