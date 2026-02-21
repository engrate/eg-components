import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-C6CMsfN0.js";import{R as O,T as $,P as _,C as z}from"./index-BKtoa06N.js";import{c as A}from"./index-HTk8j2sO.js";import{C as L}from"./Calendar-D7lNpDQn.js";import{c as d}from"./utils-kmX6UHYG.js";import{C as I}from"./calendar-BfWLHPHo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xSzvWiK1.js";import"./index-Lus5SmQY.js";import"./index-BVksvLjG.js";import"./index-DtQ62xPZ.js";import"./index-CnVgb_44.js";import"./index-CC1jVALe.js";import"./index-D49FK3Z8.js";import"./index-B53_HNiM.js";import"./index-DAs2PMSo.js";import"./index-3xqwPjLR.js";import"./index-CoOYl0CT.js";import"./chevron-right-D2qXTGAP.js";import"./createLucideIcon-BUacS7gH.js";function y(t,a="yyyy-MM-dd"){if(!t)return"";const r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),i=t.getFullYear();return a.replace("yyyy",String(i)).replace("MM",r).replace("dd",o)}function B(t,a){if(!t?.from)return"";const r=y(t.from,a);if(!t.to)return`${r} – ...`;const o=y(t.to,a);return`${r} – ${o}`}const G=A(["bg-card text-body-sm text-primary placeholder:text-tertiary","flex h-8 w-full items-center justify-between rounded-md border px-3 py-1","font-sans transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-50"],{variants:{variant:{default:"border-border",error:"border-error"}},defaultVariants:{variant:"default"}}),s=n.forwardRef(({value:t,onChange:a,placeholder:r="Select date range",format:o="MM/dd/yyyy",minDate:i,maxDate:v,disabled:M=!1,numberOfMonths:w=2,variant:N,className:C,id:R,name:D,"aria-label":k,"aria-describedby":T},E)=>{const[S,P]=n.useState(!1),[V,j]=n.useState(t?.from||new Date),q=n.useMemo(()=>{const l=[];return i&&l.push({before:i}),v&&l.push({after:v}),l.length>0?l:void 0},[i,v]),W=l=>{a?.(l)},Y=()=>{const l=new Date;a?.({from:l,to:l})},F=()=>{a?.(void 0)};return n.useEffect(()=>{t?.from&&j(t.from)},[t?.from]),e.jsxs(O,{open:S,onOpenChange:P,children:[e.jsx($,{asChild:!0,children:e.jsxs("button",{ref:E,id:R,type:"button",disabled:M,className:d(G({variant:N}),C),"aria-label":k||"Choose date range","aria-describedby":T,"aria-haspopup":"dialog","aria-expanded":S,children:[e.jsx("span",{className:d("truncate",!t?.from&&"text-tertiary"),children:t?.from?B(t,o):r}),e.jsx(I,{className:"text-tertiary h-4 w-4 shrink-0"}),D&&e.jsx("input",{type:"hidden",name:D,value:t?.from?`${y(t.from,"yyyy-MM-dd")}/${y(t.to,"yyyy-MM-dd")}`:""})]})}),e.jsx(_,{children:e.jsxs(z,{className:d("bg-main border-border z-50 w-auto rounded-lg border p-4 shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2","data-[side=top]:slide-in-from-bottom-2"),sideOffset:4,align:"start",children:[e.jsx(L,{mode:"range",selected:t,onSelect:W,month:V,onMonthChange:j,numberOfMonths:w,disabled:q}),e.jsxs("div",{className:"border-border mt-4 flex items-center justify-between border-t pt-4",children:[e.jsx("button",{type:"button",onClick:F,className:d("text-tertiary hover:text-secondary text-sm","transition-colors focus-visible:underline focus-visible:outline-none"),children:"Clear"}),e.jsx("button",{type:"button",onClick:Y,className:d("text-sunflower hover:text-sunflower-hover text-sm font-medium","transition-colors focus-visible:underline focus-visible:outline-none"),children:"Today"})]})]})})]})});s.displayName="DateRangePicker";s.__docgenInfo={description:`DateRangePicker component following Engrate brand guidelines.
Features a two-month calendar popup for selecting a date range with accessible keyboard controls.

