import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-Dfq8qvx6.js";import{c as J,a as Q}from"./index-DvhaVwHw.js";import{u as P}from"./index-5bzPpIL7.js";import{R as U,T as X,c as E,P as Z,W as ee,C as ne,a as te,D as ie,b as I,O as re}from"./index-2joI7_zR.js";import{c as le}from"./index-HTk8j2sO.js";import{c as f}from"./utils-kmX6UHYG.js";import{H as ae}from"./Heading-CAA20hiI.js";import{T as oe}from"./Text-Bm0Z09vU.js";import{b as O,B as p}from"./Button-Cvwu3Xe9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHFfDCUl.js";import"./index-MsJUr734.js";import"./index-64tasMqG.js";import"./index-B-C3NLt6.js";import"./index-DfrJePBg.js";import"./index-BTf1uYOB.js";import"./index-JGofPdXw.js";import"./index-uAM_Mdon.js";var se=Symbol("radix.slottable");function ce(t){const n=({children:i})=>e.jsx(e.Fragment,{children:i});return n.displayName=`${t}.Slottable`,n.__radixId=se,n}var F="AlertDialog",[de]=Q(F,[E]),A=E(),B=t=>{const{__scopeAlertDialog:n,...i}=t,r=A(n);return e.jsx(U,{...r,...i,modal:!0})};B.displayName=F;var ue="AlertDialogTrigger",H=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,l=A(i);return e.jsx(X,{...l,...r,ref:n})});H.displayName=ue;var ge="AlertDialogPortal",L=t=>{const{__scopeAlertDialog:n,...i}=t,r=A(n);return e.jsx(Z,{...r,...i})};L.displayName=ge;var me="AlertDialogOverlay",z=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,l=A(i);return e.jsx(re,{...l,...r,ref:n})});z.displayName=me;var x="AlertDialogContent",[De,Ae]=de(x),pe=ce("AlertDialogContent"),V=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,children:r,...l}=t,_=A(i),j=a.useRef(null),K=P(n,j),R=a.useRef(null);return e.jsx(ee,{contentName:x,titleName:$,docsSlug:"alert-dialog",children:e.jsx(De,{scope:i,cancelRef:R,children:e.jsxs(ne,{role:"alertdialog",..._,...l,ref:K,onOpenAutoFocus:J(l.onOpenAutoFocus,v=>{v.preventDefault(),R.current?.focus({preventScroll:!0})}),onPointerDownOutside:v=>v.preventDefault(),onInteractOutside:v=>v.preventDefault(),children:[e.jsx(pe,{children:r}),e.jsx(xe,{contentRef:j})]})})})});V.displayName=x;var $="AlertDialogTitle",M=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,l=A(i);return e.jsx(te,{...l,...r,ref:n})});M.displayName=$;var Y="AlertDialogDescription",q=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,l=A(i);return e.jsx(ie,{...l,...r,ref:n})});q.displayName=Y;var he="AlertDialogAction",k=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,l=A(i);return e.jsx(I,{...l,...r,ref:n})});k.displayName=he;var G="AlertDialogCancel",W=a.forwardRef((t,n)=>{const{__scopeAlertDialog:i,...r}=t,{cancelRef:l}=Ae(G,i),_=A(i),j=P(n,l);return e.jsx(I,{..._,...r,ref:j})});W.displayName=G;var xe=({contentRef:t})=>{const n=`\`${x}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${x}\` by passing a \`${Y}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${x}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return a.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(n)},[n,t]),null},fe=B,ve=H,je=L,Ce=z,ye=V,Te=k,be=W,Ne=M,we=q;const D=fe,h=ve,_e=je,S=a.forwardRef(({className:t,...n},i)=>e.jsx(Ce,{ref:i,className:f("fixed inset-0 z-50 bg-black/20","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","duration-200",t),...n}));S.displayName="AlertDialogOverlay";const Se=le(["fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2","bg-main grid w-full gap-6 p-8 shadow-lg","max-h-[85vh] overflow-y-auto","rounded-xs","focus-visible:ring-sunflower focus:outline-none focus-visible:ring-1","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]","data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]","duration-200"],{variants:{size:{sm:"max-w-[400px]",default:"max-w-[500px]",lg:"max-w-[640px]"}},defaultVariants:{size:"default"}}),o=a.forwardRef(({className:t,size:n,...i},r)=>e.jsxs(_e,{children:[e.jsx(S,{}),e.jsx(ye,{ref:r,className:f(Se({size:n}),t),...i})]}));o.displayName="AlertDialogContent";const s=a.forwardRef(({className:t,...n},i)=>e.jsx("div",{ref:i,className:f("flex flex-col space-y-2 text-center sm:text-left",t),...n}));s.displayName="AlertDialogHeader";const c=a.forwardRef(({className:t,...n},i)=>e.jsx("div",{ref:i,className:f("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n}));c.displayName="AlertDialogFooter";const d=a.forwardRef(({className:t,children:n,...i},r)=>e.jsx(Ne,{ref:r,asChild:!0,...i,children:e.jsx(ae,{level:"h3",className:t,children:n})}));d.displayName="AlertDialogTitle";const u=a.forwardRef(({className:t,children:n,...i},r)=>e.jsx(we,{ref:r,asChild:!0,...i,children:e.jsx(oe,{variant:"body-sm",className:t,children:n})}));u.displayName="AlertDialogDescription";const g=a.forwardRef(({className:t,variant:n="primary",size:i="default",...r},l)=>e.jsx(Te,{ref:l,className:f(O({variant:n,size:i}),t),...r}));g.displayName="AlertDialogAction";const m=a.forwardRef(({className:t,variant:n="secondary",size:i="default",...r},l)=>e.jsx(be,{ref:l,className:f(O({variant:n,size:i}),"mt-2 sm:mt-0",t),...r}));m.displayName="AlertDialogCancel";S.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};o.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent",composes:["VariantProps"]};s.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};c.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel",props:{variant:{defaultValue:{value:"'secondary'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};const Je={title:"Overlays/AlertDialog",component:D,parameters:{layout:"centered"},tags:["autodocs"]},C={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{children:"Delete Account"})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Are you absolutely sure?"}),e.jsx(u,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(g,{children:"Delete Account"})]})]})]})},y={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{variant:"secondary",children:"Small (400px)"})}),e.jsxs(o,{size:"sm",children:[e.jsxs(s,{children:[e.jsx(d,{children:"Small Alert Dialog"}),e.jsx(u,{children:"This alert dialog has a max-width of 400px."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(g,{children:"Confirm"})]})]})]}),e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{variant:"secondary",children:"Default (500px)"})}),e.jsxs(o,{size:"default",children:[e.jsxs(s,{children:[e.jsx(d,{children:"Default Alert Dialog"}),e.jsx(u,{children:"This alert dialog has a max-width of 500px."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(g,{children:"Confirm"})]})]})]}),e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{variant:"secondary",children:"Large (640px)"})}),e.jsxs(o,{size:"lg",children:[e.jsxs(s,{children:[e.jsx(d,{children:"Large Alert Dialog"}),e.jsx(u,{children:"This alert dialog has a max-width of 640px."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(g,{children:"Confirm"})]})]})]})]})},T={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{children:"Delete Item"})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Delete this item?"}),e.jsx(u,{children:"This action is permanent. The item will be removed from your account and cannot be recovered."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Keep Item"}),e.jsx(g,{children:"Yes, Delete"})]})]})]})},b={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{variant:"secondary",children:"Publish Changes"})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Publish changes?"}),e.jsx(u,{children:"Your changes will be visible to all users immediately. Make sure you've reviewed everything before publishing."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Review Again"}),e.jsx(g,{children:"Publish"})]})]})]})},N={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{children:"Log Out"})}),e.jsxs(o,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"Log out?"}),e.jsx(u,{children:"You will need to log in again to access your account."})]}),e.jsxs(c,{children:[e.jsx(m,{variant:"ghost",children:"Stay Logged In"}),e.jsx(g,{variant:"secondary",children:"Log Out"})]})]})]})},w={render:()=>e.jsxs(D,{children:[e.jsx(h,{asChild:!0,children:e.jsx(p,{children:"Accept Terms"})}),e.jsxs(o,{size:"lg",children:[e.jsxs(s,{children:[e.jsx(d,{children:"Terms and Conditions"}),e.jsx(u,{children:"Please read and accept our terms and conditions before continuing."})]}),e.jsxs("div",{className:"text-secondary max-h-75 overflow-y-auto text-sm",children:[e.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc."}),e.jsx("p",{className:"mb-4",children:"Praesent euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc."}),e.jsx("p",{className:"mb-4",children:"Curabitur euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc."}),e.jsx("p",{children:"Vestibulum euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc."})]}),e.jsxs(c,{children:[e.jsx(m,{children:"Decline"}),e.jsx(g,{children:"Accept Terms"})]})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete Account</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Small (400px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Small Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 400px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Default (500px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="default">
          <AlertDialogHeader>
            <AlertDialogTitle>Default Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 500px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Large (640px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Large Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 640px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this item?</AlertDialogTitle>
          <AlertDialogDescription>
            This action is permanent. The item will be removed from your account
            and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Item</AlertDialogCancel>
          <AlertDialogAction>Yes, Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Publish Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish changes?</AlertDialogTitle>
          <AlertDialogDescription>
            Your changes will be visible to all users immediately. Make sure
            you&apos;ve reviewed everything before publishing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Review Again</AlertDialogCancel>
          <AlertDialogAction>Publish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Log Out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will need to log in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">Stay Logged In</AlertDialogCancel>
          <AlertDialogAction variant="secondary">Log Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Accept Terms</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            Please read and accept our terms and conditions before continuing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-secondary max-h-75 overflow-y-auto text-sm">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
            vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p className="mb-4">
            Praesent euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p className="mb-4">
            Curabitur euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p>
            Vestibulum euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...w.parameters?.docs?.source}}};const Qe=["Default","Sizes","DestructiveAction","ConfirmationDialog","CustomButtonVariants","LongContent"];export{b as ConfirmationDialog,N as CustomButtonVariants,C as Default,T as DestructiveAction,w as LongContent,y as Sizes,Qe as __namedExportsOrder,Je as default};
