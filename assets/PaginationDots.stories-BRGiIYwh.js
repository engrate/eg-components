import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DZUoxlIx.js";import{c as f}from"./index-DDA3KdpW.js";import{c as h}from"./utils-ryREhF4q.js";import"./preload-helper-PPVm8Dsz.js";const D=o.createContext(null);function P(){const n=o.useContext(D);if(!n)throw new Error("PaginationDot must be used within a PaginationDots component");return n}const j=f("inline-flex items-center justify-center font-sans",{variants:{size:{sm:"gap-1.5",default:"gap-2",lg:"gap-2.5"}},defaultVariants:{size:"default"}}),r=o.forwardRef(({className:n,value:a,onValueChange:s,size:l="default",children:i,...c},v)=>e.jsx(D.Provider,{value:{value:a,onValueChange:s,size:l??"default"},children:e.jsx("div",{ref:v,role:"group","aria-label":"Content navigation",className:h(j({size:l}),n),...c,children:i})}));r.displayName="PaginationDots";const y=f("focus-visible:ring-sunflower rounded-full transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{size:{sm:"h-1.5",default:"h-2",lg:"h-2.5"},active:{true:"bg-sunflower",false:"bg-border hover:bg-quaternary"}},compoundVariants:[{size:"sm",active:!1,class:"w-1.5"},{size:"default",active:!1,class:"w-2"},{size:"lg",active:!1,class:"w-2.5"},{size:"sm",active:!0,class:"w-4"},{size:"default",active:!0,class:"w-6"},{size:"lg",active:!0,class:"w-8"}],defaultVariants:{size:"default",active:!1}}),t=o.forwardRef(({className:n,index:a,...s},l)=>{const{value:i,onValueChange:c,size:v}=P(),p=a===i;return e.jsx("button",{ref:l,type:"button","aria-label":`Go to slide ${a+1}`,"aria-current":p?"true":void 0,onClick:()=>c?.(a),className:h(y({size:v,active:p}),n),...s})});t.displayName="PaginationDot";r.__docgenInfo={description:`A dot indicator for switching between content panels (e.g. carousels).
The active dot smoothly morphs into a wider pill shape.

@example
\`\`\`tsx
<PaginationDots value={active} onValueChange={setActive}>
  <PaginationDot index={0} />
  <PaginationDot index={1} />
  <PaginationDot index={2} />
</PaginationDots>
\`\`\``,methods:[],displayName:"PaginationDots",props:{value:{required:!0,tsType:{name:"number"},description:"The index of the currently active dot (zero-based)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback fired when a dot is clicked"},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};t.__docgenInfo={description:`An individual dot within a PaginationDots group.
Renders as a clickable button that morphs into a pill shape when active.`,methods:[],displayName:"PaginationDot",props:{index:{required:!0,tsType:{name:"number"},description:"Zero-based index of this dot"}},composes:["Omit"]};const C={title:"Navigation/PaginationDots",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the dots"},value:{control:{type:"number",min:0,max:9},description:"The currently active dot index (zero-based)"}}},d={args:{value:0,children:void 0},render:n=>{const[a,s]=o.useState(n.value??0);return e.jsxs(r,{value:a,onValueChange:s,size:n.size,children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4})]})}},u={args:{value:1},render:n=>{const[a,s]=o.useState(n.value??0);return e.jsxs(r,{value:a,onValueChange:s,children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]})}},x={args:{value:3},render:n=>{const[a,s]=o.useState(n.value??0);return e.jsx(r,{value:a,onValueChange:s,children:Array.from({length:8},(l,i)=>e.jsx(t,{index:i},i))})}},g={args:{value:2},render:()=>{const[n,a]=o.useState(2),[s,l]=o.useState(2),[i,c]=o.useState(2);return e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Small"}),e.jsxs(r,{value:n,onValueChange:a,size:"sm",children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4})]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Default"}),e.jsxs(r,{value:s,onValueChange:l,size:"default",children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4})]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-small text-secondary",children:"Large"}),e.jsxs(r,{value:i,onValueChange:c,size:"lg",children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4})]})]})]})}},m={args:{value:0},render:()=>{const n=[{title:"Welcome",description:"Get started with our platform."},{title:"Discover",description:"Explore energy data insights."},{title:"Optimize",description:"Make data-driven decisions."}],[a,s]=o.useState(0);return e.jsxs("div",{className:"flex w-80 flex-col items-center gap-6",children:[e.jsxs("div",{className:"bg-card border-border w-full rounded-lg border p-6 text-center",children:[e.jsx("h3",{className:"text-body text-primary font-sans font-normal",children:n[a]?.title}),e.jsx("p",{className:"text-small text-secondary mt-1",children:n[a]?.description})]}),e.jsx(r,{value:a,onValueChange:s,children:n.map((l,i)=>e.jsx(t,{index:i},i))})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    children: undefined
  },
  render: args => {
    const [active, setActive] = useState(args.value ?? 0);
    return <PaginationDots value={active} onValueChange={setActive} size={args.size}>
        <PaginationDot index={0} />
        <PaginationDot index={1} />
        <PaginationDot index={2} />
        <PaginationDot index={3} />
        <PaginationDot index={4} />
      </PaginationDots>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1
  },
  render: args => {
    const [active, setActive] = useState(args.value ?? 0);
    return <PaginationDots value={active} onValueChange={setActive}>
        <PaginationDot index={0} />
        <PaginationDot index={1} />
        <PaginationDot index={2} />
      </PaginationDots>;
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3
  },
  render: args => {
    const [active, setActive] = useState(args.value ?? 0);
    return <PaginationDots value={active} onValueChange={setActive}>
        {Array.from({
        length: 8
      }, (_, i) => <PaginationDot key={i} index={i} />)}
      </PaginationDots>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 2
  },
  render: () => {
    const [smActive, setSmActive] = useState(2);
    const [defaultActive, setDefaultActive] = useState(2);
    const [lgActive, setLgActive] = useState(2);
    return <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Small</span>
          <PaginationDots value={smActive} onValueChange={setSmActive} size="sm">
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Default</span>
          <PaginationDots value={defaultActive} onValueChange={setDefaultActive} size="default">
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-small text-secondary">Large</span>
          <PaginationDots value={lgActive} onValueChange={setLgActive} size="lg">
            <PaginationDot index={0} />
            <PaginationDot index={1} />
            <PaginationDot index={2} />
            <PaginationDot index={3} />
            <PaginationDot index={4} />
          </PaginationDots>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  },
  render: () => {
    const slides = [{
      title: 'Welcome',
      description: 'Get started with our platform.'
    }, {
      title: 'Discover',
      description: 'Explore energy data insights.'
    }, {
      title: 'Optimize',
      description: 'Make data-driven decisions.'
    }];
    const [active, setActive] = useState(0);
    return <div className="flex w-80 flex-col items-center gap-6">
        <div className="bg-card border-border w-full rounded-lg border p-6 text-center">
          <h3 className="text-body text-primary font-sans font-normal">
            {slides[active]?.title}
          </h3>
          <p className="text-small text-secondary mt-1">
            {slides[active]?.description}
          </p>
        </div>

        <PaginationDots value={active} onValueChange={setActive}>
          {slides.map((_, i) => <PaginationDot key={i} index={i} />)}
        </PaginationDots>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const S=["Default","ThreeDots","ManyDots","Sizes","WithContent"];export{d as Default,x as ManyDots,g as Sizes,u as ThreeDots,m as WithContent,S as __namedExportsOrder,C as default};
