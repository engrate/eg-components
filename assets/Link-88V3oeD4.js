import{j as l}from"./jsx-runtime-u17CrQMm.js";import{S as f}from"./index-Dp1b6s54.js";import{c as d}from"./index-HTk8j2sO.js";import{r as u}from"./iframe-CuX75rBT.js";import{c as m}from"./utils-kmX6UHYG.js";const c=d("focus-visible:ring-sunflower inline-flex items-center font-sans transition-colors focus-visible:ring-1 focus-visible:outline-none",{variants:{variant:{default:"text-primary hover:text-secondary underline underline-offset-4",muted:"text-secondary hover:text-primary underline underline-offset-4",nav:"text-primary hover:text-secondary no-underline hover:underline hover:underline-offset-4"},size:{sm:"text-small",default:"text-body",lg:"text-body font-medium"}},defaultVariants:{variant:"default",size:"default"}}),e=u.forwardRef(({className:n,variant:t,size:i,asChild:o=!1,...r},a)=>{const s=o?f:"a";return l.jsx(s,{className:m(c({variant:t,size:i,className:n})),ref:a,...r})});e.displayName="Link";e.__docgenInfo={description:`Link component for navigation following Engrate brand guidelines.
Supports multiple variants for different use cases.

@example
\`\`\`tsx
<Link href="/about">About us</Link>
<Link href="/docs" variant="nav">Documentation</Link>
<Link asChild><NextLink href="/page">Next.js Link</NextLink></Link>
\`\`\``,methods:[],displayName:"Link",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component (for use with Next.js Link, etc.)",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};export{e as L};
