import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Axis' };
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
];
const data = [40, 82, 91, 74];

/** Default: indicator labels, split lines, and axis lines visible. */
export const Default: Story = {
  args: { indicators, data },
};

/** showIndicatorLabels: false — axis labels hidden. */
export const HideIndicatorLabels: Story = {
  args: { indicators, data, showIndicatorLabels: false },
};

/** showSplitLine: false — grid (split) lines hidden. */
export const NoSplitLines: Story = {
  args: { indicators, data, showSplitLine: false },
};

/** showAxisLine: false — axis lines hidden. */
export const NoAxisLine: Story = {
  args: { indicators, data, showAxisLine: false },
};
