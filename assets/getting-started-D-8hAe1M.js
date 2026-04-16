import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{u as r,b as i,c as s}from"./blocks-vzeoXQ36.js";import"./preload-helper-DkhvmF2b.js";import"./iframe-D855FiCl.js";import"./index-ZKjvJ7rq.js";const o=`# Getting Started

**@wavemaker/react-native-echarts** is a React Native chart library built on [Apache ECharts](https://echarts.apache.org/) via [\`@wuba/react-native-echarts\`](https://github.com/wuba/react-native-echarts), with [**React Native Skia**](https://shopify.github.io/react-native-skia/) for rendering. It targets **Expo** and bare **React Native** workflows.

## Installation

Install the package and its **peer dependencies**:

\`\`\`bash
npm install @wavemaker/react-native-echarts @shopify/react-native-skia @wuba/react-native-echarts echarts zrender react-native-svg
\`\`\`

\`react\` and \`react-native\` are expected to already exist in your app.

## Quick start

\`\`\`tsx
import {
  AreaChart,
  LineChart,
  PieChart,
  SimpleGauge,
  USChart,
} from '@wavemaker/react-native-echarts';

// Area (filled series)
<AreaChart data={[100, 200, 150]} width={220} height={350} />

// Line (same props as area; fill disabled internally)
<LineChart data={[[0, 10], [1, 20], [2, 15]]} />

// Pie
<PieChart data={[{value: 40, name: 'A'}, {value: 60, name: 'B'}]} />

// Gauge
<SimpleGauge value={75} max={100} width={120} height={120} />

// US map — region names must match bundled GeoJSON (e.g. "California", "Texas")
<USChart data={[{name: 'California', value: 100}]} />
\`\`\`

## Sizing and empty data

Charts are wrapped in a **responsive container**: omit \`width\` / \`height\` or use \`width="100%"\` and a numeric \`height\` so the chart measures the parent via \`onLayout\`. When \`data\` is missing or empty, a **no-data** message is shown (customize with \`noDataText\` where supported).

## Next steps

- **Main concepts** — see **Introduction → Main Concepts** in this Storybook sidebar.
- **Charts** — browse the **Charts** section for interactive examples; open the **Docs** tab on a story for autodocs and prop tables.
`;function n(e){return a.jsxs(a.Fragment,{children:[a.jsx(i,{title:"Introduction/Getting Started"}),`
`,a.jsx(s,{children:o})]})}function u(e={}){const{wrapper:t}={...r(),...e.components};return t?a.jsx(t,{...e,children:a.jsx(n,{...e})}):n()}export{u as default};
