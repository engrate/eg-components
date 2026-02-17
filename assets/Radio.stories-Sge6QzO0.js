import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CQELQ9DN.js";import{u as W,P as F,c as w,a as _}from"./index-VMRH5oWn.js";import{u as O}from"./index-BDFvxzif.js";import{R as $,I as X,c as C}from"./index-Bx7OIn54.js";import{u as Y}from"./index-DHVVfuXZ.js";import{u as J}from"./index-CVC_-MjH.js";import{u as Q}from"./index-B87wxOqz.js";import{P as Z}from"./index-0BbdHWuk.js";import{c as A}from"./utils-kmX6UHYG.js";import{L as l}from"./Label-DsiyuD30.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaHvILro.js";import"./index-BEYWNI0T.js";import"./index-DhWOPhjD.js";import"./index-CgpbrbC_.js";import"./index-CyULKbVl.js";import"./index-DcSBEytL.js";import"./index-HTk8j2sO.js";var E="Radio",[ee,P]=_(E),[ae,oe]=ee(E),D=n.forwardRef((t,i)=>{const{__scopeRadio:a,name:c,checked:o=!1,required:r,disabled:d,value:x="on",onCheck:v,form:f,...h}=t,[m,R]=n.useState(null),p=O(i,j=>R(j)),u=n.useRef(!1),g=m?f||!!m.closest("form"):!0;return e.jsxs(ae,{scope:a,checked:o,disabled:d,children:[e.jsx(F.button,{type:"button",role:"radio","aria-checked":o,"data-state":U(o),"data-disabled":d?"":void 0,disabled:d,value:x,...h,ref:p,onClick:w(t.onClick,j=>{o||v?.(),g&&(u.current=j.isPropagationStopped(),u.current||j.stopPropagation())})}),g&&e.jsx(M,{control:m,bubbles:!u.current,name:c,value:x,checked:o,required:r,disabled:d,form:f,style:{transform:"translateX(-100%)"}})]})});D.displayName=E;var k="RadioIndicator",V=n.forwardRef((t,i)=>{const{__scopeRadio:a,forceMount:c,...o}=t,r=oe(k,a);return e.jsx(Z,{present:c||r.checked,children:e.jsx(F.span,{"data-state":U(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:i})})});V.displayName=k;var te="RadioBubbleInput",M=n.forwardRef(({__scopeRadio:t,control:i,checked:a,bubbles:c=!0,...o},r)=>{const d=n.useRef(null),x=O(d,r),v=Q(a),f=J(i);return n.useEffect(()=>{const h=d.current;if(!h)return;const m=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(m,"checked").set;if(v!==a&&p){const u=new Event("click",{bubbles:c});p.call(h,a),h.dispatchEvent(u)}},[v,a,c]),e.jsx(F.input,{type:"radio","aria-hidden":!0,defaultChecked:a,...o,tabIndex:-1,ref:x,style:{...o.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});M.displayName=te;function U(t){return t?"checked":"unchecked"}var se=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],L="RadioGroup",[ie]=_(L,[C,P]),B=C(),T=P(),[re,ne]=ie(L),q=n.forwardRef((t,i)=>{const{__scopeRadioGroup:a,name:c,defaultValue:o,value:r,required:d=!1,disabled:x=!1,orientation:v,dir:f,loop:h=!0,onValueChange:m,...R}=t,p=B(a),u=Y(f),[g,j]=W({prop:r,defaultProp:o??null,onChange:m,caller:L});return e.jsx(re,{scope:a,name:c,required:d,disabled:x,value:g,onValueChange:j,children:e.jsx($,{asChild:!0,...p,orientation:v,dir:u,loop:h,children:e.jsx(F.div,{role:"radiogroup","aria-required":d,"aria-orientation":v,"data-disabled":x?"":void 0,dir:u,...R,ref:i})})})});q.displayName=L;var K="RadioGroupItem",z=n.forwardRef((t,i)=>{const{__scopeRadioGroup:a,disabled:c,...o}=t,r=ne(K,a),d=r.disabled||c,x=B(a),v=T(a),f=n.useRef(null),h=O(i,f),m=r.value===o.value,R=n.useRef(!1);return n.useEffect(()=>{const p=g=>{se.includes(g.key)&&(R.current=!0)},u=()=>R.current=!1;return document.addEventListener("keydown",p),document.addEventListener("keyup",u),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",u)}},[]),e.jsx(X,{asChild:!0,...x,focusable:!d,active:m,children:e.jsx(D,{disabled:d,required:r.required,checked:m,...v,...o,name:r.name,ref:h,onCheck:()=>r.onValueChange(o.value),onKeyDown:w(p=>{p.key==="Enter"&&p.preventDefault()}),onFocus:w(o.onFocus,()=>{R.current&&f.current?.click()})})})});z.displayName=K;var le="RadioGroupIndicator",H=n.forwardRef((t,i)=>{const{__scopeRadioGroup:a,...c}=t,o=T(a);return e.jsx(V,{...o,...c,ref:i})});H.displayName=le;var de=q,ce=z,pe=H;const b=n.forwardRef(({className:t,...i},a)=>e.jsx(de,{className:A("grid gap-2",t),...i,ref:a}));b.displayName="RadioGroup";const s=n.forwardRef(({className:t,...i},a)=>e.jsx(ce,{ref:a,className:A("border-border bg-card aspect-square h-5 w-5 rounded-full border transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-50","data-[state=checked]:border-sunflower",t),...i,children:e.jsx(pe,{className:"flex items-center justify-center",children:e.jsx("span",{className:"bg-sunflower h-2.5 w-2.5 rounded-full"})})}));s.displayName="RadioGroupItem";b.__docgenInfo={description:`Radio group container component.
Built on Radix UI RadioGroup for accessibility.

@example
\`\`\`tsx
<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" id="option1" />
  <RadioGroupItem value="option2" id="option2" />
</RadioGroup>
\`\`\``,methods:[],displayName:"RadioGroup"};s.__docgenInfo={description:'Radio group item component following Engrate brand guidelines.\nFeatures sunflower accent when selected.\n\n@example\n```tsx\n<RadioGroupItem value="option1" id="option1" />\n```',methods:[],displayName:"RadioGroupItem"};const Ee={title:"Forms/RadioGroup",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the radio group is disabled"},defaultValue:{control:"text",description:"The default selected value"}}},N={render:()=>e.jsxs(b,{defaultValue:"option1","aria-label":"Options",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option1",id:"option1"}),e.jsx(l,{htmlFor:"option1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option2",id:"option2"}),e.jsx(l,{htmlFor:"option2",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option3",id:"option3"}),e.jsx(l,{htmlFor:"option3",children:"Option 3"})]})]})},G={render:()=>e.jsxs(b,{defaultValue:"option1",className:"flex gap-4","aria-label":"Options",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option1",id:"h-option1"}),e.jsx(l,{htmlFor:"h-option1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option2",id:"h-option2"}),e.jsx(l,{htmlFor:"h-option2",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option3",id:"h-option3"}),e.jsx(l,{htmlFor:"h-option3",children:"Option 3"})]})]})},y={render:()=>e.jsxs(b,{defaultValue:"standard","aria-label":"Shipping method",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(s,{value:"standard",id:"standard",className:"mt-0.5"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(l,{htmlFor:"standard",children:"Standard Shipping"}),e.jsx("span",{className:"text-small text-tertiary",children:"4-10 business days"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(s,{value:"express",id:"express",className:"mt-0.5"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(l,{htmlFor:"express",children:"Express Shipping"}),e.jsx("span",{className:"text-small text-tertiary",children:"2-5 business days"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(s,{value:"overnight",id:"overnight",className:"mt-0.5"}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx(l,{htmlFor:"overnight",children:"Overnight Shipping"}),e.jsx("span",{className:"text-small text-tertiary",children:"1 business day"})]})]})]})},I={render:()=>e.jsxs(b,{defaultValue:"option1","aria-label":"Options",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option1",id:"d-option1"}),e.jsx(l,{htmlFor:"d-option1",children:"Available option"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option2",id:"d-option2",disabled:!0}),e.jsx(l,{htmlFor:"d-option2",children:"Disabled option"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"option3",id:"d-option3"}),e.jsx(l,{htmlFor:"d-option3",children:"Available option"})]})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),e.jsxs(b,{"aria-label":"States demo",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"unselected",id:"unselected"}),e.jsx(l,{htmlFor:"unselected",children:"Unselected"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"disabled",id:"disabled",disabled:!0}),e.jsx(l,{htmlFor:"disabled",children:"Disabled"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Selected"}),e.jsx(b,{defaultValue:"selected","aria-label":"Selected demo",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{value:"selected",id:"selected"}),e.jsx(l,{htmlFor:"selected",children:"Selected"})]})})]})]})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1" aria-label="Options">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
}`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1" className="flex gap-4" aria-label="Options">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="h-option1" />
        <Label htmlFor="h-option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="h-option2" />
        <Label htmlFor="h-option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="h-option3" />
        <Label htmlFor="h-option3">Option 3</Label>
      </div>
    </RadioGroup>
}`,...G.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="standard" aria-label="Shipping method">
      <div className="flex items-start gap-2">
        <RadioGroupItem value="standard" id="standard" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="standard">Standard Shipping</Label>
          <span className="text-small text-tertiary">4-10 business days</span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="express" id="express" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="express">Express Shipping</Label>
          <span className="text-small text-tertiary">2-5 business days</span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="overnight" id="overnight" className="mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="overnight">Overnight Shipping</Label>
          <span className="text-small text-tertiary">1 business day</span>
        </div>
      </div>
    </RadioGroup>
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option1" aria-label="Options">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="d-option1" />
        <Label htmlFor="d-option1">Available option</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="d-option2" disabled />
        <Label htmlFor="d-option2">Disabled option</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="d-option3" />
        <Label htmlFor="d-option3">Available option</Label>
      </div>
    </RadioGroup>
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <RadioGroup aria-label="States demo">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="unselected" id="unselected" />
            <Label htmlFor="unselected">Unselected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled" id="disabled" disabled />
            <Label htmlFor="disabled">Disabled</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Selected</h3>
        <RadioGroup defaultValue="selected" aria-label="Selected demo">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="selected" id="selected" />
            <Label htmlFor="selected">Selected</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}};const _e=["Default","Horizontal","WithDescriptions","Disabled","AllStates"];export{S as AllStates,N as Default,I as Disabled,G as Horizontal,y as WithDescriptions,_e as __namedExportsOrder,Ee as default};
