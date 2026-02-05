import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Colors' };
type Story = StoryObj<typeof meta>;

const data = [
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
];
const colors = ['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

/** Default blue gradient (outer dark → inner light). */
export const Default: Story = {
  args: { data },
};

/** Custom ring colors (one per ring). */
export const CustomColors: Story = {
  args: {
    data,
    colors,
  },
};

/** Custom unfilled (background) color. */
export const background: Story = {
  args: {
    data,
    backgroundColor: '#3b82f611',
  },
};
