import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ChartTheme } from '../chart-theme.context';
import { DARK_THEME, useChartTheme } from '../chart-theme.context';

function isLightBackground(color: string): boolean {
  const hex = color.trim().replace(/^#/, '');
  if (!/^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(hex)) return true;
  const h = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.65;
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.trim().replace(/^#/, '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  if (full.length !== 6) return `rgba(15,23,42,${alpha})`;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function parseHexRgb(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.trim().replace(/^#/, '');
  if (!/^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(raw)) return null;
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw;
  if (full.length !== 6) return null;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const c = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

function rgbMaxChannelDelta(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number }
): number {
  return Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
}

type TooltipTokens = {
  /** Active merged theme.tooltip */
  t: ChartTheme['tooltip'];
  card: {
    shell: object;
    eyebrow: object;
    axisCategoryTitle: object;
    cardHeaderTitleSm: object;
    cardHeaderTitleMd: object;
    cardSeriesLabel: object;
    cardSeriesValue: object;
  };
  kpi: {
    shell: object;
    overline: object;
    metric: object;
    caption: object;
    footerRule: object;
    footerLeft: object;
    footerRight: object;
  };
  compact: { shell: object; emphasis: object; detail: object };
  striped: {
    outer: object;
    headerBand: object;
    headerTitle: object;
    rowRight: object;
    rowLeftText: object;
  };
};

function useTooltipPresetTokens(): TooltipTokens {
  const { theme } = useChartTheme();

  return useMemo(() => {
    const t = theme.tooltip;
    const ax = theme.axis.x;
    const lightTooltipBg = isLightBackground(t.backgroundColor);
    const dt = DARK_THEME.tooltip;

    const padH = Math.max(12, t.padding * 5);
    const padV = Math.max(10, t.padding * 5);
    const radius = Math.max(8, t.borderRadius);

    const card: TooltipTokens['card'] = {
      shell: {
        alignSelf: 'flex-start' as const,
        paddingHorizontal: padH,
        paddingVertical: padV,
        borderRadius: radius,
        backgroundColor: t.backgroundColor,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
      },
      eyebrow: { fontSize: 11, fontWeight: '700' as const, color: t.labelColor, marginBottom: 6 },
      axisCategoryTitle: {
        fontSize: 12,
        fontWeight: '700' as const,
        color: t.labelColor,
        marginBottom: 6,
      },
      cardHeaderTitleSm: { fontSize: 12, fontWeight: '700' as const, color: t.labelColor },
      cardHeaderTitleMd: { fontSize: 13, fontWeight: '700' as const, color: t.valueColor },
      cardSeriesLabel: { fontSize: 14, color: t.labelColor },
      cardSeriesValue: {
        fontSize: 14,
        fontWeight: '700' as const,
        color: t.valueColor,
        flexShrink: 0,
      },
    };

    const kpi: TooltipTokens['kpi'] = {
      shell: {
        alignSelf: 'flex-start' as const,
        padding: padV,
        borderRadius: radius,
        backgroundColor: t.backgroundColor,
        borderLeftWidth: 4,
      },
      overline: { fontSize: 11, color: t.labelColor, textTransform: 'uppercase' as const },
      metric: { fontSize: 28, fontWeight: '800' as const, color: t.valueColor, marginTop: 4 },
      caption: { fontSize: 11, color: t.labelColor, marginTop: 2 },
      footerRule: {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: t.borderColor,
      },
      footerLeft: { fontSize: 12, color: t.labelColor },
      footerRight: {
        fontSize: 12,
        fontWeight: '600' as const,
        color: t.valueColor,
        flexShrink: 0,
      },
    };

    const compactBg = lightTooltipBg
      ? hexToRgba(dt.backgroundColor, 0.92)
      : hexToRgba(t.backgroundColor, 0.95);
    const compactEmph = lightTooltipBg ? dt.valueColor : t.valueColor;
    const compactDetail = lightTooltipBg ? dt.labelColor : t.labelColor;

    const compact: TooltipTokens['compact'] = {
      shell: {
        alignSelf: 'flex-start' as const,
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: Math.max(16, radius + 8),
        backgroundColor: compactBg,
        minWidth: 0,
      },
      emphasis: {
        fontSize: 12,
        fontWeight: '700' as const,
        color: compactEmph,
        marginRight: 8,
        flexShrink: 0,
      },
      detail: { fontSize: 12, color: compactDetail },
    };

    const striped: TooltipTokens['striped'] = {
      outer: {
        alignSelf: 'flex-start' as const,
        alignItems: 'flex-start' as const,
        borderRadius: Math.max(6, t.borderRadius - 1),
        overflow: 'hidden' as const,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
      },
      headerBand: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: ax.splitLineColor,
      },
      headerTitle: { fontSize: 13, fontWeight: '700' as const, color: t.valueColor },
      rowRight: { fontSize: 13, fontWeight: '600' as const, color: t.valueColor, flexShrink: 0 },
      rowLeftText: { fontSize: 13, color: t.labelColor },
    };

    return {
      t,
      card,
      kpi,
      compact,
      striped,
    };
  }, [theme]);
}

/** White card + shadow (axis category + series, or item header + body). */
export function TooltipPresetCard({
  minWidth,
  eyebrow,
  categoryTitle,
  header,
  seriesRows,
  keyValueRows,
  children,
}: {
  minWidth?: number;
  eyebrow?: string;
  categoryTitle?: string;
  header?: {
    swatchColor?: string;
    title: string;
    titleVariant?: 'muted' | 'emphasis';
    marginBottom?: number;
  };
  seriesRows?: Array<{
    key: string | number;
    swatchColor: string;
    label: string;
    value: React.ReactNode;
  }>;
  /** Optional label/value rows on light background (e.g. radar). */
  keyValueRows?: Array<{ key: string; left: string; right: React.ReactNode }>;
  children?: React.ReactNode;
}) {
  const { card, t } = useTooltipPresetTokens();
  return (
    <View style={[card.shell, minWidth != null && { minWidth }]}>
      {eyebrow != null && eyebrow !== '' ? <Text style={card.eyebrow}>{eyebrow}</Text> : null}
      {categoryTitle != null && categoryTitle !== '' ? (
        <Text style={card.axisCategoryTitle}>{String(categoryTitle)}</Text>
      ) : null}
      {header != null ? (
        <View style={[styles.cardHeaderRow, { marginBottom: header.marginBottom ?? 8 }]}>
          {header.swatchColor != null && header.swatchColor !== '' ? (
            <View style={[styles.swatchRound, { backgroundColor: header.swatchColor }]} />
          ) : null}
          <View style={styles.cardHeaderTitleCell}>
            <Text style={header.titleVariant === 'emphasis' ? card.cardHeaderTitleMd : card.cardHeaderTitleSm}>
              {header.title}
            </Text>
          </View>
        </View>
      ) : null}
      {seriesRows?.map((r) => (
        <View key={String(r.key)} style={styles.cardSeriesRow}>
          <View style={[styles.swatchRound, { backgroundColor: r.swatchColor }]} />
          <View style={styles.cardSeriesLabelCell}>
            <Text style={card.cardSeriesLabel}>{r.label}</Text>
          </View>
          <Text style={card.cardSeriesValue}>{r.value}</Text>
        </View>
      ))}
      {keyValueRows?.map((r) => (
        <View key={r.key} style={styles.kvRow}>
          <View style={styles.kvRowLeftCell}>
            <Text style={[styles.kvRowText, { color: t.labelColor }]}>{r.left}</Text>
          </View>
          <Text style={[styles.kvRowText, { color: t.valueColor, fontWeight: '700', flexShrink: 0 }]}>
            {r.right}
          </Text>
        </View>
      ))}
      {children}
    </View>
  );
}

/** Pill chip on dark glass. */
export function TooltipPresetCompact({
  emphasis,
  detail,
  wrap = true,
}: {
  emphasis: string;
  detail: string;
  wrap?: boolean;
}) {
  const { compact } = useTooltipPresetTokens();
  return (
    <View style={[compact.shell, wrap && styles.compactShellWrap]}>
      <Text style={compact.emphasis}>{emphasis}</Text>
      <View style={styles.compactDetailCell}>
        <Text style={compact.detail}>{detail}</Text>
      </View>
    </View>
  );
}

/** KPI strip with optional footer metric rows. */
export function TooltipPresetKpi({
  accentColor,
  minWidth = 140,
  overline,
  metric,
  caption,
  footerRows,
}: {
  accentColor: string;
  minWidth?: number;
  overline: string;
  metric: React.ReactNode;
  caption?: string;
  footerRows?: Array<{ key: string | number; left: string; right: React.ReactNode }>;
}) {
  const { kpi } = useTooltipPresetTokens();
  return (
    <View style={[kpi.shell, { borderLeftColor: accentColor, minWidth }]}>
      <Text style={kpi.overline}>{overline}</Text>
      {typeof metric === 'string' || typeof metric === 'number' ? (
        <Text style={kpi.metric}>{String(metric)}</Text>
      ) : (
        metric
      )}
      {caption != null && caption !== '' ? <Text style={kpi.caption}>{caption}</Text> : null}
      {footerRows != null && footerRows.length > 0 ? (
        <View style={kpi.footerRule}>
          {footerRows.map((r) => (
            <View key={String(r.key)} style={styles.kpiFooterRow}>
              <View style={styles.kpiFooterLeftCell}>
                <Text style={kpi.footerLeft}>{r.left}</Text>
              </View>
              <Text style={kpi.footerRight}>{r.right}</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export type TooltipStripedRow = {
  key: string;
  right: string | number;
  left?: React.ReactNode;
  leftLabel?: string;
  leftSwatchColor?: string;
};

/** Banded header + zebra rows. */
export function TooltipPresetStriped({
  header,
  headerTitle,
  headerSwatch,
  rows,
}: {
  /** Custom header content; wins over `headerTitle` / `headerSwatch`. */
  header?: React.ReactNode;
  /** Bold title only (e.g. axis category). */
  headerTitle?: string;
  /** Small swatch + bold title (item tooltips). */
  headerSwatch?: { color: string; title: string };
  rows: TooltipStripedRow[];
}) {
  const { striped, t } = useTooltipPresetTokens();

  let headerNode: React.ReactNode;
  if (header != null) {
    headerNode = header;
  } else if (headerSwatch != null) {
    headerNode = (
      <View style={styles.stripedHeaderInner}>
        <View style={[styles.swatchSmall, { backgroundColor: headerSwatch.color }]} />
        <View style={styles.stripedHeaderTitleCell}>
          <Text style={striped.headerTitle}>{headerSwatch.title}</Text>
        </View>
      </View>
    );
  } else if (headerTitle != null) {
    headerNode = <Text style={striped.headerTitle}>{headerTitle}</Text>;
  } else {
    headerNode = null;
  }

  return (
    <View style={striped.outer}>
      <View style={styles.stripedInner}>
        <View style={striped.headerBand}>{headerNode}</View>
        {rows.map((r, i) => (
          <View
            key={r.key}
            style={[
              styles.stripedRow,
              {
                backgroundColor:
                  i % 2 === 0 ? t.backgroundColor : stripedAltRowBg(t.backgroundColor, t.borderColor),
              },
            ]}
          >
            <View style={styles.stripedRowLeft}>
              {r.left != null ? (
                r.left
              ) : (
                <>
                  {r.leftSwatchColor != null ? (
                    <View style={[styles.swatchSmall, { backgroundColor: r.leftSwatchColor }]} />
                  ) : null}
                  <View style={styles.stripedRowLeftLabelCell}>
                    <Text style={striped.rowLeftText}>{r.leftLabel ?? ''}</Text>
                  </View>
                </>
              )}
            </View>
            <Text style={striped.rowRight}>{String(r.right)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/** Between slate-300 and slate-400: zebra when border ≈ bg without overpowering the base row. */
const STRIPE_NEUTRAL_LIGHT = { r: 176, g: 188, b: 205 };

/**
 * Alternate striped row fill: opaque blend of tooltip bg toward border.
 * Light themes often use #fff + light gray border; a weak blend matches the base row—use a
 * stronger mix and fall back to a neutral gray when border is missing or too close to bg.
 */
function stripedAltRowBg(bg: string, border: string): string {
  const base = parseHexRgb(bg);
  if (base == null) {
    return isLightBackground(bg) ? '#f1f5f9' : '#1e293b';
  }
  const light = isLightBackground(bg);
  const edge = parseHexRgb(border);
  const sameAsBase = edge != null && rgbMaxChannelDelta(base, edge) < 4;
  let mix = edge != null && !sameAsBase ? edge : light ? STRIPE_NEUTRAL_LIGHT : { r: 255, g: 255, b: 255 };
  let t = light ? 0.5 : 0.32;
  let r = base.r * (1 - t) + mix.r * t;
  let g = base.g * (1 - t) + mix.g * t;
  let b = base.b * (1 - t) + mix.b * t;
  if (rgbMaxChannelDelta(base, { r, g, b }) < 14) {
    t = light ? 0.66 : 0.46;
    r = base.r * (1 - t) + mix.r * t;
    g = base.g * (1 - t) + mix.g * t;
    b = base.b * (1 - t) + mix.b * t;
  }
  if (rgbMaxChannelDelta(base, { r, g, b }) < 10) {
    mix = light ? STRIPE_NEUTRAL_LIGHT : { r: 255, g: 255, b: 255 };
    t = light ? 0.28 : 0.3;
    r = base.r * (1 - t) + mix.r * t;
    g = base.g * (1 - t) + mix.g * t;
    b = base.b * (1 - t) + mix.b * t;
  }
  return rgbToHex(r, g, b);
}

const styles = StyleSheet.create({
  swatchRound: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  swatchSmall: {
    width: 8,
    height: 8,
    borderRadius: 2,
    marginRight: 8,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 0,
  },
  cardHeaderTitleCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  cardSeriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    minWidth: 0,
  },
  cardSeriesLabelCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    marginRight: 8,
  },
  kvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    minWidth: 0,
  },
  kvRowLeftCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    marginRight: 8,
  },
  kvRowText: {
    fontSize: 13,
  },
  compactShellWrap: {
    flexWrap: 'wrap',
  },
  compactDetailCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  kpiFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    minWidth: 0,
  },
  kpiFooterLeftCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    marginRight: 8,
  },
  stripedInner: {
    alignItems: 'stretch',
    minWidth: 0,
  },
  stripedHeaderInner: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 0,
  },
  stripedHeaderTitleCell: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
  },
  stripedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 0,
  },
  stripedRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    marginRight: 8,
  },
  stripedRowLeftLabelCell: {
    flexShrink: 1,
    minWidth: 0,
  },
});
