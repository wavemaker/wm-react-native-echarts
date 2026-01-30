import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { LineChart } from '@components/chart/line/line-chart';
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
  title: 'Charts/Line/Type',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...commonChartArgTypes,
    type: {
      control: 'select',
      options: ['default', 'smooth', 'step'],
      description: 'Curve type: default (linear), smooth (Bezier), or step.',
    },
    step: {
      control: 'select',
      options: [false, 'start', 'middle', 'end'],
      description: 'Step mode when type="step". Default: start.',
    },
    stack: {
      control: 'text',
      description: 'Stack ID for stacking multiple series.',
    },
    stackNormalize: {
      control: 'boolean',
      description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
    },
    showXAxis: {
      control: 'boolean',
      description: 'Whether to show the X-axis line and labels. Default: true',
    },
    showXAxisTicks: {
      control: 'boolean',
      description: 'Whether to show X-axis tick marks. Default: true',
    },
    showYAxis: {
      control: 'boolean',
      description: 'Whether to show the Y-axis line and labels. Default: true',
    },
    showYAxisTicks: {
      control: 'boolean',
      description: 'Whether to show Y-axis tick marks. Default: true',
    },
    showXAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show vertical grid lines (X-axis split lines). Default: true',
    },
    showYAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show horizontal grid lines (Y-axis split lines). Default: true',
    },
    showHighlighter: {
      control: 'boolean',
      description:
        'Whether to show the highlighter (emphasis circle) at the cursor position when interacting with the chart. Default: true',
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
} satisfies Meta<typeof LineChart>;
