import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GradientAreaChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Area/GradientAreaChart',
  component: GradientAreaChart,
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
      description: 'Array of data series with gradient-filled areas',
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
} satisfies Meta<typeof GradientAreaChart>;

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
      { data: [186, 305, 237, 73, 209, 214] },
      { data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
  },
};
