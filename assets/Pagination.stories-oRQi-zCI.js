import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-B9DOGYvv.js";import{c as _}from"./index-HTk8j2sO.js";import{c as L}from"./utils-kmX6UHYG.js";import{C as q,a as D}from"./chevron-right-DtciitUC.js";import{E as G}from"./ellipsis-DMSwDKN4.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DmGUwLN8.js";const W=_("flex items-center justify-center gap-1 font-sans",{variants:{size:{sm:"text-small",default:"text-body",lg:"text-lead"}},defaultVariants:{size:"default"}}),B=_("focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"text-primary hover:bg-alt active:bg-contrast rounded-full",active:"bg-sunflower text-primary hover:bg-sunflower-hover rounded-full",ellipsis:"text-tertiary cursor-default"},size:{sm:"text-small h-7 w-7",default:"text-small h-9 w-9",lg:"text-body h-11 w-11"}},defaultVariants:{variant:"default",size:"default"}}),n=N.forwardRef(({className:l,size:r,page:a,totalPages:t,onPageChange:S,siblingCount:o=1,...E},A)=>{const M=N.useMemo(()=>{const V=o*2+3+2;if(t<=V)return Array.from({length:t},(i,c)=>c+1);const R=Math.max(a-o,1),k=Math.min(a+o,t),C=R>2,z=k<t-1;if(!C&&z){const i=3+2*o;return[...Array.from({length:i},(I,T)=>T+1),"ellipsis-right",t]}if(C&&!z){const i=3+2*o;return[1,"ellipsis-left",...Array.from({length:i},(I,T)=>t-i+T+1)]}return C&&z?[1,"ellipsis-left",...Array.from({length:o*2+1},(c,I)=>R+I),"ellipsis-right",t]:Array.from({length:t},(i,c)=>c+1)},[a,t,o]),w=s=>{s>=1&&s<=t&&s!==a&&S?.(s)};return e.jsxs("nav",{ref:A,role:"navigation","aria-label":"Pagination",className:L(W({size:r,className:l})),...E,children:[e.jsx(g,{size:r,onClick:()=>w(a-1),disabled:a===1,"aria-label":"Go to previous page",children:e.jsx(q,{className:"h-4 w-4"})}),M.map(s=>typeof s=="string"?e.jsx(g,{size:r,variant:"ellipsis",disabled:!0,"aria-hidden":!0,children:e.jsx(G,{className:"h-4 w-4"})},s):e.jsx(g,{size:r,variant:s===a?"active":"default",onClick:()=>w(s),"aria-label":`Go to page ${s}`,"aria-current":s===a?"page":void 0,children:s},s)),e.jsx(g,{size:r,onClick:()=>w(a+1),disabled:a===t,"aria-label":"Go to next page",children:e.jsx(D,{className:"h-4 w-4"})})]})});n.displayName="Pagination";const g=N.forwardRef(({className:l,variant:r,size:a,...t},S)=>e.jsx("button",{ref:S,type:"button",className:L(B({variant:r,size:a,className:l})),...t}));g.displayName="PaginationItem";n.__docgenInfo={description:`Navigation component for paginated content.
Features numbered page buttons with ellipsis for large page counts.

@example
\`\`\`tsx
<Pagination
  page={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>
\`\`\``,methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:"Current page number (1-indexed)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of sibling pages to show on each side of current page",defaultValue:{value:"1",computed:!1}}},composes:["VariantProps"]};g.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",composes:["VariantProps"]};const Y={title:"Table/Pagination",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1},description:"Current page number (1-indexed)"},totalPages:{control:{type:"number",min:1},description:"Total number of pages"},size:{control:"select",options:["sm","default","lg"],description:"The size of the pagination buttons"},siblingCount:{control:{type:"number",min:0},description:"Number of sibling pages to show on each side of current page"},onPageChange:{action:"pageChanged",description:"Callback when page changes"}}},m={args:{page:1,totalPages:5}},d={args:{page:3,totalPages:5}},p={args:{page:5,totalPages:5}},u={args:{page:5,totalPages:10}},f={args:{page:15,totalPages:30}},h={args:{page:3,totalPages:10,size:"sm"}},x={args:{page:3,totalPages:10,size:"lg"}},P={args:{page:1,totalPages:1}},v={args:{page:1,totalPages:2}},F=()=>{const[l,r]=N.useState(1),a=10;return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("p",{className:"text-secondary text-small",children:["Page ",l," of ",a]}),e.jsx(n,{page:l,totalPages:a,onPageChange:r})]})},b={render:()=>e.jsx(F,{}),args:{page:1,totalPages:10}},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Small"}),e.jsx(n,{page:3,totalPages:7,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Default"}),e.jsx(n,{page:3,totalPages:7,size:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Large"}),e.jsx(n,{page:3,totalPages:7,size:"lg"})]})]}),args:{page:3,totalPages:7}},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Page 1 (right ellipsis)"}),e.jsx(n,{page:1,totalPages:20})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Page 10 (both ellipsis)"}),e.jsx(n,{page:10,totalPages:20})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Page 20 (left ellipsis)"}),e.jsx(n,{page:20,totalPages:20})]})]}),args:{page:10,totalPages:20}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 5
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 5
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 5
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 10
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    page: 15,
    totalPages: 30
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 10,
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 10,
    size: 'lg'
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 1
  }
}`,...P.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 2
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveTemplate />,
  args: {
    page: 1,
    totalPages: 10
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Small</h3>
        <Pagination page={3} totalPages={7} size="sm" />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Default</h3>
        <Pagination page={3} totalPages={7} size="default" />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Large</h3>
        <Pagination page={3} totalPages={7} size="lg" />
      </div>
    </div>,
  args: {
    page: 3,
    totalPages: 7
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 1 (right ellipsis)
        </h3>
        <Pagination page={1} totalPages={20} />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 10 (both ellipsis)
        </h3>
        <Pagination page={10} totalPages={20} />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Page 20 (left ellipsis)
        </h3>
        <Pagination page={20} totalPages={20} />
      </div>
    </div>,
  args: {
    page: 10,
    totalPages: 20
  }
}`,...j.parameters?.docs?.source}}};const Z=["Default","MiddlePage","LastPage","ManyPages","LargePageCount","Small","Large","SinglePage","TwoPages","Interactive","AllSizes","WithEllipsis"];export{y as AllSizes,m as Default,b as Interactive,x as Large,f as LargePageCount,p as LastPage,u as ManyPages,d as MiddlePage,P as SinglePage,h as Small,v as TwoPages,j as WithEllipsis,Z as __namedExportsOrder,Y as default};
