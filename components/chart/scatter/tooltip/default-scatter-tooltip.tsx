import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../../chart-theme.context';
import type { ScatterItemTooltipParams } from './scatter-item-tooltip.types';

/**
 * Themed default scatter/bubble item tooltip (React Native).
 */
export function createDefaultScatterTooltip(
  theme: Pick<ChartTheme, 'tooltip'>
): (params: ScatterItemTooltipParams) => React.ReactElement {
  const t = theme.tooltip;
  return function DefaultScatterTooltip(params: ScatterItemTooltipParams) {
    const { seriesName, x, y, z, color } = params;
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
          <Text style={[styles.title, { color: t.labelColor }]}>{seriesName}</Text>
        </View>
        <Text style={[styles.line, { color: t.valueColor }]}>
          <Text style={{ color: t.labelColor }}>x: </Text>
          {String(x)}
        </Text>
        <Text style={[styles.line, { color: t.valueColor }]}>
          <Text style={{ color: t.labelColor }}>y: </Text>
          {String(y)}
        </Text>
        {z != null && Number.isFinite(z) ? (
          <Text style={[styles.line, { color: t.valueColor }]}>
            <Text style={{ color: t.labelColor }}>size: </Text>
            {String(z)}
          </Text>
        ) : null}
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
