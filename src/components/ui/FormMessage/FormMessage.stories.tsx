import type { Meta, StoryObj } from '@storybook/react'

import { FormMessage } from './FormMessage'

const meta = {
  title: 'Forms/FormMessage',
  component: FormMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'The variant of the message',
    },
    children: {
      control: 'text',
      description: 'The message content',
    },
  },
} satisfies Meta<typeof FormMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a hint message to help the user.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This field is required.',
    role: 'alert',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-small text-secondary mb-2 font-medium">Variants</h3>
        <div className="flex flex-col gap-2">
          <FormMessage>This is a default hint message</FormMessage>
          <FormMessage variant="error">This is an error message</FormMessage>
        </div>
      </div>
    </div>
  ),
}
