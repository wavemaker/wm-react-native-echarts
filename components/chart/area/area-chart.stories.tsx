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
      description: 'X-axis labels. Can be a string array or object array with label and value.',
    },
    data: {
      control: 'object',
      description: 'Chart data. Can be single series (number[]), multiple series without names, or multiple series with names.',
    },
    yAxisData: {
      control: 'object',
      description: 'Y-axis labels (optional). When provided, enables custom Y-axis labels.',
    },
    width: {
      control: 'number',
      description: 'Width of the chart in pixels. Default: 220',
    },
    height: {
      control: 'number',
      description: 'Height of the chart in pixels. Default: 350',
    },
    theme: {
      control: 'object',
      description: 'Partial theme override for customizing chart appearance.',
    },
    colors: {
      control: 'object',
      description: 'Colors for the chart series. Overrides theme colors.',
    },
    smooth: {
      control: 'boolean',
      description: 'Whether to use smooth curve interpolation. Default: true',
    },
    step: {
      control: 'select',
      options: [false, 'start', 'middle', 'end'],
      description: 'Step interpolation mode. When set, creates step lines instead of smooth curves. Takes precedence over smooth.',
    },
    boundaryGap: {
      control: 'boolean',
      description: 'Whether to leave gaps at the start and end of the axis.',
    },
    stack: {
      control: 'text',
      description: 'Stack ID for stacking multiple series. When set, series are stacked on top of each other.',
    },
    stackNormalize: {
      control: 'boolean',
      description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
    },
    symbol: {
      control: 'select',
      options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
      description: 'Symbol type for data points. Default: none',
    },
    symbolSize: {
      control: 'number',
      description: 'Size of the symbol. Can be a number, array [width, height], or function.',
    },
    areaOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacity of the filled area (0-1). Default: 0.6',
    },
    areaFill: {
      control: 'select',
      options: ['gradient', 'transparent', 'solid'],
      description: 'Fill style for the area: gradient (default), transparent, or solid.',
    },
    showXAxis: {
      control: 'boolean',
      description: 'Whether to show the X-axis line. Default: false',
    },
    showXAxisTicks: {
      control: 'boolean',
      description: 'Whether to show X-axis tick marks. Default: false',
    },
    showXAxisLabels: {
      control: 'boolean',
      description: 'Whether to show X-axis labels. Default: false',
    },
    showYAxis: {
      control: 'boolean',
      description: 'Whether to show the Y-axis line. Default: false',
    },
    showYAxisTicks: {
      control: 'boolean',
      description: 'Whether to show Y-axis tick marks. Default: false',
    },
    showYAxisLabels: {
      control: 'boolean',
      description: 'Whether to show Y-axis labels. Default: false',
    },
    showXAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show vertical grid lines (X-axis split lines). Default: false',
    },
    showYAxisSplitLines: {
      control: 'boolean',
      description: 'Whether to show horizontal grid lines (Y-axis split lines). Default: false',
    },
    grid: {
      control: 'object',
      description: 'Grid positioning configuration. Values can be percentages (strings) or pixel values (numbers).',
    },
    showLegend: {
      control: 'boolean',
      description: 'Whether to display a legend for named series. Default: false',
    },
    legendConfig: {
      control: 'object',
      description: 'Legend configuration options. Allows customization of legend position, style, and behavior.',
    },
    tooltipAxisPointer: {
      control: 'object',
      description: 'Tooltip axis pointer configuration. Controls the appearance and behavior of the tooltip\'s axis pointer.',
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

// Gradient Area Chart - matches gradient-area.chart (default)
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
    areaFill: 'gradient',
    boundaryGap: false,
  },
};

// Transparent Area Chart - areaFill="transparent"
export const TransparentArea: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    areaFill: 'transparent',
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};

// Solid Area Chart - areaFill="solid"
export const SolidArea: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    areaFill: 'solid',
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

// Stacked Normalized Area Chart - demonstrates stackNormalize
export const StackedNormalized: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Series A', data: [100, 150, 120, 40, 110, 120] },
      { name: 'Series B', data: [86, 155, 117, 33, 99, 94] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    stack: 'total',
    stackNormalize: true,
    showLegend: true,
    boundaryGap: false,
  },
};

// Custom Colors Area Chart - demonstrates colors prop
export const CustomColors: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [
      { name: 'Revenue', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Expenses', data: [150, 280, 200, 90, 180, 190] },
      { name: 'Profit', data: [36, 25, 37, -17, 29, 24] },
    ],
    width: 400,
    height: 350,
    smooth: true,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    showLegend: true,
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};

// Hidden X-Axis Labels - demonstrates showXAxisLabels
export const HiddenXAxisLabels: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxisLabels: false,
    boundaryGap: false,
  },
};

// No Horizontal Grid Lines - demonstrates showYAxisSplitLines
export const NoHorizontalGridLines: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showYAxisSplitLines: false,
    boundaryGap: false,
  },
};

// No Vertical Grid Lines - demonstrates showXAxisSplitLines
export const NoVerticalGridLines: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxisSplitLines: false,
    boundaryGap: false,
  },
};

// Hidden X-Axis - demonstrates showXAxis
export const HiddenXAxis: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxis: false,
    boundaryGap: false,
  },
};

// Show Y-Axis - demonstrates showYAxis
export const ShowYAxis: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showYAxis: true,
    boundaryGap: false,
  },
};

// No Axes - demonstrates both axes hidden
export const NoAxes: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxis: false,
    showYAxis: false,
    showYAxisSplitLines: false,
    boundaryGap: false,
  },
};

// No X-Axis Ticks - demonstrates showXAxisTicks
export const NoXAxisTicks: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxisTicks: false,
    boundaryGap: false,
  },
};

// No Y-Axis Ticks - demonstrates showYAxisTicks
export const NoYAxisTicks: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showYAxis: true,
    showYAxisTicks: false,
    boundaryGap: false,
  },
};

// No Ticks - demonstrates both axes ticks hidden
export const NoTicks: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    showXAxisTicks: false,
    showYAxisTicks: false,
    boundaryGap: false,
  },
};

// Legend Position Top - demonstrates legendConfig
export const LegendPositionTop: Story = {
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
    legendConfig: {
      position: 'top',
    },
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};

// Legend Position Bottom - demonstrates legendConfig
export const LegendPositionBottom: Story = {
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
    legendConfig: {
      position: 'bottom',
    },
    areaOpacity: 0.5,
    boundaryGap: false,
  },
};

// Custom Theme - demonstrates theme prop
export const CustomTheme: Story = {
  args: {
    xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [186, 305, 237, 73, 209, 214],
    width: 400,
    height: 350,
    smooth: true,
    theme: {
      axis: {
        x: {
          tickLabelColor: '#FF6B6B',
          lineColor: '#FF6B6B',
          lineWidth: 2,
        },
        y: {
          tickLabelColor: '#4ECDC4',
          lineColor: '#4ECDC4',
          lineWidth: 2,
          splitLineColor: '#4ECDC4',
          splitLineWidth: 1,
        },
      },
    } as any,
    boundaryGap: false,
  },
};
