import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { ShapeRadialChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radial/ShapeRadialChart',
  component: ShapeRadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value to display',
    },
    maxValue: {
      control: 'number',
      description: 'Maximum value for the scale',
    },
    label: {
      control: 'text',
      description: 'Label text for the value',
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
} satisfies Meta<typeof ShapeRadialChart>;

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
    value: 1830,
    maxValue: 3000,
    label: 'Visitors',
    centerText: '1,830',
    centerSubtext: 'of 3,000',
    ringWidth: [40, 80],
    width: 400,
    height: 350,
  },
};
