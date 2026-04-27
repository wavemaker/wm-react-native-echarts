import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Radar', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

const defaultIndicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
  { name: 'Admin', max: 100 },
];
const defaultData = [80, 60, 75, 55, 70];

/** Default radar chart. */
export const Default: Story = {
  args: {
    indicators: defaultIndicators,
    data: defaultData,
  },
};

/** Radar with highlighter disabled. */
export const ShowHighlighter: Story = {
  args: {
    indicators: defaultIndicators,
    data: defaultData,
    showHighlighter: false,
  },
};
