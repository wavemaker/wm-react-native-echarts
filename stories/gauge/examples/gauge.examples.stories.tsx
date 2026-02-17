import type { StoryObj } from '@storybook/react';
import React from 'react';
import meta from '../meta';
import { RadialGaugeChart } from '@components/chart/gauge/radial-gauge/radial-gauge.chart';
import { SemiCircularGaugeChart } from '@components/chart/gauge/semi-circular-gauge/semi-circular-gauge.chart';
import { LabeledGaugeChart } from '@components/chart/gauge/labeled-gauge/labeled-gauge.chart';
import { AnimatedGaugeChart } from '@components/chart/gauge/animated-gauge/animated-gauge.chart';

export default { ...meta, title: 'Charts/Gauge/Examples' };
type Story = StoryObj<typeof meta>;

/** Radial gauge: pointer + arc with center value. */
export const Radial: Story = {
  args: {
    value: 75,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
  },
  render: (args) => <RadialGaugeChart {...args} />,
};

/** Semi-circular gauge with color segments and needle. */
export const SemiCircular: Story = {
  args: {
    value: 65,
    min: 0,
    max: 100,
    width: 400,
    height: 250,
  },
  render: (args) => (
    <SemiCircularGaugeChart
      value={args.value}
      min={args.min}
      max={args.max}
      width={args.width}
      height={args.height}
      theme={args.theme}
      colors={args.colors}
    />
  ),
};

/** Semi-circular with custom axis segment colors (e.g. red / yellow / green). */
export const SemiCircularSegments: Story = {
  args: {
    value: 55,
    min: 0,
    max: 100,
    width: 400,
    height: 250,
  },
  render: (args) => (
    <SemiCircularGaugeChart
      value={args.value}
      min={args.min}
      max={args.max}
      width={args.width}
      height={args.height}
      axisColors={['#e74c3c', '#f39c12', '#2ecc71']}
      axisColorLengths={[40, 80, 100]}
    />
  ),
};

/** Labeled gauge with title and detail text. */
export const Labeled: Story = {
  args: {
    value: 42,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
  },
  render: (args) => (
    <LabeledGaugeChart
      value={args.value}
      min={args.min}
      max={args.max}
      width={args.width}
      height={args.height}
      theme={args.theme}
      colors={args.colors}
      title="Score"
      detailText="42%"
    />
  ),
};

/** Animated SVG gauge with smooth value transition. */
export const Animated: Story = {
  args: {
    value: 46,
    min: 0,
    max: 90,
    width: 280,
    height: 280,
  },
  render: (args) => (
    <AnimatedGaugeChart
      value={args.value}
      min={args.min}
      max={args.max}
      width={args.width}
      height={args.height}
      theme={args.theme}
      colors={args.colors}
    />
  ),
};
