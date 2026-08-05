import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as s}from"./Message--OnWZoUc.js";import"./index-HTk8j2sO.js";import"./utils-kmX6UHYG.js";import"./Eyebrow-CfBbWXfA.js";import"./index-QYRZFJqT.js";import"./iframe-Cu6Ga-dJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHkpIMsv.js";const y={title:"AI Chat Elements/Message",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{from:{control:"select",options:["user","assistant","system"],description:"Who sent the message — drives container treatment (assistant: prose, user: card, system: italic note)."},eyebrow:{control:"text",description:"Speaker label rendered above the content as a small eyebrow. Pass once per turn-streak; consecutive messages from the same speaker should omit it."}}},o={args:{from:"assistant",eyebrow:"Ellie",children:"I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'"}},r={args:{from:"assistant",children:"A consecutive assistant turn — the eyebrow is omitted because the previous message already established who is speaking."}},t={args:{from:"user",children:"What tools do you have access to?"}},a={args:{from:"system",children:"Connection to MCP server lost. Continuing without tools."}},n={args:{from:"assistant",children:""},render:()=>e.jsxs("div",{className:"mx-auto flex w-full max-w-prose flex-col gap-6",children:[e.jsx(s,{from:"user",children:"What tools do you have?"}),e.jsx(s,{from:"assistant",eyebrow:"Ellie",children:"I have access to me_user_info, which can look up your account details. Want me to try it?"}),e.jsx(s,{from:"user",children:"Yes please."}),e.jsx(s,{from:"assistant",eyebrow:"Ellie",children:"Your account is rille@engrate.io."}),e.jsx(s,{from:"assistant",children:"Anything else you'd like to look up? I can also resolve metering points, soon."})]}),parameters:{docs:{description:{story:"A multi-turn conversation. Note the eyebrow appears only on the first assistant turn after a user turn — consecutive assistant chunks continue the column without re-labelling."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'assistant',
    eyebrow: 'Ellie',
    children: "I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'assistant',
    children: 'A consecutive assistant turn — the eyebrow is omitted because the previous message already established who is speaking.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'user',
    children: 'What tools do you have access to?'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'system',
    children: 'Connection to MCP server lost. Continuing without tools.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'assistant',
    children: ''
  },
  render: () => <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A multi-turn conversation. Note the eyebrow appears only on the first assistant turn after a user turn — consecutive assistant chunks continue the column without re-labelling.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const f=["FromAssistant","FromAssistantNoEyebrow","FromUser","FromSystem","Conversation"];export{n as Conversation,o as FromAssistant,r as FromAssistantNoEyebrow,a as FromSystem,t as FromUser,f as __namedExportsOrder,y as default};
