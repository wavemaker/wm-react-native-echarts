# Candlestick Chart Components - Props API

All candlestick chart components expose customizable properties for x-axis labels and chart data. This makes them flexible and reusable with your own financial data.

## Common Props

### BasicCandlestickChart

```typescript
interface BasicCandlestickChartProps {
  xAxisData?: string[];              // X-axis labels (e.g., dates, days)
  data?: number[][];                 // Candlestick data [open, close, low, high]
  width?: number;                    // Chart width in pixels (default: 220)
  height?: number;                   // Chart height in pixels (default: 400)
  theme?: Partial<ChartTheme>;       // Custom theme overrides
}
```

### VolumeCandlestickChart

```typescript
interface VolumeCandlestickChartProps {
  xAxisData?: string[];              // X-axis labels
  priceData?: number[][];            // Candlestick data [open, close, low, high]
  volumeData?: number[];             // Volume data (simple numbers)
  width?: number;                    // Chart width in pixels (default: 220)
  height?: number;                   // Chart height in pixels (default: 450)
  theme?: Partial<ChartTheme>;       // Custom theme overrides
}
```

### CandlestickMAChart

```typescript
interface CandlestickMAChartProps {
  xAxisData?: string[];              // X-axis labels
  priceData?: number[][];            // Candlestick data [open, close, low, high]
  ma5Data?: number[];                // MA5 moving average data
  ma10Data?: number[];               // MA10 moving average data
  ma20Data?: number[];               // MA20 moving average data
  width?: number;                    // Chart width in pixels (default: 220)
  height?: number;                   // Chart height in pixels (default: 400)
  theme?: Partial<ChartTheme>;       // Custom theme overrides
}
```

## Data Format

### Candlestick Data
Each data point is an array of 4 values: `[open, close, low, high]`

```typescript
// Example single data point
[20, 34, 10, 38]
// open: 20 (opening price)
// close: 34 (closing price)
// low: 10 (lowest price in the period)
// high: 38 (highest price in the period)

// Complete dataset example
const priceData = [
  [20, 34, 10, 38],  // Day 1
  [40, 35, 30, 50],  // Day 2
  [31, 38, 33, 44],  // Day 3
  [38, 15, 5, 42],   // Day 4
  [25, 32, 28, 35],  // Day 5
];
```

**Important Notes:**
- Format is `[open, close, low, high]`, NOT `[open, close, high, low]`
- All values should be numbers
- low should be ≤ open, close, high
- high should be ≥ open, close, low
- If close > open: bullish (red candle, Asian convention)
- If close < open: bearish (green candle, Asian convention)

## Usage Examples

### 1. Basic Candlestick Chart (Default Data)

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  return <BasicCandlestickChart />;
}
```

### 2. Basic Candlestick Chart (Custom Data)

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  const priceData = [
    [100, 120, 95, 130],   // open, close, low, high
    [120, 115, 110, 125],
    [115, 130, 112, 135],
    [130, 125, 120, 140],
    [125, 135, 122, 145],
  ];

  return (
    <BasicCandlestickChart
      xAxisData={['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05']}
      data={priceData}
      height={450}
    />
  );
}
```

### 3. Volume Candlestick Chart

```typescript
import { VolumeCandlestickChart } from '@/components/chart/candlestick';

export default function StockAnalysis() {
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
    [130, 125, 120, 140],
    [125, 135, 122, 145],
  ];

  const volumeData = [150000, 180000, 220000, 175000, 200000];

  return (
    <VolumeCandlestickChart
      xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
      priceData={priceData}
      volumeData={volumeData}
    />
  );
}
```

### 4. K-Line Chart with Moving Averages

```typescript
import { CandlestickMAChart } from '@/components/chart/candlestick';

export default function TechnicalAnalysis() {
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
    [130, 125, 120, 140],
    [125, 135, 122, 145],
    [135, 140, 130, 150],
    [140, 138, 135, 148],
  ];

  // Calculate or provide moving average data
  const ma5Data = [110, 118, 122, 127, 133, 137, 140];
  const ma10Data = [108, 115, 120, 125, 130, 135, 138];
  const ma20Data = [105, 112, 118, 123, 128, 132, 135];

  return (
    <CandlestickMAChart
      xAxisData={['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']}
      priceData={priceData}
      ma5Data={ma5Data}
      ma10Data={ma10Data}
      ma20Data={ma20Data}
    />
  );
}
```

