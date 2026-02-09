import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r}from"./Link-HglUdxw0.js";import"./index-CHLrYd0d.js";import"./iframe-O2QU597t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcpFsyr5.js";import"./index-DDA3KdpW.js";import"./utils-ryREhF4q.js";const v={title:"Navigation/Link",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","muted","nav"],description:"The visual style of the link"},size:{control:"select",options:["sm","default","lg"],description:"The size of the link"},href:{control:"text",description:"The URL the link points to"},asChild:{control:"boolean",description:"Render as a child component (e.g., for Next.js Link)"}}},a={args:{href:"#",children:"Default Link",variant:"default"}},n={args:{href:"#",children:"Muted Link",variant:"muted"}},s={args:{href:"#",children:"Navigation Link",variant:"nav"}},t={args:{href:"#",children:"Small Link",size:"sm"}},i={args:{href:"#",children:"Large Link",size:"lg"}},l={args:{href:"https://example.com",children:"External Link",target:"_blank",rel:"noopener noreferrer"}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{href:"#",variant:"default",children:"Default"}),e.jsx(r,{href:"#",variant:"muted",children:"Muted"}),e.jsx(r,{href:"#",variant:"nav",children:"Navigation"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{href:"#",size:"sm",children:"Small"}),e.jsx(r,{href:"#",size:"default",children:"Default"}),e.jsx(r,{href:"#",size:"lg",children:"Large"})]})]})]})},c={render:()=>e.jsxs("p",{className:"text-body text-primary max-w-md",children:["This is a paragraph with an ",e.jsx(r,{href:"#",children:"inline link"})," that flows naturally with the text. Links can also be"," ",e.jsx(r,{href:"#",variant:"muted",children:"muted"})," ","for less emphasis."]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Default Link',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Muted Link',
    variant: 'muted'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Navigation Link',
    variant: 'nav'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Small Link',
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Large Link',
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'External Link',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex items-center gap-6">
          <Link href="#" variant="default">
            Default
          </Link>
          <Link href="#" variant="muted">
            Muted
          </Link>
          <Link href="#" variant="nav">
            Navigation
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex items-center gap-6">
          <Link href="#" size="sm">
            Small
          </Link>
          <Link href="#" size="default">
            Default
          </Link>
          <Link href="#" size="lg">
            Large
          </Link>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-body text-primary max-w-md">
      This is a paragraph with an <Link href="#">inline link</Link> that flows
      naturally with the text. Links can also be{' '}
      <Link href="#" variant="muted">
        muted
      </Link>{' '}
      for less emphasis.
    </p>
}`,...c.parameters?.docs?.source}}};const L=["Default","Muted","Nav","Small","Large","ExternalLink","AllVariants","InParagraph"];export{o as AllVariants,a as Default,l as ExternalLink,c as InParagraph,i as Large,n as Muted,s as Nav,t as Small,L as __namedExportsOrder,v as default};
