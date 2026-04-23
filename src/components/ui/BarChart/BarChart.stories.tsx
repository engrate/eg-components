import type { Meta, StoryObj } from '@storybook/react'

import { BarChart } from './BarChart'

const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
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
    stacked: {
      control: 'boolean',
      description: 'Stack bars on top of each other',
    },
    radius: {
      control: { type: 'range', min: 0, max: 10 },
      description: 'Bar corner radius',
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
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
} satisfies Meta<typeof BarChart>

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

export const Stacked: Story = {
  args: {
    data: sampleData,
    series: [
      { key: 'revenue', name: 'Revenue' },
      { key: 'expenses', name: 'Expenses', color: '#0080FF' },
    ],
    stacked: true,
    'aria-label': 'Stacked revenue and expenses',
  },
}

export const VerticalLayout: Story = {
  args: {
    data: sampleData.slice(0, 5),
    series: [{ key: 'revenue', name: 'Revenue' }],
    layout: 'vertical',
    'aria-label': 'Horizontal bar chart',
  },
}

export const RoundedBars: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    radius: 4,
    'aria-label': 'Chart with rounded bars',
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

export const Minimal: Story = {
  args: {
    data: sampleData,
    series: [{ key: 'revenue', name: 'Revenue' }],
    showGrid: false,
    showLegend: false,
    radius: 2,
    'aria-label': 'Minimal bar chart',
  },
}

export const StackedRounded: Story = {
  args: {
    data: sampleData,
    series: [
      { key: 'revenue', name: 'Revenue' },
      { key: 'expenses', name: 'Expenses', color: '#0080FF' },
    ],
    stacked: true,
    radius: 4,
    'aria-label': 'Stacked chart with rounded bars',
  },
}

const energyMixData = [
  {
    label: 'Q1',
    solar: 120,
    wind: 95,
    hydro: 60,
    nuclear: 80,
    gas: 110,
    coal: 45,
    biomass: 30,
    geothermal: 15,
    tidal: 8,
    hydrogen: 5,
  },
  {
    label: 'Q2',
    solar: 150,
    wind: 80,
    hydro: 55,
    nuclear: 82,
    gas: 100,
    coal: 40,
    biomass: 35,
    geothermal: 18,
    tidal: 10,
    hydrogen: 7,
  },
  {
    label: 'Q3',
    solar: 180,
    wind: 70,
    hydro: 50,
    nuclear: 78,
    gas: 90,
    coal: 35,
    biomass: 28,
    geothermal: 20,
    tidal: 12,
    hydrogen: 10,
  },
  {
    label: 'Q4',
    solar: 100,
    wind: 120,
    hydro: 65,
    nuclear: 85,
    gas: 105,
    coal: 42,
    biomass: 32,
    geothermal: 16,
    tidal: 9,
    hydrogen: 8,
  },
]

export const StackedTenSeries: Story = {
  args: {
    data: energyMixData,
    series: [
      { key: 'solar', name: 'Solar' },
      { key: 'wind', name: 'Wind' },
      { key: 'hydro', name: 'Hydro' },
      { key: 'nuclear', name: 'Nuclear' },
      { key: 'gas', name: 'Natural Gas' },
      { key: 'coal', name: 'Coal' },
      { key: 'biomass', name: 'Biomass' },
      { key: 'geothermal', name: 'Geothermal' },
      { key: 'tidal', name: 'Tidal' },
      { key: 'hydrogen', name: 'Hydrogen' },
    ],
    stacked: true,
    size: 'lg',
    yAxisLabel: 'TWh',
    'aria-label': 'Quarterly energy production mix by source',
  },
}

export const TruncatedLabels: Story = {
  args: {
    data: energyMixData,
    series: [
      { key: 'solar', name: 'Solar Photovoltaic Panels' },
      { key: 'wind', name: 'Offshore Wind Turbines' },
      { key: 'hydro', name: 'Hydroelectric Power Generation' },
      { key: 'nuclear', name: 'Nuclear Fission Reactors' },
      { key: 'gas', name: 'Liquefied Natural Gas Combined Cycle' },
      { key: 'coal', name: 'Coal' },
      { key: 'biomass', name: 'Biomass' },
      { key: 'geothermal', name: 'Geothermal' },
      { key: 'tidal', name: 'Tidal' },
      { key: 'hydrogen', name: 'Hydrogen' },
    ],
    stacked: true,
    size: 'lg',
    'aria-label': 'Chart demonstrating truncated legend labels',
  },
}
