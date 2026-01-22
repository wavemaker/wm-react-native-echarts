import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { RadialChart } from './radial-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radial',
  component: RadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items for the radial chart',
    },
    stackedData: {
      control: 'object',
      description: 'Array of stacked series data',
    },
    ringWidth: {
      control: 'object',
      description: 'Inner and outer width of the ring [start, end]',
    },
    showGrid: {
      control: 'boolean',
      description: 'Whether to show grid lines',
    },
    centerText: {
      control: 'text',
      description: 'Main text to display in the center',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof RadialChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Grid Radial Chart - matches grid-radial.chart
export const Grid: Story = {
  args: {
    data: [
      { label: 'Mon', value: 60 },
      { label: 'Tue', value: 80 },
      { label: 'Wed', value: 90 },
      { label: 'Thu', value: 70 },
      { label: 'Fri', value: 85 },
      { label: 'Sat', value: 75 },
      { label: 'Sun', value: 65 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '10%',
    showGrid: true,
    showAngleAxis: true,
  },
};

// Label Radial Chart - matches label-radial.chart
export const Label: Story = {
  args: {
    data: [
      { label: 'Mon', value: 60 },
      { label: 'Tue', value: 80 },
      { label: 'Wed', value: 90 },
      { label: 'Thu', value: 70 },
      { label: 'Fri', value: 85 },
      { label: 'Sat', value: 75 },
      { label: 'Sun', value: 65 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '20%',
    showGrid: false,
    showAngleAxis: false,
  },
};

// Text Radial Chart - matches text-radial.chart
export const Text: Story = {
  args: {
    data: [
      { label: 'Mon', value: 60 },
      { label: 'Tue', value: 80 },
      { label: 'Wed', value: 90 },
      { label: 'Thu', value: 70 },
      { label: 'Fri', value: 85 },
      { label: 'Sat', value: 75 },
      { label: 'Sun', value: 65 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '10%',
    centerText: '85%',
    centerSubtext: 'Average',
    centerTextFontSize: 24,
    centerSubtextFontSize: 14,
    showGrid: false,
  },
};

// Stacked Radial Chart - matches stacked-radial.chart
export const Stacked: Story = {
  args: {
    stackedData: [
      { name: 'Desktop', value: 40 },
      { name: 'Mobile', value: 30 },
      { name: 'Tablet', value: 20 },
      { name: 'Other', value: 10 },
    ],
    width: 400,
    height: 450,
    ringWidth: [120, 200],
    centerText: '1,830',
    centerSubtext: 'Visitors',
    centerTextFontSize: 24,
    centerSubtextFontSize: 14,
  },
};
