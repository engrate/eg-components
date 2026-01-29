import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './Label'

const meta = {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the label',
    },
    htmlFor: {
      control: 'text',
      description: 'The id of the form element the label is for',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email address',
  },
}

export const Small: Story = {
  args: {
    children: 'Small label',
    size: 'sm',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        className="border-border bg-card text-body focus:ring-sunflower h-10 w-64 rounded-md border px-3 font-sans focus:ring-2 focus:ring-offset-2 focus:outline-none"
      />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-2">
          <Label size="default">Default size label</Label>
          <Label size="sm">Small size label</Label>
        </div>
      </div>
    </div>
  ),
}
