import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-HTk8j2sO.js";import{r as l}from"./iframe-BHo53yX8.js";import{c as d}from"./utils-kmX6UHYG.js";const p=i("text-body-sm text-primary placeholder:text-quaternary file:text-body-sm flex w-full rounded-md border bg-transparent px-3 py-2 font-sans transition-colors file:border-0 file:bg-transparent file:font-sans focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{default:"border-border focus-visible:ring-sunflower",error:"border-error focus-visible:ring-error"}},defaultVariants:{variant:"default"}}),r=l.forwardRef(({className:e,variant:t,type:n="text",...o},a)=>s.jsx("input",{type:n,className:d(p({variant:t}),e),ref:a,...o}));r.displayName="Input";r.__docgenInfo={description:`Text input component following Engrate brand guidelines.
Features rounded corners and sunflower focus ring.

@example
\`\`\`tsx
<Input placeholder="Enter your email" />
<Input variant="error" placeholder="Invalid input" />
\`\`\``,methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};export{r as I};
