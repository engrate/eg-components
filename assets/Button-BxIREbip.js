import{j as l}from"./jsx-runtime-u17CrQMm.js";import{S as p}from"./index-BkdQMMD_.js";import{c as d}from"./index-DDA3KdpW.js";import{r as u}from"./iframe-BaJaLkA7.js";import{c}from"./utils-ryREhF4q.js";const m=d("text-body focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{primary:"bg-sunflower text-primary hover:bg-sunflower-hover active:bg-sunflower-hover",secondary:"border-border bg-border text-primary active:bg-alt border hover:bg-white",ghost:"text-primary hover:bg-alt active:bg-contrast"},size:{sm:"rounded-pill text-small px-5 py-1",default:"rounded-pill text-small px-8 py-1.5",lg:"rounded-pill text-body px-12 py-2",icon:"h-10 w-10 rounded-full"}},defaultVariants:{variant:"primary",size:"default"}}),e=u.forwardRef(({className:t,variant:o,size:r,asChild:n=!1,...a},s)=>{const i=n?p:"button";return l.jsx(i,{className:c(m({variant:o,size:r,className:t})),ref:s,...a})});e.displayName="Button";e.__docgenInfo={description:`Primary UI button component following Engrate brand guidelines.
Features pill-shaped design with Sunflower yellow as primary color.

@example
\`\`\`tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button asChild><a href="/link">Link Button</a></Button>
\`\`\``,methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{e as B,m as b};
