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

Use them by asking natural questions.

1. Ask a question
2. The model picks a tool
3. Engrate streams the answer back`,
  },
}

export const CodeBlocks: Story = {
  args: {
    children: `Here's a TypeScript snippet:

\`\`\`ts
const tools = await mcpClient.tools()
streamText({ tools, stopWhen: stepCountIs(10) })
\`\`\`

And a Python equivalent:

\`\`\`python
from engrate.mcp import client

tools = await client.tools()
\`\`\`

Pass them straight to \`streamText\`.`,
  },
}

export const Table: Story = {
  args: {
    children: `| Tool | Status | Owner |
| --- | --- | --- |
| me_user_info | available | platform |
| cost_of_energy | pending | tariff team |
| weather_forecast | proposed | — |`,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Markdown tables render through the Engrate Table primitive — same borders, hover, and typography as Tables elsewhere in the app.',
      },
    },
  },
}

export const Headings: Story = {
  args: {
    children: `# Top-level heading

Body text under an h1 — note that h1 in chat is sized as h3, so it never competes with a page hero.

## Second-level heading

More body text.

### Third-level heading

Even more.`,
  },
}

export const Blockquote: Story = {
  args: {
    children: `> A measured note from the model — sunflower-tinted left border to lift it without shouting.

Plain paragraph after the quote.`,
  },
}

export const KitchenSink: Story = {
  args: {
    children: `# Engrate MCP overview

The MCP server exposes a small set of **read-only** tools that the model can chain.

## Capabilities

1. Resolve a metering point to its system operator
2. Compute the active tariff
3. Render a cost breakdown

> Tool selection is left to the model — we don't gate per-tool access today.

### Quick example

\`\`\`ts
const tools = await mcp.tools()
const result = streamText({
  model: 'claude-sonnet-4-6',
  messages,
  tools,
  stopWhen: stepCountIs(10),
})
\`\`\`

### Tools today

| Tool | Status |
| --- | --- |
| \`me_user_info\` | live |
| \`cost_of_energy\` | beta |

---

See [the docs](https://engrate.io/docs) for the full reference. Inline \`identifiers\` look like this.`,
  },
}

export const StreamingPartial: Story = {
  args: {
    children:
      "The model is mid-sentence and the markdown parser hasn't closed the **bo",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive.',
      },
    },
  },
}
