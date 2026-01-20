import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { StackedRadialChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radial/StackedRadialChart',
  component: StackedRadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data to stack',
    },
    centerText: {
      control: 'text',
      description: 'Main text to display in the center',
    },
    centerSubtext: {
      control: 'text',
      description: 'Subtitle text below the main center text',
    },
    ringWidth: {
      control: 'object',
      description: 'Inner and outer width of the ring [start, end]',
    },
    ringGap: {
      control: 'text',
      description: 'Gap between rings as percentage string',
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
} satisfies Meta<typeof StackedRadialChart>;

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
      { name: 'Direct', value: 30 },
      { name: 'Email', value: 25 },
      { name: 'Social', value: 20 },
      { name: 'Other', value: 25 },
    ],
    centerText: '1,830',
    centerSubtext: 'Visitors',
    ringWidth: [120, 200],
    width: 400,
    height: 350,
  },
};
