import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-DDA3KdpW.js";import{r as l}from"./iframe-Bz1ziPt4.js";import{c as u}from"./utils-ryREhF4q.js";const d=i("bg-card text-body text-primary placeholder:text-tertiary flex h-10 w-full rounded-md border px-3 py-2 font-sans transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",{variants:{variant:{default:"border-border focus-visible:ring-sunflower",error:"border-error focus-visible:ring-error"}},defaultVariants:{variant:"default"}}),r=l.forwardRef(({className:e,variant:o,type:t="text",...n},a)=>s.jsx("input",{type:t,className:u(d({variant:o}),e),ref:a,...n}));r.displayName="Input";r.__docgenInfo={description:`Text input component following Engrate brand guidelines.
Features rounded corners, subtle background, and sunflower focus ring.

@example
\`\`\`tsx
<Input placeholder="Enter your email" />
<Input variant="error" placeholder="Invalid input" />
\`\`\``,methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};export{r as I};
