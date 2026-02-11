import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as o}from"./Label-Cy3MgEKF.js";import"./iframe-DfSdfeLY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmN1ExBd.js";import"./index-CAcGjwx6.js";import"./index-D50a-mRX.js";import"./index-cqR6z6QT.js";import"./index-HTk8j2sO.js";import"./utils-kmX6UHYG.js";const h={title:"Forms/Label",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["default","sm"],description:"The size of the label"},htmlFor:{control:"text",description:"The id of the form element the label is for"}}},s={args:{children:"Email address"}},r={args:{children:"Small label",size:"sm"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(o,{htmlFor:"email",children:"Email address"}),e.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",className:"border-border bg-card text-body focus:ring-sunflower h-10 w-64 rounded-md border px-3 font-sans focus:ring-2 focus:ring-offset-2 focus:outline-none"})]})},l={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(o,{size:"default",children:"Default size label"}),e.jsx(o,{size:"sm",children:"Small size label"})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Email address'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small label',
    size: 'sm'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <input id="email" type="email" placeholder="you@example.com" className="border-border bg-card text-body focus:ring-sunflower h-10 w-64 rounded-md border px-3 font-sans focus:ring-2 focus:ring-offset-2 focus:outline-none" />
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-2">
          <Label size="default">Default size label</Label>
          <Label size="sm">Small size label</Label>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const b=["Default","Small","WithInput","AllSizes"];export{l as AllSizes,s as Default,r as Small,a as WithInput,b as __namedExportsOrder,h as default};