### 5. Real-time Stock Data from API

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';
import { useEffect, useState } from 'react';

export default function StockChart({ symbol }) {
  const [stockData, setStockData] = useState({
    xAxisData: [],
    data: [],
  });

  useEffect(() => {
    // Fetch stock data from API
    fetch(`https://api.example.com/stock/${symbol}`)
      .then(res => res.json())
      .then(data => {
        setStockData({
          xAxisData: data.dates,
          data: data.candles, // [[open, close, low, high], ...]
        });
      });
  }, [symbol]);

  return (
    <BasicCandlestickChart
      xAxisData={stockData.xAxisData}
      data={stockData.data}
    />
  );
}
```

### 6. Multiple Stock Comparison

```typescript
import { ScrollView, View, Text } from 'react-native';
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function StockComparison() {
  const stockA = {
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    data: [
      [100, 120, 95, 130],
      [120, 115, 110, 125],
      [115, 130, 112, 135],
      [130, 125, 120, 140],
      [125, 135, 122, 145],
    ],
  };

  const stockB = {
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    data: [
      [50, 55, 48, 60],
      [55, 52, 50, 58],
      [52, 60, 51, 65],
      [60, 58, 56, 64],
      [58, 65, 57, 70],
    ],
  };

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Stock A (AAPL)
        </Text>
        <BasicCandlestickChart
          xAxisData={stockA.xAxisData}
          data={stockA.data}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Stock B (GOOGL)
        </Text>
        <BasicCandlestickChart
          xAxisData={stockB.xAxisData}
          data={stockB.data}
        />
      </View>
    </ScrollView>
  );
}
```

### 7. Full Trading Dashboard

```typescript
import { ScrollView, View, Text } from 'react-native';
import {
  BasicCandlestickChart,
  VolumeCandlestickChart,
  CandlestickMAChart,
} from '@/components/chart/candlestick';

