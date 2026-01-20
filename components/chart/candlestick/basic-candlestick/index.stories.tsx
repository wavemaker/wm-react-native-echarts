import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { BasicCandlestickChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Candlestick/BasicCandlestickChart',
  component: BasicCandlestickChart,
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
} satisfies Meta<typeof BasicCandlestickChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

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

export const Default: Story = {
  args: {
    xAxisData: sampleXAxisData,
    data: sampleData,
    width: 400,
    height: 450,
  },
};
