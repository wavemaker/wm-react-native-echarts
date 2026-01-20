import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { InteractiveBarChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Bar/InteractiveBarChart',
  component: InteractiveBarChart,
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
      description: 'Array of numeric values for each bar',
    },
    color: {
      control: 'color',
      description: 'Color for the bars',
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
} satisfies Meta<typeof InteractiveBarChart>;

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
    xAxisData: ['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24'],
    data: [800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400],
    width: 400,
    height: 450,
  },
};

