import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-Dv90unGT.js";import{c as m}from"./utils-ryREhF4q.js";const r=i.forwardRef(({className:s,variant:a="default",children:e,...t},o)=>e?n.jsx("p",{ref:o,className:m("text-descriptive font-sans text-sm",a==="default"?"text-tertiary":"text-error",s),...t,children:e}):null);r.displayName="FormMessage";r.__docgenInfo={description:`Form message component for displaying hints or error messages.
Following Engrate brand guidelines.

@example
\`\`\`tsx
<FormMessage>This is a hint message</FormMessage>
<FormMessage variant="error">This field is required</FormMessage>
\`\`\``,methods:[],displayName:"FormMessage",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"The type of message to display",defaultValue:{value:"'default'",computed:!1}}}};export{r as F};
