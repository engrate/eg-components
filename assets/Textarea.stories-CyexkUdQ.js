import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Textarea-SL2nDMNN.js";import{L as a}from"./Label-B3AyqCj8.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";import"./iframe-BRVFi_h0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaL2CzxC.js";import"./index-Cww1PkiG.js";import"./index-BPw2NLyi.js";import"./index-MOGiaa37.js";const j={title:"Forms/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The visual style of the textarea"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"Resize behavior of the textarea"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},placeholder:{control:"text",description:"Placeholder text"}}},s={args:{placeholder:"Enter your message"}},l={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"message",children:"Message"}),e.jsx(r,{id:"message",placeholder:"Type your message here..."})]})},t={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"message-error",children:"Message"}),e.jsx(r,{id:"message-error",variant:"error",placeholder:"Type your message here...","aria-invalid":"true","aria-describedby":"message-error-msg"}),e.jsx("span",{id:"message-error-msg",className:"text-small text-error",children:"Please enter a message"})]})},o={args:{placeholder:"Disabled textarea",disabled:!0}},d={args:{placeholder:"Cannot resize this textarea",resize:"none"}},i={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"default",children:"Default"}),e.jsx(r,{id:"default",placeholder:"Default textarea"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"error",children:"Error"}),e.jsx(r,{id:"error",variant:"error",placeholder:"Error textarea"}),e.jsx("span",{className:"text-small text-error",children:"This field is required"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(a,{htmlFor:"disabled",children:"Disabled"}),e.jsx(r,{id:"disabled",placeholder:"Disabled textarea",disabled:!0})]})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-1.5">
      <Label htmlFor="message-error">Message</Label>
      <Textarea id="message-error" variant="error" placeholder="Type your message here..." aria-invalid="true" aria-describedby="message-error-msg" />
      <span id="message-error-msg" className="text-small text-error">
        Please enter a message
      </span>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled textarea',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Cannot resize this textarea',
    resize: 'none'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="default">Default</Label>
            <Textarea id="default" placeholder="Default textarea" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="error">Error</Label>
            <Textarea id="error" variant="error" placeholder="Error textarea" />
            <span className="text-small text-error">
              This field is required
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Textarea id="disabled" placeholder="Disabled textarea" disabled />
          </div>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const N=["Default","WithLabel","Error","Disabled","NoResize","AllVariants"];export{i as AllVariants,s as Default,o as Disabled,t as Error,d as NoResize,l as WithLabel,N as __namedExportsOrder,j as default};
