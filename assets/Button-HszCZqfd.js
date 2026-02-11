import{j as l}from"./jsx-runtime-u17CrQMm.js";import{S as p}from"./index-D50a-mRX.js";import{c as u}from"./index-HTk8j2sO.js";import{r as d}from"./iframe-DfSdfeLY.js";import{c}from"./utils-kmX6UHYG.js";const m=u("text-body focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{primary:"bg-sunflower text-primary hover:bg-sunflower-hover active:bg-sunflower-hover",secondary:"border-border bg-alt text-primary active:bg-contrast hover:bg-main border",ghost:"text-primary hover:bg-alt active:bg-contrast"},size:{sm:"rounded-pill text-small px-5 py-1",default:"rounded-pill text-small px-8 py-1.5",lg:"rounded-pill text-body px-12 py-2",icon:"h-10 w-10 rounded-full"}},defaultVariants:{variant:"primary",size:"default"}}),t=d.forwardRef(({className:e,variant:o,size:n,asChild:r=!1,...a},s)=>{const i=r?p:"button";return l.jsx(i,{className:c(m({variant:o,size:n,className:e})),ref:s,...a})});t.displayName="Button";t.__docgenInfo={description:`Primary UI button component following Engrate brand guidelines.
Features pill-shaped design with Sunflower yellow as primary color.

@example
\`\`\`tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button asChild><a href="/link">Link Button</a></Button>
\`\`\``,methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{t as B,m as b};
