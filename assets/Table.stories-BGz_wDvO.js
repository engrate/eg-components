import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-Dx-tcV3L.js";import{c as w}from"./index-HTk8j2sO.js";import{c as p}from"./utils-kmX6UHYG.js";import{T as _}from"./Text-CtYJU0OP.js";import{I as P}from"./Input-CfIi61w7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-COrMXWrW.js";import"./index-CKkoBMEZ.js";const z=w("text-body w-full caption-bottom border-collapse border-separate border-spacing-0 font-sans",{variants:{size:{default:"",compact:""}},defaultVariants:{size:"default"}}),K=w("border-border bg-alt border-b",{variants:{},defaultVariants:{}}),M=w("",{variants:{},defaultVariants:{}}),q=w("border-border hover:bg-alt/50 border-b transition-colors",{variants:{},defaultVariants:{}}),O=w("text-small text-primary text-left align-middle font-sans font-normal [&:has([role=checkbox])]:pr-0",{variants:{sortable:{true:"hover:bg-contrast cursor-pointer select-none",false:""},size:{default:"h-12 px-4",compact:"h-8 px-2"}},defaultVariants:{sortable:!1,size:"default"}}),$=w("text-secondary align-middle [&:has([role=checkbox])]:pr-0",{variants:{size:{default:"p-4",compact:"p-2"}},defaultVariants:{size:"default"}}),W=c.createContext({size:"default",bordered:!1}),h=c.forwardRef(({className:s,size:n="default",bordered:t=!1,...i},o)=>e.jsx(W.Provider,{value:{size:n??"default",bordered:t},children:e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:o,className:p(z({size:n}),s),...i})})}));h.displayName="Table";const x=c.forwardRef(({className:s,...n},t)=>e.jsx("thead",{ref:t,className:p(K(),s),...n}));x.displayName="TableHeader";const C=c.forwardRef(({className:s,...n},t)=>e.jsx("tbody",{ref:t,className:p(M(),"[&>tr:last-child>td]:border-b-0",s),...n}));C.displayName="TableBody";const I=c.forwardRef(({className:s,...n},t)=>e.jsx("tfoot",{ref:t,className:p("border-border bg-alt text-primary border-t font-normal",s),...n}));I.displayName="TableFooter";const a=c.forwardRef(({className:s,...n},t)=>e.jsx("tr",{ref:t,className:p(q(),s),...n}));a.displayName="TableRow";const r=c.forwardRef(({className:s,children:n,sortable:t=!1,sortDirection:i=null,onSort:o,...d},b)=>{const{size:T,bordered:m}=c.useContext(W),j=()=>{t&&o&&o()},g=u=>{t&&o&&(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),o())};return e.jsx("th",{ref:b,className:p(O({sortable:t,size:T}),m&&"border-border border-b",s),onClick:j,onKeyDown:g,tabIndex:t?0:void 0,role:t?"button":void 0,"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0,...d,children:e.jsxs("div",{className:"flex items-center gap-2",children:[n,t&&e.jsxs("span",{className:"inline-flex flex-col","aria-hidden":"true",children:[e.jsx("svg",{className:p("h-3 w-3 transition-opacity",i==="asc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 15l5-5 5 5"})}),e.jsx("svg",{className:p("-mt-1 h-3 w-3 transition-opacity",i==="desc"?"opacity-100":"opacity-30"),fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M7 9l5 5 5-5"})})]})]})})});r.displayName="TableHead";const l=c.forwardRef(({className:s,children:n,...t},i)=>{const{size:o,bordered:d}=c.useContext(W);return e.jsx("td",{ref:i,className:p($({size:o}),d&&"border-border border-b",s),...t,children:e.jsx(_,{variant:"body-sm",as:"span",children:n})})});l.displayName="TableCell";const y=c.forwardRef(({className:s,...n},t)=>e.jsx("caption",{ref:t,className:p("text-small text-tertiary mt-4 text-left",s),...n}));y.displayName="TableCaption";function L({data:s,initialSortKey:n=null,initialSortDirection:t="asc"}){const[i,o]=c.useState({key:n??null,direction:n?t??"asc":null}),d=c.useCallback(j=>{o(g=>g.key!==j?{key:j,direction:"asc"}:g.direction==="asc"?{key:j,direction:"desc"}:g.direction==="desc"?{key:null,direction:null}:{key:j,direction:"asc"})},[]),{key:b,direction:T}=i;return{sortedData:c.useMemo(()=>!b||!T?s:[...s].sort((j,g)=>{const u=j[b],f=g[b];if(u===f)return 0;let S=0;return typeof u=="string"&&typeof f=="string"?S=u.localeCompare(f):typeof u=="number"&&typeof f=="number"?S=u-f:S=String(u).localeCompare(String(f)),T==="asc"?S:-S}),[s,b,T]),sortKey:b,sortDirection:T,handleSort:d}}function G({data:s,filterKeys:n}){const[t,i]=c.useState("");return{filteredData:c.useMemo(()=>{if(!t.trim())return s;const d=t.toLowerCase();return s.filter(b=>n&&n.length>0?n.some(T=>String(b[T]).toLowerCase().includes(d)):Object.values(b).some(T=>String(T).toLowerCase().includes(d)))},[s,t,n]),filterValue:t,setFilterValue:i}}h.__docgenInfo={description:`Table root component following Engrate brand guidelines.
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
\`\`\``,methods:[],displayName:"Table",props:{bordered:{required:!1,tsType:{name:"boolean"},description:"Add visible horizontal borders between table rows",defaultValue:{value:"false",computed:!1}},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};x.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};C.__docgenInfo={description:"",methods:[],displayName:"TableBody"};I.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:"Enable sorting for this column",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:"Current sort direction",defaultValue:{value:"null",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sort is triggered"}},composes:["Omit"]};a.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};y.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const re={component:h,tags:["autodocs"],title:"Table/Table",parameters:{layout:"padded"}},H={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"alice@engrate.com"}),e.jsx(l,{children:"Engineer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"bob@engrate.com"}),e.jsx(l,{children:"Designer"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"charlie@engrate.com"}),e.jsx(l,{children:"Product Manager"})]})]})]})},R={render:()=>e.jsxs(h,{children:[e.jsx(y,{children:"A list of recent team members"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Department"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Alice Johnson"}),e.jsx(l,{children:"Engineering"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Smith"}),e.jsx(l,{children:"Design"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"Product"}),e.jsx(l,{children:"On Leave"})]})]})]})},N={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Product"}),e.jsx(r,{className:"text-right",children:"Quantity"}),e.jsx(r,{className:"text-right",children:"Price"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Solar Panel Kit"}),e.jsx(l,{className:"text-right",children:"10"}),e.jsx(l,{className:"text-right",children:"$5,000"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Battery Storage"}),e.jsx(l,{className:"text-right",children:"5"}),e.jsx(l,{className:"text-right",children:"$2,500"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Installation Service"}),e.jsx(l,{className:"text-right",children:"1"}),e.jsx(l,{className:"text-right",children:"$1,500"})]})]}),e.jsx(I,{children:e.jsxs(a,{children:[e.jsx(l,{colSpan:2,children:"Total"}),e.jsx(l,{className:"text-right",children:"$9,000"})]})})]})},D={render:()=>e.jsxs(h,{bordered:!0,children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Station ID"}),e.jsx(r,{children:"Location"}),e.jsx(r,{children:"Capacity (kW)"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"STN-001"}),e.jsx(l,{children:"Stockholm Central"}),e.jsx(l,{children:"150"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"STN-002"}),e.jsx(l,{children:"Gothenburg Port"}),e.jsx(l,{children:"200"}),e.jsx(l,{children:"Online"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"STN-003"}),e.jsx(l,{children:"Malmö Industrial"}),e.jsx(l,{children:"175"}),e.jsx(l,{children:"Maintenance"})]})]})]})},v={render:()=>e.jsxs(h,{size:"compact",children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Value"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"001"}),e.jsx(l,{children:"Solar Array A"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"145 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"002"}),e.jsx(l,{children:"Wind Turbine B"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"230 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"003"}),e.jsx(l,{children:"Battery Pack C"}),e.jsx(l,{children:"Charging"}),e.jsx(l,{children:"80 kWh"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"004"}),e.jsx(l,{children:"Grid Connection D"}),e.jsx(l,{children:"Standby"}),e.jsx(l,{children:"500 kW"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"005"}),e.jsx(l,{children:"Inverter E"}),e.jsx(l,{children:"Active"}),e.jsx(l,{children:"200 kW"})]})]})]})},B={render:()=>e.jsxs(h,{size:"compact",bordered:!0,children:[e.jsx(y,{children:"Compact bordered table for dense data display"}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Sensor"}),e.jsx(r,{children:"Reading"}),e.jsx(r,{children:"Unit"}),e.jsx(r,{children:"Status"})]})}),e.jsxs(C,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Temperature"}),e.jsx(l,{children:"22.5"}),e.jsx(l,{children:"°C"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Voltage"}),e.jsx(l,{children:"240.2"}),e.jsx(l,{children:"V"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Current"}),e.jsx(l,{children:"15.8"}),e.jsx(l,{children:"A"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Frequency"}),e.jsx(l,{children:"50.1"}),e.jsx(l,{children:"Hz"}),e.jsx(l,{children:"Normal"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Power Factor"}),e.jsx(l,{children:"0.98"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"Good"})]})]})]})},F=[{id:1,name:"Alice Johnson",email:"alice@engrate.com",age:28,department:"Engineering"},{id:2,name:"Bob Smith",email:"bob@engrate.com",age:34,department:"Design"},{id:3,name:"Charlie Brown",email:"charlie@engrate.com",age:42,department:"Product"},{id:4,name:"Diana Prince",email:"diana@engrate.com",age:31,department:"Engineering"},{id:5,name:"Ethan Hunt",email:"ethan@engrate.com",age:29,department:"Sales"}],k={render:()=>{function s(){const{sortedData:n,sortKey:t,sortDirection:i,handleSort:o}=L({data:F,initialSortKey:"name",initialSortDirection:"asc"});return e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{sortable:!0,sortDirection:t==="name"?i:null,onSort:()=>o("name"),children:"Name"}),e.jsx(r,{sortable:!0,sortDirection:t==="email"?i:null,onSort:()=>o("email"),children:"Email"}),e.jsx(r,{sortable:!0,sortDirection:t==="age"?i:null,onSort:()=>o("age"),children:"Age"}),e.jsx(r,{sortable:!0,sortDirection:t==="department"?i:null,onSort:()=>o("department"),children:"Department"})]})}),e.jsx(C,{children:n.map(d=>e.jsxs(a,{children:[e.jsx(l,{children:d.name}),e.jsx(l,{children:d.email}),e.jsx(l,{children:d.age}),e.jsx(l,{children:d.department})]},d.id))})]})}return e.jsx(s,{})}},E={render:()=>{function s(){const{filteredData:n,filterValue:t,setFilterValue:i}=G({data:F,filterKeys:["name","email","department"]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(P,{placeholder:"Search by name, email, or department...",value:t,onChange:o=>i(o.target.value)}),e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Age"}),e.jsx(r,{children:"Department"})]})}),e.jsx(C,{children:n.length>0?n.map(o=>e.jsxs(a,{children:[e.jsx(l,{children:o.name}),e.jsx(l,{children:o.email}),e.jsx(l,{children:o.age}),e.jsx(l,{children:o.department})]},o.id)):e.jsx(a,{children:e.jsx(l,{colSpan:4,className:"text-center",children:"No results found"})})})]})]})}return e.jsx(s,{})}},V={render:()=>{function s(){const[n,t]=c.useState(""),i=n?F.filter(m=>m.name.toLowerCase().includes(n.toLowerCase())||m.email.toLowerCase().includes(n.toLowerCase())||m.department.toLowerCase().includes(n.toLowerCase())):F,{sortedData:o,sortKey:d,sortDirection:b,handleSort:T}=L({data:i});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(P,{placeholder:"Search by name, email, or department...",value:n,onChange:m=>t(m.target.value)}),e.jsxs(h,{children:[e.jsxs(y,{children:["Team directory with ",o.length," member",o.length!==1?"s":""]}),e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{sortable:!0,sortDirection:d==="name"?b:null,onSort:()=>T("name"),children:"Name"}),e.jsx(r,{sortable:!0,sortDirection:d==="email"?b:null,onSort:()=>T("email"),children:"Email"}),e.jsx(r,{sortable:!0,sortDirection:d==="age"?b:null,onSort:()=>T("age"),children:"Age"}),e.jsx(r,{sortable:!0,sortDirection:d==="department"?b:null,onSort:()=>T("department"),children:"Department"})]})}),e.jsx(C,{children:o.length>0?o.map(m=>e.jsxs(a,{children:[e.jsx(l,{children:m.name}),e.jsx(l,{children:m.email}),e.jsx(l,{children:m.age}),e.jsx(l,{children:m.department})]},m.id)):e.jsx(a,{children:e.jsxs(l,{colSpan:4,className:"text-center",children:['No results found for "',n,'"']})})})]})]})}return e.jsx(s,{})}},A={render:()=>e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Status"})]})}),e.jsx(C,{children:e.jsx(a,{children:e.jsx(l,{colSpan:3,className:"h-24 text-center",children:"No data available"})})})]})};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Table size="compact" bordered>
      <TableCaption>Compact bordered table for dense data display</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sensor</TableHead>
          <TableHead>Reading</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Temperature</TableCell>
          <TableCell>22.5</TableCell>
          <TableCell>°C</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Voltage</TableCell>
          <TableCell>240.2</TableCell>
          <TableCell>V</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Current</TableCell>
          <TableCell>15.8</TableCell>
          <TableCell>A</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Frequency</TableCell>
          <TableCell>50.1</TableCell>
          <TableCell>Hz</TableCell>
          <TableCell>Normal</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Power Factor</TableCell>
          <TableCell>0.98</TableCell>
          <TableCell>-</TableCell>
          <TableCell>Good</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const ne=["Default","WithCaption","WithFooter","Bordered","Compact","CompactBordered","WithSorting","WithFiltering","WithSortingAndFiltering","Empty"];export{D as Bordered,v as Compact,B as CompactBordered,H as Default,A as Empty,R as WithCaption,E as WithFiltering,N as WithFooter,k as WithSorting,V as WithSortingAndFiltering,ne as __namedExportsOrder,re as default};
