# Geo Chart Components

A collection of independent, self-contained geo chart components for React Native applications using ECharts.

## Overview

This directory contains 4 distinct geo chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance geographic data visualization.

## Architecture

### Design Principles

1. **Complete Independence**: Each component is self-contained with no shared dependencies beyond core libraries
2. **Optimized Imports**: Components only import the specific ECharts modules they need
3. **Theme Awareness**: All components use ChartThemeContext for centralized theme management
4. **Clean API**: Charts display geographic data with customizable visual mapping
5. **HOC Composition**: Components are wrapped with `withResponsiveContainer` and `withChartTheme` for enhanced capabilities
6. **World Map Support**: All components use world.json GeoJSON data for rendering world maps

### Component Structure

Each component follows this structure:
```typescript
- Import only required ECharts components and HOCs
- Import worldData from @/data/world.json
- Register components with echarts.use()
- Define props interface with width, height, theme, and chart-specific props
- Create inner ChartComponent with useChartTheme hook
- Create chart ref with useRef
- Use useMemo for option configuration
- Register world map data with echarts.registerMap()
- useEffect for chart initialization and cleanup
- Return SkiaChart directly (no wrapper View)
- Export with HOC composition: withResponsiveContainer(withChartTheme(ChartComponent))
```

## Components

### 1. PopulationGeoChart (~145 lines)
World population map with visual mapping based on population data.

**Features:**
- Visual map with color gradient
- Roamable (zoom and pan)
- Tooltip showing population values
- Emphasis on hover

**Default Props:**
- `data`: Array of country names and population values
- `visualMapMin`: 0
- `visualMapMax`: 1500
- `tooltipFormatter`: '{b}<br/>Population: {c}M'
- `height`: 400

**Usage:**
```tsx
import { PopulationGeoChart } from '@/components/chart/geo/PopulationGeoChart';

<PopulationGeoChart 
  data={[
    { name: 'China', value: 1439 },
    { name: 'India', value: 1380 },
    // ... more countries
  ]}
  visualMapMin={0}
  visualMapMax={1500}
/>
```

### 2. GDPGeoChart (~145 lines)
World GDP map with visual mapping based on economic data.

**Features:**
- 5-color gradient for GDP ranges
- Roamable (zoom and pan)
- Tooltip showing GDP values
- Emphasis on hover

**Default Props:**
- `data`: Array of country names and GDP values
- `visualMapMin`: 0
- `visualMapMax`: 20000
- `tooltipFormatter`: '{b}<br/>GDP: ${c}B'
- `height`: 400

**Usage:**
```tsx
import { GDPGeoChart } from '@/components/chart/geo/GDPGeoChart';

<GDPGeoChart 
  data={[
    { name: 'United States', value: 21427 },
    { name: 'China', value: 14342 },
    // ... more countries
  ]}
  visualMapMin={0}
  visualMapMax={20000}
/>
```

### 3. DefaultGeoChart (~135 lines)
Basic world map with simple visual mapping.

**Features:**
- Simple 3-color gradient
- Non-roamable by default
- Tooltip showing generic values
- Compact size for gallery display

**Default Props:**
- `data`: Array of country names and values
- `visualMapMin`: 0
- `visualMapMax`: 600
- `colors`: ['#91cc75', '#5470c6', '#ee6666']
- `height`: 350

**Usage:**
```tsx
import { DefaultGeoChart } from '@/components/chart/geo/DefaultGeoChart';

<DefaultGeoChart 
  data={[
    { name: 'United States', value: 500 },
    { name: 'China', value: 600 },
    // ... more countries
  ]}
/>
```

### 4. InteractiveGeoChart (~160 lines)
Feature-rich interactive world map with full customization.

**Features:**
- 5-color gradient
- Fully roamable (zoom and pan)
- Selectable regions
- Optional label display
- Tooltip showing values
- Larger size for main display

**Default Props:**
- `data`: Array of country names and values
- `visualMapMin`: 0
- `visualMapMax`: 1000
- `colors`: ['#73c0de', '#5470c6', '#91cc75', '#fac858', '#ee6666']
- `showLabel`: false
- `roam`: true
- `height`: 450

