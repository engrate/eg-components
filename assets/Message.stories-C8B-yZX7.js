import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as s}from"./Message-8VYwdrLP.js";import"./index-HTk8j2sO.js";import"./utils-kmX6UHYG.js";const u={title:"AI Chat Elements/Message",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{from:{control:"select",options:["user","assistant","system"],description:"Who sent the message — drives alignment and bubble color"},name:{control:"text",description:"Optional display name shown above the message body"}}},o={args:{from:"user",name:"You",children:"What tools do you have access to?"}},a={args:{from:"assistant",name:"Ellie",children:"I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'"}},r={args:{from:"system",children:"Connection to MCP server lost. Continuing without tools."}},n={args:{from:"assistant",children:"A message without a name header."}},t={render:()=>e.jsxs("div",{className:"flex max-w-2xl flex-col gap-3",children:[e.jsx(s,{from:"user",name:"You",children:"What tools do you have?"}),e.jsx(s,{from:"assistant",name:"Ellie",children:"I have access to me_user_info, which can look up your account details. Want me to try it?"}),e.jsx(s,{from:"user",name:"You",children:"Yes please."}),e.jsx(s,{from:"assistant",name:"Ellie",children:"Your account is rille@engrate.io."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'user',
    name: 'You',
    children: 'What tools do you have access to?'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'assistant',
    name: 'Ellie',
    children: "I can look up your user info and (soon) query Engrate's cost-of-energy data. Try asking 'who am I?'"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'system',
    children: 'Connection to MCP server lost. Continuing without tools.'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'assistant',
    children: 'A message without a name header.'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-2xl flex-col gap-3">
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
}`,...t.parameters?.docs?.source}}};const d=["FromUser","FromAssistant","FromSystem","NoName","Conversation"];export{t as Conversation,a as FromAssistant,r as FromSystem,o as FromUser,n as NoName,d as __namedExportsOrder,u as default};
