import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-DDA3KdpW.js";import{r as S}from"./iframe-DBfTAtIz.js";import{c as y}from"./utils-ryREhF4q.js";import{B as g}from"./Button-DK2nrDeH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9LBnPqjI.js";import"./index-DXMGgCn2.js";const z=b("inline-block animate-spin rounded-full border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]",{variants:{variant:{default:"text-sunflower",muted:"text-secondary",inverted:"text-white"},size:{sm:"h-4 w-4 border-2",default:"h-6 w-6 border-2",lg:"h-8 w-8 border-3",xl:"h-12 w-12 border-4"}},defaultVariants:{variant:"default",size:"default"}}),s=S.forwardRef(({className:f,variant:v,size:N,label:u="Loading",...h},j)=>e.jsx("span",{ref:j,role:"status","aria-label":u,className:y(z({variant:v,size:N,className:f})),...h,children:e.jsx("span",{className:"sr-only",children:u})}));s.displayName="Spinner";s.__docgenInfo={description:`Loading spinner component following Engrate brand guidelines.
Uses Sunflower yellow as the default color.

@example
\`\`\`tsx
<Spinner />
<Spinner size="lg" variant="muted" />
<Spinner label="Loading data..." />
\`\`\``,methods:[],displayName:"Spinner",props:{label:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers",defaultValue:{value:"'Loading'",computed:!1}}},composes:["VariantProps"]};const C={title:"Feedback/Spinner",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","muted","inverted"],description:"The color variant of the spinner"},size:{control:"select",options:["sm","default","lg","xl"],description:"The size of the spinner"},label:{control:"text",description:"Accessible label for screen readers"}}},a={args:{}},r={args:{variant:"muted"}},n={args:{variant:"inverted"},parameters:{backgrounds:{default:"dark"}}},t={args:{size:"sm"}},l={args:{size:"lg"}},i={args:{size:"xl"}},c={args:{label:"Saving your changes..."}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-small text-secondary",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"default"}),e.jsx("span",{className:"text-small text-secondary",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-small text-secondary",children:"Large"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"xl"}),e.jsx("span",{className:"text-small text-secondary",children:"Extra Large"})]})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{variant:"default"}),e.jsx("span",{className:"text-small text-secondary",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{variant:"muted"}),e.jsx("span",{className:"text-small text-secondary",children:"Muted"})]}),e.jsxs("div",{className:"bg-primary flex flex-col items-center gap-2 rounded-lg p-4",children:[e.jsx(s,{variant:"inverted"}),e.jsx("span",{className:"text-small text-white",children:"Inverted"})]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(g,{disabled:!0,children:[e.jsx(s,{size:"sm",variant:"muted",className:"mr-2"}),"Loading..."]}),e.jsxs(g,{variant:"secondary",disabled:!0,children:[e.jsx(s,{size:"sm",variant:"muted",className:"mr-2"}),"Processing..."]})]})},p={render:()=>e.jsxs("div",{className:"text-primary text-body flex items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{children:"Loading your data..."})]})},x={render:()=>e.jsx("div",{className:"bg-card border-border flex h-48 w-64 items-center justify-center rounded-lg border",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-small text-secondary",children:"Loading..."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'muted'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverted'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Saving your changes...'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-small text-secondary">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="default" />
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-small text-secondary">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-small text-secondary">Extra Large</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="default" />
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="muted" />
        <span className="text-small text-secondary">Muted</span>
      </div>
      <div className="bg-primary flex flex-col items-center gap-2 rounded-lg p-4">
        <Spinner variant="inverted" />
        <span className="text-small text-white">Inverted</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button disabled>
        <Spinner size="sm" variant="muted" className="mr-2" />
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Spinner size="sm" variant="muted" className="mr-2" />
        Processing...
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-primary text-body flex items-center gap-2">
      <Spinner size="sm" />
      <span>Loading your data...</span>
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-card border-border flex h-48 w-64 items-center justify-center rounded-lg border">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" />
        <span className="text-small text-secondary">Loading...</span>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};const D=["Default","Muted","Inverted","Small","Large","ExtraLarge","WithCustomLabel","AllSizes","AllVariants","InButton","InlineWithText","CenteredInContainer"];export{o as AllSizes,d as AllVariants,x as CenteredInContainer,a as Default,i as ExtraLarge,m as InButton,p as InlineWithText,n as Inverted,l as Large,r as Muted,t as Small,c as WithCustomLabel,D as __namedExportsOrder,C as default};
