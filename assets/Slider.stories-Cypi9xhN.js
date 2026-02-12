import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-8ZjGW1bL.js";import{c as ee}from"./index-BdQq_4o_.js";import{u as ge,c as P,P as k,a as Se}from"./index-vq7FDCki.js";import{u as E}from"./index-0XSAmNhF.js";import{u as ve}from"./index-DqRsrhi0.js";import{u as we}from"./index-Bl7XlPaJ.js";import{u as ye}from"./index-Cilvol-r.js";import{c as De}from"./index-CNEsLPUk.js";import{c as Ve}from"./index-HTk8j2sO.js";import{c as $}from"./utils-kmX6UHYG.js";import{L as te}from"./Label-GwBAix30.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BegXM43F.js";import"./index-CEILOffs.js";import"./index-BJfhS3PZ.js";var ae=["PageUp","PageDown"],re=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ne={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},_="Slider",[X,je,Re]=De(_),[se]=Se(_,[Re]),[Ne,H]=se(_),le=c.forwardRef((e,a)=>{const{name:r,min:n=0,max:l=100,step:d=1,orientation:s="horizontal",disabled:i=!1,minStepsBetweenThumbs:u=0,defaultValue:g=[n],value:p,onValueChange:o=()=>{},onValueCommit:m=()=>{},inverted:S=!1,form:y,...b}=e,x=c.useRef(new Set),f=c.useRef(0),v=s==="horizontal"?Pe:Ee,[h=[],C]=ge({prop:p,defaultProp:g,onChange:w=>{[...x.current][f.current]?.focus(),o(w)}}),O=c.useRef(h);function W(w){const V=ke(h,w);M(w,V)}function he(w){M(w,f.current)}function be(){const w=O.current[f.current];h[f.current]!==w&&m(h)}function M(w,V,{commit:U}={commit:!1}){const Q=Ke(d),Y=Le(Math.round((w-n)/d)*d+n,Q),z=ee(Y,[n,l]);C((N=[])=>{const j=Me(N,z,V);if(Ie(j,u*d)){f.current=j.indexOf(z);const Z=String(j)!==String(N);return Z&&U&&m(j),Z?j:N}else return N})}return t.jsx(Ne,{scope:e.__scopeSlider,name:r,disabled:i,min:n,max:l,valueIndexToChangeRef:f,thumbs:x.current,values:h,orientation:s,form:y,children:t.jsx(X.Provider,{scope:e.__scopeSlider,children:t.jsx(X.Slot,{scope:e.__scopeSlider,children:t.jsx(v,{"aria-disabled":i,"data-disabled":i?"":void 0,...b,ref:a,onPointerDown:P(b.onPointerDown,()=>{i||(O.current=h)}),min:n,max:l,inverted:S,onSlideStart:i?void 0:W,onSlideMove:i?void 0:he,onSlideEnd:i?void 0:be,onHomeKeyDown:()=>!i&&M(n,0,{commit:!0}),onEndKeyDown:()=>!i&&M(l,h.length-1,{commit:!0}),onStepKeyDown:({event:w,direction:V})=>{if(!i){const Y=ae.includes(w.key)||w.shiftKey&&re.includes(w.key)?10:1,z=f.current,N=h[z],j=d*Y*V;M(N+j,z,{commit:!0})}}})})})})});le.displayName=_;var[oe,ie]=se(_,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Pe=c.forwardRef((e,a)=>{const{min:r,max:n,dir:l,inverted:d,onSlideStart:s,onSlideMove:i,onSlideEnd:u,onStepKeyDown:g,...p}=e,[o,m]=c.useState(null),S=E(a,v=>m(v)),y=c.useRef(void 0),b=ve(l),x=b==="ltr",f=x&&!d||!x&&d;function R(v){const h=y.current||o.getBoundingClientRect(),C=[0,h.width],W=J(C,f?[r,n]:[n,r]);return y.current=h,W(v-h.left)}return t.jsx(oe,{scope:e.__scopeSlider,startEdge:f?"left":"right",endEdge:f?"right":"left",direction:f?1:-1,size:"width",children:t.jsx(de,{dir:b,"data-orientation":"horizontal",...p,ref:S,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:v=>{const h=R(v.clientX);s?.(h)},onSlideMove:v=>{const h=R(v.clientX);i?.(h)},onSlideEnd:()=>{y.current=void 0,u?.()},onStepKeyDown:v=>{const C=ne[f?"from-left":"from-right"].includes(v.key);g?.({event:v,direction:C?-1:1})}})})}),Ee=c.forwardRef((e,a)=>{const{min:r,max:n,inverted:l,onSlideStart:d,onSlideMove:s,onSlideEnd:i,onStepKeyDown:u,...g}=e,p=c.useRef(null),o=E(a,p),m=c.useRef(void 0),S=!l;function y(b){const x=m.current||p.current.getBoundingClientRect(),f=[0,x.height],v=J(f,S?[n,r]:[r,n]);return m.current=x,v(b-x.top)}return t.jsx(oe,{scope:e.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:t.jsx(de,{"data-orientation":"vertical",...g,ref:o,style:{...g.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:b=>{const x=y(b.clientY);d?.(x)},onSlideMove:b=>{const x=y(b.clientY);s?.(x)},onSlideEnd:()=>{m.current=void 0,i?.()},onStepKeyDown:b=>{const f=ne[S?"from-bottom":"from-top"].includes(b.key);u?.({event:b,direction:f?-1:1})}})})}),de=c.forwardRef((e,a)=>{const{__scopeSlider:r,onSlideStart:n,onSlideMove:l,onSlideEnd:d,onHomeKeyDown:s,onEndKeyDown:i,onStepKeyDown:u,...g}=e,p=H(_,r);return t.jsx(k.span,{...g,ref:a,onKeyDown:P(e.onKeyDown,o=>{o.key==="Home"?(s(o),o.preventDefault()):o.key==="End"?(i(o),o.preventDefault()):ae.concat(re).includes(o.key)&&(u(o),o.preventDefault())}),onPointerDown:P(e.onPointerDown,o=>{const m=o.target;m.setPointerCapture(o.pointerId),o.preventDefault(),p.thumbs.has(m)?m.focus():n(o)}),onPointerMove:P(e.onPointerMove,o=>{o.target.hasPointerCapture(o.pointerId)&&l(o)}),onPointerUp:P(e.onPointerUp,o=>{const m=o.target;m.hasPointerCapture(o.pointerId)&&(m.releasePointerCapture(o.pointerId),d(o))})})}),ce="SliderTrack",ue=c.forwardRef((e,a)=>{const{__scopeSlider:r,...n}=e,l=H(ce,r);return t.jsx(k.span,{"data-disabled":l.disabled?"":void 0,"data-orientation":l.orientation,...n,ref:a})});ue.displayName=ce;var G="SliderRange",me=c.forwardRef((e,a)=>{const{__scopeSlider:r,...n}=e,l=H(G,r),d=ie(G,r),s=c.useRef(null),i=E(a,s),u=l.values.length,g=l.values.map(m=>xe(m,l.min,l.max)),p=u>1?Math.min(...g):0,o=100-Math.max(...g);return t.jsx(k.span,{"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,...n,ref:i,style:{...e.style,[d.startEdge]:p+"%",[d.endEdge]:o+"%"}})});me.displayName=G;var q="SliderThumb",fe=c.forwardRef((e,a)=>{const r=je(e.__scopeSlider),[n,l]=c.useState(null),d=E(a,i=>l(i)),s=c.useMemo(()=>n?r().findIndex(i=>i.ref.current===n):-1,[r,n]);return t.jsx(_e,{...e,ref:d,index:s})}),_e=c.forwardRef((e,a)=>{const{__scopeSlider:r,index:n,name:l,...d}=e,s=H(q,r),i=ie(q,r),[u,g]=c.useState(null),p=E(a,R=>g(R)),o=u?s.form||!!u.closest("form"):!0,m=ye(u),S=s.values[n],y=S===void 0?0:xe(S,s.min,s.max),b=ze(n,s.values.length),x=m?.[i.size],f=x?Ae(x,y,i.direction):0;return c.useEffect(()=>{if(u)return s.thumbs.add(u),()=>{s.thumbs.delete(u)}},[u,s.thumbs]),t.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[i.startEdge]:`calc(${y}% + ${f}px)`},children:[t.jsx(X.ItemSlot,{scope:e.__scopeSlider,children:t.jsx(k.span,{role:"slider","aria-label":e["aria-label"]||b,"aria-valuemin":s.min,"aria-valuenow":S,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...d,ref:p,style:S===void 0?{display:"none"}:e.style,onFocus:P(e.onFocus,()=>{s.valueIndexToChangeRef.current=n})})}),o&&t.jsx(pe,{name:l??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:S},n)]})});fe.displayName=q;var Ce="RadioBubbleInput",pe=c.forwardRef(({__scopeSlider:e,value:a,...r},n)=>{const l=c.useRef(null),d=E(l,n),s=we(a);return c.useEffect(()=>{const i=l.current;if(!i)return;const u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"value").set;if(s!==a&&p){const o=new Event("input",{bubbles:!0});p.call(i,a),i.dispatchEvent(o)}},[s,a]),t.jsx(k.input,{style:{display:"none"},...r,ref:d,defaultValue:a})});pe.displayName=Ce;function Me(e=[],a,r){const n=[...e];return n[r]=a,n.sort((l,d)=>l-d)}function xe(e,a,r){const d=100/(r-a)*(e-a);return ee(d,[0,100])}function ze(e,a){return a>2?`Value ${e+1} of ${a}`:a===2?["Minimum","Maximum"][e]:void 0}function ke(e,a){if(e.length===1)return 0;const r=e.map(l=>Math.abs(l-a)),n=Math.min(...r);return r.indexOf(n)}function Ae(e,a,r){const n=e/2,d=J([0,50],[0,n]);return(n-d(a)*r)*r}function Be(e){return e.slice(0,-1).map((a,r)=>e[r+1]-a)}function Ie(e,a){if(a>0){const r=Be(e);return Math.min(...r)>=a}return!0}function J(e,a){return r=>{if(e[0]===e[1]||a[0]===a[1])return a[0];const n=(a[1]-a[0])/(e[1]-e[0]);return a[0]+n*(r-e[0])}}function Ke(e){return(String(e).split(".")[1]||"").length}function Le(e,a){const r=Math.pow(10,a);return Math.round(e*r)/r}var Te=le,Fe=ue,He=me,Oe=fe;const We=Ve("relative flex w-full touch-none items-center select-none",{variants:{size:{sm:"[--slider-thumb-size:theme(spacing.3)] [--slider-track-height:theme(spacing.1)]",default:"[--slider-thumb-size:theme(spacing.4)] [--slider-track-height:theme(spacing.2)]",lg:"[--slider-thumb-size:theme(spacing.5)] [--slider-track-height:theme(spacing.3)]"}},defaultVariants:{size:"default"}}),D=c.forwardRef(({className:e,size:a,defaultValue:r=[0],value:n,"aria-label":l,"aria-labelledby":d,...s},i)=>{const u=n?.length??r?.length??1;return t.jsxs(Te,{ref:i,defaultValue:r,value:n,className:$(We({size:a}),e),...s,children:[t.jsx(Fe,{className:$("bg-border relative h-[var(--slider-track-height)] w-full grow overflow-hidden rounded-full"),children:t.jsx(He,{className:"bg-sunflower absolute h-full"})}),Array.from({length:u}).map((g,p)=>t.jsx(Oe,{"aria-label":l,"aria-labelledby":d,className:$("border-sunflower block h-[var(--slider-thumb-size)] w-[var(--slider-thumb-size)] rounded-full border-2 bg-white shadow-md transition-colors","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:pointer-events-none disabled:opacity-50","hover:border-sunflower-hover")},p))]})});D.displayName="Slider";D.__docgenInfo={description:`Slider component following Engrate brand guidelines.
Built on Radix UI Slider for accessibility.
Features sunflower fill for the active range.

@example
\`\`\`tsx
<Slider defaultValue={[50]} max={100} />
<Slider defaultValue={[25, 75]} max={100} /> // Range slider
<Slider size="lg" step={10} />
\`\`\``,methods:[],displayName:"Slider",props:{defaultValue:{defaultValue:{value:"[0]",computed:!1},required:!1}},composes:["VariantProps"]};const ot={title:"Forms/Slider",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the slider is disabled"},size:{control:"select",options:["sm","default","lg"],description:"The size of the slider"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},step:{control:"number",description:"Step increment"}},decorators:[e=>t.jsx("div",{className:"w-64",children:t.jsx(e,{})})]},A={args:{defaultValue:[50],max:100,"aria-label":"Default slider"}},B={args:{defaultValue:[50],max:100,disabled:!0,"aria-label":"Disabled slider"}},I={args:{defaultValue:[25,75],max:100,"aria-label":"Range slider"}},K={args:{defaultValue:[50],max:100,step:10,"aria-label":"Stepped slider"}},L={render:()=>t.jsxs("div",{className:"flex w-64 flex-col gap-2",children:[t.jsx(te,{htmlFor:"volume",children:"Volume"}),t.jsx(D,{id:"volume",defaultValue:[50],max:100,"aria-label":"Volume"})]})},T={render:function(){const[a,r]=c.useState([50]);return t.jsxs("div",{className:"flex w-64 flex-col gap-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx(te,{htmlFor:"brightness",children:"Brightness"}),t.jsxs("span",{className:"text-small text-secondary",children:[a[0],"%"]})]}),t.jsx(D,{id:"brightness",value:a,onValueChange:r,max:100,"aria-label":"Brightness"})]})}},F={render:()=>t.jsxs("div",{className:"flex w-64 flex-col gap-8",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Sizes"}),t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-small text-tertiary mb-1 block",children:"Small"}),t.jsx(D,{defaultValue:[50],max:100,size:"sm","aria-label":"Small slider"})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-small text-tertiary mb-1 block",children:"Default"}),t.jsx(D,{defaultValue:[50],max:100,size:"default","aria-label":"Default slider"})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-small text-tertiary mb-1 block",children:"Large"}),t.jsx(D,{defaultValue:[50],max:100,size:"lg","aria-label":"Large slider"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"States"}),t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-small text-tertiary mb-1 block",children:"Default"}),t.jsx(D,{defaultValue:[50],max:100,"aria-label":"Default state slider"})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-small text-tertiary mb-1 block",children:"Disabled"}),t.jsx(D,{defaultValue:[50],max:100,disabled:!0,"aria-label":"Disabled slider"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Range slider"}),t.jsx(D,{defaultValue:[25,75],max:100,"aria-label":"Range selection slider"})]})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    'aria-label': 'Default slider'
  }
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    disabled: true,
    'aria-label': 'Disabled slider'
  }
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    max: 100,
    'aria-label': 'Range slider'
  }
}`,...I.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    'aria-label': 'Stepped slider'
  }
}`,...K.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="volume">Volume</Label>
      <Slider id="volume" defaultValue={[50]} max={100} aria-label="Volume" />
    </div>
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function RenderWithValue() {
    const [value, setValue] = React.useState([50]);
    return <div className="flex w-64 flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="brightness">Brightness</Label>
          <span className="text-small text-secondary">{value[0]}%</span>
        </div>
        <Slider id="brightness" value={value} onValueChange={setValue} max={100} aria-label="Brightness" />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Sizes</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-small text-tertiary mb-1 block">Small</span>
            <Slider defaultValue={[50]} max={100} size="sm" aria-label="Small slider" />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">Default</span>
            <Slider defaultValue={[50]} max={100} size="default" aria-label="Default slider" />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">Large</span>
            <Slider defaultValue={[50]} max={100} size="lg" aria-label="Large slider" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">States</h3>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-small text-tertiary mb-1 block">Default</span>
            <Slider defaultValue={[50]} max={100} aria-label="Default state slider" />
          </div>
          <div>
            <span className="text-small text-tertiary mb-1 block">
              Disabled
            </span>
            <Slider defaultValue={[50]} max={100} disabled aria-label="Disabled slider" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          Range slider
        </h3>
        <Slider defaultValue={[25, 75]} max={100} aria-label="Range selection slider" />
      </div>
    </div>
}`,...F.parameters?.docs?.source}}};const it=["Default","Disabled","Range","WithStep","WithLabel","WithValueDisplay","AllStates"];export{F as AllStates,A as Default,B as Disabled,I as Range,L as WithLabel,K as WithStep,T as WithValueDisplay,it as __namedExportsOrder,ot as default};
