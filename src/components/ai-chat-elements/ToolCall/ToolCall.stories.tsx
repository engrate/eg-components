import type { Meta, StoryObj } from '@storybook/react'

import { ToolCall } from './ToolCall'

const meta = {
  title: 'AI Chat Elements/ToolCall',
  component: ToolCall,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: [
        'input-streaming',
        'input-available',
        'approval-requested',
        'approval-responded',
        'output-available',
        'output-error',
      ],
    },
  },
} satisfies Meta<typeof ToolCall>

export default meta
type Story = StoryObj<typeof meta>

const sampleInput = { include_email: true }
const sampleOutput = {
  email: 'rille@engrate.io',
  display_name: 'Richard Eklund',
  organization: 'Engrate',
}

export const Running: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'input-available',
    input: sampleInput,
  },
}

export const Used: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput,
  },
}

export const Failed: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-error',
    input: sampleInput,
    errorText: 'Authentication failed: bearer token expired.',
  },
}

export const NoDetails: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    showDetails: false,
  },
}

export const Lifecycle: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
  },
  render: () => (
    <div className="flex max-w-xl flex-col gap-1">
      <ToolCall toolName="me_user_info" state="input-streaming" />
      <ToolCall
        toolName="me_user_info"
        state="input-available"
        input={sampleInput}
      />
      <ToolCall
        toolName="me_user_info"
        state="output-available"
        input={sampleInput}
        output={sampleOutput}
      />
      <ToolCall
        toolName="me_user_info"
        state="output-error"
        input={sampleInput}
        errorText="MCP server returned 401."
      />
    </div>
  ),
}
