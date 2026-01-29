import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as P}from"./index-D413khBD.js";import{c as M}from"./index-DDA3KdpW.js";import{r as V}from"./iframe-C8eljAvV.js";import{c as C}from"./utils-ryREhF4q.js";import"./index-pMVG9LbY.js";import"./preload-helper-PPVm8Dsz.js";const D=M("focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{variant:{sunflower:"bg-sunflower text-primary","lemon-meringue":"bg-lemon-meringue text-primary",vanilla:"bg-vanilla text-primary",eggshell:"bg-eggshell text-primary","warm-purple":"bg-warm-purple text-white","cool-purple":"bg-cool-purple text-white","electric-blue":"bg-electric-blue text-white","deep-blue":"bg-deep-blue text-white",error:"bg-error text-white",secondary:"border-border bg-alt text-secondary border"},size:{xs:"rounded-pill px-1.5 py-0.5 text-xs",sm:"rounded-pill px-2 py-0.5 text-xs",md:"rounded-pill px-2.5 py-1 text-sm",lg:"rounded-pill text-body px-3.5 py-1",xl:"rounded-pill text-body px-4 py-1.5"}},defaultVariants:{variant:"sunflower",size:"md"}}),r=V.forwardRef(({className:b,variant:w,size:y,asChild:E=!1,...z},j)=>{const L=E?P:"span";return e.jsx(L,{className:C(D({variant:w,size:y,className:b})),ref:j,...z})});r.displayName="Badge";r.__docgenInfo={description:`Badge component for displaying status, labels, or counts.
Features pill-shaped design with various Engrate brand colors.

@example
\`\`\`tsx
<Badge variant="sunflower">New</Badge>
<Badge variant="error" size="sm">Alert</Badge>
<Badge variant="deep-blue" size="lg">Premium</Badge>
\`\`\``,methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with links, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const _={title:"Misc/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["sunflower","lemon-meringue","vanilla","eggshell","warm-purple","cool-purple","electric-blue","deep-blue","error","secondary"],description:"The color variant of the badge"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"The size of the badge (t-shirt sizes)"},asChild:{control:"boolean",description:"Render as a child component (e.g., for links)"}}},a={args:{children:"Badge"}},s={args:{children:"Sunflower",variant:"sunflower"}},n={args:{children:"Lemon Meringue",variant:"lemon-meringue"}},l={args:{children:"Vanilla",variant:"vanilla"}},o={args:{children:"Eggshell",variant:"eggshell"}},i={args:{children:"Warm Purple",variant:"warm-purple"}},t={args:{children:"Cool Purple",variant:"cool-purple"}},c={args:{children:"Electric Blue",variant:"electric-blue"}},d={args:{children:"Deep Blue",variant:"deep-blue"}},p={args:{children:"Error",variant:"error"}},g={args:{children:"Secondary",variant:"secondary"}},m={args:{children:"XS",size:"xs"}},u={args:{children:"Small",size:"sm"}},h={args:{children:"Medium",size:"md"}},x={args:{children:"Large",size:"lg"}},v={args:{children:"Extra Large",size:"xl"}},B={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"sunflower",children:"Sunflower"}),e.jsx(r,{variant:"lemon-meringue",children:"Lemon Meringue"}),e.jsx(r,{variant:"vanilla",children:"Vanilla"}),e.jsx(r,{variant:"eggshell",children:"Eggshell"}),e.jsx(r,{variant:"warm-purple",children:"Warm Purple"}),e.jsx(r,{variant:"cool-purple",children:"Cool Purple"}),e.jsx(r,{variant:"electric-blue",children:"Electric Blue"}),e.jsx(r,{variant:"deep-blue",children:"Deep Blue"}),e.jsx(r,{variant:"error",children:"Error"}),e.jsx(r,{variant:"secondary",children:"Secondary"})]})},f={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{size:"xs",children:"XS"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"xl",children:"Extra Large"})]})},S={render:()=>e.jsx(r,{asChild:!0,variant:"electric-blue",children:e.jsx("a",{href:"#",children:"Link Badge"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sunflower',
    variant: 'sunflower'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lemon Meringue',
    variant: 'lemon-meringue'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vanilla',
    variant: 'vanilla'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Eggshell',
    variant: 'eggshell'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Warm Purple',
    variant: 'warm-purple'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Cool Purple',
    variant: 'cool-purple'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Electric Blue',
    variant: 'electric-blue'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Deep Blue',
    variant: 'deep-blue'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    variant: 'error'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'XS',
    size: 'xs'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'sm'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium',
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    size: 'lg'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Extra Large',
    size: 'xl'
  }
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="sunflower">Sunflower</Badge>
      <Badge variant="lemon-meringue">Lemon Meringue</Badge>
      <Badge variant="vanilla">Vanilla</Badge>
      <Badge variant="eggshell">Eggshell</Badge>
      <Badge variant="warm-purple">Warm Purple</Badge>
      <Badge variant="cool-purple">Cool Purple</Badge>
      <Badge variant="electric-blue">Electric Blue</Badge>
      <Badge variant="deep-blue">Deep Blue</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Badge asChild variant="electric-blue">
      <a href="#">Link Badge</a>
    </Badge>
}`,...S.parameters?.docs?.source}}};const O=["Default","Sunflower","LemonMeringue","Vanilla","Eggshell","WarmPurple","CoolPurple","ElectricBlue","DeepBlue","Error","Secondary","ExtraSmall","Small","Medium","Large","ExtraLarge","AllVariants","AllSizes","AsLink"];export{f as AllSizes,B as AllVariants,S as AsLink,t as CoolPurple,d as DeepBlue,a as Default,o as Eggshell,c as ElectricBlue,p as Error,v as ExtraLarge,m as ExtraSmall,x as Large,n as LemonMeringue,h as Medium,g as Secondary,u as Small,s as Sunflower,l as Vanilla,i as WarmPurple,O as __namedExportsOrder,_ as default};
