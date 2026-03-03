import type { Meta, Decorator } from '@storybook/react';
import React from 'react';
import { SpeedometerGauge } from '@components/chart/gauge';
import { StyleSheet, View, Text } from 'react-native';
import { semiCircularGaugeArgTypes, commonGaugeArgs } from '../gauge.args';

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
  title: 'Charts/Gauge/Speedometer',
  component: SpeedometerGauge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...semiCircularGaugeArgTypes,
  },
  args: {
    ...commonGaugeArgs,
    value: 65,
    width: 400,
    height: 250,
    axisColors: ['#e74c3c', '#f39c12', '#2ecc71'],
    axisColorLengths: [40, 80, 100],
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
} satisfies Meta<typeof SpeedometerGauge>;
