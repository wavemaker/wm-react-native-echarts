import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { StackedPieChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie/StackedPieChart',
  component: StackedPieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of configurations for each concentric ring',
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
} satisfies Meta<typeof StackedPieChart>;

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
      {
        name: 'Q1-Q2',
        radius: ['0%', '35%'],
        data: [
          { value: 200, name: 'Desktop' },
          { value: 120, name: 'Mobile' },
          { value: 180, name: 'Tablet' },
          { value: 240, name: 'Other' },
        ],
      },
      {
        name: 'Q3-Q4',
        radius: ['45%', '60%'],
        data: [
          { value: 320, name: 'Desktop' },
          { value: 250, name: 'Mobile' },
          { value: 200, name: 'Tablet' },
          { value: 180, name: 'Other' },
        ],
      },
    ],
    width: 400,
    height: 400,
  },
};
