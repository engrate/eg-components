import type { Meta, StoryObj } from '@storybook/react'
import type {
  DynamicToolUIPart,
  ReasoningUIPart,
  TextUIPart,
  UIDataTypes,
  UIMessagePart,
  UITools,
} from 'ai'

import { Message } from '../Message'

import { MessageContent } from './MessageContent'

type AnyPart = UIMessagePart<UIDataTypes, UITools>

const text = (text: string): TextUIPart => ({
  type: 'text',
  text,
})

const tool = (
  toolName: string,
  state: DynamicToolUIPart['state'],
  extra: Partial<DynamicToolUIPart> = {},
): DynamicToolUIPart =>
  ({
    type: 'dynamic-tool',
    toolName,
    toolCallId: `call-${toolName}`,
    state,
    input: { example: true },
    ...extra,
  }) as DynamicToolUIPart

const reasoning = (text: string): ReasoningUIPart => ({
  type: 'reasoning',
  text,
})

const meta = {
  title: 'AI Chat Elements/MessageContent',
  component: MessageContent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageContent>

export default meta
type Story = StoryObj<typeof meta>

export const TextOnly: Story = {
  args: {
    parts: [
      text("Hi! I can look up your user info using the `me_user_info` tool."),
    ],
  },
}

export const TextThenTool: Story = {
  args: {
    parts: [
      text("Let me look that up for you."),
      tool('me_user_info', 'output-available', {
        output: { email: 'rille@engrate.io' },
      }),
      text("You're logged in as **rille@engrate.io**."),
    ] satisfies AnyPart[],
  },
}

export const ToolRunning: Story = {
  args: {
    parts: [
      text("Let me look that up for you."),
      tool('me_user_info', 'input-available'),
    ] satisfies AnyPart[],
  },
}

export const ToolFailed: Story = {
  args: {
    parts: [
      text("Trying to fetch your info..."),
      tool('me_user_info', 'output-error', {
        errorText: 'MCP server returned 401 invalid_token.',
      }),
      text("Sorry, I couldn't reach the auth service."),
    ] satisfies AnyPart[],
  },
}

export const WithReasoning: Story = {
  args: {
    parts: [
      reasoning('The user asked who they are. I should call me_user_info.'),
      tool('me_user_info', 'output-available', {
        output: { email: 'rille@engrate.io' },
      }),
      text('You are **rille@engrate.io**.'),
    ] satisfies AnyPart[],
  },
}

export const InMessageBubble: Story = {
  args: {
    parts: [
      text('Looking that up.'),
      tool('me_user_info', 'output-available', {
        output: { email: 'rille@engrate.io' },
      }),
      text('Your email is **rille@engrate.io**.'),
    ] satisfies AnyPart[],
  },
  render: (args) => (
    <div className="max-w-2xl">
      <Message from="assistant" name="Ellie">
        <MessageContent {...args} />
      </Message>
    </div>
  ),
}
