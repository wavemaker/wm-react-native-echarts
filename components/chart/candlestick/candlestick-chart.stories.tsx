import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { CandlestickChart } from './candlestick-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Candlestick',
  component: CandlestickChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    xAxisData: {
      control: 'object',
      description: 'Array of date/time labels for the X-axis',
    },
    data: {
      control: 'object',
      description: 'Array of OHLC data. Each item is [open, close, low, high]',
    },
    priceData: {
      control: 'object',
      description: 'Array of OHLC price data (used with MA or Volume)',
    },
    ma5Data: {
      control: 'object',
      description: '5-period moving average data',
    },
    ma10Data: {
      control: 'object',
      description: '10-period moving average data',
    },
    ma20Data: {
      control: 'object',
      description: '20-period moving average data',
    },
    volumeData: {
      control: 'object',
      description: 'Array of volume data',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof CandlestickChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Helper function to calculate moving average
const calculateMA = (data: number[][], period: number): number[] => {
  const closePrices = data.map((candle) => candle[1]); // Extract close prices
  const ma: number[] = [];

  for (let i = 0; i < closePrices.length; i++) {
    if (i < period - 1) {
      ma.push(NaN); // Not enough data yet
    } else {
      const sum = closePrices
        .slice(i - period + 1, i + 1)
        .reduce((a, b) => a + b, 0);
      ma.push(sum / period);
    }
  }

  return ma;
};

// Sample candlestick data: [open, close, low, high]
const sampleData = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
  [32, 40, 30, 45],
  [40, 35, 33, 42],
  [35, 45, 34, 48],
  [45, 38, 36, 47],
  [38, 42, 37, 44],
];

const sampleXAxisData = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
];

// Sample price data for MA and Volume charts: [open, close, low, high]
const samplePriceData = [
  [100, 120, 95, 130],
  [120, 115, 110, 125],
  [115, 130, 112, 135],
  [130, 125, 120, 140],
  [125, 135, 122, 145],
  [135, 140, 130, 150],
  [140, 138, 135, 148],
  [138, 145, 136, 150],
  [145, 142, 140, 148],
  [142, 150, 141, 155],
  [150, 148, 145, 152],
  [148, 155, 147, 160],
  [155, 152, 150, 158],
  [152, 160, 151, 165],
  [160, 158, 155, 162],
  [158, 165, 157, 170],
  [165, 162, 160, 168],
  [162, 170, 161, 175],
  [170, 168, 165, 172],
  [168, 175, 167, 180],
];

const sampleMA5 = calculateMA(samplePriceData, 5);
const sampleMA10 = calculateMA(samplePriceData, 10);
const sampleMA20 = calculateMA(samplePriceData, 20);

const sampleVolumeData = [
  150000, 180000, 220000, 175000, 200000, 185000, 195000, 210000, 190000,
  205000, 195000, 220000, 210000, 225000, 215000, 230000, 220000, 235000,
  225000, 240000,
];

const sampleXAxisDataMA = Array.from(
  { length: samplePriceData.length },
  (_, i) => `Day ${i + 1}`
);

export const Default: Story = {
  args: {
    xAxisData: sampleXAxisData,
    data: sampleData,
    width: 400,
    height: 450,
  },
};

export const WithMovingAverages: Story = {
  args: {
    xAxisData: sampleXAxisDataMA,
    data: samplePriceData,
    ma5Data: sampleMA5,
    ma10Data: sampleMA10,
    ma20Data: sampleMA20,
    width: 400,
    height: 450,
  },
};

export const WithVolume: Story = {
  args: {
    xAxisData: sampleXAxisDataMA.slice(0, 10),
    data: samplePriceData.slice(0, 10),
    volumeData: sampleVolumeData.slice(0, 10),
    width: 400,
    height: 450,
  },
};
