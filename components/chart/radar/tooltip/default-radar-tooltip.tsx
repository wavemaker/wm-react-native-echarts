import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../../chart-theme.context';
import type { RadarItemTooltipParams } from './radar-item-tooltip.types';

/** Themed default radar item tooltip (React Native). */
export function createDefaultRadarTooltip(
  theme: Pick<ChartTheme, 'tooltip'>
): (params: RadarItemTooltipParams) => React.ReactElement {
  const t = theme.tooltip;
  return function DefaultRadarTooltip(params: RadarItemTooltipParams) {
    const { seriesName, dimensionValues, color } = params;
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          {color != null && color !== '' ? (
            <View style={[styles.swatch, { backgroundColor: color }]} />
          ) : (
            <View style={styles.swatchPlaceholder} />
          )}
          <Text style={[styles.title, { color: t.labelColor }]}>{seriesName}</Text>
        </View>
        {dimensionValues.map((d) => (
          <Text key={d.indicatorName} style={[styles.line, { color: t.valueColor }]}>
            <Text style={{ color: t.labelColor }}>{d.indicatorName}: </Text>
            {Number.isFinite(d.value) ? String(d.value) : '—'}
          </Text>
        ))}
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
