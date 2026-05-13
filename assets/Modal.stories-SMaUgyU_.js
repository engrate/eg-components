import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as O,b as H,R as L,P,C as _,a as E,D as k,O as R}from"./index-CbjJ0kN7.js";import{c as V}from"./index-HTk8j2sO.js";import{r as m}from"./iframe-C6TdvJ6h.js";import{c as j}from"./utils-kmX6UHYG.js";import{A as Y}from"./index-DTT_SVGY.js";import{m as z}from"./proxy-aRtefDPc.js";import{B as o}from"./Button-BC49wR16.js";import{X as U}from"./x-eDjxNFQr.js";import{H as q}from"./Heading-B0-aaxby.js";import{T as A}from"./Text-DM6cNETd.js";import{L as T}from"./Label-Ce3W0Cz8.js";import{I as D}from"./Input-BXRCi-M-.js";import{T as X}from"./Textarea-C2-g830N.js";import"./index-CgOungok.js";import"./index-CbyQE8UN.js";import"./index-BjH00GBL.js";import"./index-CBCjNIfJ.js";import"./index-D8gACkpA.js";import"./index-CzH84QTO.js";import"./index-JaFoLzmY.js";import"./index-DJz-GJIW.js";import"./index-CSpDkqwV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRTv_bxk.js";import"./createLucideIcon-RR-2aY5i.js";const I=m.createContext(!1),r=({open:a,defaultOpen:n=!1,onOpenChange:s,children:p,...C})=>{const[b,w]=m.useState(n),N=a!==void 0,S=N?a:b,W=m.useCallback(F=>{N||w(F),s?.(F)},[N,s]);return e.jsx(I.Provider,{value:S,children:e.jsx(L,{open:S,onOpenChange:W,...C,children:p})})};r.displayName="Modal";const h=O,G=P,u=H,B=m.forwardRef(({className:a,...n},s)=>e.jsx(R,{ref:s,forceMount:!0,asChild:!0,...n,children:e.jsx(z.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(4px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},transition:{duration:.2},className:j("fixed inset-0 z-50 bg-black/20",a)})}));B.displayName="ModalOverlay";const J=V(["fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2","bg-main grid w-full gap-4 p-8 shadow-lg","max-h-[85vh] overflow-y-auto","border-border rounded-lg border","focus-visible:ring-sunflower focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"],{variants:{size:{sm:"max-w-[400px]",default:"max-w-[500px]",lg:"max-w-[640px]",full:"max-w-[95vw]"}},defaultVariants:{size:"default"}}),l=m.forwardRef(({className:a,children:n,size:s,showCloseButton:p=!0,...C},b)=>{const w=m.useContext(I);return e.jsx(Y,{children:w&&e.jsxs(G,{forceMount:!0,children:[e.jsx(B,{}),e.jsx(_,{ref:b,forceMount:!0,asChild:!0,...C,children:e.jsxs(z.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.2},className:j(J({size:s}),a),children:[n,p&&e.jsx(H,{asChild:!0,children:e.jsxs(o,{variant:"ghost",size:"icon",className:"absolute top-6 right-6",children:[e.jsx(U,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})})]})})]})})});l.displayName="ModalContent";const t=m.forwardRef(({className:a,...n},s)=>e.jsx("div",{ref:s,className:j("flex flex-col space-y-1.5 text-center sm:text-left",a),...n}));t.displayName="ModalHeader";const i=m.forwardRef(({className:a,...n},s)=>e.jsx("div",{ref:s,className:j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...n}));i.displayName="ModalFooter";const d=m.forwardRef(({className:a,children:n,...s},p)=>e.jsx(E,{ref:p,asChild:!0,...s,children:e.jsx(q,{level:"h3",className:a,children:n})}));d.displayName="ModalTitle";const c=m.forwardRef(({className:a,children:n,...s},p)=>e.jsx(k,{ref:p,asChild:!0,...s,children:e.jsx(A,{variant:"semi-lead",className:a,children:n})}));c.displayName="ModalDescription";r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};B.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay"};l.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the default close button in the top-right corner",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};i.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};d.__docgenInfo={description:"",methods:[],displayName:"ModalTitle"};c.__docgenInfo={description:"",methods:[],displayName:"ModalDescription"};const Ce={title:"Overlays/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"]},x={render:()=>e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Open Modal"})}),e.jsxs(l,{children:[e.jsxs(t,{children:[e.jsx(d,{children:"Modal Title"}),e.jsx(c,{children:"This is a description of what the modal is about. It provides context for the user."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"Modal content goes here. You can put any content inside the modal body."})}),e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Cancel"})}),e.jsx(o,{children:"Confirm"})]})]})]})},M={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Small (400px)"})}),e.jsxs(l,{size:"sm",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Small Modal"}),e.jsx(c,{children:"This modal has a max-width of 400px."})]}),e.jsx(i,{children:e.jsx(u,{asChild:!0,children:e.jsx(o,{children:"Close"})})})]})]}),e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Default (500px)"})}),e.jsxs(l,{size:"default",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Default Modal"}),e.jsx(c,{children:"This modal has a max-width of 500px."})]}),e.jsx(i,{children:e.jsx(u,{asChild:!0,children:e.jsx(o,{children:"Close"})})})]})]}),e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Large (640px)"})}),e.jsxs(l,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Large Modal"}),e.jsx(c,{children:"This modal has a max-width of 640px."})]}),e.jsx(i,{children:e.jsx(u,{asChild:!0,children:e.jsx(o,{children:"Close"})})})]})]}),e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Full (95vw)"})}),e.jsxs(l,{size:"full",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Full Width Modal"}),e.jsx(c,{children:"This modal has a max-width of 95vw."})]}),e.jsx(i,{children:e.jsx(u,{asChild:!0,children:e.jsx(o,{children:"Close"})})})]})]})]})},y={render:()=>e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Edit Profile"})}),e.jsxs(l,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Edit Profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("form",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(T,{htmlFor:"name",children:"Name"}),e.jsx(D,{id:"name",placeholder:"Enter your name",defaultValue:"John Doe"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(T,{htmlFor:"email",children:"Email"}),e.jsx(D,{id:"email",type:"email",placeholder:"Enter your email",defaultValue:"john@example.com"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(T,{htmlFor:"bio",children:"Bio"}),e.jsx(X,{id:"bio",placeholder:"Tell us about yourself",rows:3})]})]}),e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Cancel"})}),e.jsx(o,{type:"submit",children:"Save changes"})]})]})]})},f={render:()=>e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Terms of Service"})}),e.jsxs(l,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(d,{children:"Terms of Service"}),e.jsx(c,{children:"Please read our terms of service carefully."})]}),e.jsxs("div",{className:"text-secondary max-h-[50vh] overflow-y-auto py-4 text-sm",children:[e.jsx("h3",{className:"text-primary mb-2",children:"1. Introduction"}),e.jsx("p",{className:"mb-4",children:"Welcome to our service. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms."}),e.jsx("h3",{className:"text-primary mb-2",children:"2. Use of Services"}),e.jsx("p",{className:"mb-4",children:"You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct."}),e.jsx("h3",{className:"text-primary mb-2",children:"3. Privacy Policy"}),e.jsx("p",{className:"mb-4",children:"Our privacy policy explains how we treat your personal data and protect your privacy when you use our services. By using our services, you agree that we can use such data in accordance with our privacy policies."}),e.jsx("h3",{className:"text-primary mb-2",children:"4. Content in Services"}),e.jsx("p",{className:"mb-4",children:"Some of our services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content."}),e.jsx("h3",{className:"text-primary mb-2",children:"5. Software in Services"}),e.jsx("p",{className:"mb-4",children:"When a service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available."}),e.jsx("h3",{className:"text-primary mb-2",children:"6. Modifying and Terminating"}),e.jsx("p",{className:"mb-4",children:"We are constantly changing and improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether."}),e.jsx("h3",{className:"text-primary mb-2",children:"7. Liability"}),e.jsx("p",{className:"mb-4",children:"When permitted by law, we will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages."}),e.jsx("h3",{className:"text-primary mb-2",children:"8. Business Uses"}),e.jsx("p",{className:"mb-4",children:"If you are using our services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify us from any claim, suit or action arising from or related to the use of the services."})]}),e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Decline"})}),e.jsx(o,{children:"Accept"})]})]})]})},v={render:()=>e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Open Modal (No X Button)"})}),e.jsxs(l,{showCloseButton:!1,children:[e.jsxs(t,{children:[e.jsx(d,{children:"Confirm Action"}),e.jsx(c,{children:"This modal doesn't have a close button. Use the footer buttons to dismiss it."})]}),e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Cancel"})}),e.jsx(o,{children:"Confirm"})]})]})]})},g={render:()=>e.jsxs(r,{children:[e.jsx(h,{asChild:!0,children:e.jsx(o,{children:"Custom Styled Modal"})}),e.jsxs(l,{className:"border-sunflower bg-sunflower",children:[e.jsxs(t,{className:"border-sunflower border-b pb-4",children:[e.jsx(d,{children:"Custom Styled"}),e.jsx(c,{children:"This modal demonstrates custom styling with className overrides."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"You can customize the appearance by passing className to any of the modal parts."})}),e.jsx(i,{className:"border-sunflower border-t pt-4",children:e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Got it!"})})})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const be=["Default","Sizes","WithForm","LongContent","WithoutCloseButton","CustomStyling"];export{g as CustomStyling,x as Default,f as LongContent,M as Sizes,y as WithForm,v as WithoutCloseButton,be as __namedExportsOrder,Ce as default};
