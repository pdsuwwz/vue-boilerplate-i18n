import{d as m,by as A,aH as B,aE as E,as as g,E as w,aI as $,_ as v,o as t,c as u,w as c,bz as I,aa as r,b as l,a5 as b,e as o,a as T,V as k,a4 as C,T as D,bA as L,bB as V,av as j,W as R,P as z,r as q,at as F,au as H}from"./index-XOxVdDgf.js";import{T as M}from"./Translations-LjUx0Dmo.js";const O=m({name:"NavigationAvatar",components:{SwitchButton:A},setup(){B(),E();const n=g.useI18n();return{commandList:w(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:a=>{a==null||a.click()}}}}),P=""+new URL("navigation-avatar-v7Eq-VOa.webp",import.meta.url).href,U=o("div",{style:{outline:"none",padding:"0 12px"}},[o("img",{src:P})],-1),W={class:"navigation-avatar__dropdown-command"};function G(n,s,i,a,f,h){const e=D,d=L,_=V,x=I;return t(),u(x,{class:"navigation-avatar",trigger:"hover"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(t(!0),l(C,null,b(n.commandList,(p,S)=>(t(),u(d,{key:S,onClick:tn=>n.handleCommand(p)},{default:c(()=>[o("div",W,[r(e,null,{default:c(()=>[(t(),u(T(p.icon)))]),_:2},1024),o("span",null,k(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[U]),_:1})}const y=v(O,[["render",G]]),J=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=j(),s=g.useI18n();function i(){n.$emit("click")}return{title:w(()=>s.t("base.systemTitle")),handleClick:i}}}),K={class:"side-action-container"},Q={class:"action-list"};function X(n,s,i,a,f,h){return t(),l("div",K,[o("ul",Q,[(t(),l(C,null,b(3,e=>o("li",{key:e,class:"action-item"}," Action "+k(e),1)),64))])])}const N=v(J,[["render",X],["__scopeId","data-v-9309dda5"]]),Y=m({name:"NavigationNavBar",components:{Translations:M,NavigationSideAction:N,NavigationAvatar:y},props:{fixed:{type:Boolean,default:!0}}}),Z=n=>(F("data-v-6f983a1d"),n=n(),H(),n),nn={class:"navbar-header-box"},on=Z(()=>o("div",{style:{flex:"1"}},null,-1));function an(n,s,i,a,f,h){const e=N,d=y,_=q("Translations");return t(),l("div",null,[o("header",{class:z(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",nn,[R(n.$slots,"default",{},void 0,!0),on,r(e),r(d),r(_,{dark:""})])],2)])}const cn=v(Y,[["render",an],["__scopeId","data-v-6f983a1d"]]);export{cn as _};
