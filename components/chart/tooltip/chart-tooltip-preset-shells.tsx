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

type TooltipTokens = {
  /** Active merged theme.tooltip */
  t: ChartTheme['tooltip'];
  lightTooltipBg: boolean;
  /** Dark / compact preset panel (contrasts on light charts) */
  darkPanel: {
    shellBg: string;
    shellBorder: string;
    label: string;
    value: string;
  };
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
    const darkPanel = lightTooltipBg
      ? {
          shellBg: dt.backgroundColor,
          shellBorder: dt.borderColor,
          label: dt.labelColor,
          value: dt.valueColor,
        }
      : {
          shellBg: t.backgroundColor,
          shellBorder: t.borderColor,
          label: t.labelColor,
          value: t.valueColor,
        };

    const padH = Math.max(12, t.padding * 5);
    const padV = Math.max(10, t.padding * 5);
    const radius = Math.max(8, t.borderRadius);

    const card: TooltipTokens['card'] = {
      shell: {
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
      cardSeriesLabel: { flex: 1, fontSize: 14, color: t.labelColor },
      cardSeriesValue: { fontSize: 14, fontWeight: '700' as const, color: t.valueColor },
    };

    const kpi: TooltipTokens['kpi'] = {
      shell: {
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
      footerRight: { fontSize: 12, fontWeight: '600' as const, color: t.valueColor },
    };

    const compactBg = lightTooltipBg
      ? hexToRgba(dt.backgroundColor, 0.92)
      : hexToRgba(t.backgroundColor, 0.95);
    const compactEmph = lightTooltipBg ? dt.valueColor : t.valueColor;
    const compactDetail = lightTooltipBg ? dt.labelColor : t.labelColor;

    const compact: TooltipTokens['compact'] = {
      shell: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: Math.max(16, radius + 8),
        backgroundColor: compactBg,
      },
      emphasis: { fontSize: 12, fontWeight: '700' as const, color: compactEmph, marginRight: 8 },
      detail: { fontSize: 12, color: compactDetail, flexShrink: 1 },
    };

    const striped: TooltipTokens['striped'] = {
      outer: {
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
      rowRight: { fontSize: 13, fontWeight: '600' as const, color: t.valueColor },
      rowLeftText: { fontSize: 13, color: t.labelColor },
    };

    return {
      t,
      lightTooltipBg,
      darkPanel,
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
          <Text style={header.titleVariant === 'emphasis' ? card.cardHeaderTitleMd : card.cardHeaderTitleSm}>
            {header.title}
          </Text>
        </View>
      ) : null}
      {seriesRows?.map((r) => (
        <View key={String(r.key)} style={styles.cardSeriesRow}>
          <View style={[styles.swatchRound, { backgroundColor: r.swatchColor }]} />
          <Text style={card.cardSeriesLabel}>{r.label}</Text>
          <Text style={card.cardSeriesValue}>{r.value}</Text>
        </View>
      ))}
      {keyValueRows?.map((r) => (
        <View key={r.key} style={styles.kvRow}>
          <Text style={[styles.kvRowText, { color: t.labelColor }]}>{r.left}</Text>
          <Text style={[styles.kvRowText, { color: t.valueColor, fontWeight: '700' }]}>{r.right}</Text>
        </View>
      ))}
      {children}
    </View>
  );
}

export type TooltipPresetDarkProps =
  | {
      minWidth?: number;
      kind: 'axis';
      categoryTitle: string;
      seriesRows: Array<{
        key: string | number;
        barColor: string;
        label: string;
        value: React.ReactNode;
      }>;
    }
  | {
      minWidth?: number;
      kind: 'item';
      barColor: string;
      title: string;
      headerMarginBottom?: number;
      caption?: string;
      valueLine?: React.ReactNode;
      primaryValue?: React.ReactNode;
      primaryValueSize?: 'lg' | 'xl';
      footnote?: string;
      kvRows?: Array<{ key: string; left: string; right: React.ReactNode }>;
    };

