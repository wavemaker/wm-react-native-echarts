import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Colors' };
type Story = StoryObj<typeof meta>;

const data = [
  { value: 90 },
  { value: 75 },
  { value: 55 },
  { value: 40 },
  { value: 30 },
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
