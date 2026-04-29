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
      description:
        'Who sent the message — drives container treatment (assistant: prose, user: card, system: italic note).',
    },
    eyebrow: {
      control: 'text',
      description:
        'Speaker label rendered above the content as a small eyebrow. Pass once per turn-streak; consecutive messages from the same speaker should omit it.',
    },
  },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const FromAssistant: Story = {
  args: {
    from: 'assistant',
    eyebrow: 'Ellie',
    children:
      "I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'",
  },
}

export const FromAssistantNoEyebrow: Story = {
  args: {
    from: 'assistant',
    children:
      'A consecutive assistant turn — the eyebrow is omitted because the previous message already established who is speaking.',
  },
}

export const FromUser: Story = {
  args: {
    from: 'user',
    children: 'What tools do you have access to?',
  },
}

export const FromSystem: Story = {
  args: {
    from: 'system',
    children: 'Connection to MCP server lost. Continuing without tools.',
  },
}

export const Conversation: Story = {
  args: { from: 'assistant', children: '' },
  render: () => (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <Message from="user">What tools do you have?</Message>
      <Message from="assistant" eyebrow="Ellie">
        I have access to me_user_info, which can look up your account details.
        Want me to try it?
      </Message>
      <Message from="user">Yes please.</Message>
      <Message from="assistant" eyebrow="Ellie">
        Your account is rille@engrate.io.
      </Message>
      <Message from="assistant">
        Anything else you&apos;d like to look up? I can also resolve metering
        points, soon.
      </Message>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A multi-turn conversation. Note the eyebrow appears only on the first assistant turn after a user turn — consecutive assistant chunks continue the column without re-labelling.',
      },
    },
  },
}
