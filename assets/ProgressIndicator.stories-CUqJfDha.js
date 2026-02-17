import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-HTk8j2sO.js";import{r as V}from"./iframe-CQELQ9DN.js";import{c as j}from"./utils-kmX6UHYG.js";import"./preload-helper-PPVm8Dsz.js";const E=y("bg-border relative w-full overflow-hidden rounded-full",{variants:{size:{sm:"h-1",default:"h-2",lg:"h-3",xl:"h-4"}},defaultVariants:{size:"default"}}),L=y("h-full transition-all duration-300 ease-out",{variants:{variant:{default:"bg-sunflower",muted:"bg-secondary",success:"bg-electric-blue"},animated:{true:"animate-pulse",false:""}},defaultVariants:{variant:"default",animated:!1}}),a=V.forwardRef(({className:g,value:b=0,max:h=100,size:N,variant:S,animated:z,label:P="Progress",indeterminate:f=!1,...w},I)=>{const k=Math.min(Math.max(b/h*100,0),100);return e.jsx("div",{ref:I,role:"progressbar","aria-valuenow":f?void 0:b,"aria-valuemin":0,"aria-valuemax":h,"aria-label":P,className:j(E({size:N,className:g})),...w,children:e.jsx("div",{className:j(L({variant:S,animated:z}),f&&"animate-progress-indeterminate"),style:{width:f?"50%":`${k}%`}})})});a.displayName="ProgressIndicator";a.__docgenInfo={description:`Progress indicator component following Engrate brand guidelines.
Uses Sunflower yellow as the default color for the progress bar.

@example
\`\`\`tsx
<ProgressIndicator value={50} />
<ProgressIndicator value={75} size="lg" variant="success" />
<ProgressIndicator indeterminate label="Loading..." />
\`\`\``,methods:[],displayName:"ProgressIndicator",props:{value:{required:!1,tsType:{name:"number"},description:"Current progress value (0-100)",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum progress value",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers",defaultValue:{value:"'Progress'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether to show indeterminate loading state",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const W={title:"Feedback/ProgressIndicator",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value (0-100)"},max:{control:{type:"number",min:1},description:"Maximum progress value"},size:{control:"select",options:["sm","default","lg","xl"],description:"The size of the progress indicator"},variant:{control:"select",options:["default","muted","success"],description:"The visual style of the progress bar"},animated:{control:"boolean",description:"Whether the progress bar should animate"},indeterminate:{control:"boolean",description:"Whether to show indeterminate loading state"},label:{control:"text",description:"Accessible label for screen readers"}},decorators:[g=>e.jsx("div",{style:{width:"300px"},children:e.jsx(g,{})})]},s={args:{value:50}},r={args:{value:0}},t={args:{value:100}},l={args:{value:60,variant:"muted"}},n={args:{value:75,variant:"success"}},o={args:{value:50,size:"sm"}},i={args:{value:50,size:"lg"}},c={args:{value:50,size:"xl"}},d={args:{value:70,animated:!0}},m={args:{indeterminate:!0}},u={args:{value:45,label:"File upload progress"}},p={render:()=>e.jsx("div",{className:"flex w-full flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Small"}),e.jsx(a,{value:50,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Default"}),e.jsx(a,{value:50,size:"default"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Large"}),e.jsx(a,{value:50,size:"lg"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Extra Large"}),e.jsx(a,{value:50,size:"xl"})]})]})]})})},x={render:()=>e.jsx("div",{className:"flex w-full flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Default (Sunflower)"}),e.jsx(a,{value:65,variant:"default"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Muted"}),e.jsx(a,{value:65,variant:"muted"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-label text-tertiary mb-1 block",children:"Success"}),e.jsx(a,{value:65,variant:"success"})]})]})]})})},v={render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("h3",{className:"text-small text-secondary font-medium",children:"Progress Steps Example"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-small text-primary",children:"Uploading files..."}),e.jsx("span",{className:"text-small text-secondary",children:"3 of 5"})]}),e.jsx(a,{value:60,size:"default"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'muted'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'xl'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    animated: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: 'File upload progress'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-label text-tertiary mb-1 block">Small</span>
            <ProgressIndicator value={50} size="sm" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Default</span>
            <ProgressIndicator value={50} size="default" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Large</span>
            <ProgressIndicator value={50} size="lg" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">
              Extra Large
            </span>
            <ProgressIndicator value={50} size="xl" />
          </div>
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-label text-tertiary mb-1 block">
              Default (Sunflower)
            </span>
            <ProgressIndicator value={65} variant="default" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Muted</span>
            <ProgressIndicator value={65} variant="muted" />
          </div>
          <div>
            <span className="text-label text-tertiary mb-1 block">Success</span>
            <ProgressIndicator value={65} variant="success" />
          </div>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full flex-col gap-4">
      <h3 className="text-small text-secondary font-medium">
        Progress Steps Example
      </h3>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-small text-primary">Uploading files...</span>
          <span className="text-small text-secondary">3 of 5</span>
        </div>
        <ProgressIndicator value={60} size="default" />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};const q=["Default","Empty","Complete","Muted","Success","Small","Large","ExtraLarge","Animated","Indeterminate","WithCustomLabel","AllSizes","AllVariants","ProgressSteps"];export{p as AllSizes,x as AllVariants,d as Animated,t as Complete,s as Default,r as Empty,c as ExtraLarge,m as Indeterminate,i as Large,l as Muted,v as ProgressSteps,o as Small,n as Success,u as WithCustomLabel,q as __namedExportsOrder,W as default};
