import{j as b}from"./jsx-runtime-u17CrQMm.js";import{c as na}from"./index-HTk8j2sO.js";import{r as o}from"./iframe-Chgc20WG.js";import{a as ta,c as sa}from"./utils-kmX6UHYG.js";import{i as ia,a as de,g as he,b as ye,c as oa,d as Te,e as Be,S as la,f as L,s as ca,h as ua,j as N,k as da,l as M,m as K,n as Me,o as Ke,p as Ne,q as ma,r as pa,t as Ce,u as va,v as Ee,w as fa,L as oe,x as ha,y as ya,D as be,z as We,R as ga,A as xa,B as ba,Z as ke,C as _e,E as ka,F as Sa,G as wa,H as Ia,I as le,J as Ge,K as Aa,M as Pa,N as Oe,O as $e,P as Ba,Q as qe,T as Ca,U as Ea,V as z,W as Oa,X as ja,Y as Ra,_ as za,$ as La,a0 as je,a1 as Da,a2 as Fa,a3 as Ta}from"./CategoricalChart-CGqXqJkF.js";import{u as Ma,S as Ka,G as Na,C as Wa,a as _a,X as Re,Y as ze}from"./CartesianChart-CpdBaU5c.js";import{C as Ga,u as Ve,a as He,b as Ue}from"./tooltipContext-BB5MIESw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Crve--_8.js";import"./index-D6x42owc.js";import"./index-c6y_ROyy.js";var Le=(e,a,r)=>{var n=r??e;if(!de(n))return he(n,a,0)},$a=(e,a,r)=>{var n={},t=e.filter(ia),s=e.filter(c=>c.stackId==null),i=t.reduce((c,u)=>{var v=c[u.stackId];return v==null&&(v=[]),v.push(u),c[u.stackId]=v,c},n),l=Object.entries(i).map(c=>{var u,[v,p]=c,k=p.map(y=>y.dataKey),x=Le(a,r,(u=p[0])===null||u===void 0?void 0:u.barSize);return{stackId:v,dataKeys:k,barSize:x}}),d=s.map(c=>{var u=[c.dataKey].filter(p=>p!=null),v=Le(a,r,c.barSize);return{stackId:void 0,dataKeys:u,barSize:v}});return[...l,...d]};function De(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?De(Object(r),!0).forEach(function(n){qa(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qa(e,a,r){return(a=Va(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Va(e){var a=Ha(e,"string");return typeof a=="symbol"?a:a+""}function Ha(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ua(e,a,r,n,t){var s,i=n.length;if(!(i<1)){var l=he(e,r,0,!0),d,c=[];if(ye((s=n[0])===null||s===void 0?void 0:s.barSize)){var u=!1,v=r/i,p=n.reduce((f,I)=>f+(I.barSize||0),0);p+=(i-1)*l,p>=r&&(p-=(i-1)*l,l=0),p>=r&&v>0&&(u=!0,v*=.9,p=i*v);var k=(r-p)/2>>0,x={offset:k-l,size:0};d=n.reduce((f,I)=>{var g,C={stackId:I.stackId,dataKeys:I.dataKeys,position:{offset:x.offset+x.size+l,size:u?v:(g=I.barSize)!==null&&g!==void 0?g:0}},S=[...f,C];return x=C.position,S},c)}else{var y=he(a,r,0,!0);r-2*y-(i-1)*l<=0&&(l=0);var w=(r-2*y-(i-1)*l)/i;w>1&&(w>>=0);var m=ye(t)?Math.min(w,t):w;d=n.reduce((f,I,g)=>[...f,{stackId:I.stackId,dataKeys:I.dataKeys,position:{offset:y+(w+l)*g+(w-m)/2,size:m}}],c)}return d}}var Qa=(e,a,r,n,t,s,i)=>{var l=de(i)?a:i,d=Ua(r,n,t!==s?t:s,e,l);return t!==s&&d!=null&&(d=d.map(c=>G(G({},c),{},{position:G(G({},c.position),{},{offset:c.position.offset-t/2})}))),d},Xa=(e,a)=>{var r=oa(a);if(!(!e||r==null||a==null)){var{stackId:n}=a;if(n!=null){var t=e[n];if(t){var{stackedData:s}=t;if(s)return s.find(i=>i.key===r)}}}},Ya=(e,a)=>{if(!(e==null||a==null)){var r=e.find(n=>n.stackId===a.stackId&&a.dataKey!=null&&n.dataKeys.includes(a.dataKey));if(r!=null)return r.position}};function Ja(e,a){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&ye(e.zIndex)?e.zIndex:a}function D(e,a){var r,n;return(r=(n=e.graphicalItems.cartesianItems.find(t=>t.id===a))===null||n===void 0?void 0:n.xAxisId)!==null&&r!==void 0?r:Te}function F(e,a){var r,n;return(r=(n=e.graphicalItems.cartesianItems.find(t=>t.id===a))===null||n===void 0?void 0:n.yAxisId)!==null&&r!==void 0?r:Te}var Za="Invariant failed";function er(e,a){throw new Error(Za)}function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ge.apply(null,arguments)}function ce(e){return o.createElement(la,ge({shapeType:"rectangle",activeClassName:"recharts-active-bar"},e))}var ar=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(n,t)=>{if(Be(a))return a;var s=Be(n)||de(n);return s?a(n,t):(s||er(),r)}},rr=(e,a,r)=>r,nr=(e,a)=>a,_=L([Ke,nr],(e,a)=>e.filter(r=>r.type==="bar").find(r=>r.id===a)),tr=L([_],e=>e?.maxBarSize),sr=(e,a,r,n)=>n,ir=L([N,Ke,D,F,rr],(e,a,r,n,t)=>a.filter(s=>e==="horizontal"?s.xAxisId===r:s.yAxisId===n).filter(s=>s.isPanorama===t).filter(s=>s.hide===!1).filter(s=>s.type==="bar")),or=(e,a,r)=>{var n=N(e),t=D(e,a),s=F(e,a);if(!(t==null||s==null))return n==="horizontal"?Ce(e,"yAxis",s,r):Ce(e,"xAxis",t,r)},lr=(e,a)=>{var r=N(e),n=D(e,a),t=F(e,a);if(!(n==null||t==null))return r==="horizontal"?Ee(e,"xAxis",n):Ee(e,"yAxis",t)},cr=L([ir,va,lr],$a),ur=(e,a,r)=>{var n,t,s=_(e,a);if(s==null)return 0;var i=D(e,a),l=F(e,a);if(i==null||l==null)return 0;var d=N(e),c=Ne(e),{maxBarSize:u}=s,v=de(u)?c:u,p,k;return d==="horizontal"?(p=M(e,"xAxis",i,r),k=K(e,"xAxis",i,r)):(p=M(e,"yAxis",l,r),k=K(e,"yAxis",l,r)),(n=(t=Me(p,k,!0))!==null&&t!==void 0?t:v)!==null&&n!==void 0?n:0},Qe=(e,a,r)=>{var n=N(e),t=D(e,a),s=F(e,a);if(!(t==null||s==null)){var i,l;return n==="horizontal"?(i=M(e,"xAxis",t,r),l=K(e,"xAxis",t,r)):(i=M(e,"yAxis",s,r),l=K(e,"yAxis",s,r)),Me(i,l)}},dr=L([cr,Ne,ma,pa,ur,Qe,tr],Qa),mr=(e,a,r)=>{var n=D(e,a);if(n!=null)return M(e,"xAxis",n,r)},pr=(e,a,r)=>{var n=F(e,a);if(n!=null)return M(e,"yAxis",n,r)},vr=(e,a,r)=>{var n=D(e,a);if(n!=null)return K(e,"xAxis",n,r)},fr=(e,a,r)=>{var n=F(e,a);if(n!=null)return K(e,"yAxis",n,r)},hr=L([dr,_],Ya),yr=L([or,_],Xa),gr=L([ca,ua,mr,pr,vr,fr,hr,N,da,Qe,yr,_,sr],(e,a,r,n,t,s,i,l,d,c,u,v,p)=>{var{chartData:k,dataStartIndex:x,dataEndIndex:y}=d;if(!(v==null||i==null||a==null||l!=="horizontal"&&l!=="vertical"||r==null||n==null||t==null||s==null||c==null)){var{data:w}=v,m;if(w!=null&&w.length>0?m=w:m=k?.slice(x,y+1),m!=null)return Vr({layout:l,barSettings:v,pos:i,parentViewBox:a,bandSize:c,xAxis:r,yAxis:n,xAxisTicks:t,yAxisTicks:s,stackedData:u,displayedData:m,offset:e,cells:p,dataStartIndex:x})}}),xr=["index"];function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xe.apply(null,arguments)}function br(e,a){if(e==null)return{};var r,n,t=kr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function kr(e,a){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(a.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Xe=o.createContext(void 0),Sr=e=>{var a=o.useContext(Xe);if(a!=null)return a.stackId;if(e!=null)return fa(e)},wr=(e,a)=>"recharts-bar-stack-clip-path-".concat(e,"-").concat(a),Ir=e=>{var a=o.useContext(Xe);if(a!=null){var{stackId:r}=a;return"url(#".concat(wr(r,e),")")}},Ye=e=>{var{index:a}=e,r=br(e,xr),n=Ir(a);return o.createElement(oe,xe({className:"recharts-bar-stack-layer",clipPath:n},r))},Ar=["onMouseEnter","onMouseLeave","onClick"],Pr=["value","background","tooltipPosition"],Br=["id"],Cr=["onMouseEnter","onClick","onMouseLeave"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(null,arguments)}function Fe(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Fe(Object(r),!0).forEach(function(n){Er(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Er(e,a,r){return(a=Or(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Or(e){var a=jr(e,"string");return typeof a=="symbol"?a:a+""}function jr(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function ue(e,a){if(e==null)return{};var r,n,t=Rr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Rr(e,a){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(a.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var zr=e=>{var{dataKey:a,name:r,fill:n,legendType:t,hide:s}=e;return[{inactive:s,dataKey:a,type:t,color:n,value:_e(r,a),payload:e}]},Lr=o.memo(e=>{var{dataKey:a,stroke:r,strokeWidth:n,fill:t,name:s,hide:i,unit:l,tooltipType:d,id:c}=e,u={dataDefinedOnItem:void 0,getPosition:Sa,settings:{stroke:r,strokeWidth:n,fill:t,dataKey:a,nameKey:void 0,name:_e(s,a),hide:i,type:d,color:t,unit:l,graphicalItemId:c}};return o.createElement(ka,{tooltipEntrySettings:u})});function Dr(e){var a=le($e),{data:r,dataKey:n,background:t,allOtherBarProps:s}=e,{onMouseEnter:i,onMouseLeave:l,onClick:d}=s,c=ue(s,Ar),u=Ve(i,n,s.id),v=He(l),p=Ue(d,n,s.id);if(!t||r==null)return null;var k=Ba(t);return o.createElement(ke,{zIndex:Ja(t,be.barBackground)},r.map((x,y)=>{var{value:w,background:m,tooltipPosition:f}=x,I=ue(x,Pr);if(!m)return null;var g=u(x,y),C=v(x,y),S=p(x,y),h=E(E(E(E(E({option:t,isActive:String(y)===a},I),{},{fill:"#eee"},m),k),qe(c,x,y)),{},{onMouseEnter:g,onMouseLeave:C,onClick:S,dataKey:n,index:y,className:"recharts-bar-background-rectangle"});return o.createElement(ce,j({key:"background-bar-".concat(y)},h))}))}function Fr(e){var{showLabels:a,children:r,rects:n}=e,t=n?.map(s=>{var i={x:s.x,y:s.y,width:s.width,lowerWidth:s.width,upperWidth:s.width,height:s.height};return E(E({},i),{},{value:s.value,payload:s.payload,parentViewBox:s.parentViewBox,viewBox:i,fill:s.fill})});return o.createElement(ja,{value:a?t:void 0},r)}function Tr(e){var{shape:a,activeBar:r,baseProps:n,entry:t,index:s,dataKey:i}=e,l=le($e),d=le(za),c=r&&String(s)===l&&(d==null||i===d),u=c?r:a;return c?o.createElement(ke,{zIndex:be.activeBar},o.createElement(Ye,{index:s},o.createElement(ce,j({},n,{name:String(n.name)},t,{isActive:c,option:u,index:s,dataKey:i})))):o.createElement(ce,j({},n,{name:String(n.name)},t,{isActive:c,option:u,index:s,dataKey:i}))}function Mr(e){var{shape:a,baseProps:r,entry:n,index:t,dataKey:s}=e;return o.createElement(ce,j({},r,{name:String(r.name)},n,{isActive:!1,option:a,index:t,dataKey:s}))}function Kr(e){var a,{data:r,props:n}=e,t=(a=Ra(n))!==null&&a!==void 0?a:{},{id:s}=t,i=ue(t,Br),{shape:l,dataKey:d,activeBar:c}=n,{onMouseEnter:u,onClick:v,onMouseLeave:p}=n,k=ue(n,Cr),x=Ve(u,d,s),y=He(p),w=Ue(v,d,s);return r?o.createElement(o.Fragment,null,r.map((m,f)=>o.createElement(Ye,j({index:f,key:"rectangle-".concat(m?.x,"-").concat(m?.y,"-").concat(m?.value,"-").concat(f),className:"recharts-bar-rectangle"},qe(k,m,f),{onMouseEnter:x(m,f),onMouseLeave:y(m,f),onClick:w(m,f)}),c?o.createElement(Tr,{shape:l,activeBar:c,baseProps:i,entry:m,index:f,dataKey:d}):o.createElement(Mr,{shape:l,baseProps:i,entry:m,index:f,dataKey:d})))):null}function Nr(e){var{props:a,previousRectanglesRef:r}=e,{data:n,layout:t,isAnimationActive:s,animationBegin:i,animationDuration:l,animationEasing:d,onAnimationEnd:c,onAnimationStart:u}=a,v=r.current,p=Ca(a,"recharts-bar-"),[k,x]=o.useState(!1),y=!k,w=o.useCallback(()=>{typeof c=="function"&&c(),x(!1)},[c]),m=o.useCallback(()=>{typeof u=="function"&&u(),x(!0)},[u]);return o.createElement(Fr,{showLabels:y,rects:n},o.createElement(Ea,{animationId:p,begin:i,duration:l,isActive:s,easing:d,onAnimationEnd:w,onAnimationStart:m,key:p},f=>{var I=f===1?n:n?.map((g,C)=>{var S=v&&v[C];if(S)return E(E({},g),{},{x:z(S.x,g.x,f),y:z(S.y,g.y,f),width:z(S.width,g.width,f),height:z(S.height,g.height,f)});if(t==="horizontal"){var h=z(0,g.height,f),B=z(g.stackedBarStart,g.y,f);return E(E({},g),{},{y:B,height:h})}var A=z(0,g.width,f),P=z(g.stackedBarStart,g.x,f);return E(E({},g),{},{width:A,x:P})});return f>0&&(r.current=I??null),I==null?null:o.createElement(oe,null,o.createElement(Kr,{props:a,data:I}))}),o.createElement(Oa,{label:a.label}),a.children)}function Wr(e){var a=o.useRef(null);return o.createElement(Nr,{previousRectanglesRef:a,props:e})}var Je=0,_r=(e,a)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:Ge(e,a)}};class Gr extends o.PureComponent{render(){var{hide:a,data:r,dataKey:n,className:t,xAxisId:s,yAxisId:i,needClip:l,background:d,id:c}=this.props;if(a||r==null)return null;var u=ta("recharts-bar",t),v=c;return o.createElement(oe,{className:u,id:c},l&&o.createElement("defs",null,o.createElement(Na,{clipPathId:v,xAxisId:s,yAxisId:i})),o.createElement(oe,{className:"recharts-bar-rectangles",clipPath:l?"url(#clipPath-".concat(v,")"):void 0},o.createElement(Dr,{data:r,dataKey:n,background:d,allOtherBarProps:this.props}),o.createElement(Wr,this.props)))}}var $r={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:Je,xAxisId:0,yAxisId:0,zIndex:be.bar};function qr(e){var{xAxisId:a,yAxisId:r,hide:n,legendType:t,minPointSize:s,activeBar:i,animationBegin:l,animationDuration:d,animationEasing:c,isAnimationActive:u}=e,{needClip:v}=Ma(a,r),p=wa(),k=We(),x=Ia(e.children,Ga),y=le(f=>gr(f,e.id,k,x));if(p!=="vertical"&&p!=="horizontal")return null;var w,m=y?.[0];return m==null||m.height==null||m.width==null?w=0:w=p==="vertical"?m.height/2:m.width/2,o.createElement(Ka,{xAxisId:a,yAxisId:r,data:y,dataPointFormatter:_r,errorBarOffset:w},o.createElement(Gr,j({},e,{layout:p,needClip:v,data:y,xAxisId:a,yAxisId:r,hide:n,legendType:t,minPointSize:s,activeBar:i,animationBegin:l,animationDuration:d,animationEasing:c,isAnimationActive:u})))}function Vr(e){var{layout:a,barSettings:{dataKey:r,minPointSize:n},pos:t,bandSize:s,xAxis:i,yAxis:l,xAxisTicks:d,yAxisTicks:c,stackedData:u,displayedData:v,offset:p,cells:k,parentViewBox:x,dataStartIndex:y}=e,w=a==="horizontal"?l:i,m=u?w.scale.domain():null,f=Aa({numericAxis:w}),I=w.scale.map(f);return v.map((g,C)=>{var S,h,B,A,P,me;if(u){var we=u[C+y];if(we==null)return null;S=Pa(we,m)}else S=Ge(g,r),Array.isArray(S)||(S=[f,S]);var R=ar(n,Je)(S[1],C);if(a==="horizontal"){var pe,ve=l.scale.map(S[0]),W=l.scale.map(S[1]);if(ve==null||W==null)return null;h=Oe({axis:i,ticks:d,bandSize:s,offset:t.offset,entry:g,index:C}),B=(pe=W??ve)!==null&&pe!==void 0?pe:void 0,A=t.size;var Ie=ve-W;if(P=La(Ie)?0:Ie,me={x:h,y:p.top,width:A,height:p.height},Math.abs(R)>0&&Math.abs(P)<Math.abs(R)){var Ae=je(P||R)*(Math.abs(R)-Math.abs(P));B-=Ae,P+=Ae}}else{var fe=i.scale.map(S[0]),Pe=i.scale.map(S[1]);if(fe==null||Pe==null)return null;if(h=fe,B=Oe({axis:l,ticks:c,bandSize:s,offset:t.offset,entry:g,index:C}),A=Pe-fe,P=t.size,me={x:p.left,y:B,width:p.width,height:P},Math.abs(R)>0&&Math.abs(A)<Math.abs(R)){var aa=je(A||R)*(Math.abs(R)-Math.abs(A));A+=aa}}if(h==null||B==null||A==null||P==null)return null;var ra=E(E({},g),{},{stackedBarStart:I,x:h,y:B,width:A,height:P,value:u?S:S[1],payload:g,background:me,tooltipPosition:{x:h+A/2,y:B+P/2},parentViewBox:x},k&&k[C]&&k[C].props);return ra}).filter(Boolean)}function Hr(e){var a=ya(e,$r),r=Sr(a.stackId),n=We();return o.createElement(ga,{id:a.id,type:"bar"},t=>o.createElement(o.Fragment,null,o.createElement(xa,{legendPayload:zr(a)}),o.createElement(Lr,{dataKey:a.dataKey,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:t}),o.createElement(ba,{type:"bar",id:t,data:void 0,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,dataKey:a.dataKey,stackId:r,hide:a.hide,barSize:a.barSize,minPointSize:a.minPointSize,maxBarSize:a.maxBarSize,isPanorama:n}),o.createElement(ke,{zIndex:a.zIndex},o.createElement(qr,j({},a,{id:t})))))}var Ze=o.memo(Hr,ha);Ze.displayName="Bar";var Ur=["axis","item"],Qr=o.forwardRef((e,a)=>o.createElement(Wa,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Ur,tooltipPayloadSearcher:Da,categoricalChartProps:e,ref:a}));const Xr=na("text-small font-sans tracking-[-0.05em]",{variants:{size:{sm:"h-48",default:"h-72",lg:"h-96"}},defaultVariants:{size:"default"}}),T=["var(--color-sunflower)","var(--color-electric-blue)","var(--color-cool-purple)","var(--color-deep-blue)","var(--color-warm-purple)","var(--color-chart-teal)","var(--color-chart-coral)","var(--color-chart-sky)","var(--color-chart-amber)","var(--color-chart-indigo)"],Se=o.forwardRef(({className:e,size:a,data:r,series:n,showGrid:t=!0,showLegend:s=!0,showTooltip:i=!0,xAxisLabel:l,yAxisLabel:d,radius:c=0,stacked:u=!1,layout:v="horizontal",tooltipValueFormatter:p,xAxisValueFormatter:k,yAxisValueFormatter:x,"aria-label":y,...w},m)=>{const f=o.useMemo(()=>{if(n)return n;const h=r[0];return h?Object.keys(h).filter(A=>A!=="label"&&typeof h[A]=="number").map((A,P)=>({key:A,name:A.charAt(0).toUpperCase()+A.slice(1),color:T[P%T.length]})):[]},[r,n]),[I,g]=o.useState(null),C=h=>{g(B=>B===h?null:h)},S=v==="vertical";return b.jsxs("div",{ref:m,className:sa(Xr({size:a,className:e})),style:{display:"flex",flexDirection:"column"},...w,children:[b.jsx("div",{role:"img","aria-label":y,style:{flex:"1 1 0",minHeight:0},children:b.jsx(Fa,{width:"100%",height:"100%",minWidth:100,minHeight:100,children:b.jsxs(Qr,{data:r,layout:v,margin:{top:5,right:30,left:d?20:0,bottom:l?20:5},children:[t&&b.jsx(_a,{strokeDasharray:"3 3",stroke:"var(--color-border)",vertical:S,horizontal:!S}),S?b.jsxs(b.Fragment,{children:[b.jsx(Re,{type:"number",stroke:"var(--color-secondary)",fontSize:"var(--text-descriptive)",tickLine:!1,axisLine:{stroke:"var(--color-border)"},tickFormatter:k,label:l?{value:l,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:"var(--text-descriptive)"}:void 0}),b.jsx(ze,{type:"category",dataKey:"label",stroke:"var(--color-secondary)",fontSize:"var(--text-descriptive)",tickLine:!1,axisLine:{stroke:"var(--color-border)"},tickFormatter:x,label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:"var(--text-descriptive)"}:void 0})]}):b.jsxs(b.Fragment,{children:[b.jsx(Re,{dataKey:"label",stroke:"var(--color-secondary)",fontSize:"var(--text-descriptive)",tickLine:!1,axisLine:{stroke:"var(--color-border)"},tickFormatter:k,label:l?{value:l,position:"insideBottom",offset:-10,fill:"var(--color-secondary)",fontSize:"var(--text-descriptive)"}:void 0}),b.jsx(ze,{stroke:"var(--color-secondary)",fontSize:"var(--text-descriptive)",tickLine:!1,axisLine:{stroke:"var(--color-border)"},tickFormatter:x,label:d?{value:d,angle:-90,position:"insideLeft",fill:"var(--color-secondary)",fontSize:"var(--text-descriptive)"}:void 0})]}),i&&b.jsx(Ta,{cursor:{fill:"rgba(0, 0, 0, 0.05)"},content:({active:h,payload:B,label:A})=>!h||!B?.length?null:b.jsxs("div",{style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"8px",fontFamily:"var(--font-sans)",fontSize:"var(--text-small)",padding:"12px 16px"},children:[b.jsx("p",{style:{color:"var(--color-secondary)",fontWeight:400,margin:"0 0 4px"},children:A}),[...B].reverse().map(P=>b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[b.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:"50%",backgroundColor:P.color,flexShrink:0}}),b.jsxs("span",{style:{color:"var(--color-secondary)"},children:[P.name,":"," ",p?p(P.value,P.dataKey):P.value]})]},String(P.name)))]})}),f.map((h,B)=>b.jsx(Ze,{dataKey:h.key,name:h.name,fill:h.color||T[B%T.length],radius:c,stackId:u?"stack":void 0,hide:I!==null&&I!==h.key},h.key))]})})}),s&&b.jsx("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"8px 16px",listStyle:"none",margin:0,padding:0},children:f.map((h,B)=>{const A=I!==null&&I!==h.key;return b.jsx("li",{style:{display:"flex",alignItems:"center",gap:"4px"},children:b.jsxs("button",{type:"button",onClick:()=>C(h.key),style:{display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",opacity:A?.35:1,transition:"opacity 150ms",background:"none",border:"none",padding:0,maxWidth:"140px",minWidth:0},children:[b.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:"50%",flexShrink:0,backgroundColor:h.color||T[B%T.length]}}),b.jsx("span",{style:{color:"var(--color-secondary)",fontSize:"var(--text-small)",fontFamily:"var(--font-sans)",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:h.name})]})},h.key)})})]})});Se.displayName="BarChart";Se.__docgenInfo={description:`BarChart component for displaying categorical data comparisons.
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
\`\`\``,methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartDataPoint"}],raw:"BarChartDataPoint[]"},description:"Data points to render"},series:{required:!1,tsType:{name:"Array",elements:[{name:"BarChartSeriesConfig"}],raw:"BarChartSeriesConfig[]"},description:"Configuration for data series. If not provided, all numeric keys except 'label' will be rendered"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"true",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show tooltips on hover",defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},radius:{required:!1,tsType:{name:"number"},description:"Bar corner radius",defaultValue:{value:"0",computed:!1}},stacked:{required:!1,tsType:{name:"boolean"},description:"Stack bars on top of each other",defaultValue:{value:"false",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout orientation",defaultValue:{value:"'horizontal'",computed:!1}},tooltipValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, seriesKey: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"string"},name:"seriesKey"}],return:{name:"string"}}},description:"Format tooltip values (e.g. add currency, custom rounding)"},xAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format x-axis tick values"},yAxisValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"Format y-axis tick values"}},composes:["VariantProps"]};const cn={title:"Charts/BarChart",component:Se,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"The size of the chart"},showGrid:{control:"boolean",description:"Show grid lines"},showLegend:{control:"boolean",description:"Show legend"},showTooltip:{control:"boolean",description:"Show tooltip on hover"},stacked:{control:"boolean",description:"Stack bars on top of each other"},radius:{control:{type:"range",min:0,max:10},description:"Bar corner radius"},layout:{control:"select",options:["horizontal","vertical"],description:"Layout orientation"},xAxisLabel:{control:"text",description:"Label for the x-axis"},yAxisLabel:{control:"text",description:"Label for the y-axis"}},decorators:[e=>b.jsx("div",{style:{width:"100%",maxWidth:"800px",minHeight:"300px"},children:b.jsx(e,{})})]},O=[{label:"Jan",revenue:4e3,expenses:2400,profit:1600},{label:"Feb",revenue:3e3,expenses:1398,profit:1602},{label:"Mar",revenue:2e3,expenses:9800,profit:-7800},{label:"Apr",revenue:2780,expenses:3908,profit:-1128},{label:"May",revenue:1890,expenses:4800,profit:-2910},{label:"Jun",revenue:2390,expenses:3800,profit:-1410},{label:"Jul",revenue:3490,expenses:4300,profit:-810}],$={args:{data:O,series:[{key:"revenue",name:"Revenue"}],"aria-label":"Monthly revenue chart"}},q={args:{data:O,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],"aria-label":"Revenue vs expenses comparison"}},V={args:{data:O,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"},{key:"profit",name:"Profit",color:"#9B4ED8"}],"aria-label":"Financial metrics overview"}},H={args:{data:O,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,"aria-label":"Stacked revenue and expenses"}},U={args:{data:O.slice(0,5),series:[{key:"revenue",name:"Revenue"}],layout:"vertical","aria-label":"Horizontal bar chart"}},Q={args:{data:O,series:[{key:"revenue",name:"Revenue"}],radius:4,"aria-label":"Chart with rounded bars"}},X={args:{data:O,series:[{key:"revenue",name:"Revenue ($)"}],xAxisLabel:"Month",yAxisLabel:"Amount ($)","aria-label":"Monthly revenue with labeled axes"}},Y={args:{data:O,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,"aria-label":"Revenue chart without grid"}},J={args:{data:O,series:[{key:"revenue",name:"Revenue"}],showLegend:!1,"aria-label":"Revenue chart without legend"}},Z={args:{data:O,series:[{key:"revenue",name:"Revenue"}],size:"sm","aria-label":"Small revenue chart"}},ee={args:{data:O,series:[{key:"revenue",name:"Revenue"}],size:"lg","aria-label":"Large revenue chart"}},ae={args:{data:O,"aria-label":"Chart with auto-detected series"}},re={args:{data:O,series:[{key:"revenue",name:"Revenue",color:"#721B5D"},{key:"expenses",name:"Expenses",color:"#002FA7"}],"aria-label":"Chart with custom colors"}},ne={args:{data:O,series:[{key:"revenue",name:"Revenue"}],showGrid:!1,showLegend:!1,radius:2,"aria-label":"Minimal bar chart"}},te={args:{data:O,series:[{key:"revenue",name:"Revenue"},{key:"expenses",name:"Expenses",color:"#0080FF"}],stacked:!0,radius:4,"aria-label":"Stacked chart with rounded bars"}},ea=[{label:"Q1",solar:120,wind:95,hydro:60,nuclear:80,gas:110,coal:45,biomass:30,geothermal:15,tidal:8,hydrogen:5},{label:"Q2",solar:150,wind:80,hydro:55,nuclear:82,gas:100,coal:40,biomass:35,geothermal:18,tidal:10,hydrogen:7},{label:"Q3",solar:180,wind:70,hydro:50,nuclear:78,gas:90,coal:35,biomass:28,geothermal:20,tidal:12,hydrogen:10},{label:"Q4",solar:100,wind:120,hydro:65,nuclear:85,gas:105,coal:42,biomass:32,geothermal:16,tidal:9,hydrogen:8}],se={args:{data:ea,series:[{key:"solar",name:"Solar"},{key:"wind",name:"Wind"},{key:"hydro",name:"Hydro"},{key:"nuclear",name:"Nuclear"},{key:"gas",name:"Natural Gas"},{key:"coal",name:"Coal"},{key:"biomass",name:"Biomass"},{key:"geothermal",name:"Geothermal"},{key:"tidal",name:"Tidal"},{key:"hydrogen",name:"Hydrogen"}],stacked:!0,size:"lg",yAxisLabel:"TWh","aria-label":"Quarterly energy production mix by source"}},ie={args:{data:ea,series:[{key:"solar",name:"Solar Photovoltaic Panels"},{key:"wind",name:"Offshore Wind Turbines"},{key:"hydro",name:"Hydroelectric Power Generation"},{key:"nuclear",name:"Nuclear Fission Reactors"},{key:"gas",name:"Liquefied Natural Gas Combined Cycle"},{key:"coal",name:"Coal"},{key:"biomass",name:"Biomass"},{key:"geothermal",name:"Geothermal"},{key:"tidal",name:"Tidal"},{key:"hydrogen",name:"Hydrogen"}],stacked:!0,size:"lg","aria-label":"Chart demonstrating truncated legend labels"}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    'aria-label': 'Monthly revenue chart'
  }
}`,...$.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData.slice(0, 5),
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    layout: 'vertical',
    'aria-label': 'Horizontal bar chart'
  }
}`,...U.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    radius: 4,
    'aria-label': 'Chart with rounded bars'
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showGrid: false,
    'aria-label': 'Revenue chart without grid'
  }
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    showLegend: false,
    'aria-label': 'Revenue chart without legend'
  }
}`,...J.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    series: [{
      key: 'revenue',
      name: 'Revenue'
    }],
    size: 'sm',
    'aria-label': 'Small revenue chart'
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    data: energyMixData,
    series: [{
      key: 'solar',
      name: 'Solar'
    }, {
      key: 'wind',
      name: 'Wind'
    }, {
      key: 'hydro',
      name: 'Hydro'
    }, {
      key: 'nuclear',
      name: 'Nuclear'
    }, {
      key: 'gas',
      name: 'Natural Gas'
    }, {
      key: 'coal',
      name: 'Coal'
    }, {
      key: 'biomass',
      name: 'Biomass'
    }, {
      key: 'geothermal',
      name: 'Geothermal'
    }, {
      key: 'tidal',
      name: 'Tidal'
    }, {
      key: 'hydrogen',
      name: 'Hydrogen'
    }],
    stacked: true,
    size: 'lg',
    yAxisLabel: 'TWh',
    'aria-label': 'Quarterly energy production mix by source'
  }
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    data: energyMixData,
    series: [{
      key: 'solar',
      name: 'Solar Photovoltaic Panels'
    }, {
      key: 'wind',
      name: 'Offshore Wind Turbines'
    }, {
      key: 'hydro',
      name: 'Hydroelectric Power Generation'
    }, {
      key: 'nuclear',
      name: 'Nuclear Fission Reactors'
    }, {
      key: 'gas',
      name: 'Liquefied Natural Gas Combined Cycle'
    }, {
      key: 'coal',
      name: 'Coal'
    }, {
      key: 'biomass',
      name: 'Biomass'
    }, {
      key: 'geothermal',
      name: 'Geothermal'
    }, {
      key: 'tidal',
      name: 'Tidal'
    }, {
      key: 'hydrogen',
      name: 'Hydrogen'
    }],
    stacked: true,
    size: 'lg',
    'aria-label': 'Chart demonstrating truncated legend labels'
  }
}`,...ie.parameters?.docs?.source}}};const un=["Default","MultiSeries","ThreeSeries","Stacked","VerticalLayout","RoundedBars","WithAxisLabels","WithoutGrid","WithoutLegend","SmallSize","LargeSize","AutoDetectSeries","CustomColors","Minimal","StackedRounded","StackedTenSeries","TruncatedLabels"];export{ae as AutoDetectSeries,re as CustomColors,$ as Default,ee as LargeSize,ne as Minimal,q as MultiSeries,Q as RoundedBars,Z as SmallSize,H as Stacked,te as StackedRounded,se as StackedTenSeries,V as ThreeSeries,ie as TruncatedLabels,U as VerticalLayout,X as WithAxisLabels,Y as WithoutGrid,J as WithoutLegend,un as __namedExportsOrder,cn as default};
