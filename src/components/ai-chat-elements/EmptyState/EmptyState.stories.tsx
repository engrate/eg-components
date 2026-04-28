import type { Meta, StoryObj } from '@storybook/react'

import { EmptyState } from './EmptyState'

const meta = {
  title: 'AI Chat Elements/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomTitle: Story = {
  args: {
    title: "Hi, I'm Ellie! Ask me about energy.",
  },
}

export const Compact: Story = {
  args: {
    compact: true,
    title: 'Ask me anything…',
  },
}

export const WithChildren: Story = {
  args: {
    title: "Hi, I'm Ellie! Ask me about energy.",
    children: (
      <div className="text-tertiary text-label">
        (Suggestion chips would go here once `&lt;Suggestion&gt;` lands.)
      </div>
    ),
  },
}
