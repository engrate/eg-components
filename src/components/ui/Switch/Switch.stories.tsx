import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'
import { Switch } from './Switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the switch is on by default',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Default switch',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    'aria-label': 'Checked switch',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Disabled switch',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    'aria-label': 'Disabled checked switch',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-3">
      <Switch id="dark-mode" className="mt-0.5" />
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="dark-mode">Dark mode</Label>
        <span className="text-small text-text-tertiary">
          Enable dark mode for a more comfortable viewing experience
        </span>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-small font-medium text-text-secondary">
          States
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Switch id="off" />
            <Label htmlFor="off">Off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="on" defaultChecked />
            <Label htmlFor="on">On</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off">Disabled (off)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on">Disabled (on)</Label>
          </div>
        </div>
      </div>
    </div>
  ),
}
