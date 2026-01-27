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
    xAxisData: {
      control: 'object',
      description: 'X-axis labels',
    },
    data: {
      control: 'object',
      description: 'Chart data (single series, multiple series, or named series)',
    },
    yAxisData: {
      control: 'object',
      description: 'Y-axis labels (optional)',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    smooth: {
      control: 'boolean',
      description: 'Whether to use smooth curve interpolation',
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
    lineWidth: {
      control: 'number',
      description: 'Width of the line in pixels',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend',
    },
    showYAxisLabels: {
      control: 'boolean',
      description: 'Whether to show Y-axis labels',
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
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    boundaryGap: false,
  },
};

// Interactive Line Chart - matches interactive-line.chart
export const Interactive: Story = {
  args: {
    xAxisData: ['Apr 2', 'Apr 7', 'Apr 12', 'Apr 17', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 2', 'Jun 7', 'Jun 12', 'Jun 18', 'Jun 24', 'Jun 30'],
    data: [
      { name: 'Desktop', data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828] },
      { name: 'Mobile', data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010] },
    ],
    width: 400,
    height: 450,
    smooth: true,
    boundaryGap: false,
    showLegend: true,
  },
};

// Multiple Line Chart - matches multiple-line.chart
export const Multiple: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    boundaryGap: false,
    showLegend: true,
  },
};

// Linear Line Chart - matches linear-line.chart
export const Linear: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: false,
    boundaryGap: false,
  },
};

// Step Line Chart - matches step-line.chart
export const Step: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    step: 'middle',
    boundaryGap: false,
  },
};

// Dots Line Chart - matches dots-line.chart
export const Dots: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    boundaryGap: false,
  },
};

// Dots Colors Line Chart - matches dots-colors-line.chart
export const DotsColors: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { value: 186, itemStyle: { color: '#3b82f6' } },
      { value: 305, itemStyle: { color: '#10b981' } },
      { value: 237, itemStyle: { color: '#f59e0b' } },
      { value: 73, itemStyle: { color: '#ef4444' } },
      { value: 209, itemStyle: { color: '#8b5cf6' } },
      { value: 214, itemStyle: { color: '#ec4899' } },
    ],
    width: 400,
    height: 350,
    smooth: false,
    symbol: 'circle',
    symbolSize: 6,
    boundaryGap: false,
  },
};

// Custom Label Line Chart - matches custom-label-line.chart
export const CustomLabel: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { value: 186, label: { formatter: '186' } },
      { value: 305, label: { formatter: '305' } },
      { value: 237, label: { formatter: '237' } },
      { value: 73, label: { formatter: '73' } },
      { value: 209, label: { formatter: '209' } },
      { value: 214, label: { formatter: '214' } },
    ],
    width: 400,
    height: 350,
    smooth: false,
    symbol: 'circle',
    symbolSize: 6,
    showLabels: true,
    labelPosition: 'right',
    boundaryGap: false,
  },
};
