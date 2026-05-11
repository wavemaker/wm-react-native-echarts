import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as s,b as r,c as i}from"./blocks-bC9W1ZC4.js";import"./preload-helper-DkhvmF2b.js";import"./iframe-7fGkfOWr.js";import"./index-DaCAiO6K.js";const o=`# Comparison

## WebView-only ECharts

Running a full ECharts instance inside a **\`WebView\`** is flexible but costs memory, complicates gestures, and splits styling from the rest of your React Native tree. **@wavemaker/react-native-echarts** targets **native-backed** rendering (Skia / SVG) with a **component API** tuned for mobile layouts.

## Chart kits with fixed recipes

Many RN chart libraries ship a small set of chart “recipes.” This package focuses on **ECharts-accurate behavior** for the implemented series (line, area, bar, pie, radar, geo, candlestick, gauges, etc.) while keeping props **discoverable** via TypeScript.

## When this library fits

Choose it when you want **ECharts-backed** cartesian and polar charts, **shared theming** across components, **geo** maps with visual maps, and **gauges** in the same package—especially if you already standardize on **Expo** and can adopt the listed peer dependencies.
`;function n(a){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction/Comparison"}),`
`,e.jsx(i,{children:o})]})}function m(a={}){const{wrapper:t}={...s(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(n,{...a})}):n()}export{m as default};
