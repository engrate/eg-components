import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CQELQ9DN.js";import{S as q}from"./index-DcSBEytL.js";import{c as B}from"./index-HTk8j2sO.js";import{c as o}from"./utils-kmX6UHYG.js";import{a as Y,C as Z}from"./chevron-right-BnSm-ELE.js";import{E as ee}from"./EngrateLogo-BbsDbrq_.js";import{T as P}from"./Text-CQwYliYi.js";import{c as j}from"./createLucideIcon-BymzMuwa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDFvxzif.js";const ae=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],v=j("chart-column",ae);const re=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],$=j("file-text",re);const se=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],y=j("house",se);const ne=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ie=j("log-out",ne);const te=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],O=j("settings",te);const oe=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],de=j("users",oe),U=i.createContext(null);function T(){const a=i.useContext(U);if(!a)throw new Error("Sidebar components must be used within a Sidebar");return a}const le=B(["border-border bg-alt flex h-dvh flex-col border-r transition-[width] duration-300 ease-in-out","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"],{variants:{variant:{default:"",bordered:"border-border border"},width:{sm:"",default:"",lg:""}},defaultVariants:{variant:"default",width:"default"}}),ce={sm:{expanded:"w-52",collapsed:"w-14"},default:{expanded:"w-64",collapsed:"w-16"},lg:{expanded:"w-72",collapsed:"w-20"}},c=i.forwardRef(({className:a,variant:s,width:n="default",defaultCollapsed:t=!1,collapsed:d,onCollapsedChange:f,collapsible:m=!0,autoCollapseMobile:u=!0,children:F,...w},E)=>{const[Q,J]=i.useState(t),R=d!==void 0,N=R?d:Q,C=i.useCallback(g=>{m&&(R||J(g),f?.(g))},[R,f,m]);i.useEffect(()=>{if(!u||!m||typeof window>"u"||!window.matchMedia)return;const g=window.matchMedia("(max-width: 768px)"),A=X=>{C(X.matches)};return A(g),g.addEventListener("change",A),()=>g.removeEventListener("change",A)},[u,m,C]);const K=i.useMemo(()=>({collapsed:N,setCollapsed:C,collapsible:m}),[N,C,m]),W=ce[n||"default"];return e.jsx(U.Provider,{value:K,children:e.jsx("aside",{ref:E,className:o(le({variant:s}),N?W.collapsed:W.expanded,a),"data-collapsed":N,...w,children:F})})});c.displayName="Sidebar";const b=i.forwardRef(({className:a,...s},n)=>e.jsx("div",{ref:n,className:o("flex items-center gap-4 px-6 pt-6 pb-4",a),...s}));b.displayName="SidebarHeader";const p=i.forwardRef(({className:a,...s},n)=>e.jsx("div",{ref:n,className:o("flex-1 overflow-y-auto px-5 py-4",a),...s}));p.displayName="SidebarContent";const h=i.forwardRef(({className:a,...s},n)=>e.jsx("div",{ref:n,className:o("border-border mt-auto border-t px-5 py-5",a),...s}));h.displayName="SidebarFooter";const l=i.forwardRef(({className:a,...s},n)=>e.jsx("div",{ref:n,className:o("space-y-2 py-4",a),...s}));l.displayName="SidebarGroup";const S=i.forwardRef(({className:a,...s},n)=>{const{collapsed:t}=T();return t?null:e.jsx(P,{variant:"label",ref:n,className:o("px-4 py-3 uppercase",a),...s})});S.displayName="SidebarGroupLabel";const z=B(["group text-small relative flex w-full cursor-pointer items-center gap-3 rounded-md px-4 py-3 font-sans font-normal","text-secondary hover:text-primary","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"],{variants:{active:{true:"text-primary",false:""}},defaultVariants:{active:!1}}),r=i.forwardRef(({className:a,active:s,icon:n,asChild:t=!1,children:d,...f},m)=>{const{collapsed:u}=T(),F=t?q:"button",w=e.jsx("span",{className:o("bg-sunflower absolute rounded-full transition-opacity",u?"right-1 bottom-0 left-1 h-0.75":"top-1 bottom-1 left-0 w-0.75",s?"opacity-100":"opacity-0 group-hover:opacity-100"),"aria-hidden":"true"}),E=e.jsxs(e.Fragment,{children:[w,n&&e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center",children:n}),!u&&e.jsx(P,{variant:"body-sm",className:"truncate",children:d})]});return t?e.jsx(q,{ref:m,className:o(z({active:s}),u&&"justify-center px-2",a),...f,children:i.isValidElement(d)?i.cloneElement(d,{children:e.jsxs(e.Fragment,{children:[w,n&&e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center",children:n}),!u&&e.jsx("span",{className:"truncate",children:d.props.children})]})}):d}):e.jsx(F,{ref:m,className:o(z({active:s}),u&&"justify-center px-2",a),...f,children:E})});r.displayName="SidebarItem";const x=i.forwardRef(({className:a,...s},n)=>{const{collapsed:t,setCollapsed:d,collapsible:f}=T();return f?e.jsx("button",{ref:n,type:"button",className:o("text-small flex w-full items-center rounded-md p-2 font-sans font-normal","text-secondary hover:bg-vanilla hover:text-primary","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",a),onClick:()=>d(!t),"aria-label":t?"Expand sidebar":"Collapse sidebar",...s,children:t?e.jsx(Y,{className:"h-5 w-5"}):e.jsx(Z,{className:"h-5 w-5"})}):null});x.displayName="SidebarTrigger";const V=i.forwardRef(({className:a,...s},n)=>e.jsx("hr",{ref:n,className:o("border-border my-5 border-t",a),...s}));V.displayName="SidebarSeparator";function D({...a}){const{collapsed:s}=T();return s?null:e.jsx(ee,{...a})}D.displayName="SidebarLogo";c.__docgenInfo={description:`Sidebar component for application navigation.
Supports collapsible behavior, navigation items with icons, and sections.

@example
\`\`\`tsx
<Sidebar>
  <SidebarHeader>
    <SidebarLogo />
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
      <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <SidebarTrigger />
  </SidebarFooter>
</Sidebar>
\`\`\``,methods:[],displayName:"Sidebar",props:{defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar is in collapsed state",defaultValue:{value:"false",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"Controlled collapsed state"},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when collapsed state changes"},collapsible:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar is collapsible",defaultValue:{value:"true",computed:!1}},autoCollapseMobile:{required:!1,tsType:{name:"boolean"},description:"Automatically collapse on mobile screens (default: true)",defaultValue:{value:"true",computed:!1}},width:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};b.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader"};p.__docgenInfo={description:"",methods:[],displayName:"SidebarContent"};h.__docgenInfo={description:"",methods:[],displayName:"SidebarFooter"};l.__docgenInfo={description:"",methods:[],displayName:"SidebarGroup"};S.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupLabel"};r.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the label"},asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};x.__docgenInfo={description:"",methods:[],displayName:"SidebarTrigger"};V.__docgenInfo={description:"",methods:[],displayName:"SidebarSeparator"};D.__docgenInfo={description:`SidebarLogo component that automatically syncs the EngrateLogo compact state
with the Sidebar's collapsed state. Shows the full logo when expanded and
the compact icon-only version when collapsed.

Must be used within a Sidebar component.

@example
\`\`\`tsx
<Sidebar>
  <SidebarHeader>
    <SidebarLogo />
  </SidebarHeader>
  ...
</Sidebar>
\`\`\``,methods:[],displayName:"SidebarLogo",composes:["Omit"]};const ye={title:"Navigation/Sidebar",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered"],description:"The visual style of the sidebar"},width:{control:"select",options:["sm","default","lg"],description:"The width of the sidebar"},defaultCollapsed:{control:"boolean",description:"Whether the sidebar starts collapsed"},collapsible:{control:"boolean",description:"Whether the sidebar can be collapsed"}},decorators:[a=>e.jsxs("div",{style:{height:"500px",display:"flex"},children:[e.jsx(a,{}),e.jsx("div",{className:"bg-main flex-1 p-6",children:e.jsx("p",{className:"text-secondary",children:"Main content area"})})]})]},I={args:{},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsx("div",{className:"px-2 pt-3",children:e.jsx(D,{})})}),e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsx(S,{children:"Main"}),e.jsx(r,{icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:"Dashboard"}),e.jsx(r,{icon:e.jsx(v,{className:"h-4 w-4"}),children:"Analytics"}),e.jsx(r,{icon:e.jsx($,{className:"h-4 w-4"}),children:"Reports"})]}),e.jsx(V,{}),e.jsxs(l,{children:[e.jsx(S,{children:"Management"}),e.jsx(r,{icon:e.jsx(de,{className:"h-4 w-4"}),children:"Users"}),e.jsx(r,{icon:e.jsx(O,{className:"h-4 w-4"}),children:"Settings"})]})]}),e.jsx(h,{children:e.jsx(r,{icon:e.jsx(ie,{className:"h-4 w-4"}),children:"Logout"})})]})},M={args:{defaultCollapsed:!0},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"bg-sunflower h-8 w-8 rounded-full"})})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(S,{children:"Main"}),e.jsx(r,{icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:"Dashboard"}),e.jsx(r,{icon:e.jsx(v,{className:"h-4 w-4"}),children:"Analytics"}),e.jsx(r,{icon:e.jsx($,{className:"h-4 w-4"}),children:"Reports"})]})}),e.jsx(h,{children:e.jsx(x,{})})]})},H={args:{width:"sm"},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"bg-sunflower h-8 w-8 rounded-full"}),e.jsx("span",{className:"text-body text-primary font-sans font-medium",children:"Engrate"})]})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(r,{icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:"Dashboard"}),e.jsx(r,{icon:e.jsx(v,{className:"h-4 w-4"}),children:"Analytics"})]})}),e.jsx(h,{children:e.jsx(x,{})})]})},L={args:{width:"lg"},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"bg-sunflower h-8 w-8 rounded-full"}),e.jsx("span",{className:"text-body text-primary font-sans font-medium",children:"Engrate"})]})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(r,{icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:"Dashboard"}),e.jsx(r,{icon:e.jsx(v,{className:"h-4 w-4"}),children:"Analytics"})]})}),e.jsx(h,{children:e.jsx(x,{})})]})},G={args:{},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"bg-sunflower h-8 w-8 rounded-full"}),e.jsx("span",{className:"text-body text-primary font-sans font-medium",children:"Engrate"})]})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(S,{children:"Navigation"}),e.jsx(r,{asChild:!0,icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:e.jsx("a",{href:"#dashboard",children:"Dashboard"})}),e.jsx(r,{asChild:!0,icon:e.jsx(v,{className:"h-4 w-4"}),children:e.jsx("a",{href:"#analytics",children:"Analytics"})}),e.jsx(r,{asChild:!0,icon:e.jsx(O,{className:"h-4 w-4"}),children:e.jsx("a",{href:"#settings",children:"Settings"})})]})}),e.jsx(h,{children:e.jsx(x,{})})]})},_={args:{},render:function(s){const[n,t]=i.useState(!1);return e.jsxs(c,{...s,"aria-label":"Main navigation",collapsed:n,onCollapsedChange:t,children:[e.jsx(b,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"bg-sunflower h-8 w-8 rounded-full"}),!n&&e.jsx("span",{className:"text-body text-primary font-sans font-medium",children:"Engrate"})]})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(S,{children:"Main"}),e.jsx(r,{icon:e.jsx(y,{className:"h-4 w-4"}),active:!0,children:"Dashboard"}),e.jsx(r,{icon:e.jsx(v,{className:"h-4 w-4"}),children:"Analytics"})]})}),e.jsx(h,{children:e.jsx(x,{})})]})}},k={args:{},render:a=>e.jsxs(c,{...a,"aria-label":"Main navigation",children:[e.jsx(b,{children:e.jsx("span",{className:"text-body text-primary font-sans font-medium",children:"Menu"})}),e.jsx(p,{children:e.jsxs(l,{children:[e.jsx(S,{children:"Pages"}),e.jsx(r,{active:!0,children:"Home"}),e.jsx(r,{children:"About"}),e.jsx(r,{children:"Services"}),e.jsx(r,{children:"Contact"})]})}),e.jsx(h,{children:e.jsx(x,{})})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="px-2 pt-3">
          <SidebarLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<FileText className="h-4 w-4" />}>
            Reports
          </SidebarItem>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarItem icon={<Users className="h-4 w-4" />}>Users</SidebarItem>
          <SidebarItem icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarItem icon={<LogOut className="h-4 w-4" />}>Logout</SidebarItem>
      </SidebarFooter>
    </Sidebar>
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  },
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center justify-center">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<FileText className="h-4 w-4" />}>
            Reports
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
}`,...M.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'sm'
  },
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'lg'
  },
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
}`,...L.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarItem asChild icon={<Home className="h-4 w-4" />} active>
            <a href="#dashboard">Dashboard</a>
          </SidebarItem>
          <SidebarItem asChild icon={<BarChart3 className="h-4 w-4" />}>
            <a href="#analytics">Analytics</a>
          </SidebarItem>
          <SidebarItem asChild icon={<Settings className="h-4 w-4" />}>
            <a href="#settings">Settings</a>
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
}`,...G.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function ControlledSidebar(args) {
    const [collapsed, setCollapsed] = React.useState(false);
    return <Sidebar {...args} aria-label="Main navigation" collapsed={collapsed} onCollapsedChange={setCollapsed}>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="bg-sunflower h-8 w-8 rounded-full" />
            {!collapsed && <span className="text-body text-primary font-sans font-medium">
                Engrate
              </span>}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarItem icon={<Home className="h-4 w-4" />} active>
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
              Analytics
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <span className="text-body text-primary font-sans font-medium">
          Menu
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarItem active>Home</SidebarItem>
          <SidebarItem>About</SidebarItem>
          <SidebarItem>Services</SidebarItem>
          <SidebarItem>Contact</SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
}`,...k.parameters?.docs?.source}}};const we=["Default","Collapsed","SmallWidth","LargeWidth","WithLinks","Controlled","WithoutIcons"];export{M as Collapsed,_ as Controlled,I as Default,L as LargeWidth,H as SmallWidth,G as WithLinks,k as WithoutIcons,we as __namedExportsOrder,ye as default};
