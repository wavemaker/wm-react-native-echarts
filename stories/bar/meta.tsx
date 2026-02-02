import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { BarChart } from '@components/chart/bar/bar-chart';
import { StyleSheet, View, Text } from 'react-native';
import { commonChartArgTypes } from '../common-chart-argTypes';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
  },
  sourceContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  sourceLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 6,
    color: 'rgba(0,0,0,0.5)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sourceCode: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

export default {
  title: 'Charts/Bar/Stack',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...(() => {
      const { symbol: _sym, symbolSize: _sz, ...rest } = commonChartArgTypes;
      return rest;
    })(),
    stack: {
      control: 'text',
      description: 'Stack ID for stacking multiple series. When set, bars stack on top of each other.',
    },
    stackNormalize: {
      control: 'boolean',
      description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
    },
    cornerRadius: {
      control: 'object',
      description:
        'Bar corner radius: a number (all corners) or array of 4 values [topLeft, topRight, bottomRight, bottomLeft]. Default: [4, 4, 0, 0]',
    },
    horizontal: {
      control: 'boolean',
      description:
        'When true, bars are horizontal (categories on Y-axis). Corner radius applies to the right edge. Default: false',
    },
  },
  decorators: [
    ((Story, context) => (
      <View style={styles.container}>
        <Story />
        {context.parameters?.source != null && (
          <View style={styles.sourceContainer}>
            <Text style={styles.sourceLabel}>React Native</Text>
            <Text style={styles.sourceCode}>{String(context.parameters.source)}</Text>
          </View>
        )}
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof BarChart>;
