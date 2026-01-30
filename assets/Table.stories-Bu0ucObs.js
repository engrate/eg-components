import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DNYoVwFJ.js";import{c as f}from"./index-DDA3KdpW.js";import{c as C}from"./utils-ryREhF4q.js";import{I as P}from"./Input-BTwD9GeL.js";import"./preload-helper-PPVm8Dsz.js";const K=f("text-body w-full caption-bottom border-collapse font-sans",{variants:{variant:{default:"border-separate border-spacing-0",striped:"border-separate border-spacing-0"},size:{default:"",compact:""}},defaultVariants:{variant:"default",size:"default"}}),_=f("border-border bg-alt border-b",{variants:{},defaultVariants:{}}),z=f("",{variants:{},defaultVariants:{}}),M=f("transition-colors",{variants:{variant:{default:"border-border hover:bg-alt/50 border-b",striped:"border-border even:bg-alt/30 hover:bg-alt border-b"}},defaultVariants:{variant:"default"}}),O=f("text-small text-primary text-left align-middle font-sans font-normal [&:has([role=checkbox])]:pr-0",{variants:{sortable:{true:"hover:bg-contrast cursor-pointer select-none",false:""},size:{default:"h-12 px-4",compact:"h-8 px-2"}},defaultVariants:{sortable:!1,size:"default"}}),q=f("text-secondary align-middle [&:has([role=checkbox])]:pr-0",{variants:{size:{default:"p-4",compact:"p-2"}},defaultVariants:{size:"default"}}),W=c.createContext({size:"default"}),T=c.forwardRef(({className:s,variant:t,size:r="default",...i},o)=>e.jsx(W.Provider,{value:{size:r??"default"},children:e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:o,className:C(K({variant:t,size:r}),s),...i})})}));T.displayName="Table";const x=c.forwardRef(({className:s,...t},r)=>e.jsx("thead",{ref:r,className:C(_(),s),...t}));x.displayName="TableHeader";const p=c.forwardRef(({className:s,...t},r)=>e.jsx("tbody",{ref:r,className:C(z(),s),...t}));p.displayName="TableBody";const I=c.forwardRef(({className:s,...t},r)=>e.jsx("tfoot",{ref:r,className:C("border-border bg-alt text-primary border-t font-normal",s),...t}));I.displayName="TableFooter";const a=c.forwardRef(({className:s,variant:t,...r},i)=>e.jsx("tr",{ref:i,className:C(M({variant:t}),s),...r}));a.displayName="TableRow";const n=c.forwardRef(({className:s,children:t,sortable:r=!1,sortDirection:i=null,onSort:o,...d},h)=>{const{size:m}=c.useContext(W),b=()=>{r&&o&&o()},g=j=>{r&&o&&(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),o())};return e.jsx("th",{ref:h,className:C(O({sortable:r,size:m}),s),onClick:b,onKeyDown:g,tabIndex:r?0:void 0,role:r?"button":void 0,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,...d,children:e.jsxs("div",{className:"flex items-center gap-2",children:[t,r&&e.jsxs("span",{className:"inline-flex flex-col","aria-hidden":"true",children:[e.jsx("svg",{className:C("h-3 w-3 transition-opacity",i==="asc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 15l5-5 5 5"})}),e.jsx("svg",{className:C("-mt-1 h-3 w-3 transition-opacity",i==="desc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 9l5 5 5-5"})})]})]})})});n.displayName="TableHead";const l=c.forwardRef(({className:s,...t},r)=>{const{size:i}=c.useContext(W);return e.jsx("td",{ref:r,className:C(q({size:i}),s),...t})});l.displayName="TableCell";const y=c.forwardRef(({className:s,...t},r)=>e.jsx("caption",{ref:r,className:C("text-small text-tertiary mt-4",s),...t}));y.displayName="TableCaption";function L({data:s,initialSortKey:t=null,initialSortDirection:r="asc"}){const[i,o]=c.useState(t),[d,h]=c.useState(r),m=c.useCallback(g=>{o(j=>j===g?(h(u=>u==="asc"?"desc":u==="desc"?(o(null),null):"asc"),j):(h("asc"),g))},[]);return{sortedData:c.useMemo(()=>!i||!d?s:[...s].sort((g,j)=>{const u=g[i],w=j[i];if(u===w)return 0;let S=0;return typeof u=="string"&&typeof w=="string"?S=u.localeCompare(w):typeof u=="number"&&typeof w=="number"?S=u-w:S=String(u).localeCompare(String(w)),d==="asc"?S:-S}),[s,i,d]),sortKey:i,sortDirection:d,handleSort:m}}function $({data:s,filterKeys:t}){const[r,i]=c.useState("");return{filteredData:c.useMemo(()=>{if(!r.trim())return s;const d=r.toLowerCase();return s.filter(h=>t&&t.length>0?t.some(m=>String(h[m]).toLowerCase().includes(d)):Object.values(h).some(m=>String(m).toLowerCase().includes(d)))},[s,r,t]),filterValue:r,setFilterValue:i}}T.__docgenInfo={description:`Table root component following Engrate brand guidelines.
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
\`\`\``,methods:[],displayName:"Table",props:{size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};x.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};p.__docgenInfo={description:"",methods:[],displayName:"TableBody"};I.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};n.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"Enable sorting for this column",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:"Current sort direction",defaultValue:{value:"null",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sort is triggered"}},composes:["Omit"]};a.__docgenInfo={description:"",methods:[],displayName:"TableRow",composes:["VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const Z={component:T,tags:["autodocs"],title:"Misc/Table",parameters:{layout:"padded"}},H={render:()=>e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"alice@engrate.com"}),e.jsx(l,{children:"Engineer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"bob@engrate.com"}),e.jsx(l,{children:"Designer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"charlie@engrate.com"}),e.jsx(l,{children:"Product Manager"})]})]})]})},R={render:()=>e.jsxs(T,{children:[e.jsx(y,{children:"A list of recent team members"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Department"}),e.jsx(n,{children:"Status"})]})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"Engineering"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"Design"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"Product"}),e.jsx(l,{children:"On Leave"})]})]})]})},N={render:()=>e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Product"}),e.jsx(n,{className:"text-right",children:"Quantity"}),e.jsx(n,{className:"text-right",children:"Price"})]})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Solar Panel Kit"}),e.jsx(l,{className:"text-right",children:"10"}),e.jsx(l,{className:"text-right",children:"$5,000"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Battery Storage"}),e.jsx(l,{className:"text-right",children:"5"}),e.jsx(l,{className:"text-right",children:"$2,500"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Installation Service"}),e.jsx(l,{className:"text-right",children:"1"}),e.jsx(l,{className:"text-right",children:"$1,500"})]})]}),e.jsx(I,{children:e.jsxs(a,{children:[e.jsx(l,{colSpan:2,children:"Total"}),e.jsx(l,{className:"text-right",children:"$9,000"})]})})]})},v={render:()=>e.jsxs(T,{variant:"striped",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Station ID"}),e.jsx(n,{children:"Location"}),e.jsx(n,{children:"Capacity (kW)"}),e.jsx(n,{children:"Status"})]})}),e.jsxs(p,{children:[e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-001"}),e.jsx(l,{children:"Stockholm Central"}),e.jsx(l,{children:"150"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-002"}),e.jsx(l,{children:"Gothenburg Port"}),e.jsx(l,{children:"200"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-003"}),e.jsx(l,{children:"Malmö Industrial"}),e.jsx(l,{children:"175"}),e.jsx(l,{children:"Maintenance"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"STN-004"}),e.jsx(l,{children:"Uppsala University"}),e.jsx(l,{children:"120"}),e.jsx(l,{children:"Online"})]})]})]})},D={render:()=>e.jsxs(T,{size:"compact",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"ID"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Value"})]})}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"001"}),e.jsx(l,{children:"Solar Array A"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"145 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"002"}),e.jsx(l,{children:"Wind Turbine B"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"230 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"003"}),e.jsx(l,{children:"Battery Pack C"}),e.jsx(l,{children:"Charging"}),e.jsx(l,{children:"80 kWh"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"004"}),e.jsx(l,{children:"Grid Connection D"}),e.jsx(l,{children:"Standby"}),e.jsx(l,{children:"500 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"005"}),e.jsx(l,{children:"Inverter E"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"200 kW"})]})]})]})},B={render:()=>e.jsxs(T,{size:"compact",variant:"striped",children:[e.jsx(y,{children:"Compact striped table for dense data display"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Sensor"}),e.jsx(n,{children:"Reading"}),e.jsx(n,{children:"Unit"}),e.jsx(n,{children:"Status"})]})}),e.jsxs(p,{children:[e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Temperature"}),e.jsx(l,{children:"22.5"}),e.jsx(l,{children:"°C"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Voltage"}),e.jsx(l,{children:"240.2"}),e.jsx(l,{children:"V"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Current"}),e.jsx(l,{children:"15.8"}),e.jsx(l,{children:"A"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Frequency"}),e.jsx(l,{children:"50.1"}),e.jsx(l,{children:"Hz"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{variant:"striped",children:[e.jsx(l,{children:"Power Factor"}),e.jsx(l,{children:"0.98"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"Good"})]})]})]})},F=[{id:1,name:"Alice Johnson",email:"alice@engrate.com",age:28,department:"Engineering"},{id:2,name:"Bob Smith",email:"bob@engrate.com",age:34,department:"Design"},{id:3,name:"Charlie Brown",email:"charlie@engrate.com",age:42,department:"Product"},{id:4,name:"Diana Prince",email:"diana@engrate.com",age:31,department:"Engineering"},{id:5,name:"Ethan Hunt",email:"ethan@engrate.com",age:29,department:"Sales"}],E={render:()=>{function s(){const{sortedData:t,sortKey:r,sortDirection:i,handleSort:o}=L({data:F,initialSortKey:"name",initialSortDirection:"asc"});return e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{sortable:!0,sortDirection:r==="name"?i:null,onSort:()=>o("name"),children:"Name"}),e.jsx(n,{sortable:!0,sortDirection:r==="email"?i:null,onSort:()=>o("email"),children:"Email"}),e.jsx(n,{sortable:!0,sortDirection:r==="age"?i:null,onSort:()=>o("age"),children:"Age"}),e.jsx(n,{sortable:!0,sortDirection:r==="department"?i:null,onSort:()=>o("department"),children:"Department"})]})}),e.jsx(p,{children:t.map(d=>e.jsxs(a,{children:[e.jsx(l,{children:d.name}),e.jsx(l,{children:d.email}),e.jsx(l,{children:d.age}),e.jsx(l,{children:d.department})]},d.id))})]})}return e.jsx(s,{})}},V={render:()=>{function s(){const{filteredData:t,filterValue:r,setFilterValue:i}=$({data:F,filterKeys:["name","email","department"]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(P,{placeholder:"Search by name, email, or department...",value:r,onChange:o=>i(o.target.value)}),e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Age"}),e.jsx(n,{children:"Department"})]})}),e.jsx(p,{children:t.length>0?t.map(o=>e.jsxs(a,{children:[e.jsx(l,{children:o.name}),e.jsx(l,{children:o.email}),e.jsx(l,{children:o.age}),e.jsx(l,{children:o.department})]},o.id)):e.jsx(a,{children:e.jsx(l,{colSpan:4,className:"text-center",children:"No results found"})})})]})]})}return e.jsx(s,{})}},k={render:()=>{function s(){const[t,r]=c.useState(""),i=t?F.filter(b=>b.name.toLowerCase().includes(t.toLowerCase())||b.email.toLowerCase().includes(t.toLowerCase())||b.department.toLowerCase().includes(t.toLowerCase())):F,{sortedData:o,sortKey:d,sortDirection:h,handleSort:m}=L({data:i});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(P,{placeholder:"Search by name, email, or department...",value:t,onChange:b=>r(b.target.value)}),e.jsxs(T,{children:[e.jsxs(y,{children:["Team directory with ",o.length," member",o.length!==1?"s":""]}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{sortable:!0,sortDirection:d==="name"?h:null,onSort:()=>m("name"),children:"Name"}),e.jsx(n,{sortable:!0,sortDirection:d==="email"?h:null,onSort:()=>m("email"),children:"Email"}),e.jsx(n,{sortable:!0,sortDirection:d==="age"?h:null,onSort:()=>m("age"),children:"Age"}),e.jsx(n,{sortable:!0,sortDirection:d==="department"?h:null,onSort:()=>m("department"),children:"Department"})]})}),e.jsx(p,{children:o.length>0?o.map(b=>e.jsxs(a,{children:[e.jsx(l,{children:b.name}),e.jsx(l,{children:b.email}),e.jsx(l,{children:b.age}),e.jsx(l,{children:b.department})]},b.id)):e.jsx(a,{children:e.jsxs(l,{colSpan:4,className:"text-center",children:['No results found for "',t,'"']})})})]})]})}return e.jsx(s,{})}},A={render:()=>e.jsxs(T,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Status"})]})}),e.jsx(p,{children:e.jsx(a,{children:e.jsx(l,{colSpan:3,className:"h-24 text-center",children:"No data available"})})})]})};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const ee=["Default","WithCaption","WithFooter","Striped","Compact","CompactStriped","WithSorting","WithFiltering","WithSortingAndFiltering","Empty"];export{D as Compact,B as CompactStriped,H as Default,A as Empty,v as Striped,R as WithCaption,V as WithFiltering,N as WithFooter,E as WithSorting,k as WithSortingAndFiltering,ee as __namedExportsOrder,Z as default};
