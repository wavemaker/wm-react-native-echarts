import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { StackedExpandedAreaChart } from './stacked-expanded-area.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Area/StackedExpandedAreaChart',
  component: StackedExpandedAreaChart,
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
      description: 'Array of data series to stack (normalized to percentages)',
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
} satisfies Meta<typeof StackedExpandedAreaChart>;

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
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { data: [100, 150, 120, 40, 110, 120] },
      { data: [86, 155, 117, 33, 99, 94] },
    ],
    width: 400,
    height: 350,
  },
};
