import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-C6CMsfN0.js";import{u as le,P as ce,c as P,a as de}from"./index-xSzvWiK1.js";import{u as X}from"./index-DtQ62xPZ.js";import{P as pe,D as ue}from"./index-CnVgb_44.js";import{u as he}from"./index-B53_HNiM.js";import{R as ge,A as Te,c as K,C as me,a as fe}from"./index-DAs2PMSo.js";import{P as J}from"./index-CoOYl0CT.js";import{R as xe}from"./index-BHNXOS7a.js";import{c as ve}from"./index-HTk8j2sO.js";import{c as Q}from"./utils-kmX6UHYG.js";import{B as f}from"./Button-DruFPOhL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lus5SmQY.js";import"./index-BVksvLjG.js";import"./index-CC1jVALe.js";import"./index-3xqwPjLR.js";import"./index-ccsgLY5a.js";var Ce=Symbol("radix.slottable");function we(t){const r=({children:o})=>e.jsx(e.Fragment,{children:o});return r.displayName=`${t}.Slottable`,r.__radixId=Ce,r}var[V]=de("Tooltip",[K]),W=K(),Z="TooltipProvider",ye=700,F="tooltip.open",[je,$]=V(Z),ee=t=>{const{__scopeTooltip:r,delayDuration:o=ye,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:c}=t,s=a.useRef(!0),T=a.useRef(!1),l=a.useRef(0);return a.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),e.jsx(je,{scope:r,isOpenDelayedRef:s,delayDuration:o,onOpen:a.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:a.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,n)},[n]),isPointerInTransitRef:T,onPointerInTransitChange:a.useCallback(u=>{T.current=u},[]),disableHoverableContent:i,children:c})};ee.displayName=Z;var B="Tooltip",[be,N]=V(B),te=t=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:c,disableHoverableContent:s,delayDuration:T}=t,l=$(B,t.__scopeTooltip),u=W(r),[d,h]=a.useState(null),m=he(),p=a.useRef(0),C=s??l.disableHoverableContent,y=T??l.delayDuration,w=a.useRef(!1),[b,j]=le({prop:n,defaultProp:i??!1,onChange:Y=>{Y?(l.onOpen(),document.dispatchEvent(new CustomEvent(F))):l.onClose(),c?.(Y)},caller:B}),E=a.useMemo(()=>b?w.current?"delayed-open":"instant-open":"closed",[b]),L=a.useCallback(()=>{window.clearTimeout(p.current),p.current=0,w.current=!1,j(!0)},[j]),R=a.useCallback(()=>{window.clearTimeout(p.current),p.current=0,j(!1)},[j]),U=a.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{w.current=!0,j(!0),p.current=0},y)},[y,j]);return a.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),e.jsx(ge,{...u,children:e.jsx(be,{scope:r,contentId:m,open:b,stateAttribute:E,trigger:d,onTriggerChange:h,onTriggerEnter:a.useCallback(()=>{l.isOpenDelayedRef.current?U():L()},[l.isOpenDelayedRef,U,L]),onTriggerLeave:a.useCallback(()=>{C?R():(window.clearTimeout(p.current),p.current=0)},[R,C]),onOpen:L,onClose:R,disableHoverableContent:C,children:o})})};te.displayName=B;var G="TooltipTrigger",oe=a.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=N(G,o),c=$(G,o),s=W(o),T=a.useRef(null),l=X(r,T,i.onTriggerChange),u=a.useRef(!1),d=a.useRef(!1),h=a.useCallback(()=>u.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),e.jsx(Te,{asChild:!0,...s,children:e.jsx(ce.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:l,onPointerMove:P(t.onPointerMove,m=>{m.pointerType!=="touch"&&!d.current&&!c.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:P(t.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:P(t.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:P(t.onFocus,()=>{u.current||i.onOpen()}),onBlur:P(t.onBlur,i.onClose),onClick:P(t.onClick,i.onClose)})})});oe.displayName=G;var z="TooltipPortal",[Pe,Ae]=V(z,{forceMount:void 0}),re=t=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=t,c=N(z,r);return e.jsx(Pe,{scope:r,forceMount:o,children:e.jsx(J,{present:o||c.open,children:e.jsx(pe,{asChild:!0,container:i,children:n})})})};re.displayName=z;var A="TooltipContent",ne=a.forwardRef((t,r)=>{const o=Ae(A,t.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...c}=t,s=N(A,t.__scopeTooltip);return e.jsx(J,{present:n||s.open,children:s.disableHoverableContent?e.jsx(ie,{side:i,...c,ref:r}):e.jsx(Ee,{side:i,...c,ref:r})})}),Ee=a.forwardRef((t,r)=>{const o=N(A,t.__scopeTooltip),n=$(A,t.__scopeTooltip),i=a.useRef(null),c=X(r,i),[s,T]=a.useState(null),{trigger:l,onClose:u}=o,d=i.current,{onPointerInTransitChange:h}=n,m=a.useCallback(()=>{T(null),h(!1)},[h]),p=a.useCallback((C,y)=>{const w=C.currentTarget,b={x:C.clientX,y:C.clientY},j=Ne(b,w.getBoundingClientRect()),E=_e(b,j),L=De(y.getBoundingClientRect()),R=Oe([...E,...L]);T(R),h(!0)},[h]);return a.useEffect(()=>()=>m(),[m]),a.useEffect(()=>{if(l&&d){const C=w=>p(w,d),y=w=>p(w,l);return l.addEventListener("pointerleave",C),d.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",C),d.removeEventListener("pointerleave",y)}}},[l,d,p,m]),a.useEffect(()=>{if(s){const C=y=>{const w=y.target,b={x:y.clientX,y:y.clientY},j=l?.contains(w)||d?.contains(w),E=!ke(b,s);j?m():E&&(m(),u())};return document.addEventListener("pointermove",C),()=>document.removeEventListener("pointermove",C)}},[l,d,s,u,m]),e.jsx(ie,{...t,ref:c})}),[Le,Re]=V(B,{isInside:!1}),Be=we("TooltipContent"),ie=a.forwardRef((t,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:c,onPointerDownOutside:s,...T}=t,l=N(A,o),u=W(o),{onClose:d}=l;return a.useEffect(()=>(document.addEventListener(F,d),()=>document.removeEventListener(F,d)),[d]),a.useEffect(()=>{if(l.trigger){const h=m=>{m.target?.contains(l.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,d]),e.jsx(ue,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:e.jsxs(me,{"data-state":l.stateAttribute,...u,...T,ref:r,style:{...T.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Be,{children:n}),e.jsx(Le,{scope:o,isInside:!0,children:e.jsx(xe,{id:l.contentId,role:"tooltip",children:i||n})})]})})});ne.displayName=A;var ae="TooltipArrow",se=a.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=W(o);return Re(ae,o).isInside?null:e.jsx(fe,{...i,...n,ref:r})});se.displayName=ae;function Ne(t,r){const o=Math.abs(r.top-t.y),n=Math.abs(r.bottom-t.y),i=Math.abs(r.right-t.x),c=Math.abs(r.left-t.x);switch(Math.min(o,n,i,c)){case c:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function _e(t,r,o=5){const n=[];switch(r){case"top":n.push({x:t.x-o,y:t.y+o},{x:t.x+o,y:t.y+o});break;case"bottom":n.push({x:t.x-o,y:t.y-o},{x:t.x+o,y:t.y-o});break;case"left":n.push({x:t.x+o,y:t.y-o},{x:t.x+o,y:t.y+o});break;case"right":n.push({x:t.x-o,y:t.y-o},{x:t.x-o,y:t.y+o});break}return n}function De(t){const{top:r,right:o,bottom:n,left:i}=t;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function ke(t,r){const{x:o,y:n}=t;let i=!1;for(let c=0,s=r.length-1;c<r.length;s=c++){const T=r[c],l=r[s],u=T.x,d=T.y,h=l.x,m=l.y;d>n!=m>n&&o<(h-u)*(n-d)/(m-d)+u&&(i=!i)}return i}function Oe(t){const r=t.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Se(r)}function Se(t){if(t.length<=1)return t.slice();const r=[];for(let n=0;n<t.length;n++){const i=t[n];for(;r.length>=2;){const c=r[r.length-1],s=r[r.length-2];if((c.x-s.x)*(i.y-s.y)>=(c.y-s.y)*(i.x-s.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=t.length-1;n>=0;n--){const i=t[n];for(;o.length>=2;){const c=o[o.length-1],s=o[o.length-2];if((c.x-s.x)*(i.y-s.y)>=(c.y-s.y)*(i.x-s.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var He=ee,Ie=te,Me=oe,Ve=re,We=ne,Fe=se;const Ge=He,x=Ie,v=Me,$e=Ve,q=a.forwardRef(({className:t,...r},o)=>e.jsx(Fe,{ref:o,className:Q("fill-primary",t),...r}));q.displayName="TooltipArrow";const ze=ve(["z-50 overflow-hidden rounded-md px-3 py-1.5 font-sans shadow-md","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2","data-[side=top]:slide-in-from-bottom-2"],{variants:{variant:{default:"bg-primary text-small text-white",light:"bg-card text-primary text-small border-border border"}},defaultVariants:{variant:"default"}}),g=a.forwardRef(({className:t,variant:r,sideOffset:o=4,showArrow:n=!1,children:i,...c},s)=>e.jsx($e,{children:e.jsxs(We,{ref:s,sideOffset:o,className:Q(ze({variant:r,className:t})),...c,children:[i,n&&e.jsx(q,{className:r==="light"?"fill-card":"fill-primary"})]})}));g.displayName="TooltipContent";q.__docgenInfo={description:"",methods:[],displayName:"TooltipArrow"};g.__docgenInfo={description:`Tooltip content component that displays contextual information.
Follows Engrate brand guidelines with dark background by default.

@example
\`\`\`tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Helpful information</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\``,methods:[],displayName:"TooltipContent",props:{showArrow:{required:!1,tsType:{name:"boolean"},description:"Whether to show an arrow pointing to the trigger",defaultValue:{value:"false",computed:!1}},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}},composes:["VariantProps"]};const dt={title:"Feedback/Tooltip",component:g,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(Ge,{delayDuration:100,children:e.jsx(t,{})})],argTypes:{variant:{control:"select",options:["default","light"],description:"The visual style of the tooltip"},showArrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger"},side:{control:"select",options:["top","right","bottom","left"],description:"The preferred side of the trigger to render the tooltip"},sideOffset:{control:"number",description:"The distance in pixels from the trigger"}}},_={render:t=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Hover me"})}),e.jsx(g,{...t,children:"This is a helpful tooltip"})]}),args:{variant:"default"}},D={render:t=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Hover me"})}),e.jsx(g,{...t,children:"Light variant tooltip"})]}),args:{variant:"light"}},k={render:t=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Hover me"})}),e.jsx(g,{...t,children:"Tooltip with arrow"})]}),args:{showArrow:!0}},O={render:t=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Hover me"})}),e.jsx(g,{...t,children:"Light tooltip with arrow"})]}),args:{variant:"light",showArrow:!0}},S={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-16 py-12",children:[e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Top (default)"})}),e.jsx(g,{side:"top",children:"Tooltip on top"})]}),e.jsxs("div",{className:"flex gap-16",children:[e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Left"})}),e.jsx(g,{side:"left",children:"Tooltip on left"})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Right"})}),e.jsx(g,{side:"right",children:"Tooltip on right"})]})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Bottom"})}),e.jsx(g,{side:"bottom",children:"Tooltip on bottom"})]})]})},H={render:()=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"ghost",size:"icon","aria-label":"Settings",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})}),e.jsx(g,{children:"Settings"})]})},I={render:()=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Hover for details"})}),e.jsx(g,{className:"max-w-xs",children:"This is a longer tooltip that contains more detailed information about the element. It wraps to multiple lines when needed."})]})},M={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"Variants"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Default"})}),e.jsx(g,{children:"Default dark tooltip"})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Light"})}),e.jsx(g,{variant:"light",children:"Light tooltip"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-small text-secondary mb-3 font-medium",children:"With Arrow"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Default + Arrow"})}),e.jsx(g,{showArrow:!0,children:"Default with arrow"})]}),e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(f,{variant:"secondary",children:"Light + Arrow"})}),e.jsx(g,{variant:"light",showArrow:!0,children:"Light with arrow"})]})]})]})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>This is a helpful tooltip</TooltipContent>
    </Tooltip>,
  args: {
    variant: 'default'
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Light variant tooltip</TooltipContent>
    </Tooltip>,
  args: {
    variant: 'light'
  }
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Tooltip with arrow</TooltipContent>
    </Tooltip>,
  args: {
    showArrow: true
  }
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>Light tooltip with arrow</TooltipContent>
    </Tooltip>,
  args: {
    variant: 'light',
    showArrow: true
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-16 py-12">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top (default)</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <div className="flex gap-16">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
    </div>
}`,...S.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>
}`,...H.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        This is a longer tooltip that contains more detailed information about
        the element. It wraps to multiple lines when needed.
      </TooltipContent>
    </Tooltip>
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">Variants</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Default</Button>
            </TooltipTrigger>
            <TooltipContent>Default dark tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">Light tooltip</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="text-small text-secondary mb-3 font-medium">
          With Arrow
        </h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Default + Arrow</Button>
            </TooltipTrigger>
            <TooltipContent showArrow>Default with arrow</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Light + Arrow</Button>
            </TooltipTrigger>
            <TooltipContent variant="light" showArrow>
              Light with arrow
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...M.parameters?.docs?.source}}};const pt=["Default","Light","WithArrow","LightWithArrow","Positions","OnIconButton","LongContent","AllVariants"];export{M as AllVariants,_ as Default,D as Light,O as LightWithArrow,I as LongContent,H as OnIconButton,S as Positions,k as WithArrow,pt as __namedExportsOrder,dt as default};
