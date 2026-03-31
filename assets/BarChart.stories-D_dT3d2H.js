import{j as S}from"./jsx-runtime-u17CrQMm.js";import{c as ea}from"./index-HTk8j2sO.js";import{r as l}from"./iframe-BHnDdxtU.js";import{a as aa,c as ra}from"./utils-kmX6UHYG.js";import{i as ta,a as ue,g as me,b as fe,c as na,d as Le,e as we,S as sa,f as D,s as ia,h as oa,j as _,k as la,l as T,m as K,n as Fe,o as Me,p as Te,q as ua,r as ca,t as Pe,u as da,v as Be,w as pa,L as se,x as va,y as ma,D as ye,z as Ke,R as fa,A as ha,B as ga,Z as xe,C as _e,E as ya,F as xa,G as ba,H as ka,I as ie,J as Ne,K as Sa,M as Ia,N as Ee,O as We,P as Aa,Q as $e,T as wa,U as Pa,V as z,W as Ba,X as Ea,Y as Ca,_ as Oa,$ as ja,a0 as Ce,a1 as Ra,a2 as za,a3 as Da,a4 as La}from"./CategoricalChart-ChnJBuux.js";import{u as Fa,S as Ma,G as Ta,C as Ka,a as _a,X as Oe,Y as je}from"./CartesianChart-Clzcraw2.js";import{C as Na,u as Ge,a as Ve,b as qe}from"./tooltipContext-eCFBsC_c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaqMFzHH.js";import"./index-BHF5jknk.js";import"./index-CmmPdmrT.js";var Re=(e,a,r)=>{var t=r??e;if(!ue(t))return me(t,a,0)},Wa=(e,a,r)=>{var t={},n=e.filter(ta),s=e.filter(u=>u.stackId==null),i=n.reduce((u,c)=>{var m=u[c.stackId];return m==null&&(m=[]),m.push(c),u[c.stackId]=m,u},t),o=Object.entries(i).map(u=>{var c,[m,v]=u,k=v.map(x=>x.dataKey),b=Re(a,r,(c=v[0])===null||c===void 0?void 0:c.barSize);return{stackId:m,dataKeys:k,barSize:b}}),d=s.map(u=>{var c=[u.dataKey].filter(v=>v!=null),m=Re(a,r,u.barSize);return{stackId:void 0,dataKeys:c,barSize:m}});return[...o,...d]};function ze(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function $(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ze(Object(r),!0).forEach(function(t){$a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $a(e,a,r){return(a=Ga(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ga(e){var a=Va(e,"string");return typeof a=="symbol"?a:a+""}function Va(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function qa(e,a,r,t,n){var s,i=t.length;if(!(i<1)){var o=me(e,r,0,!0),d,u=[];if(fe((s=t[0])===null||s===void 0?void 0:s.barSize)){var c=!1,m=r/i,v=t.reduce((f,g)=>f+(g.barSize||0),0);v+=(i-1)*o,v>=r&&(v-=(i-1)*o,o=0),v>=r&&m>0&&(c=!0,m*=.9,v=i*m);var k=(r-v)/2>>0,b={offset:k-o,size:0};d=t.reduce((f,g)=>{var h,A={stackId:g.stackId,dataKeys:g.dataKeys,position:{offset:b.offset+b.size+o,size:c?m:(h=g.barSize)!==null&&h!==void 0?h:0}},y=[...f,A];return b=A.position,y},u)}else{var x=me(a,r,0,!0);r-2*x-(i-1)*o<=0&&(o=0);var I=(r-2*x-(i-1)*o)/i;I>1&&(I>>=0);var p=fe(n)?Math.min(I,n):I;d=t.reduce((f,g,h)=>[...f,{stackId:g.stackId,dataKeys:g.dataKeys,position:{offset:x+(I+o)*h+(I-p)/2,size:p}}],u)}return d}}var Ua=(e,a,r,t,n,s,i)=>{var o=ue(i)?a:i,d=qa(r,t,n!==s?n:s,e,o);return n!==s&&d!=null&&(d=d.map(u=>$($({},u),{},{position:$($({},u.position),{},{offset:u.position.offset-n/2})}))),d},Xa=(e,a)=>{var r=na(a);if(!(!e||r==null||a==null)){var{stackId:t}=a;if(t!=null){var n=e[t];if(n){var{stackedData:s}=n;if(s)return s.find(i=>i.key===r)}}}},Ya=(e,a)=>{if(!(e==null||a==null)){var r=e.find(t=>t.stackId===a.stackId&&a.dataKey!=null&&t.dataKeys.includes(a.dataKey));if(r!=null)return r.position}};function Ja(e,a){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&fe(e.zIndex)?e.zIndex:a}function L(e,a){var r,t;return(r=(t=e.graphicalItems.cartesianItems.find(n=>n.id===a))===null||t===void 0?void 0:t.xAxisId)!==null&&r!==void 0?r:Le}function F(e,a){var r,t;return(r=(t=e.graphicalItems.cartesianItems.find(n=>n.id===a))===null||t===void 0?void 0:t.yAxisId)!==null&&r!==void 0?r:Le}var Ha="Invariant failed";function Za(e,a){throw new Error(Ha)}function he(){return he=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},he.apply(null,arguments)}function oe(e){return l.createElement(sa,he({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var Qa=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(t,n)=>{if(we(a))return a;var s=we(t)||ue(t);return s?a(t,n):(s||Za(),r)}},er=(e,a,r)=>r,ar=(e,a)=>a,W=D([Me,ar],(e,a)=>e.filter(r=>r.type==="bar").find(r=>r.id===a)),rr=D([W],e=>e?.maxBarSize),tr=(e,a,r,t)=>t,nr=D([_,Me,L,F,er],(e,a,r,t,n)=>a.filter(s=>e==="horizontal"?s.xAxisId===r:s.yAxisId===t).filter(s=>s.isPanorama===n).filter(s=>s.hide===!1).filter(s=>s.type==="bar")),sr=(e,a,r)=>{var t=_(e),n=L(e,a),s=F(e,a);if(!(n==null||s==null))return t==="horizontal"?Pe(e,"yAxis",s,r):Pe(e,"xAxis",n,r)},ir=(e,a)=>{var r=_(e),t=L(e,a),n=F(e,a);if(!(t==null||n==null))return r==="horizontal"?Be(e,"xAxis",t):Be(e,"yAxis",n)},or=D([nr,da,ir],Wa),lr=(e,a,r)=>{var t,n,s=W(e,a);if(s==null)return 0;var i=L(e,a),o=F(e,a);if(i==null||o==null)return 0;var d=_(e),u=Te(e),{maxBarSize:c}=s,m=ue(c)?u:c,v,k;return d==="horizontal"?(v=T(e,"xAxis",i,r),k=K(e,"xAxis",i,r)):(v=T(e,"yAxis",o,r),k=K(e,"yAxis",o,r)),(t=(n=Fe(v,k,!0))!==null&&n!==void 0?n:m)!==null&&t!==void 0?t:0},Ue=(e,a,r)=>{var t=_(e),n=L(e,a),s=F(e,a);if(!(n==null||s==null)){var i,o;return t==="horizontal"?(i=T(e,"xAxis",n,r),o=K(e,"xAxis",n,r)):(i=T(e,"yAxis",s,r),o=K(e,"yAxis",s,r)),Fe(i,o)}},ur=D([or,Te,ua,ca,lr,Ue,rr],Ua),cr=(e,a,r)=>{var t=L(e,a);if(t!=null)return T(e,"xAxis",t,r)},dr=(e,a,r)=>{var t=F(e,a);if(t!=null)return T(e,"yAxis",t,r)},pr=(e,a,r)=>{var t=L(e,a);if(t!=null)return K(e,"xAxis",t,r)},vr=(e,a,r)=>{var t=F(e,a);if(t!=null)return K(e,"yAxis",t,r)},mr=D([ur,W],Ya),fr=D([sr,W],Xa),hr=D([ia,oa,cr,dr,pr,vr,mr,_,la,Ue,fr,W,tr],(e,a,r,t,n,s,i,o,d,u,c,m,v)=>{var{chartData:k,dataStartIndex:b,dataEndIndex:x}=d;if(!(m==null||i==null||a==null||o!=="horizontal"&&o!=="vertical"||r==null||t==null||n==null||s==null||u==null)){var{data:I}=m,p;if(I!=null&&I.length>0?p=I:p=k?.slice(b,x+1),p!=null)return Gr({layout:o,barSettings:m,pos:i,parentViewBox:a,bandSize:u,xAxis:r,yAxis:t,xAxisTicks:n,yAxisTicks:s,stackedData:c,displayedData:p,offset:e,cells:v,dataStartIndex:b})}}),gr=["index"];function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},ge.apply(null,arguments)}function yr(e,a){if(e==null)return{};var r,t,n=xr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xr(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var Xe=l.createContext(void 0),br=e=>{var a=l.useContext(Xe);if(a!=null)return a.stackId;if(e!=null)return pa(e)},kr=(e,a)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(a),Sr=e=>{var a=l.useContext(Xe);if(a!=null){var{stackId:r}=a;return"url(#".concat(kr(r,e),")")}},Ye=e=>{var{index:a}=e,r=yr(e,gr),t=Sr(a);return l.createElement(se,ge({className:"recharts-bar-stack-layer",clipPath:t},r))},Ir=["onMouseEnter","onMouseLeave","onClick"],Ar=["value","background","tooltipPosition"],wr=["id"],Pr=["onMouseEnter","onClick","onMouseLeave"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},j.apply(null,arguments)}function De(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function w(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?De(Object(r),!0).forEach(function(t){Br(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Br(e,a,r){return(a=Er(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Er(e){var a=Cr(e,"string");return typeof a=="symbol"?a:a+""}function Cr(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function le(e,a){if(e==null)return{};var r,t,n=Or(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Or(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var jr=e=>{var{dataKey:a,name:r,fill:t,legendType:n,hide:s}=e;return[{inactive:s,dataKey:a,type:n,color:t,value:_e(r,a),payload:e}]},Rr=l.memo(e=>{var{dataKey:a,stroke:r,strokeWidth:t,fill:n,name:s,hide:i,unit:o,tooltipType:d,id:u}=e,c={dataDefinedOnItem:void 0,getPosition:xa,settings:{stroke:r,strokeWidth:t,fill:n,dataKey:a,nameKey:void 0,name:_e(s,a),hide:i,type:d,color:n,unit:o,graphicalItemId:u}};return l.createElement(ya,{tooltipEntrySettings:c})});function zr(e){var a=ie(We),{data:r,dataKey:t,background:n,allOtherBarProps:s}=e,{onMouseEnter:i,onMouseLeave:o,onClick:d}=s,u=le(s,Ir),c=Ge(i,t,s.id),m=Ve(o),v=qe(d,t,s.id);if(!n||r==null)return null;var k=Aa(n);return l.createElement(xe,{zIndex:Ja(n,ye.barBackground)},r.map((b,x)=>{var{value:I,background:p,tooltipPosition:f}=b,g=le(b,Ar);if(!p)return null;var h=c(b,x),A=m(b,x),y=v(b,x),C=w(w(w(w(w({option:n,isActive:String(x)===a},g),{},{fill:"#eee"},p),k),$e(u,b,x)),{},{onMouseEnter:h,onMouseLeave:A,onClick:y,dataKey:t,index:x,className:"recharts-bar-background-rectangle"});return l.createElement(oe,j({key:"background-bar-".concat(x)},C))}))}function Dr(e){var{showLabels:a,children:r,rects:t}=e,n=t?.map(s=>{var i={x:s.x,y:s.y,width:s.width,lowerWidth:s.width,upperWidth:s.width,height:s.height};return w(w({},i),{},{value:s.value,payload:s.payload,parentViewBox:s.parentViewBox,viewBox:i,fill:s.fill})});return l.createElement(Ea,{value:a?n:void 0},r)}function Lr(e){var{shape:a,activeBar:r,baseProps:t,entry:n,index:s,dataKey:i}=e,o=ie(We),d=ie(Oa),u=r&&String(s)===o&&(d==null||i===d),c=u?r:a;return u?l.createElement(xe,{zIndex:ye.activeBar},l.createElement(Ye,{index:s},l.createElement(oe,j({},t,{name:String(t.name)},n,{isActive:u,option:c,index:s,dataKey:i})))):l.createElement(oe,j({},t,{name:String(t.name)},n,{isActive:u,option:c,index:s,dataKey:i}))}function Fr(e){var{shape:a,baseProps:r,entry:t,index:n,dataKey:s}=e;return l.createElement(oe,j({},r,{name:String(r.name)},t,{isActive:!1,option:a,index:n,dataKey:s}))}function Mr(e){var a,{data:r,props:t}=e,n=(a=Ca(t))!==null&&a!==void 0?a:{},{id:s}=n,i=le(n,wr),{shape:o,dataKey:d,activeBar:u}=t,{onMouseEnter:c,onClick:m,onMouseLeave:v}=t,k=le(t,Pr),b=Ge(c,d,s),x=Ve(v),I=qe(m,d,s);return r?l.createElement(l.Fragment,null,r.map((p,f)=>l.createElement(Ye,j({index:f,key:"rectangle-".concat(p?.x,"-").concat(p?.y,"-").concat(p?.value,"-").concat(f),className:"recharts-bar-rectangle"},$e(k,p,f),{onMouseEnter:b(p,f),onMouseLeave:x(p,f),onClick:I(p,f)}),u?l.createElement(Lr,{shape:o,activeBar:u,baseProps:i,entry:p,index:f,dataKey:d}):l.createElement(Fr,{shape:o,baseProps:i,entry:p,index:f,dataKey:d})))):null}function Tr(e){var{props:a,previousRectanglesRef:r}=e,{data:t,layout:n,isAnimationActive:s,animationBegin:i,animationDuration:o,animationEasing:d,onAnimationEnd:u,onAnimationStart:c}=a,m=r.current,v=wa(a,"recharts-bar-"),[k,b]=l.useState(!1),x=!k,I=l.useCallback(()=>{typeof u=="function"&&u(),b(!1)},[u]),p=l.useCallback(()=>{typeof c=="function"&&c(),b(!0)},[c]);return l.createElement(Dr,{showLabels:x,rects:t},l.createElement(Pa,{animationId:v,begin:i,duration:o,isActive:s,easing:d,onAnimationEnd:I,onAnimationStart:p,key:v},f=>{var g=f===1?t:t?.map((h,A)=>{var y=m&&m[A];if(y)return w(w({},h),{},{x:z(y.x,h.x,f),y:z(y.y,h.y,f),width:z(y.width,h.width,f),height:z(y.height,h.height,f)});if(n==="horizontal"){var C=z(0,h.height,f),O=z(h.stackedBarStart,h.y,f);return w(w({},h),{},{y:O,height:C})}var B=z(0,h.width,f),E=z(h.stackedBarStart,h.x,f);return w(w({},h),{},{width:B,x:E})});return f>0&&(r.current=g??null),g==null?null:l.createElement(se,null,l.createElement(Mr,{props:a,data:g}))}),l.createElement(Ba,{label:a.label}),a.children)}function Kr(e){var a=l.useRef(null);return l.createElement(Tr,{previousRectanglesRef:a,props:e})}var Je=0,_r=(e,a)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:Ne(e,a)}};class Nr extends l.PureComponent{render(){var{hide:a,data:r,dataKey:t,className:n,xAxisId:s,yAxisId:i,needClip:o,background:d,id:u}=this.props;if(a||r==null)return null;var c=aa("recharts-bar",n),m=u;return l.createElement(se,{className:c,id:u},o&&l.createElement("defs",null,l.createElement(Ta,{clipPathId:m,xAxisId:s,yAxisId:i})),l.createElement(se,{className:"recharts-bar-rectangles",clipPath:o?"url(#clipPath-".concat(m,")"):void 0},l.createElement(zr,{data:r,dataKey:t,background:d,allOtherBarProps:this.props}),l.createElement(Kr,this.props)))}}var Wr={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:Je,xAxisId:0,yAxisId:0,zIndex:ye.bar};function $r(e){var{xAxisId:a,yAxisId:r,hide:t,legendType:n,minPointSize:s,activeBar:i,animationBegin:o,animationDuration:d,animationEasing:u,isAnimationActive:c}=e,{needClip:m}=Fa(a,r),v=ba(),k=Ke(),b=ka(e.children,Na),x=ie(f=>hr(f,e.id,k,b));if(v!=="vertical"&&v!=="horizontal")return null;var I,p=x?.[0];return p==null||p.height==null||p.width==null?I=0:I=v==="vertical"?p.height/2:p.width/2,l.createElement(Ma,{xAxisId:a,yAxisId:r,data:x,dataPointFormatter:_r,errorBarOffset:I},l.createElement(Nr,j({},e,{layout:v,needClip:m,data:x,xAxisId:a,yAxisId:r,hide:t,legendType:n,minPointSize:s,activeBar:i,animationBegin:o,animationDuration:d,animationEasing:u,isAnimationActive:c})))}function Gr(e){var{layout:a,barSettings:{dataKey:r,minPointSize:t},pos:n,bandSize:s,xAxis:i,yAxis:o,xAxisTicks:d,yAxisTicks:u,stackedData:c,displayedData:m,offset:v,cells:k,parentViewBox:b,dataStartIndex:x}=e,I=a==="horizontal"?o:i,p=c?I.scale.domain():null,f=Sa({numericAxis:I}),g=I.scale.map(f);return m.map((h,A)=>{var y,C,O,B,E,ce;if(c){var ke=c[A+x];if(ke==null)return null;y=Ia(ke,p)}else y=Ne(h,r),Array.isArray(y)||(y=[f,y]);var R=Qa(t,Je)(y[1],A);if(a==="horizontal"){var de,pe=o.scale.map(y[0]),N=o.scale.map(y[1]);if(pe==null||N==null)return null;C=Ee({axis:i,ticks:d,bandSize:s,offset:n.offset,entry:h,index:A}),O=(de=N??pe)!==null&&de!==void 0?de:void 0,B=n.size;var Se=pe-N;if(E=ja(Se)?0:Se,ce={x:C,y:v.top,width:B,height:v.height},Math.abs(R)>0&&Math.abs(E)<Math.abs(R)){var Ie=Ce(E||R)*(Math.abs(R)-Math.abs(E));O-=Ie,E+=Ie}}else{var ve=i.scale.map(y[0]),Ae=i.scale.map(y[1]);if(ve==null||Ae==null)return null;if(C=ve,O=Ee({axis:o,ticks:u,bandSize:s,offset:n.offset,entry:h,index:A}),B=Ae-ve,E=n.size,ce={x:v.left,y:O,width:v.width,height:E},Math.abs(R)>0&&Math.abs(B)<Math.abs(R)){var Ze=Ce(B||R)*(Math.abs(R)-Math.abs(B));B+=Ze}}if(C==null||O==null||B==null||E==null)return null;var Qe=w(w({},h),{},{stackedBarStart:g,x:C,y:O,width:B,height:E,value:c?y:y[1],payload:h,background:ce,tooltipPosition:{x:C+B/2,y:O+E/2},parentViewBox:b},k&&k[A]&&k[A].props);return Qe}).filter(Boolean)}function Vr(e){var a=ma(e,Wr),r=br(a.stackId),t=Ke();return l.createElement(fa,{id:a.id,type:"bar"},n=>l.createElement(l.Fragment,null,l.createElement(ha,{legendPayload:jr(a)}),l.createElement(Rr,{dataKey:a.dataKey,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:n}),l.createElement(ga,{type:"bar",id:n,data:void 0,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,stackId:r,hide:a.hide,barSize:a.barSize,minPointSize:a.minPointSize,maxBarSize:a.maxBarSize,isPanorama:t}),l.createElement(xe,{zIndex:a.zIndex},l.createElement($r,j({},a,{id:n})))))}var He=l.memo(Vr,va);He.displayName="Bar";var qr=["axis","item"],Ur=l.forwardRef((e,a)=>l.createElement(Ka,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:qr,tooltipPayloadSearcher:Ra,categoricalChartProps:e,ref:a}));const Xr=ea("text-small font-sans tracking-[-0.05em]",{variants:{size:{sm:"h-48",default:"h-72",lg:"h-96"}},defaultVariants:{size:"default"}}),M=["var(--color-sunflower)","var(--color-electric-blue)","var(--color-cool-purple)","var(--color-deep-blue)","var(--color-warm-purple)"],be=l.forwardRef(({className:e,size:a,data:r,series:t,showGrid:n=!0,showLegend:s=!0,showTooltip:i=!0,xAxisLabel:o,yAxisLabel:d,radius:u=0,stacked:c=!1,layout:m="horizontal",tooltipValueFormatter:v,xAxisValueFormatter:k,yAxisValueFormatter:b,...x},I)=>{const p=l.useMemo(()=>{if(t)return t;const g=r[0];return g?Object.keys(g).filter(A=>A!=="label"&&typeof g[A]=="number").map((A,y)=>({key:A,name:A.charAt(0).toUpperCase()+A.slice(1),color:M[y%M.length]})):[]},[r,t]),f=m==="vertical";return S.jsx("div",{ref:I,className:ra(Xr({size:a,className:e})),role:"img",...x,children:S.jsx(za,{width:"100%",height:"100%",minWidth:100,minHeight:100,children:S.jsxs(Ur,{data:r,layout:m,margin:{top:5,right:30,left:d?20:0,bottom:o?20:5},children:[n&&S.jsx(_a,{strokeDasharray:"3 3",stroke:"var(--color-border)",vertical:!f,horizontal:f}),f?S.jsxs(S.Fragment,{children:[S.jsx(Oe,{type:"number",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:k,label:o?{value:o,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),S.jsx(je,{type:"category",dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:b,label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0})]}):S.jsxs(S.Fragment,{children:[S.jsx(Oe,{dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:k,label:o?{value:o,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),S.jsx(je,{stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},tickFormatter:b,label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0})]}),i&&S.jsx(Da,{cursor:{fill:"rgba(0, 0, 0, 0.05)"},content:({active:g,payload:h,label:A})=>!g||!h?.length?null:S.jsxs("div",{style:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)",borderRadius:"4px",fontFamily:"var(--font-sans)",fontSize:"14px",padding:"10px"},children:[S.jsx("p",{style:{color:"var(--color-secondary)",fontWeight:400,margin:"0 0 4px"},children:A}),[...h].reverse().map(y=>S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[S.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:2,backgroundColor:y.color,flexShrink:0}}),S.jsxs("span",{style:{color:"var(--color-secondary)"},children:[y.name,":"," ",v?v(y.value,y.dataKey):y.value]})]},String(y.name)))]})}),s&&S.jsx(La,{wrapperStyle:{fontFamily:"var(--font-sans)",fontSize:"14px"},content:()=>S.jsx("ul",{style:{display:"flex",justifyContent:"center",gap:"16px",listStyle:"none",margin:0,padding:0},children:p.map((g,h)=>S.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[S.jsx("span",{style:{display:"inline-block",width:14,height:10,backgroundColor:g.color||M[h%M.length]}}),S.jsx("span",{style:{color:"var(--color-secondary)",fontSize:"14px",fontFamily:"var(--font-sans)"},children:g.name})]},g.key))})}),p.map((g,h)=>S.jsx(He,{dataKey:g.key,name:g.name,fill:g.color||M[h%M.length],radius:u,stackId:c?"stack":void 0},g.key))]})})})});be.displayName="BarChart";be.__docgenInfo={description:`BarChart component for displaying categorical data comparisons.
Built with Recharts and styled according to Engrate design system.

@example
\`\`\`tsx
<BarChart
  data={[
    { label: 'Jan', revenue: 4000, expenses: 2400 },
    { label: 'Feb', revenue: 3000, expenses: 1398 },
    { label: 'Mar', revenue: 2000, expenses: 9800 },
  ]}
  series={[
    { key: 'revenue', name: 'Revenue' },
    { key: 'expenses', name: 'Expenses', color: '#0080FF' },
  ]}
  aria-label="Revenue vs expenses comparison"
/>
\`\`\``,methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartDataPoint"}],raw:"BarChartDataPoint[]"},description:"Data points to render"},series:{required:!1,tsType:{name:"Array",elements:[{name:"BarChartSeriesConfig"}],raw:"BarChartSeriesConfig[]"},description:"Configuration for data series. If not provided, all numeric keys except 'label' will be rendered"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"true",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show tooltips on hover",defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},radius:{required:!1,tsType:{name:"number"},description:"Bar corner radius",defaultValue:{value:"0",computed:!1}},stacked:{required:!1,tsType:{name:"boolean"},description:"Stack bars on top of each other",defaultValue:{value:"false",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout orientation",defaultValue:{value:"'horizontal'",computed:!1}},tooltipValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, seriesKey: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"string"},name:"seriesKey"}],return:{name:"string"}}},description:"Format tooltip values (e.g. add currency, custom rounding)"},xAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format x-axis tick values"},yAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format y-axis tick values"}},composes:["VariantProps"]};const it={title:"Charts/BarChart",component:be,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the chart"},showGrid:{control:"boolean",description:"Show grid lines"},showLegend:{control:"boolean",description:"Show legend"},showTooltip:{control:"boolean",description:"Show tooltip on hover"},stacked:{control:"boolean",description:"Stack bars on top of each other"},radius:{control:{type:"range",min:0,max:10},description:"Bar corner radius"},layout:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},xAxisLabel:{control:"text",description:"Label for the x-axis"},yAxisLabel:{control:"text",description:"Label for the y-axis"}},decorators:[e=>S.jsx("div",{style:{width:"100%",maxWidth:"800px",minHeight:"300px"},children:S.jsx(e,{})})]},P=[{label:"Jan",revenue:4e3,expenses:2400,profit:1600},{label:"Feb",revenue:3e3,expenses:1398,profit:1602},{label:"Mar",revenue:2e3,expenses:9800,profit:-7800},{label:"Apr",revenue:2780,expenses:3908,profit:-1128},{label:"May",revenue:1890,expenses:4800,profit:-2910},{label:"Jun",revenue:2390,expenses:3800,profit:-1410},{label:"Jul",revenue:3490,expenses:4300,profit:-810}],G={args:{data:P,series:[{key:"revenue",name:"Revenue"}],"aria-label":"Monthly revenue chart"}},V={args:{data:P,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],"aria-label":"Revenue vs expenses comparison"}},q={args:{data:P,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"},{key:"profit",name:"Profit",color:"#9B4ED8"}],"aria-label":"Financial metrics overview"}},U={args:{data:P,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,"aria-label":"Stacked revenue and expenses"}},X={args:{data:P.slice(0,5),series:[{key:"revenue",name:"Revenue"}],layout:"vertical","aria-label":"Horizontal bar chart"}},Y={args:{data:P,series:[{key:"revenue",name:"Revenue"}],radius:4,"aria-label":"Chart with rounded bars"}},J={args:{data:P,series:[{key:"revenue",name:"Revenue ($)"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)","aria-label":"Monthly revenue with labeled axes"}},H={args:{data:P,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,"aria-label":"Revenue chart without grid"}},Z={args:{data:P,series:[{key:"revenue",name:"Revenue"}],showLegend:!1,"aria-label":"Revenue chart without legend"}},Q={args:{data:P,series:[{key:"revenue",name:"Revenue"}],size:"sm","aria-label":"Small revenue chart"}},ee={args:{data:P,series:[{key:"revenue",name:"Revenue"}],size:"lg","aria-label":"Large revenue chart"}},ae={args:{data:P,"aria-label":"Chart with auto-detected series"}},re={args:{data:P,series:[{key:"revenue",name:"Revenue",color:"#721B5D"},{key:"expenses",name:"Expenses",color:"#002FA7"}],"aria-label":"Chart with custom colors"}},te={args:{data:P,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,showLegend:!1,radius:2,"aria-label":"Minimal bar chart"}},ne={args:{data:P,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,radius:4,"aria-label":"Stacked chart with rounded bars"}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    'aria-label': 'Monthly revenue chart'
  }
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    stacked: true,
    'aria-label': 'Stacked revenue and expenses'
  }
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData.slice(0, 5),
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    layout: 'vertical',
    'aria-label': 'Horizontal bar chart'
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    radius: 4,
    'aria-label': 'Chart with rounded bars'
  }
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    'aria-label': 'Revenue chart without grid'
  }
}`,...H.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showLegend: false,
    'aria-label': 'Revenue chart without legend'
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'sm',
    'aria-label': 'Small revenue chart'
  }
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'lg',
    'aria-label': 'Large revenue chart'
  }
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    // No series prop - will auto-detect from data
    'aria-label': 'Chart with auto-detected series'
  }
}`,...ae.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    showLegend: false,
    radius: 2,
    'aria-label': 'Minimal bar chart'
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
    stacked: true,
    radius: 4,
    'aria-label': 'Stacked chart with rounded bars'
  }
}`,...ne.parameters?.docs?.source}}};const ot=["Default","MultiSeries","ThreeSeries","Stacked","VerticalLayout","RoundedBars","WithAxisLabels","WithoutGrid","WithoutLegend","SmallSize","LargeSize","AutoDetectSeries","CustomColors","Minimal","StackedRounded"];export{ae as AutoDetectSeries,re as CustomColors,G as Default,ee as LargeSize,te as Minimal,V as MultiSeries,Y as RoundedBars,Q as SmallSize,U as Stacked,ne as StackedRounded,q as ThreeSeries,X as VerticalLayout,J as WithAxisLabels,H as WithoutGrid,Z as WithoutLegend,ot as __namedExportsOrder,it as default};
