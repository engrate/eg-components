import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./Text-BGvQwIpo.js";import"./index-Bfo6Zp52.js";import"./iframe-2V79pbFo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj_3WkyM.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";const f={title:"Typography/Text",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["lead","semi-lead","body-lg","body","descriptive","label","label-sm"],description:"The visual style variant of the text"},weight:{control:"select",options:["regular","medium"],description:"Font weight (medium only for emphasis in lead/semi-lead)"},as:{control:"select",options:["p","span","div","label"],description:"The HTML element to render"},asChild:{control:"boolean",description:"Render as a child element using Radix Slot"}}},r={args:{children:"The quick brown fox jumps over the lazy dog. This is standard body text used for most content throughout the application.",variant:"body"}},t={args:{children:"Lead text is used for introductory paragraphs and important statements that need extra emphasis.",variant:"lead"}},n={args:{children:"Lead text with medium weight for additional emphasis on key messages.",variant:"lead",weight:"medium"}},s={args:{children:"Semi-lead text bridges the gap between lead and body text, perfect for secondary introductions.",variant:"semi-lead"}},i={args:{children:"Large body text provides slightly more prominence than standard body text while remaining readable for longer content.",variant:"body-lg"}},o={args:{children:"Body text is the default text style used for paragraphs and general content throughout the application.",variant:"body"}},d={args:{children:"Descriptive text is smaller and used for supplementary information, captions, and metadata.",variant:"descriptive"}},l={args:{children:"Form Label",variant:"label"}},c={args:{children:"SMALL LABEL",variant:"label-sm"}},m={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{variant:"lead",children:"Lead — Primary introductory text"}),e.jsx(a,{variant:"semi-lead",children:"Semi-lead — Secondary introductory text"}),e.jsx(a,{variant:"body-lg",children:"Body Large — Slightly emphasized body text"}),e.jsx(a,{variant:"body",children:"Body — Standard paragraph text"}),e.jsx(a,{variant:"descriptive",children:"Descriptive — Captions and metadata"}),e.jsx(a,{variant:"label",children:"Label — Form labels and small headings"}),e.jsx(a,{variant:"label-sm",children:"LABEL SMALL — TINY LABELS"})]})},p={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-8",children:[e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Lead — Work Sans, 20pt, -2% tracking, Primary color"}),e.jsx(a,{variant:"lead",children:"Engrate is revolutionizing the way we think about sustainable energy solutions for homes and businesses across the nation."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Lead (Medium) — Work Sans, 20pt, -2% tracking, Medium weight"}),e.jsx(a,{variant:"lead",weight:"medium",children:"Key message with emphasis for important announcements."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Semi-Lead — Work Sans, 15pt, 0% tracking, Secondary color"}),e.jsx(a,{variant:"semi-lead",children:"Our team of experts works closely with you to design and install the perfect solar solution for your needs."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Body Large — Work Sans, 14pt, +1% tracking, Secondary color"}),e.jsx(a,{variant:"body-lg",children:"We offer comprehensive installation services including site assessment, system design, permitting, and ongoing maintenance support."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Body — Work Sans, 16pt, 0% tracking, Secondary color"}),e.jsx(a,{variant:"body",children:"Standard body text for general content. This is the most commonly used text style throughout the application and should be used for paragraphs, descriptions, and most written content."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Descriptive — Work Sans, 12pt, +4% tracking, Secondary color"}),e.jsx(a,{variant:"descriptive",children:"Photo credit: Solar installation at Johnson residence, completed March 2024. All rights reserved."})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Label — Work Sans, 12pt, +2% tracking, Tertiary color"}),e.jsx(a,{variant:"label",children:"Email Address"})]}),e.jsxs("div",{className:"border-border border-b pb-4",children:[e.jsx(a,{variant:"label",className:"mb-2",children:"Label Small — Work Sans, 10pt, +14% tracking, Tertiary color"}),e.jsx(a,{variant:"label-sm",children:"CATEGORY TAG"})]})]})},b={render:()=>e.jsxs(a,{variant:"body",children:["This is a paragraph with"," ",e.jsx(a,{variant:"lead",weight:"medium",as:"span",children:"emphasized inline text"})," ","in the middle of it."]})},h={render:()=>e.jsx(a,{variant:"body",asChild:!0,children:e.jsx("a",{href:"#example",className:"hover:text-primary underline",children:"This entire text is a clickable link"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog. This is standard body text used for most content throughout the application.',
    variant: 'body'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lead text is used for introductory paragraphs and important statements that need extra emphasis.',
    variant: 'lead'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lead text with medium weight for additional emphasis on key messages.',
    variant: 'lead',
    weight: 'medium'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Semi-lead text bridges the gap between lead and body text, perfect for secondary introductions.',
    variant: 'semi-lead'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large body text provides slightly more prominence than standard body text while remaining readable for longer content.',
    variant: 'body-lg'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Body text is the default text style used for paragraphs and general content throughout the application.',
    variant: 'body'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Descriptive text is smaller and used for supplementary information, captions, and metadata.',
    variant: 'descriptive'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Form Label',
    variant: 'label'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'SMALL LABEL',
    variant: 'label-sm'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Text variant="lead">Lead — Primary introductory text</Text>
      <Text variant="semi-lead">Semi-lead — Secondary introductory text</Text>
      <Text variant="body-lg">Body Large — Slightly emphasized body text</Text>
      <Text variant="body">Body — Standard paragraph text</Text>
      <Text variant="descriptive">Descriptive — Captions and metadata</Text>
      <Text variant="label">Label — Form labels and small headings</Text>
      <Text variant="label-sm">LABEL SMALL — TINY LABELS</Text>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-8">
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Lead — Work Sans, 20pt, -2% tracking, Primary color
        </Text>
        <Text variant="lead">
          Engrate is revolutionizing the way we think about sustainable energy
          solutions for homes and businesses across the nation.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Lead (Medium) — Work Sans, 20pt, -2% tracking, Medium weight
        </Text>
        <Text variant="lead" weight="medium">
          Key message with emphasis for important announcements.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Semi-Lead — Work Sans, 15pt, 0% tracking, Secondary color
        </Text>
        <Text variant="semi-lead">
          Our team of experts works closely with you to design and install the
          perfect solar solution for your needs.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Body Large — Work Sans, 14pt, +1% tracking, Secondary color
        </Text>
        <Text variant="body-lg">
          We offer comprehensive installation services including site
          assessment, system design, permitting, and ongoing maintenance
          support.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Body — Work Sans, 16pt, 0% tracking, Secondary color
        </Text>
        <Text variant="body">
          Standard body text for general content. This is the most commonly used
          text style throughout the application and should be used for
          paragraphs, descriptions, and most written content.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Descriptive — Work Sans, 12pt, +4% tracking, Secondary color
        </Text>
        <Text variant="descriptive">
          Photo credit: Solar installation at Johnson residence, completed March
          2024. All rights reserved.
        </Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Label — Work Sans, 12pt, +2% tracking, Tertiary color
        </Text>
        <Text variant="label">Email Address</Text>
      </div>
      <div className="border-border border-b pb-4">
        <Text variant="label" className="mb-2">
          Label Small — Work Sans, 10pt, +14% tracking, Tertiary color
        </Text>
        <Text variant="label-sm">CATEGORY TAG</Text>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Text variant="body">
      This is a paragraph with{' '}
      <Text variant="lead" weight="medium" as="span">
        emphasized inline text
      </Text>{' '}
      in the middle of it.
    </Text>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Text variant="body" asChild>
      <a href="#example" className="hover:text-primary underline">
        This entire text is a clickable link
      </a>
    </Text>
}`,...h.parameters?.docs?.source}}};const k=["Default","Lead","LeadWithEmphasis","SemiLead","BodyLarge","Body","Descriptive","Label","LabelSmall","AllVariants","TypographyScale","AsSpan","AsLink"];export{m as AllVariants,h as AsLink,b as AsSpan,o as Body,i as BodyLarge,r as Default,d as Descriptive,l as Label,c as LabelSmall,t as Lead,n as LeadWithEmphasis,s as SemiLead,p as TypographyScale,k as __namedExportsOrder,f as default};
