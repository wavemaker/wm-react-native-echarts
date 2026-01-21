import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { NegativeBarChart } from './negative-bar.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Bar/NegativeBarChart',
  component: NegativeBarChart,
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
      description: 'Array of numeric values (can include negative numbers)',
    },
    positiveColor: {
      control: 'color',
      description: 'Color for positive values',
    },
    negativeColor: {
      control: 'color',
      description: 'Color for negative values',
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
} satisfies Meta<typeof NegativeBarChart>;

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
    xAxisData: ['January', 'February', 'March', 'April', 'May', 'June'],
    data: [120, 150, -180, 110, -80, 160],
    width: 400,
    height: 350,
  },
};

