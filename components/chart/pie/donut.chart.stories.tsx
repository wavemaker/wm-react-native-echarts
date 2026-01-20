import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { DonutChart } from './donut.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items for the donut slices',
    },
    radius: {
      control: 'object',
      description: 'Inner and outer radius as percentage strings [innerRadius, outerRadius]',
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
} satisfies Meta<typeof DonutChart>;

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
    data: [
      { value: 335, name: 'Category A' },
      { value: 310, name: 'Category B' },
      { value: 234, name: 'Category C' },
      { value: 135, name: 'Category D' },
      { value: 156, name: 'Category E' },
    ],
    radius: ['40%', '70%'],
    width: 400,
    height: 400,
  },
};
