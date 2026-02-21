import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-C6CMsfN0.js";import{c as S}from"./index-HTk8j2sO.js";import{c as u}from"./utils-kmX6UHYG.js";import{T as K}from"./Text-C84JvJu8.js";import{I as _}from"./Input-BVeHYole.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ccsgLY5a.js";import"./index-DtQ62xPZ.js";const O=S("text-body w-full caption-bottom border-collapse font-sans",{variants:{variant:{default:"border-separate border-spacing-0",striped:"border-separate border-spacing-0"},size:{default:"",compact:""}},defaultVariants:{variant:"default",size:"default"}}),M=S("border-border bg-alt border-b",{variants:{},defaultVariants:{}}),q=S("",{variants:{},defaultVariants:{}}),U=S("transition-colors",{variants:{variant:{default:"border-border hover:bg-alt/50 border-b",striped:"border-border even:bg-alt/30 hover:bg-alt border-b"}},defaultVariants:{variant:"default"}}),G=S("text-small text-primary text-left align-middle font-sans font-normal [&:has([role=checkbox])]:pr-0",{variants:{sortable:{true:"hover:bg-contrast cursor-pointer select-none",false:""},size:{default:"h-12 px-4",compact:"h-8 px-2"}},defaultVariants:{sortable:!1,size:"default"}}),$=S("text-secondary align-middle [&:has([role=checkbox])]:pr-0",{variants:{size:{default:"p-4",compact:"p-2"}},defaultVariants:{size:"default"}}),P=c.createContext({size:"default",bordered:!1}),h=c.forwardRef(({className:s,variant:t,size:n="default",bordered:i=!1,...o},d)=>e.jsx(P.Provider,{value:{size:n??"default",bordered:i},children:e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:d,className:u(O({variant:t,size:n}),s),...o})})}));h.displayName="Table";const x=c.forwardRef(({className:s,...t},n)=>e.jsx("thead",{ref:n,className:u(M(),s),...t}));x.displayName="TableHeader";const C=c.forwardRef(({className:s,...t},n)=>{const{bordered:i}=c.useContext(P);return e.jsx("tbody",{ref:n,className:u(q(),i&&"[&>tr:last-child>td]:border-b-0",s),...t})});C.displayName="TableBody";const L=c.forwardRef(({className:s,...t},n)=>e.jsx("tfoot",{ref:n,className:u("border-border bg-alt text-primary border-t font-normal",s),...t}));L.displayName="TableFooter";const a=c.forwardRef(({className:s,variant:t,...n},i)=>e.jsx("tr",{ref:i,className:u(U({variant:t}),s),...n}));a.displayName="TableRow";const r=c.forwardRef(({className:s,children:t,sortable:n=!1,sortDirection:i=null,onSort:o,...d},b)=>{const{size:T,bordered:m}=c.useContext(P),j=()=>{n&&o&&o()},g=p=>{n&&o&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),o())};return e.jsx("th",{ref:b,className:u(G({sortable:n,size:T}),m&&"border-border border-b",s),onClick:j,onKeyDown:g,tabIndex:n?0:void 0,role:n?"button":void 0,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,...d,children:e.jsxs("div",{className:"flex items-center gap-2",children:[t,n&&e.jsxs("span",{className:"inline-flex flex-col","aria-hidden":"true",children:[e.jsx("svg",{className:u("h-3 w-3 transition-opacity",i==="asc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 15l5-5 5 5"})}),e.jsx("svg",{className:u("-mt-1 h-3 w-3 transition-opacity",i==="desc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 9l5 5 5-5"})})]})]})})});r.displayName="TableHead";const l=c.forwardRef(({className:s,children:t,...n},i)=>{const{size:o,bordered:d}=c.useContext(P);return e.jsx("td",{ref:i,className:u($({size:o}),d&&"border-border border-b",s),...n,children:e.jsx(K,{variant:"body-sm",as:"span",children:t})})});l.displayName="TableCell";const H=c.forwardRef(({className:s,...t},n)=>e.jsx("caption",{ref:n,className:u("text-small text-tertiary mt-4 text-left",s),...t}));H.displayName="TableCaption";function z({data:s,initialSortKey:t=null,initialSortDirection:n="asc"}){const[i,o]=c.useState({key:t??null,direction:t?n??"asc":null}),d=c.useCallback(j=>{o(g=>g.key!==j?{key:j,direction:"asc"}:g.direction==="asc"?{key:j,direction:"desc"}:g.direction==="desc"?{key:null,direction:null}:{key:j,direction:"asc"})},[]),{key:b,direction:T}=i;return{sortedData:c.useMemo(()=>!b||!T?s:[...s].sort((j,g)=>{const p=j[b],w=g[b];if(p===w)return 0;let f=0;return typeof p=="string"&&typeof w=="string"?f=p.localeCompare(w):typeof p=="number"&&typeof w=="number"?f=p-w:f=String(p).localeCompare(String(w)),T==="asc"?f:-f}),[s,b,T]),sortKey:b,sortDirection:T,handleSort:d}}function J({data:s,filterKeys:t}){const[n,i]=c.useState("");return{filteredData:c.useMemo(()=>{if(!n.trim())return s;const d=n.toLowerCase();return s.filter(b=>t&&t.length>0?t.some(T=>String(b[T]).toLowerCase().includes(d)):Object.values(b).some(T=>String(T).toLowerCase().includes(d)))},[s,n,t]),filterValue:n,setFilterValue:i}}h.__docgenInfo={description:`Table root component following Engrate brand guidelines.
Features light gray backgrounds and subtle borders.

