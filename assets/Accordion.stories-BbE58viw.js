import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u,R as x}from"./iframe-BaJaLkA7.js";import{u as G,P as T,c as Z,a as ee,b as Ce}from"./index-BDXIdMfv.js";import{c as be}from"./index-DEkrL-Kf.js";import{u as oe}from"./index-CnR8uzlM.js";import{P as je}from"./index-DjUZ0ncx.js";import{u as re}from"./index-DlBtygbl.js";import{u as Ie}from"./index-BJLqhUMx.js";import{c as te}from"./index-DDA3KdpW.js";import{c as z}from"./utils-ryREhF4q.js";import{c as Ne}from"./createLucideIcon-ByRDVd5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0tN7cwD.js";import"./index-oEUSNkDO.js";var V="Collapsible",[we,ne]=ee(V),[Te,U]=we(V),ae=u.forwardRef((o,n)=>{const{__scopeCollapsible:r,open:t,defaultOpen:i,disabled:a,onOpenChange:d,...p}=o,[g,h]=G({prop:t,defaultProp:i??!1,onChange:d,caller:V});return e.jsx(Te,{scope:r,disabled:a,contentId:re(),open:g,onOpenToggle:u.useCallback(()=>h(f=>!f),[h]),children:e.jsx(T.div,{"data-state":K(g),"data-disabled":a?"":void 0,...p,ref:n})})});ae.displayName=V;var ie="CollapsibleTrigger",se=u.forwardRef((o,n)=>{const{__scopeCollapsible:r,...t}=o,i=U(ie,r);return e.jsx(T.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":K(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...t,ref:n,onClick:Z(o.onClick,i.onOpenToggle)})});se.displayName=ie;var B="CollapsibleContent",ce=u.forwardRef((o,n)=>{const{forceMount:r,...t}=o,i=U(B,o.__scopeCollapsible);return e.jsx(je,{present:r||i.open,children:({present:a})=>e.jsx(Se,{...t,ref:n,present:a})})});ce.displayName=B;var Se=u.forwardRef((o,n)=>{const{__scopeCollapsible:r,present:t,children:i,...a}=o,d=U(B,r),[p,g]=u.useState(t),h=u.useRef(null),f=oe(n,h),v=u.useRef(0),N=v.current,C=u.useRef(0),S=C.current,b=d.open||p,j=u.useRef(b),I=u.useRef(void 0);return u.useEffect(()=>{const m=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(m)},[]),Ce(()=>{const m=h.current;if(m){I.current=I.current||{transitionDuration:m.style.transitionDuration,animationName:m.style.animationName},m.style.transitionDuration="0s",m.style.animationName="none";const w=m.getBoundingClientRect();v.current=w.height,C.current=w.width,j.current||(m.style.transitionDuration=I.current.transitionDuration,m.style.animationName=I.current.animationName),g(t)}},[d.open,t]),e.jsx(T.div,{"data-state":K(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!b,...a,ref:f,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...o.style},children:b&&i})});function K(o){return o?"open":"closed"}var Re=ae,_e=se,Pe=ce,y="Accordion",Ee=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Q,ke,De]=be(y),[Y]=ee(y,[De,ne]),J=ne(),le=x.forwardRef((o,n)=>{const{type:r,...t}=o,i=t,a=t;return e.jsx(Q.Provider,{scope:o.__scopeAccordion,children:r==="multiple"?e.jsx(Ve,{...a,ref:n}):e.jsx(ze,{...i,ref:n})})});le.displayName=y;var[de,Oe]=Y(y),[me,Me]=Y(y,{collapsible:!1}),ze=x.forwardRef((o,n)=>{const{value:r,defaultValue:t,onValueChange:i=()=>{},collapsible:a=!1,...d}=o,[p,g]=G({prop:r,defaultProp:t??"",onChange:i,caller:y});return e.jsx(de,{scope:o.__scopeAccordion,value:x.useMemo(()=>p?[p]:[],[p]),onItemOpen:g,onItemClose:x.useCallback(()=>a&&g(""),[a,g]),children:e.jsx(me,{scope:o.__scopeAccordion,collapsible:a,children:e.jsx(pe,{...d,ref:n})})})}),Ve=x.forwardRef((o,n)=>{const{value:r,defaultValue:t,onValueChange:i=()=>{},...a}=o,[d,p]=G({prop:r,defaultProp:t??[],onChange:i,caller:y}),g=x.useCallback(f=>p((v=[])=>[...v,f]),[p]),h=x.useCallback(f=>p((v=[])=>v.filter(N=>N!==f)),[p]);return e.jsx(de,{scope:o.__scopeAccordion,value:d,onItemOpen:g,onItemClose:h,children:e.jsx(me,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(pe,{...a,ref:n})})})}),[Ye,F]=Y(y),pe=x.forwardRef((o,n)=>{const{__scopeAccordion:r,disabled:t,dir:i,orientation:a="vertical",...d}=o,p=x.useRef(null),g=oe(p,n),h=ke(r),v=Ie(i)==="ltr",N=Z(o.onKeyDown,C=>{if(!Ee.includes(C.key))return;const S=C.target,b=h().filter(H=>!H.ref.current?.disabled),j=b.findIndex(H=>H.ref.current===S),I=b.length;if(j===-1)return;C.preventDefault();let m=j;const w=0,q=I-1,L=()=>{m=j+1,m>q&&(m=w)},W=()=>{m=j-1,m<w&&(m=q)};switch(C.key){case"Home":m=w;break;case"End":m=q;break;case"ArrowRight":a==="horizontal"&&(v?L():W());break;case"ArrowDown":a==="vertical"&&L();break;case"ArrowLeft":a==="horizontal"&&(v?W():L());break;case"ArrowUp":a==="vertical"&&W();break}const ye=m%I;b[ye].ref.current?.focus()});return e.jsx(Ye,{scope:r,disabled:t,direction:i,orientation:a,children:e.jsx(Q.Slot,{scope:r,children:e.jsx(T.div,{...d,"data-orientation":a,ref:g,onKeyDown:t?void 0:N})})})}),M="AccordionItem",[Fe,X]=Y(M),ue=x.forwardRef((o,n)=>{const{__scopeAccordion:r,value:t,...i}=o,a=F(M,r),d=Oe(M,r),p=J(r),g=re(),h=t&&d.value.includes(t)||!1,f=a.disabled||o.disabled;return e.jsx(Fe,{scope:r,open:h,disabled:f,triggerId:g,children:e.jsx(Re,{"data-orientation":a.orientation,"data-state":ve(h),...p,...i,ref:n,disabled:f,open:h,onOpenChange:v=>{v?d.onItemOpen(t):d.onItemClose(t)}})})});ue.displayName=M;var ge="AccordionHeader",he=x.forwardRef((o,n)=>{const{__scopeAccordion:r,...t}=o,i=F(y,r),a=X(ge,r);return e.jsx(T.h3,{"data-orientation":i.orientation,"data-state":ve(a.open),"data-disabled":a.disabled?"":void 0,...t,ref:n})});he.displayName=ge;var $="AccordionTrigger",xe=x.forwardRef((o,n)=>{const{__scopeAccordion:r,...t}=o,i=F(y,r),a=X($,r),d=Me($,r),p=J(r);return e.jsx(Q.ItemSlot,{scope:r,children:e.jsx(_e,{"aria-disabled":a.open&&!d.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...p,...t,ref:n})})});xe.displayName=$;var Ae="AccordionContent",fe=x.forwardRef((o,n)=>{const{__scopeAccordion:r,...t}=o,i=F(y,r),a=X(Ae,r),d=J(r);return e.jsx(Pe,{role:"region","aria-labelledby":a.triggerId,"data-orientation":i.orientation,...d,...t,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});fe.displayName=Ae;function ve(o){return o?"open":"closed"}var qe=le,Le=ue,We=he,He=xe,$e=fe;const Ge=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ue=Ne("chevron-down",Ge),Be=te("w-full",{variants:{variant:{default:"",bordered:"border-border rounded-lg border"}},defaultVariants:{variant:"default"}}),A=u.forwardRef(({className:o,variant:n,...r},t)=>e.jsx(qe,{ref:t,className:z(Be({variant:n}),o),...r}));A.displayName="Accordion";const s=u.forwardRef(({className:o,...n},r)=>e.jsx(Le,{ref:r,className:z("border-border border-b last:border-b-0",o),...n}));s.displayName="AccordionItem";const Ke=te(["flex flex-1 items-center justify-between py-4 text-left font-sans font-normal transition-all","text-primary hover:underline","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","[&[data-state=open]>svg]:rotate-180"],{variants:{size:{sm:"text-small py-3",default:"text-body py-4",lg:"text-lead py-5"}},defaultVariants:{size:"default"}}),c=u.forwardRef(({className:o,children:n,size:r,...t},i)=>e.jsx(We,{className:"flex",children:e.jsxs(He,{ref:i,className:z(Ke({size:r}),o),...t,children:[n,e.jsx(Ue,{className:"text-secondary h-4 w-4 shrink-0 transition-transform duration-200"})]})}));c.displayName="AccordionTrigger";const l=u.forwardRef(({className:o,children:n,...r},t)=>e.jsx($e,{ref:t,className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...r,children:e.jsx("div",{className:z("text-secondary pt-0 pb-4",o),children:n})}));l.displayName="AccordionContent";A.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};c.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const mo={title:"Navigation/Accordion",component:A,parameters:{layout:"centered"},tags:["autodocs"]},R={args:{type:"single",collapsible:!0,className:"w-[400px]"},render:o=>e.jsxs(A,{...o,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(c,{children:"Is it accessible?"}),e.jsx(l,{children:"Yes. It adheres to the WAI-ARIA design pattern for accordions."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(c,{children:"Is it styled?"}),e.jsx(l,{children:"Yes. It comes with default styles that match Engrate's design system."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(c,{children:"Is it animated?"}),e.jsx(l,{children:"Yes. It features smooth expand and collapse animations."})]})]})},_={args:{type:"multiple",className:"w-[400px]"},render:o=>e.jsxs(A,{...o,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(c,{children:"First Section"}),e.jsx(l,{children:"Multiple items can be open at the same time in this mode."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(c,{children:"Second Section"}),e.jsx(l,{children:"Click on multiple headers to expand them simultaneously."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(c,{children:"Third Section"}),e.jsx(l,{children:"This is useful when users need to compare content across sections."})]})]})},P={args:{type:"single",collapsible:!0,variant:"bordered",className:"w-[400px]"},render:o=>e.jsxs(A,{...o,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(c,{className:"px-4",children:"What is Engrate?"}),e.jsx(l,{className:"px-4",children:"Engrate is a platform that makes the transition to sustainability faster, more democratic, and more profitable."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(c,{className:"px-4",children:"How does it work?"}),e.jsx(l,{className:"px-4",children:"We leverage AI to handle the complexity of energy data, making it accessible and actionable for everyone."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(c,{className:"px-4",children:"What is the goal?"}),e.jsx(l,{className:"px-4",children:"Our overarching goal is to become the global standard for energy data."})]})]})},E={args:{type:"single",collapsible:!0,defaultValue:"item-2",className:"w-[400px]"},render:o=>e.jsxs(A,{...o,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(c,{children:"Getting Started"}),e.jsx(l,{children:"Learn how to get started with our platform and set up your account."})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(c,{children:"Configuration"}),e.jsx(l,{children:"This section is open by default. Configure your settings and preferences here."})]}),e.jsxs(s,{value:"item-3",children:[e.jsx(c,{children:"Advanced Usage"}),e.jsx(l,{children:"Explore advanced features and integrations available on our platform."})]})]})},k={args:{type:"single",collapsible:!0},render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Small"}),e.jsx(A,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(s,{value:"item-1",children:[e.jsx(c,{size:"sm",children:"Small trigger text"}),e.jsx(l,{children:"Content with a small trigger size."})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Default"}),e.jsx(A,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(s,{value:"item-1",children:[e.jsx(c,{size:"default",children:"Default trigger text"}),e.jsx(l,{children:"Content with a default trigger size."})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Large"}),e.jsx(A,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(s,{value:"item-1",children:[e.jsx(c,{size:"lg",children:"Large trigger text"}),e.jsx(l,{children:"Content with a large trigger size."})]})})]})]})},D={args:{type:"single",collapsible:!0},render:()=>e.jsxs("div",{className:"w-150",children:[e.jsx("h2",{className:"text-primary font-display mb-6 text-2xl",children:"Frequently Asked Questions"}),e.jsxs(A,{type:"single",collapsible:!0,children:[e.jsxs(s,{value:"faq-1",children:[e.jsx(c,{children:"How do I create an account?"}),e.jsx(l,{children:`To create an account, click the "Sign Up" button in the top right corner of the page. Fill in your email address and create a password. You'll receive a confirmation email to verify your account.`})]}),e.jsxs(s,{value:"faq-2",children:[e.jsx(c,{children:"What payment methods do you accept?"}),e.jsx(l,{children:"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. Contact our sales team for custom billing arrangements."})]}),e.jsxs(s,{value:"faq-3",children:[e.jsx(c,{children:"Can I export my data?"}),e.jsx(l,{children:"Yes, you can export your data at any time. Go to Settings > Data Management > Export. You can choose to export in CSV, JSON, or Excel format. Your data belongs to you."})]}),e.jsxs(s,{value:"faq-4",children:[e.jsx(c,{children:"How do I contact support?"}),e.jsx(l,{children:"You can reach our support team via email at support@engrate.com or through the in-app chat. Enterprise customers have access to dedicated support channels with guaranteed response times."})]})]})]})},O={args:{type:"single",collapsible:!0,className:"w-[500px]"},render:o=>e.jsxs(A,{...o,children:[e.jsxs(s,{value:"item-1",children:[e.jsx(c,{children:"Features Overview"}),e.jsx(l,{children:e.jsxs("ul",{className:"list-disc space-y-2 pl-4",children:[e.jsx("li",{children:"Real-time energy monitoring"}),e.jsx("li",{children:"Automated reporting and analytics"}),e.jsx("li",{children:"AI-powered insights and recommendations"}),e.jsx("li",{children:"Integration with major energy providers"}),e.jsx("li",{children:"Custom dashboards and visualizations"})]})})]}),e.jsxs(s,{value:"item-2",children:[e.jsx(c,{children:"Pricing Plans"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Starter"}),e.jsx("p",{className:"text-secondary text-sm",children:"Perfect for small businesses. $49/month"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Professional"}),e.jsx("p",{className:"text-secondary text-sm",children:"For growing companies. $149/month"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Enterprise"}),e.jsx("p",{className:"text-secondary text-sm",children:"Custom solutions. Contact us"})]})]})})]})]})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern for accordions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match Engrate&apos;s design
          system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It features smooth expand and collapse animations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...R.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          Multiple items can be open at the same time in this mode.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          Click on multiple headers to expand them simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Section</AccordionTrigger>
        <AccordionContent>
          This is useful when users need to compare content across sections.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    variant: 'bordered',
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-4">What is Engrate?</AccordionTrigger>
        <AccordionContent className="px-4">
          Engrate is a platform that makes the transition to sustainability
          faster, more democratic, and more profitable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="px-4">How does it work?</AccordionTrigger>
        <AccordionContent className="px-4">
          We leverage AI to handle the complexity of energy data, making it
          accessible and actionable for everyone.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="px-4">What is the goal?</AccordionTrigger>
        <AccordionContent className="px-4">
          Our overarching goal is to become the global standard for energy data.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-2',
    className: 'w-[400px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          Learn how to get started with our platform and set up your account.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Configuration</AccordionTrigger>
        <AccordionContent>
          This section is open by default. Configure your settings and
          preferences here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Advanced Usage</AccordionTrigger>
        <AccordionContent>
          Explore advanced features and integrations available on our platform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-secondary mb-2 text-sm">Small</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="sm">Small trigger text</AccordionTrigger>
            <AccordionContent>
              Content with a small trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">Default</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="default">
              Default trigger text
            </AccordionTrigger>
            <AccordionContent>
              Content with a default trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">Large</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="lg">Large trigger text</AccordionTrigger>
            <AccordionContent>
              Content with a large trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: () => <div className="w-150">
      <h2 className="text-primary font-display mb-6 text-2xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1">
          <AccordionTrigger>How do I create an account?</AccordionTrigger>
          <AccordionContent>
            To create an account, click the &quot;Sign Up&quot; button in the
            top right corner of the page. Fill in your email address and create
            a password. You&apos;ll receive a confirmation email to verify your
            account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, MasterCard, American
            Express), PayPal, and bank transfers for enterprise customers.
            Contact our sales team for custom billing arrangements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Can I export my data?</AccordionTrigger>
          <AccordionContent>
            Yes, you can export your data at any time. Go to Settings &gt; Data
            Management &gt; Export. You can choose to export in CSV, JSON, or
            Excel format. Your data belongs to you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach our support team via email at support@engrate.com or
            through the in-app chat. Enterprise customers have access to
            dedicated support channels with guaranteed response times.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-[500px]'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Features Overview</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc space-y-2 pl-4">
            <li>Real-time energy monitoring</li>
            <li>Automated reporting and analytics</li>
            <li>AI-powered insights and recommendations</li>
            <li>Integration with major energy providers</li>
            <li>Custom dashboards and visualizations</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pricing Plans</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-primary font-medium">Starter</h4>
              <p className="text-secondary text-sm">
                Perfect for small businesses. $49/month
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium">Professional</h4>
              <p className="text-secondary text-sm">
                For growing companies. $149/month
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium">Enterprise</h4>
              <p className="text-secondary text-sm">
                Custom solutions. Contact us
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...O.parameters?.docs?.source}}};const po=["Default","Multiple","Bordered","WithDefaultOpen","Sizes","FAQ","NestedContent"];export{P as Bordered,R as Default,D as FAQ,_ as Multiple,O as NestedContent,k as Sizes,E as WithDefaultOpen,po as __namedExportsOrder,mo as default};
