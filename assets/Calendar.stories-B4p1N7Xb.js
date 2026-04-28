import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DRsmyPNk.js";import{C as m}from"./Calendar-DLQzNgLT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-kmX6UHYG.js";import"./chevron-left-k34Bk1MF.js";import"./createLucideIcon-cVw6N0Nl.js";import"./chevron-right-DtXCtfAC.js";function l(){const[s,a]=d.useState(new Date);return e.jsx(m,{mode:"single",selected:s,onSelect:a,className:"rounded-lg border"})}function c(){const[s,a]=d.useState({from:new Date(2025,1,10),to:new Date(2025,1,20)});return e.jsx(m,{mode:"range",selected:s,onSelect:a,className:"rounded-lg border"})}function i(){const[s,a]=d.useState(new Date);return e.jsx(m,{mode:"single",selected:s,onSelect:a,numberOfMonths:2,className:"rounded-lg border"})}const v={title:"Primitives/Calendar",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(l,{})},n={render:()=>e.jsx(c,{})},r={render:()=>e.jsx(i,{})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Single Date"}),e.jsx(l,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Date Range"}),e.jsx(c,{})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Two Months"}),e.jsx(i,{})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <SingleExample />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <RangeExample />
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const E=["Single","Range","TwoMonths","AllModes"];export{o as AllModes,n as Range,t as Single,r as TwoMonths,E as __namedExportsOrder,v as default};
