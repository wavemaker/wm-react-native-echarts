# Gauge Charts - Props API Reference

Quick reference guide for all gauge chart component props.

## Table of Contents
- [DefaultGaugeChart](#defaultgaugechart)
- [ProgressGaugeChart](#progressgaugechart)
- [TemperatureGaugeChart](#temperaturegaugechart)
- [GpuUsageGaugeChart](#gpuusagegaugechart)

---

## DefaultGaugeChart

Standard gauge chart with colored segments and pointer.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `75` | Current value to display |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `width` | `number` | `220` | Chart width in pixels |
| `height` | `number` | `240` | Chart height in pixels |
| `theme` | `Partial<ChartTheme>` | - | Custom theme overrides (via HOC) |

### Example

```tsx
<DefaultGaugeChart 
  value={85}
  min={0}
  max={100}
/>
```

**Note**: Colors are automatically determined by the `colorScheme` (dark/light mode). To customize colors, you would need to modify the component itself.

---

## ProgressGaugeChart

Composite progress gauge with radial background and detailed tick marks (two overlaid charts).

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `23` | Current value to display |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `width` | `number` | `220` | Chart width in pixels |
| `height` | `number` | `240` | Chart height in pixels |
| `theme` | `Partial<ChartTheme>` | - | Custom theme overrides (via HOC) |

### Example

```tsx
<ProgressGaugeChart 
  value={65}
  min={0}
  max={100}
/>
```

**Note**: 
- Composite chart with radial bar background and gauge overlay
- Displays value as "65/100" with pointer
- Shows blue progress ring behind the gauge
- Fixed dimensions (240x240) for proper overlay alignment
- Colors automatically adapt to dark/light mode

---

## TemperatureGaugeChart

Temperature display gauge with radiating tick marks (no pointer).

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `46` | Current value to display |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `90` | Maximum value |
| `width` | `number` | `220` | Chart width in pixels |
| `height` | `number` | `240` | Chart height in pixels |
| `theme` | `Partial<ChartTheme>` | - | Custom theme overrides (via HOC) |

### Example

```tsx
<TemperatureGaugeChart 
  value={72}
  min={0}
  max={100}
/>
```

**Note**: Displays value with "°" symbol. Colors automatically adapt to dark/light mode.

---

## GpuUsageGaugeChart

Usage gauge with colored axis line and custom detail display.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `30` | Current value to display |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `title` | `string` | `'GPU Usage'` | Title text displayed below gauge |
| `detailText` | `string` | `'86% (100°C)'` | Detail text displayed below title |
| `width` | `number` | `220` | Chart width in pixels |
| `height` | `number` | `240` | Chart height in pixels |
| `theme` | `Partial<ChartTheme>` | - | Custom theme overrides (via HOC) |

### Example

```tsx
<GpuUsageGaugeChart 
  value={45}
  title="CPU Usage"
  detailText="45% (65°C)"
/>
```

**Note**: Axis line colors are fixed (#3b82f6 for filled segment). Colors automatically adapt to dark/light mode.

---

## Common Props (All Components)

### width & height
- Can be number (pixels) or string (e.g., '100%')
- Managed by `withResponsiveContainer` HOC
- Defaults: width=220px, height=240px

### theme
- Partial theme object to override default theme
- Merged with parent theme if ChartThemeProvider is used
- Supports nested overrides (e.g., `{ series: { colors: ['#custom'] } }`)

---

## Theme Integration

All components use `ThemeContext` for dark/light mode support. The `colorScheme` value automatically determines appropriate colors.

### Using Theme Provider
```tsx
import { ThemeProvider } from '@/contexts/ThemeContext';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Automatic Color Adaptation
Components automatically adapt their colors based on `colorScheme`:
- **Dark Mode**: Lighter colors for visibility
- **Light Mode**: Darker colors for contrast

No manual color configuration is needed - colors are built into the component logic following the original gauge patterns.

---

## Color Reference

### Fixed Colors (All Modes)
- **Primary Blue**: `#3b82f6` (axis lines, pointers)
- **Secondary Blue**: `#8ec5ff` (gradient segments)
- **Pointer**: `#2D3748` (dark gray)
- **Temperature**: `#FFB84D` (orange for temp gauge)

### Dynamic Colors (Theme-Based)
**Dark Mode:**
- Tick marks: `rgba(255,255,255)` / `rgba(255,255,255,0.15)`
- Labels: `#999999` / `#888888`
- Background: `rgba(255,255,255,0.08)`
- Value text: `#ffffff`

**Light Mode:**
- Tick marks: `rgba(180,180,180)` / `rgba(200,200,200,0.3)`
- Labels: `#7A7A7A` / `#999999` / `#666666`
- Background: `rgba(220,220,220,0.4)` / `rgba(200,200,200,0.2)`
- Value text: `#000000` / `#1a1a1a`

---

## Best Practices

1. **Value Updates**: Use state to animate value changes smoothly (built-in animation)
2. **Theme Support**: Ensure ThemeContext is provided at app level
3. **Responsive Sizing**: Let HOC handle responsive sizing when possible
4. **Value Ranges**: Set appropriate min/max values for your use case
5. **Text Customization**: Use `title` and `detailText` props for GpuUsageGaugeChart
6. **Original Pattern**: Components follow exact original configurations - avoid heavy customization

---

## TypeScript

All components are fully typed with TypeScript interfaces. Import types:

```tsx
import type { ChartTheme } from '@/contexts/chart-theme.context';
```

---

## See Also

- [README.md](./README.md) - Complete documentation
- [Area Charts PROPS_API.md](../area/PROPS_API.md) - Similar pattern reference

