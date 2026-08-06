import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-CuX75rBT.js";import{T as o}from"./ToolCall-Dp-5weFr.js";import{c as v}from"./createLucideIcon-CnXV0sdy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpxXhiQg.js";import"./index-SUZoI0Ub.js";import"./index-R6O-ZsWB.js";import"./index-B_W5vjr6.js";import"./index-C0ItX3d0.js";import"./index-CDfIwF4O.js";import"./index-ClwEt9Ih.js";import"./Table-CSJO7XiD.js";import"./index-HTk8j2sO.js";import"./utils-kmX6UHYG.js";import"./Text-Bm3D6q8V.js";import"./index-Dp1b6s54.js";import"./proxy-WYdCK9tR.js";import"./chevron-right-CXS1olWq.js";import"./Button-DQK7zkEp.js";import"./MarkdownText-B6lBDrlM.js";import"./CodeBlock-9fbV_ARg.js";import"./index-DthG6uO3.js";import"./check-BWKfCgRJ.js";import"./Divider-EQsA2bEy.js";import"./index.dom-DdL1y947.js";import"./Heading-DH26bIcf.js";import"./Link-88V3oeD4.js";const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],M=v("circle-user",w);const T=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]],C=v("cloud-sun",T);const j=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],D=v("database",j),ie={title:"AI Chat Elements/ToolCall",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{state:{control:"select",options:["input-streaming","input-available","approval-requested","approval-responded","output-available","output-error","output-denied"]},smartOutput:{control:"boolean"},showDetails:{control:"boolean"}}},a={include_email:!0},b={email:"rille@engrate.io",display_name:"Richard Eklund",organization:"Engrate"},k=[{tariff:"se-vattenfall-energy",component:"energy_tax",amount_sek:42.8},{tariff:"se-vattenfall-energy",component:"transfer",amount_sek:27.5},{tariff:"se-vattenfall-energy",component:"subscription",amount_sek:89}],t={me_user_info:{running:"Looking up your profile…",done:"Looked up your profile",icon:M},cost_of_energy:{running:"Calculating your tariff…",done:"Calculated your tariff",icon:D},weather_forecast:{running:"Checking the forecast…",done:"Checked the forecast",icon:C}},i={args:{toolName:"me_user_info",state:"input-available",input:a}},p={args:{toolName:"me_user_info",state:"output-available",input:a,output:b}},l={args:{toolName:"me_user_info",state:"output-error",input:a,errorText:"Authentication failed: bearer token expired."}},u={args:{toolName:"send_alert",state:"output-denied",input:{recipient:"rille@engrate.io"}}},c={args:{toolName:"me_user_info",state:"output-available",showDetails:!1}},m={args:{toolName:"me_user_info",state:"output-available",input:a,output:b,labelMap:t}},d={args:{toolName:"cost_of_energy",state:"output-available",input:{metering_point:"SE-1234567890"},output:k,labelMap:t},parameters:{docs:{description:{story:"Array of objects with consistent keys auto-renders as a real Engrate Table inside the expanded panel."}}}},g={args:{toolName:"weather_forecast",state:"output-available",input:{city:"Stockholm"},output:`## Stockholm forecast

| Day | High | Low |
| --- | --- | --- |
| Tue | 4°C | -2°C |
| Wed | 6°C | 0°C |

