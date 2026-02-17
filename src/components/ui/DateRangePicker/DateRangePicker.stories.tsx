import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

import { DateRangePicker } from './DateRangePicker'

function WithValueExample() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // +7 days
  })
  return (
    <DateRangePicker
      value={range}
      onChange={setRange}
      placeholder="Select date range"
    />
  )
}

function CustomFormatExample() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })
  return (
    <DateRangePicker
      value={range}
      onChange={setRange}
      format="dd/MM/yyyy"
      placeholder="DD/MM/YYYY – DD/MM/YYYY"
    />
  )
}

function WithMinMaxDateExample() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return (
    <div className="flex flex-col gap-2">
      <p className="text-small text-secondary">
        Only dates in the current month are selectable
      </p>
      <DateRangePicker
        value={range}
        onChange={setRange}
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Select date range"
      />
    </div>
  )
}

function ControlledExample() {
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <div className="flex flex-col gap-4">
      <DateRangePicker
        value={range}
        onChange={setRange}
        placeholder="Select date range"
      />
      <p className="text-small text-secondary">
        Selected:{' '}
        {range?.from
          ? `${range.from.toLocaleDateString()} – ${range.to?.toLocaleDateString() ?? '...'}`
          : 'None'}
      </p>
      <div className="flex gap-2">
        <button
          className="bg-sunflower rounded-pill px-4 py-2 text-sm"
          onClick={() => {
            const now = new Date()
            const weekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
            setRange({ from: now, to: weekLater })
          }}
        >
          This Week
        </button>
        <button
          className="border-border rounded-pill border px-4 py-2 text-sm"
          onClick={() => setRange(undefined)}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

function SingleMonthExample() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  return (
    <DateRangePicker
      value={range}
      onChange={setRange}
      numberOfMonths={1}
      placeholder="Select date range"
    />
  )
}

const meta = {
  title: 'Forms/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual style of the date range picker',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date range picker is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no range is selected',
    },
    format: {
      control: 'text',
      description: 'Date format string (supports MM, dd, yyyy)',
    },
    numberOfMonths: {
      control: 'number',
      description: 'Number of months to display side by side',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select date range',
  },
}

export const WithValue: Story = {
  render: () => <WithValueExample />,
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Select date range',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select date range',
  },
}

export const CustomFormat: Story = {
  render: () => <CustomFormatExample />,
}

export const WithMinMaxDate: Story = {
  render: () => <WithMinMaxDateExample />,
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const SingleMonth: Story = {
  render: () => <SingleMonthExample />,
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Default</p>
            <DateRangePicker placeholder="Select date range" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Error</p>
            <DateRangePicker variant="error" placeholder="Select date range" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Empty</p>
            <DateRangePicker placeholder="Select date range" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">With Value</p>
            <DateRangePicker
              value={{
                from: new Date(),
                to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
              }}
              placeholder="Select date range"
            />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Disabled</p>
            <DateRangePicker disabled placeholder="Select date range" />
          </div>
        </div>
      </div>
    </div>
  ),
}
