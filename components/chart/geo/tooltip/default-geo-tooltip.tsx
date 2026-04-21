import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../../chart-theme.context';
import type { GeoItemTooltipParams } from './geo-item-tooltip.types';

/** Themed default geo / map item tooltip (React Native). */
export function createDefaultGeoTooltip(
  theme: Pick<ChartTheme, 'tooltip'>
): (params: GeoItemTooltipParams) => React.ReactElement {
  const t = theme.tooltip;
  return function DefaultGeoTooltip(params: GeoItemTooltipParams) {
    const { name, value, color } = params;
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
          <Text style={[styles.title, { color: t.labelColor }]}>{name}</Text>
        </View>
        <Text style={[styles.line, { color: t.valueColor }]}>
          <Text style={{ color: t.labelColor }}>value: </Text>
          {String(value)}
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
