import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'
import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual style of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'The type of input',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="email-error">Email address</Label>
      <Input
        id="email-error"
        type="email"
        variant="error"
        placeholder="you@example.com"
        aria-invalid="true"
        aria-describedby="email-error-msg"
      />
      <span id="email-error-msg" className="text-small text-error">
        Please enter a valid email address
      </span>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'john@example.com',
  },
}

export const Password: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="default">Default</Label>
            <Input id="default" placeholder="Default input" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="error">Error</Label>
            <Input id="error" variant="error" placeholder="Error input" />
            <span className="text-small text-error">
              This field is required
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Disabled input" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
}
