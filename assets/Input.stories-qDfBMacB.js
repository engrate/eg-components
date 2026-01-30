import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as r}from"./Input-BTwD9GeL.js";import{L as a}from"./Label-BL3do2wn.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";import"./iframe-DNYoVwFJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BuLrKFso.js";import"./index-GbXj19yr.js";import"./index-BMot4saa.js";import"./index-yOg4Rtpx.js";const N={title:"Forms/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The visual style of the input"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"Placeholder text"},type:{control:"select",options:["text","email","password","number","tel","url"],description:"The type of input"}}},s={args:{placeholder:"Enter your email"}},l={render:()=>e.jsxs("div",{className:"flex w-64 flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email address"}),e.jsx(r,{id:"email",type:"email",placeholder:"you@example.com"})]})},o={render:()=>e.jsxs("div",{className:"flex w-64 flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"email-error",children:"Email address"}),e.jsx(r,{id:"email-error",type:"email",variant:"error",placeholder:"you@example.com","aria-invalid":"true","aria-describedby":"email-error-msg"}),e.jsx("span",{id:"email-error-msg",className:"text-small text-error",children:"Please enter a valid email address"})]})},d={args:{placeholder:"Disabled input",disabled:!0}},t={args:{defaultValue:"john@example.com"}},i={render:()=>e.jsxs("div",{className:"flex w-64 flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx(r,{id:"password",type:"password",placeholder:"Enter password"})]})},n={render:()=>e.jsx("div",{className:"flex w-72 flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"default",children:"Default"}),e.jsx(r,{id:"default",placeholder:"Default input"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"error",children:"Error"}),e.jsx(r,{id:"error",variant:"error",placeholder:"Error input"}),e.jsx("span",{className:"text-small text-error",children:"This field is required"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"disabled",children:"Disabled"}),e.jsx(r,{id:"disabled",placeholder:"Disabled input",disabled:!0})]})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your email'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="email-error">Email address</Label>
      <Input id="email-error" type="email" variant="error" placeholder="you@example.com" aria-invalid="true" aria-describedby="email-error-msg" />
      <span id="email-error-msg" className="text-small text-error">
        Please enter a valid email address
      </span>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'john@example.com'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="default">Default</Label>
            <Input id="default" placeholder="Default input" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="error">Error</Label>
            <Input id="error" variant="error" placeholder="Error input" />
            <span className="text-small text-error">
              This field is required
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Disabled input" disabled />
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const w=["Default","WithLabel","Error","Disabled","WithValue","Password","AllVariants"];export{n as AllVariants,s as Default,d as Disabled,o as Error,i as Password,l as WithLabel,t as WithValue,w as __namedExportsOrder,N as default};
