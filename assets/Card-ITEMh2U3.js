import{j as d}from"./jsx-runtime-u17CrQMm.js";import{S as g}from"./index-DcK1wo3Z.js";import{c as p}from"./index-DDA3KdpW.js";import{r as c}from"./iframe-DsOMdu-l.js";import{c as u}from"./utils-ryREhF4q.js";const f=p("focus-visible:ring-sunflower rounded transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",{variants:{variant:{default:"",elevated:"shadow",ghost:""},padding:{none:"p-0",sm:"p-4",default:"p-6",lg:"p-8"},bg:{card:"bg-card",main:"bg-main",alt:"bg-alt",contrast:"bg-contrast",transparent:"bg-transparent",sunflower:"bg-sunflower","sunflower-hover":"bg-sunflower-hover","lemon-meringue":"bg-lemon-meringue",vanilla:"bg-vanilla",eggshell:"bg-eggshell","warm-purple":"bg-warm-purple","cool-purple":"bg-cool-purple","electric-blue":"bg-electric-blue","deep-blue":"bg-deep-blue",error:"bg-error"}},defaultVariants:{variant:"default",padding:"default",bg:"alt"}}),e=c.forwardRef(({className:a,variant:r,padding:n,bg:o,asChild:t=!1,...s},l)=>{const i=t?g:"div";return d.jsx(i,{className:u(f({variant:r,padding:n,bg:o,className:a})),ref:l,...s})});e.displayName="Card";e.__docgenInfo={description:`Card component for displaying content in a contained area.
Follows Engrate design system with support for variants, padding, and background colors.

@example
\`\`\`tsx
<Card>
  <Heading>Title</Heading>
  <Text>Content goes here</Text>
</Card>
<Card variant="elevated" padding="lg">Elevated card</Card>
<Card bg="sunflower">Highlighted card</Card>
\`\`\``,methods:[],displayName:"Card",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render as a child component",defaultValue:{value:"false",computed:!1}},bg:{required:!1,tsType:{name:"VariantProps['bg']",raw:"VariantProps<typeof cardVariants>['bg']"},description:"Background color from Engrate design tokens"}},composes:["VariantProps"]};export{e as C};
