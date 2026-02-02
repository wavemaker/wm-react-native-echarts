import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { AreaChart } from '@components/chart/area/area-chart';
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
    title: 'Charts/Area/Type',
    component: AreaChart,
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
        options: ['start', 'middle', 'end'],
        description: 'Step mode when type="step". Default: start.',
      },
      stack: {
        control: 'text',
        description: 'Stack ID for stacking multiple series. When set, series are stacked on top of each other.',
      },
      stackNormalize: {
        control: 'boolean',
        description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
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