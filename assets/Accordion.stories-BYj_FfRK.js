import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p,r as E}from"./iframe-DwQMX4V-.js";import{P as G,u as U,c as de,a as le}from"./index-sAtsbiZQ.js";import{c as me}from"./index-2Ecpkjb_.js";import{u as pe}from"./index-BOtO_dgM.js";import{R as ge,T as ue,C as he,c as K,a as xe}from"./chevron-down-Cja-ti73.js";import{u as Ae}from"./index-CL5y0uMK.js";import{u as fe}from"./index-C4ZkWfjf.js";import{c as Q}from"./index-HTk8j2sO.js";import{c as P}from"./utils-kmX6UHYG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pqHMlVdt.js";import"./index-B5sP-gJE.js";import"./index-Dk_fQXeU.js";import"./createLucideIcon-BqOe5rfF.js";var u="Accordion",ve=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[q,ye,je]=me(u),[R]=le(u,[je,K]),F=K(),B=p.forwardRef((o,c)=>{const{type:r,...t}=o,d=t,n=t;return e.jsx(q.Provider,{scope:o.__scopeAccordion,children:r==="multiple"?e.jsx(Ne,{...n,ref:c}):e.jsx(Ie,{...d,ref:c})})});B.displayName=u;var[J,Ce]=R(u),[X,be]=R(u,{collapsible:!1}),Ie=p.forwardRef((o,c)=>{const{value:r,defaultValue:t,onValueChange:d=()=>{},collapsible:n=!1,...m}=o,[l,h]=U({prop:r,defaultProp:t??"",onChange:d,caller:u});return e.jsx(J,{scope:o.__scopeAccordion,value:p.useMemo(()=>l?[l]:[],[l]),onItemOpen:h,onItemClose:p.useCallback(()=>n&&h(""),[n,h]),children:e.jsx(X,{scope:o.__scopeAccordion,collapsible:n,children:e.jsx(Z,{...m,ref:c})})})}),Ne=p.forwardRef((o,c)=>{const{value:r,defaultValue:t,onValueChange:d=()=>{},...n}=o,[m,l]=U({prop:r,defaultProp:t??[],onChange:d,caller:u}),h=p.useCallback(v=>l((A=[])=>[...A,v]),[l]),f=p.useCallback(v=>l((A=[])=>A.filter(D=>D!==v)),[l]);return e.jsx(J,{scope:o.__scopeAccordion,value:m,onItemOpen:h,onItemClose:f,children:e.jsx(X,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(Z,{...n,ref:c})})})}),[we,k]=R(u),Z=p.forwardRef((o,c)=>{const{__scopeAccordion:r,disabled:t,dir:d,orientation:n="vertical",...m}=o,l=p.useRef(null),h=pe(l,c),f=ye(r),A=fe(d)==="ltr",D=de(o.onKeyDown,y=>{if(!ve.includes(y.key))return;const ie=y.target,z=f().filter(W=>!W.ref.current?.disabled),j=z.findIndex(W=>W.ref.current===ie),$=z.length;if(j===-1)return;y.preventDefault();let x=j;const O=0,V=$-1,M=()=>{x=j+1,x>V&&(x=O)},Y=()=>{x=j-1,x<O&&(x=V)};switch(y.key){case"Home":x=O;break;case"End":x=V;break;case"ArrowRight":n==="horizontal"&&(A?M():Y());break;case"ArrowDown":n==="vertical"&&M();break;case"ArrowLeft":n==="horizontal"&&(A?Y():M());break;case"ArrowUp":n==="vertical"&&Y();break}const se=x%$;z[se].ref.current?.focus()});return e.jsx(we,{scope:r,disabled:t,direction:d,orientation:n,children:e.jsx(q.Slot,{scope:r,children:e.jsx(G.div,{...m,"data-orientation":n,ref:h,onKeyDown:t?void 0:D})})})}),_="AccordionItem",[Te,L]=R(_),ee=p.forwardRef((o,c)=>{const{__scopeAccordion:r,value:t,...d}=o,n=k(_,r),m=Ce(_,r),l=F(r),h=Ae(),f=t&&m.value.includes(t)||!1,v=n.disabled||o.disabled;return e.jsx(Te,{scope:r,open:f,disabled:v,triggerId:h,children:e.jsx(ge,{"data-orientation":n.orientation,"data-state":ae(f),...l,...d,ref:c,disabled:v,open:f,onOpenChange:A=>{A?m.onItemOpen(t):m.onItemClose(t)}})})});ee.displayName=_;var oe="AccordionHeader",re=p.forwardRef((o,c)=>{const{__scopeAccordion:r,...t}=o,d=k(u,r),n=L(oe,r);return e.jsx(G.h3,{"data-orientation":d.orientation,"data-state":ae(n.open),"data-disabled":n.disabled?"":void 0,...t,ref:c})});re.displayName=oe;var H="AccordionTrigger",te=p.forwardRef((o,c)=>{const{__scopeAccordion:r,...t}=o,d=k(u,r),n=L(H,r),m=be(H,r),l=F(r);return e.jsx(q.ItemSlot,{scope:r,children:e.jsx(ue,{"aria-disabled":n.open&&!m.collapsible||void 0,"data-orientation":d.orientation,id:n.triggerId,...l,...t,ref:c})})});te.displayName=H;var ne="AccordionContent",ce=p.forwardRef((o,c)=>{const{__scopeAccordion:r,...t}=o,d=k(u,r),n=L(ne,r),m=F(r);return e.jsx(he,{role:"region","aria-labelledby":n.triggerId,"data-orientation":d.orientation,...m,...t,ref:c,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});ce.displayName=ne;function ae(o){return o?"open":"closed"}var Se=B,_e=ee,Ee=re,Pe=te,Re=ce;const ke=Q("w-full",{variants:{variant:{default:"",bordered:"border-border rounded-lg border"}},defaultVariants:{variant:"default"}}),g=E.forwardRef(({className:o,variant:c,...r},t)=>e.jsx(Se,{ref:t,className:P(ke({variant:c}),o),...r}));g.displayName="Accordion";const a=E.forwardRef(({className:o,...c},r)=>e.jsx(_e,{ref:r,className:P("border-border border-b last:border-b-0",o),...c}));a.displayName="AccordionItem";const De=Q(["flex flex-1 items-center justify-between py-4 text-left font-sans font-normal transition-all","text-primary hover:underline","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","[&[data-state=open]>svg]:rotate-180"],{variants:{size:{sm:"text-small py-3",default:"text-body py-4",lg:"text-lead py-5"}},defaultVariants:{size:"default"}}),i=E.forwardRef(({className:o,children:c,size:r,...t},d)=>e.jsx(Ee,{className:"flex",children:e.jsxs(Pe,{ref:d,className:P(De({size:r}),o),...t,children:[c,e.jsx(xe,{className:"text-secondary h-4 w-4 shrink-0 transition-transform duration-200"})]})}));i.displayName="AccordionTrigger";const s=E.forwardRef(({className:o,children:c,...r},t)=>e.jsx(Re,{ref:t,className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...r,children:e.jsx("div",{className:P("text-secondary pt-0 pb-4",o),children:c})}));s.displayName="AccordionContent";g.__docgenInfo={description:"",methods:[],displayName:"Accordion"};a.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};i.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",composes:["VariantProps"]};s.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const Be={title:"Navigation/Accordion",component:g,parameters:{layout:"centered"},tags:["autodocs"]},C={args:{type:"single",collapsible:!0,className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(a,{value:"item-1",children:[e.jsx(i,{children:"Is it accessible?"}),e.jsx(s,{children:"Yes. It adheres to the WAI-ARIA design pattern for accordions."})]}),e.jsxs(a,{value:"item-2",children:[e.jsx(i,{children:"Is it styled?"}),e.jsx(s,{children:"Yes. It comes with default styles that match Engrate's design system."})]}),e.jsxs(a,{value:"item-3",children:[e.jsx(i,{children:"Is it animated?"}),e.jsx(s,{children:"Yes. It features smooth expand and collapse animations."})]})]})},b={args:{type:"multiple",className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(a,{value:"item-1",children:[e.jsx(i,{children:"First Section"}),e.jsx(s,{children:"Multiple items can be open at the same time in this mode."})]}),e.jsxs(a,{value:"item-2",children:[e.jsx(i,{children:"Second Section"}),e.jsx(s,{children:"Click on multiple headers to expand them simultaneously."})]}),e.jsxs(a,{value:"item-3",children:[e.jsx(i,{children:"Third Section"}),e.jsx(s,{children:"This is useful when users need to compare content across sections."})]})]})},I={args:{type:"single",collapsible:!0,variant:"bordered",className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(a,{value:"item-1",children:[e.jsx(i,{className:"px-4",children:"What is Engrate?"}),e.jsx(s,{className:"px-4",children:"Engrate is a platform that makes the transition to sustainability faster, more democratic, and more profitable."})]}),e.jsxs(a,{value:"item-2",children:[e.jsx(i,{className:"px-4",children:"How does it work?"}),e.jsx(s,{className:"px-4",children:"We leverage AI to handle the complexity of energy data, making it accessible and actionable for everyone."})]}),e.jsxs(a,{value:"item-3",children:[e.jsx(i,{className:"px-4",children:"What is the goal?"}),e.jsx(s,{className:"px-4",children:"Our overarching goal is to become the global standard for energy data."})]})]})},N={args:{type:"single",collapsible:!0,defaultValue:"item-2",className:"w-[400px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(a,{value:"item-1",children:[e.jsx(i,{children:"Getting Started"}),e.jsx(s,{children:"Learn how to get started with our platform and set up your account."})]}),e.jsxs(a,{value:"item-2",children:[e.jsx(i,{children:"Configuration"}),e.jsx(s,{children:"This section is open by default. Configure your settings and preferences here."})]}),e.jsxs(a,{value:"item-3",children:[e.jsx(i,{children:"Advanced Usage"}),e.jsx(s,{children:"Explore advanced features and integrations available on our platform."})]})]})},w={args:{type:"single",collapsible:!0},render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Small"}),e.jsx(g,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(a,{value:"item-1",children:[e.jsx(i,{size:"sm",children:"Small trigger text"}),e.jsx(s,{children:"Content with a small trigger size."})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Default"}),e.jsx(g,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(a,{value:"item-1",children:[e.jsx(i,{size:"default",children:"Default trigger text"}),e.jsx(s,{children:"Content with a default trigger size."})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-secondary mb-2 text-sm",children:"Large"}),e.jsx(g,{type:"single",collapsible:!0,className:"w-100",children:e.jsxs(a,{value:"item-1",children:[e.jsx(i,{size:"lg",children:"Large trigger text"}),e.jsx(s,{children:"Content with a large trigger size."})]})})]})]})},T={args:{type:"single",collapsible:!0},render:()=>e.jsxs("div",{className:"w-150",children:[e.jsx("h2",{className:"text-primary font-display mb-6 text-2xl",children:"Frequently Asked Questions"}),e.jsxs(g,{type:"single",collapsible:!0,children:[e.jsxs(a,{value:"faq-1",children:[e.jsx(i,{children:"How do I create an account?"}),e.jsx(s,{children:`To create an account, click the "Sign Up" button in the top right corner of the page. Fill in your email address and create a password. You'll receive a confirmation email to verify your account.`})]}),e.jsxs(a,{value:"faq-2",children:[e.jsx(i,{children:"What payment methods do you accept?"}),e.jsx(s,{children:"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. Contact our sales team for custom billing arrangements."})]}),e.jsxs(a,{value:"faq-3",children:[e.jsx(i,{children:"Can I export my data?"}),e.jsx(s,{children:"Yes, you can export your data at any time. Go to Settings > Data Management > Export. You can choose to export in CSV, JSON, or Excel format. Your data belongs to you."})]}),e.jsxs(a,{value:"faq-4",children:[e.jsx(i,{children:"How do I contact support?"}),e.jsx(s,{children:"You can reach our support team via email at support@engrate.com or through the in-app chat. Enterprise customers have access to dedicated support channels with guaranteed response times."})]})]})]})},S={args:{type:"single",collapsible:!0,className:"w-[500px]"},render:o=>e.jsxs(g,{...o,children:[e.jsxs(a,{value:"item-1",children:[e.jsx(i,{children:"Features Overview"}),e.jsx(s,{children:e.jsxs("ul",{className:"list-disc space-y-2 pl-4",children:[e.jsx("li",{children:"Real-time energy monitoring"}),e.jsx("li",{children:"Automated reporting and analytics"}),e.jsx("li",{children:"AI-powered insights and recommendations"}),e.jsx("li",{children:"Integration with major energy providers"}),e.jsx("li",{children:"Custom dashboards and visualizations"})]})})]}),e.jsxs(a,{value:"item-2",children:[e.jsx(i,{children:"Pricing Plans"}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Starter"}),e.jsx("p",{className:"text-secondary text-sm",children:"Perfect for small businesses. $49/month"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Professional"}),e.jsx("p",{className:"text-secondary text-sm",children:"For growing companies. $149/month"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-primary font-medium",children:"Enterprise"}),e.jsx("p",{className:"text-secondary text-sm",children:"Custom solutions. Contact us"})]})]})})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Je=["Default","Multiple","Bordered","WithDefaultOpen","Sizes","FAQ","NestedContent"];export{I as Bordered,C as Default,T as FAQ,b as Multiple,S as NestedContent,w as Sizes,N as WithDefaultOpen,Je as __namedExportsOrder,Be as default};
