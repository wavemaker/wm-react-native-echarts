# Geo Chart Components - Props API

All geo chart components expose customizable properties for geographic data visualization with visual mapping. This makes them flexible and reusable with your own data.

## Common Props

### All Geo Charts
(PopulationGeoChart, GDPGeoChart, DefaultGeoChart, InteractiveGeoChart)

```typescript
interface CommonProps {
  data?: Array<{ name: string; value: number }>;  // Geographic data
  visualMapMin?: number;                          // Minimum value for visual mapping
  visualMapMax?: number;                          // Maximum value for visual mapping
  width?: number;                                 // Chart width (from responsive HOC)
  height?: number;                                // Chart height in pixels
  theme?: Partial<ChartTheme>;                   // Theme overrides (from theme HOC)
}
```

## Component-Specific Props

### PopulationGeoChart

```typescript
interface PopulationGeoChartProps {
  data?: Array<{ name: string; value: number }>;  // Country population data
  visualMapMin?: number;                          // Default: 0
  visualMapMax?: number;                          // Default: 1500
  tooltipFormatter?: string;                      // Default: '{b}<br/>Population: {c}M'
  width?: number;                                 // From responsive HOC
  height?: number;                                // Default: 400
  theme?: Partial<ChartTheme>;                   // From theme HOC
}
```

**Default Data:**
```typescript
[
  { name: 'China', value: 1439 },
  { name: 'India', value: 1380 },
  { name: 'United States', value: 331 },
  // ... 17 more countries
]
```

**Default Colors:** `['#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b']`

**Example:**
```tsx
<PopulationGeoChart 
  data={[
    { name: 'China', value: 1500 },
    { name: 'India', value: 1400 },
  ]}
  visualMapMin={0}
  visualMapMax={2000}
  tooltipFormatter="{b}: {c} million"
  height={500}
/>
```

---

### GDPGeoChart

```typescript
interface GDPGeoChartProps {
  data?: Array<{ name: string; value: number }>;  // Country GDP data
  visualMapMin?: number;                          // Default: 0
  visualMapMax?: number;                          // Default: 20000
  tooltipFormatter?: string;                      // Default: '{b}<br/>GDP: ${c}B'
  width?: number;                                 // From responsive HOC
  height?: number;                                // Default: 400
  theme?: Partial<ChartTheme>;                   // From theme HOC
}
```

**Default Data:**
```typescript
[
  { name: 'United States', value: 21427 },
  { name: 'China', value: 14342 },
  { name: 'Japan', value: 5081 },
  // ... 17 more countries
]
```

**Default Colors:** `['#a8e6cf', '#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b']`

**Example:**
```tsx
<GDPGeoChart 
  data={[
    { name: 'United States', value: 25000 },
    { name: 'China', value: 18000 },
  ]}
  visualMapMin={0}
  visualMapMax={30000}
  tooltipFormatter="{b}<br/>GDP: ${c} billion USD"
  height={500}
/>
```

---

### DefaultGeoChart

```typescript
interface DefaultGeoChartProps {
  data?: Array<{ name: string; value: number }>;  // Generic country data
  visualMapMin?: number;                          // Default: 0
  visualMapMax?: number;                          // Default: 600
  colors?: string[];                              // Default: ['#91cc75', '#5470c6', '#ee6666']
  width?: number;                                 // From responsive HOC
  height?: number;                                // Default: 350
  theme?: Partial<ChartTheme>;                   // From theme HOC
}
```

**Default Data:**
```typescript
[
  { name: 'United States', value: 500 },
  { name: 'China', value: 600 },
  { name: 'Japan', value: 300 },
  // ... 7 more countries
]
```

**Features:**
- Non-roamable by default (static display)
- Customizable color gradient

**Example:**
```tsx
<DefaultGeoChart 
  data={[
    { name: 'United States', value: 400 },
    { name: 'China', value: 550 },
  ]}
  colors={['#a8e6cf', '#56ab2f', '#2e7d32']}
  visualMapMax={800}
  height={400}
/>
```

---

### InteractiveGeoChart

```typescript
interface InteractiveGeoChartProps {
  data?: Array<{ name: string; value: number }>;  // Generic country data
  visualMapMin?: number;                          // Default: 0
  visualMapMax?: number;                          // Default: 1000
  colors?: string[];                              // Default: 5-color gradient
  showLabel?: boolean;                            // Default: false
  roam?: boolean;                                 // Default: true (enable zoom/pan)
  width?: number;                                 // From responsive HOC
  height?: number;                                // Default: 450
  theme?: Partial<ChartTheme>;                   // From theme HOC
}
```

**Default Data:**
```typescript
[
  { name: 'United States', value: 800 },
  { name: 'China', value: 950 },
  { name: 'Japan', value: 450 },
  // ... 12 more countries
]
```

**Default Colors:** `['#73c0de', '#5470c6', '#91cc75', '#fac858', '#ee6666']`

