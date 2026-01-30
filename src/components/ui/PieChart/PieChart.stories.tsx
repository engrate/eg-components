import type { Meta, StoryObj } from '@storybook/react'

import { PieChart } from './PieChart'

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
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
    showLegend: {
      control: 'boolean',
      description: 'Show legend',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover',
    },
    showLabels: {
      control: 'boolean',
      description: 'Show percentage labels on segments',
    },
    innerRadius: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Inner radius for donut chart (0 = pie)',
    },
    paddingAngle: {
      control: { type: 'range', min: 0, max: 10 },
      description: 'Padding angle between segments',
    },
    startAngle: {
      control: { type: 'range', min: 0, max: 360 },
      description: 'Start angle in degrees',
    },
    endAngle: {
      control: { type: 'range', min: -360, max: 360 },
      description: 'End angle in degrees',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PieChart>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
]

const revenueData = [
  { name: 'Product Sales', value: 4500 },
  { name: 'Subscriptions', value: 3200 },
  { name: 'Services', value: 2100 },
  { name: 'Licensing', value: 800 },
]

export const Default: Story = {
  args: {
    data: sampleData,
    'aria-label': 'Traffic by device type',
  },
}

export const DonutChart: Story = {
  args: {
    data: sampleData,
    innerRadius: 60,
    'aria-label': 'Traffic by device type (donut)',
  },
}

export const WithLabels: Story = {
  args: {
    data: sampleData,
    showLabels: true,
    'aria-label': 'Traffic with percentage labels',
  },
}

export const DonutWithLabels: Story = {
  args: {
    data: sampleData,
    innerRadius: 50,
    showLabels: true,
    'aria-label': 'Donut chart with labels',
  },
}

export const WithPaddingAngle: Story = {
  args: {
    data: sampleData,
    paddingAngle: 3,
    'aria-label': 'Chart with segment gaps',
  },
}

export const DonutWithPadding: Story = {
  args: {
    data: sampleData,
    innerRadius: 60,
    paddingAngle: 5,
    'aria-label': 'Donut chart with segment gaps',
  },
}

export const CustomColors: Story = {
  args: {
    data: [
      { name: 'Success', value: 75, color: '#22c55e' },
      { name: 'Warning', value: 15, color: '#eab308' },
      { name: 'Error', value: 10, color: '#ef4444' },
    ],
    'aria-label': 'Status distribution',
  },
}

export const SmallSize: Story = {
  args: {
    data: sampleData,
    size: 'sm',
    'aria-label': 'Small pie chart',
  },
}

export const LargeSize: Story = {
  args: {
    data: sampleData,
    size: 'lg',
    'aria-label': 'Large pie chart',
  },
}

export const WithoutLegend: Story = {
  args: {
    data: sampleData,
    showLegend: false,
    'aria-label': 'Chart without legend',
  },
}

export const HalfPie: Story = {
  args: {
    data: sampleData,
    startAngle: 180,
    endAngle: 0,
    'aria-label': 'Half pie chart',
  },
}

export const RevenueBreakdown: Story = {
  args: {
    data: revenueData,
    innerRadius: 70,
    showLabels: true,
    paddingAngle: 2,
    'aria-label': 'Revenue breakdown by category',
  },
}

export const TwoSegments: Story = {
  args: {
    data: [
      { name: 'Complete', value: 68 },
      { name: 'Remaining', value: 32 },
    ],
    innerRadius: 70,
    showLabels: true,
    'aria-label': 'Progress indicator',
  },
}
