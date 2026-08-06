import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-CuX75rBT.js";import{c as h}from"./index-HTk8j2sO.js";import{c as u}from"./utils-kmX6UHYG.js";import{C as $}from"./check-BWKfCgRJ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CnXV0sdy.js";const G=S.createContext(null);function O(){const t=S.useContext(G);if(!t)throw new Error("Stepper components must be used within a Stepper");return t}const H=S.createContext(null);function I(){const t=S.useContext(H);if(!t)throw new Error("StepperItem child components must be used within a StepperItem");return t}const ee=h("flex",{variants:{orientation:{horizontal:"flex-row items-start",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}}),te=h("inline-flex items-center font-sans",{variants:{size:{sm:"gap-1",default:"gap-1.5",lg:"gap-2"}},defaultVariants:{size:"default"}}),re=h("inline-flex shrink-0 items-center justify-center rounded-full transition-colors",{variants:{size:{sm:"h-5 w-5 text-[10px]",default:"h-6 w-6 text-[11px]",lg:"h-7 w-7 text-xs"}},defaultVariants:{size:"default"}}),ae=h("transition-colors",{variants:{size:{sm:"h-0.5 w-3",default:"h-0.5 w-4",lg:"h-0.5 w-5"}},defaultVariants:{size:"default"}}),c=S.forwardRef(({className:t,variant:r="default",activeStep:i=1,orientation:a="horizontal",totalSteps:x,size:d,labels:y,onStepClick:j,stepText:b="Step {current} of {total}",children:T,...w},N)=>{const[f,J]=S.useState(0),K=S.useMemo(()=>({activeStep:i,orientation:a,totalSteps:f,setTotalSteps:J}),[i,a,f]);if(r==="mini"){const U=x??0,Q=Array.from({length:U},(v,g)=>g+1);return e.jsx("div",{ref:N,role:"group","aria-label":"Progress",className:u(te({size:d}),t),...w,children:Q.map(v=>{const g=v<i?"completed":v===i?"active":"inactive",X=y?.[v-1]??`Step ${v}`,Z=v===U;return e.jsxs(S.Fragment,{children:[e.jsx("button",{type:"button","aria-current":g==="active"?"step":void 0,"aria-label":X,"data-state":g,disabled:!j,onClick:()=>j?.(v),className:u(re({size:d}),"focus-visible:ring-sunflower focus-visible:ring-1 focus-visible:outline-none",j?"cursor-pointer":"cursor-default disabled:opacity-100",g==="completed"&&"bg-sunflower text-primary",g==="active"&&"border-sunflower text-primary border-2",g==="inactive"&&"border-border text-tertiary border-2"),children:g==="completed"?e.jsx($,{className:u(d==="sm"&&"h-2.5 w-2.5",d==="lg"&&"h-3.5 w-3.5",(!d||d==="default")&&"h-3 w-3"),strokeWidth:3}):v}),!Z&&e.jsx("div",{"aria-hidden":"true",className:u(ae({size:d}),v<i?"bg-sunflower":"bg-border")})]},v)})})}return e.jsx(G.Provider,{value:K,children:e.jsxs("div",{ref:N,role:"group","aria-label":"Progress","data-orientation":a,className:u("w-full",t),...w,children:[e.jsx("div",{className:u(ee({orientation:a})),children:T}),a==="horizontal"&&f>0&&b?.trim()&&e.jsx("div",{className:"text-tertiary text-body-sm mt-4 text-center font-sans",children:b.replace("{current}",String(Math.min(i,f))).replace("{total}",String(f))})]})})});c.displayName="Stepper";const ie=h("group relative",{variants:{orientation:{horizontal:"flex flex-1 flex-col items-center",vertical:"flex flex-col"}},defaultVariants:{orientation:"horizontal"}}),n=S.forwardRef(({className:t,step:r,children:i,...a},x)=>{const{activeStep:d,orientation:y,totalSteps:j,setTotalSteps:b}=O(),T=r<d?"completed":r===d?"active":"inactive";S.useEffect(()=>{b(f=>Math.max(f,r))},[r,b]);const w=r===j,N=S.useMemo(()=>({step:r,state:T,isLastStep:w}),[r,T,w]);return e.jsx(H.Provider,{value:N,children:e.jsx("div",{ref:x,"data-state":T,"data-step":r,"data-orientation":y,className:u(ie({orientation:y}),t),...a,children:i})})});n.displayName="StepperItem";const ne=h("focus-visible:ring-sunflower flex items-center gap-3 text-left font-sans transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{orientation:{horizontal:"flex-col items-center gap-2 text-center",vertical:"flex-row"}},defaultVariants:{orientation:"horizontal"}}),s=S.forwardRef(({className:t,children:r,...i},a)=>{const{orientation:x}=O(),{state:d}=I();return e.jsx("button",{ref:a,type:"button","aria-current":d==="active"?"step":void 0,"data-state":d,className:u(ne({orientation:x}),t),...i,children:r})});s.displayName="StepperTrigger";const se=h("text-body-sm inline-flex shrink-0 items-center justify-center rounded-full font-sans transition-colors",{variants:{size:{sm:"h-7 w-7",default:"h-9 w-9",lg:"h-11 w-11"}},defaultVariants:{size:"default"}}),p=S.forwardRef(({className:t,size:r,children:i,...a},x)=>{const{state:d,step:y}=I();return e.jsx("span",{ref:x,"data-state":d,className:u(se({size:r}),d==="completed"&&"bg-sunflower text-primary",d==="active"&&"border-sunflower text-primary border-2",d==="inactive"&&"border-border text-tertiary border-2",t),"aria-hidden":"true",...a,children:d==="completed"?e.jsx($,{className:"h-4 w-4"}):i??y})});p.displayName="StepperIndicator";const o=S.forwardRef(({className:t,...r},i)=>{const{state:a}=I();return e.jsx("span",{ref:i,"data-state":a,className:u("text-body-sm font-sans font-medium tracking-tight",a==="inactive"?"text-tertiary":"text-primary",t),...r})});o.displayName="StepperTitle";const l=S.forwardRef(({className:t,...r},i)=>{const{state:a}=I();return e.jsx("p",{ref:i,"data-state":a,className:u("text-small font-sans",a==="inactive"?"text-quaternary":"text-secondary",t),...r})});l.displayName="StepperDescription";const pe=h("transition-colors",{variants:{orientation:{horizontal:"absolute top-[17px] right-[calc(-50%_+_24px)] left-[calc(50%_+_24px)] h-0.5",vertical:"mt-1 mb-1 ml-4.5 min-h-8 w-0.5"}},defaultVariants:{orientation:"horizontal"}}),m=S.forwardRef(({className:t,...r},i)=>{const{orientation:a}=O(),{state:x}=I();return e.jsx("div",{ref:i,role:"separator","data-state":x,"data-orientation":a,className:u(pe({orientation:a}),x==="completed"?"bg-sunflower":"bg-border",t),"aria-hidden":"true",...r})});m.displayName="StepperSeparator";c.__docgenInfo={description:`Root container for the stepper component.
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
\`\`\``,methods:[],displayName:"Stepper",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'mini'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'mini'"}]},description:'Visual style — `"default"` for compound component, `"mini"` for inline compact stepper',defaultValue:{value:"'default'",computed:!1}},activeStep:{required:!1,tsType:{name:"number"},description:"The current active step (1-indexed)",defaultValue:{value:"1",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the stepper (default variant only)",defaultValue:{value:"'horizontal'",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"Total number of steps (mini variant only)"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg' | null",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"},{name:"null"}]},description:"Indicator size (mini variant only)"},labels:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Labels for each step, used as aria-label (mini variant only)"},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: number) => void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"void"}}},description:"Callback when a step indicator is clicked (mini variant only)"},stepText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Text shown below the steps indicating progress (default variant, horizontal\norientation only). Supports `{current}` and `{total}` placeholders.\nPass `null` or an empty/whitespace string to hide this text entirely.\n@default 'Step {current} of {total}'",defaultValue:{value:"'Step {current} of {total}'",computed:!1}}},composes:["VariantProps"]};n.__docgenInfo={description:"Individual step item. Wraps the trigger, separator, and any content.",methods:[],displayName:"StepperItem",props:{step:{required:!0,tsType:{name:"number"},description:"Step number (1-indexed)"}}};s.__docgenInfo={description:"Clickable trigger for a step. Contains the indicator and labels.",methods:[],displayName:"StepperTrigger"};p.__docgenInfo={description:`Visual indicator showing the step number or completion state.
Automatically shows a check icon for completed steps.`,methods:[],displayName:"StepperIndicator",composes:["VariantProps"]};o.__docgenInfo={description:"Title text for a step.",methods:[],displayName:"StepperTitle"};l.__docgenInfo={description:"Description text for a step.",methods:[],displayName:"StepperDescription"};m.__docgenInfo={description:"Separator line between steps. Indicates completion status.",methods:[],displayName:"StepperSeparator"};const xe={title:"Navigation/Stepper",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{activeStep:{control:{type:"number",min:1,max:4},description:"The current active step (1-indexed)"},orientation:{control:"select",options:["horizontal","vertical"]},stepText:{control:"text",description:"Text shown below the steps. Supports `{current}`/`{total}` placeholders. Pass `null` or an empty string to hide it."}}},C={args:{activeStep:1},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},D={args:{activeStep:2},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},A={args:{activeStep:2,stepText:"{current}/{total} complete"},render:({activeStep:t,stepText:r})=>e.jsxs(c,{activeStep:t,stepText:r,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},z={args:{activeStep:2,stepText:null},render:({activeStep:t,stepText:r})=>e.jsxs(c,{activeStep:t,stepText:r,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},k={args:{activeStep:4},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[800px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]})},M={args:{activeStep:2,orientation:"vertical"},render:({activeStep:t,orientation:r})=>e.jsxs(c,{activeStep:t,orientation:r,className:"w-[400px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email address. We will use this information to create your account"})]})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company will help us personalize your experience"})]})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team by inviting them to join your account"})]})]})})]})},P={args:{activeStep:3},render:({activeStep:t})=>e.jsxs(c,{activeStep:t,className:"w-[900px]",children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Address"}),e.jsx(l,{children:"Add your address here"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Shipping"}),e.jsx(l,{children:"Set your preferred shipping method"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:3,children:[e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Payment"}),e.jsx(l,{children:"Add any payment information you have"})]}),e.jsx(m,{})]}),e.jsx(n,{step:4,children:e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(o,{children:"Checkout"}),e.jsx(l,{children:"Confirm your order"})]})})]})},V={render:()=>{const[t,r]=S.useState(1),i=3;return e.jsxs("div",{className:"w-[800px] space-y-8",children:[e.jsxs(c,{activeStep:t,children:[e.jsxs(n,{step:1,children:[e.jsxs(s,{onClick:()=>r(1),children:[e.jsx(p,{}),e.jsx(o,{children:"Your details"}),e.jsx(l,{children:"Provide your name and email"})]}),e.jsx(m,{})]}),e.jsxs(n,{step:2,children:[e.jsxs(s,{onClick:()=>r(2),children:[e.jsx(p,{}),e.jsx(o,{children:"Company details"}),e.jsx(l,{children:"A few details about your company"})]}),e.jsx(m,{})]}),e.jsx(n,{step:3,children:e.jsxs(s,{onClick:()=>r(3),children:[e.jsx(p,{}),e.jsx(o,{children:"Invite your team"}),e.jsx(l,{children:"Start collaborating with your team"})]})})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{onClick:()=>r(a=>Math.max(1,a-1)),disabled:t<=1,className:"rounded-pill bg-alt text-primary hover:bg-contrast px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50",children:"Back"}),e.jsx("button",{onClick:()=>r(a=>Math.min(i+1,a+1)),disabled:t>i,className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover px-btn-x py-btn-y text-body-sm font-sans transition-colors disabled:opacity-50",children:t>=i?"Complete":"Next"})]})]})}},_={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t})},Y={args:{variant:"mini",activeStep:1},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:3,activeStep:t})},R={args:{variant:"mini",activeStep:5},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t})},q={args:{variant:"mini",activeStep:3},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:5,activeStep:t,size:"sm"})},B={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:4,activeStep:t,size:"lg"})},L={args:{variant:"mini",activeStep:2},render:({activeStep:t})=>e.jsx(c,{variant:"mini",totalSteps:3,activeStep:t,labels:["Details","Payment","Confirm"]})},E={args:{activeStep:2},render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"sm"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"sm"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"default"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"default"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-tertiary text-small w-16 text-right font-sans",children:"lg"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"lg"})]})]})},W={args:{activeStep:1},render:()=>{const[t,r]=S.useState(1),i=5;return e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsx(c,{variant:"mini",totalSteps:i,activeStep:t,onStepClick:r,labels:["Account","Profile","Settings","Review","Complete"]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>r(a=>Math.max(1,a-1)),disabled:t<=1,className:"rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50",children:"Back"}),e.jsx("button",{onClick:()=>r(a=>Math.min(i+1,a+1)),disabled:t>i,className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors disabled:opacity-50",children:t>=i?"Done":"Next"})]})]})}},F={args:{activeStep:2},render:()=>e.jsxs("div",{className:"bg-card border-border flex w-[400px] flex-col gap-4 rounded-lg border p-6",children:[e.jsx("div",{className:"text-primary text-body font-sans font-medium tracking-tight",children:"Create your account"}),e.jsx("div",{className:"bg-alt h-24 rounded-md"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{className:"rounded-pill bg-alt text-primary hover:bg-contrast text-small px-4 py-1.5 font-sans transition-colors",children:"Back"}),e.jsx(c,{variant:"mini",totalSteps:4,activeStep:2,size:"sm"}),e.jsx("button",{className:"rounded-pill bg-sunflower text-primary hover:bg-sunflower-hover text-small px-4 py-1.5 font-sans transition-colors",children:"Next"})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2,
    stepText: '{current}/{total} complete'
  },
  render: ({
    activeStep,
    stepText
  }) => <Stepper activeStep={activeStep} stepText={stepText} className="w-[800px]">
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
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 2,
    stepText: null
  },
  render: ({
    activeStep,
    stepText
  }) => <Stepper activeStep={activeStep} stepText={stepText} className="w-[800px]">
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
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
}`,..._.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 1
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={3} activeStep={activeStep} />
}`,...Y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 5
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} />
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 3
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={5} activeStep={activeStep} size="sm" />
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={4} activeStep={activeStep} size="lg" />
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'mini',
    activeStep: 2
  },
  render: ({
    activeStep
  }) => <Stepper variant="mini" totalSteps={3} activeStep={activeStep} labels={['Details', 'Payment', 'Confirm']} />
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const ve=["Default","SecondStep","CustomStepText","NoStepText","AllCompleted","Vertical","FourSteps","Interactive","Mini","MiniFirstStep","MiniAllCompleted","MiniSmall","MiniLarge","MiniWithLabels","MiniAllSizes","MiniInteractive","MiniInContext"];export{k as AllCompleted,A as CustomStepText,C as Default,P as FourSteps,V as Interactive,_ as Mini,R as MiniAllCompleted,E as MiniAllSizes,Y as MiniFirstStep,F as MiniInContext,W as MiniInteractive,B as MiniLarge,q as MiniSmall,L as MiniWithLabels,z as NoStepText,D as SecondStep,M as Vertical,ve as __namedExportsOrder,xe as default};
