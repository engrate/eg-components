import type { Meta, StoryObj } from '@storybook/react'

import { TypingIndicator } from './TypingIndicator'

const meta = {
  title: 'AI Chat Elements/TypingIndicator',
  component: TypingIndicator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypingIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithName: Story = {
  args: {
    name: 'Ellie',
  },
}
