import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as te,b as Z,R as re,P as le,C as ie,a as de,D as ce,O as ue}from"./index-DzY3xLCq.js";import{c as he}from"./index-HTk8j2sO.js";import{r as a}from"./iframe-DRsmyPNk.js";import{c as k}from"./utils-kmX6UHYG.js";import{M as me,i as G,u as ee,P as pe,a as fe,b as xe,L as ye,m as oe}from"./proxy-B9pxq6v8.js";import{B as l}from"./Button-CtgZ8RHi.js";import{X as Me}from"./x-DUFJw3U3.js";import{H as ge}from"./Heading-BcJnvcXW.js";import{T as ve}from"./Text-DY2k-W7N.js";import{L as q}from"./Label-CusTL-k8.js";import{I as J}from"./Input-DJADxodb.js";import{T as Ce}from"./Textarea-BgSRv9O6.js";import"./index-DNhCUDd2.js";import"./index-BfUwE0PP.js";import"./index-pwU8Ef4j.js";import"./index-C89VOX4K.js";import"./index-CMs7vEjz.js";import"./index-BzHsBU10.js";import"./index-TS-iktFm.js";import"./index-YmRGVr_T.js";import"./index-gDt6KWSV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_axniF5.js";import"./createLucideIcon-cVw6N0Nl.js";function K(o,n){if(typeof o=="function")return o(n);o!=null&&(o.current=n)}function je(...o){return n=>{let s=!1;const t=o.map(d=>{const i=K(d,n);return!s&&typeof i=="function"&&(s=!0),i});if(s)return()=>{for(let d=0;d<t.length;d++){const i=t[d];typeof i=="function"?i():K(o[d],null)}}}}function be(...o){return a.useCallback(je(...o),o)}class we extends a.Component{getSnapshotBeforeUpdate(n){const s=this.props.childRef.current;if(s&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const t=s.offsetParent,d=G(t)&&t.offsetWidth||0,i=G(t)&&t.offsetHeight||0,r=this.props.sizeRef.current;r.height=s.offsetHeight||0,r.width=s.offsetWidth||0,r.top=s.offsetTop,r.left=s.offsetLeft,r.right=d-r.width-r.left,r.bottom=i-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ne({children:o,isPresent:n,anchorX:s,anchorY:t,root:d,pop:i}){const r=a.useId(),p=a.useRef(null),w=a.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:B}=a.useContext(me),u=o.props?.ref??o?.ref,H=be(p,u);return a.useInsertionEffect(()=>{const{width:h,height:f,top:j,left:S,right:F,bottom:z}=w.current;if(n||i===!1||!p.current||!h||!f)return;const V=s==="left"?`left: ${S}`:`right: ${F}`,U=t==="bottom"?`bottom: ${z}`:`top: ${j}`;p.current.dataset.motionPopId=r;const m=document.createElement("style");B&&(m.nonce=B);const D=d??document.head;return D.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${V}px !important;
            ${U}px !important;
          }
        `),()=>{D.contains(m)&&D.removeChild(m)}},[n]),e.jsx(we,{isPresent:n,childRef:p,sizeRef:w,pop:i,children:i===!1?o:a.cloneElement(o,{ref:H})})}const Te=({children:o,initial:n,isPresent:s,onExitComplete:t,custom:d,presenceAffectsLayout:i,mode:r,anchorX:p,anchorY:w,root:B})=>{const u=ee(Be),H=a.useId();let h=!0,f=a.useMemo(()=>(h=!1,{id:H,initial:n,isPresent:s,custom:d,onExitComplete:j=>{u.set(j,!0);for(const S of u.values())if(!S)return;t&&t()},register:j=>(u.set(j,!1),()=>u.delete(j))}),[s,u,t]);return i&&h&&(f={...f}),a.useMemo(()=>{u.forEach((j,S)=>u.set(S,!1))},[s]),a.useEffect(()=>{!s&&!u.size&&t&&t()},[s]),o=e.jsx(Ne,{pop:r==="popLayout",isPresent:s,anchorX:p,anchorY:w,root:B,children:o}),e.jsx(pe.Provider,{value:f,children:o})};function Be(){return new Map}const P=o=>o.key||"";function Q(o){const n=[];return a.Children.forEach(o,s=>{a.isValidElement(s)&&n.push(s)}),n}const Se=({children:o,custom:n,initial:s=!0,onExitComplete:t,presenceAffectsLayout:d=!0,mode:i="sync",propagate:r=!1,anchorX:p="left",anchorY:w="top",root:B})=>{const[u,H]=fe(r),h=a.useMemo(()=>Q(o),[o]),f=r&&!u?[]:h.map(P),j=a.useRef(!0),S=a.useRef(h),F=ee(()=>new Map),z=a.useRef(new Set),[V,U]=a.useState(h),[m,D]=a.useState(h);xe(()=>{j.current=!1,S.current=h;for(let b=0;b<m.length;b++){const c=P(m[b]);f.includes(c)?(F.delete(c),z.current.delete(c)):F.get(c)!==!0&&F.set(c,!1)}},[m,f.length,f.join("-")]);const Y=[];if(h!==V){let b=[...h];for(let c=0;c<m.length;c++){const R=m[c],$=P(R);f.includes($)||(b.splice(c,0,R),Y.push(R))}return i==="wait"&&Y.length&&(b=Y),D(Q(b)),U(h),null}const{forceRender:ne}=a.useContext(ye);return e.jsx(e.Fragment,{children:m.map(b=>{const c=P(b),R=r&&!u?!1:h===m||f.includes(c),$=()=>{if(z.current.has(c))return;if(z.current.add(c),F.has(c))F.set(c,!0);else return;let X=!0;F.forEach(ae=>{ae||(X=!1)}),X&&(ne?.(),D(S.current),r&&H?.(),t&&t())};return e.jsx(Te,{isPresent:R,initial:!j.current||s?void 0:!1,custom:n,presenceAffectsLayout:d,mode:i,root:B,onExitComplete:R?void 0:$,anchorX:p,anchorY:w,children:b},c)})})},se=a.createContext(!1),x=({open:o,defaultOpen:n=!1,onOpenChange:s,children:t,...d})=>{const[i,r]=a.useState(n),p=o!==void 0,w=p?o:i,B=a.useCallback(u=>{p||r(u),s?.(u)},[p,s]);return e.jsx(se.Provider,{value:w,children:e.jsx(re,{open:w,onOpenChange:B,...d,children:t})})};x.displayName="Modal";const N=te,Fe=le,T=Z,A=a.forwardRef(({className:o,...n},s)=>e.jsx(ue,{ref:s,forceMount:!0,asChild:!0,...n,children:e.jsx(oe.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(4px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},transition:{duration:.2},className:k("fixed inset-0 z-50 bg-black/20",o)})}));A.displayName="ModalOverlay";const De=he(["fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2","bg-main grid w-full gap-4 p-8 shadow-lg","max-h-[85vh] overflow-y-auto","border-border rounded-lg border","focus-visible:ring-sunflower focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"],{variants:{size:{sm:"max-w-[400px]",default:"max-w-[500px]",lg:"max-w-[640px]",full:"max-w-[95vw]"}},defaultVariants:{size:"default"}}),y=a.forwardRef(({className:o,children:n,size:s,showCloseButton:t=!0,...d},i)=>{const r=a.useContext(se);return e.jsx(Se,{children:r&&e.jsxs(Fe,{forceMount:!0,children:[e.jsx(A,{}),e.jsx(ie,{ref:i,forceMount:!0,asChild:!0,...d,children:e.jsxs(oe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.2},className:k(De({size:s}),o),children:[n,t&&e.jsx(Z,{asChild:!0,children:e.jsxs(l,{variant:"ghost",size:"icon",className:"absolute top-6 right-6",children:[e.jsx(Me,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})})]})})]})})});y.displayName="ModalContent";const M=a.forwardRef(({className:o,...n},s)=>e.jsx("div",{ref:s,className:k("flex flex-col space-y-1.5 text-center sm:text-left",o),...n}));M.displayName="ModalHeader";const g=a.forwardRef(({className:o,...n},s)=>e.jsx("div",{ref:s,className:k("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...n}));g.displayName="ModalFooter";const v=a.forwardRef(({className:o,children:n,...s},t)=>e.jsx(de,{ref:t,asChild:!0,...s,children:e.jsx(ge,{level:"h3",className:o,children:n})}));v.displayName="ModalTitle";const C=a.forwardRef(({className:o,children:n,...s},t)=>e.jsx(ce,{ref:t,asChild:!0,...s,children:e.jsx(ve,{variant:"semi-lead",className:o,children:n})}));C.displayName="ModalDescription";x.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};A.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay"};y.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the default close button in the top-right corner",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};M.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};g.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};v.__docgenInfo={description:"",methods:[],displayName:"ModalTitle"};C.__docgenInfo={description:"",methods:[],displayName:"ModalDescription"};const so={title:"Overlays/Modal",component:x,parameters:{layout:"centered"},tags:["autodocs"]},E={render:()=>e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{children:"Open Modal"})}),e.jsxs(y,{children:[e.jsxs(M,{children:[e.jsx(v,{children:"Modal Title"}),e.jsx(C,{children:"This is a description of what the modal is about. It provides context for the user."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"Modal content goes here. You can put any content inside the modal body."})}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Cancel"})}),e.jsx(l,{children:"Confirm"})]})]})]})},I={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Small (400px)"})}),e.jsxs(y,{size:"sm",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Small Modal"}),e.jsx(C,{children:"This modal has a max-width of 400px."})]}),e.jsx(g,{children:e.jsx(T,{asChild:!0,children:e.jsx(l,{children:"Close"})})})]})]}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Default (500px)"})}),e.jsxs(y,{size:"default",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Default Modal"}),e.jsx(C,{children:"This modal has a max-width of 500px."})]}),e.jsx(g,{children:e.jsx(T,{asChild:!0,children:e.jsx(l,{children:"Close"})})})]})]}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Large (640px)"})}),e.jsxs(y,{size:"lg",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Large Modal"}),e.jsx(C,{children:"This modal has a max-width of 640px."})]}),e.jsx(g,{children:e.jsx(T,{asChild:!0,children:e.jsx(l,{children:"Close"})})})]})]}),e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Full (95vw)"})}),e.jsxs(y,{size:"full",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Full Width Modal"}),e.jsx(C,{children:"This modal has a max-width of 95vw."})]}),e.jsx(g,{children:e.jsx(T,{asChild:!0,children:e.jsx(l,{children:"Close"})})})]})]})]})},L={render:()=>e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{children:"Edit Profile"})}),e.jsxs(y,{size:"lg",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Edit Profile"}),e.jsx(C,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("form",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(q,{htmlFor:"name",children:"Name"}),e.jsx(J,{id:"name",placeholder:"Enter your name",defaultValue:"John Doe"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(q,{htmlFor:"email",children:"Email"}),e.jsx(J,{id:"email",type:"email",placeholder:"Enter your email",defaultValue:"john@example.com"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(q,{htmlFor:"bio",children:"Bio"}),e.jsx(Ce,{id:"bio",placeholder:"Tell us about yourself",rows:3})]})]}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Cancel"})}),e.jsx(l,{type:"submit",children:"Save changes"})]})]})]})},W={render:()=>e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{children:"Terms of Service"})}),e.jsxs(y,{size:"lg",children:[e.jsxs(M,{children:[e.jsx(v,{children:"Terms of Service"}),e.jsx(C,{children:"Please read our terms of service carefully."})]}),e.jsxs("div",{className:"text-secondary max-h-[50vh] overflow-y-auto py-4 text-sm",children:[e.jsx("h3",{className:"text-primary mb-2",children:"1. Introduction"}),e.jsx("p",{className:"mb-4",children:"Welcome to our service. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms."}),e.jsx("h3",{className:"text-primary mb-2",children:"2. Use of Services"}),e.jsx("p",{className:"mb-4",children:"You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct."}),e.jsx("h3",{className:"text-primary mb-2",children:"3. Privacy Policy"}),e.jsx("p",{className:"mb-4",children:"Our privacy policy explains how we treat your personal data and protect your privacy when you use our services. By using our services, you agree that we can use such data in accordance with our privacy policies."}),e.jsx("h3",{className:"text-primary mb-2",children:"4. Content in Services"}),e.jsx("p",{className:"mb-4",children:"Some of our services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content."}),e.jsx("h3",{className:"text-primary mb-2",children:"5. Software in Services"}),e.jsx("p",{className:"mb-4",children:"When a service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available."}),e.jsx("h3",{className:"text-primary mb-2",children:"6. Modifying and Terminating"}),e.jsx("p",{className:"mb-4",children:"We are constantly changing and improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether."}),e.jsx("h3",{className:"text-primary mb-2",children:"7. Liability"}),e.jsx("p",{className:"mb-4",children:"When permitted by law, we will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages."}),e.jsx("h3",{className:"text-primary mb-2",children:"8. Business Uses"}),e.jsx("p",{className:"mb-4",children:"If you are using our services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify us from any claim, suit or action arising from or related to the use of the services."})]}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Decline"})}),e.jsx(l,{children:"Accept"})]})]})]})},O={render:()=>e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{children:"Open Modal (No X Button)"})}),e.jsxs(y,{showCloseButton:!1,children:[e.jsxs(M,{children:[e.jsx(v,{children:"Confirm Action"}),e.jsx(C,{children:"This modal doesn't have a close button. Use the footer buttons to dismiss it."})]}),e.jsxs(g,{children:[e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Cancel"})}),e.jsx(l,{children:"Confirm"})]})]})]})},_={render:()=>e.jsxs(x,{children:[e.jsx(N,{asChild:!0,children:e.jsx(l,{children:"Custom Styled Modal"})}),e.jsxs(y,{className:"border-sunflower bg-sunflower",children:[e.jsxs(M,{className:"border-sunflower border-b pb-4",children:[e.jsx(v,{children:"Custom Styled"}),e.jsx(C,{children:"This modal demonstrates custom styling with className overrides."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"You can customize the appearance by passing className to any of the modal parts."})}),e.jsx(g,{className:"border-sunflower border-t pt-4",children:e.jsx(T,{asChild:!0,children:e.jsx(l,{variant:"secondary",children:"Got it!"})})})]})]})};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of what the modal is about. It provides
            context for the user.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p className="text-secondary">
            Modal content goes here. You can put any content inside the modal
            body.
          </p>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Small (400px)</Button>
        </ModalTrigger>
        <ModalContent size="sm">
          <ModalHeader>
            <ModalTitle>Small Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 400px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Default (500px)</Button>
        </ModalTrigger>
        <ModalContent size="default">
          <ModalHeader>
            <ModalTitle>Default Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 500px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Large (640px)</Button>
        </ModalTrigger>
        <ModalContent size="lg">
          <ModalHeader>
            <ModalTitle>Large Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 640px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Full (95vw)</Button>
        </ModalTrigger>
        <ModalContent size="full">
          <ModalHeader>
            <ModalTitle>Full Width Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 95vw.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Modal>
      <ModalTrigger asChild>
        <Button>Edit Profile</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </ModalDescription>
        </ModalHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" defaultValue="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" defaultValue="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
          </div>
        </form>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button type="submit">Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Modal>
      <ModalTrigger asChild>
        <Button>Terms of Service</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Terms of Service</ModalTitle>
          <ModalDescription>
            Please read our terms of service carefully.
          </ModalDescription>
        </ModalHeader>
        <div className="text-secondary max-h-[50vh] overflow-y-auto py-4 text-sm">
          <h3 className="text-primary mb-2">1. Introduction</h3>
          <p className="mb-4">
            Welcome to our service. These Terms of Service govern your use of
            our website and services. By accessing or using our services, you
            agree to be bound by these terms.
          </p>

          <h3 className="text-primary mb-2">2. Use of Services</h3>
          <p className="mb-4">
            You may use our services only as permitted by law. We may suspend or
            stop providing our services to you if you do not comply with our
            terms or policies or if we are investigating suspected misconduct.
          </p>

          <h3 className="text-primary mb-2">3. Privacy Policy</h3>
          <p className="mb-4">
            Our privacy policy explains how we treat your personal data and
            protect your privacy when you use our services. By using our
            services, you agree that we can use such data in accordance with our
            privacy policies.
          </p>

          <h3 className="text-primary mb-2">4. Content in Services</h3>
          <p className="mb-4">
            Some of our services allow you to upload, submit, store, send or
            receive content. You retain ownership of any intellectual property
            rights that you hold in that content.
          </p>

          <h3 className="text-primary mb-2">5. Software in Services</h3>
          <p className="mb-4">
            When a service requires or includes downloadable software, this
            software may update automatically on your device once a new version
            or feature is available.
          </p>

          <h3 className="text-primary mb-2">6. Modifying and Terminating</h3>
          <p className="mb-4">
            We are constantly changing and improving our services. We may add or
            remove functionalities or features, and we may suspend or stop a
            service altogether.
          </p>

          <h3 className="text-primary mb-2">7. Liability</h3>
          <p className="mb-4">
            When permitted by law, we will not be responsible for lost profits,
            revenues, or data, financial losses or indirect, special,
            consequential, exemplary, or punitive damages.
          </p>

          <h3 className="text-primary mb-2">8. Business Uses</h3>
          <p className="mb-4">
            If you are using our services on behalf of a business, that business
            accepts these terms. It will hold harmless and indemnify us from any
            claim, suit or action arising from or related to the use of the
            services.
          </p>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Decline</Button>
          </ModalClose>
          <Button>Accept</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal (No X Button)</Button>
      </ModalTrigger>
      <ModalContent showCloseButton={false}>
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>
            This modal doesn&apos;t have a close button. Use the footer buttons
            to dismiss it.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Modal>
      <ModalTrigger asChild>
        <Button>Custom Styled Modal</Button>
      </ModalTrigger>
      <ModalContent className="border-sunflower bg-sunflower">
        <ModalHeader className="border-sunflower border-b pb-4">
          <ModalTitle>Custom Styled</ModalTitle>
          <ModalDescription>
            This modal demonstrates custom styling with className overrides.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p className="text-secondary">
            You can customize the appearance by passing className to any of the
            modal parts.
          </p>
        </div>
        <ModalFooter className="border-sunflower border-t pt-4">
          <ModalClose asChild>
            <Button variant="secondary">Got it!</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,..._.parameters?.docs?.source}}};const no=["Default","Sizes","WithForm","LongContent","WithoutCloseButton","CustomStyling"];export{_ as CustomStyling,E as Default,W as LongContent,I as Sizes,L as WithForm,O as WithoutCloseButton,no as __namedExportsOrder,so as default};
