import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as v}from"./index-BDOiGxbi.js";import{c as g}from"./index-DDA3KdpW.js";import{r as k}from"./iframe-CwYTgCCY.js";import{c as L}from"./utils-ryREhF4q.js";import"./index-DjNH07ic.js";import"./preload-helper-PPVm8Dsz.js";const N=g("focus-visible:ring-sunflower inline-flex items-center font-sans transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{variant:{default:"text-primary hover:text-secondary underline underline-offset-4",muted:"text-secondary hover:text-primary underline underline-offset-4",nav:"text-primary hover:text-secondary no-underline hover:underline hover:underline-offset-4"},size:{sm:"text-small",default:"text-body",lg:"text-body font-medium"}},defaultVariants:{variant:"default",size:"default"}}),n=k.forwardRef(({className:d,variant:m,size:f,asChild:h=!1,...u},p)=>{const x=h?v:"a";return e.jsx(x,{className:L(N({variant:m,size:f,className:d})),ref:p,...u})});n.displayName="Link";n.__docgenInfo={description:`Link component for navigation following Engrate brand guidelines.
Supports multiple variants for different use cases.

@example
\`\`\`tsx
<Link href="/about">About us</Link>
<Link href="/docs" variant="nav">Documentation</Link>
<Link asChild><NextLink href="/page">Next.js Link</NextLink></Link>
\`\`\``,methods:[],displayName:"Link",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const E={title:"Misc/Link",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","muted","nav"],description:"The visual style of the link"},size:{control:"select",options:["sm","default","lg"],description:"The size of the link"},href:{control:"text",description:"The URL the link points to"},asChild:{control:"boolean",description:"Render as a child component (e.g., for Next.js Link)"}}},r={args:{href:"#",children:"Default Link",variant:"default"}},a={args:{href:"#",children:"Muted Link",variant:"muted"}},s={args:{href:"#",children:"Navigation Link",variant:"nav"}},t={args:{href:"#",children:"Small Link",size:"sm"}},i={args:{href:"#",children:"Large Link",size:"lg"}},o={args:{href:"https://example.com",children:"External Link",target:"_blank",rel:"noopener noreferrer"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(n,{href:"#",variant:"default",children:"Default"}),e.jsx(n,{href:"#",variant:"muted",children:"Muted"}),e.jsx(n,{href:"#",variant:"nav",children:"Navigation"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(n,{href:"#",size:"sm",children:"Small"}),e.jsx(n,{href:"#",size:"default",children:"Default"}),e.jsx(n,{href:"#",size:"lg",children:"Large"})]})]})]})},c={render:()=>e.jsxs("p",{className:"text-body text-primary max-w-md",children:["This is a paragraph with an ",e.jsx(n,{href:"#",children:"inline link"})," that flows naturally with the text. Links can also be"," ",e.jsx(n,{href:"#",variant:"muted",children:"muted"})," ","for less emphasis."]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Default Link',
    variant: 'default'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Muted Link',
    variant: 'muted'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'External Link',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-body text-primary max-w-md">
      This is a paragraph with an <Link href="#">inline link</Link> that flows
      naturally with the text. Links can also be{' '}
      <Link href="#" variant="muted">
        muted
      </Link>{' '}
      for less emphasis.
    </p>
}`,...c.parameters?.docs?.source}}};const V=["Default","Muted","Nav","Small","Large","ExternalLink","AllVariants","InParagraph"];export{l as AllVariants,r as Default,o as ExternalLink,c as InParagraph,i as Large,a as Muted,s as Nav,t as Small,V as __namedExportsOrder,E as default};
