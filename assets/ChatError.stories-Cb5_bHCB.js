import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./utils-kmX6UHYG.js";import{m}from"./proxy-B9pxq6v8.js";import"./iframe-DRsmyPNk.js";import"./preload-helper-PPVm8Dsz.js";function s({error:o,className:t}){const n=typeof o=="string"?o:o.message;return a.jsx(m.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:i("flex justify-center",t),children:a.jsx("div",{className:"border-error/40 bg-error/5 rounded-2xl border px-4 py-3",children:a.jsxs("p",{className:"text-error text-body-sm",children:["Error: ",n]})})})}s.__docgenInfo={description:`Inline error banner for chat surfaces. Renders a centered red-themed pill.
Use when the chat stream itself has failed (network, model error, etc.).`,methods:[],displayName:"ChatError",props:{error:{required:!0,tsType:{name:"union",raw:"Error | string",elements:[{name:"Error"},{name:"string"}]},description:"The error to display. Either an Error instance or a plain string."},className:{required:!1,tsType:{name:"string"},description:"Extra classes for the alignment row."}}};const g={title:"AI Chat Elements/ChatError",component:s,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{error:"The model is overloaded. Try again in a moment."}},e={args:{error:new Error("Network request failed: ECONNREFUSED")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'The model is overloaded. Try again in a moment.'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('Network request failed: ECONNREFUSED')
  }
}`,...e.parameters?.docs?.source}}};const u=["FromString","FromError"];export{e as FromError,r as FromString,u as __namedExportsOrder,g as default};
