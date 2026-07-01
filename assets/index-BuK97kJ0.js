(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function hP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zI={exports:{}},Hd={},BI={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=Symbol.for("react.element"),fP=Symbol.for("react.portal"),pP=Symbol.for("react.fragment"),mP=Symbol.for("react.strict_mode"),gP=Symbol.for("react.profiler"),_P=Symbol.for("react.provider"),yP=Symbol.for("react.context"),vP=Symbol.for("react.forward_ref"),wP=Symbol.for("react.suspense"),IP=Symbol.for("react.memo"),EP=Symbol.for("react.lazy"),Ny=Symbol.iterator;function TP(n){return n===null||typeof n!="object"?null:(n=Ny&&n[Ny]||n["@@iterator"],typeof n=="function"?n:null)}var $I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qI=Object.assign,WI={};function na(n,e,t){this.props=n,this.context=e,this.refs=WI,this.updater=t||$I}na.prototype.isReactComponent={};na.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};na.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function GI(){}GI.prototype=na.prototype;function Tm(n,e,t){this.props=n,this.context=e,this.refs=WI,this.updater=t||$I}var Am=Tm.prototype=new GI;Am.constructor=Tm;qI(Am,na.prototype);Am.isPureReactComponent=!0;var Dy=Array.isArray,KI=Object.prototype.hasOwnProperty,Sm={current:null},HI={key:!0,ref:!0,__self:!0,__source:!0};function QI(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)KI.call(e,r)&&!HI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fu,type:n,key:s,ref:o,props:i,_owner:Sm.current}}function AP(n,e){return{$$typeof:fu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Rm(n){return typeof n=="object"&&n!==null&&n.$$typeof===fu}function SP(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Vy=/\/+/g;function sf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?SP(""+n.key):e.toString(36)}function xc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case fu:case fP:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+sf(o,0):r,Dy(i)?(t="",n!=null&&(t=n.replace(Vy,"$&/")+"/"),xc(i,e,t,"",function(c){return c})):i!=null&&(Rm(i)&&(i=AP(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vy,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dy(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+sf(s,a);o+=xc(s,e,t,u,i)}else if(u=TP(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+sf(s,a++),o+=xc(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ac(n,e,t){if(n==null)return n;var r=[],i=0;return xc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function RP(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ft={current:null},Nc={transition:null},PP={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:Sm};function YI(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:ac,forEach:function(n,e,t){ac(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ac(n,function(){e++}),e},toArray:function(n){return ac(n,function(e){return e})||[]},only:function(n){if(!Rm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};le.Component=na;le.Fragment=pP;le.Profiler=gP;le.PureComponent=Tm;le.StrictMode=mP;le.Suspense=wP;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PP;le.act=YI;le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=qI({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sm.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)KI.call(e,u)&&!HI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fu,type:n.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(n){return n={$$typeof:yP,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:_P,_context:n},n.Consumer=n};le.createElement=QI;le.createFactory=function(n){var e=QI.bind(null,n);return e.type=n,e};le.createRef=function(){return{current:null}};le.forwardRef=function(n){return{$$typeof:vP,render:n}};le.isValidElement=Rm;le.lazy=function(n){return{$$typeof:EP,_payload:{_status:-1,_result:n},_init:RP}};le.memo=function(n,e){return{$$typeof:IP,type:n,compare:e===void 0?null:e}};le.startTransition=function(n){var e=Nc.transition;Nc.transition={};try{n()}finally{Nc.transition=e}};le.unstable_act=YI;le.useCallback=function(n,e){return Ft.current.useCallback(n,e)};le.useContext=function(n){return Ft.current.useContext(n)};le.useDebugValue=function(){};le.useDeferredValue=function(n){return Ft.current.useDeferredValue(n)};le.useEffect=function(n,e){return Ft.current.useEffect(n,e)};le.useId=function(){return Ft.current.useId()};le.useImperativeHandle=function(n,e,t){return Ft.current.useImperativeHandle(n,e,t)};le.useInsertionEffect=function(n,e){return Ft.current.useInsertionEffect(n,e)};le.useLayoutEffect=function(n,e){return Ft.current.useLayoutEffect(n,e)};le.useMemo=function(n,e){return Ft.current.useMemo(n,e)};le.useReducer=function(n,e,t){return Ft.current.useReducer(n,e,t)};le.useRef=function(n){return Ft.current.useRef(n)};le.useState=function(n){return Ft.current.useState(n)};le.useSyncExternalStore=function(n,e,t){return Ft.current.useSyncExternalStore(n,e,t)};le.useTransition=function(){return Ft.current.useTransition()};le.version="18.3.1";BI.exports=le;var Z=BI.exports;const Na=hP(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kP=Z,CP=Symbol.for("react.element"),bP=Symbol.for("react.fragment"),xP=Object.prototype.hasOwnProperty,NP=kP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DP={key:!0,ref:!0,__self:!0,__source:!0};function JI(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xP.call(e,r)&&!DP.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CP,type:n,key:s,ref:o,props:i,_owner:NP.current}}Hd.Fragment=bP;Hd.jsx=JI;Hd.jsxs=JI;zI.exports=Hd;var y=zI.exports,XI={exports:{}},dn={},ZI={exports:{}},eE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,re){var ie=G.length;G.push(re);e:for(;0<ie;){var de=ie-1>>>1,ge=G[de];if(0<i(ge,re))G[de]=re,G[ie]=ge,ie=de;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var re=G[0],ie=G.pop();if(ie!==re){G[0]=ie;e:for(var de=0,ge=G.length,Ie=ge>>>1;de<Ie;){var pn=2*(de+1)-1,bn=G[pn],Ae=pn+1,jt=G[Ae];if(0>i(bn,ie))Ae<ge&&0>i(jt,bn)?(G[de]=jt,G[Ae]=ie,de=Ae):(G[de]=bn,G[pn]=ie,de=pn);else if(Ae<ge&&0>i(jt,ie))G[de]=jt,G[Ae]=ie,de=Ae;else break e}}return re}function i(G,re){var ie=G.sortIndex-re.sortIndex;return ie!==0?ie:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,m=3,w=!1,k=!1,C=!1,V=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(G){for(var re=t(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=G)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=t(c)}}function L(G){if(C=!1,S(G),!k)if(t(u)!==null)k=!0,Cn(B);else{var re=t(c);re!==null&&fn(L,re.startTime-G)}}function B(G,re){k=!1,C&&(C=!1,A(_),_=-1),w=!0;var ie=m;try{for(S(re),p=t(u);p!==null&&(!(p.expirationTime>re)||G&&!P());){var de=p.callback;if(typeof de=="function"){p.callback=null,m=p.priorityLevel;var ge=de(p.expirationTime<=re);re=n.unstable_now(),typeof ge=="function"?p.callback=ge:p===t(u)&&r(u),S(re)}else r(u);p=t(u)}if(p!==null)var Ie=!0;else{var pn=t(c);pn!==null&&fn(L,pn.startTime-re),Ie=!1}return Ie}finally{p=null,m=ie,w=!1}}var F=!1,I=null,_=-1,E=5,T=-1;function P(){return!(n.unstable_now()-T<E)}function b(){if(I!==null){var G=n.unstable_now();T=G;var re=!0;try{re=I(!0,G)}finally{re?R():(F=!1,I=null)}}else F=!1}var R;if(typeof v=="function")R=function(){v(b)};else if(typeof MessageChannel!="undefined"){var _e=new MessageChannel,kn=_e.port2;_e.port1.onmessage=b,R=function(){kn.postMessage(null)}}else R=function(){V(b,0)};function Cn(G){I=G,F||(F=!0,R())}function fn(G,re){_=V(function(){G(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){k||w||(k=!0,Cn(B))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ie=m;m=re;try{return G()}finally{m=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ie=m;m=G;try{return re()}finally{m=ie}},n.unstable_scheduleCallback=function(G,re,ie){var de=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?de+ie:de):ie=de,G){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ie+ge,G={id:h++,callback:re,priorityLevel:G,startTime:ie,expirationTime:ge,sortIndex:-1},ie>de?(G.sortIndex=ie,e(c,G),t(u)===null&&G===t(c)&&(C?(A(_),_=-1):C=!0,fn(L,ie-de))):(G.sortIndex=ge,e(u,G),k||w||(k=!0,Cn(B))),G},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(G){var re=m;return function(){var ie=m;m=re;try{return G.apply(this,arguments)}finally{m=ie}}}})(eE);ZI.exports=eE;var VP=ZI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OP=Z,un=VP;function $(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tE=new Set,Sl={};function bs(n,e){No(n,e),No(n+"Capture",e)}function No(n,e){for(Sl[n]=e,n=0;n<e.length;n++)tE.add(e[n])}var Ar=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Hf=Object.prototype.hasOwnProperty,LP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oy={},Ly={};function MP(n){return Hf.call(Ly,n)?!0:Hf.call(Oy,n)?!1:LP.test(n)?Ly[n]=!0:(Oy[n]=!0,!1)}function FP(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function UP(n,e,t,r){if(e===null||typeof e=="undefined"||FP(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){wt[n]=new Ut(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];wt[e]=new Ut(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){wt[n]=new Ut(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){wt[n]=new Ut(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){wt[n]=new Ut(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){wt[n]=new Ut(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){wt[n]=new Ut(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){wt[n]=new Ut(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){wt[n]=new Ut(n,5,!1,n.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function km(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Pm,km);wt[e]=new Ut(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Pm,km);wt[e]=new Ut(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Pm,km);wt[e]=new Ut(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){wt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){wt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!0,!0)});function Cm(n,e,t,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UP(e,t,i,r)&&(t=null),r||i===null?MP(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Dr=OP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=Symbol.for("react.element"),so=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),nE=Symbol.for("react.provider"),rE=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),Nm=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),iE=Symbol.for("react.offscreen"),My=Symbol.iterator;function Da(n){return n===null||typeof n!="object"?null:(n=My&&n[My]||n["@@iterator"],typeof n=="function"?n:null)}var je=Object.assign,of;function Qa(n){if(of===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);of=e&&e[1]||""}return`
`+of+n}var af=!1;function lf(n,e){if(!n||af)return"";af=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{af=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Qa(n):""}function jP(n){switch(n.tag){case 5:return Qa(n.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return n=lf(n.type,!1),n;case 11:return n=lf(n.type.render,!1),n;case 1:return n=lf(n.type,!0),n;default:return""}}function Xf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case oo:return"Fragment";case so:return"Portal";case Qf:return"Profiler";case bm:return"StrictMode";case Yf:return"Suspense";case Jf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case rE:return(n.displayName||"Context")+".Consumer";case nE:return(n._context.displayName||"Context")+".Provider";case xm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nm:return e=n.displayName||null,e!==null?e:Xf(n.type)||"Memo";case Xr:e=n._payload,n=n._init;try{return Xf(n(e))}catch(t){}}return null}function zP(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sE(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BP(n){var e=sE(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function uc(n){n._valueTracker||(n._valueTracker=BP(n))}function oE(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=sE(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function nd(n){if(n=n||(typeof document!="undefined"?document:void 0),typeof n=="undefined")return null;try{return n.activeElement||n.body}catch(e){return n.body}}function Zf(n,e){var t=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Fy(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=yi(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function aE(n,e){e=e.checked,e!=null&&Cm(n,"checked",e,!1)}function ep(n,e){aE(n,e);var t=yi(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?tp(n,e.type,t):e.hasOwnProperty("defaultValue")&&tp(n,e.type,yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Uy(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function tp(n,e,t){(e!=="number"||nd(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ya=Array.isArray;function vo(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+yi(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function np(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jy(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error($(92));if(Ya(t)){if(1<t.length)throw Error($(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:yi(t)}}function lE(n,e){var t=yi(e.value),r=yi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function zy(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uE(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uE(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cc,cE=function(n){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(cc=cc||document.createElement("div"),cc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Rl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$P=["Webkit","ms","Moz","O"];Object.keys(al).forEach(function(n){$P.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),al[e]=al[n]})});function dE(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||al.hasOwnProperty(n)&&al[n]?(""+e).trim():e+"px"}function hE(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=dE(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var qP=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ip(n,e){if(e){if(qP[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=null;function Dm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ap=null,wo=null,Io=null;function By(n){if(n=gu(n)){if(typeof ap!="function")throw Error($(280));var e=n.stateNode;e&&(e=Zd(e),ap(n.stateNode,n.type,e))}}function fE(n){wo?Io?Io.push(n):Io=[n]:wo=n}function pE(){if(wo){var n=wo,e=Io;if(Io=wo=null,By(n),e)for(n=0;n<e.length;n++)By(e[n])}}function mE(n,e){return n(e)}function gE(){}var uf=!1;function _E(n,e,t){if(uf)return n(e,t);uf=!0;try{return mE(n,e,t)}finally{uf=!1,(wo!==null||Io!==null)&&(gE(),pE())}}function Pl(n,e){var t=n.stateNode;if(t===null)return null;var r=Zd(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error($(231,e,typeof t));return t}var lp=!1;if(Ar)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){lp=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch(n){lp=!1}function WP(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var ll=!1,rd=null,id=!1,up=null,GP={onError:function(n){ll=!0,rd=n}};function KP(n,e,t,r,i,s,o,a,u){ll=!1,rd=null,WP.apply(GP,arguments)}function HP(n,e,t,r,i,s,o,a,u){if(KP.apply(this,arguments),ll){if(ll){var c=rd;ll=!1,rd=null}else throw Error($(198));id||(id=!0,up=c)}}function xs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yE(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function $y(n){if(xs(n)!==n)throw Error($(188))}function QP(n){var e=n.alternate;if(!e){if(e=xs(n),e===null)throw Error($(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return $y(i),n;if(s===r)return $y(i),e;s=s.sibling}throw Error($(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(t.alternate!==r)throw Error($(190))}if(t.tag!==3)throw Error($(188));return t.stateNode.current===t?n:e}function vE(n){return n=QP(n),n!==null?wE(n):null}function wE(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=wE(n);if(e!==null)return e;n=n.sibling}return null}var IE=un.unstable_scheduleCallback,qy=un.unstable_cancelCallback,YP=un.unstable_shouldYield,JP=un.unstable_requestPaint,Qe=un.unstable_now,XP=un.unstable_getCurrentPriorityLevel,Vm=un.unstable_ImmediatePriority,EE=un.unstable_UserBlockingPriority,sd=un.unstable_NormalPriority,ZP=un.unstable_LowPriority,TE=un.unstable_IdlePriority,Qd=null,Jn=null;function ek(n){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Qd,n,void 0,(n.current.flags&128)===128)}catch(e){}}var Mn=Math.clz32?Math.clz32:rk,tk=Math.log,nk=Math.LN2;function rk(n){return n>>>=0,n===0?32:31-(tk(n)/nk|0)|0}var dc=64,hc=4194304;function Ja(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function od(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Ja(a):(s&=o,s!==0&&(r=Ja(s)))}else o=t&~i,o!==0?r=Ja(o):s!==0&&(r=Ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Mn(e),i=1<<t,r|=n[t],e&=~i;return r}function ik(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sk(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Mn(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=ik(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function cp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function AE(){var n=dc;return dc<<=1,!(dc&4194240)&&(dc=64),n}function cf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Mn(e),n[e]=t}function ok(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Mn(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Om(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Mn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var we=0;function SE(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var RE,Lm,PE,kE,CE,dp=!1,fc=[],li=null,ui=null,ci=null,kl=new Map,Cl=new Map,ei=[],ak="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wy(n,e){switch(n){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(e.pointerId)}}function Oa(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gu(e),e!==null&&Lm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function lk(n,e,t,r,i){switch(e){case"focusin":return li=Oa(li,n,e,t,r,i),!0;case"dragenter":return ui=Oa(ui,n,e,t,r,i),!0;case"mouseover":return ci=Oa(ci,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return kl.set(s,Oa(kl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cl.set(s,Oa(Cl.get(s)||null,n,e,t,r,i)),!0}return!1}function bE(n){var e=ns(n.target);if(e!==null){var t=xs(e);if(t!==null){if(e=t.tag,e===13){if(e=yE(t),e!==null){n.blockedOn=e,CE(n.priority,function(){PE(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);op=r,t.target.dispatchEvent(r),op=null}else return e=gu(t),e!==null&&Lm(e),n.blockedOn=t,!1;e.shift()}return!0}function Gy(n,e,t){Dc(n)&&t.delete(e)}function uk(){dp=!1,li!==null&&Dc(li)&&(li=null),ui!==null&&Dc(ui)&&(ui=null),ci!==null&&Dc(ci)&&(ci=null),kl.forEach(Gy),Cl.forEach(Gy)}function La(n,e){n.blockedOn===e&&(n.blockedOn=null,dp||(dp=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,uk)))}function bl(n){function e(i){return La(i,n)}if(0<fc.length){La(fc[0],n);for(var t=1;t<fc.length;t++){var r=fc[t];r.blockedOn===n&&(r.blockedOn=null)}}for(li!==null&&La(li,n),ui!==null&&La(ui,n),ci!==null&&La(ci,n),kl.forEach(e),Cl.forEach(e),t=0;t<ei.length;t++)r=ei[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<ei.length&&(t=ei[0],t.blockedOn===null);)bE(t),t.blockedOn===null&&ei.shift()}var Eo=Dr.ReactCurrentBatchConfig,ad=!0;function ck(n,e,t,r){var i=we,s=Eo.transition;Eo.transition=null;try{we=1,Mm(n,e,t,r)}finally{we=i,Eo.transition=s}}function dk(n,e,t,r){var i=we,s=Eo.transition;Eo.transition=null;try{we=4,Mm(n,e,t,r)}finally{we=i,Eo.transition=s}}function Mm(n,e,t,r){if(ad){var i=hp(n,e,t,r);if(i===null)wf(n,e,r,ld,t),Wy(n,r);else if(lk(i,n,e,t,r))r.stopPropagation();else if(Wy(n,r),e&4&&-1<ak.indexOf(n)){for(;i!==null;){var s=gu(i);if(s!==null&&RE(s),s=hp(n,e,t,r),s===null&&wf(n,e,r,ld,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else wf(n,e,r,null,t)}}var ld=null;function hp(n,e,t,r){if(ld=null,n=Dm(r),n=ns(n),n!==null)if(e=xs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yE(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ld=n,null}function xE(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XP()){case Vm:return 1;case EE:return 4;case sd:case ZP:return 16;case TE:return 536870912;default:return 16}default:return 16}}var ii=null,Fm=null,Vc=null;function NE(){if(Vc)return Vc;var n,e=Fm,t=e.length,r,i="value"in ii?ii.value:ii.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Vc=i.slice(n,1<r?1-r:void 0)}function Oc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function pc(){return!0}function Ky(){return!1}function hn(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pc:Ky,this.isPropagationStopped=Ky,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Um=hn(ra),mu=je({},ra,{view:0,detail:0}),hk=hn(mu),df,hf,Ma,Yd=je({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ma&&(Ma&&n.type==="mousemove"?(df=n.screenX-Ma.screenX,hf=n.screenY-Ma.screenY):hf=df=0,Ma=n),df)},movementY:function(n){return"movementY"in n?n.movementY:hf}}),Hy=hn(Yd),fk=je({},Yd,{dataTransfer:0}),pk=hn(fk),mk=je({},mu,{relatedTarget:0}),ff=hn(mk),gk=je({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),_k=hn(gk),yk=je({},ra,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vk=hn(yk),wk=je({},ra,{data:0}),Qy=hn(wk),Ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ak(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Tk[n])?!!e[n]:!1}function jm(){return Ak}var Sk=je({},mu,{key:function(n){if(n.key){var e=Ik[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Oc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ek[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jm,charCode:function(n){return n.type==="keypress"?Oc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Rk=hn(Sk),Pk=je({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yy=hn(Pk),kk=je({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jm}),Ck=hn(kk),bk=je({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),xk=hn(bk),Nk=je({},Yd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=hn(Nk),Vk=[9,13,27,32],zm=Ar&&"CompositionEvent"in window,ul=null;Ar&&"documentMode"in document&&(ul=document.documentMode);var Ok=Ar&&"TextEvent"in window&&!ul,DE=Ar&&(!zm||ul&&8<ul&&11>=ul),Jy=" ",Xy=!1;function VE(n,e){switch(n){case"keyup":return Vk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OE(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function Lk(n,e){switch(n){case"compositionend":return OE(e);case"keypress":return e.which!==32?null:(Xy=!0,Jy);case"textInput":return n=e.data,n===Jy&&Xy?null:n;default:return null}}function Mk(n,e){if(ao)return n==="compositionend"||!zm&&VE(n,e)?(n=NE(),Vc=Fm=ii=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return DE&&e.locale!=="ko"?null:e.data;default:return null}}var Fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zy(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Fk[n.type]:e==="textarea"}function LE(n,e,t,r){fE(r),e=ud(e,"onChange"),0<e.length&&(t=new Um("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var cl=null,xl=null;function Uk(n){KE(n,0)}function Jd(n){var e=co(n);if(oE(e))return n}function jk(n,e){if(n==="change")return e}var ME=!1;if(Ar){var pf;if(Ar){var mf="oninput"in document;if(!mf){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),mf=typeof ev.oninput=="function"}pf=mf}else pf=!1;ME=pf&&(!document.documentMode||9<document.documentMode)}function tv(){cl&&(cl.detachEvent("onpropertychange",FE),xl=cl=null)}function FE(n){if(n.propertyName==="value"&&Jd(xl)){var e=[];LE(e,xl,n,Dm(n)),_E(Uk,e)}}function zk(n,e,t){n==="focusin"?(tv(),cl=e,xl=t,cl.attachEvent("onpropertychange",FE)):n==="focusout"&&tv()}function Bk(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jd(xl)}function $k(n,e){if(n==="click")return Jd(e)}function qk(n,e){if(n==="input"||n==="change")return Jd(e)}function Wk(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Un=typeof Object.is=="function"?Object.is:Wk;function Nl(n,e){if(Un(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Hf.call(e,i)||!Un(n[i],e[i]))return!1}return!0}function nv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rv(n,e){var t=nv(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nv(t)}}function UE(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?UE(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function jE(){for(var n=window,e=nd();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch(r){t=!1}if(t)n=e.contentWindow;else break;e=nd(n.document)}return e}function Bm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Gk(n){var e=jE(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&UE(t.ownerDocument.documentElement,t)){if(r!==null&&Bm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=rv(t,s);var o=rv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kk=Ar&&"documentMode"in document&&11>=document.documentMode,lo=null,fp=null,dl=null,pp=!1;function iv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pp||lo==null||lo!==nd(r)||(r=lo,"selectionStart"in r&&Bm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dl&&Nl(dl,r)||(dl=r,r=ud(fp,"onSelect"),0<r.length&&(e=new Um("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=lo)))}function mc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var uo={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},gf={},zE={};Ar&&(zE=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Xd(n){if(gf[n])return gf[n];if(!uo[n])return n;var e=uo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zE)return gf[n]=e[t];return n}var BE=Xd("animationend"),$E=Xd("animationiteration"),qE=Xd("animationstart"),WE=Xd("transitionend"),GE=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(n,e){GE.set(n,e),bs(e,[n])}for(var _f=0;_f<sv.length;_f++){var yf=sv[_f],Hk=yf.toLowerCase(),Qk=yf[0].toUpperCase()+yf.slice(1);bi(Hk,"on"+Qk)}bi(BE,"onAnimationEnd");bi($E,"onAnimationIteration");bi(qE,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(WE,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));function ov(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,HP(r,e,void 0,n),n.currentTarget=null}function KE(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,c),s=u}}}if(id)throw n=up,id=!1,up=null,n}function ke(n,e){var t=e[vp];t===void 0&&(t=e[vp]=new Set);var r=n+"__bubble";t.has(r)||(HE(e,n,2,!1),t.add(r))}function vf(n,e,t){var r=0;e&&(r|=4),HE(t,n,r,e)}var gc="_reactListening"+Math.random().toString(36).slice(2);function Dl(n){if(!n[gc]){n[gc]=!0,tE.forEach(function(t){t!=="selectionchange"&&(Yk.has(t)||vf(t,!1,n),vf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[gc]||(e[gc]=!0,vf("selectionchange",!1,e))}}function HE(n,e,t,r){switch(xE(e)){case 1:var i=ck;break;case 4:i=dk;break;default:i=Mm}t=i.bind(null,e,t,n),i=void 0,!lp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function wf(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_E(function(){var c=s,h=Dm(t),p=[];e:{var m=GE.get(n);if(m!==void 0){var w=Um,k=n;switch(n){case"keypress":if(Oc(t)===0)break e;case"keydown":case"keyup":w=Rk;break;case"focusin":k="focus",w=ff;break;case"focusout":k="blur",w=ff;break;case"beforeblur":case"afterblur":w=ff;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ck;break;case BE:case $E:case qE:w=_k;break;case WE:w=xk;break;case"scroll":w=hk;break;case"wheel":w=Dk;break;case"copy":case"cut":case"paste":w=vk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Yy}var C=(e&4)!==0,V=!C&&n==="scroll",A=C?m!==null?m+"Capture":null:m;C=[];for(var v=c,S;v!==null;){S=v;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,A!==null&&(L=Pl(v,A),L!=null&&C.push(Vl(v,L,S)))),V)break;v=v.return}0<C.length&&(m=new w(m,k,null,t,h),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",w=n==="mouseout"||n==="pointerout",m&&t!==op&&(k=t.relatedTarget||t.fromElement)&&(ns(k)||k[Sr]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=t.relatedTarget||t.toElement,w=c,k=k?ns(k):null,k!==null&&(V=xs(k),k!==V||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(C=Hy,L="onMouseLeave",A="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(C=Yy,L="onPointerLeave",A="onPointerEnter",v="pointer"),V=w==null?m:co(w),S=k==null?m:co(k),m=new C(L,v+"leave",w,t,h),m.target=V,m.relatedTarget=S,L=null,ns(h)===c&&(C=new C(A,v+"enter",k,t,h),C.target=S,C.relatedTarget=V,L=C),V=L,w&&k)t:{for(C=w,A=k,v=0,S=C;S;S=Hs(S))v++;for(S=0,L=A;L;L=Hs(L))S++;for(;0<v-S;)C=Hs(C),v--;for(;0<S-v;)A=Hs(A),S--;for(;v--;){if(C===A||A!==null&&C===A.alternate)break t;C=Hs(C),A=Hs(A)}C=null}else C=null;w!==null&&av(p,m,w,C,!1),k!==null&&V!==null&&av(p,V,k,C,!0)}}e:{if(m=c?co(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var B=jk;else if(Zy(m))if(ME)B=qk;else{B=Bk;var F=zk}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(B=$k);if(B&&(B=B(n,c))){LE(p,B,t,h);break e}F&&F(n,m,c),n==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&tp(m,"number",m.value)}switch(F=c?co(c):window,n){case"focusin":(Zy(F)||F.contentEditable==="true")&&(lo=F,fp=c,dl=null);break;case"focusout":dl=fp=lo=null;break;case"mousedown":pp=!0;break;case"contextmenu":case"mouseup":case"dragend":pp=!1,iv(p,t,h);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":iv(p,t,h)}var I;if(zm)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ao?VE(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(DE&&t.locale!=="ko"&&(ao||_!=="onCompositionStart"?_==="onCompositionEnd"&&ao&&(I=NE()):(ii=h,Fm="value"in ii?ii.value:ii.textContent,ao=!0)),F=ud(c,_),0<F.length&&(_=new Qy(_,n,null,t,h),p.push({event:_,listeners:F}),I?_.data=I:(I=OE(t),I!==null&&(_.data=I)))),(I=Ok?Lk(n,t):Mk(n,t))&&(c=ud(c,"onBeforeInput"),0<c.length&&(h=new Qy("onBeforeInput","beforeinput",null,t,h),p.push({event:h,listeners:c}),h.data=I))}KE(p,e)})}function Vl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ud(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pl(n,t),s!=null&&r.unshift(Vl(n,s,i)),s=Pl(n,e),s!=null&&r.push(Vl(n,s,i))),n=n.return}return r}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function av(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Pl(t,s),u!=null&&o.unshift(Vl(t,u,a))):i||(u=Pl(t,s),u!=null&&o.push(Vl(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Jk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function lv(n){return(typeof n=="string"?n:""+n).replace(Jk,`
`).replace(Xk,"")}function _c(n,e,t){if(e=lv(e),lv(n)!==e&&t)throw Error($(425))}function cd(){}var mp=null,gp=null;function _p(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,Zk=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,eC=typeof queueMicrotask=="function"?queueMicrotask:typeof uv!="undefined"?function(n){return uv.resolve(null).then(n).catch(tC)}:yp;function tC(n){setTimeout(function(){throw n})}function If(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),bl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);bl(e)}function di(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function cv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ia=Math.random().toString(36).slice(2),$n="__reactFiber$"+ia,Ol="__reactProps$"+ia,Sr="__reactContainer$"+ia,vp="__reactEvents$"+ia,nC="__reactListeners$"+ia,rC="__reactHandles$"+ia;function ns(n){var e=n[$n];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Sr]||t[$n]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cv(n);n!==null;){if(t=n[$n])return t;n=cv(n)}return e}n=t,t=n.parentNode}return null}function gu(n){return n=n[$n]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error($(33))}function Zd(n){return n[Ol]||null}var wp=[],ho=-1;function xi(n){return{current:n}}function be(n){0>ho||(n.current=wp[ho],wp[ho]=null,ho--)}function Se(n,e){ho++,wp[ho]=n.current,n.current=e}var vi={},Ct=xi(vi),Ht=xi(!1),fs=vi;function Do(n,e){var t=n.type.contextTypes;if(!t)return vi;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(n){return n=n.childContextTypes,n!=null}function dd(){be(Ht),be(Ct)}function dv(n,e,t){if(Ct.current!==vi)throw Error($(168));Se(Ct,e),Se(Ht,t)}function QE(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,zP(n)||"Unknown",i));return je({},t,r)}function hd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vi,fs=Ct.current,Se(Ct,n),Se(Ht,Ht.current),!0}function hv(n,e,t){var r=n.stateNode;if(!r)throw Error($(169));t?(n=QE(n,e,fs),r.__reactInternalMemoizedMergedChildContext=n,be(Ht),be(Ct),Se(Ct,n)):be(Ht),Se(Ht,t)}var gr=null,eh=!1,Ef=!1;function YE(n){gr===null?gr=[n]:gr.push(n)}function iC(n){eh=!0,YE(n)}function Ni(){if(!Ef&&gr!==null){Ef=!0;var n=0,e=we;try{var t=gr;for(we=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}gr=null,eh=!1}catch(i){throw gr!==null&&(gr=gr.slice(n+1)),IE(Vm,Ni),i}finally{we=e,Ef=!1}}return null}var fo=[],po=0,fd=null,pd=0,yn=[],vn=0,ps=null,_r=1,yr="";function Ki(n,e){fo[po++]=pd,fo[po++]=fd,fd=n,pd=e}function JE(n,e,t){yn[vn++]=_r,yn[vn++]=yr,yn[vn++]=ps,ps=n;var r=_r;n=yr;var i=32-Mn(r)-1;r&=~(1<<i),t+=1;var s=32-Mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-Mn(e)+i|t<<i|r,yr=s+n}else _r=1<<s|t<<i|r,yr=n}function $m(n){n.return!==null&&(Ki(n,1),JE(n,1,0))}function qm(n){for(;n===fd;)fd=fo[--po],fo[po]=null,pd=fo[--po],fo[po]=null;for(;n===ps;)ps=yn[--vn],yn[vn]=null,yr=yn[--vn],yn[vn]=null,_r=yn[--vn],yn[vn]=null}var an=null,rn=null,De=!1,Ln=null;function XE(n,e){var t=wn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function fv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,an=n,rn=di(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,an=n,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ps!==null?{id:_r,overflow:yr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=wn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,an=n,rn=null,!0):!1;default:return!1}}function Ip(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ep(n){if(De){var e=rn;if(e){var t=e;if(!fv(n,e)){if(Ip(n))throw Error($(418));e=di(t.nextSibling);var r=an;e&&fv(n,e)?XE(r,t):(n.flags=n.flags&-4097|2,De=!1,an=n)}}else{if(Ip(n))throw Error($(418));n.flags=n.flags&-4097|2,De=!1,an=n}}}function pv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function yc(n){if(n!==an)return!1;if(!De)return pv(n),De=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_p(n.type,n.memoizedProps)),e&&(e=rn)){if(Ip(n))throw ZE(),Error($(418));for(;e;)XE(n,e),e=di(e.nextSibling)}if(pv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error($(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){rn=di(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}rn=null}}else rn=an?di(n.stateNode.nextSibling):null;return!0}function ZE(){for(var n=rn;n;)n=di(n.nextSibling)}function Vo(){rn=an=null,De=!1}function Wm(n){Ln===null?Ln=[n]:Ln.push(n)}var sC=Dr.ReactCurrentBatchConfig;function Fa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error($(309));var r=t.stateNode}if(!r)throw Error($(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error($(284));if(!t._owner)throw Error($(290,n))}return n}function vc(n,e){throw n=Object.prototype.toString.call(e),Error($(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mv(n){var e=n._init;return e(n._payload)}function eT(n){function e(A,v){if(n){var S=A.deletions;S===null?(A.deletions=[v],A.flags|=16):S.push(v)}}function t(A,v){if(!n)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function r(A,v){for(A=new Map;v!==null;)v.key!==null?A.set(v.key,v):A.set(v.index,v),v=v.sibling;return A}function i(A,v){return A=mi(A,v),A.index=0,A.sibling=null,A}function s(A,v,S){return A.index=S,n?(S=A.alternate,S!==null?(S=S.index,S<v?(A.flags|=2,v):S):(A.flags|=2,v)):(A.flags|=1048576,v)}function o(A){return n&&A.alternate===null&&(A.flags|=2),A}function a(A,v,S,L){return v===null||v.tag!==6?(v=Cf(S,A.mode,L),v.return=A,v):(v=i(v,S),v.return=A,v)}function u(A,v,S,L){var B=S.type;return B===oo?h(A,v,S.props.children,L,S.key):v!==null&&(v.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Xr&&mv(B)===v.type)?(L=i(v,S.props),L.ref=Fa(A,v,S),L.return=A,L):(L=Bc(S.type,S.key,S.props,null,A.mode,L),L.ref=Fa(A,v,S),L.return=A,L)}function c(A,v,S,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=bf(S,A.mode,L),v.return=A,v):(v=i(v,S.children||[]),v.return=A,v)}function h(A,v,S,L,B){return v===null||v.tag!==7?(v=us(S,A.mode,L,B),v.return=A,v):(v=i(v,S),v.return=A,v)}function p(A,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Cf(""+v,A.mode,S),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lc:return S=Bc(v.type,v.key,v.props,null,A.mode,S),S.ref=Fa(A,null,v),S.return=A,S;case so:return v=bf(v,A.mode,S),v.return=A,v;case Xr:var L=v._init;return p(A,L(v._payload),S)}if(Ya(v)||Da(v))return v=us(v,A.mode,S,null),v.return=A,v;vc(A,v)}return null}function m(A,v,S,L){var B=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return B!==null?null:a(A,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lc:return S.key===B?u(A,v,S,L):null;case so:return S.key===B?c(A,v,S,L):null;case Xr:return B=S._init,m(A,v,B(S._payload),L)}if(Ya(S)||Da(S))return B!==null?null:h(A,v,S,L,null);vc(A,S)}return null}function w(A,v,S,L,B){if(typeof L=="string"&&L!==""||typeof L=="number")return A=A.get(S)||null,a(v,A,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case lc:return A=A.get(L.key===null?S:L.key)||null,u(v,A,L,B);case so:return A=A.get(L.key===null?S:L.key)||null,c(v,A,L,B);case Xr:var F=L._init;return w(A,v,S,F(L._payload),B)}if(Ya(L)||Da(L))return A=A.get(S)||null,h(v,A,L,B,null);vc(v,L)}return null}function k(A,v,S,L){for(var B=null,F=null,I=v,_=v=0,E=null;I!==null&&_<S.length;_++){I.index>_?(E=I,I=null):E=I.sibling;var T=m(A,I,S[_],L);if(T===null){I===null&&(I=E);break}n&&I&&T.alternate===null&&e(A,I),v=s(T,v,_),F===null?B=T:F.sibling=T,F=T,I=E}if(_===S.length)return t(A,I),De&&Ki(A,_),B;if(I===null){for(;_<S.length;_++)I=p(A,S[_],L),I!==null&&(v=s(I,v,_),F===null?B=I:F.sibling=I,F=I);return De&&Ki(A,_),B}for(I=r(A,I);_<S.length;_++)E=w(I,A,_,S[_],L),E!==null&&(n&&E.alternate!==null&&I.delete(E.key===null?_:E.key),v=s(E,v,_),F===null?B=E:F.sibling=E,F=E);return n&&I.forEach(function(P){return e(A,P)}),De&&Ki(A,_),B}function C(A,v,S,L){var B=Da(S);if(typeof B!="function")throw Error($(150));if(S=B.call(S),S==null)throw Error($(151));for(var F=B=null,I=v,_=v=0,E=null,T=S.next();I!==null&&!T.done;_++,T=S.next()){I.index>_?(E=I,I=null):E=I.sibling;var P=m(A,I,T.value,L);if(P===null){I===null&&(I=E);break}n&&I&&P.alternate===null&&e(A,I),v=s(P,v,_),F===null?B=P:F.sibling=P,F=P,I=E}if(T.done)return t(A,I),De&&Ki(A,_),B;if(I===null){for(;!T.done;_++,T=S.next())T=p(A,T.value,L),T!==null&&(v=s(T,v,_),F===null?B=T:F.sibling=T,F=T);return De&&Ki(A,_),B}for(I=r(A,I);!T.done;_++,T=S.next())T=w(I,A,_,T.value,L),T!==null&&(n&&T.alternate!==null&&I.delete(T.key===null?_:T.key),v=s(T,v,_),F===null?B=T:F.sibling=T,F=T);return n&&I.forEach(function(b){return e(A,b)}),De&&Ki(A,_),B}function V(A,v,S,L){if(typeof S=="object"&&S!==null&&S.type===oo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case lc:e:{for(var B=S.key,F=v;F!==null;){if(F.key===B){if(B=S.type,B===oo){if(F.tag===7){t(A,F.sibling),v=i(F,S.props.children),v.return=A,A=v;break e}}else if(F.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Xr&&mv(B)===F.type){t(A,F.sibling),v=i(F,S.props),v.ref=Fa(A,F,S),v.return=A,A=v;break e}t(A,F);break}else e(A,F);F=F.sibling}S.type===oo?(v=us(S.props.children,A.mode,L,S.key),v.return=A,A=v):(L=Bc(S.type,S.key,S.props,null,A.mode,L),L.ref=Fa(A,v,S),L.return=A,A=L)}return o(A);case so:e:{for(F=S.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(A,v.sibling),v=i(v,S.children||[]),v.return=A,A=v;break e}else{t(A,v);break}else e(A,v);v=v.sibling}v=bf(S,A.mode,L),v.return=A,A=v}return o(A);case Xr:return F=S._init,V(A,v,F(S._payload),L)}if(Ya(S))return k(A,v,S,L);if(Da(S))return C(A,v,S,L);vc(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(t(A,v.sibling),v=i(v,S),v.return=A,A=v):(t(A,v),v=Cf(S,A.mode,L),v.return=A,A=v),o(A)):t(A,v)}return V}var Oo=eT(!0),tT=eT(!1),md=xi(null),gd=null,mo=null,Gm=null;function Km(){Gm=mo=gd=null}function Hm(n){var e=md.current;be(md),n._currentValue=e}function Tp(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function To(n,e){gd=n,Gm=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(qt=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if(Gm!==n)if(n={context:n,memoizedValue:e,next:null},mo===null){if(gd===null)throw Error($(308));mo=n,gd.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return e}var rs=null;function Qm(n){rs===null?rs=[n]:rs.push(n)}function nT(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,Qm(e)):(t.next=i.next,i.next=t),e.interleaved=t,Rr(n,r)}function Rr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Zr=!1;function Ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rT(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hi(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rr(n,t)}return i=r.interleaved,i===null?(e.next=e,Qm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rr(n,t)}function Lc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Om(n,t)}}function gv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function _d(n,e,t,r){var i=n.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=n,C=a;switch(m=e,w=t,C.tag){case 1:if(k=C.payload,typeof k=="function"){p=k.call(w,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(w,p,m):k,m==null)break e;p=je({},p,m);break e;case 2:Zr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,u=p):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gs|=o,n.lanes=o,n.memoizedState=p}}function _v(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error($(191,i));i.call(r)}}}var _u={},Xn=xi(_u),Ll=xi(_u),Ml=xi(_u);function is(n){if(n===_u)throw Error($(174));return n}function Jm(n,e){switch(Se(Ml,e),Se(Ll,n),Se(Xn,_u),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rp(e,n)}be(Xn),Se(Xn,e)}function Lo(){be(Xn),be(Ll),be(Ml)}function iT(n){is(Ml.current);var e=is(Xn.current),t=rp(e,n.type);e!==t&&(Se(Ll,n),Se(Xn,t))}function Xm(n){Ll.current===n&&(be(Xn),be(Ll))}var Me=xi(0);function yd(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tf=[];function Zm(){for(var n=0;n<Tf.length;n++)Tf[n]._workInProgressVersionPrimary=null;Tf.length=0}var Mc=Dr.ReactCurrentDispatcher,Af=Dr.ReactCurrentBatchConfig,ms=0,Fe=null,it=null,ut=null,vd=!1,hl=!1,Fl=0,oC=0;function At(){throw Error($(321))}function eg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Un(n[t],e[t]))return!1;return!0}function tg(n,e,t,r,i,s){if(ms=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mc.current=n===null||n.memoizedState===null?cC:dC,n=t(r,i),hl){s=0;do{if(hl=!1,Fl=0,25<=s)throw Error($(301));s+=1,ut=it=null,e.updateQueue=null,Mc.current=hC,n=t(r,i)}while(hl)}if(Mc.current=wd,e=it!==null&&it.next!==null,ms=0,ut=it=Fe=null,vd=!1,e)throw Error($(300));return n}function ng(){var n=Fl!==0;return Fl=0,n}function Bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Fe.memoizedState=ut=n:ut=ut.next=n,ut}function Sn(){if(it===null){var n=Fe.alternate;n=n!==null?n.memoizedState:null}else n=it.next;var e=ut===null?Fe.memoizedState:ut.next;if(e!==null)ut=e,it=n;else{if(n===null)throw Error($(310));it=n,n={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Fe.memoizedState=ut=n:ut=ut.next=n}return ut}function Ul(n,e){return typeof e=="function"?e(n):e}function Sf(n){var e=Sn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var r=it,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ms&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Fe.lanes|=h,gs|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Un(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Fe.lanes|=s,gs|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Rf(n){var e=Sn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);Un(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function sT(){}function oT(n,e){var t=Fe,r=Sn(),i=e(),s=!Un(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,rg(uT.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(t.flags|=2048,jl(9,lT.bind(null,t,r,i,e),void 0,null),dt===null)throw Error($(349));ms&30||aT(t,e,i)}return i}function aT(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lT(n,e,t,r){e.value=t,e.getSnapshot=r,cT(e)&&dT(n)}function uT(n,e,t){return t(function(){cT(e)&&dT(n)})}function cT(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Un(n,t)}catch(r){return!0}}function dT(n){var e=Rr(n,1);e!==null&&Fn(e,n,1,-1)}function yv(n){var e=Bn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:n},e.queue=n,n=n.dispatch=uC.bind(null,Fe,n),[e.memoizedState,n]}function jl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function hT(){return Sn().memoizedState}function Fc(n,e,t,r){var i=Bn();Fe.flags|=n,i.memoizedState=jl(1|e,t,void 0,r===void 0?null:r)}function th(n,e,t,r){var i=Sn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&eg(r,o.deps)){i.memoizedState=jl(e,t,s,r);return}}Fe.flags|=n,i.memoizedState=jl(1|e,t,s,r)}function vv(n,e){return Fc(8390656,8,n,e)}function rg(n,e){return th(2048,8,n,e)}function fT(n,e){return th(4,2,n,e)}function pT(n,e){return th(4,4,n,e)}function mT(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gT(n,e,t){return t=t!=null?t.concat([n]):null,th(4,4,mT.bind(null,e,n),t)}function ig(){}function _T(n,e){var t=Sn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function yT(n,e){var t=Sn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&eg(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function vT(n,e,t){return ms&21?(Un(t,e)||(t=AE(),Fe.lanes|=t,gs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=t)}function aC(n,e){var t=we;we=t!==0&&4>t?t:4,n(!0);var r=Af.transition;Af.transition={};try{n(!1),e()}finally{we=t,Af.transition=r}}function wT(){return Sn().memoizedState}function lC(n,e,t){var r=pi(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},IT(n))ET(e,t);else if(t=nT(n,e,t,r),t!==null){var i=Vt();Fn(t,n,r,i),TT(t,e,r)}}function uC(n,e,t){var r=pi(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(IT(n))ET(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Un(a,o)){var u=e.interleaved;u===null?(i.next=i,Qm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch(c){}finally{}t=nT(n,e,i,r),t!==null&&(i=Vt(),Fn(t,n,r,i),TT(t,e,r))}}function IT(n){var e=n.alternate;return n===Fe||e!==null&&e===Fe}function ET(n,e){hl=vd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function TT(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Om(n,t)}}var wd={readContext:An,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},cC={readContext:An,useCallback:function(n,e){return Bn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:vv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Fc(4194308,4,mT.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Fc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Fc(4,2,n,e)},useMemo:function(n,e){var t=Bn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Bn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=lC.bind(null,Fe,n),[r.memoizedState,n]},useRef:function(n){var e=Bn();return n={current:n},e.memoizedState=n},useState:yv,useDebugValue:ig,useDeferredValue:function(n){return Bn().memoizedState=n},useTransition:function(){var n=yv(!1),e=n[0];return n=aC.bind(null,n[1]),Bn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Fe,i=Bn();if(De){if(t===void 0)throw Error($(407));t=t()}else{if(t=e(),dt===null)throw Error($(349));ms&30||aT(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,vv(uT.bind(null,r,s,n),[n]),r.flags|=2048,jl(9,lT.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Bn(),e=dt.identifierPrefix;if(De){var t=yr,r=_r;t=(r&~(1<<32-Mn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Fl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=oC++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dC={readContext:An,useCallback:_T,useContext:An,useEffect:rg,useImperativeHandle:gT,useInsertionEffect:fT,useLayoutEffect:pT,useMemo:yT,useReducer:Sf,useRef:hT,useState:function(){return Sf(Ul)},useDebugValue:ig,useDeferredValue:function(n){var e=Sn();return vT(e,it.memoizedState,n)},useTransition:function(){var n=Sf(Ul)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:sT,useSyncExternalStore:oT,useId:wT,unstable_isNewReconciler:!1},hC={readContext:An,useCallback:_T,useContext:An,useEffect:rg,useImperativeHandle:gT,useInsertionEffect:fT,useLayoutEffect:pT,useMemo:yT,useReducer:Rf,useRef:hT,useState:function(){return Rf(Ul)},useDebugValue:ig,useDeferredValue:function(n){var e=Sn();return it===null?e.memoizedState=n:vT(e,it.memoizedState,n)},useTransition:function(){var n=Rf(Ul)[0],e=Sn().memoizedState;return[n,e]},useMutableSource:sT,useSyncExternalStore:oT,useId:wT,unstable_isNewReconciler:!1};function Vn(n,e){if(n&&n.defaultProps){e=je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ap(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var nh={isMounted:function(n){return(n=n._reactInternals)?xs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Vt(),i=pi(n),s=Er(r,i);s.payload=e,t!=null&&(s.callback=t),e=hi(n,s,i),e!==null&&(Fn(e,n,i,r),Lc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Vt(),i=pi(n),s=Er(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hi(n,s,i),e!==null&&(Fn(e,n,i,r),Lc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vt(),r=pi(n),i=Er(t,r);i.tag=2,e!=null&&(i.callback=e),e=hi(n,i,r),e!==null&&(Fn(e,n,r,t),Lc(e,n,r))}};function wv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nl(t,r)||!Nl(i,s):!0}function AT(n,e,t){var r=!1,i=vi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=Qt(e)?fs:Ct.current,r=e.contextTypes,s=(r=r!=null)?Do(n,i):vi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nh,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Iv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&nh.enqueueReplaceState(e,e.state,null)}function Sp(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Ym(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=Qt(e)?fs:Ct.current,i.context=Do(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ap(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nh.enqueueReplaceState(i,i.state,null),_d(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Mo(n,e){try{var t="",r=e;do t+=jP(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Pf(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Rp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fC=typeof WeakMap=="function"?WeakMap:Map;function ST(n,e,t){t=Er(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Ed||(Ed=!0,Lp=r),Rp(n,e)},t}function RT(n,e,t){t=Er(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Rp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Rp(n,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ev(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new fC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=PC.bind(null,n,e,t),e.then(n,n))}function Tv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Av(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Er(-1,1),e.tag=2,hi(t,e,1))),t.lanes|=1),n)}var pC=Dr.ReactCurrentOwner,qt=!1;function xt(n,e,t,r){e.child=n===null?tT(e,null,t,r):Oo(e,n.child,t,r)}function Sv(n,e,t,r,i){t=t.render;var s=e.ref;return To(e,i),r=tg(n,e,t,r,s,i),t=ng(),n!==null&&!qt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Pr(n,e,i)):(De&&t&&$m(e),e.flags|=1,xt(n,e,r,i),e.child)}function Rv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!hg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,PT(n,e,s,r,i)):(n=Bc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Nl,t(o,r)&&n.ref===e.ref)return Pr(n,e,i)}return e.flags|=1,n=mi(s,r),n.ref=e.ref,n.return=e,e.child=n}function PT(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Nl(s,r)&&n.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(qt=!0);else return e.lanes=n.lanes,Pr(n,e,i)}return Pp(n,e,t,r,i)}function kT(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(_o,tn),tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Se(_o,tn),tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,Se(_o,tn),tn|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,Se(_o,tn),tn|=r;return xt(n,e,i,t),e.child}function CT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Pp(n,e,t,r,i){var s=Qt(t)?fs:Ct.current;return s=Do(e,s),To(e,i),t=tg(n,e,t,r,s,i),r=ng(),n!==null&&!qt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Pr(n,e,i)):(De&&r&&$m(e),e.flags|=1,xt(n,e,t,i),e.child)}function Pv(n,e,t,r,i){if(Qt(t)){var s=!0;hd(e)}else s=!1;if(To(e,i),e.stateNode===null)Uc(n,e),AT(e,t,r),Sp(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=An(c):(c=Qt(t)?fs:Ct.current,c=Do(e,c));var h=t.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Iv(e,o,r,c),Zr=!1;var m=e.memoizedState;o.state=m,_d(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ht.current||Zr?(typeof h=="function"&&(Ap(e,t,h,r),u=e.memoizedState),(a=Zr||wv(e,t,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rT(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=An(u):(u=Qt(t)?fs:Ct.current,u=Do(e,u));var w=t.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Iv(e,o,r,u),Zr=!1,m=e.memoizedState,o.state=m,_d(e,r,o,i);var k=e.memoizedState;a!==p||m!==k||Ht.current||Zr?(typeof w=="function"&&(Ap(e,t,w,r),k=e.memoizedState),(c=Zr||wv(e,t,c,r,m,k,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return kp(n,e,t,r,s,i)}function kp(n,e,t,r,i,s){CT(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hv(e,t,!1),Pr(n,e,s);r=e.stateNode,pC.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=Oo(e,n.child,null,s),e.child=Oo(e,null,a,s)):xt(n,e,a,s),e.memoizedState=r.state,i&&hv(e,t,!0),e.child}function bT(n){var e=n.stateNode;e.pendingContext?dv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(n,e.context,!1),Jm(n,e.containerInfo)}function kv(n,e,t,r,i){return Vo(),Wm(i),e.flags|=256,xt(n,e,t,r),e.child}var Cp={dehydrated:null,treeContext:null,retryLane:0};function bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function xT(n,e,t){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),Se(Me,i&1),n===null)return Ep(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sh(o,r,0,null),n=us(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bp(t),e.memoizedState=Cp,n):sg(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mC(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mi(a,s):(s=us(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Cp,r}return s=n.child,n=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function sg(n,e){return e=sh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function wc(n,e,t,r){return r!==null&&Wm(r),Oo(e,n.child,null,t),n=sg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mC(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Pf(Error($(422))),wc(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sh({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oo(e,n.child,null,o),e.child.memoizedState=bp(o),e.memoizedState=Cp,s);if(!(e.mode&1))return wc(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Pf(s,r,void 0),wc(n,e,o,r)}if(a=(o&n.childLanes)!==0,qt||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rr(n,i),Fn(r,n,i,-1))}return dg(),r=Pf(Error($(421))),wc(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=kC.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,rn=di(i.nextSibling),an=e,De=!0,Ln=null,n!==null&&(yn[vn++]=_r,yn[vn++]=yr,yn[vn++]=ps,_r=n.id,yr=n.overflow,ps=e),e=sg(e,r.children),e.flags|=4096,e)}function Cv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Tp(n.return,e,t)}function kf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function NT(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(n,e,r.children,t),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cv(n,t,e);else if(n.tag===19)Cv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(Se(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&yd(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),kf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&yd(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}kf(e,!0,t,null,s);break;case"together":kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Pr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),gs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error($(153));if(e.child!==null){for(n=e.child,t=mi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=mi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gC(n,e,t){switch(e.tag){case 3:bT(e),Vo();break;case 5:iT(e);break;case 1:Qt(e.type)&&hd(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(md,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Me,Me.current&1),e.flags|=128,null):t&e.child.childLanes?xT(n,e,t):(Se(Me,Me.current&1),n=Pr(n,e,t),n!==null?n.sibling:null);Se(Me,Me.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return NT(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,kT(n,e,t)}return Pr(n,e,t)}var DT,xp,VT,OT;DT=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};xp=function(){};VT=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,is(Xn.current);var s=null;switch(t){case"input":i=Zf(n,i),r=Zf(n,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=np(n,i),r=np(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=cd)}ip(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ke("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};OT=function(n,e,t,r){t!==r&&(e.flags|=4)};function Ua(n,e){if(!De)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function St(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function _C(n,e,t){var r=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Qt(e.type)&&dd(),St(e),null;case 3:return r=e.stateNode,Lo(),be(Ht),be(Ct),Zm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(yc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Up(Ln),Ln=null))),xp(n,e),St(e),null;case 5:Xm(e);var i=is(Ml.current);if(t=e.type,n!==null&&e.stateNode!=null)VT(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return St(e),null}if(n=is(Xn.current),yc(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Ol]=s,n=(e.mode&1)!==0,t){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Xa.length;i++)ke(Xa[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Fy(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":jy(r,s),ke("invalid",r)}ip(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_c(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_c(r.textContent,a,n),i=["children",""+a]):Sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(t){case"input":uc(r),Uy(r,s,!0);break;case"textarea":uc(r),zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uE(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[$n]=e,n[Ol]=r,DT(n,e,!1,!1),e.stateNode=n;e:{switch(o=sp(t,r),t){case"dialog":ke("cancel",n),ke("close",n),i=r;break;case"iframe":case"object":case"embed":ke("load",n),i=r;break;case"video":case"audio":for(i=0;i<Xa.length;i++)ke(Xa[i],n);i=r;break;case"source":ke("error",n),i=r;break;case"img":case"image":case"link":ke("error",n),ke("load",n),i=r;break;case"details":ke("toggle",n),i=r;break;case"input":Fy(n,r),i=Zf(n,r),ke("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),ke("invalid",n);break;case"textarea":jy(n,r),i=np(n,r),ke("invalid",n);break;default:i=r}ip(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?hE(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cE(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Rl(n,u):typeof u=="number"&&Rl(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ke("scroll",n):u!=null&&Cm(n,s,u,o))}switch(t){case"input":uc(n),Uy(n,r,!1);break;case"textarea":uc(n),zy(n);break;case"option":r.value!=null&&n.setAttribute("value",""+yi(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?vo(n,!!r.multiple,s,!1):r.defaultValue!=null&&vo(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=cd)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(n&&e.stateNode!=null)OT(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(t=is(Ml.current),is(Xn.current),yc(e)){if(r=e.stateNode,t=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==t)&&(n=an,n!==null))switch(n.tag){case 3:_c(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_c(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return St(e),null;case 13:if(be(Me),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(De&&rn!==null&&e.mode&1&&!(e.flags&128))ZE(),Vo(),e.flags|=98560,s=!1;else if(s=yc(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[$n]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else Ln!==null&&(Up(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Me.current&1?st===0&&(st=3):dg())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Lo(),xp(n,e),n===null&&Dl(e.stateNode.containerInfo),St(e),null;case 10:return Hm(e.type._context),St(e),null;case 17:return Qt(e.type)&&dd(),St(e),null;case 19:if(be(Me),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ua(s,!1);else{if(st!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=yd(n),o!==null){for(e.flags|=128,Ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Se(Me,Me.current&1|2),e.child}n=n.sibling}s.tail!==null&&Qe()>Fo&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304)}else{if(!r)if(n=yd(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return St(e),null}else 2*Qe()-s.renderingStartTime>Fo&&t!==1073741824&&(e.flags|=128,r=!0,Ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,t=Me.current,Se(Me,r?t&1|2:t&1),e):(St(e),null);case 22:case 23:return cg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function yC(n,e){switch(qm(e),e.tag){case 1:return Qt(e.type)&&dd(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Lo(),be(Ht),be(Ct),Zm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Xm(e),null;case 13:if(be(Me),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error($(340));Vo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return be(Me),null;case 4:return Lo(),null;case 10:return Hm(e.type._context),null;case 22:case 23:return cg(),null;case 24:return null;default:return null}}var Ic=!1,kt=!1,vC=typeof WeakSet=="function"?WeakSet:Set,J=null;function go(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$e(n,e,r)}else t.current=null}function Np(n,e,t){try{t()}catch(r){$e(n,e,r)}}var bv=!1;function wC(n,e){if(mp=ad,n=jE(),Bm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch(L){t=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=n,m=null;t:for(;;){for(var w;p!==t||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(gp={focusedElem:n,selectionRange:t},ad=!1,J=e;J!==null;)if(e=J,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,J=n;else for(;J!==null;){e=J;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,V=k.memoizedState,A=e.stateNode,v=A.getSnapshotBeforeUpdate(e.elementType===e.type?C:Vn(e.type,C),V);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(L){$e(e,e.return,L)}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}return k=bv,bv=!1,k}function fl(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&Np(e,t,s)}i=i.next}while(i!==r)}}function rh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Dp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function LT(n){var e=n.alternate;e!==null&&(n.alternate=null,LT(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[$n],delete e[Ol],delete e[vp],delete e[nC],delete e[rC])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function MT(n){return n.tag===5||n.tag===3||n.tag===4}function xv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||MT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=cd));else if(r!==4&&(n=n.child,n!==null))for(Vp(n,e,t),n=n.sibling;n!==null;)Vp(n,e,t),n=n.sibling}function Op(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Op(n,e,t),n=n.sibling;n!==null;)Op(n,e,t),n=n.sibling}var mt=null,On=!1;function Kr(n,e,t){for(t=t.child;t!==null;)FT(n,e,t),t=t.sibling}function FT(n,e,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Qd,t)}catch(a){}switch(t.tag){case 5:kt||go(t,e);case 6:var r=mt,i=On;mt=null,Kr(n,e,t),mt=r,On=i,mt!==null&&(On?(n=mt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mt.removeChild(t.stateNode));break;case 18:mt!==null&&(On?(n=mt,t=t.stateNode,n.nodeType===8?If(n.parentNode,t):n.nodeType===1&&If(n,t),bl(n)):If(mt,t.stateNode));break;case 4:r=mt,i=On,mt=t.stateNode.containerInfo,On=!0,Kr(n,e,t),mt=r,On=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(t,e,o),i=i.next}while(i!==r)}Kr(n,e,t);break;case 1:if(!kt&&(go(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){$e(t,e,a)}Kr(n,e,t);break;case 21:Kr(n,e,t);break;case 22:t.mode&1?(kt=(r=kt)||t.memoizedState!==null,Kr(n,e,t),kt=r):Kr(n,e,t);break;default:Kr(n,e,t)}}function Nv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vC),e.forEach(function(r){var i=CC.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Dn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,On=!1;break e;case 3:mt=a.stateNode.containerInfo,On=!0;break e;case 4:mt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(mt===null)throw Error($(160));FT(s,o,i),mt=null,On=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){$e(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UT(e,n),e=e.sibling}function UT(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(e,n),zn(n),r&4){try{fl(3,n,n.return),rh(3,n)}catch(C){$e(n,n.return,C)}try{fl(5,n,n.return)}catch(C){$e(n,n.return,C)}}break;case 1:Dn(e,n),zn(n),r&512&&t!==null&&go(t,t.return);break;case 5:if(Dn(e,n),zn(n),r&512&&t!==null&&go(t,t.return),n.flags&32){var i=n.stateNode;try{Rl(i,"")}catch(C){$e(n,n.return,C)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&aE(i,s),sp(a,o);var c=sp(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?hE(i,p):h==="dangerouslySetInnerHTML"?cE(i,p):h==="children"?Rl(i,p):Cm(i,h,p,c)}switch(a){case"input":ep(i,s);break;case"textarea":lE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?vo(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?vo(i,!!s.multiple,s.defaultValue,!0):vo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ol]=s}catch(C){$e(n,n.return,C)}}break;case 6:if(Dn(e,n),zn(n),r&4){if(n.stateNode===null)throw Error($(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(C){$e(n,n.return,C)}}break;case 3:if(Dn(e,n),zn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{bl(e.containerInfo)}catch(C){$e(n,n.return,C)}break;case 4:Dn(e,n),zn(n);break;case 13:Dn(e,n),zn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lg=Qe())),r&4&&Nv(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(kt=(c=kt)||h,Dn(e,n),kt=c):Dn(e,n),zn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(J=n,h=n.child;h!==null;){for(p=J=h;J!==null;){switch(m=J,w=m.child,m.tag){case 0:case 11:case 14:case 15:fl(4,m,m.return);break;case 1:go(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(C){$e(r,t,C)}}break;case 5:go(m,m.return);break;case 22:if(m.memoizedState!==null){Vv(p);continue}}w!==null?(w.return=m,J=w):Vv(p)}h=h.sibling}e:for(h=null,p=n;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=dE("display",o))}catch(C){$e(n,n.return,C)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){$e(n,n.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dn(e,n),zn(n),r&4&&Nv(n);break;case 21:break;default:Dn(e,n),zn(n)}}function zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(MT(t)){var r=t;break e}t=t.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rl(i,""),r.flags&=-33);var s=xv(n);Op(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xv(n);Vp(n,a,o);break;default:throw Error($(161))}}catch(u){$e(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function IC(n,e,t){J=n,jT(n)}function jT(n,e,t){for(var r=(n.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ic;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||kt;a=Ic;var c=kt;if(Ic=o,(kt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?Ov(i):u!==null?(u.return=o,J=u):Ov(i);for(;s!==null;)J=s,jT(s),s=s.sibling;J=i,Ic=a,kt=c}Dv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Dv(n)}}function Dv(n){for(;J!==null;){var e=J;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||rh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Vn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}_v(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&bl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}kt||e.flags&512&&Dp(e)}catch(m){$e(e,e.return,m)}}if(e===n){J=null;break}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}}function Vv(n){for(;J!==null;){var e=J;if(e===n){J=null;break}var t=e.sibling;if(t!==null){t.return=e.return,J=t;break}J=e.return}}function Ov(n){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{rh(4,e)}catch(u){$e(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var s=e.return;try{Dp(e)}catch(u){$e(e,s,u)}break;case 5:var o=e.return;try{Dp(e)}catch(u){$e(e,o,u)}}}catch(u){$e(e,e.return,u)}if(e===n){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var EC=Math.ceil,Id=Dr.ReactCurrentDispatcher,og=Dr.ReactCurrentOwner,En=Dr.ReactCurrentBatchConfig,fe=0,dt=null,nt=null,yt=0,tn=0,_o=xi(0),st=0,zl=null,gs=0,ih=0,ag=0,pl=null,$t=null,lg=0,Fo=1/0,mr=null,Ed=!1,Lp=null,fi=null,Ec=!1,si=null,Td=0,ml=0,Mp=null,jc=-1,zc=0;function Vt(){return fe&6?Qe():jc!==-1?jc:jc=Qe()}function pi(n){return n.mode&1?fe&2&&yt!==0?yt&-yt:sC.transition!==null?(zc===0&&(zc=AE()),zc):(n=we,n!==0||(n=window.event,n=n===void 0?16:xE(n.type)),n):1}function Fn(n,e,t,r){if(50<ml)throw ml=0,Mp=null,Error($(185));pu(n,t,r),(!(fe&2)||n!==dt)&&(n===dt&&(!(fe&2)&&(ih|=t),st===4&&ti(n,yt)),Yt(n,r),t===1&&fe===0&&!(e.mode&1)&&(Fo=Qe()+500,eh&&Ni()))}function Yt(n,e){var t=n.callbackNode;sk(n,e);var r=od(n,n===dt?yt:0);if(r===0)t!==null&&qy(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&qy(t),e===1)n.tag===0?iC(Lv.bind(null,n)):YE(Lv.bind(null,n)),eC(function(){!(fe&6)&&Ni()}),t=null;else{switch(SE(r)){case 1:t=Vm;break;case 4:t=EE;break;case 16:t=sd;break;case 536870912:t=TE;break;default:t=sd}t=HT(t,zT.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zT(n,e){if(jc=-1,zc=0,fe&6)throw Error($(327));var t=n.callbackNode;if(Ao()&&n.callbackNode!==t)return null;var r=od(n,n===dt?yt:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Ad(n,r);else{e=r;var i=fe;fe|=2;var s=$T();(dt!==n||yt!==e)&&(mr=null,Fo=Qe()+500,ls(n,e));do try{SC();break}catch(a){BT(n,a)}while(!0);Km(),Id.current=s,fe=i,nt!==null?e=0:(dt=null,yt=0,e=st)}if(e!==0){if(e===2&&(i=cp(n),i!==0&&(r=i,e=Fp(n,i))),e===1)throw t=zl,ls(n,0),ti(n,r),Yt(n,Qe()),t;if(e===6)ti(n,r);else{if(i=n.current.alternate,!(r&30)&&!TC(i)&&(e=Ad(n,r),e===2&&(s=cp(n),s!==0&&(r=s,e=Fp(n,s))),e===1))throw t=zl,ls(n,0),ti(n,r),Yt(n,Qe()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Hi(n,$t,mr);break;case 3:if(ti(n,r),(r&130023424)===r&&(e=lg+500-Qe(),10<e)){if(od(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Vt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=yp(Hi.bind(null,n,$t,mr),e);break}Hi(n,$t,mr);break;case 4:if(ti(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-Mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EC(r/1960))-r,10<r){n.timeoutHandle=yp(Hi.bind(null,n,$t,mr),r);break}Hi(n,$t,mr);break;case 5:Hi(n,$t,mr);break;default:throw Error($(329))}}}return Yt(n,Qe()),n.callbackNode===t?zT.bind(null,n):null}function Fp(n,e){var t=pl;return n.current.memoizedState.isDehydrated&&(ls(n,e).flags|=256),n=Ad(n,e),n!==2&&(e=$t,$t=t,e!==null&&Up(e)),n}function Up(n){$t===null?$t=n:$t.push.apply($t,n)}function TC(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Un(s(),i))return!1}catch(o){return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(n,e){for(e&=~ag,e&=~ih,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Mn(e),r=1<<t;n[t]=-1,e&=~r}}function Lv(n){if(fe&6)throw Error($(327));Ao();var e=od(n,0);if(!(e&1))return Yt(n,Qe()),null;var t=Ad(n,e);if(n.tag!==0&&t===2){var r=cp(n);r!==0&&(e=r,t=Fp(n,r))}if(t===1)throw t=zl,ls(n,0),ti(n,e),Yt(n,Qe()),t;if(t===6)throw Error($(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hi(n,$t,mr),Yt(n,Qe()),null}function ug(n,e){var t=fe;fe|=1;try{return n(e)}finally{fe=t,fe===0&&(Fo=Qe()+500,eh&&Ni())}}function _s(n){si!==null&&si.tag===0&&!(fe&6)&&Ao();var e=fe;fe|=1;var t=En.transition,r=we;try{if(En.transition=null,we=1,n)return n()}finally{we=r,En.transition=t,fe=e,!(fe&6)&&Ni()}}function cg(){tn=_o.current,be(_o)}function ls(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Zk(t)),nt!==null)for(t=nt.return;t!==null;){var r=t;switch(qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dd();break;case 3:Lo(),be(Ht),be(Ct),Zm();break;case 5:Xm(r);break;case 4:Lo();break;case 13:be(Me);break;case 19:be(Me);break;case 10:Hm(r.type._context);break;case 22:case 23:cg()}t=t.return}if(dt=n,nt=n=mi(n.current,null),yt=tn=e,st=0,zl=null,ag=ih=gs=0,$t=pl=null,rs!==null){for(e=0;e<rs.length;e++)if(t=rs[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}rs=null}return n}function BT(n,e){do{var t=nt;try{if(Km(),Mc.current=wd,vd){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vd=!1}if(ms=0,ut=it=Fe=null,hl=!1,Fl=0,og.current=null,t===null||t.return===null){st=1,zl=e,nt=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Tv(o);if(w!==null){w.flags&=-257,Av(w,o,a,s,e),w.mode&1&&Ev(s,c,e),e=w,u=c;var k=e.updateQueue;if(k===null){var C=new Set;C.add(u),e.updateQueue=C}else k.add(u);break e}else{if(!(e&1)){Ev(s,c,e),dg();break e}u=Error($(426))}}else if(De&&a.mode&1){var V=Tv(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Av(V,o,a,s,e),Wm(Mo(u,a));break e}}s=u=Mo(u,a),st!==4&&(st=2),pl===null?pl=[s]:pl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=ST(s,u,e);gv(s,A);break e;case 1:a=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fi===null||!fi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=RT(s,a,e);gv(s,L);break e}}s=s.return}while(s!==null)}WT(t)}catch(B){e=B,nt===t&&t!==null&&(nt=t=t.return);continue}break}while(!0)}function $T(){var n=Id.current;return Id.current=wd,n===null?wd:n}function dg(){(st===0||st===3||st===2)&&(st=4),dt===null||!(gs&268435455)&&!(ih&268435455)||ti(dt,yt)}function Ad(n,e){var t=fe;fe|=2;var r=$T();(dt!==n||yt!==e)&&(mr=null,ls(n,e));do try{AC();break}catch(i){BT(n,i)}while(!0);if(Km(),fe=t,Id.current=r,nt!==null)throw Error($(261));return dt=null,yt=0,st}function AC(){for(;nt!==null;)qT(nt)}function SC(){for(;nt!==null&&!YP();)qT(nt)}function qT(n){var e=KT(n.alternate,n,tn);n.memoizedProps=n.pendingProps,e===null?WT(n):nt=e,og.current=null}function WT(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=yC(t,e),t!==null){t.flags&=32767,nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{st=6,nt=null;return}}else if(t=_C(t,e,tn),t!==null){nt=t;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=n}while(e!==null);st===0&&(st=5)}function Hi(n,e,t){var r=we,i=En.transition;try{En.transition=null,we=1,RC(n,e,t,r)}finally{En.transition=i,we=r}return null}function RC(n,e,t,r){do Ao();while(si!==null);if(fe&6)throw Error($(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error($(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ok(n,s),n===dt&&(nt=dt=null,yt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ec||(Ec=!0,HT(sd,function(){return Ao(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=we;we=1;var a=fe;fe|=4,og.current=null,wC(n,t),UT(t,n),Gk(gp),ad=!!mp,gp=mp=null,n.current=t,IC(t),JP(),fe=a,we=o,En.transition=s}else n.current=t;if(Ec&&(Ec=!1,si=n,Td=i),s=n.pendingLanes,s===0&&(fi=null),ek(t.stateNode),Yt(n,Qe()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ed)throw Ed=!1,n=Lp,Lp=null,n;return Td&1&&n.tag!==0&&Ao(),s=n.pendingLanes,s&1?n===Mp?ml++:(ml=0,Mp=n):ml=0,Ni(),null}function Ao(){if(si!==null){var n=SE(Td),e=En.transition,t=we;try{if(En.transition=null,we=16>n?16:n,si===null)var r=!1;else{if(n=si,si=null,Td=0,fe&6)throw Error($(331));var i=fe;for(fe|=4,J=n.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(J=c;J!==null;){var h=J;switch(h.tag){case 0:case 11:case 15:fl(8,h,s)}var p=h.child;if(p!==null)p.return=h,J=p;else for(;J!==null;){h=J;var m=h.sibling,w=h.return;if(LT(h),h===c){J=null;break}if(m!==null){m.return=w,J=m;break}J=w}}}var k=s.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var V=C.sibling;C.sibling=null,C=V}while(C!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fl(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,J=A;break e}J=s.return}}var v=n.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rh(9,a)}}catch(B){$e(a,a.return,B)}if(a===o){J=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,J=L;break e}J=a.return}}if(fe=i,Ni(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Qd,n)}catch(B){}r=!0}return r}finally{we=t,En.transition=e}}return!1}function Mv(n,e,t){e=Mo(t,e),e=ST(n,e,1),n=hi(n,e,1),e=Vt(),n!==null&&(pu(n,1,e),Yt(n,e))}function $e(n,e,t){if(n.tag===3)Mv(n,n,t);else for(;e!==null;){if(e.tag===3){Mv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){n=Mo(t,n),n=RT(e,n,1),e=hi(e,n,1),n=Vt(),e!==null&&(pu(e,1,n),Yt(e,n));break}}e=e.return}}function PC(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Vt(),n.pingedLanes|=n.suspendedLanes&t,dt===n&&(yt&t)===t&&(st===4||st===3&&(yt&130023424)===yt&&500>Qe()-lg?ls(n,0):ag|=t),Yt(n,e)}function GT(n,e){e===0&&(n.mode&1?(e=hc,hc<<=1,!(hc&130023424)&&(hc=4194304)):e=1);var t=Vt();n=Rr(n,e),n!==null&&(pu(n,e,t),Yt(n,t))}function kC(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),GT(n,t)}function CC(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),GT(n,t)}var KT;KT=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ht.current)qt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return qt=!1,gC(n,e,t);qt=!!(n.flags&131072)}else qt=!1,De&&e.flags&1048576&&JE(e,pd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uc(n,e),n=e.pendingProps;var i=Do(e,Ct.current);To(e,t),i=tg(null,e,r,n,i,t);var s=ng();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,hd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ym(e),i.updater=nh,e.stateNode=i,i._reactInternals=e,Sp(e,r,n,t),e=kp(null,e,r,!0,s,t)):(e.tag=0,De&&s&&$m(e),xt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Uc(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xC(r),n=Vn(r,n),i){case 0:e=Pp(null,e,r,n,t);break e;case 1:e=Pv(null,e,r,n,t);break e;case 11:e=Sv(null,e,r,n,t);break e;case 14:e=Rv(null,e,r,Vn(r.type,n),t);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Pp(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Pv(n,e,r,i,t);case 3:e:{if(bT(e),n===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rT(n,e),_d(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mo(Error($(423)),e),e=kv(n,e,r,t,i);break e}else if(r!==i){i=Mo(Error($(424)),e),e=kv(n,e,r,t,i);break e}else for(rn=di(e.stateNode.containerInfo.firstChild),an=e,De=!0,Ln=null,t=tT(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vo(),r===i){e=Pr(n,e,t);break e}xt(n,e,r,t)}e=e.child}return e;case 5:return iT(e),n===null&&Ep(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,_p(r,i)?o=null:s!==null&&_p(r,s)&&(e.flags|=32),CT(n,e),xt(n,e,o,t),e.child;case 6:return n===null&&Ep(e),null;case 13:return xT(n,e,t);case 4:return Jm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Oo(e,null,r,t):xt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Sv(n,e,r,i,t);case 7:return xt(n,e,e.pendingProps,t),e.child;case 8:return xt(n,e,e.pendingProps.children,t),e.child;case 12:return xt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(md,r._currentValue),r._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===i.children&&!Ht.current){e=Pr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Er(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Tp(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Tp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,To(e,t),i=An(i),r=r(i),e.flags|=1,xt(n,e,r,t),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),Rv(n,e,r,i,t);case 15:return PT(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Uc(n,e),e.tag=1,Qt(r)?(n=!0,hd(e)):n=!1,To(e,t),AT(e,r,i),Sp(e,r,i,t),kp(null,e,r,!0,n,t);case 19:return NT(n,e,t);case 22:return kT(n,e,t)}throw Error($(156,e.tag))};function HT(n,e){return IE(n,e)}function bC(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,e,t,r){return new bC(n,e,t,r)}function hg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xC(n){if(typeof n=="function")return hg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===xm)return 11;if(n===Nm)return 14}return 2}function mi(n,e){var t=n.alternate;return t===null?(t=wn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Bc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")hg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case oo:return us(t.children,i,s,e);case bm:o=8,i|=8;break;case Qf:return n=wn(12,t,e,i|2),n.elementType=Qf,n.lanes=s,n;case Yf:return n=wn(13,t,e,i),n.elementType=Yf,n.lanes=s,n;case Jf:return n=wn(19,t,e,i),n.elementType=Jf,n.lanes=s,n;case iE:return sh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case nE:o=10;break e;case rE:o=9;break e;case xm:o=11;break e;case Nm:o=14;break e;case Xr:o=16,r=null;break e}throw Error($(130,n==null?n:typeof n,""))}return e=wn(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function us(n,e,t,r){return n=wn(7,n,r,e),n.lanes=t,n}function sh(n,e,t,r){return n=wn(22,n,r,e),n.elementType=iE,n.lanes=t,n.stateNode={isHidden:!1},n}function Cf(n,e,t){return n=wn(6,n,null,e),n.lanes=t,n}function bf(n,e,t){return e=wn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function NC(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fg(n,e,t,r,i,s,o,a,u){return n=new NC(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),n}function DC(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function QT(n){if(!n)return vi;n=n._reactInternals;e:{if(xs(n)!==n||n.tag!==1)throw Error($(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(n.tag===1){var t=n.type;if(Qt(t))return QE(n,t,e)}return e}function YT(n,e,t,r,i,s,o,a,u){return n=fg(t,r,!0,n,i,s,o,a,u),n.context=QT(null),t=n.current,r=Vt(),i=pi(t),s=Er(r,i),s.callback=e!=null?e:null,hi(t,s,i),n.current.lanes=i,pu(n,i,r),Yt(n,r),n}function oh(n,e,t,r){var i=e.current,s=Vt(),o=pi(i);return t=QT(t),e.context===null?e.context=t:e.pendingContext=t,e=Er(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=hi(i,e,o),n!==null&&(Fn(n,i,o,s),Lc(n,i,o)),o}function Sd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function pg(n,e){Fv(n,e),(n=n.alternate)&&Fv(n,e)}function VC(){return null}var JT=typeof reportError=="function"?reportError:function(n){console.error(n)};function mg(n){this._internalRoot=n}ah.prototype.render=mg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error($(409));oh(n,e,null,null)};ah.prototype.unmount=mg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;_s(function(){oh(null,n,null,null)}),e[Sr]=null}};function ah(n){this._internalRoot=n}ah.prototype.unstable_scheduleHydration=function(n){if(n){var e=kE();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ei.length&&e!==0&&e<ei[t].priority;t++);ei.splice(t,0,n),t===0&&bE(n)}};function gg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function OC(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sd(o);s.call(c)}}var o=YT(e,r,n,0,null,!1,!1,"",Uv);return n._reactRootContainer=o,n[Sr]=o.current,Dl(n.nodeType===8?n.parentNode:n),_s(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Sd(u);a.call(c)}}var u=fg(n,0,!1,null,null,!1,!1,"",Uv);return n._reactRootContainer=u,n[Sr]=u.current,Dl(n.nodeType===8?n.parentNode:n),_s(function(){oh(e,u,t,r)}),u}function uh(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Sd(o);a.call(u)}}oh(e,o,n,i)}else o=OC(t,e,n,i,r);return Sd(o)}RE=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ja(e.pendingLanes);t!==0&&(Om(e,t|1),Yt(e,Qe()),!(fe&6)&&(Fo=Qe()+500,Ni()))}break;case 13:_s(function(){var r=Rr(n,1);if(r!==null){var i=Vt();Fn(r,n,1,i)}}),pg(n,1)}};Lm=function(n){if(n.tag===13){var e=Rr(n,134217728);if(e!==null){var t=Vt();Fn(e,n,134217728,t)}pg(n,134217728)}};PE=function(n){if(n.tag===13){var e=pi(n),t=Rr(n,e);if(t!==null){var r=Vt();Fn(t,n,e,r)}pg(n,e)}};kE=function(){return we};CE=function(n,e){var t=we;try{return we=n,e()}finally{we=t}};ap=function(n,e,t){switch(e){case"input":if(ep(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Zd(r);if(!i)throw Error($(90));oE(r),ep(r,i)}}}break;case"textarea":lE(n,t);break;case"select":e=t.value,e!=null&&vo(n,!!t.multiple,e,!1)}};mE=ug;gE=_s;var LC={usingClientEntryPoint:!1,Events:[gu,co,Zd,fE,pE,ug]},ja={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MC={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vE(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||VC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Qd=Tc.inject(MC),Jn=Tc}catch(n){}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LC;dn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error($(200));return DC(n,e,null,t)};dn.createRoot=function(n,e){if(!gg(n))throw Error($(299));var t=!1,r="",i=JT;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fg(n,1,!1,null,null,t,!1,r,i),n[Sr]=e.current,Dl(n.nodeType===8?n.parentNode:n),new mg(e)};dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error($(188)):(n=Object.keys(n).join(","),Error($(268,n)));return n=vE(e),n=n===null?null:n.stateNode,n};dn.flushSync=function(n){return _s(n)};dn.hydrate=function(n,e,t){if(!lh(e))throw Error($(200));return uh(null,n,e,!0,t)};dn.hydrateRoot=function(n,e,t){if(!gg(n))throw Error($(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=JT;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=YT(e,null,n,1,t!=null?t:null,i,!1,s,o),n[Sr]=e.current,Dl(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new ah(e)};dn.render=function(n,e,t){if(!lh(e))throw Error($(200));return uh(null,n,e,!1,t)};dn.unmountComponentAtNode=function(n){if(!lh(n))throw Error($(40));return n._reactRootContainer?(_s(function(){uh(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1};dn.unstable_batchedUpdates=ug;dn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!lh(t))throw Error($(200));if(n==null||n._reactInternals===void 0)throw Error($(38));return uh(n,e,t,!1,r)};dn.version="18.3.1-next-f1338f8080-20240426";function XT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XT)}catch(n){console.error(n)}}XT(),XI.exports=dn;var FC=XI.exports,ZT,jv=FC;ZT=jv.createRoot,jv.hydrateRoot;var zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},UC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(t[h],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(e0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):UC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new jC;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const k=c<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zC=function(n){const e=e0(n);return t0.encodeByteArray(e,!0)},Rd=function(n){return zC(n).replace(/\./g,"")},n0=function(n){try{return t0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Pd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!BC(t)||(n[t]=Pd(n[t],e[t]));return n}function BC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=()=>r0().__FIREBASE_DEFAULTS__,qC=()=>{if(typeof process=="undefined"||typeof zv=="undefined")return;const n=zv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},WC=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&n0(n[1]);return e&&JSON.parse(e)},_g=()=>{try{return $C()||qC()||WC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},i0=()=>{var n;return(n=_g())===null||n===void 0?void 0:n.config},GC=n=>{var e;return(e=_g())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rd(JSON.stringify(t)),Rd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function yg(){var n;const e=(n=_g())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function YC(){return typeof window!="undefined"||s0()}function s0(){return typeof WorkerGlobalScope!="undefined"&&typeof self!="undefined"&&self instanceof WorkerGlobalScope}function JC(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function o0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function l0(){return!yg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bl(){try{return typeof indexedDB=="object"}catch(n){return!1}}function XC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ZC,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?e1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ht(i,a,r)}}function e1(n,e){return n.replace(t1,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const t1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function n1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $l(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if($v(s)&&$v(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function $v(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function u0(n,e){const t=new r1(n,e);return t.subscribe.bind(t)}class r1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");i1(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xf),i.error===void 0&&(i.error=xf),i.complete===void 0&&(i.complete=xf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new KC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o1(n){return n===Qi?void 0:n}function a1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=[];var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const d0={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},l1=ae.INFO,u1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},c1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=u1[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ch{constructor(e){this.name=e,this._logLevel=l1,this._logHandler=c1,this._userLogHandler=null,wg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function d1(n){wg.forEach(e=>{e.setLogLevel(n)})}function h1(n,e){for(const t of wg){let r=null;e&&e.level&&(r=d0[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch(c){return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const f1=(n,e)=>e.some(t=>n instanceof t);let qv,Wv;function p1(){return qv||(qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m1(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,jp=new WeakMap,f0=new WeakMap,Nf=new WeakMap,Ig=new WeakMap;function g1(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(gi(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&h0.set(t,n)}).catch(()=>{}),Ig.set(e,n),e}function _1(n){if(jp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});jp.set(n,e)}let zp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||f0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function y1(n){zp=n(zp)}function v1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Df(this),e,...t);return f0.set(r,e.sort?e.sort():[e]),gi(r)}:m1().includes(n)?function(...e){return n.apply(Df(this),e),gi(h0.get(this))}:function(...e){return gi(n.apply(Df(this),e))}}function w1(n){return typeof n=="function"?v1(n):(n instanceof IDBTransaction&&_1(n),f1(n,p1())?new Proxy(n,zp):n)}function gi(n){if(n instanceof IDBRequest)return g1(n);if(Nf.has(n))return Nf.get(n);const e=w1(n);return e!==n&&(Nf.set(n,e),Ig.set(e,n)),e}const Df=n=>Ig.get(n);function I1(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=gi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gi(o.result),u.oldVersion,u.newVersion,gi(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const E1=["get","getKey","getAll","getAllKeys","count"],T1=["put","add","delete","clear"],Vf=new Map;function Gv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vf.get(e))return Vf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=T1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E1.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return Vf.set(e,s),s}y1(n=>({...n,get:(e,t,r)=>Gv(e,t)||n.get(e,t,r),has:(e,t)=>!!Gv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(S1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function S1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",Bp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new ch("@firebase/app"),R1="@firebase/app-compat",P1="@firebase/analytics-compat",k1="@firebase/analytics",C1="@firebase/app-check-compat",b1="@firebase/app-check",x1="@firebase/auth",N1="@firebase/auth-compat",D1="@firebase/database",V1="@firebase/data-connect",O1="@firebase/database-compat",L1="@firebase/functions",M1="@firebase/functions-compat",F1="@firebase/installations",U1="@firebase/installations-compat",j1="@firebase/messaging",z1="@firebase/messaging-compat",B1="@firebase/performance",$1="@firebase/performance-compat",q1="@firebase/remote-config",W1="@firebase/remote-config-compat",G1="@firebase/storage",K1="@firebase/storage-compat",H1="@firebase/firestore",Q1="@firebase/vertexai-preview",Y1="@firebase/firestore-compat",J1="firebase",X1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",Z1={[kd]:"fire-core",[R1]:"fire-core-compat",[k1]:"fire-analytics",[P1]:"fire-analytics-compat",[b1]:"fire-app-check",[C1]:"fire-app-check-compat",[x1]:"fire-auth",[N1]:"fire-auth-compat",[D1]:"fire-rtdb",[V1]:"fire-data-connect",[O1]:"fire-rtdb-compat",[L1]:"fire-fn",[M1]:"fire-fn-compat",[F1]:"fire-iid",[U1]:"fire-iid-compat",[j1]:"fire-fcm",[z1]:"fire-fcm-compat",[B1]:"fire-perf",[$1]:"fire-perf-compat",[q1]:"fire-rc",[W1]:"fire-rc-compat",[G1]:"fire-gcs",[K1]:"fire-gcs-compat",[H1]:"fire-fst",[Y1]:"fire-fst-compat",[Q1]:"fire-vertex","fire-js":"fire-js",[J1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,Uo=new Map,jo=new Map;function ql(n,e){try{n.container.addComponent(e)}catch(t){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function p0(n,e){n.container.addOrOverwriteComponent(e)}function Cr(n){const e=n.name;if(jo.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,n);for(const t of Ii.values())ql(t,n);for(const t of Uo.values())ql(t,n);return!0}function m0(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function eb(n,e,t=wi){m0(n,e).clearInstance(t)}function g0(n){return n.options!==void 0}function qe(n){return n.settings!==void 0}function tb(){jo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Ns("app","Firebase",nb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _0=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends _0{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry!="undefined"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ln(kd,Bp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Tg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=X1;function Eg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(t||(t=i0()),!t)throw Tn.create("no-options");const s=Ii.get(i);if(s){if($l(t,s.options)&&$l(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const o=new c0(i);for(const u of jo.values())o.addComponent(u);const a=new _0(t,r,o);return Ii.set(i,a),a}function ib(n,e){if(YC()&&!s0())throw Tn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;g0(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,p)=>Math.imul(31,h)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry=="undefined")throw Tn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Uo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new c0(s);for(const c of jo.values())a.addComponent(c);const u=new rb(t,e,s,a);return Uo.set(s,u),u}function sb(n=wi){const e=Ii.get(n);if(!e&&n===wi&&i0())return Eg();if(!e)throw Tn.create("no-app",{appName:n});return e}function ob(){return Array.from(Ii.values())}async function Tg(n){let e=!1;const t=n.name;Ii.has(t)?(e=!0,Ii.delete(t)):Uo.has(t)&&n.decRefCount()<=0&&(Uo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function ln(n,e,t){var r;let i=(r=Z1[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(a.join(" "));return}Cr(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function y0(n,e){if(n!==null&&typeof n!="function")throw Tn.create("invalid-log-argument");h1(n,e)}function v0(n){d1(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebase-heartbeat-database",lb=1,Wl="firebase-heartbeat-store";let Of=null;function w0(){return Of||(Of=I1(ab,lb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),Of}async function ub(n){try{const t=(await w0()).transaction(Wl),r=await t.objectStore(Wl).get(I0(n));return await t.done,r}catch(e){if(e instanceof ht)kr.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(t.message)}}}async function Kv(n,e){try{const r=(await w0()).transaction(Wl,"readwrite");await r.objectStore(Wl).put(e,I0(n)),await r.done}catch(t){if(t instanceof ht)kr.warn(t.message);else{const r=Tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kr.warn(r.message)}}}function I0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=1024,db=30*24*60*60*1e3;class hb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=db}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hv(),{heartbeatsToSend:r,unsentEntries:i}=fb(this._heartbeatsCache.heartbeats),s=Rd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return kr.warn(t),""}}}function Hv(){return new Date().toISOString().substring(0,10)}function fb(n,e=cb){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qv(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Qv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?XC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ub(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qv(n){return Rd(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(n){Cr(new Rn("platform-logger",e=>new A1(e),"PRIVATE")),Cr(new Rn("heartbeat",e=>new hb(e),"PRIVATE")),ln(kd,Bp,n),ln(kd,Bp,"esm2017"),ln("fire-js","")}mb("");const gb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ht,SDK_VERSION:Di,_DEFAULT_ENTRY_NAME:wi,_addComponent:ql,_addOrOverwriteComponent:p0,_apps:Ii,_clearComponents:tb,_components:jo,_getProvider:m0,_isFirebaseApp:g0,_isFirebaseServerApp:qe,_registerComponent:Cr,_removeServiceInstance:eb,_serverApps:Uo,deleteApp:Tg,getApp:sb,getApps:ob,initializeApp:Eg,initializeServerApp:ib,onLog:y0,registerVersion:ln,setLogLevel:v0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t){this._delegate=e,this.firebase=t,ql(e,new Rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tg(this._delegate)))}_getService(e,t=wi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=wi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ql(this._delegate,e)}_addOrOverwriteComponent(e){p0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Yv=new Ns("app-compat","Firebase",yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:ln,setLogLevel:v0,onLog:y0,apps:null,SDK_VERSION:Di,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:gb}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||wi,!Bv(e,c))throw Yv.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,h={}){const p=Eg(c,h);if(Bv(e,p.name))return e[p.name];const m=new n(p,t);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,p=h.replace("-compat","");if(Cr(c)&&c.type==="PUBLIC"){const m=(w=i())=>{if(typeof w[p]!="function")throw Yv.create("invalid-app-argument",{appName:h});return w[p]()};c.serviceProps!==void 0&&Pd(m,c.serviceProps),t[p]=m,n.prototype[p]=function(...w){return this._getService.bind(this,h).apply(this,c.multipleInstances?w:[])}}return c.type==="PUBLIC"?t[p]:null}function u(c,h){return h==="serverAuth"?null:h}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){const n=vb(_b);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:E0,extendNamespace:e,createSubscribe:u0,ErrorFactory:Ns,deepExtend:Pd});function e(t){Pd(n,t)}return n}const wb=E0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new ch("@firebase/app-compat"),Ib="@firebase/app-compat",Eb="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){ln(Ib,Eb,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=r0();if(n.firebase!==void 0){Jv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Jv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch(n){}const sn=wb;Tb();var Ab="firebase",Sb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.registerVersion(Ab,Sb,"app-compat");function Ag(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const za={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Qs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function T0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=Rb,kb=T0,A0=new Ns("auth","Firebase",T0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new ch("@firebase/auth");function Cb(n,...e){Cd.logLevel<=ae.WARN&&Cd.warn(`Auth (${Di}): ${n}`,...e)}function $c(n,...e){Cd.logLevel<=ae.ERROR&&Cd.error(`Auth (${Di}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,...e){throw Rg(n,...e)}function ot(n,...e){return Rg(n,...e)}function Sg(n,e,t){const r=Object.assign(Object.assign({},kb()),{[e]:t});return new Ns("auth","Firebase",r).create(e,{appName:n.name})}function ft(n){return Sg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oa(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(n,"argument-error"),Sg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return A0.create(n,...e)}function q(n,e,...t){if(!n)throw Rg(e,...t)}function Hn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $c(e),new Error(e)}function jn(n,e){n||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Pg(){return Xv()==="http:"||Xv()==="https:"}function Xv(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pg()||o0()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t){this.shortDelay=e,this.longDelay=t,jn(t>e,"Short delay should be less than long delay!"),this.isMobile=QC()||vg()}get(){return bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n,e){jn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new yu(3e4,6e4);function Ke(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function He(n,e,t,r,i={}){return R0(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return JC()||(c.referrerPolicy="no-referrer"),S0.fetch()(P0(n,n.config.apiHost,t,a),c)})}async function R0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nb),e);try{const i=new Ob(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw el(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw el(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw el(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sg(n,h,c);It(n,h)}}catch(i){if(i instanceof ht)throw i;It(n,"network-request-failed",{message:String(i)})}}async function Vr(n,e,t,r,i={}){const s=await He(n,e,t,r,i);return"mfaPendingCredential"in s&&It(n,"multi-factor-auth-required",{_serverResponse:s}),s}function P0(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?kg(n.config,i):`${n.config.apiScheme}://${i}`}function Vb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ob{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Db.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function el(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ot(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n){return n!==void 0&&n.getResponse!==void 0}function ew(n){return n!==void 0&&n.enterprise!==void 0}class Lb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(n){return(await He(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fb(n,e){return He(n,"GET","/v2/recaptchaConfig",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(n,e){return He(n,"POST","/v1/accounts:delete",e)}async function jb(n,e){return He(n,"POST","/v1/accounts:update",e)}async function k0(n,e){return He(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function zb(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=dh(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gl(Lf(i.auth_time)),issuedAtTime:gl(Lf(i.iat)),expirationTime:gl(Lf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lf(n){return Number(n)*1e3}function dh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const i=n0(t);return i?JSON.parse(i):($c("Failed to decode base64 JWT payload"),null)}catch(i){return $c("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tw(n){const e=dh(n);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&Bb(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await br(n,k0(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?C0(s.providerUserInfo):[],a=Wb(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $p(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function qb(n){const e=ne(n);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wb(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C0(n){return n.map(e=>{var{providerId:t}=e,r=Ag(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n,e){const t=await R0(n,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=P0(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",S0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kb(n,e){return He(n,"POST","/v2/accounts:revokeToken",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):tw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=tw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gb(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new So;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e){q(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $p(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await br(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zb(this,e)}reload(){return qb(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await br(this,Ub(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,A=(c=t.createdAt)!==null&&c!==void 0?c:void 0,v=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:L,isAnonymous:B,providerData:F,stsTokenManager:I}=t;q(S&&I,e,"internal-error");const _=So.fromJSON(this.name,I);q(typeof S=="string",e,"internal-error"),Hr(p,e.name),Hr(m,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof B=="boolean",e,"internal-error"),Hr(w,e.name),Hr(k,e.name),Hr(C,e.name),Hr(V,e.name),Hr(A,e.name),Hr(v,e.name);const E=new vr({uid:S,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:B,photoURL:k,phoneNumber:w,tenantId:C,stsTokenManager:_,createdAt:A,lastLoginAt:v});return F&&Array.isArray(F)&&(E.providerData=F.map(T=>Object.assign({},T))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new So;i.updateFromServerResponse(t);const s=new vr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new So;a.updateFromIdToken(r);const u=new vr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $p(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Map;function on(n){jn(n instanceof Function,"Expected a class definition");let e=nw.get(n);return e?(jn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}b0.type="NONE";const zo=b0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n,e,t){return`firebase:${n}:${e}:${t}`}class Ro{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cs(this.userKey,i.apiKey,s),this.fullPersistenceKey=cs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ro(on(zo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||on(zo);const o=cs(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const p=vr._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch(h){}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ro(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch(h){}})),new Ro(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O0(e))return"Blackberry";if(L0(e))return"Webos";if(N0(e))return"Safari";if((e.includes("chrome/")||D0(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x0(n=ze()){return/firefox\//i.test(n)}function N0(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D0(n=ze()){return/crios\//i.test(n)}function V0(n=ze()){return/iemobile/i.test(n)}function vu(n=ze()){return/android/i.test(n)}function O0(n=ze()){return/blackberry/i.test(n)}function L0(n=ze()){return/webos/i.test(n)}function wu(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Hb(n=ze()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Qb(n=ze()){var e;return wu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yb(){return a0()&&document.documentMode===10}function M0(n=ze()){return wu(n)||vu(n)||L0(n)||O0(n)||/windows phone/i.test(n)||V0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n,e=[]){let t;switch(n){case"Browser":t=rw(ze());break;case"Worker":t=`${rw(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Di}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(n,e={}){return He(n,"GET","/v2/passwordPolicy",Ke(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=6;class ex{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Zb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iw(this),this.idTokenSubscription=new iw(this),this.beforeStateQueue=new Jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await k0(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(ft(this));const t=e?ne(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xb(this),t=new ex(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function We(n){return ne(n)}class iw{constructor(e){this.auth=e,this.observer=null,this.addObserver=u0(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nx(n){Iu=n}function Cg(n){return Iu.loadJS(n)}function rx(){return Iu.recaptchaV2Script}function ix(){return Iu.recaptchaEnterpriseScript}function sx(){return Iu.gapiScript}function U0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ox="recaptcha-enterprise",ax="NO_RECAPTCHA";class lx{constructor(e){this.type=ox,this.auth=We(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Lb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ew(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ax)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&ew(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ix();u.length!==0&&(u+=a),Cg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sw(n,e,t,r=!1){const i=new lx(n);let s;try{s=await i.verify(t)}catch(a){s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sw(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sw(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function ux(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(on);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cx(n,e,t){const r=We(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=j0(e),{host:o,port:a}=dx(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hx()}function j0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dx(n){const e=j0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ow(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ow(o)}}}function ow(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,t){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(n,e){return He(n,"POST","/v1/accounts:resetPassword",Ke(n,e))}async function fx(n,e){return He(n,"POST","/v1/accounts:update",e)}async function px(n,e){return He(n,"POST","/v1/accounts:signUp",e)}async function mx(n,e){return He(n,"POST","/v1/accounts:update",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(n,e){return Vr(n,"POST","/v1/accounts:signInWithPassword",Ke(n,e))}async function hh(n,e){return He(n,"POST","/v1/accounts:sendOobCode",Ke(n,e))}async function _x(n,e){return hh(n,e)}async function yx(n,e){return hh(n,e)}async function vx(n,e){return hh(n,e)}async function wx(n,e){return hh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(n,e){return Vr(n,"POST","/v1/accounts:signInWithEmailLink",Ke(n,e))}async function Ex(n,e){return Vr(n,"POST","/v1/accounts:signInWithEmailLink",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends aa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ql(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ql(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,t,"signInWithPassword",gx);case"emailLink":return Ix(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,r,"signUpPassword",px);case"emailLink":return Ex(e,{idToken:t,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,e){return Vr(n,"POST","/v1/accounts:signInWithIdp",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="http://localhost";class tr extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ag(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tr(e,t)}buildRequest(){const e={requestUri:Tx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(n,e){return He(n,"POST","/v1/accounts:sendVerificationCode",Ke(n,e))}async function Sx(n,e){return Vr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ke(n,e))}async function Rx(n,e){const t=await Vr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ke(n,e));if(t.temporaryProof)throw el(n,"account-exists-with-different-credential",t);return t}const Px={USER_NOT_FOUND:"user-not-found"};async function kx(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ke(n,t),Px)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends aa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ds({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ds({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Sx(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Rx(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return kx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new ds({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bx(n){const e=yo(Za(n)).link,t=e?yo(Za(e)).deep_link_id:null,r=yo(Za(n)).deep_link_id;return(r?yo(Za(r)).link:null)||r||t||e||n}class fh{constructor(e){var t,r,i,s,o,a;const u=yo(Za(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Cx((i=u.mode)!==null&&i!==void 0?i:null);q(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=bx(e);try{return new fh(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,t){return Ql._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=fh.parseLink(t);return q(r,"argument-error"),Ql._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Or{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Po extends la{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),tr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),tr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Po.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Po.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Po(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch(u){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends la{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch(t){return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wn.credential(t,r)}catch(i){return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends la{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch(t){return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="http://localhost";class Bo extends aa{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Bo(r,s)}static _create(e,t){return new Bo(e,t)}buildRequest(){return{requestUri:xx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="saml.";class bd extends Or{constructor(e){q(e.startsWith(Nx),"argument-error"),super(e)}static credentialFromResult(e){return bd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Bo.fromJSON(e);return q(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Bo._create(r,t)}catch(i){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends la{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kn.credential(t,r)}catch(i){return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(n,e){return Vr(n,"POST","/v1/accounts:signUp",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await vr._fromIdTokenResponse(e,r,i),o=aw(r);return new Pn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=aw(r);return new Pn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function aw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n){var e;if(qe(n.app))return Promise.reject(ft(n));const t=We(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await B0(t,{returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends ht{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new xd(e,t,r,i)}}function $0(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xd._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(n,e){const t=ne(n);await ph(!0,t,e);const{providerUserInfo:r}=await jb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=q0(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function bg(n,e,t=!1){const r=await br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pn._forOperation(n,"link",r)}async function ph(n,e,t){await Kl(e);const r=q0(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";q(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(ft(r));const i="reauthenticate";try{const s=await br(n,$0(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=dh(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),Pn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(n,e,t=!1){if(qe(n.app))return Promise.reject(ft(n));const r="signIn",i=await $0(n,r,e),s=await Pn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function mh(n,e){return G0(We(n),e)}async function K0(n,e){const t=ne(n);return await ph(!1,t,e.providerId),bg(t,e)}async function H0(n,e){return W0(ne(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e){return Vr(n,"POST","/v1/accounts:signInWithCustomToken",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(n,e){if(qe(n.app))return Promise.reject(ft(n));const t=We(n),r=await Ox(t,{token:e,returnSecureToken:!0}),i=await Pn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?xg._fromServerResponse(e,t):"totpInfo"in t?Ng._fromServerResponse(e,t):It(e,"internal-error")}}class xg extends Eu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new xg(t)}}class Ng extends Eu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ng(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e,t){var r;q(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(n){const e=We(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mx(n,e,t){const r=We(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&gh(r,i,t),await Hl(r,i,"getOobCode",yx)}async function Fx(n,e,t){await z0(ne(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dg(n),r})}async function Ux(n,e){await mx(ne(n),{oobCode:e})}async function Q0(n,e){const t=ne(n),r=await z0(t,{oobCode:e}),i=r.requestType;switch(q(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,t,"internal-error");default:q(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Eu._fromServerResponse(We(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function jx(n,e){const{data:t}=await Q0(ne(n),e);return t.email}async function zx(n,e,t){if(qe(n.app))return Promise.reject(ft(n));const r=We(n),o=await Hl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Dg(n),u}),a=await Pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Bx(n,e,t){return qe(n.app)?Promise.reject(ft(n)):mh(ne(n),Vi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dg(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(n,e,t){const r=We(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&gh(r,o,a)}s(i,t),await Hl(r,i,"getOobCode",vx)}function qx(n,e){const t=fh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Wx(n,e,t){if(qe(n.app))return Promise.reject(ft(n));const r=ne(n),i=Vi.credentialWithLink(e,t||Gl());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(n,e){return He(n,"POST","/v1/accounts:createAuthUri",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(n,e){const t=Pg()?Gl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Gx(ne(n),r);return i||[]}async function Hx(n,e){const t=ne(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&gh(t.auth,i,e);const{email:s}=await _x(t.auth,i);s!==n.email&&await n.reload()}async function Qx(n,e,t){const r=ne(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&gh(r.auth,s,t);const{email:o}=await wx(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(n,e){return He(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ne(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await br(r,Yx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Xx(n,e){const t=ne(n);return qe(t.auth.app)?Promise.reject(ft(t.auth)):Y0(t,e,null)}function Zx(n,e){return Y0(ne(n),null,e)}async function Y0(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await br(n,fx(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=dh(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ko(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new tN(s,i);case"github.com":return new nN(s,i);case"google.com":return new rN(s,i);case"twitter.com":return new iN(s,i,n.screenName||null);case"custom":case"anonymous":return new ko(s,null);default:return new ko(s,r,i)}}class ko{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class J0 extends ko{constructor(e,t,r,i){super(e,t,r),this.username=i}}class tN extends ko{constructor(e,t){super(e,"facebook.com",t)}}class nN extends J0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class rN extends ko{constructor(e,t){super(e,"google.com",t)}}class iN extends J0{constructor(e,t,r){super(e,"twitter.com",t,r)}}function sN(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:eN(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new ss("enroll",e,t)}static _fromMfaPendingCredential(e){return new ss("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ss._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ss._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=We(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Eu._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=ss._fromMfaPendingCredential(i.mfaPendingCredential);return new Vg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const h=await Pn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return q(t.user,r,"internal-error"),Pn._forOperation(t.user,t.operationType,c);default:It(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function oN(n,e){var t;const r=ne(n),i=e;return q(e.customData.operationType,r,"argument-error"),q((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Vg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(n,e){return He(n,"POST","/v2/accounts/mfaEnrollment:start",Ke(n,e))}function lN(n,e){return He(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ke(n,e))}function uN(n,e){return He(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ke(n,e))}class Og{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Eu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Og(e)}async getSession(){return ss._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await br(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await br(this.user,uN(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Mf=new WeakMap;function cN(n){const e=ne(n);return Mf.has(e)||Mf.set(e,Og._fromUser(e)),Mf.get(e)}const Nd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nd,"1"),this.storage.removeItem(Nd),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=1e3,hN=10;class Z0 extends X0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hN):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z0.type="LOCAL";const Lg=Z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA extends X0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eA.type="SESSION";const ys=eA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await fN(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Tu("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function mN(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function gN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(n){return null}}function _N(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yN(){return Mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="firebaseLocalStorageDb",vN=1,Dd="firebaseLocalStorage",nA="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yh(n,e){return n.transaction([Dd],e?"readwrite":"readonly").objectStore(Dd)}function wN(){const n=indexedDB.deleteDatabase(tA);return new Au(n).toPromise()}function qp(){const n=indexedDB.open(tA,vN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Dd,{keyPath:nA})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Dd)?e(r):(r.close(),await wN(),e(await qp()))})})}async function lw(n,e,t){const r=yh(n,!0).put({[nA]:e,value:t});return new Au(r).toPromise()}async function IN(n,e){const t=yh(n,!1).get(e),r=await new Au(t).toPromise();return r===void 0?null:r.value}function uw(n,e){const t=yh(n,!0).delete(e);return new Au(t).toPromise()}const EN=800,TN=3;class rA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>TN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(yN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gN(),!this.activeServiceWorker)return;this.sender=new pN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qp();return await lw(e,Nd,"1"),await uw(e,Nd),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>IN(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yh(i,!1).getAll();return new Au(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rA.type="LOCAL";const Yl=rA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n,e){return He(n,"POST","/v2/accounts/mfaSignIn:start",Ke(n,e))}function SN(n,e){return He(n,"POST","/v2/accounts/mfaSignIn:finalize",Ke(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=500,PN=6e4,Ac=1e12;class kN{constructor(e){this.auth=e,this.counter=Ac,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new CN(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Ac;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Ac;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Ac;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class CN{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bN(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},PN)},RN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function bN(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=U0("rcb"),xN=new yu(3e4,6e4);class NN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return q(DN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Zv(tt().grecaptcha)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(ot(e,"network-request-failed"))},xN.get());tt()[Ff]=()=>{tt().clearTimeout(s),delete tt()[Ff];const a=tt().grecaptcha;if(!a||!Zv(a)){i(ot(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const p=u(c,h);return this.counter++,p},this.hostLanguage=t,r(a)};const o=`${rx()}?${sa({onload:Ff,render:"explicit",hl:t})}`;Cg(o).catch(()=>{clearTimeout(s),i(ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=tt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function DN(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class VN{async load(e){return new kN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="recaptcha",ON={theme:"light",type:"image"};let LN=class{constructor(e,t,r=Object.assign({},ON)){this.parameters=r,this.type=iA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new VN:new NN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(Pg()&&!Mg(),this.auth,"internal-error"),await MN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Mb(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function MN(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ds._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function FN(n,e,t){if(qe(n.app))return Promise.reject(ft(n));const r=We(n),i=await vh(r,e,ne(t));return new Fg(i,s=>mh(r,s))}async function UN(n,e,t){const r=ne(n);await ph(!1,r,"phone");const i=await vh(r.auth,e,ne(t));return new Fg(i,s=>K0(r,s))}async function jN(n,e,t){const r=ne(n);if(qe(r.auth.app))return Promise.reject(ft(r.auth));const i=await vh(r.auth,e,ne(t));return new Fg(i,s=>H0(r,s))}async function vh(n,e,t){var r;const i=await t.verify();try{q(typeof i=="string",n,"argument-error"),q(t.type===iA,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",n,"internal-error"),(await aN(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,n,"missing-multi-factor-info"),(await AN(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Ax(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function zN(n,e){const t=ne(n);if(qe(t.auth.app))return Promise.reject(ft(t.auth));await bg(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs=class qc{constructor(e){this.providerId=qc.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,t){return vh(this.auth,e,ne(t))}static credential(e,t){return ds._fromVerification(e,t)}static credentialFromResult(e){const t=e;return qc.credentialFromTaggedObject(t)}static credentialFromError(e){return qc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ds._fromTokenResponse(t,r):null}};vs.PROVIDER_ID="phone";vs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n,e){return e?on(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BN(n){return G0(n.auth,new Ug(n),n.bypassAuthState)}function $N(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),W0(t,new Ug(n),n.bypassAuthState)}async function qN(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),bg(t,new Ug(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BN;case"linkViaPopup":case"linkViaRedirect":return qN;case"reauthViaPopup":case"reauthViaRedirect":return $N;default:It(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new yu(2e3,1e4);async function GN(n,e,t){if(qe(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=We(n);oa(n,e,Or);const i=Ds(r,t);return new wr(r,"signInViaPopup",e,i).executeNotNull()}async function KN(n,e,t){const r=ne(n);if(qe(r.auth.app))return Promise.reject(ot(r.auth,"operation-not-supported-in-this-environment"));oa(r.auth,e,Or);const i=Ds(r.auth,t);return new wr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function HN(n,e,t){const r=ne(n);oa(r.auth,e,Or);const i=Ds(r.auth,t);return new wr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class wr extends sA{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WN.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="pendingRedirect",_l=new Map;class YN extends sA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await JN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JN(n,e){const t=aA(e),r=oA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function jg(n,e){return oA(n)._set(aA(e),"true")}function XN(){_l.clear()}function zg(n,e){_l.set(n._key(),e)}function oA(n){return on(n._redirectPersistence)}function aA(n){return cs(QN,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(n,e,t){return eD(n,e,t)}async function eD(n,e,t){if(qe(n.app))return Promise.reject(ft(n));const r=We(n);oa(n,e,Or),await r._initializationPromise;const i=Ds(r,t);return await jg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function tD(n,e,t){return nD(n,e,t)}async function nD(n,e,t){const r=ne(n);if(oa(r.auth,e,Or),qe(r.auth.app))return Promise.reject(ft(r.auth));await r.auth._initializationPromise;const i=Ds(r.auth,t);await jg(i,r.auth);const s=await lA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function rD(n,e,t){return iD(n,e,t)}async function iD(n,e,t){const r=ne(n);oa(r.auth,e,Or),await r.auth._initializationPromise;const i=Ds(r.auth,t);await ph(!1,r,e.providerId),await jg(i,r.auth);const s=await lA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function sD(n,e){return await We(n)._initializationPromise,wh(n,e,!1)}async function wh(n,e,t=!1){if(qe(n.app))return Promise.reject(ft(n));const r=We(n),i=Ds(r,e),o=await new YN(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function lA(n){const e=Tu(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=10*60*1e3;class uA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oD&&this.cachedEventUids.clear(),this.cachedEventUids.has(cw(e))}saveEventToCache(e){this.cachedEventUids.add(cw(e)),this.lastProcessedEventTime=Date.now()}}function cw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cA({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e={}){return He(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uD=/^https?/;async function cD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dA(n);for(const t of e)try{if(dD(t))return}catch(r){}It(n,"unauthorized-domain")}function dD(n){const e=Gl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!uD.test(t))return!1;if(lD.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new yu(3e4,6e4);function dw(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fD(n){return new Promise((e,t)=>{var r,i,s;function o(){dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dw(),t(ot(n,"network-request-failed"))},timeout:hD.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=U0("iframefcb");return tt()[a]=()=>{gapi.load?o():t(ot(n,"network-request-failed"))},Cg(`${sx()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function pD(n){return Wc=Wc||fD(n),Wc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new yu(5e3,15e3),gD="__/auth/iframe",_D="emulator/auth/iframe",yD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wD(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kg(e,_D):`https://${n.config.authDomain}/${gD}`,r={apiKey:e.apiKey,appName:n.name,v:Di},i=vD.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${sa(r).slice(1)}`}async function ID(n){const e=await pD(n),t=tt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:wD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},mD.get());function u(){tt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TD=500,AD=600,SD="_blank",RD="http://localhost";class hw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function PD(n,e,t,r=TD,i=AD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},ED),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ze().toLowerCase();t&&(a=D0(c)?SD:t),x0(c)&&(e=e||RD,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(Qb(c)&&a!=="_self")return kD(e||"",a),new hw(null);const p=window.open(e||"",a,h);q(p,n,"popup-blocked");try{p.focus()}catch(m){}return new hw(p)}function kD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="__/auth/handler",bD="emulator/auth/handler",xD=encodeURIComponent("fac");async function Wp(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Di,eventId:i};if(e instanceof Or){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",n1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(e instanceof la){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await n._getAppCheckToken(),c=u?`#${xD}=${encodeURIComponent(u)}`:"";return`${ND(n)}?${sa(a).slice(1)}${c}`}function ND({config:n}){return n.emulator?kg(n,bD):`https://${n.authDomain}/${CD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="webStorageSupport";class DD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ys,this._completeRedirectFn=wh,this._overrideRedirectResult=zg}async _openPopup(e,t,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wp(e,t,r,Gl(),i);return PD(e,o,Tu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Wp(e,t,r,Gl(),i);return mN(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ID(e),r=new uA(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uf,{type:Uf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uf];o!==void 0&&t(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return M0()||N0()||wu()}}const VD=DD;class OD{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Hn("unexpected MultiFactorSessionType")}}}class Bg extends OD{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Bg(e)}_finalizeEnroll(e,t,r){return lN(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return SN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hA{constructor(){}static assertion(e){return Bg._fromCredential(e)}}hA.FACTOR_ID="phone";var fw="@firebase/auth",pw="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FD(n){Cr(new Rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F0(n)},c=new tx(r,i,s,u);return ux(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Rn("auth-internal",e=>{const t=We(e.getProvider("auth").getImmediate());return(r=>new LD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(fw,pw,MD(n)),ln(fw,pw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=5*60;GC("authIdTokenMaxAge");function jD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}nx({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",jD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FD("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=2e3;async function BD(n,e,t){var r;const{BuildInfo:i}=ws();jn(e.sessionId,"AuthEvent did not contain a session ID");const s=await KD(e.sessionId),o={};return wu()?o.ibi=i.packageName:vu()?o.apn=i.packageName:It(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Wp(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function $D(n){const{BuildInfo:e}=ws(),t={};wu()?t.iosBundleId=e.packageName:vu()?t.androidPackageName=e.packageName:It(n,"operation-not-supported-in-this-environment"),await dA(n,t)}function qD(n){const{cordova:e}=ws();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Hb()?"_blank":"_system","location=yes"),t(i)})})}async function WD(n,e,t){const{cordova:r}=ws();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var p;s();const m=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(ot(n,"redirect-cancelled-by-user"))},zD))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),vu()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function GD(n){var e,t,r,i,s,o,a,u,c,h;const p=ws();q(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((t=p==null?void 0:p.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((u=(a=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((h=(c=p==null?void 0:p.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function KD(n){const e=HD(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function HD(n){if(jn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=20;class YD extends uA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function JD(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:eV(),postBody:null,tenantId:n.tenantId,error:ot(n,"no-auth-event")}}function XD(n,e){return Gp()._set(Kp(n),e)}async function mw(n){const e=await Gp()._get(Kp(n));return e&&await Gp()._remove(Kp(n)),e}function ZD(n,e){var t,r;const i=nV(e);if(i.includes("/__/auth/callback")){const s=Gc(i),o=s.firebaseError?tV(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?ot(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function eV(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<QD;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Gp(){return on(Lg)}function Kp(n){return cs("authEvent",n.config.apiKey,n.name)}function tV(n){try{return JSON.parse(n)}catch(e){return null}}function nV(n){const e=Gc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Gc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gc(i).link||i||r||t||n}function Gc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return yo(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=500;class iV{constructor(){this._redirectPersistence=ys,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=wh,this._overrideRedirectResult=zg}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new YD(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){It(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){GD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),XN(),await this._originValidation(e);const o=JD(e,r,i);await XD(e,o);const a=await BD(e,o,t),u=await qD(a);return WD(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$D(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ws(),o=setTimeout(async()=>{await mw(e),t.onEvent(gw())},rV),a=async h=>{clearTimeout(o);const p=await mw(e);let m=null;p&&(h!=null&&h.url)&&(m=ZD(p,h.url)),t.onEvent(m||gw())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ws().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof u=="function")try{u(h)}catch(p){console.error(p)}}}}const sV=iV;function gw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ot("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(n,e){We(n)._logFramework(e)}var aV="@firebase/auth-compat",lV="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV=1e3;function yl(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function cV(){return yl()==="http:"||yl()==="https:"}function fA(n=ze()){return!!((yl()==="file:"||yl()==="ionic:"||yl()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function dV(){return vg()||yg()}function hV(){return a0()&&(document==null?void 0:document.documentMode)===11}function fV(n=ze()){return/Edge\/\d+/.test(n)}function pV(n=ze()){return hV()||fV(n)}function pA(){try{const n=self.localStorage,e=Tu();if(n)return n.setItem(e,"1"),n.removeItem(e),pV()?Bl():!0}catch(n){return $g()&&Bl()}return!1}function $g(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function jf(){return(cV()||o0()||fA())&&!dV()&&pA()&&!$g()}function mA(){return fA()&&typeof document!="undefined"}async function mV(){return mA()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},uV);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function gV(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={LOCAL:"local",NONE:"none",SESSION:"session"},Ba=q,gA="persistence";function _V(n,e){if(Ba(Object.values(nn).includes(e),n,"invalid-persistence-type"),vg()){Ba(e!==nn.SESSION,n,"unsupported-persistence-type");return}if(yg()){Ba(e===nn.NONE,n,"unsupported-persistence-type");return}if($g()){Ba(e===nn.NONE||e===nn.LOCAL&&Bl(),n,"unsupported-persistence-type");return}Ba(e===nn.NONE||pA(),n,"unsupported-persistence-type")}async function Hp(n){await n._initializationPromise;const e=_A(),t=cs(gA,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function yV(n,e){const t=_A();if(!t)return[];const r=cs(gA,n,e);switch(t.getItem(r)){case nn.NONE:return[zo];case nn.LOCAL:return[Yl,ys];case nn.SESSION:return[ys];default:return[]}}function _A(){var n;try{return((n=gV())===null||n===void 0?void 0:n.sessionStorage)||null}catch(e){return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=q;class oi{constructor(){this.browserResolver=on(VD),this.cordovaResolver=on(sV),this.underlyingResolver=null,this._redirectPersistence=ys,this._completeRedirectFn=wh,this._overrideRedirectResult=zg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return mA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await mV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(n){return n.unwrap()}function wV(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(n){return vA(n)}function EV(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new TV(n,oN(n,e))}else if(r){const i=vA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function vA(n){const{_tokenResponse:e}=n instanceof ht?n.customData:n;if(!e)return null;if(!(n instanceof ht)&&"temporaryProof"in e&&"phoneNumber"in e)return vs.credentialFromResult(n);const t=e.providerId;if(!t||t===za.PASSWORD)return null;let r;switch(t){case za.GOOGLE:r=Wn;break;case za.FACEBOOK:r=qn;break;case za.GITHUB:r=Gn;break;case za.TWITTER:r=Kn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Bo._create(t,a):tr._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Po(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof ht?r.credentialFromError(n):r.credentialFromResult(n)}function zt(n,e){return e.catch(t=>{throw t instanceof ht&&EV(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:IV(t),additionalUserInfo:sN(t),user:Ih.getOrCreate(i)}})}async function Qp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zt(n,t.confirm(r))}}class TV{constructor(e,t){this.resolver=t,this.auth=wV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zt(yA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=class tl{constructor(e){this._delegate=e,this.multiFactor=cN(e)}static getOrCreate(e){return tl.USER_MAP.has(e)||tl.USER_MAP.set(e,new tl(e)),tl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zt(this.auth,K0(this._delegate,e))}async linkWithPhoneNumber(e,t){return Qp(this.auth,UN(this._delegate,e,t))}async linkWithPopup(e){return zt(this.auth,HN(this._delegate,e,oi))}async linkWithRedirect(e){return await Hp(We(this.auth)),rD(this._delegate,e,oi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zt(this.auth,H0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Qp(this.auth,jN(this._delegate,e,t))}reauthenticateWithPopup(e){return zt(this.auth,KN(this._delegate,e,oi))}async reauthenticateWithRedirect(e){return await Hp(We(this.auth)),tD(this._delegate,e,oi)}sendEmailVerification(e){return Hx(this._delegate,e)}async unlink(e){return await Vx(this._delegate,e),this}updateEmail(e){return Xx(this._delegate,e)}updatePassword(e){return Zx(this._delegate,e)}updatePhoneNumber(e){return zN(this._delegate,e)}updateProfile(e){return Jx(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Qx(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Ih.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=q;class Yp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;$a(r,"invalid-api-key",{appName:e.name}),$a(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?oi:void 0;this._delegate=t.initialize({options:{persistence:AV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Pb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ih.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){cx(this._delegate,e,t)}applyActionCode(e){return Ux(this._delegate,e)}checkActionCode(e){return Q0(this._delegate,e)}confirmPasswordReset(e,t){return Fx(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zt(this._delegate,zx(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Kx(this._delegate,e)}isSignInWithEmailLink(e){return qx(this._delegate,e)}async getRedirectResult(){$a(jf(),this._delegate,"operation-not-supported-in-this-environment");const e=await sD(this._delegate,oi);return e?zt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){oV(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=_w(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=_w(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return $x(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Mx(this._delegate,e,t||void 0)}async setPersistence(e){_V(this._delegate,e);let t;switch(e){case nn.SESSION:t=ys;break;case nn.LOCAL:t=await on(Yl)._isAvailable()?Yl:Lg;break;case nn.NONE:t=zo;break;default:return It("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zt(this._delegate,Dx(this._delegate))}signInWithCredential(e){return zt(this._delegate,mh(this._delegate,e))}signInWithCustomToken(e){return zt(this._delegate,Lx(this._delegate,e))}signInWithEmailAndPassword(e,t){return zt(this._delegate,Bx(this._delegate,e,t))}signInWithEmailLink(e,t){return zt(this._delegate,Wx(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Qp(this._delegate,FN(this._delegate,e,t))}async signInWithPopup(e){return $a(jf(),this._delegate,"operation-not-supported-in-this-environment"),zt(this._delegate,GN(this._delegate,e,oi))}async signInWithRedirect(e){return $a(jf(),this._delegate,"operation-not-supported-in-this-environment"),await Hp(this._delegate),ZN(this._delegate,e,oi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return jx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Yp.Persistence=nn;function _w(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Ih.getOrCreate(o)),error:e,complete:t}}function AV(n,e){const t=yV(n,e);if(typeof self!="undefined"&&!t.includes(Yl)&&t.push(Yl),typeof window!="undefined")for(const r of[Lg,ys])t.includes(r)||t.push(r);return t.includes(zo)||t.push(zo),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.providerId="phone",this._delegate=new vs(yA(sn.auth()))}static credential(e,t){return vs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}qg.PHONE_SIGN_IN_METHOD=vs.PHONE_SIGN_IN_METHOD;qg.PROVIDER_ID=vs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV=q;class RV{constructor(e,t,r=sn.app()){var i;SV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new LN(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV="auth-compat";function kV(n){n.INTERNAL.registerComponent(new Rn(PV,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Yp(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Qs.EMAIL_SIGNIN,PASSWORD_RESET:Qs.PASSWORD_RESET,RECOVER_EMAIL:Qs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Qs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Qs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Qs.VERIFY_EMAIL}},EmailAuthProvider:Vi,FacebookAuthProvider:qn,GithubAuthProvider:Gn,GoogleAuthProvider:Wn,OAuthProvider:Po,SAMLAuthProvider:bd,PhoneAuthProvider:qg,PhoneMultiFactorGenerator:hA,RecaptchaVerifier:RV,TwitterAuthProvider:Kn,Auth:Yp,AuthCredential:aa,Error:ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(aV,lV)}kV(sn);var yw=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,wA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(T,P,b){for(var R=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)R[_e-2]=arguments[_e];return _.prototype[P].apply(T,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)T[P]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(P=0;16>P;++P)T[P]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],P=I.g[2];var b=I.g[3],R=_+(b^E&(P^b))+T[0]+3614090360&4294967295;_=E+(R<<7&4294967295|R>>>25),R=b+(P^_&(E^P))+T[1]+3905402710&4294967295,b=_+(R<<12&4294967295|R>>>20),R=P+(E^b&(_^E))+T[2]+606105819&4294967295,P=b+(R<<17&4294967295|R>>>15),R=E+(_^P&(b^_))+T[3]+3250441966&4294967295,E=P+(R<<22&4294967295|R>>>10),R=_+(b^E&(P^b))+T[4]+4118548399&4294967295,_=E+(R<<7&4294967295|R>>>25),R=b+(P^_&(E^P))+T[5]+1200080426&4294967295,b=_+(R<<12&4294967295|R>>>20),R=P+(E^b&(_^E))+T[6]+2821735955&4294967295,P=b+(R<<17&4294967295|R>>>15),R=E+(_^P&(b^_))+T[7]+4249261313&4294967295,E=P+(R<<22&4294967295|R>>>10),R=_+(b^E&(P^b))+T[8]+1770035416&4294967295,_=E+(R<<7&4294967295|R>>>25),R=b+(P^_&(E^P))+T[9]+2336552879&4294967295,b=_+(R<<12&4294967295|R>>>20),R=P+(E^b&(_^E))+T[10]+4294925233&4294967295,P=b+(R<<17&4294967295|R>>>15),R=E+(_^P&(b^_))+T[11]+2304563134&4294967295,E=P+(R<<22&4294967295|R>>>10),R=_+(b^E&(P^b))+T[12]+1804603682&4294967295,_=E+(R<<7&4294967295|R>>>25),R=b+(P^_&(E^P))+T[13]+4254626195&4294967295,b=_+(R<<12&4294967295|R>>>20),R=P+(E^b&(_^E))+T[14]+2792965006&4294967295,P=b+(R<<17&4294967295|R>>>15),R=E+(_^P&(b^_))+T[15]+1236535329&4294967295,E=P+(R<<22&4294967295|R>>>10),R=_+(P^b&(E^P))+T[1]+4129170786&4294967295,_=E+(R<<5&4294967295|R>>>27),R=b+(E^P&(_^E))+T[6]+3225465664&4294967295,b=_+(R<<9&4294967295|R>>>23),R=P+(_^E&(b^_))+T[11]+643717713&4294967295,P=b+(R<<14&4294967295|R>>>18),R=E+(b^_&(P^b))+T[0]+3921069994&4294967295,E=P+(R<<20&4294967295|R>>>12),R=_+(P^b&(E^P))+T[5]+3593408605&4294967295,_=E+(R<<5&4294967295|R>>>27),R=b+(E^P&(_^E))+T[10]+38016083&4294967295,b=_+(R<<9&4294967295|R>>>23),R=P+(_^E&(b^_))+T[15]+3634488961&4294967295,P=b+(R<<14&4294967295|R>>>18),R=E+(b^_&(P^b))+T[4]+3889429448&4294967295,E=P+(R<<20&4294967295|R>>>12),R=_+(P^b&(E^P))+T[9]+568446438&4294967295,_=E+(R<<5&4294967295|R>>>27),R=b+(E^P&(_^E))+T[14]+3275163606&4294967295,b=_+(R<<9&4294967295|R>>>23),R=P+(_^E&(b^_))+T[3]+4107603335&4294967295,P=b+(R<<14&4294967295|R>>>18),R=E+(b^_&(P^b))+T[8]+1163531501&4294967295,E=P+(R<<20&4294967295|R>>>12),R=_+(P^b&(E^P))+T[13]+2850285829&4294967295,_=E+(R<<5&4294967295|R>>>27),R=b+(E^P&(_^E))+T[2]+4243563512&4294967295,b=_+(R<<9&4294967295|R>>>23),R=P+(_^E&(b^_))+T[7]+1735328473&4294967295,P=b+(R<<14&4294967295|R>>>18),R=E+(b^_&(P^b))+T[12]+2368359562&4294967295,E=P+(R<<20&4294967295|R>>>12),R=_+(E^P^b)+T[5]+4294588738&4294967295,_=E+(R<<4&4294967295|R>>>28),R=b+(_^E^P)+T[8]+2272392833&4294967295,b=_+(R<<11&4294967295|R>>>21),R=P+(b^_^E)+T[11]+1839030562&4294967295,P=b+(R<<16&4294967295|R>>>16),R=E+(P^b^_)+T[14]+4259657740&4294967295,E=P+(R<<23&4294967295|R>>>9),R=_+(E^P^b)+T[1]+2763975236&4294967295,_=E+(R<<4&4294967295|R>>>28),R=b+(_^E^P)+T[4]+1272893353&4294967295,b=_+(R<<11&4294967295|R>>>21),R=P+(b^_^E)+T[7]+4139469664&4294967295,P=b+(R<<16&4294967295|R>>>16),R=E+(P^b^_)+T[10]+3200236656&4294967295,E=P+(R<<23&4294967295|R>>>9),R=_+(E^P^b)+T[13]+681279174&4294967295,_=E+(R<<4&4294967295|R>>>28),R=b+(_^E^P)+T[0]+3936430074&4294967295,b=_+(R<<11&4294967295|R>>>21),R=P+(b^_^E)+T[3]+3572445317&4294967295,P=b+(R<<16&4294967295|R>>>16),R=E+(P^b^_)+T[6]+76029189&4294967295,E=P+(R<<23&4294967295|R>>>9),R=_+(E^P^b)+T[9]+3654602809&4294967295,_=E+(R<<4&4294967295|R>>>28),R=b+(_^E^P)+T[12]+3873151461&4294967295,b=_+(R<<11&4294967295|R>>>21),R=P+(b^_^E)+T[15]+530742520&4294967295,P=b+(R<<16&4294967295|R>>>16),R=E+(P^b^_)+T[2]+3299628645&4294967295,E=P+(R<<23&4294967295|R>>>9),R=_+(P^(E|~b))+T[0]+4096336452&4294967295,_=E+(R<<6&4294967295|R>>>26),R=b+(E^(_|~P))+T[7]+1126891415&4294967295,b=_+(R<<10&4294967295|R>>>22),R=P+(_^(b|~E))+T[14]+2878612391&4294967295,P=b+(R<<15&4294967295|R>>>17),R=E+(b^(P|~_))+T[5]+4237533241&4294967295,E=P+(R<<21&4294967295|R>>>11),R=_+(P^(E|~b))+T[12]+1700485571&4294967295,_=E+(R<<6&4294967295|R>>>26),R=b+(E^(_|~P))+T[3]+2399980690&4294967295,b=_+(R<<10&4294967295|R>>>22),R=P+(_^(b|~E))+T[10]+4293915773&4294967295,P=b+(R<<15&4294967295|R>>>17),R=E+(b^(P|~_))+T[1]+2240044497&4294967295,E=P+(R<<21&4294967295|R>>>11),R=_+(P^(E|~b))+T[8]+1873313359&4294967295,_=E+(R<<6&4294967295|R>>>26),R=b+(E^(_|~P))+T[15]+4264355552&4294967295,b=_+(R<<10&4294967295|R>>>22),R=P+(_^(b|~E))+T[6]+2734768916&4294967295,P=b+(R<<15&4294967295|R>>>17),R=E+(b^(P|~_))+T[13]+1309151649&4294967295,E=P+(R<<21&4294967295|R>>>11),R=_+(P^(E|~b))+T[4]+4149444226&4294967295,_=E+(R<<6&4294967295|R>>>26),R=b+(E^(_|~P))+T[11]+3174756917&4294967295,b=_+(R<<10&4294967295|R>>>22),R=P+(_^(b|~E))+T[2]+718787259&4294967295,P=b+(R<<15&4294967295|R>>>17),R=E+(b^(P|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,T=this.B,P=this.h,b=0;b<_;){if(P==0)for(;b<=E;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<_;)if(T[P++]=I.charCodeAt(b++),P==this.blockSize){i(this,T),P=0;break}}else for(;b<_;)if(T[P++]=I[b++],P==this.blockSize){i(this,T),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)I[E++]=this.g[_]>>>T&255;return I};function s(I,_){var E=a;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;for(var E=[],T=!0,P=I.length-1;0<=P;P--){var b=I[P]|0;T&&b==_||(E[P]=b,T=!1)}this.g=E}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return V(c(-I));for(var _=[],E=1,T=0;I>=E;T++)_[T]=I/E|0,E*=4294967296;return new o(_,0)}function h(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return V(h(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),T=p,P=0;P<I.length;P+=8){var b=Math.min(8,I.length-P),R=parseInt(I.substring(P,P+b),_);8>b?(b=c(Math.pow(_,b)),T=T.j(b).add(c(R))):(T=T.j(E),T=T.add(c(R)))}return T}var p=u(0),m=u(1),w=u(16777216);n=o.prototype,n.m=function(){if(C(this))return-V(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(C(this))return"-"+V(this).toString(I);for(var _=c(Math.pow(I,6)),E=this,T="";;){var P=L(E,_).g;E=A(E,P.j(_));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=P,k(E))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function C(I){return I.h==-1}n.l=function(I){return I=A(this,I),C(I)?-1:k(I)?0:1};function V(I){for(var _=I.g.length,E=[],T=0;T<_;T++)E[T]=~I.g[T];return new o(E,~I.h).add(m)}n.abs=function(){return C(this)?V(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0,P=0;P<=_;P++){var b=T+(this.i(P)&65535)+(I.i(P)&65535),R=(b>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);T=R>>>16,b&=65535,R&=65535,E[P]=R<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function A(I,_){return I.add(V(_))}n.j=function(I){if(k(this)||k(I))return p;if(C(this))return C(I)?V(this).j(V(I)):V(V(this).j(I));if(C(I))return V(this.j(V(I)));if(0>this.l(w)&&0>I.l(w))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var P=0;P<I.g.length;P++){var b=this.i(T)>>>16,R=this.i(T)&65535,_e=I.i(P)>>>16,kn=I.i(P)&65535;E[2*T+2*P]+=R*kn,v(E,2*T+2*P),E[2*T+2*P+1]+=b*kn,v(E,2*T+2*P+1),E[2*T+2*P+1]+=R*_e,v(E,2*T+2*P+1),E[2*T+2*P+2]+=b*_e,v(E,2*T+2*P+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function S(I,_){this.g=I,this.h=_}function L(I,_){if(k(_))throw Error("division by zero");if(k(I))return new S(p,p);if(C(I))return _=L(V(I),_),new S(V(_.g),V(_.h));if(C(_))return _=L(I,V(_)),new S(V(_.g),_.h);if(30<I.g.length){if(C(I)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=_;0>=T.l(I);)E=B(E),T=B(T);var P=F(E,1),b=F(T,1);for(T=F(T,2),E=F(E,2);!k(T);){var R=b.add(T);0>=R.l(I)&&(P=P.add(E),b=R),T=F(T,1),E=F(E,1)}return _=A(I,P.j(_)),new S(P,_)}for(P=p;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=c(E),R=b.j(_);C(R)||0<R.l(I);)E-=T,b=c(E),R=b.j(_);k(b)&&(b=m),P=P.add(b),I=A(I,R)}return new S(P,I)}n.A=function(I){return L(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&I.i(T);return new o(E,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|I.i(T);return new o(E,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^I.i(T);return new o(E,this.h^I.h)};function B(I){for(var _=I.g.length+1,E=[],T=0;T<_;T++)E[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(E,I.h)}function F(I,_){var E=_>>5;_%=32;for(var T=I.g.length-E,P=[],b=0;b<T;b++)P[b]=0<_?I.i(b+E)>>>_|I.i(b+E+1)<<32-_:I.i(b+E);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,hs=o}).apply(typeof yw!="undefined"?yw:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Sc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IA,nl,EA,Kc,Jp,TA,AA,SA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,f){return l==Array.prototype||l==Object.prototype||(l[d]=f.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sc=="object"&&Sc];for(var d=0;d<l.length;++d){var f=l[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var x=l[g];if(!(x in f))break e;f=f[x]}l=l[l.length-1],g=f[l],d=d(g),d!=g&&d!=null&&e(f,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var f=0,g=!1,x={next:function(){if(!g&&f<l.length){var M=f++;return{value:d(M,l[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,f){return l.call.apply(l.bind,arguments)}function p(l,d,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),l.apply(d,x)}}return function(){return l.apply(d,arguments)}}function m(l,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function w(l,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function k(l,d){function f(){}f.prototype=d.prototype,l.aa=d.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,x,M){for(var W=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)W[Te-2]=arguments[Te];return d.prototype[x].apply(g,W)}}function C(l){const d=l.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=l[g];return f}return[]}function V(l,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=l.length||0,M=g.length||0;l.length=x+M;for(let W=0;W<M;W++)l[x+W]=g[W]}else l.push(g)}}class A{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var B=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(l,d,f){for(const g in l)d.call(f,l[g],g,l)}function I(l,d){for(const f in l)d.call(void 0,l[f],f,l)}function _(l){const d={};for(const f in l)d[f]=l[f];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)l[f]=g[f];for(let M=0;M<E.length;M++)f=E[M],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function P(l){var d=1;l=l.split(":");const f=[];for(;0<d&&l.length;)f.push(l.shift()),d--;return l.length&&f.push(l.join(":")),f}function b(l){a.setTimeout(()=>{throw l},0)}function R(){var l=re;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class _e{constructor(){this.h=this.g=null}add(d,f){const g=kn.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var kn=new A(()=>new Cn,l=>l.reset());class Cn{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,G=!1,re=new _e,ie=()=>{const l=a.Promise.resolve(void 0);fn=()=>{l.then(de)}};var de=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(f){b(f)}var d=kn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}G=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,d),a.removeEventListener("test",f,d)}catch(f){}return l}();function bn(l,d){if(Ie.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(B){e:{try{L(d.nodeName);var x=!0;break e}catch(M){}x=!1}x||(d=null)}}else f=="mouseover"?d=l.fromElement:f=="mouseout"&&(d=l.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&bn.aa.h.call(this)}}k(bn,Ie);var Ae={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),Ur=0;function jr(l,d,f,g,x){this.listener=l,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=x,this.key=++Ur,this.da=this.fa=!1}function Jt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function zr(l){this.src=l,this.g={},this.h=0}zr.prototype.add=function(l,d,f,g,x){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var W=sr(l,d,g,x);return-1<W?(d=l[W],f||(d.fa=!1)):(d=new jr(d,this.src,M,!!g,x),d.fa=f,l.push(d)),d};function mn(l,d){var f=d.type;if(f in l.g){var g=l.g[f],x=Array.prototype.indexOf.call(g,d,void 0),M;(M=0<=x)&&Array.prototype.splice.call(g,x,1),M&&(Jt(d),l.g[f].length==0&&(delete l.g[f],l.h--))}}function sr(l,d,f,g){for(var x=0;x<l.length;++x){var M=l[x];if(!M.da&&M.listener==d&&M.capture==!!f&&M.ha==g)return x}return-1}var _a="closure_lm_"+(1e6*Math.random()|0),Us={};function ya(l,d,f,g,x){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ya(l,d[M],f,g,x);return null}return f=Ui(f),l&&l[jt]?l.K(d,f,c(g)?!!g.capture:!1,x):Fu(l,d,f,!1,g,x)}function Fu(l,d,f,g,x,M){if(!d)throw Error("Invalid event type");var W=c(x)?!!x.capture:!!x,Te=wa(l);if(Te||(l[_a]=Te=new zr(l)),f=Te.add(d,f,g,W,M),f.proxy)return f;if(g=va(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)pn||(x=W),x===void 0&&(x=!1),l.addEventListener(d.toString(),g,x);else if(l.attachEvent)l.attachEvent(Uu(d.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function va(){function l(f){return d.call(l.src,l.listener,f)}const d=zs;return l}function Xt(l,d,f,g,x){if(Array.isArray(d))for(var M=0;M<d.length;M++)Xt(l,d[M],f,g,x);else g=c(g)?!!g.capture:!!g,f=Ui(f),l&&l[jt]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],f=sr(M,f,g,x),-1<f&&(Jt(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=wa(l))&&(d=l.g[d.toString()],l=-1,d&&(l=sr(d,f,g,x)),(f=-1<l?d[l]:null)&&js(f))}function js(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[jt])mn(d.i,l);else{var f=l.type,g=l.proxy;d.removeEventListener?d.removeEventListener(f,g,l.capture):d.detachEvent?d.detachEvent(Uu(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=wa(d))?(mn(f,l),f.h==0&&(f.src=null,d[_a]=null)):Jt(l)}}}function Uu(l){return l in Us?Us[l]:Us[l]="on"+l}function zs(l,d){if(l.da)l=!0;else{d=new bn(d,this);var f=l.listener,g=l.ha||l.src;l.fa&&js(l),l=f.call(g,d)}return l}function wa(l){return l=l[_a],l instanceof zr?l:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(l){return typeof l=="function"?l:(l[or]||(l[or]=function(d){return l.handleEvent(d)}),l[or])}function Ze(){ge.call(this),this.i=new zr(this),this.M=this,this.F=null}k(Ze,ge),Ze.prototype[jt]=!0,Ze.prototype.removeEventListener=function(l,d,f,g){Xt(this,l,d,f,g)};function rt(l,d){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=d.type||d,typeof d=="string")d=new Ie(d,l);else if(d instanceof Ie)d.target=d.target||l;else{var x=d;d=new Ie(g,l),T(d,x)}if(x=!0,f)for(var M=f.length-1;0<=M;M--){var W=d.g=f[M];x=Br(W,g,!0,d)&&x}if(W=d.g=l,x=Br(W,g,!0,d)&&x,x=Br(W,g,!1,d)&&x,f)for(M=0;M<f.length;M++)W=d.g=f[M],x=Br(W,g,!1,d)&&x}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var f=l.g[d],g=0;g<f.length;g++)Jt(f[g]);delete l.g[d],l.h--}}this.F=null},Ze.prototype.K=function(l,d,f,g){return this.i.add(String(l),d,!1,f,g)},Ze.prototype.L=function(l,d,f,g){return this.i.add(String(l),d,!0,f,g)};function Br(l,d,f,g){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,M=0;M<d.length;++M){var W=d[M];if(W&&!W.da&&W.capture==f){var Te=W.listener,pt=W.ha||W.src;W.fa&&mn(l.i,W),x=Te.call(pt,g)!==!1&&x}}return x&&!g.defaultPrevented}function ju(l,d,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function zu(l){l.g=ju(()=>{l.g=null,l.i&&(l.i=!1,zu(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Wh extends ge{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(l){ge.call(this),this.h=l,this.g={}}k(ji,ge);var Bu=[];function $u(l){F(l.g,function(d,f){this.g.hasOwnProperty(f)&&js(d)},l),l.g={}}ji.prototype.N=function(){ji.aa.N.call(this),$u(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bs=a.JSON.stringify,qu=a.JSON.parse,Ia=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ea(){}Ea.prototype.h=null;function Ta(l){return l.h||(l.h=l.i())}function $s(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ar(){Ie.call(this,"d")}k(ar,Ie);function lr(){Ie.call(this,"c")}k(lr,Ie);var ur={},D=null;function U(){return D=D||new Ze}ur.La="serverreachability";function Q(l){Ie.call(this,ur.La,l)}k(Q,Ie);function te(l){const d=U();rt(d,new Q(d))}ur.STAT_EVENT="statevent";function xe(l,d){Ie.call(this,ur.STAT_EVENT,l),this.stat=d}k(xe,Ie);function ye(l){const d=U();rt(d,new xe(d,l))}ur.Ma="timingevent";function Zt(l,d){Ie.call(this,ur.Ma,l),this.size=d}k(Zt,Ie);function cr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function zi(l,d,f,g,x,M){l.info(function(){if(l.g)if(M)for(var W="",Te=M.split("&"),pt=0;pt<Te.length;pt++){var pe=Te[pt].split("=");if(1<pe.length){var Et=pe[0];pe=pe[1];var Tt=Et.split("_");W=2<=Tt.length&&Tt[1]=="type"?W+(Et+"="+pe+"&"):W+(Et+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+d+`
`+f+`
`+W})}function Wu(l,d,f,g,x,M,W){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+d+`
`+f+`
`+M+" "+W})}function dr(l,d,f,g){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ku(l,f)+(g?" "+g:"")})}function Gu(l,d){l.info(function(){return"TIMEOUT: "+d})}xn.prototype.info=function(){};function Ku(l,d){if(!l.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var M=x[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<x.length;W++)x[W]=""}}}}return Bs(f)}catch(Te){return d}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gh;function Hu(){}k(Hu,Ea),Hu.prototype.g=function(){return new XMLHttpRequest},Hu.prototype.i=function(){return{}},Gh=new Hu;function qr(l,d,f,g){this.j=l,this.i=d,this.l=f,this.R=g||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new H_}function H_(){this.i=null,this.g="",this.h=!1}var Q_={},Kh={};function Hh(l,d,f){l.L=1,l.v=Xu(hr(d)),l.m=f,l.P=!0,Y_(l,null)}function Y_(l,d){l.F=Date.now(),Qu(l),l.A=hr(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),cy(f.i,"t",g),l.C=0,f=l.j.J,l.h=new H_,l.g=ky(l.j,f?d:null,!l.m),0<l.O&&(l.M=new Wh(m(l.Y,l,l.g),l.O)),d=l.U,f=l.g,g=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(Bu[0]=x.toString()),x=Bu);for(var M=0;M<x.length;M++){var W=ya(f,x[M],g||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),te(),zi(l.i,l.u,l.A,l.l,l.R,l.m)}qr.prototype.ca=function(l){l=l.target;const d=this.M;d&&fr(l)==3?d.j():this.Y(l)},qr.prototype.Y=function(l){try{if(l==this.g)e:{const Tt=fr(this.g);var d=this.g.Ba();const Ks=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||_y(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Ks?te(3):te(2)),Qh(this);var f=this.g.Z();this.X=f;t:if(J_(this)){var g=_y(this.g);l="";var x=g.length,M=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$i(this),Aa(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,l+=this.h.i.decode(g[d],{stream:!(M&&d==x-1)});g.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Wu(this.i,this.u,this.A,this.l,this.R,Tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,pt=this.g;if((Te=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Te)){var pe=Te;break t}}pe=null}if(f=pe)dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yh(this,f);else{this.o=!1,this.s=3,ye(12),$i(this),Aa(this);break e}}if(this.P){f=!0;let Nn;for(;!this.J&&this.C<W.length;)if(Nn=KR(this,W),Nn==Kh){Tt==4&&(this.s=4,ye(14),f=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==Q_){this.s=4,ye(15),dr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else dr(this.i,this.l,Nn,null),Yh(this,Nn);if(J_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||W.length!=0||this.h.h||(this.s=1,ye(16),f=!1),this.o=this.o&&f,!f)dr(this.i,this.l,W,"[Invalid Chunked Response]"),$i(this),Aa(this);else if(0<W.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),nf(Et),Et.M=!0,ye(11))}}else dr(this.i,this.l,W,null),Yh(this,W);Tt==4&&$i(this),this.o&&!this.J&&(Tt==4?Ay(this.j,this):(this.o=!1,Qu(this)))}else cP(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,ye(12)):(this.s=0,ye(13)),$i(this),Aa(this)}}}catch(Tt){}finally{}};function J_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function KR(l,d){var f=l.C,g=d.indexOf(`
`,f);return g==-1?Kh:(f=Number(d.substring(f,g)),isNaN(f)?Q_:(g+=1,g+f>d.length?Kh:(d=d.slice(g,g+f),l.C=g+f,d)))}qr.prototype.cancel=function(){this.J=!0,$i(this)};function Qu(l){l.S=Date.now()+l.I,X_(l,l.I)}function X_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=cr(m(l.ba,l),d)}function Qh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}qr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Gu(this.i,this.A),this.L!=2&&(te(),ye(17)),$i(this),this.s=2,Aa(this)):X_(this,this.S-l)};function Aa(l){l.j.G==0||l.J||Ay(l.j,l)}function $i(l){Qh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,$u(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Yh(l,d){try{var f=l.j;if(f.G!=0&&(f.g==l||Jh(f.h,l))){if(!l.K&&Jh(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(d)}catch(pe){g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)ic(f),nc(f);else break e;tf(f),ye(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=cr(m(f.Za,f),6e3));if(1>=ty(f.h)&&f.ca){try{f.ca()}catch(pe){}f.ca=void 0}}else Wi(f,11)}else if((l.K||f.g==l)&&ic(f),!v(d))for(x=f.Da.g.parse(d),d=0;d<x.length;d++){let pe=x[d];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const Et=pe[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const Tt=pe[4];Tt!=null&&(f.Aa=Tt,f.j.info("SVER="+f.Aa));const Ks=pe[5];Ks!=null&&typeof Ks=="number"&&0<Ks&&(g=1.5*Ks,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Nn=l.g;if(Nn){const oc=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var M=g.h;M.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Xh(M,M.h),M.h=null))}if(g.D){const rf=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;rf&&(g.ya=rf,Pe(g.I,g.D,rf))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=l;if(g.qa=Py(g,g.J?g.ia:null,g.W),W.K){ny(g.h,W);var Te=W,pt=g.L;pt&&(Te.I=pt),Te.B&&(Qh(Te),Qu(Te)),g.g=W}else Ey(g);0<f.i.length&&rc(f)}else pe[0]!="stop"&&pe[0]!="close"||Wi(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Wi(f,7):ef(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}te(4)}catch(pe){}}var HR=class{constructor(l,d){this.g=l,this.map=d}};function Z_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ey(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ty(l){return l.h?1:l.g?l.g.size:0}function Jh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Xh(l,d){l.g?l.g.add(d):l.h=d}function ny(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Z_.prototype.cancel=function(){if(this.i=ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ry(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const f of l.g.values())d=d.concat(f.D);return d}return C(l.i)}function QR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],f=l.length,g=0;g<f;g++)d.push(l[g]);return d}d=[],f=0;for(g in l)d[f++]=l[g];return d}function YR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var f=0;f<l;f++)d.push(f);return d}d=[],f=0;for(const g in l)d[f++]=g;return d}}}function iy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var f=YR(l),g=QR(l),x=g.length,M=0;M<x;M++)d.call(void 0,g[M],f&&f[M],l)}var sy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JR(l,d){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),x=null;if(0<=g){var M=l[f].substring(0,g);x=l[f].substring(g+1)}else M=l[f];d(M,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function qi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof qi){this.h=l.h,Yu(this,l.j),this.o=l.o,this.g=l.g,Ju(this,l.s),this.l=l.l;var d=l.i,f=new Pa;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),oy(this,f),this.m=l.m}else l&&(d=String(l).match(sy))?(this.h=!1,Yu(this,d[1]||"",!0),this.o=Sa(d[2]||""),this.g=Sa(d[3]||"",!0),Ju(this,d[4]),this.l=Sa(d[5]||"",!0),oy(this,d[6]||"",!0),this.m=Sa(d[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}qi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ra(d,ay,!0),":");var f=this.g;return(f||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ra(d,ay,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(Ra(f,f.charAt(0)=="/"?eP:ZR,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",Ra(f,nP)),l.join("")};function hr(l){return new qi(l)}function Yu(l,d,f){l.j=f?Sa(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ju(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function oy(l,d,f){d instanceof Pa?(l.i=d,rP(l.i,l.h)):(f||(d=Ra(d,tP)),l.i=new Pa(d,l.h))}function Pe(l,d,f){l.i.set(d,f)}function Xu(l){return Pe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Sa(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ra(l,d,f){return typeof l=="string"?(l=encodeURI(l).replace(d,XR),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function XR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ay=/[#\/\?@]/g,ZR=/[#\?:]/g,eP=/[#\?]/g,tP=/[#\?@]/g,nP=/#/g;function Pa(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Wr(l){l.g||(l.g=new Map,l.h=0,l.i&&JR(l.i,function(d,f){l.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=Pa.prototype,n.add=function(l,d){Wr(this),this.i=null,l=Ws(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(d),this.h+=1,this};function ly(l,d){Wr(l),d=Ws(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function uy(l,d){return Wr(l),d=Ws(l,d),l.g.has(d)}n.forEach=function(l,d){Wr(this),this.g.forEach(function(f,g){f.forEach(function(x){l.call(d,x,g,this)},this)},this)},n.na=function(){Wr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const x=l[g];for(let M=0;M<x.length;M++)f.push(d[g])}return f},n.V=function(l){Wr(this);let d=[];if(typeof l=="string")uy(this,l)&&(d=d.concat(this.g.get(Ws(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)d=d.concat(l[f])}return d},n.set=function(l,d){return Wr(this),this.i=null,l=Ws(this,l),uy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function cy(l,d,f){ly(l,d),0<f.length&&(l.i=null,l.g.set(Ws(l,d),C(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const M=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var x=M;W[g]!==""&&(x+="="+encodeURIComponent(String(W[g]))),l.push(x)}}return this.i=l.join("&")};function Ws(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function rP(l,d){d&&!l.j&&(Wr(l),l.i=null,l.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(ly(this,g),cy(this,x,f))},l)),l.j=d}function iP(l,d){const f=new xn;if(a.Image){const g=new Image;g.onload=w(Gr,f,"TestLoadImage: loaded",!0,d,g),g.onerror=w(Gr,f,"TestLoadImage: error",!1,d,g),g.onabort=w(Gr,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=w(Gr,f,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else d(!1)}function sP(l,d){const f=new xn,g=new AbortController,x=setTimeout(()=>{g.abort(),Gr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:g.signal}).then(M=>{clearTimeout(x),M.ok?Gr(f,"TestPingServer: ok",!0,d):Gr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),Gr(f,"TestPingServer: error",!1,d)})}function Gr(l,d,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch(M){}}function oP(){this.g=new Ia}function aP(l,d,f){const g=f||"";try{iy(l,function(x,M){let W=x;c(x)&&(W=Bs(x)),d.push(g+M+"="+encodeURIComponent(W))})}catch(x){throw d.push(g+"type="+encodeURIComponent("_badmap")),x}}function Zu(l){this.l=l.Ub||null,this.j=l.eb||!1}k(Zu,Ea),Zu.prototype.g=function(){return new ec(this.l,this.j)},Zu.prototype.i=function(l){return function(){return l}}({});function ec(l,d){Ze.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ec,Ze),n=ec.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ca(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ka(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ca(this)),this.g&&(this.readyState=3,Ca(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ka(this):Ca(this),this.readyState==3&&dy(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,ka(this))},n.Qa=function(l){this.g&&(this.response=l,ka(this))},n.ga=function(){this.g&&ka(this)};function ka(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ca(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=d.next();return l.join(`\r
`)};function Ca(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hy(l){let d="";return F(l,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function Zh(l,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=hy(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):Pe(l,d,f))}function Be(l){Ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Be,Ze);var lP=/^https?$/i,uP=["POST","PUT"];n=Be.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gh.g(),this.v=this.o?Ta(this.o):Ta(Gh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){fy(this,M);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())f.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(uP,d,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of f)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gy(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){fy(this,M)}};function fy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,py(l),tc(l)}function py(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,rt(this,"complete"),rt(this,"abort"),tc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tc(this,!0)),Be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?my(this):this.bb())},n.bb=function(){my(this)};function my(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||fr(l)!=4||l.Z()!=2)){if(l.u&&fr(l)==4)ju(l.Ea,0,l);else if(rt(l,"readystatechange"),fr(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=W===0){var x=String(l.D).match(sy)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),g=!lP.test(x?x.toLowerCase():"")}f=g}if(f)rt(l,"complete"),rt(l,"success");else{l.m=6;try{var M=2<fr(l)?l.g.statusText:""}catch(Te){M=""}l.l=M+" ["+l.Z()+"]",py(l)}}finally{tc(l)}}}}function tc(l,d){if(l.g){gy(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||rt(l,"ready");try{f.onreadystatechange=g}catch(x){}}}function gy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function fr(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch(l){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(l){return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),qu(d)}};function _y(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch(d){return null}}function cP(l){const d={};l=(l.g&&2<=fr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(v(l[g]))continue;var f=P(l[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=d[x]||[];d[x]=M,M.push(f)}I(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ba(l,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||d}function yy(l){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ba("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ba("baseRetryDelayMs",5e3,l),this.cb=ba("retryDelaySeedMs",1e4,l),this.Wa=ba("forwardChannelMaxRetries",2,l),this.wa=ba("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Z_(l&&l.concurrentRequestLimit),this.Da=new oP,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yy.prototype,n.la=8,n.G=1,n.connect=function(l,d,f,g){ye(0),this.W=l,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Py(this,null,this.W),rc(this)};function ef(l){if(vy(l),l.G==3){var d=l.U++,f=hr(l.I);if(Pe(f,"SID",l.K),Pe(f,"RID",d),Pe(f,"TYPE","terminate"),xa(l,f),d=new qr(l,l.j,d),d.L=2,d.v=Xu(hr(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(d.v.toString(),"")}catch(g){}!f&&a.Image&&(new Image().src=d.v,f=!0),f||(d.g=ky(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qu(d)}Ry(l)}function nc(l){l.g&&(nf(l),l.g.cancel(),l.g=null)}function vy(l){nc(l),l.u&&(a.clearTimeout(l.u),l.u=null),ic(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function rc(l){if(!ey(l.h)&&!l.s){l.s=!0;var d=l.Ga;fn||ie(),G||(fn(),G=!0),re.add(d,l),l.B=0}}function dP(l,d){return ty(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=cr(m(l.Ga,l,d),Sy(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new qr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),T(M,this.S)):M=this.S),this.m!==null||this.O||(x.H=M,M=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Iy(this,x,d),f=hr(this.I),Pe(f,"RID",l),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),xa(this,f),M&&(this.O?d="headers="+encodeURIComponent(String(hy(M)))+"&"+d:this.m&&Zh(f,this.m,M)),Xh(this.h,x),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",d),Pe(f,"SID","null"),x.T=!0,Hh(x,f,null)):Hh(x,f,d),this.G=2}}else this.G==3&&(l?wy(this,l):this.i.length==0||ey(this.h)||wy(this))};function wy(l,d){var f;d?f=d.l:f=l.U++;const g=hr(l.I);Pe(g,"SID",l.K),Pe(g,"RID",f),Pe(g,"AID",l.T),xa(l,g),l.m&&l.o&&Zh(g,l.m,l.o),f=new qr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Iy(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Xh(l.h,f),Hh(f,g,d)}function xa(l,d){l.H&&F(l.H,function(f,g){Pe(d,g,f)}),l.l&&iy({},function(f,g){Pe(d,g,f)})}function Iy(l,d,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var x=l.i;let M=-1;for(;;){const W=["count="+f];M==-1?0<f?(M=x[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Te=!0;for(let pt=0;pt<f;pt++){let pe=x[pt].g;const Et=x[pt].map;if(pe-=M,0>pe)M=Math.max(0,x[pt].g-100),Te=!1;else try{aP(Et,W,"req"+pe+"_")}catch(Tt){g&&g(Et)}}if(Te){g=W.join("&");break e}}}return l=l.i.splice(0,f),d.D=l,g}function Ey(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;fn||ie(),G||(fn(),G=!0),re.add(d,l),l.v=0}}function tf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=cr(m(l.Fa,l),Sy(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=cr(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ye(10),nc(this),Ty(this))};function nf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ty(l){l.g=new qr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=hr(l.qa);Pe(d,"RID","rpc"),Pe(d,"SID",l.K),Pe(d,"AID",l.T),Pe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Pe(d,"TO",l.ja),Pe(d,"TYPE","xmlhttp"),xa(l,d),l.m&&l.o&&Zh(d,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Xu(hr(d)),f.m=null,f.P=!0,Y_(f,l)}n.Za=function(){this.C!=null&&(this.C=null,nc(this),tf(this),ye(19))};function ic(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ay(l,d){var f=null;if(l.g==d){ic(l),nf(l),l.g=null;var g=2}else if(Jh(l.h,d))f=d.D,ny(l.h,d),g=1;else return;if(l.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var x=l.B;g=U(),rt(g,new Zt(g,f)),rc(l)}else Ey(l);else if(x=d.s,x==3||x==0&&0<d.X||!(g==1&&dP(l,d)||g==2&&tf(l)))switch(f&&0<f.length&&(d=l.h,d.i=d.i.concat(f)),x){case 1:Wi(l,5);break;case 4:Wi(l,10);break;case 3:Wi(l,6);break;default:Wi(l,2)}}}function Sy(l,d){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*d}function Wi(l,d){if(l.j.info("Error code "+d),d==2){var f=m(l.fb,l),g=l.Xa;const x=!g;g=new qi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yu(g,"https"),Xu(g),x?iP(g.toString(),f):sP(g.toString(),f)}else ye(2);l.G=0,l.l&&l.l.sa(d),Ry(l),vy(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Ry(l){if(l.G=0,l.ka=[],l.l){const d=ry(l.h);(d.length!=0||l.i.length!=0)&&(V(l.ka,d),V(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Py(l,d,f){var g=f instanceof qi?hr(f):new qi(f);if(g.g!="")d&&(g.g=d+"."+g.g),Ju(g,g.s);else{var x=a.location;g=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var M=new qi(null);g&&Yu(M,g),d&&(M.g=d),x&&Ju(M,x),f&&(M.l=f),g=M}return f=l.D,d=l.ya,f&&d&&Pe(g,f,d),Pe(g,"VER",l.la),xa(l,g),g}function ky(l,d,f){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Be(new Zu({eb:f})):new Be(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cy(){}n=Cy.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sc(){}sc.prototype.g=function(l,d){return new en(l,d)};function en(l,d){Ze.call(this),this.g=new yy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Gs(this)}k(en,Ze),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){ef(this.g)},en.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=Bs(l),l=f);d.i.push(new HR(d.Ya++,l)),d.G==3&&rc(d)},en.prototype.N=function(){this.g.l=null,delete this.j,ef(this.g),delete this.g,en.aa.N.call(this)};function by(l){ar.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const f in d){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}k(by,ar);function xy(){lr.call(this),this.status=1}k(xy,lr);function Gs(l){this.g=l}k(Gs,Cy),Gs.prototype.ua=function(){rt(this.g,"a")},Gs.prototype.ta=function(l){rt(this.g,new by(l))},Gs.prototype.sa=function(l){rt(this.g,new xy)},Gs.prototype.ra=function(){rt(this.g,"b")},sc.prototype.createWebChannel=sc.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,SA=function(){return new sc},AA=function(){return U()},TA=ur,Jp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,Kc=Bi,qs.COMPLETE="complete",EA=qs,$s.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,nl=$s,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,IA=Be}).apply(typeof Sc!="undefined"?Sc:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const vw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new ch("@firebase/firestore");function eo(){return Ei.logLevel}function CV(n){Ei.setLogLevel(n)}function z(n,...e){if(Ei.logLevel<=ae.DEBUG){const t=e.map(Wg);Ei.debug(`Firestore (${ua}): ${n}`,...t)}}function Ye(n,...e){if(Ei.logLevel<=ae.ERROR){const t=e.map(Wg);Ei.error(`Firestore (${ua}): ${n}`,...t)}}function nr(n,...e){if(Ei.logLevel<=ae.WARN){const t=e.map(Wg);Ei.warn(`Firestore (${ua}): ${n}`,...t)}}function Wg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n="Unexpected state"){const e=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: `+n;throw Ye(e),new Error(e)}function X(n,e){n||Y()}function bV(n,e){n||Y()}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ct.UNAUTHENTICATED))}shutdown(){}}class NV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class DV{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new RA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new ct(e)}}class VV{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OV{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new VV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new LV(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function $o(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function kA(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Le(0,0))}static max(){return new ee(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(),r===void 0?r=e.length-t:r>e.length-t&&Y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends Jl{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const UV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Jl{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return UV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ue.fromString(e))}static fromName(e){return new K(ue.fromString(e).popFirst(5))}static empty(){return new K(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Xp(n){return n.fields.find(e=>e.kind===2)}function Yi(n){return n.fields.filter(e=>e.kind!==2)}Vd.UNKNOWN_ID=-1;class Hc{constructor(e,t){this.fieldPath=e,this.kind=t}}class Xl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Xl(0,cn.min())}}function CA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new cn(i,K.empty(),e)}function bA(n){return new cn(n.readTime,n.key,-1)}class cn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cn(ee.min(),K.empty(),-1)}static max(){return new cn(ee.max(),K.empty(),-1)}}function Gg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==xA)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new vl(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Kg(r.target.error);this.V.reject(new vl(e,i))}}static open(e,t,r,i){try{return new Eh(t,e.transaction(i,r))}catch(s){throw new vl(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zV(t)}}class Zn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Zn.S(ze())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),Ji(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Bl())return!1;if(Zn.v())return!0;const e=ze(),t=Zn.S(e),r=0<t&&t<10,i=DA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new vl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new vl(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Eh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),N.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function DA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class jV{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ji(this.B.delete())}}class vl extends j{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Li(n){return n.name==="IndexedDbTransactionError"}class zV{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(z("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ji(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),Ji(this.store.add(e))}get(e){return Ji(this.store.get(e)).next(t=>(t===void 0&&(t=null),z("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),Ji(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),Ji(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new N((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new N((r,i)=>{t.onerror=s=>{const o=Kg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new jV(a),c=t(a.primaryKey,a.value,u);if(c instanceof N){const h=c.catch(p=>(u.done(),N.reject(p)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>N.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ji(n){return new N((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Kg(r.target.error);t(i)}})}let ww=!1;function Kg(n){const e=Zn.S(ze());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ww||(ww=!0,setTimeout(()=>{throw r},0)),r}}return n}class BV{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Li(t)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Oi(t)}await this.X(6e4)})}}class $V{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(z("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=bA(s);Gg(o,r)>0&&(r=o)}),new cn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wt.oe=-1;function Su(n){return n==null}function Zl(n){return n===0&&1/n==-1/0}function VA(n){return typeof n=="number"&&Number.isInteger(n)&&!Zl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Iw(e)),e=qV(n.get(t),e);return Iw(e)}function qV(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Iw(n){return n+""}function Qn(n){const e=n.length;if(X(e>=2),e===2)return X(n.charAt(0)===""&&n.charAt(1)===""),ue.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&Y(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:Y()}s=o+2}return new ue(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n,e){return[n,Ot(e)]}function OA(n,e,t){return[n,Ot(e),t]}const WV={},GV=["prefixPath","collectionGroup","readTime","documentId"],KV=["prefixPath","collectionGroup","documentId"],HV=["collectionGroup","readTime","prefixPath","documentId"],QV=["canonicalId","targetId"],YV=["targetId","path"],JV=["path","targetId"],XV=["collectionId","parent"],ZV=["indexId","uid"],e2=["uid","sequenceNumber"],t2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],n2=["indexId","uid","orderedDocumentKey"],r2=["userId","collectionPath","documentId"],i2=["userId","collectionPath","largestBatchId"],s2=["userId","collectionGroup","largestBatchId"],LA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],o2=[...LA,"documentOverlays"],MA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],FA=MA,Hg=[...FA,"indexConfiguration","indexState","indexEntries"],a2=Hg,l2=[...Hg,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends NA{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function at(n,e){const t=H(n);return Zn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function UA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rc(this.root,e,this.comparator,!0)}}class Rc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new gt(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,t,r,i,s){return this}insert(e,t,r){return new gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Aw(this.data.getIterator())}getIteratorFrom(e){return new Aw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Aw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ys(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new Ee(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new jA("Invalid base64 string: "+s):s}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const c2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(n){if(X(!!n),typeof n=="string"){let e=0;const t=c2.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ti(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Qg(n){const e=n.mapValue.fields.__previous_value__;return Th(e)?Qg(e):e}function eu(n){const e=xr(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ai{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yc={nullValue:"NULL_VALUE"};function Is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Th(n)?4:zA(n)?9007199254740991:Ah(n)?10:11:Y()}function rr(n,e){if(n===e)return!0;const t=Is(n);if(t!==Is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return eu(n).isEqual(eu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),a=xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?Zl(o)===Zl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return $o(n.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Tw(o)!==Tw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!rr(o[u],a[u])))return!1;return!0}(n,e);default:return Y()}}function tu(n,e){return(n.values||[]).find(t=>rr(t,e))!==void 0}function Si(n,e){if(n===e)return 0;const t=Is(n),r=Is(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return Sw(n.timestampValue,e.timestampValue);case 4:return Sw(eu(n),eu(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),u=Ti(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=se(a[c],u[c]);if(h!==0)return h}return se(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Ne(s.latitude),Ne(o.latitude));return a!==0?a:se(Ne(s.longitude),Ne(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Rw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},m=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,k=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=se(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:Rw(w,k)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ai.mapValue&&o===ai.mapValue)return 0;if(s===ai.mapValue)return 1;if(o===ai.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=se(u[p],h[p]);if(m!==0)return m;const w=Si(a[u[p]],c[h[p]]);if(w!==0)return w}return se(u.length,h.length)}(n.mapValue,e.mapValue);default:throw Y()}}function Sw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=xr(n),r=xr(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function Rw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Si(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function qo(n){return em(n)}function em(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=xr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ti(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=em(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${em(t.fields[o])}`;return i+"}"}(n.mapValue):Y()}function Es(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tm(n){return!!n&&"integerValue"in n}function nu(n){return!!n&&"arrayValue"in n}function Pw(n){return!!n&&"nullValue"in n}function kw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Jc(n){return!!n&&"mapValue"in n}function Ah(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function wl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=wl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const BA={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function h2(n){return"nullValue"in n?Yc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Es(Ai.empty(),K.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Ah(n)?BA:{mapValue:{}}:Y()}function f2(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Es(Ai.empty(),K.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?BA:"mapValue"in n?Ah(n)?{mapValue:{}}:ai:Y()}function Cw(n,e){const t=Si(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function bw(n,e){const t=Si(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Jc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wl(t)}setAll(e){let t=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=wl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Jc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Vs(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(wl(this.value))}}function $A(n){const e=[];return Vs(n.fields,(t,r)=>{const i=new Ve([t]);if(Jc(r)){const s=$A(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,ee.min(),ee.min(),ee.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,ee.min(),ee.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,ee.min(),ee.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.position=e,this.inclusive=t}}function xw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),t.key):r=Si(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t="asc"){this.field=e,this.dir=t}}function p2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{}class ce extends qA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new m2(e,t,r):t==="array-contains"?new y2(e,r):t==="in"?new YA(e,r):t==="not-in"?new v2(e,r):t==="array-contains-any"?new w2(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g2(e,r):new _2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Si(t,this.value)):t!==null&&Is(this.value)===Is(t)&&this.matchesComparison(Si(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends qA{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ve(e,t)}matches(e){return Wo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wo(n){return n.op==="and"}function nm(n){return n.op==="or"}function Yg(n){return WA(n)&&Wo(n)}function WA(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function rm(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+qo(n.value);if(Yg(n))return n.filters.map(e=>rm(e)).join(",");{const e=n.filters.map(t=>rm(t)).join(",");return`${n.op}(${e})`}}function GA(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&rr(r.value,i.value)}(n,e):n instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&GA(o,i.filters[a]),!0):!1}(n,e):void Y()}function KA(n,e){const t=n.filters.concat(e);return ve.create(t,n.op)}function HA(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`}(n):n instanceof ve?function(t){return t.op.toString()+" {"+t.getFilters().map(HA).join(" ,")+"}"}(n):"Filter"}class m2 extends ce{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class g2 extends ce{constructor(e,t){super(e,"in",t),this.keys=QA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _2 extends ce{constructor(e,t){super(e,"not-in",t),this.keys=QA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function QA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>K.fromName(r.referenceValue))}class y2 extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return nu(t)&&tu(t.arrayValue,this.value)}}class YA extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tu(this.value.arrayValue,t)}}class v2 extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tu(this.value.arrayValue,t)}}class w2 extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!nu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>tu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function im(n,e=null,t=[],r=[],i=null,s=null,o=null){return new I2(n,e,t,r,i,s,o)}function Ts(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>rm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qo(r)).join(",")),e.ue=t}return e.ue}function Ru(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!p2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!GA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nw(n.startAt,e.startAt)&&Nw(n.endAt,e.endAt)}function Od(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ld(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function Dw(n,e,t){let r=Yc,i=!0;for(const s of Ld(n,e)){let o=Yc,a=!0;switch(s.op){case"<":case"<=":o=h2(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Yc}Cw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Cw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Vw(n,e,t){let r=ai,i=!0;for(const s of Ld(n,e)){let o=ai,a=!0;switch(s.op){case">=":case">":o=f2(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ai}bw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];bw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JA(n,e,t,r,i,s,o,a){return new Lr(n,e,t,r,i,s,o,a)}function ca(n){return new Lr(n)}function Ow(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jg(n){return n.collectionGroup!==null}function Co(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ee(Ve.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ru(s,r))}),t.has(Ve.keyField().canonicalString())||e.ce.push(new ru(Ve.keyField(),r))}return e.ce}function Lt(n){const e=H(n);return e.le||(e.le=E2(e,Co(n))),e.le}function E2(n,e){if(n.limitType==="F")return im(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ru(i.field,s)});const t=n.endAt?new Ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ri(n.startAt.position,n.startAt.inclusive):null;return im(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function sm(n,e){const t=n.filters.concat([e]);return new Lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Md(n,e,t){return new Lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pu(n,e){return Ru(Lt(n),Lt(e))&&n.limitType===e.limitType}function XA(n){return`${Ts(Lt(n))}|lt:${n.limitType}`}function to(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>HA(i)).join(", ")}]`),Su(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qo(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qo(i)).join(",")),`Target(${r})`}(Lt(n))}; limitType=${n.limitType})`}function ku(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=xw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Co(r),i)||r.endAt&&!function(o,a,u){const c=xw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Co(r),i))}(n,e)}function ZA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function eS(n){return(e,t)=>{let r=!1;for(const i of Co(n)){const s=T2(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function T2(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Si(u,c):Y()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return UA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=new Re(K.comparator);function Kt(){return A2}const tS=new Re(K.comparator);function rl(...n){let e=tS;for(const t of n)e=e.insert(t.key,t);return e}function nS(n){let e=tS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Yn(){return Il()}function rS(){return Il()}function Il(){return new Mi(n=>n.toString(),(n,e)=>n.isEqual(e))}const S2=new Re(K.comparator),R2=new Ee(K.comparator);function oe(...n){let e=R2;for(const t of n)e=e.add(t);return e}const P2=new Ee(se);function Xg(){return P2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function iS(n){return{integerValue:""+n}}function sS(n,e){return VA(e)?iS(e):Zg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function k2(n,e,t){return n instanceof Go?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Th(s)&&(s=Qg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof As?aS(n,e):n instanceof Ss?lS(n,e):function(i,s){const o=oS(i,s),a=Lw(o)+Lw(i.Pe);return tm(o)&&tm(i.Pe)?iS(a):Zg(i.serializer,a)}(n,e)}function C2(n,e,t){return n instanceof As?aS(n,e):n instanceof Ss?lS(n,e):t}function oS(n,e){return n instanceof Ko?function(r){return tm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Go extends Sh{}class As extends Sh{constructor(e){super(),this.elements=e}}function aS(n,e){const t=uS(e);for(const r of n.elements)t.some(i=>rr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ss extends Sh{constructor(e){super(),this.elements=e}}function lS(n,e){let t=uS(e);for(const r of n.elements)t=t.filter(i=>!rr(i,r));return{arrayValue:{values:t}}}class Ko extends Sh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lw(n){return Ne(n.integerValue||n.doubleValue)}function uS(n){return nu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.field=e,this.transform=t}}function b2(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof As&&i instanceof As||r instanceof Ss&&i instanceof Ss?$o(r.elements,i.elements,rr):r instanceof Ko&&i instanceof Ko?rr(r.Pe,i.Pe):r instanceof Go&&i instanceof Go}(n.transform,e.transform)}class x2{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rh{}function cS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ha(n.key,Oe.none()):new da(n.key,n.data,Oe.none());{const t=n.data,r=_t.empty();let i=new Ee(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mr(n.key,r,new Gt(i.toArray()),Oe.none())}}function N2(n,e,t){n instanceof da?function(i,s,o){const a=i.value.clone(),u=Fw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Mr?function(i,s,o){if(!Xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function El(n,e,t,r){return n instanceof da?function(s,o,a,u){if(!Xc(s.precondition,o))return a;const c=s.value.clone(),h=Uw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mr?function(s,o,a,u){if(!Xc(s.precondition,o))return a;const c=Uw(s.fieldTransforms,u,o),h=o.data;return h.setAll(dS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,a){return Xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function D2(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=oS(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function Mw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$o(r,i,(s,o)=>b2(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class da extends Rh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mr extends Rh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fw(n,e,t){const r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,C2(o,a,t[i]))}return r}function Uw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,k2(s,o,e))}return r}class ha extends Rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class e_ extends Rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&N2(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=El(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=El(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=cS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(t,r)=>Mw(t,r))&&$o(this.baseMutations,e.baseMutations,(t,r)=>Mw(t,r))}}class n_{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return S2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n_(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,he;function hS(n){switch(n){default:return Y();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function fS(n){if(n===void 0)return Ye("GRPC error has no .code"),O.UNKNOWN;switch(n){case et.OK:return O.OK;case et.CANCELLED:return O.CANCELLED;case et.UNKNOWN:return O.UNKNOWN;case et.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case et.INTERNAL:return O.INTERNAL;case et.UNAVAILABLE:return O.UNAVAILABLE;case et.UNAUTHENTICATED:return O.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case et.NOT_FOUND:return O.NOT_FOUND;case et.ALREADY_EXISTS:return O.ALREADY_EXISTS;case et.PERMISSION_DENIED:return O.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case et.ABORTED:return O.ABORTED;case et.OUT_OF_RANGE:return O.OUT_OF_RANGE;case et.UNIMPLEMENTED:return O.UNIMPLEMENTED;case et.DATA_LOSS:return O.DATA_LOSS;default:return Y()}}(he=et||(et={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=new hs([4294967295,4294967295],0);function jw(n){const e=pS().encode(n),t=new wA;return t.update(e),new Uint8Array(t.digest())}function zw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hs([t,r],0),new hs([i,s],0)]}class i_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new il(`Invalid padding: ${t}`);if(r<0)throw new il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new il(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=hs.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(hs.fromNumber(r)));return i.compare(O2)===1&&(i=new hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=jw(e),[r,i]=zw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new i_(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=jw(e),[r,i]=zw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new bu(ee.min(),i,new Re(se),Kt(),oe())}}class xu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xu(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class mS{constructor(e,t){this.targetId=e,this.me=t}}class gS{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Bw{constructor(){this.fe=0,this.ge=qw(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),t=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new xu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=qw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class L2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kt(),this.qe=$w(),this.Qe=new Re(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Od(s))if(r===0){const o=new K(s.path);this.Ue(t,o,Ce.newNoDocument(o,ee.min()))}else X(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Ti(r).toUint8Array()}catch(u){if(u instanceof jA)return nr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new i_(o,i,s)}catch(u){return nr(u instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Od(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ce.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bu(e,t,this.Qe,this.ke,r);return this.ke=Kt(),this.qe=$w(),this.Qe=new Re(se),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Bw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Bw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $w(){return new Re(K.comparator)}function qw(){return new Re(K.comparator)}const M2={asc:"ASCENDING",desc:"DESCENDING"},F2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U2={and:"AND",or:"OR"};class j2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function om(n,e){return n.useProto3Json||Su(e)?e:{value:e}}function Ho(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _S(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function z2(n,e){return Ho(n,e.toTimestamp())}function Je(n){return X(!!n),ee.fromTimestamp(function(t){const r=xr(t);return new Le(r.seconds,r.nanos)}(n))}function s_(n,e){return am(n,e).canonicalString()}function am(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yS(n){const e=ue.fromString(n);return X(kS(e)),e}function iu(n,e){return s_(n.databaseId,e.path)}function er(n,e){const t=yS(e);if(t.get(1)!==n.databaseId.projectId)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(IS(t))}function vS(n,e){return s_(n.databaseId,e)}function wS(n){const e=yS(n);return e.length===4?ue.emptyPath():IS(e)}function lm(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function IS(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ww(n,e,t){return{name:iu(n,e),fields:t.value.mapValue.fields}}function ES(n,e,t){const r=er(n,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):ee.min(),o=new _t({mapValue:{fields:e.fields}}),a=Ce.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function B2(n,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=er(r,i.found.name),o=Je(i.found.updateTime),a=i.found.createTime?Je(i.found.createTime):ee.min(),u=new _t({mapValue:{fields:i.found.fields}});return Ce.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=er(r,i.missing),o=Je(i.readTime);return Ce.newNoDocument(s,o)}(n,e):Y()}function $2(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(X(h===void 0||typeof h=="string"),Ge.fromBase64String(h||"")):(X(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ge.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:fS(c.code);return new j(h,c.message||"")}(o);t=new gS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=er(n,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):ee.min(),a=new _t({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];t=new Zc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=er(n,r.document),s=r.readTime?Je(r.readTime):ee.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=er(n,r.document),s=r.removedTargetIds||[];t=new Zc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new V2(i,s),a=r.targetId;t=new mS(a,o)}}return t}function su(n,e){let t;if(e instanceof da)t={update:Ww(n,e.key,e.value)};else if(e instanceof ha)t={delete:iu(n,e.key)};else if(e instanceof Mr)t={update:Ww(n,e.key,e.data),updateMask:Q2(e.fieldMask)};else{if(!(e instanceof e_))return Y();t={verify:iu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof As)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ss)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:z2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,e.precondition)),t}function um(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(Je(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),u=new Go;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new As(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new Ss(h)}else"increment"in a?u=new Ko(o,a.increment):Y();const c=Ve.fromServerFormat(a.fieldPath);return new Cu(c,u)}(n,i)):[];if(e.update){e.update.name;const i=er(n,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Gt(c.map(h=>Ve.fromServerFormat(h)))}(e.updateMask);return new Mr(i,s,o,t,r)}return new da(i,s,t,r)}if(e.delete){const i=er(n,e.delete);return new ha(i,t)}if(e.verify){const i=er(n,e.verify);return new e_(i,t)}return Y()}function q2(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Je(i.updateTime):Je(s);return o.isEqual(ee.min())&&(o=Je(s)),new x2(o,i.transformResults||[])}(t,e))):[]}function TS(n,e){return{documents:[vS(n,e.path)]}}function AS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vS(n,i);const s=function(c){if(c.length!==0)return PS(ve.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:no(m.field),direction:G2(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=om(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function SS(n){let e=wS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(p){const m=RS(p);return m instanceof ve&&Yg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(k){return new ru(ro(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Su(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Ri(w,m)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Ri(w,m)}(t.endAt)),JA(e,i,o,s,a,"F",u,c)}function W2(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function RS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ro(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ro(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ro(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ro(t.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(ro(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ve.create(t.compositeFilter.filters.map(r=>RS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(t.compositeFilter.op))}(n):Y()}function G2(n){return M2[n]}function K2(n){return F2[n]}function H2(n){return U2[n]}function no(n){return{fieldPath:n.canonicalString()}}function ro(n){return Ve.fromServerFormat(n.fieldPath)}function PS(n){return n instanceof ce?function(t){if(t.op==="=="){if(kw(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NAN"}};if(Pw(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kw(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NOT_NAN"}};if(Pw(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(t.field),op:K2(t.op),value:t.value}}}(n):n instanceof ve?function(t){const r=t.getFilters().map(i=>PS(i));return r.length===1?r[0]:{compositeFilter:{op:H2(t.op),filters:r}}}(n):Y()}function Q2(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,r,i,s=ee.min(),o=ee.min(),a=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.ct=e}}function Y2(n,e){let t;if(e.document)t=ES(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=Ps(e.noDocument.readTime);t=Ce.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=K.fromSegments(e.unknownDocument.path),i=Ps(e.unknownDocument.version);t=Ce.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Le(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),t}function Gw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:iu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ho(s,o.version.toTimestamp()),createTime:Ho(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Rs(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:t.path.toArray(),version:Rs(e.version)}}return r}function Fd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Rs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ps(n){const e=new Le(n.seconds,n.nanoseconds);return ee.fromTimestamp(e)}function Xi(n,e){const t=(e.baseMutations||[]).map(s=>um(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>um(n.ct,s)),i=Le.fromMillis(e.localWriteTimeMs);return new t_(e.batchId,i,t,r)}function sl(n){const e=Ps(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ps(n.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return X(s.documents.length===1),Lt(ca(wS(s.documents[0])))}(n.query):function(s){return Lt(SS(s))}(n.query),new Ir(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ge.fromBase64String(n.resumeToken))}function bS(n,e){const t=Rs(e.snapshotVersion),r=Rs(e.lastLimboFreeSnapshotVersion);let i;i=Od(e.target)?TS(n.ct,e.target):AS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ts(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function o_(n){const e=SS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Md(e,e.limit,"L"):e}function zf(n,e){return new r_(e.largestBatchId,um(n.ct,e.overlayMutation))}function Kw(n,e){const t=e.path.lastSegment();return[n,Ot(e.path.popLast()),t]}function Hw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Rs(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{getBundleMetadata(e,t){return Qw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ps(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Qw(e).put(function(i){return{bundleId:i.id,createTime:Rs(Je(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Yw(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:o_(s.bundledQuery),readTime:Ps(s.readTime)}}(r)})}saveNamedQuery(e,t){return Yw(e).put(function(i){return{name:i.name,readTime:Rs(Je(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Qw(n){return at(n,"bundles")}function Yw(n){return at(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ph(e,r)}getOverlay(e,t){return qa(e).get(Kw(this.userId,t)).next(r=>r?zf(this.serializer,r):null)}getOverlays(e,t){const r=Yn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new r_(t,o);i.push(this.ht(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(qa(e).j("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Yn(),s=Ot(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return qa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=zf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Yn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return qa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const p=zf(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}ht(e,t){return qa(e).put(function(i,s,o){const[a,u,c]=Kw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:su(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function qa(n){return at(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{Pt(e){return at(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ge.fromUint8Array(r):Ge.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ne(e.integerValue));else if("doubleValue"in e){const r=Ne(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Zl(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=xr(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ti(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?zA(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Ah(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Y()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Ne(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),K.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Zi.vt=new Zi;function Z2(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Jw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Z2(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class eO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Jw(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Jw(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class tO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class nO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Wa{constructor(){this.jt=new eO,this.Ht=new tO(this.jt),this.Jt=new nO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new es(this.indexId,this.documentKey,this.arrayValue,r)}}function Qr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Xw(n.arrayValue,e.arrayValue),t!==0?t:(t=Xw(n.directionalValue,e.directionalValue),t!==0?t:K.comparator(n.documentKey,e.documentKey)))}function Xw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.Xt=new Ee((t,r)=>Ve.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(X(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Xp(e);if(t!==void 0&&!this.sn(t))return!1;const r=Yi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Ee(Ve.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Hc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Hc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Hc(r.field,r.dir==="asc"?0:1)));return new Vd(Vd.UNKNOWN_ID,this.collectionId,t,Xl.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n){var e,t;if(X(n instanceof ce||n instanceof ve),n instanceof ce){if(n instanceof YA){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ce.create(n.field,"==",s)))||[];return ve.create(i,"or")}return n}const r=n.filters.map(i=>xS(i));return ve.create(r,n.op)}function rO(n){if(n.getFilters().length===0)return[];const e=hm(xS(n));return X(NS(e)),cm(e)||dm(e)?[e]:e.getFilters()}function cm(n){return n instanceof ce}function dm(n){return n instanceof ve&&Yg(n)}function NS(n){return cm(n)||dm(n)||function(t){if(t instanceof ve&&nm(t)){for(const r of t.getFilters())if(!cm(r)&&!dm(r))return!1;return!0}return!1}(n)}function hm(n){if(X(n instanceof ce||n instanceof ve),n instanceof ce)return n;if(n.filters.length===1)return hm(n.filters[0]);const e=n.filters.map(r=>hm(r));let t=ve.create(e,n.op);return t=Ud(t),NS(t)?t:(X(t instanceof ve),X(Wo(t)),X(t.filters.length>1),t.filters.reduce((r,i)=>a_(r,i)))}function a_(n,e){let t;return X(n instanceof ce||n instanceof ve),X(e instanceof ce||e instanceof ve),t=n instanceof ce?e instanceof ce?function(i,s){return ve.create([i,s],"and")}(n,e):eI(n,e):e instanceof ce?eI(e,n):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),Wo(i)&&Wo(s))return KA(i,s.getFilters());const o=nm(i)?i:s,a=nm(i)?s:i,u=o.filters.map(c=>a_(c,a));return ve.create(u,"or")}(n,e),Ud(t)}function eI(n,e){if(Wo(e))return KA(e,n.getFilters());{const t=e.filters.map(r=>a_(n,r));return ve.create(t,"or")}}function Ud(n){if(X(n instanceof ce||n instanceof ve),n instanceof ce)return n;const e=n.getFilters();if(e.length===1)return Ud(e[0]);if(WA(n))return n;const t=e.map(i=>Ud(i)),r=[];return t.forEach(i=>{i instanceof ce?r.push(i):i instanceof ve&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ve.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.un=new l_}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(cn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class l_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ee(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Uint8Array(0);class sO{constructor(e,t){this.databaseId=t,this.cn=new l_,this.ln=new Mi(r=>Ts(r),(r,i)=>Ru(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Ot(i)};return tI(e).put(s)}return N.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[kA(t),""],!1,!0);return tI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Qn(o.parent))}return r})}addFieldIndex(e,t){const r=Ga(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Xs(e);return s.next(a=>{o.put(Hw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ga(e),i=Xs(e),s=Js(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ga(e),r=Js(e),i=Xs(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Zw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Js(e);let i=!0;const s=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=oe();const a=[];return N.forEach(s,(u,c)=>{z("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(u)} to execute ${Ts(t)}`);const h=function(S,L){const B=Xp(L);if(B===void 0)return null;for(const F of Ld(S,B.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),p=function(S,L){const B=new Map;for(const F of Yi(L))for(const I of Ld(S,F.fieldPath))switch(I.op){case"==":case"in":B.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return B.set(F.fieldPath.canonicalString(),I.value),Array.from(B.values())}return null}(c,u),m=function(S,L){const B=[];let F=!0;for(const I of Yi(L)){const _=I.kind===0?Dw(S,I.fieldPath,S.startAt):Vw(S,I.fieldPath,S.startAt);B.push(_.value),F&&(F=_.inclusive)}return new Ri(B,F)}(c,u),w=function(S,L){const B=[];let F=!0;for(const I of Yi(L)){const _=I.kind===0?Vw(S,I.fieldPath,S.endAt):Dw(S,I.fieldPath,S.endAt);B.push(_.value),F&&(F=_.inclusive)}return new Ri(B,F)}(c,u),k=this.In(u,c,m),C=this.In(u,c,w),V=this.Tn(u,c,p),A=this.En(u.indexId,h,k,m.inclusive,C,w.inclusive,V);return N.forEach(A,v=>r.G(v,t.limit).next(S=>{S.forEach(L=>{const B=K.fromSegments(L.documentKey);o.has(B)||(o=o.add(B),a.push(B))})}))}).next(()=>a)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=rO(ve.create(e.filters,"and")).map(r=>im(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),h=[];for(let p=0;p<u;++p){const m=t?this.dn(t[p/c]):Pc,w=this.An(e,m,r[p%c],i),k=this.Rn(e,m,s[p%c],o),C=a.map(V=>this.An(e,m,V,!0));h.push(...this.createRange(w,k,C))}return h}An(e,t,r,i){const s=new es(e,K.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new es(e,K.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Zw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return N.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new Ee(Ve.comparator),h=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new Wa;for(const i of Yi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Zi.vt.It(s,o)}return r.zt()}dn(e){const t=new Wa;return Zi.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Wa;return Zi.vt.It(Es(this.databaseId,t),r.Yt(function(s){const o=Yi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new Wa);let s=0;for(const o of Yi(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&nu(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Zi.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Wa;u.seed(a.zt()),Zi.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ga(e),i=Xs(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,p){const m=p?new Xl(p.sequenceNumber,new cn(Ps(p.readTime),new K(Qn(p.documentKey)),p.largestBatchId)):Xl.empty(),w=h.fields.map(([k,C])=>new Hc(Ve.fromServerFormat(k),C));return new Vd(h.indexId,h.collectionGroup,w,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:se(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ga(e),s=Xs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>N.forEach(a,u=>s.put(Hw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return N.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?N.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,t,r,i){return Js(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Js(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=Js(e);let s=new Ee(Qr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new es(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new Ee(Qr);const i=this.Vn(t,e);if(i==null)return r;const s=Xp(t);if(s!=null){const o=e.data.field(s.fieldPath);if(nu(o))for(const a of o.arrayValue.values||[])r=r.add(new es(t.indexId,e.key,this.dn(a),i))}else r=r.add(new es(t.indexId,e.key,Pc,i));return r}bn(e,t,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,h,p,m){const w=u.getIterator(),k=c.getIterator();let C=Ys(w),V=Ys(k);for(;C||V;){let A=!1,v=!1;if(C&&V){const S=h(C,V);S<0?v=!0:S>0&&(A=!0)}else C!=null?v=!0:A=!0;A?(p(V),V=Ys(k)):v?(m(C),C=Ys(w)):(C=Ys(w),V=Ys(k))}}(i,s,Qr,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),N.waitFor(o)}yn(e){let t=1;return Xs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Qr(o,a)).filter((o,a,u)=>!a||Qr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Qr(o,e),u=Qr(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Pc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Pc,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return Qr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(nI)}getMinOffset(e,t){return N.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||Y())).next(nI)}}function tI(n){return at(n,"collectionParents")}function Js(n){return at(n,"indexEntries")}function Ga(n){return at(n,"indexConfiguration")}function Xs(n){return at(n,"indexState")}function nI(n){X(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Gg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new cn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(h,p,m)=>(a++,m.delete()));s.push(u.next(()=>{X(a===1)}));const c=[];for(const h of t.mutations){const p=OA(e,h.key.path,t.batchId);s.push(i.delete(p)),c.push(h.key)}return N.waitFor(s).next(()=>c)}function jd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Y();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(41943040,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);class kh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new kh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=io(e),o=Yr(e);return o.add({}).next(a=>{X(typeof a=="number");const u=new t_(a,t,r,i),c=function(w,k,C){const V=C.baseMutations.map(v=>su(w.ct,v)),A=C.mutations.map(v=>su(w.ct,v));return{userId:k,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:V,mutations:A}}(this.serializer,this.userId,u),h=[];let p=new Ee((m,w)=>se(m.canonicalString(),w.canonicalString()));for(const m of i){const w=OA(this.userId,m.key.path,a);p=p.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(w,WV))}return p.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),N.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Yr(e).get(t).next(r=>r?(X(r.userId===this.userId),Xi(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Yr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(X(a.batchId>=r),s=Xi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Yr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Yr(e).U("userMutationsIndex",t).next(r=>r.map(i=>Xi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Qc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return io(e).J({range:i},(o,a,u)=>{const[c,h,p]=o,m=Qn(h);if(c===this.userId&&t.path.isEqual(m))return Yr(e).get(p).next(w=>{if(!w)throw Y();X(w.userId===this.userId),s.push(Xi(this.serializer,w))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);const i=[];return t.forEach(s=>{const o=Qc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=io(e).J({range:a},(c,h,p)=>{const[m,w,k]=c,C=Qn(w);m===this.userId&&s.path.isEqual(C)?r=r.add(k):p.done()});i.push(u)}),N.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Qc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ee(se);return io(e).J({range:o},(u,c,h)=>{const[p,m,w]=u,k=Qn(m);p===this.userId&&r.isPrefixOf(k)?k.length===i&&(a=a.add(w)):h.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Yr(e).get(s).next(o=>{if(o===null)throw Y();X(o.userId===this.userId),r.push(Xi(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return DS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return io(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Qn(s[1]);i.push(u)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,t){return VS(e,this.userId,t)}Nn(e){return OS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function VS(n,e,t){const r=Qc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return io(n).J({range:s,H:!0},(a,u,c)=>{const[h,p,m]=a;h===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function Yr(n){return at(n,"mutations")}function io(n){return at(n,"documentMutations")}function OS(n){return at(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ks(0)}static kn(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new ks(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>ee.fromTimestamp(new Le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zs(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Zs(e).J((o,a)=>{const u=sl(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Zs(e).J((r,i)=>{const s=sl(i);t(s)})}qn(e){return iI(e).get("targetGlobalKey").next(t=>(X(t!==null),t))}Qn(e,t){return iI(e).put("targetGlobalKey",t)}Kn(e,t){return Zs(e).put(bS(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ts(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Zs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=sl(a);Ru(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=ni(e);return t.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,t,r){const i=ni(e);return N.forEach(t,s=>{const o=Ot(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=ni(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=ni(e);let s=oe();return i.J({range:r,H:!0},(o,a,u)=>{const c=Qn(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=Ot(t.path),i=IDBKeyRange.bound([r],[kA(r)],!1,!0);let s=0;return ni(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return Zs(e).get(t).next(r=>r?sl(r):null)}}function Zs(n){return at(n,"targets")}function iI(n){return at(n,"targetGlobal")}function ni(n){return at(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class aO{constructor(e){this.Un=e,this.buffer=new Ee(sI),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();sI(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Li(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Oi(t)}await this.Hn(3e5)})}}class uO{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Wt.oe);const r=new aO(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(rI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rI):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),eo()<=ae.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function cO(n,e){return new uO(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,t){this.db=e,this.garbageCollector=cO(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return kc(e,r)}removeReference(e,t,r){return kc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return kc(e,t)}nr(e,t){return function(i,s){let o=!1;return OS(i).Y(a=>VS(i,a,s).next(u=>(u&&(o=!0),N.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),ni(e).delete(function(p){return[0,Ot(p.path)]}(o))))});i.push(u)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return kc(e,t)}tr(e,t){const r=ni(e);let i,s=Wt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Wt.oe&&t(new K(Qn(i)),s),s=c,i=u):s=Wt.oe}).next(()=>{s!==Wt.oe&&t(new K(Qn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function kc(n,e){return ni(n).put(function(r,i){return{targetId:0,path:Ot(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.changes=new Mi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Gi(e).put(r)}removeEntry(e,t,r){return Gi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Fd(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ce.newInvalidDocument(t);return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ka(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:Ce.newInvalidDocument(t)};return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ka(t))},(i,s)=>{r={document:this.ir(t,s),size:jd(s)}}).next(()=>r)}getEntries(e,t){let r=Kt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=Kt(),i=new Re(K.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,jd(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return N.resolve();let i=new Ee(lI);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ka(i.first()),Ka(i.last())),o=i.getIterator();let a=o.getNext();return Gi(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const p=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&lI(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Ka(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Fd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Kt();for(const p of c){const m=this.ir(K.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(ku(t,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=Kt();const o=aI(t,r),a=aI(t,cn.max());return Gi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const p=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new fO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return oI(e).get("remoteDocumentGlobalKey").next(t=>(X(!!t),t))}rr(e,t){return oI(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=Y2(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Ce.newInvalidDocument(e)}}function MS(n){return new hO(n)}class fO extends LS{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Mi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ee((s,o)=>se(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Gw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=jd(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Gw(this.cr.serializer,o.convertToNoDocument(ee.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oI(n){return at(n,"remoteDocumentGlobal")}function Gi(n){return at(n,"remoteDocumentsV14")}function Ka(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aI(n,e){const t=e.documentKey.path.toArray();return[n,Fd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function lI(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=se(t[s],r[s]),i)return i;return i=se(t.length,r.length),i||(i=se(t[t.length-2],r[r.length-2]),i||se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&El(r.mutation,i,Gt.empty(),Le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=Yn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=rl();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Kt();const o=Il(),a=function(){return Il()}();return t.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Mr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),El(h.mutation,c,h.mutation.getFieldMask(),Le.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var p;return a.set(c,new pO(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Il();let i=new Re((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||Gt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=rS();h.forEach(m=>{if(!s.has(m)){const w=cS(t.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(Yn());let a=-1,u=s;return o.next(c=>N.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(h=>({batchId:a,changes:nS(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let i=rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=rl();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,u=>{const c=function(p,m){return new Lr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ce.newInvalidDocument(h)))});let a=rl();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&El(h.mutation,c,Gt.empty(),Le.now()),ku(t,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:o_(i.bundledQuery),readTime:Je(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.overlays=new Re(K.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=Yn(),s=t.length+1,o=new K(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Re((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Yn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Yn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return N.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r_(t,r));let s=this.Ir.get(t);s===void 0&&(s=oe(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.Tr=new Ee(lt.Er),this.dr=new Ee(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new lt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new lt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new K(new ue([])),r=new lt(t,e),i=new lt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new K(new ue([])),r=new lt(t,e),i=new lt(t,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new lt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return K.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ee(lt.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new t_(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new lt(t,0),i=new lt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(se);return t.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new lt(new K(s),0);let a=new Ee(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new lt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new lt(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.Mr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=Kt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Kt();const o=t.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Gg(bA(h),r)<=0||(i.has(h.key)||ku(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Y()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wO(this)}getSize(e){return N.resolve(this.size)}}class wO extends LS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.persistence=e,this.Nr=new Mi(t=>Ts(t),Ru),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new u_,this.targetCount=0,this.kr=ks.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ks(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Wt(0),this.Kr=!1,this.Kr=!0,this.$r=new _O,this.referenceDelegate=e(this),this.Ur=new IO(this),this.indexManager=new iO,this.remoteDocumentCache=function(i){return new vO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new CS(t),this.Gr=new mO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new yO(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const i=new EO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class EO extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class Ch{constructor(e){this.persistence=e,this.Jr=new u_,this.Yr=null}static Zr(e){return new Ch(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Eh("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ew,{unique:!0}),u.createObjectStore("documentMutations")}(e),uI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),uI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ew,{unique:!0});const p=c.store("mutations"),m=h.map(w=>p.put(w));return N.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:r2});c.createIndex("collectionPathOverlayIndex",i2,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",s2,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:GV});c.createIndex("documentKeyIndex",KV),c.createIndex("collectionGroupIndex",HV)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:ZV}).createIndex("sequenceNumberIndex",e2,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:t2}).createIndex("documentKeyIndex",n2,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=jd(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>N.forEach(a,u=>{X(u.userId===s.userId);const c=Xi(this.serializer,u);return DS(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ue(o),c=function(p){return[0,Ot(p)]}(u);s.push(t.get(c).next(h=>h?N.resolve():(p=>t.put({targetId:0,path:Ot(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>N.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:XV});const r=t.store("collectionParents"),i=new l_,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Ot(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ue(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Qn(a);return s(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=sl(i),o=bS(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(p){return p.document?new K(ue.fromString(p.document.name).popFirst(5)):p.noDocument?K.fromSegments(p.noDocument.path):p.unknownDocument?K.fromSegments(p.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>N.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=MS(this.serializer),s=new US(Ch.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:oe();Xi(this.serializer,u).keys().forEach(p=>h=h.add(p)),a.set(u.userId,h)}),N.forEach(a,(u,c)=>{const h=new ct(c),p=Ph.lt(this.serializer,h),m=s.getIndexManager(h),w=kh.lt(h,this.serializer,m,s.referenceDelegate);return new FS(i,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Zp(t,Wt.oe),u).next()})})}}function uI(n){n.createObjectStore("targetDocuments",{keyPath:YV}).createIndex("documentTargetsIndex",JV,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",QV,{unique:!0}),n.createObjectStore("targetGlobal")}const Bf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class c_{constructor(e,t,r,i,s,o,a,u,c,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!c_.D())throw new j(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dO(this,i),this.Ai=t+"main",this.serializer=new CS(u),this.Ri=new Zn(this.Ai,this.hi,new TO(this.serializer)),this.$r=new X2,this.Ur=new oO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=MS(this.serializer),this.Gr=new J2,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,Bf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Wt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Cc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Li(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ha(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return Cc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=at(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Ha(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(O.FAILED_PRECONDITION,Bf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&z("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Zp(e,Wt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Cc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return kh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ph.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){z("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?l2:u===16?a2:u===15?Hg:u===14?FA:u===13?MA:u===12?o2:u===11?LA:void Y()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Zp(a,this.Qr?this.Qr.next():Wt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(O.FAILED_PRECONDITION,xA);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Ha(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(O.FAILED_PRECONDITION,Bf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ha(e).put("owner",t)}static D(){return Zn.D()}bi(e){const t=Ha(e);return t.get("owner").next(r=>this.vi(r)?(z("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ye(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;l0()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ye("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch(e){}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ha(n){return at(n,"owner")}function Cc(n){return at(n,"clientMetadata")}function d_(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new h_(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return l0()?8:DA(ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new AO;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(eo()<=ae.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",to(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(eo()<=ae.DEBUG&&z("QueryEngine","Query:",to(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(eo()<=ae.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",to(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):N.resolve())}Yi(e,t){if(Ow(t))return N.resolve(null);let r=Lt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Md(t,null,"F"),r=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Md(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return Ow(t)||i.isEqual(ee.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?N.resolve(null):(eo()<=ae.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),to(t)),this.rs(e,o,t,CA(i,-1)).next(a=>a))})}ts(e,t){let r=new Ee(eS(e));return t.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return eo()<=ae.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",to(t)),this.Ji.getDocumentsMatchingQuery(e,t,cn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Re(se),this._s=new Mi(s=>Ts(s),Ru),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function zS(n,e,t,r){return new SO(n,e,t,r)}async function BS(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function RO(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,m=p.keys();let w=N.resolve();return m.forEach(k=>{w=w.next(()=>h.getEntry(u,k)).next(C=>{const V=c.docVersions.get(k);X(V!==null),C.version.compareTo(V)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function $S(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function PO(n,e){const t=H(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,h.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ge.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(p,w),function(C,V,A){return C.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,w,h)&&a.push(t.Ur.updateTargetData(s,w))});let u=Kt(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(qS(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function qS(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Kt();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function kO(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qo(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Yo(n,e,t){const r=H(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Li(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function zd(n,e,t){const r=H(n);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=H(u),m=p._s.get(h);return m!==void 0?N.resolve(p.os.get(m)):p.Ur.getTargetData(c,h)}(r,o,Lt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:ee.min(),t?s:oe())).next(a=>(KS(r,ZA(e),a),{documents:a,Ts:s})))}function WS(n,e){const t=H(n),r=H(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function GS(n,e){const t=H(n),r=t.us.get(e)||ee.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,CA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(KS(t,e,i),i))}function KS(n,e,t){let r=n.us.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function CO(n,e,t,r){const i=H(n);let s=oe(),o=Kt();for(const c of t){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const p=e.ds(c);p.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,p)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await Qo(i,function(h){return Lt(ca(ue.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>qS(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function bO(n,e,t=oe()){const r=await Qo(n,Lt(o_(e.bundledQuery))),i=H(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Ge.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function cI(n,e){return`firestore_clients_${n}_${e}`}function dI(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function $f(n,e){return`firestore_targets_${n}_${e}`}class Bd{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new Bd(e,t,i.state,s):(Ye("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Tl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new Tl(e,r.state,i):(Ye("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $d{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Xg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=VA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new $d(e,s):(Ye("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class f_{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new f_(t.clientId,t.onlineState):(Ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class fm{constructor(){this.activeTargetIds=Xg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qf{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Re(se),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=cI(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new fm),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(cI(this.persistenceKey,r));if(i){const s=$d.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem($f(this.persistenceKey,e));if(i){const s=Tl.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem($f(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return z("SharedClientState","READ",e,t),t}setItem(e,t){z("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(z("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=Wt.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){Ye("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Wt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new Bd(this.currentUser,e,t,r),s=dI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=dI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=$f(this.persistenceKey,e),s=new Tl(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return $d.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bd.Rs(new ct(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Tl.Rs(i,t)}Ls(e){return f_.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Xg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class HS{constructor(){this.so=new fm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new fm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc=null;function Wf(){return bc===null?bc=function(){return 268435456+Math.round(2147483648*Math.random())}():bc++,"0x"+bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class VO extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=Wf(),u=this.xo(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(h=>(z("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw nr("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ua}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=NO[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Wf();return new Promise((o,a)=>{const u=new IA;u.setWithCredentials(!0),u.listenOnce(EA.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Kc.NO_ERROR:const h=u.getResponseJson();z(Rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Kc.TIMEOUT:z(Rt,`RPC '${e}' ${s} timed out`),a(new j(O.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const p=u.getStatus();if(z(Rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const k=function(V){const A=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(A)>=0?A:O.UNKNOWN}(w.status);a(new j(k,w.message))}else a(new j(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new j(O.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(Rt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Rt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=Wf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=SA(),a=AA(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const h=s.join("");z(Rt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,w=!1;const k=new DO({Io:V=>{w?z(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(z(Rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),z(Rt,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},To:()=>p.close()}),C=(V,A,v)=>{V.listen(A,S=>{try{v(S)}catch(L){setTimeout(()=>{throw L},0)}})};return C(p,nl.EventType.OPEN,()=>{w||(z(Rt,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),C(p,nl.EventType.CLOSE,()=>{w||(w=!0,z(Rt,`RPC '${e}' stream ${i} transport closed`),k.So())}),C(p,nl.EventType.ERROR,V=>{w||(w=!0,nr(Rt,`RPC '${e}' stream ${i} transport errored:`,V),k.So(new j(O.UNAVAILABLE,"The operation could not be completed")))}),C(p,nl.EventType.MESSAGE,V=>{var A;if(!w){const v=V.data[0];X(!!v);const S=v,L=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(L){z(Rt,`RPC '${e}' stream ${i} received error:`,L);const B=L.status;let F=function(E){const T=et[E];if(T!==void 0)return fS(T)}(B),I=L.message;F===void 0&&(F=O.INTERNAL,I="Unknown error status: "+B+" with message "+L.message),w=!0,k.So(new j(F,I)),p.close()}else z(Rt,`RPC '${e}' stream ${i} received:`,v),k.bo(v)}}),C(a,TA.STAT_EVENT,V=>{V.stat===Jp.PROXY?z(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Jp.NOPROXY&&z(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return typeof window!="undefined"?window:null}function ed(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){return new j2(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new p_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new j(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OO extends YS{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=$2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Je(o.readTime):ee.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=lm(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=Od(u)?{documents:TS(s,u)}:{query:AS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_S(s,o.resumeToken);const c=om(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Ho(s,o.snapshotVersion.toTimestamp());const c=om(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=W2(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=lm(this.serializer),t.removeTarget=e,this.a_(t)}}class LO extends YS{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=q2(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=lm(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>su(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,am(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(O.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,am(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class FO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ye(t),this.D_=!1):z("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=H(u);c.L_.add(4),await fa(c),c.q_.set("Unknown"),c.L_.delete(4),await Du(c)}(this))})}),this.q_=new FO(r,i)}}async function Du(n){if(Fi(n))for(const e of n.B_)await e(!0)}async function fa(n){for(const e of n.B_)await e(!1)}function bh(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),__(t)?g_(t):ma(t).r_()&&m_(t,e))}function Jo(n,e){const t=H(n),r=ma(t);t.N_.delete(e),r.r_()&&JS(t,e),t.N_.size===0&&(r.r_()?r.o_():Fi(t)&&t.q_.set("Unknown"))}function m_(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ma(n).A_(e)}function JS(n,e){n.Q_.xe(e),ma(n).R_(e)}function g_(n){n.Q_=new L2({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ma(n).start(),n.q_.v_()}function __(n){return Fi(n)&&!ma(n).n_()&&n.N_.size>0}function Fi(n){return H(n).L_.size===0}function XS(n){n.Q_=void 0}async function jO(n){n.q_.set("Online")}async function zO(n){n.N_.forEach((e,t)=>{m_(n,e)})}async function BO(n,e){XS(n),__(n)?(n.q_.M_(e),g_(n)):n.q_.set("Unknown")}async function $O(n,e,t){if(n.q_.set("Online"),e instanceof gS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qd(n,r)}else if(e instanceof Zc?n.Q_.Ke(e):e instanceof mS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ee.min()))try{const r=await $S(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Ge.EMPTY_BYTE_STRING,h.snapshotVersion)),JS(s,u);const p=new Ir(h.target,u,c,h.sequenceNumber);m_(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await qd(n,r)}}async function qd(n,e,t){if(!Li(e))throw e;n.L_.add(1),await fa(n),n.q_.set("Offline"),t||(t=()=>$S(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Du(n)})}function ZS(n,e){return e().catch(t=>qd(n,t,e))}async function pa(n){const e=H(n),t=Pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;qO(e);)try{const i=await kO(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,WO(e,i)}catch(i){await qd(e,i)}eR(e)&&tR(e)}function qO(n){return Fi(n)&&n.O_.length<10}function WO(n,e){n.O_.push(e);const t=Pi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function eR(n){return Fi(n)&&!Pi(n).n_()&&n.O_.length>0}function tR(n){Pi(n).start()}async function GO(n){Pi(n).p_()}async function KO(n){const e=Pi(n);for(const t of n.O_)e.m_(t.mutations)}async function HO(n,e,t){const r=n.O_.shift(),i=n_.from(r,e,t);await ZS(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pa(n)}async function QO(n,e){e&&Pi(n).V_&&await async function(r,i){if(function(o){return hS(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();Pi(r).s_(),await ZS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pa(r)}}(n,e),eR(n)&&tR(n)}async function fI(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Fi(t);t.L_.add(3),await fa(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Du(t)}async function pm(n,e){const t=H(n);e?(t.L_.delete(2),await Du(t)):e||(t.L_.add(2),await fa(t),t.q_.set("Unknown"))}function ma(n){return n.K_||(n.K_=function(t,r,i){const s=H(t);return s.w_(),new OO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:jO.bind(null,n),Ro:zO.bind(null,n),mo:BO.bind(null,n),d_:$O.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),__(n)?g_(n):n.q_.set("Unknown")):(await n.K_.stop(),XS(n))})),n.K_}function Pi(n){return n.U_||(n.U_=function(t,r,i){const s=H(t);return s.w_(),new LO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:GO.bind(null,n),mo:QO.bind(null,n),f_:KO.bind(null,n),g_:HO.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await pa(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new y_(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,e){if(Ye("AsyncQueue",`${e}: ${n}`),Li(n))return new j(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=rl(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new bo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.W_=new Re(K.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Xo{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Xo(e,t,bo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class JO{constructor(){this.queries=mI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=H(t),s=i.queries;i.queries=mI(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new j(O.ABORTED,"Firestore shutting down"))}}function mI(){return new Mi(n=>XA(n),Pu)}async function v_(n,e){const t=H(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new YO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=ga(o,`Initialization of query '${to(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&I_(t)}async function w_(n,e){const t=H(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function XO(n,e){const t=H(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&I_(t)}function ZO(n,e,t){const r=H(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function I_(n){n.Y_.forEach(e=>{e.next()})}var mm,gI;(gI=mm||(mm={})).ea="default",gI.Cache="cache";class E_{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.serializer=e}Es(e){return er(this.serializer,e)}ds(e){return e.metadata.exists?ES(this.serializer,e.document,!1):Ce.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Je(e)}}class tL{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=nR(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=ue.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new _I(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||oe()).add(s);t.set(o,a)}}return t}async complete(){const e=await CO(this.localStore,new _I(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await bO(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function nR(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.key=e}}class iR{constructor(e){this.key=e}}class sR{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=eS(e),this.Ra=new bo(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new pI,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),w=ku(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;m&&w?m.data.isEqual(w.data)?k!==C&&(r.track({type:3,doc:w}),V=!0):this.ga(m,w)||(r.track({type:2,doc:w}),V=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),V=!0):m&&!w&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(a=!0)),V&&(w?(o=o.add(w),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(w,k){const C=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return C(w)-C(k)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Xo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new iR(r))}),this.da.forEach(r=>{e.has(r)||t.push(new rR(r))}),t}ba(e){this.Ta=e.Ts,this.da=oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Xo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rL{constructor(e){this.key=e,this.va=!1}}class iL{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mi(a=>XA(a),Pu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(K.comparator),this.Na=new Map,this.La=new u_,this.Ba={},this.ka=new Map,this.qa=ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sL(n,e,t=!0){const r=xh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await oR(r,e,t,!0),i}async function oL(n,e){const t=xh(n);await oR(t,e,!0,!1)}async function oR(n,e,t,r){const i=await Qo(n.localStore,Lt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await T_(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&bh(n.remoteStore,i),a}async function T_(n,e,t,r,i){n.Ka=(p,m,w)=>async function(C,V,A,v){let S=V.view.ma(A);S.ns&&(S=await zd(C.localStore,V.query,!1).then(({documents:I})=>V.view.ma(I,S)));const L=v&&v.targetChanges.get(V.targetId),B=v&&v.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(S,C.isPrimaryClient,L,B);return gm(C,V.targetId,F.wa),F.snapshot}(n,p,m,w);const s=await zd(n.localStore,e,!0),o=new sR(e,s.Ts),a=o.ma(s.documents),u=xu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);gm(n,t,c.wa);const h=new nL(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function aL(n,e,t){const r=H(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Pu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Jo(r.remoteStore,i.targetId),Zo(r,i.targetId)}).catch(Oi)):(Zo(r,i.targetId),await Yo(r.localStore,i.targetId,!0))}async function lL(n,e){const t=H(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jo(t.remoteStore,r.targetId))}async function uL(n,e,t){const r=P_(n);try{const i=await function(o,a){const u=H(o),c=Le.now(),h=a.reduce((w,k)=>w.add(k.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=Kt(),C=oe();return u.cs.getEntries(w,h).next(V=>{k=V,k.forEach((A,v)=>{v.isValidDocument()||(C=C.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,k)).next(V=>{p=V;const A=[];for(const v of a){const S=D2(v,p.get(v.key).overlayedDocument);S!=null&&A.push(new Mr(v.key,S,$A(S.value.mapValue),Oe.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,A,a)}).next(V=>{m=V;const A=V.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(w,V.batchId,A)})}).then(()=>({batchId:m.batchId,changes:nS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Re(se)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Fr(r,i.changes),await pa(r.remoteStore)}catch(i){const s=ga(i,"Failed to persist write");t.reject(s)}}async function aR(n,e){const t=H(n);try{const r=await PO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?X(o.va):i.removedDocuments.size>0&&(X(o.va),o.va=!1))}),await Fr(t,r,e)}catch(r){await Oi(r)}}function yI(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=H(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.j_)m.Z_(a)&&(c=!0)}),c&&I_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cL(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,Ce.newNoDocument(s,ee.min()));const a=oe().add(s),u=new bu(ee.min(),new Map,new Re(se),o,a);await aR(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),R_(r)}else await Yo(r.localStore,e,!1).then(()=>Zo(r,e,t)).catch(Oi)}async function dL(n,e){const t=H(n),r=e.batch.batchId;try{const i=await RO(t.localStore,e);S_(t,r,null),A_(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fr(t,i)}catch(i){await Oi(i)}}async function hL(n,e,t){const r=H(n);try{const i=await function(o,a){const u=H(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(X(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);S_(r,e,t),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fr(r,i)}catch(i){await Oi(i)}}async function fL(n,e){const t=H(n);Fi(t.remoteStore)||z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=ga(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function A_(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function S_(n,e,t){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||lR(n,r)})}function lR(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Jo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),R_(n))}function gm(n,e,t){for(const r of t)r instanceof rR?(n.La.addReference(r.key,e),pL(n,r)):r instanceof iR?(z("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||lR(n,r.key)):Y()}function pL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(z("SyncEngine","New document in limbo: "+t),n.xa.add(r),R_(n))}function R_(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new K(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new rL(t)),n.Oa=n.Oa.insert(t,r),bh(n.remoteStore,new Ir(Lt(ca(t.path)),r,"TargetPurposeLimboResolution",Wt.oe))}}async function Fr(n,e,t){const r=H(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=h_.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=H(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(c,m=>N.forEach(m.$i,w=>h.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>N.forEach(m.Ui,w=>h.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Li(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=h.os.get(m),k=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(k);h.os=h.os.insert(m,C)}}}(r.localStore,s))}async function mL(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await BS(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new j(O.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fr(t,r.hs)}}function gL(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function _L(n,e){const t=H(n),r=await zd(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&gm(t,e.targetId,i.wa),i}async function yL(n,e){const t=H(n);return GS(t.localStore,e).then(r=>Fr(t,r))}async function vL(n,e,t,r){const i=H(n),s=await function(a,u){const c=H(a),h=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,u).next(m=>m?c.localDocuments.getDocuments(p,m):N.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await pa(i.remoteStore):t==="acknowledged"||t==="rejected"?(S_(i,e,r||null),A_(i,e),function(a,u){H(H(a).mutationQueue).On(u)}(i.localStore,e)):Y(),await Fr(i,s)):z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function wL(n,e){const t=H(n);if(xh(t),P_(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await vI(t,r.toArray());t.Qa=!0,await pm(t.remoteStore,!0);for(const s of i)bh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Zo(t,o),Yo(t.localStore,o,!0))),Jo(t.remoteStore,o)}),await i,await vI(t,r),function(o){const a=H(o);a.Na.forEach((u,c)=>{Jo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Re(K.comparator)}(t),t.Qa=!1,await pm(t.remoteStore,!1)}}async function vI(n,e,t){const r=H(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await Qo(r.localStore,Lt(u[0]));for(const c of u){const h=r.Fa.get(c),p=await _L(r,h);p.snapshot&&s.push(p.snapshot)}}else{const c=await WS(r.localStore,o);a=await Qo(r.localStore,c),await T_(r,uR(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function uR(n){return JA(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function IL(n){return function(t){return H(H(t).persistence).Qi()}(H(n).localStore)}async function EL(n,e,t,r){const i=H(n);if(i.Qa)return void z("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await GS(i.localStore,ZA(s[0])),a=bu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ge.EMPTY_BYTE_STRING);await Fr(i,o,a);break}case"rejected":await Yo(i.localStore,e,!0),Zo(i,e,r);break;default:Y()}}async function TL(n,e,t){const r=xh(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){z("SyncEngine","Adding an already active target "+i);continue}const s=await WS(r.localStore,i),o=await Qo(r.localStore,s);await T_(r,uR(s),o.targetId,!1,o.resumeToken),bh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await Yo(r.localStore,i,!1).then(()=>{Jo(r.remoteStore,i),Zo(r,i)}).catch(Oi)}}function xh(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=aR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cL.bind(null,e),e.Ca.d_=XO.bind(null,e.eventManager),e.Ca.$a=ZO.bind(null,e.eventManager),e}function P_(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hL.bind(null,e),e}function AL(n,e,t){const r=H(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(w,k){const C=H(w),V=Je(k.createTime);return C.persistence.runTransaction("hasNewerBundle","readonly",A=>C.Gr.getBundleMetadata(A,k.id)).then(A=>!!A&&A.createTime.compareTo(V)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(nR(u));const c=new tL(u,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await c.la(h);m&&a._updateProgress(m),h=await o.Ua()}const p=await c.complete();return await Fr(s,p.Ia,void 0),await function(w,k){const C=H(w);return C.persistence.runTransaction("Save bundle","readwrite",V=>C.Gr.saveBundleMetadata(V,k))}(s.localStore,u),a._completeWith(p.progress),Promise.resolve(p.Pa)}catch(u){return nr("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return zS(this.persistence,new jS,e.initialUser,this.serializer)}Ga(e){return new US(Ch.Zr,this.serializer)}Wa(e){return new HS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ou.provider={build:()=>new ou};class cR extends ou{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await P_(this.Ja.syncEngine),await pa(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return zS(this.persistence,new jS,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new lO(r,e.asyncQueue,t)}Ha(e,t){const r=new $V(t,this.persistence);return new BV(e.asyncQueue,r)}Ga(e){const t=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new c_(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,QS(),ed(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new HS}}class SL extends cR{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof qf&&(this.sharedClientState.syncEngine={no:vL.bind(null,t),ro:EL.bind(null,t),io:TL.bind(null,t),Qi:IL.bind(null,t),eo:yL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await wL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=QS();if(!qf.D(t))throw new j(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class au{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mL.bind(null,this.syncEngine),await pm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JO}()}createDatastore(e){const t=Nu(e.databaseInfo.databaseId),r=function(s){return new VO(s)}(e.databaseInfo);return function(s,o,a,u){return new MO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new UO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>yI(this.syncEngine,t,0),function(){return hI.D()?new hI:new xO}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,h){const p=new iL(i,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=H(i);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await fa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}au.provider={build:()=>new au};function wI(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new vt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new eL(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=H(i),a={documents:s.map(p=>iu(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const m=B2(o.serializer,p);c.set(m.key.toString(),m)});const h=[];return s.forEach(p=>{const m=c.get(p.toString());X(!!m),h.push(m)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ha(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=K.fromPath(r);this.mutations.push(new e_(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>su(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y();t=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new j(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ee.min())?Oe.exists(!1):Oe.updateTime(t):Oe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ee.min()))throw new j(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(t)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new p_(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new PL(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Su(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!hS(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=PA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ga(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gf(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await BS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function II(n,e){n.asyncQueue.verifyOperationInProgress();const t=await k_(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>fI(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>fI(e.remoteStore,i)),n._onlineComponents=e}async function k_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;nr("Error using user provided cache. Falling back to memory cache: "+t),await Gf(n,new ou)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Gf(n,new ou);return n._offlineComponents}async function Dh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await II(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await II(n,new au))),n._onlineComponents}function dR(n){return k_(n).then(e=>e.persistence)}function C_(n){return k_(n).then(e=>e.localStore)}function hR(n){return Dh(n).then(e=>e.remoteStore)}function b_(n){return Dh(n).then(e=>e.syncEngine)}function bL(n){return Dh(n).then(e=>e.datastore)}async function ea(n){const e=await Dh(n),t=e.eventManager;return t.onListen=sL.bind(null,e.syncEngine),t.onUnlisten=aL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lL.bind(null,e.syncEngine),t}function xL(n){return n.asyncQueue.enqueue(async()=>{const e=await dR(n),t=await hR(n);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.L_.delete(0),Du(s)}(t)})}function NL(n){return n.asyncQueue.enqueue(async()=>{const e=await dR(n),t=await hR(n);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.L_.add(0),await fa(s),s.q_.set("Offline")}(t)})}function DL(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const p=H(c);return p.persistence.runTransaction("read document","readonly",m=>p.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=ga(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await C_(n),e,t)),t.promise}function fR(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Nh({next:m=>{h.Za(),o.enqueueAndForget(()=>w_(s,p));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new j(O.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new E_(ca(a.path),h,{includeMetadataChanges:!0,_a:!0});return v_(s,p)}(await ea(n),n.asyncQueue,e,t,r)),r.promise}function VL(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await zd(i,s,!0),u=new sR(s,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=ga(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await C_(n),e,t)),t.promise}function pR(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Nh({next:m=>{h.Za(),o.enqueueAndForget(()=>w_(s,p)),m.fromCache&&u.source==="server"?c.reject(new j(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new E_(a,h,{includeMetadataChanges:!0,_a:!0});return v_(s,p)}(await ea(n),n.asyncQueue,e,t,r)),r.promise}function OL(n,e){const t=new Nh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.add(s),s.next()}(await ea(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.delete(s)}(await ea(n),t))}}function LL(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?pS().encode(o):o,function(h,p){return new RL(h,p)}(function(h,p){if(h instanceof Uint8Array)return wI(h,p);if(h instanceof ArrayBuffer)return wI(new Uint8Array(h),p);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Nu(e));n.asyncQueue.enqueueAndForget(async()=>{AL(await b_(n),i,r)})}function ML(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await C_(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e,t){if(!t)throw new j(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gR(n,e,t,r){if(e===!0&&r===!0)throw new j(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function TI(n){if(!K.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function AI(n){if(K.isDocumentKey(n))throw new j(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y()}function me(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vh(n);throw new j(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _R(n,e){if(e<=0)throw new j(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new SI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new SI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xV;switch(r.type){case"firstParty":return new OV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=EI.get(t);r&&(z("ComponentProvider","Removing Datastore"),EI.delete(t),r.terminate())}(this),Promise.resolve()}}function FL(n,e,t,r={}){var i;const s=(n=me(n,Vu))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ct.MOCK_USER;else{a=HC(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}n._authCredentials=new NV(new RA(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt=class yR{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yR(this.firestore,e,this._query)}},Ue=class vR{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vR(this.firestore,e,this._key)}},_i=class wR extends Mt{constructor(e,t,r){super(e,t,ca(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new K(e))}withConverter(e){return new wR(this.firestore,e,this._path)}};function IR(n,e,...t){if(n=ne(n),x_("collection","path",e),n instanceof Vu){const r=ue.fromString(e,...t);return AI(r),new _i(n,null,r)}{if(!(n instanceof Ue||n instanceof _i))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return AI(r),new _i(n.firestore,null,r)}}function UL(n,e){if(n=me(n,Vu),x_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mt(n,null,function(r){return new Lr(ue.emptyPath(),r)}(e))}function Wd(n,e,...t){if(n=ne(n),arguments.length===1&&(e=PA.newId()),x_("doc","path",e),n instanceof Vu){const r=ue.fromString(e,...t);return TI(r),new Ue(n,null,new K(r))}{if(!(n instanceof Ue||n instanceof _i))throw new j(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return TI(r),new Ue(n.firestore,n instanceof _i?n.converter:null,new K(r))}}function ER(n,e){return n=ne(n),e=ne(e),(n instanceof Ue||n instanceof _i)&&(e instanceof Ue||e instanceof _i)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function TR(n,e){return n=ne(n),e=ne(e),n instanceof Mt&&e instanceof Mt&&n.firestore===e.firestore&&Pu(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new p_(this,"async_queue_retry"),this.Vu=()=>{const r=ed();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ed();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ed();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Li(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ye("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=y_.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function _m(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class jL{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=-1;let Xe=class extends Vu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new RI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new RI(e),this._firestoreClient=void 0,await e}}};function bt(n){if(n._terminated)throw new j(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AR(n),n._firestoreClient}function AR(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,h){return new d2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,mR(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new CL(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function BL(n,e){nr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return SR(n,au.provider,{build:r=>new cR(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function $L(n){nr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();SR(n,au.provider,{build:t=>new SL(t,e.cacheSizeBytes)})}function SR(n,e,t){if((n=me(n,Xe))._firestoreClient||n._terminated)throw new j(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new j(O.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},AR(n)}function qL(n){if(n._initialized&&!n._terminated)throw new j(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Zn.D())return Promise.resolve();const i=r+"main";await Zn.delete(i)}(d_(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function WL(n){return function(t){const r=new vt;return t.asyncQueue.enqueueAndForget(async()=>fL(await b_(t),r)),r.promise}(bt(n=me(n,Xe)))}function GL(n){return xL(bt(n=me(n,Xe)))}function KL(n){return NL(bt(n=me(n,Xe)))}function HL(n,e){const t=bt(n=me(n,Xe)),r=new jL;return LL(t,n._databaseId,e,r),r}function QL(n,e){return ML(bt(n=me(n,Xe)),e).then(t=>t?new Mt(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(Ge.fromBase64String(e))}catch(t){throw new j(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=/^__.*__$/;class JL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new da(e,this.data,t,this.fieldTransforms)}}class RR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Lh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Gd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(PR(this.Cu)&&YL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class XL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Nu(e)}Qu(e,t,r,i=!1){return new Lh({Cu:e,methodName:t,qu:r,path:Ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ls(n){const e=n._freezeSettings(),t=Nu(n._databaseId);return new XL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mh(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);U_("Data must be an object, but it was:",o,r);const a=bR(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=ym(e,p,t);if(!o.contains(m))throw new j(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);NR(h,m)||h.push(m)}u=new Gt(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new JL(new _t(a),u,c)}class Ou extends Os{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ou}}function kR(n,e,t){return new Lh({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class D_ extends Os{_toFieldTransform(e){return new Cu(e.path,new Go)}isEqual(e){return e instanceof D_}}class V_ extends Os{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=kR(this,e,!0),r=this.Ku.map(s=>Ms(s,t)),i=new As(r);return new Cu(e.path,i)}isEqual(e){return e instanceof V_&&$l(this.Ku,e.Ku)}}class O_ extends Os{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=kR(this,e,!0),r=this.Ku.map(s=>Ms(s,t)),i=new Ss(r);return new Cu(e.path,i)}isEqual(e){return e instanceof O_&&$l(this.Ku,e.Ku)}}class L_ extends Os{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Ko(e.serializer,sS(e.serializer,this.$u));return new Cu(e.path,t)}isEqual(e){return e instanceof L_&&this.$u===e.$u}}function M_(n,e,t,r){const i=n.Qu(1,e,t);U_("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();Vs(r,(u,c)=>{const h=j_(e,u,t);c=ne(c);const p=i.Nu(h);if(c instanceof Ou)s.push(h);else{const m=Ms(c,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new Gt(s);return new RR(o,a,i.fieldTransforms)}function F_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[ym(e,r,t)],u=[i];if(s.length%2!=0)throw new j(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(ym(e,s[m])),u.push(s[m+1]);const c=[],h=_t.empty();for(let m=a.length-1;m>=0;--m)if(!NR(c,a[m])){const w=a[m];let k=u[m];k=ne(k);const C=o.Nu(w);if(k instanceof Ou)c.push(w);else{const V=Ms(k,C);V!=null&&(c.push(w),h.set(w,V))}}const p=new Gt(c);return new RR(h,p,o.fieldTransforms)}function CR(n,e,t,r=!1){return Ms(t,n.Qu(r?4:3,e))}function Ms(n,e){if(xR(n=ne(n)))return U_("Unsupported field value:",e,n),bR(n,e);if(n instanceof Os)return function(r,i){if(!PR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ms(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Ho(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(i.serializer,s)}}if(r instanceof Oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:_S(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:s_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof N_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Zg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vh(r)}`)}(n,e)}function bR(n,e){const t={};return UA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(n,(r,i)=>{const s=Ms(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function xR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Oh||n instanceof ir||n instanceof Ue||n instanceof Os||n instanceof N_)}function U_(n,e,t){if(!xR(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Vh(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ym(n,e,t){if((e=ne(e))instanceof ki)return e._internalPath;if(typeof e=="string")return j_(n,e);throw Gd("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZL=new RegExp("[~\\*/\\[\\]]");function j_(n,e,t){if(e.search(ZL)>=0)throw Gd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ki(...e.split("."))._internalPath}catch(r){throw Gd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gd(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new j(O.INVALID_ARGUMENT,a+n+u)}function NR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eM extends lu{data(){return super.data()}}function Fh(n,e){return typeof e=="string"?j_(n,e):e instanceof ki?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z_{}class Lu extends z_{}function Jr(n,e,...t){let r=[];e instanceof z_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof B_).length,a=s.filter(u=>u instanceof Uh).length;if(o>1||o>0&&a>0)throw new j(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Uh extends Lu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Uh(e,t,r)}_apply(e){const t=this._parse(e);return OR(e._query,t),new Mt(e.firestore,e.converter,sm(e._query,t))}_parse(e){const t=Ls(e.firestore);return function(s,o,a,u,c,h,p){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){kI(p,h);const w=[];for(const k of p)w.push(PI(u,s,k));m={arrayValue:{values:w}}}else m=PI(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||kI(p,h),m=CR(a,o,p,h==="in"||h==="not-in");return ce.create(c,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function tM(n,e,t){const r=e,i=Fh("where",n);return Uh._create(i,r,t)}class B_ extends z_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new B_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)OR(o,u),o=sm(o,u)}(e._query,t),new Mt(e.firestore,e.converter,sm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $_ extends Lu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new $_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ru(s,o)}(e._query,this._field,this._direction);return new Mt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Lr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function nM(n,e="asc"){const t=e,r=Fh("orderBy",n);return $_._create(r,t)}class jh extends Lu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new jh(e,t,r)}_apply(e){return new Mt(e.firestore,e.converter,Md(e._query,this._limit,this._limitType))}}function rM(n){return _R("limit",n),jh._create("limit",n,"F")}function iM(n){return _R("limitToLast",n),jh._create("limitToLast",n,"L")}class zh extends Lu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new zh(e,t,r)}_apply(e){const t=VR(e,this.type,this._docOrFields,this._inclusive);return new Mt(e.firestore,e.converter,function(i,s){return new Lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function sM(...n){return zh._create("startAt",n,!0)}function oM(...n){return zh._create("startAfter",n,!1)}class Bh extends Lu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Bh(e,t,r)}_apply(e){const t=VR(e,this.type,this._docOrFields,this._inclusive);return new Mt(e.firestore,e.converter,function(i,s){return new Lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function aM(...n){return Bh._create("endBefore",n,!1)}function lM(...n){return Bh._create("endAt",n,!0)}function VR(n,e,t,r){if(t[0]=ne(t[0]),t[0]instanceof lu)return function(s,o,a,u,c){if(!u)throw new j(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const p of Co(s))if(p.field.isKeyField())h.push(Es(o,u.key));else{const m=u.data.field(p.field);if(Th(m))throw new j(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const w=p.field.canonicalString();throw new j(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}h.push(m)}return new Ri(h,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ls(n.firestore);return function(o,a,u,c,h,p){const m=o.explicitOrderBy;if(h.length>m.length)throw new j(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let k=0;k<h.length;k++){const C=h[k];if(m[k].field.isKeyField()){if(typeof C!="string")throw new j(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!Jg(o)&&C.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const V=o.path.child(ue.fromString(C));if(!K.isDocumentKey(V))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const A=new K(V);w.push(Es(a,A))}else{const V=CR(u,c,C);w.push(V)}}return new Ri(w,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function PI(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new j(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jg(e)&&t.indexOf("/")!==-1)throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!K.isDocumentKey(r))throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Es(n,new K(r))}if(t instanceof Ue)return Es(n,t._key);throw new j(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(t)}.`)}function kI(n,e){if(!Array.isArray(n)||n.length===0)throw new j(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OR(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class q_{convertValue(e,t="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Vs(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new N_(s)}convertGeoPoint(e){return new Oh(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eu(e));default:return null}}convertTimestamp(e){const t=xr(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);X(kS(r));const i=new Ai(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(t)||Ye(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class uM extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Nr=class extends lu{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Al=class extends Nr{data(e={}){return super.data(e)}},Ci=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Al(this._firestore,this._userDataWriter,r.key,r,new os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:cM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function cM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function LR(n,e){return n instanceof Nr&&e instanceof Nr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ci&&e instanceof Ci&&n._firestore===e._firestore&&TR(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(n){n=me(n,Ue);const e=me(n.firestore,Xe);return fR(bt(e),n._key).then(t=>W_(e,n,t))}class Fs extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function hM(n){n=me(n,Ue);const e=me(n.firestore,Xe),t=bt(e),r=new Fs(e);return DL(t,n._key).then(i=>new Nr(e,r,n._key,i,new os(i!==null&&i.hasLocalMutations,!0),n.converter))}function fM(n){n=me(n,Ue);const e=me(n.firestore,Xe);return fR(bt(e),n._key,{source:"server"}).then(t=>W_(e,n,t))}function pM(n){n=me(n,Mt);const e=me(n.firestore,Xe),t=bt(e),r=new Fs(e);return DR(n._query),pR(t,n._query).then(i=>new Ci(e,r,n,i))}function mM(n){n=me(n,Mt);const e=me(n.firestore,Xe),t=bt(e),r=new Fs(e);return VL(t,n._query).then(i=>new Ci(e,r,n,i))}function gM(n){n=me(n,Mt);const e=me(n.firestore,Xe),t=bt(e),r=new Fs(e);return pR(t,n._query,{source:"server"}).then(i=>new Ci(e,r,n,i))}function CI(n,e,t){n=me(n,Ue);const r=me(n.firestore,Xe),i=$h(n.converter,e,t);return Mu(r,[Mh(Ls(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Oe.none())])}function bI(n,e,t,...r){n=me(n,Ue);const i=me(n.firestore,Xe),s=Ls(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof ki?F_(s,"updateDoc",n._key,e,t,r):M_(s,"updateDoc",n._key,e),Mu(i,[o.toMutation(n._key,Oe.exists(!0))])}function _M(n){return Mu(me(n.firestore,Xe),[new ha(n._key,Oe.none())])}function yM(n,e){const t=me(n.firestore,Xe),r=Wd(n),i=$h(n.converter,e);return Mu(t,[Mh(Ls(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function MR(n,...e){var t,r,i;n=ne(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_m(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_m(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(n instanceof Ue)c=me(n.firestore,Xe),h=ca(n._key.path),u={next:p=>{e[o]&&e[o](W_(c,n,p))},error:e[o+1],complete:e[o+2]};else{const p=me(n,Mt);c=me(p.firestore,Xe),h=p._query;const m=new Fs(c);u={next:w=>{e[o]&&e[o](new Ci(c,m,p,w))},error:e[o+1],complete:e[o+2]},DR(n._query)}return function(m,w,k,C){const V=new Nh(C),A=new E_(w,V,k);return m.asyncQueue.enqueueAndForget(async()=>v_(await ea(m),A)),()=>{V.Za(),m.asyncQueue.enqueueAndForget(async()=>w_(await ea(m),A))}}(bt(c),h,a,u)}function vM(n,e){return OL(bt(n=me(n,Xe)),_m(e)?e:{next:e})}function Mu(n,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>uL(await b_(r),i,s)),s.promise}(bt(n),e)}function W_(n,e,t){const r=t.docs.get(e._key),i=new Fs(n);return new Nr(n,i,e._key,r,new os(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IM=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ls(e)}set(e,t,r){this._verifyNotCommitted();const i=ri(e,this._firestore),s=$h(i.converter,t,r),o=Mh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=ri(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof ki?F_(this._dataReader,"WriteBatch.update",s._key,t,r,i):M_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ri(e,this._firestore);return this._mutations=this._mutations.concat(new ha(t._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ri(n,e){if((n=ne(n)).firestore!==e)throw new j(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EM=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Ls(t)}get(t){const r=ri(t,this._firestore),i=new uM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new lu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new lu(this._firestore,i,r._key,null,r.converter);throw Y()})}set(t,r,i){const s=ri(t,this._firestore),o=$h(s.converter,r,i),a=Mh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=ri(t,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof ki?F_(this._dataReader,"Transaction.update",o._key,r,i,s):M_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=ri(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ri(e,this._firestore),r=new Fs(this._firestore);return super.get(e).then(i=>new Nr(this._firestore,r,t._key,i._document,new os(!1,!1),t.converter))}};function TM(n,e,t){n=me(n,Xe);const r=Object.assign(Object.assign({},wM),t);return function(s){if(s.maxAttempts<1)throw new j(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new vt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await bL(s);new kL(s.asyncQueue,c,a,o,u).au()}),u.promise}(bt(n),i=>e(new EM(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(){return new Ou("deleteField")}function SM(){return new D_("serverTimestamp")}function RM(...n){return new V_("arrayUnion",n)}function PM(...n){return new O_("arrayRemove",n)}function kM(n){return new L_("increment",n)}(function(e,t=!0){(function(i){ua=i})(Di),Cr(new Rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xe(new DV(r.getProvider("auth-internal")),new MV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ln(vw,"4.7.3",e),ln(vw,"4.7.3","esm2017")})();const CM="@firebase/firestore-compat",bM="0.3.38";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof Uint8Array=="undefined")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function NI(){if(!u2())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}class uu{constructor(e){this._delegate=e}static fromBase64String(e){return NI(),new uu(ir.fromBase64String(e))}static fromUint8Array(e){return xI(),new uu(ir.fromUint8Array(e))}toBase64(){return NI(),this._delegate.toBase64()}toUint8Array(){return xI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){return xM(n,["next","error","complete"])}function xM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{enableIndexedDbPersistence(e,t){return BL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return $L(e._delegate)}clearIndexedDbPersistence(e){return qL(e._delegate)}}class FR{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&nr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){FL(this._delegate,e,t,r)}enableNetwork(){return GL(this._delegate)}disableNetwork(){return KL(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,gR("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return WL(this._delegate)}onSnapshotsInSync(e){return vM(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ta(this,IR(this._delegate,e))}catch(t){throw Dt(t,"collection()","Firestore.collection()")}}doc(e){try{return new In(this,Wd(this._delegate,e))}catch(t){throw Dt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nt(this,UL(this._delegate,e))}catch(t){throw Dt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return TM(this._delegate,t=>e(new UR(this,t)))}batch(){return bt(this._delegate),new jR(new IM(this._delegate,e=>Mu(this._delegate,e)))}loadBundle(e){return HL(this._delegate,e)}namedQuery(e){return QL(this._delegate,e).then(t=>t?new Nt(this,t):null)}}class qh extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new uu(new ir(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return In.forKey(t,this.firestore,null)}}function DM(n){CV(n)}class UR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new qh(e)}get(e){const t=as(e);return this._delegate.get(t).then(r=>new cu(this._firestore,new Nr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=as(e);return r?(G_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=as(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=as(e);return this._delegate.delete(t),this}}class jR{constructor(e){this._delegate=e}set(e,t,r){const i=as(e);return r?(G_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=as(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=as(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Cs{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Al(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new du(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Cs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Cs(e,new qh(e),t),i.set(t,s)),s}}Cs.INSTANCES=new WeakMap;class In{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new In(t,new Ue(t._delegate,r,new K(e)))}static forKey(e,t,r){return new In(t,new Ue(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ta(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ta(this.firestore,IR(this._delegate,e))}catch(t){throw Dt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof Ue?ER(this._delegate,e):!1}set(e,t){t=G_("DocumentReference.set",t);try{return t?CI(this._delegate,e,t):CI(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?bI(this._delegate,e):bI(this._delegate,e,t,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return _M(this._delegate)}onSnapshot(...e){const t=zR(e),r=BR(e,i=>new cu(this.firestore,new Nr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return MR(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=hM(this._delegate):(e==null?void 0:e.source)==="server"?t=fM(this._delegate):t=dM(this._delegate),t.then(r=>new cu(this.firestore,new Nr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new In(this.firestore,e?this._delegate.withConverter(Cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(n,e,t){return n.message=n.message.replace(e,t),n}function zR(n){for(const e of n)if(typeof e=="object"&&!vm(e))return e;return{}}function BR(n,e){var t,r;let i;return vm(n[0])?i=n[0]:vm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class cu{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new In(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return LR(this._delegate,e._delegate)}}class du extends cu{data(e){const t=this._delegate.data(e);return this._delegate._converter||bV(t!==void 0),t}}class Nt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qh(e)}where(e,t,r){try{return new Nt(this.firestore,Jr(this._delegate,tM(e,t,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nt(this.firestore,Jr(this._delegate,nM(e,t)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nt(this.firestore,Jr(this._delegate,rM(e)))}catch(t){throw Dt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nt(this.firestore,Jr(this._delegate,iM(e)))}catch(t){throw Dt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nt(this.firestore,Jr(this._delegate,sM(...e)))}catch(t){throw Dt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nt(this.firestore,Jr(this._delegate,oM(...e)))}catch(t){throw Dt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nt(this.firestore,Jr(this._delegate,aM(...e)))}catch(t){throw Dt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nt(this.firestore,Jr(this._delegate,lM(...e)))}catch(t){throw Dt(t,"endAt()","Query.endAt()")}}isEqual(e){return TR(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=mM(this._delegate):(e==null?void 0:e.source)==="server"?t=gM(this._delegate):t=pM(this._delegate),t.then(r=>new wm(this.firestore,new Ci(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=zR(e),r=BR(e,i=>new wm(this.firestore,new Ci(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return MR(this._delegate,t,r)}withConverter(e){return new Nt(this.firestore,e?this._delegate.withConverter(Cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class VM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new du(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class wm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new du(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new VM(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new du(this._firestore,r))})}isEqual(e){return LR(this._delegate,e._delegate)}}class ta extends Nt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new In(this.firestore,e):null}doc(e){try{return e===void 0?new In(this.firestore,Wd(this._delegate)):new In(this.firestore,Wd(this._delegate,e))}catch(t){throw Dt(t,"doc()","CollectionReference.doc()")}}add(e){return yM(this._delegate,e).then(t=>new In(this.firestore,t))}isEqual(e){return ER(this._delegate,e._delegate)}withConverter(e){return new ta(this.firestore,e?this._delegate.withConverter(Cs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function as(n){return me(n,Ue)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(...e){this._delegate=new ki(...e)}static documentId(){return new K_(Ve.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof ki?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this._delegate=e}static serverTimestamp(){const e=SM();return e._methodName="FieldValue.serverTimestamp",new ts(e)}static delete(){const e=AM();return e._methodName="FieldValue.delete",new ts(e)}static arrayUnion(...e){const t=RM(...e);return t._methodName="FieldValue.arrayUnion",new ts(t)}static arrayRemove(...e){const t=PM(...e);return t._methodName="FieldValue.arrayRemove",new ts(t)}static increment(e){const t=kM(e);return t._methodName="FieldValue.increment",new ts(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM={Firestore:FR,GeoPoint:Oh,Timestamp:Le,Blob:uu,Transaction:UR,WriteBatch:jR,DocumentReference:In,DocumentSnapshot:cu,Query:Nt,QueryDocumentSnapshot:du,QuerySnapshot:wm,CollectionReference:ta,FieldPath:K_,FieldValue:ts,setLogLevel:DM,CACHE_SIZE_UNLIMITED:zL};function LM(n,e){n.INTERNAL.registerComponent(new Rn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},OM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(n){LM(n,(e,t)=>new FR(e,t,new NM)),n.registerVersion(CM,bM)}MM(sn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM="type.googleapis.com/google.protobuf.Int64Value",UM="type.googleapis.com/google.protobuf.UInt64Value";function $R(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function Im(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Im(e));if(typeof n=="function"||typeof n=="object")return $R(n,e=>Im(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Kd(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case FM:case UM:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Kd(e)):typeof n=="function"||typeof n=="object"?$R(n,e=>Kd(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xo extends ht{constructor(e,t,r){super(`${qR}/${e}`,t||""),this.details=r}}function jM(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function zM(n,e){let t=jM(n),r=t,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!DI[o])return new xo("internal","internal");t=DI[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=Kd(i))}}catch(s){}return t==="ok"?null:new xo(t,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,t,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||t.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="us-central1";function $M(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new xo("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}let qM=class{constructor(e,t,r,i,s=VI,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new BM(t,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=VI}catch(a){this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}};function WM(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function GM(n,e,t){return r=>QM(n,e,r,t||{})}function KM(n,e,t){return r=>WR(n,e,r,t||{})}async function HM(n,e,t,r){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch(o){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(o){}return{status:i.status,json:s}}function QM(n,e,t,r){const i=n._url(e);return WR(n,i,t,r)}async function WR(n,e,t,r){t=Im(t);const i={data:t},s={},o=await n.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,u=$M(a),c=await Promise.race([HM(e,i,s,n.fetchImpl),u.promise,n.cancelAllRequests]);if(u.cancel(),!c)throw new xo("cancelled","Firebase Functions instance was deleted.");const h=zM(c.status,c.json);if(h)throw h;if(!c.json)throw new xo("internal","Response is not valid JSON object.");let p=c.json.data;if(typeof p=="undefined"&&(p=c.json.result),typeof p=="undefined")throw new xo("internal","Response is missing data field.");return{data:Kd(p)}}const OI="@firebase/functions",LI="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="auth-internal",JM="app-check-internal",XM="messaging-internal";function ZM(n,e){const t=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(YM),a=r.getProvider(XM),u=r.getProvider(JM);return new qM(s,o,a,u,i,n)};Cr(new Rn(qR,t,"PUBLIC").setMultipleInstances(!0)),ln(OI,LI,e),ln(OI,LI,"esm2017")}function MI(n,e,t){WM(ne(n),e,t)}function eF(n,e,t){return GM(ne(n),e,t)}function tF(n,e,t){return KM(ne(n),e,t)}ZM(fetch.bind(self));const nF="@firebase/functions-compat",rF="0.3.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return eF(this._delegate,e,t)}httpsCallableFromURL(e,t){return tF(this._delegate,e,t)}useFunctionsEmulator(e){const t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(t==null)throw new ht("functions","No origin provided to useFunctionsEmulator()");if(t[2]==null)throw new ht("functions","Port missing in origin provided to useFunctionsEmulator()");return MI(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return MI(this._delegate,e,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF="us-central1",sF=(n,{instanceIdentifier:e})=>{const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("functions").getImmediate({identifier:e!=null?e:iF});return new GR(t,r)};function oF(){const n={Functions:GR};sn.INTERNAL.registerComponent(new Rn("functions-compat",sF,"PUBLIC").setServiceProps(n).setMultipleInstances(!0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oF();sn.registerVersion(nF,rF);const aF={apiKey:"AIzaSyB9xmneVbtdA_W7Nno6hcDA_nBLfS4ns-w",authDomain:"purefrequenze-35ff7.firebaseapp.com",projectId:"purefrequenze-35ff7",storageBucket:"purefrequenze-35ff7.firebasestorage.app",messagingSenderId:"895586868188",appId:"1:895586868188:web:5929cb5b482ab3bc93cd19"},lF={monthly:"price_1TepynHbuezRUYTXiMoavKeN",annual:"price_1TepynHbuezRUYTX3TUxB6In"},FI=7;let hu,td,Em;try{sn.initializeApp(aF),hu=sn.auth(),td=sn.firestore(),Em=sn.functions()}catch(n){console.warn("Firebase non configurato:",n.message)}const uF=async()=>{if(!hu)return null;try{return(await hu.signInAnonymously()).user}catch(n){return console.warn("Auth error:",n.message),null}},cF=async n=>{var e;if(!td||!n)return{isPremium:!1,isTrial:!1,trialDaysLeft:0};try{const t=await td.collection("users").doc(n).get();if(!t.exists){const u=sn.firestore.Timestamp.now(),c=new Date;return c.setDate(c.getDate()+FI),await td.collection("users").doc(n).set({createdAt:u,trialEnd:sn.firestore.Timestamp.fromDate(c),isPremium:!1,plan:"free"}),{isPremium:!1,isTrial:!0,trialDaysLeft:FI}}const r=t.data(),i=new Date,s=(e=r.trialEnd)==null?void 0:e.toDate(),o=s?i<s:!1,a=s?Math.max(0,Math.ceil((s-i)/(1e3*60*60*24))):0;return{isPremium:r.isPremium===!0,isTrial:o,trialDaysLeft:a,plan:r.plan||"free"}}catch(t){return console.warn("Firestore error:",t.message),{isPremium:!1,isTrial:!1,trialDaysLeft:0}}},dF=async(n,e)=>{if(!Em)return alert("Pagamento non ancora configurato. Riprova a breve."),null;try{return(await Em.httpsCallable("createStripeCheckout")({priceId:n,uid:e})).data.url}catch(t){return console.error("Stripe checkout error:",t.message),alert("Errore durante il checkout. Riprova più tardi."),null}},pr={174:{label:"174",desc:"Radicamento",color:"#7A2020",free:!1},285:{label:"285",desc:"Rigenerazione",color:"#A83010",free:!1},396:{label:"396",desc:"Liberazione",color:"#4A7A4A",free:!0},417:{label:"417",desc:"Cambiamento",color:"#2A6A3A",free:!1},432:{label:"432",desc:"Armonia",color:"#2A5AA8",free:!0},528:{label:"528",desc:"Guarigione",color:"#1A7A7A",free:!0},639:{label:"639",desc:"Connessione",color:"#9A3A6A",free:!1},741:{label:"741",desc:"Intuizione",color:"#6A4AA8",free:!1},852:{label:"852",desc:"Spiritualità",color:"#5A28A0",free:!1},963:{label:"963",desc:"Coscienza",color:"#3A1A7A",free:!1}},hF={174:{title:"Fondamento",body:"La più bassa delle frequenze Solfeggio. Agisce come un'ancora fisica — riduce la percezione del dolore, scioglie le tensioni muscolari profonde e induce uno stato di radicamento sicuro. Punto di partenza ideale per sessioni lunghe o per prepararsi al sonno.",mood:["Sonno","Recupero fisico","Anti-stress"],abbina:["Drone puro","Sub drone profondo","Pioggia intensa","Drone e pioggia"]},285:{title:"Rigenerazione cellulare",body:"Frequenza associata alla rigenerazione tissutale e al recupero energetico. Tradizionalmente usata durante il riposo attivo o la convalescenza, per supportare il ritorno a uno stato di vitalità. Complementare alle onde Delta in modalità ibrida.",mood:["Recupero","Riposo attivo","Rinnovamento"],abbina:["Foresta notturna","Archi e respiro","Drone e pioggia","Sub drone profondo"]},396:{title:"Liberazione emotiva",body:"Frequenza della liberazione da senso di colpa, paura e schemi negativi. Crea spazio interiore e alleggerisce il carico emotivo. Utile prima di meditare, durante sessioni di journaling o quando si vuole lasciare andare pensieri ricorrenti.",mood:["Rilascio","Pulizia mentale","Serenità"],abbina:["Piano e pioggia","Campane tibetane","Piano solo","Cristalli e acqua"]},417:{title:"Transizione e cambiamento",body:"Frequenza del cambiamento facilitato e della rottura di schemi cristallizzati. Energizzante ma non agitante — adatta per momenti di transizione, nuovi inizi o decisioni importanti. Buona scelta per il mattino o l'inizio di un progetto.",mood:["Cambiamento","Nuovi inizi","Slancio"],abbina:["Pad cosmico","Sintetizzatore lento","Foresta mattutina","Tamburi rituali"]},432:{title:"Armonia naturale",body:"Frequenza radicata nelle proporzioni della natura: ricorre nella sequenza di Fibonacci, nelle spirali del DNA, nelle proporzioni della sezione aurea. Ritenuta da molte tradizioni musicali e spirituali come accordatura naturale del cosmo. Ideale per l'ascolto prolungato, la meditazione e il rilassamento profondo.",mood:["Armonia","Rilassamento","Presenza"],abbina:["Piano e mare","Vento e flauto","Foresta mattutina","Archi lenti"]},528:{title:"Trasformazione",body:`La più studiata delle frequenze Solfeggio, chiamata "frequenza dell'amore". Associata a trasformazione interiore, apertura del cuore e coerenza emotiva. Compatibile con quasi tutti gli stili musicali — è il punto di partenza consigliato per chi inizia.`,mood:["Guarigione","Apertura","Coerenza emotiva"],abbina:["Campane tibetane","Cristalli e acqua","Flauto e silenzio","Piano e pioggia"]},639:{title:"Connessione interpersonale",body:"Frequenza delle relazioni e della comunicazione empatica. Tradizionalmente associata all'armonia interpersonale e all'apertura verso gli altri. Utile dopo conflitti, durante pratiche di compassione o quando si lavora sull'apertura affettiva.",mood:["Connessione","Empatia","Apertura del cuore"],abbina:["Archi lenti","Piano e pioggia","Cristalli puri","Archi e respiro"]},741:{title:"Intuizione e focus",body:"Frequenza della chiarezza mentale e dell'espressione creativa. Associata al risveglio dell'intuizione e alla capacità di risolvere problemi. Ideale per sessioni di lavoro profondo, scrittura, studio o creazione artistica.",mood:["Focus","Creatività","Chiarezza mentale"],abbina:["Sintetizzatore lento","Flauto e silenzio","Tamburi rituali","Pad cosmico"]},852:{title:"Espansione della coscienza",body:"La più alta delle frequenze Solfeggio. Associata all'espansione della consapevolezza, alla visione interiore e al superamento delle credenze limitanti. Per meditatori esperti o chi vuole esplorare stati di coscienza più profondi.",mood:["Espansione","Consapevolezza","Contemplazione"],abbina:["Pad cosmico","Cristalli puri","Drone puro","Sintetizzatore lento"]},963:{title:"Coscienza universale",body:"La frequenza piu alta della scala Solfeggio. Associata al risveglio spirituale e agli stati di coscienza espansa. Per meditatori avanzati e sessioni di contemplazione profonda.",mood:["Espansione","Spiritualita","Trascendenza"],abbina:["Empireo - Cosmico","Empireo - Contemplazione","Empireo - Integrazione"]}},ol={dormire:{label:"Dormire",desc:"Sonno profondo e riposo",hz:174,bin:"delta",color:"#3A4A7A",group:"notte",track:"notte_A"},rilassarsi:{label:"Rilassarsi",desc:"Decompressione e calma",hz:432,bin:"alpha",color:"#4A8A7A",group:"bonaccia",track:"bonaccia_A"},meditare:{label:"Meditare",desc:"Presenza e contemplazione",hz:528,bin:"theta",color:"#3A6AA0",group:"fondale",track:"fondale_A"},concentrarsi:{label:"Concentrarsi",desc:"Focus e chiarezza mentale",hz:741,bin:"beta",color:"#9A7A20",group:"zenit",track:"zenit_A"},elaborare:{label:"Elaborare",desc:"Emozioni e trasformazione",hz:396,bin:"theta",color:"#A05030",group:"varco",track:"varco_A"},energia:{label:"Energia",desc:"Attivazione e motivazione",hz:852,bin:"beta",color:"#B07020",group:"levante",track:"levante_A"}},gn={delta:{name:"Delta",hz:"0.5–4",desc:"Sonno profondo",carrier:200,beat:2,free:!1},theta:{name:"Theta",hz:"4–8",desc:"Meditazione",carrier:200,beat:6,free:!0},alpha:{name:"Alpha",hz:"8–14",desc:"Rilassamento",carrier:200,beat:10,free:!1},beta:{name:"Beta",hz:"14–30",desc:"Concentrazione",carrier:250,beat:20,free:!1},gamma:{name:"Gamma",hz:"30–40",desc:"Cognizione",carrier:250,beat:35,free:!1}},UI=[{id:"bonaccia",name:"Bonaccia",tagline:"La calma dopo il vento",tier:"free",color:"#2A6A5A"},{id:"fondale",name:"Fondale",tagline:"Dove non arriva il rumore",tier:"free",color:"#2A4A8A"},{id:"notte",name:"Notte",tagline:"La porta verso il sonno",tier:"free",color:"#3A2A6A"},{id:"eremo",name:"Eremo",tagline:"Il luogo della pratica",tier:"premium",color:"#5A3A7A"},{id:"zenit",name:"Zenit",tagline:"Il punto di massima chiarezza",tier:"premium",color:"#8A6A20"},{id:"tepore",name:"Tepore",tagline:"Il calore che rimane",tier:"premium",color:"#9A4A30"},{id:"varco",name:"Varco",tagline:"Il passaggio attraverso",tier:"premium",color:"#6A3A5A"},{id:"argilla",name:"Argilla",tagline:"La materia del corpo",tier:"premium",color:"#7A5A30"},{id:"levante",name:"Levante",tagline:"Da dove sorge il giorno",tier:"premium",color:"#9A7A20"},{id:"empireo",name:"Empireo",tagline:"La sfera oltre le sfere",tier:"premium",color:"#4A2A8A"}],Pt=[{id:"bonaccia_A",group:"bonaccia",name:"Core",desc:"25 min · pad caldo",dur:1500,free:!0,obj:["rilassarsi","elaborare"]},{id:"bonaccia_B",group:"bonaccia",name:"Pioggia distante",desc:"25 min · pioggia lontana",dur:1500,free:!0,obj:["rilassarsi","dormire"]},{id:"bonaccia_C",group:"bonaccia",name:"Sera tarda",desc:"20 min · caldo profondo",dur:1200,free:!0,obj:["rilassarsi","dormire"]},{id:"bonaccia_D",group:"bonaccia",name:"Pausa breve",desc:"10 min · reset",dur:600,free:!0,obj:["rilassarsi"]},{id:"bonaccia_E",group:"bonaccia",name:"Transizione",desc:"15 min · avvolgente",dur:900,free:!0,obj:["rilassarsi","elaborare"]},{id:"fondale_A",group:"fondale",name:"Vuoto puro",desc:"25 min · sub bass",dur:1500,free:!0,obj:["meditare","elaborare"]},{id:"fondale_B",group:"fondale",name:"Spazioso",desc:"25 min · vast reverb",dur:1500,free:!0,obj:["meditare"]},{id:"fondale_C",group:"fondale",name:"Caldo",desc:"20 min · drone profondo",dur:1200,free:!0,obj:["meditare","rilassarsi"]},{id:"fondale_D",group:"fondale",name:"Massima profondita",desc:"45 min · immersione",dur:2700,free:!0,obj:["meditare"]},{id:"fondale_E",group:"fondale",name:"Biofilico",desc:"25 min · foresta lontana",dur:1500,free:!0,obj:["meditare","rilassarsi"]},{id:"notte_A",group:"notte",name:"Core",desc:"25 min · pad profondo",dur:1500,free:!0,obj:["dormire"]},{id:"notte_B",group:"notte",name:"Ritmo respiro",desc:"20 min · respiro lento",dur:1200,free:!0,obj:["dormire","rilassarsi"]},{id:"notte_C",group:"notte",name:"Pioggia",desc:"25 min · drone + pioggia",dur:1500,free:!0,obj:["dormire"]},{id:"notte_D",group:"notte",name:"Puro",desc:"15 min · solo sub bass",dur:900,free:!0,obj:["dormire"]},{id:"notte_E",group:"notte",name:"Vento lontano",desc:"25 min · vento distante",dur:1500,free:!0,obj:["dormire","rilassarsi"]},{id:"eremo_A",group:"eremo",name:"Vipassana",desc:"25 min · neutro",dur:1500,free:!1,obj:["meditare"]},{id:"eremo_B",group:"eremo",name:"Zen",desc:"30 min · vasto",dur:1800,free:!1,obj:["meditare"]},{id:"eremo_C",group:"eremo",name:"Lunga sessione",desc:"45 min · caldo",dur:2700,free:!1,obj:["meditare"]},{id:"eremo_D",group:"eremo",name:"Body scan",desc:"25 min · grounding",dur:1500,free:!1,obj:["meditare","elaborare"]},{id:"eremo_E",group:"eremo",name:"Breathwork",desc:"20 min · respiro",dur:1200,free:!1,obj:["meditare"]},{id:"zenit_A",group:"zenit",name:"Stabile",desc:"25 min · flusso",dur:1500,free:!1,obj:["concentrarsi"]},{id:"zenit_B",group:"zenit",name:"Minimalista",desc:"20 min · pulse 60bpm",dur:1200,free:!1,obj:["concentrarsi"]},{id:"zenit_C",group:"zenit",name:"Lunga sessione",desc:"45 min · deep work",dur:2700,free:!1,obj:["concentrarsi"]},{id:"zenit_D",group:"zenit",name:"Attivazione",desc:"15 min · cognitivo",dur:900,free:!1,obj:["concentrarsi","energia"]},{id:"zenit_E",group:"zenit",name:"Scrittura",desc:"25 min · creativo",dur:1500,free:!1,obj:["concentrarsi","elaborare"]},{id:"tepore_A",group:"tepore",name:"Calore fondamentale",desc:"25 min · avvolgente",dur:1500,free:!1,obj:["rilassarsi","elaborare"]},{id:"tepore_B",group:"tepore",name:"Archi sintetici",desc:"20 min · warm strings",dur:1200,free:!1,obj:["rilassarsi","elaborare"]},{id:"tepore_C",group:"tepore",name:"Compassione",desc:"25 min · molto caldo",dur:1500,free:!1,obj:["elaborare","rilassarsi"]},{id:"tepore_D",group:"tepore",name:"Coerenza cardiaca",desc:"20 min · pulse 60bpm",dur:1200,free:!1,obj:["rilassarsi","elaborare"]},{id:"tepore_E",group:"tepore",name:"Riconciliazione",desc:"25 min · morbido",dur:1500,free:!1,obj:["elaborare"]},{id:"varco_A",group:"varco",name:"Arco emotivo",desc:"20 min · da tensione a luce",dur:1200,free:!1,obj:["elaborare"]},{id:"varco_B",group:"varco",name:"Contenimento",desc:"25 min · sicuro",dur:1500,free:!1,obj:["elaborare"]},{id:"varco_C",group:"varco",name:"Trasformazione",desc:"25 min · neutro",dur:1500,free:!1,obj:["elaborare","meditare"]},{id:"varco_D",group:"varco",name:"Lutto",desc:"30 min · profondo",dur:1800,free:!1,obj:["elaborare"]},{id:"varco_E",group:"varco",name:"Dopo la tempesta",desc:"20 min · speranza",dur:1200,free:!1,obj:["elaborare","rilassarsi"]},{id:"argilla_A",group:"argilla",name:"Gravita pura",desc:"25 min · sub bass estremo",dur:1500,free:!1,obj:["dormire","rilassarsi"]},{id:"argilla_B",group:"argilla",name:"Texture terra",desc:"20 min · organic rumble",dur:1200,free:!1,obj:["dormire","elaborare"]},{id:"argilla_C",group:"argilla",name:"Recupero",desc:"25 min · brown noise caldo",dur:1500,free:!1,obj:["dormire","rilassarsi"]},{id:"argilla_D",group:"argilla",name:"Yoga",desc:"30 min · grounding",dur:1800,free:!1,obj:["rilassarsi","elaborare"]},{id:"argilla_E",group:"argilla",name:"Dolore cronico",desc:"25 min · very deep sub",dur:1500,free:!1,obj:["rilassarsi","dormire"]},{id:"levante_A",group:"levante",name:"Risveglio",desc:"15 min · progressivo",dur:900,free:!1,obj:["energia","concentrarsi"]},{id:"levante_B",group:"levante",name:"Mattino chiaro",desc:"12 min · caldo",dur:720,free:!1,obj:["energia","concentrarsi"]},{id:"levante_C",group:"levante",name:"Intenzione",desc:"10 min · stabile",dur:600,free:!1,obj:["energia","concentrarsi"]},{id:"levante_D",group:"levante",name:"Visualizzazione",desc:"15 min · ampio",dur:900,free:!1,obj:["energia"]},{id:"levante_E",group:"levante",name:"Post-meditazione",desc:"10 min · integrazione",dur:600,free:!1,obj:["meditare","energia"]},{id:"empireo_A",group:"empireo",name:"Cosmico",desc:"30 min · vast reverb",dur:1800,free:!1,obj:["meditare"]},{id:"empireo_B",group:"empireo",name:"Espansione gamma",desc:"25 min · micro-tonal",dur:1500,free:!1,obj:["meditare"]},{id:"empireo_C",group:"empireo",name:"Contemplazione",desc:"45 min · profondo",dur:2700,free:!1,obj:["meditare"]},{id:"empireo_D",group:"empireo",name:"Insight",desc:"20 min · sparso",dur:1200,free:!1,obj:["meditare","elaborare"]},{id:"empireo_E",group:"empireo",name:"Integrazione",desc:"25 min · caldo cosmico",dur:1500,free:!1,obj:["meditare","rilassarsi"]}],fF="https://purefrequenze-audio-worker.paradigmaolistico.workers.dev",pF=(n,e)=>`${fF}/${e}hz/${n}.mp3`,Kf=n=>isNaN(n)||!isFinite(n)?"∞":`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`,_n={Play:()=>y.jsx("svg",{viewBox:"0 0 24 24",children:y.jsx("polygon",{points:"5 3 19 12 5 21 5 3",stroke:"none",fill:"currentColor"})}),Pause:()=>y.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",strokeWidth:"0",children:[y.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),y.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Prev:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("polygon",{points:"19 20 9 12 19 4 19 20"}),y.jsx("line",{x1:"5",y1:"19",x2:"5",y2:"5"})]}),Next:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("polygon",{points:"5 4 15 12 5 20 5 4"}),y.jsx("line",{x1:"19",y1:"5",x2:"19",y2:"19"})]}),Shuffle:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("polyline",{points:"16 3 21 3 21 8"}),y.jsx("line",{x1:"4",y1:"20",x2:"21",y2:"3"}),y.jsx("polyline",{points:"21 16 21 21 16 21"}),y.jsx("line",{x1:"15",y1:"15",x2:"21",y2:"21"}),y.jsx("line",{x1:"4",y1:"4",x2:"9",y2:"9"})]}),Repeat:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("polyline",{points:"17 1 21 5 17 9"}),y.jsx("path",{d:"M3 11V9a4 4 0 014-4h14"}),y.jsx("polyline",{points:"7 23 3 19 7 15"}),y.jsx("path",{d:"M21 13v2a4 4 0 01-4 4H3"})]}),Clock:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Vol:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),y.jsx("path",{d:"M15.54 8.46a5 5 0 010 7.07"})]}),Check:()=>y.jsx("svg",{viewBox:"0 0 24 24",children:y.jsx("polyline",{points:"20 6 9 17 4 12"})}),Warn:()=>y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),y.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),y.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})},jI={174:{h:[1,.25,.08],a:[22,7,3],period:5,phase:[0,1.1,2.2],sub:[1,.15],sa:[14,4]},285:{h:[1,.4,.2,.07],a:[19,9,5,2],period:6,phase:[0,.8,1.7,2.5],sub:[1,.2],sa:[12,3]},396:{h:[1,.55,.3,.1],a:[17,10,6,3],period:7,phase:[0,.7,1.5,2.3],sub:[1,.3],sa:[11,4]},417:{h:[1,.6,.35,.15,.05],a:[15,10,6,3,1],period:7,phase:[0,.6,1.3,2.1,2.8],sub:[1,.35],sa:[10,4]},432:{h:[1,.5,.25,.1],a:[14,8,5,2],period:8,phase:[0,Math.PI/3,Math.PI*2/3,Math.PI],sub:[1,.25],sa:[9,3]},528:{h:[1,.618,.382,.236,.146],a:[13,9,6,4,2],period:9,phase:[0,.628,1.256,1.885,2.513],sub:[1,.4],sa:[9,4]},639:{h:[1,.75,.55,.35,.2,.08],a:[12,10,7,5,3,1],period:10,phase:[0,.5,1.1,1.7,2.4,3],sub:[1,.45],sa:[8,4]},741:{h:[1,.85,.65,.45,.28,.14,.05],a:[11,10,8,6,4,2,1],period:11,phase:[0,.45,1,1.6,2.2,2.8,3.4],sub:[1,.5],sa:[7,3]},852:{h:[1,.9,.75,.6,.45,.3,.15,.06],a:[10,9,8,7,5,4,2,1],period:12,phase:[0,.4,.9,1.4,2,2.6,3.2,3.8],sub:[1,.55],sa:[7,3]},963:{h:[1,.95,.82,.68,.52,.38,.22,.1,.04],a:[9,9,8,7,6,4,3,1,1],period:13,phase:[0,.35,.8,1.3,1.9,2.5,3.1,3.7,4.3],sub:[1,.6],sa:[6,3]}},mF=({color:n,isPlaying:e,trackName:t,hz:r,objective:i,onPlayHint:s})=>{const o=jI[r]||jI[528],a=Na.useCallback((m=1,w=0)=>{let v="";for(let S=0;S<=500;S++){const L=S/500*1600,B=S/500*Math.PI*o.period*2+w,F=1-.15*Math.cos(S/500*Math.PI*2);let I=110;o.h.forEach((_,E)=>{I+=m*F*o.a[E]*Math.sin(B*(E+1)*_+o.phase[E])}),v+=S===0?`M${L},${I}`:` L${L},${I}`}return v},[r]),u=Na.useMemo(()=>a(1,0),[r]),c=Na.useMemo(()=>a(o.sub[0]*.55,1.047),[r]),h=Na.useMemo(()=>a(o.sub[1]*.3,2.094),[r]),p=Na.useMemo(()=>{const m=[];return[1,2,3].forEach(C=>{const V=C/4*220,A=C===2;m.push(y.jsx("line",{x1:"0",y1:V,x2:400,y2:V,stroke:`rgba(255,255,255,${A?.14:.06})`,strokeWidth:A?.8:.5},`h${C}`))}),[1,2,3,4,5].forEach(C=>{const V=C/6*400;m.push(y.jsx("line",{x1:V,y1:"0",x2:V,y2:220,stroke:"rgba(255,255,255,.05)",strokeWidth:".5"},`v${C}`)),m.push(y.jsx("line",{x1:V,y1:220/2-4,x2:V,y2:220/2+4,stroke:"rgba(255,255,255,.18)",strokeWidth:".8"},`t${C}`))}),m},[]);return y.jsxs("div",{className:"art",children:[y.jsx("div",{className:"art-bg",style:{background:n}}),y.jsx("div",{className:"art-scan"}),y.jsx("div",{className:"art-vig"}),y.jsx("div",{className:"art-grid",children:y.jsx("svg",{viewBox:"0 0 400 220",preserveAspectRatio:"none",children:p})}),y.jsx("div",{className:`art-wave ${e?"playing":""}`,children:y.jsxs("svg",{viewBox:"0 0 400 220",preserveAspectRatio:"none",children:[y.jsx("g",{className:"wv-scroll-b",children:y.jsx("path",{className:"wv-ghost",d:h})}),y.jsx("g",{className:"wv-scroll-b",children:y.jsx("path",{className:"wv-sub",d:c})}),y.jsxs("g",{className:"wv-scroll",children:["  ",y.jsx("path",{className:"wv-main",d:u})]})]})}),i&&y.jsx("div",{className:"art-obj",children:ol[i].label}),y.jsx("div",{className:"art-name",children:t}),y.jsxs("div",{className:"art-hz",children:[r," Hz"]}),y.jsx("div",{className:"art-glow",style:{background:n}}),!e&&y.jsxs("div",{className:"play-hint",onClick:s,children:[y.jsx("div",{className:"play-hint-circle",children:y.jsx("svg",{viewBox:"0 0 24 24",children:y.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}),y.jsx("div",{className:"play-hint-text",children:"Inizia ad ascoltare"})]})]})},gF=({hz:n,hzData:e,info:t,onTrackClick:r})=>!t||!e?null:y.jsx("div",{className:"fi-wrap",children:y.jsxs("div",{className:"fi-card",style:{"--fi-color":e.color},children:[y.jsxs("div",{className:"fi-left",children:[y.jsxs("div",{className:"fi-hz",children:[e.label,y.jsx("span",{className:"fi-hz-unit",children:" Hz"})]}),y.jsx("div",{className:"fi-name",children:t.title})]}),y.jsxs("div",{className:"fi-center",children:[y.jsx("div",{className:"fi-title",children:e.desc}),y.jsx("div",{className:"fi-body",children:t.body}),y.jsx("div",{className:"fi-moods",children:t.mood.map(i=>y.jsx("span",{className:"fi-mood",children:i},i))})]}),y.jsxs("div",{className:"fi-right",children:[y.jsx("div",{className:"fi-abbina-label",children:"Abbina con"}),y.jsx("div",{className:"fi-tracks",children:t.abbina.map(i=>y.jsxs("div",{className:"fi-track",onClick:()=>r(i),title:`Riproduci ${i}`,children:[y.jsx("div",{className:"fi-track-dot"}),i]},i))})]})]})},n),_F=()=>{const[n,e]=Z.useState(!1),[t,r]=Z.useState(null),[i,s]=Z.useState(!1),[o,a]=Z.useState(0);Z.useEffect(()=>{(async()=>{hu&&hu.onAuthStateChanged(async U=>{let Q=U==null?void 0:U.uid;if(!Q){const te=await uF();Q=te==null?void 0:te.uid}if(Q){r(Q);const te=await cF(Q);e(te.isPremium||te.isTrial),s(te.isTrial),a(te.trialDaysLeft)}})})()},[]);const[u,c]=Z.useState(1),[h,p]=Z.useState(432),[m,w]=Z.useState(!1),[k,C]=Z.useState(0),[V,A]=Z.useState(300),[v,S]=Z.useState(.72),[L,B]=Z.useState(!1),[F,I]=Z.useState(!1),[_,E]=Z.useState(null),[T,P]=Z.useState(!1),[b,R]=Z.useState("alpha"),[_e,kn]=Z.useState("hybrid"),[Cn,fn]=Z.useState("obiettivo"),[G,re]=Z.useState("rilassarsi"),[ie,de]=Z.useState(!1),[ge,Ie]=Z.useState(!1),[pn,bn]=Z.useState("annual"),Ae=Z.useRef(null),jt=Z.useRef(null),Ur=Z.useRef(null),jr=Z.useRef(null),Jt=Z.useRef(null),zr=Z.useRef(null),mn=Z.useRef(null),sr=Z.useRef(null),_a=Z.useRef(!1),Us=Z.useRef(F),ya=Z.useRef(L),Fu=Z.useRef(n),va=Z.useRef(u);Z.useEffect(()=>{Us.current=F},[F]),Z.useEffect(()=>{ya.current=L},[L]),Z.useEffect(()=>{Fu.current=n},[n]),Z.useEffect(()=>{va.current=u},[u]);const Xt=Pt[u],js=pr[h],Uu=js?js.color:"#18150E";Z.useEffect(()=>{jt.current||(jt.current=new(window.AudioContext||window.webkitAudioContext))},[]),Z.useEffect(()=>{if(!Ae.current||_e==="pure")return;const D=m;Ae.current.src=pF(Xt.id,h),Ae.current.load(),C(0),D&&Ae.current.addEventListener("canplay",()=>{Ae.current.play().catch(()=>{})},{once:!0})},[u,h,_e]);const zs=()=>{var D;[Ur,jr].forEach(U=>{var Q,te;try{(Q=U.current)==null||Q.stop(),(te=U.current)==null||te.disconnect()}catch(xe){}U.current=null});try{(D=Jt.current)==null||D.disconnect()}catch(U){}Jt.current=null},wa=()=>{var D,U,Q;try{(D=mn.current)==null||D.stop(),(U=mn.current)==null||U.disconnect()}catch(te){}mn.current=null;try{(Q=sr.current)==null||Q.disconnect()}catch(te){}sr.current=null};Z.useCallback(D=>{wa();const U=jt.current;U&&(U.state==="suspended"&&U.resume(),sr.current=U.createGain(),sr.current.gain.value=.03,mn.current=U.createOscillator(),mn.current.type="sine",mn.current.frequency.value=D,mn.current.connect(sr.current).connect(U.destination),mn.current.start())},[]);const or=Z.useCallback(()=>{zs();const D=jt.current;if(!D)return;D.state==="suspended"&&D.resume();const U=gn[b];Jt.current=D.createGain(),Jt.current.gain.value=v*.12,Ur.current=D.createOscillator(),jr.current=D.createOscillator();const Q=D.createStereoPanner();Q.pan.value=-1;const te=D.createStereoPanner();te.pan.value=1,Ur.current.frequency.value=U.carrier,jr.current.frequency.value=U.carrier+U.beat,Ur.current.type=jr.current.type="sine",Ur.current.connect(Q).connect(Jt.current).connect(D.destination),jr.current.connect(te).connect(Jt.current).connect(D.destination),Ur.current.start(),jr.current.start()},[b,v]);Z.useEffect(()=>{var D;if(m){if(T&&or(),_e!=="pure"&&Ae.current){const U=()=>{Ae.current.play().catch(Q=>{Q.name!=="AbortError"&&console.warn("Audio non disponibile:",Xt==null?void 0:Xt.id)})};Ae.current.readyState>=2?U():Ae.current.addEventListener("canplay",U,{once:!0})}}else zs(),(D=Ae.current)==null||D.pause()},[m,T,_e,or]),Z.useEffect(()=>{Ae.current&&(Ae.current.volume=v),Jt.current&&(Jt.current.gain.value=v*.12)},[v]);const Ui=Z.useRef(null);Z.useEffect(()=>{const D=Ae.current;if(!D)return;const U=()=>C(D.currentTime),Q=()=>A(isFinite(D.duration)&&D.duration>0?D.duration:300),te=()=>{var xe;_a.current=!1,Us.current?(D.currentTime=0,D.play().catch(()=>{})):(xe=Ui.current)==null||xe.call(Ui)};return D.addEventListener("timeupdate",U),D.addEventListener("loadedmetadata",Q),D.addEventListener("ended",te),()=>{D.removeEventListener("timeupdate",U),D.removeEventListener("loadedmetadata",Q),D.removeEventListener("ended",te)}},[]),Z.useEffect(()=>(_&&(zr.current=setTimeout(()=>{w(!1),E(null)},_*6e4)),()=>clearTimeout(zr.current)),[_]),Z.useEffect(()=>(document.body.classList.toggle("modal-open",ie||ge),()=>document.body.classList.remove("modal-open")),[ie,ge]);const Ze=D=>Pt[D].free||Fu.current,rt=D=>{if(!Pt[D].free&&!n){de(!0);return}c(D),kn("hybrid"),w(!1),setTimeout(()=>w(!0),300)},Br=Z.useCallback(()=>{const D=va.current;if(ya.current){const Q=Pt.map((xe,ye)=>ye).filter(xe=>Ze(xe));if(!Q.length)return;const te=Q[Math.floor(Math.random()*Q.length)];c(te),w(!1),setTimeout(()=>w(!0),300)}else for(let Q=1;Q<=Pt.length;Q++){const te=(D+Q)%Pt.length;if(Ze(te)){c(te),w(!1),setTimeout(()=>w(!0),300);break}}},[]);Z.useEffect(()=>{Ui.current=Br},[Br]);const ju=()=>{const D=va.current;for(let U=1;U<=Pt.length;U++){const Q=(D-U+Pt.length)%Pt.length;if(Ze(Q)){c(Q),w(!1),setTimeout(()=>w(!0),300);break}}},zu=Br,Wh=D=>{if(!pr[D].free&&!n){de(!0);return}p(D)},ji=D=>{const U=Pt.findIndex(Q=>Q.name===D);U!==-1&&(rt(U),fn("esplora"))},Bu=D=>{var xe,ye;if(G===D){re(null);return}const U=ol[D];re(D);const Q=((xe=pr[U.hz])==null?void 0:xe.free)||n,te=((ye=gn[U.bin])==null?void 0:ye.free)||n;Q&&p(U.hz),te&&R(U.bin)},$u=()=>{if(!T&&!gn[b].free&&!n){de(!0);return}P(!T),T?zs():m&&setTimeout(or,100)},Bs=D=>{if(!gn[D].free&&!n){de(!0);return}R(D),T&&m&&(zs(),setTimeout(or,100))},qu=Z.useRef(null),Ia=Z.useRef(!1),[Ea,Ta]=Z.useState(!1),$s=Z.useCallback(D=>{const U=qu.current;if(!U)return;const Q=U.getBoundingClientRect(),te=Math.max(0,Math.min(1,(D-Q.left)/Q.width));Ae.current&&!(_e==="pure"&&T)&&(Ae.current.currentTime=te*V)},[_e,T,V]),$r=D=>{var U,Q,te;Ia.current=!0,Ta(!0),$s((te=D.clientX)!=null?te:(Q=(U=D.touches)==null?void 0:U[0])==null?void 0:Q.clientX)},ar=Z.useCallback(D=>{var U,Q,te;Ia.current&&$s((te=D.clientX)!=null?te:(Q=(U=D.touches)==null?void 0:U[0])==null?void 0:Q.clientX)},[$s]),lr=Z.useCallback(()=>{Ia.current=!1,Ta(!1)},[]);Z.useEffect(()=>(window.addEventListener("mousemove",ar),window.addEventListener("mouseup",lr),window.addEventListener("touchmove",ar,{passive:!0}),window.addEventListener("touchend",lr),()=>{window.removeEventListener("mousemove",ar),window.removeEventListener("mouseup",lr),window.removeEventListener("touchmove",ar),window.removeEventListener("touchend",lr)}),[ar,lr]);const ur=_e==="pure"&&T?50:V>0?k/V*100:0;return Cn==="obiettivo"&&G?Pt.map((D,U)=>({t:D,i:U,rec:D.obj.includes(G)})).sort((D,U)=>U.rec-D.rec):Pt.map((D,U)=>({t:D,i:U,rec:!1})),y.jsxs(y.Fragment,{children:[y.jsx("audio",{ref:Ae,preload:"metadata",onError:()=>{console.warn("Audio non disponibile:",Xt==null?void 0:Xt.id)}}),y.jsxs("div",{className:"wrap",children:[y.jsxs("header",{className:"hd",children:[y.jsxs("div",{className:"hd-logo-row",children:[y.jsxs("div",{className:"logo",children:[y.jsx("span",{className:"logo-text",children:"PureFrequenze"}),y.jsx("span",{className:"logo-dot"}),y.jsx("span",{className:"logo-sub",children:"Frequenze Solfeggio & Battimenti Binaurali"})]}),y.jsx("div",{className:"hd-right",children:_&&y.jsxs("div",{className:"sleep-pill",children:[_,"′"]})})]}),y.jsx("div",{className:"hd-pill-row",children:y.jsxs("div",{className:`plan-pill ${n?i?"trial":"premium":"free"}`,onClick:()=>!n&&!i&&de(!0),children:[n&&!i&&"Premium",i&&`Trial · ${o} giorni rimasti`,!n&&!i&&"Free — sblocca tutto"]})})]}),y.jsx("div",{className:"hz-label",children:"Frequenza · personalizza il suono"}),y.jsx("div",{className:"hz-grid",children:Object.entries(pr).map(([D,U])=>{var Zt;const Q=parseInt(D),te=h===Q&&!(_e==="pure"&&T),xe=!U.free&&!n,ye=G&&((Zt=ol[G])==null?void 0:Zt.hz)===Q;return y.jsxs("div",{className:`hz-card ${te?"active":""} ${xe?"locked":""}`,style:{"--hz-color":U.color},onClick:()=>Wh(Q),children:[ye&&!xe&&y.jsxs("span",{className:"hz-rec",children:[y.jsx("svg",{viewBox:"0 0 24 24",width:"9",height:"9",style:{stroke:"var(--gold)",fill:"none",strokeWidth:2,marginRight:3,verticalAlign:"middle"},children:y.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),"Consigliato"]}),ye&&xe&&y.jsxs("span",{className:"hz-rec",style:{background:"var(--s2)",borderColor:"var(--bd-md)",color:"var(--t3)"},children:[y.jsxs("svg",{viewBox:"0 0 24 24",width:"9",height:"9",style:{stroke:"var(--t3)",fill:"none",strokeWidth:2,marginRight:3,verticalAlign:"middle"},children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),"Con Premium"]}),y.jsx("div",{className:"hz-card-num",style:{color:te?void 0:U.color},children:xe?"···":`${U.label} Hz`}),y.jsx("div",{className:"hz-card-desc",children:xe?y.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:4,color:"var(--gold)",fontSize:"11px",fontWeight:500},children:[y.jsxs("svg",{viewBox:"0 0 24 24",width:"11",height:"11",style:{stroke:"var(--gold)",fill:"none",strokeWidth:2,flexShrink:0},children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),"Premium"]}):U.desc})]},D)})}),y.jsx(gF,{hz:h,hzData:pr[h],info:hF[h],onTrackClick:ji}),y.jsxs("div",{className:"grid",children:[y.jsxs("div",{className:"player",children:[y.jsx(mF,{color:Uu,isPlaying:m,trackName:_e==="pure"&&T?gn[b].name:Xt.name,hz:h,objective:G,onPlayHint:()=>w(!0)}),y.jsxs("div",{className:"pbody",children:[y.jsxs("div",{className:"pmeta",children:[y.jsx("div",{className:"p-tagline",children:T&&_e==="pure"?"Binaurale puro":T?"Binaurale + musica":"In riproduzione"}),y.jsx("div",{className:"p-title",children:T&&_e==="pure"?`${gn[b].name} — ${gn[b].hz} Hz`:Xt.name}),!(T&&_e==="pure")&&y.jsx("div",{className:"p-desc",children:Xt.desc})]}),y.jsxs("div",{className:"prog-wrap",children:[y.jsx("div",{ref:qu,className:`prog-track ${Ea?"dragging":""}`,onMouseDown:$r,onTouchStart:D=>$r(D.touches[0]),children:y.jsx("div",{className:"prog-rail",children:y.jsx("div",{className:"prog-fill",style:{width:`${ur}%`},children:y.jsx("div",{className:"prog-thumb"})})})}),y.jsxs("div",{className:"prog-times",children:[y.jsx("span",{children:T&&_e==="pure"?"∞":Kf(k)}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[F&&y.jsx("span",{style:{fontFamily:"var(--fm)",fontSize:"10px",fontWeight:600,color:"var(--t1)",background:"var(--s2)",padding:"2px 8px",borderRadius:"4px",border:"1px solid var(--bd-md)",letterSpacing:".04em",textTransform:"uppercase"},children:"Loop"}),y.jsx("span",{children:T&&_e==="pure"?"Continuo":Kf(V)})]})]})]}),y.jsxs("div",{className:"ctrl-row",children:[y.jsx("button",{className:"cb",onClick:ju,children:y.jsx(_n.Prev,{})}),y.jsx("button",{className:`play-btn ${m?"on":""}`,onClick:()=>w(!m),children:m?y.jsx(_n.Pause,{}):y.jsx(_n.Play,{})}),y.jsx("button",{className:"cb",onClick:zu,children:y.jsx(_n.Next,{})})]}),y.jsxs("div",{className:"sec-row",children:[y.jsxs("div",{className:"sec-l",children:[y.jsx("button",{className:`cs ${L?"on":""}`,title:L?"Casuale attivo":"Casuale",onClick:()=>B(!L),children:y.jsx(_n.Shuffle,{})}),y.jsx("button",{className:`cs ${F?"repeat-on":""}`,title:F?"Ripeti traccia — attivo":"Ripeti traccia",onClick:()=>I(!F),children:y.jsx(_n.Repeat,{})}),y.jsx("button",{className:`cs ${_?"on":""}`,title:_?`Timer: ${_} min`:"Sleep timer",onClick:()=>Ie(!0),children:y.jsx(_n.Clock,{})})]}),y.jsx("div",{className:"sec-r",children:y.jsxs("div",{className:"vol-row",children:[y.jsx("button",{className:"cs",children:y.jsx(_n.Vol,{})}),y.jsx("input",{type:"range",className:"vol-sl",min:"0",max:"1",step:"0.01",value:v,onChange:D=>S(parseFloat(D.target.value))})]})})]}),y.jsxs("div",{className:"bin-row",children:[y.jsxs("div",{className:"bin-toggle-row",children:[y.jsxs("div",{children:[y.jsx("div",{className:"bin-label",children:"Battimento Binaurale"}),y.jsx("div",{className:"bin-sub",children:"Aggiungi uno strato binaural alla traccia"})]}),y.jsx("div",{className:`toggle ${T?"on":""}`,onClick:$u,children:y.jsx("div",{className:"toggle-knob"})})]}),T&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{display:"flex",gap:"6px",marginBottom:"8px"},children:["hybrid","pure"].map(D=>y.jsx("button",{style:{flex:1,padding:"7px",borderRadius:"var(--r-sm)",border:"1px solid var(--bd-md)",background:_e===D?"var(--t1)":"var(--s2)",color:_e===D?"#fff":"var(--t2)",fontSize:"12px",fontWeight:500,cursor:"pointer",transition:"all .18s",fontFamily:"inherit"},onClick:()=>kn(D),children:D==="hybrid"?"Ibrida":"Pura"},D))}),y.jsx("div",{className:"bwave-row",children:Object.entries(gn).map(([D,U])=>{const Q=!U.free&&!n;return y.jsxs("div",{className:`bw-btn ${b===D?"active":""} ${Q?"locked":""}`,onClick:()=>Bs(D),children:[y.jsx("div",{className:"bwn",children:U.name}),y.jsx("div",{className:"bwh",children:U.hz}),y.jsx("div",{className:"bwd",children:U.desc})]},D)})})]})]})]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"rc-nav",children:[["obiettivo","Obiettivo"],["esplora","Musica"],["binaurale","Binaurale"]].map(([D,U])=>y.jsx("button",{className:`rc-tab ${Cn===D?"active":""}`,onClick:()=>fn(D),children:U},D))}),Cn==="obiettivo"&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"obj-grid",children:Object.entries(ol).map(([D,U])=>y.jsxs("button",{className:`obj-card ${G===D?"active":""}`,style:{"--oc":U.color},onClick:()=>Bu(D),children:[y.jsx("div",{className:"obj-name",children:U.label}),y.jsx("div",{className:"obj-desc",children:U.desc})]},D))}),G&&(()=>{var zi,Wu,dr,Gu,Ku,Bi;const D=ol[G],U=Pt.find(qs=>qs.id===D.track),Q=UI.find(qs=>qs.id===D.group),te=Pt.indexOf(U),xe=!((zi=pr[D.hz])!=null&&zi.free)&&!n,ye=!((Wu=gn[D.bin])!=null&&Wu.free)&&!n,Zt=(Q==null?void 0:Q.tier)==="premium"&&!n,xn=u===te&&m;return y.jsxs("div",{style:{marginTop:"20px",background:"var(--surface)",border:"1.5px solid var(--bd-md)",borderRadius:"var(--r-lg)",padding:"20px",boxShadow:"var(--sh-md)"},children:[y.jsx("div",{style:{fontSize:"11px",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:"var(--t3)",marginBottom:"14px"},children:"Configurazione consigliata"}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[y.jsxs("div",{children:[y.jsxs("div",{style:{fontSize:"22px",fontWeight:700,color:"var(--t1)",letterSpacing:".01em"},children:[Q==null?void 0:Q.name,Zt&&y.jsx("span",{style:{fontSize:"12px",fontWeight:500,color:"var(--gold)",background:"var(--gold-bg)",border:"1px solid var(--gold-lt)",padding:"2px 8px",borderRadius:"4px",marginLeft:"8px"},children:"Premium"})]}),y.jsxs("div",{style:{fontSize:"13px",color:"var(--t3)",marginTop:"3px"},children:[U==null?void 0:U.name," · ",U==null?void 0:U.desc]})]}),!Zt&&y.jsx("button",{style:{width:"48px",height:"48px",borderRadius:"50%",border:"none",background:xn?"var(--t2)":"var(--t1)",color:"var(--surface)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},onClick:()=>rt(te),children:xn?y.jsx(_n.Pause,{}):y.jsx(_n.Play,{})}),Zt&&y.jsx("button",{style:{padding:"10px 18px",borderRadius:"var(--r-md)",border:"none",background:"var(--gold)",color:"#fff",cursor:"pointer",fontSize:"13px",fontWeight:600},onClick:()=>de(!0),children:"Sblocca"})]}),y.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--s2)",borderRadius:"var(--r-sm)",padding:"8px 12px"},children:[y.jsx("span",{style:{fontSize:"11px",color:"var(--t3)",letterSpacing:".06em",textTransform:"uppercase"},children:"Frequenza"}),y.jsxs("span",{style:{fontSize:"14px",fontWeight:700,color:xe?"var(--t3)":((dr=pr[D.hz])==null?void 0:dr.color)||"var(--t1)",display:"flex",alignItems:"center",gap:"4px"},children:[xe&&y.jsxs("svg",{viewBox:"0 0 24 24",width:"12",height:"12",style:{strokeWidth:2,stroke:"currentColor",fill:"none"},children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),D.hz," Hz · ",(Gu=pr[D.hz])==null?void 0:Gu.desc]})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--s2)",borderRadius:"var(--r-sm)",padding:"8px 12px"},children:[y.jsx("span",{style:{fontSize:"11px",color:"var(--t3)",letterSpacing:".06em",textTransform:"uppercase"},children:"Onda"}),y.jsxs("span",{style:{fontSize:"14px",fontWeight:700,color:ye?"var(--t3)":"var(--t1)",display:"flex",alignItems:"center",gap:"4px"},children:[ye&&y.jsxs("svg",{viewBox:"0 0 24 24",width:"12",height:"12",style:{strokeWidth:2,stroke:"currentColor",fill:"none"},children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),(Ku=gn[D.bin])==null?void 0:Ku.name," · ",(Bi=gn[D.bin])==null?void 0:Bi.desc]})]})]}),(xe||ye)&&!Zt&&y.jsxs("div",{style:{marginTop:"12px",fontSize:"12px",color:"var(--t3)",display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx("span",{children:"La configurazione ottimale richiede Premium."}),y.jsx("button",{style:{fontSize:"12px",color:"var(--gold)",background:"none",border:"none",cursor:"pointer",fontWeight:600,padding:0},onClick:()=>de(!0),children:"Sblocca →"})]})]})})()]}),Cn==="esplora"&&y.jsx("div",{children:UI.map(D=>{const U=Pt.filter(te=>te.group===D.id),Q=D.tier==="premium"&&!n;return y.jsxs("div",{style:{marginBottom:"28px"},children:[y.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:"10px",paddingBottom:"8px",borderBottom:"1px solid var(--bd)"},children:[y.jsxs("div",{children:[y.jsx("span",{style:{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:600,color:Q?"var(--t3)":"var(--t1)"},children:D.name}),y.jsx("span",{style:{fontFamily:"var(--fj)",fontSize:"11px",color:"var(--t3)",marginLeft:"10px"},children:D.tagline})]}),Q&&y.jsx("span",{style:{fontFamily:"var(--fj)",fontSize:"9px",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:"var(--gold)",background:"var(--gold-bg)",border:"1px solid var(--gold-lt)",padding:"3px 10px",borderRadius:"4px"},children:"Premium"})]}),y.jsx("div",{className:"track-list",children:U.map((te,xe)=>{var zi;const ye=Q,Zt=Pt.indexOf(te),cr=u===Zt,xn=cr&&m;return y.jsxs("div",{className:`track-row ${cr?"active":""} ${ye?"locked":""}`,style:{"--art-color":((zi=pr[h])==null?void 0:zi.color)||"var(--t1)"},onClick:()=>rt(Zt),children:[y.jsx("div",{className:`tr-num ${xn?"playing":""}`,children:xn?y.jsxs(y.Fragment,{children:[y.jsx("span",{}),y.jsx("span",{}),y.jsx("span",{})]}):xe+1}),y.jsxs("div",{className:"tr-info",children:[y.jsx("div",{className:"tr-name",children:te.name}),y.jsx("div",{className:"tr-desc",children:te.desc})]}),y.jsxs("div",{className:"tr-right",children:[y.jsx("span",{className:"tr-dur",children:Kf(te.dur)}),te.free&&y.jsx("span",{className:"badge-free",children:"Free"}),ye&&y.jsx("div",{className:"tr-lock",children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})})]})]},te.id)})})]},D.id)})}),Cn==="binaurale"&&y.jsxs("div",{children:[y.jsx("p",{className:"bin-intro",children:"I battimenti binaurali sono illusioni uditive create quando ascolti due toni leggermente diversi, uno per orecchio. Il cervello percepisce la differenza come un battito ritmico. In modalità ibrida si sovrappongono alla traccia musicale scelta. Richiedono cuffie stereo."}),y.jsx("div",{className:"bin-modes",children:[["hybrid","Ibrida","Battimenti + musica. Esperienza completa e immersiva."],["pure","Pura","Solo battimenti, generati in tempo reale. Nessuna musica."]].map(([D,U,Q])=>y.jsxs("div",{className:`bmode ${_e===D&&T?"active":""}`,onClick:()=>{kn(D),T||(P(!0),m&&setTimeout(or,100))},children:[y.jsx("div",{className:"bmt",children:U}),y.jsx("div",{className:"bmd",children:Q})]},D))}),y.jsx("div",{className:"bwave-grid-lg",children:Object.entries(gn).map(([D,U])=>{const Q=!U.free&&!n;return y.jsxs("div",{className:`bwl ${b===D?"active":""} ${Q?"locked":""}`,onClick:()=>Bs(D),children:[y.jsx("div",{className:"bwln",children:U.name}),y.jsxs("div",{className:"bwlh",children:[U.hz," Hz"]}),y.jsx("div",{className:"bwld",children:U.desc}),Q&&y.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:3,marginTop:6,color:"var(--gold)",fontSize:"10px",fontWeight:500},children:y.jsxs("svg",{viewBox:"0 0 24 24",width:"10",height:"10",style:{stroke:"var(--gold)",fill:"none",strokeWidth:2},children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})})]},D)})}),y.jsxs("div",{className:"warn-box",children:[y.jsx(_n.Warn,{}),y.jsxs("span",{children:[y.jsx("strong",{children:"Cuffie obbligatorie."})," Senza cuffie stereo i battimenti binaurali non funzionano."]})]})]})]})]}),y.jsx("div",{className:"sci-note",children:y.jsxs("p",{children:[y.jsx("strong",{children:"Nota scientifica."})," Le frequenze Solfeggio si basano su tradizioni storiche e ricerca preliminare. I battimenti binaurali mostrano evidenze contrastanti. Gli effetti variano individualmente e non sostituiscono cure mediche professionali."]})})]}),ie&&y.jsx("div",{className:"modal-bg",onClick:()=>de(!1),children:y.jsxs("div",{className:"modal-card",onClick:D=>D.stopPropagation(),children:[y.jsx("button",{className:"modal-x",onClick:()=>de(!1),children:"×"}),y.jsx("div",{className:"m-eyebrow",children:"PureFrequenze Premium"}),y.jsx("div",{className:"m-title",children:"Sblocca tutto."}),y.jsx("div",{className:"m-sub",children:"35 tracce premium in 7 gruppi esclusivi, 7 frequenze Hz avanzate, tutte le onde cerebrali."}),y.jsx("div",{className:"feat-list",children:[["50 tracce totali","15 free + 35 premium — 10 gruppi con identita psicoacustica precisa"],["10 frequenze Solfeggio","Da 174 Hz a 963 Hz — sinusoide generata live in tempo reale"],["Tutte le onde cerebrali","Delta, Theta, Alpha, Beta, Gamma — pura e ibrida"],["Sleep timer avanzato","15, 45 e 90 minuti con dissolvenza automatica"],["Aggiornamenti continui","Nuove tracce aggiunte nel tempo"]].map(([D,U])=>y.jsxs("div",{className:"feat",children:[y.jsx("div",{className:"feat-ck",children:y.jsx(_n.Check,{})}),y.jsxs("div",{className:"feat-tx",children:[y.jsx("strong",{children:D}),y.jsx("br",{}),U]})]},D))}),y.jsx("div",{className:"price-row",children:[{id:"monthly",label:"Mensile",price:"€5,00",per:"/mese",save:null,best:!1},{id:"annual",label:"Annuale",price:"€42,00",per:"/anno",save:"−30%",best:!0}].map(D=>y.jsxs("div",{className:`po ${D.best?"best":""} ${pn===D.id&&!D.best?"sel":""}`,onClick:()=>bn(D.id),children:[y.jsx("div",{className:"po-l",children:D.label}),y.jsx("div",{className:"po-p",children:D.price}),y.jsx("div",{className:"po-per",children:D.per}),D.save&&y.jsx("div",{className:"po-sv",children:D.save})]},D.id))}),y.jsx("button",{className:"up-cta",onClick:async()=>{const D=lF[pn],U=await dF(D,t);U&&(window.location.href=U)},children:"Prova gratis 7 giorni"}),y.jsx("p",{className:"m-fn",children:"Rinnovo automatico · Cancella quando vuoi · Nessun vincolo"})]})}),ge&&y.jsx("div",{className:"modal-bg",onClick:()=>Ie(!1),children:y.jsxs("div",{className:"modal-card",style:{maxWidth:"340px"},onClick:D=>D.stopPropagation(),children:[y.jsx("button",{className:"modal-x",onClick:()=>Ie(!1),children:"×"}),y.jsx("div",{className:"m-eyebrow",children:"Sleep Timer"}),y.jsx("div",{className:"m-title",style:{fontSize:"22px"},children:"Arresto automatico"}),y.jsx("div",{className:"timer-grid",children:[{m:15,lock:!n},{m:30,lock:!1},{m:45,lock:!n},{m:60,lock:!1},{m:90,lock:!n},{m:null,label:"Off",lock:!1}].map(D=>{var U,Q;return y.jsxs("div",{className:`t-opt ${_===D.m?"sel":""}`,onClick:()=>{if(D.lock){de(!0),Ie(!1);return}D.m===null?(E(null),clearTimeout(zr.current),Ie(!1)):(E(D.m),Ie(!1))},children:[D.lock&&y.jsx("div",{className:"t-lk",children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),y.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})}),(U=D.label)!=null?U:`${D.m}′`]},(Q=D.m)!=null?Q:"off")})}),_&&y.jsxs("p",{style:{textAlign:"center",marginTop:"12px",fontSize:"13px",color:"var(--t2)"},children:["Timer attivo: ",_," minuti"]})]})})]})},yF=ZT(document.getElementById("root"));yF.render(y.jsx(_F,{}));
