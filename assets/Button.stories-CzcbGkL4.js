import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./Button-DY-x8xQv.js";import"./index-Bfo6Zp52.js";import"./iframe-2V79pbFo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj_3WkyM.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";const B={title:"Forms/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"],description:"The visual style of the button"},size:{control:"select",options:["default","sm","lg","icon"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},asChild:{control:"boolean",description:"Render as a child component (e.g., for links)"}}},s={args:{children:"Primary Button",variant:"primary"}},a={args:{children:"Secondary Button",variant:"secondary"}},t={args:{children:"Ghost Button",variant:"ghost"}},n={args:{children:"Small Button",size:"sm"}},o={args:{children:"Default Button",size:"default"}},i={args:{children:"Large Button",size:"lg"}},c={args:{children:"Disabled Button",disabled:!0}},l={args:{asChild:!0,children:e.jsx("a",{href:"#",children:"Link Button"})}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"default",children:"Default"}),e.jsx(r,{size:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{children:"Normal"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    size: 'default'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="#">Link Button</a>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex items-center gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const y=["Primary","Secondary","Ghost","Small","DefaultSize","Large","Disabled","AsLink","AllVariants"];export{d as AllVariants,l as AsLink,o as DefaultSize,c as Disabled,t as Ghost,i as Large,s as Primary,a as Secondary,n as Small,y as __namedExportsOrder,B as default};
