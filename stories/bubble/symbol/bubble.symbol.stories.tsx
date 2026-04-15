import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bubble/Symbol' };
type Story = StoryObj<typeof meta>;

const data: [number, number, number][] = [
  [10, 20, 30],
  [15, 25, 15],
  [20, 15, 45],
  [25, 30, 25],
  [30, 22, 35],
];

/** symbol="circle" (default for bubble). */
export const Circle: Story = {
  args: {
    data,
    symbol: 'circle',
  },
};

/** symbol="rect" — square bubbles. */
export const Rect: Story = {
  args: {
    data,
    symbol: 'rect',
  },
};

/** symbol="roundRect" — rounded rectangle bubbles. */
export const RoundRect: Story = {
  args: {
    data,
    symbol: 'roundRect',
  },
};

/** symbol="triangle" — triangle bubbles. */
export const Triangle: Story = {
  args: {
    data,
    symbol: 'triangle',
  },
};

/** symbol="diamond" — diamond bubbles. */
export const Diamond: Story = {
  args: {
    data,
    symbol: 'diamond',
  },
};

/** symbol="pin" — pin bubbles. */
export const Pin: Story = {
  args: {
    data,
    symbol: 'pin',
  },
};

/** symbol="arrow" — arrow bubbles. */
export const Arrow: Story = {
  args: {
    data,
    symbol: 'arrow',
  },
};

/** Larger bubble size range: sizeRange={[15, 60]}. */
export const LargeBubbles: Story = {
  args: {
    data,
    symbol: 'circle',
    sizeRange: [15, 60],
  },
};

/** Smaller bubble size range: sizeRange={[4, 25]}. */
export const SmallBubbles: Story = {
  args: {
    data,
    symbol: 'circle',
    sizeRange: [4, 25],
  },
};
