import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'

import { Textarea } from './Textarea'

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The visual style of the textarea',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior of the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-1.5">
      <Label htmlFor="message-error">Message</Label>
      <Textarea
        id="message-error"
        variant="error"
        placeholder="Type your message here..."
        aria-invalid="true"
        aria-describedby="message-error-msg"
      />
      <span id="message-error-msg" className="text-small text-error">
        Please enter a message
      </span>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
}

export const NoResize: Story = {
  args: {
    placeholder: 'Cannot resize this textarea',
    resize: 'none',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="default">Default</Label>
            <Textarea id="default" placeholder="Default textarea" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="error">Error</Label>
            <Textarea id="error" variant="error" placeholder="Error textarea" />
            <span className="text-small text-error">
              This field is required
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Textarea id="disabled" placeholder="Disabled textarea" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
}