@example
\`\`\`tsx
const [range, setRange] = useState<DateRange | undefined>()
<DateRangePicker value={range} onChange={setRange} placeholder="Select date range" />
\`\`\``,methods:[],displayName:"DateRangePicker",props:{value:{required:!1,tsType:{name:"DateRange"},description:"The currently selected date range"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:"Callback when the date range changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no date range is selected",defaultValue:{value:"'Select date range'",computed:!1}},format:{required:!1,tsType:{name:"string"},description:"Date format string (supports MM, dd, yyyy)",defaultValue:{value:"'MM/dd/yyyy'",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:"Minimum selectable date"},maxDate:{required:!1,tsType:{name:"Date"},description:"Maximum selectable date"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date range picker is disabled",defaultValue:{value:"false",computed:!1}},numberOfMonths:{required:!1,tsType:{name:"number"},description:"Number of months to display side by side (default: 2)",defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the trigger"},id:{required:!1,tsType:{name:"string"},description:"ID for the trigger element"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form integration"},"aria-label":{required:!1,tsType:{name:"string"},description:"aria-label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"aria-describedby for accessibility"}},composes:["VariantProps"]};function H(){const[t,a]=n.useState({from:new Date,to:new Date(Date.now()+6048e5)});return e.jsx(s,{value:t,onChange:a,placeholder:"Select date range"})}function J(){const[t,a]=n.useState({from:new Date,to:new Date(Date.now()+6048e5)});return e.jsx(s,{value:t,onChange:a,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY – DD/MM/YYYY"})}function K(){const[t,a]=n.useState(),r=new Date,o=new Date(r.getFullYear(),r.getMonth(),1),i=new Date(r.getFullYear(),r.getMonth()+1,0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-small text-secondary",children:"Only dates in the current month are selectable"}),e.jsx(s,{value:t,onChange:a,minDate:o,maxDate:i,placeholder:"Select date range"})]})}function Q(){const[t,a]=n.useState();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{value:t,onChange:a,placeholder:"Select date range"}),e.jsxs("p",{className:"text-small text-secondary",children:["Selected:"," ",t?.from?`${t.from.toLocaleDateString()} – ${t.to?.toLocaleDateString()??"..."}`:"None"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-sunflower rounded-pill px-4 py-2 text-sm",onClick:()=>{const r=new Date,o=new Date(r.getTime()+10080*60*1e3);a({from:r,to:o})},children:"This Week"}),e.jsx("button",{className:"border-border rounded-pill border px-4 py-2 text-sm",onClick:()=>a(void 0),children:"Clear"})]})]})}function U(){const[t,a]=n.useState();return e.jsx(s,{value:t,onChange:a,numberOfMonths:1,placeholder:"Select date range"})}const ye={title:"Forms/DateRangePicker",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The visual style of the date range picker"},disabled:{control:"boolean",description:"Whether the date range picker is disabled"},placeholder:{control:"text",description:"Placeholder text when no range is selected"},format:{control:"text",description:"Date format string (supports MM, dd, yyyy)"},numberOfMonths:{control:"number",description:"Number of months to display side by side"}},decorators:[t=>e.jsx("div",{className:"w-80",children:e.jsx(t,{})})]},c={args:{placeholder:"Select date range"}},m={render:()=>e.jsx(H,{})},p={args:{variant:"error",placeholder:"Select date range"}},u={args:{disabled:!0,placeholder:"Select date range"}},f={render:()=>e.jsx(J,{})},g={render:()=>e.jsx(K,{})},x={render:()=>e.jsx(Q,{})},h={render:()=>e.jsx(U,{})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Default"}),e.jsx(s,{placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Error"}),e.jsx(s,{variant:"error",placeholder:"Select date range"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Empty"}),e.jsx(s,{placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"With Value"}),e.jsx(s,{value:{from:new Date,to:new Date(Date.now()+10080*60*1e3)},placeholder:"Select date range"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Disabled"}),e.jsx(s,{disabled:!0,placeholder:"Select date range"})]})]})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const ve=["Default","WithValue","Error","Disabled","CustomFormat","WithMinMaxDate","Controlled","SingleMonth","AllStates"];export{b as AllStates,x as Controlled,f as CustomFormat,c as Default,u as Disabled,p as Error,h as SingleMonth,g as WithMinMaxDate,m as WithValue,ve as __namedExportsOrder,ye as default};
