import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { SemiCircularGaugeChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Gauge/SemiCircularGaugeChart',
  component: SemiCircularGaugeChart,
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
    axisColors: {
      control: 'object',
      description: 'Array of colors for the axis segments',
    },
    axisColorLengths: {
      control: 'object',
      description: 'Array of endpoint values for each color segment',
    },
    axisBgColor: {
      control: 'color',
      description: 'Background color for the axis line',
    },
    axisWidth: {
      control: 'number',
      description: 'Width of the axis line in pixels',
    },
    tickColor: {
      control: 'color',
      description: 'Color for the tick marks and split lines',
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
} satisfies Meta<typeof SemiCircularGaugeChart>;

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
    value: 85,
    min: 0,
    max: 100,
    width: 400,
    height: 250,
  },
};
