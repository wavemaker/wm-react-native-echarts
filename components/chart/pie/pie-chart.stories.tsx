import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { PieChart } from './pie-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items for the pie slices',
    },
    stackedData: {
      control: 'object',
      description: 'Array of configurations for stacked/concentric pie charts',
    },
    radius: {
      control: 'object',
      description: 'Radius of the pie chart (string for pie, array for donut)',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show labels on the slices',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend',
    },
    centerText: {
      control: 'text',
      description: 'Main text to display in the center (for donut charts)',
    },
    centerSubtext: {
      control: 'text',
      description: 'Subtitle text below the main center text',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Basic Pie Chart - matches basic-pie.chart
export const Basic: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 173, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: '50%',
  },
};

// Donut Chart - matches donut.chart
export const Donut: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 173, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: ['40%', '70%'],
  },
};

// Label Pie Chart - matches label-pie.chart
export const Label: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 173, name: 'Other' },
      { value: 90, name: 'Unknown' },
    ],
    width: 400,
    height: 400,
    radius: '50%',
    showLabel: true,
    showLabelLine: true,
    labelFormatter: '{c}',
  },
};

// Legend Pie Chart - matches legend-pie.chart
export const Legend: Story = {
  args: {
    data: [
      { value: 275, name: 'Chrome' },
      { value: 200, name: 'Safari' },
      { value: 187, name: 'Firefox' },
      { value: 173, name: 'Edge' },
      { value: 90, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: '50%',
    showLegend: true,
    legendConfig: {
      orient: 'horizontal',
      bottom: '10%',
      left: 'center',
    },
  },
};

// Donut Text Chart - matches donut-text.chart
export const DonutText: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 90, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: ['40%', '70%'],
    centerText: '752',
    centerSubtext: 'Visitors',
    centerTextFontSize: 24,
    centerSubtextFontSize: 14,
  },
};

// Donut Active Chart - matches donut-active.chart
export const DonutActive: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop', selected: true },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 173, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: ['40%', '70%'],
    selectedMode: 'single',
    selectedOffset: 10,
  },
};

// Stacked Pie Chart - matches stacked-pie.chart
export const Stacked: Story = {
  args: {
    stackedData: [
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
          { value: 130, name: 'Other' },
        ],
      },
    ],
    width: 400,
    height: 400,
  },
};

// Interactive Pie Chart - matches interactive-pie.chart
export const Interactive: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 90, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: ['40%', '70%'],
    centerText: '752',
    centerSubtext: 'Visitors',
    centerTextFontSize: 24,
    centerSubtextFontSize: 14,
    selectedMode: 'single',
    selectedOffset: 10,
  },
};

// Separator None Pie Chart - matches separator-none-pie.chart
export const SeparatorNone: Story = {
  args: {
    data: [
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 173, name: 'Other' },
    ],
    width: 400,
    height: 400,
    radius: '50%',
    gap: 0,
  },
};
