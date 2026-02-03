import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-BxtZELN4.js";import"./index-Bf2N8wzW.js";import{c}from"./index-CPwMR7dn.js";import{c as u}from"./index-DDA3KdpW.js";import{c as b}from"./utils-ryREhF4q.js";var x=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],v=x.reduce((t,a)=>{const e=c(`Primitive.${a}`),r=s.forwardRef((n,m)=>{const{asChild:d,...f}=n,p=d?e:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(p,{...f,ref:m})});return r.displayName=`Primitive.${a}`,{...t,[a]:r}},{}),w="Label",l=s.forwardRef((t,a)=>o.jsx(v.label,{...t,ref:a,onMouseDown:e=>{e.target.closest("button, input, select, textarea")||(t.onMouseDown?.(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault())}}));l.displayName=w;var L=l;const g=u("text-tertiary font-sans font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-50",{variants:{size:{default:"text-small",sm:"text-label"}},defaultVariants:{size:"default"}}),i=s.forwardRef(({className:t,size:a,...e},r)=>o.jsx(L,{ref:r,className:b(g({size:a}),t),...e}));i.displayName="Label";i.__docgenInfo={description:`Form label component following Engrate brand guidelines.
Uses text-tertiary color and Work Sans font.

@example
\`\`\`tsx
<Label htmlFor="email">Email address</Label>
<Label size="sm">Small label</Label>
\`\`\``,methods:[],displayName:"Label",composes:["VariantProps"]};export{i as L};
