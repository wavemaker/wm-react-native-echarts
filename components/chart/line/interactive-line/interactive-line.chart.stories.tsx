import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { InteractiveLineChart } from './interactive-line.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Line/InteractiveLineChart',
  component: InteractiveLineChart,
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
} satisfies Meta<typeof InteractiveLineChart>;

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
    xAxisData: [
      'Apr 2',
      'Apr 7',
      'Apr 12',
      'Apr 17',
      'Apr 22',
      'Apr 28',
      'May 4',
      'May 9',
      'May 15',
      'May 21',
      'May 27',
      'Jun 2',
      'Jun 7',
      'Jun 12',
      'Jun 18',
      'Jun 24',
      'Jun 30',
    ],
    data: [
      {
        name: 'Desktop',
        data: [
          7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200,
          23800, 25300, 24100, 23700, 23900, 24100, 23828,
        ],
      },
      {
        name: 'Mobile',
        data: [
          5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800,
          24100, 22900, 22100, 22300, 22500, 24010,
        ],
      },
    ],
    width: 400,
    height: 450,
  },
};
