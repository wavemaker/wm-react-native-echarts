import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Pie', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

const defaultData = [
  { name: 'Desktop', value: 275 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 187 },
  { name: 'Other', value: 90 },
];

/** Default pie chart. */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Pie with highlighter disabled. */
export const ShowHighlighter: Story = {
  args: {
    data: defaultData,
    showHighlighter: false,
  },
};
