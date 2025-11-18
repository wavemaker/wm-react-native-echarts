# Radar Chart Components

A collection of independent, self-contained radar chart components for React Native applications using ECharts.

## Overview

This directory contains 11 distinct radar chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance visualization.

## Architecture

### Design Principles

1. **Complete Independence**: Each component is self-contained with no shared dependencies beyond core libraries
2. **Optimized Imports**: Components only import the specific ECharts modules they need
3. **Theme Awareness**: All components use ChartThemeContext for centralized theme management
4. **Clean API**: No title/subtitle components - charts display data only
5. **Customizable Props**: Indicators, data, dimensions, and theme exposed as properties
6. **HOC Composition**: Components are wrapped with `withResponsiveContainer` and `withChartTheme` for enhanced capabilities

### Component Structure

Each component follows this structure:
```typescript
- Import only required ECharts components and HOCs
- Register components with echarts.use()
- Define RadarIndicator interface
- Define props interface with width, height, and theme
- Create inner ChartComponent with useChartTheme hook
- Create chart ref with useRef
- Use useMemo for option configuration
- useEffect for chart initialization and cleanup
- Return SkiaChart directly (no wrapper View)
- Export with HOC composition: withResponsiveContainer(withChartTheme(ChartComponent))
```

### Radar Indicators

All radar chart components use indicators to define the axes:

```typescript
interface RadarIndicator {
  name: string;  // Axis label (e.g., 'January', 'Sales', 'Speed')
  max: number;   // Maximum value for the axis
}
```

## Components

### 1. BasicRadarChart
**Purpose**: Basic radar chart with filled area and no markers

**Features**:
- Single data series
- Polygon shape
- Filled area (opacity: 0.5)
- No markers (symbol: 'none')
- Grid lines visible
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 2. DotsRadarChart
**Purpose**: Radar chart with circular markers on data points

**Features**:
- Single data series
- Polygon shape
- Filled area (opacity: 0.5)
- Circle markers (size: 8)
- Grid lines visible
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 3. LinesOnlyRadarChart
**Purpose**: Radar chart showing only the line outline without fill

**Features**:
- Single data series
- Polygon shape
- No area fill
- Line only (width: 1)
- Grid lines visible
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 4. CustomLabelRadarChart
**Purpose**: Radar chart with custom labels showing values on data points

**Features**:
- Single data series
- Polygon shape
- Filled area (opacity: 0.3)
- Value labels visible on points
- Grid lines visible
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 5. GridNoneRadarChart
**Purpose**: Radar chart without grid lines or axes

**Features**:
- Single data series
- Polygon shape
- Filled area (opacity: 0.5)
- No grid lines
- No axis lines
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 6. GridCircleRadarChart
**Purpose**: Radar chart with circular grid instead of polygon

**Features**:
- Single data series
- Circle shape
- Filled area (opacity: 0.5)
- Circular grid lines
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 7. GridCircleNoLinesRadarChart
**Purpose**: Radar chart with circular grid but no axis lines

**Features**:
- Single data series
- Circle shape
- Filled area (opacity: 0.5)
- Circular grid lines
- No axis lines
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

---

### 8. GridCircleFilledRadarChart
**Purpose**: Radar chart with filled circular grid background

