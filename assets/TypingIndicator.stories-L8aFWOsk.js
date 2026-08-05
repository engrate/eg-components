import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./utils-kmX6UHYG.js";import{E as c}from"./Eyebrow-CfBbWXfA.js";import{m}from"./proxy-UeFQUjJw.js";import"./index-QYRZFJqT.js";import"./iframe-Cu6Ga-dJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHkpIMsv.js";import"./index-HTk8j2sO.js";function o({eyebrow:s,className:n,...i}){return e.jsxs("div",{className:l("w-full",n),...i,children:[s?e.jsx(c,{size:"sm",className:"text-tertiary mb-1.5 block",children:s}):null,e.jsx("div",{className:"flex items-center gap-1","aria-label":"Working",children:[0,1,2].map(r=>e.jsx(m.span,{className:"bg-tertiary h-1.5 w-1.5 rounded-full",animate:{y:[0,-4,0],opacity:[.4,1,.4]},transition:{duration:.8,repeat:1/0,delay:r*.15,ease:"easeInOut"}},r))})]})}o.__docgenInfo={description:`Three bouncing dots, no bubble. Use as a fallback indicator when the
assistant is busy but no streaming text has arrived yet — for example,
a tool call that takes several seconds before a response begins. For
actively streaming text, the token reveal is its own indicator.`,methods:[],displayName:"TypingIndicator",props:{eyebrow:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Optional eyebrow label rendered above the dots — usually only when this
is the first chunk of an assistant turn. Most callers can omit it,
since streaming text reveal is itself the primary indicator and dots
are a fallback for tool-call pauses.`}}};const x={title:"AI Chat Elements/TypingIndicator",component:o,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{}},a={args:{eyebrow:"Ellie"},parameters:{docs:{description:{story:"Eyebrow is only used on the very first chunk of an assistant turn — most calls should omit it."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Ellie'
  },
  parameters: {
    docs: {
      description: {
        story: 'Eyebrow is only used on the very first chunk of an assistant turn — most calls should omit it.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const E=["Default","WithEyebrow"];export{t as Default,a as WithEyebrow,E as __namedExportsOrder,x as default};
