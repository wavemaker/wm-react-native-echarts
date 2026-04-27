import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Column', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];

/** Default column chart (single series). */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** showHighlighter={true} — opt-in bar emphasis while the axis tooltip is active. */
export const ShowHighlighter: Story = {
  args: {
    data: [{ name: 'Series A', data: defaultData }],
    showHighlighter: true,
  },
};

/** horizontal={true} — horizontal bars (same as BarChart). */
export const Horizontal: Story = {
  args: {
    data: defaultData,
    horizontal: true,
  },
};
