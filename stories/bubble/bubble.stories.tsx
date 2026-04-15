import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Bubble', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

/** Default bubble chart: data is array of [x, y, size]. Size drives bubble radius. */
const defaultData: [number, number, number][] = [
  [10, 20, 30],
  [15, 25, 15],
  [20, 15, 45],
  [25, 30, 25],
  [30, 22, 35],
  [35, 18, 20],
  [40, 28, 40],
  [45, 12, 18],
  [50, 24, 28],
  [55, 26, 32],
];

export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Multiple named series with legend (each series is array of [x, y, size]). */
export const ShowLegend: Story = {
  args: {
    data: [
      { name: 'Series A', data: defaultData },
      {
        name: 'Series B',
        data: [
          [12, 18, 25],
          [18, 22, 35],
          [22, 28, 20],
          [28, 14, 40],
          [32, 26, 30],
          [38, 20, 22],
          [42, 30, 38],
          [48, 16, 28],
        ],
      },
    ],
    showLegend: true,
  },
};

/** showHighlighter={false} — no emphasis at hovered point. */
export const ShowHighlighter: Story = {
  args: {
    data: defaultData,
    showHighlighter: false,
  },
};
