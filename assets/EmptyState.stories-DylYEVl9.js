import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./utils-kmX6UHYG.js";import{m as d}from"./proxy-B9pxq6v8.js";import"./iframe-DRsmyPNk.js";import"./preload-helper-PPVm8Dsz.js";function n({title:i="Ask me anything…",compact:c=!1,className:l,children:o}){return r.jsxs(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:m("text-center",c?"py-4":"py-12",l),children:[r.jsx("p",{className:"text-secondary text-body",children:i}),o?r.jsx("div",{className:"mt-6",children:o}):null]})}n.__docgenInfo={description:"Landing copy shown in an empty chat thread, before the user has sent\nanything. Render `<Suggestion>` chips as children to give them a starting\npoint.",methods:[],displayName:"EmptyState",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Headline shown to the user.",defaultValue:{value:"'Ask me anything…'",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Compact mode for inline placement (smaller vertical padding).",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra classes for the wrapper."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Slot below the title — typically a `<Suggestions>` grid."}}};const f={title:"AI Chat Elements/EmptyState",component:n,parameters:{layout:"padded"},tags:["autodocs"]},e={args:{}},t={args:{title:"Hi, I'm Ellie! Ask me about energy."}},a={args:{compact:!0,title:"Ask me anything…"}},s={args:{title:"Hi, I'm Ellie! Ask me about energy.",children:r.jsx("div",{className:"text-tertiary text-label",children:"(Suggestion chips would go here once `<Suggestion>` lands.)"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hi, I'm Ellie! Ask me about energy."
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    compact: true,
    title: 'Ask me anything…'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Hi, I'm Ellie! Ask me about energy.",
    children: <div className="text-tertiary text-label">
        (Suggestion chips would go here once \`&lt;Suggestion&gt;\` lands.)
      </div>
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","CustomTitle","Compact","WithChildren"];export{a as Compact,t as CustomTitle,e as Default,s as WithChildren,x as __namedExportsOrder,f as default};
