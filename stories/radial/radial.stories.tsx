import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Radial', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

/** Data matching label-radial.png: 5 concentric rings, fill % outer→inner. */
const defaultData = [
  { value: 92 },
  { value: 82 },
  { value: 52 },
  { value: 42 },
  { value: 28 },
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

/** Custom inner radius (larger center hole). */
export const LargeCenterHole: Story = {
  args: {
    data: defaultData,
    innerRadius: '35%',
  },
};

/** Custom unfilled color. */
export const CustomBackground: Story = {
  args: {
    data: defaultData,
    backgroundColor: '#f0f0f0',
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

/** With segment labels on rings. */
export const WithLabels: Story = {
  args: {
    data: [
      { label: 'Ring 1', value: 92 },
      { label: 'Ring 2', value: 82 },
      { label: 'Ring 3', value: 52 },
      { label: 'Ring 4', value: 42 },
      { label: 'Ring 5', value: 28 },
    ],
    showLabel: true,
  },
};