**Usage:**
```tsx
import { InteractiveGeoChart } from '@/components/chart/geo/InteractiveGeoChart';

<InteractiveGeoChart 
  data={[
    { name: 'United States', value: 800 },
    { name: 'China', value: 950 },
    // ... more countries
  ]}
  showLabel={true}
  roam={true}
/>
```

## Common Props

All geo chart components support these common props:

```typescript
interface CommonGeoChartProps {
  data?: Array<{ name: string; value: number }>;  // Geographic data
  visualMapMin?: number;                          // Min value for visual mapping
  visualMapMax?: number;                          // Max value for visual mapping
  width?: number;                                 // Chart width (from HOC)
  height?: number;                                // Chart height
  theme?: Partial<ChartTheme>;                   // Theme overrides (from HOC)
}
```

## Chart-Specific Props

### PopulationGeoChart & GDPGeoChart
```typescript
{
  tooltipFormatter?: string;  // Custom tooltip format
}
```

### DefaultGeoChart
```typescript
{
  colors?: string[];  // Array of colors for visual mapping
}
```

### InteractiveGeoChart
```typescript
{
  colors?: string[];    // Array of colors for visual mapping
  showLabel?: boolean;  // Show country labels
  roam?: boolean;       // Enable zoom and pan
}
```

## Theme Integration

All components use ChartThemeContext for theming:

```typescript
const { theme } = useChartTheme();

// Theme properties used:
theme.text.color          // Text and label colors
theme.grid.borderColor    // Country border colors
theme.series.colors       // Emphasis and selection colors
```

## Data Format

Geographic data should follow this format:

```typescript
const data = [
  { name: 'China', value: 1439 },
  { name: 'India', value: 1380 },
  { name: 'United States', value: 331 },
  // ... more countries
];
```

**Important Notes:**
- Country names must match the names in the GeoJSON data (world.json)
- Values should be numeric
- Countries not in the data array will appear with default styling

## Map Registration

All components automatically register the world map data:

```typescript
import worldData from '@/data/world.json';

echarts.registerMap('world', worldData as any);
```

## Performance Considerations

- Map data (world.json) is loaded once and registered with ECharts
- Charts use memoization for options to prevent unnecessary re-renders
- SkiaRenderer provides hardware-accelerated rendering
- Each chart properly disposes on unmount to free memory

## Examples

### Basic World Map
```tsx
import { DefaultGeoChart } from '@/components/chart/geo';

<DefaultGeoChart />
```

### Custom Population Map
```tsx
import { PopulationGeoChart } from '@/components/chart/geo';

<PopulationGeoChart 
  data={myPopulationData}
  visualMapMin={0}
  visualMapMax={2000}
  tooltipFormatter="{b}: {c} million people"
  height={500}
/>
```

### Interactive GDP Map with Labels
```tsx
import { InteractiveGeoChart } from '@/components/chart/geo';

<InteractiveGeoChart 
  data={myGDPData}
  showLabel={true}
  roam={true}
  colors={['#e0f7fa', '#80deea', '#26c6da', '#00acc1', '#00838f']}
  height={600}
/>
```

## Troubleshooting

### Chart Not Rendering
- Verify ECharts dependencies are installed
- Check that SkiaRenderer is properly registered
- Ensure world.json is accessible
- Verify parent component provides necessary space

### Map Not Displaying
- Confirm world.json is in /data/ directory
- Check that map registration happens before chart.setOption()
- Verify country names match GeoJSON data

### Theme Not Updating
- Verify ChartThemeContext is provided at app level
- Check `useChartTheme` hook is available in component tree
- Ensure theme colors are properly formatted
- Verify HOC composition order

### Performance Issues
- Reduce visual map complexity
- Simplify color gradients
- Consider disabling roam for static displays

## File Structure

```
components/chart/geo/
├── README.md                     # This file
├── PROPS_API.md                  # Props documentation
├── index.ts                      # Export barrel
├── PopulationGeoChart.tsx        # ~145 lines - Population map
├── GDPGeoChart.tsx              # ~145 lines - GDP map
├── DefaultGeoChart.tsx          # ~135 lines - Basic map
└── InteractiveGeoChart.tsx      # ~160 lines - Full-featured map
```

## Version History

### Current Version (v1.0)
- **ChartThemeContext Integration**: All components use centralized theme management
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Customizable Props**: Data, visual mapping, colors, and dimensions exposed as properties
- **World Map Support**: GeoJSON data automatically registered for all components

