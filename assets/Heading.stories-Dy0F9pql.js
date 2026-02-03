import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as r}from"./Heading-2hpPx8M9.js";import{E as p}from"./Eyebrow-DvgvqLg6.js";import"./index-BkdQMMD_.js";import"./iframe-BaJaLkA7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnR8uzlM.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";const k={title:"Typography/Heading",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{level:{control:"select",options:["hero","h1","h2","h3","h4"],description:"The visual and semantic level of the heading"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Override the HTML element for semantic flexibility"},asChild:{control:"boolean",description:"Render as a child element using Radix Slot"}}},a={args:{children:"The quick brown fox jumps over the lazy dog",level:"h1"}},n={args:{children:"Hero Heading",level:"hero"}},s={args:{children:"Heading Level 1",level:"h1"}},l={args:{children:"Heading Level 2",level:"h2"}},i={args:{children:"Heading Level 3",level:"h3"}},t={args:{children:"Heading Level 4",level:"h4"}},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{level:"hero",children:"Hero — Libre Baskerville (60pt+)"}),e.jsx(r,{level:"h1",children:"Heading 1 — Work Sans (40pt)"}),e.jsx(r,{level:"h2",children:"Heading 2 — Work Sans (30pt)"}),e.jsx(r,{level:"h3",children:"Heading 3 — Work Sans (25pt)"}),e.jsx(r,{level:"h4",children:"Heading 4 — Work Sans (25pt, lighter tracking)"})]})},d={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{children:"Hero styling with h2 semantics (for when h1 is used elsewhere):"}),e.jsx(r,{level:"hero",as:"h2",children:"Visually Hero, Semantically H2"})]})},c={render:()=>e.jsx(r,{level:"h2",asChild:!0,children:e.jsx("a",{href:"#example",className:"hover:underline",children:"Clickable Heading Link"})})},h={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx("p",{className:"text-label text-tertiary mb-2",children:"Hero — Libre Baskerville, 60pt, -2% tracking"}),e.jsx(r,{level:"hero",children:"Building the Future of Sustainable Energy"})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx("p",{className:"text-label text-tertiary mb-2",children:"H1 — Work Sans, 40pt, -4% tracking"}),e.jsx(r,{level:"h1",children:"Solar Installation Services"})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx("p",{className:"text-label text-tertiary mb-2",children:"H2 — Work Sans, 30pt, -3% tracking"}),e.jsx(r,{level:"h2",children:"Why Choose Engrate?"})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx("p",{className:"text-label text-tertiary mb-2",children:"H3 — Work Sans, 25pt, -2% tracking"}),e.jsx(r,{level:"h3",children:"Our Commitment to Quality"})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx("p",{className:"text-label text-tertiary mb-2",children:"H4 — Work Sans, 25pt, -1% tracking"}),e.jsx(r,{level:"h4",children:"Technical Specifications"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 'h1'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Hero Heading',
    level: 'hero'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading Level 1',
    level: 'h1'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading Level 2',
    level: 'h2'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading Level 3',
    level: 'h3'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading Level 4',
    level: 'h4'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Heading level="hero">Hero — Libre Baskerville (60pt+)</Heading>
      <Heading level="h1">Heading 1 — Work Sans (40pt)</Heading>
      <Heading level="h2">Heading 2 — Work Sans (30pt)</Heading>
      <Heading level="h3">Heading 3 — Work Sans (25pt)</Heading>
      <Heading level="h4">
        Heading 4 — Work Sans (25pt, lighter tracking)
      </Heading>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Eyebrow>
        Hero styling with h2 semantics (for when h1 is used elsewhere):
      </Eyebrow>
      <Heading level="hero" as="h2">
        Visually Hero, Semantically H2
      </Heading>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Heading level="h2" asChild>
      <a href="#example" className="hover:underline">
        Clickable Heading Link
      </a>
    </Heading>
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          Hero — Libre Baskerville, 60pt, -2% tracking
        </p>
        <Heading level="hero">
          Building the Future of Sustainable Energy
        </Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H1 — Work Sans, 40pt, -4% tracking
        </p>
        <Heading level="h1">Solar Installation Services</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H2 — Work Sans, 30pt, -3% tracking
        </p>
        <Heading level="h2">Why Choose Engrate?</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H3 — Work Sans, 25pt, -2% tracking
        </p>
        <Heading level="h3">Our Commitment to Quality</Heading>
      </div>
      <div className="border-border border-b pb-4">
        <p className="text-label text-tertiary mb-2">
          H4 — Work Sans, 25pt, -1% tracking
        </p>
        <Heading level="h4">Technical Specifications</Heading>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};const j=["Default","Hero","H1","H2","H3","H4","AllLevels","WithSemanticOverride","AsLink","TypographyScale"];export{o as AllLevels,c as AsLink,a as Default,s as H1,l as H2,i as H3,t as H4,n as Hero,h as TypographyScale,d as WithSemanticOverride,j as __namedExportsOrder,k as default};
