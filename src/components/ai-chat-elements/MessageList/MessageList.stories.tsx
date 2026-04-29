import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Message } from '../Message'
import { MessageList } from './MessageList'

const meta = {
  title: 'AI Chat Elements/MessageList',
  component: MessageList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    stickToBottom: { control: 'boolean' },
    fadeEdges: { control: 'boolean' },
  },
} satisfies Meta<typeof MessageList>

export default meta
type Story = StoryObj<typeof meta>

const SEED: { from: 'user' | 'assistant'; text: string }[] = [
  { from: 'user', text: 'How does Engrate route a tariff lookup?' },
  {
    from: 'assistant',
    text: 'It checks the metering grid area, walks the system operator hierarchy, then resolves tariff components.',
  },
  { from: 'user', text: 'And what triggers a recompute?' },
  {
    from: 'assistant',
    text: 'A new published tariff diff or a metering point reassignment.',
  },
  { from: 'user', text: 'Got it — show me an example response.' },
  {
    from: 'assistant',
    text: 'I can. The MCP exposes `cost_of_energy` for that — calling it now…',
  },
]

const Demo: React.FC<{ stickToBottom: boolean; fadeEdges: boolean }> = ({
  stickToBottom,
  fadeEdges,
}) => {
  const [messages, setMessages] = React.useState(SEED)
  const idRef = React.useRef(SEED.length)

  const addMessage = () => {
    idRef.current += 1
    const next: { from: 'user' | 'assistant'; text: string } =
      idRef.current % 2 === 0
        ? { from: 'user', text: `Follow-up #${idRef.current}` }
        : {
            from: 'assistant',
            text: `Reply #${idRef.current} — fresh content streaming in.`,
          }
    setMessages((prev) => [...prev, next])
  }

  return (
    <div className="bg-main border-border flex h-[480px] w-[42rem] flex-col rounded-md border">
      <MessageList
        stickToBottom={stickToBottom}
        fadeEdges={fadeEdges}
        className="space-y-6 px-6 py-6"
      >
        {messages.map((m, i) => {
          const previous = i > 0 ? messages[i - 1] : undefined
          const isStreakStart = previous?.from !== m.from
          const eyebrow =
            isStreakStart && m.from === 'assistant' ? 'Ellie' : undefined
          return (
            <Message key={i} from={m.from} eyebrow={eyebrow}>
              {m.text}
            </Message>
          )
        })}
      </MessageList>
      <div className="border-border border-t p-3">
        <button
          type="button"
          onClick={addMessage}
          className="bg-sunflower text-primary hover:bg-sunflower-hover rounded-pill text-small px-5 py-1 transition-colors"
        >
          Send another
        </button>
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {
    stickToBottom: true,
    fadeEdges: false,
  },
  render: (args) => (
    <Demo
      stickToBottom={args.stickToBottom ?? true}
      fadeEdges={args.fadeEdges ?? false}
    />
  ),
}

export const FadeEdges: Story = {
  args: {
    stickToBottom: true,
    fadeEdges: true,
  },
  render: (args) => (
    <Demo
      stickToBottom={args.stickToBottom ?? true}
      fadeEdges={args.fadeEdges ?? true}
    />
  ),
}

export const StickDisabled: Story = {
  args: {
    stickToBottom: false,
    fadeEdges: false,
  },
  render: (args) => (
    <Demo
      stickToBottom={args.stickToBottom ?? false}
      fadeEdges={args.fadeEdges ?? false}
    />
  ),
}
