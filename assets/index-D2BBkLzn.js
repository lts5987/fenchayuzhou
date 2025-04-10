(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ua(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const At={},rr=[],xe=()=>{},Hd=()=>!1,Si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ha=e=>e.startsWith("onUpdate:"),ce=Object.assign,fa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zd=Object.prototype.hasOwnProperty,yt=(e,t)=>zd.call(e,t),ot=Array.isArray,sr=e=>Ci(e)==="[object Map]",Pu=e=>Ci(e)==="[object Set]",lt=e=>typeof e=="function",Ot=e=>typeof e=="string",In=e=>typeof e=="symbol",St=e=>e!==null&&typeof e=="object",Vu=e=>(St(e)||lt(e))&&lt(e.then)&&lt(e.catch),Du=Object.prototype.toString,Ci=e=>Du.call(e),Kd=e=>Ci(e).slice(8,-1),xu=e=>Ci(e)==="[object Object]",da=e=>Ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wd=/-(\w)/g,gn=Pi(e=>e.replace(Wd,(t,n)=>n?n.toUpperCase():"")),Gd=/\B([A-Z])/g,$n=Pi(e=>e.replace(Gd,"-$1").toLowerCase()),Nu=Pi(e=>e.charAt(0).toUpperCase()+e.slice(1)),ho=Pi(e=>e?`on${Nu(e)}`:""),un=(e,t)=>!Object.is(e,t),fo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ou=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Qd=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Yl;const Vi=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(e){if(ot(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ot(r)?Zd(r):pa(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ot(e)||St(e))return e}const Xd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Jd=/\/\*[^]*?\*\//g;function Zd(e){const t={};return e.replace(Jd,"").split(Xd).forEach(n=>{if(n){const r=n.split(Yd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function He(e){let t="";if(Ot(e))t=e;else if(ot(e))for(let n=0;n<e.length;n++){const r=He(e[n]);r&&(t+=r+" ")}else if(St(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=ua(tp);function ku(e){return!!e||e===""}const Mu=e=>!!(e&&e.__v_isRef===!0),zt=e=>Ot(e)?e:e==null?"":ot(e)||St(e)&&(e.toString===Du||!lt(e.toString))?Mu(e)?zt(e.value):JSON.stringify(e,Lu,2):String(e),Lu=(e,t)=>Mu(t)?Lu(e,t.value):sr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[po(r,i)+" =>"]=s,n),{})}:Pu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>po(n))}:In(t)?po(t):St(t)&&!ot(t)&&!xu(t)?String(t):t,po=(e,t="")=>{var n;return In(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class np{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function rp(){return pe}let bt;const go=new WeakSet;class Fu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jl(this),ju(this);const t=bt,n=Re;bt=this,Re=!0;try{return this.fn()}finally{$u(this),bt=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_a(t);this.deps=this.depsTail=void 0,Jl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xo(this)&&this.run()}get dirty(){return xo(this)}}let Uu=0,Wr,Gr;function Bu(e,t=!1){if(e.flags|=8,t){e.next=Gr,Gr=e;return}e.next=Wr,Wr=e}function ga(){Uu++}function ma(){if(--Uu>0)return;if(Gr){let t=Gr;for(Gr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Wr;){let t=Wr;for(Wr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ju(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $u(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_a(r),sp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function xo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function qu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ns))return;e.globalVersion=ns;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!xo(e)){e.flags&=-3;return}const n=bt,r=Re;bt=e,Re=!0;try{ju(e);const s=e.fn(e._value);(t.version===0||un(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{bt=n,Re=r,$u(e),e.flags&=-3}}function _a(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_a(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function sp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const Hu=[];function wn(){Hu.push(Re),Re=!1}function An(){const e=Hu.pop();Re=e===void 0?!0:e}function Jl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=bt;bt=void 0;try{t()}finally{bt=n}}}let ns=0;class ip{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ya{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!bt||!Re||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new ip(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,zu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=r)}return n}trigger(t){this.version++,ns++,this.notify(t)}notify(t){ga();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ma()}}}function zu(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)zu(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const No=new WeakMap,Ln=Symbol(""),Oo=Symbol(""),rs=Symbol("");function ee(e,t,n){if(Re&&bt){let r=No.get(e);r||No.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ya),s.map=r,s.key=n),s.track()}}function ze(e,t,n,r,s,i){const a=No.get(e);if(!a){ns++;return}const l=u=>{u&&u.trigger()};if(ga(),t==="clear")a.forEach(l);else{const u=ot(e),f=u&&da(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,w)=>{(w==="length"||w===rs||!In(w)&&w>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(rs)),t){case"add":u?f&&l(a.get("length")):(l(a.get(Ln)),sr(e)&&l(a.get(Oo)));break;case"delete":u||(l(a.get(Ln)),sr(e)&&l(a.get(Oo)));break;case"set":sr(e)&&l(a.get(Ln));break}}ma()}function Yn(e){const t=_t(e);return t===e?t:(ee(t,"iterate",rs),Te(e)?t:t.map(ne))}function Di(e){return ee(e=_t(e),"iterate",rs),e}const op={__proto__:null,[Symbol.iterator](){return mo(this,Symbol.iterator,ne)},concat(...e){return Yn(this).concat(...e.map(t=>ot(t)?Yn(t):t))},entries(){return mo(this,"entries",e=>(e[1]=ne(e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(ne),arguments)},find(e,t){return $e(this,"find",e,t,ne,arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,ne,arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return _o(this,"includes",e)},indexOf(...e){return _o(this,"indexOf",e)},join(e){return Yn(this).join(e)},lastIndexOf(...e){return _o(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Ur(this,"pop")},push(...e){return Ur(this,"push",e)},reduce(e,...t){return Zl(this,"reduce",e,t)},reduceRight(e,...t){return Zl(this,"reduceRight",e,t)},shift(){return Ur(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Ur(this,"splice",e)},toReversed(){return Yn(this).toReversed()},toSorted(e){return Yn(this).toSorted(e)},toSpliced(...e){return Yn(this).toSpliced(...e)},unshift(...e){return Ur(this,"unshift",e)},values(){return mo(this,"values",ne)}};function mo(e,t,n){const r=Di(e),s=r[t]();return r!==e&&!Te(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ap=Array.prototype;function $e(e,t,n,r,s,i){const a=Di(e),l=a!==e&&!Te(e),u=a[t];if(u!==ap[t]){const g=u.apply(e,i);return l?ne(g):g}let f=n;a!==e&&(l?f=function(g,w){return n.call(this,ne(g),w,e)}:n.length>2&&(f=function(g,w){return n.call(this,g,w,e)}));const d=u.call(a,f,r);return l&&s?s(d):d}function Zl(e,t,n,r){const s=Di(e);let i=n;return s!==e&&(Te(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,ne(l),u,e)}),s[t](i,...r)}function _o(e,t,n){const r=_t(e);ee(r,"iterate",rs);const s=r[t](...n);return(s===-1||s===!1)&&Ta(n[0])?(n[0]=_t(n[0]),r[t](...n)):s}function Ur(e,t,n=[]){wn(),ga();const r=_t(e)[t].apply(e,n);return ma(),An(),r}const lp=ua("__proto__,__v_isRef,__isVue"),Ku=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(In));function cp(e){In(e)||(e=String(e));const t=_t(this);return ee(t,"has",e),t.hasOwnProperty(e)}class Wu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vp:Yu:i?Xu:Qu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ot(t);if(!s){let u;if(a&&(u=op[n]))return u;if(n==="hasOwnProperty")return cp}const l=Reflect.get(t,n,se(t)?t:r);return(In(n)?Ku.has(n):lp(n))||(s||ee(t,"get",n),i)?l:se(l)?a&&da(n)?l:l.value:St(l)?s?Ju(l):ir(l):l}}class Gu extends Wu{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Fn(i);if(!Te(r)&&!Fn(r)&&(i=_t(i),r=_t(r)),!ot(t)&&se(i)&&!se(r))return u?!1:(i.value=r,!0)}const a=ot(t)&&da(n)?Number(n)<t.length:yt(t,n),l=Reflect.set(t,n,r,se(t)?t:s);return t===_t(s)&&(a?un(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),l}deleteProperty(t,n){const r=yt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ze(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!In(n)||!Ku.has(n))&&ee(t,"has",n),r}ownKeys(t){return ee(t,"iterate",ot(t)?"length":Ln),Reflect.ownKeys(t)}}class up extends Wu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hp=new Gu,fp=new up,dp=new Gu(!0);const ko=e=>e,Bs=e=>Reflect.getPrototypeOf(e);function pp(e,t,n){return function(...r){const s=this.__v_raw,i=_t(s),a=sr(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?ko:t?Mo:ne;return!t&&ee(i,"iterate",u?Oo:Ln),{next(){const{value:g,done:w}=f.next();return w?{value:g,done:w}:{value:l?[d(g[0]),d(g[1])]:d(g),done:w}},[Symbol.iterator](){return this}}}}function js(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function gp(e,t){const n={get(s){const i=this.__v_raw,a=_t(i),l=_t(s);e||(un(s,l)&&ee(a,"get",s),ee(a,"get",l));const{has:u}=Bs(a),f=t?ko:e?Mo:ne;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ee(_t(s),"iterate",Ln),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_t(i),l=_t(s);return e||(un(s,l)&&ee(a,"has",s),ee(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=_t(l),f=t?ko:e?Mo:ne;return!e&&ee(u,"iterate",Ln),l.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return ce(n,e?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(s){!t&&!Te(s)&&!Fn(s)&&(s=_t(s));const i=_t(this);return Bs(i).has.call(i,s)||(i.add(s),ze(i,"add",s,s)),this},set(s,i){!t&&!Te(i)&&!Fn(i)&&(i=_t(i));const a=_t(this),{has:l,get:u}=Bs(a);let f=l.call(a,s);f||(s=_t(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?un(i,d)&&ze(a,"set",s,i):ze(a,"add",s,i),this},delete(s){const i=_t(this),{has:a,get:l}=Bs(i);let u=a.call(i,s);u||(s=_t(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&ze(i,"delete",s,void 0),f},clear(){const s=_t(this),i=s.size!==0,a=s.clear();return i&&ze(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pp(s,e,t)}),n}function va(e,t){const n=gp(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(yt(n,s)&&s in r?n:r,s,i)}const mp={get:va(!1,!1)},_p={get:va(!1,!0)},yp={get:va(!0,!1)};const Qu=new WeakMap,Xu=new WeakMap,Yu=new WeakMap,vp=new WeakMap;function Ep(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(e){return e.__v_skip||!Object.isExtensible(e)?0:Ep(Kd(e))}function ir(e){return Fn(e)?e:Ea(e,!1,hp,mp,Qu)}function Ip(e){return Ea(e,!1,dp,_p,Xu)}function Ju(e){return Ea(e,!0,fp,yp,Yu)}function Ea(e,t,n,r,s){if(!St(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=Tp(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function or(e){return Fn(e)?or(e.__v_raw):!!(e&&e.__v_isReactive)}function Fn(e){return!!(e&&e.__v_isReadonly)}function Te(e){return!!(e&&e.__v_isShallow)}function Ta(e){return e?!!e.__v_raw:!1}function _t(e){const t=e&&e.__v_raw;return t?_t(t):e}function wp(e){return!yt(e,"__v_skip")&&Object.isExtensible(e)&&Ou(e,"__v_skip",!0),e}const ne=e=>St(e)?ir(e):e,Mo=e=>St(e)?Ju(e):e;function se(e){return e?e.__v_isRef===!0:!1}function tc(e){return Ap(e,!1)}function Ap(e,t){return se(e)?e:new bp(e,t)}class bp{constructor(t,n){this.dep=new ya,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:_t(t),this._value=n?t:ne(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Te(t)||Fn(t);t=r?t:_t(t),un(t,n)&&(this._rawValue=t,this._value=r?t:ne(t),this.dep.trigger())}}function Rp(e){return se(e)?e.value:e}const Sp={get:(e,t,n)=>t==="__v_raw"?e:Rp(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return se(s)&&!se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Zu(e){return or(e)?e:new Proxy(e,Sp)}class Cp{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ya(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Bu(this,!0),!0}get value(){const t=this.dep.track();return qu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pp(e,t,n=!1){let r,s;return lt(e)?r=e:(r=e.get,s=e.set),new Cp(r,s,n)}const $s={},ri=new WeakMap;let On;function Vp(e,t=!1,n=On){if(n){let r=ri.get(n);r||ri.set(n,r=[]),r.push(e)}}function Dp(e,t,n=At){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=K=>s?K:Te(K)||s===!1||s===0?Ke(K,1):Ke(K);let d,g,w,R,D=!1,F=!1;if(se(e)?(g=()=>e.value,D=Te(e)):or(e)?(g=()=>f(e),D=!0):ot(e)?(F=!0,D=e.some(K=>or(K)||Te(K)),g=()=>e.map(K=>{if(se(K))return K.value;if(or(K))return f(K);if(lt(K))return u?u(K,2):K()})):lt(e)?t?g=u?()=>u(e,2):e:g=()=>{if(w){wn();try{w()}finally{An()}}const K=On;On=d;try{return u?u(e,3,[R]):e(R)}finally{On=K}}:g=xe,t&&s){const K=g,pt=s===!0?1/0:s;g=()=>Ke(K(),pt)}const x=rp(),B=()=>{d.stop(),x&&x.active&&fa(x.effects,d)};if(i&&t){const K=t;t=(...pt)=>{K(...pt),B()}}let q=F?new Array(e.length).fill($s):$s;const Q=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(t){const pt=d.run();if(s||D||(F?pt.some((nt,_)=>un(nt,q[_])):un(pt,q))){w&&w();const nt=On;On=d;try{const _=[pt,q===$s?void 0:F&&q[0]===$s?[]:q,R];u?u(t,3,_):t(..._),q=pt}finally{On=nt}}}else d.run()};return l&&l(Q),d=new Fu(g),d.scheduler=a?()=>a(Q,!1):Q,R=K=>Vp(K,!1,d),w=d.onStop=()=>{const K=ri.get(d);if(K){if(u)u(K,4);else for(const pt of K)pt();ri.delete(d)}},t?r?Q(!0):q=d.run():a?a(Q.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Ke(e,t=1/0,n){if(t<=0||!St(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Ke(e.value,t,n);else if(ot(e))for(let r=0;r<e.length;r++)Ke(e[r],t,n);else if(Pu(e)||sr(e))e.forEach(r=>{Ke(r,t,n)});else if(xu(e)){for(const r in e)Ke(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ke(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(e,t,n,r){try{return r?e(...r):e()}catch(s){xi(s,t,n)}}function ke(e,t,n,r){if(lt(e)){const s=_s(e,t,n,r);return s&&Vu(s)&&s.catch(i=>{xi(i,t,n)}),s}if(ot(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ke(e[i],t,n,r));return s}}function xi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||At;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,u,f)===!1)return}l=l.parent}if(i){wn(),_s(i,null,10,[e,u,f]),An();return}}xp(e,n,s,r,a)}function xp(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ae=[];let Pe=-1;const ar=[];let an=null,Jn=0;const th=Promise.resolve();let si=null;function Np(e){const t=si||th;return e?t.then(this?e.bind(this):e):t}function Op(e){let t=Pe+1,n=ae.length;for(;t<n;){const r=t+n>>>1,s=ae[r],i=ss(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ia(e){if(!(e.flags&1)){const t=ss(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=ss(n)?ae.push(e):ae.splice(Op(t),0,e),e.flags|=1,eh()}}function eh(){si||(si=th.then(rh))}function kp(e){ot(e)?ar.push(...e):an&&e.id===-1?an.splice(Jn+1,0,e):e.flags&1||(ar.push(e),e.flags|=1),eh()}function ec(e,t,n=Pe+1){for(;n<ae.length;n++){const r=ae[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nh(e){if(ar.length){const t=[...new Set(ar)].sort((n,r)=>ss(n)-ss(r));if(ar.length=0,an){an.push(...t);return}for(an=t,Jn=0;Jn<an.length;Jn++){const n=an[Jn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}an=null,Jn=0}}const ss=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rh(e){try{for(Pe=0;Pe<ae.length;Pe++){const t=ae[Pe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_s(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pe<ae.length;Pe++){const t=ae[Pe];t&&(t.flags&=-2)}Pe=-1,ae.length=0,nh(),si=null,(ae.length||ar.length)&&rh()}}let Ee=null,sh=null;function ii(e){const t=Ee;return Ee=e,sh=e&&e.type.__scopeId||null,t}function Mp(e,t=Ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&uc(-1);const i=ii(t);let a;try{a=e(...s)}finally{ii(i),r._d&&uc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function sn(e,t){if(Ee===null)return e;const n=Mi(Ee),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=At]=t[s];i&&(lt(i)&&(i={mounted:i,updated:i}),i.deep&&Ke(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function xn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(wn(),ke(u,n,8,[e.el,l,e,t]),An())}}const Lp=Symbol("_vte"),Fp=e=>e.__isTeleport;function wa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,wa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ih(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function oi(e,t,n,r,s=!1){if(ot(e)){e.forEach((D,F)=>oi(D,t&&(ot(t)?t[F]:t),n,r,s));return}if(Qr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oi(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Mi(r.component):r.el,a=s?null:i,{i:l,r:u}=e,f=t&&t.r,d=l.refs===At?l.refs={}:l.refs,g=l.setupState,w=_t(g),R=g===At?()=>!1:D=>yt(w,D);if(f!=null&&f!==u&&(Ot(f)?(d[f]=null,R(f)&&(g[f]=null)):se(f)&&(f.value=null)),lt(u))_s(u,l,12,[a,d]);else{const D=Ot(u),F=se(u);if(D||F){const x=()=>{if(e.f){const B=D?R(u)?g[u]:d[u]:u.value;s?ot(B)&&fa(B,i):ot(B)?B.includes(i)||B.push(i):D?(d[u]=[i],R(u)&&(g[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else D?(d[u]=a,R(u)&&(g[u]=a)):F&&(u.value=a,e.k&&(d[e.k]=a))};a?(x.id=-1,de(x,n)):x()}}}Vi().requestIdleCallback;Vi().cancelIdleCallback;const Qr=e=>!!e.type.__asyncLoader,oh=e=>e.type.__isKeepAlive;function Up(e,t){ah(e,"a",t)}function Bp(e,t){ah(e,"da",t)}function ah(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ni(t,r,n),n){let s=n.parent;for(;s&&s.parent;)oh(s.parent.vnode)&&jp(r,t,n,s),s=s.parent}}function jp(e,t,n,r){const s=Ni(t,e,r,!0);ch(()=>{fa(r[t],s)},n)}function Ni(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{wn();const l=ys(n),u=ke(t,n,e,a);return l(),An(),u});return r?s.unshift(i):s.push(i),i}}const Je=e=>(t,n=le)=>{(!os||e==="sp")&&Ni(e,(...r)=>t(...r),n)},$p=Je("bm"),lh=Je("m"),qp=Je("bu"),Hp=Je("u"),zp=Je("bum"),ch=Je("um"),Kp=Je("sp"),Wp=Je("rtg"),Gp=Je("rtc");function Qp(e,t=le){Ni("ec",e,t)}const Xp=Symbol.for("v-ndc");function ye(e,t,n,r){let s;const i=n,a=ot(e);if(a||Ot(e)){const l=a&&or(e);let u=!1;l&&(u=!Te(e),e=Di(e)),s=new Array(e.length);for(let f=0,d=e.length;f<d;f++)s[f]=t(u?ne(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(St(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const Lo=e=>e?xh(e)?Mi(e):Lo(e.parent):null,Xr=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hh(e),$forceUpdate:e=>e.f||(e.f=()=>{Ia(e.update)}),$nextTick:e=>e.n||(e.n=Np.bind(e.proxy)),$watch:e=>yg.bind(e)}),yo=(e,t)=>e!==At&&!e.__isScriptSetup&&yt(e,t),Yp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(yo(r,t))return a[t]=1,r[t];if(s!==At&&yt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&yt(f,t))return a[t]=3,i[t];if(n!==At&&yt(n,t))return a[t]=4,n[t];Fo&&(a[t]=0)}}const d=Xr[t];let g,w;if(d)return t==="$attrs"&&ee(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==At&&yt(n,t))return a[t]=4,n[t];if(w=u.config.globalProperties,yt(w,t))return w[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return yo(s,t)?(s[t]=n,!0):r!==At&&yt(r,t)?(r[t]=n,!0):yt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==At&&yt(e,a)||yo(t,a)||(l=i[0])&&yt(l,a)||yt(r,a)||yt(Xr,a)||yt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:yt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function nc(e){return ot(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fo=!0;function Jp(e){const t=hh(e),n=e.proxy,r=e.ctx;Fo=!1,t.beforeCreate&&rc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:g,mounted:w,beforeUpdate:R,updated:D,activated:F,deactivated:x,beforeDestroy:B,beforeUnmount:q,destroyed:Q,unmounted:K,render:pt,renderTracked:nt,renderTriggered:_,errorCaptured:m,serverPrefetch:E,expose:I,inheritAttrs:A,components:S,directives:v,filters:he}=t;if(f&&Zp(f,r,null),a)for(const Et in a){const gt=a[Et];lt(gt)&&(r[Et]=gt.bind(n))}if(s){const Et=s.call(n,n);St(Et)&&(e.data=ir(Et))}if(Fo=!0,i)for(const Et in i){const gt=i[Et],we=lt(gt)?gt.bind(n,n):lt(gt.get)?gt.get.bind(n,n):xe,bn=!lt(gt)&&lt(gt.set)?gt.set.bind(n):xe,Fe=Ug({get:we,set:bn});Object.defineProperty(r,Et,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:kt=>Fe.value=kt})}if(l)for(const Et in l)uh(l[Et],r,n,Et);if(u){const Et=lt(u)?u.call(n):u;Reflect.ownKeys(Et).forEach(gt=>{ig(gt,Et[gt])})}d&&rc(d,e,"c");function jt(Et,gt){ot(gt)?gt.forEach(we=>Et(we.bind(n))):gt&&Et(gt.bind(n))}if(jt($p,g),jt(lh,w),jt(qp,R),jt(Hp,D),jt(Up,F),jt(Bp,x),jt(Qp,m),jt(Gp,nt),jt(Wp,_),jt(zp,q),jt(ch,K),jt(Kp,E),ot(I))if(I.length){const Et=e.exposed||(e.exposed={});I.forEach(gt=>{Object.defineProperty(Et,gt,{get:()=>n[gt],set:we=>n[gt]=we})})}else e.exposed||(e.exposed={});pt&&e.render===xe&&(e.render=pt),A!=null&&(e.inheritAttrs=A),S&&(e.components=S),v&&(e.directives=v),E&&ih(e)}function Zp(e,t,n=xe){ot(e)&&(e=Uo(e));for(const r in e){const s=e[r];let i;St(s)?"default"in s?i=Gs(s.from||r,s.default,!0):i=Gs(s.from||r):i=Gs(s),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function rc(e,t,n){ke(ot(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function uh(e,t,n,r){let s=r.includes(".")?bh(n,r):()=>n[r];if(Ot(e)){const i=t[e];lt(i)&&Qs(s,i)}else if(lt(e))Qs(s,e.bind(n));else if(St(e))if(ot(e))e.forEach(i=>uh(i,t,n,r));else{const i=lt(e.handler)?e.handler.bind(n):t[e.handler];lt(i)&&Qs(s,i,e)}}function hh(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>ai(u,f,a,!0)),ai(u,t,a)),St(t)&&i.set(t,u),u}function ai(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ai(e,i,n,!0),s&&s.forEach(a=>ai(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=tg[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const tg={data:sc,props:ic,emits:ic,methods:$r,computed:$r,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:$r,directives:$r,watch:ng,provide:sc,inject:eg};function sc(e,t){return t?e?function(){return ce(lt(e)?e.call(this,this):e,lt(t)?t.call(this,this):t)}:t:e}function eg(e,t){return $r(Uo(e),Uo(t))}function Uo(e){if(ot(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function $r(e,t){return e?ce(Object.create(null),e,t):t}function ic(e,t){return e?ot(e)&&ot(t)?[...new Set([...e,...t])]:ce(Object.create(null),nc(e),nc(t??{})):t}function ng(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function fh(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rg=0;function sg(e,t){return function(r,s=null){lt(r)||(r=ce({},r)),s!=null&&!St(s)&&(s=null);const i=fh(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:rg++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bg,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&lt(d.install)?(a.add(d),d.install(f,...g)):lt(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,w){if(!u){const R=f._ceVNode||We(r,s);return R.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),e(R,d,w),u=!0,f._container=d,d.__vue_app__=f,Mi(R.component)}},onUnmount(d){l.push(d)},unmount(){u&&(ke(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=lr;lr=f;try{return d()}finally{lr=g}}};return f}}let lr=null;function ig(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Gs(e,t,n=!1){const r=le||Ee;if(r||lr){const s=lr?lr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&lt(t)?t.call(r&&r.proxy):t}}const dh={},ph=()=>Object.create(dh),gh=e=>Object.getPrototypeOf(e)===dh;function og(e,t,n,r=!1){const s={},i=ph();e.propsDefaults=Object.create(null),mh(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Ip(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ag(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=_t(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let w=d[g];if(Oi(e.emitsOptions,w))continue;const R=t[w];if(u)if(yt(i,w))R!==i[w]&&(i[w]=R,f=!0);else{const D=gn(w);s[D]=Bo(u,l,D,R,e,!1)}else R!==i[w]&&(i[w]=R,f=!0)}}}else{mh(e,t,s,i)&&(f=!0);let d;for(const g in l)(!t||!yt(t,g)&&((d=$n(g))===g||!yt(t,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Bo(u,l,g,void 0,e,!0)):delete s[g]);if(i!==l)for(const g in i)(!t||!yt(t,g))&&(delete i[g],f=!0)}f&&ze(e.attrs,"set","")}function mh(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(Kr(u))continue;const f=t[u];let d;s&&yt(s,d=gn(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Oi(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=_t(n),f=l||At;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Bo(s,u,g,f[g],e,!yt(f,g))}}return a}function Bo(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=yt(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&lt(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=ys(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===$n(n))&&(r=!0))}return r}const lg=new WeakMap;function _h(e,t,n=!1){const r=n?lg:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!lt(e)){const d=g=>{u=!0;const[w,R]=_h(g,t,!0);ce(a,w),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return St(e)&&r.set(e,rr),rr;if(ot(i))for(let d=0;d<i.length;d++){const g=gn(i[d]);oc(g)&&(a[g]=At)}else if(i)for(const d in i){const g=gn(d);if(oc(g)){const w=i[d],R=a[g]=ot(w)||lt(w)?{type:w}:ce({},w),D=R.type;let F=!1,x=!0;if(ot(D))for(let B=0;B<D.length;++B){const q=D[B],Q=lt(q)&&q.name;if(Q==="Boolean"){F=!0;break}else Q==="String"&&(x=!1)}else F=lt(D)&&D.name==="Boolean";R[0]=F,R[1]=x,(F||yt(R,"default"))&&l.push(g)}}const f=[a,l];return St(e)&&r.set(e,f),f}function oc(e){return e[0]!=="$"&&!Kr(e)}const yh=e=>e[0]==="_"||e==="$stable",Aa=e=>ot(e)?e.map(De):[De(e)],cg=(e,t,n)=>{if(t._n)return t;const r=Mp((...s)=>Aa(t(...s)),n);return r._c=!1,r},vh=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yh(s))continue;const i=e[s];if(lt(i))t[s]=cg(s,i,r);else if(i!=null){const a=Aa(i);t[s]=()=>a}}},Eh=(e,t)=>{const n=Aa(t);e.slots.default=()=>n},Th=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},ug=(e,t,n)=>{const r=e.slots=ph();if(e.vnode.shapeFlag&32){const s=t._;s?(Th(r,t,n),n&&Ou(r,"_",s,!0)):vh(t,r)}else t&&Eh(e,t)},hg=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=At;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Th(s,t,n):(i=!t.$stable,vh(t,s)),a=t}else t&&(Eh(e,t),a={default:1});if(i)for(const l in s)!yh(l)&&a[l]==null&&delete s[l]},de=bg;function fg(e){return dg(e)}function dg(e,t){const n=Vi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:w,setScopeId:R=xe,insertStaticContent:D}=e,F=(y,T,P,O=null,N=null,k=null,H=void 0,j=null,U=!!T.dynamicChildren)=>{if(y===T)return;y&&!Br(y,T)&&(O=Ue(y),kt(y,N,k,!0),y=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:z}=T;switch(M){case ki:x(y,T,P,O);break;case Un:B(y,T,P,O);break;case Eo:y==null&&q(T,P,O,H);break;case Vt:S(y,T,P,O,N,k,H,j,U);break;default:z&1?pt(y,T,P,O,N,k,H,j,U):z&6?v(y,T,P,O,N,k,H,j,U):(z&64||z&128)&&M.process(y,T,P,O,N,k,H,j,U,Se)}Y!=null&&N&&oi(Y,y&&y.ref,k,T||y,!T)},x=(y,T,P,O)=>{if(y==null)r(T.el=l(T.children),P,O);else{const N=T.el=y.el;T.children!==y.children&&f(N,T.children)}},B=(y,T,P,O)=>{y==null?r(T.el=u(T.children||""),P,O):T.el=y.el},q=(y,T,P,O)=>{[y.el,y.anchor]=D(y.children,T,P,O,y.el,y.anchor)},Q=({el:y,anchor:T},P,O)=>{let N;for(;y&&y!==T;)N=w(y),r(y,P,O),y=N;r(T,P,O)},K=({el:y,anchor:T})=>{let P;for(;y&&y!==T;)P=w(y),s(y),y=P;s(T)},pt=(y,T,P,O,N,k,H,j,U)=>{T.type==="svg"?H="svg":T.type==="math"&&(H="mathml"),y==null?nt(T,P,O,N,k,H,j,U):E(y,T,N,k,H,j,U)},nt=(y,T,P,O,N,k,H,j)=>{let U,M;const{props:Y,shapeFlag:z,transition:X,dirs:et}=y;if(U=y.el=a(y.type,k,Y&&Y.is,Y),z&8?d(U,y.children):z&16&&m(y.children,U,null,O,N,vo(y,k),H,j),et&&xn(y,null,O,"created"),_(U,y,y.scopeId,H,O),Y){for(const at in Y)at!=="value"&&!Kr(at)&&i(U,at,null,Y[at],k,O);"value"in Y&&i(U,"value",null,Y.value,k),(M=Y.onVnodeBeforeMount)&&Ce(M,O,y)}et&&xn(y,null,O,"beforeMount");const J=pg(N,X);J&&X.beforeEnter(U),r(U,T,P),((M=Y&&Y.onVnodeMounted)||J||et)&&de(()=>{M&&Ce(M,O,y),J&&X.enter(U),et&&xn(y,null,O,"mounted")},N)},_=(y,T,P,O,N)=>{if(P&&R(y,P),O)for(let k=0;k<O.length;k++)R(y,O[k]);if(N){let k=N.subTree;if(T===k||Sh(k.type)&&(k.ssContent===T||k.ssFallback===T)){const H=N.vnode;_(y,H,H.scopeId,H.slotScopeIds,N.parent)}}},m=(y,T,P,O,N,k,H,j,U=0)=>{for(let M=U;M<y.length;M++){const Y=y[M]=j?ln(y[M]):De(y[M]);F(null,Y,T,P,O,N,k,H,j)}},E=(y,T,P,O,N,k,H)=>{const j=T.el=y.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=T;U|=y.patchFlag&16;const z=y.props||At,X=T.props||At;let et;if(P&&Nn(P,!1),(et=X.onVnodeBeforeUpdate)&&Ce(et,P,T,y),Y&&xn(T,y,P,"beforeUpdate"),P&&Nn(P,!0),(z.innerHTML&&X.innerHTML==null||z.textContent&&X.textContent==null)&&d(j,""),M?I(y.dynamicChildren,M,j,P,O,vo(T,N),k):H||gt(y,T,j,null,P,O,vo(T,N),k,!1),U>0){if(U&16)A(j,z,X,P,N);else if(U&2&&z.class!==X.class&&i(j,"class",null,X.class,N),U&4&&i(j,"style",z.style,X.style,N),U&8){const J=T.dynamicProps;for(let at=0;at<J.length;at++){const ht=J[at],Qt=z[ht],$t=X[ht];($t!==Qt||ht==="value")&&i(j,ht,Qt,$t,N,P)}}U&1&&y.children!==T.children&&d(j,T.children)}else!H&&M==null&&A(j,z,X,P,N);((et=X.onVnodeUpdated)||Y)&&de(()=>{et&&Ce(et,P,T,y),Y&&xn(T,y,P,"updated")},O)},I=(y,T,P,O,N,k,H)=>{for(let j=0;j<T.length;j++){const U=y[j],M=T[j],Y=U.el&&(U.type===Vt||!Br(U,M)||U.shapeFlag&70)?g(U.el):P;F(U,M,Y,null,O,N,k,H,!0)}},A=(y,T,P,O,N)=>{if(T!==P){if(T!==At)for(const k in T)!Kr(k)&&!(k in P)&&i(y,k,T[k],null,N,O);for(const k in P){if(Kr(k))continue;const H=P[k],j=T[k];H!==j&&k!=="value"&&i(y,k,j,H,N,O)}"value"in P&&i(y,"value",T.value,P.value,N)}},S=(y,T,P,O,N,k,H,j,U)=>{const M=T.el=y?y.el:l(""),Y=T.anchor=y?y.anchor:l("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:et}=T;et&&(j=j?j.concat(et):et),y==null?(r(M,P,O),r(Y,P,O),m(T.children||[],P,Y,N,k,H,j,U)):z>0&&z&64&&X&&y.dynamicChildren?(I(y.dynamicChildren,X,P,N,k,H,j),(T.key!=null||N&&T===N.subTree)&&Ih(y,T,!0)):gt(y,T,P,Y,N,k,H,j,U)},v=(y,T,P,O,N,k,H,j,U)=>{T.slotScopeIds=j,y==null?T.shapeFlag&512?N.ctx.activate(T,P,O,H,U):he(T,P,O,N,k,H,U):Ze(y,T,U)},he=(y,T,P,O,N,k,H)=>{const j=y.component=Ng(y,O,N);if(oh(y)&&(j.ctx.renderer=Se),Og(j,!1,H),j.asyncDep){if(N&&N.registerDep(j,jt,H),!y.el){const U=j.subTree=We(Un);B(null,U,T,P)}}else jt(j,y,T,P,N,k,H)},Ze=(y,T,P)=>{const O=T.component=y.component;if(wg(y,T,P))if(O.asyncDep&&!O.asyncResolved){Et(O,T,P);return}else O.next=T,O.update();else T.el=y.el,O.vnode=T},jt=(y,T,P,O,N,k,H)=>{const j=()=>{if(y.isMounted){let{next:z,bu:X,u:et,parent:J,vnode:at}=y;{const Xt=wh(y);if(Xt){z&&(z.el=at.el,Et(y,z,H)),Xt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let ht=z,Qt;Nn(y,!1),z?(z.el=at.el,Et(y,z,H)):z=at,X&&fo(X),(Qt=z.props&&z.props.onVnodeBeforeUpdate)&&Ce(Qt,J,z,at),Nn(y,!0);const $t=lc(y),me=y.subTree;y.subTree=$t,F(me,$t,g(me.el),Ue(me),y,N,k),z.el=$t.el,ht===null&&Ag(y,$t.el),et&&de(et,N),(Qt=z.props&&z.props.onVnodeUpdated)&&de(()=>Ce(Qt,J,z,at),N)}else{let z;const{el:X,props:et}=T,{bm:J,m:at,parent:ht,root:Qt,type:$t}=y,me=Qr(T);Nn(y,!1),J&&fo(J),!me&&(z=et&&et.onVnodeBeforeMount)&&Ce(z,ht,T),Nn(y,!0);{Qt.ce&&Qt.ce._injectChildStyle($t);const Xt=y.subTree=lc(y);F(null,Xt,P,O,y,N,k),T.el=Xt.el}if(at&&de(at,N),!me&&(z=et&&et.onVnodeMounted)){const Xt=T;de(()=>Ce(z,ht,Xt),N)}(T.shapeFlag&256||ht&&Qr(ht.vnode)&&ht.vnode.shapeFlag&256)&&y.a&&de(y.a,N),y.isMounted=!0,T=P=O=null}};y.scope.on();const U=y.effect=new Fu(j);y.scope.off();const M=y.update=U.run.bind(U),Y=y.job=U.runIfDirty.bind(U);Y.i=y,Y.id=y.uid,U.scheduler=()=>Ia(Y),Nn(y,!0),M()},Et=(y,T,P)=>{T.component=y;const O=y.vnode.props;y.vnode=T,y.next=null,ag(y,T.props,O,P),hg(y,T.children,P),wn(),ec(y),An()},gt=(y,T,P,O,N,k,H,j,U=!1)=>{const M=y&&y.children,Y=y?y.shapeFlag:0,z=T.children,{patchFlag:X,shapeFlag:et}=T;if(X>0){if(X&128){bn(M,z,P,O,N,k,H,j,U);return}else if(X&256){we(M,z,P,O,N,k,H,j,U);return}}et&8?(Y&16&&Sn(M,N,k),z!==M&&d(P,z)):Y&16?et&16?bn(M,z,P,O,N,k,H,j,U):Sn(M,N,k,!0):(Y&8&&d(P,""),et&16&&m(z,P,O,N,k,H,j,U))},we=(y,T,P,O,N,k,H,j,U)=>{y=y||rr,T=T||rr;const M=y.length,Y=T.length,z=Math.min(M,Y);let X;for(X=0;X<z;X++){const et=T[X]=U?ln(T[X]):De(T[X]);F(y[X],et,P,null,N,k,H,j,U)}M>Y?Sn(y,N,k,!0,!1,z):m(T,P,O,N,k,H,j,U,z)},bn=(y,T,P,O,N,k,H,j,U)=>{let M=0;const Y=T.length;let z=y.length-1,X=Y-1;for(;M<=z&&M<=X;){const et=y[M],J=T[M]=U?ln(T[M]):De(T[M]);if(Br(et,J))F(et,J,P,null,N,k,H,j,U);else break;M++}for(;M<=z&&M<=X;){const et=y[z],J=T[X]=U?ln(T[X]):De(T[X]);if(Br(et,J))F(et,J,P,null,N,k,H,j,U);else break;z--,X--}if(M>z){if(M<=X){const et=X+1,J=et<Y?T[et].el:O;for(;M<=X;)F(null,T[M]=U?ln(T[M]):De(T[M]),P,J,N,k,H,j,U),M++}}else if(M>X)for(;M<=z;)kt(y[M],N,k,!0),M++;else{const et=M,J=M,at=new Map;for(M=J;M<=X;M++){const qt=T[M]=U?ln(T[M]):De(T[M]);qt.key!=null&&at.set(qt.key,M)}let ht,Qt=0;const $t=X-J+1;let me=!1,Xt=0;const tn=new Array($t);for(M=0;M<$t;M++)tn[M]=0;for(M=et;M<=z;M++){const qt=y[M];if(Qt>=$t){kt(qt,N,k,!0);continue}let _e;if(qt.key!=null)_e=at.get(qt.key);else for(ht=J;ht<=X;ht++)if(tn[ht-J]===0&&Br(qt,T[ht])){_e=ht;break}_e===void 0?kt(qt,N,k,!0):(tn[_e-J]=M+1,_e>=Xt?Xt=_e:me=!0,F(qt,T[_e],P,null,N,k,H,j,U),Qt++)}const Rr=me?gg(tn):rr;for(ht=Rr.length-1,M=$t-1;M>=0;M--){const qt=J+M,_e=T[qt],As=qt+1<Y?T[qt+1].el:O;tn[M]===0?F(null,_e,P,As,N,k,H,j,U):me&&(ht<0||M!==Rr[ht]?Fe(_e,P,As,2):ht--)}}},Fe=(y,T,P,O,N=null)=>{const{el:k,type:H,transition:j,children:U,shapeFlag:M}=y;if(M&6){Fe(y.component.subTree,T,P,O);return}if(M&128){y.suspense.move(T,P,O);return}if(M&64){H.move(y,T,P,Se);return}if(H===Vt){r(k,T,P);for(let z=0;z<U.length;z++)Fe(U[z],T,P,O);r(y.anchor,T,P);return}if(H===Eo){Q(y,T,P);return}if(O!==2&&M&1&&j)if(O===0)j.beforeEnter(k),r(k,T,P),de(()=>j.enter(k),N);else{const{leave:z,delayLeave:X,afterLeave:et}=j,J=()=>r(k,T,P),at=()=>{z(k,()=>{J(),et&&et()})};X?X(k,J,at):at()}else r(k,T,P)},kt=(y,T,P,O=!1,N=!1)=>{const{type:k,props:H,ref:j,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:z,dirs:X,cacheIndex:et}=y;if(z===-2&&(N=!1),j!=null&&oi(j,null,P,y,!0),et!=null&&(T.renderCache[et]=void 0),Y&256){T.ctx.deactivate(y);return}const J=Y&1&&X,at=!Qr(y);let ht;if(at&&(ht=H&&H.onVnodeBeforeUnmount)&&Ce(ht,T,y),Y&6)Rn(y.component,P,O);else{if(Y&128){y.suspense.unmount(P,O);return}J&&xn(y,null,T,"beforeUnmount"),Y&64?y.type.remove(y,T,P,Se,O):M&&!M.hasOnce&&(k!==Vt||z>0&&z&64)?Sn(M,T,P,!1,!0):(k===Vt&&z&384||!N&&Y&16)&&Sn(U,T,P),O&&Mt(y)}(at&&(ht=H&&H.onVnodeUnmounted)||J)&&de(()=>{ht&&Ce(ht,T,y),J&&xn(y,null,T,"unmounted")},P)},Mt=y=>{const{type:T,el:P,anchor:O,transition:N}=y;if(T===Vt){Qi(P,O);return}if(T===Eo){K(y);return}const k=()=>{s(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:j}=N,U=()=>H(P,k);j?j(y.el,k,U):U()}else k()},Qi=(y,T)=>{let P;for(;y!==T;)P=w(y),s(y),y=P;s(T)},Rn=(y,T,P)=>{const{bum:O,scope:N,job:k,subTree:H,um:j,m:U,a:M}=y;ac(U),ac(M),O&&fo(O),N.stop(),k&&(k.flags|=8,kt(H,y,T,P)),j&&de(j,T),de(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Sn=(y,T,P,O=!1,N=!1,k=0)=>{for(let H=k;H<y.length;H++)kt(y[H],T,P,O,N)},Ue=y=>{if(y.shapeFlag&6)return Ue(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=w(y.anchor||y.el),P=T&&T[Lp];return P?w(P):T};let Ar=!1;const ws=(y,T,P)=>{y==null?T._vnode&&kt(T._vnode,null,null,!0):F(T._vnode||null,y,T,null,null,null,P),T._vnode=y,Ar||(Ar=!0,ec(),nh(),Ar=!1)},Se={p:F,um:kt,m:Fe,r:Mt,mt:he,mc:m,pc:gt,pbc:I,n:Ue,o:e};return{render:ws,hydrate:void 0,createApp:sg(ws)}}function vo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pg(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ih(e,t,n=!1){const r=e.children,s=t.children;if(ot(r)&&ot(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ln(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ih(a,l)),l.type===ki&&(l.el=a.el)}}function gg(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function wh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wh(t)}function ac(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const mg=Symbol.for("v-scx"),_g=()=>Gs(mg);function Qs(e,t,n){return Ah(e,t,n)}function Ah(e,t,n=At){const{immediate:r,deep:s,flush:i,once:a}=n,l=ce({},n),u=t&&r||!t&&i!=="post";let f;if(os){if(i==="sync"){const R=_g();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=xe,R.resume=xe,R.pause=xe,R}}const d=le;l.call=(R,D,F)=>ke(R,d,D,F);let g=!1;i==="post"?l.scheduler=R=>{de(R,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,D)=>{D?R():Ia(R)}),l.augmentJob=R=>{t&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const w=Dp(e,t,l);return os&&(f?f.push(w):u&&w()),w}function yg(e,t,n){const r=this.proxy,s=Ot(e)?e.includes(".")?bh(r,e):()=>r[e]:e.bind(r,r);let i;lt(t)?i=t:(i=t.handler,n=t);const a=ys(this),l=Ah(s,i.bind(r),n);return a(),l}function bh(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vg=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${gn(t)}Modifiers`]||e[`${$n(t)}Modifiers`];function Eg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||At;let s=n;const i=t.startsWith("update:"),a=i&&vg(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Ot(d)?d.trim():d)),a.number&&(s=n.map(Qd)));let l,u=r[l=ho(t)]||r[l=ho(gn(t))];!u&&i&&(u=r[l=ho($n(t))]),u&&ke(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ke(f,e,6,s)}}function Rh(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!lt(e)){const u=f=>{const d=Rh(f,t,!0);d&&(l=!0,ce(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(St(e)&&r.set(e,null),null):(ot(i)?i.forEach(u=>a[u]=null):ce(a,i),St(e)&&r.set(e,a),a)}function Oi(e,t){return!e||!Si(t)?!1:(t=t.slice(2).replace(/Once$/,""),yt(e,t[0].toLowerCase()+t.slice(1))||yt(e,$n(t))||yt(e,t))}function lc(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:g,data:w,setupState:R,ctx:D,inheritAttrs:F}=e,x=ii(e);let B,q;try{if(n.shapeFlag&4){const K=s||r,pt=K;B=De(f.call(pt,K,d,g,R,w,D)),q=l}else{const K=t;B=De(K.length>1?K(g,{attrs:l,slots:a,emit:u}):K(g,null)),q=t.props?l:Tg(l)}}catch(K){Yr.length=0,xi(K,e,1),B=We(Un)}let Q=B;if(q&&F!==!1){const K=Object.keys(q),{shapeFlag:pt}=Q;K.length&&pt&7&&(i&&K.some(ha)&&(q=Ig(q,i)),Q=hr(Q,q,!1,!0))}return n.dirs&&(Q=hr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&wa(Q,n.transition),B=Q,ii(x),B}const Tg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Si(n))&&((t||(t={}))[n]=e[n]);return t},Ig=(e,t)=>{const n={};for(const r in e)(!ha(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?cc(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const w=d[g];if(a[w]!==r[w]&&!Oi(f,w))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?cc(r,a,f):!0:!!a;return!1}function cc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Oi(n,i))return!0}return!1}function Ag({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Sh=e=>e.__isSuspense;function bg(e,t){t&&t.pendingBranch?ot(e)?t.effects.push(...e):t.effects.push(e):kp(e)}const Vt=Symbol.for("v-fgt"),ki=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),Yr=[];let ge=null;function Tt(e=!1){Yr.push(ge=e?null:[])}function Rg(){Yr.pop(),ge=Yr[Yr.length-1]||null}let is=1;function uc(e,t=!1){is+=e,e<0&&ge&&t&&(ge.hasOnce=!0)}function Ch(e){return e.dynamicChildren=is>0?ge||rr:null,Rg(),is>0&&ge&&ge.push(e),e}function wt(e,t,n,r,s,i){return Ch(W(e,t,n,r,s,i,!0))}function Sg(e,t,n,r,s){return Ch(We(e,t,n,r,s,!0))}function Ph(e){return e?e.__v_isVNode===!0:!1}function Br(e,t){return e.type===t.type&&e.key===t.key}const Vh=({key:e})=>e??null,Xs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ot(e)||se(e)||lt(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function W(e,t=null,n=null,r=0,s=null,i=e===Vt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vh(t),ref:t&&Xs(t),scopeId:sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return l?(ba(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Ot(n)?8:16),is>0&&!a&&ge&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&ge.push(u),u}const We=Cg;function Cg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Xp)&&(e=Un),Ph(e)){const l=hr(e,t,!0);return n&&ba(l,n),is>0&&!i&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(Fg(e)&&(e=e.__vccOpts),t){t=Pg(t);let{class:l,style:u}=t;l&&!Ot(l)&&(t.class=He(l)),St(u)&&(Ta(u)&&!ot(u)&&(u=ce({},u)),t.style=pa(u))}const a=Ot(e)?1:Sh(e)?128:Fp(e)?64:St(e)?4:lt(e)?2:0;return W(e,t,n,r,s,a,i,!0)}function Pg(e){return e?Ta(e)||gh(e)?ce({},e):e:null}function hr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,f=t?Vg(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Vh(f),ref:t&&t.ref?n&&i?ot(i)?i.concat(Xs(t)):[i,Xs(t)]:Xs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hr(e.ssContent),ssFallback:e.ssFallback&&hr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&wa(d,u.clone(d)),d}function Dh(e=" ",t=0){return We(ki,null,e,t)}function To(e="",t=!1){return t?(Tt(),Sg(Un,null,e)):We(Un,null,e)}function De(e){return e==null||typeof e=="boolean"?We(Un):ot(e)?We(Vt,null,e.slice()):Ph(e)?ln(e):We(ki,null,String(e))}function ln(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:hr(e)}function ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ot(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ba(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!gh(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else lt(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Dh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vg(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=He([t.class,r.class]));else if(s==="style")t.style=pa([t.style,r.style]);else if(Si(s)){const i=t[s],a=r[s];a&&i!==a&&!(ot(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ce(e,t,n,r=null){ke(e,t,7,[n,r])}const Dg=fh();let xg=0;function Ng(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Dg,i={uid:xg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_h(r,s),emitsOptions:Rh(r,s),emit:null,emitted:null,propsDefaults:At,inheritAttrs:r.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Eg.bind(null,i),e.ce&&e.ce(i),i}let le=null,li,jo;{const e=Vi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};li=t("__VUE_INSTANCE_SETTERS__",n=>le=n),jo=t("__VUE_SSR_SETTERS__",n=>os=n)}const ys=e=>{const t=le;return li(e),e.scope.on(),()=>{e.scope.off(),li(t)}},hc=()=>{le&&le.scope.off(),li(null)};function xh(e){return e.vnode.shapeFlag&4}let os=!1;function Og(e,t=!1,n=!1){t&&jo(t);const{props:r,children:s}=e.vnode,i=xh(e);og(e,r,i,t),ug(e,s,n);const a=i?kg(e,t):void 0;return t&&jo(!1),a}function kg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yp);const{setup:r}=n;if(r){wn();const s=e.setupContext=r.length>1?Lg(e):null,i=ys(e),a=_s(r,e,0,[e.props,s]),l=Vu(a);if(An(),i(),(l||e.sp)&&!Qr(e)&&ih(e),l){if(a.then(hc,hc),t)return a.then(u=>{fc(e,u)}).catch(u=>{xi(u,e,0)});e.asyncDep=a}else fc(e,a)}else Nh(e)}function fc(e,t,n){lt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:St(t)&&(e.setupState=Zu(t)),Nh(e)}function Nh(e,t,n){const r=e.type;e.render||(e.render=r.render||xe);{const s=ys(e);wn();try{Jp(e)}finally{An(),s()}}}const Mg={get(e,t){return ee(e,"get",""),e[t]}};function Lg(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mg),slots:e.slots,emit:e.emit,expose:t}}function Mi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zu(wp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xr)return Xr[n](e)},has(t,n){return n in t||n in Xr}})):e.proxy}function Fg(e){return lt(e)&&"__vccOpts"in e}const Ug=(e,t)=>Pp(e,t,os),Bg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $o;const dc=typeof window<"u"&&window.trustedTypes;if(dc)try{$o=dc.createPolicy("vue",{createHTML:e=>e})}catch{}const Oh=$o?e=>$o.createHTML(e):e=>e,jg="http://www.w3.org/2000/svg",$g="http://www.w3.org/1998/Math/MathML",qe=typeof document<"u"?document:null,pc=qe&&qe.createElement("template"),qg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?qe.createElementNS(jg,e):t==="mathml"?qe.createElementNS($g,e):n?qe.createElement(e,{is:n}):qe.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>qe.createTextNode(e),createComment:e=>qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pc.innerHTML=Oh(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=pc.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hg=Symbol("_vtc");function zg(e,t,n){const r=e[Hg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ci=Symbol("_vod"),kh=Symbol("_vsh"),on={beforeMount(e,{value:t},{transition:n}){e[ci]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):jr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),jr(e,!0),r.enter(e)):r.leave(e,()=>{jr(e,!1)}):jr(e,t))},beforeUnmount(e,{value:t}){jr(e,t)}};function jr(e,t){e.style.display=t?e[ci]:"none",e[kh]=!t}const Kg=Symbol(""),Wg=/(^|;)\s*display\s*:/;function Gg(e,t,n){const r=e.style,s=Ot(n);let i=!1;if(n&&!s){if(t)if(Ot(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ys(r,l,"")}else for(const a in t)n[a]==null&&Ys(r,a,"");for(const a in n)a==="display"&&(i=!0),Ys(r,a,n[a])}else if(s){if(t!==n){const a=r[Kg];a&&(n+=";"+a),r.cssText=n,i=Wg.test(n)}}else t&&e.removeAttribute("style");ci in e&&(e[ci]=i?r.display:"",e[kh]&&(r.display="none"))}const gc=/\s*!important$/;function Ys(e,t,n){if(ot(n))n.forEach(r=>Ys(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qg(e,t);gc.test(n)?e.setProperty($n(r),n.replace(gc,""),"important"):e[r]=n}}const mc=["Webkit","Moz","ms"],Io={};function Qg(e,t){const n=Io[t];if(n)return n;let r=gn(t);if(r!=="filter"&&r in e)return Io[t]=r;r=Nu(r);for(let s=0;s<mc.length;s++){const i=mc[s]+r;if(i in e)return Io[t]=i}return t}const _c="http://www.w3.org/1999/xlink";function yc(e,t,n,r,s,i=ep(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_c,t.slice(6,t.length)):e.setAttributeNS(_c,t,n):n==null||i&&!ku(n)?e.removeAttribute(t):e.setAttribute(t,i?"":In(n)?String(n):n)}function vc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Oh(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ku(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Xg(e,t,n,r){e.addEventListener(t,n,r)}function Yg(e,t,n,r){e.removeEventListener(t,n,r)}const Ec=Symbol("_vei");function Jg(e,t,n,r,s=null){const i=e[Ec]||(e[Ec]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=Zg(t);if(r){const f=i[t]=nm(r,s);Xg(e,l,f,u)}else a&&(Yg(e,l,a,u),i[t]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function Zg(e){let t;if(Tc.test(e)){t={};let r;for(;r=e.match(Tc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}let wo=0;const tm=Promise.resolve(),em=()=>wo||(tm.then(()=>wo=0),wo=Date.now());function nm(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(rm(r,n.value),t,5,[r])};return n.value=e,n.attached=em(),n}function rm(e,t){if(ot(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ic=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sm=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?zg(e,r,a):t==="style"?Gg(e,n,r):Si(t)?ha(t)||Jg(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):im(e,t,r,a))?(vc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yc(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ot(r))?vc(e,gn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yc(e,t,r,a))};function im(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ic(t)&&lt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ic(t)&&Ot(n)?!1:t in e}const om=ce({patchProp:sm},qg);let wc;function am(){return wc||(wc=fg(om))}const lm=(...e)=>{const t=am().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=um(r);if(!s)return;const i=t._component;!lt(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,cm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function cm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function um(e){return Ot(e)?document.querySelector(e):e}const hm=()=>{};var Ac={};/**
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
 */const Mh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},fm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|f>>6,R=f&63;u||(R=64,a||(w=64)),r.push(n[d],n[g],n[w],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new dm;const w=i<<2|l>>4;if(r.push(w),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const D=f<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pm=function(e){const t=Mh(e);return Lh.encodeByteArray(t,!0)},ui=function(e){return pm(e).replace(/\./g,"")},gm=function(e){try{return Lh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function mm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _m=()=>mm().__FIREBASE_DEFAULTS__,ym=()=>{if(typeof process>"u"||typeof Ac>"u")return;const e=Ac.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gm(e[1]);return t&&JSON.parse(t)},Ra=()=>{try{return hm()||_m()||ym()||vm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Em=e=>{var t,n;return(n=(t=Ra())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Tm=e=>{const t=Em(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Fh=()=>{var e;return(e=Ra())===null||e===void 0?void 0:e.config};/**
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
 */class Im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function wm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ui(JSON.stringify(n)),ui(JSON.stringify(a)),""].join(".")}/**
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
 */function Am(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bm(){var e;const t=(e=Ra())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rm(){return!bm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sm(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Pm="FirebaseError";class vr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Pm,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uh.prototype.create)}}class Uh{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Vm(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new vr(s,l,r)}}function Vm(e,t){return e.replace(Dm,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Dm=/\{\$([^}]+)}/g;function hi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(bc(i)&&bc(a)){if(!hi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bc(e){return e!==null&&typeof e=="object"}/**
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
 */function fi(e){return e&&e._delegate?e._delegate:e}class as{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class xm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Im;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Om(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nm(e){return e===kn?void 0:e}function Om(e){return e.instantiationMode==="EAGER"}/**
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
 */class km{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var dt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(dt||(dt={}));const Mm={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},Lm=dt.INFO,Fm={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},Um=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Fm[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bh{constructor(t){this.name=t,this._logLevel=Lm,this._logHandler=Um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}const Bm=(e,t)=>t.some(n=>e instanceof n);let Rc,Sc;function jm(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $m(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,qo=new WeakMap,$h=new WeakMap,Ao=new WeakMap,Sa=new WeakMap;function qm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(hn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&jh.set(n,e)}).catch(()=>{}),Sa.set(t,e),t}function Hm(e){if(qo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});qo.set(e,t)}let Ho={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$h.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zm(e){Ho=e(Ho)}function Km(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bo(this),t,...n);return $h.set(r,t.sort?t.sort():[t]),hn(r)}:$m().includes(e)?function(...t){return e.apply(bo(this),t),hn(jh.get(this))}:function(...t){return hn(e.apply(bo(this),t))}}function Wm(e){return typeof e=="function"?Km(e):(e instanceof IDBTransaction&&Hm(e),Bm(e,jm())?new Proxy(e,Ho):e)}function hn(e){if(e instanceof IDBRequest)return qm(e);if(Ao.has(e))return Ao.get(e);const t=Wm(e);return t!==e&&(Ao.set(e,t),Sa.set(t,e)),t}const bo=e=>Sa.get(e);function Gm(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(hn(a.result),u.oldVersion,u.newVersion,hn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Qm=["get","getKey","getAll","getAllKeys","count"],Xm=["put","add","delete","clear"],Ro=new Map;function Cc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ro.get(t))return Ro.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Xm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qm.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return Ro.set(t,i),i}zm(e=>({...e,get:(t,n,r)=>Cc(t,n)||e.get(t,n,r),has:(t,n)=>!!Cc(t,n)||e.has(t,n)}));/**
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
 */class Ym{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zo="@firebase/app",Pc="0.11.4";/**
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
 */const Qe=new Bh("@firebase/app"),Zm="@firebase/app-compat",t_="@firebase/analytics-compat",e_="@firebase/analytics",n_="@firebase/app-check-compat",r_="@firebase/app-check",s_="@firebase/auth",i_="@firebase/auth-compat",o_="@firebase/database",a_="@firebase/data-connect",l_="@firebase/database-compat",c_="@firebase/functions",u_="@firebase/functions-compat",h_="@firebase/installations",f_="@firebase/installations-compat",d_="@firebase/messaging",p_="@firebase/messaging-compat",g_="@firebase/performance",m_="@firebase/performance-compat",__="@firebase/remote-config",y_="@firebase/remote-config-compat",v_="@firebase/storage",E_="@firebase/storage-compat",T_="@firebase/firestore",I_="@firebase/vertexai",w_="@firebase/firestore-compat",A_="firebase",b_="11.6.0";/**
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
 */const Ko="[DEFAULT]",R_={[zo]:"fire-core",[Zm]:"fire-core-compat",[e_]:"fire-analytics",[t_]:"fire-analytics-compat",[r_]:"fire-app-check",[n_]:"fire-app-check-compat",[s_]:"fire-auth",[i_]:"fire-auth-compat",[o_]:"fire-rtdb",[a_]:"fire-data-connect",[l_]:"fire-rtdb-compat",[c_]:"fire-fn",[u_]:"fire-fn-compat",[h_]:"fire-iid",[f_]:"fire-iid-compat",[d_]:"fire-fcm",[p_]:"fire-fcm-compat",[g_]:"fire-perf",[m_]:"fire-perf-compat",[__]:"fire-rc",[y_]:"fire-rc-compat",[v_]:"fire-gcs",[E_]:"fire-gcs-compat",[T_]:"fire-fst",[w_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[A_]:"fire-js-all"};/**
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
 */const di=new Map,S_=new Map,Wo=new Map;function Vc(e,t){try{e.container.addComponent(t)}catch(n){Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pi(e){const t=e.name;if(Wo.has(t))return Qe.debug(`There were multiple attempts to register component ${t}.`),!1;Wo.set(t,e);for(const n of di.values())Vc(n,e);for(const n of S_.values())Vc(n,e);return!0}function C_(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function P_(e){return e==null?!1:e.settings!==void 0}/**
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
 */const V_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new Uh("app","Firebase",V_);/**
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
 */class D_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const x_=b_;function qh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw fn.create("bad-app-name",{appName:String(s)});if(n||(n=Fh()),!n)throw fn.create("no-options");const i=di.get(s);if(i){if(hi(n,i.options)&&hi(r,i.config))return i;throw fn.create("duplicate-app",{appName:s})}const a=new km(s);for(const u of Wo.values())a.addComponent(u);const l=new D_(n,r,a);return di.set(s,l),l}function N_(e=Ko){const t=di.get(e);if(!t&&e===Ko&&Fh())return qh();if(!t)throw fn.create("no-app",{appName:e});return t}function cr(e,t,n){var r;let s=(r=R_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qe.warn(l.join(" "));return}pi(new as(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const O_="firebase-heartbeat-database",k_=1,ls="firebase-heartbeat-store";let So=null;function Hh(){return So||(So=Gm(O_,k_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(e=>{throw fn.create("idb-open",{originalErrorMessage:e.message})})),So}async function M_(e){try{const n=(await Hh()).transaction(ls),r=await n.objectStore(ls).get(zh(e));return await n.done,r}catch(t){if(t instanceof vr)Qe.warn(t.message);else{const n=fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(n.message)}}}async function Dc(e,t){try{const r=(await Hh()).transaction(ls,"readwrite");await r.objectStore(ls).put(t,zh(e)),await r.done}catch(n){if(n instanceof vr)Qe.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(r.message)}}}function zh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const L_=1024,F_=30;class U_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xc();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>F_){const a=$_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qe.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xc(),{heartbeatsToSend:r,unsentEntries:s}=B_(this._heartbeatsCache.heartbeats),i=ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qe.warn(n),""}}}function xc(){return new Date().toISOString().substring(0,10)}function B_(e,t=L_){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sm()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Nc(e){return ui(JSON.stringify({version:2,heartbeats:e})).length}function $_(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function q_(e){pi(new as("platform-logger",t=>new Ym(t),"PRIVATE")),pi(new as("heartbeat",t=>new U_(t),"PRIVATE")),cr(zo,Pc,e),cr(zo,Pc,"esm2017"),cr("fire-js","")}q_("");var H_="firebase",z_="11.6.0";/**
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
 */cr(H_,z_,"app");var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dn,Kh;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,m){function E(){}E.prototype=m.prototype,_.D=m.prototype,_.prototype=new E,_.prototype.constructor=_,_.C=function(I,A,S){for(var v=Array(arguments.length-2),he=2;he<arguments.length;he++)v[he-2]=arguments[he];return m.prototype[A].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,m,E){E||(E=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=_.g[0],E=_.g[1],A=_.g[2];var S=_.g[3],v=m+(S^E&(A^S))+I[0]+3614090360&4294967295;m=E+(v<<7&4294967295|v>>>25),v=S+(A^m&(E^A))+I[1]+3905402710&4294967295,S=m+(v<<12&4294967295|v>>>20),v=A+(E^S&(m^E))+I[2]+606105819&4294967295,A=S+(v<<17&4294967295|v>>>15),v=E+(m^A&(S^m))+I[3]+3250441966&4294967295,E=A+(v<<22&4294967295|v>>>10),v=m+(S^E&(A^S))+I[4]+4118548399&4294967295,m=E+(v<<7&4294967295|v>>>25),v=S+(A^m&(E^A))+I[5]+1200080426&4294967295,S=m+(v<<12&4294967295|v>>>20),v=A+(E^S&(m^E))+I[6]+2821735955&4294967295,A=S+(v<<17&4294967295|v>>>15),v=E+(m^A&(S^m))+I[7]+4249261313&4294967295,E=A+(v<<22&4294967295|v>>>10),v=m+(S^E&(A^S))+I[8]+1770035416&4294967295,m=E+(v<<7&4294967295|v>>>25),v=S+(A^m&(E^A))+I[9]+2336552879&4294967295,S=m+(v<<12&4294967295|v>>>20),v=A+(E^S&(m^E))+I[10]+4294925233&4294967295,A=S+(v<<17&4294967295|v>>>15),v=E+(m^A&(S^m))+I[11]+2304563134&4294967295,E=A+(v<<22&4294967295|v>>>10),v=m+(S^E&(A^S))+I[12]+1804603682&4294967295,m=E+(v<<7&4294967295|v>>>25),v=S+(A^m&(E^A))+I[13]+4254626195&4294967295,S=m+(v<<12&4294967295|v>>>20),v=A+(E^S&(m^E))+I[14]+2792965006&4294967295,A=S+(v<<17&4294967295|v>>>15),v=E+(m^A&(S^m))+I[15]+1236535329&4294967295,E=A+(v<<22&4294967295|v>>>10),v=m+(A^S&(E^A))+I[1]+4129170786&4294967295,m=E+(v<<5&4294967295|v>>>27),v=S+(E^A&(m^E))+I[6]+3225465664&4294967295,S=m+(v<<9&4294967295|v>>>23),v=A+(m^E&(S^m))+I[11]+643717713&4294967295,A=S+(v<<14&4294967295|v>>>18),v=E+(S^m&(A^S))+I[0]+3921069994&4294967295,E=A+(v<<20&4294967295|v>>>12),v=m+(A^S&(E^A))+I[5]+3593408605&4294967295,m=E+(v<<5&4294967295|v>>>27),v=S+(E^A&(m^E))+I[10]+38016083&4294967295,S=m+(v<<9&4294967295|v>>>23),v=A+(m^E&(S^m))+I[15]+3634488961&4294967295,A=S+(v<<14&4294967295|v>>>18),v=E+(S^m&(A^S))+I[4]+3889429448&4294967295,E=A+(v<<20&4294967295|v>>>12),v=m+(A^S&(E^A))+I[9]+568446438&4294967295,m=E+(v<<5&4294967295|v>>>27),v=S+(E^A&(m^E))+I[14]+3275163606&4294967295,S=m+(v<<9&4294967295|v>>>23),v=A+(m^E&(S^m))+I[3]+4107603335&4294967295,A=S+(v<<14&4294967295|v>>>18),v=E+(S^m&(A^S))+I[8]+1163531501&4294967295,E=A+(v<<20&4294967295|v>>>12),v=m+(A^S&(E^A))+I[13]+2850285829&4294967295,m=E+(v<<5&4294967295|v>>>27),v=S+(E^A&(m^E))+I[2]+4243563512&4294967295,S=m+(v<<9&4294967295|v>>>23),v=A+(m^E&(S^m))+I[7]+1735328473&4294967295,A=S+(v<<14&4294967295|v>>>18),v=E+(S^m&(A^S))+I[12]+2368359562&4294967295,E=A+(v<<20&4294967295|v>>>12),v=m+(E^A^S)+I[5]+4294588738&4294967295,m=E+(v<<4&4294967295|v>>>28),v=S+(m^E^A)+I[8]+2272392833&4294967295,S=m+(v<<11&4294967295|v>>>21),v=A+(S^m^E)+I[11]+1839030562&4294967295,A=S+(v<<16&4294967295|v>>>16),v=E+(A^S^m)+I[14]+4259657740&4294967295,E=A+(v<<23&4294967295|v>>>9),v=m+(E^A^S)+I[1]+2763975236&4294967295,m=E+(v<<4&4294967295|v>>>28),v=S+(m^E^A)+I[4]+1272893353&4294967295,S=m+(v<<11&4294967295|v>>>21),v=A+(S^m^E)+I[7]+4139469664&4294967295,A=S+(v<<16&4294967295|v>>>16),v=E+(A^S^m)+I[10]+3200236656&4294967295,E=A+(v<<23&4294967295|v>>>9),v=m+(E^A^S)+I[13]+681279174&4294967295,m=E+(v<<4&4294967295|v>>>28),v=S+(m^E^A)+I[0]+3936430074&4294967295,S=m+(v<<11&4294967295|v>>>21),v=A+(S^m^E)+I[3]+3572445317&4294967295,A=S+(v<<16&4294967295|v>>>16),v=E+(A^S^m)+I[6]+76029189&4294967295,E=A+(v<<23&4294967295|v>>>9),v=m+(E^A^S)+I[9]+3654602809&4294967295,m=E+(v<<4&4294967295|v>>>28),v=S+(m^E^A)+I[12]+3873151461&4294967295,S=m+(v<<11&4294967295|v>>>21),v=A+(S^m^E)+I[15]+530742520&4294967295,A=S+(v<<16&4294967295|v>>>16),v=E+(A^S^m)+I[2]+3299628645&4294967295,E=A+(v<<23&4294967295|v>>>9),v=m+(A^(E|~S))+I[0]+4096336452&4294967295,m=E+(v<<6&4294967295|v>>>26),v=S+(E^(m|~A))+I[7]+1126891415&4294967295,S=m+(v<<10&4294967295|v>>>22),v=A+(m^(S|~E))+I[14]+2878612391&4294967295,A=S+(v<<15&4294967295|v>>>17),v=E+(S^(A|~m))+I[5]+4237533241&4294967295,E=A+(v<<21&4294967295|v>>>11),v=m+(A^(E|~S))+I[12]+1700485571&4294967295,m=E+(v<<6&4294967295|v>>>26),v=S+(E^(m|~A))+I[3]+2399980690&4294967295,S=m+(v<<10&4294967295|v>>>22),v=A+(m^(S|~E))+I[10]+4293915773&4294967295,A=S+(v<<15&4294967295|v>>>17),v=E+(S^(A|~m))+I[1]+2240044497&4294967295,E=A+(v<<21&4294967295|v>>>11),v=m+(A^(E|~S))+I[8]+1873313359&4294967295,m=E+(v<<6&4294967295|v>>>26),v=S+(E^(m|~A))+I[15]+4264355552&4294967295,S=m+(v<<10&4294967295|v>>>22),v=A+(m^(S|~E))+I[6]+2734768916&4294967295,A=S+(v<<15&4294967295|v>>>17),v=E+(S^(A|~m))+I[13]+1309151649&4294967295,E=A+(v<<21&4294967295|v>>>11),v=m+(A^(E|~S))+I[4]+4149444226&4294967295,m=E+(v<<6&4294967295|v>>>26),v=S+(E^(m|~A))+I[11]+3174756917&4294967295,S=m+(v<<10&4294967295|v>>>22),v=A+(m^(S|~E))+I[2]+718787259&4294967295,A=S+(v<<15&4294967295|v>>>17),v=E+(S^(A|~m))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+S&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var E=m-this.blockSize,I=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=E;)s(this,_,S),S+=this.blockSize;if(typeof _=="string"){for(;S<m;)if(I[A++]=_.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<m;)if(I[A++]=_[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var E=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=E&255,E/=256;for(this.u(_),_=Array(16),m=E=0;4>m;++m)for(var I=0;32>I;I+=8)_[E++]=this.g[m]>>>I&255;return _};function i(_,m){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=m(_)}function a(_,m){this.h=m;for(var E=[],I=!0,A=_.length-1;0<=A;A--){var S=_[A]|0;I&&S==m||(E[A]=S,I=!1)}this.g=E}var l={};function u(_){return-128<=_&&128>_?i(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function f(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return x(f(-_));for(var m=[],E=1,I=0;_>=E;I++)m[I]=_/E|0,E*=4294967296;return new a(m,0)}function d(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return x(d(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=f(Math.pow(m,8)),I=g,A=0;A<_.length;A+=8){var S=Math.min(8,_.length-A),v=parseInt(_.substring(A,A+S),m);8>S?(S=f(Math.pow(m,S)),I=I.j(S).add(f(v))):(I=I.j(E),I=I.add(f(v)))}return I}var g=u(0),w=u(1),R=u(16777216);e=a.prototype,e.m=function(){if(F(this))return-x(this).m();for(var _=0,m=1,E=0;E<this.g.length;E++){var I=this.i(E);_+=(0<=I?I:4294967296+I)*m,m*=4294967296}return _},e.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(F(this))return"-"+x(this).toString(_);for(var m=f(Math.pow(_,6)),E=this,I="";;){var A=K(E,m).g;E=B(E,A.j(m));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(_);if(E=A,D(E))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},e.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function F(_){return _.h==-1}e.l=function(_){return _=B(this,_),F(_)?-1:D(_)?0:1};function x(_){for(var m=_.g.length,E=[],I=0;I<m;I++)E[I]=~_.g[I];return new a(E,~_.h).add(w)}e.abs=function(){return F(this)?x(this):this},e.add=function(_){for(var m=Math.max(this.g.length,_.g.length),E=[],I=0,A=0;A<=m;A++){var S=I+(this.i(A)&65535)+(_.i(A)&65535),v=(S>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);I=v>>>16,S&=65535,v&=65535,E[A]=v<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function B(_,m){return _.add(x(m))}e.j=function(_){if(D(this)||D(_))return g;if(F(this))return F(_)?x(this).j(x(_)):x(x(this).j(_));if(F(_))return x(this.j(x(_)));if(0>this.l(R)&&0>_.l(R))return f(this.m()*_.m());for(var m=this.g.length+_.g.length,E=[],I=0;I<2*m;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<_.g.length;A++){var S=this.i(I)>>>16,v=this.i(I)&65535,he=_.i(A)>>>16,Ze=_.i(A)&65535;E[2*I+2*A]+=v*Ze,q(E,2*I+2*A),E[2*I+2*A+1]+=S*Ze,q(E,2*I+2*A+1),E[2*I+2*A+1]+=v*he,q(E,2*I+2*A+1),E[2*I+2*A+2]+=S*he,q(E,2*I+2*A+2)}for(I=0;I<m;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=m;I<2*m;I++)E[I]=0;return new a(E,0)};function q(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function Q(_,m){this.g=_,this.h=m}function K(_,m){if(D(m))throw Error("division by zero");if(D(_))return new Q(g,g);if(F(_))return m=K(x(_),m),new Q(x(m.g),x(m.h));if(F(m))return m=K(_,x(m)),new Q(x(m.g),m.h);if(30<_.g.length){if(F(_)||F(m))throw Error("slowDivide_ only works with positive integers.");for(var E=w,I=m;0>=I.l(_);)E=pt(E),I=pt(I);var A=nt(E,1),S=nt(I,1);for(I=nt(I,2),E=nt(E,2);!D(I);){var v=S.add(I);0>=v.l(_)&&(A=A.add(E),S=v),I=nt(I,1),E=nt(E,1)}return m=B(_,A.j(m)),new Q(A,m)}for(A=g;0<=_.l(m);){for(E=Math.max(1,Math.floor(_.m()/m.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=f(E),v=S.j(m);F(v)||0<v.l(_);)E-=I,S=f(E),v=S.j(m);D(S)&&(S=w),A=A.add(S),_=B(_,v)}return new Q(A,_)}e.A=function(_){return K(this,_).h},e.and=function(_){for(var m=Math.max(this.g.length,_.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)&_.i(I);return new a(E,this.h&_.h)},e.or=function(_){for(var m=Math.max(this.g.length,_.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)|_.i(I);return new a(E,this.h|_.h)},e.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)^_.i(I);return new a(E,this.h^_.h)};function pt(_){for(var m=_.g.length+1,E=[],I=0;I<m;I++)E[I]=_.i(I)<<1|_.i(I-1)>>>31;return new a(E,_.h)}function nt(_,m){var E=m>>5;m%=32;for(var I=_.g.length-E,A=[],S=0;S<I;S++)A[S]=0<m?_.i(S+E)>>>m|_.i(S+E+1)<<32-m:_.i(S+E);return new a(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,dn=a}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wh,qr,Gh,Js,Go,Qh,Xh,Yh;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qs=="object"&&qs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break t;h=h[b]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function w(o,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,w.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,C){for(var $=Array(arguments.length-2),It=2;It<arguments.length;It++)$[It-2]=arguments[It];return c.prototype[b].apply(p,$)}}function F(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function x(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,C=p.length||0;o.length=b+C;for(let $=0;$<C;$++)o[b+$]=p[$]}else o.push(p)}}class B{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var pt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function nt(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function _(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,c){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let C=0;C<E.length;C++)h=E[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function v(){var o=we;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class he{constructor(){this.h=this.g=null}add(c,h){const p=Ze.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ze=new B(()=>new jt,o=>o.reset());class jt{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Et,gt=!1,we=new he,bn=()=>{const o=l.Promise.resolve(void 0);Et=()=>{o.then(Fe)}};var Fe=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){S(h)}var c=Ze;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}gt=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var Qi=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Rn(o,c){if(Mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(pt){t:{try{K(c.nodeName);var b=!0;break t}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Sn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Rn.aa.h.call(this)}}D(Rn,Mt);var Sn={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Ar=0;function ws(o,c,h,p,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=b,this.key=++Ar,this.da=this.fa=!1}function Se(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function br(o){this.src=o,this.g={},this.h=0}br.prototype.add=function(o,c,h,p,b){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var $=T(o,c,p,b);return-1<$?(c=o[$],h||(c.fa=!1)):(c=new ws(c,this.src,C,!!p,b),c.fa=h,o.push(c)),c};function y(o,c){var h=c.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=b)&&Array.prototype.splice.call(p,b,1),C&&(Se(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function T(o,c,h,p){for(var b=0;b<o.length;++b){var C=o[b];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return b}return-1}var P="closure_lm_"+(1e6*Math.random()|0),O={};function N(o,c,h,p,b){if(Array.isArray(c)){for(var C=0;C<c.length;C++)N(o,c[C],h,p,b);return null}return h=et(h),o&&o[Ue]?o.K(c,h,f(p)?!!p.capture:!1,b):k(o,c,h,!1,p,b)}function k(o,c,h,p,b,C){if(!c)throw Error("Invalid event type");var $=f(b)?!!b.capture:!!b,It=z(o);if(It||(o[P]=It=new br(o)),h=It.add(c,h,p,$,C),h.proxy)return h;if(p=H(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Qi||(b=$),b===void 0&&(b=!1),o.addEventListener(c.toString(),p,b);else if(o.attachEvent)o.attachEvent(M(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function H(){function o(h){return c.call(o.src,o.listener,h)}const c=Y;return o}function j(o,c,h,p,b){if(Array.isArray(c))for(var C=0;C<c.length;C++)j(o,c[C],h,p,b);else p=f(p)?!!p.capture:!!p,h=et(h),o&&o[Ue]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=T(C,h,p,b),-1<h&&(Se(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=z(o))&&(c=o.g[c.toString()],o=-1,c&&(o=T(c,h,p,b)),(h=-1<o?c[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ue])y(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(M(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=z(c))?(y(h,o),h.h==0&&(h.src=null,c[P]=null)):Se(o)}}}function M(o){return o in O?O[o]:O[o]="on"+o}function Y(o,c){if(o.da)o=!0;else{c=new Rn(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,c)}return o}function z(o){return o=o[P],o instanceof br?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function et(o){return typeof o=="function"?o:(o[X]||(o[X]=function(c){return o.handleEvent(c)}),o[X])}function J(){kt.call(this),this.i=new br(this),this.M=this,this.F=null}D(J,kt),J.prototype[Ue]=!0,J.prototype.removeEventListener=function(o,c,h,p){j(this,o,c,h,p)};function at(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Mt(c,o);else if(c instanceof Mt)c.target=c.target||o;else{var b=c;c=new Mt(p,o),I(c,b)}if(b=!0,h)for(var C=h.length-1;0<=C;C--){var $=c.g=h[C];b=ht($,p,!0,c)&&b}if($=c.g=o,b=ht($,p,!0,c)&&b,b=ht($,p,!1,c)&&b,h)for(C=0;C<h.length;C++)$=c.g=h[C],b=ht($,p,!1,c)&&b}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Se(h[p]);delete o.g[c],o.h--}}this.F=null},J.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},J.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function ht(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,C=0;C<c.length;++C){var $=c[C];if($&&!$.da&&$.capture==h){var It=$.listener,Ht=$.ha||$.src;$.fa&&y(o.i,$),b=It.call(Ht,p)!==!1&&b}}return b&&!p.defaultPrevented}function Qt(o,c,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function $t(o){o.g=Qt(()=>{o.g=null,o.i&&(o.i=!1,$t(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class me extends kt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$t(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){kt.call(this),this.h=o,this.g={}}D(Xt,kt);var tn=[];function Rr(o){nt(o.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},o),o.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),Rr(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qt=l.JSON.stringify,_e=l.JSON.parse,As=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Xi(){}Xi.prototype.h=null;function ol(o){return o.h||(o.h=o.i())}function al(){}var Sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){Mt.call(this,"d")}D(Yi,Mt);function Ji(){Mt.call(this,"c")}D(Ji,Mt);var Cn={},ll=null;function bs(){return ll=ll||new J}Cn.La="serverreachability";function cl(o){Mt.call(this,Cn.La,o)}D(cl,Mt);function Cr(o){const c=bs();at(c,new cl(c))}Cn.STAT_EVENT="statevent";function ul(o,c){Mt.call(this,Cn.STAT_EVENT,o),this.stat=c}D(ul,Mt);function ie(o){const c=bs();at(c,new ul(c,o))}Cn.Ma="timingevent";function hl(o,c){Mt.call(this,Cn.Ma,o),this.size=c}D(hl,Mt);function Pr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Vr(){this.g=!0}Vr.prototype.xa=function(){this.g=!1};function Td(o,c,h,p,b,C){o.info(function(){if(o.g)if(C)for(var $="",It=C.split("&"),Ht=0;Ht<It.length;Ht++){var mt=It[Ht].split("=");if(1<mt.length){var Yt=mt[0];mt=mt[1];var Jt=Yt.split("_");$=2<=Jt.length&&Jt[1]=="type"?$+(Yt+"="+mt+"&"):$+(Yt+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+c+`
`+h+`
`+$})}function Id(o,c,h,p,b,C,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+c+`
`+h+`
`+C+" "+$})}function Wn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ad(o,h)+(p?" "+p:"")})}function wd(o,c){o.info(function(){return"TIMEOUT: "+c})}Vr.prototype.info=function(){};function Ad(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var C=b[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return qt(h)}catch{return c}}var Rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zi;function Ss(){}D(Ss,Xi),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},Zi=new Ss;function en(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var pl={},to={};function eo(o,c,h){o.L=1,o.v=Ds(Be(c)),o.m=h,o.P=!0,gl(o,null)}function gl(o,c){o.F=Date.now(),Cs(o),o.A=Be(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Pl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new dl,o.g=Wl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new me(w(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(tn[0]=b.toString()),b=tn);for(var C=0;C<b.length;C++){var $=N(h,b[C],p||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Cr(),Td(o.i,o.u,o.A,o.l,o.R,o.m)}en.prototype.ca=function(o){o=o.target;const c=this.M;c&&je(o)==3?c.j():this.Y(o)},en.prototype.Y=function(o){try{if(o==this.g)t:{const Jt=je(this.g);var c=this.g.Ba();const Xn=this.g.Z();if(!(3>Jt)&&(Jt!=3||this.g&&(this.h.h||this.g.oa()||Ml(this.g)))){this.J||Jt!=4||c==7||(c==8||0>=Xn?Cr(3):Cr(2)),no(this);var h=this.g.Z();this.X=h;e:if(ml(this)){var p=Ml(this.g);o="";var b=p.length,C=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),Dr(this);var $="";break e}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==b-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,Id(this.i,this.u,this.A,this.l,this.R,Jt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var It,Ht=this.g;if((It=Ht.g?Ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(It)){var mt=It;break e}}mt=null}if(h=mt)Wn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ro(this,h);else{this.o=!1,this.s=3,ie(12),Pn(this),Dr(this);break t}}if(this.P){h=!0;let Ae;for(;!this.J&&this.C<$.length;)if(Ae=bd(this,$),Ae==to){Jt==4&&(this.s=4,ie(14),h=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==pl){this.s=4,ie(15),Wn(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else Wn(this.i,this.l,Ae,null),ro(this,Ae);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Jt!=4||$.length!=0||this.h.h||(this.s=1,ie(16),h=!1),this.o=this.o&&h,!h)Wn(this.i,this.l,$,"[Invalid Chunked Response]"),Pn(this),Dr(this);else if(0<$.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),co(Yt),Yt.M=!0,ie(11))}}else Wn(this.i,this.l,$,null),ro(this,$);Jt==4&&Pn(this),this.o&&!this.J&&(Jt==4?ql(this.j,this):(this.o=!1,Cs(this)))}else $d(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Pn(this),Dr(this)}}}catch{}finally{}};function ml(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bd(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?to:(h=Number(c.substring(h,p)),isNaN(h)?pl:(p+=1,p+h>c.length?to:(c=c.slice(p,p+h),o.C=p+h,c)))}en.prototype.cancel=function(){this.J=!0,Pn(this)};function Cs(o){o.S=Date.now()+o.I,_l(o,o.I)}function _l(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pr(w(o.ba,o),c)}function no(o){o.B&&(l.clearTimeout(o.B),o.B=null)}en.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wd(this.i,this.A),this.L!=2&&(Cr(),ie(17)),Pn(this),this.s=2,Dr(this)):_l(this,this.S-o)};function Dr(o){o.j.G==0||o.J||ql(o.j,o)}function Pn(o){no(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Rr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ro(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||so(h.h,o))){if(!o.K&&so(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ls(h),ks(h);else break t;lo(h),ie(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Pr(w(h.Za,h),6e3));if(1>=El(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dn(h,11)}else if((o.K||h.g==o)&&Ls(h),!q(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let mt=b[c];if(h.T=mt[0],mt=mt[1],h.G==2)if(mt[0]=="c"){h.K=mt[1],h.ia=mt[2];const Yt=mt[3];Yt!=null&&(h.la=Yt,h.j.info("VER="+h.la));const Jt=mt[4];Jt!=null&&(h.Aa=Jt,h.j.info("SVER="+h.Aa));const Xn=mt[5];Xn!=null&&typeof Xn=="number"&&0<Xn&&(p=1.5*Xn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ae=o.g;if(Ae){const Us=Ae.g?Ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var C=p.h;C.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(io(C,C.h),C.h=null))}if(p.D){const uo=Ae.g?Ae.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(p.ya=uo,Rt(p.I,p.D,uo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=o;if(p.qa=Kl(p,p.J?p.ia:null,p.W),$.K){Tl(p.h,$);var It=$,Ht=p.L;Ht&&(It.I=Ht),It.B&&(no(It),Cs(It)),p.g=$}else jl(p);0<h.i.length&&Ms(h)}else mt[0]!="stop"&&mt[0]!="close"||Dn(h,7);else h.G==3&&(mt[0]=="stop"||mt[0]=="close"?mt[0]=="stop"?Dn(h,7):ao(h):mt[0]!="noop"&&h.l&&h.l.ta(mt),h.v=0)}}Cr(4)}catch{}}var Rd=class{constructor(o,c){this.g=o,this.map=c}};function yl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function El(o){return o.h?1:o.g?o.g.size:0}function so(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function io(o,c){o.g?o.g.add(c):o.h=c}function Tl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}yl.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Il(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return F(o.i)}function Sd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Cd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function wl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Cd(o),p=Sd(o),b=p.length,C=0;C<b;C++)c.call(void 0,p[C],h&&h[C],o)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var C=o[h].substring(0,p);b=o[h].substring(p+1)}else C=o[h];c(C,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vn){this.h=o.h,Ps(this,o.j),this.o=o.o,this.g=o.g,Vs(this,o.s),this.l=o.l;var c=o.i,h=new Or;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),bl(this,h),this.m=o.m}else o&&(c=String(o).match(Al))?(this.h=!1,Ps(this,c[1]||"",!0),this.o=xr(c[2]||""),this.g=xr(c[3]||"",!0),Vs(this,c[4]),this.l=xr(c[5]||"",!0),bl(this,c[6]||"",!0),this.m=xr(c[7]||"")):(this.h=!1,this.i=new Or(null,this.h))}Vn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Nr(c,Rl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Nr(c,Rl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Nr(h,h.charAt(0)=="/"?xd:Dd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Nr(h,Od)),o.join("")};function Be(o){return new Vn(o)}function Ps(o,c,h){o.j=h?xr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Vs(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function bl(o,c,h){c instanceof Or?(o.i=c,kd(o.i,o.h)):(h||(c=Nr(c,Nd)),o.i=new Or(c,o.h))}function Rt(o,c,h){o.i.set(c,h)}function Ds(o){return Rt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Vd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rl=/[#\/\?@]/g,Dd=/[#\?:]/g,xd=/[#\?]/g,Nd=/[#\?@]/g,Od=/#/g;function Or(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function nn(o){o.g||(o.g=new Map,o.h=0,o.i&&Pd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}e=Or.prototype,e.add=function(o,c){nn(this),this.i=null,o=Gn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Sl(o,c){nn(o),c=Gn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Cl(o,c){return nn(o),c=Gn(o,c),o.g.has(c)}e.forEach=function(o,c){nn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(c,b,p,this)},this)},this)},e.na=function(){nn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const b=o[p];for(let C=0;C<b.length;C++)h.push(c[p])}return h},e.V=function(o){nn(this);let c=[];if(typeof o=="string")Cl(this,o)&&(c=c.concat(this.g.get(Gn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},e.set=function(o,c){return nn(this),this.i=null,o=Gn(this,o),Cl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Pl(o,c,h){Sl(o,c),0<h.length&&(o.i=null,o.g.set(Gn(o,c),F(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const C=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var b=C;$[p]!==""&&(b+="="+encodeURIComponent(String($[p]))),o.push(b)}}return this.i=o.join("&")};function Gn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function kd(o,c){c&&!o.j&&(nn(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Sl(this,p),Pl(this,b,h))},o)),o.j=c}function Md(o,c){const h=new Vr;if(l.Image){const p=new Image;p.onload=R(rn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(rn,h,"TestLoadImage: error",!1,c,p),p.onabort=R(rn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(rn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Ld(o,c){const h=new Vr,p=new AbortController,b=setTimeout(()=>{p.abort(),rn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(b),C.ok?rn(h,"TestPingServer: ok",!0,c):rn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),rn(h,"TestPingServer: error",!1,c)})}function rn(o,c,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Fd(){this.g=new As}function Ud(o,c,h){const p=h||"";try{wl(o,function(b,C){let $=b;f(b)&&($=qt(b)),c.push(p+C+"="+encodeURIComponent($))})}catch(b){throw c.push(p+"type="+encodeURIComponent("_badmap")),b}}function xs(o){this.l=o.Ub||null,this.j=o.eb||!1}D(xs,Xi),xs.prototype.g=function(){return new Ns(this.l,this.j)},xs.prototype.i=function(o){return function(){return o}}({});function Ns(o,c){J.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ns,J),e=Ns.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Mr(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Mr(this)),this.g&&(this.readyState=3,Mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?kr(this):Mr(this),this.readyState==3&&Vl(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},e.Qa=function(o){this.g&&(this.response=o,kr(this))},e.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Mr(o)}e.setRequestHeader=function(o,c){this.u.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dl(o){let c="";return nt(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function oo(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Dl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Rt(o,c,h))}function Pt(o){J.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Pt,J);var Bd=/^https?$/i,jd=["POST","PUT"];e=Pt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zi.g(),this.v=this.o?ol(this.o):ol(Zi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){xl(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jd,c,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of h)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){xl(this,C)}};function xl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Nl(o),Os(o)}function Nl(o){o.A||(o.A=!0,at(o,"complete"),at(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,at(this,"complete"),at(this,"abort"),Os(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ol(this):this.bb())},e.bb=function(){Ol(this)};function Ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||je(o)!=4||o.Z()!=2)){if(o.u&&je(o)==4)Qt(o.Ea,0,o);else if(at(o,"readystatechange"),je(o)==4){o.h=!1;try{const $=o.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=$===0){var b=String(o.D).match(Al)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Bd.test(b?b.toLowerCase():"")}h=p}if(h)at(o,"complete"),at(o,"success");else{o.m=6;try{var C=2<je(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Nl(o)}}finally{Os(o)}}}}function Os(o,c){if(o.g){kl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||at(o,"ready");try{h.onreadystatechange=p}catch{}}}function kl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function je(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_e(c)}};function Ml(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $d(o){const c={};o=(o.g&&2<=je(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(q(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[b]||[];c[b]=C,C.push(h)}_(c,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ll(o){this.Aa=0,this.i=[],this.j=new Vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lr("baseRetryDelayMs",5e3,o),this.cb=Lr("retryDelaySeedMs",1e4,o),this.Wa=Lr("forwardChannelMaxRetries",2,o),this.wa=Lr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(o&&o.concurrentRequestLimit),this.Da=new Fd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Ll.prototype,e.la=8,e.G=1,e.connect=function(o,c,h,p){ie(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Kl(this,null,this.W),Ms(this)};function ao(o){if(Fl(o),o.G==3){var c=o.U++,h=Be(o.I);if(Rt(h,"SID",o.K),Rt(h,"RID",c),Rt(h,"TYPE","terminate"),Fr(o,h),c=new en(o,o.j,c),c.L=2,c.v=Ds(Be(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Wl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Cs(c)}zl(o)}function ks(o){o.g&&(co(o),o.g.cancel(),o.g=null)}function Fl(o){ks(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ms(o){if(!vl(o.h)&&!o.s){o.s=!0;var c=o.Ga;Et||bn(),gt||(Et(),gt=!0),we.add(c,o),o.B=0}}function qd(o,c){return El(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pr(w(o.Ga,o,c),Hl(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new en(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(b.H=C,C=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Bl(this,b,c),h=Be(this.I),Rt(h,"RID",o),Rt(h,"CVER",22),this.D&&Rt(h,"X-HTTP-Session-Id",this.D),Fr(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(Dl(C)))+"&"+c:this.m&&oo(h,this.m,C)),io(this.h,b),this.Ua&&Rt(h,"TYPE","init"),this.P?(Rt(h,"$req",c),Rt(h,"SID","null"),b.T=!0,eo(b,h,null)):eo(b,h,c),this.G=2}}else this.G==3&&(o?Ul(this,o):this.i.length==0||vl(this.h)||Ul(this))};function Ul(o,c){var h;c?h=c.l:h=o.U++;const p=Be(o.I);Rt(p,"SID",o.K),Rt(p,"RID",h),Rt(p,"AID",o.T),Fr(o,p),o.m&&o.o&&oo(p,o.m,o.o),h=new en(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Bl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),io(o.h,h),eo(h,p,c)}function Fr(o,c){o.H&&nt(o.H,function(h,p){Rt(c,p,h)}),o.l&&wl({},function(h,p){Rt(c,p,h)})}function Bl(o,c,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;t:{var b=o.i;let C=-1;for(;;){const $=["count="+h];C==-1?0<h?(C=b[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let It=!0;for(let Ht=0;Ht<h;Ht++){let mt=b[Ht].g;const Yt=b[Ht].map;if(mt-=C,0>mt)C=Math.max(0,b[Ht].g-100),It=!1;else try{Ud(Yt,$,"req"+mt+"_")}catch{p&&p(Yt)}}if(It){p=$.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,p}function jl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Et||bn(),gt||(Et(),gt=!0),we.add(c,o),o.v=0}}function lo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pr(w(o.Fa,o),Hl(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pr(w(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),ks(this),$l(this))};function co(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function $l(o){o.g=new en(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Be(o.qa);Rt(c,"RID","rpc"),Rt(c,"SID",o.K),Rt(c,"AID",o.T),Rt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Rt(c,"TO",o.ja),Rt(c,"TYPE","xmlhttp"),Fr(o,c),o.m&&o.o&&oo(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ds(Be(c)),h.m=null,h.P=!0,gl(h,o)}e.Za=function(){this.C!=null&&(this.C=null,ks(this),lo(this),ie(19))};function Ls(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ql(o,c){var h=null;if(o.g==c){Ls(o),co(o),o.g=null;var p=2}else if(so(o.h,c))h=c.D,Tl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;p=bs(),at(p,new hl(p,h)),Ms(o)}else jl(o);else if(b=c.s,b==3||b==0&&0<c.X||!(p==1&&qd(o,c)||p==2&&lo(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:Dn(o,5);break;case 4:Dn(o,10);break;case 3:Dn(o,6);break;default:Dn(o,2)}}}function Hl(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Dn(o,c){if(o.j.info("Error code "+c),c==2){var h=w(o.fb,o),p=o.Xa;const b=!p;p=new Vn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ps(p,"https"),Ds(p),b?Md(p.toString(),h):Ld(p.toString(),h)}else ie(2);o.G=0,o.l&&o.l.sa(c),zl(o),Fl(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function zl(o){if(o.G=0,o.ka=[],o.l){const c=Il(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,F(o.i),o.i.length=0),o.l.ra()}}function Kl(o,c,h){var p=h instanceof Vn?Be(h):new Vn(h);if(p.g!="")c&&(p.g=c+"."+p.g),Vs(p,p.s);else{var b=l.location;p=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var C=new Vn(null);p&&Ps(C,p),c&&(C.g=c),b&&Vs(C,b),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&Rt(p,h,c),Rt(p,"VER",o.la),Fr(o,p),p}function Wl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Pt(new xs({eb:h})):new Pt(o.pa),c.Ha(o.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}e=Gl.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Fs(){}Fs.prototype.g=function(o,c){return new fe(o,c)};function fe(o,c){J.call(this),this.g=new Ll(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!q(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Qn(this)}D(fe,J),fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fe.prototype.close=function(){ao(this.g)},fe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qt(o),o=h);c.i.push(new Rd(c.Ya++,o)),c.G==3&&Ms(c)},fe.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,fe.aa.N.call(this)};function Ql(o){Yi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(Ql,Yi);function Xl(){Ji.call(this),this.status=1}D(Xl,Ji);function Qn(o){this.g=o}D(Qn,Gl),Qn.prototype.ua=function(){at(this.g,"a")},Qn.prototype.ta=function(o){at(this.g,new Ql(o))},Qn.prototype.sa=function(o){at(this.g,new Xl)},Qn.prototype.ra=function(){at(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,fe.prototype.send=fe.prototype.o,fe.prototype.open=fe.prototype.m,fe.prototype.close=fe.prototype.close,Yh=function(){return new Fs},Xh=function(){return bs()},Qh=Cn,Go={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,Js=Rs,fl.COMPLETE="complete",Gh=fl,al.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",J.prototype.listen=J.prototype.K,qr=al,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,Wh=Pt}).apply(typeof qs<"u"?qs:typeof self<"u"?self:typeof window<"u"?window:{});const kc="@firebase/firestore",Mc="4.7.10";/**
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
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
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
 */let Er="11.5.0";/**
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
 */const Bn=new Bh("@firebase/firestore");function Zn(){return Bn.logLevel}function G(e,...t){if(Bn.logLevel<=dt.DEBUG){const n=t.map(Ca);Bn.debug(`Firestore (${Er}): ${e}`,...n)}}function Xe(e,...t){if(Bn.logLevel<=dt.ERROR){const n=t.map(Ca);Bn.error(`Firestore (${Er}): ${e}`,...n)}}function fr(e,...t){if(Bn.logLevel<=dt.WARN){const n=t.map(Ca);Bn.warn(`Firestore (${Er}): ${e}`,...n)}}function Ca(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function rt(e="Unexpected state"){const t=`FIRESTORE (${Er}) INTERNAL ASSERTION FAILED: `+e;throw Xe(t),new Error(t)}function vt(e,t){e||rt()}function it(e,t){return e}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends vr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Jh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class K_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class W_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G_{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){vt(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string"),new Jh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string"),new te(t)}}class Q_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class X_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Q_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y_{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,P_(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){vt(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Lc(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(vt(typeof n.token=="string"),this.R=n.token,new Lc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function J_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Zh(){return new TextEncoder}/**
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
 */class tf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=J_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function ct(e,t){return e<t?-1:e>t?1:0}function Qo(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return ct(r,s);{const i=Zh(),a=Z_(i.encode(Fc(e,n)),i.encode(Fc(t,n)));return a!==0?a:ct(r,s)}}n+=r>65535?2:1}return ct(e.length,t.length)}function Fc(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Z_(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ct(e[n],t[n]);return ct(e.length,t.length)}function dr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const Uc=-62135596800,Bc=1e6;class Ft{static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Bc);return new Ft(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Uc)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bc}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Uc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class st{static fromTimestamp(t){return new st(t)}static min(){return new st(new Ft(0,0))}static max(){return new st(new Ft(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jc="__name__";class Ve{constructor(t,n,r){n===void 0?n=0:n>t.length&&rt(),r===void 0?r=t.length-n:r>t.length-n&&rt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ve.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ve?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Ve.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return ct(t.length,n.length)}static compareSegments(t,n){const r=Ve.isNumericId(t),s=Ve.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ve.extractNumericId(t).compare(Ve.extractNumericId(n)):Qo(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return dn.fromString(t.substring(4,t.length-2))}}class Dt extends Ve{construct(t,n,r){return new Dt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Dt(n)}static emptyPath(){return new Dt([])}}const ty=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Ve{construct(t,n,r){return new Wt(t,n,r)}static isValidIdentifier(t){return ty.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jc}static keyField(){return new Wt([jc])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(Dt.fromString(t))}static fromName(t){return new tt(Dt.fromString(t).popFirst(5))}static empty(){return new tt(Dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Dt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new Dt(t.slice()))}}/**
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
 */const cs=-1;function ey(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=st.fromTimestamp(r===1e9?new Ft(n+1,0):new Ft(n,r));return new mn(s,tt.empty(),t)}function ny(e){return new mn(e.readTime,e.key,cs)}class mn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(st.min(),tt.empty(),cs)}static max(){return new mn(st.max(),tt.empty(),cs)}}function ry(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=tt.comparator(e.documentKey,t.documentKey),n!==0?n:ct(e.largestBatchId,t.largestBatchId))}/**
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
 */const sy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Tr(e){if(e.code!==L.FAILED_PRECONDITION||e.message!==sy)throw e;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&rt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):V.reject(n)}static resolve(t){return new V((n,r)=>{n(t)})}static reject(t){return new V((n,r)=>{r(t)})}static waitFor(t){return new V((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new V((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new V((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function oy(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ir(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Li{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Li.ae=-1;/**
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
 */const Pa=-1;function Fi(e){return e==null}function gi(e){return e===0&&1/e==-1/0}function ay(e){return typeof e=="number"&&Number.isInteger(e)&&!gi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const ef="";function ly(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=$c(t)),t=cy(e.get(n),t);return $c(t)}function cy(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case ef:n+="";break;default:n+=i}}return n}function $c(e){return e+ef+""}/**
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
 */function qc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ct{constructor(t,n){this.comparator=t,this.root=n||Kt.EMPTY}insert(t,n){return new Ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hs(this.root,t,this.comparator,!0)}}class Hs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Kt.RED,this.left=s??Kt.EMPTY,this.right=i??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Kt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rt();const t=this.left.check();if(t!==this.right.check())throw rt();return t+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw rt()}get value(){throw rt()}get color(){throw rt()}get left(){throw rt()}get right(){throw rt()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Kt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hc(this.data.getIterator())}getIteratorFrom(t){return new Hc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ut(this.comparator);return n.data=t,n}}class Hc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(t){this.fields=t,t.sort(Wt.comparator)}static empty(){return new be([])}unionWith(t){let n=new Ut(Wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new be(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return dr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rf("Invalid base64 string: "+i):i}}(t);return new Gt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Gt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(e){if(vt(!!e),typeof e=="string"){let t=0;const n=uy.exec(e);if(vt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xt(e.seconds),nanos:xt(e.nanos)}}function xt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function yn(e){return typeof e=="string"?Gt.fromBase64String(e):Gt.fromUint8Array(e)}/**
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
 */const sf="server_timestamp",of="__type__",af="__previous_value__",lf="__local_write_time__";function Va(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[of])===null||n===void 0?void 0:n.stringValue)===sf}function Ui(e){const t=e.mapValue.fields[af];return Va(t)?Ui(t):t}function us(e){const t=_n(e.mapValue.fields[lf].timestampValue);return new Ft(t.seconds,t.nanos)}/**
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
 */class hy{constructor(t,n,r,s,i,a,l,u,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}const mi="(default)";class hs{constructor(t,n){this.projectId=t,this.database=n||mi}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database===mi}isEqual(t){return t instanceof hs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const cf="__type__",fy="__max__",zs={mapValue:{}},uf="__vector__",_i="value";function vn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Va(e)?4:py(e)?9007199254740991:dy(e)?10:11:rt()}function Me(e,t){if(e===t)return!0;const n=vn(e);if(n!==vn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return us(e).isEqual(us(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=_n(s.timestampValue),l=_n(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return yn(s.bytesValue).isEqual(yn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return xt(s.geoPointValue.latitude)===xt(i.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xt(s.integerValue)===xt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xt(s.doubleValue),l=xt(i.doubleValue);return a===l?gi(a)===gi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return dr(e.arrayValue.values||[],t.arrayValue.values||[],Me);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(qc(a)!==qc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Me(a[u],l[u])))return!1;return!0}(e,t);default:return rt()}}function fs(e,t){return(e.values||[]).find(n=>Me(n,t))!==void 0}function pr(e,t){if(e===t)return 0;const n=vn(e),r=vn(t);if(n!==r)return ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=xt(i.integerValue||i.doubleValue),u=xt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return zc(e.timestampValue,t.timestampValue);case 4:return zc(us(e),us(t));case 5:return Qo(e.stringValue,t.stringValue);case 6:return function(i,a){const l=yn(i),u=yn(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=ct(l[f],u[f]);if(d!==0)return d}return ct(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ct(xt(i.latitude),xt(a.latitude));return l!==0?l:ct(xt(i.longitude),xt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Kc(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,u,f,d;const g=i.fields||{},w=a.fields||{},R=(l=g[_i])===null||l===void 0?void 0:l.arrayValue,D=(u=w[_i])===null||u===void 0?void 0:u.arrayValue,F=ct(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0);return F!==0?F:Kc(R,D)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===zs.mapValue&&a===zs.mapValue)return 0;if(i===zs.mapValue)return 1;if(a===zs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const w=Qo(u[g],d[g]);if(w!==0)return w;const R=pr(l[u[g]],f[d[g]]);if(R!==0)return R}return ct(u.length,d.length)}(e.mapValue,t.mapValue);default:throw rt()}}function zc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ct(e,t);const n=_n(e),r=_n(t),s=ct(n.seconds,r.seconds);return s!==0?s:ct(n.nanos,r.nanos)}function Kc(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=pr(n[s],r[s]);if(i)return i}return ct(n.length,r.length)}function gr(e){return Xo(e)}function Xo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=_n(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return yn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return tt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Xo(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xo(n.fields[a])}`;return s+"}"}(e.mapValue):rt()}function Zs(e){switch(vn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ui(e);return t?16+Zs(t):16;case 5:return 2*e.stringValue.length;case 6:return yn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Zs(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return qn(r.fields,(i,a)=>{s+=i.length+Zs(a)}),s}(e.mapValue);default:throw rt()}}function Yo(e){return!!e&&"integerValue"in e}function Da(e){return!!e&&"arrayValue"in e}function Wc(e){return!!e&&"nullValue"in e}function Gc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ti(e){return!!e&&"mapValue"in e}function dy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[cf])===null||n===void 0?void 0:n.stringValue)===uf}function Jr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Jr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Jr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function py(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===fy}/**
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
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ti(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jr(n)}setAll(t){let n=Wt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Jr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ti(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Me(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){qn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ve(Jr(this.value))}}function hf(e){const t=[];return qn(e.fields,(n,r)=>{const s=new Wt([n]);if(ti(r)){const i=hf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new be(t)}/**
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
 */class re{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new re(t,0,st.min(),st.min(),st.min(),ve.empty(),0)}static newFoundDocument(t,n,r,s){return new re(t,1,n,st.min(),r,s,0)}static newNoDocument(t,n){return new re(t,2,n,st.min(),st.min(),ve.empty(),0)}static newUnknownDocument(t,n){return new re(t,3,n,st.min(),st.min(),ve.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof re&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yi{constructor(t,n){this.position=t,this.inclusive=n}}function Qc(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=tt.comparator(tt.fromName(a.referenceValue),n.key):r=pr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Me(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class vi{constructor(t,n="asc"){this.field=t,this.dir=n}}function gy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ff{}class Lt extends ff{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new _y(t,n,r):n==="array-contains"?new Ey(t,r):n==="in"?new Ty(t,r):n==="not-in"?new Iy(t,r):n==="array-contains-any"?new wy(t,r):new Lt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new yy(t,r):new vy(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pr(n,this.value)):n!==null&&vn(this.value)===vn(n)&&this.matchesComparison(pr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return rt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Le extends ff{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Le(t,n)}matches(t){return df(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function df(e){return e.op==="and"}function pf(e){return my(e)&&df(e)}function my(e){for(const t of e.filters)if(t instanceof Le)return!1;return!0}function Jo(e){if(e instanceof Lt)return e.field.canonicalString()+e.op.toString()+gr(e.value);if(pf(e))return e.filters.map(t=>Jo(t)).join(",");{const t=e.filters.map(n=>Jo(n)).join(",");return`${e.op}(${t})`}}function gf(e,t){return e instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.field.isEqual(s.field)&&Me(r.value,s.value)}(e,t):e instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&gf(a,s.filters[l]),!0):!1}(e,t):void rt()}function mf(e){return e instanceof Lt?function(n){return`${n.field.canonicalString()} ${n.op} ${gr(n.value)}`}(e):e instanceof Le?function(n){return n.op.toString()+" {"+n.getFilters().map(mf).join(" ,")+"}"}(e):"Filter"}class _y extends Lt{constructor(t,n,r){super(t,n,r),this.key=tt.fromName(r.referenceValue)}matches(t){const n=tt.comparator(t.key,this.key);return this.matchesComparison(n)}}class yy extends Lt{constructor(t,n){super(t,"in",n),this.keys=_f("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vy extends Lt{constructor(t,n){super(t,"not-in",n),this.keys=_f("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function _f(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>tt.fromName(r.referenceValue))}class Ey extends Lt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Da(n)&&fs(n.arrayValue,this.value)}}class Ty extends Lt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fs(this.value.arrayValue,n)}}class Iy extends Lt{constructor(t,n){super(t,"not-in",n)}matches(t){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fs(this.value.arrayValue,n)}}class wy extends Lt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Da(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fs(this.value.arrayValue,r))}}/**
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
 */class Ay{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Yc(e,t=null,n=[],r=[],s=null,i=null,a=null){return new Ay(e,t,n,r,s,i,a)}function xa(e){const t=it(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Jo(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>gr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>gr(r)).join(",")),t.le=n}return t.le}function Na(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!gf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xc(e.startAt,t.startAt)&&Xc(e.endAt,t.endAt)}function Zo(e){return tt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Bi{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function by(e,t,n,r,s,i,a,l){return new Bi(e,t,n,r,s,i,a,l)}function Oa(e){return new Bi(e)}function Jc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ry(e){return e.collectionGroup!==null}function Zr(e){const t=it(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ut(Wt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new vi(i,r))}),n.has(Wt.keyField().canonicalString())||t.he.push(new vi(Wt.keyField(),r))}return t.he}function Ne(e){const t=it(e);return t.Pe||(t.Pe=Sy(t,Zr(e))),t.Pe}function Sy(e,t){if(e.limitType==="F")return Yc(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vi(s.field,i)});const n=e.endAt?new yi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yi(e.startAt.position,e.startAt.inclusive):null;return Yc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ta(e,t,n){return new Bi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ji(e,t){return Na(Ne(e),Ne(t))&&e.limitType===t.limitType}function yf(e){return`${xa(Ne(e))}|lt:${e.limitType}`}function tr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mf(s)).join(", ")}]`),Fi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gr(s)).join(",")),`Target(${r})`}(Ne(e))}; limitType=${e.limitType})`}function $i(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):tt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=Qc(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,Zr(r),s)||r.endAt&&!function(a,l,u){const f=Qc(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,Zr(r),s))}(e,t)}function Cy(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vf(e){return(t,n)=>{let r=!1;for(const s of Zr(e)){const i=Py(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Py(e,t,n){const r=e.field.isKeyField()?tt.comparator(t.key,n.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?pr(u,f):rt()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return rt()}}/**
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
 */class Hn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return nf(this.inner)}size(){return this.innerSize}}/**
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
 */const Vy=new Ct(tt.comparator);function Ye(){return Vy}const Ef=new Ct(tt.comparator);function Hr(...e){let t=Ef;for(const n of e)t=t.insert(n.key,n);return t}function Tf(e){let t=Ef;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Mn(){return ts()}function If(){return ts()}function ts(){return new Hn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Dy=new Ct(tt.comparator),xy=new Ut(tt.comparator);function ut(...e){let t=xy;for(const n of e)t=t.add(n);return t}const Ny=new Ut(ct);function Oy(){return Ny}/**
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
 */function ka(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(t)?"-0":t}}function wf(e){return{integerValue:""+e}}function ky(e,t){return ay(t)?wf(t):ka(e,t)}/**
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
 */class qi{constructor(){this._=void 0}}function My(e,t,n){return e instanceof Ei?function(s,i){const a={fields:{[of]:{stringValue:sf},[lf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Va(i)&&(i=Ui(i)),i&&(a.fields[af]=i),{mapValue:a}}(n,t):e instanceof ds?bf(e,t):e instanceof ps?Rf(e,t):function(s,i){const a=Af(s,i),l=Zc(a)+Zc(s.Ie);return Yo(a)&&Yo(s.Ie)?wf(l):ka(s.serializer,l)}(e,t)}function Ly(e,t,n){return e instanceof ds?bf(e,t):e instanceof ps?Rf(e,t):n}function Af(e,t){return e instanceof Ti?function(r){return Yo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ei extends qi{}class ds extends qi{constructor(t){super(),this.elements=t}}function bf(e,t){const n=Sf(t);for(const r of e.elements)n.some(s=>Me(s,r))||n.push(r);return{arrayValue:{values:n}}}class ps extends qi{constructor(t){super(),this.elements=t}}function Rf(e,t){let n=Sf(t);for(const r of e.elements)n=n.filter(s=>!Me(s,r));return{arrayValue:{values:n}}}class Ti extends qi{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Zc(e){return xt(e.integerValue||e.doubleValue)}function Sf(e){return Da(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Fy(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof ds&&s instanceof ds||r instanceof ps&&s instanceof ps?dr(r.elements,s.elements,Me):r instanceof Ti&&s instanceof Ti?Me(r.Ie,s.Ie):r instanceof Ei&&s instanceof Ei}(e.transform,t.transform)}class Uy{constructor(t,n){this.version=t,this.transformResults=n}}class Ge{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ge}static exists(t){return new Ge(void 0,t)}static updateTime(t){return new Ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ei(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hi{}function Cf(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Vf(e.key,Ge.none()):new vs(e.key,e.data,Ge.none());{const n=e.data,r=ve.empty();let s=new Ut(Wt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new zn(e.key,r,new be(s.toArray()),Ge.none())}}function By(e,t,n){e instanceof vs?function(s,i,a){const l=s.value.clone(),u=eu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof zn?function(s,i,a){if(!ei(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=eu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Pf(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function es(e,t,n,r){return e instanceof vs?function(i,a,l,u){if(!ei(i.precondition,a))return l;const f=i.value.clone(),d=nu(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof zn?function(i,a,l,u){if(!ei(i.precondition,a))return l;const f=nu(i.fieldTransforms,u,a),d=a.data;return d.setAll(Pf(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,l){return ei(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function jy(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Af(r.transform,s||null);i!=null&&(n===null&&(n=ve.empty()),n.set(r.field,i))}return n||null}function tu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(i,a)=>Fy(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class vs extends Hi{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zn extends Hi{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function eu(e,t,n){const r=new Map;vt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Ly(a,l,n[s]))}return r}function nu(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,My(i,a,t))}return r}class Vf extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qy{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&By(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=es(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=es(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=If();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Cf(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(st.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ut())}isEqual(t){return this.batchId===t.batchId&&dr(this.mutations,t.mutations,(n,r)=>tu(n,r))&&dr(this.baseMutations,t.baseMutations,(n,r)=>tu(n,r))}}class Ma{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){vt(t.mutations.length===r.length);let s=function(){return Dy}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ma(t,n,r,s)}}/**
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
 */class Hy{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class zy{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Nt,ft;function Ky(e){switch(e){case L.OK:return rt();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return rt()}}function Df(e){if(e===void 0)return Xe("GRPC error has no .code"),L.UNKNOWN;switch(e){case Nt.OK:return L.OK;case Nt.CANCELLED:return L.CANCELLED;case Nt.UNKNOWN:return L.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return L.INTERNAL;case Nt.UNAVAILABLE:return L.UNAVAILABLE;case Nt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Nt.NOT_FOUND:return L.NOT_FOUND;case Nt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Nt.ABORTED:return L.ABORTED;case Nt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Nt.DATA_LOSS:return L.DATA_LOSS;default:return rt()}}(ft=Nt||(Nt={}))[ft.OK=0]="OK",ft[ft.CANCELLED=1]="CANCELLED",ft[ft.UNKNOWN=2]="UNKNOWN",ft[ft.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ft[ft.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ft[ft.NOT_FOUND=5]="NOT_FOUND",ft[ft.ALREADY_EXISTS=6]="ALREADY_EXISTS",ft[ft.PERMISSION_DENIED=7]="PERMISSION_DENIED",ft[ft.UNAUTHENTICATED=16]="UNAUTHENTICATED",ft[ft.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ft[ft.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ft[ft.ABORTED=10]="ABORTED",ft[ft.OUT_OF_RANGE=11]="OUT_OF_RANGE",ft[ft.UNIMPLEMENTED=12]="UNIMPLEMENTED",ft[ft.INTERNAL=13]="INTERNAL",ft[ft.UNAVAILABLE=14]="UNAVAILABLE",ft[ft.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Wy=new dn([4294967295,4294967295],0);function ru(e){const t=Zh().encode(e),n=new Kh;return n.update(t),new Uint8Array(n.digest())}function su(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new dn([n,r],0),new dn([s,i],0)]}class La{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(r<0)throw new zr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=dn.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(dn.fromNumber(r)));return s.compare(Wy)===1&&(s=new dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=ru(t),[r,s]=su(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new La(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=ru(t),[r,s]=su(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zi{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Es.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new zi(st.min(),s,new Ct(ct),Ye(),ut())}}class Es{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Es(r,n,ut(),ut(),ut())}}/**
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
 */class ni{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class xf{constructor(t,n){this.targetId=t,this.ge=n}}class Nf{constructor(t,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class iu{constructor(){this.pe=0,this.ye=ou(),this.we=Gt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=ut(),n=ut(),r=ut();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:rt()}}),new Es(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=ou()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,vt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Gy{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ye(),this.$e=Ks(),this.Ue=Ks(),this.Ke=new Ct(ct)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:rt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Zo(i))if(r===0){const a=new tt(i.path);this.ze(n,a,re.newNoDocument(a,st.min()))}else vt(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),u=l?this.nt(l,t,a):1;if(u!==0){this.Ye(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,f)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=yn(r).toUint8Array()}catch(u){if(u instanceof rf)return fr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new La(a,s,i)}catch(u){return fr(u instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Zo(l.target)){const u=new tt(l.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,re.newNoDocument(u,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=ut();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Xe(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new zi(t,n,this.Ke,this.Qe,r);return this.Qe=Ye(),this.$e=Ks(),this.Ue=Ks(),this.Ke=new Ct(ct),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new iu,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Ut(ct),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ut(ct),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||G("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new iu),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Ks(){return new Ct(tt.comparator)}function ou(){return new Ct(tt.comparator)}const Qy={asc:"ASCENDING",desc:"DESCENDING"},Xy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yy={and:"AND",or:"OR"};class Jy{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ea(e,t){return e.useProto3Json||Fi(t)?t:{value:t}}function Ii(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Of(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Zy(e,t){return Ii(e,t.toTimestamp())}function Oe(e){return vt(!!e),st.fromTimestamp(function(n){const r=_n(n);return new Ft(r.seconds,r.nanos)}(e))}function Fa(e,t){return na(e,t).canonicalString()}function na(e,t){const n=function(s){return new Dt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function kf(e){const t=Dt.fromString(e);return vt(Bf(t)),t}function ra(e,t){return Fa(e.databaseId,t.path)}function Co(e,t){const n=kf(t);if(n.get(1)!==e.databaseId.projectId)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new tt(Lf(n))}function Mf(e,t){return Fa(e.databaseId,t)}function tv(e){const t=kf(e);return t.length===4?Dt.emptyPath():Lf(t)}function sa(e){return new Dt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lf(e){return vt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function au(e,t,n){return{name:ra(e,t),fields:n.value.mapValue.fields}}function ev(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:rt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(vt(d===void 0||typeof d=="string"),Gt.fromBase64String(d||"")):(vt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Gt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?L.UNKNOWN:Df(f.code);return new Z(d,f.message||"")}(a);n=new Nf(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Co(e,r.document.name),i=Oe(r.document.updateTime),a=r.document.createTime?Oe(r.document.createTime):st.min(),l=new ve({mapValue:{fields:r.document.fields}}),u=re.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new ni(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Co(e,r.document),i=r.readTime?Oe(r.readTime):st.min(),a=re.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ni([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Co(e,r.document),i=r.removedTargetIds||[];n=new ni([],i,s,null)}else{if(!("filter"in t))return rt();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new zy(s,i),l=r.targetId;n=new xf(l,a)}}return n}function nv(e,t){let n;if(t instanceof vs)n={update:au(e,t.key,t.value)};else if(t instanceof Vf)n={delete:ra(e,t.key)};else if(t instanceof zn)n={update:au(e,t.key,t.data),updateMask:hv(t.fieldMask)};else{if(!(t instanceof $y))return rt();n={verify:ra(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ds)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ps)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw rt()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:rt()}(e,t.precondition)),n}function rv(e,t){return e&&e.length>0?(vt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?Oe(s.updateTime):Oe(i);return a.isEqual(st.min())&&(a=Oe(i)),new Uy(a,s.transformResults||[])}(n,t))):[]}function sv(e,t){return{documents:[Mf(e,t.path)]}}function iv(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mf(e,s);const i=function(f){if(f.length!==0)return Uf(Le.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(w){return{field:er(w.field),direction:lv(w.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=ea(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:n,parent:s}}function ov(e){let t=tv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){vt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const w=Ff(g);return w instanceof Le&&pf(w)?w.getFilters():[w]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(w=>function(D){return new vi(nr(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,Fi(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(g){const w=!!g.before,R=g.values||[];return new yi(R,w)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const w=!g.before,R=g.values||[];return new yi(R,w)}(n.endAt)),by(t,s,a,i,l,"F",u,f)}function av(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return rt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ff(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=nr(n.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=nr(n.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(n.unaryFilter.field);return Lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nr(n.unaryFilter.field);return Lt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return rt()}}(e):e.fieldFilter!==void 0?function(n){return Lt.create(nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rt()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Le.create(n.compositeFilter.filters.map(r=>Ff(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return rt()}}(n.compositeFilter.op))}(e):rt()}function lv(e){return Qy[e]}function cv(e){return Xy[e]}function uv(e){return Yy[e]}function er(e){return{fieldPath:e.canonicalString()}}function nr(e){return Wt.fromServerFormat(e.fieldPath)}function Uf(e){return e instanceof Lt?function(n){if(n.op==="=="){if(Gc(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NAN"}};if(Wc(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gc(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NOT_NAN"}};if(Wc(n.value))return{unaryFilter:{field:er(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(n.field),op:cv(n.op),value:n.value}}}(e):e instanceof Le?function(n){const r=n.getFilters().map(s=>Uf(s));return r.length===1?r[0]:{compositeFilter:{op:uv(n.op),filters:r}}}(e):rt()}function hv(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Bf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class cn{constructor(t,n,r,s,i=st.min(),a=st.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new cn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class fv{constructor(t){this.Tt=t}}function dv(e){const t=ov({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ta(t,t.limit,"L"):t}/**
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
 */class pv{constructor(){this.Tn=new gv}addToCollectionParentIndex(t,n){return this.Tn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(mn.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(mn.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class gv{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ut(Dt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(Dt.comparator)).toArray()}}/**
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
 */const lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jf=41943040;class ue{static withCacheSize(t){return new ue(t,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ue.DEFAULT_COLLECTION_PERCENTILE=10,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ue.DEFAULT=new ue(jf,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ue.DISABLED=new ue(-1,0,0);/**
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
 */class mr{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new mr(0)}static Kn(){return new mr(-1)}}/**
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
 */const cu="LruGarbageCollector",mv=1048576;function uu([e,t],[n,r]){const s=ct(e,n);return s===0?ct(t,r):s}class _v{constructor(t){this.Hn=t,this.buffer=new Ut(uu),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();uu(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yv{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){G(cu,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ir(n)?G(cu,"Ignoring IndexedDB error during garbage collection: ",n):await Tr(n)}await this.er(3e5)})}}class vv{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return V.resolve(Li.ae);const r=new _v(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(lu)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lu):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(t,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(f=Date.now(),Zn()<=dt.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Ev(e,t){return new vv(e,t)}/**
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
 */class Tv{constructor(){this.changes=new Hn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,re.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Iv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class wv{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&es(r.mutation,s,be.empty(),Ft.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ut()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ut()){const s=Mn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Hr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Mn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ut()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Ye();const a=ts(),l=function(){return ts()}();return n.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof zn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),es(d.mutation,f,d.mutation.getFieldMask(),Ft.now())):a.set(f.key,be.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var g;return l.set(f,new Iv(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,n){const r=ts();let s=new Ct((a,l)=>a-l),i=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||be.empty();d=l.applyToLocalView(f,d),r.set(u,d);const g=(s.get(l.batchId)||ut()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,g=If();d.forEach(w=>{if(!i.has(w)){const R=Cf(n.get(w),r.get(w));R!==null&&g.set(w,R),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return tt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ry(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(Mn());let l=cs,u=i;return a.next(f=>V.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(w=>{u=u.insert(d,w)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,u,f,ut())).next(d=>({batchId:l,changes:Tf(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new tt(n)).next(r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Hr();return this.indexManager.getCollectionParents(t,i).next(l=>V.forEach(l,u=>{const f=function(g,w){return new Bi(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,w)=>{a=a.insert(g,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,re.newInvalidDocument(d)))});let l=Hr();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&es(d.mutation,f,be.empty(),Ft.now()),$i(n,f)&&(l=l.insert(u,f))}),l})}}/**
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
 */class Av{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Oe(s.createTime)}}(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:dv(s.bundledQuery),readTime:Oe(s.readTime)}}(n)),V.resolve()}}/**
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
 */class bv{constructor(){this.overlays=new Ct(tt.comparator),this.Rr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mn();return V.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=Mn(),i=n.length+1,a=new tt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ct((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Mn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Mn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return V.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hy(n,r));let i=this.Rr.get(n);i===void 0&&(i=ut(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class Rv{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Ua{constructor(){this.Vr=new Ut(Bt.mr),this.gr=new Ut(Bt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new Bt(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new Bt(t,n))}Sr(t,n){t.forEach(r=>this.removeReference(r,n))}br(t){const n=new tt(new Dt([])),r=new Bt(n,t),s=new Bt(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new tt(new Dt([])),r=new Bt(n,t),s=new Bt(n,t+1);let i=ut();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Bt(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Bt{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return tt.comparator(t.key,n.key)||ct(t.Cr,n.Cr)}static pr(t,n){return ct(t.Cr,n.Cr)||tt.comparator(t.key,n.key)}}/**
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
 */class Sv{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ut(Bt.mr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qy(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Bt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Pa:this.Fr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Bt(n,0),s=new Bt(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ut(ct);return n.forEach(s=>{const i=new Bt(s,0),a=new Bt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;tt.isDocumentKey(i)||(i=i.child(""));const a=new Bt(new tt(i),0);let l=new Ut(ct);return this.Mr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Cr)),!0)},a),V.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){vt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,s=>{const i=new Bt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new Bt(n,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Cv{constructor(t){this.kr=t,this.docs=function(){return new Ct(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():re.newInvalidDocument(n))}getEntries(t,n){let r=Ye();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ye();const a=n.path,l=new tt(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ry(ny(d),r)<=0||(s.has(d.key)||$i(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){rt()}qr(t,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Pv(this)}getSize(t){return V.resolve(this.size)}}class Pv extends Tv{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class Vv{constructor(t){this.persistence=t,this.Qr=new Hn(n=>xa(n),Na),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ua,this.targetCount=0,this.Kr=mr.Un()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new mr(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.zn(n),V.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this.Ur.yr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ur.vr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this.Ur.containsKey(n))}}/**
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
 */class $f{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Li(0),this.zr=!1,this.zr=!0,this.jr=new Rv,this.referenceDelegate=t(this),this.Hr=new Vv(this),this.indexManager=new pv,this.remoteDocumentCache=function(s){return new Cv(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new fv(n),this.Yr=new Av(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new bv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new Sv(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){G("MemoryPersistence","Starting transaction:",t);const s=new Dv(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class Dv extends iy{constructor(t){super(),this.currentSequenceNumber=t}}class Ba{constructor(t){this.persistence=t,this.ti=new Ua,this.ni=null}static ri(t){return new Ba(t)}get ii(){if(this.ni)return this.ni;throw rt()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=tt.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,st.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class wi{constructor(t,n){this.persistence=t,this.oi=new Hn(r=>ly(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ev(this,n)}static ri(t,n){return new wi(t,n)}Zr(){}Xr(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return V.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,st.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Zs(t.data.value)),n}ar(t,n,r){return V.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ja{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=ut(),s=ut();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ja(t,n.fromCache,r,s)}}/**
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
 */class xv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Nv{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Rm()?8:oy(Am())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new xv;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(Zn()<=dt.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",tr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Zn()<=dt.DEBUG&&G("QueryEngine","Query:",tr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Zn()<=dt.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",tr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(n))):V.resolve())}rs(t,n){if(Jc(n))return V.resolve(null);let r=Ne(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ta(n,null,"F"),r=Ne(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ut(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.cs(n,l);return this.ls(n,f,a,u.readTime)?this.rs(t,ta(n,null,"F")):this.hs(t,f,n,u)}))})))}ss(t,n,r,s){return Jc(n)||s.isEqual(st.min())?V.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?V.resolve(null):(Zn()<=dt.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),tr(n)),this.hs(t,a,n,ey(s,cs)).next(l=>l))})}cs(t,n){let r=new Ut(vf(t));return n.forEach((s,i)=>{$i(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return Zn()<=dt.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",tr(n)),this.ns.getDocumentsMatchingQuery(t,n,mn.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const $a="LocalStore",Ov=3e8;class kv{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Ct(ct),this.Is=new Hn(i=>xa(i),Na),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wv(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function Mv(e,t,n,r){return new kv(e,t,n,r)}async function qf(e,t){const n=it(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ut();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function Lv(e,t){const n=it(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,f,d){const g=f.batch,w=g.keys();let R=V.resolve();return w.forEach(D=>{R=R.next(()=>d.getEntry(u,D)).next(F=>{const x=f.docVersions.get(D);vt(x!==null),F.version.compareTo(x)<0&&(g.applyToRemoteDocument(F,f),F.isValidDocument()&&(F.setReadTime(f.commitVersion),d.addEntry(F)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ut();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hf(e){const t=it(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function Fv(e,t){const n=it(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((d,g)=>{const w=s.get(g);if(!w)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,g)));let R=w.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(Gt.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(F,x,B){return F.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Ov?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(w,R,d)&&l.push(n.Hr.updateTargetData(i,R))});let u=Ye(),f=ut();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Uv(i,a,t.documentUpdates).next(d=>{u=d.Vs,f=d.fs})),!r.isEqual(st.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(g=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(n.Ts=s,i))}function Uv(e,t,n){let r=ut(),s=ut();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=Ye();return n.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(st.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):G($a,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function Bv(e,t){const n=it(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Pa),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jv(e,t){const n=it(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new cn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function ia(e,t,n){const r=it(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ir(a))throw a;G($a,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function hu(e,t,n){const r=it(e);let s=st.min(),i=ut();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const g=it(u),w=g.Is.get(d);return w!==void 0?V.resolve(g.Ts.get(w)):g.Hr.getTargetData(f,d)}(r,a,Ne(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:st.min(),n?i:ut())).next(l=>($v(r,Cy(t),l),{documents:l,gs:i})))}function $v(e,t,n){let r=e.Es.get(t)||st.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class fu{constructor(){this.activeTargetIds=Oy()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qv{constructor(){this.ho=new fu,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new fu,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Hv{To(t){}shutdown(){}}/**
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
 */const du="ConnectivityMonitor";class pu{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){G(du,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){G(du,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ws=null;function oa(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
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
 */const Po="RestConnection",zv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Kv{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===mi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,n,r,s,i){const a=oa(),l=this.bo(t,n.toUriEncodedString());G(Po,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(t,l,u,r).then(f=>(G(Po,`Received RPC '${t}' ${a}: `,f),f),f=>{throw fr(Po,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,n,r,s,i,a){return this.So(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Er}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}bo(t,n){const r=zv[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Wv{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Zt="WebChannelConnection";class Gv extends Kv{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=oa();return new Promise((a,l)=>{const u=new Wh;u.setWithCredentials(!0),u.listenOnce(Gh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Js.NO_ERROR:const d=u.getResponseJson();G(Zt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Js.TIMEOUT:G(Zt,`RPC '${t}' ${i} timed out`),l(new Z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const g=u.getStatus();if(G(Zt,`RPC '${t}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const D=function(x){const B=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN}(R.status);l(new Z(D,R.message))}else l(new Z(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Z(L.UNAVAILABLE,"Connection failed."));break;default:rt()}}finally{G(Zt,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);G(Zt,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",f,r,15)})}Wo(t,n,r){const s=oa(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Yh(),l=Xh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");G(Zt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);let w=!1,R=!1;const D=new Wv({Fo:x=>{R?G(Zt,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(w||(G(Zt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),w=!0),G(Zt,`RPC '${t}' stream ${s} sending:`,x),g.send(x))},Mo:()=>g.close()}),F=(x,B,q)=>{x.listen(B,Q=>{try{q(Q)}catch(K){setTimeout(()=>{throw K},0)}})};return F(g,qr.EventType.OPEN,()=>{R||(G(Zt,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),F(g,qr.EventType.CLOSE,()=>{R||(R=!0,G(Zt,`RPC '${t}' stream ${s} transport closed`),D.Uo())}),F(g,qr.EventType.ERROR,x=>{R||(R=!0,fr(Zt,`RPC '${t}' stream ${s} transport errored:`,x),D.Uo(new Z(L.UNAVAILABLE,"The operation could not be completed")))}),F(g,qr.EventType.MESSAGE,x=>{var B;if(!R){const q=x.data[0];vt(!!q);const Q=q,K=(Q==null?void 0:Q.error)||((B=Q[0])===null||B===void 0?void 0:B.error);if(K){G(Zt,`RPC '${t}' stream ${s} received error:`,K);const pt=K.status;let nt=function(E){const I=Nt[E];if(I!==void 0)return Df(I)}(pt),_=K.message;nt===void 0&&(nt=L.INTERNAL,_="Unknown error status: "+pt+" with message "+K.message),R=!0,D.Uo(new Z(nt,_)),g.close()}else G(Zt,`RPC '${t}' stream ${s} received:`,q),D.Ko(q)}}),F(l,Qh.STAT_EVENT,x=>{x.stat===Go.PROXY?G(Zt,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Go.NOPROXY&&G(Zt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Vo(){return typeof document<"u"?document:null}/**
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
 */function Ki(e){return new Jy(e,!0)}/**
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
 */class zf{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const gu="PersistentStream";class Kf{constructor(t,n,r,s,i,a,l,u){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new zf(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new Z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return G(gu,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(G(gu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qv extends Kf{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=ev(this.serializer,t),r=function(i){if(!("targetChange"in i))return st.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?st.min():a.readTime?Oe(a.readTime):st.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=sa(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=Zo(u)?{documents:sv(i,u)}:{query:iv(i,u).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Of(i,a.resumeToken);const f=ea(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(st.min())>0){l.readTime=Ii(i,a.snapshotVersion.toTimestamp());const f=ea(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=av(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=sa(this.serializer),n.removeTarget=t,this.I_(n)}}class Xv extends Kf{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return vt(!!t.streamToken),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=rv(t.writeResults,t.commitTime),r=Oe(t.commitTime);return this.listener.v_(r,n)}C_(){const t={};t.database=sa(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>nv(this.serializer,r))};this.I_(n)}}/**
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
 */class Yv{}class Jv extends Yv{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(t,na(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(L.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,na(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(L.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Zv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Xe(n),this.N_=!1):G("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const jn="RemoteStore";class tE{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Kn(this)&&(G(jn,"Restarting streams for network reachability change."),await async function(u){const f=it(u);f.W_.add(4),await Ts(f),f.j_.set("Unknown"),f.W_.delete(4),await Wi(f)}(this))})}),this.j_=new Zv(r,s)}}async function Wi(e){if(Kn(e))for(const t of e.G_)await t(!0)}async function Ts(e){for(const t of e.G_)await t(!1)}function Wf(e,t){const n=it(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),Ka(n)?za(n):wr(n).c_()&&Ha(n,t))}function qa(e,t){const n=it(e),r=wr(n);n.K_.delete(t),r.c_()&&Gf(n,t),n.K_.size===0&&(r.c_()?r.P_():Kn(n)&&n.j_.set("Unknown"))}function Ha(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(st.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}wr(e).y_(t)}function Gf(e,t){e.H_.Ne(t),wr(e).w_(t)}function za(e){e.H_=new Gy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),wr(e).start(),e.j_.B_()}function Ka(e){return Kn(e)&&!wr(e).u_()&&e.K_.size>0}function Kn(e){return it(e).W_.size===0}function Qf(e){e.H_=void 0}async function eE(e){e.j_.set("Online")}async function nE(e){e.K_.forEach((t,n)=>{Ha(e,t)})}async function rE(e,t){Qf(e),Ka(e)?(e.j_.q_(t),za(e)):e.j_.set("Unknown")}async function sE(e,t,n){if(e.j_.set("Online"),t instanceof Nf&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){G(jn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ai(e,r)}else if(t instanceof ni?e.H_.We(t):t instanceof xf?e.H_.Ze(t):e.H_.je(t),!n.isEqual(st.min()))try{const r=await Hf(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.K_.get(f);d&&i.K_.set(f,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const d=i.K_.get(u);if(!d)return;i.K_.set(u,d.withResumeToken(Gt.EMPTY_BYTE_STRING,d.snapshotVersion)),Gf(i,u);const g=new cn(d.target,u,f,d.sequenceNumber);Ha(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){G(jn,"Failed to raise snapshot:",r),await Ai(e,r)}}async function Ai(e,t,n){if(!Ir(t))throw t;e.W_.add(1),await Ts(e),e.j_.set("Offline"),n||(n=()=>Hf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{G(jn,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Wi(e)})}function Xf(e,t){return t().catch(n=>Ai(e,n,t))}async function Gi(e){const t=it(e),n=En(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Pa;for(;iE(t);)try{const s=await Bv(t.localStore,r);if(s===null){t.U_.length===0&&n.P_();break}r=s.batchId,oE(t,s)}catch(s){await Ai(t,s)}Yf(t)&&Jf(t)}function iE(e){return Kn(e)&&e.U_.length<10}function oE(e,t){e.U_.push(t);const n=En(e);n.c_()&&n.S_&&n.b_(t.mutations)}function Yf(e){return Kn(e)&&!En(e).u_()&&e.U_.length>0}function Jf(e){En(e).start()}async function aE(e){En(e).C_()}async function lE(e){const t=En(e);for(const n of e.U_)t.b_(n.mutations)}async function cE(e,t,n){const r=e.U_.shift(),s=Ma.from(r,t,n);await Xf(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Gi(e)}async function uE(e,t){t&&En(e).S_&&await async function(r,s){if(function(a){return Ky(a)&&a!==L.ABORTED}(s.code)){const i=r.U_.shift();En(r).h_(),await Xf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gi(r)}}(e,t),Yf(e)&&Jf(e)}async function mu(e,t){const n=it(e);n.asyncQueue.verifyOperationInProgress(),G(jn,"RemoteStore received new credentials");const r=Kn(n);n.W_.add(3),await Ts(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Wi(n)}async function hE(e,t){const n=it(e);t?(n.W_.delete(2),await Wi(n)):t||(n.W_.add(2),await Ts(n),n.j_.set("Unknown"))}function wr(e){return e.J_||(e.J_=function(n,r,s){const i=it(n);return i.M_(),new Qv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:eE.bind(null,e),No:nE.bind(null,e),Lo:rE.bind(null,e),p_:sE.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),Ka(e)?za(e):e.j_.set("Unknown")):(await e.J_.stop(),Qf(e))})),e.J_}function En(e){return e.Y_||(e.Y_=function(n,r,s){const i=it(n);return i.M_(),new Xv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:aE.bind(null,e),Lo:uE.bind(null,e),D_:lE.bind(null,e),v_:cE.bind(null,e)}),e.G_.push(async t=>{t?(e.Y_.h_(),await Gi(e)):(await e.Y_.stop(),e.U_.length>0&&(G(jn,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))})),e.Y_}/**
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
 */class Wa{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Wa(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(e,t){if(Xe("AsyncQueue",`${t}: ${e}`),Ir(e))return new Z(L.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ur{static emptySet(t){return new ur(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||tt.comparator(n.key,r.key):(n,r)=>tt.comparator(n.key,r.key),this.keyedMap=Hr(),this.sortedSet=new Ct(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ur)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ur;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class _u{constructor(){this.Z_=new Ct(tt.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):rt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class _r{constructor(t,n,r,s,i,a,l,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new _r(t,n,ur.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ji(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fE{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class dE{constructor(){this.queries=yu(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=it(n),i=s.queries;s.queries=yu(),i.forEach((a,l)=>{for(const u of l.ta)u.onError(r)})})(this,new Z(L.ABORTED,"Firestore shutting down"))}}function yu(){return new Hn(e=>yf(e),ji)}async function pE(e,t){const n=it(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new fE,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Ga(a,`Initialization of query '${tr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&Qa(n)}async function gE(e,t){const n=it(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mE(e,t){const n=it(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Qa(n)}function _E(e,t,n){const r=it(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function Qa(e){e.ia.forEach(t=>{t.next()})}var aa,vu;(vu=aa||(aa={}))._a="default",vu.Cache="cache";class yE{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _r(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=_r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==aa.Cache}}/**
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
 */class Zf{constructor(t){this.key=t}}class td{constructor(t){this.key=t}}class vE{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ut(),this.mutatedKeys=ut(),this.ya=vf(t),this.wa=new ur(this.ya)}get Sa(){return this.fa}ba(t,n){const r=n?n.Da:new _u,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const w=s.get(d),R=$i(this.query,g)?g:null,D=!!w&&this.mutatedKeys.has(w.key),F=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;w&&R?w.data.isEqual(R.data)?D!==F&&(r.track({type:3,doc:R}),x=!0):this.va(w,R)||(r.track({type:2,doc:R}),x=!0,(u&&this.ya(R,u)>0||f&&this.ya(R,f)<0)&&(l=!0)):!w&&R?(r.track({type:0,doc:R}),x=!0):w&&!R&&(r.track({type:1,doc:w}),x=!0,(u||f)&&(l=!0)),x&&(R?(a=a.add(R),i=F?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((d,g)=>function(R,D){const F=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rt()}};return F(R)-F(D)}(d.type,g.type)||this.ya(d.doc,g.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,f=u!==this.ga;return this.ga=u,a.length!==0||f?{snapshot:new _r(this.query,t.wa,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _u,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=ut(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new td(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new Zf(r))}),n}Oa(t){this.fa=t.gs,this.pa=ut();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return _r.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Xa="SyncEngine";class EE{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class TE{constructor(t){this.key=t,this.Ba=!1}}class IE{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Hn(l=>yf(l),ji),this.qa=new Map,this.Qa=new Set,this.$a=new Ct(tt.comparator),this.Ua=new Map,this.Ka=new Ua,this.Wa={},this.Ga=new Map,this.za=mr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function wE(e,t,n=!0){const r=od(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await ed(r,t,n,!0),s}async function AE(e,t){const n=od(e);await ed(n,t,!0,!1)}async function ed(e,t,n,r){const s=await jv(e.localStore,Ne(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await bE(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Wf(e.remoteStore,s),l}async function bE(e,t,n,r,s){e.Ha=(g,w,R)=>async function(F,x,B,q){let Q=x.view.ba(B);Q.ls&&(Q=await hu(F.localStore,x.query,!1).then(({documents:_})=>x.view.ba(_,Q)));const K=q&&q.targetChanges.get(x.targetId),pt=q&&q.targetMismatches.get(x.targetId)!=null,nt=x.view.applyChanges(Q,F.isPrimaryClient,K,pt);return Tu(F,x.targetId,nt.Ma),nt.snapshot}(e,g,w,R);const i=await hu(e.localStore,t,!0),a=new vE(t,i.gs),l=a.ba(i.documents),u=Es.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,u);Tu(e,n,f.Ma);const d=new EE(t,n,a);return e.ka.set(t,d),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),f.snapshot}async function RE(e,t,n){const r=it(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ji(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ia(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qa(r.remoteStore,s.targetId),la(r,s.targetId)}).catch(Tr)):(la(r,s.targetId),await ia(r.localStore,s.targetId,!0))}async function SE(e,t){const n=it(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qa(n.remoteStore,r.targetId))}async function CE(e,t,n){const r=kE(e);try{const s=await function(a,l){const u=it(a),f=Ft.now(),d=l.reduce((R,D)=>R.add(D.key),ut());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=Ye(),F=ut();return u.ds.getEntries(R,d).next(x=>{D=x,D.forEach((B,q)=>{q.isValidDocument()||(F=F.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(x=>{g=x;const B=[];for(const q of l){const Q=jy(q,g.get(q.key).overlayedDocument);Q!=null&&B.push(new zn(q.key,Q,hf(Q.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,B,l)}).next(x=>{w=x;const B=x.applyToLocalDocumentSet(g,F);return u.documentOverlayCache.saveOverlays(R,x.batchId,B)})}).then(()=>({batchId:w.batchId,changes:Tf(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let f=a.Wa[a.currentUser.toKey()];f||(f=new Ct(ct)),f=f.insert(l,u),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,n),await Is(r,s.changes),await Gi(r.remoteStore)}catch(s){const i=Ga(s,"Failed to persist write");n.reject(i)}}async function nd(e,t){const n=it(e);try{const r=await Fv(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?vt(a.Ba):s.removedDocuments.size>0&&(vt(a.Ba),a.Ba=!1))}),await Is(n,r,t)}catch(r){await Tr(r)}}function Eu(e,t,n){const r=it(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=it(a);u.onlineState=l;let f=!1;u.queries.forEach((d,g)=>{for(const w of g.ta)w.sa(l)&&(f=!0)}),f&&Qa(u)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function PE(e,t,n){const r=it(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let a=new Ct(tt.comparator);a=a.insert(i,re.newNoDocument(i,st.min()));const l=ut().add(i),u=new zi(st.min(),new Map,new Ct(ct),a,l);await nd(r,u),r.$a=r.$a.remove(i),r.Ua.delete(t),Ya(r)}else await ia(r.localStore,t,!1).then(()=>la(r,t,n)).catch(Tr)}async function VE(e,t){const n=it(e),r=t.batch.batchId;try{const s=await Lv(n.localStore,t);sd(n,r,null),rd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Is(n,s)}catch(s){await Tr(s)}}async function DE(e,t,n){const r=it(e);try{const s=await function(a,l){const u=it(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next(g=>(vt(g!==null),d=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,t);sd(r,t,n),rd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Is(r,s)}catch(s){await Tr(s)}}function rd(e,t){(e.Ga.get(t)||[]).forEach(n=>{n.resolve()}),e.Ga.delete(t)}function sd(e,t,n){const r=it(e);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function la(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(r=>{e.Ka.containsKey(r)||id(e,r)})}function id(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(qa(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),Ya(e))}function Tu(e,t,n){for(const r of n)r instanceof Zf?(e.Ka.addReference(r.key,t),xE(e,r)):r instanceof td?(G(Xa,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||id(e,r.key)):rt()}function xE(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(G(Xa,"New document in limbo: "+n),e.Qa.add(r),Ya(e))}function Ya(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new tt(Dt.fromString(t)),r=e.za.next();e.Ua.set(r,new TE(n)),e.$a=e.$a.insert(n,r),Wf(e.remoteStore,new cn(Ne(Oa(n.path)),r,"TargetPurposeLimboResolution",Li.ae))}}async function Is(e,t,n){const r=it(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{a.push(r.Ha(u,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){s.push(f);const g=ja.Yi(u.targetId,f);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,f){const d=it(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,w=>V.forEach(w.Hi,R=>d.persistence.referenceDelegate.addReference(g,w.targetId,R)).next(()=>V.forEach(w.Ji,R=>d.persistence.referenceDelegate.removeReference(g,w.targetId,R)))))}catch(g){if(!Ir(g))throw g;G($a,"Failed to update sequence numbers: "+g)}for(const g of f){const w=g.targetId;if(!g.fromCache){const R=d.Ts.get(w),D=R.snapshotVersion,F=R.withLastLimboFreeSnapshotVersion(D);d.Ts=d.Ts.insert(w,F)}}}(r.localStore,i))}async function NE(e,t){const n=it(e);if(!n.currentUser.isEqual(t)){G(Xa,"User change. New user:",t.toKey());const r=await qf(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(u=>{u.reject(new Z(L.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Is(n,r.Rs)}}function OE(e,t){const n=it(e),r=n.Ua.get(t);if(r&&r.Ba)return ut().add(r.key);{let s=ut();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function od(e){const t=it(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=nd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=OE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=PE.bind(null,t),t.La.p_=mE.bind(null,t.eventManager),t.La.Ja=_E.bind(null,t.eventManager),t}function kE(e){const t=it(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=VE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=DE.bind(null,t),t}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ki(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return Mv(this.persistence,new Nv,t.initialUser,this.serializer)}Xa(t){return new $f(Ba.ri,this.serializer)}Za(t){return new qv}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class ME extends bi{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){vt(this.persistence.referenceDelegate instanceof wi);const r=this.persistence.referenceDelegate.garbageCollector;return new yv(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?ue.withCacheSize(this.cacheSizeBytes):ue.DEFAULT;return new $f(r=>wi.ri(r,n),this.serializer)}}class ca{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NE.bind(null,this.syncEngine),await hE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dE}()}createDatastore(t){const n=Ki(t.databaseInfo.databaseId),r=function(i){return new Gv(i)}(t.databaseInfo);return function(i,a,l,u){return new Jv(i,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new tE(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Eu(this.syncEngine,n,0),function(){return pu.D()?new pu:new Hv}())}createSyncEngine(t,n){return function(s,i,a,l,u,f,d){const g=new IE(s,i,a,l,u,f);return d&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=it(s);G(jn,"RemoteStore shutting down."),i.W_.add(5),await Ts(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ca.provider={build:()=>new ca};/**
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
 */class LE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Xe("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Tn="FirestoreClient";class FE{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=te.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{G(Tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G(Tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ga(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Do(e,t){e.asyncQueue.verifyOperationInProgress(),G(Tn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qf(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Iu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await UE(e);G(Tn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>mu(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>mu(t.remoteStore,s)),e._onlineComponents=t}async function UE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){G(Tn,"Using user provided OfflineComponentProvider");try{await Do(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fr("Error using user provided cache. Falling back to memory cache: "+n),await Do(e,new bi)}}else G(Tn,"Using default OfflineComponentProvider"),await Do(e,new ME(void 0));return e._offlineComponents}async function ad(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(G(Tn,"Using user provided OnlineComponentProvider"),await Iu(e,e._uninitializedComponentsProvider._online)):(G(Tn,"Using default OnlineComponentProvider"),await Iu(e,new ca))),e._onlineComponents}function BE(e){return ad(e).then(t=>t.syncEngine)}async function jE(e){const t=await ad(e),n=t.eventManager;return n.onListen=wE.bind(null,t.syncEngine),n.onUnlisten=RE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=AE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=SE.bind(null,t.syncEngine),n}function $E(e,t,n={}){const r=new pn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const d=new LE({next:w=>{d.su(),a.enqueueAndForget(()=>gE(i,g));const R=w.docs.has(l);!R&&w.fromCache?f.reject(new Z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&u&&u.source==="server"?f.reject(new Z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),g=new yE(Oa(l.path),d,{includeMetadataChanges:!0,Ta:!0});return pE(i,g)}(await jE(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function ld(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const wu=new Map;/**
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
 */function qE(e,t,n){if(!n)throw new Z(L.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function HE(e,t,n,r){if(t===!0&&r===!0)throw new Z(L.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Au(e){if(!tt.isDocumentKey(e))throw new Z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ja(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":rt()}function gs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(e);throw new Z(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const cd="firestore.googleapis.com",bu=!0;class Ru{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cd,this.ssl=bu}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:bu;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=jf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<mv)throw new Z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}HE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ld((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Za{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ru({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ru(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new K_;switch(r.type){case"firstParty":return new X_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wu.get(n);r&&(G("ComponentProvider","Removing Datastore"),wu.delete(n),r.terminate())}(this),Promise.resolve()}}function zE(e,t,n,r={}){var s;const i=(e=gs(e,Za))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;i.host!==cd&&i.host!==l&&fr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!hi(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=te.MOCK_USER;else{f=wm(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new te(g)}e._authCredentials=new W_(new Jh(f,d))}}/**
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
 */class tl{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new tl(this.firestore,t,this._query)}}class Ie{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class ms extends tl{constructor(t,n,r){super(t,n,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new tt(t))}withConverter(t){return new ms(this.firestore,t,this._path)}}function KE(e,t,...n){if(e=fi(e),arguments.length===1&&(t=tf.newId()),qE("doc","path",t),e instanceof Za){const r=Dt.fromString(t,...n);return Au(r),new Ie(e,null,new tt(r))}{if(!(e instanceof Ie||e instanceof ms))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Dt.fromString(t,...n));return Au(r),new Ie(e.firestore,e instanceof ms?e.converter:null,new tt(r))}}/**
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
 */const Su="AsyncQueue";class Cu{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new zf(this,"async_queue_retry"),this.Su=()=>{const r=Vo();r&&G(Su,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const n=Vo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new pn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ir(t))throw t;G(Su,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=Wa.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&rt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class el extends Za{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Cu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Cu(t),this._firestoreClient=void 0,await t}}}function WE(e,t){const n=typeof e=="object"?e:N_(),r=typeof e=="string"?e:mi,s=C_(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tm("firestore");i&&zE(s,...i)}return s}function ud(e){if(e._terminated)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||GE(e),e._firestoreClient}function GE(e){var t,n,r;const s=e._freezeSettings(),i=function(l,u,f,d){return new hy(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ld(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new FE(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
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
 */class yr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new yr(Gt.fromBase64String(t))}catch(n){throw new Z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new yr(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class nl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class hd{constructor(t){this._methodName=t}}/**
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
 */class rl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}/**
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
 */class sl{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const QE=/^__.*__$/;class XE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new zn(t,this.data,this.fieldMask,n,this.fieldTransforms):new vs(t,this.data,n,this.fieldTransforms)}}function fd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rt()}}class il{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new il(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ri(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(fd(this.Lu)&&QE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class YE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ki(t)}ju(t,n,r,s=!1){return new il({Lu:t,methodName:n,zu:r,path:Wt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JE(e){const t=e._freezeSettings(),n=Ki(e._databaseId);return new YE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ZE(e,t,n,r,s,i={}){const a=e.ju(i.merge||i.mergeFields?2:0,t,n,s);md("Data must be an object, but it was:",a,r);const l=pd(r,a);let u,f;if(i.merge)u=new be(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const w=tT(t,g,n);if(!a.contains(w))throw new Z(L.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);nT(d,w)||d.push(w)}u=new be(d),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new XE(new ve(l),u,f)}function dd(e,t){if(gd(e=fi(e)))return md("Unsupported field value:",t,e),pd(e,t);if(e instanceof hd)return function(r,s){if(!fd(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=dd(l,s.Ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=fi(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ky(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ft.fromDate(r);return{timestampValue:Ii(s.serializer,i)}}if(r instanceof Ft){const i=new Ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ii(s.serializer,i)}}if(r instanceof rl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yr)return{bytesValue:Of(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof sl)return function(a,l){return{mapValue:{fields:{[cf]:{stringValue:uf},[_i]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Wu("VectorValues must only contain numeric values.");return ka(l.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ja(r)}`)}(e,t)}function pd(e,t){const n={};return nf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qn(e,(r,s)=>{const i=dd(s,t.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ft||e instanceof rl||e instanceof yr||e instanceof Ie||e instanceof hd||e instanceof sl)}function md(e,t,n){if(!gd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ja(n);throw r==="an object"?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function tT(e,t,n){if((t=fi(t))instanceof nl)return t._internalPath;if(typeof t=="string")return _d(e,t);throw Ri("Field path arguments must be of type string or ",e,!1,void 0,n)}const eT=new RegExp("[~\\*/\\[\\]]");function _d(e,t,n){if(t.search(eT)>=0)throw Ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new nl(...t.split("."))._internalPath}catch{throw Ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ri(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Z(L.INVALID_ARGUMENT,l+e+u)}function nT(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class yd{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(vd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rT extends yd{data(){return super.data()}}function vd(e,t){return typeof t=="string"?_d(e,t):t instanceof nl?t._internalPath:t._delegate._internalPath}class sT{convertValue(t,n="none"){switch(vn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(yn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw rt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return qn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[_i].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>xt(a.doubleValue));return new sl(i)}convertGeoPoint(t){return new rl(xt(t.latitude),xt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ui(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(us(t));default:return null}}convertTimestamp(t){const n=_n(t);return new Ft(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Dt.fromString(t);vt(Bf(r));const s=new hs(r.get(1),r.get(3)),i=new tt(r.popFirst(5));return s.isEqual(n)||Xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iT(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class oT{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ed extends yd{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new aT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(vd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aT extends Ed{data(t={}){return super.data(t)}}/**
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
 */function lT(e){e=gs(e,Ie);const t=gs(e.firestore,el);return $E(ud(t),e._key).then(n=>fT(t,e,n))}class cT extends sT{constructor(t){super(),this.firestore=t}convertBytes(t){return new yr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function uT(e,t,n){e=gs(e,Ie);const r=gs(e.firestore,el),s=iT(e.converter,t);return hT(r,[ZE(JE(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Ge.none())])}function hT(e,t){return function(r,s){const i=new pn;return r.asyncQueue.enqueueAndForget(async()=>CE(await BE(r),s,i)),i.promise}(ud(e),t)}function fT(e,t,n){const r=n.docs.get(t._key),s=new cT(e);return new Ed(e,s,t._key,r,new oT(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Er=s})(x_),pi(new as("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new el(new G_(r.getProvider("auth-internal")),new Y_(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cr(kc,Mc,t),cr(kc,Mc,"esm2017")})();const dT={class:"container-fluid overflow-hidden"},pT={class:"row"},gT={class:"col-4 list"},mT={class:"list-group list-group-numbered"},_T=["onClick"],yT={class:"gold"},vT={class:"col-8 detail"},ET={class:"card"},TT={class:"card-header"},IT={class:"card-text"},wT={class:"card-title gold"},AT={class:"fs-3"},bT={class:"card-body"},RT={class:"card-text"},ST={class:"card-footer"},CT={class:"row justify-content-center"},PT={class:"col-auto"},VT=["src"],DT={class:"text-center"},xT={class:"row justify-content-center mt-3"},NT={class:"col-auto"},OT={class:"btn-group",role:"group","aria-label":"Basic example"},kT=["onClick"],MT={class:"formula-box mt-4"},LT={key:0,class:"alert alert-info"},FT={class:"btn-group w-100",role:"group","aria-label":"Basic example"},UT=["onClick"],BT={class:"gold"},jT={class:"gold mt-2 text-center"},$T={class:"btn-group w-100",role:"group","aria-label":"Basic example"},qT=["onClick"],HT={class:"gold"},zT={class:"mt-2"},KT={class:"card"},WT={class:"card-body"},GT={class:"row"},QT={class:"col-auto mt-auto"},XT={class:"card-title gold"},YT={class:"col-auto"},JT=["src"],ZT={class:"text-center"},tI={class:"col-auto"},eI=["src"],nI={class:"text-center"},rI=["innerHTML"],sI={class:"row justify-content-center mt-4"},iI={class:"col-auto"},oI={class:"list-group list-group-horizontal"},aI={class:"list-group-item"},lI={class:"position-relative"},cI=["src"],uI={class:"base-type"},hI={key:0,class:"row"},fI={class:"col-auto mt-2"},dI={key:0,class:"sub_avatar"},pI=["src"],gI={class:"row mt-4"},mI={class:"btn-group w-100",role:"group","aria-label":"Basic example"},_I=["onClick"],yI=["src"],vI={class:"gold px-3"},EI=["src"],TI={class:"gold mt-2 text-center"},II={class:"btn-group w-100",role:"group","aria-label":"Basic example"},wI=["onClick"],AI=["src"],bI={class:"gold px-3"},RI=["src"],SI={class:"mt-2"},CI={class:"card"},PI={class:"card-body"},VI={class:"card-title gold"},DI=["src"],xI=["innerHTML"],NI="https://hoyolabapi.vercel.app/api/fenchayuzhou?id=",OI={__name:"App",setup(e){const t=qh({apiKey:"AIzaSyA2RLK6hoiaJ7pdlNOXOnD_BwS62ABqC50",authDomain:"fenchayuzhou.firebaseapp.com",projectId:"fenchayuzhou"}),n=WE(t),r=KE(n,"fenchayuzhou","strategy"),s=ir([]),i={1:"毁灭",2:"巡猎",3:"智识",4:"同谐",5:"虚无",6:"存护",7:"丰饶",8:"记忆"},a=["https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/a33c526b158e79fb3fdb423d72fc9cae.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/a1f70c6bb9713f81435821506865b4db.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/3e9c8d9a74d5928012016f2bba0440e8.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/d4ad4c5c30ec8b64cacb760563778bef.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/15438b57925d433fdbe50a415567c156.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/5059e2fb3d8b36ced88a00b84e58792c.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/f70c86f524c7a5c6b930da71297844a6.png","https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u6975c/0bf8ad0e2732b28b3ce967e775eb23e7.png"],l=[{name:"formula",text:"推荐方程"},{name:"avatar",text:"推荐队伍"},{name:"miracle",text:"推荐加权奇物"}],u=tc(l[0].name);function f(x){return x.replaceAll(/<color=#([0-9a-fA-F]{6,8})>(.*?)<\/color>/g,'<span style="color: #$1;">$2</span>')}function d(x){x.forEach(B=>{const q=new Image;q.src=B})}async function g(x){if(x.keyCode==13&&x.target.value!=="")if(s.findIndex(B=>B.id==x.target.value)==-1){const q=await(await fetch(NI+x.target.value)).json();x.target.value="",s.push(q),uT(r,{list:s}).then(Q=>{console.log(Q)})}else alert(`ID: ${x.target.value} 已存在`),x.target.value=""}function w(x){let B={};if(x)for(const q of[...x.formula_list,...x.second_formula_list]){const{main_buff_type_id:Q,main_buff_num:K,main_buff_small_icon:pt,sub_buff_type_id:nt,sub_buff_num:_,sub_buff_small_icon:m}=q;(typeof B[Q]>"u"||B[Q].num<K)&&(B[Q]={num:K,icon:pt}),(typeof B[nt]>"u"||B[nt]<_)&&(B[nt]={num:_,icon:m})}return B}const R=tc(null),D=ir([]),F=ir([]);return Qs(R,()=>{s[R]&&(D[R]=s[R].lineup_rogue_tourn_info.formula_list[0].name,F[R]=s[R].lineup_rogue_tourn_info.miracle_list[0].name,u.value=l[0].name)}),lh(async()=>{d(a);const x=(await lT(r)).data().list;for(const B of x)s.findIndex(q=>q.id==B.id)==-1&&(s.push(B),D.push(B.lineup_rogue_tourn_info.formula_list[0].name),F.push(B.lineup_rogue_tourn_info.miracle_list[0].name));s.length>0&&(R.value=0)}),(x,B)=>(Tt(),wt("div",dT,[W("div",pT,[W("div",gT,[W("input",{class:"form-control mb-2",type:"text",placeholder:"输入ID来获取攻略",onKeyup:B[0]||(B[0]=q=>g(q))},null,32),W("ol",mT,[(Tt(!0),wt(Vt,null,ye(Object.entries(s),([q,Q])=>(Tt(),wt("li",{class:He(["list-group-item",{active:R.value==q}]),onClick:K=>R.value=q},[W("span",yT,zt(Q.title),1)],10,_T))),256))])]),(Tt(!0),wt(Vt,null,ye(Object.entries(s),([q,{id:Q,title:K,description:pt,lineup_rogue_tourn_info:nt}])=>sn((Tt(),wt("div",vT,[W("div",ET,[W("div",TT,[W("div",IT,[W("small",null,[W("small",null,"ID: "+zt(Q),1)])]),W("div",wT,[W("span",AT,zt(K),1)])]),W("div",bT,[W("div",RT,zt(pt),1)]),W("div",ST,[W("div",CT,[B[1]||(B[1]=W("div",{class:"col-auto my-auto gold"},[W("span",{class:"fs-4"},"全方程需求")],-1)),(Tt(!0),wt(Vt,null,ye(w(nt),_=>(Tt(),wt("div",PT,[W("img",{src:_.icon,width:"30"},null,8,VT),W("div",DT,zt(_.num),1)]))),256))])])]),W("div",xT,[W("div",NT,[W("div",OT,[(Tt(),wt(Vt,null,ye(l,_=>W("button",{type:"button",class:He(["btn btn-secondary",{active:u.value==_.name}]),onClick:m=>u.value=_.name},zt(_.text),11,kT)),64))])])]),sn(W("div",MT,[nt!=null&&nt.formula_description?(Tt(),wt("div",LT,zt(nt.formula_description),1)):To("",!0),B[2]||(B[2]=W("h4",{class:"gold text-center"},"核心方程",-1)),W("div",FT,[(Tt(!0),wt(Vt,null,ye(nt.formula_list,_=>(Tt(),wt("button",{class:He(["btn btn-outline-secondary",{active:D[q]==_.name}]),onClick:m=>D[q]=_.name},[W("span",BT,zt(_.name),1)],10,UT))),256))]),sn(W("h4",jT,"辅助方程",512),[[on,nt.second_formula_list.length>0]]),W("div",$T,[(Tt(!0),wt(Vt,null,ye(nt.second_formula_list,_=>(Tt(),wt("button",{class:He(["btn btn-outline-secondary",{active:D[q]==_.name}]),onClick:m=>D[q]=_.name},[W("span",HT,zt(_.name),1)],10,qT))),256))]),(Tt(!0),wt(Vt,null,ye([...nt.formula_list,...nt.second_formula_list],_=>sn((Tt(),wt("div",zT,[W("div",KT,[W("div",WT,[W("div",GT,[W("div",QT,[W("h3",XT,zt(_.name),1)]),W("div",YT,[W("img",{src:_.main_buff_small_icon,width:"30"},null,8,JT),W("div",ZT,zt(_.main_buff_num),1)]),W("div",tI,[W("img",{src:_.sub_buff_small_icon,width:"30"},null,8,eI),W("div",nI,zt(_.sub_buff_num),1)])]),W("p",{class:"card-text",innerHTML:f(_.desc)},null,8,rI)])])],512)),[[on,_.name==D[q]]])),256))],512),[[on,u.value=="formula"]]),sn(W("div",sI,[W("div",iI,[W("ul",oI,[(Tt(!0),wt(Vt,null,ye(nt.group_list[0].avatar_list,_=>(Tt(),wt("li",aI,[W("div",lI,[W("img",{src:_.icon_url,width:"80"},null,8,cI),W("div",uI,zt(i[_.avatar_base_type]),1)]),_.second_avatars.length>0?(Tt(),wt("div",hI,[W("div",fI,[(Tt(!0),wt(Vt,null,ye(_.second_avatars,m=>(Tt(),wt(Vt,null,[m.item_name?(Tt(),wt("div",dI,[W("img",{src:m.icon_url},null,8,pI)])):To("",!0)],64))),256))])])):To("",!0)]))),256))])])],512),[[on,u.value=="avatar"]]),sn(W("div",gI,[B[3]||(B[3]=W("h4",{class:"gold text-center"},"核心加权奇物",-1)),W("div",mI,[(Tt(!0),wt(Vt,null,ye(nt.miracle_list,_=>(Tt(),wt("button",{class:He(["btn btn-outline-secondary",{active:F[q]==_.name}]),onClick:m=>F[q]=_.name},[W("img",{src:_.icon,height:"40px"},null,8,yI),W("span",vI,zt(_.name),1),W("img",{src:_.icon,height:"40px"},null,8,EI)],10,_I))),256))]),sn(W("h4",TI,"辅助加权奇物",512),[[on,nt.second_miracle_list.length>0]]),W("div",II,[(Tt(!0),wt(Vt,null,ye(nt.second_miracle_list,_=>(Tt(),wt("button",{class:He(["btn btn-outline-secondary",{active:F[q]==_.name}]),onClick:m=>F[q]=_.name},[W("img",{src:_.icon,height:"40px"},null,8,AI),W("span",bI,zt(_.name),1),W("img",{src:_.icon,height:"40px"},null,8,RI)],10,wI))),256))]),(Tt(!0),wt(Vt,null,ye([...nt.miracle_list,...nt.second_miracle_list],_=>sn((Tt(),wt("div",SI,[W("div",CI,[W("div",PI,[W("h3",VI,[Dh(zt(_.name)+" ",1),W("img",{class:"ms-3",src:_.icon,height:"40px"},null,8,DI)]),W("p",{class:"card-text",innerHTML:f(_.desc)},null,8,xI)])])],512)),[[on,_.name==F[q]]])),256))],512),[[on,u.value=="miracle"]])],512)),[[on,R.value==q]])),256))])]))}};lm(OI).mount("#app");
