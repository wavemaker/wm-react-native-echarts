import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Radial', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

/** Browser usage: 5 concentric rings, fill % outer→inner. */
const defaultData = [
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
];

/** Default concentric ring chart (blue gradient, outer dark → inner light). */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** With center text and subtext. */
export const CenterText: Story = {
  args: {
    data: defaultData,
    centerText: 'Total',
    centerSubtext: '200 / 300',
  },
};

/** Gap between concentric rings. */
export const RingGap: Story = {
  args: {
    data: defaultData,
    ringGap: '2%',
  },
};

/** Start angle 90 (top / 12 o'clock). */
export const StartAngleTop: Story = {
  args: {
    data: defaultData,
    startAngle: 90,
  },
};

/** Clockwise direction (default is anti-clockwise). */
export const Clockwise: Story = {
  args: {
    data: defaultData,
    clockwise: true,
  },
};

