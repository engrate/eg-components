import type { Meta, StoryObj } from '@storybook/react'

import { Message } from './Message'

const meta = {
  title: 'AI Chat Elements/Message',
  component: Message,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    from: {
      control: 'select',
      options: ['user', 'assistant', 'system'],
      description: 'Who sent the message — drives alignment and bubble color',
    },
    name: {
      control: 'text',
      description: 'Optional display name shown above the message body',
    },
  },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const FromUser: Story = {
  args: {
    from: 'user',
    name: 'You',
    children: 'What tools do you have access to?',
  },
}

export const FromAssistant: Story = {
  args: {
    from: 'assistant',
    name: 'Ellie',
    children:
      "I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'",
  },
}

export const FromSystem: Story = {
  args: {
    from: 'system',
    children: 'Connection to MCP server lost. Continuing without tools.',
  },
}

export const NoName: Story = {
  args: {
    from: 'assistant',
    children: 'A message without a name header.',
  },
}

export const Conversation: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-3">
      <Message from="user" name="You">
        What tools do you have?
      </Message>
      <Message from="assistant" name="Ellie">
        I have access to me_user_info, which can look up your account details.
        Want me to try it?
      </Message>
      <Message from="user" name="You">
        Yes please.
      </Message>
      <Message from="assistant" name="Ellie">
        Your account is rille@engrate.io.
      </Message>
    </div>
  ),
}
