import{d as m,_ as f,o as n,b as h,U as w,ay as C,az as $,e as a,af as b,aL as B,G as I,H as v,bJ as S,aJ as y,aN as z,bK as D,c as i,w as s,r as H,bG as M,ad as _,a9 as A,$ as E,a8 as N,bH as T,bI as x}from"./index-BvTJVpzy.js";const V=m({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),G=o=>(C("data-v-e36434ef"),o=o(),$(),o),J=G(()=>a("svg",{viewBox:"0 0 512 512"},[a("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),a("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),R=[J];function U(o,t,c,r,l,u){return n(),h("span",{class:w(["locales-logo-icon",{"is-dark":o.dark}])},R,2)}const F=f(V,[["render",U],["__scopeId","data-v-e36434ef"]]),K=m({name:"TranslationsBox",components:{ArrowDown:b,LogoIcon:F},props:{dark:{type:Boolean,default:!1}},setup(){const o=y(),t=z(),c=B(),r=I(D),l=v(()=>c.locale);return{localesList:r,currentLocale:l,handleChange:d=>{setTimeout(()=>{const{localeCode:e}=d;t.replace({params:{...o.params,locale:e}}),S(e)})}}}}),j={class:"icon-outer"},q={class:"custom-dropdown-item"};function O(o,t,c,r,l,u){const d=H("LogoIcon"),e=T,g=x,L=M;return n(),i(L,{class:w(["translations-box",{"is-dark":o.dark}]),trigger:"hover","popper-class":"translations-box",onCommand:o.handleChange},{dropdown:s(()=>[_(g,null,{default:s(()=>[(n(!0),h(N,null,A(o.localesList,(p,k)=>(n(),i(e,{key:k,command:p,disabled:o.currentLocale===p.localeCode},{default:s(()=>[a("span",q,E(p.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:s(()=>[a("span",j,[_(d,{dark:o.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const Q=f(K,[["render",O]]);export{Q as T};