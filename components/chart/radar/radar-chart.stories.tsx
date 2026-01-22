import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { RadarChart } from './radar-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radar',
  component: RadarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    indicators: {
      control: 'object',
      description: 'Array of indicators defining the radar axes',
    },
    data: {
      control: 'object',
      description: 'Data for the chart (single or multiple series)',
    },
    shape: {
      control: 'select',
      options: ['polygon', 'circle'],
      description: 'Shape of the radar grid',
    },
    showArea: {
      control: 'boolean',
      description: 'Whether to show area fill',
    },
    showSymbol: {
      control: 'boolean',
      description: 'Whether to show symbols on data points',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Basic Radar Chart - matches basic-radar.chart
export const Basic: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [4200, 3000, 20000, 35000, 50000, 18000],
    width: 400,
    height: 400,
    shape: 'polygon',
    showArea: true,
    areaOpacity: 0.5,
  },
};

// Multiple Radar Chart - matches multiple-radar.chart
export const Multiple: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [
      { name: 'Allocated Budget', value: [4200, 3000, 20000, 35000, 50000, 18000] },
      { name: 'Actual Spending', value: [5000, 14000, 28000, 26000, 42000, 21000] },
    ],
    width: 400,
    height: 400,
    shape: 'polygon',
    showArea: true,
    showLegend: true,
  },
};

// Grid Circle Radar Chart - matches grid-circle-radar.chart
export const GridCircle: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [4200, 3000, 20000, 35000, 50000, 18000],
    width: 400,
    height: 400,
    shape: 'circle',
    showArea: true,
    areaOpacity: 0.5,
  },
};

// Dots Radar Chart - matches dots-radar.chart
export const Dots: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [4200, 3000, 20000, 35000, 50000, 18000],
    width: 400,
    height: 400,
    shape: 'polygon',
    showArea: true,
    showSymbol: true,
    symbol: 'circle',
    symbolSize: 6,
    areaOpacity: 0.5,
  },
};

// Lines Only Radar Chart - matches lines-only-radar.chart
export const LinesOnly: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [4200, 3000, 20000, 35000, 50000, 18000],
    width: 400,
    height: 400,
    shape: 'polygon',
    showArea: false,
    showLine: true,
    lineWidth: 2,
  },
};

// Grid Filled Radar Chart - matches grid-filled-radar.chart
export const GridFilled: Story = {
  args: {
    indicators: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 },
    ],
    data: [4200, 3000, 20000, 35000, 50000, 18000],
    width: 400,
    height: 400,
    shape: 'polygon',
    showSplitArea: true,
    showArea: true,
    areaOpacity: 0.5,
  },
};
