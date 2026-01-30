import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-CwYTgCCY.js";import{P as ue,c as N,u as ce,a as ie}from"./index-D4bUoCzf.js";import{R as xe,A as le,S as Ce,a as he,G as me,c as W,P as Me,C as pe,I as be,b as Se,d as fe,e as ge,f as je,g as we,L as Ie,h as ve,i as Ne}from"./index-Hp_WNNj-.js";import{u as Re}from"./index-4PHG7kU2.js";import{c as m}from"./utils-ryREhF4q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLVg5VFr.js";import"./index-DDGLVj3O.js";import"./index-DjNH07ic.js";import"./index-Dnlf8PKx.js";import"./index-jBp9E5bl.js";import"./index-DZzx8c47.js";import"./index-B_EJDNzQ.js";import"./index-BbklOOkG.js";import"./index-Jo1AqpCd.js";import"./index-D2tJ68hg.js";import"./index-BNduGn7P.js";import"./index-BSDZi8WK.js";var G="ContextMenu",[ke]=ie(G,[W]),c=W(),[ye,U]=ke(G),F=t=>{const{__scopeContextMenu:n,children:o,onOpenChange:r,dir:a,modal:l=!0}=t,[i,C]=s.useState(!1),w=c(n),I=Re(r),h=s.useCallback(v=>{C(v),I(v)},[I]);return e.jsx(ye,{scope:n,open:i,onOpenChange:h,modal:l,children:e.jsx(xe,{...w,dir:a,open:i,onOpenChange:h,modal:l,children:o})})};F.displayName=G;var $="ContextMenuTrigger",V=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,disabled:r=!1,...a}=t,l=U($,o),i=c(o),C=s.useRef({x:0,y:0}),w=s.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...C.current})}),I=s.useRef(0),h=s.useCallback(()=>window.clearTimeout(I.current),[]),v=S=>{C.current={x:S.clientX,y:S.clientY},l.onOpenChange(!0)};return s.useEffect(()=>h,[h]),s.useEffect(()=>{r&&h()},[r,h]),e.jsxs(e.Fragment,{children:[e.jsx(le,{...i,virtualRef:w}),e.jsx(ue.span,{"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,...a,ref:n,style:{WebkitTouchCallout:"none",...t.style},onContextMenu:r?t.onContextMenu:N(t.onContextMenu,S=>{h(),v(S),S.preventDefault()}),onPointerDown:r?t.onPointerDown:N(t.onPointerDown,y(S=>{h(),I.current=window.setTimeout(()=>v(S),700)})),onPointerMove:r?t.onPointerMove:N(t.onPointerMove,y(h)),onPointerCancel:r?t.onPointerCancel:N(t.onPointerCancel,y(h)),onPointerUp:r?t.onPointerUp:N(t.onPointerUp,y(h))})]})});V.displayName=$;var Te="ContextMenuPortal",z=t=>{const{__scopeContextMenu:n,...o}=t,r=c(n);return e.jsx(Me,{...r,...o})};z.displayName=Te;var X="ContextMenuContent",q=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=U(X,o),l=c(o),i=s.useRef(!1);return e.jsx(pe,{...l,...r,ref:n,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:C=>{t.onCloseAutoFocus?.(C),!C.defaultPrevented&&i.current&&C.preventDefault(),i.current=!1},onInteractOutside:C=>{t.onInteractOutside?.(C),!C.defaultPrevented&&!a.modal&&(i.current=!0)},style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});q.displayName=X;var _e="ContextMenuGroup",H=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(me,{...a,...r,ref:n})});H.displayName=_e;var Pe="ContextMenuLabel",K=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(Ie,{...a,...r,ref:n})});K.displayName=Pe;var Oe="ContextMenuItem",Y=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(be,{...a,...r,ref:n})});Y.displayName=Oe;var Ae="ContextMenuCheckboxItem",J=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(je,{...a,...r,ref:n})});J.displayName=Ae;var Ee="ContextMenuRadioGroup",Q=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(he,{...a,...r,ref:n})});Q.displayName=Ee;var Le="ContextMenuRadioItem",Z=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(ve,{...a,...r,ref:n})});Z.displayName=Le;var Be="ContextMenuItemIndicator",ee=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(we,{...a,...r,ref:n})});ee.displayName=Be;var Ge="ContextMenuSeparator",te=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(ge,{...a,...r,ref:n})});te.displayName=Ge;var De="ContextMenuArrow",We=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(Ne,{...a,...r,ref:n})});We.displayName=De;var ne="ContextMenuSub",oe=t=>{const{__scopeContextMenu:n,children:o,onOpenChange:r,open:a,defaultOpen:l}=t,i=c(n),[C,w]=ce({prop:a,defaultProp:l??!1,onChange:r,caller:ne});return e.jsx(Ce,{...i,open:C,onOpenChange:w,children:o})};oe.displayName=ne;var Ue="ContextMenuSubTrigger",re=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(Se,{...a,...r,ref:n})});re.displayName=Ue;var Fe="ContextMenuSubContent",se=s.forwardRef((t,n)=>{const{__scopeContextMenu:o,...r}=t,a=c(o);return e.jsx(fe,{...a,...r,ref:n,style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});se.displayName=Fe;function y(t){return n=>n.pointerType!=="mouse"?t(n):void 0}var $e=F,Ve=V,ze=z,Xe=q,qe=H,He=K,Ke=Y,Ye=J,Je=Q,Qe=Z,ae=ee,Ze=te,et=oe,tt=re,nt=se;const b=$e,j=Ve,D=qe,ot=ze,B=et,de=Je,R=s.forwardRef(({className:t,inset:n,children:o,...r},a)=>e.jsxs(tt,{ref:a,className:m("text-body flex cursor-default items-center rounded-sm px-2 py-1.5 outline-none select-none","focus:bg-vanilla focus:text-primary","data-[state=open]:bg-vanilla data-[state=open]:text-primary",n&&"pl-8",t),...r,children:[o,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-auto h-4 w-4",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})]}));R.displayName="ContextMenuSubTrigger";const k=s.forwardRef(({className:t,...n},o)=>e.jsx(nt,{ref:o,className:m("border-border bg-card text-primary z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 font-sans shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));k.displayName="ContextMenuSubContent";const M=s.forwardRef(({className:t,...n},o)=>e.jsx(ot,{children:e.jsx(Xe,{ref:o,className:m("border-border bg-card text-primary z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 font-sans shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));M.displayName="ContextMenuContent";const d=s.forwardRef(({className:t,inset:n,...o},r)=>e.jsx(Ke,{ref:r,className:m("text-body relative flex cursor-default items-center rounded-sm px-2 py-1.5 outline-none select-none","focus:bg-vanilla focus:text-primary","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",t),...o}));d.displayName="ContextMenuItem";const f=s.forwardRef(({className:t,children:n,checked:o,...r},a)=>e.jsxs(Ye,{ref:a,className:m("text-body relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-none select-none","focus:bg-vanilla focus:text-primary","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:o,...r,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ae,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})})})}),n]}));f.displayName="ContextMenuCheckboxItem";const g=s.forwardRef(({className:t,children:n,...o},r)=>e.jsxs(Qe,{ref:r,className:m("text-body relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-none select-none","focus:bg-vanilla focus:text-primary","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ae,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-2 w-2 fill-current",children:e.jsx("circle",{cx:"12",cy:"12",r:"10"})})})}),n]}));g.displayName="ContextMenuRadioItem";const p=s.forwardRef(({className:t,inset:n,...o},r)=>e.jsx(He,{ref:r,className:m("text-small text-primary px-2 py-1.5",n&&"pl-8",t),...o}));p.displayName="ContextMenuLabel";const x=s.forwardRef(({className:t,...n},o)=>e.jsx(Ze,{ref:o,className:m("bg-border -mx-1 my-1 h-px",t),...n}));x.displayName="ContextMenuSeparator";const u=s.forwardRef(({className:t,...n},o)=>e.jsx("span",{ref:o,className:m("text-small text-tertiary ml-auto tracking-widest",t),...n}));u.displayName="ContextMenuShortcut";M.__docgenInfo={description:"",methods:[],displayName:"ContextMenuContent"};d.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"ContextMenuCheckboxItem"};g.__docgenInfo={description:"",methods:[],displayName:"ContextMenuRadioItem"};p.__docgenInfo={description:"",methods:[],displayName:"ContextMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSeparator"};u.__docgenInfo={description:"",methods:[],displayName:"ContextMenuShortcut"};k.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubContent"};R.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};const wt={title:"Misc/ContextMenu",component:b,parameters:{layout:"centered"},tags:["autodocs"]},T={render:()=>e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsxs(d,{children:["Back",e.jsx(u,{children:"⌘["})]}),e.jsxs(d,{disabled:!0,children:["Forward",e.jsx(u,{children:"⌘]"})]}),e.jsxs(d,{children:["Reload",e.jsx(u,{children:"⌘R"})]}),e.jsx(x,{}),e.jsxs(d,{children:["Save Page As...",e.jsx(u,{children:"⌘S"})]}),e.jsx(d,{children:"Print..."})]})]})},_={render:()=>e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsx(p,{children:"File Operations"}),e.jsxs(D,{children:[e.jsxs(d,{children:["New File",e.jsx(u,{children:"⌘N"})]}),e.jsxs(d,{children:["Open...",e.jsx(u,{children:"⌘O"})]}),e.jsxs(d,{children:["Save",e.jsx(u,{children:"⌘S"})]})]}),e.jsx(x,{}),e.jsx(p,{children:"Edit Operations"}),e.jsxs(D,{children:[e.jsxs(d,{children:["Cut",e.jsx(u,{children:"⌘X"})]}),e.jsxs(d,{children:["Copy",e.jsx(u,{children:"⌘C"})]}),e.jsxs(d,{children:["Paste",e.jsx(u,{children:"⌘V"})]})]})]})]})},P={render:function(){const[n,o]=s.useState(!0),[r,a]=s.useState(!1),[l,i]=s.useState(!0);return e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsx(p,{children:"View Options"}),e.jsx(x,{}),e.jsxs(f,{checked:n,onCheckedChange:o,children:["Show Toolbar",e.jsx(u,{children:"⌘T"})]}),e.jsxs(f,{checked:r,onCheckedChange:a,children:["Show Sidebar",e.jsx(u,{children:"⌘B"})]}),e.jsx(f,{checked:l,onCheckedChange:i,children:"Show Status Bar"})]})]})}},O={render:function(){const[n,o]=s.useState("light");return e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsx(p,{children:"Theme"}),e.jsx(x,{}),e.jsxs(de,{value:n,onValueChange:o,children:[e.jsx(g,{value:"light",children:"Light"}),e.jsx(g,{value:"dark",children:"Dark"}),e.jsx(g,{value:"system",children:"System"})]})]})]})}},A={render:()=>e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsxs(d,{children:["New Tab",e.jsx(u,{children:"⌘T"})]}),e.jsxs(d,{children:["New Window",e.jsx(u,{children:"⌘N"})]}),e.jsx(x,{}),e.jsxs(B,{children:[e.jsx(R,{children:"Share"}),e.jsxs(k,{className:"w-48",children:[e.jsx(d,{children:"Email Link"}),e.jsx(d,{children:"Messages"}),e.jsx(d,{children:"Notes"}),e.jsx(x,{}),e.jsx(d,{children:"More..."})]})]}),e.jsxs(B,{children:[e.jsx(R,{children:"More Tools"}),e.jsxs(k,{className:"w-48",children:[e.jsxs(d,{children:["Save Page As...",e.jsx(u,{children:"⌘S"})]}),e.jsx(d,{children:"Create Shortcut..."}),e.jsx(d,{children:"Name Window..."}),e.jsx(x,{}),e.jsx(d,{children:"Developer Tools"})]})]}),e.jsx(x,{}),e.jsxs(d,{children:["Print...",e.jsx(u,{children:"⌘P"})]})]})]})},E={render:()=>e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsx(p,{inset:!0,children:"Account"}),e.jsx(x,{}),e.jsx(d,{inset:!0,children:"Profile"}),e.jsx(d,{inset:!0,children:"Settings"}),e.jsx(d,{inset:!0,children:"Sign Out"})]})]})},L={render:function(){const[n,o]=s.useState(!0),[r,a]=s.useState(!1),[l,i]=s.useState("pedro");return e.jsxs(b,{children:[e.jsx(j,{asChild:!0,children:e.jsx("div",{className:"border-border bg-card text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed",children:"Right click here"})}),e.jsxs(M,{className:"w-64",children:[e.jsxs(d,{inset:!0,children:["Back",e.jsx(u,{children:"⌘["})]}),e.jsxs(d,{inset:!0,disabled:!0,children:["Forward",e.jsx(u,{children:"⌘]"})]}),e.jsxs(d,{inset:!0,children:["Reload",e.jsx(u,{children:"⌘R"})]}),e.jsxs(B,{children:[e.jsx(R,{inset:!0,children:"More Tools"}),e.jsxs(k,{className:"w-48",children:[e.jsxs(d,{children:["Save Page As...",e.jsx(u,{children:"⌘S"})]}),e.jsx(d,{children:"Create Shortcut..."}),e.jsx(d,{children:"Name Window..."}),e.jsx(x,{}),e.jsx(d,{children:"Developer Tools"})]})]}),e.jsx(x,{}),e.jsxs(f,{checked:n,onCheckedChange:o,children:["Show Bookmarks Bar",e.jsx(u,{children:"⌘⇧B"})]}),e.jsx(f,{checked:r,onCheckedChange:a,children:"Show Full URLs"}),e.jsx(x,{}),e.jsx(p,{inset:!0,children:"People"}),e.jsxs(de,{value:l,onValueChange:i,children:[e.jsx(g,{value:"pedro",children:"Pedro Duarte"}),e.jsx(g,{value:"colm",children:"Colm Tuite"})]})]})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Save Page As...
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>File Operations</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>
            New File
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Open...
            <ContextMenuShortcut>⌘O</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuLabel>Edit Operations</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [showToolbar, setShowToolbar] = React.useState(true);
    const [showSidebar, setShowSidebar] = React.useState(false);
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    return <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
            Right click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            Show Toolbar
            <ContextMenuShortcut>⌘T</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            Show Sidebar
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Show Status Bar
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [theme, setTheme] = React.useState('light');
    return <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
            Right click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          New Tab
          <ContextMenuShortcut>⌘T</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          New Window
          <ContextMenuShortcut>⌘N</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuItem>Messages</ContextMenuItem>
            <ContextMenuItem>Notes</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>More...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Print...
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="border-border text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel inset>Account</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Profile</ContextMenuItem>
        <ContextMenuItem inset>Settings</ContextMenuItem>
        <ContextMenuItem inset>Sign Out</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [fullUrlsChecked, setFullUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');
    return <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="border-border bg-card text-secondary flex h-36 w-64 items-center justify-center rounded-md border border-dashed">
            Right click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={fullUrlsChecked} onCheckedChange={setFullUrlsChecked}>
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...L.parameters?.docs?.source}}};const It=["Default","WithLabelsAndGroups","WithCheckboxItems","WithRadioItems","WithSubmenus","InsetItems","Complete"];export{L as Complete,T as Default,E as InsetItems,P as WithCheckboxItems,_ as WithLabelsAndGroups,O as WithRadioItems,A as WithSubmenus,It as __namedExportsOrder,wt as default};
