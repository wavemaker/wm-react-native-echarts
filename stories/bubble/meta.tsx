import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { BubbleChart } from '@components/chart/bubble/bubble-chart';
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
  title: 'Charts/Bubble/Symbol',
  component: BubbleChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...(() => {
      const { symbolSize: _s, ...rest } = commonChartArgTypes;
      return rest;
    })(),
    data: {
      control: 'object',
      description: 'Bubble data: array of [x, y, size] per series. Size drives bubble radius.',
    },
    sizeRange: {
      control: 'object',
      description: 'Pixel size range [min, max] for scaling the third data value to bubble radius. Default: [8, 50]',
    },
    showXAxis: {
      control: 'boolean',
      description: 'Whether to show the X-axis. Default: true',
    },
    showYAxis: {
      control: 'boolean',
      description: 'Whether to show the Y-axis. Default: true',
    },
    showXAxisTicks: {
      control: 'boolean',
      description: 'Whether to show X-axis tick marks. Default: true',
    },
    showYAxisTicks: {
      control: 'boolean',
      description: 'Whether to show Y-axis tick marks. Default: true',
    },
    showXAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show vertical grid lines. Default: true',
    },
    showYAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show horizontal grid lines. Default: true',
    },
    showHighlighter: {
      control: 'boolean',
      description: 'Whether to show the highlighter at the cursor position when interacting. Default: true',
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
} satisfies Meta<typeof BubbleChart>;
