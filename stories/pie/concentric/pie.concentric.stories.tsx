import type { StoryObj } from '@storybook/react';
import type { PieRingData } from '@components/chart/pie';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Concentric' };
type Story = StoryObj<typeof meta>;

const concentricData: PieRingData[] = [
  {
    name: 'Q1–Q2',
    radius: ['0%', '35%'],
    data: [
      { name: 'Desktop', value: 275 },
      { name: 'Mobile', value: 200 },
      { name: 'Tablet', value: 187 },
      { name: 'Other', value: 90 },
    ],
  },
  {
    name: 'Q3–Q4',
    radius: ['45%', '60%'],
    data: [
      { name: 'Desktop', value: 320 },
      { name: 'Mobile', value: 250 },
      { name: 'Tablet', value: 200 },
      { name: 'Other', value: 130 },
    ],
  },
];

/** Two concentric rings: inner Q1–Q2, outer Q3–Q4. */
export const TwoRings: Story = {
  args: {
    data: concentricData,
    showLegend: true,
  },
};

/** Three concentric rings. */
export const ThreeRings: Story = {
  args: {
    data: [
      {
        name: 'H1',
        radius: ['0%', '28%'],
        data: [
          { name: 'A', value: 100 },
          { name: 'B', value: 80 },
          { name: 'C', value: 60 },
        ],
      },
      {
        name: 'H2',
        radius: ['35%', '55%'],
        data: [
          { name: 'A', value: 120 },
          { name: 'B', value: 90 },
          { name: 'C', value: 70 },
        ],
      },
      {
        name: 'H3',
        radius: ['62%', '75%'],
        data: [
          { name: 'A', value: 140 },
          { name: 'B', value: 100 },
          { name: 'C', value: 80 },
        ],
      },
    ],
    showLegend: true,
  },
};

/** Concentric with labels inside. */
export const LabelsInside: Story = {
  args: {
    data: concentricData,
    showLegend: true,
    labelPosition: 'inside',
    showLabelLine: false,
  },
};
