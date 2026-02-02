import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Symbol' };
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'A', max: 100 },
  { name: 'B', max: 100 },
  { name: 'C', max: 100 },
  { name: 'D', max: 100 },
];
const data = [40, 82, 91, 74];

/** Default: no symbols on data points (symbol="none"). */
export const None: Story = {
  args: { indicators, data, symbol: 'none' },
};

/** symbol="circle" — circular markers. */
export const Circle: Story = {
  args: { indicators, data, symbol: 'circle', symbolSize: 8 },
};

/** symbol="rect" — square markers. */
export const Rect: Story = {
  args: { indicators, data, symbol: 'rect', symbolSize: 8 },
};

/** symbol="roundRect" — rounded rectangle markers. */
export const RoundRect: Story = {
  args: { indicators, data, symbol: 'roundRect', symbolSize: 8 },
};

/** symbol="triangle" — triangle markers. */
export const Triangle: Story = {
  args: { indicators, data, symbol: 'triangle', symbolSize: 8 },
};

/** symbol="diamond" — diamond markers. */
export const Diamond: Story = {
  args: { indicators, data, symbol: 'diamond', symbolSize: 8 },
};

/** symbol="pin" — pin markers. */
export const Pin: Story = {
  args: { indicators, data, symbol: 'pin', symbolSize: 8 },
};

/** symbol="arrow" — arrow markers. */
export const Arrow: Story = {
  args: { indicators, data, symbol: 'arrow', symbolSize: 8 },
};

/** Larger symbols: symbolSize={12}. */
export const LargeSymbols: Story = {
  args: { indicators, data, symbol: 'circle', symbolSize: 12 },
};

/** Smaller symbols: symbolSize={4}. */
export const SmallSymbols: Story = {
  args: { indicators, data, symbol: 'circle', symbolSize: 4 },
};
