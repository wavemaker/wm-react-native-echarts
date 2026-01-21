import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { LabelLineChart } from './label-line.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Line/LabelLineChart',
  component: LabelLineChart,
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
      description: 'Array of numeric values for the chart data',
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
} satisfies Meta<typeof LabelLineChart>;

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
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
  },
};
