import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as W}from"./index-CygBsgvZ.js";import{c as C}from"./index-HTk8j2sO.js";import{r as L}from"./iframe-BG8zkIOD.js";import{c as M}from"./utils-kmX6UHYG.js";import{B as v}from"./Button-jP6N4yRC.js";import"./index-Gl2cV_Zr.js";import"./preload-helper-PPVm8Dsz.js";const T=C("text-small relative flex w-full items-center gap-3 px-4 py-3 font-sans transition-colors",{variants:{variant:{info:"bg-electric-blue text-white",success:"bg-sunflower text-primary",warning:"bg-lemon-meringue text-primary",error:"bg-error text-white",neutral:"bg-alt text-primary border-border border"},align:{left:"justify-start text-left",center:"justify-center text-center"}},defaultVariants:{variant:"info",align:"center"}}),r=L.forwardRef(({className:g,variant:b,align:k,asChild:B=!1,icon:f,action:w,onDismiss:x,children:j,...y},N)=>{const S=B?W:"div";return e.jsxs(S,{role:"alert",className:M(T({variant:b,align:k,className:g})),ref:N,...y,children:[f&&e.jsx("span",{className:"shrink-0",children:f}),e.jsx("span",{className:"flex-1",children:j}),w&&e.jsx("span",{className:"shrink-0",children:w}),x&&e.jsx("button",{type:"button",onClick:x,className:"hover:bg-primary/10 focus-visible:ring-sunflower -mr-1 shrink-0 rounded p-1 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","aria-label":"Dismiss banner",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})})]})});r.displayName="Banner";r.__docgenInfo={description:`Banner component for displaying important messages, announcements, or alerts.
Typically used at the top of a page or section to convey critical information.

@example
\`\`\`tsx
<Banner variant="info">New feature available!</Banner>
<Banner variant="success" onDismiss={() => {}}>Your changes have been saved.</Banner>
<Banner variant="warning" icon={<WarningIcon />}>Please review your settings.</Banner>
<Banner variant="error" action={<Button size="sm">Retry</Button>}>Connection failed.</Banner>
\`\`\``,methods:[],displayName:"Banner",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with custom wrappers)",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display before the content"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action element (button, link, etc.) to display at the end"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"}},composes:["VariantProps"]};const P={title:"Feedback/Banner",component:r,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error","neutral"],description:"The semantic variant of the banner"},align:{control:"select",options:["left","center"],description:"The alignment of the banner content"},asChild:{control:"boolean",description:"Render as a child component"},icon:{control:!1,description:"Optional icon to display before the content"},action:{control:!1,description:"Optional action element to display at the end"},onDismiss:{action:"dismissed",description:"Called when the dismiss button is clicked"}},decorators:[g=>e.jsx("div",{className:"w-full",children:e.jsx(g,{})})]},n={args:{children:"This is an informational banner message."}},a={args:{variant:"info",children:"New features are available. Check them out!"}},s={args:{variant:"success",children:"Your changes have been saved successfully."}},t={args:{variant:"warning",children:"Your session will expire in 5 minutes."}},o={args:{variant:"error",children:"Failed to connect to the server. Please try again."}},i={args:{variant:"neutral",children:"Maintenance scheduled for this weekend."}},c={args:{align:"left",children:"This banner content is left-aligned."}},l={args:{variant:"info",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]}),children:"Banner with an information icon."}},d={args:{variant:"warning",children:"Your plan is about to expire.",action:e.jsx(v,{variant:"ghost",size:"sm",children:"Upgrade now"})}},u={args:{variant:"success",children:"This banner can be dismissed.",onDismiss:()=>{}}},p={args:{variant:"info",align:"left",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}),e.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"})]}),children:"You have 3 new notifications.",action:e.jsx(v,{variant:"ghost",size:"sm",children:"View all"})}},h={args:{variant:"info",align:"left",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]}),children:"We are updating our privacy policy. Please review the changes.",action:e.jsx(v,{variant:"ghost",size:"sm",children:"Learn more"}),onDismiss:()=>{}}},m={render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r,{variant:"info",children:"Info: Check out our latest updates!"}),e.jsx(r,{variant:"success",children:"Success: Your profile has been updated."}),e.jsx(r,{variant:"warning",children:"Warning: Your password will expire soon."}),e.jsx(r,{variant:"error",children:"Error: Unable to save changes."}),e.jsx(r,{variant:"neutral",children:"Neutral: System maintenance tonight."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational banner message.'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'New features are available. Check them out!'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Your changes have been saved successfully.'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Your session will expire in 5 minutes.'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'Failed to connect to the server. Please try again.'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'Maintenance scheduled for this weekend.'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'left',
    children: 'This banner content is left-aligned.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>,
    children: 'Banner with an information icon.'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Your plan is about to expire.',
    action: <Button variant="ghost" size="sm">
        Upgrade now
      </Button>
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'This banner can be dismissed.',
    onDismiss: () => {
      // Dismiss handler
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    align: 'left',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>,
    children: 'You have 3 new notifications.',
    action: <Button variant="ghost" size="sm">
        View all
      </Button>
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    align: 'left',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>,
    children: 'We are updating our privacy policy. Please review the changes.',
    action: <Button variant="ghost" size="sm">
        Learn more
      </Button>,
    onDismiss: () => {
      // Dismiss handler
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col">
      <Banner variant="info">Info: Check out our latest updates!</Banner>
      <Banner variant="success">Success: Your profile has been updated.</Banner>
      <Banner variant="warning">
        Warning: Your password will expire soon.
      </Banner>
      <Banner variant="error">Error: Unable to save changes.</Banner>
      <Banner variant="neutral">Neutral: System maintenance tonight.</Banner>
    </div>
}`,...m.parameters?.docs?.source}}};const F=["Default","Info","Success","Warning","Error","Neutral","LeftAligned","WithIcon","WithAction","Dismissible","WithIconAndAction","FullExample","AllVariants"];export{m as AllVariants,n as Default,u as Dismissible,o as Error,h as FullExample,a as Info,c as LeftAligned,i as Neutral,s as Success,t as Warning,d as WithAction,l as WithIcon,p as WithIconAndAction,F as __namedExportsOrder,P as default};
