# Gauge Chart Components

A collection of independent, self-contained gauge chart components for React Native applications using ECharts.

## Overview

This directory contains 4 distinct gauge chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance visualization.

## Architecture

### Design Principles

1. **Complete Independence**: Each component is self-contained with no shared dependencies beyond core libraries
2. **Optimized Imports**: Components only import the specific ECharts modules they need
3. **Theme Awareness**: All components use ThemeContext for dark/light mode support
4. **Clean API**: Charts expose necessary properties for customization (value, min, max, etc.)
5. **HOC Composition**: Components are wrapped with `withResponsiveContainer` and `withChartTheme` for enhanced capabilities
6. **Exact Original Pattern**: Components preserve the exact original gauge configurations

### Component Structure

Each component follows this structure:
```typescript
- Import only required ECharts components and HOCs
- Register components with echarts.use()
- Define props interface with width, height, and theme
- Create inner ChartComponent with useTheme hook (from ThemeContext)
- Create chart ref with useRef
- Use useMemo for option configuration with colorScheme-based theming
- useEffect for chart initialization and cleanup
- Return SkiaChart directly (no wrapper View)
- Export with HOC composition: withResponsiveContainer(withChartTheme(ChartComponent))
```

## Components

### 1. DefaultGaugeChart
**Purpose**: Standard gauge chart with colored segments and pointer

**Features**:
- Colored axis line with three segments
- Smooth pointer animation
- Value display with formatting
- Tick marks and labels
- Height: 240px

**Data**:
- Value: 0-100 (default: 50)

**Props**:
```typescript
interface DefaultGaugeChartProps {
  value?: number;              // Current value (default: 50)
  min?: number;                // Minimum value (default: 0)
  max?: number;                // Maximum value (default: 100)
  pointerColor?: string;       // Pointer color (theme-based)
  axisLineColor?: string;      // Primary axis line color (theme-based)
  axisLineWidth?: number;      // Width of axis line (default: 30)
  height?: number;             // Chart height
  width?: number;              // Chart width
}
```

**Dependencies**:
- GaugeChart

---

### 2. ProgressGaugeChart
**Purpose**: Composite progress gauge with radial background and detailed tick marks

**Features**:
- **Composite chart** with two overlaid layers:
  1. Radial bar background (shows progress ring in blue)
  2. Gauge with pointer and detailed markings
- Custom pointer with anchor point
- Detailed tick marks
- Value with unit display (e.g., "23/100")
- Radial progress visualization
- Height: 240px, Width: 240px (fixed for proper overlay)

**Data**:
- Value: 0-100 (default: 23)

**Props**:
```typescript
interface ProgressGaugeChartProps {
  value?: number;              // Current value (default: 23)
  min?: number;                // Minimum value (default: 0)
  max?: number;                // Maximum value (default: 100)
  height?: number;             // Chart height (default: 240)
  width?: number;              // Chart width (default: 240)
}
```

**Dependencies**:
- GaugeChart
- BarChart (for radial background)
- PolarComponent

**Note**: This is a composite chart with two layers. The dimensions are optimized for the overlay effect (radial: 240x240, gauge: 200x240).

---

### 3. TemperatureGaugeChart
**Purpose**: Temperature display gauge with radiating tick marks

**Features**:
- No pointer (static display)
- Radiating tick marks
- Large value display with unit
- Minimalist design
- Height: 240px

**Data**:
- Value: 0-90° (default: 46)

**Props**:
```typescript
interface TemperatureGaugeChartProps {
  value?: number;              // Current value (default: 46)
  min?: number;                // Minimum value (default: 0)
  max?: number;                // Maximum value (default: 90)
  unit?: string;               // Unit symbol (default: '°')
  tickColor?: string;          // Tick mark color (theme-based)
  labelColor?: string;         // Label text color (theme-based)
  valueColor?: string;         // Value text color (theme-based)
  height?: number;             // Chart height
  width?: number;              // Chart width
}
```

**Dependencies**:
- GaugeChart

---

### 4. GpuUsageGaugeChart
**Purpose**: Usage gauge with colored axis line and custom detail display

**Features**:
- Colored axis line with threshold
- Pointer with custom position
- Title and detail text
- Compact design
- Height: 240px

