import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/Fill' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** Default fill: gradient from series color (with areaOpacity) to transparent. */
export const Gradient: Story = {
  args: {
    xAxisData: xAxisLabels,
    data
  },
};

/** areaFill="transparent" — flat fill with areaOpacity applied. */
export const Transparent: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    areaFill: 'transparent'
  },
};

/** areaFill="solid" — fully opaque fill (ignores areaOpacity). */
export const Solid: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    areaFill: 'solid',
  },
};

/** areaOpacity={0.3} — lighter fill (gradient). */
export const LowOpacity: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    areaFill: 'gradient',
    areaOpacity: 0.3,
  },
};

/** areaOpacity={1} — full opacity (gradient still fades to transparent at bottom). */
export const FullOpacity: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    areaFill: 'gradient',
    areaOpacity: 1,
  },
};
