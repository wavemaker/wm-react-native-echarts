import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { AreaChart } from './area-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Area',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    xAxisData: {
      control: 'object',
      description: 'X-axis labels',
    },
    data: {
      control: 'object',
      description: 'Chart data (single series, multiple series, or named series)',
    },
    yAxisData: {
      control: 'object',
      description: 'Y-axis labels (optional)',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    smooth: {
      control: 'boolean',
      description: 'Whether to use smooth curve interpolation',
    },
    step: {
      control: 'select',
      options: [false, 'start', 'middle', 'end'],
      description: 'Step interpolation mode',
    },
    stack: {
      control: 'text',
      description: 'Stack ID for stacking multiple series',
    },
    symbol: {
      control: 'select',
      options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond'],
      description: 'Symbol type for data points',
    },
    symbolSize: {
      control: 'number',
      description: 'Size of the symbol',
    },
    areaOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacity of the filled area',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend',
    },
    showYAxisLabels: {
      control: 'boolean',
      description: 'Whether to show Y-axis labels',
    },
  },
  decorators: [
    ((Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    )) as Decorator,
  ],
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
  },
});

// Default Area Chart - matches default-area.chart
export const Default: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    boundaryGap: false,
  },
};

// Gradient Area Chart - matches gradient-area.chart
export const Gradient: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { data: [186, 305, 237, 73, 209, 214] },
      { data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    boundaryGap: false,
  },
};

// Stacked Area Chart - matches stacked-area.chart
export const Stacked: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { data: [100, 150, 120, 40, 110, 120] },
      { data: [86, 155, 117, 33, 99, 94] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    stack: 'total',
    boundaryGap: false,
  },
};

// Interactive Area Chart - matches interactive-area.chart
export const Interactive: Story = {
  args: {
    xAxisData: ['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24'],
    data: [
      { name: 'Series A', data: [800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400] },
      { name: 'Series B', data: [600, 1000, 750, 1500, 900, 1300, 1100, 800, 1500, 1100, 1400, 950, 1200] },
    ],
    width: 400,
    height: 450,
    smooth: true,
    boundaryGap: false,
  },
};

// Linear Area Chart - matches linear-area.chart
export const Linear: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: false,
    boundaryGap: false,
  },
};

// Step Area Chart - matches step-area.chart
export const Step: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    step: 'middle',
    boundaryGap: false,
  },
};

// Stacked Expanded Area Chart - matches stacked-expanded-area.chart
export const StackedExpanded: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { data: [100, 150, 120, 40, 110, 120] },
      { data: [86, 155, 117, 33, 99, 94] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    stack: 'total',
    boundaryGap: false,
    tooltipAxisPointer: {
      type: 'line',
    },
  },
};

// Axes Area Chart - matches axes-area.chart
export const Axes: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    yAxisData: ['0', '50', '100', '150', '200', '250', '300', '350'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showYAxisLabels: true,
    grid: {
      left: '10%',
      right: '5%',
      bottom: '10%',
      top: '10%',
    },
  },
};

// Icons Area Chart - matches icons-area.chart
export const Icons: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};

// Legend Area Chart - matches legend-area.chart
export const Legend: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    showLegend: true,
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};
