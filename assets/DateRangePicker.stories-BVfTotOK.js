import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-CQELQ9DN.js";import{R as O,T as $,C as _,P as z,a as A}from"./index-C5mYTaxD.js";import{c as L}from"./index-HTk8j2sO.js";import{C as I}from"./Calendar-B0nDc2LT.js";import{c as d}from"./utils-kmX6UHYG.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BymzMuwa.js";import"./index-VMRH5oWn.js";import"./index-CaHvILro.js";import"./index-BEYWNI0T.js";import"./index-BDFvxzif.js";import"./index-D-Tw_QDa.js";import"./index-CyULKbVl.js";import"./index-uTfTGBLk.js";import"./index-CgpbrbC_.js";import"./index-CLDqblWL.js";import"./index-CVC_-MjH.js";import"./index-0BbdHWuk.js";import"./chevron-right-BnSm-ELE.js";function y(t,a="yyyy-MM-dd"){if(!t)return"";const r=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),i=t.getFullYear();return a.replace("yyyy",String(i)).replace("MM",r).replace("dd",l)}function B(t,a){if(!t?.from)return"";const r=y(t.from,a);if(!t.to)return`${r} – ...`;const l=y(t.to,a);return`${r} – ${l}`}const G=L(["bg-card text-body text-primary placeholder:text-tertiary","flex h-10 w-full items-center justify-between rounded-md border px-3 py-2","font-sans transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-50"],{variants:{variant:{default:"border-border",error:"border-error"}},defaultVariants:{variant:"default"}}),s=o.forwardRef(({value:t,onChange:a,placeholder:r="Select date range",format:l="MM/dd/yyyy",minDate:i,maxDate:v,disabled:w=!1,numberOfMonths:N=2,variant:C,className:R,id:k,name:S,"aria-label":T,"aria-describedby":E},P)=>{const[j,D]=o.useState(!1),[V,M]=o.useState(t?.from||new Date),q=o.useMemo(()=>{const n=[];return i&&n.push({before:i}),v&&n.push({after:v}),n.length>0?n:void 0},[i,v]),W=n=>{a?.(n),n?.from&&n?.to&&D(!1)},Y=()=>{const n=new Date;a?.({from:n,to:n}),D(!1)},F=()=>{a?.(void 0)};return o.useEffect(()=>{t?.from&&M(t.from)},[t?.from]),e.jsxs(O,{open:j,onOpenChange:D,children:[e.jsx($,{asChild:!0,children:e.jsxs("button",{ref:P,id:k,type:"button",disabled:w,className:d(G({variant:C}),R),"aria-label":T||"Choose date range","aria-describedby":E,"aria-haspopup":"dialog","aria-expanded":j,children:[e.jsx("span",{className:d("truncate",!t?.from&&"text-tertiary text-body-sm"),children:t?.from?B(t,l):r}),e.jsx(_,{className:"text-tertiary h-4 w-4 shrink-0"}),S&&e.jsx("input",{type:"hidden",name:S,value:t?.from?`${y(t.from,"yyyy-MM-dd")}/${y(t.to,"yyyy-MM-dd")}`:""})]})}),e.jsx(z,{children:e.jsxs(A,{className:d("bg-main border-border z-50 w-auto rounded-lg border p-4 shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2","data-[side=top]:slide-in-from-bottom-2"),sideOffset:4,align:"start",children:[e.jsx(I,{mode:"range",selected:t,onSelect:W,month:V,onMonthChange:M,numberOfMonths:N,disabled:q}),e.jsxs("div",{className:"border-border mt-4 flex items-center justify-between border-t pt-4",children:[e.jsx("button",{type:"button",onClick:F,className:d("text-tertiary hover:text-secondary text-sm","transition-colors focus-visible:underline focus-visible:outline-none"),children:"Clear"}),e.jsx("button",{type:"button",onClick:Y,className:d("text-sunflower hover:text-sunflower-hover text-sm font-medium","transition-colors focus-visible:underline focus-visible:outline-none"),children:"Today"})]})]})})]})});s.displayName="DateRangePicker";s.__docgenInfo={description:`DateRangePicker component following Engrate brand guidelines.
Features a two-month calendar popup for selecting a date range with accessible keyboard controls.

