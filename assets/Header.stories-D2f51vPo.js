import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as k}from"./index-ccsgLY5a.js";import{c as A}from"./index-HTk8j2sO.js";import{r as b}from"./iframe-C6CMsfN0.js";import{c as z}from"./utils-kmX6UHYG.js";import{E as l}from"./EngrateLogo-DxX-FD26.js";import{L as r}from"./Link-jtljoiSd.js";import{B as s}from"./Button-DruFPOhL.js";import"./index-DtQ62xPZ.js";import"./preload-helper-PPVm8Dsz.js";const B=A("flex w-full items-center justify-between font-sans",{variants:{variant:{default:"border-border border-b bg-white",transparent:"bg-transparent",filled:"bg-main border-border border-b"},size:{sm:"h-12 px-4",default:"h-16 px-6",lg:"h-20 px-8"},sticky:{true:"sticky top-0 z-50",false:""}},defaultVariants:{variant:"default",size:"default",sticky:!1}}),n=b.forwardRef(({className:a,variant:c,size:o,sticky:v,asChild:h=!1,...N},S)=>{const y=h?k:"header";return e.jsx(y,{ref:S,className:z(B({variant:c,size:o,sticky:v,className:a})),...N})});n.displayName="Header";const i=b.forwardRef(({className:a,asChild:c=!1,...o},v)=>{const h=c?k:"div";return e.jsx(h,{ref:v,className:z("flex shrink-0 items-center",a),...o})});i.displayName="HeaderLogo";const d=b.forwardRef(({className:a,asChild:c=!1,...o},v)=>{const h=c?k:"nav";return e.jsx(h,{ref:v,className:z("flex items-center gap-6",a),...o})});d.displayName="HeaderNav";const t=b.forwardRef(({className:a,asChild:c=!1,...o},v)=>{const h=c?k:"div";return e.jsx(h,{ref:v,className:z("flex shrink-0 items-center gap-3",a),...o})});t.displayName="HeaderActions";n.__docgenInfo={description:`Header component for page navigation and branding.
Supports multiple variants and sticky positioning.

@example
\`\`\`tsx
<Header>
  <HeaderLogo>
    <EngrateLogo />
  </HeaderLogo>
  <HeaderNav>
    <Link variant="nav" href="/about">About</Link>
  </HeaderNav>
  <HeaderActions>
    <Button>Sign In</Button>
  </HeaderActions>
</Header>
\`\`\``,methods:[],displayName:"Header",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};i.__docgenInfo={description:`Container for the logo within the Header.
Typically wraps an EngrateLogo or custom logo component.`,methods:[],displayName:"HeaderLogo",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};d.__docgenInfo={description:`Navigation container within the Header.
Wraps navigation links in a flex container.`,methods:[],displayName:"HeaderNav",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};t.__docgenInfo={description:`Container for action buttons/links in the Header.
Typically contains CTAs like "Sign In" or "Get Started".`,methods:[],displayName:"HeaderActions",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}}}};const V={title:"Navigation/Header",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","transparent","filled"],description:"The visual style of the header"},size:{control:"select",options:["sm","default","lg"],description:"The height of the header"},sticky:{control:"boolean",description:"Whether the header is sticky"}}},g={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Products"}),e.jsx(r,{variant:"nav",href:"#",children:"Solutions"}),e.jsx(r,{variant:"nav",href:"#",children:"Pricing"}),e.jsx(r,{variant:"nav",href:"#",children:"About"})]}),e.jsxs(t,{children:[e.jsx(s,{variant:"ghost",size:"sm",children:"Sign In"}),e.jsx(s,{size:"sm",children:"Get Started"})]})]}),args:{variant:"default",size:"default"}},m={render:a=>e.jsxs("div",{className:"from-sunflower/20 bg-linear-to-b to-transparent",children:[e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Products"}),e.jsx(r,{variant:"nav",href:"#",children:"Solutions"}),e.jsx(r,{variant:"nav",href:"#",children:"About"})]}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Contact Us"})})]}),e.jsx("div",{className:"h-40"})]}),args:{variant:"transparent",size:"default"}},u={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Dashboard"}),e.jsx(r,{variant:"nav",href:"#",children:"Analytics"}),e.jsx(r,{variant:"nav",href:"#",children:"Settings"})]}),e.jsx(t,{children:e.jsx(s,{variant:"secondary",size:"sm",children:"Logout"})})]}),args:{variant:"filled",size:"default"}},f={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"sm"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Home"}),e.jsx(r,{variant:"nav",href:"#",children:"About"})]}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Sign In"})})]}),args:{variant:"default",size:"sm"}},p={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"lg"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Products"}),e.jsx(r,{variant:"nav",href:"#",children:"Enterprise"}),e.jsx(r,{variant:"nav",href:"#",children:"Resources"}),e.jsx(r,{variant:"nav",href:"#",children:"Developers"})]}),e.jsxs(t,{children:[e.jsx(s,{variant:"ghost",children:"Sign In"}),e.jsx(s,{children:"Get Started"})]})]}),args:{variant:"default",size:"lg"}},x={render:a=>e.jsxs("div",{children:[e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Home"}),e.jsx(r,{variant:"nav",href:"#",children:"About"}),e.jsx(r,{variant:"nav",href:"#",children:"Contact"})]}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Sign In"})})]}),e.jsxs("div",{className:"space-y-4 p-8",children:[e.jsx("p",{className:"text-secondary",children:"Scroll down to see the sticky header in action."}),Array.from({length:20}).map((c,o)=>e.jsxs("div",{className:"bg-alt rounded p-4",children:["Content block ",o+1]},o))]})]}),args:{variant:"default",size:"default",sticky:!0}},H={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{asChild:!0,children:e.jsx("a",{href:"/","aria-label":"Home",children:e.jsx(l,{size:"md"})})}),e.jsxs(d,{"aria-label":"Main navigation",children:[e.jsx(r,{variant:"nav",href:"#",children:"Products"}),e.jsx(r,{variant:"nav",href:"#",children:"About"})]}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Get Started"})})]}),args:{variant:"default",size:"default"}},L={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Sign In"})})]}),args:{variant:"default",size:"default"}},j={render:a=>e.jsxs(n,{...a,children:[e.jsx(i,{children:e.jsx(l,{size:"md"})}),e.jsxs(d,{"aria-label":"Main navigation",className:"absolute left-1/2 -translate-x-1/2",children:[e.jsx(r,{variant:"nav",href:"#",children:"Products"}),e.jsx(r,{variant:"nav",href:"#",children:"Solutions"}),e.jsx(r,{variant:"nav",href:"#",children:"Pricing"})]}),e.jsx(t,{children:e.jsx(s,{size:"sm",children:"Get Started"})})]}),args:{variant:"default",size:"default"}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Solutions
        </Link>
        <Link variant="nav" href="#">
          Pricing
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="from-sunflower/20 bg-linear-to-b to-transparent">
      <Header {...args}>
        <HeaderLogo>
          <EngrateLogo size="md" />
        </HeaderLogo>
        <HeaderNav aria-label="Main navigation">
          <Link variant="nav" href="#">
            Products
          </Link>
          <Link variant="nav" href="#">
            Solutions
          </Link>
          <Link variant="nav" href="#">
            About
          </Link>
        </HeaderNav>
        <HeaderActions>
          <Button size="sm">Contact Us</Button>
        </HeaderActions>
      </Header>
      <div className="h-40" />
    </div>,
  args: {
    variant: 'transparent',
    size: 'default'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Dashboard
        </Link>
        <Link variant="nav" href="#">
          Analytics
        </Link>
        <Link variant="nav" href="#">
          Settings
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="secondary" size="sm">
          Logout
        </Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'filled',
    size: 'default'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="sm" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Home
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Sign In</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="lg" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Enterprise
        </Link>
        <Link variant="nav" href="#">
          Resources
        </Link>
        <Link variant="nav" href="#">
          Developers
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button variant="ghost">Sign In</Button>
        <Button>Get Started</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Header {...args}>
        <HeaderLogo>
          <EngrateLogo size="md" />
        </HeaderLogo>
        <HeaderNav aria-label="Main navigation">
          <Link variant="nav" href="#">
            Home
          </Link>
          <Link variant="nav" href="#">
            About
          </Link>
          <Link variant="nav" href="#">
            Contact
          </Link>
        </HeaderNav>
        <HeaderActions>
          <Button size="sm">Sign In</Button>
        </HeaderActions>
      </Header>
      <div className="space-y-4 p-8">
        <p className="text-secondary">
          Scroll down to see the sticky header in action.
        </p>
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="bg-alt rounded p-4">
            Content block {i + 1}
          </div>)}
      </div>
    </div>,
  args: {
    variant: 'default',
    size: 'default',
    sticky: true
  }
}`,...x.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo asChild>
        <a href="/" aria-label="Home">
          <EngrateLogo size="md" />
        </a>
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          About
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderActions>
        <Button size="sm">Sign In</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <HeaderLogo>
        <EngrateLogo size="md" />
      </HeaderLogo>
      <HeaderNav aria-label="Main navigation" className="absolute left-1/2 -translate-x-1/2">
        <Link variant="nav" href="#">
          Products
        </Link>
        <Link variant="nav" href="#">
          Solutions
        </Link>
        <Link variant="nav" href="#">
          Pricing
        </Link>
      </HeaderNav>
      <HeaderActions>
        <Button size="sm">Get Started</Button>
      </HeaderActions>
    </Header>,
  args: {
    variant: 'default',
    size: 'default'
  }
}`,...j.parameters?.docs?.source}}};const D=["Default","Transparent","Filled","Small","Large","Sticky","LogoAsLink","MinimalHeader","CenteredNav"];export{j as CenteredNav,g as Default,u as Filled,p as Large,H as LogoAsLink,L as MinimalHeader,f as Small,x as Sticky,m as Transparent,D as __namedExportsOrder,V as default};
