import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe--B_gcy8p.js";import{C as m}from"./Calendar-b34QKohK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-kmX6UHYG.js";import"./chevron-right-C-xnsn-Y.js";import"./createLucideIcon-BPAHT39Y.js";function l(){const[s,a]=d.useState(new Date);return e.jsx(m,{mode:"single",selected:s,onSelect:a,className:"rounded-lg border"})}function c(){const[s,a]=d.useState({from:new Date(2025,1,10),to:new Date(2025,1,20)});return e.jsx(m,{mode:"range",selected:s,onSelect:a,className:"rounded-lg border"})}function i(){const[s,a]=d.useState(new Date);return e.jsx(m,{mode:"single",selected:s,onSelect:a,numberOfMonths:2,className:"rounded-lg border"})}const S={title:"Primitives/Calendar",component:m,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>e.jsx(l,{})},t={render:()=>e.jsx(c,{})},r={render:()=>e.jsx(i,{})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Single Date"}),e.jsx(l,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Date Range"}),e.jsx(c,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Two Months"}),e.jsx(i,{})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SingleExample />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <RangeExample />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <TwoMonthExample />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Single Date
        </h3>
        <SingleExample />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Date Range
        </h3>
        <RangeExample />
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Two Months
        </h3>
        <TwoMonthExample />
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const v=["Single","Range","TwoMonths","AllModes"];export{o as AllModes,t as Range,n as Single,r as TwoMonths,v as __namedExportsOrder,S as default};
