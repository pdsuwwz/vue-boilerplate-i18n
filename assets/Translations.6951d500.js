import{d as u,_ as m,o as n,b as f,n as k,v,x,e as o,O as _,L as B,K as I,P as y,f as z,i as H,Q as M,R as T,r as e,c as p,w as l,h as i,u as A,t as D,F}from"./index.7e214e44.js";const K=u({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),N=[(a=>(v("data-v-9b80ff1f"),a=a(),x(),a))(()=>o("svg",{viewBox:"0 0 512 512"},[o("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),o("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],O=u({name:"TranslationsBox",components:{ArrowDown:_,LogoIcon:m(K,[["render",function(a,r,c,d,s,L){return n(),f("span",{class:k(["locales-logo-icon",{"is-dark":a.dark}])},N,2)}],["__scopeId","data-v-9b80ff1f"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=B(),r=I(),c=y();return{localesList:z(T),currentLocale:H(()=>c.locale),handleChange:d=>{setTimeout(()=>{const{localeCode:s}=d;r.replace({params:{...a.params,locale:s}}),M(s)})}}}}),P={class:"icon-outer"},Q={class:"custom-dropdown-item"},V=m(O,[["render",function(a,r,c,d,s,L){const g=e("LogoIcon"),h=e("el-dropdown-item"),w=e("el-dropdown-menu"),C=e("el-dropdown");return n(),p(C,{class:k(["translations-box",{"is-dark":a.dark}]),trigger:"click","popper-class":"translations-box",onCommand:a.handleChange},{dropdown:l(()=>[i(w,null,{default:l(()=>[(n(!0),f(F,null,A(a.localesList,(t,b)=>(n(),p(h,{key:b,command:t,disabled:a.currentLocale===t.localeCode},{default:l(()=>[o("span",Q,D(t.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:l(()=>[o("span",P,[i(g,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{V as T};