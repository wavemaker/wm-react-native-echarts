import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { ScatterChart } from '@components/chart/scatter/scatter-chart';
import { StyleSheet, View, Text } from 'react-native';

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
  title: 'Charts/Scatter/Symbol',
  component: ScatterChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Scatter data: array of [x, y] pairs, or multiple series with { name, data: number[][] }.',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels. Default: 220',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels. Default: 350',
    },
    theme: {
      control: 'object',
      description: 'Partial theme override for customizing chart appearance.',
    },
    colors: {
      control: 'object',
      description: 'Colors for the chart series. Overrides theme colors.',
    },
    symbol: {
      control: 'select',
      options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
      description: 'Symbol type for data points. Default: circle',
    },
    symbolSize: {
      control: 'number',
      description: 'Size of the symbol. Can be a number, array [width, height], or function. Default: 8',
    },
    grid: {
      control: 'object',
      description: 'Grid positioning configuration. Values can be percentages (strings) or pixel values (numbers).',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend for named series. Default: false',
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
    boundaryGap: {
      control: 'boolean',
      description: 'Whether to leave a gap between the axis and the first/last data point. Default: false',
    },
    showHighlighter: {
      control: 'boolean',
      description:
        'Whether to show the highlighter (emphasis circle) at the cursor position when interacting with the chart. Default: true',
    },
    showRegressionLine: {
      control: 'boolean',
      description: 'When true, draws a linear regression line per scatter series. Default: false',
    },
    xAxisTickLabelFormatter: {
      control: false,
      description: 'Formatter for X-axis tick labels. (value, index?) => string',
    },
    yAxisTickLabelFormatter: {
      control: false,
      description: 'Formatter for Y-axis tick labels. (value, index?) => string',
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
} satisfies Meta<typeof ScatterChart>;
