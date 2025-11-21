# Theme ItemStyles Migration

## Overview

This document describes the introduction of `itemStyles` array in the chart theme, which provides a centralized way to manage item styling across all charts.

## What Changed

### 1. Chart Theme Enhancement

Added a new `itemStyles` property to the `ChartTheme` type:

```typescript
type ItemStyle = {
  color: string;
  borderRadius?: number[];
  borderColor?: string;
  borderWidth?: number;
  borderType?: 'solid' | 'dashed' | 'dotted';
};

export type ChartTheme = {
  // ... existing properties
  itemStyles: ItemStyle[];
};
```

### 2. Default Theme

The default theme now includes 5 pre-configured item styles with a blue gradient:

```typescript
itemStyles: [
  { color: '#3b82f6', borderRadius: [4, 4, 4, 4] },
  { color: '#8ec5ff', borderRadius: [4, 4, 4, 4] },
  { color: '#60a5fa', borderRadius: [4, 4, 4, 4] },
  { color: '#93c5fd', borderRadius: [4, 4, 4, 4] },
  { color: '#bfdbfe', borderRadius: [4, 4, 4, 4] },
]
```

## Migrated Charts

### 1. MixedBarChart

**Before:**
```typescript
data = [
  { value: 8, itemStyle: { color: '#000080', borderRadius: [4, 4, 4, 4] } },
  { value: 12, itemStyle: { color: '#0000cd', borderRadius: [4, 4, 4, 4] } },
  ...
]
```

**After:**
```typescript
data = [8, 12, 35, 40, 65]
// Styling comes from theme.itemStyles automatically
```

### 2. ActiveBarChart

**Before:**
```typescript
data = [
  { value: 50, itemStyle: { color: '#3b82f6', borderRadius: [4, 4, 4, 4], ... } },
  ...
]
```

**After:**
```typescript
data = [50, 60, 70, 80, 90]
// Active bar gets theme.itemStyles[0], others get theme.itemStyles[1]
```

### 3. LabelRadialChart

**Before:**
```typescript
data = [
  { label: 'Chrome', value: 85, color: '#60a5fa' },
  { label: 'Safari', value: 70, color: '#3b82f6' },
  ...
]
```

**After:**
```typescript
data = [
  { label: 'Chrome', value: 85 },
  { label: 'Safari', value: 70 },
  ...
]
// Colors come from theme.itemStyles automatically
```

## Benefits

### 1. Cleaner Data Structure
- Data is now just values and labels
- No styling mixed with data
- Easier to work with dynamic data from APIs

### 2. Centralized Styling
- All item styles defined in one place (theme)
- Consistent colors across all charts
- Easy to change color schemes globally

### 3. Better Theme Support
- Users can customize all chart colors via theme
- No need to pass styles individually to each chart
- Follows theme-first design pattern

### 4. Flexible & Reusable
- ItemStyles cycle through array using modulo
- Works with any number of data points
- Can be overridden per-chart if needed

## Usage Examples

### Basic Usage
```typescript
import { MixedBarChart } from '@/components/chart/bar/mixed-bar.chart';

// Simple data, styling from theme
<MixedBarChart data={[10, 20, 30, 40, 50]} />
```

### Custom Theme Colors
```typescript
import { MixedBarChart } from '@/components/chart/bar/mixed-bar.chart';

<MixedBarChart 
  data={[10, 20, 30]} 
  theme={{
    itemStyles: [
      { color: '#ff6384', borderRadius: [8, 8, 0, 0] },
      { color: '#36a2eb', borderRadius: [8, 8, 0, 0] },
      { color: '#ffce56', borderRadius: [8, 8, 0, 0] },
    ]
  }}
/>
```

### Global Theme Override
```typescript
import { ChartThemeProvider } from '@/contexts/chart-theme.context';

const customTheme = {
  itemStyles: [
    { color: '#10b981', borderRadius: [4, 4, 4, 4] }, // Green
    { color: '#3b82f6', borderRadius: [4, 4, 4, 4] }, // Blue
    { color: '#f59e0b', borderRadius: [4, 4, 4, 4] }, // Orange
    { color: '#ec4899', borderRadius: [4, 4, 4, 4] }, // Pink
  ]
};

<ChartThemeProvider theme={customTheme}>
  <MixedBarChart data={[10, 20, 30, 40]} />
  <ActiveBarChart data={[15, 25, 35, 45]} />
  {/* All charts use the same theme colors */}
</ChartThemeProvider>
```

### Advanced Styling
```typescript
<MixedBarChart 
  data={[10, 20, 30]} 
  theme={{
    itemStyles: [
      { 
        color: '#ff6384',
        borderRadius: [8, 8, 0, 0],
        borderColor: '#cc0033',
        borderWidth: 2,
        borderType: 'dashed'
      },
      { 
        color: '#36a2eb',
        borderRadius: [0, 0, 8, 8],
        borderColor: '#0066cc',
        borderWidth: 2,
        borderType: 'solid'
      },
    ]
  }}
/>
```

## Migration Guide for Other Charts

If you want to migrate other charts to use `theme.itemStyles`:

1. **Update Props Interface**: Remove `itemStyle` from data structure, simplify to just values
2. **Update Default Data**: Remove embedded styling from default data
3. **Map Data with Theme Styles**: In `useMemo`, map data values and apply `theme.itemStyles` using modulo
4. **Update Documentation**: Add note about using `theme.itemStyles` in prop comments

Example pattern:
```typescript
const chartData = data.map((value, index) => {
  const itemStyle = theme.itemStyles[index % theme.itemStyles.length];
  return {
    value,
    itemStyle: {
      color: itemStyle.color,
      borderRadius: itemStyle.borderRadius || [4, 4, 4, 4],
      borderColor: itemStyle.borderColor,
      borderWidth: itemStyle.borderWidth,
      borderType: itemStyle.borderType,
    },
  };
});
```

## Backward Compatibility

⚠️ **Breaking Change**: This is a breaking change for charts that previously accepted complex data objects with embedded `itemStyle` properties.

**Migration Path**:
- Extract style properties from data objects
- Pass data as simple arrays
- Configure styles via `theme.itemStyles` prop

## Future Enhancements

Potential improvements:
1. Add more predefined color schemes (dark, light, colorful, monochrome)
2. Support for gradients in itemStyles
3. Animation styles in itemStyles
4. Per-item style overrides while still using theme as base

