import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as w}from"./index-DDA3KdpW.js";import{r as N}from"./iframe-DZUoxlIx.js";import{c as S}from"./utils-ryREhF4q.js";import{C as k}from"./Card-Cq28aChd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBjSUKsi.js";import"./index-BSozM382.js";const j=w("bg-contrast animate-pulse",{variants:{variant:{default:"rounded-md",circular:"rounded-full",text:"rounded"}},defaultVariants:{variant:"default"}}),a=N.forwardRef(({className:h,variant:p,width:t,height:s,style:u,...f},v)=>{const g={...u,...t!==void 0&&{width:typeof t=="number"?`${t}px`:t},...s!==void 0&&{height:typeof s=="number"?`${s}px`:s}};return e.jsx("div",{ref:v,"aria-hidden":"true",className:S(j({variant:p,className:h})),style:g,...f})});a.displayName="Skeleton";a.__docgenInfo={description:`Skeleton component for indicating loading states.
Displays a pulsing placeholder while content is loading.

@example
\`\`\`tsx
<Skeleton width={200} height={20} />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="text" className="w-full h-4" />
\`\`\``,methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of the skeleton (CSS value or Tailwind class)"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the skeleton (CSS value or Tailwind class)"}},composes:["VariantProps"]};const _={title:"Feedback/Skeleton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","circular","text"],description:"The shape variant of the skeleton"},width:{control:"text",description:"Width of the skeleton (number for px, string for any CSS value)"},height:{control:"text",description:"Height of the skeleton (number for px, string for any CSS value)"}}},r={args:{width:200,height:20}},n={args:{variant:"circular",width:48,height:48}},l={args:{variant:"text",width:300,height:16}},i={render:()=>e.jsxs("div",{className:"flex w-80 flex-col gap-2",children:[e.jsx(a,{variant:"text",className:"h-4 w-full"}),e.jsx(a,{variant:"text",className:"h-4 w-full"}),e.jsx(a,{variant:"text",className:"h-4 w-3/4"})]})},c={render:()=>e.jsx(k,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-4 p-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:48,height:48}),e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(a,{variant:"text",className:"h-4 w-3/4"}),e.jsx(a,{variant:"text",className:"h-3 w-1/2"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{variant:"text",className:"h-4 w-full"}),e.jsx(a,{variant:"text",className:"h-4 w-full"}),e.jsx(a,{variant:"text",className:"h-4 w-2/3"})]}),e.jsx(a,{className:"h-40 w-full"})]})})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:64,height:64}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{variant:"text",width:150,height:20}),e.jsx(a,{variant:"text",width:100,height:14})]})]})},d={render:()=>e.jsx("div",{className:"flex w-full max-w-lg flex-col gap-3",children:[1,2,3].map(h=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:32,height:32}),e.jsx(a,{variant:"text",className:"h-4 flex-1"}),e.jsx(a,{variant:"text",width:80,height:16}),e.jsx(a,{variant:"text",width:60,height:16})]},h))})},x={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-2",children:[e.jsx(a,{variant:"text",width:80,height:14}),e.jsx(a,{className:"h-10 w-full"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Default (rounded-md)"}),e.jsx(a,{width:200,height:40})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Circular (rounded-full)"}),e.jsx(a,{variant:"circular",width:48,height:48})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Text (subtle rounded)"}),e.jsx(a,{variant:"text",width:200,height:16})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 300,
    height: 16
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-2">
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-3/4" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton variant="text" className="h-4 w-3/4" />
            <Skeleton variant="text" className="h-3 w-1/2" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-2/3" />
        </div>
        <Skeleton className="h-40 w-full" />
      </div>
    </Card>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton variant="circular" width={64} height={64} />
      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width={150} height={20} />
        <Skeleton variant="text" width={100} height={14} />
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-lg flex-col gap-3">
      {[1, 2, 3].map(row => <div key={row} className="flex items-center gap-4">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" className="h-4 flex-1" />
          <Skeleton variant="text" width={80} height={16} />
          <Skeleton variant="text" width={60} height={16} />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-2">
      <Skeleton variant="text" width={80} height={14} />
      <Skeleton className="h-10 w-full" />
    </div>
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Default (rounded-md)</span>
        <Skeleton width={200} height={40} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">
          Circular (rounded-full)
        </span>
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-small text-secondary">Text (subtle rounded)</span>
        <Skeleton variant="text" width={200} height={16} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const E=["Default","Circular","Text","TextLines","CardSkeleton","UserProfileSkeleton","TableRowSkeleton","FormFieldSkeleton","AllVariants"];export{m as AllVariants,c as CardSkeleton,n as Circular,r as Default,x as FormFieldSkeleton,d as TableRowSkeleton,l as Text,i as TextLines,o as UserProfileSkeleton,E as __namedExportsOrder,_ as default};
