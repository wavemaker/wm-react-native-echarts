import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { DonutTextChart } from './donut-text.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Pie/DonutTextChart',
  component: DonutTextChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of data items for the donut slices',
    },
    radius: {
      control: 'object',
      description: 'Inner and outer radius as percentage strings [innerRadius, outerRadius]',
    },
    centerText: {
      control: 'text',
      description: 'Main text to display in the center',
    },
    centerSubtext: {
      control: 'text',
      description: 'Subtitle text below the main center text',
    },
    centerTextFontSize: {
      control: 'number',
      description: 'Font size for the center main text',
    },
    centerSubtextFontSize: {
      control: 'number',
      description: 'Font size for the center subtitle',
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
} satisfies Meta<typeof DonutTextChart>;

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
      { value: 275, name: 'Desktop' },
      { value: 200, name: 'Mobile' },
      { value: 187, name: 'Tablet' },
      { value: 90, name: 'Other' },
    ],
    radius: ['40%', '70%'],
    centerText: '752',
    centerSubtext: 'Visitors',
    centerTextFontSize: 24,
    centerSubtextFontSize: 16,
    width: 400,
    height: 400,
  },
};
