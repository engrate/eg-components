import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as j}from"./index-DDA3KdpW.js";import{r as o}from"./iframe-DNYoVwFJ.js";import{c as x}from"./utils-ryREhF4q.js";import"./preload-helper-PPVm8Dsz.js";const w=o.createContext(null);function z(){const n=o.useContext(w);if(!n)throw new Error("Tab components must be used within a Tabs component");return n}const i=o.forwardRef(({className:n,defaultValue:c="",value:s,onValueChange:r,children:d,...u},b)=>{const[C,g]=o.useState(c),N=s!==void 0?s:C,V=o.useCallback(y=>{s===void 0&&g(y),r?.(y)},[s,r]);return e.jsx(w.Provider,{value:{activeTab:N,setActiveTab:V},children:e.jsx("div",{ref:b,className:x("w-full",n),...u,children:d})})});i.displayName="Tabs";const S=j("text-body inline-flex items-center font-sans transition-colors",{variants:{variant:{default:"border-border gap-1 border-b",pills:"rounded-pill bg-alt gap-2 p-1"}},defaultVariants:{variant:"default"}}),l=o.forwardRef(({className:n,variant:c,...s},r)=>e.jsx("div",{ref:r,role:"tablist",className:x(S({variant:c,className:n})),...s}));l.displayName="TabList";const L=j("focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"text-secondary hover:text-primary data-[state=active]:border-sunflower data-[state=active]:text-primary border-b-2 border-transparent px-4 py-2",pills:"rounded-pill text-secondary hover:text-primary data-[state=active]:bg-card data-[state=active]:text-primary px-4 py-1.5 data-[state=active]:shadow-sm"},size:{sm:"text-small",default:"text-body",lg:"text-body font-medium"}},defaultVariants:{variant:"default",size:"default"}}),a=o.forwardRef(({className:n,variant:c,size:s,value:r,...d},u)=>{const{activeTab:b,setActiveTab:C}=z(),g=b===r;return e.jsx("button",{ref:u,role:"tab",type:"button","aria-selected":g,"data-state":g?"active":"inactive",onClick:()=>C(r),className:x(L({variant:c,size:s,className:n})),...d})});a.displayName="TabTrigger";const A=j("font-sans",{variants:{size:{sm:"text-small mt-3",default:"text-body mt-4",lg:"text-body mt-6"}},defaultVariants:{size:"default"}}),t=o.forwardRef(({className:n,size:c,value:s,...r},d)=>{const{activeTab:u}=z(),b=u===s;return b?e.jsx("div",{ref:d,role:"tabpanel","data-state":b?"active":"inactive",className:x(A({size:c,className:n})),...r}):null});t.displayName="TabContent";i.__docgenInfo={description:`Root container for the tabs component.
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
\`\`\``,methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The default active tab value",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled active tab value"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when active tab changes"}}};l.__docgenInfo={description:"Container for tab triggers. Renders the row of clickable tabs.",methods:[],displayName:"TabList",composes:["VariantProps"]};a.__docgenInfo={description:"Individual tab trigger button. Clicking activates the associated TabContent.",methods:[],displayName:"TabTrigger",props:{value:{required:!0,tsType:{name:"string"},description:"Unique value identifying this tab"}},composes:["VariantProps"]};t.__docgenInfo={description:"Content panel for a tab. Only visible when the matching tab is active.",methods:[],displayName:"TabContent",props:{value:{required:!0,tsType:{name:"string"},description:"Value matching the TabTrigger this content belongs to"}},composes:["VariantProps"]};const q={title:"Misc/TabList",component:i,parameters:{layout:"centered"},tags:["autodocs"]},p={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(l,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",children:"Password"}),e.jsx(a,{value:"tab3",children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},T={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(l,{variant:"pills",children:[e.jsx(a,{value:"tab1",variant:"pills",children:"Account"}),e.jsx(a,{value:"tab2",variant:"pills",children:"Password"}),e.jsx(a,{value:"tab3",variant:"pills",children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},v={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(l,{children:[e.jsx(a,{value:"tab1",size:"sm",children:"Account"}),e.jsx(a,{value:"tab2",size:"sm",children:"Password"}),e.jsx(a,{value:"tab3",size:"sm",children:"Settings"})]}),e.jsx(t,{value:"tab1",size:"sm",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(t,{value:"tab2",size:"sm",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(t,{value:"tab3",size:"sm",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},h={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(l,{children:[e.jsx(a,{value:"tab1",size:"lg",children:"Account"}),e.jsx(a,{value:"tab2",size:"lg",children:"Password"}),e.jsx(a,{value:"tab3",size:"lg",children:"Settings"})]}),e.jsx(t,{value:"tab1",size:"lg",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(t,{value:"tab2",size:"lg",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(t,{value:"tab3",size:"lg",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},m={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-100",children:[e.jsxs(l,{children:[e.jsx(a,{value:"tab1",children:"Account"}),e.jsx(a,{value:"tab2",disabled:!0,children:"Password (Disabled)"}),e.jsx(a,{value:"tab3",children:"Settings"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{children:"Manage your account settings and preferences."})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{children:"Change your password and security settings."})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{children:"Configure application settings and notifications."})})]})},f={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-150",children:[e.jsxs(l,{children:[e.jsx(a,{value:"tab1",children:"Overview"}),e.jsx(a,{value:"tab2",children:"Analytics"}),e.jsx(a,{value:"tab3",children:"Reports"}),e.jsx(a,{value:"tab4",children:"Notifications"}),e.jsx(a,{value:"tab5",children:"Integrations"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{children:"Overview dashboard content goes here."})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{children:"Analytics and metrics content goes here."})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{children:"Reports and exports content goes here."})}),e.jsx(t,{value:"tab4",children:e.jsx("p",{children:"Notification settings content goes here."})}),e.jsx(t,{value:"tab5",children:e.jsx("p",{children:"Third-party integrations content goes here."})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const D=["Default","Pills","SmallSize","LargeSize","WithDisabledTab","ManyTabs"];export{p as Default,h as LargeSize,f as ManyTabs,T as Pills,v as SmallSize,m as WithDisabledTab,D as __namedExportsOrder,q as default};
