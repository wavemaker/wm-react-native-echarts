# Pie Chart Components - Props API Reference

Complete reference for all pie chart component props.

## Common Types

### ChartData
```typescript
interface ChartData {
  value: number;
  name: string;
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
  text: {
    color: string;
  };
}
```

---

## 1. BasicPieChart

### Props
```typescript
interface BasicPieChartProps {
  data?: ChartData[];
  width?: number;
  height?: number;
  radius?: string | [string, string];
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  data: [
    { value: 335, name: 'Category A' },
    { value: 310, name: 'Category B' },
    { value: 234, name: 'Category C' },
    { value: 135, name: 'Category D' },
    { value: 156, name: 'Category E' }
  ],
  width: 220,
  height: 350,
  radius: '60%'
}
```

### Usage
```typescript
<BasicPieChart
  data={[
    { value: 450, name: 'Product A' },
    { value: 320, name: 'Product B' },
    { value: 280, name: 'Product C' }
  ]}
  radius="70%"
/>
```

---

## 2. DonutChart

### Props
```typescript
interface DonutChartProps {
  data?: ChartData[];
  width?: number;
  height?: number;
  radius?: [string, string];
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  data: [...],
  width: 220,
  height: 350,
  radius: ['40%', '70%']
}
```

### Usage
```typescript
<DonutChart
  data={myData}
  radius={['50%', '80%']}
/>
```

---

## 3. LabelPieChart

### Props
```typescript
interface LabelPieChartProps {
  data?: ChartData[];
  width?: number;
  height?: number;
  radius?: string;
  showLabels?: boolean;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  showLabels: true,
  radius: '60%'
}
```

### Usage
```typescript
<LabelPieChart
  data={myData}
  showLabels={true}
/>
```

---

## 4. LegendPieChart

### Props
```typescript
interface LegendPieChartProps {
  data?: ChartData[];
  width?: number;
  height?: number;
  radius?: string;
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<LegendPieChart
  data={myData}
  radius="65%"
/>
```

---

## 5. InteractivePieChart

### Props
```typescript
interface InteractivePieChartProps {
  data?: ChartData[];
  width?: number;
  height?: number;
  radius?: string;
  centerText?: {
    title: string;
    subtitle: string;
  };
  theme?: Partial<ChartTheme>;
}
```

### Usage
```typescript
<InteractivePieChart
  data={myData}
  centerText={{
    title: 'Total',
    subtitle: '1,234'
  }}
/>
```

---

## Notes

- All components are wrapped with `withResponsiveContainer` and `withChartTheme` HOCs
- Theme colors are automatically applied from `ChartThemeContext`
- Data values should be positive numbers
- All components include proper TypeScript typing for IDE autocomplete
- For donut charts, radius is an array `[innerRadius, outerRadius]`
- For pie charts, radius is a single value

## Color Customization

You can customize colors in two ways:

1. **Per item** - Add `itemStyle.color` to each data point
2. **Theme** - Pass a custom theme with series colors

```typescript
// Per item colors
const data = [
  { value: 100, name: 'A', itemStyle: { color: '#ff6384' } },
  { value: 200, name: 'B', itemStyle: { color: '#36a2eb' } }
];

// Theme colors
const customTheme = {
  series: {
    colors: ['#ff6384', '#36a2eb', '#ffce56']
  }
};
```

