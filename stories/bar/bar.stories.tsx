import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Bar', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];

/** Default bar chart (single series). */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};
