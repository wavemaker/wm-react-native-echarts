import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { PopulationGeoChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Geo/PopulationGeoChart',
  component: PopulationGeoChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of country population data with names and values (in millions)',
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
} satisfies Meta<typeof PopulationGeoChart>;

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
      { name: 'China', value: 1400 },
      { name: 'India', value: 1380 },
      { name: 'United States', value: 330 },
      { name: 'Indonesia', value: 270 },
      { name: 'Pakistan', value: 220 },
    ],
    visualMapMin: 0,
    visualMapMax: 1500,
    width: 400,
    height: 400,
  },
};
