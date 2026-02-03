import type { StoryObj } from '@storybook/react';
import meta from '../meta';
import { USChart } from '@components/chart/geo';

// Light colors for presidential map (used in both legend and region fill)
const LIGHT_BLUE = '#93c5fd';
const LIGHT_RED = '#fca5a5';

// Last presidential election: electoral votes per state { name, republican, democrat }
const presidentialResultsByState = (await import('../../../data/senate-results-by-state.json')).default;
// Map to chart format: value = Republican EV, itemStyle.areaColor = light color so colors always show
const presidentialChartData = presidentialResultsByState.map((s: { name: string; republican: number }) => ({
  name: s.name,
  value: s.republican,
  itemStyle: { areaColor: s.republican === 0 ? LIGHT_BLUE : LIGHT_RED },
}));

export default {
  ...meta,
  title: 'Charts/Geo/Map',
  component: USChart,
};
type Story = StoryObj<typeof meta>;

/** Last presidential election: electoral votes by state. Light blue = Democrat, light red = Republican. Legend on right (no overlay). */
export const PresidentialResults: Story = {
  args: {
    data: presidentialChartData,
    width: 500,
    height: 350,
    visualMapMin: 0,
    visualMapMax: 54,
    visualMapMode: 'piecewise',
    piecewisePieces: [
      { min: 0, max: 0.5, label: 'Democrat', color: LIGHT_BLUE },
      { min: 0.5, max: 55, label: 'Republican', color: LIGHT_RED },
    ],
    showLegend: true,
    showHighlighter: true,
    tooltipFormatter: (params: { name: string }) => {
      const row = presidentialResultsByState.find((s: { name: string }) => s.name === params.name) as { name: string; republican: number; democrat: number } | undefined;
      if (!row) return params.name;
      return `${params.name}\nRepublican: ${row.republican} EV | Democrat: ${row.democrat} EV`;
    },
  },
};
