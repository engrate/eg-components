import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as H}from"./index-D_axniF5.js";import{c as S}from"./index-HTk8j2sO.js";import{r as m}from"./iframe-DRsmyPNk.js";import{c as I}from"./utils-kmX6UHYG.js";import"./index-C89VOX4K.js";import"./preload-helper-PPVm8Dsz.js";const N=S("text-small flex min-w-0 flex-nowrap items-center overflow-hidden font-sans",{variants:{size:{sm:"text-label gap-1.5",default:"text-small gap-2",lg:"text-body gap-2.5"}},defaultVariants:{size:"default"}}),y=S("focus-visible:ring-sunflower inline-block truncate align-middle transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{isCurrentPage:{true:"text-primary cursor-default",false:"text-quaternary hover:text-primary"}},defaultVariants:{isCurrentPage:!1}}),s=m.forwardRef(({className:a,size:n,separator:c=e.jsx(d,{}),children:t,...x},j)=>{const P=m.Children.toArray(t).filter(m.isValidElement);return e.jsx("nav",{ref:j,"aria-label":"Breadcrumb",...x,children:e.jsx("ol",{className:I(N({size:n,className:a})),children:P.map((v,C)=>{const w=C===P.length-1;return e.jsxs("li",{className:"inline-flex min-w-0 shrink items-center gap-2",children:[v,!w&&c]},C)})})})});s.displayName="Breadcrumbs";const r=m.forwardRef(({className:a,asChild:n=!1,isCurrentPage:c=!1,...t},x)=>{if(c)return e.jsx("span",{className:I(y({isCurrentPage:!0,className:a})),"aria-current":"page",children:t.children});const j=n?H:"a";return e.jsx(j,{ref:x,className:I(y({isCurrentPage:!1,className:a})),...t})});r.displayName="BreadcrumbItem";const d=m.forwardRef(({className:a,children:n,...c},t)=>e.jsx("span",{ref:t,role:"presentation","aria-hidden":"true",className:I("text-tertiary shrink-0",a),...c,children:n??e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",children:e.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}));d.displayName="BreadcrumbSeparator";s.__docgenInfo={description:`Breadcrumbs navigation component following Engrate brand guidelines.
Provides a navigation trail showing the user's location within a hierarchy.

@example
\`\`\`tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>Current Product</BreadcrumbItem>
</Breadcrumbs>
\`\`\``,methods:[],displayName:"Breadcrumbs",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator between breadcrumb items",defaultValue:{value:"<BreadcrumbSeparator />",computed:!1}}},composes:["VariantProps"]};r.__docgenInfo={description:"Individual breadcrumb item. Use href for links or isCurrentPage for the current location.",methods:[],displayName:"BreadcrumbItem",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}},isCurrentPage:{required:!1,tsType:{name:"boolean"},description:"Indicates this is the current page (should not be a link)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};d.__docgenInfo={description:"Separator between breadcrumb items. Defaults to a chevron icon.",methods:[],displayName:"BreadcrumbSeparator"};const T={title:"Navigation/Breadcrumbs",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the breadcrumbs"},separator:{control:!1,description:"Custom separator between breadcrumb items"}}},o={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Category"}),e.jsx(r,{isCurrentPage:!0,children:"Current Page"})]})},u={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{isCurrentPage:!0,children:"About"})]})},i={args:{size:"sm"},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},l={args:{size:"lg"},render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},b={render:a=>e.jsxs(s,{...a,separator:e.jsx(d,{className:"text-tertiary",children:"/"}),children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},h={render:a=>e.jsxs(s,{...a,separator:e.jsx(d,{className:"text-tertiary",children:"→"}),children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{isCurrentPage:!0,children:"Details"})]})},p={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Category"}),e.jsx(r,{href:"#",children:"Subcategory"})]})},f={render:a=>e.jsx(s,{...a,children:e.jsx(r,{isCurrentPage:!0,children:"Home"})})},g={render:a=>e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Enterprise Solutions"}),e.jsx(r,{href:"#",children:"Energy Management Platform"}),e.jsx(r,{isCurrentPage:!0,children:"Advanced Analytics Dashboard"})]})},B={render:a=>e.jsx("div",{className:"w-80 overflow-hidden",children:e.jsxs(s,{...a,children:[e.jsx(r,{href:"#",children:"Home"}),e.jsx(r,{href:"#",children:"Enterprise Solutions"}),e.jsx(r,{href:"#",children:"Energy Management Platform"}),e.jsx(r,{isCurrentPage:!0,children:"Advanced Analytics Dashboard"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Current Page</BreadcrumbItem>
    </Breadcrumbs>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} separator={<BreadcrumbSeparator className="text-tertiary">→</BreadcrumbSeparator>}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>Details</BreadcrumbItem>
    </Breadcrumbs>
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
    </Breadcrumbs>
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80 overflow-hidden">
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Enterprise Solutions</BreadcrumbItem>
        <BreadcrumbItem href="#">Energy Management Platform</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          Advanced Analytics Dashboard
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
}`,...B.parameters?.docs?.source}}};const z=["Default","TwoItems","Small","Large","CustomSeparator","ArrowSeparator","AllLinks","SingleItem","LongLabels","Truncated"];export{p as AllLinks,h as ArrowSeparator,b as CustomSeparator,o as Default,l as Large,g as LongLabels,f as SingleItem,i as Small,B as Truncated,u as TwoItems,z as __namedExportsOrder,T as default};
