import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S,T as D,b as w,P as F,C as z,a as H,D as W,O as I}from"./index-DNWIwKYT.js";import{c as L}from"./index-DDA3KdpW.js";import{r as p}from"./iframe-BxtZELN4.js";import{c as u}from"./utils-ryREhF4q.js";import{X as P}from"./x-CSTNjAWr.js";import{B as a}from"./Button-DvLj-Xep.js";import{L as j}from"./Label-tAyZ86bg.js";import{I as C}from"./Input-BFOcwzwp.js";import{T as _}from"./Textarea-CEftw3Hx.js";import"./index-CXFVZwEz.js";import"./index-Bf2N8wzW.js";import"./index-D2ycZcaa.js";import"./index-C9-vS83p.js";import"./index-DuBNfiZT.js";import"./index-8pd-xsk7.js";import"./index-C6hNaJBK.js";import"./index-lZfkP8Cy.js";import"./index-BecDCzhB.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B5EhZ-80.js";import"./index-CPwMR7dn.js";const c=S,m=D,E=F,h=w,b=p.forwardRef(({className:o,...s},n)=>e.jsx(I,{ref:n,className:u("fixed inset-0 z-50 bg-black/50","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","duration-200",o),...s}));b.displayName="ModalOverlay";const O=L(["fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2","bg-main grid w-full gap-4 p-6 shadow-lg","max-h-[85vh] overflow-y-auto","border-border rounded-lg border","focus-visible:ring-sunflower focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]","data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]","duration-200"],{variants:{size:{sm:"max-w-[400px]",default:"max-w-[500px]",lg:"max-w-[640px]",full:"max-w-[95vw]"}},defaultVariants:{size:"default"}}),r=p.forwardRef(({className:o,children:s,size:n,showCloseButton:N=!0,...T},B)=>e.jsxs(E,{children:[e.jsx(b,{}),e.jsxs(z,{ref:B,className:u(O({size:n}),o),...T,children:[s,N&&e.jsxs(w,{className:u("absolute top-4 right-4 rounded-sm opacity-70","ring-offset-main transition-opacity","hover:opacity-100","focus:ring-sunflower focus:ring-2 focus:ring-offset-2 focus:outline-none","disabled:pointer-events-none","data-[state=open]:bg-alt data-[state=open]:text-secondary"),children:[e.jsx(P,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));r.displayName="ModalContent";const t=p.forwardRef(({className:o,...s},n)=>e.jsx("div",{ref:n,className:u("flex flex-col space-y-1.5 text-center sm:text-left",o),...s}));t.displayName="ModalHeader";const l=p.forwardRef(({className:o,...s},n)=>e.jsx("div",{ref:n,className:u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...s}));l.displayName="ModalFooter";const i=p.forwardRef(({className:o,...s},n)=>e.jsx(H,{ref:n,className:u("text-primary text-lg leading-none tracking-tight",o),...s}));i.displayName="ModalTitle";const d=p.forwardRef(({className:o,...s},n)=>e.jsx(W,{ref:n,className:u("text-secondary text-sm",o),...s}));d.displayName="ModalDescription";b.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay"};r.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the default close button in the top-right corner",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};l.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};i.__docgenInfo={description:"",methods:[],displayName:"ModalTitle"};d.__docgenInfo={description:"",methods:[],displayName:"ModalDescription"};const ie={title:"Overlays/Modal",component:c,parameters:{layout:"centered"},tags:["autodocs"]},x={render:()=>e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{children:"Open Modal"})}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(i,{children:"Modal Title"}),e.jsx(d,{children:"This is a description of what the modal is about. It provides context for the user."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"Modal content goes here. You can put any content inside the modal body."})}),e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Cancel"})}),e.jsx(a,{children:"Confirm"})]})]})]})},f={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Small (400px)"})}),e.jsxs(r,{size:"sm",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Small Modal"}),e.jsx(d,{children:"This modal has a max-width of 400px."})]}),e.jsx(l,{children:e.jsx(h,{asChild:!0,children:e.jsx(a,{children:"Close"})})})]})]}),e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Default (500px)"})}),e.jsxs(r,{size:"default",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Default Modal"}),e.jsx(d,{children:"This modal has a max-width of 500px."})]}),e.jsx(l,{children:e.jsx(h,{asChild:!0,children:e.jsx(a,{children:"Close"})})})]})]}),e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Large (640px)"})}),e.jsxs(r,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Large Modal"}),e.jsx(d,{children:"This modal has a max-width of 640px."})]}),e.jsx(l,{children:e.jsx(h,{asChild:!0,children:e.jsx(a,{children:"Close"})})})]})]}),e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Full (95vw)"})}),e.jsxs(r,{size:"full",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Full Width Modal"}),e.jsx(d,{children:"This modal has a max-width of 95vw."})]}),e.jsx(l,{children:e.jsx(h,{asChild:!0,children:e.jsx(a,{children:"Close"})})})]})]})]})},y={render:()=>e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{children:"Edit Profile"})}),e.jsxs(r,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Edit Profile"}),e.jsx(d,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("form",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(j,{htmlFor:"name",children:"Name"}),e.jsx(C,{id:"name",placeholder:"Enter your name",defaultValue:"John Doe"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(j,{htmlFor:"email",children:"Email"}),e.jsx(C,{id:"email",type:"email",placeholder:"Enter your email",defaultValue:"john@example.com"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(j,{htmlFor:"bio",children:"Bio"}),e.jsx(_,{id:"bio",placeholder:"Tell us about yourself",rows:3})]})]}),e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Cancel"})}),e.jsx(a,{type:"submit",children:"Save changes"})]})]})]})},M={render:()=>e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{children:"Terms of Service"})}),e.jsxs(r,{size:"lg",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Terms of Service"}),e.jsx(d,{children:"Please read our terms of service carefully."})]}),e.jsxs("div",{className:"text-secondary max-h-[50vh] overflow-y-auto py-4 text-sm",children:[e.jsx("h3",{className:"text-primary mb-2",children:"1. Introduction"}),e.jsx("p",{className:"mb-4",children:"Welcome to our service. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms."}),e.jsx("h3",{className:"text-primary mb-2",children:"2. Use of Services"}),e.jsx("p",{className:"mb-4",children:"You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct."}),e.jsx("h3",{className:"text-primary mb-2",children:"3. Privacy Policy"}),e.jsx("p",{className:"mb-4",children:"Our privacy policy explains how we treat your personal data and protect your privacy when you use our services. By using our services, you agree that we can use such data in accordance with our privacy policies."}),e.jsx("h3",{className:"text-primary mb-2",children:"4. Content in Services"}),e.jsx("p",{className:"mb-4",children:"Some of our services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content."}),e.jsx("h3",{className:"text-primary mb-2",children:"5. Software in Services"}),e.jsx("p",{className:"mb-4",children:"When a service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available."}),e.jsx("h3",{className:"text-primary mb-2",children:"6. Modifying and Terminating"}),e.jsx("p",{className:"mb-4",children:"We are constantly changing and improving our services. We may add or remove functionalities or features, and we may suspend or stop a service altogether."}),e.jsx("h3",{className:"text-primary mb-2",children:"7. Liability"}),e.jsx("p",{className:"mb-4",children:"When permitted by law, we will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages."}),e.jsx("h3",{className:"text-primary mb-2",children:"8. Business Uses"}),e.jsx("p",{className:"mb-4",children:"If you are using our services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify us from any claim, suit or action arising from or related to the use of the services."})]}),e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Decline"})}),e.jsx(a,{children:"Accept"})]})]})]})},g={render:()=>e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{children:"Open Modal (No X Button)"})}),e.jsxs(r,{showCloseButton:!1,children:[e.jsxs(t,{children:[e.jsx(i,{children:"Confirm Action"}),e.jsx(d,{children:"This modal doesn't have a close button. Use the footer buttons to dismiss it."})]}),e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Cancel"})}),e.jsx(a,{children:"Confirm"})]})]})]})},v={render:()=>e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(a,{children:"Custom Styled Modal"})}),e.jsxs(r,{className:"border-sunflower bg-sunflower",children:[e.jsxs(t,{className:"border-sunflower border-b pb-4",children:[e.jsx(i,{children:"Custom Styled"}),e.jsx(d,{children:"This modal demonstrates custom styling with className overrides."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-secondary",children:"You can customize the appearance by passing className to any of the modal parts."})}),e.jsx(l,{className:"border-sunflower border-t pt-4",children:e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Got it!"})})})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const de=["Default","Sizes","WithForm","LongContent","WithoutCloseButton","CustomStyling"];export{v as CustomStyling,x as Default,M as LongContent,f as Sizes,y as WithForm,g as WithoutCloseButton,de as __namedExportsOrder,ie as default};