export default function TradingDashboard() {
  // Sample data - in production, fetch from API
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
    [130, 125, 120, 140],
    [125, 135, 122, 145],
    [135, 140, 130, 150],
    [140, 138, 135, 148],
  ];

  const volumeData = [150000, 180000, 220000, 175000, 200000, 185000, 195000];
  const ma5Data = [110, 118, 122, 127, 133, 137, 140];
  const ma10Data = [108, 115, 120, 125, 130, 135, 138];
  const ma20Data = [105, 112, 118, 123, 128, 132, 135];
  const dates = ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'];

  return (
    <ScrollView>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
          AAPL - Apple Inc.
        </Text>
        <Text style={{ fontSize: 16, color: '#10b981', marginBottom: 15 }}>
          $145.00 (+5.00, +3.57%)
        </Text>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Price Chart
        </Text>
        <BasicCandlestickChart
          xAxisData={dates}
          data={priceData}
        />
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Price & Volume
        </Text>
        <VolumeCandlestickChart
          xAxisData={dates}
          priceData={priceData}
          volumeData={volumeData}
        />
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Technical Analysis (with MA)
        </Text>
        <CandlestickMAChart
          xAxisData={dates}
          priceData={priceData}
          ma5Data={ma5Data}
          ma10Data={ma10Data}
          ma20Data={ma20Data}
        />
      </View>
    </ScrollView>
  );
}
```

### 8. Time Period Selector

```typescript
import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function StockChartWithPeriods() {
  const [period, setPeriod] = useState('1W');

  const data = {
    '1D': {
      xAxisData: ['9:00', '11:00', '13:00', '15:00', '17:00'],
      data: [[100, 105, 98, 108], [105, 102, 100, 107], [102, 110, 101, 112], [110, 108, 105, 113], [108, 115, 107, 118]],
    },
    '1W': {
      xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      data: [[100, 120, 95, 130], [120, 115, 110, 125], [115, 130, 112, 135], [130, 125, 120, 140], [125, 135, 122, 145]],
    },
    '1M': {
      xAxisData: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [[100, 110, 95, 115], [110, 125, 108, 130], [125, 120, 115, 135], [120, 140, 118, 150]],
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button title="1D" onPress={() => setPeriod('1D')} />
        <Button title="1W" onPress={() => setPeriod('1W')} />
        <Button title="1M" onPress={() => setPeriod('1M')} />
      </View>
      
      <BasicCandlestickChart
        xAxisData={data[period].xAxisData}
        data={data[period].data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});
```

### 9. Custom Theme Colors

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function CustomThemedChart() {
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
  ];

  // Custom theme override
  const customTheme = {
    axis: {
      x: { labelColor: '#8b5cf6' },
      y: { labelColor: '#8b5cf6' },
    },
    grid: {
      y: { lineColor: '#e9d5ff' },
    },
    tooltip: {
      backgroundColor: '#faf5ff',
      borderColor: '#8b5cf6',
    },
  };

  return (
    <BasicCandlestickChart
      xAxisData={['Mon', 'Tue', 'Wed']}
      data={priceData}
      theme={customTheme}
    />
  );
}
```

## Helper Functions

### Calculate Moving Averages

```typescript
function calculateMA(data: number[][], period: number): number[] {
  const closePrices = data.map(candle => candle[1]); // Extract close prices
  const ma: number[] = [];
  
  for (let i = 0; i < closePrices.length; i++) {
    if (i < period - 1) {
      ma.push(NaN); // Not enough data yet
    } else {
      const sum = closePrices.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
      ma.push(sum / period);
    }
  }
  
  return ma;
}

// Usage
const priceData = [[100, 120, 95, 130], ...];
const ma5 = calculateMA(priceData, 5);
const ma10 = calculateMA(priceData, 10);
const ma20 = calculateMA(priceData, 20);
```

### Format Date Labels

```typescript
function formatDateLabels(dates: Date[]): string[] {
  return dates.map(date => {
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  });
}

// Usage
const dates = [new Date('2024-01-01'), new Date('2024-01-02'), ...];
const xAxisData = formatDateLabels(dates);
```

### Parse API Response

```typescript
interface APICandle {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

function parseStockData(apiResponse: APICandle[]) {
  return {
    xAxisData: apiResponse.map(c => c.timestamp),
    priceData: apiResponse.map(c => [c.open, c.close, c.low, c.high]),
    volumeData: apiResponse.map(c => c.volume),
  };
}
```

## Tips

1. **Data Format**: Always use `[open, close, low, high]` format
2. **Data Validation**: Ensure low ≤ min(open, close) and high ≥ max(open, close)
3. **X-Axis Length**: Match xAxisData length with data array length
4. **Performance**: For large datasets, use dataZoom to limit visible range
5. **MA Calculation**: Start MA values from index `period-1` (or use NaN for earlier values)
6. **Volume Scale**: Volume values should be in reasonable range (e.g., thousands or millions)
7. **Date Formatting**: Use consistent date format for x-axis labels
8. **Theme Consistency**: Use theme prop for consistent styling across charts

## Color Conventions

### Asian Markets (Default)
- 🔴 Red = Bullish (Close > Open) - Price went up
- 🟢 Green = Bearish (Close < Open) - Price went down

### Western Markets (Reverse)
To match Western conventions, swap the colors in the component:
```typescript
itemStyle: {
  color: '#00da3c',      // Green for bullish
  color0: '#ec0000',     // Red for bearish
  borderColor: '#008F28',
  borderColor0: '#8A0000',
}
```

## TypeScript Support

All components are fully typed with TypeScript interfaces. Your IDE will provide autocomplete and type checking for all props.

```typescript
// Full type definitions
type CandleData = [open: number, close: number, low: number, high: number];

interface BasicCandlestickChartProps {
  xAxisData?: string[];
  data?: CandleData[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

## Common Patterns

### Loading State

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';
import { ActivityIndicator, View } from 'react-native';

export default function StockChart() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchStockData().then(d => {
      setData(d);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return <BasicCandlestickChart {...data} />;
}
```

### Error Handling

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';
import { Text } from 'react-native';

export default function StockChart() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchStockData()
      .then(setData)
      .catch(setError);
  }, []);

  if (error) {
    return <Text>Error loading chart: {error.message}</Text>;
  }

  return <BasicCandlestickChart {...data} />;
}
```

