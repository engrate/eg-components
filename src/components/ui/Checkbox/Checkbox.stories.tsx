import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Default checkbox',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    'aria-label': 'Checked checkbox',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Disabled checkbox',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    'aria-label': 'Disabled checked checkbox',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Checkbox id="marketing" className="mt-0.5" />
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="marketing">Marketing emails</Label>
        <span className="text-small text-tertiary">
          Receive emails about new products and features
        </span>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-small font-medium text-secondary">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked">Disabled & Checked</Label>
          </div>
        </div>
      </div>
    </div>
  ),
}