@example
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\``,methods:[],displayName:"Table",props:{bordered:{required:!1,tsType:{name:"boolean"},description:"Add visible horizontal borders between table rows",defaultValue:{value:"false",computed:!1}},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};x.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};C.__docgenInfo={description:"",methods:[],displayName:"TableBody"};L.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"Enable sorting for this column",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:"Current sort direction",defaultValue:{value:"null",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sort is triggered"}},composes:["Omit"]};a.__docgenInfo={description:"",methods:[],displayName:"TableRow",composes:["VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};H.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const te={component:h,tags:["autodocs"],title:"Table/Table",parameters:{layout:"padded"}},y={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"alice@engrate.com"}),e.jsx(l,{children:"Engineer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"bob@engrate.com"}),e.jsx(l,{children:"Designer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"charlie@engrate.com"}),e.jsx(l,{children:"Product Manager"})]})]})]})},R={render:()=>e.jsxs(h,{children:[e.jsx(H,{children:"A list of recent team members"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Department"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"Engineering"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"Design"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"Product"}),e.jsx(l,{children:"On Leave"})]})]})]})},N={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Product"}),e.jsx(r,{className:"text-right",children:"Quantity"}),e.jsx(r,{className:"text-right",children:"Price"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Solar Panel Kit"}),e.jsx(l,{className:"text-right",children:"10"}),e.jsx(l,{className:"text-right",children:"$5,000"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Battery Storage"}),e.jsx(l,{className:"text-right",children:"5"}),e.jsx(l,{className:"text-right",children:"$2,500"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Installation Service"}),e.jsx(l,{className:"text-right",children:"1"}),e.jsx(l,{className:"text-right",children:"$1,500"})]})]}),e.jsx(L,{children:e.jsxs(a,{children:[e.jsx(l,{colSpan:2,children:"Total"}),e.jsx(l,{className:"text-right",children:"$9,000"})]})})]})},v={render:()=>e.jsxs(h,{variant:"striped",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Station ID"}),e.jsx(r,{children:"Location"}),e.jsx(r,{children:"Capacity (kW)"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-001"}),e.jsx(l,{children:"Stockholm Central"}),e.jsx(l,{children:"150"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-002"}),e.jsx(l,{children:"Gothenburg Port"}),e.jsx(l,{children:"200"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-003"}),e.jsx(l,{children:"Malmö Industrial"}),e.jsx(l,{children:"175"}),e.jsx(l,{children:"Maintenance"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-004"}),e.jsx(l,{children:"Uppsala University"}),e.jsx(l,{children:"120"}),e.jsx(l,{children:"Online"})]})]})]})},D={render:()=>e.jsxs(h,{bordered:!0,children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Station ID"}),e.jsx(r,{children:"Location"}),e.jsx(r,{children:"Capacity (kW)"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"STN-001"}),e.jsx(l,{children:"Stockholm Central"}),e.jsx(l,{children:"150"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"STN-002"}),e.jsx(l,{children:"Gothenburg Port"}),e.jsx(l,{children:"200"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"STN-003"}),e.jsx(l,{children:"Malmö Industrial"}),e.jsx(l,{children:"175"}),e.jsx(l,{children:"Maintenance"})]})]})]})},B={render:()=>e.jsxs(h,{bordered:!0,variant:"striped",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Sensor"}),e.jsx(r,{children:"Reading"}),e.jsx(r,{children:"Unit"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Temperature"}),e.jsx(l,{children:"22.5"}),e.jsx(l,{children:"°C"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Voltage"}),e.jsx(l,{children:"240.2"}),e.jsx(l,{children:"V"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Current"}),e.jsx(l,{children:"15.8"}),e.jsx(l,{children:"A"}),e.jsx(l,{children:"Normal"})]})]})]})},V={render:()=>e.jsxs(h,{size:"compact",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Value"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"001"}),e.jsx(l,{children:"Solar Array A"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"145 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"002"}),e.jsx(l,{children:"Wind Turbine B"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"230 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"003"}),e.jsx(l,{children:"Battery Pack C"}),e.jsx(l,{children:"Charging"}),e.jsx(l,{children:"80 kWh"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"004"}),e.jsx(l,{children:"Grid Connection D"}),e.jsx(l,{children:"Standby"}),e.jsx(l,{children:"500 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"005"}),e.jsx(l,{children:"Inverter E"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"200 kW"})]})]})]})},k={render:()=>e.jsxs(h,{size:"compact",variant:"striped",children:[e.jsx(H,{children:"Compact striped table for dense data display"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Sensor"}),e.jsx(r,{children:"Reading"}),e.jsx(r,{children:"Unit"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Temperature"}),e.jsx(l,{children:"22.5"}),e.jsx(l,{children:"°C"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Voltage"}),e.jsx(l,{children:"240.2"}),e.jsx(l,{children:"V"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Current"}),e.jsx(l,{children:"15.8"}),e.jsx(l,{children:"A"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Frequency"}),e.jsx(l,{children:"50.1"}),e.jsx(l,{children:"Hz"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Power Factor"}),e.jsx(l,{children:"0.98"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"Good"})]})]})]})},I=[{id:1,name:"Alice Johnson",email:"alice@engrate.com",age:28,department:"Engineering"},{id:2,name:"Bob Smith",email:"bob@engrate.com",age:34,department:"Design"},{id:3,name:"Charlie Brown",email:"charlie@engrate.com",age:42,department:"Product"},{id:4,name:"Diana Prince",email:"diana@engrate.com",age:31,department:"Engineering"},{id:5,name:"Ethan Hunt",email:"ethan@engrate.com",age:29,department:"Sales"}],A={render:()=>{function s(){const{sortedData:t,sortKey:n,sortDirection:i,handleSort:o}=z({data:I,initialSortKey:"name",initialSortDirection:"asc"});return e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{sortable:!0,sortDirection:n==="name"?i:null,onSort:()=>o("name"),children:"Name"}),e.jsx(r,{sortable:!0,sortDirection:n==="email"?i:null,onSort:()=>o("email"),children:"Email"}),e.jsx(r,{sortable:!0,sortDirection:n==="age"?i:null,onSort:()=>o("age"),children:"Age"}),e.jsx(r,{sortable:!0,sortDirection:n==="department"?i:null,onSort:()=>o("department"),children:"Department"})]})}),e.jsx(C,{children:t.map(d=>e.jsxs(a,{children:[e.jsx(l,{children:d.name}),e.jsx(l,{children:d.email}),e.jsx(l,{children:d.age}),e.jsx(l,{children:d.department})]},d.id))})]})}return e.jsx(s,{})}},E={render:()=>{function s(){const{filteredData:t,filterValue:n,setFilterValue:i}=J({data:I,filterKeys:["name","email","department"]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(_,{placeholder:"Search by name, email, or department...",value:n,onChange:o=>i(o.target.value)}),e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Age"}),e.jsx(r,{children:"Department"})]})}),e.jsx(C,{children:t.length>0?t.map(o=>e.jsxs(a,{children:[e.jsx(l,{children:o.name}),e.jsx(l,{children:o.email}),e.jsx(l,{children:o.age}),e.jsx(l,{children:o.department})]},o.id)):e.jsx(a,{children:e.jsx(l,{colSpan:4,className:"text-center",children:"No results found"})})})]})]})}return e.jsx(s,{})}},F={render:()=>{function s(){const[t,n]=c.useState(""),i=t?I.filter(m=>m.name.toLowerCase().includes(t.toLowerCase())||m.email.toLowerCase().includes(t.toLowerCase())||m.department.toLowerCase().includes(t.toLowerCase())):I,{sortedData:o,sortKey:d,sortDirection:b,handleSort:T}=z({data:i});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(_,{placeholder:"Search by name, email, or department...",value:t,onChange:m=>n(m.target.value)}),e.jsxs(h,{children:[e.jsxs(H,{children:["Team directory with ",o.length," member",o.length!==1?"s":""]}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{sortable:!0,sortDirection:d==="name"?b:null,onSort:()=>T("name"),children:"Name"}),e.jsx(r,{sortable:!0,sortDirection:d==="email"?b:null,onSort:()=>T("email"),children:"Email"}),e.jsx(r,{sortable:!0,sortDirection:d==="age"?b:null,onSort:()=>T("age"),children:"Age"}),e.jsx(r,{sortable:!0,sortDirection:d==="department"?b:null,onSort:()=>T("department"),children:"Department"})]})}),e.jsx(C,{children:o.length>0?o.map(m=>e.jsxs(a,{children:[e.jsx(l,{children:m.name}),e.jsx(l,{children:m.email}),e.jsx(l,{children:m.age}),e.jsx(l,{children:m.department})]},m.id)):e.jsx(a,{children:e.jsxs(l,{colSpan:4,className:"text-center",children:['No results found for "',t,'"']})})})]})]})}return e.jsx(s,{})}},W={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(C,{children:e.jsx(a,{children:e.jsx(l,{colSpan:3,className:"h-24 text-center",children:"No data available"})})})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>alice@engrate.com</TableCell>
          <TableCell>Engineer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>bob@engrate.com</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie Brown</TableCell>
          <TableCell>charlie@engrate.com</TableCell>
          <TableCell>Product Manager</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of recent team members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charlie Brown</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>On Leave</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Solar Panel Kit</TableCell>
          <TableCell className="text-right">10</TableCell>
          <TableCell className="text-right">$5,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Battery Storage</TableCell>
          <TableCell className="text-right">5</TableCell>
          <TableCell className="text-right">$2,500</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Installation Service</TableCell>
          <TableCell className="text-right">1</TableCell>
          <TableCell className="text-right">$1,500</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$9,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Station ID</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Capacity (kW)</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow variant="striped">
          <TableCell>STN-001</TableCell>
          <TableCell>Stockholm Central</TableCell>
          <TableCell>150</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-002</TableCell>
          <TableCell>Gothenburg Port</TableCell>
          <TableCell>200</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-003</TableCell>
          <TableCell>Malmö Industrial</TableCell>
          <TableCell>175</TableCell>
          <TableCell>Maintenance</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>STN-004</TableCell>
          <TableCell>Uppsala University</TableCell>
          <TableCell>120</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Table bordered>
      <TableHeader>
        <TableRow>
          <TableHead>Station ID</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Capacity (kW)</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>STN-001</TableCell>
          <TableCell>Stockholm Central</TableCell>
          <TableCell>150</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>STN-002</TableCell>
          <TableCell>Gothenburg Port</TableCell>
          <TableCell>200</TableCell>
          <TableCell>Online</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>STN-003</TableCell>
          <TableCell>Malmö Industrial</TableCell>
          <TableCell>175</TableCell>
          <TableCell>Maintenance</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Table bordered variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Sensor</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow variant="striped">
          <TableCell>Temperature</TableCell>
          <TableCell>22.5</TableCell>
          <TableCell>°C</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Voltage</TableCell>
          <TableCell>240.2</TableCell>
          <TableCell>V</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Current</TableCell>
          <TableCell>15.8</TableCell>
          <TableCell>A</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Table size="compact">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>Solar Array A</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>145 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>Wind Turbine B</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>230 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>003</TableCell>
          <TableCell>Battery Pack C</TableCell>
          <TableCell>Charging</TableCell>
          <TableCell>80 kWh</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>004</TableCell>
          <TableCell>Grid Connection D</TableCell>
          <TableCell>Standby</TableCell>
          <TableCell>500 kW</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>005</TableCell>
          <TableCell>Inverter E</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>200 kW</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Table size="compact" variant="striped">
      <TableCaption>Compact striped table for dense data display</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sensor</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow variant="striped">
          <TableCell>Temperature</TableCell>
          <TableCell>22.5</TableCell>
          <TableCell>°C</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Voltage</TableCell>
          <TableCell>240.2</TableCell>
          <TableCell>V</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Current</TableCell>
          <TableCell>15.8</TableCell>
          <TableCell>A</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Frequency</TableCell>
          <TableCell>50.1</TableCell>
          <TableCell>Hz</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow variant="striped">
          <TableCell>Power Factor</TableCell>
          <TableCell>0.98</TableCell>
          <TableCell>-</TableCell>
          <TableCell>Good</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    function SortableTableExample() {
      const {
        sortedData,
        sortKey,
        sortDirection,
        handleSort
      } = useSortableTable({
        data: peopleData,
        initialSortKey: 'name',
        initialSortDirection: 'asc'
      });
      return <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable sortDirection={sortKey === 'name' ? sortDirection : null} onSort={() => handleSort('name')}>
                Name
              </TableHead>
              <TableHead sortable sortDirection={sortKey === 'email' ? sortDirection : null} onSort={() => handleSort('email')}>
                Email
              </TableHead>
              <TableHead sortable sortDirection={sortKey === 'age' ? sortDirection : null} onSort={() => handleSort('age')}>
                Age
              </TableHead>
              <TableHead sortable sortDirection={sortKey === 'department' ? sortDirection : null} onSort={() => handleSort('department')}>
                Department
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map(person => <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.department}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>;
    }
    return <SortableTableExample />;
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    function FilterableTableExample() {
      const {
        filteredData,
        filterValue,
        setFilterValue
      } = useFilterableTable({
        data: peopleData,
        filterKeys: ['name', 'email', 'department']
      });
      return <div className="space-y-4">
          <Input placeholder="Search by name, email, or department..." value={filterValue} onChange={e => setFilterValue(e.target.value)} />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? filteredData.map(person => <TableRow key={person.id}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    <TableCell>{person.age}</TableCell>
                    <TableCell>{person.department}</TableCell>
                  </TableRow>) : <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No results found
                  </TableCell>
                </TableRow>}
            </TableBody>
          </Table>
        </div>;
    }
    return <FilterableTableExample />;
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    function FullFeaturedTable() {
      const [searchTerm, setSearchTerm] = useState('');

      // Update the filtered data based on search term
      const dataToSort = searchTerm ? peopleData.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.email.toLowerCase().includes(searchTerm.toLowerCase()) || person.department.toLowerCase().includes(searchTerm.toLowerCase())) : peopleData;

      // Then sort the filtered data
      const {
        sortedData,
        sortKey,
        sortDirection,
        handleSort
      } = useSortableTable({
        data: dataToSort
      });
      return <div className="space-y-4">
          <Input placeholder="Search by name, email, or department..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <Table>
            <TableCaption>
              Team directory with {sortedData.length} member
              {sortedData.length !== 1 ? 's' : ''}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead sortable sortDirection={sortKey === 'name' ? sortDirection : null} onSort={() => handleSort('name')}>
                  Name
                </TableHead>
                <TableHead sortable sortDirection={sortKey === 'email' ? sortDirection : null} onSort={() => handleSort('email')}>
                  Email
                </TableHead>
                <TableHead sortable sortDirection={sortKey === 'age' ? sortDirection : null} onSort={() => handleSort('age')}>
                  Age
                </TableHead>
                <TableHead sortable sortDirection={sortKey === 'department' ? sortDirection : null} onSort={() => handleSort('department')}>
                  Department
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.length > 0 ? sortedData.map(person => <TableRow key={person.id}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.email}</TableCell>
                    <TableCell>{person.age}</TableCell>
                    <TableCell>{person.department}</TableCell>
                  </TableRow>) : <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No results found for &quot;{searchTerm}&quot;
                  </TableCell>
                </TableRow>}
            </TableBody>
          </Table>
        </div>;
    }
    return <FullFeaturedTable />;
  }
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...W.parameters?.docs?.source}}};const se=["Default","WithCaption","WithFooter","Striped","Bordered","BorderedStriped","Compact","CompactStriped","WithSorting","WithFiltering","WithSortingAndFiltering","Empty"];export{D as Bordered,B as BorderedStriped,V as Compact,k as CompactStriped,y as Default,W as Empty,v as Striped,R as WithCaption,E as WithFiltering,N as WithFooter,A as WithSorting,F as WithSortingAndFiltering,se as __namedExportsOrder,te as default};
