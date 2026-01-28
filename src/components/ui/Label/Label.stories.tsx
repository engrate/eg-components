import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './Label'

const meta = {
  title: 'UI/Label',
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
        className="h-10 w-64 rounded-md border border-border bg-card px-3 font-sans text-body focus:outline-none focus:ring-2 focus:ring-sunflower focus:ring-offset-2"
      />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-3 text-small font-medium text-secondary">Sizes</h3>
        <div className="flex flex-col gap-2">
          <Label size="default">Default size label</Label>
          <Label size="sm">Small size label</Label>
        </div>
      </div>
    </div>
  ),
}