**Features:**
- Roamable (zoom and pan) by default
- Selectable regions
- Optional country labels
- Full interactivity

**Example:**
```tsx
<InteractiveGeoChart 
  data={[
    { name: 'United States', value: 900 },
    { name: 'China', value: 1000 },
  ]}
  showLabel={true}
  roam={true}
  colors={['#e3f2fd', '#90caf9', '#42a5f5', '#1e88e5', '#1565c0']}
  visualMapMax={1200}
  height={600}
/>
```

---

## Data Format

All components expect data in this format:

```typescript
type GeoData = Array<{
  name: string;   // Country name (must match GeoJSON)
  value: number;  // Numeric value for that country
}>;
```

**Important Notes:**
- Country names must match the names in `world.json` GeoJSON data
- Common country names: 'United States', 'China', 'Japan', 'Germany', 'India', 'United Kingdom', 'France', 'Brazil', 'Canada', 'Russia', etc.
- Countries not in the data array will appear with default styling (no color fill)

## Visual Map Configuration

The visual map controls how data values are mapped to colors:

```typescript
visualMapMin: number;  // Minimum value (maps to first color)
visualMapMax: number;  // Maximum value (maps to last color)
colors: string[];      // Array of colors for gradient
```

**Example:**
```typescript
// 3-color gradient
colors: ['#91cc75', '#5470c6', '#ee6666']
// Values 0-300 → green, 301-600 → blue, 601-900 → red

// 5-color gradient
colors: ['#73c0de', '#5470c6', '#91cc75', '#fac858', '#ee6666']
// Values distributed evenly across 5 color stops
```

## Tooltip Formatting

Customize tooltip display using formatter strings:

```typescript
// Default formats:
PopulationGeoChart: '{b}<br/>Population: {c}M'
GDPGeoChart: '{b}<br/>GDP: ${c}B'
Others: '{b}<br/>Value: {c}'

// Format variables:
{b} = Country name
{c} = Value
{d} = Percentage (for some chart types)
```

**Examples:**
```typescript
tooltipFormatter: "{b}: {c}"                    // "China: 1439"
tooltipFormatter: "{b}<br/>Population: {c}M"    // "China\nPopulation: 1439M"
tooltipFormatter: "GDP: ${c} billion"           // "GDP: $21427 billion"
```

## Theme Integration

All components respect the theme from `ChartThemeContext`:

```typescript
const { theme } = useChartTheme();

// Theme properties used:
theme.text.color          // Text and label colors
theme.grid.borderColor    // Country border colors
theme.series.colors       // Emphasis/selection colors
```

You can override theme properties via the `theme` prop:

```tsx
<PopulationGeoChart 
  theme={{
    text: { color: '#ff0000' },
    grid: { borderColor: '#00ff00' }
  }}
/>
```

## Responsive Sizing

All components are wrapped with `withResponsiveContainer`, which provides responsive width based on container size:

```tsx
// Width is automatically calculated
<PopulationGeoChart height={400} />

// Or provide explicit width
<PopulationGeoChart width={800} height={400} />
```

## Complete Example

```tsx
import { 
  PopulationGeoChart, 
  GDPGeoChart, 
  DefaultGeoChart, 
  InteractiveGeoChart 
} from '@/components/chart/geo';

function MyGeoCharts() {
  const populationData = [
    { name: 'China', value: 1439 },
    { name: 'India', value: 1380 },
    { name: 'United States', value: 331 },
  ];

  const gdpData = [
    { name: 'United States', value: 21427 },
    { name: 'China', value: 14342 },
    { name: 'Japan', value: 5081 },
  ];

  return (
    <>
      {/* Simple population map */}
      <PopulationGeoChart 
        data={populationData}
        height={400}
      />

      {/* GDP map with custom range */}
      <GDPGeoChart 
        data={gdpData}
        visualMapMax={25000}
        tooltipFormatter="{b}<br/>GDP: ${c}B USD"
        height={400}
      />

      {/* Compact default map */}
      <DefaultGeoChart 
        data={populationData}
        colors={['#a8e6cf', '#4ecdc4', '#667eea']}
        height={300}
      />

      {/* Interactive map with labels */}
      <InteractiveGeoChart 
        data={gdpData}
        showLabel={true}
        roam={true}
        colors={['#e3f2fd', '#90caf9', '#42a5f5', '#1e88e5', '#1565c0']}
        height={600}
      />
    </>
  );
}
```

## Default Values Summary

| Component | Height | VisualMapMin | VisualMapMax | Roam | Colors |
|-----------|--------|--------------|--------------|------|--------|
| PopulationGeoChart | 400 | 0 | 1500 | true | 4 colors |
| GDPGeoChart | 400 | 0 | 20000 | true | 5 colors |
| DefaultGeoChart | 350 | 0 | 600 | false | 3 colors |
| InteractiveGeoChart | 450 | 0 | 1000 | true | 5 colors |

