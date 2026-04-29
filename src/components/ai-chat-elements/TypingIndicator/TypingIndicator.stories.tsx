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

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Ellie',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Eyebrow is only used on the very first chunk of an assistant turn — most calls should omit it.',
      },
    },
  },
}