/** Slate panel (axis bar rows, or item header + metrics / KV list). */
export function TooltipPresetDark(props: TooltipPresetDarkProps) {
  const { darkPanel, t } = useTooltipPresetTokens();
  const minWidth = props.minWidth;
  const shellBase = {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: Math.max(8, t.borderRadius),
    backgroundColor: darkPanel.shellBg,
    borderWidth: t.borderWidth,
    borderColor: darkPanel.shellBorder,
  };

  if (props.kind === 'axis') {
    return (
      <View style={[shellBase, minWidth != null && { minWidth }]}>
        <Text style={[styles.darkCategoryTitle, { color: darkPanel.label }]}>{String(props.categoryTitle)}</Text>
        {props.seriesRows.map((r) => (
          <View key={String(r.key)} style={styles.darkSeriesRow}>
            <View style={[styles.swatchBar, { backgroundColor: r.barColor }]} />
            <Text style={[styles.darkSeriesLabel, { color: darkPanel.label }]}>{r.label}</Text>
            <Text style={[styles.darkSeriesValue, { color: darkPanel.value }]}>{r.value}</Text>
          </View>
        ))}
      </View>
    );
  }

  const p = props;
  const fontSize = p.primaryValueSize === 'xl' ? 22 : 18;
  return (
    <View style={[shellBase, minWidth != null && { minWidth }]}>
      <View style={[styles.darkHeaderRow, { marginBottom: p.headerMarginBottom ?? 8 }]}>
        <View style={[styles.swatchBar, { backgroundColor: p.barColor }]} />
        <Text style={[styles.darkHeaderTitle, { color: darkPanel.value }]}>{p.title}</Text>
      </View>
      {p.kvRows != null && p.kvRows.length > 0
        ? p.kvRows.map((r) => (
            <View key={r.key} style={styles.kvRow}>
              <Text style={[styles.kvRowText, { color: darkPanel.label }]}>{r.left}</Text>
              <Text style={[styles.kvRowText, { color: darkPanel.value, fontWeight: '700' }]}>{r.right}</Text>
            </View>
          ))
        : null}
      {p.kvRows != null && p.kvRows.length > 0 ? null : (
        <>
          {p.caption != null && p.caption !== '' ? (
            <Text style={[styles.darkCaption, { color: darkPanel.label }]}>{p.caption}</Text>
          ) : null}
          {p.valueLine != null ? (
            <Text style={[styles.darkValueLine, { color: darkPanel.value }]}>{p.valueLine}</Text>
          ) : null}
          {p.primaryValue != null ? (
            <Text style={[styles.darkPrimaryValue, { fontSize, color: darkPanel.value }]}>{p.primaryValue}</Text>
          ) : null}
          {p.footnote != null && p.footnote !== '' ? (
            <Text style={[styles.darkFootnote, { color: darkPanel.label }]}>{p.footnote}</Text>
          ) : null}
        </>
      )}
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
      <Text style={compact.detail}>{detail}</Text>
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
              <Text style={kpi.footerLeft}>{r.left}</Text>
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
        <Text style={striped.headerTitle}>{headerSwatch.title}</Text>
      </View>
    );
  } else if (headerTitle != null) {
    headerNode = <Text style={striped.headerTitle}>{headerTitle}</Text>;
  } else {
    headerNode = null;
  }

  return (
    <View style={striped.outer}>
      <View style={striped.headerBand}>{headerNode}</View>
      {rows.map((r, i) => (
        <View
          key={r.key}
          style={[
            styles.stripedRow,
            { backgroundColor: i % 2 === 0 ? t.backgroundColor : stripedAltRowBg(t.backgroundColor, t.borderColor) },
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
                <Text style={striped.rowLeftText}>{r.leftLabel ?? ''}</Text>
              </>
            )}
          </View>
          <Text style={striped.rowRight}>{String(r.right)}</Text>
        </View>
      ))}
    </View>
  );
}

/** Alternate striped row: blend tooltip bg toward border color (no extra deps). */
function stripedAltRowBg(bg: string, border: string): string {
  if (!isLightBackground(bg)) return hexToRgba(border, 0.35);
  return hexToRgba(border, 0.12);
}

const styles = StyleSheet.create({
  swatchRound: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  swatchBar: {
    width: 6,
    height: 16,
    borderRadius: 2,
    marginRight: 8,
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
  },
  cardSeriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  kvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  kvRowText: {
    fontSize: 13,
  },
  darkCategoryTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  darkSeriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  darkSeriesLabel: {
    flex: 1,
    fontSize: 13,
  },
  darkSeriesValue: {
    fontSize: 13,
    fontWeight: '700',
  },
  darkHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkHeaderTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  darkCaption: {
    fontSize: 12,
    marginTop: 0,
  },
  darkValueLine: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },
  darkPrimaryValue: {
    fontWeight: '700',
  },
  darkFootnote: {
    fontSize: 12,
    marginTop: 4,
    opacity: 0.9,
  },
  compactShellWrap: {
    flexWrap: 'wrap',
  },
  kpiFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  stripedHeaderInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stripedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  stripedRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
