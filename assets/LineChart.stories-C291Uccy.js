import{j as h}from"./jsx-runtime-u17CrQMm.js";import{c as Je}from"./index-HTk8j2sO.js";import{r as i}from"./iframe-D8MZoyMW.js";import{a as oe,c as Xe}from"./utils-kmX6UHYG.js";import{e as re,aO as ke,Y as Ae,D as le,aP as De,aQ as Ye,Z as ue,L as ce,I as Ee,O as He,aR as Ze,a as ie,P as Le,f as pe,j as Oe,aS as Qe,l as Ie,m as je,o as ea,aT as aa,n as ge,x as ra,y as Re,z as Ce,R as ta,A as na,B as ia,C as Te,E as sa,F as oa,an as la,G as ua,J as Ne,aU as xe,T as ca,U as pa,V as C,W as da,X as ma,aV as va,S as fa,a1 as ha,a2 as ya,a3 as ga}from"./CategoricalChart-BulAtYd-.js";import{u as xa,G as ba,S as Pa,C as wa,a as Sa,X as ka,Y as Aa}from"./CartesianChart-BsQ1M4DN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJzXm3sw.js";import"./index-Dxlj92OX.js";import"./index-iAzhMt4N.js";function se(){return se=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},se.apply(null,arguments)}var Fe=e=>{var{cx:a,cy:r,r:t,className:n}=e,s=oe("recharts-dot",n);return re(a)&&re(r)&&re(t)?i.createElement("circle",se({},Ae(e),ke(e),{className:s,cx:a,cy:r,r:t})):null},Da=["points"];function be(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function te(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?be(Object(r),!0).forEach(function(t){Ea(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Ea(e,a,r){return(a=La(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function La(e){var a=Oa(e,"string");return typeof a=="symbol"?a:a+""}function Oa(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Q.apply(null,arguments)}function Ia(e,a){if(e==null)return{};var r,t,n=ja(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ja(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}function Ra(e){var{option:a,dotProps:r,className:t}=e;if(i.isValidElement(a))return i.cloneElement(a,r);if(typeof a=="function")return a(r);var n=oe(t,typeof a!="boolean"?a.className:""),s=r??{},{points:o}=s,l=Ia(s,Da);return i.createElement(Fe,Q({},l,{className:n}))}function Ca(e,a){return e==null?!1:a?!0:e.length===1}function Ta(e){var{points:a,dot:r,className:t,dotClassName:n,dataKey:s,baseProps:o,needClip:l,clipPathId:u,zIndex:c=le.scatter}=e;if(!Ca(a,r))return null;var m=De(r),d=Ye(r),v=a.map((y,g)=>{var S,P,b=te(te(te({r:3},o),d),{},{index:g,cx:(S=y.x)!==null&&S!==void 0?S:void 0,cy:(P=y.y)!==null&&P!==void 0?P:void 0,dataKey:s,value:y.value,payload:y.payload,points:a});return i.createElement(Ra,{key:"dot-".concat(g),option:r,dotProps:b,className:n})}),p={};return l&&u!=null&&(p.clipPath="url(#clipPath-".concat(m?"":"dots-").concat(u,")")),i.createElement(ue,{zIndex:c},i.createElement(ce,Q({className:t},p),v))}function Pe(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function ne(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(r),!0).forEach(function(t){Na(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Na(e,a,r){return(a=Fa(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Fa(e){var a=_a(e,"string");return typeof a=="symbol"?a:a+""}function _a(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var Wa=e=>{var{point:a,childIndex:r,mainColor:t,activeDot:n,dataKey:s,clipPath:o}=e;if(n===!1||a.x==null||a.y==null)return null;var l={index:r,dataKey:s,cx:a.x,cy:a.y,r:4,fill:t??"none",strokeWidth:2,stroke:"#fff",payload:a.payload,value:a.value},u=ne(ne(ne({},l),Le(n)),ke(n)),c;return i.isValidElement(n)?c=i.cloneElement(n,u):typeof n=="function"?c=n(u):c=i.createElement(Fe,u),i.createElement(ce,{className:"recharts-active-dot",clipPath:o},c)};function $a(e){var{points:a,mainColor:r,activeDot:t,itemDataKey:n,clipPath:s,zIndex:o=le.activeDot}=e,l=Ee(He),u=Ze();if(a==null||u==null)return null;var c=a.find(m=>u.includes(m.payload));return ie(c)?null:i.createElement(ue,{zIndex:o},i.createElement(Wa,{point:c,childIndex:Number(l),mainColor:r,dataKey:n,activeDot:t,clipPath:s}))}var _e=(e,a,r,t)=>Ie(e,"xAxis",a,t),We=(e,a,r,t)=>je(e,"xAxis",a,t),$e=(e,a,r,t)=>Ie(e,"yAxis",r,t),ze=(e,a,r,t)=>je(e,"yAxis",r,t),za=pe([Oe,_e,$e,We,ze],(e,a,r,t,n)=>aa(e,"xAxis")?ge(a,t,!1):ge(r,n,!1)),Ka=(e,a,r,t,n)=>n;function Va(e){return e.type==="line"}var Ba=pe([ea,Ka],(e,a)=>e.filter(Va).find(r=>r.id===a)),Ma=pe([Oe,_e,$e,We,ze,Ba,za,Qe],(e,a,r,t,n,s,o,l)=>{var{chartData:u,dataStartIndex:c,dataEndIndex:m}=l;if(!(s==null||a==null||r==null||t==null||n==null||t.length===0||n.length===0||o==null||e!=="horizontal"&&e!=="vertical")){var{dataKey:d,data:v}=s,p;if(v!=null&&v.length>0?p=v:p=u?.slice(c,m+1),p!=null)return pr({layout:e,xAxis:a,yAxis:r,xAxisTicks:t,yAxisTicks:n,dataKey:d,bandSize:o,displayedData:p})}});function qa(e){var a=Le(e),r=3,t=2;if(a!=null){var{r:n,strokeWidth:s}=a,o=Number(n),l=Number(s);return(Number.isNaN(o)||o<0)&&(o=r),(Number.isNaN(l)||l<0)&&(l=t),{r:o,strokeWidth:l}}return{r,strokeWidth:t}}var Ga=["id"],Ua=["type","layout","connectNulls","needClip","shape"],Ja=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},T.apply(null,arguments)}function we(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function L(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?we(Object(r),!0).forEach(function(t){Xa(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Xa(e,a,r){return(a=Ya(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ya(e){var a=Ha(e,"string");return typeof a=="symbol"?a:a+""}function Ha(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function de(e,a){if(e==null)return{};var r,t,n=Za(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Za(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var Qa=e=>{var{dataKey:a,name:r,stroke:t,legendType:n,hide:s}=e;return[{inactive:s,dataKey:a,type:n,color:t,value:Te(r,a),payload:e}]},er=i.memo(e=>{var{dataKey:a,data:r,stroke:t,strokeWidth:n,fill:s,name:o,hide:l,unit:u,tooltipType:c,id:m}=e,d={dataDefinedOnItem:r,getPosition:oa,settings:{stroke:t,strokeWidth:n,fill:s,dataKey:a,nameKey:void 0,name:Te(o,a),hide:l,type:c,color:t,unit:u,graphicalItemId:m}};return i.createElement(sa,{tooltipEntrySettings:d})}),Ke=(e,a)=>"".concat(a,"px ").concat(e-a,"px");function ar(e,a){for(var r=e.length%2!==0?[...e,0]:e,t=[],n=0;n<a;++n)t=[...t,...r];return t}var rr=(e,a,r)=>{var t=r.reduce((p,y)=>p+y);if(!t)return Ke(a,e);for(var n=Math.floor(e/t),s=e%t,o=a-e,l=[],u=0,c=0;u<r.length;c+=(m=r[u])!==null&&m!==void 0?m:0,++u){var m,d=r[u];if(d!=null&&c+d>s){l=[...r.slice(0,u),s-c];break}}var v=l.length%2===0?[0,o]:[o];return[...ar(r,n),...l,...v].map(p=>"".concat(p,"px")).join(", ")};function tr(e){var{clipPathId:a,points:r,props:t}=e,{dot:n,dataKey:s,needClip:o}=t,{id:l}=t,u=de(t,Ga),c=Ae(u);return i.createElement(Ta,{points:r,dot:n,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:s,baseProps:c,needClip:o,clipPathId:a})}function nr(e){var{showLabels:a,children:r,points:t}=e,n=i.useMemo(()=>t?.map(s=>{var o,l,u={x:(o=s.x)!==null&&o!==void 0?o:0,y:(l=s.y)!==null&&l!==void 0?l:0,width:0,lowerWidth:0,upperWidth:0,height:0};return L(L({},u),{},{value:s.value,payload:s.payload,viewBox:u,parentViewBox:void 0,fill:void 0})}),[t]);return i.createElement(ma,{value:a?n:void 0},r)}function Se(e){var{clipPathId:a,pathRef:r,points:t,strokeDasharray:n,props:s}=e,{type:o,layout:l,connectNulls:u,needClip:c,shape:m}=s,d=de(s,Ua),v=L(L({},va(d)),{},{fill:"none",className:"recharts-line-curve",clipPath:c?"url(#clipPath-".concat(a,")"):void 0,points:t,type:o,layout:l,connectNulls:u,strokeDasharray:n??s.strokeDasharray});return i.createElement(i.Fragment,null,t?.length>1&&i.createElement(fa,T({shapeType:"curve",option:m},v,{pathRef:r})),i.createElement(tr,{points:t,clipPathId:a,props:s}))}function ir(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function sr(e){var{clipPathId:a,props:r,pathRef:t,previousPointsRef:n,longestAnimatedLengthRef:s}=e,{points:o,strokeDasharray:l,isAnimationActive:u,animationBegin:c,animationDuration:m,animationEasing:d,animateNewValues:v,width:p,height:y,onAnimationEnd:g,onAnimationStart:S}=r,P=n.current,b=ca(o,"recharts-line-"),w=i.useRef(b),[f,k]=i.useState(!1),A=!f,D=i.useCallback(()=>{typeof g=="function"&&g(),k(!1)},[g]),ee=i.useCallback(()=>{typeof S=="function"&&S(),k(!0)},[S]),O=ir(t.current),N=i.useRef(0);w.current!==b&&(N.current=s.current,w.current=b);var ve=N.current;return i.createElement(nr,{points:o,showLabels:A},r.children,i.createElement(pa,{animationId:b,begin:c,duration:m,isActive:u,easing:d,onAnimationEnd:D,onAnimationStart:ee,key:b},I=>{var Me=C(ve,O+ve,I),ae=Math.min(Me,O),R;if(u)if(l){var qe="".concat(l).split(/[,\s]+/gim).map(E=>parseFloat(E));R=rr(ae,O,qe)}else R=Ke(O,ae);else R=l==null?void 0:String(l);if(I>0&&O>0&&(n.current=o,s.current=Math.max(s.current,ae)),P){var Ge=P.length/o.length,fe=I===1?o:o.map((E,Ue)=>{var he=Math.floor(Ue*Ge);if(P[he]){var ye=P[he];return L(L({},E),{},{x:C(ye.x,E.x,I),y:C(ye.y,E.y,I)})}return v?L(L({},E),{},{x:C(p*2,E.x,I),y:C(y/2,E.y,I)}):L(L({},E),{},{x:E.x,y:E.y})});return n.current=fe,i.createElement(Se,{props:r,points:fe,clipPathId:a,pathRef:t,strokeDasharray:R})}return i.createElement(Se,{props:r,points:o,clipPathId:a,pathRef:t,strokeDasharray:R})}),i.createElement(da,{label:r.label}))}function or(e){var{clipPathId:a,props:r}=e,t=i.useRef(null),n=i.useRef(0),s=i.useRef(null);return i.createElement(sr,{props:r,clipPathId:a,previousPointsRef:t,longestAnimatedLengthRef:n,pathRef:s})}var lr=(e,a)=>{var r,t;return{x:(r=e.x)!==null&&r!==void 0?r:void 0,y:(t=e.y)!==null&&t!==void 0?t:void 0,value:e.value,errorVal:Ne(e.payload,a)}};class ur extends i.Component{render(){var{hide:a,dot:r,points:t,className:n,xAxisId:s,yAxisId:o,top:l,left:u,width:c,height:m,id:d,needClip:v,zIndex:p}=this.props;if(a)return null;var y=oe("recharts-line",n),g=d,{r:S,strokeWidth:P}=qa(r),b=De(r),w=S*2+P,f=v?"url(#clipPath-".concat(b?"":"dots-").concat(g,")"):void 0;return i.createElement(ue,{zIndex:p},i.createElement(ce,{className:y},v&&i.createElement("defs",null,i.createElement(ba,{clipPathId:g,xAxisId:s,yAxisId:o}),!b&&i.createElement("clipPath",{id:"clipPath-dots-".concat(g)},i.createElement("rect",{x:u-w/2,y:l-w/2,width:c+w,height:m+w}))),i.createElement(Pa,{xAxisId:s,yAxisId:o,data:t,dataPointFormatter:lr,errorBarOffset:0},i.createElement(or,{props:this.props,clipPathId:g}))),i.createElement($a,{activeDot:this.props.activeDot,points:t,mainColor:this.props.stroke,itemDataKey:this.props.dataKey,clipPath:f}))}}var Ve={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:"auto",label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:le.line,type:"linear"};function cr(e){var a=Re(e,Ve),{activeDot:r,animateNewValues:t,animationBegin:n,animationDuration:s,animationEasing:o,connectNulls:l,dot:u,hide:c,isAnimationActive:m,label:d,legendType:v,xAxisId:p,yAxisId:y,id:g}=a,S=de(a,Ja),{needClip:P}=xa(p,y),b=la(),w=ua(),f=Ce(),k=Ee(N=>Ma(N,p,y,f,g));if(w!=="horizontal"&&w!=="vertical"||k==null||b==null)return null;var{height:A,width:D,x:ee,y:O}=b;return i.createElement(ur,T({},S,{id:g,connectNulls:l,dot:u,activeDot:r,animateNewValues:t,animationBegin:n,animationDuration:s,animationEasing:o,isAnimationActive:m,hide:c,label:d,legendType:v,xAxisId:p,yAxisId:y,points:k,layout:w,height:A,width:D,left:ee,top:O,needClip:P}))}function pr(e){var{layout:a,xAxis:r,yAxis:t,xAxisTicks:n,yAxisTicks:s,dataKey:o,bandSize:l,displayedData:u}=e;return u.map((c,m)=>{var d=Ne(c,o);if(a==="horizontal"){var v=xe({axis:r,ticks:n,bandSize:l,entry:c,index:m}),p=ie(d)?null:t.scale.map(d);return{x:v,y:p??null,value:d,payload:c}}var y=ie(d)?null:r.scale.map(d),g=xe({axis:t,ticks:s,bandSize:l,entry:c,index:m});return y==null||g==null?null:{x:y,y:g,value:d,payload:c}}).filter(Boolean)}function dr(e){var a=Re(e,Ve),r=Ce();return i.createElement(ta,{id:a.id,type:"line"},t=>i.createElement(i.Fragment,null,i.createElement(na,{legendPayload:Qa(a)}),i.createElement(er,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:t}),i.createElement(ia,{type:"line",id:t,data:a.data,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,hide:a.hide,isPanorama:r}),i.createElement(cr,T({},a,{id:t}))))}var Be=i.memo(dr,ra);Be.displayName="Line";var mr=["axis"],vr=i.forwardRef((e,a)=>i.createElement(wa,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:mr,tooltipPayloadSearcher:ha,categoricalChartProps:e,ref:a}));const fr=Je("text-small font-sans tracking-[-0.05em]",{variants:{size:{sm:"h-48",default:"h-72",lg:"h-96"}},defaultVariants:{size:"default"}}),j=["var(--color-sunflower)","var(--color-electric-blue)","var(--color-cool-purple)","var(--color-deep-blue)","var(--color-warm-purple)"],me=i.forwardRef(({className:e,size:a,data:r,series:t,showGrid:n=!0,showLegend:s=!0,showTooltip:o=!0,xAxisLabel:l,yAxisLabel:u,strokeWidth:c=2,curved:m=!0,interpolation:d,showDots:v=!0,tooltipValueFormatter:p,xAxisValueFormatter:y,yAxisValueFormatter:g,"aria-label":S,...P},b)=>{const w=i.useMemo(()=>{if(t)return t;const f=r[0];return f?Object.keys(f).filter(A=>A!=="label"&&typeof f[A]=="number").map((A,D)=>({key:A,name:A.charAt(0).toUpperCase()+A.slice(1),color:j[D%j.length]})):[]},[r,t]);return h.jsxs("div",{ref:b,className:Xe(fr({size:a,className:e})),style:{display:"flex",flexDirection:"column"},...P,children:[h.jsx("div",{role:"img","aria-label":S,style:{flex:"1 1 0",minHeight:0},children:h.jsx(ya,{width:"100%",height:"100%",minWidth:100,minHeight:100,children:h.jsxs(vr,{data:r,margin:{top:5,right:30,left:u?20:0,bottom:l?20:5},children:[n&&h.jsx(Sa,{strokeDasharray:"3 3",stroke:"var(--color-border)",vertical:!1}),h.jsx(ka,{dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:y,label:l?{value:l,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),h.jsx(Aa,{stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:g,label:u?{value:u,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0}),o&&h.jsx(ga,{content:({active:f,payload:k,label:A})=>!f||!k?.length?null:h.jsxs("div",{style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"8px",fontFamily:"var(--font-sans)",fontSize:"var(--text-small)",padding:"12px 16px"},children:[h.jsx("p",{style:{color:"var(--color-secondary)",fontWeight:400,margin:"0 0 4px"},children:A}),k.map(D=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[h.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:"50%",backgroundColor:D.color,flexShrink:0}}),h.jsxs("span",{style:{color:"var(--color-secondary)"},children:[D.name,":"," ",p?p(D.value,D.dataKey):D.value]})]},String(D.name)))]})}),w.map((f,k)=>h.jsx(Be,{type:d??(m?"monotone":"linear"),dataKey:f.key,name:f.name,stroke:f.color||j[k%j.length],strokeWidth:c,dot:v,activeDot:v?{r:6}:!1},f.key))]})})}),s&&h.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"8px 16px",listStyle:"none",margin:0,padding:0},children:w.map((f,k)=>h.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[h.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0,backgroundColor:f.color||j[k%j.length]}}),h.jsx("span",{style:{color:"var(--color-secondary)",fontSize:"var(--text-small)",fontFamily:"var(--font-sans)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name})]},f.key))})]})});me.displayName="LineChart";me.__docgenInfo={description:`LineChart component for displaying data trends over time.
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
\`\`\``,methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DataPoint"}],raw:"DataPoint[]"},description:"Data points to render"},series:{required:!1,tsType:{name:"Array",elements:[{name:"SeriesConfig"}],raw:"SeriesConfig[]"},description:"Configuration for data series. If not provided, all numeric keys except 'label' will be rendered"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"true",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show tooltips on hover",defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},strokeWidth:{required:!1,tsType:{name:"number"},description:"Custom stroke width for lines",defaultValue:{value:"2",computed:!1}},curved:{required:!1,tsType:{name:"boolean"},description:"Enable curve interpolation",defaultValue:{value:"true",computed:!1}},interpolation:{required:!1,tsType:{name:"union",raw:"'linear' | 'monotone' | 'stepAfter' | 'stepBefore'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'monotone'"},{name:"literal",value:"'stepAfter'"},{name:"literal",value:"'stepBefore'"}]},description:"Line interpolation type. Overrides `curved` when set."},showDots:{required:!1,tsType:{name:"boolean"},description:"Show dots on data points",defaultValue:{value:"true",computed:!1}},tooltipValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, seriesKey: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"string"},name:"seriesKey"}],return:{name:"string"}}},description:"Format tooltip values (e.g. add currency, custom rounding)"},xAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format x-axis tick values"},yAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format y-axis tick values"}},composes:["VariantProps"]};const Dr={title:"Charts/LineChart",component:me,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the chart"},showGrid:{control:"boolean",description:"Show grid lines"},showLegend:{control:"boolean",description:"Show legend"},showTooltip:{control:"boolean",description:"Show tooltip on hover"},curved:{control:"boolean",description:"Use curved lines (monotone interpolation)"},interpolation:{control:"select",options:["linear","monotone","stepAfter","stepBefore"],description:"Line interpolation type. Overrides curved when set."},showDots:{control:"boolean",description:"Show dots on data points"},strokeWidth:{control:{type:"range",min:1,max:5},description:"Line stroke width"},xAxisLabel:{control:"text",description:"Label for the x-axis"},yAxisLabel:{control:"text",description:"Label for the y-axis"},tooltipValueFormatter:{table:{disable:!0}},xAxisValueFormatter:{table:{disable:!0}},yAxisValueFormatter:{table:{disable:!0}}},decorators:[e=>h.jsx("div",{style:{width:"100%",maxWidth:"800px",minHeight:"300px"},children:h.jsx(e,{})})]},x=[{label:"Jan",revenue:4e3,expenses:2400,profit:1600},{label:"Feb",revenue:3e3,expenses:1398,profit:1602},{label:"Mar",revenue:2e3,expenses:9800,profit:-7800},{label:"Apr",revenue:2780,expenses:3908,profit:-1128},{label:"May",revenue:1890,expenses:4800,profit:-2910},{label:"Jun",revenue:2390,expenses:3800,profit:-1410},{label:"Jul",revenue:3490,expenses:4300,profit:-810}],F={args:{data:x,series:[{key:"revenue",name:"Revenue"}],"aria-label":"Monthly revenue chart"}},_={args:{data:x,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],"aria-label":"Revenue vs expenses comparison"}},W={args:{data:x,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"},{key:"profit",name:"Profit",color:"#9B4ED8"}],"aria-label":"Financial metrics overview"}},$={args:{data:x,series:[{key:"revenue",name:"Revenue ($)"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)","aria-label":"Monthly revenue with labeled axes"}},z={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,"aria-label":"Revenue chart without grid"}},K={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showLegend:!1,"aria-label":"Revenue chart without legend"}},V={args:{data:x,series:[{key:"revenue",name:"Revenue"}],curved:!1,"aria-label":"Revenue chart with linear lines"}},B={args:{data:x,series:[{key:"revenue",name:"Revenue"}],interpolation:"stepAfter","aria-label":"Revenue chart with step-after interpolation"}},M={args:{data:x,series:[{key:"revenue",name:"Revenue"}],interpolation:"stepBefore","aria-label":"Revenue chart with step-before interpolation"}},q={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showDots:!1,"aria-label":"Revenue chart without data point dots"}},G={args:{data:x,series:[{key:"revenue",name:"Revenue"}],size:"sm","aria-label":"Small revenue chart"}},U={args:{data:x,series:[{key:"revenue",name:"Revenue"}],size:"lg","aria-label":"Large revenue chart"}},J={args:{data:x,"aria-label":"Chart with auto-detected series"}},X={args:{data:x,series:[{key:"revenue",name:"Revenue",color:"#721B5D"},{key:"expenses",name:"Expenses",color:"#002FA7"}],"aria-label":"Chart with custom colors"}},Y={args:{data:x,series:[{key:"revenue",name:"Revenue"}],strokeWidth:4,"aria-label":"Chart with thick lines"}},H={args:{data:x,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,showLegend:!1,showDots:!1,"aria-label":"Minimal revenue chart"}},Z={args:{data:x,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)",tooltipValueFormatter:e=>`$${e.toLocaleString("en-US")}`,yAxisValueFormatter:e=>`$${Number(e).toLocaleString("en-US")}`,"aria-label":"Revenue chart with formatted values"}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    'aria-label': 'Monthly revenue chart'
  }
}`,...F.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    'aria-label': 'Revenue chart without grid'
  }
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showLegend: false,
    'aria-label': 'Revenue chart without legend'
  }
}`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    curved: false,
    'aria-label': 'Revenue chart with linear lines'
  }
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    interpolation: 'stepAfter',
    'aria-label': 'Revenue chart with step-after interpolation'
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    interpolation: 'stepBefore',
    'aria-label': 'Revenue chart with step-before interpolation'
  }
}`,...M.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showDots: false,
    'aria-label': 'Revenue chart without data point dots'
  }
}`,...q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'sm',
    'aria-label': 'Small revenue chart'
  }
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'lg',
    'aria-label': 'Large revenue chart'
  }
}`,...U.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    // No series prop - will auto-detect from data
    'aria-label': 'Chart with auto-detected series'
  }
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    strokeWidth: 4,
    'aria-label': 'Chart with thick lines'
  }
}`,...Y.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    xAxisLabel: 'Month',
    yAxisLabel: 'Amount ($)',
    tooltipValueFormatter: (value: number) => \`$\${value.toLocaleString('en-US')}\`,
    yAxisValueFormatter: (value: string) => \`$\${Number(value).toLocaleString('en-US')}\`,
    'aria-label': 'Revenue chart with formatted values'
  }
}`,...Z.parameters?.docs?.source}}};const Er=["Default","MultiSeries","ThreeSeries","WithAxisLabels","WithoutGrid","WithoutLegend","LinearCurve","StepAfter","StepBefore","WithoutDots","SmallSize","LargeSize","AutoDetectSeries","CustomColors","ThickLines","Minimal","WithFormatters"];export{J as AutoDetectSeries,X as CustomColors,F as Default,U as LargeSize,V as LinearCurve,H as Minimal,_ as MultiSeries,G as SmallSize,B as StepAfter,M as StepBefore,Y as ThickLines,W as ThreeSeries,$ as WithAxisLabels,Z as WithFormatters,q as WithoutDots,z as WithoutGrid,K as WithoutLegend,Er as __namedExportsOrder,Dr as default};
