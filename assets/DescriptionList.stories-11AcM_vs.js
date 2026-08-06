import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as w}from"./index-HTk8j2sO.js";import{r as o}from"./iframe-CuX75rBT.js";import{c as f}from"./utils-kmX6UHYG.js";import"./preload-helper-PPVm8Dsz.js";const k=w("flex flex-col font-sans",{variants:{orientation:{stacked:"",inline:""},divided:{true:"divide-border gap-0 divide-y",false:""},size:{default:"",compact:""}},compoundVariants:[{orientation:"stacked",divided:!1,size:"default",className:"gap-4"},{orientation:"stacked",divided:!1,size:"compact",className:"gap-2"},{orientation:"inline",divided:!1,size:"default",className:"gap-3"},{orientation:"inline",divided:!1,size:"compact",className:"gap-1.5"}],defaultVariants:{orientation:"stacked",divided:!1,size:"default"}}),C=w("",{variants:{orientation:{stacked:"flex flex-col",inline:"flex flex-col sm:grid sm:grid-cols-[minmax(140px,1fr)_2fr] sm:items-baseline sm:gap-x-4 sm:gap-y-0"},divided:{true:"first:pt-0 last:pb-0",false:""},size:{default:"gap-1",compact:"gap-0.5"}},compoundVariants:[{orientation:"inline",size:"compact",className:"sm:gap-x-3"},{divided:!0,size:"default",className:"py-4"},{divided:!0,size:"compact",className:"py-2"}],defaultVariants:{orientation:"stacked",divided:!1,size:"default"}}),S=o.createContext({orientation:"stacked",divided:!1,size:"default"}),L=o.forwardRef(({className:i,orientation:s="stacked",divided:t=!1,size:x="default",items:g,children:h,...z},b)=>{const N=s??"stacked",j=t??!1,I=x??"default";return e.jsx(S.Provider,{value:{orientation:N,divided:j,size:I},children:e.jsxs("dl",{ref:b,className:f(k({orientation:N,divided:j,size:I}),i),...z,children:[g?.map((y,T)=>e.jsxs(a,{children:[e.jsx(r,{children:y.label}),e.jsx(n,{children:y.value})]},y.key??T)),h]})})});L.displayName="DescriptionList";const a=o.forwardRef(({className:i,...s},t)=>{const{orientation:x,divided:g,size:h}=o.useContext(S);return e.jsx("div",{ref:t,className:f(C({orientation:x,divided:g,size:h}),i),...s})});a.displayName="DescriptionListItem";const r=o.forwardRef(({className:i,...s},t)=>e.jsx("dt",{ref:t,className:f("text-small text-tertiary font-sans",i),...s}));r.displayName="DescriptionListTerm";const n=o.forwardRef(({className:i,...s},t)=>e.jsx("dd",{ref:t,className:f("text-body-sm text-primary m-0 font-sans wrap-break-word",i),...s}));n.displayName="DescriptionListDetails";L.__docgenInfo={description:`DescriptionList renders a list of label/value pairs (e.g. "Name: Jane Doe")
using semantic \`<dl>\` / \`<dt>\` / \`<dd>\` elements.

@example
\`\`\`tsx
<DescriptionList
  items={[
    { label: 'Name', value: 'Jane Doe' },
    { label: 'Phone number', value: '+1 (555) 123-4567' },
  ]}
/>

<DescriptionList orientation="inline" divided>
  <DescriptionListItem>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDetails>Jane Doe</DescriptionListDetails>
  </DescriptionListItem>
</DescriptionList>

<DescriptionList size="compact" items={items} />
\`\`\``,methods:[],displayName:"DescriptionList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"DescriptionListItemData"}],raw:"DescriptionListItemData[]"},description:"Render items declaratively instead of composing `DescriptionListItem` /\n`DescriptionListTerm` / `DescriptionListDetails` as children."},orientation:{defaultValue:{value:"'stacked'",computed:!1},required:!1},divided:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};a.__docgenInfo={description:"Wraps a single `DescriptionListTerm` / `DescriptionListDetails` pair.\nLayout (stacked vs. inline) is inherited from the parent `DescriptionList`.",methods:[],displayName:"DescriptionListItem"};r.__docgenInfo={description:"The label half of a pair, rendered as a `<dt>`.",methods:[],displayName:"DescriptionListTerm"};n.__docgenInfo={description:"The value half of a pair, rendered as a `<dd>`.",methods:[],displayName:"DescriptionListDetails"};const P={title:"Content/DescriptionList",component:L,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["stacked","inline"],description:"Layout of each label/value pair"},divided:{control:"boolean",description:"Show a divider line between items"},size:{control:"select",options:["default","compact"],description:"Density of the gaps/padding between items"}}},d=[{label:"Name",value:"Jane Doe"},{label:"Email",value:"jane@example.com"},{label:"Phone number",value:"+1 (555) 123-4567"},{label:"Location",value:"Stockholm, Sweden"}],c={args:{items:d},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},l={args:{items:d,orientation:"inline"},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},m={args:{items:d,divided:!0},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},p={args:{items:d,orientation:"inline",divided:!0},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},u={args:{items:d,size:"compact"},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},v={args:{items:d,orientation:"inline",divided:!0,size:"compact"},decorators:[i=>e.jsx("div",{className:"w-96",children:e.jsx(i,{})})]},D={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(L,{orientation:"inline",divided:!0,children:[e.jsxs(a,{children:[e.jsx(r,{children:"Status"}),e.jsx(n,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(r,{children:"Plan"}),e.jsx(n,{children:"Enterprise"})]}),e.jsxs(a,{children:[e.jsx(r,{children:"Renews"}),e.jsx(n,{children:"January 1, 2027"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems,
    orientation: 'inline'
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems,
    divided: true
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems,
    orientation: 'inline',
    divided: true
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems,
    size: 'compact'
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: contactItems,
    orientation: 'inline',
    divided: true,
    size: 'compact'
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <DescriptionList orientation="inline" divided>
        <DescriptionListItem>
          <DescriptionListTerm>Status</DescriptionListTerm>
          <DescriptionListDetails>Active</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionListTerm>Plan</DescriptionListTerm>
          <DescriptionListDetails>Enterprise</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
          <DescriptionListTerm>Renews</DescriptionListTerm>
          <DescriptionListDetails>January 1, 2027</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>
    </div>
}`,...D.parameters?.docs?.source}}};const q=["Default","Inline","Divided","InlineDivided","Compact","CompactDivided","ComposedChildren"];export{u as Compact,v as CompactDivided,D as ComposedChildren,c as Default,m as Divided,l as Inline,p as InlineDivided,q as __namedExportsOrder,P as default};
