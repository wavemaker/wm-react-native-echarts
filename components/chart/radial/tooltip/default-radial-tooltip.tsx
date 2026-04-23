import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../../chart-theme.context';
import type { RadialItemTooltipParams } from './radial-item-tooltip.types';

/** Themed default radial ring tooltip (React Native). */
export function createDefaultRadialTooltip(
  theme: Pick<ChartTheme, 'tooltip'>
): (params: RadialItemTooltipParams) => React.ReactElement {
  const t = theme.tooltip;
  return function DefaultRadialTooltip(params: RadialItemTooltipParams) {
    const { ringLabel, value, color } = params;
    const rest = Math.max(0, Math.min(100, 100 - value));
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          {color != null && color !== '' ? (
            <View style={[styles.swatch, { backgroundColor: color }]} />
          ) : (
            <View style={styles.swatchPlaceholder} />
          )}
          <Text style={[styles.title, { color: t.labelColor }]}>{ringLabel}</Text>
        </View>
        <Text style={[styles.line, { color: t.valueColor }]}>
          <Text style={{ color: t.labelColor }}>fill: </Text>
          {value.toFixed(0)}%
        </Text>
        <Text style={[styles.line, { color: t.valueColor }]}>
          <Text style={{ color: t.labelColor }}>remaining: </Text>
          {rest.toFixed(0)}%
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 13,
    flex: 1,
  },
  line: {
    fontSize: 12,
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
});
