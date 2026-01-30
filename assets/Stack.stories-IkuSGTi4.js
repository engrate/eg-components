import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as k}from"./index-DcK1wo3Z.js";import{c as y}from"./index-DDA3KdpW.js";import{r as v}from"./iframe-DsOMdu-l.js";import{c as N}from"./utils-ryREhF4q.js";import"./index-eE-IUZyM.js";import"./preload-helper-PPVm8Dsz.js";const w=y("flex",{variants:{direction:{vertical:"flex-col",horizontal:"flex-row"},gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8","2xl":"gap-12"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justify:{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},wrap:{nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"}},defaultVariants:{direction:"vertical",gap:"md",align:"stretch",justify:"start",wrap:"nowrap"}}),a=v.forwardRef(({className:o,direction:h,gap:g,align:u,justify:j,wrap:B,asChild:D=!1,...f},S)=>{const b=D?k:"div";return e.jsx(b,{className:N(w({direction:h,gap:g,align:u,justify:j,wrap:B,className:o})),ref:S,...f})});a.displayName="Stack";a.__docgenInfo={description:`Stack component for arranging elements in a vertical or horizontal stack.
Provides a flexible layout system with configurable direction, gaps, and alignment.

@example
\`\`\`tsx
// Vertical stack (default)
<Stack gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Stack>

// Horizontal stack
<Stack direction="horizontal" gap="md" align="center">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Stack>
\`\`\``,methods:[],displayName:"Stack",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component using Slot",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const M={title:"Layout/Stack",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"Direction of the stack layout"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"],description:"Gap between stack items"},align:{control:"select",options:["start","center","end","stretch","baseline"],description:"Cross-axis alignment of items"},justify:{control:"select",options:["start","center","end","between","around","evenly"],description:"Main-axis alignment of items"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Whether items should wrap"}}},r=({children:o,className:h=""})=>e.jsx("div",{className:`border-border bg-card rounded-lg border px-4 py-2 text-center ${h}`,children:o}),n={args:{direction:"vertical",gap:"md"},render:o=>e.jsxs(a,{...o,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},s={args:{direction:"vertical",gap:"lg"},render:o=>e.jsxs(a,{...o,children:[e.jsx(r,{children:"First"}),e.jsx(r,{children:"Second"}),e.jsx(r,{children:"Third"})]})},t={args:{direction:"horizontal",gap:"md"},render:o=>e.jsxs(a,{...o,children:[e.jsx(r,{children:"Left"}),e.jsx(r,{children:"Center"}),e.jsx(r,{children:"Right"})]})},c={args:{direction:"horizontal",gap:"md",align:"center",justify:"center"},render:o=>e.jsxs(a,{...o,className:"h-32 border border-dashed border-gray-300",children:[e.jsx(r,{children:"Centered"}),e.jsx(r,{children:"Items"})]})},i={args:{direction:"horizontal",justify:"between",align:"center"},render:o=>e.jsxs(a,{...o,className:"w-full",children:[e.jsx(r,{children:"Logo"}),e.jsxs(a,{direction:"horizontal",gap:"sm",children:[e.jsx(r,{children:"Nav 1"}),e.jsx(r,{children:"Nav 2"}),e.jsx(r,{children:"Nav 3"})]})]})},d={render:()=>e.jsxs(a,{gap:"xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="xs"'}),e.jsxs(a,{direction:"horizontal",gap:"xs",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="md"'}),e.jsxs(a,{direction:"horizontal",gap:"md",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:'gap="xl"'}),e.jsxs(a,{direction:"horizontal",gap:"xl",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]})]})},m={args:{direction:"horizontal",gap:"md",wrap:"wrap"},render:o=>e.jsxs(a,{...o,className:"max-w-xs",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"})]})},l={render:()=>e.jsxs(a,{gap:"lg",children:[e.jsx(r,{children:"Header"}),e.jsxs(a,{direction:"horizontal",gap:"lg",children:[e.jsxs(a,{gap:"md",className:"flex-1",children:[e.jsx(r,{children:"Main Content"}),e.jsx(r,{children:"More Content"})]}),e.jsxs(a,{gap:"md",className:"w-48",children:[e.jsx(r,{children:"Sidebar"}),e.jsx(r,{children:"Widget"})]})]}),e.jsx(r,{children:"Footer"})]})},x={render:()=>e.jsxs(a,{gap:"md",className:"max-w-md",children:[e.jsxs(a,{gap:"xs",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",className:"border-border rounded-md border px-3 py-2",placeholder:"you@example.com"})]}),e.jsxs(a,{gap:"xs",children:[e.jsx("label",{className:"text-sm font-medium",children:"Password"}),e.jsx("input",{type:"password",className:"border-border rounded-md border px-3 py-2",placeholder:"••••••••"})]}),e.jsxs(a,{direction:"horizontal",justify:"between",align:"center",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox"}),"Remember me"]}),e.jsx("a",{href:"#",className:"text-sm text-blue-600 hover:underline",children:"Forgot password?"})]}),e.jsx("button",{className:"bg-sunflower hover:bg-sunflower-hover rounded-md px-4 py-2 font-medium",children:"Sign in"})]})},p={render:()=>e.jsx(a,{asChild:!0,gap:"md",children:e.jsxs("nav",{"aria-label":"Main navigation",children:[e.jsx("a",{href:"#",className:"hover:underline",children:"Home"}),e.jsx("a",{href:"#",className:"hover:underline",children:"About"}),e.jsx("a",{href:"#",className:"hover:underline",children:"Contact"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'md'
  },
  render: args => <Stack {...args}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Stack>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'lg'
  },
  render: args => <Stack {...args}>
      <DemoBox>First</DemoBox>
      <DemoBox>Second</DemoBox>
      <DemoBox>Third</DemoBox>
    </Stack>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'md'
  },
  render: args => <Stack {...args}>
      <DemoBox>Left</DemoBox>
      <DemoBox>Center</DemoBox>
      <DemoBox>Right</DemoBox>
    </Stack>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'md',
    align: 'center',
    justify: 'center'
  },
  render: args => <Stack {...args} className="h-32 border border-dashed border-gray-300">
      <DemoBox>Centered</DemoBox>
      <DemoBox>Items</DemoBox>
    </Stack>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    justify: 'between',
    align: 'center'
  },
  render: args => <Stack {...args} className="w-full">
      <DemoBox>Logo</DemoBox>
      <Stack direction="horizontal" gap="sm">
        <DemoBox>Nav 1</DemoBox>
        <DemoBox>Nav 2</DemoBox>
        <DemoBox>Nav 3</DemoBox>
      </Stack>
    </Stack>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="xl">
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;xs&quot;</p>
        <Stack direction="horizontal" gap="xs">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;md&quot;</p>
        <Stack direction="horizontal" gap="md">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">gap=&quot;xl&quot;</p>
        <Stack direction="horizontal" gap="xl">
          <DemoBox>1</DemoBox>
          <DemoBox>2</DemoBox>
          <DemoBox>3</DemoBox>
        </Stack>
      </div>
    </Stack>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'md',
    wrap: 'wrap'
  },
  render: args => <Stack {...args} className="max-w-xs">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Stack>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="lg">
      <DemoBox>Header</DemoBox>
      <Stack direction="horizontal" gap="lg">
        <Stack gap="md" className="flex-1">
          <DemoBox>Main Content</DemoBox>
          <DemoBox>More Content</DemoBox>
        </Stack>
        <Stack gap="md" className="w-48">
          <DemoBox>Sidebar</DemoBox>
          <DemoBox>Widget</DemoBox>
        </Stack>
      </Stack>
      <DemoBox>Footer</DemoBox>
    </Stack>
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="md" className="max-w-md">
      <Stack gap="xs">
        <label className="text-sm font-medium">Email</label>
        <input type="email" className="border-border rounded-md border px-3 py-2" placeholder="you@example.com" />
      </Stack>
      <Stack gap="xs">
        <label className="text-sm font-medium">Password</label>
        <input type="password" className="border-border rounded-md border px-3 py-2" placeholder="••••••••" />
      </Stack>
      <Stack direction="horizontal" justify="between" align="center">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </Stack>
      <button className="bg-sunflower hover:bg-sunflower-hover rounded-md px-4 py-2 font-medium">
        Sign in
      </button>
    </Stack>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack asChild gap="md">
      <nav aria-label="Main navigation">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </Stack>
}`,...p.parameters?.docs?.source}}};const R=["Default","Vertical","Horizontal","CenteredHorizontal","SpaceBetween","WithDifferentGaps","Wrapping","NestedStacks","FormLayout","AsChildPolymorphism"];export{p as AsChildPolymorphism,c as CenteredHorizontal,n as Default,x as FormLayout,t as Horizontal,l as NestedStacks,i as SpaceBetween,s as Vertical,d as WithDifferentGaps,m as Wrapping,R as __namedExportsOrder,M as default};
