import{M as n}from"./MarkdownText-BKsvBUou.js";import"./jsx-runtime-u17CrQMm.js";import"./utils-kmX6UHYG.js";import"./iframe-DRsmyPNk.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"AI Chat Elements/MarkdownText",component:n,parameters:{layout:"padded"},tags:["autodocs"]},e={args:{children:"Just a single paragraph of plain text from the model."}},s={args:{children:"Here's some **bold** and *italic* text, plus a [link](https://engrate.io) and `inline code`."}},a={args:{children:`Engrate's MCP exposes:

- \`me_user_info\` — your account details
- \`cost_of_energy\` — tariff calculations *(coming soon)*

Use them by asking natural questions.`}},r={args:{children:"Here's a code snippet:\n\n```ts\nconst tools = await mcpClient.tools()\nstreamText({ tools, stopWhen: stepCountIs(10) })\n```\n\nPass them straight to `streamText`."}},t={args:{children:`| Tool | Status |
| --- | --- |
| me_user_info | available |
| cost_of_energy | pending |`}},o={args:{children:"The model is mid-sentence and the markdown parser hasn't closed the **bo"},parameters:{docs:{description:{story:"Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Just a single paragraph of plain text from the model.'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Here's some **bold** and *italic* text, plus a [link](https://engrate.io) and \`inline code\`."
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Engrate's MCP exposes:

- \\\`me_user_info\\\` — your account details
- \\\`cost_of_energy\\\` — tariff calculations *(coming soon)*

Use them by asking natural questions.\`
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Here's a code snippet:

\\\`\\\`\\\`ts
const tools = await mcpClient.tools()
streamText({ tools, stopWhen: stepCountIs(10) })
\\\`\\\`\\\`

Pass them straight to \\\`streamText\\\`.\`
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`| Tool | Status |
| --- | --- |
| me_user_info | available |
| cost_of_energy | pending |\`
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The model is mid-sentence and the markdown parser hasn\\'t closed the **bo'
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates that partial / unclosed markdown still renders without crashing — the AI SDK streams tokens as they arrive."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const u=["Plain","Formatting","Lists","CodeBlock","Table","StreamingPartial"];export{r as CodeBlock,s as Formatting,a as Lists,e as Plain,o as StreamingPartial,t as Table,u as __namedExportsOrder,p as default};
