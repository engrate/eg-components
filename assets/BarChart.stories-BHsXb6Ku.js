import{j as I}from"./jsx-runtime-u17CrQMm.js";import{c as ea}from"./index-DDA3KdpW.js";import{r as l}from"./iframe-DsOMdu-l.js";import{a as aa,c as ra}from"./utils-ryREhF4q.js";import{i as ta,a as ce,g as me,b as fe,c as na,d as je,e as we,S as sa,f as L,s as ia,h as oa,j as K,k as la,l as F,m as T,n as Me,o as Fe,p as Te,q as ca,r as ua,t as Pe,u as da,v as Be,w as va,L as se,x as pa,y as ma,D as xe,z as Ke,R as fa,A as ha,B as ya,Z as ge,C as _e,E as xa,F as ga,G as ba,H as ka,I as ie,J as Ne,K as Sa,M as Ia,N as Ee,O as We,P as Aa,Q as $e,T as wa,U as Pa,V as D,W as Ba,X as Ea,Y as Ca,_ as Oa,$ as Ra,a0 as Ce,a1 as za,a2 as Da,a3 as La,a4 as ja}from"./CategoricalChart-YEek1Vg8.js";import{u as Ma,S as Fa,G as Ta,C as Ka,a as _a,X as Oe,Y as Re}from"./CartesianChart-BOuQROgB.js";import{C as Na,u as Ge,a as Ve,b as qe}from"./tooltipContext-n-rD2h4T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3bAx03m.js";import"./index-DRI4W-9D.js";import"./index-DmNWo7rA.js";var ze=(e,a,r)=>{var t=r??e;if(!ce(t))return me(t,a,0)},Wa=(e,a,r)=>{var t={},n=e.filter(ta),s=e.filter(c=>c.stackId==null),i=n.reduce((c,u)=>{var m=c[u.stackId];return m==null&&(m=[]),m.push(u),c[u.stackId]=m,c},t),o=Object.entries(i).map(c=>{var u,[m,f]=c,b=f.map(y=>y.dataKey),g=ze(a,r,(u=f[0])===null||u===void 0?void 0:u.barSize);return{stackId:m,dataKeys:b,barSize:g}}),d=s.map(c=>{var u=[c.dataKey].filter(f=>f!=null),m=ze(a,r,c.barSize);return{stackId:void 0,dataKeys:u,barSize:m}});return[...o,...d]};function De(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function W(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?De(Object(r),!0).forEach(function(t){$a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $a(e,a,r){return(a=Ga(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ga(e){var a=Va(e,"string");return typeof a=="symbol"?a:a+""}function Va(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function qa(e,a,r,t,n){var s,i=t.length;if(!(i<1)){var o=me(e,r,0,!0),d,c=[];if(fe((s=t[0])===null||s===void 0?void 0:s.barSize)){var u=!1,m=r/i,f=t.reduce((p,S)=>p+(S.barSize||0),0);f+=(i-1)*o,f>=r&&(f-=(i-1)*o,o=0),f>=r&&m>0&&(u=!0,m*=.9,f=i*m);var b=(r-f)/2>>0,g={offset:b-o,size:0};d=t.reduce((p,S)=>{var x,P={stackId:S.stackId,dataKeys:S.dataKeys,position:{offset:g.offset+g.size+o,size:u?m:(x=S.barSize)!==null&&x!==void 0?x:0}},k=[...p,P];return g=P.position,k},c)}else{var y=me(a,r,0,!0);r-2*y-(i-1)*o<=0&&(o=0);var h=(r-2*y-(i-1)*o)/i;h>1&&(h>>=0);var v=fe(n)?Math.min(h,n):h;d=t.reduce((p,S,x)=>[...p,{stackId:S.stackId,dataKeys:S.dataKeys,position:{offset:y+(h+o)*x+(h-v)/2,size:v}}],c)}return d}}var Ua=(e,a,r,t,n,s,i)=>{var o=ce(i)?a:i,d=qa(r,t,n!==s?n:s,e,o);return n!==s&&d!=null&&(d=d.map(c=>W(W({},c),{},{position:W(W({},c.position),{},{offset:c.position.offset-n/2})}))),d},Xa=(e,a)=>{var r=na(a);if(!(!e||r==null||a==null)){var{stackId:t}=a;if(t!=null){var n=e[t];if(n){var{stackedData:s}=n;if(s)return s.find(i=>i.key===r)}}}},Ya=(e,a)=>{if(!(e==null||a==null)){var r=e.find(t=>t.stackId===a.stackId&&a.dataKey!=null&&t.dataKeys.includes(a.dataKey));if(r!=null)return r.position}};function Ja(e,a){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&fe(e.zIndex)?e.zIndex:a}function j(e,a){var r,t;return(r=(t=e.graphicalItems.cartesianItems.find(n=>n.id===a))===null||t===void 0?void 0:t.xAxisId)!==null&&r!==void 0?r:je}function M(e,a){var r,t;return(r=(t=e.graphicalItems.cartesianItems.find(n=>n.id===a))===null||t===void 0?void 0:t.yAxisId)!==null&&r!==void 0?r:je}var Ha="Invariant failed";function Za(e,a){throw new Error(Ha)}function he(){return he=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},he.apply(null,arguments)}function oe(e){return l.createElement(sa,he({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var Qa=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(t,n)=>{if(we(a))return a;var s=we(t)||ce(t);return s?a(t,n):(s||Za(),r)}},er=(e,a,r)=>r,ar=(e,a)=>a,N=L([Fe,ar],(e,a)=>e.filter(r=>r.type==="bar").find(r=>r.id===a)),rr=L([N],e=>e?.maxBarSize),tr=(e,a,r,t)=>t,nr=L([K,Fe,j,M,er],(e,a,r,t,n)=>a.filter(s=>e==="horizontal"?s.xAxisId===r:s.yAxisId===t).filter(s=>s.isPanorama===n).filter(s=>s.hide===!1).filter(s=>s.type==="bar")),sr=(e,a,r)=>{var t=K(e),n=j(e,a),s=M(e,a);if(!(n==null||s==null))return t==="horizontal"?Pe(e,"yAxis",s,r):Pe(e,"xAxis",n,r)},ir=(e,a)=>{var r=K(e),t=j(e,a),n=M(e,a);if(!(t==null||n==null))return r==="horizontal"?Be(e,"xAxis",t):Be(e,"yAxis",n)},or=L([nr,da,ir],Wa),lr=(e,a,r)=>{var t,n,s=N(e,a);if(s==null)return 0;var i=j(e,a),o=M(e,a);if(i==null||o==null)return 0;var d=K(e),c=Te(e),{maxBarSize:u}=s,m=ce(u)?c:u,f,b;return d==="horizontal"?(f=F(e,"xAxis",i,r),b=T(e,"xAxis",i,r)):(f=F(e,"yAxis",o,r),b=T(e,"yAxis",o,r)),(t=(n=Me(f,b,!0))!==null&&n!==void 0?n:m)!==null&&t!==void 0?t:0},Ue=(e,a,r)=>{var t=K(e),n=j(e,a),s=M(e,a);if(!(n==null||s==null)){var i,o;return t==="horizontal"?(i=F(e,"xAxis",n,r),o=T(e,"xAxis",n,r)):(i=F(e,"yAxis",s,r),o=T(e,"yAxis",s,r)),Me(i,o)}},cr=L([or,Te,ca,ua,lr,Ue,rr],Ua),ur=(e,a,r)=>{var t=j(e,a);if(t!=null)return F(e,"xAxis",t,r)},dr=(e,a,r)=>{var t=M(e,a);if(t!=null)return F(e,"yAxis",t,r)},vr=(e,a,r)=>{var t=j(e,a);if(t!=null)return T(e,"xAxis",t,r)},pr=(e,a,r)=>{var t=M(e,a);if(t!=null)return T(e,"yAxis",t,r)},mr=L([cr,N],Ya),fr=L([sr,N],Xa),hr=L([ia,oa,ur,dr,vr,pr,mr,K,la,Ue,fr,N,tr],(e,a,r,t,n,s,i,o,d,c,u,m,f)=>{var{chartData:b,dataStartIndex:g,dataEndIndex:y}=d;if(!(m==null||i==null||a==null||o!=="horizontal"&&o!=="vertical"||r==null||t==null||n==null||s==null||c==null)){var{data:h}=m,v;if(h!=null&&h.length>0?v=h:v=b?.slice(g,y+1),v!=null)return Gr({layout:o,barSettings:m,pos:i,parentViewBox:a,bandSize:c,xAxis:r,yAxis:t,xAxisTicks:n,yAxisTicks:s,stackedData:u,displayedData:v,offset:e,cells:f,dataStartIndex:g})}}),yr=["index"];function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},ye.apply(null,arguments)}function xr(e,a){if(e==null)return{};var r,t,n=gr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function gr(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var Xe=l.createContext(void 0),br=e=>{var a=l.useContext(Xe);if(a!=null)return a.stackId;if(e!=null)return va(e)},kr=(e,a)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(a),Sr=e=>{var a=l.useContext(Xe);if(a!=null){var{stackId:r}=a;return"url(#".concat(kr(r,e),")")}},Ye=e=>{var{index:a}=e,r=xr(e,yr),t=Sr(a);return l.createElement(se,ye({className:"recharts-bar-stack-layer",clipPath:t},r))},Ir=["onMouseEnter","onMouseLeave","onClick"],Ar=["value","background","tooltipPosition"],wr=["id"],Pr=["onMouseEnter","onClick","onMouseLeave"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},R.apply(null,arguments)}function Le(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function A(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Le(Object(r),!0).forEach(function(t){Br(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Br(e,a,r){return(a=Er(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Er(e){var a=Cr(e,"string");return typeof a=="symbol"?a:a+""}function Cr(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var t=r.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function le(e,a){if(e==null)return{};var r,t,n=Or(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Or(e,a){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;r[t]=e[t]}return r}var Rr=e=>{var{dataKey:a,name:r,fill:t,legendType:n,hide:s}=e;return[{inactive:s,dataKey:a,type:n,color:t,value:_e(r,a),payload:e}]},zr=l.memo(e=>{var{dataKey:a,stroke:r,strokeWidth:t,fill:n,name:s,hide:i,unit:o,tooltipType:d,id:c}=e,u={dataDefinedOnItem:void 0,getPosition:ga,settings:{stroke:r,strokeWidth:t,fill:n,dataKey:a,nameKey:void 0,name:_e(s,a),hide:i,type:d,color:n,unit:o,graphicalItemId:c}};return l.createElement(xa,{tooltipEntrySettings:u})});function Dr(e){var a=ie(We),{data:r,dataKey:t,background:n,allOtherBarProps:s}=e,{onMouseEnter:i,onMouseLeave:o,onClick:d}=s,c=le(s,Ir),u=Ge(i,t,s.id),m=Ve(o),f=qe(d,t,s.id);if(!n||r==null)return null;var b=Aa(n);return l.createElement(ge,{zIndex:Ja(n,xe.barBackground)},r.map((g,y)=>{var{value:h,background:v,tooltipPosition:p}=g,S=le(g,Ar);if(!v)return null;var x=u(g,y),P=m(g,y),k=f(g,y),C=A(A(A(A(A({option:n,isActive:String(y)===a},S),{},{fill:"#eee"},v),b),$e(c,g,y)),{},{onMouseEnter:x,onMouseLeave:P,onClick:k,dataKey:t,index:y,className:"recharts-bar-background-rectangle"});return l.createElement(oe,R({key:"background-bar-".concat(y)},C))}))}function Lr(e){var{showLabels:a,children:r,rects:t}=e,n=t?.map(s=>{var i={x:s.x,y:s.y,width:s.width,lowerWidth:s.width,upperWidth:s.width,height:s.height};return A(A({},i),{},{value:s.value,payload:s.payload,parentViewBox:s.parentViewBox,viewBox:i,fill:s.fill})});return l.createElement(Ea,{value:a?n:void 0},r)}function jr(e){var{shape:a,activeBar:r,baseProps:t,entry:n,index:s,dataKey:i}=e,o=ie(We),d=ie(Oa),c=r&&String(s)===o&&(d==null||i===d),u=c?r:a;return c?l.createElement(ge,{zIndex:xe.activeBar},l.createElement(Ye,{index:s},l.createElement(oe,R({},t,{name:String(t.name)},n,{isActive:c,option:u,index:s,dataKey:i})))):l.createElement(oe,R({},t,{name:String(t.name)},n,{isActive:c,option:u,index:s,dataKey:i}))}function Mr(e){var{shape:a,baseProps:r,entry:t,index:n,dataKey:s}=e;return l.createElement(oe,R({},r,{name:String(r.name)},t,{isActive:!1,option:a,index:n,dataKey:s}))}function Fr(e){var a,{data:r,props:t}=e,n=(a=Ca(t))!==null&&a!==void 0?a:{},{id:s}=n,i=le(n,wr),{shape:o,dataKey:d,activeBar:c}=t,{onMouseEnter:u,onClick:m,onMouseLeave:f}=t,b=le(t,Pr),g=Ge(u,d,s),y=Ve(f),h=qe(m,d,s);return r?l.createElement(l.Fragment,null,r.map((v,p)=>l.createElement(Ye,R({index:p,key:"rectangle-".concat(v?.x,"-").concat(v?.y,"-").concat(v?.value,"-").concat(p),className:"recharts-bar-rectangle"},$e(b,v,p),{onMouseEnter:g(v,p),onMouseLeave:y(v,p),onClick:h(v,p)}),c?l.createElement(jr,{shape:o,activeBar:c,baseProps:i,entry:v,index:p,dataKey:d}):l.createElement(Mr,{shape:o,baseProps:i,entry:v,index:p,dataKey:d})))):null}function Tr(e){var{props:a,previousRectanglesRef:r}=e,{data:t,layout:n,isAnimationActive:s,animationBegin:i,animationDuration:o,animationEasing:d,onAnimationEnd:c,onAnimationStart:u}=a,m=r.current,f=wa(a,"recharts-bar-"),[b,g]=l.useState(!1),y=!b,h=l.useCallback(()=>{typeof c=="function"&&c(),g(!1)},[c]),v=l.useCallback(()=>{typeof u=="function"&&u(),g(!0)},[u]);return l.createElement(Lr,{showLabels:y,rects:t},l.createElement(Pa,{animationId:f,begin:i,duration:o,isActive:s,easing:d,onAnimationEnd:h,onAnimationStart:v,key:f},p=>{var S=p===1?t:t?.map((x,P)=>{var k=m&&m[P];if(k)return A(A({},x),{},{x:D(k.x,x.x,p),y:D(k.y,x.y,p),width:D(k.width,x.width,p),height:D(k.height,x.height,p)});if(n==="horizontal"){var C=D(0,x.height,p),O=D(x.stackedBarStart,x.y,p);return A(A({},x),{},{y:O,height:C})}var B=D(0,x.width,p),E=D(x.stackedBarStart,x.x,p);return A(A({},x),{},{width:B,x:E})});return p>0&&(r.current=S??null),S==null?null:l.createElement(se,null,l.createElement(Fr,{props:a,data:S}))}),l.createElement(Ba,{label:a.label}),a.children)}function Kr(e){var a=l.useRef(null);return l.createElement(Tr,{previousRectanglesRef:a,props:e})}var Je=0,_r=(e,a)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:Ne(e,a)}};class Nr extends l.PureComponent{render(){var{hide:a,data:r,dataKey:t,className:n,xAxisId:s,yAxisId:i,needClip:o,background:d,id:c}=this.props;if(a||r==null)return null;var u=aa("recharts-bar",n),m=c;return l.createElement(se,{className:u,id:c},o&&l.createElement("defs",null,l.createElement(Ta,{clipPathId:m,xAxisId:s,yAxisId:i})),l.createElement(se,{className:"recharts-bar-rectangles",clipPath:o?"url(#clipPath-".concat(m,")"):void 0},l.createElement(Dr,{data:r,dataKey:t,background:d,allOtherBarProps:this.props}),l.createElement(Kr,this.props)))}}var Wr={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:Je,xAxisId:0,yAxisId:0,zIndex:xe.bar};function $r(e){var{xAxisId:a,yAxisId:r,hide:t,legendType:n,minPointSize:s,activeBar:i,animationBegin:o,animationDuration:d,animationEasing:c,isAnimationActive:u}=e,{needClip:m}=Ma(a,r),f=ba(),b=Ke(),g=ka(e.children,Na),y=ie(p=>hr(p,e.id,b,g));if(f!=="vertical"&&f!=="horizontal")return null;var h,v=y?.[0];return v==null||v.height==null||v.width==null?h=0:h=f==="vertical"?v.height/2:v.width/2,l.createElement(Fa,{xAxisId:a,yAxisId:r,data:y,dataPointFormatter:_r,errorBarOffset:h},l.createElement(Nr,R({},e,{layout:f,needClip:m,data:y,xAxisId:a,yAxisId:r,hide:t,legendType:n,minPointSize:s,activeBar:i,animationBegin:o,animationDuration:d,animationEasing:c,isAnimationActive:u})))}function Gr(e){var{layout:a,barSettings:{dataKey:r,minPointSize:t},pos:n,bandSize:s,xAxis:i,yAxis:o,xAxisTicks:d,yAxisTicks:c,stackedData:u,displayedData:m,offset:f,cells:b,parentViewBox:g,dataStartIndex:y}=e,h=a==="horizontal"?o:i,v=u?h.scale.domain():null,p=Sa({numericAxis:h}),S=h.scale.map(p);return m.map((x,P)=>{var k,C,O,B,E,ue;if(u){var ke=u[P+y];if(ke==null)return null;k=Ia(ke,v)}else k=Ne(x,r),Array.isArray(k)||(k=[p,k]);var z=Qa(t,Je)(k[1],P);if(a==="horizontal"){var de,ve=o.scale.map(k[0]),_=o.scale.map(k[1]);if(ve==null||_==null)return null;C=Ee({axis:i,ticks:d,bandSize:s,offset:n.offset,entry:x,index:P}),O=(de=_??ve)!==null&&de!==void 0?de:void 0,B=n.size;var Se=ve-_;if(E=Ra(Se)?0:Se,ue={x:C,y:f.top,width:B,height:f.height},Math.abs(z)>0&&Math.abs(E)<Math.abs(z)){var Ie=Ce(E||z)*(Math.abs(z)-Math.abs(E));O-=Ie,E+=Ie}}else{var pe=i.scale.map(k[0]),Ae=i.scale.map(k[1]);if(pe==null||Ae==null)return null;if(C=pe,O=Ee({axis:o,ticks:c,bandSize:s,offset:n.offset,entry:x,index:P}),B=Ae-pe,E=n.size,ue={x:f.left,y:O,width:f.width,height:E},Math.abs(z)>0&&Math.abs(B)<Math.abs(z)){var Ze=Ce(B||z)*(Math.abs(z)-Math.abs(B));B+=Ze}}if(C==null||O==null||B==null||E==null)return null;var Qe=A(A({},x),{},{stackedBarStart:S,x:C,y:O,width:B,height:E,value:u?k:k[1],payload:x,background:ue,tooltipPosition:{x:C+B/2,y:O+E/2},parentViewBox:g},b&&b[P]&&b[P].props);return Qe}).filter(Boolean)}function Vr(e){var a=ma(e,Wr),r=br(a.stackId),t=Ke();return l.createElement(fa,{id:a.id,type:"bar"},n=>l.createElement(l.Fragment,null,l.createElement(ha,{legendPayload:Rr(a)}),l.createElement(zr,{dataKey:a.dataKey,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:n}),l.createElement(ya,{type:"bar",id:n,data:void 0,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,stackId:r,hide:a.hide,barSize:a.barSize,minPointSize:a.minPointSize,maxBarSize:a.maxBarSize,isPanorama:t}),l.createElement(ge,{zIndex:a.zIndex},l.createElement($r,R({},a,{id:n})))))}var He=l.memo(Vr,pa);He.displayName="Bar";var qr=["axis","item"],Ur=l.forwardRef((e,a)=>l.createElement(Ka,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:qr,tooltipPayloadSearcher:za,categoricalChartProps:e,ref:a}));const Xr=ea("text-small font-sans tracking-[-0.05em]",{variants:{size:{sm:"h-48",default:"h-72",lg:"h-96"}},defaultVariants:{size:"default"}}),$=["var(--color-sunflower)","var(--color-electric-blue)","var(--color-cool-purple)","var(--color-deep-blue)","var(--color-warm-purple)"],be=l.forwardRef(({className:e,size:a,data:r,series:t,showGrid:n=!0,showLegend:s=!0,showTooltip:i=!0,xAxisLabel:o,yAxisLabel:d,radius:c=0,stacked:u=!1,layout:m="horizontal",...f},b)=>{const g=l.useMemo(()=>{if(t)return t;const h=r[0];return h?Object.keys(h).filter(p=>p!=="label"&&typeof h[p]=="number").map((p,S)=>({key:p,name:p.charAt(0).toUpperCase()+p.slice(1),color:$[S%$.length]})):[]},[r,t]),y=m==="vertical";return I.jsx("div",{ref:b,className:ra(Xr({size:a,className:e})),role:"img",...f,children:I.jsx(Da,{width:"100%",height:"100%",minWidth:100,minHeight:100,children:I.jsxs(Ur,{data:r,layout:m,margin:{top:5,right:30,left:d?20:0,bottom:o?20:5},children:[n&&I.jsx(_a,{strokeDasharray:"3 3",stroke:"var(--color-border)",vertical:!y,horizontal:y}),y?I.jsxs(I.Fragment,{children:[I.jsx(Oe,{type:"number",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:o?{value:o,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),I.jsx(Re,{type:"category",dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0})]}):I.jsxs(I.Fragment,{children:[I.jsx(Oe,{dataKey:"label",stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:o?{value:o,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:12}:void 0}),I.jsx(Re,{stroke:"var(--color-secondary)",fontSize:12,tickLine:!1,axisLine:{stroke:"var(--color-primary)"},label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:12}:void 0})]}),i&&I.jsx(La,{contentStyle:{backgroundColor:"var(--color-white)",border:"1px solid var(--color-border)",borderRadius:"4px",fontFamily:"var(--font-sans)",fontSize:"14px",color:"var(--color-primary)"},labelStyle:{color:"var(--color-secondary)",fontWeight:400},cursor:{fill:"rgba(0, 0, 0, 0.05)"}}),s&&I.jsx(ja,{wrapperStyle:{fontFamily:"var(--font-sans)",fontSize:"14px",color:"var(--color-secondary)"}}),g.map((h,v)=>I.jsx(He,{dataKey:h.key,name:h.name,fill:h.color||$[v%$.length],radius:c,stackId:u?"stack":void 0},h.key))]})})})});be.displayName="BarChart";be.__docgenInfo={description:`BarChart component for displaying categorical data comparisons.
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
\`\`\``,methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartDataPoint"}],raw:"BarChartDataPoint[]"},description:"Data points to render"},series:{required:!1,tsType:{name:"Array",elements:[{name:"BarChartSeriesConfig"}],raw:"BarChartSeriesConfig[]"},description:"Configuration for data series. If not provided, all numeric keys except 'label' will be rendered"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"true",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show tooltips on hover",defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},radius:{required:!1,tsType:{name:"number"},description:"Bar corner radius",defaultValue:{value:"0",computed:!1}},stacked:{required:!1,tsType:{name:"boolean"},description:"Stack bars on top of each other",defaultValue:{value:"false",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout orientation",defaultValue:{value:"'horizontal'",computed:!1}}},composes:["VariantProps"]};const it={title:"Charts/BarChart",component:be,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the chart"},showGrid:{control:"boolean",description:"Show grid lines"},showLegend:{control:"boolean",description:"Show legend"},showTooltip:{control:"boolean",description:"Show tooltip on hover"},stacked:{control:"boolean",description:"Stack bars on top of each other"},radius:{control:{type:"range",min:0,max:10},description:"Bar corner radius"},layout:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},xAxisLabel:{control:"text",description:"Label for the x-axis"},yAxisLabel:{control:"text",description:"Label for the y-axis"}},decorators:[e=>I.jsx("div",{style:{width:"100%",maxWidth:"800px",minHeight:"300px"},children:I.jsx(e,{})})]},w=[{label:"Jan",revenue:4e3,expenses:2400,profit:1600},{label:"Feb",revenue:3e3,expenses:1398,profit:1602},{label:"Mar",revenue:2e3,expenses:9800,profit:-7800},{label:"Apr",revenue:2780,expenses:3908,profit:-1128},{label:"May",revenue:1890,expenses:4800,profit:-2910},{label:"Jun",revenue:2390,expenses:3800,profit:-1410},{label:"Jul",revenue:3490,expenses:4300,profit:-810}],G={args:{data:w,series:[{key:"revenue",name:"Revenue"}],"aria-label":"Monthly revenue chart"}},V={args:{data:w,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],"aria-label":"Revenue vs expenses comparison"}},q={args:{data:w,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"},{key:"profit",name:"Profit",color:"#9B4ED8"}],"aria-label":"Financial metrics overview"}},U={args:{data:w,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,"aria-label":"Stacked revenue and expenses"}},X={args:{data:w.slice(0,5),series:[{key:"revenue",name:"Revenue"}],layout:"vertical","aria-label":"Horizontal bar chart"}},Y={args:{data:w,series:[{key:"revenue",name:"Revenue"}],radius:4,"aria-label":"Chart with rounded bars"}},J={args:{data:w,series:[{key:"revenue",name:"Revenue ($)"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)","aria-label":"Monthly revenue with labeled axes"}},H={args:{data:w,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,"aria-label":"Revenue chart without grid"}},Z={args:{data:w,series:[{key:"revenue",name:"Revenue"}],showLegend:!1,"aria-label":"Revenue chart without legend"}},Q={args:{data:w,series:[{key:"revenue",name:"Revenue"}],size:"sm","aria-label":"Small revenue chart"}},ee={args:{data:w,series:[{key:"revenue",name:"Revenue"}],size:"lg","aria-label":"Large revenue chart"}},ae={args:{data:w,"aria-label":"Chart with auto-detected series"}},re={args:{data:w,series:[{key:"revenue",name:"Revenue",color:"#721B5D"},{key:"expenses",name:"Expenses",color:"#002FA7"}],"aria-label":"Chart with custom colors"}},te={args:{data:w,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,showLegend:!1,radius:2,"aria-label":"Minimal bar chart"}},ne={args:{data:w,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,radius:4,"aria-label":"Stacked chart with rounded bars"}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
