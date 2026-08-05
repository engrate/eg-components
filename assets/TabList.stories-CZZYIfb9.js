import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./index-HTk8j2sO.js";import{r as t}from"./iframe-Cu6Ga-dJ.js";import{c as C}from"./utils-kmX6UHYG.js";import"./preload-helper-PPVm8Dsz.js";const L=t.createContext(null);function A(){const d=t.useContext(L);if(!d)throw new Error("Tab components must be used within a Tabs component");return d}const p=t.forwardRef(({className:d,defaultValue:u="",value:l,onValueChange:r,children:b,...i},T)=>{const[m,f]=t.useState(u),c=t.useRef(new Map),g=l!==void 0?l:m,x=t.useCallback(s=>{l===void 0&&f(s),r?.(s)},[l,r]),o=t.useCallback((s,h)=>{h?c.current.set(s,h):c.current.delete(s)},[]);return e.jsx(L.Provider,{value:{activeTab:g,setActiveTab:x,registerTrigger:o},children:e.jsx("div",{ref:T,className:C("w-full",d),...i,children:b})})});p.displayName="Tabs";const M=S("text-body inline-flex items-center font-sans transition-colors",{variants:{variant:{default:"border-border relative gap-1 border-b",pills:"rounded-pill bg-alt gap-2 p-1"}},defaultVariants:{variant:"default"}}),P=t.createContext(null),v=t.forwardRef(({className:d,variant:u,...l},r)=>{const b=t.useRef(null),[i,T]=t.useState(null),[m,f]=t.useState(!1),c=t.useRef(!1),g=t.useCallback(s=>{if(s&&b.current){const h=b.current.getBoundingClientRect();T({left:s.left-h.left,width:s.width}),c.current||(c.current=!0,f(!0))}},[]),x=t.useCallback(s=>{b.current=s,typeof r=="function"?r(s):r&&(r.current=s)},[r]),o=t.useMemo(()=>({variant:u??"default",setActiveRect:g}),[u,g]);return e.jsx(P.Provider,{value:o,children:e.jsxs("div",{ref:x,role:"tablist",className:C(M({variant:u,className:d})),...l,children:[l.children,u!=="pills"&&i&&e.jsx("span",{className:C("bg-sunflower pointer-events-none absolute bottom-0 h-0.5",m&&"transition-all duration-200 ease-out"),style:{left:i.left,width:i.width},"aria-hidden":"true"})]})})});v.displayName="TabList";const I=S("focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"text-secondary hover:text-primary data-[state=active]:text-primary px-4 py-2",pills:"rounded-pill text-secondary hover:text-primary data-[state=active]:bg-card data-[state=active]:text-primary px-4 py-1.5 data-[state=active]:shadow-sm"},size:{sm:"text-small",default:"text-body",lg:"text-body font-medium"}},defaultVariants:{variant:"default",size:"default"}}),a=t.forwardRef(({className:d,variant:u,size:l,value:r,...b},i)=>{const{activeTab:T,setActiveTab:m}=A(),f=t.useContext(P),c=t.useRef(null),g=T===r,x=t.useCallback(o=>{c.current=o,typeof i=="function"?i(o):i&&(i.current=o)},[i]);return t.useEffect(()=>{if(g&&c.current&&f){const o=()=>{if(c.current){const V=c.current.getBoundingClientRect();f.setActiveRect({left:V.left,width:V.width})}};o();let s;typeof ResizeObserver<"u"&&(s=new ResizeObserver(o),s.observe(c.current));let h=!1;return document.fonts?.ready.then(()=>{h||o()}),window.addEventListener("resize",o),()=>{h=!0,s?.disconnect(),window.removeEventListener("resize",o)}}},[g,f]),e.jsx("button",{ref:x,role:"tab",type:"button","aria-selected":g,"data-state":g?"active":"inactive",onClick:()=>m(r),className:C(I({variant:u,size:l,className:d})),...b})});a.displayName="TabTrigger";const _=S("font-sans",{variants:{size:{sm:"text-small mt-3",default:"text-body mt-4",lg:"text-body mt-6"}},defaultVariants:{size:"default"}}),n=t.forwardRef(({className:d,size:u,value:l,...r},b)=>{const{activeTab:i}=A(),T=i===l;return T?e.jsx("div",{ref:b,role:"tabpanel","data-state":T?"active":"inactive",className:C(_({size:u,className:d})),...r}):null});n.displayName="TabContent";p.__docgenInfo={description:`Root container for the tabs component.
Manages the active tab state and provides context to child components.

@example
\`\`\`tsx
<Tabs defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs>
\`\`\``,methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The default active tab value",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled active tab value"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when active tab changes"}}};v.__docgenInfo={description:"Container for tab triggers. Renders the row of clickable tabs.",methods:[],displayName:"TabList",composes:["VariantProps"]};a.__docgenInfo={description:"Individual tab trigger button. Clicking activates the associated TabContent.",methods:[],displayName:"TabTrigger",props:{value:{required:!0,tsType:{name:"string"},description:"Unique value identifying this tab"}},composes:["VariantProps"]};n.__docgenInfo={description:"Content panel for a tab. Only visible when the matching tab is active.",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"Value matching the TabTrigger this content belongs to"}},composes:["VariantProps"]};const B={title:"Navigation/TabList",component:p,parameters:{layout:"centered"},tags:["autodocs"]},j={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",children:"Password"}),e.jsx(a,{value:"tab3",children:"Settings"})]}),e.jsx(n,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(n,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(n,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},y={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(v,{variant:"pills",children:[e.jsx(a,{value:"tab1",variant:"pills",children:"Account"}),e.jsx(a,{value:"tab2",variant:"pills",children:"Password"}),e.jsx(a,{value:"tab3",variant:"pills",children:"Settings"})]}),e.jsx(n,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(n,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(n,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},w={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",size:"sm",children:"Account"}),e.jsx(a,{value:"tab2",size:"sm",children:"Password"}),e.jsx(a,{value:"tab3",size:"sm",children:"Settings"})]}),e.jsx(n,{value:"tab1",size:"sm",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(n,{value:"tab2",size:"sm",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(n,{value:"tab3",size:"sm",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},z={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",size:"lg",children:"Account"}),e.jsx(a,{value:"tab2",size:"lg",children:"Password"}),e.jsx(a,{value:"tab3",size:"lg",children:"Settings"})]}),e.jsx(n,{value:"tab1",size:"lg",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(n,{value:"tab2",size:"lg",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(n,{value:"tab3",size:"lg",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},N={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",disabled:!0,children:"Password (Disabled)"}),e.jsx(a,{value:"tab3",children:"Settings"})]}),e.jsx(n,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(n,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(n,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},R={render:()=>e.jsxs(p,{defaultValue:"tab1",className:"w-150",children:[e.jsxs(v,{children:[e.jsx(a,{value:"tab1",children:"Overview"}),e.jsx(a,{value:"tab2",children:"Analytics"}),e.jsx(a,{value:"tab3",children:"Reports"}),e.jsx(a,{value:"tab4",children:"Notifications"}),e.jsx(a,{value:"tab5",children:"Integrations"})]}),e.jsx(n,{value:"tab1",children:e.jsx("p",{children:"Overview dashboard content goes here."})}),e.jsx(n,{value:"tab2",children:e.jsx("p",{children:"Analytics and metrics content goes here."})}),e.jsx(n,{value:"tab3",children:e.jsx("p",{children:"Reports and exports content goes here."})}),e.jsx(n,{value:"tab4",children:e.jsx("p",{children:"Notification settings content goes here."})}),e.jsx(n,{value:"tab5",children:e.jsx("p",{children:"Third-party integrations content goes here."})})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1">Account</TabTrigger>
        <TabTrigger value="tab2">Password</TabTrigger>
        <TabTrigger value="tab3">Settings</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabList variant="pills">
        <TabTrigger value="tab1" variant="pills">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" variant="pills">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" variant="pills">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1" size="sm">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" size="sm">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" size="sm">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" size="sm">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2" size="sm">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3" size="sm">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1" size="lg">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" size="lg">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" size="lg">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" size="lg">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2" size="lg">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3" size="lg">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
}`,...z.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1">Account</TabTrigger>
        <TabTrigger value="tab2" disabled>
          Password (Disabled)
        </TabTrigger>
        <TabTrigger value="tab3">Settings</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-150">
      <TabList>
        <TabTrigger value="tab1">Overview</TabTrigger>
        <TabTrigger value="tab2">Analytics</TabTrigger>
        <TabTrigger value="tab3">Reports</TabTrigger>
        <TabTrigger value="tab4">Notifications</TabTrigger>
        <TabTrigger value="tab5">Integrations</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Overview dashboard content goes here.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Analytics and metrics content goes here.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Reports and exports content goes here.</p>
      </TabContent>
      <TabContent value="tab4">
        <p>Notification settings content goes here.</p>
      </TabContent>
      <TabContent value="tab5">
        <p>Third-party integrations content goes here.</p>
      </TabContent>
    </Tabs>
}`,...R.parameters?.docs?.source}}};const W=["Default","Pills","SmallSize","LargeSize","WithDisabledTab","ManyTabs"];export{j as Default,z as LargeSize,R as ManyTabs,y as Pills,w as SmallSize,N as WithDisabledTab,W as __namedExportsOrder,B as default};
