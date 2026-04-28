import type { Meta, StoryObj } from '@storybook/react'

import { ChatError } from './ChatError'

const meta = {
  title: 'AI Chat Elements/ChatError',
  component: ChatError,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatError>

export default meta
type Story = StoryObj<typeof meta>

export const FromString: Story = {
  args: {
    error: 'The model is overloaded. Try again in a moment.',
  },
}

export const FromError: Story = {
  args: {
    error: new Error('Network request failed: ECONNREFUSED'),
  },
}
