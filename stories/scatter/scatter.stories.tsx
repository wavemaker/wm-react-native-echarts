import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Scatter', tags: ['autodocs'] };
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

/** showHighlighter={false} — no emphasis circle at hovered point. */
export const showHighlighter: Story = {
  args: {
    data: defaultData,
    showHighlighter: false,
  },
};

