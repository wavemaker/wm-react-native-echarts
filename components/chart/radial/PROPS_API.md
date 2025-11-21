# Radial Chart Components - Props API Reference

Complete reference for all radial (polar/radar-style) chart component props.

## Common Types

### RadialData
```typescript
interface RadialData {
  value: number;
  name?: string;
  itemStyle?: {
    color?: string;
  };
}
```

### ChartTheme (Partial)
```typescript
interface ChartTheme {
  series: {
    colors: string[];
  };
  axis: {
    x: {
      labelColor: string;
    };
  };
}
```

---

## 1. LabelRadialChart

### Props
```typescript
interface LabelRadialChartProps {
  data?: RadialData[];
  width?: number;
  height?: number;
  radius?: string | [string, string];
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  data: Array of values with names,
  width: 220,
  height: 350,
  radius: '70%'
}
```

### Usage
```typescript
<LabelRadialChart
  data={[
    { value: 100, name: 'Category A' },
    { value: 80, name: 'Category B' },
    { value: 60, name: 'Category C' }
  ]}
  radius="75%"
/>
```

---

## 2. ShapeRadialChart

### Props
```typescript
interface ShapeRadialChartProps {
  data?: RadialData[];
  width?: number;
  height?: number;
  shape?: 'circle' | 'polygon';
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<ShapeRadialChart
  data={myData}
  shape="polygon"
/>
```

---

## 3. StackedRadialChart

### Props
```typescript
interface StackedRadialChartProps {
  data?: Array<{
    name: string;
    values: number[];
  }>;
  categories?: string[];
  width?: number;
  height?: number;
  radius?: string;
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<StackedRadialChart
  categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
  data={[
    { name: 'Series A', values: [10, 20, 30, 40, 50] },
    { name: 'Series B', values: [15, 25, 35, 45, 55] }
  ]}
/>
```

---

## 4. TextRadialChart

### Props
```typescript
interface TextRadialChartProps {
  data?: RadialData[];
  width?: number;
  height?: number;
  centerText?: {
    title: string;
    subtitle?: string;
  };
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<TextRadialChart
  data={myData}
  centerText={{
    title: 'Total',
    subtitle: '1,234'
  }}
/>
```

---

## 5. GridRadialChart

### Props
```typescript
interface GridRadialChartProps {
  data?: RadialData[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  gridType?: 'circle' | 'polygon';
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<GridRadialChart
  data={myData}
  showGrid={true}
  gridType="circle"
/>
```

---

## Notes

- Radial charts display data in a circular/polar coordinate system
- They are useful for cyclical data or showing relationships in a circular pattern
- All components are wrapped with `withResponsiveContainer` and `withChartTheme` HOCs
- Theme colors are automatically applied from `ChartThemeContext`
- Radius can be a single value (string like "70%") or array for nested rings
- All components include proper TypeScript typing for IDE autocomplete

## Common Use Cases

1. **Time cycles** - Hour of day, day of week, month patterns
2. **Directional data** - Compass directions, wind patterns
3. **Comparative analysis** - Multi-dimensional comparisons
4. **Progress tracking** - Circular progress indicators
5. **Skill ratings** - Radar-like skill assessments

## Example: Multi-Series Radial Chart

```typescript
import { StackedRadialChart } from '@/components/chart/radial/stacked-radial.chart';

export default function MyScreen() {
  return (
    <StackedRadialChart
      categories={['Q1', 'Q2', 'Q3', 'Q4']}
      data={[
        { 
          name: 'Revenue', 
          values: [100000, 120000, 115000, 130000] 
        },
        { 
          name: 'Costs', 
          values: [80000, 95000, 92000, 105000] 
        }
      ]}
      radius="70%"
    />
  );
}
```

