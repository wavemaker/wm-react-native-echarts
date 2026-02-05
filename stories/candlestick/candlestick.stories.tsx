import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Candlestick', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

/** Stock price data 9 AM–4 PM: one 15-min candle per slot (28 candles). Format: [open, close, low, high]. When endPrice is set, the series progresses from startPrice to endPrice with small random variation. */
function generateMarketHoursCandles(
  startPrice: number,
  volatility: number,
  seed = 42,
  endPrice?: number
): [number, number, number, number][] {
  const candles: [number, number, number, number][] = [];
  const periods = (7 * 60) / 15; // 28 (9:00–16:00)
  let price = startPrice;
  let s = seed;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return (s % 1000) / 1000 - 0.5;
  };
  const round2 = (n: number) => Math.round(n * 100) / 100;
  const totalRange = endPrice != null ? endPrice - startPrice : 0;

  for (let i = 0; i < periods; i++) {
    const open = price;
    let close: number;
    if (endPrice != null) {
      const progress = (i + 1) / periods;
      const targetClose = startPrice + totalRange * progress;
      const noise = volatility * (rnd() * 4 + rnd() * 2.5);
      close = Math.max(0.01, targetClose + noise);
      if (i === periods - 1) close = endPrice;
    } else {
      close = Math.max(0.01, open + volatility * (rnd() * 3.5 + 0.7));
    }
    price = close;
    const wickLow = Math.abs(volatility * (rnd() * 3 + 0.8));
    const wickHigh = Math.abs(volatility * (rnd() * 3 + 0.8));
    const low = Math.min(open, close) - wickLow;
    const high = Math.max(open, close) + wickHigh;
    const o = round2(open);
    const c = round2(close);
    const l = Math.max(0.01, round2(low));
    const h = round2(high);
    candles.push([o, c, l, h]);
  }
  return candles;
}

/** X-axis labels for market hours: "09:00", "09:15", … "15:45" (9 AM–4 PM, every 15 min). */
const xAxisMarketHours = Array.from({ length: 28 }, (_, i) => {
  const minutes = 9 * 60 + i * 15;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
});

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const defaultData: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
  [30, 25, 20, 40],
  [35, 45, 30, 50],
];

const stockMarketHoursData = generateMarketHoursCandles(104, 0.35, 42, 107.6);


/** Candlestick with volume bars below. */
export const WithVolume: Story = {
  args: {
    data: defaultData,
    xAxisData,
    volumeData: [20, 40, 31, 38, 25, 30, 35],
  },
};

/** Candlestick with moving averages (MA5, MA10, MA20). */
export const WithMovingAverage: Story = {
  args: {
    data: defaultData,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    ma10: [28, 32, 30, 26, 28, 30, 35],
    ma20: [30, 30, 28, 25, 27, 29, 32],
    showLegend: true,
  },
};

/** Candlestick with highlighter disabled. */
export const ShowHighlighter: Story = {
  args: {
    data: defaultData,
    xAxisData,
    showHighlighter: false,
  },
};

/** Stock price 9 AM–4 PM with one 10-min candle per slot (42 candles). */
export const Default: Story = {
  args: {
    data: stockMarketHoursData,
    xAxisData: xAxisMarketHours,
  },
};
