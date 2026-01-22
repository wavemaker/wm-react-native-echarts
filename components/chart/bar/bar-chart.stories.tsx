import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { BarChart } from './bar-chart';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const meta = {
  title: 'Charts/Bar',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    xAxisData: {
      control: 'object',
      description: 'X-axis labels (for vertical bars)',
    },
    yAxisData: {
      control: 'object',
      description: 'Y-axis labels (for horizontal bars)',
    },
    data: {
      control: 'object',
      description: 'Chart data (single series, multiple series, or named series)',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the bars',
    },
    stack: {
      control: 'text',
      description: 'Stack ID for stacking multiple series',
    },
    barWidth: {
      control: 'text',
      description: 'Width of the bars as a percentage string',
    },
    barGap: {
      control: 'text',
      description: 'Gap between bars as a percentage string',
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show value labels on bars',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'outside', 'right'],
      description: 'Position of the value labels',
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});

// Default Bar Chart - matches default-bar.chart
export const Default: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
  },
};

// Interactive Bar Chart - matches interactive-bar.chart
export const Interactive: Story = {
  args: {
    xAxisData: ['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24'],
    data: [800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400],
    width: 400,
    height: 450,
    barWidth: '70%',
    barGap: '10%',
    tooltipConfig: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
  },
};

// Multiple Bar Chart - matches multiple-bar.chart
export const Multiple: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [150, 280, 200, 90, 180, 190] },
    ],
    width: 400,
    height: 350,
    barWidth: '40%',
    showLegend: true,
    legendConfig: {
      position: 'bottom',
    },
    tooltipConfig: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
      show: false,
      splitLine: {
        show: false,
      },
    },
  },
};

// Stacked Bar Chart - matches stacked-bar.chart
export const Stacked: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [100, 150, 120, 40, 110, 120] },
      { name: 'Series B', data: [86, 155, 117, 33, 99, 94] },
    ],
    width: 400,
    height: 350,
    stack: 'total',
    showLegend: true,
    legendConfig: {
      position: 'bottom',
    },
    tooltipConfig: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
  },
};

// Horizontal Bar Chart - matches horizontal-bar.chart
export const Horizontal: Story = {
  args: {
    yAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    orientation: 'horizontal',
    barWidth: '80%',
    tooltipConfig: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
  },
};

// Label Bar Chart - matches label-bar.chart
export const Label: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    showLabels: true,
    labelPosition: 'top',
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    showSplitLine: true,
  },
};

// Custom Label Bar Chart - matches custom-label-bar.chart
export const CustomLabel: Story = {
  args: {
    yAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    orientation: 'horizontal',
    barWidth: '80%',
    showLabels: true,
    labelPosition: 'insideLeft',
    labelFormatter: (params: any) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      return labels[params.dataIndex];
    },
    tooltipConfig: {
      trigger: 'axis',
      formatter: (params: any) => {
        const param = params[0];
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        return labels[param.dataIndex] + ' ' + param.value;
      },
    },
  },
};

// Negative Bar Chart - matches negative-bar.chart
export const Negative: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, -50, 237, -73, 209, -100],
    width: 400,
    height: 350,
    barWidth: '60%',
    positiveColor: '#3b82f6',
    negativeColor: '#ef4444',
    showLabels: true,
    labelPosition: 'outside',
    labelFormatter: (params: any) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      return labels[params.dataIndex];
    },
    tooltipConfig: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    showSplitLine: true,
  },
};

// Active Bar Chart - matches active-bar.chart
export const Active: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    activeIndex: 2,
    tooltipConfig: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    showSplitLine: true,
  },
};

// Mixed Bar Chart - matches mixed-bar.chart
export const Mixed: Story = {
  args: {
    yAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    orientation: 'horizontal',
    barWidth: '60%',
    mixedColors: true,
    showYAxisLabels: true,
    tooltipConfig: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
  },
};
