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
    borderRadius: 8,
  },
});


// Label Radial Chart - matches label-radial.chart
export const Default: Story = {
  args: {
    data: [
      { label: 'Q1', value: 60 },
      { label: 'Q2', value: 80 },
      { label: 'Q3', value: 90 },
      { label: 'Q4', value: 70 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '20%',
    showGrid: false,
    showAngleAxis: false,
  },
};


// Grid Radial Chart - matches grid-radial.chart
export const Grid: Story = {
  args: {
    data: [
      { label: 'Q1', value: 60 },
      { label: 'Q2', value: 80 },
      { label: 'Q3', value: 90 },
      { label: 'Q4', value: 70 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '10%',
    showGrid: true,
    showAngleAxis: false,
  },
};


// Grid Radial Chart - matches grid-radial.chart
export const WithAxis: Story = {
  args: {
    data: [
      { label: 'Q1', value: 60 },
      { label: 'Q2', value: 80 },
      { label: 'Q3', value: 90 },
      { label: 'Q4', value: 70 },
    ],
    width: 400,
    height: 450,
    ringWidth: [30, 140],
    ringGap: '10%',
    showGrid: false,
    showAngleAxis: true,
  },
};