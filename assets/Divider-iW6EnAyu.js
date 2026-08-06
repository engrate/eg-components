import{j as s}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-HTk8j2sO.js";import{r as l}from"./iframe-BHo53yX8.js";import{c as p}from"./utils-kmX6UHYG.js";const c=d("bg-border shrink-0",{variants:{orientation:{horizontal:"h-px w-full",vertical:"h-full w-px"}},defaultVariants:{orientation:"horizontal"}}),i=l.forwardRef(({className:t,orientation:o="horizontal",decorative:e=!0,...a},n)=>{const r=o??"horizontal";return s.jsx("div",{ref:n,role:e?"none":"separator","aria-orientation":e?void 0:r,className:p(c({orientation:r,className:t})),...a})});i.displayName="Divider";i.__docgenInfo={description:`Divider component for visually separating content.
Supports both horizontal and vertical orientations.

@example
\`\`\`tsx
// Horizontal divider (default)
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// With custom styling
<Divider className="my-4" />
\`\`\``,methods:[],displayName:"Divider",props:{decorative:{required:!1,tsType:{name:"boolean"},description:`Whether the divider is decorative only.
When true, the divider will be hidden from screen readers.
@default true`,defaultValue:{value:"true",computed:!1}},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}},composes:["VariantProps"]};export{i as D};
