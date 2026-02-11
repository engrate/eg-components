import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./FormMessage-C93WwbPm.js";import"./iframe-DO801lTI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-kmX6UHYG.js";const m={title:"Forms/FormMessage",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The variant of the message"},children:{control:"text",description:"The message content"}}},r={args:{children:"This is a hint message to help the user."}},s={args:{variant:"error",children:"This field is required.",role:"alert"}},a={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-2 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{children:"This is a default hint message"}),e.jsx(t,{variant:"error",children:"This is an error message"})]})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a hint message to help the user.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'This field is required.',
    role: 'alert'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-small text-secondary mb-2 font-medium">Variants</h3>
        <div className="flex flex-col gap-2">
          <FormMessage>This is a default hint message</FormMessage>
          <FormMessage variant="error">This is an error message</FormMessage>
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Default","Error","AllVariants"];export{a as AllVariants,r as Default,s as Error,d as __namedExportsOrder,m as default};
