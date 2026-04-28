import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./ToolCall-DuRFDEn3.js";import"./index-CU-sE8GG.js";import"./iframe-DRsmyPNk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNhCUDd2.js";import"./index-BfUwE0PP.js";import"./index-pwU8Ef4j.js";import"./index-C89VOX4K.js";import"./index-gDt6KWSV.js";import"./index-CMs7vEjz.js";import"./utils-kmX6UHYG.js";import"./chevron-right-DtXCtfAC.js";import"./createLucideIcon-cVw6N0Nl.js";const I={title:"AI Chat Elements/ToolCall",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{state:{control:"select",options:["input-streaming","input-available","approval-requested","approval-responded","output-available","output-error"]}}},e={include_email:!0},u={email:"rille@engrate.io",display_name:"Richard Eklund",organization:"Engrate"},o={args:{toolName:"me_user_info",state:"input-available",input:e}},r={args:{toolName:"me_user_info",state:"output-available",input:e,output:u}},s={args:{toolName:"me_user_info",state:"output-error",input:e,errorText:"Authentication failed: bearer token expired."}},n={args:{toolName:"me_user_info",state:"output-available",showDetails:!1}},l={args:{toolName:"me_user_info",state:"output-available"},render:()=>t.jsxs("div",{className:"flex max-w-xl flex-col gap-1",children:[t.jsx(a,{toolName:"me_user_info",state:"input-streaming"}),t.jsx(a,{toolName:"me_user_info",state:"input-available",input:e}),t.jsx(a,{toolName:"me_user_info",state:"output-available",input:e,output:u}),t.jsx(a,{toolName:"me_user_info",state:"output-error",input:e,errorText:"MCP server returned 401."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'input-available',
    input: sampleInput
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-error',
    input: sampleInput,
    errorText: 'Authentication failed: bearer token expired.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    showDetails: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available'
  },
  render: () => <div className="flex max-w-xl flex-col gap-1">
      <ToolCall toolName="me_user_info" state="input-streaming" />
      <ToolCall toolName="me_user_info" state="input-available" input={sampleInput} />
      <ToolCall toolName="me_user_info" state="output-available" input={sampleInput} output={sampleOutput} />
      <ToolCall toolName="me_user_info" state="output-error" input={sampleInput} errorText="MCP server returned 401." />
    </div>
}`,...l.parameters?.docs?.source}}};const h=["Running","Used","Failed","NoDetails","Lifecycle"];export{s as Failed,l as Lifecycle,n as NoDetails,o as Running,r as Used,h as __namedExportsOrder,I as default};
