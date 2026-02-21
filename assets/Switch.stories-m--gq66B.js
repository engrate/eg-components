import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-C6CMsfN0.js";import{u as H,P as _,c as U,a as q}from"./index-xSzvWiK1.js";import{u as R}from"./index-DtQ62xPZ.js";import{u as z}from"./index--pbqRUaw.js";import{u as X}from"./index-3xqwPjLR.js";import{c as P}from"./utils-kmX6UHYG.js";import{L as l}from"./Label-CgcRIfP5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lus5SmQY.js";import"./index-BVksvLjG.js";import"./index-ccsgLY5a.js";import"./index-HTk8j2sO.js";var j="Switch",[$]=q(j),[G,J]=$(j),B=r.forwardRef((t,o)=>{const{__scopeSwitch:a,name:n,checked:i,defaultChecked:C,required:m,disabled:c,value:f="on",onCheckedChange:y,form:d,...D}=t,[h,u]=r.useState(null),E=R(o,b=>u(b)),L=r.useRef(!1),F=h?d||!!h.closest("form"):!0,[p,A]=H({prop:i,defaultProp:C??!1,onChange:y,caller:j});return e.jsxs(G,{scope:a,checked:p,disabled:c,children:[e.jsx(_.button,{type:"button",role:"switch","aria-checked":p,"aria-required":m,"data-state":W(p),"data-disabled":c?"":void 0,disabled:c,value:f,...D,ref:E,onClick:U(t.onClick,b=>{A(M=>!M),F&&(L.current=b.isPropagationStopped(),L.current||b.stopPropagation())})}),F&&e.jsx(O,{control:h,bubbles:!L.current,name:n,value:f,checked:p,required:m,disabled:c,form:d,style:{transform:"translateX(-100%)"}})]})});B.displayName=j;var I="SwitchThumb",T=r.forwardRef((t,o)=>{const{__scopeSwitch:a,...n}=t,i=J(I,a);return e.jsx(_.span,{"data-state":W(i.checked),"data-disabled":i.disabled?"":void 0,...n,ref:o})});T.displayName=I;var K="SwitchBubbleInput",O=r.forwardRef(({__scopeSwitch:t,control:o,checked:a,bubbles:n=!0,...i},C)=>{const m=r.useRef(null),c=R(m,C),f=z(a),y=X(o);return r.useEffect(()=>{const d=m.current;if(!d)return;const D=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(D,"checked").set;if(f!==a&&u){const E=new Event("click",{bubbles:n});u.call(d,a),d.dispatchEvent(E)}},[f,a,n]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...i,tabIndex:-1,ref:c,style:{...i.style,...y,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});O.displayName=K;function W(t){return t?"checked":"unchecked"}var Q=B,V=T;const s=r.forwardRef(({className:t,...o},a)=>e.jsx(Q,{className:P("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-50","data-[state=checked]:bg-sunflower data-[state=unchecked]:bg-contrast",t),...o,ref:a,children:e.jsx(V,{className:P("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform","data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));s.displayName="Switch";s.__docgenInfo={description:`Switch component following Engrate brand guidelines.
Built on Radix UI Switch for accessibility.
Features sunflower background when on.

@example
\`\`\`tsx
<Switch id="notifications" />
<Switch defaultChecked />
\`\`\``,methods:[],displayName:"Switch"};const me={title:"Forms/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the switch is disabled"},defaultChecked:{control:"boolean",description:"Whether the switch is on by default"}}},x={args:{"aria-label":"Default switch"}},g={args:{defaultChecked:!0,"aria-label":"Checked switch"}},v={args:{disabled:!0,"aria-label":"Disabled switch"}},w={args:{disabled:!0,defaultChecked:!0,"aria-label":"Disabled checked switch"}},k={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"notifications"}),e.jsx(l,{htmlFor:"notifications",children:"Enable notifications"})]})},S={render:()=>e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(s,{id:"dark-mode",className:"mt-0.5"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(l,{htmlFor:"dark-mode",children:"Dark mode"}),e.jsx("span",{className:"text-small text-tertiary",children:"Enable dark mode for a more comfortable viewing experience"})]})]})},N={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"off"}),e.jsx(l,{htmlFor:"off",children:"Off"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"on",defaultChecked:!0}),e.jsx(l,{htmlFor:"on",children:"On"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"disabled-off",disabled:!0}),e.jsx(l,{htmlFor:"disabled-off",children:"Disabled (off)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"disabled-on",disabled:!0,defaultChecked:!0}),e.jsx(l,{htmlFor:"disabled-on",children:"Disabled (on)"})]})]})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default switch'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    'aria-label': 'Checked switch'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    'aria-label': 'Disabled switch'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    'aria-label': 'Disabled checked switch'
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-start gap-3">
      <Switch id="dark-mode" className="mt-0.5" />
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="dark-mode">Dark mode</Label>
        <span className="text-small text-tertiary">
          Enable dark mode for a more comfortable viewing experience
        </span>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Switch id="off" />
            <Label htmlFor="off">Off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="on" defaultChecked />
            <Label htmlFor="on">On</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off">Disabled (off)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on">Disabled (on)</Label>
          </div>
        </div>
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const fe=["Default","Checked","Disabled","DisabledChecked","WithLabel","WithDescription","AllStates"];export{N as AllStates,g as Checked,x as Default,v as Disabled,w as DisabledChecked,S as WithDescription,k as WithLabel,fe as __namedExportsOrder,me as default};