**Data**:
- Value: 0-100 (default: 30)

**Props**:
```typescript
interface GpuUsageGaugeChartProps {
  value?: number;              // Current value (default: 30)
  min?: number;                // Minimum value (default: 0)
  max?: number;                // Maximum value (default: 100)
  title?: string;              // Title text (default: 'GPU Usage')
  detailText?: string;         // Detail text (default: '86% (100°C)')
  pointerColor?: string;       // Pointer color (default: '#2D3748')
  axisLineWidth?: number;      // Width of axis line (default: 50)
  axisLineColor?: string;      // Axis line color (theme-based)
  axisLineThreshold?: number;  // Threshold for color change (default: 0.3)
  height?: number;             // Chart height
  width?: number;              // Chart width
}
```

**Dependencies**:
- GaugeChart

---

## Usage

### Basic Usage

```typescript
import { DefaultGaugeChart } from '@/components/chart/gauge/default-gauge.chart';

export default function MyScreen() {
  return (
    <View>
      <DefaultGaugeChart value={75} />
    </View>
  );
}
```

### Custom Colors

```typescript
import { ProgressGaugeChart } from '@/components/chart/gauge/progress-gauge.chart';

export default function MyScreen() {
  return (
    <ProgressGaugeChart
      value={65}
      pointerColor="#10b981"
      tickColor="#6b7280"
      labelColor="#4b5563"
    />
  );
}
```

### Temperature Display

```typescript
import { TemperatureGaugeChart } from '@/components/chart/gauge/temperature-gauge.chart';

export default function MyScreen() {
  return (
    <TemperatureGaugeChart
      value={72}
      max={100}
      unit="°F"
      valueColor="#ef4444"
    />
  );
}
```

### Usage Monitoring

```typescript
import { GpuUsageGaugeChart } from '@/components/chart/gauge/gpu-usage-gauge.chart';

export default function MyScreen() {
  return (
    <GpuUsageGaugeChart
      value={45}
      title="CPU Usage"
      detailText="45% (65°C)"
      axisLineThreshold={0.5}
    />
  );
}
```

### Using Multiple Charts

```typescript
import { DefaultGaugeChart } from '@/components/chart/gauge/default-gauge.chart';
import { TemperatureGaugeChart } from '@/components/chart/gauge/temperature-gauge.chart';
import { GpuUsageGaugeChart } from '@/components/chart/gauge/gpu-usage-gauge.chart';
import { ScrollView, View } from 'react-native';

export default function GaugeChartGallery() {
  return (
    <ScrollView>
      <DefaultGaugeChart value={50} />
      <TemperatureGaugeChart value={46} />
      <GpuUsageGaugeChart value={30} title="GPU" />
    </ScrollView>
  );
}
```

## Theme Support

All components use the `useTheme` hook from `@/contexts/ThemeContext` for dark/light mode support. The `colorScheme` value determines the appropriate colors for each theme.

### Theme-Aware Properties

Components automatically adjust colors based on `colorScheme`:
- **Dark Mode** (`colorScheme === 'dark'`): Uses lighter colors for visibility on dark backgrounds
- **Light Mode** (`colorScheme === 'light'`): Uses darker colors for visibility on light backgrounds

Dynamic color examples:
- **Tick Marks**: `'rgba(255,255,255)' : 'rgba(180,180,180)'` (dark : light)
- **Labels**: `'#999999' : '#7A7A7A'` (dark : light)
- **Background**: `'rgba(255,255,255,0.08)' : 'rgba(220,220,220,0.4)'` (dark : light)

### HOC Composition

Components are enhanced with two Higher-Order Components:

1. **withChartTheme**: Provides theme context and customization
2. **withResponsiveContainer**: Handles responsive sizing and container logic

```typescript
export const DefaultGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent));
```

## Styling

Components are designed for minimal styling overhead:

### Chart Dimensions
- **Width**: Passed as prop (default: 220px), managed by `withResponsiveContainer` HOC
- **Height**: Passed as prop (default: 240px)
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
- **Height**: Prop-based (default: 240px)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `series`: Gauge type with various configurations
- `pointer`: Optional pointer with custom icons and colors
- `axisTick`: Configurable tick marks
- `axisLabel`: Optional labels with formatting
- `detail`: Value display with custom formatting
- Chart options built with `useMemo` for optimal performance

