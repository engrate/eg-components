import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-Cu6Ga-dJ.js";import{c as v}from"./utils-kmX6UHYG.js";import{M as w}from"./Message--OnWZoUc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HTk8j2sO.js";import"./Eyebrow-CfBbWXfA.js";import"./index-QYRZFJqT.js";import"./index-DHkpIMsv.js";const D=32,f=24,M={WebkitMaskImage:`linear-gradient(to bottom, transparent 0, #000 ${f}px, #000 calc(100% - ${f}px), transparent 100%)`,maskImage:`linear-gradient(to bottom, transparent 0, #000 ${f}px, #000 calc(100% - ${f}px), transparent 100%)`},h=r.forwardRef(({stickToBottom:t=!0,fadeEdges:x=!1,className:c,style:l,children:o,onScroll:i,...n},s)=>{const d=r.useRef(null),b=r.useCallback(e=>{d.current=e,typeof s=="function"?s(e):s&&(s.current=e)},[s]),m=r.useRef(!0),T=r.useRef(o),B=r.useCallback(e=>{const E=e.currentTarget,S=E.scrollHeight-E.scrollTop-E.clientHeight;m.current=S<=D,i?.(e)},[i]);return r.useEffect(()=>{if(!t||o===T.current)return;T.current=o;const e=d.current;e&&m.current&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},[o,t]),r.useEffect(()=>{const e=d.current;e&&(e.scrollTop=e.scrollHeight)},[]),a.jsx("div",{ref:b,onScroll:B,className:v("flex-1 overflow-y-auto",c),style:x?{...M,...l}:l,...n,children:o})});h.displayName="MessageList";h.__docgenInfo={description:`Scrollable chat message container with smart auto-scroll behavior. Stays
pinned to the bottom while the user is reading the latest message; once
they scroll up to revisit history, new messages no longer yank them away.`,methods:[],displayName:"MessageList",props:{stickToBottom:{required:!1,tsType:{name:"boolean"},description:`When the user is already at the bottom, automatically scroll new
messages into view. When the user has scrolled up, leave them be.
@default true`,defaultValue:{value:"true",computed:!1}},fadeEdges:{required:!1,tsType:{name:"boolean"},description:`Apply a soft mask at the top and bottom so messages fade into the
scroll edges. Subtle, ~24px on each side.
@default false`,defaultValue:{value:"false",computed:!1}}}};const L={title:"AI Chat Elements/MessageList",component:h,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{stickToBottom:{control:"boolean"},fadeEdges:{control:"boolean"}}},y=[{from:"user",text:"How does Engrate route a tariff lookup?"},{from:"assistant",text:"It checks the metering grid area, walks the system operator hierarchy, then resolves tariff components."},{from:"user",text:"And what triggers a recompute?"},{from:"assistant",text:"A new published tariff diff or a metering point reassignment."},{from:"user",text:"Got it — show me an example response."},{from:"assistant",text:"I can. The MCP exposes `cost_of_energy` for that — calling it now…"}],k=({stickToBottom:t,fadeEdges:x})=>{const[c,l]=r.useState(y),o=r.useRef(y.length),i=()=>{o.current+=1;const n=o.current%2===0?{from:"user",text:`Follow-up #${o.current}`}:{from:"assistant",text:`Reply #${o.current} — fresh content streaming in.`};l(s=>[...s,n])};return a.jsxs("div",{className:"bg-main border-border flex h-[480px] w-[42rem] flex-col rounded-md border",children:[a.jsx(h,{stickToBottom:t,fadeEdges:x,className:"space-y-6 px-6 py-6",children:c.map((n,s)=>{const m=(s>0?c[s-1]:void 0)?.from!==n.from&&n.from==="assistant"?"Ellie":void 0;return a.jsx(w,{from:n.from,eyebrow:m,children:n.text},s)})}),a.jsx("div",{className:"border-border border-t p-3",children:a.jsx("button",{type:"button",onClick:i,className:"bg-sunflower text-primary hover:bg-sunflower-hover rounded-pill text-small px-5 py-1 transition-colors",children:"Send another"})})]})},u={args:{stickToBottom:!0,fadeEdges:!1},render:t=>a.jsx(k,{stickToBottom:t.stickToBottom??!0,fadeEdges:t.fadeEdges??!1})},p={args:{stickToBottom:!0,fadeEdges:!0},render:t=>a.jsx(k,{stickToBottom:t.stickToBottom??!0,fadeEdges:t.fadeEdges??!0})},g={args:{stickToBottom:!1,fadeEdges:!1},render:t=>a.jsx(k,{stickToBottom:t.stickToBottom??!1,fadeEdges:t.fadeEdges??!1})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    stickToBottom: true,
    fadeEdges: false
  },
  render: args => <Demo stickToBottom={args.stickToBottom ?? true} fadeEdges={args.fadeEdges ?? false} />
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    stickToBottom: true,
    fadeEdges: true
  },
  render: args => <Demo stickToBottom={args.stickToBottom ?? true} fadeEdges={args.fadeEdges ?? true} />
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    stickToBottom: false,
    fadeEdges: false
  },
  render: args => <Demo stickToBottom={args.stickToBottom ?? false} fadeEdges={args.fadeEdges ?? false} />
}`,...g.parameters?.docs?.source}}};const F=["Default","FadeEdges","StickDisabled"];export{u as Default,p as FadeEdges,g as StickDisabled,F as __namedExportsOrder,L as default};
