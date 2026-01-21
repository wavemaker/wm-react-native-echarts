import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { MultipleLineChart } from './multiple-line.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Line/MultipleLineChart',
  component: MultipleLineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    xAxisData: {
      control: 'object',
      description: 'X-axis labels. Can be a string array or object array with label and value',
    },
    data: {
      control: 'object',
      description: 'Array of named data series. Each series has a name and data array',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    lineWidth: {
      control: 'number',
      description: 'Width of the lines in pixels',
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
} satisfies Meta<typeof MultipleLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

export const Default: Story = {
  args: {
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [
      {
        name: 'Product A',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Product B',
        data: [80, 95, 110, 105, 125, 140, 150],
      },
      {
        name: 'Product C',
        data: [60, 70, 85, 90, 95, 110, 120],
      },
    ],
    width: 400,
    height: 350,
  },
};
