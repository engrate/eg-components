import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-DDA3KdpW.js";import{r as x}from"./iframe-CVX8giR0.js";import{c as y}from"./utils-ryREhF4q.js";import"./preload-helper-PPVm8Dsz.js";const g=h("bg-border shrink-0",{variants:{orientation:{horizontal:"h-px w-full",vertical:"h-full w-px"}},defaultVariants:{orientation:"horizontal"}}),a=x.forwardRef(({className:r,orientation:p="horizontal",decorative:l=!0,...v},u)=>{const m=p??"horizontal";return e.jsx("div",{ref:u,role:l?"none":"separator","aria-orientation":l?void 0:m,className:y(g({orientation:m,className:r})),...v})});a.displayName="Divider";a.__docgenInfo={description:`Divider component for visually separating content.
Supports both horizontal and vertical orientations.

@example
\`\`\`tsx
// Horizontal divider (default)
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// With custom styling
<Divider className="my-4" />
\`\`\``,methods:[],displayName:"Divider",props:{decorative:{required:!1,tsType:{name:"boolean"},description:`Whether the divider is decorative only.
When true, the divider will be hidden from screen readers.
@default true`,defaultValue:{value:"true",computed:!1}},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}},composes:["VariantProps"]};const b={title:"Misc/Divider",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the divider"},decorative:{control:"boolean",description:"When true, the divider is purely visual and hidden from screen readers"}}},s={args:{},decorators:[r=>e.jsx("div",{className:"w-64",children:e.jsx(r,{})})]},t={args:{orientation:"horizontal"},decorators:[r=>e.jsx("div",{className:"w-64",children:e.jsx(r,{})})]},o={args:{orientation:"vertical"},decorators:[r=>e.jsx("div",{className:"h-16",children:e.jsx(r,{})})]},i={args:{},render:()=>e.jsxs("div",{className:"w-80 space-y-4",children:[e.jsx("p",{className:"text-primary",children:"This is some content above the divider. It provides context and information."}),e.jsx(a,{}),e.jsx("p",{className:"text-primary",children:"This is some content below the divider. It is visually separated from the above."})]})},n={args:{orientation:"vertical"},render:()=>e.jsxs("div",{className:"flex h-8 items-center gap-4",children:[e.jsx("span",{className:"text-primary",children:"Home"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{className:"text-primary",children:"Products"}),e.jsx(a,{orientation:"vertical"}),e.jsx("span",{className:"text-primary",children:"About"})]})},c={args:{className:"my-8"},render:r=>e.jsxs("div",{className:"w-80",children:[e.jsx("p",{className:"text-primary",children:"Content with extra spacing."}),e.jsx(a,{...r}),e.jsx("p",{className:"text-primary",children:"More content below."})]})},d={args:{decorative:!1},decorators:[r=>e.jsx("div",{className:"w-64",children:e.jsx(r,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div className="h-16">
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-80 space-y-4">
      <p className="text-primary">
        This is some content above the divider. It provides context and
        information.
      </p>
      <Divider />
      <p className="text-primary">
        This is some content below the divider. It is visually separated from
        the above.
      </p>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: () => <div className="flex h-8 items-center gap-4">
      <span className="text-primary">Home</span>
      <Divider orientation="vertical" />
      <span className="text-primary">Products</span>
      <Divider orientation="vertical" />
      <span className="text-primary">About</span>
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'my-8'
  },
  render: args => <div className="w-80">
      <p className="text-primary">Content with extra spacing.</p>
      <Divider {...args} />
      <p className="text-primary">More content below.</p>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    decorative: false
  },
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};const D=["Default","Horizontal","Vertical","InContent","VerticalInFlex","WithCustomSpacing","SemanticSeparator"];export{s as Default,t as Horizontal,i as InContent,d as SemanticSeparator,o as Vertical,n as VerticalInFlex,c as WithCustomSpacing,D as __namedExportsOrder,b as default};
