import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Area', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];

/** Default area chart. */
export const Default: Story = {
  args: {
    data: defaultData,
  },
};
