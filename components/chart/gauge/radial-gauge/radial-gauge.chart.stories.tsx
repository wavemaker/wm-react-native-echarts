import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { RadialGaugeChart } from './radial-gauge.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Gauge/RadialGaugeChart',
  component: RadialGaugeChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value to display on the gauge',
    },
    min: {
      control: 'number',
      description: 'Minimum value of the gauge scale',
    },
    max: {
      control: 'number',
      description: 'Maximum value of the gauge scale',
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
} satisfies Meta<typeof RadialGaugeChart>;

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
    value: 75,
    min: 0,
    max: 100,
    width: 400,
    height: 240,
  },
};
