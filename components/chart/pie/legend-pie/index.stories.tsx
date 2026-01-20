import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { LegendPieChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie/LegendPieChart',
  component: LegendPieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items for the pie slices',
    },
    radius: {
      control: 'text',
      description: 'Radius of the pie chart as a percentage string',
    },
    legendOrient: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the legend',
    },
    legendBottom: {
      control: 'text',
      description: 'Position of legend from bottom as percentage',
    },
    legendLeft: {
      control: 'text',
      description: 'Position of legend from left as percentage or alignment',
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
} satisfies Meta<typeof LegendPieChart>;

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
      { value: 275, name: 'Chrome' },
      { value: 200, name: 'Safari' },
      { value: 187, name: 'Firefox' },
      { value: 90, name: 'Edge' },
    ],
    radius: '60%',
    width: 400,
    height: 400,
  },
};
