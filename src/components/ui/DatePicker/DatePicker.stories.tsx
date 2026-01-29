import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { DatePicker } from './DatePicker'

function WithValueExample() {
  const [date, setDate] = React.useState<Date | null>(new Date())
  return (
    <DatePicker value={date} onChange={setDate} placeholder="Select a date" />
  )
}

function CustomFormatExample() {
  const [date, setDate] = React.useState<Date | null>(new Date())
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      format="dd/MM/yyyy"
      placeholder="DD/MM/YYYY"
    />
  )
}

function WithMinMaxDateExample() {
  const [date, setDate] = React.useState<Date | null>(null)
  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return (
    <div className="flex flex-col gap-2">
      <p className="text-small text-secondary">
        Only dates in the current month are selectable
      </p>
      <DatePicker
        value={date}
        onChange={setDate}
        minDate={minDate}
        maxDate={maxDate}
        placeholder="Select a date"
      />
    </div>
  )
}

function ControlledExample() {
  const [date, setDate] = React.useState<Date | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <DatePicker value={date} onChange={setDate} placeholder="Select a date" />
      <p className="text-small text-secondary">
        Selected: {date ? date.toLocaleDateString() : 'None'}
      </p>
      <div className="flex gap-2">
        <button
          className="bg-sunflower rounded-pill px-4 py-2 text-sm"
          onClick={() => setDate(new Date())}
        >
          Set Today
        </button>
        <button
          className="border-border rounded-pill border px-4 py-2 text-sm"
          onClick={() => setDate(null)}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual style of the date picker',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    format: {
      control: 'text',
      description: 'Date format string (supports MM, dd, yyyy)',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select a date',
  },
}

export const WithValue: Story = {
  render: () => <WithValueExample />,
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Select a date',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select a date',
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

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Default</p>
            <DatePicker placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Error</p>
            <DatePicker variant="error" placeholder="Select a date" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Empty</p>
            <DatePicker placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">With Value</p>
            <DatePicker value={new Date()} placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Disabled</p>
            <DatePicker disabled placeholder="Select a date" />
          </div>
        </div>
      </div>
    </div>
  ),
}
