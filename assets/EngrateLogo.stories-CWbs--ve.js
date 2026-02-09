import{j as e}from"./jsx-runtime-u17CrQMm.js";import{E as s}from"./EngrateLogo-Det0t1KR.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";import"./iframe-O2QU597t.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Misc/EngrateLogo",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"The size of the logo"},compact:{control:"object",description:"Show only the icon without the wordmark. Supports responsive values like `{ base: true, md: false }`"}}},a={},r={args:{size:"xs"}},o={args:{size:"sm"}},t={args:{size:"md"}},c={args:{size:"lg"}},n={args:{size:"xl"}},l={args:{compact:!0}},m={args:{compact:!0,size:"lg"}},i={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"xs"}),e.jsx("span",{className:"text-small text-secondary",children:"xs"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-small text-secondary",children:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-small text-secondary",children:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-small text-secondary",children:"lg"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"xl"}),e.jsx("span",{className:"text-small text-secondary",children:"xl"})]})]})},p={render:()=>e.jsx("div",{className:"bg-contrast rounded p-8",children:e.jsx(s,{size:"lg"})})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg"}),e.jsx("span",{className:"text-small text-secondary",children:"Full"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"lg",compact:!0}),e.jsx("span",{className:"text-small text-secondary",children:"Compact"})]})]})},g={args:{size:"lg",compact:{base:!0,md:!1}},parameters:{docs:{description:{story:"Shows compact (icon only) on small screens, full logo on medium and up. Resize the viewport to see the change."}}}},x={args:{size:"lg",compact:{base:!1,lg:!0}},parameters:{docs:{description:{story:"Shows full logo on small/medium screens, compact on large and up."}}}},u={args:{size:"lg",className:"opacity-50"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="xs" />
        <span className="text-small text-secondary">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="sm" />
        <span className="text-small text-secondary">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="md" />
        <span className="text-small text-secondary">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" />
        <span className="text-small text-secondary">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="xl" />
        <span className="text-small text-secondary">xl</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-contrast rounded p-8">
      <EngrateLogo size="lg" />
    </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" />
        <span className="text-small text-secondary">Full</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EngrateLogo size="lg" compact />
        <span className="text-small text-secondary">Compact</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    compact: {
      base: true,
      md: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows compact (icon only) on small screens, full logo on medium and up. Resize the viewport to see the change.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    compact: {
      base: false,
      lg: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows full logo on small/medium screens, compact on large and up.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    className: 'opacity-50'
  }
}`,...u.parameters?.docs?.source}}};const y=["Default","ExtraSmall","Small","Medium","Large","ExtraLarge","Compact","CompactLarge","AllSizes","OnDarkBackground","CompactComparison","ResponsiveCompact","ResponsiveCompactReverse","WithCustomClassName"];export{i as AllSizes,l as Compact,d as CompactComparison,m as CompactLarge,a as Default,n as ExtraLarge,r as ExtraSmall,c as Large,t as Medium,p as OnDarkBackground,g as ResponsiveCompact,x as ResponsiveCompactReverse,o as Small,u as WithCustomClassName,y as __namedExportsOrder,S as default};
