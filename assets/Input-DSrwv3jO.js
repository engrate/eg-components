import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-HTk8j2sO.js";import{r as l}from"./iframe-Chgc20WG.js";import{c as d}from"./utils-kmX6UHYG.js";const u=i("bg-alt text-body-sm text-primary placeholder:text-tertiary file:text-body-sm flex w-full rounded-md border px-3 py-2 font-sans transition-colors file:border-0 file:bg-transparent file:font-sans focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{default:"border-border focus-visible:ring-sunflower",error:"border-error focus-visible:ring-error"}},defaultVariants:{variant:"default"}}),r=l.forwardRef(({className:e,variant:t,type:o="text",...n},a)=>s.jsx("input",{type:o,className:d(u({variant:t}),e),ref:a,...n}));r.displayName="Input";r.__docgenInfo={description:`Text input component following Engrate brand guidelines.
Features rounded corners, subtle background, and sunflower focus ring.

@example
\`\`\`tsx
<Input placeholder="Enter your email" />
<Input variant="error" placeholder="Invalid input" />
\`\`\``,methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};export{r as I};
