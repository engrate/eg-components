import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as k}from"./index-Bfo6Zp52.js";import{r as R}from"./iframe-2V79pbFo.js";import{c as F}from"./utils-ryREhF4q.js";import"./index-Bj_3WkyM.js";import"./preload-helper-PPVm8Dsz.js";const M={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",12:"grid-cols-12"},H={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},W={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},_={start:"justify-items-start",center:"justify-items-center",end:"justify-items-end",stretch:"justify-items-stretch"};function i(l,s,m){if(!l)return m?s[m]:"";if(typeof l=="object"){const t=[];return l.base!==void 0?t.push(s[l.base]):m&&t.push(s[m]),l.sm!==void 0&&t.push(`sm:${s[l.sm].split(":").pop()}`),l.md!==void 0&&t.push(`md:${s[l.md].split(":").pop()}`),l.lg!==void 0&&t.push(`lg:${s[l.lg].split(":").pop()}`),l.xl!==void 0&&t.push(`xl:${s[l.xl].split(":").pop()}`),l["2xl"]!==void 0&&t.push(`2xl:${s[l["2xl"]].split(":").pop()}`),t.join(" ")}return s[l]}const n=R.forwardRef(({className:l,cols:s,gap:m,align:t,justify:T,as:G="div",asChild:S=!1,...w},N)=>{const I=S?k:G,q=i(s,M,1),C=i(m,H,"md"),L=i(t,W,"stretch"),A=i(T,_,"stretch");return e.jsx(I,{className:F("grid",q,C,L,A,l),ref:N,...w})});n.displayName="Grid";const E={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",full:"col-span-full"},P={1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full"},$={1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"},r=R.forwardRef(({className:l,colSpan:s,rowSpan:m,colStart:t,as:T="div",asChild:G=!1,...S},w)=>{const N=G?k:T,I=i(s,E),q=i(m,P),C=i(t,$);return e.jsx(N,{className:F(I,q,C,l),ref:w,...S})});r.displayName="GridItem";n.__docgenInfo={description:`Grid component for consistent layout structures.
Provides a flexible grid system with configurable columns, gaps, and alignment.
Supports responsive values for mobile-first responsive layouts.

@example
\`\`\`tsx
// Simple usage
<Grid cols={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

// Responsive usage
<Grid cols={{ base: 1, md: 2, lg: 3 }} gap={{ base: 'md', lg: 'xl' }}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
\`\`\``,methods:[],displayName:"Grid",props:{cols:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}},{key:"sm",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}},{key:"md",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}},{key:"lg",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}},{key:"xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}},{key:"2xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"12"}],required:!1}}]}}]},description:"Number of columns in the grid. Supports responsive values."},gap:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}},{key:"md",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}],required:!1}}]}}]},description:"Gap between grid items. Supports responsive values."},align:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}},{key:"md",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}],required:!1}}]}}]},description:"Vertical alignment of items. Supports responsive values."},justify:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}},{key:"md",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}],required:!1}}]}}]},description:"Horizontal alignment of items. Supports responsive values."},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The HTML element to render as (e.g., 'section', 'main', 'nav')",defaultValue:{value:"'div'",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component using Slot",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};r.__docgenInfo={description:`GridItem component for controlling individual item placement within a Grid.
Supports responsive values for mobile-first responsive layouts.

@example
\`\`\`tsx
// Simple usage
<Grid cols={12}>
  <GridItem colSpan={8}>Main content</GridItem>
  <GridItem colSpan={4}>Sidebar</GridItem>
</Grid>

// Responsive usage
<Grid cols={{ base: 1, lg: 12 }}>
  <GridItem colSpan={{ base: 'full', lg: 8 }}>Main content</GridItem>
  <GridItem colSpan={{ base: 'full', lg: 4 }}>Sidebar</GridItem>
</Grid>
\`\`\``,methods:[],displayName:"GridItem",props:{colSpan:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}},{key:"sm",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}},{key:"md",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}},{key:"lg",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}},{key:"xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'full'"}],required:!1}}]}}]},description:"Column span for the item. Supports responsive values."},rowSpan:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}},{key:"sm",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}},{key:"md",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}},{key:"lg",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}},{key:"xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 'full'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"'full'"}],required:!1}}]}}]},description:"Row span for the item. Supports responsive values."},colStart:{required:!1,tsType:{name:"union",raw:`| T
| {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
  }`,elements:[{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}},{key:"sm",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}},{key:"md",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}},{key:"lg",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}},{key:"xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"},{name:"literal",value:"'auto'"}],required:!1}}]}}]},description:"Column start position for the item. Supports responsive values."},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The HTML element to render as (e.g., 'section', 'article', 'aside')",defaultValue:{value:"'div'",computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component using Slot",defaultValue:{value:"false",computed:!1}}}};const U={title:"Layout/Grid",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,12],description:"Number of columns in the grid"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"Gap between grid items"},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"Vertical alignment of items"},justify:{control:"select",options:["start","center","end","stretch"],description:"Horizontal alignment of items"},as:{control:"select",options:["div","nav","main","aside","section"],description:"HTML element to render the grid as"}}},a=({children:l,className:s=""})=>e.jsx("div",{className:`border-border bg-card rounded-lg border p-4 text-center ${s}`,children:l}),o={args:{cols:3,gap:"md"},render:l=>e.jsxs(n,{...l,children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{children:"Item 3"}),e.jsx(a,{children:"Item 4"}),e.jsx(a,{children:"Item 5"}),e.jsx(a,{children:"Item 6"})]})},u={args:{cols:2,gap:"lg"},render:l=>e.jsxs(n,{...l,children:[e.jsx(a,{children:"Left"}),e.jsx(a,{children:"Right"})]})},d={args:{cols:4,gap:"md"},render:l=>e.jsxs(n,{...l,children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"4"})]})},c={args:{cols:12,gap:"md"},render:l=>e.jsxs(n,{...l,children:[e.jsx(r,{colSpan:8,children:e.jsx(a,{children:"Main Content (8 cols)"})}),e.jsx(r,{colSpan:4,children:e.jsx(a,{children:"Sidebar (4 cols)"})})]})},v={args:{cols:12,gap:"lg"},render:l=>e.jsxs(n,{...l,children:[e.jsx(r,{colSpan:"full",children:e.jsx(a,{children:"Header (Full Width)"})}),e.jsx(r,{colSpan:3,children:e.jsx(a,{children:"Sidebar"})}),e.jsx(r,{colSpan:6,children:e.jsx(a,{children:"Main Content"})}),e.jsx(r,{colSpan:3,children:e.jsx(a,{children:"Aside"})}),e.jsx(r,{colSpan:"full",children:e.jsx(a,{children:"Footer (Full Width)"})})]})},x={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="none"'}),e.jsxs(n,{cols:3,gap:"none",children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="sm"'}),e.jsxs(n,{cols:3,gap:"sm",children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="md" (default)'}),e.jsxs(n,{cols:3,gap:"md",children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="xl"'}),e.jsxs(n,{cols:3,gap:"xl",children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"})]})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="start"'}),e.jsxs(n,{cols:3,gap:"md",align:"start",className:"bg-alt h-32",children:[e.jsx(a,{children:"Short"}),e.jsx(a,{className:"py-8",children:"Tall"}),e.jsx(a,{children:"Short"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="center"'}),e.jsxs(n,{cols:3,gap:"md",align:"center",className:"bg-alt h-32",children:[e.jsx(a,{children:"Short"}),e.jsx(a,{className:"py-8",children:"Tall"}),e.jsx(a,{children:"Short"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="end"'}),e.jsxs(n,{cols:3,gap:"md",align:"end",className:"bg-alt h-32",children:[e.jsx(a,{children:"Short"}),e.jsx(a,{className:"py-8",children:"Tall"}),e.jsx(a,{children:"Short"})]})]})]})},h={args:{cols:3,gap:"md"},render:l=>e.jsxs(n,{...l,children:[e.jsx(r,{rowSpan:2,children:e.jsx(a,{className:"h-full",children:"Spans 2 rows"})}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"4"}),e.jsx(a,{children:"5"})]})},g={args:{cols:3,gap:"lg"},render:l=>e.jsx(n,{...l,children:Array.from({length:6},(s,m)=>e.jsxs("div",{className:"border-border bg-card rounded-lg border p-6 shadow-sm",children:[e.jsxs("h3",{className:"font-display mb-2 text-lg",children:["Card ",m+1]}),e.jsx("p",{className:"text-secondary text-sm",children:"This is a sample card layout using the Grid component."})]},m))})},f={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-4 text-sm",children:"Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop"}),e.jsxs(n,{cols:{base:1,md:2,lg:3},gap:"md",children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{children:"Item 3"}),e.jsx(a,{children:"Item 4"}),e.jsx(a,{children:"Item 5"}),e.jsx(a,{children:"Item 6"})]})]})})},b={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-4 text-sm",children:"Responsive gap: small on mobile, large on desktop"}),e.jsxs(n,{cols:3,gap:{base:"sm",lg:"xl"},children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:"2"}),e.jsx(a,{children:"3"}),e.jsx(a,{children:"4"}),e.jsx(a,{children:"5"}),e.jsx(a,{children:"6"})]})]})})},j={render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-4 text-sm",children:"Stacked on mobile, sidebar layout on desktop"}),e.jsxs(n,{cols:{base:1,lg:12},gap:"lg",children:[e.jsx(r,{colSpan:{base:"full",lg:8},children:e.jsxs(a,{className:"h-full",children:[e.jsx("h3",{className:"font-display mb-2 text-lg",children:"Main Content"}),e.jsx("p",{className:"text-secondary text-sm",children:"Full width on mobile, 8 columns on desktop"})]})}),e.jsx(r,{colSpan:{base:"full",lg:4},children:e.jsxs(a,{className:"h-full",children:[e.jsx("h3",{className:"font-display mb-2 text-lg",children:"Sidebar"}),e.jsx("p",{className:"text-secondary text-sm",children:"Full width on mobile, 4 columns on desktop"})]})})]})]})})},y={render:()=>e.jsxs(n,{cols:{base:1,md:6,lg:12},gap:{base:"md",lg:"lg"},children:[e.jsx(r,{colSpan:"full",children:e.jsx(a,{children:"Header (Always Full Width)"})}),e.jsx(r,{colSpan:{base:"full",md:2,lg:3},children:e.jsxs(a,{className:"h-full",children:[e.jsx("h4",{className:"mb-2",children:"Nav"}),e.jsxs("p",{className:"text-secondary text-sm",children:["Full on mobile",e.jsx("br",{}),"2/6 on tablet",e.jsx("br",{}),"3/12 on desktop"]})]})}),e.jsx(r,{colSpan:{base:"full",md:4,lg:6},children:e.jsxs(a,{className:"h-full",children:[e.jsx("h4",{className:"mb-2",children:"Main Content"}),e.jsxs("p",{className:"text-secondary text-sm",children:["Full on mobile",e.jsx("br",{}),"4/6 on tablet",e.jsx("br",{}),"6/12 on desktop"]})]})}),e.jsx(r,{colSpan:{base:"full",md:6,lg:3},children:e.jsxs(a,{className:"h-full",children:[e.jsx("h4",{className:"font mb-2",children:"Aside"}),e.jsxs("p",{className:"text-secondary text-sm",children:["Full on mobile",e.jsx("br",{}),"Full (6/6) on tablet",e.jsx("br",{}),"3/12 on desktop"]})]})}),e.jsx(r,{colSpan:"full",children:e.jsx(a,{children:"Footer (Always Full Width)"})})]})},D={render:()=>e.jsxs(n,{as:"section",cols:12,gap:"lg","aria-label":"Page layout",children:[e.jsx(r,{as:"header",colSpan:"full",children:e.jsx(a,{children:"Header (rendered as header element)"})}),e.jsx(r,{as:"nav",colSpan:3,children:e.jsx(a,{className:"h-full",children:"Navigation (rendered as nav element)"})}),e.jsx(r,{as:"main",colSpan:6,children:e.jsx(a,{className:"h-full",children:"Main Content (rendered as main element)"})}),e.jsx(r,{as:"aside",colSpan:3,children:e.jsx(a,{className:"h-full",children:"Sidebar (rendered as aside element)"})}),e.jsx(r,{as:"footer",colSpan:"full",children:e.jsx(a,{children:"Footer (rendered as footer element)"})})]})},B={render:()=>e.jsx(n,{asChild:!0,cols:3,gap:"md",children:e.jsxs("ul",{className:"list-none p-0",children:[e.jsx("li",{children:e.jsx(a,{children:"List Item 1"})}),e.jsx("li",{children:e.jsx(a,{children:"List Item 2"})}),e.jsx("li",{children:e.jsx(a,{children:"List Item 3"})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md'
  },
  render: args => <Grid {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Grid>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    gap: 'lg'
  },
  render: args => <Grid {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox>Right</DemoBox>
    </Grid>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    gap: 'md'
  },
  render: args => <Grid {...args}>
      <DemoBox>1</DemoBox>
      <DemoBox>2</DemoBox>
      <DemoBox>3</DemoBox>
      <DemoBox>4</DemoBox>
    </Grid>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 'md'
  },
  render: args => <Grid {...args}>
      <GridItem colSpan={8}>
        <DemoBox>Main Content (8 cols)</DemoBox>
      </GridItem>
      <GridItem colSpan={4}>
        <DemoBox>Sidebar (4 cols)</DemoBox>
      </GridItem>
    </Grid>
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 'lg'
  },
  render: args => <Grid {...args}>
      <GridItem colSpan="full">
        <DemoBox>Header (Full Width)</DemoBox>
      </GridItem>
      <GridItem colSpan={3}>
        <DemoBox>Sidebar</DemoBox>
      </GridItem>
      <GridItem colSpan={6}>
        <DemoBox>Main Content</DemoBox>
      </GridItem>
      <GridItem colSpan={3}>
        <DemoBox>Aside</DemoBox>
      </GridItem>
      <GridItem colSpan="full">
        <DemoBox>Footer (Full Width)</DemoBox>
      </GridItem>
    </Grid>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;none&quot;</p>
        <Grid cols={3} gap="none">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;sm&quot;</p>
        <Grid cols={3} gap="sm">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">
          gap=&quot;md&quot; (default)
        </p>
        <Grid cols={3} gap="md">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;xl&quot;</p>
        <Grid cols={3} gap="xl">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-2 text-sm">align=&quot;start&quot;</p>
        <Grid cols={3} gap="md" align="start" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align=&quot;center&quot;</p>
        <Grid cols={3} gap="md" align="center" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align=&quot;end&quot;</p>
        <Grid cols={3} gap="md" align="end" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md'
  },
  render: args => <Grid {...args}>
      <GridItem rowSpan={2}>
        <DemoBox className="h-full">Spans 2 rows</DemoBox>
      </GridItem>
      <DemoBox>2</DemoBox>
      <DemoBox>3</DemoBox>
      <DemoBox>4</DemoBox>
      <DemoBox>5</DemoBox>
    </Grid>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'lg'
  },
  render: args => <Grid {...args}>
      {Array.from({
      length: 6
    }, (_, i) => <div key={i} className="border-border bg-card rounded-lg border p-6 shadow-sm">
          <h3 className="font-display mb-2 text-lg">Card {i + 1}</h3>
          <p className="text-secondary text-sm">
            This is a sample card layout using the Grid component.
          </p>
        </div>)}
    </Grid>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
        </p>
        <Grid cols={{
        base: 1,
        md: 2,
        lg: 3
      }} gap="md">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
          <DemoBox>Item 4</DemoBox>
          <DemoBox>Item 5</DemoBox>
          <DemoBox>Item 6</DemoBox>
        </Grid>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Responsive gap: small on mobile, large on desktop
        </p>
        <Grid cols={3} gap={{
        base: 'sm',
        lg: 'xl'
      }}>
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
          <DemoBox>4</DemoBox>
          <DemoBox>5</DemoBox>
          <DemoBox>6</DemoBox>
        </Grid>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-4 text-sm">
          Stacked on mobile, sidebar layout on desktop
        </p>
        <Grid cols={{
        base: 1,
        lg: 12
      }} gap="lg">
          <GridItem colSpan={{
          base: 'full',
          lg: 8
        }}>
            <DemoBox className="h-full">
              <h3 className="font-display mb-2 text-lg">Main Content</h3>
              <p className="text-secondary text-sm">
                Full width on mobile, 8 columns on desktop
              </p>
            </DemoBox>
          </GridItem>
          <GridItem colSpan={{
          base: 'full',
          lg: 4
        }}>
            <DemoBox className="h-full">
              <h3 className="font-display mb-2 text-lg">Sidebar</h3>
              <p className="text-secondary text-sm">
                Full width on mobile, 4 columns on desktop
              </p>
            </DemoBox>
          </GridItem>
        </Grid>
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Grid cols={{
    base: 1,
    md: 6,
    lg: 12
  }} gap={{
    base: 'md',
    lg: 'lg'
  }}>
      <GridItem colSpan="full">
        <DemoBox>Header (Always Full Width)</DemoBox>
      </GridItem>
      <GridItem colSpan={{
      base: 'full',
      md: 2,
      lg: 3
    }}>
        <DemoBox className="h-full">
          <h4 className="mb-2">Nav</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            2/6 on tablet
            <br />
            3/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan={{
      base: 'full',
      md: 4,
      lg: 6
    }}>
        <DemoBox className="h-full">
          <h4 className="mb-2">Main Content</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            4/6 on tablet
            <br />
            6/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan={{
      base: 'full',
      md: 6,
      lg: 3
    }}>
        <DemoBox className="h-full">
          <h4 className="font mb-2">Aside</h4>
          <p className="text-secondary text-sm">
            Full on mobile
            <br />
            Full (6/6) on tablet
            <br />
            3/12 on desktop
          </p>
        </DemoBox>
      </GridItem>
      <GridItem colSpan="full">
        <DemoBox>Footer (Always Full Width)</DemoBox>
      </GridItem>
    </Grid>
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Grid as="section" cols={12} gap="lg" aria-label="Page layout">
      <GridItem as="header" colSpan="full">
        <DemoBox>Header (rendered as header element)</DemoBox>
      </GridItem>
      <GridItem as="nav" colSpan={3}>
        <DemoBox className="h-full">
          Navigation (rendered as nav element)
        </DemoBox>
      </GridItem>
      <GridItem as="main" colSpan={6}>
        <DemoBox className="h-full">
          Main Content (rendered as main element)
        </DemoBox>
      </GridItem>
      <GridItem as="aside" colSpan={3}>
        <DemoBox className="h-full">
          Sidebar (rendered as aside element)
        </DemoBox>
      </GridItem>
      <GridItem as="footer" colSpan="full">
        <DemoBox>Footer (rendered as footer element)</DemoBox>
      </GridItem>
    </Grid>
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Grid asChild cols={3} gap="md">
      <ul className="list-none p-0">
        <li>
          <DemoBox>List Item 1</DemoBox>
        </li>
        <li>
          <DemoBox>List Item 2</DemoBox>
        </li>
        <li>
          <DemoBox>List Item 3</DemoBox>
        </li>
      </ul>
    </Grid>
}`,...B.parameters?.docs?.source}}};const X=["Default","TwoColumns","FourColumns","TwelveColumnLayout","ComplexLayout","GapVariants","AlignmentOptions","WithRowSpan","CardGrid","ResponsiveColumns","ResponsiveGap","ResponsiveLayout","ResponsiveComplexLayout","AsPolymorphism","AsChildPolymorphism"];export{p as AlignmentOptions,B as AsChildPolymorphism,D as AsPolymorphism,g as CardGrid,v as ComplexLayout,o as Default,d as FourColumns,x as GapVariants,f as ResponsiveColumns,y as ResponsiveComplexLayout,b as ResponsiveGap,j as ResponsiveLayout,c as TwelveColumnLayout,u as TwoColumns,h as WithRowSpan,X as __namedExportsOrder,U as default};
