import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { DotsColorsLineChart } from './dots-colors-line.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Line/DotsColorsLineChart',
  component: DotsColorsLineChart,
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
      description: 'Array of data points with optional individual colors for each dot',
    },
    lineColor: {
      control: 'color',
      description: 'Color for the connecting line',
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
      description: 'Width of the line in pixels',
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
} satisfies Meta<typeof DotsColorsLineChart>;

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
      { value: 186, itemStyle: { color: '#ef4444' } },
      { value: 305, itemStyle: { color: '#3b82f6' } },
      { value: 237, itemStyle: { color: '#10b981' } },
      { value: 73, itemStyle: { color: '#f59e0b' } },
      { value: 209, itemStyle: { color: '#8b5cf6' } },
      { value: 214, itemStyle: { color: '#ec4899' } },
    ],
    lineColor: '#3b82f6',
    width: 400,
    height: 350,
  },
};
