import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { LabelPieChart } from './label-pie.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie/LabelPieChart',
  component: LabelPieChart,
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
    labelFormatter: {
      control: 'text',
      description: 'Format string for the labels',
    },
    labelFontSize: {
      control: 'number',
      description: 'Font size for the labels in pixels',
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
} satisfies Meta<typeof LabelPieChart>;

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
      { value: 335, name: 'Category A' },
      { value: 310, name: 'Category B' },
      { value: 234, name: 'Category C' },
      { value: 135, name: 'Category D' },
      { value: 156, name: 'Category E' },
    ],
    radius: '60%',
    width: 400,
    height: 400,
  },
};
