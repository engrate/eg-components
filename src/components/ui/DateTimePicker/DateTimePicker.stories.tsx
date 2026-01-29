import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { DateTimePicker } from './DateTimePicker'

function WithValueExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(new Date())
  return (
    <DateTimePicker
      value={dateTime}
      onChange={setDateTime}
      placeholder="Select date and time"
    />
  )
}

function CustomFormatExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(new Date())
  return (
    <DateTimePicker
      value={dateTime}
      onChange={setDateTime}
      format="dd/MM/yyyy HH:mm"
      placeholder="DD/MM/YYYY HH:MM"
    />
  )
}

function TwelveHourFormatExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(new Date())
  return (
    <DateTimePicker
      value={dateTime}
      onChange={setDateTime}
      format="MM/dd/yyyy hh:mm a"
      use24Hour={false}
      placeholder="Select date and time"
    />
  )
}

function WithMinMaxDateExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(null)
  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return (
    <div className="flex flex-col gap-2">
      <p className="text-small text-secondary">
        Only dates in the current month are selectable
      </p>
      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Select date and time"
      />
    </div>
  )
}

function ControlledExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        placeholder="Select date and time"
      />
      <p className="text-small text-secondary">
        Selected: {dateTime ? dateTime.toLocaleString() : 'None'}
      </p>
      <div className="flex gap-2">
        <button
          className="bg-sunflower rounded-pill px-4 py-2 text-sm"
          onClick={() => setDateTime(new Date())}
        >
          Set Now
        </button>
        <button
          className="border-border rounded-pill border px-4 py-2 text-sm"
          onClick={() => setDateTime(null)}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

function MinuteStepExample() {
  const [dateTime, setDateTime] = React.useState<Date | null>(new Date())
  return (
    <div className="flex flex-col gap-2">
      <p className="text-small text-secondary">
        Time selection in 15-minute increments
      </p>
      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        minuteStep={15}
        placeholder="Select date and time"
      />
    </div>
  )
}

const meta = {
  title: 'UI/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual style of the date time picker',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date time picker is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    format: {
      control: 'text',
      description:
        'Date/time format string (supports MM, dd, yyyy, HH, hh, mm, a)',
    },
    use24Hour: {
      control: 'boolean',
      description: 'Use 24-hour format for time display',
    },
    minuteStep: {
      control: 'number',
      description: 'Step for minute selection',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DateTimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select date and time',
  },
}

export const WithValue: Story = {
  render: () => <WithValueExample />,
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Select date and time',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select date and time',
  },
}

export const CustomFormat: Story = {
  render: () => <CustomFormatExample />,
}

export const TwelveHourFormat: Story = {
  render: () => <TwelveHourFormatExample />,
}

export const WithMinMaxDate: Story = {
  render: () => <WithMinMaxDateExample />,
}

export const MinuteStep: Story = {
  render: () => <MinuteStepExample />,
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Default</span>
        <DateTimePicker placeholder="Select date and time" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">With Value</span>
        <DateTimePicker value={new Date(2025, 5, 15, 14, 30)} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Error</span>
        <DateTimePicker variant="error" placeholder="Select date and time" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Disabled</span>
        <DateTimePicker disabled placeholder="Select date and time" />
      </div>
    </div>
  ),
}
