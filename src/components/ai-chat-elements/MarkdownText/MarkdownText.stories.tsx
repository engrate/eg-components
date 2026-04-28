import type { Meta, StoryObj } from '@storybook/react'

import { MarkdownText } from './MarkdownText'

const meta = {
  title: 'AI Chat Elements/MarkdownText',
  component: MarkdownText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkdownText>

export default meta
type Story = StoryObj<typeof meta>

export const Plain: Story = {
  args: {
    children: 'Just a single paragraph of plain text from the model.',
  },
}

export const Formatting: Story = {
  args: {
    children:
      "Here's some **bold** and *italic* text, plus a [link](https://engrate.io) and `inline code`.",
  },
}

export const Lists: Story = {
  args: {
    children: `Engrate's MCP exposes:

- \`me_user_info\` — your account details
- \`cost_of_energy\` — tariff calculations *(coming soon)*

Use them by asking natural questions.`,
  },
}

export const CodeBlock: Story = {
  args: {
    children: `Here's a code snippet:

\`\`\`ts
const tools = await mcpClient.tools()
streamText({ tools, stopWhen: stepCountIs(10) })
\`\`\`

Pass them straight to \`streamText\`.`,
  },
}

export const Table: Story = {
  args: {
    children: `| Tool | Status |
| --- | --- |
| me_user_info | available |
| cost_of_energy | pending |`,
  },
}

export const StreamingPartial: Story = {
  args: {
    children:
      'The model is mid-sentence and the markdown parser hasn\'t closed the **bo',
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive.",
      },
    },
  },
}
