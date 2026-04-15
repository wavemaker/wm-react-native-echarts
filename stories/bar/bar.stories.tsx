import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Bar', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];

/** Default bar chart (single series). */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Multiple named series with legend. */
export const ShowLegend: Story = {
  args: {
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [120, 200, 150, 90, 180, 160] },
    ],
    showLegend: true,
  },
};

/** showHighlighter={false} — no emphasis on hover. */
export const ShowHighlighter: Story = {
  args: {
    data: [{ name: 'Series A', data: defaultData }],
    showHighlighter: false,
  },
};
