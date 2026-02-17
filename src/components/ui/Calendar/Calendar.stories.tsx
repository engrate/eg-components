import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'

import { Calendar } from './Calendar'

function SingleExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}

function RangeExample() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 1, 10),
    to: new Date(2025, 1, 20),
  })
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-lg border"
    />
  )
}

function TwoMonthExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  )
}

const meta = {
  title: 'Primitives/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => <SingleExample />,
}

export const Range: Story = {
  render: () => <RangeExample />,
}

export const TwoMonths: Story = {
  render: () => <TwoMonthExample />,
}

export const AllModes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Single Date
        </h3>
        <SingleExample />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Date Range
        </h3>
        <RangeExample />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Two Months
        </h3>
        <TwoMonthExample />
      </div>
    </div>
  ),
}
