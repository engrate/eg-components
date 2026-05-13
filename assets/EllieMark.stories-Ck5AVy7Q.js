import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-koNkZn7R.js";import{c as y}from"./utils-kmX6UHYG.js";import{h as w,i as v,p as b,m as p}from"./proxy-CDkgbBis.js";import"./preload-helper-PPVm8Dsz.js";function j(){!w.current&&v();const[r]=n.useState(b.current);return r}const i=n.forwardRef(({size:r=32,className:u,...f},x)=>{const c=j(),[g,d]=n.useState(!1);return n.useEffect(()=>{if(c)return;let l;const m=()=>{const h=3500+Math.random()*5500;l=window.setTimeout(()=>{d(!0),window.setTimeout(()=>{d(!1),m()},130)},h)};return m(),()=>{l!==void 0&&window.clearTimeout(l)}},[c]),e.jsx(p.svg,{ref:x,width:r,height:r,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",className:y("inline-block shrink-0",u),animate:c?void 0:{scale:[1,1.025,1]},transition:{duration:4.4,repeat:1/0,ease:"easeInOut"},"aria-hidden":"true",...f,children:e.jsxs(p.g,{animate:{scaleY:g?.16:1},transition:{duration:.12,ease:"easeOut"},style:{transformOrigin:"16px 16px"},children:[e.jsx("rect",{x:"12.5",y:"11",width:"7",height:"6",fill:"var(--color-sunflower)"}),e.jsx("circle",{cx:"9.5",cy:"16",r:"7.5",fill:"var(--color-sunflower)"}),e.jsx("circle",{cx:"9.5",cy:"16",r:"6.1",fill:"var(--color-quaternary)"}),e.jsx("circle",{cx:"9.5",cy:"16",r:"5",fill:"#0a0a0a"}),e.jsx("circle",{cx:"7.9",cy:"14.4",r:"1.4",fill:"#ffffff",opacity:"0.95"}),e.jsx("circle",{cx:"22.5",cy:"16",r:"7.5",fill:"var(--color-sunflower)"}),e.jsx("circle",{cx:"22.5",cy:"16",r:"6.1",fill:"var(--color-quaternary)"}),e.jsx("circle",{cx:"22.5",cy:"16",r:"5",fill:"#0a0a0a"}),e.jsx("circle",{cx:"20.9",cy:"14.4",r:"1.4",fill:"#ffffff",opacity:"0.95"}),e.jsx("path",{d:"M 2 16.5 a 7.5 7.5 0 0 0 15 0",fill:"none",stroke:"#000000",strokeOpacity:"0.18",strokeWidth:"0.5"}),e.jsx("path",{d:"M 15 16.5 a 7.5 7.5 0 0 0 15 0",fill:"none",stroke:"#000000",strokeOpacity:"0.18",strokeWidth:"0.5"})]})})});i.displayName="EllieMark";i.__docgenInfo={description:`Brand mark for Ellie — Engrate's chat assistant. WALL-E-style binocular
visor: two sunflower goggle barrels bridged at the top, each with a
metallic rim, dark glass, and an upper-left reflection. The visor briefly
narrows on a random interval for a robotic "blink" matching the cadence
of \`ellie-alive.mp4\`. Respects \`prefers-reduced-motion\`.`,methods:[],displayName:"EllieMark",props:{size:{required:!1,tsType:{name:"number"},description:`Diameter in pixels.
@default 32`,defaultValue:{value:"32",computed:!1}}},composes:["Omit"]};const S={title:"UI/EllieMark",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"number",min:16,max:200,step:4}}}},s={args:{size:32}},a={args:{size:24},parameters:{docs:{description:{story:"Sized for inline use next to a chat bubble — small enough to sit beside a message without dominating."}}}},t={args:{size:96},parameters:{docs:{description:{story:"Larger placement for empty-state heroes. Same component — only `size` changes."}}}},o={args:{size:32},render:()=>e.jsx("div",{className:"flex items-end gap-6",children:[20,28,40,64,96].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(i,{size:r}),e.jsxs("span",{className:"text-label-sm text-tertiary font-mono",children:[r,"px"]})]},r))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'Sized for inline use next to a chat bubble — small enough to sit beside a message without dominating.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 96
  },
  parameters: {
    docs: {
      description: {
        story: 'Larger placement for empty-state heroes. Same component — only \`size\` changes.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32
  },
  render: () => <div className="flex items-end gap-6">
      {[20, 28, 40, 64, 96].map(s => <div key={s} className="flex flex-col items-center gap-2">
          <EllieMark size={s} />
          <span className="text-label-sm text-tertiary font-mono">{s}px</span>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}};const N=["Default","Inline","Hero","Range"];export{s as Default,t as Hero,a as Inline,o as Range,N as __namedExportsOrder,S as default};
