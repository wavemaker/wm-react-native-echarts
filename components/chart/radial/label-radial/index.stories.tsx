import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { LabelRadialChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radial/LabelRadialChart',
  component: LabelRadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items to display',
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
} satisfies Meta<typeof LabelRadialChart>;

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
      { label: 'Jan', value: 80 },
      { label: 'Feb', value: 65 },
      { label: 'Mar', value: 90 },
      { label: 'Apr', value: 75 },
      { label: 'May', value: 85 },
      { label: 'Jun', value: 70 },
    ],
    ringWidth: [30, 140],
    ringGap: '20%',
    width: 400,
    height: 450,
  },
};
