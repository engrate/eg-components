import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Checkbox-D2WjTMPU.js";import{L as s}from"./Label-BYkeK-bd.js";import"./iframe-CwYTgCCY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjNH07ic.js";import"./index-D4bUoCzf.js";import"./index-BLVg5VFr.js";import"./index-DDGLVj3O.js";import"./index-CZ3mFH-x.js";import"./index-D2tJ68hg.js";import"./index-BNduGn7P.js";import"./utils-ryREhF4q.js";import"./index-BDOiGxbi.js";import"./index-DDA3KdpW.js";const L={title:"Forms/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the checkbox is disabled"},defaultChecked:{control:"boolean",description:"Whether the checkbox is checked by default"}}},r={args:{"aria-label":"Default checkbox"}},c={args:{defaultChecked:!0,"aria-label":"Checked checkbox"}},d={args:{disabled:!0,"aria-label":"Disabled checkbox"}},t={args:{disabled:!0,defaultChecked:!0,"aria-label":"Disabled checked checkbox"}},l={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"terms"}),e.jsx(s,{htmlFor:"terms",children:"Accept terms and conditions"})]})},i={render:()=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"marketing",className:"mt-0.5"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(s,{htmlFor:"marketing",children:"Marketing emails"}),e.jsx("span",{className:"text-small text-tertiary",children:"Receive emails about new products and features"})]})]})},n={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"unchecked"}),e.jsx(s,{htmlFor:"unchecked",children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"checked",defaultChecked:!0}),e.jsx(s,{htmlFor:"checked",children:"Checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"disabled",disabled:!0}),e.jsx(s,{htmlFor:"disabled",children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"disabled-checked",disabled:!0,defaultChecked:!0}),e.jsx(s,{htmlFor:"disabled-checked",children:"Disabled & Checked"})]})]})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default checkbox'
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    'aria-label': 'Checked checkbox'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    'aria-label': 'Disabled checkbox'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    'aria-label': 'Disabled checked checkbox'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-start gap-2">
      <Checkbox id="marketing" className="mt-0.5" />
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="marketing">Marketing emails</Label>
        <span className="text-small text-tertiary">
          Receive emails about new products and features
        </span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked">Disabled & Checked</Label>
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const F=["Default","Checked","Disabled","DisabledChecked","WithLabel","WithDescription","AllStates"];export{n as AllStates,c as Checked,r as Default,d as Disabled,t as DisabledChecked,i as WithDescription,l as WithLabel,F as __namedExportsOrder,L as default};
