import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as h}from"./index-DZipNwpG.js";import{c as w}from"./index-DDA3KdpW.js";import{r as u}from"./iframe-C21gN9s7.js";import{c as f}from"./utils-ryREhF4q.js";import{L as r}from"./Link-DGbWMHCL.js";import{E as C}from"./EngrateLogo-D3K6JPK5.js";import"./index-DN91d1X5.js";import"./preload-helper-PPVm8Dsz.js";const S=w("w-full font-sans",{variants:{variant:{default:"border-border border-t bg-white",filled:"bg-main border-border border-t",dark:"bg-primary text-white"},size:{sm:"px-4 py-6",default:"px-6 py-10",lg:"px-8 py-16"}},defaultVariants:{variant:"default",size:"default"}}),c=u.forwardRef(({className:t,variant:n,size:s,asChild:l=!1,...d},b)=>{const N=l?h:"footer";return e.jsx(N,{ref:b,className:f(S({variant:n,size:s,className:t})),...d})});c.displayName="Footer";const x=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"div";return e.jsx(d,{ref:l,className:f("grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4",t),...s})});x.displayName="FooterContent";const a=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"div";return e.jsx(d,{ref:l,className:f("flex flex-col gap-3",t),...s})});a.displayName="FooterSection";const o=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"h3";return e.jsx(d,{ref:l,className:f("text-small font-medium",t),...s})});o.displayName="FooterHeading";const i=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"nav";return e.jsx(d,{ref:l,className:f("text-small text-secondary flex flex-col gap-2",t),...s})});i.displayName="FooterLinks";const g=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"div";return e.jsx(d,{ref:l,className:f("border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row",t),...s})});g.displayName="FooterBottom";const m=u.forwardRef(({className:t,asChild:n=!1,...s},l)=>{const d=n?h:"p";return e.jsx(d,{ref:l,className:f("text-small text-secondary",t),...s})});m.displayName="FooterCopyright";c.__docgenInfo={description:`Footer component for page footer content.
Supports multiple variants and sizes for different use cases.

@example
\`\`\`tsx
<Footer>
  <FooterContent>
    <FooterSection>
      <FooterHeading>Company</FooterHeading>
      <FooterLinks>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
      </FooterLinks>
    </FooterSection>
  </FooterContent>
  <FooterBottom>
    <FooterCopyright>© 2026 Engrate</FooterCopyright>
  </FooterBottom>
</Footer>
\`\`\``,methods:[],displayName:"Footer",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};x.__docgenInfo={description:`Main content container for footer sections.
Provides a responsive grid layout for footer columns.`,methods:[],displayName:"FooterContent",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};a.__docgenInfo={description:`A section/column within the footer content.
Typically contains a heading and a list of links.`,methods:[],displayName:"FooterSection",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};o.__docgenInfo={description:"Heading for a footer section.",methods:[],displayName:"FooterHeading",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:"Container for navigation links within a footer section.",methods:[],displayName:"FooterLinks",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};g.__docgenInfo={description:`Bottom section of the footer.
Typically contains copyright text and legal links.`,methods:[],displayName:"FooterBottom",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};m.__docgenInfo={description:"Copyright text component for the footer.",methods:[],displayName:"FooterCopyright",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};const _={title:"Navigation/Footer",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","dark"],description:"The visual style of the footer"},size:{control:"select",options:["sm","default","lg"],description:"The padding/spacing of the footer"}}},p={render:t=>e.jsxs(c,{...t,children:[e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(o,{children:"Product"}),e.jsxs(i,{"aria-label":"Product links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Features"}),e.jsx(r,{variant:"muted",href:"#",children:"Pricing"}),e.jsx(r,{variant:"muted",href:"#",children:"Integrations"}),e.jsx(r,{variant:"muted",href:"#",children:"API"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Company"}),e.jsxs(i,{"aria-label":"Company links",children:[e.jsx(r,{variant:"muted",href:"#",children:"About"}),e.jsx(r,{variant:"muted",href:"#",children:"Careers"}),e.jsx(r,{variant:"muted",href:"#",children:"Blog"}),e.jsx(r,{variant:"muted",href:"#",children:"Press"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Resources"}),e.jsxs(i,{"aria-label":"Resources links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Documentation"}),e.jsx(r,{variant:"muted",href:"#",children:"Help Center"}),e.jsx(r,{variant:"muted",href:"#",children:"Community"}),e.jsx(r,{variant:"muted",href:"#",children:"Status"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Legal"}),e.jsxs(i,{"aria-label":"Legal links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Privacy"}),e.jsx(r,{variant:"muted",href:"#",children:"Terms"}),e.jsx(r,{variant:"muted",href:"#",children:"Cookies"})]})]})]}),e.jsxs(g,{children:[e.jsx(m,{children:"© 2026 Engrate. All rights reserved."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"Twitter"}),e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"LinkedIn"}),e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"GitHub"})]})]})]}),args:{variant:"default",size:"default"}},F={render:t=>e.jsxs(c,{...t,children:[e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(o,{children:"Product"}),e.jsxs(i,{"aria-label":"Product links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Features"}),e.jsx(r,{variant:"muted",href:"#",children:"Pricing"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Company"}),e.jsxs(i,{"aria-label":"Company links",children:[e.jsx(r,{variant:"muted",href:"#",children:"About"}),e.jsx(r,{variant:"muted",href:"#",children:"Careers"})]})]})]}),e.jsx(g,{children:e.jsx(m,{children:"© 2026 Engrate"})})]}),args:{variant:"filled",size:"default"}},k={render:t=>e.jsxs(c,{...t,children:[e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(o,{className:"text-white",children:"Product"}),e.jsxs(i,{"aria-label":"Product links",className:"text-white/70",children:[e.jsx("a",{href:"#",className:"hover:text-white",children:"Features"}),e.jsx("a",{href:"#",className:"hover:text-white",children:"Pricing"}),e.jsx("a",{href:"#",className:"hover:text-white",children:"Integrations"})]})]}),e.jsxs(a,{children:[e.jsx(o,{className:"text-white",children:"Company"}),e.jsxs(i,{"aria-label":"Company links",className:"text-white/70",children:[e.jsx("a",{href:"#",className:"hover:text-white",children:"About"}),e.jsx("a",{href:"#",className:"hover:text-white",children:"Careers"}),e.jsx("a",{href:"#",className:"hover:text-white",children:"Blog"})]})]}),e.jsxs(a,{children:[e.jsx(o,{className:"text-white",children:"Legal"}),e.jsxs(i,{"aria-label":"Legal links",className:"text-white/70",children:[e.jsx("a",{href:"#",className:"hover:text-white",children:"Privacy"}),e.jsx("a",{href:"#",className:"hover:text-white",children:"Terms"})]})]})]}),e.jsx(g,{className:"border-white/20",children:e.jsx(m,{className:"text-white/60",children:"© 2026 Engrate. All rights reserved."})})]}),args:{variant:"dark",size:"default"}},v={render:t=>e.jsx(c,{...t,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(m,{children:"© 2026 Engrate"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"Privacy"}),e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"Terms"})]})]})}),args:{variant:"default",size:"sm"}},L={render:t=>e.jsxs(c,{...t,children:[e.jsxs("div",{className:"mb-8",children:[e.jsx(C,{size:"lg"}),e.jsx("p",{className:"text-secondary mt-3 max-w-sm text-sm",children:"Building the future of energy data. Making the transition to sustainability faster, more democratic, and more profitable."})]}),e.jsxs(x,{children:[e.jsxs(a,{children:[e.jsx(o,{children:"Product"}),e.jsxs(i,{"aria-label":"Product links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Features"}),e.jsx(r,{variant:"muted",href:"#",children:"Pricing"}),e.jsx(r,{variant:"muted",href:"#",children:"Integrations"}),e.jsx(r,{variant:"muted",href:"#",children:"API"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Company"}),e.jsxs(i,{"aria-label":"Company links",children:[e.jsx(r,{variant:"muted",href:"#",children:"About"}),e.jsx(r,{variant:"muted",href:"#",children:"Careers"}),e.jsx(r,{variant:"muted",href:"#",children:"Blog"}),e.jsx(r,{variant:"muted",href:"#",children:"Press"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Resources"}),e.jsxs(i,{"aria-label":"Resources links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Documentation"}),e.jsx(r,{variant:"muted",href:"#",children:"Help Center"}),e.jsx(r,{variant:"muted",href:"#",children:"Community"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Legal"}),e.jsxs(i,{"aria-label":"Legal links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Privacy Policy"}),e.jsx(r,{variant:"muted",href:"#",children:"Terms of Service"}),e.jsx(r,{variant:"muted",href:"#",children:"Cookie Policy"})]})]})]}),e.jsxs(g,{children:[e.jsx(m,{children:"© 2026 Engrate. All rights reserved."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"Twitter"}),e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"LinkedIn"}),e.jsx(r,{variant:"muted",size:"sm",href:"#",children:"GitHub"})]})]})]}),args:{variant:"default",size:"lg"}},j={render:t=>e.jsxs(c,{...t,children:[e.jsxs(x,{className:"lg:grid-cols-5",children:[e.jsxs(a,{className:"col-span-2",children:[e.jsx(C,{size:"md"}),e.jsx("p",{className:"text-secondary max-w-xs text-sm",children:"The global standard for energy data."})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Product"}),e.jsxs(i,{"aria-label":"Product links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Features"}),e.jsx(r,{variant:"muted",href:"#",children:"Pricing"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Company"}),e.jsxs(i,{"aria-label":"Company links",children:[e.jsx(r,{variant:"muted",href:"#",children:"About"}),e.jsx(r,{variant:"muted",href:"#",children:"Careers"})]})]}),e.jsxs(a,{children:[e.jsx(o,{children:"Legal"}),e.jsxs(i,{"aria-label":"Legal links",children:[e.jsx(r,{variant:"muted",href:"#",children:"Privacy"}),e.jsx(r,{variant:"muted",href:"#",children:"Terms"})]})]})]}),e.jsx(g,{children:e.jsx(m,{children:"© 2026 Engrate"})})]}),args:{variant:"default",size:"default"}},y={render:t=>e.jsx(c,{...t,children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx(C,{size:"sm"}),e.jsx(m,{children:"© 2026 Engrate. All rights reserved."})]})}),args:{variant:"default",size:"sm"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
            <Link variant="muted" href="#">
              Integrations
            </Link>
            <Link variant="muted" href="#">
              API
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
            <Link variant="muted" href="#">
              Blog
            </Link>
            <Link variant="muted" href="#">
              Press
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks aria-label="Resources links">
            <Link variant="muted" href="#">
              Documentation
            </Link>
            <Link variant="muted" href="#">
              Help Center
            </Link>
            <Link variant="muted" href="#">
              Community
            </Link>
            <Link variant="muted" href="#">
              Status
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy
            </Link>
            <Link variant="muted" href="#">
              Terms
            </Link>
            <Link variant="muted" href="#">
              Cookies
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Twitter
          </Link>
          <Link variant="muted" size="sm" href="#">
            LinkedIn
          </Link>
          <Link variant="muted" size="sm" href="#">
            GitHub
          </Link>
        </div>
      </FooterBottom>
    </Footer>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
      </FooterBottom>
    </Footer>,
  args: {
    variant: 'filled',
    size: 'default'
  }
}`,...F.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <FooterContent>
        <FooterSection>
          <FooterHeading className="text-white">Product</FooterHeading>
          <FooterLinks aria-label="Product links" className="text-white/70">
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Integrations
            </a>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading className="text-white">Company</FooterHeading>
          <FooterLinks aria-label="Company links" className="text-white/70">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Careers
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading className="text-white">Legal</FooterHeading>
          <FooterLinks aria-label="Legal links" className="text-white/70">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom className="border-white/20">
        <FooterCopyright className="text-white/60">
          © 2026 Engrate. All rights reserved.
        </FooterCopyright>
      </FooterBottom>
    </Footer>,
  args: {
    variant: 'dark',
    size: 'default'
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <div className="flex items-center justify-between">
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Privacy
          </Link>
          <Link variant="muted" size="sm" href="#">
            Terms
          </Link>
        </div>
      </div>
    </Footer>,
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <div className="mb-8">
        <EngrateLogo size="lg" />
        <p className="text-secondary mt-3 max-w-sm text-sm">
          Building the future of energy data. Making the transition to
          sustainability faster, more democratic, and more profitable.
        </p>
      </div>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
            <Link variant="muted" href="#">
              Integrations
            </Link>
            <Link variant="muted" href="#">
              API
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
            <Link variant="muted" href="#">
              Blog
            </Link>
            <Link variant="muted" href="#">
              Press
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks aria-label="Resources links">
            <Link variant="muted" href="#">
              Documentation
            </Link>
            <Link variant="muted" href="#">
              Help Center
            </Link>
            <Link variant="muted" href="#">
              Community
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy Policy
            </Link>
            <Link variant="muted" href="#">
              Terms of Service
            </Link>
            <Link variant="muted" href="#">
              Cookie Policy
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
        <div className="flex gap-4">
          <Link variant="muted" size="sm" href="#">
            Twitter
          </Link>
          <Link variant="muted" size="sm" href="#">
            LinkedIn
          </Link>
          <Link variant="muted" size="sm" href="#">
            GitHub
          </Link>
        </div>
      </FooterBottom>
    </Footer>,
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <FooterContent className="lg:grid-cols-5">
        <FooterSection className="col-span-2">
          <EngrateLogo size="md" />
          <p className="text-secondary max-w-xs text-sm">
            The global standard for energy data.
          </p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Product</FooterHeading>
          <FooterLinks aria-label="Product links">
            <Link variant="muted" href="#">
              Features
            </Link>
            <Link variant="muted" href="#">
              Pricing
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks aria-label="Company links">
            <Link variant="muted" href="#">
              About
            </Link>
            <Link variant="muted" href="#">
              Careers
            </Link>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Legal</FooterHeading>
          <FooterLinks aria-label="Legal links">
            <Link variant="muted" href="#">
              Privacy
            </Link>
            <Link variant="muted" href="#">
              Terms
            </Link>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterCopyright>© 2026 Engrate</FooterCopyright>
      </FooterBottom>
    </Footer>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <EngrateLogo size="sm" />
        <FooterCopyright>© 2026 Engrate. All rights reserved.</FooterCopyright>
      </div>
    </Footer>,
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}};const V=["Default","Filled","Dark","Small","Large","WithLogo","Minimal"];export{k as Dark,p as Default,F as Filled,L as Large,y as Minimal,v as Small,j as WithLogo,V as __namedExportsOrder,_ as default};
