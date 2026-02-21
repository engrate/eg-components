import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-C6CMsfN0.js";import{R as F,T as Y,P as O,C as R}from"./index-BKtoa06N.js";import{c as _}from"./index-HTk8j2sO.js";import{C as z}from"./Calendar-D7lNpDQn.js";import{c as i}from"./utils-kmX6UHYG.js";import{C as A}from"./calendar-BfWLHPHo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xSzvWiK1.js";import"./index-Lus5SmQY.js";import"./index-BVksvLjG.js";import"./index-DtQ62xPZ.js";import"./index-CnVgb_44.js";import"./index-CC1jVALe.js";import"./index-D49FK3Z8.js";import"./index-B53_HNiM.js";import"./index-DAs2PMSo.js";import"./index-3xqwPjLR.js";import"./index-CoOYl0CT.js";import"./chevron-right-D2qXTGAP.js";import"./createLucideIcon-BUacS7gH.js";function S(t,a="yyyy-MM-dd"){if(!t)return"";const l=String(t.getMonth()+1).padStart(2,"0"),d=String(t.getDate()).padStart(2,"0"),o=t.getFullYear();return a.replace("yyyy",String(o)).replace("MM",l).replace("dd",d)}const I=_(["bg-card text-body-sm text-primary placeholder:text-tertiary","flex h-8 w-full items-center justify-between rounded-md border px-3 py-1","font-sans transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-50"],{variants:{variant:{default:"border-border",error:"border-error"}},defaultVariants:{variant:"default"}}),r=s.forwardRef(({value:t,onChange:a,placeholder:l="Select a date",format:d="MM/dd/yyyy",minDate:o,maxDate:b,disabled:N=!1,variant:M,className:w,id:C,name:v,"aria-label":k,"aria-describedby":T},E)=>{const[D,g]=s.useState(!1),[P,j]=s.useState(t||new Date),V=s.useMemo(()=>{const n=[];return o&&n.push({before:o}),b&&n.push({after:b}),n.length>0?n:void 0},[o,b]),q=n=>{a?.(n??null),n&&g(!1)},W=()=>{a?.(new Date),g(!1)};return s.useEffect(()=>{t&&j(t)},[t]),e.jsxs(F,{open:D,onOpenChange:g,children:[e.jsx(Y,{asChild:!0,children:e.jsxs("button",{ref:E,id:C,type:"button",disabled:N,className:i(I({variant:M}),w),"aria-label":k||"Choose date","aria-describedby":T,"aria-haspopup":"dialog","aria-expanded":D,children:[e.jsx("span",{className:i("truncate",!t&&"text-tertiary"),children:t?S(t,d):l}),e.jsx(A,{className:"text-tertiary h-4 w-4 shrink-0"}),v&&e.jsx("input",{type:"hidden",name:v,value:t?S(t,"yyyy-MM-dd"):""})]})}),e.jsx(O,{children:e.jsxs(R,{className:i("bg-main border-border z-50 w-auto rounded-lg border p-4 shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2","data-[side=top]:slide-in-from-bottom-2"),sideOffset:4,align:"start",children:[e.jsx(z,{mode:"single",selected:t??void 0,onSelect:q,month:P,onMonthChange:j,disabled:V}),e.jsx("div",{className:"border-border mt-4 border-t pt-4",children:e.jsx("button",{type:"button",onClick:W,className:i("text-sunflower hover:text-sunflower-hover w-full text-center text-sm font-medium","transition-colors focus-visible:underline focus-visible:outline-none"),children:"Today"})})]})})]})});r.displayName="DatePicker";r.__docgenInfo={description:`DatePicker component following Engrate brand guidelines.
Features a calendar popup with month/year navigation and accessible keyboard controls.