## Gauge Patterns

### Pointer Styles
- **Standard**: Default ECharts pointer
- **Custom Path**: SVG path-based custom pointers
- **No Pointer**: For static displays (e.g., Temperature)

### Axis Line Styles

#### Solid Color
```typescript
axisLine: {
  lineStyle: {
    width: 30,
    color: [[1, '#3b82f6']],
  },
}
```

#### Multi-Segment Color
```typescript
axisLine: {
  lineStyle: {
    width: 30,
    color: [
      [0.3, '#3b82f6'],
      [0.7, '#8ec5ff'],
      [1, '#dddddd'],
    ],
  },
}
```

#### Hidden
```typescript
axisLine: {
  show: false,
}
```

## Color Palette

### Primary Blue
- Solid: `#3b82f6` (rgb(59, 130, 246))
- Light: `#8ec5ff`

### Pointer & Anchors
- Dark: `#2D3748`

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
- Ensure ThemeContext is provided at app level
- Animate value changes for smooth transitions
- Test on both iOS and Android platforms
- Use the provided props for customization (value, min, max, etc.)

### Don'ts ❌
- Don't modify the chart ref directly
- Don't remove useEffect or useMemo dependencies
- Don't nest charts deeply (performance impact)
- Don't use without proper error boundaries
- Don't bypass the HOC wrappers (use the exported component)
- Don't modify core gauge configurations (use the exact original pattern)

## Customization

To customize a chart, copy the component and modify:

1. **Value**: Update the `value` prop for different readings
2. **Colors**: Change `pointerColor`, `axisLineColor`, or use theme
3. **Dimensions**: Adjust `width` and `height` props
4. **Angles**: Modify `startAngle` and `endAngle` in options
5. **Options**: Add/remove ECharts configuration properties

### Example: Custom Gauge

```typescript
<DefaultGaugeChart
  value={85}
  min={0}
  max={100}
  pointerColor="#10b981"
  axisLineColor="#10b981"
  axisLineWidth={40}
  height={280}
/>
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
- Ensure theme colors are properly formatted (hex/rgba)
- Verify HOC composition order: `withResponsiveContainer(withChartTheme(...))`

### Performance Issues
- Reduce number of tick marks
- Simplify pointer animations
- Consider throttling value updates

## File Structure

```
components/chart/gauge/
├── README.md                          # This file
├── index.ts                           # Export barrel file
├── DefaultGaugeChart.tsx              # ~140 lines - Standard gauge with colored segments
├── ProgressGaugeChart.tsx             # ~260 lines - Composite progress gauge (radial + gauge overlay)
├── TemperatureGaugeChart.tsx          # ~130 lines - Temperature display gauge
└── GpuUsageGaugeChart.tsx             # ~140 lines - Usage gauge with custom detail
```

## Version History

### Current Version (v1.0)
- **ThemeContext Integration**: All components use `colorScheme` for dark/light mode support
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Customizable Props**: Value, min, max, width, height exposed as properties
- **Simplified Structure**: No StyleSheet or View wrapper, cleaner component code
- **Exact Original Pattern**: Preserves original gauge configurations with dynamic theming
- Independent component architecture
- No shared dependencies beyond HOCs and contexts

## License

Follow your project's license terms.

## Contributing

When adding new gauge chart components:
1. Follow the established component structure with HOC composition
2. Import only required ECharts modules
3. Use `useTheme` hook from ThemeContext and `colorScheme` for dynamic theming
4. Build chart options with `useMemo` for performance
5. Include proper error handling and cleanup
6. Expose relevant props for customization (value, min, max, etc.)
7. Export with HOC wrappers: `withResponsiveContainer(withChartTheme(ChartComponent))`
8. Preserve exact original configurations where applicable
9. Update this README with component details
10. Test on both iOS and Android platforms

## Support

For issues or questions:
- Check ECharts documentation: https://echarts.apache.org/
- Review react-native-echarts: https://github.com/wuba/react-native-echarts
- Refer to component source code for implementation details

