import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-Dv90unGT.js";import{u as W,P as ue,c as E,a as pe}from"./index-D8poDkfZ.js";import{c as le}from"./index-McPXHFKR.js";import{R as me,A as we,S as he,a as Me,G as De,c as $,P as xe,C as fe,I as Se,e as ge,b as be,d as je,f as Ie,g as ve,L as Ce,h as Ne,i as ye}from"./index-B1Kmn9cz.js";import{u as z}from"./index-D7H_XW5P.js";import{c as M}from"./utils-ryREhF4q.js";import{c as Re}from"./createLucideIcon-C9EuQuEi.js";import{B as I}from"./Button-DRHqskmA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpyyhqAS.js";import"./index-ChrhSDWL.js";import"./index-B4qmoZaO.js";import"./index-BYO-VZX8.js";import"./index-CI7oIP-X.js";import"./index-C3NRl_Yx.js";import"./index-CqkO3Hyz.js";import"./index-DOUGH0Ly.js";import"./index-GN7_BinR.js";import"./index-XXfIqaQ-.js";import"./index-Ckhiln3p.js";import"./index-mNC3-AD3.js";import"./index-DDA3KdpW.js";const ke=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Te=Re("ellipsis",ke);var O="DropdownMenu",[_e]=pe(O,[$]),p=$(),[Pe,U]=_e(O),V=n=>{const{__scopeDropdownMenu:o,children:r,dir:t,open:s,defaultOpen:i,onOpenChange:m,modal:c=!0}=n,D=p(o),L=d.useRef(null),[C,N]=W({prop:s,defaultProp:i??!1,onChange:m,caller:O});return e.jsx(Pe,{scope:o,triggerId:z(),triggerRef:L,contentId:z(),open:C,onOpenChange:N,onOpenToggle:d.useCallback(()=>N(ce=>!ce),[N]),modal:c,children:e.jsx(me,{...D,open:C,onOpenChange:N,dir:t,modal:c,children:r})})};V.displayName=O;var F="DropdownMenuTrigger",K=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...s}=n,i=U(F,r),m=p(r);return e.jsx(we,{asChild:!0,...m,children:e.jsx(ue.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...s,ref:le(o,i.triggerRef),onPointerDown:E(n.onPointerDown,c=>{!t&&c.button===0&&c.ctrlKey===!1&&(i.onOpenToggle(),i.open||c.preventDefault())}),onKeyDown:E(n.onKeyDown,c=>{t||(["Enter"," "].includes(c.key)&&i.onOpenToggle(),c.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})})});K.displayName=F;var Ae="DropdownMenuPortal",q=n=>{const{__scopeDropdownMenu:o,...r}=n,t=p(o);return e.jsx(xe,{...t,...r})};q.displayName=Ae;var H="DropdownMenuContent",X=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=U(H,r),i=p(r),m=d.useRef(!1);return e.jsx(fe,{id:s.contentId,"aria-labelledby":s.triggerId,...i,...t,ref:o,onCloseAutoFocus:E(n.onCloseAutoFocus,c=>{m.current||s.triggerRef.current?.focus(),m.current=!1,c.preventDefault()}),onInteractOutside:E(n.onInteractOutside,c=>{const D=c.detail.originalEvent,L=D.button===0&&D.ctrlKey===!0,C=D.button===2||L;(!s.modal||C)&&(m.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});X.displayName=H;var Be="DropdownMenuGroup",J=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(De,{...s,...t,ref:o})});J.displayName=Be;var Ee="DropdownMenuLabel",Q=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(Ce,{...s,...t,ref:o})});Q.displayName=Ee;var Oe="DropdownMenuItem",Y=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(Se,{...s,...t,ref:o})});Y.displayName=Oe;var Le="DropdownMenuCheckboxItem",Z=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(Ie,{...s,...t,ref:o})});Z.displayName=Le;var Ge="DropdownMenuRadioGroup",ee=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(Me,{...s,...t,ref:o})});ee.displayName=Ge;var ze="DropdownMenuRadioItem",ne=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(Ne,{...s,...t,ref:o})});ne.displayName=ze;var We="DropdownMenuItemIndicator",oe=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(ve,{...s,...t,ref:o})});oe.displayName=We;var $e="DropdownMenuSeparator",re=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(ge,{...s,...t,ref:o})});re.displayName=$e;var Ue="DropdownMenuArrow",Ve=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(ye,{...s,...t,ref:o})});Ve.displayName=Ue;var Fe=n=>{const{__scopeDropdownMenu:o,children:r,open:t,onOpenChange:s,defaultOpen:i}=n,m=p(o),[c,D]=W({prop:t,defaultProp:i??!1,onChange:s,caller:"DropdownMenuSub"});return e.jsx(he,{...m,open:c,onOpenChange:D,children:r})},Ke="DropdownMenuSubTrigger",te=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(be,{...s,...t,ref:o})});te.displayName=Ke;var qe="DropdownMenuSubContent",se=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...t}=n,s=p(r);return e.jsx(je,{...s,...t,ref:o,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});se.displayName=qe;var He=V,ae=K,Xe=q,Je=X,Qe=J,Ye=Q,Ze=Y,en=Z,nn=ee,on=ne,de=oe,rn=re,tn=Fe,sn=te,an=se;const h=He,v=ae,dn=Qe,cn=Xe,G=tn,ie=nn,b=d.forwardRef(({className:n,inset:o,children:r,...t},s)=>e.jsxs(sn,{ref:s,className:M("text-body flex cursor-default items-center rounded-sm px-2 py-1.5 outline-none select-none","focus:bg-vanilla focus:text-primary","data-[state=open]:bg-vanilla data-[state=open]:text-primary",o&&"pl-8",n),...t,children:[r,e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-auto h-4 w-4",children:e.jsx("path",{d:"m9 18 6-6-6-6"})})]}));b.displayName="DropdownMenuSubTrigger";const j=d.forwardRef(({className:n,...o},r)=>e.jsx(an,{ref:r,className:M("border-border bg-card text-primary z-50 min-w-32 overflow-hidden rounded-md border p-1 font-sans shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o}));j.displayName="DropdownMenuSubContent";const w=d.forwardRef(({className:n,sideOffset:o=4,...r},t)=>e.jsx(cn,{children:e.jsx(Je,{ref:t,sideOffset:o,className:M("border-border bg-card text-primary z-50 min-w-32 overflow-hidden rounded-md border p-1 font-sans shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})}));w.displayName="DropdownMenuContent";const a=d.forwardRef(({className:n,inset:o,...r},t)=>e.jsx(Ze,{ref:t,className:M("text-body relative flex cursor-default items-center rounded-sm px-2 py-1.5 outline-none select-none","focus:bg-vanilla focus:text-primary","data-disabled:pointer-events-none data-disabled:opacity-50",o&&"pl-8",n),...r}));a.displayName="DropdownMenuItem";const x=d.forwardRef(({className:n,children:o,checked:r,...t},s)=>e.jsxs(en,{ref:s,className:M("text-body relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-none select-none","focus:bg-vanilla focus:text-primary","data-disabled:pointer-events-none data-disabled:opacity-50",n),checked:r,...t,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(de,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})})})}),o]}));x.displayName="DropdownMenuCheckboxItem";const f=d.forwardRef(({className:n,children:o,...r},t)=>e.jsxs(on,{ref:t,className:M("text-body relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 outline-none select-none","focus:bg-vanilla focus:text-primary","data-disabled:pointer-events-none data-disabled:opacity-50",n),...r,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(de,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-2 w-2 fill-current",children:e.jsx("circle",{cx:"12",cy:"12",r:"10"})})})}),o]}));f.displayName="DropdownMenuRadioItem";const g=d.forwardRef(({className:n,inset:o,...r},t)=>e.jsx(Ye,{ref:t,className:M("text-small text-primary px-2 py-1.5 font-semibold",o&&"pl-8",n),...r}));g.displayName="DropdownMenuLabel";const l=d.forwardRef(({className:n,...o},r)=>e.jsx(rn,{ref:r,className:M("bg-border -mx-1 my-1 h-px",n),...o}));l.displayName="DropdownMenuSeparator";const u=d.forwardRef(({className:n,...o},r)=>e.jsx("span",{ref:r,className:M("text-small text-tertiary ml-auto tracking-widest",n),...o}));u.displayName="DropdownMenuShortcut";const S=d.forwardRef(({className:n,iconSize:o="default",...r},t)=>{const s={sm:"h-4 w-4",default:"h-5 w-5",lg:"h-6 w-6"},i={sm:"h-7 w-7",default:"h-8 w-8",lg:"h-10 w-10"};return e.jsxs(ae,{ref:t,className:M("text-secondary inline-flex items-center justify-center rounded-md transition-colors","hover:bg-vanilla hover:text-primary","focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:pointer-events-none disabled:opacity-50",i[o],n),...r,children:[e.jsx(Te,{className:s[o]}),e.jsx("span",{className:"sr-only",children:"Open menu"})]})});S.displayName="ActionsMenuButton";w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem"};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem"};g.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};u.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"};j.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubContent"};b.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"ActionsMenuButton",props:{iconSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Size of the ellipsis icon",defaultValue:{value:"'default'",computed:!1}}}};const Pn={title:"Misc/DropdownMenu",component:h,parameters:{layout:"centered"},tags:["autodocs"]},y={render:()=>e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(I,{variant:"secondary",children:"Open Menu"})}),e.jsxs(w,{className:"w-56",children:[e.jsx(g,{children:"My Account"}),e.jsx(l,{}),e.jsxs(dn,{children:[e.jsxs(a,{children:["Profile",e.jsx(u,{children:"⇧⌘P"})]}),e.jsxs(a,{children:["Billing",e.jsx(u,{children:"⌘B"})]}),e.jsxs(a,{children:["Settings",e.jsx(u,{children:"⌘S"})]}),e.jsxs(a,{children:["Keyboard shortcuts",e.jsx(u,{children:"⌘K"})]})]}),e.jsx(l,{}),e.jsx(a,{children:"Log out"})]})]})},R={render:()=>e.jsxs("div",{className:"border-border bg-card flex items-center gap-4 rounded-lg border p-4",children:[e.jsx("span",{className:"text-primary flex-1",children:"Row with actions menu"}),e.jsxs(h,{children:[e.jsx(S,{}),e.jsxs(w,{align:"end",children:[e.jsx(a,{children:"Edit"}),e.jsx(a,{children:"Duplicate"}),e.jsx(l,{}),e.jsx(a,{className:"text-error",children:"Delete"})]})]})]})},k={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(h,{children:[e.jsx(S,{iconSize:"sm"}),e.jsxs(w,{children:[e.jsx(a,{children:"Edit"}),e.jsx(a,{children:"Delete"})]})]}),e.jsx("span",{className:"text-small text-secondary",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(h,{children:[e.jsx(S,{iconSize:"default"}),e.jsxs(w,{children:[e.jsx(a,{children:"Edit"}),e.jsx(a,{children:"Delete"})]})]}),e.jsx("span",{className:"text-small text-secondary",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(h,{children:[e.jsx(S,{iconSize:"lg"}),e.jsxs(w,{children:[e.jsx(a,{children:"Edit"}),e.jsx(a,{children:"Delete"})]})]}),e.jsx("span",{className:"text-small text-secondary",children:"Large"})]})]})},T={render:function(){const[o,r]=d.useState(!0),[t,s]=d.useState(!1),[i,m]=d.useState(!0);return e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(I,{variant:"secondary",children:"View Options"})}),e.jsxs(w,{className:"w-56",children:[e.jsx(g,{children:"Appearance"}),e.jsx(l,{}),e.jsxs(x,{checked:o,onCheckedChange:r,children:["Show Toolbar",e.jsx(u,{children:"⌘T"})]}),e.jsxs(x,{checked:t,onCheckedChange:s,children:["Show Sidebar",e.jsx(u,{children:"⌘B"})]}),e.jsx(x,{checked:i,onCheckedChange:m,children:"Show Status Bar"})]})]})}},_={render:function(){const[o,r]=d.useState("light");return e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(I,{variant:"secondary",children:"Select Theme"})}),e.jsxs(w,{className:"w-56",children:[e.jsx(g,{children:"Theme"}),e.jsx(l,{}),e.jsxs(ie,{value:o,onValueChange:r,children:[e.jsx(f,{value:"light",children:"Light"}),e.jsx(f,{value:"dark",children:"Dark"}),e.jsx(f,{value:"system",children:"System"})]})]})]})}},P={render:()=>e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(I,{variant:"secondary",children:"Menu with Submenus"})}),e.jsxs(w,{className:"w-56",children:[e.jsxs(a,{children:["New Tab",e.jsx(u,{children:"⌘T"})]}),e.jsxs(a,{children:["New Window",e.jsx(u,{children:"⌘N"})]}),e.jsx(l,{}),e.jsxs(G,{children:[e.jsx(b,{children:"Share"}),e.jsxs(j,{className:"w-48",children:[e.jsx(a,{children:"Email Link"}),e.jsx(a,{children:"Messages"}),e.jsx(a,{children:"Notes"}),e.jsx(l,{}),e.jsx(a,{children:"More..."})]})]}),e.jsxs(G,{children:[e.jsx(b,{children:"More Tools"}),e.jsxs(j,{className:"w-48",children:[e.jsxs(a,{children:["Save Page As...",e.jsx(u,{children:"⌘S"})]}),e.jsx(a,{children:"Create Shortcut..."}),e.jsx(a,{children:"Name Window..."}),e.jsx(l,{}),e.jsx(a,{children:"Developer Tools"})]})]}),e.jsx(l,{}),e.jsxs(a,{children:["Print...",e.jsx(u,{children:"⌘P"})]})]})]})},A={render:()=>e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-border border-b",children:[e.jsx("th",{className:"text-small text-secondary p-3 text-left font-semibold",children:"Name"}),e.jsx("th",{className:"text-small text-secondary p-3 text-left font-semibold",children:"Status"}),e.jsx("th",{className:"w-12 p-3"})]})}),e.jsx("tbody",{children:["Project Alpha","Project Beta","Project Gamma"].map(n=>e.jsxs("tr",{className:"border-border border-b",children:[e.jsx("td",{className:"text-primary p-3",children:n}),e.jsx("td",{className:"text-primary p-3",children:"Active"}),e.jsx("td",{className:"p-3",children:e.jsxs(h,{children:[e.jsx(S,{iconSize:"sm"}),e.jsxs(w,{align:"end",children:[e.jsx(a,{children:"View Details"}),e.jsx(a,{children:"Edit"}),e.jsx(a,{children:"Duplicate"}),e.jsx(l,{}),e.jsx(a,{className:"text-error",children:"Delete"})]})]})})]},n))})]})},B={render:function(){const[o,r]=d.useState(!0),[t,s]=d.useState(!1),[i,m]=d.useState("pedro");return e.jsxs(h,{children:[e.jsx(v,{asChild:!0,children:e.jsx(I,{children:"Open Complete Menu"})}),e.jsxs(w,{className:"w-56",children:[e.jsxs(a,{inset:!0,children:["Back",e.jsx(u,{children:"⌘["})]}),e.jsxs(a,{inset:!0,disabled:!0,children:["Forward",e.jsx(u,{children:"⌘]"})]}),e.jsxs(a,{inset:!0,children:["Reload",e.jsx(u,{children:"⌘R"})]}),e.jsxs(G,{children:[e.jsx(b,{inset:!0,children:"More Tools"}),e.jsxs(j,{className:"w-48",children:[e.jsxs(a,{children:["Save Page As...",e.jsx(u,{children:"⌘S"})]}),e.jsx(a,{children:"Create Shortcut..."}),e.jsx(a,{children:"Name Window..."}),e.jsx(l,{}),e.jsx(a,{children:"Developer Tools"})]})]}),e.jsx(l,{}),e.jsxs(x,{checked:o,onCheckedChange:r,children:["Show Bookmarks Bar",e.jsx(u,{children:"⌘⇧B"})]}),e.jsx(x,{checked:t,onCheckedChange:s,children:"Show Full URLs"}),e.jsx(l,{}),e.jsx(g,{inset:!0,children:"People"}),e.jsxs(ie,{value:i,onValueChange:m,children:[e.jsx(f,{value:"pedro",children:"Pedro Duarte"}),e.jsx(f,{value:"colm",children:"Colm Tuite"})]})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border-border bg-card flex items-center gap-4 rounded-lg border p-4">
      <span className="text-primary flex-1">Row with actions menu</span>
      <DropdownMenu>
        <ActionsMenuButton />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-error">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="sm" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="default" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="lg" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Large</span>
      </div>
    </div>
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [showToolbar, setShowToolbar] = React.useState(true);
    const [showSidebar, setShowSidebar] = React.useState(false);
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            Show Toolbar
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            Show Sidebar
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Show Status Bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [theme, setTheme] = React.useState('light');
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Select Theme</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Menu with Submenus</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>Email Link</DropdownMenuItem>
            <DropdownMenuItem>Messages</DropdownMenuItem>
            <DropdownMenuItem>Notes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>More...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>
              Save Page As...
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
            <DropdownMenuItem>Name Window...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Print...
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <table className="w-full border-collapse">
      <thead>
        <tr className="border-border border-b">
          <th className="text-small text-secondary p-3 text-left font-semibold">
            Name
          </th>
          <th className="text-small text-secondary p-3 text-left font-semibold">
            Status
          </th>
          <th className="w-12 p-3"></th>
        </tr>
      </thead>
      <tbody>
        {['Project Alpha', 'Project Beta', 'Project Gamma'].map(name => <tr key={name} className="border-border border-b">
            <td className="text-primary p-3">{name}</td>
            <td className="text-primary p-3">Active</td>
            <td className="p-3">
              <DropdownMenu>
                <ActionsMenuButton iconSize="sm" />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-error">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [fullUrlsChecked, setFullUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Complete Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem inset>
            Back
            <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset disabled>
            Forward
            <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset>
            Reload
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>More Tools</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>
                Save Page As...
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              <DropdownMenuItem>Name Window...</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            Show Bookmarks Bar
            <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={fullUrlsChecked} onCheckedChange={setFullUrlsChecked}>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel inset>People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...B.parameters?.docs?.source}}};const An=["Default","ActionsMenu","ActionsMenuSizes","WithCheckboxItems","WithRadioItems","WithSubmenus","InTableRow","Complete"];export{R as ActionsMenu,k as ActionsMenuSizes,B as Complete,y as Default,A as InTableRow,T as WithCheckboxItems,_ as WithRadioItems,P as WithSubmenus,An as __namedExportsOrder,Pn as default};
