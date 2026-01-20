import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { VolumeCandlestickChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Candlestick/VolumeCandlestickChart',
  component: VolumeCandlestickChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    xAxisData: {
      control: 'object',
      description: 'Array of date/time labels for the X-axis',
    },
    priceData: {
      control: 'object',
      description: 'Array of OHLC price data. Each item is [open, close, low, high]',
    },
    volumeData: {
      control: 'object',
      description: 'Array of volume data corresponding to each price period',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    colors: {
      control: 'object',
      description: 'Colors for the chart',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof VolumeCandlestickChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Sample price data: [open, close, low, high]
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
];

const sampleVolumeData = [
  150000, 180000, 220000, 175000, 200000, 185000, 195000, 210000, 190000,
  205000,
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

export const Default: Story = {
  args: {
    xAxisData: sampleXAxisData,
    priceData: samplePriceData,
    volumeData: sampleVolumeData,
    width: 400,
    height: 450,
  },
};
