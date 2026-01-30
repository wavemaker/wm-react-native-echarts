import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { AreaChart } from '@components/chart/area/area-chart';
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
    title: 'Charts/Area/Type',
    component: AreaChart,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      xAxisData: {
        control: 'object',
        description: 'X-axis labels. Can be a string array or object array with label and value.',
      },
      data: {
        control: 'object',
        description: 'Chart data. Can be single series (number[]), multiple series without names, or multiple series with names.',
      },
      yAxisData: {
        control: 'object',
        description: 'Y-axis labels (optional). When provided, enables custom Y-axis labels.',
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
      type: {
        control: 'select',
        options: ['default', 'smooth', 'step'],
        description: 'Curve type: default (linear), smooth (Bezier), or step.',
      },
      step: {
        control: 'select',
        options: ['start', 'middle', 'end'],
        description: 'Step mode when type="step". Default: start.',
      },
      boundaryGap: {
        control: 'boolean',
        description: 'Whether to leave gaps at the start and end of the axis. Default: false',
      },
      stack: {
        control: 'text',
        description: 'Stack ID for stacking multiple series. When set, series are stacked on top of each other.',
      },
      stackNormalize: {
        control: 'boolean',
        description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
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
      areaOpacity: {
        control: { type: 'range', min: 0, max: 1, step: 0.1 },
        description: 'Opacity of the filled area (0-1). Default: 0.6',
      },
      areaFill: {
        control: 'select',
        options: ['gradient', 'transparent', 'solid'],
        description: 'Fill style for the area: gradient (default), transparent, or solid.',
      },
      showXAxis: {
        control: 'boolean',
        description: 'Whether to show the X-axis. When true and xAxisData is not provided, data indices are shown. Default: true',
      },
      showYAxis: {
        control: 'boolean',
        description: 'Whether to show the Y-axis. When true and yAxisData is not provided, scale is computed from the dataset. Default: true',
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
        description: 'Whether to show vertical grid lines (X-axis split lines). Default: true',
      },
      showYAxisSplitLines: {
        control: 'boolean',
        description: 'Whether to show horizontal grid lines (Y-axis split lines). Default: true',
      },
      grid: {
        control: 'object',
        description: 'Grid positioning configuration. Values can be percentages (strings) or pixel values (numbers).',
      },
      showLegend: {
        control: 'boolean',
        description: 'Whether to display a legend for named series. Default: false',
      },
      showHighlighter: {
        control: 'boolean',
        description: 'Whether to show the highlighter (emphasis circle) at the cursor position when interacting with the chart. Default: true',
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
  } satisfies Meta<typeof AreaChart>;