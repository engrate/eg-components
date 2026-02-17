import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as v}from"./index-DcSBEytL.js";import{c as S}from"./index-HTk8j2sO.js";import{r as n}from"./iframe-CQELQ9DN.js";import{c as B}from"./utils-kmX6UHYG.js";import"./index-BDFvxzif.js";import"./preload-helper-PPVm8Dsz.js";const w=S("text-small flex items-center font-sans",{variants:{size:{sm:"text-label gap-1.5",default:"text-small gap-2",lg:"text-body gap-2.5"}},defaultVariants:{size:"default"}}),C=S("focus-visible:ring-sunflower inline-flex items-center transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{isCurrentPage:{true:"cursor-default text-black",false:"text-quaternary hover:text-primary"}},defaultVariants:{isCurrentPage:!1}}),s=n.forwardRef(({className:a,size:c,separator:m=e.jsx(o,{}),children:t,...I},x)=>{const j=n.Children.toArray(t).filter(n.isValidElement);return e.jsx("nav",{ref:x,"aria-label":"Breadcrumb",...I,children:e.jsx("ol",{className:B(w({size:c,className:a})),children:j.map((y,P)=>e.jsxs("li",{className:"inline-flex items-center gap-2",children:[y,P<j.length-1&&m]},P))})})});s.displayName="Breadcrumbs";const r=n.forwardRef(({className:a,asChild:c=!1,isCurrentPage:m=!1,...t},I)=>{if(m)return e.jsx("span",{className:B(C({isCurrentPage:!0,className:a})),"aria-current":"page",children:t.children});const x=c?v:"a";return e.jsx(x,{ref:I,className:B(C({isCurrentPage:!1,className:a})),...t})});r.displayName="BreadcrumbItem";const o=n.forwardRef(({className:a,children:c,...m},t)=>e.jsx("span",{ref:t,role:"presentation","aria-hidden":"true",className:B("text-tertiary",a),...m,children:c??e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",children:e.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}));o.displayName="BreadcrumbSeparator";s.__docgenInfo={description:`Breadcrumbs navigation component following Engrate brand guidelines.
Provides a navigation trail showing the user's location within a hierarchy.

@example
\`\`\`tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>Current Product</BreadcrumbItem>
</Breadcrumbs>
\`\`\``,methods:[],displayName:"Breadcrumbs",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator between breadcrumb items",defaultValue:{value:"<BreadcrumbSeparator />",computed:!1}}},composes:["VariantProps"]};r.__docgenInfo={description:"Individual breadcrumb item. Use href for links or isCurrentPage for the current location.",methods:[],displayName:"BreadcrumbItem",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}},isCurrentPage:{required:!1,tsType:{name:"boolean"},description:"Indicates this is the current page (should not be a link)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};o.__docgenInfo={description:"Separator between breadcrumb items. Defaults to a chevron icon.",methods:[],displayName:"BreadcrumbSeparator"};const E={title:"Navigation/Breadcrumbs",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the breadcrumbs"},separator:{control:!1,description:"Custom separator between breadcrumb items"}}},d={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Category"}),e.jsx(r,{isCurrentPage:!0,children:"Current Page"})]})},u={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{isCurrentPage:!0,children:"About"})]})},i={args:{size:"sm"},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},l={args:{size:"lg"},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},b={render:a=>e.jsxs(s,{...a,separator:e.jsx(o,{className:"text-tertiary",children:"/"}),children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},p={render:a=>e.jsxs(s,{...a,separator:e.jsx(o,{className:"text-tertiary",children:"→"}),children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},h={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Category"}),e.jsx(r,{href:"#",children:"Subcategory"})]})},f={render:a=>e.jsx(s,{...a,children:e.jsx(r,{isCurrentPage:!0,children:"Home"})})},g={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Enterprise Solutions"}),e.jsx(r,{href:"#",children:"Energy Management Platform"}),e.jsx(r,{isCurrentPage:!0,children:"Advanced Analytics Dashboard"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
    </Breadcrumbs>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>About</BreadcrumbItem>
    </Breadcrumbs>
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} separator={<BreadcrumbSeparator className="text-tertiary">/</BreadcrumbSeparator>}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} separator={<BreadcrumbSeparator className="text-tertiary">→</BreadcrumbSeparator>}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
    </Breadcrumbs>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem isCurrentPage>Home</BreadcrumbItem>
    </Breadcrumbs>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Enterprise Solutions</BreadcrumbItem>
      <BreadcrumbItem href="#">Energy Management Platform</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        Advanced Analytics Dashboard
      </BreadcrumbItem>
    </Breadcrumbs>
}`,...g.parameters?.docs?.source}}};const R=["Default","TwoItems","Small","Large","CustomSeparator","ArrowSeparator","AllLinks","SingleItem","LongLabels"];export{h as AllLinks,p as ArrowSeparator,b as CustomSeparator,d as Default,l as Large,g as LongLabels,f as SingleItem,i as Small,u as TwoItems,R as __namedExportsOrder,E as default};