@example
\`\`\`tsx
const [date, setDate] = useState<Date | null>(null)
<DatePicker value={date} onChange={setDate} placeholder="Select a date" />
\`\`\``,methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"The currently selected date"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:"Callback when the date changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no date is selected",defaultValue:{value:"'Select a date'",computed:!1}},format:{required:!1,tsType:{name:"string"},description:"Date format string (supports MM, dd, yyyy)",defaultValue:{value:"'MM/dd/yyyy'",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:"Minimum selectable date"},maxDate:{required:!1,tsType:{name:"Date"},description:"Maximum selectable date"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date picker is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the trigger"},id:{required:!1,tsType:{name:"string"},description:"ID for the trigger element"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form integration"},"aria-label":{required:!1,tsType:{name:"string"},description:"aria-label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"aria-describedby for accessibility"}},composes:["VariantProps"]};function L(){const[t,a]=s.useState(new Date);return e.jsx(r,{value:t,onChange:a,placeholder:"Select a date"})}function $(){const[t,a]=s.useState(new Date);return e.jsx(r,{value:t,onChange:a,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY"})}function B(){const[t,a]=s.useState(null),l=new Date,d=new Date(l.getFullYear(),l.getMonth(),1),o=new Date(l.getFullYear(),l.getMonth()+1,0);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-small text-secondary",children:"Only dates in the current month are selectable"}),e.jsx(r,{value:t,onChange:a,minDate:d,maxDate:o,placeholder:"Select a date"})]})}function G(){const[t,a]=s.useState(null);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{value:t,onChange:a,placeholder:"Select a date"}),e.jsxs("p",{className:"text-small text-secondary",children:["Selected: ",t?t.toLocaleDateString():"None"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"bg-sunflower rounded-pill px-4 py-2 text-sm",onClick:()=>a(new Date),children:"Set Today"}),e.jsx("button",{className:"border-border rounded-pill border px-4 py-2 text-sm",onClick:()=>a(null),children:"Clear"})]})]})}const xe={title:"Forms/DatePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error"],description:"The visual style of the date picker"},disabled:{control:"boolean",description:"Whether the date picker is disabled"},placeholder:{control:"text",description:"Placeholder text when no date is selected"},format:{control:"text",description:"Date format string (supports MM, dd, yyyy)"}},decorators:[t=>e.jsx("div",{className:"w-72",children:e.jsx(t,{})})]},c={args:{placeholder:"Select a date"}},m={render:()=>e.jsx(L,{})},p={args:{variant:"error",placeholder:"Select a date"}},u={args:{disabled:!0,placeholder:"Select a date"}},x={render:()=>e.jsx($,{})},h={render:()=>e.jsx(B,{})},f={render:()=>e.jsx(G,{})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Default"}),e.jsx(r,{placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Error"}),e.jsx(r,{variant:"error",placeholder:"Select a date"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Empty"}),e.jsx(r,{placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"With Value"}),e.jsx(r,{value:new Date,placeholder:"Select a date"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-label text-tertiary mb-1",children:"Disabled"}),e.jsx(r,{disabled:!0,placeholder:"Select a date"})]})]})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a date'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <WithValueExample />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    placeholder: 'Select a date'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Select a date'
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <CustomFormatExample />
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <WithMinMaxDateExample />
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Default</p>
            <DatePicker placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Error</p>
            <DatePicker variant="error" placeholder="Select a date" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-label text-tertiary mb-1">Empty</p>
            <DatePicker placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">With Value</p>
            <DatePicker value={new Date()} placeholder="Select a date" />
          </div>
          <div>
            <p className="text-label text-tertiary mb-1">Disabled</p>
            <DatePicker disabled placeholder="Select a date" />
          </div>
        </div>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};const he=["Default","WithValue","Error","Disabled","CustomFormat","WithMinMaxDate","Controlled","AllStates"];export{y as AllStates,f as Controlled,x as CustomFormat,c as Default,u as Disabled,p as Error,h as WithMinMaxDate,m as WithValue,he as __namedExportsOrder,xe as default};
