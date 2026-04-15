import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Line/Symbol' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];

/** No symbols on data points (default). */
export const None: Story = {
  args: {
    data,
    symbol: 'none',
  },
};

/** symbol="circle" — circular markers. */
export const Circle: Story = {
  args: {
    data,
    symbol: 'circle',
    symbolSize: 8,
  },
};

/** symbol="rect" — square markers. */
export const Rect: Story = {
  args: {
    data,
    symbol: 'rect',
    symbolSize: 8,
  },
};

/** symbol="roundRect" — rounded rectangle markers. */
export const RoundRect: Story = {
  args: {
    data,
    symbol: 'roundRect',
    symbolSize: 8,
  },
};

/** symbol="triangle" — triangle markers. */
export const Triangle: Story = {
  args: {
    data,
    symbol: 'triangle',
    symbolSize: 8,
  },
};

/** symbol="diamond" — diamond markers. */
export const Diamond: Story = {
  args: {
    data,
    symbol: 'diamond',
    symbolSize: 8,
  },
};

/** symbol="pin" — pin markers. */
export const Pin: Story = {
  args: {
    data,
    symbol: 'pin',
    symbolSize: 8,
  },
};

/** symbol="arrow" — arrow markers. */
export const Arrow: Story = {
  args: {
    data,
    symbol: 'arrow',
    symbolSize: 8,
  },
};

/** Larger symbols: symbolSize={12}. */
export const LargeSymbols: Story = {
  args: {
    data,
    symbol: 'circle',
    symbolSize: 12,
  },
};

/** Smaller symbols: symbolSize={4}. */
export const SmallSymbols: Story = {
  args: {
    data,
    symbol: 'circle',
    symbolSize: 4,
  },
};
