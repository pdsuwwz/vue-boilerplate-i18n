var H=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var i=(a,o,s)=>o in a?H(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,m=(a,o)=>{for(var s in o||(o={}))y.call(o,s)&&i(a,s,o[s]);if(p)for(var s of p(o))z.call(o,s)&&i(a,s,o[s]);return a},u=(a,o)=>I(a,M(o));import{_ as f,c as A,l as T,d as j}from"./index.1a10f702.js";import{i as k,o as n,v as L,A as g,M as D,O as G,x as e,a5 as N,k as O,a4 as V,L as q,f as E,r,l as C,m as c,n as b,C as F,G as J,H as K}from"./vendor.66220bb1.js";const P=k({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),Q=[(a=>(D("data-v-6168be91"),a=a(),G(),a))(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],R=k({name:"TranslationsBox",components:{ArrowDown:N,LogoIcon:f(P,[["render",function(a,o,s,d,l,h){return n(),L("span",{class:g(["locales-logo-icon",{"is-dark":a.dark}])},Q,2)}],["__scopeId","data-v-6168be91"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=O(),o=V(),s=A();return{localesList:q(T),currentLocale:E(()=>s.locale),handleChange:d=>{setTimeout(()=>{const{localeCode:l}=d;o.replace({params:u(m({},a.params),{locale:l})}),j(l)})}}}}),S={class:"icon-outer"},U={class:"custom-dropdown-item"};var Z=f(R,[["render",function(a,o,s,d,l,h){const v=r("LogoIcon"),w=r("el-dropdown-item"),x=r("el-dropdown-menu"),_=r("el-dropdown");return n(),C(_,{class:g(["translations-box",{"is-dark":a.dark}]),trigger:"click","popper-class":"translations-box",onCommand:a.handleChange},{dropdown:c(()=>[b(x,null,{default:c(()=>[(n(!0),L(K,null,F(a.localesList,(t,B)=>(n(),C(w,{key:B,command:t,disabled:a.currentLocale===t.localeCode},{default:c(()=>[e("span",U,J(t.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:c(()=>[e("span",S,[b(v,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{Z as T};