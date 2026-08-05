import{M as c}from"./MarkdownText-DbNvIg9s.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Cr1EksZu.js";import"./preload-helper-PPVm8Dsz.js";import"./CodeBlock-CDYvrl3A.js";import"./utils-kmX6UHYG.js";import"./index-DvLlOCaK.js";import"./proxy-D8VfKAn9.js";import"./check-Coqntiyw.js";import"./createLucideIcon-DZraPg6G.js";import"./Divider-Do6GxSek.js";import"./index-HTk8j2sO.js";import"./Table-DFoXtzIG.js";import"./Text-NmsYsRqJ.js";import"./index-ClJkd-Gt.js";import"./index-DziRQw1G.js";import"./index.dom-DdL1y947.js";import"./Heading-BOy51Il0.js";import"./Link-rD52Rqwm.js";const E={title:"AI Chat Elements/MarkdownText",component:c,parameters:{layout:"padded"},tags:["autodocs"]},e={args:{children:"Just a single paragraph of plain text from the model."}},t={args:{children:"Here's some **bold** and *italic* text, plus a [link](https://engrate.io) and `inline code`."}},o={args:{children:`Engrate's MCP exposes:

- \`me_user_info\` — your account details
- \`cost_of_energy\` — tariff calculations *(coming soon)*

Use them by asking natural questions.

1. Ask a question
2. The model picks a tool
3. Engrate streams the answer back`}},s={args:{children:`Here's a TypeScript snippet:

\`\`\`ts
const tools = await mcpClient.tools()
streamText({ tools, stopWhen: stepCountIs(10) })
\`\`\`

And a Python equivalent:

\`\`\`python
from engrate.mcp import client

tools = await client.tools()
\`\`\`

Pass them straight to \`streamText\`.`}},r={args:{children:`| Tool | Status | Owner |
| --- | --- | --- |
| me_user_info | available | platform |
| cost_of_energy | pending | tariff team |
| weather_forecast | proposed | — |`},parameters:{docs:{description:{story:"Markdown tables render through the Engrate Table primitive — same borders, hover, and typography as Tables elsewhere in the app."}}}},a={args:{children:`# Top-level heading

Body text under an h1 — note that h1 in chat is sized as h3, so it never competes with a page hero.

## Second-level heading

More body text.

### Third-level heading

Even more.`}},n={args:{children:`> A measured note from the model — sunflower-tinted left border to lift it without shouting.

Plain paragraph after the quote.`}},i={args:{children:`# Engrate MCP overview

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

See [the docs](https://engrate.io/docs) for the full reference. Inline \`identifiers\` look like this.`}},l={args:{children:"The model is mid-sentence and the markdown parser hasn't closed the **bo"},parameters:{docs:{description:{story:"Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Just a single paragraph of plain text from the model.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Here's some **bold** and *italic* text, plus a [link](https://engrate.io) and \`inline code\`."
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Engrate's MCP exposes:

- \\\`me_user_info\\\` — your account details
- \\\`cost_of_energy\\\` — tariff calculations *(coming soon)*

Use them by asking natural questions.

1. Ask a question
2. The model picks a tool
3. Engrate streams the answer back\`
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Here's a TypeScript snippet:

\\\`\\\`\\\`ts
const tools = await mcpClient.tools()
streamText({ tools, stopWhen: stepCountIs(10) })
\\\`\\\`\\\`

And a Python equivalent:

\\\`\\\`\\\`python
from engrate.mcp import client

tools = await client.tools()
\\\`\\\`\\\`

Pass them straight to \\\`streamText\\\`.\`
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`| Tool | Status | Owner |
| --- | --- | --- |
| me_user_info | available | platform |
| cost_of_energy | pending | tariff team |
| weather_forecast | proposed | — |\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Markdown tables render through the Engrate Table primitive — same borders, hover, and typography as Tables elsewhere in the app.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`# Top-level heading

Body text under an h1 — note that h1 in chat is sized as h3, so it never competes with a page hero.

## Second-level heading

More body text.

### Third-level heading

Even more.\`
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`> A measured note from the model — sunflower-tinted left border to lift it without shouting.

Plain paragraph after the quote.\`
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`# Engrate MCP overview

The MCP server exposes a small set of **read-only** tools that the model can chain.

## Capabilities

1. Resolve a metering point to its system operator
2. Compute the active tariff
3. Render a cost breakdown

> Tool selection is left to the model — we don't gate per-tool access today.

### Quick example

\\\`\\\`\\\`ts
const tools = await mcp.tools()
const result = streamText({
  model: 'claude-sonnet-4-6',
  messages,
  tools,
  stopWhen: stepCountIs(10),
})
\\\`\\\`\\\`

### Tools today

| Tool | Status |
| --- | --- |
| \\\`me_user_info\\\` | live |
| \\\`cost_of_energy\\\` | beta |

---

See [the docs](https://engrate.io/docs) for the full reference. Inline \\\`identifiers\\\` look like this.\`
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "The model is mid-sentence and the markdown parser hasn't closed the **bo"
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const q=["Plain","Formatting","Lists","CodeBlocks","Table","Headings","Blockquote","KitchenSink","StreamingPartial"];export{n as Blockquote,s as CodeBlocks,t as Formatting,a as Headings,i as KitchenSink,o as Lists,e as Plain,l as StreamingPartial,r as Table,q as __namedExportsOrder,E as default};
