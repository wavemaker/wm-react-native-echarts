import type { StoryObj } from '@storybook/react';
import meta from './meta';
export default { ...meta, title: 'Charts/Geo' };
type Story = StoryObj<typeof meta>;

// Sample data matching world.json region names (e.g. Somalia, Liechtenstein, etc.)
const defaultData = [
  { name: 'United States', value: 500 },
  { name: 'China', value: 600 },
  { name: 'Japan', value: 300 },
  { name: 'Germany', value: 250 },
  { name: 'India', value: 400 },
  { name: 'United Kingdom', value: 200 },
  { name: 'France', value: 180 },
  { name: 'Brazil', value: 220 },
  { name: 'Canada', value: 150 },
  { name: 'Russia', value: 280 },
];

/** Default geo chart with world map and sample data. */
export const Default: Story = {
  args: {
    data: defaultData
  },
};

/** With legend (visual map) hidden. */
export const NoLegend: Story = {
  args: {
    data: defaultData,
    showLegend: false,
  },
};

/** With highlighter disabled. */
export const NoHighlighter: Story = {
  args: {
    data: defaultData,
    showHighlighter: false,
  },
};
