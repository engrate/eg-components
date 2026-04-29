import type { Meta, StoryObj } from '@storybook/react'

import { EllieMark } from './EllieMark'

const meta = {
  title: 'UI/EllieMark',
  component: EllieMark,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 200, step: 4 },
    },
  },
} satisfies Meta<typeof EllieMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 32 },
}

export const Inline: Story = {
  args: { size: 24 },
  parameters: {
    docs: {
      description: {
        story:
          'Sized for inline use next to a chat bubble — small enough to sit beside a message without dominating.',
      },
    },
  },
}

export const Hero: Story = {
  args: { size: 96 },
  parameters: {
    docs: {
      description: {
        story:
          'Larger placement for empty-state heroes. Same component — only `size` changes.',
      },
    },
  },
}

export const Range: Story = {
  args: { size: 32 },
  render: () => (
    <div className="flex items-end gap-6">
      {[20, 28, 40, 64, 96].map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <EllieMark size={s} />
          <span className="text-label-sm text-tertiary font-mono">{s}px</span>
        </div>
      ))}
    </div>
  ),
}
