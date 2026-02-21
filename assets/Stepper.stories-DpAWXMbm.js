import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-Dx-tcV3L.js";import{c as h}from"./index-HTk8j2sO.js";import{c as u}from"./utils-kmX6UHYG.js";import{c as Q}from"./createLucideIcon-5GbQ_pHA.js";import"./preload-helper-PPVm8Dsz.js";const X=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],O=Q("check",X),U=m.createContext(null);function W(){const t=m.useContext(U);if(!t)throw new Error("Stepper components must be used within a Stepper");return t}const $=m.createContext(null);function T(){const t=m.useContext($);if(!t)throw new Error("StepperItem child components must be used within a StepperItem");return t}const Z=h("flex",{variants:{orientation:{horizontal:"flex-row items-start",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}}),ee=h("inline-flex items-center font-sans",{variants:{size:{sm:"gap-1",default:"gap-1.5",lg:"gap-2"}},defaultVariants:{size:"default"}}),te=h("inline-flex shrink-0 items-center justify-center rounded-full transition-colors",{variants:{size:{sm:"h-5 w-5 text-[10px]",default:"h-6 w-6 text-[11px]",lg:"h-7 w-7 text-xs"}},defaultVariants:{size:"default"}}),re=h("transition-colors",{variants:{size:{sm:"h-0.5 w-3",default:"h-0.5 w-4",lg:"h-0.5 w-5"}},defaultVariants:{size:"default"}}),c=m.forwardRef(({className:t,variant:r="default",activeStep:i=1,orientation:a="horizontal",totalSteps:x,size:d,labels:y,onStepClick:j,children:I,...b},w)=>{const[f,E]=m.useState(0),G=m.useMemo(()=>({activeStep:i,orientation:a,totalSteps:f,setTotalSteps:E}),[i,a,f]);if(r==="mini"){const F=x??0,H=Array.from({length:F},(v,g)=>g+1);return e.jsx("div",{ref:w,role:"group","aria-label":"Progress",className:u(ee({size:d}),t),...b,children:H.map(v=>{const g=v<i?"completed":v===i?"active":"inactive",J=y?.[v-1]??`Step ${v}`,K=v===F;return e.jsxs(m.Fragment,{children:[e.jsx("button",{type:"button","aria-current":g==="active"?"step":void 0,"aria-label":J,"data-state":g,disabled:!j,onClick:()=>j?.(v),className:u(te({size:d}),"focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",j?"cursor-pointer":"cursor-default disabled:opacity-100",g==="completed"&&"bg-sunflower text-primary",g==="active"&&"border-sunflower text-primary border-2",g==="inactive"&&"border-border text-tertiary border-2"),children:g==="completed"?e.jsx(O,{className:u(d==="sm"&&"h-2.5 w-2.5",d==="lg"&&"h-3.5 w-3.5",(!d||d==="default")&&"h-3 w-3"),strokeWidth:3}):v}),!K&&e.jsx("div",{"aria-hidden":"true",className:u(re({size:d}),v<i?"bg-sunflower":"bg-border")})]},v)})})}return e.jsx(U.Provider,{value:G,children:e.jsxs("div",{ref:w,role:"group","aria-label":"Progress","data-orientation":a,className:u("w-full",t),...b,children:[e.jsx("div",{className:u(Z({orientation:a})),children:I}),a==="horizontal"&&f>0&&e.jsxs("div",{className:"text-tertiary text-body-sm mt-4 text-center font-sans",children:["Step ",Math.min(i,f)," of ",f]})]})})});c.displayName="Stepper";const ae=h("group relative",{variants:{orientation:{horizontal:"flex flex-1 flex-col items-center",vertical:"flex flex-col"}},defaultVariants:{orientation:"horizontal"}}),n=m.forwardRef(({className:t,step:r,children:i,...a},x)=>{const{activeStep:d,orientation:y,totalSteps:j,setTotalSteps:I}=W(),b=r<d?"completed":r===d?"active":"inactive";m.useEffect(()=>{I(E=>Math.max(E,r))},[r,I]);const w=r===j,f=m.useMemo(()=>({step:r,state:b,isLastStep:w}),[r,b,w]);return e.jsx($.Provider,{value:f,children:e.jsx("div",{ref:x,"data-state":b,"data-step":r,"data-orientation":y,className:u(ae({orientation:y}),t),...a,children:i})})});n.displayName="StepperItem";const ie=h("focus-visible:ring-sunflower flex items-center gap-3 text-left font-sans transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{orientation:{horizontal:"flex-col items-center gap-2 text-center",vertical:"flex-row"}},defaultVariants:{orientation:"horizontal"}}),s=m.forwardRef(({className:t,children:r,...i},a)=>{const{orientation:x}=W(),{state:d}=T();return e.jsx("button",{ref:a,type:"button","aria-current":d==="active"?"step":void 0,"data-state":d,className:u(ie({orientation:x}),t),...i,children:r})});s.displayName="StepperTrigger";const ne=h("text-body-sm inline-flex shrink-0 items-center justify-center rounded-full font-sans transition-colors",{variants:{size:{sm:"h-7 w-7",default:"h-9 w-9",lg:"h-11 w-11"}},defaultVariants:{size:"default"}}),p=m.forwardRef(({className:t,size:r,children:i,...a},x)=>{const{state:d,step:y}=T();return e.jsx("span",{ref:x,"data-state":d,className:u(ne({size:r}),d==="completed"&&"bg-sunflower text-primary",d==="active"&&"border-sunflower text-primary border-2",d==="inactive"&&"border-border text-tertiary border-2",t),"aria-hidden":"true",...a,children:d==="completed"?e.jsx(O,{className:"h-4 w-4"}):i??y})});p.displayName="StepperIndicator";const o=m.forwardRef(({className:t,...r},i)=>{const{state:a}=T();return e.jsx("span",{ref:i,"data-state":a,className:u("text-body-sm font-sans font-medium tracking-tight",a==="inactive"?"text-tertiary":"text-primary",t),...r})});o.displayName="StepperTitle";const l=m.forwardRef(({className:t,...r},i)=>{const{state:a}=T();return e.jsx("p",{ref:i,"data-state":a,className:u("text-small font-sans",a==="inactive"?"text-quaternary":"text-secondary",t),...r})});l.displayName="StepperDescription";const se=h("transition-colors",{variants:{orientation:{horizontal:"absolute top-[17px] right-[calc(-50%_+_24px)] left-[calc(50%_+_24px)] h-0.5",vertical:"mt-1 mb-1 ml-4.5 min-h-8 w-0.5"}},defaultVariants:{orientation:"horizontal"}}),S=m.forwardRef(({className:t,...r},i)=>{const{orientation:a}=W(),{state:x}=T();return e.jsx("div",{ref:i,role:"separator","data-state":x,"data-orientation":a,className:u(se({orientation:a}),x==="completed"?"bg-sunflower":"bg-border",t),"aria-hidden":"true",...r})});S.displayName="StepperSeparator";c.__docgenInfo={description:`Root container for the stepper component.
Displays progress through a multi-step process.

Use \`variant="default"\` (or omit) for a compound component with titles/descriptions.
Use \`variant="mini"\` for a compact inline stepper with numbered dots and connectors.

@example
\`\`\`tsx
// Default — compound component
<Stepper activeStep={2}>
  <StepperItem step={1}>
    <StepperTrigger>
      <StepperIndicator />
      <StepperTitle>Step 1</StepperTitle>
    </StepperTrigger>
    <StepperSeparator />
  </StepperItem>
  <StepperItem step={2}>
    <StepperTrigger>
      <StepperIndicator />
      <StepperTitle>Step 2</StepperTitle>
    </StepperTrigger>
  </StepperItem>
</Stepper>

// Mini — compact inline
<Stepper variant="mini" totalSteps={4} activeStep={2} />
<Stepper variant="mini" totalSteps={3} activeStep={2} size="sm" labels={['A','B','C']} />
\`\`\``,methods:[],displayName:"Stepper",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'mini'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'mini'"}]},description:'Visual style — `"default"` for compound component, `"mini"` for inline compact stepper',defaultValue:{value:"'default'",computed:!1}},activeStep:{required:!1,tsType:{name:"number"},description:"The current active step (1-indexed)",defaultValue:{value:"1",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the stepper (default variant only)",defaultValue:{value:"'horizontal'",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"Total number of steps (mini variant only)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg' | null",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"},{name:"null"}]},description:"Indicator size (mini variant only)"},labels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Labels for each step, used as aria-label (mini variant only)"},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"void"}}},description:"Callback when a step indicator is clicked (mini variant only)"}},composes:["VariantProps"]};n.__docgenInfo={description:"Individual step item. Wraps the trigger, separator, and any content.",methods:[],displayName:"StepperItem",props:{step:{required:!0,tsType:{name:"number"},description:"Step number (1-indexed)"}}};s.__docgenInfo={description:"Clickable trigger for a step. Contains the indicator and labels.",methods:[],displayName:"StepperTrigger"};p.__docgenInfo={description:`Visual indicator showing the step number or completion state.
Automatically shows a check icon for completed steps.`,methods:[],displayName:"StepperIndicator",composes:["VariantProps"]};o.__docgenInfo={description:"Title text for a step.",methods:[],displayName:"StepperTitle"};l.__docgenInfo={description:"Description text for a step.",methods:[],displayName:"StepperDescription"};S.__docgenInfo={description:"Separator line between steps. Indicates completion status.",methods:[],displayName:"StepperSeparator"};const Se={title:"Navigation/Stepper",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeStep:{control:{type:"number",min:1,max:4},description:"The current active step (1-indexed)"},orientation:{control:"select",options:["horizontal","vertical"]}}},N={args:{activeStep:1},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(S,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},C={args:{activeStep:2},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(S,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},D={args:{activeStep:4},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(S,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},A={args:{activeStep:2,orientation:"vertical"},render:({activeStep:t,orientation:r})=>e.jsxs(c,{activeStep:t,orientation:r,className:"w-[400px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email address. We will use this information to create your account"})]})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company will help us personalize your experience"})]})]}),e.jsx(S,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team by inviting them to join your account"})]})]})})]})},k={args:{activeStep:3},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[900px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Address"}),e.jsx(l,{children:"Add your address here"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Shipping"}),e.jsx(l,{children:"Set your preferred shipping method"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:3,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Payment"}),e.jsx(l,{children:"Add any payment information you have"})]}),e.jsx(S,{})]}),e.jsx(n,{step:4,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Checkout"}),e.jsx(l,{children:"Confirm your order"})]})})]})},z={render:()=>{const[t,r]=m.useState(1),i=3;return e.jsxs("div",{className:"w-[800px] space-y-8",children:[e.jsxs(c,{activeStep:t,children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{onClick:()=>r(1),children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(S,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{onClick:()=>r(2),children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(S,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{onClick:()=>r(3),children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{onClick:()=>r(a=>Math.max(1,a-1)),disabled:t<=1,className:"rounded-pill bg-alt text-primary hover:bg-contrast px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50",children:"Back"}),e.jsx("button",{onClick:()=>r(a=>Math.min(i+1,a+1)),disabled:t>i,className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50",children:t>=i?"Complete":"Next"})]})]})}},M={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t})},V={args:{variant:"mini",activeStep:1},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:3,activeStep:t})},_={args:{variant:"mini",activeStep:5},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t})},P={args:{variant:"mini",activeStep:3},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:5,activeStep:t,size:"sm"})},R={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t,size:"lg"})},Y={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:3,activeStep:t,labels:["Details","Payment","Confirm"]})},q={args:{activeStep:2},render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"sm"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"sm"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"default"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"default"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"lg"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"lg"})]})]})},L={args:{activeStep:1},render:()=>{const[t,r]=m.useState(1),i=5;return e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsx(c,{variant:"mini",totalSteps:i,activeStep:t,onStepClick:r,labels:["Account","Profile","Settings","Review","Complete"]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>r(a=>Math.max(1,a-1)),disabled:t<=1,className:"rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50",children:"Back"}),e.jsx("button",{onClick:()=>r(a=>Math.min(i+1,a+1)),disabled:t>i,className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50",children:t>=i?"Done":"Next"})]})]})}},B={args:{activeStep:2},render:()=>e.jsxs("div",{className:"bg-card border-border flex w-[400px] flex-col gap-4 rounded-lg border p-6",children:[e.jsx("div",{className:"text-primary text-body font-sans font-medium tracking-tight",children:"Create your account"}),e.jsx("div",{className:"bg-alt h-24 rounded-md"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{className:"rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors",children:"Back"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"sm"}),e.jsx("button",{className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors",children:"Next"})]})]})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 1
  },
  render: ({
    activeStep
  }) => <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 4
  },
  render: ({
    activeStep
  }) => <Stepper activeStep={activeStep} className="w-[800px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Your details</StepperTitle>
          <StepperDescription>Provide your name and email</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Company details</StepperTitle>
          <StepperDescription>
            A few details about your company
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Invite your team</StepperTitle>
          <StepperDescription>
            Start collaborating with your team
          </StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2,
    orientation: 'vertical'
  },
  render: ({
    activeStep,
    orientation
  }) => <Stepper activeStep={activeStep} orientation={orientation} className="w-[400px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Your details</StepperTitle>
            <StepperDescription>
              Provide your name and email address. We will use this information
              to create your account
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Company details</StepperTitle>
            <StepperDescription>
              A few details about your company will help us personalize your
              experience
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <div>
            <StepperTitle>Invite your team</StepperTitle>
            <StepperDescription>
              Start collaborating with your team by inviting them to join your
              account
            </StepperDescription>
          </div>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 3
  },
  render: ({
    activeStep
  }) => <Stepper activeStep={activeStep} className="w-[900px]">
      <StepperItem step={1}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Address</StepperTitle>
          <StepperDescription>Add your address here</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={2}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Shipping</StepperTitle>
          <StepperDescription>
            Set your preferred shipping method
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={3}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Payment</StepperTitle>
          <StepperDescription>
            Add any payment information you have
          </StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem step={4}>
        <StepperTrigger>
          <StepperIndicator />
          <StepperTitle>Checkout</StepperTitle>
          <StepperDescription>Confirm your order</StepperDescription>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 3;
    return <div className="w-[800px] space-y-8">
        <Stepper activeStep={activeStep}>
          <StepperItem step={1}>
            <StepperTrigger onClick={() => setActiveStep(1)}>
              <StepperIndicator />
              <StepperTitle>Your details</StepperTitle>
              <StepperDescription>
                Provide your name and email
              </StepperDescription>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={2}>
            <StepperTrigger onClick={() => setActiveStep(2)}>
              <StepperIndicator />
              <StepperTitle>Company details</StepperTitle>
              <StepperDescription>
                A few details about your company
              </StepperDescription>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>
          <StepperItem step={3}>
            <StepperTrigger onClick={() => setActiveStep(3)}>
              <StepperIndicator />
              <StepperTitle>Invite your team</StepperTitle>
              <StepperDescription>
                Start collaborating with your team
              </StepperDescription>
            </StepperTrigger>
          </StepperItem>
        </Stepper>

        <div className="flex justify-between">
          <button onClick={() => setActiveStep(s => Math.max(1, s - 1))} disabled={activeStep <= 1} className="rounded-pill bg-alt text-primary hover:bg-contrast px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50">
            Back
          </button>
          <button onClick={() => setActiveStep(s => Math.min(totalSteps + 1, s + 1))} disabled={activeStep > totalSteps} className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50">
            {activeStep >= totalSteps ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 1
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={3} activeStep={activeStep} />
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 5
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 3
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={5} activeStep={activeStep} size="sm" />
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} size="lg" />
}`,...R.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={3} activeStep={activeStep} labels={['Details', 'Payment', 'Confirm']} />
}`,...Y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2
  },
  render: () => <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          sm
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          default
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="default" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-tertiary text-small w-16 text-right font-sans">
          lg
        </span>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="lg" />
      </div>
    </div>
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 1
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    const totalSteps = 5;
    return <div className="flex flex-col items-center gap-6">
        <Stepper variant="mini" totalSteps={totalSteps} activeStep={activeStep} onStepClick={setActiveStep} labels={['Account', 'Profile', 'Settings', 'Review', 'Complete']} />
        <div className="flex gap-3">
          <button onClick={() => setActiveStep(s => Math.max(1, s - 1))} disabled={activeStep <= 1} className="rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50">
            Back
          </button>
          <button onClick={() => setActiveStep(s => Math.min(totalSteps + 1, s + 1))} disabled={activeStep > totalSteps} className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50">
            {activeStep >= totalSteps ? 'Done' : 'Next'}
          </button>
        </div>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2
  },
  render: () => <div className="bg-card border-border flex w-[400px] flex-col gap-4 rounded-lg border p-6">
      <div className="text-primary text-body font-sans font-medium tracking-tight">
        Create your account
      </div>
      <div className="bg-alt h-24 rounded-md" />
      <div className="flex items-center justify-between">
        <button className="rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors">
          Back
        </button>
        <Stepper variant="mini" totalSteps={4} activeStep={2} size="sm" />
        <button className="rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors">
          Next
        </button>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}};const ue=["Default","SecondStep","AllCompleted","Vertical","FourSteps","Interactive","Mini","MiniFirstStep","MiniAllCompleted","MiniSmall","MiniLarge","MiniWithLabels","MiniAllSizes","MiniInteractive","MiniInContext"];export{D as AllCompleted,N as Default,k as FourSteps,z as Interactive,M as Mini,_ as MiniAllCompleted,q as MiniAllSizes,V as MiniFirstStep,B as MiniInContext,L as MiniInteractive,R as MiniLarge,P as MiniSmall,Y as MiniWithLabels,C as SecondStep,A as Vertical,ue as __namedExportsOrder,Se as default};
