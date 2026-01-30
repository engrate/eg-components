import{j as l}from"./jsx-runtime-u17CrQMm.js";import{S as p}from"./index-mNC3-AD3.js";import{c as d}from"./index-DDA3KdpW.js";import{r as u}from"./iframe-Dv90unGT.js";import{c}from"./utils-ryREhF4q.js";const m=d("text-body focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{primary:"bg-sunflower text-primary hover:bg-sunflower-hover active:bg-sunflower-hover",secondary:"border-border bg-card text-primary hover:bg-alt active:bg-contrast border",ghost:"text-primary hover:bg-alt active:bg-contrast"},size:{sm:"rounded-pill text-small px-4 py-1.5",default:"rounded-pill text-small px-6 py-2",lg:"rounded-pill px-btn-x py-btn-y text-body",icon:"h-10 w-10 rounded-full"}},defaultVariants:{variant:"primary",size:"default"}}),t=u.forwardRef(({className:e,variant:o,size:n,asChild:r=!1,...a},s)=>{const i=r?p:"button";return l.jsx(i,{className:c(m({variant:o,size:n,className:e})),ref:s,...a})});t.displayName="Button";t.__docgenInfo={description:`Primary UI button component following Engrate brand guidelines.
Features pill-shaped design with Sunflower yellow as primary color.

@example
\`\`\`tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button asChild><a href="/link">Link Button</a></Button>
\`\`\``,methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{t as B,m as b};
