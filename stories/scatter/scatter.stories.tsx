import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Scatter' };
type Story = StoryObj<typeof meta>;

/** Default scatter chart: data is array of [x, y] pairs. */
const defaultData: number[][] = [
  [2, 3], [4, 6], [12, 22], [14, 26], [16, 30], [6, 11], [8, 15], [10, 19], [18, 35],
  [11, 26], [13, 30], [15, 34], [17, 32], [19, 42], [1, 4], [3, 8], [5, 12], [7, 16], [9, 21],
];

export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Multiple named series with legend (each series is array of [x, y] pairs). */
export const showLegend: Story = {
  args: {
    data: [
      { name: 'Series A', data: defaultData },
      { name: 'Series B', data: [
        [0, -6], [2, 1], [4, 2], [6, 6], [8, 11], [10, 15], [12, 19], [14, 23], [16, 27], [18, 31],
        [11, 24], [13, 28], [15, 32], [17, 36], [19, 40], [1, -1], [3, 5], [5, 10], [7, 15], [9, 20],
      ] },
    ],
    showLegend: true,
  },
};

/** showHighlighter={false} — no emphasis circle at hovered point. */
export const showHighlighter: Story = {
  args: {
    data: defaultData,
    showHighlighter: false,
  },
};

