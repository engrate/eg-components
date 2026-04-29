import type { Meta, StoryObj } from '@storybook/react'

import { CodeBlock } from './CodeBlock'

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: [
        undefined,
        'ts',
        'tsx',
        'js',
        'python',
        'json',
        'bash',
        'sql',
        'css',
        'yaml',
      ],
    },
    showCopy: { control: 'boolean' },
  },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const TypeScript: Story = {
  args: {
    language: 'ts',
    children: `import { streamText } from 'ai'

export async function POST(req: Request) {
  const tools = await mcpClient.tools()
  const { messages } = await req.json()
  return streamText({
    model: 'claude-sonnet-4-6',
    messages,
    tools,
    stopWhen: stepCountIs(10),
  }).toDataStreamResponse()
}
`,
  },
}

export const Python: Story = {
  args: {
    language: 'python',
    children: `from datetime import datetime

def hours_until_dispatch(start: datetime) -> int:
    """Whole hours from now until the dispatch window opens."""
    delta = start - datetime.utcnow()
    return max(0, int(delta.total_seconds() // 3600))
`,
  },
}

export const Json: Story = {
  args: {
    language: 'json',
    children: `{
  "tariff": "se-vattenfall-energy",
  "components": [
    { "type": "energy_tax", "amount": 42.8 },
    { "type": "transfer", "amount": 27.5 }
  ]
}
`,
  },
}

export const Bash: Story = {
  args: {
    language: 'bash',
    children: `# regenerate the openapi spec
make verify &> /tmp/verify.log
echo "exit=$?"
`,
  },
}

export const NoLanguage: Story = {
  args: {
    children: `Plain text without a registered language. Falls back to neutral
monospace styling — still inside the Engrate frame.`,
  },
}

export const NoCopyButton: Story = {
  args: {
    language: 'ts',
    showCopy: false,
    children: `const greeting = 'Hello, Engrate'`,
  },
}
