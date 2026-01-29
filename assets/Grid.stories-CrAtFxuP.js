import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as f}from"./index-D413khBD.js";import{c as y}from"./index-DDA3KdpW.js";import{r as S}from"./iframe-C8eljAvV.js";import{c as b}from"./utils-ryREhF4q.js";import"./index-pMVG9LbY.js";import"./preload-helper-PPVm8Dsz.js";const v=y("grid",{variants:{cols:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",12:"grid-cols-12"},gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justify:{start:"justify-items-start",center:"justify-items-center",end:"justify-items-end",stretch:"justify-items-stretch"}},defaultVariants:{cols:1,gap:"md",align:"stretch",justify:"stretch"}}),r=S.forwardRef(({className:o,cols:n,gap:t,align:u,justify:j,asChild:D=!1,...B},G)=>{const N=D?f:"div";return e.jsx(N,{className:b(v({cols:n,gap:t,align:u,justify:j,className:o})),ref:G,...B})});r.displayName="Grid";const I=y("",{variants:{colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",full:"col-span-full"},rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"}},defaultVariants:{}}),a=S.forwardRef(({className:o,colSpan:n,rowSpan:t,colStart:u,asChild:j=!1,...D},B)=>{const G=j?f:"div";return e.jsx(G,{className:b(I({colSpan:n,rowSpan:t,colStart:u,className:o})),ref:B,...D})});a.displayName="GridItem";r.__docgenInfo={description:`Grid component for consistent layout structures.
Provides a flexible grid system with configurable columns, gaps, and alignment.

@example
\`\`\`tsx
<Grid cols={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
\`\`\``,methods:[],displayName:"Grid",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component using Slot",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};a.__docgenInfo={description:`GridItem component for controlling individual item placement within a Grid.

@example
\`\`\`tsx
<Grid cols={12}>
  <GridItem colSpan={8}>Main content</GridItem>
  <GridItem colSpan={4}>Sidebar</GridItem>
</Grid>
\`\`\``,methods:[],displayName:"GridItem",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component using Slot",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const L={title:"Layout/Grid",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,12],description:"Number of columns in the grid"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"Gap between grid items"},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"Vertical alignment of items"},justify:{control:"select",options:["start","center","end","stretch"],description:"Horizontal alignment of items"}}},s=({children:o,className:n=""})=>e.jsx("div",{className:`border-border bg-card rounded-lg border p-4 text-center ${n}`,children:o}),l={args:{cols:3,gap:"md"},render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"}),e.jsx(s,{children:"Item 4"}),e.jsx(s,{children:"Item 5"}),e.jsx(s,{children:"Item 6"})]})},d={args:{cols:2,gap:"lg"},render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{children:"Left"}),e.jsx(s,{children:"Right"})]})},c={args:{cols:4,gap:"md"},render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"4"})]})},i={args:{cols:12,gap:"md"},render:o=>e.jsxs(r,{...o,children:[e.jsx(a,{colSpan:8,children:e.jsx(s,{children:"Main Content (8 cols)"})}),e.jsx(a,{colSpan:4,children:e.jsx(s,{children:"Sidebar (4 cols)"})})]})},m={args:{cols:12,gap:"lg"},render:o=>e.jsxs(r,{...o,children:[e.jsx(a,{colSpan:"full",children:e.jsx(s,{children:"Header (Full Width)"})}),e.jsx(a,{colSpan:3,children:e.jsx(s,{children:"Sidebar"})}),e.jsx(a,{colSpan:6,children:e.jsx(s,{children:"Main Content"})}),e.jsx(a,{colSpan:3,children:e.jsx(s,{children:"Aside"})}),e.jsx(a,{colSpan:"full",children:e.jsx(s,{children:"Footer (Full Width)"})})]})},x={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="none"'}),e.jsxs(r,{cols:3,gap:"none",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="sm"'}),e.jsxs(r,{cols:3,gap:"sm",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="md" (default)'}),e.jsxs(r,{cols:3,gap:"md",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="xl"'}),e.jsxs(r,{cols:3,gap:"xl",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="start"'}),e.jsxs(r,{cols:3,gap:"md",align:"start",className:"bg-alt h-32",children:[e.jsx(s,{children:"Short"}),e.jsx(s,{className:"py-8",children:"Tall"}),e.jsx(s,{children:"Short"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="center"'}),e.jsxs(r,{cols:3,gap:"md",align:"center",className:"bg-alt h-32",children:[e.jsx(s,{children:"Short"}),e.jsx(s,{className:"py-8",children:"Tall"}),e.jsx(s,{children:"Short"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'align="end"'}),e.jsxs(r,{cols:3,gap:"md",align:"end",className:"bg-alt h-32",children:[e.jsx(s,{children:"Short"}),e.jsx(s,{className:"py-8",children:"Tall"}),e.jsx(s,{children:"Short"})]})]})]})},g={args:{cols:3,gap:"md"},render:o=>e.jsxs(r,{...o,children:[e.jsx(a,{rowSpan:2,children:e.jsx(s,{className:"h-full",children:"Spans 2 rows"})}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"}),e.jsx(s,{children:"4"}),e.jsx(s,{children:"5"})]})},h={args:{cols:3,gap:"lg"},render:o=>e.jsx(r,{...o,children:Array.from({length:6},(n,t)=>e.jsxs("div",{className:"border-border bg-card rounded-lg border p-6 shadow-sm",children:[e.jsxs("h3",{className:"font-display mb-2 text-lg",children:["Card ",t+1]}),e.jsx("p",{className:"text-secondary text-sm",children:"This is a sample card layout using the Grid component."})]},t))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    gap: 'lg'
  },
  render: args => <Grid {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox>Right</DemoBox>
    </Grid>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="text-secondary mb-2 text-sm">gap="none"</p>
        <Grid cols={3} gap="none">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="sm"</p>
        <Grid cols={3} gap="sm">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="md" (default)</p>
        <Grid cols={3} gap="md">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap="xl"</p>
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
        <p className="text-secondary mb-2 text-sm">align="start"</p>
        <Grid cols={3} gap="md" align="start" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align="center"</p>
        <Grid cols={3} gap="md" align="center" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">align="end"</p>
        <Grid cols={3} gap="md" align="end" className="bg-alt h-32">
          <DemoBox>Short</DemoBox>
          <DemoBox className="py-8">Tall</DemoBox>
          <DemoBox>Short</DemoBox>
        </Grid>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const A=["Default","TwoColumns","FourColumns","TwelveColumnLayout","ComplexLayout","GapVariants","AlignmentOptions","WithRowSpan","CardGrid"];export{p as AlignmentOptions,h as CardGrid,m as ComplexLayout,l as Default,c as FourColumns,x as GapVariants,i as TwelveColumnLayout,d as TwoColumns,g as WithRowSpan,A as __namedExportsOrder,L as default};
