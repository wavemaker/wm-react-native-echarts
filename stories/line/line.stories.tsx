import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Line' };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];

/** Default line chart (type: default). */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Multiple named series with legend. */
export const showLegend: Story = {
  args: {
    data: [{ name: 'Series A', data: [186, 305, 237, 73, 209, 214] }],
    showLegend: true,
  },
};

/** showHighlighter={false} — no emphasis circle at hovered point. */
export const showHighlighter: Story = {
  args: {
    data: [{ name: 'Series A', data: [186, 305, 237, 73, 209, 214] }],
    showHighlighter: false,
  },
};
