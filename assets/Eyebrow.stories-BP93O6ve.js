import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-Dv90unGT.js";import{S as x}from"./index-mNC3-AD3.js";import{c as S}from"./index-DDA3KdpW.js";import{c as w}from"./utils-ryREhF4q.js";import{H as b}from"./Heading-R-XktcNC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-McPXHFKR.js";const E=S("font-mono text-xs leading-5 font-normal tracking-[1.2px] uppercase",{variants:{variant:{default:"text-sunflower",primary:"text-primary",secondary:"text-secondary"},size:{default:"text-xs",sm:"text-[10px]",lg:"text-sm"}},defaultVariants:{variant:"default",size:"default"}}),r=f.forwardRef(({className:m,variant:p,size:u,asChild:y=!1,...v},g)=>{const h=y?x:"span";return e.jsx(h,{className:w(E({variant:p,size:u,className:m})),ref:g,...v})});r.displayName="Eyebrow";r.__docgenInfo={description:"",methods:[],displayName:"Eyebrow",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const P={title:"Typography/Eyebrow",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary"]},size:{control:"select",options:["sm","default","lg"]}}},a={args:{children:"Business Intelligence"}},s={args:{variant:"primary",children:"Product Update"}},n={args:{variant:"secondary",children:"Case Study"}},i={args:{size:"sm",children:"Feature Announcement"}},o={args:{size:"lg",children:"New Release"}},t={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{children:"Business Intelligence"}),e.jsx(b,{level:"h2",children:"Transform Your Data Into Insights"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(r,{variant:"default",children:"Default Variant"})}),e.jsx("div",{children:e.jsx(r,{variant:"primary",children:"Primary Variant"})}),e.jsx("div",{children:e.jsx(r,{variant:"secondary",children:"Secondary Variant"})})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx(r,{size:"sm",children:"Small Size"})}),e.jsx("div",{children:e.jsx(r,{size:"default",children:"Default Size"})}),e.jsx("div",{children:e.jsx(r,{size:"lg",children:"Large Size"})})]})},l={render:()=>e.jsx(r,{asChild:!0,children:e.jsx("a",{href:"#",className:"hover:underline",children:"Clickable Eyebrow"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Business Intelligence'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Product Update'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Case Study'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Feature Announcement'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'New Release'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Eyebrow>Business Intelligence</Eyebrow>
      <Heading level="h2">Transform Your Data Into Insights</Heading>
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Eyebrow variant="default">Default Variant</Eyebrow>
      </div>
      <div>
        <Eyebrow variant="primary">Primary Variant</Eyebrow>
      </div>
      <div>
        <Eyebrow variant="secondary">Secondary Variant</Eyebrow>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Eyebrow size="sm">Small Size</Eyebrow>
      </div>
      <div>
        <Eyebrow size="default">Default Size</Eyebrow>
      </div>
      <div>
        <Eyebrow size="lg">Large Size</Eyebrow>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Eyebrow asChild>
      <a href="#" className="hover:underline">
        Clickable Eyebrow
      </a>
    </Eyebrow>
}`,...l.parameters?.docs?.source}}};const H=["Default","Primary","Secondary","Small","Large","WithHeading","AllVariants","AllSizes","AsChild"];export{d as AllSizes,c as AllVariants,l as AsChild,a as Default,o as Large,s as Primary,n as Secondary,i as Small,t as WithHeading,H as __namedExportsOrder,P as default};
