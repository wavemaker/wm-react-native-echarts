import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { LineChart } from './line-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Line',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Chart data (single series, multiple series, or named series)',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    type: {
      control: 'select',
      options: ['default', 'smooth', 'step'],
      description: 'Curve type',
    },
    step: {
      control: 'select',
      options: [false, 'start', 'middle', 'end'],
      description: 'Step interpolation mode',
    },
    symbol: {
      control: 'select',
      options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond'],
      description: 'Symbol type for data points',
    },
    symbolSize: {
      control: 'number',
      description: 'Size of the symbol',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend',
    },
    showYAxis: {
      control: 'boolean',
      description: 'Whether to show Y-axis',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
  },
});

// Default Line Chart - matches default-line.chart
export const Default: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'smooth',
    boundaryGap: false,
  },
};

// Interactive Line Chart - matches interactive-line.chart
export const Interactive: Story = {
  args: {
    data: [
      { name: 'Desktop', data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828] },
      { name: 'Mobile', data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010] },
    ],
    width: 400,
    height: 450,
    type: 'smooth',
    boundaryGap: false,
    showLegend: true,
  },
};

// Multiple Line Chart - matches multiple-line.chart
export const Multiple: Story = {
  args: {
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    type: 'smooth',
    boundaryGap: false,
    showLegend: true,
  },
};

// Linear Line Chart - matches linear-line.chart
export const Linear: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'default',
    boundaryGap: false,
  },
};

// Step Line Chart - matches step-line.chart
export const Step: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'step',
    step: 'middle',
    boundaryGap: false,
  },
};

// Dots Line Chart - matches dots-line.chart
export const Dots: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'smooth',
    symbol: 'circle',
    symbolSize: 6,
    boundaryGap: false,
  },
};

// Dots Colors Line Chart - matches dots-colors-line.chart (AreaChart does not support per-point itemStyle; use colors prop)
export const DotsColors: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'default',
    symbol: 'circle',
    symbolSize: 6,
    boundaryGap: false,
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
  },
};

// Custom Dots Line Chart (AreaChart/LineChart do not support data point labels)
export const CustomLabel: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    type: 'default',
    symbol: 'circle',
    symbolSize: 6,
    boundaryGap: false,
  },
};
