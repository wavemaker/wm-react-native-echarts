import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { BasicRadarChart } from './index';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Radar/BasicRadarChart',
  component: BasicRadarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    indicators: {
      control: 'object',
      description: 'Array of indicators defining the radar axes',
    },
    data: {
      control: 'object',
      description: 'Array of values corresponding to each indicator',
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
} satisfies Meta<typeof BasicRadarChart>;

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
    indicators: [
      { name: 'Attack', max: 100 },
      { name: 'Defense', max: 100 },
      { name: 'Speed', max: 100 },
      { name: 'Strength', max: 100 },
      { name: 'Endurance', max: 100 },
    ],
    data: [80, 90, 70, 85, 75],
    width: 400,
    height: 300,
  },
};