@example
\`\`\`tsx
const [range, setRange] = useState<DateRange | undefined>()
<DateRangePicker value={range} onChange={setRange} placeholder="Select date range" />
\`\`\``,methods:[],displayName:"DateRangePicker",props:{value:{required:!1,tsType:{name:"DateRange"},description:"The currently selected date range"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:"Callback when the date range changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no date range is selected",defaultValue:{value:"'Select date range'",computed:!1}},format:{required:!1,tsType:{name:"string"},description:"Date format string (supports MM, dd, yyyy)",defaultValue:{value:"'MM/dd/yyyy'",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:"Minimum selectable date"},maxDate:{required:!1,tsType:{name:"Date"},description:"Maximum selectable date"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date range picker is disabled",defaultValue:{value:"false",computed:!1}},numberOfMonths:{required:!1,tsType:{name:"number"},description:"Number of months to display side by side (default: 2)",defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the trigger"},id:{required:!1,tsType:{name:"string"},description:"ID for the trigger element"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form integration"},"aria-label":{required:!1,tsType:{name:"string"},description:"aria-label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"aria-describedby for accessibility"}},composes:["VariantProps"]};function H(){const[t,a]=o.useState({from:new Date,to:new Date(Date.now()+6048e5)});return e.jsx(s,{value:t,onChange:a,placeholder:"Select date range"})}function J(){const[t,a]=o.useState({from:new Date,to:new Date(Date.now()+6048e5)});return e.jsx(s,{value:t,onChange:a,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY – DD/MM/YYYY"})}function K(){const[t,a]=o.useState(),r=new Date,l=new Date(r.getFullYear(),r.getMonth(),1),i=new Date(r.getFullYear(),r.getMonth()+1,0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-small text-secondary",children:"Only dates in the current month are selectable"}),e.jsx(s,{value:t,onChange:a,minDate:l,maxDate:i,placeholder:"Select date range"})]})}function Q(){const[t,a]=o.useState();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{value:t,onChange:a,placeholder:"Select date range"}),e.jsxs("p",{className:"text-small text-secondary",children:["Selected:"," ",t?.from?`${t.from.toLocaleDateString()} – ${t.to?.toLocaleDateString()??"..."}`:"None"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-sunflower rounded-pill px-4 py-2 text-sm",onClick:()=>{const r=new Date,l=new Date(r.getTime()+10080*60*1e3);a({from:r,to:l})},children:"This Week"}),e.jsx("button",{className:"border-border rounded-pill border px-4 py-2 text-sm",onClick:()=>a(void 0),children:"Clear"})]})]})}function U(){const[t,a]=o.useState();return e.jsx(s,{value:t,onChange:a,numberOfMonths:1,placeholder:"Select date range"})}const be={title:"Forms/DateRangePicker",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The visual style of the date range picker"},disabled:{control:"boolean",description:"Whether the date range picker is disabled"},placeholder:{control:"text",description:"Placeholder text when no range is selected"},format:{control:"text",description:"Date format string (supports MM, dd, yyyy)"},numberOfMonths:{control:"number",description:"Number of months to display side by side"}},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},c={args:{placeholder:"Select date range"}},m={render:()=>e.jsx(H,{})},p={args:{variant:"error",placeholder:"Select date range"}},u={args:{disabled:!0,placeholder:"Select date range"}},f={render:()=>e.jsx(J,{})},g={render:()=>e.jsx(K,{})},x={render:()=>e.jsx(Q,{})},h={render:()=>e.jsx(U,{})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Default"}),e.jsx(s,{placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Error"}),e.jsx(s,{variant:"error",placeholder:"Select date range"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Empty"}),e.jsx(s,{placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"With Value"}),e.jsx(s,{value:{from:new Date,to:new Date(Date.now()+10080*60*1e3)},placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Disabled"}),e.jsx(s,{disabled:!0,placeholder:"Select date range"})]})]})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select date range'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <WithValueExample />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    placeholder: 'Select date range'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Select date range'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CustomFormatExample />
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <WithMinMaxDateExample />
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SingleMonthExample />
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Default</p>
            <DateRangePicker placeholder="Select date range" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Error</p>
            <DateRangePicker variant="error" placeholder="Select date range" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Empty</p>
            <DateRangePicker placeholder="Select date range" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">With Value</p>
            <DateRangePicker value={{
            from: new Date(),
            to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          }} placeholder="Select date range" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Disabled</p>
            <DateRangePicker disabled placeholder="Select date range" />
          </div>
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};const ye=["Default","WithValue","Error","Disabled","CustomFormat","WithMinMaxDate","Controlled","SingleMonth","AllStates"];export{b as AllStates,x as Controlled,f as CustomFormat,c as Default,u as Disabled,p as Error,h as SingleMonth,g as WithMinMaxDate,m as WithValue,ye as __namedExportsOrder,be as default};
