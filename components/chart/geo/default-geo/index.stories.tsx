import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { DefaultGeoChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Geo/DefaultGeoChart',
  component: DefaultGeoChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of country data with names and values',
    },
    visualMapMin: {
      control: 'number',
      description: 'Minimum value for the visual map scale',
    },
    visualMapMax: {
      control: 'number',
      description: 'Maximum value for the visual map scale',
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
} satisfies Meta<typeof DefaultGeoChart>;

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
      { name: 'United States', value: 500 },
      { name: 'China', value: 450 },
      { name: 'Japan', value: 300 },
      { name: 'Germany', value: 250 },
      { name: 'United Kingdom', value: 200 },
    ],
    visualMapMin: 0,
    visualMapMax: 600,
    width: 400,
    height: 350,
  },
};