Light snow expected **Wednesday morning**.`,labelMap:t},parameters:{docs:{description:{story:"Markdown-shaped strings (headings, tables, fences) auto-render via MarkdownText."}}}},f={args:{toolName:"cost_of_energy",state:"output-available",input:{metering_point:"SE-1234567890"},output:k,smartOutput:!1,labelMap:t},parameters:{docs:{description:{story:"With `smartOutput={false}`, output always renders as raw JSON regardless of shape."}}}},A=()=>{const[n,r]=N.useState("approval-requested");return e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{toolName:"send_alert",state:n,input:{recipient:"rille@engrate.io",body:"Tariff change detected."},output:n==="approval-responded"?{dispatched_at:"2026-04-28T12:34:56Z"}:void 0,labelMap:{send_alert:{running:"Sending alert…",done:"Sent alert"}},onApprove:()=>r("approval-responded"),onDeny:()=>r("output-denied")}),e.jsx("button",{type:"button",onClick:()=>r("approval-requested"),className:"text-tertiary hover:text-primary text-label-sm cursor-pointer underline",children:"Reset"})]})},_={args:{toolName:"send_alert",state:"approval-requested"},render:()=>e.jsx(A,{}),parameters:{docs:{description:{story:"Approve/Deny buttons render inline. Wire `onApprove`/`onDeny` to dispatch state transitions in your chat orchestrator."}}}},x=["input-streaming","input-available","output-available"],O=()=>{const[n,r]=N.useState(0),s=x[n]??"output-available";return e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{toolName:"me_user_info",state:s,input:s!=="input-streaming"?a:void 0,output:s==="output-available"?b:void 0,labelMap:t}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r(S=>Math.min(S+1,x.length-1)),className:"bg-sunflower text-primary hover:bg-sunflower-hover text-small rounded-pill px-5 py-1 transition-colors",children:"Advance state"}),e.jsx("button",{type:"button",onClick:()=>r(0),className:"text-tertiary hover:text-primary text-label-sm cursor-pointer underline",children:"Reset"}),e.jsxs("span",{className:"text-label-sm text-tertiary font-mono",children:["state=",s]})]})]})},h={args:{toolName:"me_user_info",state:"input-streaming"},render:()=>e.jsx(O,{}),parameters:{docs:{description:{story:"Walk a single ToolCall through pending → done. Watch the pulsing sunflower dot morph into the check icon on completion, and the framed pill appear."}}}},y={args:{toolName:"me_user_info",state:"output-available"},render:()=>e.jsxs("div",{className:"flex max-w-xl flex-col gap-1",children:[e.jsx(o,{toolName:"me_user_info",state:"input-streaming",labelMap:t}),e.jsx(o,{toolName:"me_user_info",state:"input-available",input:a,labelMap:t}),e.jsx(o,{toolName:"me_user_info",state:"output-available",input:a,output:b,labelMap:t}),e.jsx(o,{toolName:"me_user_info",state:"output-error",input:a,errorText:"MCP server returned 401.",labelMap:t})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'input-available',
    input: sampleInput
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-error',
    input: sampleInput,
    errorText: 'Authentication failed: bearer token expired.'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'send_alert',
    state: 'output-denied',
    input: {
      recipient: 'rille@engrate.io'
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    showDetails: false
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput,
    labelMap
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'cost_of_energy',
    state: 'output-available',
    input: {
      metering_point: 'SE-1234567890'
    },
    output: tariffRows,
    labelMap
  },
  parameters: {
    docs: {
      description: {
        story: 'Array of objects with consistent keys auto-renders as a real Engrate Table inside the expanded panel.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'weather_forecast',
    state: 'output-available',
    input: {
      city: 'Stockholm'
    },
    output: \`## Stockholm forecast

| Day | High | Low |
| --- | --- | --- |
| Tue | 4°C | -2°C |
| Wed | 6°C | 0°C |

Light snow expected **Wednesday morning**.\`,
    labelMap
  },
  parameters: {
    docs: {
      description: {
        story: 'Markdown-shaped strings (headings, tables, fences) auto-render via MarkdownText.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'cost_of_energy',
    state: 'output-available',
    input: {
      metering_point: 'SE-1234567890'
    },
    output: tariffRows,
    smartOutput: false,
    labelMap
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`smartOutput={false}\`, output always renders as raw JSON regardless of shape.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'send_alert',
    state: 'approval-requested'
  },
  render: () => <ApprovalDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Approve/Deny buttons render inline. Wire \`onApprove\`/\`onDeny\` to dispatch state transitions in your chat orchestrator.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'input-streaming'
  },
  render: () => <LiveTransitionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Walk a single ToolCall through pending → done. Watch the pulsing sunflower dot morph into the check icon on completion, and the framed pill appear.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    toolName: 'me_user_info',
    state: 'output-available'
  },
  render: () => <div className="flex max-w-xl flex-col gap-1">
      <ToolCall toolName="me_user_info" state="input-streaming" labelMap={labelMap} />
      <ToolCall toolName="me_user_info" state="input-available" input={sampleInput} labelMap={labelMap} />
      <ToolCall toolName="me_user_info" state="output-available" input={sampleInput} output={sampleOutput} labelMap={labelMap} />
      <ToolCall toolName="me_user_info" state="output-error" input={sampleInput} errorText="MCP server returned 401." labelMap={labelMap} />
    </div>
}`,...y.parameters?.docs?.source}}};const pe=["Pending","Used","Failed","Denied","NoDetails","FriendlyLabels","SmartOutputTable","SmartOutputMarkdown","SmartOutputDisabled","ApprovalUI","LiveTransition","Lifecycle"];export{_ as ApprovalUI,u as Denied,l as Failed,m as FriendlyLabels,y as Lifecycle,h as LiveTransition,c as NoDetails,i as Pending,f as SmartOutputDisabled,g as SmartOutputMarkdown,d as SmartOutputTable,p as Used,pe as __namedExportsOrder,ie as default};
