import type { Meta, StoryObj } from '@storybook/react'

import { LineChart } from './LineChart'

const meta = {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the chart',
    },
    showGrid: {
      control: 'boolean',
      description: 'Show grid lines',
    },
    showLegend: {
      control: 'boolean',
      description: 'Show legend',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover',
    },
    curved: {
      control: 'boolean',
      description: 'Use curved lines (monotone interpolation)',
    },
    showDots: {
      control: 'boolean',
      description: 'Show dots on data points',
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 5 },
      description: 'Line stroke width',
    },
    xAxisLabel: {
      control: 'text',
      description: 'Label for the x-axis',
    },
    yAxisLabel: {
      control: 'text',
      description: 'Label for the y-axis',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px', minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LineChart>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { label: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { label: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { label: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { label: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { label: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { label: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { label: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
]

export const Default: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    'aria-label': 'Monthly revenue chart',
  },
}

export const MultiSeries: Story = {
  args: {
    data: sampleData,
    series: [
      { key: 'revenue', name: 'Revenue' },
      { key: 'expenses', name: 'Expenses', color: '#0080FF' },
    ],
    'aria-label': 'Revenue vs expenses comparison',
  },
}

export const ThreeSeries: Story = {
  args: {
    data: sampleData,
    series: [
      { key: 'revenue', name: 'Revenue' },
      { key: 'expenses', name: 'Expenses', color: '#0080FF' },
      { key: 'profit', name: 'Profit', color: '#9B4ED8' },
    ],
    'aria-label': 'Financial metrics overview',
  },
}

export const WithAxisLabels: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue ($)' }],
    xAxisLabel: 'Month',
    yAxisLabel: 'Amount ($)',
    'aria-label': 'Monthly revenue with labeled axes',
  },
}

export const WithoutGrid: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    showGrid: false,
    'aria-label': 'Revenue chart without grid',
  },
}

export const WithoutLegend: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    showLegend: false,
    'aria-label': 'Revenue chart without legend',
  },
}

export const LinearCurve: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    curved: false,
    'aria-label': 'Revenue chart with linear lines',
  },
}

export const WithoutDots: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    showDots: false,
    'aria-label': 'Revenue chart without data point dots',
  },
}

export const SmallSize: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    size: 'sm',
    'aria-label': 'Small revenue chart',
  },
}

export const LargeSize: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    size: 'lg',
    'aria-label': 'Large revenue chart',
  },
}

export const AutoDetectSeries: Story = {
  args: {
    data: sampleData,
    // No series prop - will auto-detect from data
    'aria-label': 'Chart with auto-detected series',
  },
}

export const CustomColors: Story = {
  args: {
    data: sampleData,
    series: [
      { key: 'revenue', name: 'Revenue', color: '#721B5D' },
      { key: 'expenses', name: 'Expenses', color: '#002FA7' },
    ],
    'aria-label': 'Chart with custom colors',
  },
}

export const ThickLines: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    strokeWidth: 4,
    'aria-label': 'Chart with thick lines',
  },
}

export const Minimal: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    showGrid: false,
    showLegend: false,
    showDots: false,
    'aria-label': 'Minimal revenue chart',
  },
}
