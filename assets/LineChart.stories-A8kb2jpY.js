import{j as S}from"./jsx-runtime-u17CrQMm.js";import{c as Ge}from"./index-DDA3KdpW.js";import{r as o}from"./iframe-lpvCwx_W.js";import{a as ne,c as qe}from"./utils-ryREhF4q.js";import{e as Q,a5 as Pe,Y as we,D as oe,a6 as Se,a7 as Ue,Z as ie,L as se,I as ke,O as Je,a8 as Xe,a as re,P as De,f as le,j as Ee,a9 as Ye,l as Ae,m as Le,o as He,aa as Ze,n as fe,x as Qe,y as Oe,z as Ie,R as ea,A as aa,B as ra,C as je,E as ta,F as na,ab as oa,G as ia,J as Ce,ac as he,T as sa,U as la,V as I,W as ca,X as ua,ad as da,S as pa,a1 as ma,a2 as va,a3 as fa,a4 as ha}from"./CategoricalChart-CzwpcMWT.js";import{u as ya,G as ga,S as ba,C as xa,a as Pa,X as wa,Y as Sa}from"./CartesianChart-DpkoLwDe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWSCY9km.js";import"./index-tD2XxCwB.js";import"./index-Cyh5RLJ8.js";function te(){return te=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},te.apply(null,arguments)}var Re=e=>{var{cx:a,cy:r,r:t,className:n}=e,i=ne("recharts-dot",n);return Q(a)&&Q(r)&&Q(t)?o.createElement("circle",te({},we(e),Pe(e),{className:i,cx:a,cy:r,r:t})):null},ka=["points"];function ye(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function ee(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ye(Object(r),!0).forEach(function(t){Da(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Da(e,a,r){return(a=Ea(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ea(e){var a=Aa(e,"string");return typeof a=="symbol"?a:a+""}function Aa(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function J(){return J=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},J.apply(null,arguments)}function La(e,a){if(e==null)return{};var r,t,n=Oa(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Oa(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}function Ia(e){var{option:a,dotProps:r,className:t}=e;if(o.isValidElement(a))return o.cloneElement(a,r);if(typeof a=="function")return a(r);var n=ne(t,typeof a!="boolean"?a.className:""),i=r??{},{points:s}=i,l=La(i,ka);return o.createElement(Re,J({},l,{className:n}))}function ja(e,a){return e==null?!1:a?!0:e.length===1}function Ca(e){var{points:a,dot:r,className:t,dotClassName:n,dataKey:i,baseProps:s,needClip:l,clipPathId:c,zIndex:u=oe.scatter}=e;if(!ja(a,r))return null;var v=Se(r),d=Ue(r),f=a.map((h,p)=>{var b,y,g=ee(ee(ee({r:3},s),d),{},{index:p,cx:(b=h.x)!==null&&b!==void 0?b:void 0,cy:(y=h.y)!==null&&y!==void 0?y:void 0,dataKey:i,value:h.value,payload:h.payload,points:a});return o.createElement(Ia,{key:"dot-".concat(p),option:r,dotProps:g,className:n})}),m={};return l&&c!=null&&(m.clipPath="url(#clipPath-".concat(v?"":"dots-").concat(c,")")),o.createElement(ie,{zIndex:u},o.createElement(se,J({className:t},m),f))}function ge(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function ae(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ge(Object(r),!0).forEach(function(t){Ra(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ra(e,a,r){return(a=Na(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Na(e){var a=Ta(e,"string");return typeof a=="symbol"?a:a+""}function Ta(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var _a=e=>{var{point:a,childIndex:r,mainColor:t,activeDot:n,dataKey:i,clipPath:s}=e;if(n===!1||a.x==null||a.y==null)return null;var l={index:r,dataKey:i,cx:a.x,cy:a.y,r:4,fill:t??"none",strokeWidth:2,stroke:"#fff",payload:a.payload,value:a.value},c=ae(ae(ae({},l),De(n)),Pe(n)),u;return o.isValidElement(n)?u=o.cloneElement(n,c):typeof n=="function"?u=n(c):u=o.createElement(Re,c),o.createElement(se,{className:"recharts-active-dot",clipPath:s},u)};function Wa(e){var{points:a,mainColor:r,activeDot:t,itemDataKey:n,clipPath:i,zIndex:s=oe.activeDot}=e,l=ke(Je),c=Xe();if(a==null||c==null)return null;var u=a.find(v=>c.includes(v.payload));return re(u)?null:o.createElement(ie,{zIndex:s},o.createElement(_a,{point:u,childIndex:Number(l),mainColor:r,dataKey:n,activeDot:t,clipPath:i}))}var Ne=(e,a,r,t)=>Ae(e,"xAxis",a,t),Te=(e,a,r,t)=>Le(e,"xAxis",a,t),_e=(e,a,r,t)=>Ae(e,"yAxis",r,t),We=(e,a,r,t)=>Le(e,"yAxis",r,t),za=le([Ee,Ne,_e,Te,We],(e,a,r,t,n)=>Ze(e,"xAxis")?fe(a,t,!1):fe(r,n,!1)),Fa=(e,a,r,t,n)=>n;function Ka(e){return e.type==="line"}var $a=le([He,Fa],(e,a)=>e.filter(Ka).find(r=>r.id===a)),Ba=le([Ee,Ne,_e,Te,We,$a,za,Ye],(e,a,r,t,n,i,s,l)=>{var{chartData:c,dataStartIndex:u,dataEndIndex:v}=l;if(!(i==null||a==null||r==null||t==null||n==null||t.length===0||n.length===0||s==null||e!=="horizontal"&&e!=="vertical")){var{dataKey:d,data:f}=i,m;if(f!=null&&f.length>0?m=f:m=c?.slice(u,v+1),m!=null)return cr({layout:e,xAxis:a,yAxis:r,xAxisTicks:t,yAxisTicks:n,dataKey:d,bandSize:s,displayedData:m})}});function Ma(e){var a=De(e),r=3,t=2;if(a!=null){var{r:n,strokeWidth:i}=a,s=Number(n),l=Number(i);return(Number.isNaN(s)||s<0)&&(s=r),(Number.isNaN(l)||l<0)&&(l=t),{r:s,strokeWidth:l}}return{r,strokeWidth:t}}var Va=["id"],Ga=["type","layout","connectNulls","needClip","shape"],qa=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},j.apply(null,arguments)}function be(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function k(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?be(Object(r),!0).forEach(function(t){Ua(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ua(e,a,r){return(a=Ja(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ja(e){var a=Xa(e,"string");return typeof a=="symbol"?a:a+""}function Xa(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function ce(e,a){if(e==null)return{};var r,t,n=Ya(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ya(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var Ha=e=>{var{dataKey:a,name:r,stroke:t,legendType:n,hide:i}=e;return[{inactive:i,dataKey:a,type:n,color:t,value:je(r,a),payload:e}]},Za=o.memo(e=>{var{dataKey:a,data:r,stroke:t,strokeWidth:n,fill:i,name:s,hide:l,unit:c,tooltipType:u,id:v}=e,d={dataDefinedOnItem:r,getPosition:na,settings:{stroke:t,strokeWidth:n,fill:i,dataKey:a,nameKey:void 0,name:je(s,a),hide:l,type:u,color:t,unit:c,graphicalItemId:v}};return o.createElement(ta,{tooltipEntrySettings:d})}),ze=(e,a)=>"".concat(a,"px ").concat(e-a,"px");function Qa(e,a){for(var r=e.length%2!==0?[...e,0]:e,t=[],n=0;n<a;++n)t=[...t,...r];return t}var er=(e,a,r)=>{var t=r.reduce((m,h)=>m+h);if(!t)return ze(a,e);for(var n=Math.floor(e/t),i=e%t,s=a-e,l=[],c=0,u=0;c<r.length;u+=(v=r[c])!==null&&v!==void 0?v:0,++c){var v,d=r[c];if(d!=null&&u+d>i){l=[...r.slice(0,c),i-u];break}}var f=l.length%2===0?[0,s]:[s];return[...Qa(r,n),...l,...f].map(m=>"".concat(m,"px")).join(", ")};function ar(e){var{clipPathId:a,points:r,props:t}=e,{dot:n,dataKey:i,needClip:s}=t,{id:l}=t,c=ce(t,Va),u=we(c);return o.createElement(Ca,{points:r,dot:n,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:i,baseProps:u,needClip:s,clipPathId:a})}function rr(e){var{showLabels:a,children:r,points:t}=e,n=o.useMemo(()=>t?.map(i=>{var s,l,c={x:(s=i.x)!==null&&s!==void 0?s:0,y:(l=i.y)!==null&&l!==void 0?l:0,width:0,lowerWidth:0,upperWidth:0,height:0};return k(k({},c),{},{value:i.value,payload:i.payload,viewBox:c,parentViewBox:void 0,fill:void 0})}),[t]);return o.createElement(ua,{value:a?n:void 0},r)}function xe(e){var{clipPathId:a,pathRef:r,points:t,strokeDasharray:n,props:i}=e,{type:s,layout:l,connectNulls:c,needClip:u,shape:v}=i,d=ce(i,Ga),f=k(k({},da(d)),{},{fill:"none",className:"recharts-line-curve",clipPath:u?"url(#clipPath-".concat(a,")"):void 0,points:t,type:s,layout:l,connectNulls:c,strokeDasharray:n??i.strokeDasharray});return o.createElement(o.Fragment,null,t?.length>1&&o.createElement(pa,j({shapeType:"curve",option:v},f,{pathRef:r})),o.createElement(ar,{points:t,clipPathId:a,props:i}))}function tr(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function nr(e){var{clipPathId:a,props:r,pathRef:t,previousPointsRef:n,longestAnimatedLengthRef:i}=e,{points:s,strokeDasharray:l,isAnimationActive:c,animationBegin:u,animationDuration:v,animationEasing:d,animateNewValues:f,width:m,height:h,onAnimationEnd:p,onAnimationStart:b}=r,y=n.current,g=sa(s,"recharts-line-"),P=o.useRef(g),[A,L]=o.useState(!1),X=!A,Y=o.useCallback(()=>{typeof p=="function"&&p(),L(!1)},[p]),H=o.useCallback(()=>{typeof b=="function"&&b(),L(!0)},[b]),D=tr(t.current),C=o.useRef(0);P.current!==g&&(C.current=i.current,P.current=g);var de=C.current;return o.createElement(rr,{points:s,showLabels:X},r.children,o.createElement(la,{animationId:g,begin:u,duration:v,isActive:c,easing:d,onAnimationEnd:Y,onAnimationStart:H,key:g},E=>{var $e=I(de,D+de,E),Z=Math.min($e,D),O;if(c)if(l){var Be="".concat(l).split(/[,\s]+/gim).map(w=>parseFloat(w));O=er(Z,D,Be)}else O=ze(D,Z);else O=l==null?void 0:String(l);if(E>0&&D>0&&(n.current=s,i.current=Math.max(i.current,Z)),y){var Me=y.length/s.length,pe=E===1?s:s.map((w,Ve)=>{var me=Math.floor(Ve*Me);if(y[me]){var ve=y[me];return k(k({},w),{},{x:I(ve.x,w.x,E),y:I(ve.y,w.y,E)})}return f?k(k({},w),{},{x:I(m*2,w.x,E),y:I(h/2,w.y,E)}):k(k({},w),{},{x:w.x,y:w.y})});return n.current=pe,o.createElement(xe,{props:r,points:pe,clipPathId:a,pathRef:t,strokeDasharray:O})}return o.createElement(xe,{props:r,points:s,clipPathId:a,pathRef:t,strokeDasharray:O})}),o.createElement(ca,{label:r.label}))}function or(e){var{clipPathId:a,props:r}=e,t=o.useRef(null),n=o.useRef(0),i=o.useRef(null);return o.createElement(nr,{props:r,clipPathId:a,previousPointsRef:t,longestAnimatedLengthRef:n,pathRef:i})}var ir=(e,a)=>{var r,t;return{x:(r=e.x)!==null&&r!==void 0?r:void 0,y:(t=e.y)!==null&&t!==void 0?t:void 0,value:e.value,errorVal:Ce(e.payload,a)}};class sr extends o.Component{render(){var{hide:a,dot:r,points:t,className:n,xAxisId:i,yAxisId:s,top:l,left:c,width:u,height:v,id:d,needClip:f,zIndex:m}=this.props;if(a)return null;var h=ne("recharts-line",n),p=d,{r:b,strokeWidth:y}=Ma(r),g=Se(r),P=b*2+y,A=f?"url(#clipPath-".concat(g?"":"dots-").concat(p,")"):void 0;return o.createElement(ie,{zIndex:m},o.createElement(se,{className:h},f&&o.createElement("defs",null,o.createElement(ga,{clipPathId:p,xAxisId:i,yAxisId:s}),!g&&o.createElement("clipPath",{id:"clipPath-dots-".concat(p)},o.createElement("rect",{x:c-P/2,y:l-P/2,width:u+P,height:v+P}))),o.createElement(ba,{xAxisId:i,yAxisId:s,data:t,dataPointFormatter:ir,errorBarOffset:0},o.createElement(or,{props:this.props,clipPathId:p}))),o.createElement(Wa,{activeDot:this.props.activeDot,points:t,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:A}))}}var Fe={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:oe.line,type:"linear"};function lr(e){var a=Oe(e,Fe),{activeDot:r,animateNewValues:t,animationBegin:n,animationDuration:i,animationEasing:s,connectNulls:l,dot:c,hide:u,isAnimationActive:v,label:d,legendType:f,xAxisId:m,yAxisId:h,id:p}=a,b=ce(a,qa),{needClip:y}=ya(m,h),g=oa(),P=ia(),A=Ie(),L=ke(C=>Ba(C,m,h,A,p));if(P!=="horizontal"&&P!=="vertical"||L==null||g==null)return null;var{height:X,width:Y,x:H,y:D}=g;return o.createElement(sr,j({},b,{id:p,connectNulls:l,dot:c,activeDot:r,animateNewValues:t,animationBegin:n,animationDuration:i,animationEasing:s,isAnimationActive:v,hide:u,label:d,legendType:f,xAxisId:m,yAxisId:h,points:L,layout:P,height:X,width:Y,left:H,top:D,needClip:y}))}function cr(e){var{layout:a,xAxis:r,yAxis:t,xAxisTicks:n,yAxisTicks:i,dataKey:s,bandSize:l,displayedData:c}=e;return c.map((u,v)=>{var d=Ce(u,s);if(a==="horizontal"){var f=he({axis:r,ticks:n,bandSize:l,entry:u,index:v}),m=re(d)?null:t.scale.map(d);return{x:f,y:m??null,value:d,payload:u}}var h=re(d)?null:r.scale.map(d),p=he({axis:t,ticks:i,bandSize:l,entry:u,index:v});return h==null||p==null?null:{x:h,y:p,value:d,payload:u}}).filter(Boolean)}function ur(e){var a=Oe(e,Fe),r=Ie();return o.createElement(ea,{id:a.id,type:"line"},t=>o.createElement(o.Fragment,null,o.createElement(aa,{legendPayload:Ha(a)}),o.createElement(Za,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:t}),o.createElement(ra,{type:"line",id:t,data:a.data,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,hide:a.hide,isPanorama:r}),o.createElement(lr,j({},a,{id:t}))))}var Ke=o.memo(ur,Qe);Ke.displayName="Line";var dr=["axis"],pr=o.forwardRef((e,a)=>o.createElement(xa,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:dr,tooltipPayloadSearcher:ma,categoricalChartProps:e,ref:a}));const mr=Ge("text-small font-sans tracking-[-0.05em]",{variants:{size:{sm:"h-48",default:"h-72",lg:"h-96"}},defaultVariants:{size:"default"}}),R=["var(--color-sunflower)","var(--color-electric-blue)","var(--color-cool-purple)","var(--color-deep-blue)","var(--color-warm-purple)"],ue=o.forwardRef(({className:e,size:a,data:r,series:t,showGrid:n=!0,showLegend:i=!0,showTooltip:s=!0,xAxisLabel:l,yAxisLabel:c,strokeWidth:u=2,curved:v=!0,showDots:d=!0,...f},m)=>{const h=o.useMemo(()=>{if(t)return t;const p=r[0];return p?Object.keys(p).filter(y=>y!=="label"&&typeof p[y]=="number").map((y,g)=>({key:y,name:y.charAt(0).toUpperCase()+y.slice(1),color:R[g%R.length]})):[]},[r,t]);return S.jsx("div",{ref:m,className:qe(mr({size:a,className:e})),role:"img",...f,children:S.jsx(va,{width:"100%",height:"100%",minWidth:100,minHeight:100,children:S.jsxs(pr,{data:r,margin:{top:5,right:30,left:c?20:0,bottom:l?20:5},children:[n&&S.jsx(Pa,{strokeDasharray:"3 3",stroke:"var(--color-border)",vertical:!1}),S.jsx(wa,{dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:l?{value:l,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),S.jsx(Sa,{stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:c?{value:c,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0}),s&&S.jsx(fa,{contentStyle:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)",borderRadius:"4px",fontFamily:"var(--font-sans)",fontSize:"14px",color:"var(--color-primary)"},labelStyle:{color:"var(--color-secondary)",fontWeight:400}}),i&&S.jsx(ha,{wrapperStyle:{fontFamily:"var(--font-sans)",fontSize:"14px",color:"var(--color-secondary)"}}),h.map((p,b)=>S.jsx(Ke,{type:v?"monotone":"linear",dataKey:p.key,name:p.name,stroke:p.color||R[b%R.length],strokeWidth:u,dot:d,activeDot:d?{r:6}:!1},p.key))]})})})});ue.displayName="LineChart";ue.__docgenInfo={description:`LineChart component for displaying data trends over time.
Built with Recharts and styled according to Engrate design system.

@example
\`\`\`tsx
<LineChart
  data={[
    { label: 'Jan', revenue: 4000, expenses: 2400 },
    { label: 'Feb', revenue: 3000, expenses: 1398 },
    { label: 'Mar', revenue: 2000, expenses: 9800 },
  ]}
  series={[
    { key: 'revenue', name: 'Revenue' },
    { key: 'expenses', name: 'Expenses', color: '#0080FF' },
  ]}
  aria-label="Revenue vs expenses over time"
/>
\`\`\``,methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DataPoint"}],raw:"DataPoint[]"},description:"Data points to render"},series:{required:!1,tsType:{name:"Array",elements:[{name:"SeriesConfig"}],raw:"SeriesConfig[]"},description:"Configuration for data series. If not provided, all numeric keys except 'label' will be rendered"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"true",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show tooltips on hover",defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},strokeWidth:{required:!1,tsType:{name:"number"},description:"Custom stroke width for lines",defaultValue:{value:"2",computed:!1}},curved:{required:!1,tsType:{name:"boolean"},description:"Enable curve interpolation",defaultValue:{value:"true",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"Show dots on data points",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps"]};const kr={title:"Charts/LineChart",component:ue,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the chart"},showGrid:{control:"boolean",description:"Show grid lines"},showLegend:{control:"boolean",description:"Show legend"},showTooltip:{control:"boolean",description:"Show tooltip on hover"},curved:{control:"boolean",description:"Use curved lines (monotone interpolation)"},showDots:{control:"boolean",description:"Show dots on data points"},strokeWidth:{control:{type:"range",min:1,max:5},description:"Line stroke width"},xAxisLabel:{control:"text",description:"Label for the x-axis"},yAxisLabel:{control:"text",description:"Label for the y-axis"}},decorators:[e=>S.jsx("div",{style:{width:"100%",maxWidth:"800px",minHeight:"300px"},children:S.jsx(e,{})})]},x=[{label:"Jan",revenue:4e3,expenses:2400,profit:1600},{label:"Feb",revenue:3e3,expenses:1398,profit:1602},{label:"Mar",revenue:2e3,expenses:9800,profit:-7800},{label:"Apr",revenue:2780,expenses:3908,profit:-1128},{label:"May",revenue:1890,expenses:4800,profit:-2910},{label:"Jun",revenue:2390,expenses:3800,profit:-1410},{label:"Jul",revenue:3490,expenses:4300,profit:-810}],N={args:{data:x,series:[{key:"revenue",name:"Revenue"}],"aria-label":"Monthly revenue chart"}},T={args:{data:x,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],"aria-label":"Revenue vs expenses comparison"}},_={args:{data:x,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"},{key:"profit",name:"Profit",color:"#9B4ED8"}],"aria-label":"Financial metrics overview"}},W={args:{data:x,series:[{key:"revenue",name:"Revenue ($)"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)","aria-label":"Monthly revenue with labeled axes"}},z={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,"aria-label":"Revenue chart without grid"}},F={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showLegend:!1,"aria-label":"Revenue chart without legend"}},K={args:{data:x,series:[{key:"revenue",name:"Revenue"}],curved:!1,"aria-label":"Revenue chart with linear lines"}},$={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showDots:!1,"aria-label":"Revenue chart without data point dots"}},B={args:{data:x,series:[{key:"revenue",name:"Revenue"}],size:"sm","aria-label":"Small revenue chart"}},M={args:{data:x,series:[{key:"revenue",name:"Revenue"}],size:"lg","aria-label":"Large revenue chart"}},V={args:{data:x,"aria-label":"Chart with auto-detected series"}},G={args:{data:x,series:[{key:"revenue",name:"Revenue",color:"#721B5D"},{key:"expenses",name:"Expenses",color:"#002FA7"}],"aria-label":"Chart with custom colors"}},q={args:{data:x,series:[{key:"revenue",name:"Revenue"}],strokeWidth:4,"aria-label":"Chart with thick lines"}},U={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,showLegend:!1,showDots:!1,"aria-label":"Minimal revenue chart"}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    'aria-label': 'Monthly revenue chart'
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }, {
      key: 'expenses',
      name: 'Expenses',
      color: '#0080FF'
    }],
    'aria-label': 'Revenue vs expenses comparison'
  }
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }, {
      key: 'expenses',
      name: 'Expenses',
      color: '#0080FF'
    }, {
      key: 'profit',
      name: 'Profit',
      color: '#9B4ED8'
    }],
    'aria-label': 'Financial metrics overview'
  }
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue ($)'
    }],
    xAxisLabel: 'Month',
    yAxisLabel: 'Amount ($)',
    'aria-label': 'Monthly revenue with labeled axes'
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    'aria-label': 'Revenue chart without grid'
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showLegend: false,
    'aria-label': 'Revenue chart without legend'
  }
}`,...F.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    curved: false,
    'aria-label': 'Revenue chart with linear lines'
  }
}`,...K.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showDots: false,
    'aria-label': 'Revenue chart without data point dots'
  }
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'sm',
    'aria-label': 'Small revenue chart'
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'lg',
    'aria-label': 'Large revenue chart'
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    // No series prop - will auto-detect from data
    'aria-label': 'Chart with auto-detected series'
  }
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue',
      color: '#721B5D'
    }, {
      key: 'expenses',
      name: 'Expenses',
      color: '#002FA7'
    }],
    'aria-label': 'Chart with custom colors'
  }
}`,...G.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    strokeWidth: 4,
    'aria-label': 'Chart with thick lines'
  }
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    showLegend: false,
    showDots: false,
    'aria-label': 'Minimal revenue chart'
  }
}`,...U.parameters?.docs?.source}}};const Dr=["Default","MultiSeries","ThreeSeries","WithAxisLabels","WithoutGrid","WithoutLegend","LinearCurve","WithoutDots","SmallSize","LargeSize","AutoDetectSeries","CustomColors","ThickLines","Minimal"];export{V as AutoDetectSeries,G as CustomColors,N as Default,M as LargeSize,K as LinearCurve,U as Minimal,T as MultiSeries,B as SmallSize,q as ThickLines,_ as ThreeSeries,W as WithAxisLabels,$ as WithoutDots,z as WithoutGrid,F as WithoutLegend,Dr as __namedExportsOrder,kr as default};
