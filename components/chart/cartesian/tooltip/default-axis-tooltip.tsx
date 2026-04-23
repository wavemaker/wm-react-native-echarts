import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../../chart-theme.context';
import type { AxisTooltipParams } from './axis-tooltip.types';

/**
 * Themed default axis tooltip as React Native (mirrors the former ECharts tooltip styling).
 * Pass the result of this factory to {@link useAxisTooltip} when the consumer does not pass `renderTooltip`.
 */
export function createDefaultAxisTooltip(
  theme: Pick<ChartTheme, 'tooltip'>
): (params: AxisTooltipParams) => React.ReactElement {
  const t = theme.tooltip;
  return function DefaultAxisTooltip(params: AxisTooltipParams) {
    return (
      <View
        style={{
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          borderRadius: t.borderRadius,
          padding: t.padding,
        }}
      >
        <Text style={[styles.axisTitle, { color: t.labelColor }]}>{String(params.axisValue)}</Text>
        {params.series.map((item) => (
          <View key={item.seriesIndex} style={styles.row}>
            {item.color != null && item.color !== '' ? (
              <View style={[styles.swatch, { backgroundColor: item.color }]} />
            ) : (
              <View style={styles.swatchPlaceholder} />
            )}
            <Text style={[styles.valueLine, { color: t.valueColor }]}>
              <Text style={{ color: t.labelColor }}>{item.seriesName}: </Text>
              {String(item.value)}
            </Text>
          </View>
        ))}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  axisTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  swatch: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  swatchPlaceholder: {
    width: 8,
    height: 8,
    marginRight: 6,
  },
  valueLine: {
    fontSize: 12,
    flex: 1,
  },
});
