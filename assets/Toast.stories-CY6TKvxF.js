import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe--B_gcy8p.js";import{r as Fe}from"./index-B24crmPe.js";import{u as Oe,c as P,P as _,a as Le,d as ke,b as Me}from"./index-Rixoun3M.js";import{u as xe}from"./index-VXKBYAdF.js";import{c as Ve}from"./index-CWQUGFQV.js";import{B as Ke,R as We,P as He}from"./index-BKASW534.js";import{P as $e}from"./index-eNHV4T1v.js";import{u as se}from"./index-BiA2yjU3.js";import{a as ge}from"./index-Dv0el5mL.js";import{c as Ue}from"./index-HTk8j2sO.js";import{c as F}from"./utils-kmX6UHYG.js";import{X as Ye}from"./x-DGHe0P1q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8Pcks7k.js";import"./createLucideIcon-BPAHT39Y.js";var le="ToastProvider",[de,Xe,Be]=Ve("Toast"),[he]=Le("Toast",[Be]),[qe,re]=he(le),we=t=>{const{__scopeToast:s,label:r="Notification",duration:o=5e3,swipeDirection:i="right",swipeThreshold:d=50,children:p}=t,[v,w]=a.useState(null),[l,N]=a.useState(0),E=a.useRef(!1),O=a.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${le}\`. Expected non-empty \`string\`.`),e.jsx(de.Provider,{scope:s,children:e.jsx(qe,{scope:s,label:r,duration:o,swipeDirection:i,swipeThreshold:d,toastCount:l,viewport:v,onViewportChange:w,onToastAdd:a.useCallback(()=>N(D=>D+1),[]),onToastRemove:a.useCallback(()=>N(D=>D-1),[]),isFocusedToastEscapeKeyDownRef:E,isClosePausedRef:O,children:p})})};we.displayName=le;var ye="ToastViewport",ze=["F8"],ne="toast.viewportPause",ie="toast.viewportResume",Ee=a.forwardRef((t,s)=>{const{__scopeToast:r,hotkey:o=ze,label:i="Notifications ({hotkey})",...d}=t,p=re(ye,r),v=Xe(r),w=a.useRef(null),l=a.useRef(null),N=a.useRef(null),E=a.useRef(null),O=xe(s,E,p.onViewportChange),D=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),I=p.toastCount>0;a.useEffect(()=>{const c=b=>{o.length!==0&&o.every(m=>b[m]||b.code===m)&&E.current?.focus()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[o]),a.useEffect(()=>{const c=w.current,b=E.current;if(I&&c&&b){const f=()=>{if(!p.isClosePausedRef.current){const y=new CustomEvent(ne);b.dispatchEvent(y),p.isClosePausedRef.current=!0}},m=()=>{if(p.isClosePausedRef.current){const y=new CustomEvent(ie);b.dispatchEvent(y),p.isClosePausedRef.current=!1}},j=y=>{!c.contains(y.relatedTarget)&&m()},C=()=>{c.contains(document.activeElement)||m()};return c.addEventListener("focusin",f),c.addEventListener("focusout",j),c.addEventListener("pointermove",f),c.addEventListener("pointerleave",C),window.addEventListener("blur",f),window.addEventListener("focus",m),()=>{c.removeEventListener("focusin",f),c.removeEventListener("focusout",j),c.removeEventListener("pointermove",f),c.removeEventListener("pointerleave",C),window.removeEventListener("blur",f),window.removeEventListener("focus",m)}}},[I,p.isClosePausedRef]);const u=a.useCallback(({tabbingDirection:c})=>{const f=v().map(m=>{const j=m.ref.current,C=[j,...ct(j)];return c==="forwards"?C:C.reverse()});return(c==="forwards"?f.reverse():f).flat()},[v]);return a.useEffect(()=>{const c=E.current;if(c){const b=f=>{const m=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!m){const C=document.activeElement,y=f.shiftKey;if(f.target===c&&y){l.current?.focus();return}const k=u({tabbingDirection:y?"backwards":"forwards"}),H=k.findIndex(A=>A===C);ae(k.slice(H+1))?f.preventDefault():y?l.current?.focus():N.current?.focus()}};return c.addEventListener("keydown",b),()=>c.removeEventListener("keydown",b)}},[v,u]),e.jsxs(Ke,{ref:w,role:"region","aria-label":i.replace("{hotkey}",D),tabIndex:-1,style:{pointerEvents:I?void 0:"none"},children:[I&&e.jsx(ce,{ref:l,onFocusFromOutsideViewport:()=>{const c=u({tabbingDirection:"forwards"});ae(c)}}),e.jsx(de.Slot,{scope:r,children:e.jsx(_.ol,{tabIndex:-1,...d,ref:O})}),I&&e.jsx(ce,{ref:N,onFocusFromOutsideViewport:()=>{const c=u({tabbingDirection:"backwards"});ae(c)}})]})});Ee.displayName=ye;var be="ToastFocusProxy",ce=a.forwardRef((t,s)=>{const{__scopeToast:r,onFocusFromOutsideViewport:o,...i}=t,d=re(be,r);return e.jsx(ge,{tabIndex:0,...i,ref:s,style:{position:"fixed"},onFocus:p=>{const v=p.relatedTarget;!d.viewport?.contains(v)&&o()}})});ce.displayName=be;var K="Toast",Ge="toast.swipeStart",Je="toast.swipeMove",Qe="toast.swipeCancel",Ze="toast.swipeEnd",je=a.forwardRef((t,s)=>{const{forceMount:r,open:o,defaultOpen:i,onOpenChange:d,...p}=t,[v,w]=Oe({prop:o,defaultProp:i??!0,onChange:d,caller:K});return e.jsx($e,{present:r||v,children:e.jsx(st,{open:v,...p,ref:s,onClose:()=>w(!1),onPause:se(t.onPause),onResume:se(t.onResume),onSwipeStart:P(t.onSwipeStart,l=>{l.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(t.onSwipeMove,l=>{const{x:N,y:E}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","move"),l.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${N}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${E}px`)}),onSwipeCancel:P(t.onSwipeCancel,l=>{l.currentTarget.setAttribute("data-swipe","cancel"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(t.onSwipeEnd,l=>{const{x:N,y:E}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","end"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${N}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${E}px`),w(!1)})})})});je.displayName=K;var[et,tt]=he(K,{onClose(){}}),st=a.forwardRef((t,s)=>{const{__scopeToast:r,type:o="foreground",duration:i,open:d,onClose:p,onEscapeKeyDown:v,onPause:w,onResume:l,onSwipeStart:N,onSwipeMove:E,onSwipeCancel:O,onSwipeEnd:D,...I}=t,u=re(K,r),[c,b]=a.useState(null),f=xe(s,n=>b(n)),m=a.useRef(null),j=a.useRef(null),C=i||u.duration,y=a.useRef(0),L=a.useRef(C),W=a.useRef(0),{onToastAdd:k,onToastRemove:H}=u,A=se(()=>{c?.contains(document.activeElement)&&u.viewport?.focus(),p()}),$=a.useCallback(n=>{!n||n===1/0||(window.clearTimeout(W.current),y.current=new Date().getTime(),W.current=window.setTimeout(A,n))},[A]);a.useEffect(()=>{const n=u.viewport;if(n){const R=()=>{$(L.current),l?.()},S=()=>{const M=new Date().getTime()-y.current;L.current=L.current-M,window.clearTimeout(W.current),w?.()};return n.addEventListener(ne,S),n.addEventListener(ie,R),()=>{n.removeEventListener(ne,S),n.removeEventListener(ie,R)}}},[u.viewport,C,w,l,$]),a.useEffect(()=>{d&&!u.isClosePausedRef.current&&$(C)},[d,C,u.isClosePausedRef,$]),a.useEffect(()=>(k(),()=>H()),[k,H]);const me=a.useMemo(()=>c?Ie(c):null,[c]);return u.viewport?e.jsxs(e.Fragment,{children:[me&&e.jsx(rt,{__scopeToast:r,role:"status","aria-live":o==="foreground"?"assertive":"polite",children:me}),e.jsx(et,{scope:r,onClose:A,children:Fe.createPortal(e.jsx(de.ItemSlot,{scope:r,children:e.jsx(We,{asChild:!0,onEscapeKeyDown:P(v,()=>{u.isFocusedToastEscapeKeyDownRef.current||A(),u.isFocusedToastEscapeKeyDownRef.current=!1}),children:e.jsx(_.li,{tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":u.swipeDirection,...I,ref:f,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:P(t.onKeyDown,n=>{n.key==="Escape"&&(v?.(n.nativeEvent),n.nativeEvent.defaultPrevented||(u.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:P(t.onPointerDown,n=>{n.button===0&&(m.current={x:n.clientX,y:n.clientY})}),onPointerMove:P(t.onPointerMove,n=>{if(!m.current)return;const R=n.clientX-m.current.x,S=n.clientY-m.current.y,M=!!j.current,V=["left","right"].includes(u.swipeDirection),U=["left","up"].includes(u.swipeDirection)?Math.min:Math.max,Ae=V?U(0,R):0,_e=V?0:U(0,S),oe=n.pointerType==="touch"?10:2,Y={x:Ae,y:_e},Te={originalEvent:n,delta:Y};M?(j.current=Y,X(Je,E,Te,{discrete:!1})):ve(Y,u.swipeDirection,oe)?(j.current=Y,X(Ge,N,Te,{discrete:!1}),n.target.setPointerCapture(n.pointerId)):(Math.abs(R)>oe||Math.abs(S)>oe)&&(m.current=null)}),onPointerUp:P(t.onPointerUp,n=>{const R=j.current,S=n.target;if(S.hasPointerCapture(n.pointerId)&&S.releasePointerCapture(n.pointerId),j.current=null,m.current=null,R){const M=n.currentTarget,V={originalEvent:n,delta:R};ve(R,u.swipeDirection,u.swipeThreshold)?X(Ze,D,V,{discrete:!0}):X(Qe,O,V,{discrete:!0}),M.addEventListener("click",U=>U.preventDefault(),{once:!0})}})})})}),u.viewport)})]}):null}),rt=t=>{const{__scopeToast:s,children:r,...o}=t,i=re(K,s),[d,p]=a.useState(!1),[v,w]=a.useState(!1);return nt(()=>p(!0)),a.useEffect(()=>{const l=window.setTimeout(()=>w(!0),1e3);return()=>window.clearTimeout(l)},[]),v?null:e.jsx(He,{asChild:!0,children:e.jsx(ge,{...o,children:d&&e.jsxs(e.Fragment,{children:[i.label," ",r]})})})},ot="ToastTitle",Ce=a.forwardRef((t,s)=>{const{__scopeToast:r,...o}=t;return e.jsx(_.div,{...o,ref:s})});Ce.displayName=ot;var at="ToastDescription",Ne=a.forwardRef((t,s)=>{const{__scopeToast:r,...o}=t;return e.jsx(_.div,{...o,ref:s})});Ne.displayName=at;var Pe="ToastAction",Re=a.forwardRef((t,s)=>{const{altText:r,...o}=t;return r.trim()?e.jsx(De,{altText:r,asChild:!0,children:e.jsx(ue,{...o,ref:s})}):(console.error(`Invalid prop \`altText\` supplied to \`${Pe}\`. Expected non-empty \`string\`.`),null)});Re.displayName=Pe;var Se="ToastClose",ue=a.forwardRef((t,s)=>{const{__scopeToast:r,...o}=t,i=tt(Se,r);return e.jsx(De,{asChild:!0,children:e.jsx(_.button,{type:"button",...o,ref:s,onClick:P(t.onClick,i.onClose)})})});ue.displayName=Se;var De=a.forwardRef((t,s)=>{const{__scopeToast:r,altText:o,...i}=t;return e.jsx(_.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...i,ref:s})});function Ie(t){const s=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&s.push(o.textContent),it(o)){const i=o.ariaHidden||o.hidden||o.style.display==="none",d=o.dataset.radixToastAnnounceExclude==="";if(!i)if(d){const p=o.dataset.radixToastAnnounceAlt;p&&s.push(p)}else s.push(...Ie(o))}}),s}function X(t,s,r,{discrete:o}){const i=r.originalEvent.currentTarget,d=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});s&&i.addEventListener(t,s,{once:!0}),o?ke(i,d):i.dispatchEvent(d)}var ve=(t,s,r=0)=>{const o=Math.abs(t.x),i=Math.abs(t.y),d=o>i;return s==="left"||s==="right"?d&&o>r:!d&&i>r};function nt(t=()=>{}){const s=se(t);Me(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(s)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[s])}function it(t){return t.nodeType===t.ELEMENT_NODE}function ct(t){const s=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const i=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||i?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)s.push(r.currentNode);return s}function ae(t){const s=document.activeElement;return t.some(r=>r===s?!0:(r.focus(),document.activeElement!==s))}var lt=we,dt=Ee,ut=je,pt=Ce,ft=Ne,mt=Re,Tt=ue;const vt=lt,pe=a.forwardRef(({className:t,...s},r)=>e.jsx(dt,{ref:r,className:F("fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-105",t),...s}));pe.displayName="ToastViewport";const xt=Ue(["group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all","data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out","data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full"],{variants:{variant:{default:"border-border bg-main text-primary",success:"border-sunflower/30 bg-eggshell text-primary [&>svg]:text-sunflower",error:"border-error/30 bg-main text-primary [&>svg]:text-error",warning:"border-sunflower/50 bg-vanilla text-primary [&>svg]:text-sunflower",info:"border-electric-blue/30 bg-main text-primary [&>svg]:text-electric-blue"}},defaultVariants:{variant:"default"}}),T=a.forwardRef(({className:t,variant:s,...r},o)=>e.jsx(ut,{ref:o,className:F(xt({variant:s}),t),...r}));T.displayName="Toast";const fe=a.forwardRef(({className:t,...s},r)=>e.jsx(mt,{ref:r,className:F("rounded-pill border-border inline-flex h-8 shrink-0 items-center justify-center border bg-transparent px-3 text-sm font-medium","ring-offset-main transition-colors","hover:bg-alt","focus:ring-sunflower focus:ring-2 focus:ring-offset-2 focus:outline-none","disabled:pointer-events-none disabled:opacity-50","group-[.error]:border-error/30 group-[.error]:hover:border-error/50 group-[.error]:hover:bg-error/10 group-[.error]:focus:ring-error",t),...s}));fe.displayName="ToastAction";const x=a.forwardRef(({className:t,...s},r)=>e.jsxs(Tt,{ref:r,className:F("text-secondary absolute top-2 right-2 rounded-sm p-1 opacity-0 transition-opacity","hover:text-primary","focus:ring-sunflower focus:opacity-100 focus:ring-2 focus:outline-none","group-hover:opacity-100","group-[.error]:text-error/70 group-[.error]:hover:text-error group-[.error]:focus:ring-error group-[.error]:focus:ring-offset-error",t),"toast-close":"",...s,children:[e.jsx(Ye,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]}));x.displayName="ToastClose";const g=a.forwardRef(({className:t,...s},r)=>e.jsx(pt,{ref:r,className:F("text-sm",t),...s}));g.displayName="ToastTitle";const h=a.forwardRef(({className:t,...s},r)=>e.jsx(ft,{ref:r,className:F("text-secondary text-sm",t),...s}));h.displayName="ToastDescription";T.__docgenInfo={description:"",methods:[],displayName:"Toast",composes:["VariantProps"]};fe.__docgenInfo={description:"",methods:[],displayName:"ToastAction"};x.__docgenInfo={description:"",methods:[],displayName:"ToastClose"};h.__docgenInfo={description:"",methods:[],displayName:"ToastDescription"};g.__docgenInfo={description:"",methods:[],displayName:"ToastTitle"};pe.__docgenInfo={description:"",methods:[],displayName:"ToastViewport"};const Ot={title:"Feedback/Toast",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","error","warning","info"],description:"The visual variant of the toast"}},decorators:[t=>e.jsxs(vt,{children:[e.jsx(t,{}),e.jsx(pe,{})]})]},B={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Notification"}),e.jsx(h,{children:"This is a default toast message."})]}),e.jsx(x,{})]}),args:{variant:"default"}},q={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Success!"}),e.jsx(h,{children:"Your changes have been saved successfully."})]}),e.jsx(x,{})]}),args:{variant:"success"}},z={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Error"}),e.jsx(h,{children:"Something went wrong. Please try again."})]}),e.jsx(x,{})]}),args:{variant:"error"}},G={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Warning"}),e.jsx(h,{children:"Your session is about to expire."})]}),e.jsx(x,{})]}),args:{variant:"warning"}},J={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Information"}),e.jsx(h,{children:"A new version is available for download."})]}),e.jsx(x,{})]}),args:{variant:"info"}},Q={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Scheduled"}),e.jsx(h,{children:"Your meeting has been scheduled."})]}),e.jsx(fe,{altText:"Undo scheduling",children:"Undo"}),e.jsx(x,{})]}),args:{variant:"default"}},Z={render:t=>e.jsxs(T,{...t,open:!0,children:[e.jsx(g,{children:"Item added to cart"}),e.jsx(x,{})]}),args:{variant:"success"}},ee={render:()=>e.jsxs("div",{className:"flex min-w-90 flex-col gap-4",children:[e.jsxs(T,{open:!0,variant:"default",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Default"}),e.jsx(h,{children:"A default toast notification."})]}),e.jsx(x,{})]}),e.jsxs(T,{open:!0,variant:"success",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Success"}),e.jsx(h,{children:"Operation completed successfully."})]}),e.jsx(x,{})]}),e.jsxs(T,{open:!0,variant:"error",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Error"}),e.jsx(h,{children:"An error occurred during the operation."})]}),e.jsx(x,{})]}),e.jsxs(T,{open:!0,variant:"warning",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Warning"}),e.jsx(h,{children:"Please review before continuing."})]}),e.jsx(x,{})]}),e.jsxs(T,{open:!0,variant:"info",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(g,{children:"Info"}),e.jsx(h,{children:"Here is some useful information."})]}),e.jsx(x,{})]})]})},gt=()=>{const[t,s]=a.useState(!1),[r,o]=a.useState("default");a.useEffect(()=>{if(t){const d=setTimeout(()=>s(!1),5e3);return()=>clearTimeout(d)}},[t]);const i=d=>{o(d),s(!0)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>i("default"),className:"rounded-pill bg-alt hover:bg-contrast px-4 py-2 text-sm",children:"Show Default"}),e.jsx("button",{onClick:()=>i("success"),className:"rounded-pill bg-eggshell hover:bg-vanilla px-4 py-2 text-sm",children:"Show Success"}),e.jsx("button",{onClick:()=>i("error"),className:"rounded-pill bg-error/10 text-error hover:bg-error/20 px-4 py-2 text-sm",children:"Show Error"}),e.jsx("button",{onClick:()=>i("warning"),className:"rounded-pill bg-vanilla hover:bg-lemon-meringue px-4 py-2 text-sm",children:"Show Warning"}),e.jsx("button",{onClick:()=>i("info"),className:"rounded-pill bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 px-4 py-2 text-sm",children:"Show Info"})]}),e.jsxs(T,{open:t,onOpenChange:s,variant:r,children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsxs(g,{children:[r.charAt(0).toUpperCase()+r.slice(1)," Toast"]}),e.jsxs(h,{children:["This is an interactive ",r," toast notification."]})]}),e.jsx(x,{})]})]})},te={render:()=>e.jsx(gt,{})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Notification</ToastTitle>
        <ToastDescription>This is a default toast message.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'default'
  }
}`,...B.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Success!</ToastTitle>
        <ToastDescription>
          Your changes have been saved successfully.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'success'
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>
          Something went wrong. Please try again.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'error'
  }
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Your session is about to expire.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'warning'
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Information</ToastTitle>
        <ToastDescription>
          A new version is available for download.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'info'
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <div className="grid gap-1">
        <ToastTitle>Scheduled</ToastTitle>
        <ToastDescription>Your meeting has been scheduled.</ToastDescription>
      </div>
      <ToastAction altText="Undo scheduling">Undo</ToastAction>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'default'
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <Toast {...args} open>
      <ToastTitle>Item added to cart</ToastTitle>
      <ToastClose />
    </Toast>,
  args: {
    variant: 'success'
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-w-90 flex-col gap-4">
      <Toast open variant="default">
        <div className="grid gap-1">
          <ToastTitle>Default</ToastTitle>
          <ToastDescription>A default toast notification.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="success">
        <div className="grid gap-1">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Operation completed successfully.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="error">
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>
            An error occurred during the operation.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="warning">
        <div className="grid gap-1">
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Please review before continuing.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast open variant="info">
        <div className="grid gap-1">
          <ToastTitle>Info</ToastTitle>
          <ToastDescription>Here is some useful information.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </div>
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...te.parameters?.docs?.source}}};const Lt=["Default","Success","Error","Warning","Info","WithAction","TitleOnly","AllVariants","Interactive"];export{ee as AllVariants,B as Default,z as Error,J as Info,te as Interactive,q as Success,Z as TitleOnly,G as Warning,Q as WithAction,Lt as __namedExportsOrder,Ot as default};
