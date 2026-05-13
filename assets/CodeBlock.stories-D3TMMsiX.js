import{C as r}from"./CodeBlock-BTYaGM_Y.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-C6TdvJ6h.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-kmX6UHYG.js";import"./index-DTT_SVGY.js";import"./proxy-aRtefDPc.js";import"./check-BtWf6IbA.js";import"./createLucideIcon-RR-2aY5i.js";const y={title:"UI/CodeBlock",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{language:{control:"select",options:[void 0,"ts","tsx","js","python","json","bash","sql","css","yaml"]},showCopy:{control:"boolean"}}},e={args:{language:"ts",children:`import { streamText } from 'ai'

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
`}},t={args:{language:"python",children:`from datetime import datetime

def hours_until_dispatch(start: datetime) -> int:
    """Whole hours from now until the dispatch window opens."""
    delta = start - datetime.utcnow()
    return max(0, int(delta.total_seconds() // 3600))
`}},a={args:{language:"json",children:`{
  "tariff": "se-vattenfall-energy",
  "components": [
    { "type": "energy_tax", "amount": 42.8 },
    { "type": "transfer", "amount": 27.5 }
  ]
}
`}},n={args:{language:"bash",children:`# regenerate the openapi spec
make verify &> /tmp/verify.log
echo "exit=$?"
`}},o={args:{children:`Plain text without a registered language. Falls back to neutral
monospace styling — still inside the Engrate frame.`}},s={args:{language:"ts",showCopy:!1,children:"const greeting = 'Hello, Engrate'"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'ts',
    children: \`import { streamText } from 'ai'

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
\`
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'python',
    children: \`from datetime import datetime

def hours_until_dispatch(start: datetime) -> int:
    """Whole hours from now until the dispatch window opens."""
    delta = start - datetime.utcnow()
    return max(0, int(delta.total_seconds() // 3600))
\`
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    children: \`{
  "tariff": "se-vattenfall-energy",
  "components": [
    { "type": "energy_tax", "amount": 42.8 },
    { "type": "transfer", "amount": 27.5 }
  ]
}
\`
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'bash',
    children: \`# regenerate the openapi spec
make verify &> /tmp/verify.log
echo "exit=$?"
\`
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`Plain text without a registered language. Falls back to neutral
monospace styling — still inside the Engrate frame.\`
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'ts',
    showCopy: false,
    children: \`const greeting = 'Hello, Engrate'\`
  }
}`,...s.parameters?.docs?.source}}};const f=["TypeScript","Python","Json","Bash","NoLanguage","NoCopyButton"];export{n as Bash,a as Json,s as NoCopyButton,o as NoLanguage,t as Python,e as TypeScript,f as __namedExportsOrder,y as default};
