import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as T}from"./iframe-BaJaLkA7.js";import{c as C}from"./utils-ryREhF4q.js";import{L as u}from"./Label-Cj__7LkH.js";import{F as N}from"./FormMessage-BOga-d9w.js";import{I as l}from"./Input-B2Ava8Ni.js";import{S as F,a as x,b as y,c as b,d as a}from"./Select-BU9FCuZM.js";import{T as f}from"./Textarea-BJOwRmpO.js";import{C as E}from"./Checkbox-DdS20RJj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0tN7cwD.js";import"./index-oEUSNkDO.js";import"./index-BkdQMMD_.js";import"./index-CnR8uzlM.js";import"./index-DDA3KdpW.js";import"./index-BDXIdMfv.js";import"./index-DEkrL-Kf.js";import"./index-BJLqhUMx.js";import"./index-Be7qTl4B.js";import"./index-CAdXqKU0.js";import"./index-CZa0lZ86.js";import"./index-DlBtygbl.js";import"./index-2Nno9nj3.js";import"./index-CzpuQUCd.js";import"./index-piZWwApg.js";import"./index-Dcw6bvBS.js";import"./index-DjUZ0ncx.js";const r=T.forwardRef(({className:g,label:p,labelSize:S,hint:h,error:o,htmlFor:c,children:j,...v},w)=>{const I=c?`${c}-message`:void 0;return e.jsxs("div",{ref:w,className:C("flex flex-col gap-1.5",g),...v,children:[p&&e.jsx(u,{htmlFor:c,size:S,children:p}),j,(h||o)&&e.jsx(N,{id:I,variant:o?"error":"default",role:o?"alert":void 0,children:o||h})]})});r.displayName="FormField";r.__docgenInfo={description:`Form field wrapper component for consistent form layouts.
Composes Label, children (form control), and FormMessage.
Simple presentational wrapper following Engrate brand guidelines.

@example
\`\`\`tsx
<FormField label="Email" htmlFor="email" hint="We'll never share your email.">
  <Input id="email" placeholder="you@example.com" />
</FormField>

<FormField label="Password" htmlFor="password" error="Password is required">
  <Input id="password" type="password" variant="error" />
</FormField>
\`\`\``,methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:"The label for the field"},labelSize:{required:!1,tsType:{name:"union",raw:"'default' | 'sm'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"}]},description:"The size of the label"},hint:{required:!1,tsType:{name:"string"},description:"An optional hint message"},error:{required:!1,tsType:{name:"string"},description:"An optional error message"},htmlFor:{required:!1,tsType:{name:"string"},description:"The id for the form control (used for htmlFor on label)"}}};const le={title:"Forms/FormField",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the field"},hint:{control:"text",description:"An optional hint message"},error:{control:"text",description:"An optional error message"}}},s={render:()=>e.jsx(r,{label:"Email",htmlFor:"email",className:"w-72",children:e.jsx(l,{id:"email",type:"email",placeholder:"you@example.com"})})},t={render:()=>e.jsx(r,{label:"Email",htmlFor:"email-hint",hint:"We'll never share your email with anyone else.",className:"w-72",children:e.jsx(l,{id:"email-hint",type:"email",placeholder:"you@example.com","aria-describedby":"email-hint-message"})})},i={render:()=>e.jsx(r,{label:"Email",htmlFor:"email-error",error:"Please enter a valid email address",className:"w-72",children:e.jsx(l,{id:"email-error",type:"email",placeholder:"you@example.com",variant:"error","aria-invalid":"true","aria-describedby":"email-error-message"})})},m={render:()=>e.jsx(r,{label:"Message",htmlFor:"message",hint:"Maximum 500 characters",className:"w-80",children:e.jsx(f,{id:"message",placeholder:"Type your message here...","aria-describedby":"message-message"})})},n={render:()=>e.jsx(r,{label:"Country",htmlFor:"country",className:"w-72",children:e.jsxs(F,{children:[e.jsx(x,{id:"country",children:e.jsx(y,{placeholder:"Select a country"})}),e.jsxs(b,{children:[e.jsx(a,{value:"us",children:"United States"}),e.jsx(a,{value:"uk",children:"United Kingdom"}),e.jsx(a,{value:"ca",children:"Canada"}),e.jsx(a,{value:"au",children:"Australia"})]})]})})},d={render:()=>e.jsxs("form",{className:"flex w-80 flex-col gap-4",children:[e.jsx(r,{label:"Full Name",htmlFor:"name",children:e.jsx(l,{id:"name",placeholder:"John Doe"})}),e.jsx(r,{label:"Email",htmlFor:"form-email",hint:"We'll never share your email.",children:e.jsx(l,{id:"form-email",type:"email",placeholder:"you@example.com","aria-describedby":"form-email-message"})}),e.jsx(r,{label:"Password",htmlFor:"form-password",error:"Password must be at least 8 characters",children:e.jsx(l,{id:"form-password",type:"password",placeholder:"Enter password",variant:"error","aria-invalid":"true","aria-describedby":"form-password-message"})}),e.jsx(r,{label:"Country",htmlFor:"form-country",children:e.jsxs(F,{children:[e.jsx(x,{id:"form-country",children:e.jsx(y,{placeholder:"Select a country"})}),e.jsxs(b,{children:[e.jsx(a,{value:"us",children:"United States"}),e.jsx(a,{value:"uk",children:"United Kingdom"}),e.jsx(a,{value:"ca",children:"Canada"})]})]})}),e.jsx(r,{label:"Bio",htmlFor:"bio",hint:"Tell us about yourself",children:e.jsx(f,{id:"bio",placeholder:"I'm a software developer...","aria-describedby":"bio-message"})}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx(E,{id:"terms"}),e.jsx(u,{htmlFor:"terms",children:"I agree to the terms and conditions"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Email" htmlFor="email" className="w-72">
      <Input id="email" type="email" placeholder="you@example.com" />
    </FormField>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Email" htmlFor="email-hint" hint="We'll never share your email with anyone else." className="w-72">
      <Input id="email-hint" type="email" placeholder="you@example.com" aria-describedby="email-hint-message" />
    </FormField>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Email" htmlFor="email-error" error="Please enter a valid email address" className="w-72">
      <Input id="email-error" type="email" placeholder="you@example.com" variant="error" aria-invalid="true" aria-describedby="email-error-message" />
    </FormField>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Message" htmlFor="message" hint="Maximum 500 characters" className="w-80">
      <Textarea id="message" placeholder="Type your message here..." aria-describedby="message-message" />
    </FormField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Country" htmlFor="country" className="w-72">
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
    </FormField>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex w-80 flex-col gap-4">
      <FormField label="Full Name" htmlFor="name">
        <Input id="name" placeholder="John Doe" />
      </FormField>
      <FormField label="Email" htmlFor="form-email" hint="We'll never share your email.">
        <Input id="form-email" type="email" placeholder="you@example.com" aria-describedby="form-email-message" />
      </FormField>
      <FormField label="Password" htmlFor="form-password" error="Password must be at least 8 characters">
        <Input id="form-password" type="password" placeholder="Enter password" variant="error" aria-invalid="true" aria-describedby="form-password-message" />
      </FormField>
      <FormField label="Country" htmlFor="form-country">
        <Select>
          <SelectTrigger id="form-country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField label="Bio" htmlFor="bio" hint="Tell us about yourself">
        <Textarea id="bio" placeholder="I'm a software developer..." aria-describedby="bio-message" />
      </FormField>
      <div className="mt-2 flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
    </form>
}`,...d.parameters?.docs?.source}}};const oe=["Default","WithHint","WithError","WithTextarea","WithSelect","CompleteForm"];export{d as CompleteForm,s as Default,i as WithError,t as WithHint,n as WithSelect,m as WithTextarea,oe as __namedExportsOrder,le as default};
