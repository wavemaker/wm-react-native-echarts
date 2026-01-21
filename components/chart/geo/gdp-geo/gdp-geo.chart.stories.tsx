import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GDPGeoChart } from './gdp-geo.chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Geo/GDPGeoChart',
  component: GDPGeoChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of country GDP data with names and values (in billions)',
    },
    visualMapMin: {
      control: 'number',
      description: 'Minimum value for the visual map scale',
    },
    visualMapMax: {
      control: 'number',
      description: 'Maximum value for the visual map scale',
    },
    tooltipFormatter: {
      control: 'text',
      description: 'Custom tooltip formatter string',
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
} satisfies Meta<typeof GDPGeoChart>;

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
      { name: 'United States', value: 21000 },
      { name: 'China', value: 14000 },
      { name: 'Japan', value: 5000 },
      { name: 'Germany', value: 4000 },
      { name: 'India', value: 3000 },
    ],
    visualMapMin: 0,
    visualMapMax: 20000,
    width: 400,
    height: 400,
  },
};
