# 08 — Spec-based development readiness

## Short answer

**Yes — the team can start spec-based development now**, with one important distinction:

| Layer | Location | Role |
|-------|----------|------|
| **Codebase guide** | `spec/*.md` (this folder) | How the repo is structured, where to edit, how to verify |
| **Behavioral spec** | `stories/**/*.stories.tsx`, `*.mdx` | What each chart should look like and which props matter |

`spec/` does **not** replace Storybook stories. It tells agents **how to work**; Storybook tells them **what “correct” looks like** for existing chart behavior.

## What is already sufficient

### 1. Codebase understanding (`spec/`)

An agent can onboard without reading every source file:

- Architecture, HOCs, ECharts+Skia pipeline (`02-architecture.md`)
- Chart catalog and file paths (`03-chart-components.md`)
- Props and theming (`04-theming-props.md`, `04-theming-props.md`)
- Tooltips and `onSelect` (`05-tooltips-interaction.md`)
- Build, WMX, publish (`06-build-wmx-publish.md`)
- Dev commands and story layout (`07-storybook-development.md`)

### 2. Behavioral baseline (`stories/`)

The repo already ships a large Storybook surface (~100+ story files) organized per chart:

- Default stories per chart type
- Slices for tooltip, legend, colors, axes, interaction
- Shared `*.args.ts` for Controls / argTypes
- Introduction MDX (getting started, concepts)

Deployed reference: https://wavemaker.github.io/wm-react-native-echarts

### 3. Workflow is documented

For each non-trivial feature or bug:

1. **Add or update** a Storybook story (or MDX) that states expected behavior.
2. **Implement** in `components/chart/`.
3. **Verify** with `npm run lint` (+ `build:lib` if API changed) and note the story path on the issue.

## What agents must still do per task

| Situation | Required spec artifact |
|-----------|------------------------|
| New chart option or visual behavior | New/updated story under `stories/<chart>/` |
| Bug fix with user-visible change | Story reproducing before/after (or update existing) |
| Docs-only / typo / spec folder only | Story optional (task may exempt) |
| Native-only gesture/Skia edge case | Story + manual Expo note on issue until QA exists |

## Readiness checklist (before starting a chart feature issue)

- [ ] Read `spec/README.md` → relevant numbered sections for the chart family.
- [ ] Open the matching `stories/<chart>/` tree and find the closest existing story.
- [ ] Confirm story `title` path (e.g. `Charts/Line/...`) for verification notes.
- [ ] Branch: `feat/AID-<n>-<slug>`.
- [ ] After implementation: `npm run lint`; `npm run build:lib` if types/exports change.

## Known gaps (not blockers to start)

| Gap | Mitigation |
|-----|------------|
| No single “requirements” doc per chart | Use Storybook stories + `*-chart.props.ts` JSDoc |
| Storybook uses `react-native-web`, not device Skia | Spot-check in `expo-app/` for native-only issues |
| No automated visual regression in repo | Manual Storybook + issue screenshot/path |
| WMX Studio props may drift from TS props | Compare `wmx.json` with `*.props.ts` when touching Studio |

## Recommendation for the board

- **Start feature work** using `spec/` + existing `stories/` as the dual spec system.
- **Do not** expect `spec/` alone to define new behavior — new behavior still needs a Storybook story (or MDX) per team bar.
- Optional follow-up (separate issue): chart-by-chart “story index” table linking `spec/03` entries to default Storybook URLs.