**Features**:
- Single data series
- Circle shape
- Filled area (opacity: 0.3)
- Gradient-filled grid background (6 levels)
- No grid lines or axis lines
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface GridCircleFilledRadarChartProps {
  indicators?: RadarIndicator[];
  data?: number[];
  areaColor?: string;              // Custom area fill color
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 9. GridFilledRadarChart
**Purpose**: Radar chart with filled polygon grid background

**Features**:
- Single data series
- Polygon shape
- Filled area (opacity: 0.3)
- Gradient-filled grid background (6 levels)
- No grid lines or axis lines
- Height: 300px

**Data**:
- Values: 240, 305, 237, 280, 209, 364
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface GridFilledRadarChartProps {
  indicators?: RadarIndicator[];
  data?: number[];
  areaColor?: string;              // Custom area fill color
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 10. MultipleRadarChart
**Purpose**: Radar chart showing multiple data series overlaid

**Features**:
- Multiple data series (2 by default)
- Polygon shape
- Different opacity levels per series
- Grid lines visible
- Height: 300px

**Data**:
- Series 1: 240, 305, 237, 280, 209, 364
- Series 2: 150, 230, 200, 150, 180, 170
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface RadarSeriesData {
  value: number[];
  name?: string;
}

interface MultipleRadarChartProps {
  indicators?: RadarIndicator[];
  series?: RadarSeriesData[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 11. LegendRadarChart
**Purpose**: Radar chart with legend showing multiple series

**Features**:
- Multiple data series (2 by default)
- Polygon shape
- Legend at bottom
- Different opacity levels per series
- Grid lines visible
- Height: 300px

**Data**:
- Desktop: 240, 305, 237, 280, 209, 364
- Mobile: 150, 230, 200, 150, 180, 170
- Indicators: 6 months (Jan-Jun), max: 400 each

**Dependencies**:
- RadarChart
- TooltipComponent
- GridComponent
- LegendComponent

**Props**:
```typescript
interface RadarSeriesData {
  value: number[];
  name: string;
}

interface LegendRadarChartProps {
  indicators?: RadarIndicator[];
  series?: RadarSeriesData[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

## Usage

### Basic Usage

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';

export default function MyScreen() {
  return (
    <View>
      <BasicRadarChart />
    </View>
  );
}
```

### Using Custom Indicators and Data

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';

export default function MyScreen() {
  return (
    <BasicRadarChart
      indicators={[
        { name: 'Sales', max: 100 },
        { name: 'Marketing', max: 100 },
        { name: 'Development', max: 100 },
        { name: 'Support', max: 100 },
        { name: 'HR', max: 100 },
      ]}
      data={[80, 75, 90, 85, 70]}
      height={350}
    />
  );
}
```

### Using Multiple Series

```typescript
import { LegendRadarChart } from '@/components/chart/radar/LegendRadarChart';

export default function MyScreen() {
  return (
    <LegendRadarChart
      indicators={[
        { name: 'Speed', max: 100 },
        { name: 'Strength', max: 100 },
        { name: 'Intelligence', max: 100 },
        { name: 'Agility', max: 100 },
        { name: 'Endurance', max: 100 },
      ]}
      series={[
        { name: 'Character A', value: [85, 70, 90, 75, 80] },
        { name: 'Character B', value: [70, 90, 75, 85, 70] },
      ]}
      height={350}
    />
  );
}
```

### Using Filled Grid Background

```typescript
import { GridCircleFilledRadarChart } from '@/components/chart/radar/GridCircleFilledRadarChart';

export default function MyScreen() {
  return (
    <GridCircleFilledRadarChart
      indicators={[
        { name: 'Q1', max: 400 },
        { name: 'Q2', max: 400 },
        { name: 'Q3', max: 400 },
        { name: 'Q4', max: 400 },
      ]}
      data={[320, 280, 350, 310]}
      areaColor="rgb(29, 78, 216)"
      height={350}
    />
  );
}
```

### Using Multiple Charts

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';
import { GridCircleRadarChart } from '@/components/chart/radar/GridCircleRadarChart';
import { LegendRadarChart } from '@/components/chart/radar/LegendRadarChart';
import { ScrollView } from 'react-native';

export default function RadarChartGallery() {
  return (
    <ScrollView>
      <BasicRadarChart />
      <GridCircleRadarChart />
      <LegendRadarChart />
    </ScrollView>
  );
}
```

## Theme Support

All components use the `useChartTheme` hook from `@/contexts/ChartThemeContext` for centralized theme management. Components are wrapped with the `withChartTheme` HOC to provide theme customization capabilities.

### Theme-Aware Properties

- **Series Colors**: `theme.series.colors[]` - Dynamic color palette for chart data
- **Axis Labels**: `theme.axis.x.labelColor` - Axis text colors
- **Grid Lines**: `theme.axis.y.tickColor`, `theme.axis.y.tickWidth` - Grid line styling
- **Axis Lines**: `theme.axis.y.lineColor`, `theme.axis.y.lineWidth` - Axis line styling

### HOC Composition

Components are enhanced with two Higher-Order Components:

1. **withChartTheme**: Provides theme context and customization
2. **withResponsiveContainer**: Handles responsive sizing and container logic

```typescript
export const BasicRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));
```

## Styling

Components are designed for minimal styling overhead:

### Chart Dimensions
- **Width**: Passed as prop (default: 220px), managed by `withResponsiveContainer` HOC
- **Height**: Passed as prop (default: 300px for all radar charts)
- **Responsive**: Container HOC handles responsive sizing based on context

### Container Styling
Container styling is handled by the `withResponsiveContainer` HOC, which provides:
- Responsive width calculations
- Proper spacing and margins
- Theme-aware background colors
- Platform-specific shadow effects

## Technical Details

### Dependencies

```json
{
  "@wuba/react-native-echarts": "^1.x.x",
  "echarts": "^5.x.x",
  "react": "^18.x.x",
  "react-native": "^0.x.x"
}
```

### Internal Dependencies

- `@/contexts/chart-container` - Provides `withResponsiveContainer` HOC
- `@/contexts/ChartThemeContext` - Provides `useChartTheme` hook and `withChartTheme` HOC

### ECharts Configuration

- **Renderer**: SVG (via SkiaRenderer)
- **Width**: Prop-based (default: 220px), managed by responsive container
- **Height**: Prop-based (default: 300px)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `tooltip`: Basic tooltip configuration
- `radar`: Radar configuration with indicators, shape, and grid settings
- `series`: Radar type with area styling, line styling, and markers
- Chart options built with `useMemo` for optimal performance

## Chart Patterns

### Shape Types
- **Polygon**: `shape: 'polygon'` - Multi-sided polygon connecting all axes
- **Circle**: `shape: 'circle'` - Circular grid

### Area Styles

#### Filled Area
```typescript
areaStyle: {
  opacity: 0.5,
}
```

#### No Fill (Lines Only)
```typescript
areaStyle: undefined,
lineStyle: { width: 1 },
```

#### Custom Fill Color
```typescript
areaStyle: {
  opacity: 0.3,
  color: 'rgb(29, 10, 239)',
}
```

### Grid Styles

#### With Grid Lines
```typescript
radar: {
  splitLine: {
    show: true,
    lineStyle: {
      color: theme.axis.y.tickColor,
    },
  },
}
```

#### Without Grid Lines
```typescript
radar: {
  splitLine: { show: false },
  axisLine: { show: false },
}
```

#### Filled Grid Background
```typescript
radar: {
  splitArea: {
    areaStyle: {
      color: [
        'rgba(96, 165, 250, 0.1)',
        'rgba(96, 165, 250, 0.2)',
        'rgba(96, 165, 250, 0.3)',
        'rgba(96, 165, 250, 0.4)',
        'rgba(96, 165, 250, 0.5)',
        'rgba(96, 165, 250, 0.6)',
      ],
    },
  },
}
```

### Marker Styles

#### No Markers
```typescript
symbol: 'none',
```

#### Circle Markers
```typescript
symbol: 'circle',
symbolSize: 8,
```

## Color Palette

### Primary Blue
- Light: `#60a5fa` (rgb(96, 165, 250))
- Dark: `#3b82f6` (rgb(59, 130, 246))

### Background Gradient
- Level 1: `rgba(96, 165, 250, 0.1)`
- Level 2: `rgba(96, 165, 250, 0.2)`
- Level 3: `rgba(96, 165, 250, 0.3)`
- Level 4: `rgba(96, 165, 250, 0.4)`
- Level 5: `rgba(96, 165, 250, 0.5)`
- Level 6: `rgba(96, 165, 250, 0.6)`

## Performance Considerations

1. **Efficient Rendering**: Uses Skia for hardware-accelerated rendering
2. **Optimized Re-renders**: 
   - `useMemo` for chart options to prevent unnecessary recalculations
   - `useEffect` dependencies minimize chart reinitialization
3. **Memory Management**: Proper cleanup with chart.dispose()
4. **Module Loading**: Only required ECharts components are loaded
5. **HOC Optimization**: Responsive container and theme HOCs minimize prop drilling

## Error Handling

All components include error handling:
- Try-catch blocks around chart initialization
- Console warnings for debugging
- Graceful cleanup on component unmount

## Best Practices

### Do's ✅
- Use within ScrollView for multiple charts
- Ensure ChartThemeContext is provided at app level
- Keep data arrays consistent with indicators length
- Test on both iOS and Android platforms
- Pass theme customization through the theme prop when needed

### Don'ts ❌
- Don't modify the chart ref directly
- Don't remove useEffect or useMemo dependencies
- Don't nest charts deeply (performance impact)
- Don't use without proper error boundaries
- Don't bypass the HOC wrappers (use the exported component)

## Customization

To customize a chart, copy the component and modify:

1. **Data**: Update the `data` arrays and `indicators`
2. **Colors**: Change `itemStyle.color` and `areaStyle.color`
3. **Dimensions**: Adjust `height` in echarts.init()
4. **Shape**: Change `shape` property ('polygon' or 'circle')
5. **Options**: Add/remove ECharts configuration properties

### Example: Custom Indicators

```typescript
indicators={[
  { name: 'Strength', max: 100 },
  { name: 'Speed', max: 100 },
  { name: 'Intelligence', max: 100 },
  { name: 'Agility', max: 100 },
  { name: 'Endurance', max: 100 },
  { name: 'Luck', max: 100 },
]}
data={[85, 90, 75, 80, 70, 65]}
```

## Troubleshooting

### Chart Not Rendering
- Verify ECharts dependencies are installed
- Check that SkiaRenderer is properly registered
- Ensure `withResponsiveContainer` HOC has proper context
- Verify parent component provides necessary space

### Theme Not Updating
- Verify ChartThemeContext is provided at app level
- Check `useChartTheme` hook is available in component tree
- Ensure theme colors are properly formatted (rgba)
- Verify HOC composition order: `withResponsiveContainer(withChartTheme(...))`

### Performance Issues
- Reduce number of indicators/axes
- Simplify grid configurations
- Consider pagination for many charts

## File Structure

```
components/chart/radar/
├── README.md                           # This file
├── BasicRadarChart.tsx                 # ~115 lines - Basic filled radar
├── DotsRadarChart.tsx                  # ~120 lines - With circular markers
├── LinesOnlyRadarChart.tsx             # ~115 lines - Lines only, no fill
├── CustomLabelRadarChart.tsx           # ~125 lines - With value labels
├── GridNoneRadarChart.tsx              # ~110 lines - No grid lines
├── GridCircleRadarChart.tsx            # ~120 lines - Circular grid
├── GridCircleNoLinesRadarChart.tsx     # ~120 lines - Circular grid, no axis lines
├── GridCircleFilledRadarChart.tsx      # ~135 lines - Circular grid with background
├── GridFilledRadarChart.tsx            # ~135 lines - Polygon grid with background
├── MultipleRadarChart.tsx              # ~140 lines - Multiple overlaid series
├── LegendRadarChart.tsx                # ~160 lines - Multiple series with legend
└── index.ts                            # Barrel exports
```

## Version History

### Current Version (v1.0)
- **ChartThemeContext Integration**: All components use centralized theme management
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Customizable Props**: Indicators, data, width, height, and theme exposed as properties
- **Simplified Structure**: No StyleSheet or View wrapper, cleaner component code
- **Theme-based Colors**: All colors sourced from theme context instead of hardcoded values
- Independent component architecture
- No shared dependencies beyond HOCs and contexts

## License

Follow your project's license terms.

## Contributing

When adding new radar chart components:
1. Follow the established component structure with HOC composition
2. Import only required ECharts modules
3. Use `useChartTheme` hook and theme-based colors
4. Build chart options with `useMemo` for performance
5. Include proper error handling and cleanup
6. Use RadarIndicator interface for axis configuration
7. Export with HOC wrappers: `withResponsiveContainer(withChartTheme(ChartComponent))`
8. Update this README with component details
9. Test on both iOS and Android platforms

## Support

For issues or questions:
- Check ECharts documentation: https://echarts.apache.org/
- Review react-native-echarts: https://github.com/wuba/react-native-echarts
- Refer to component source code for implementation details

