import{T as A}from"./Translations-45aaf279.js";import{d as m,a1 as w,v as b,$ as S,_ as f,o as t,b as d,e as a,H as N,J as k,M as y,ba as B,ag as D,ad as E,ah as $,c as u,w as c,bb as I,D as r,a as L,F as T,bc as R,bd as j,K as z,z as F,a2 as M,a3 as V,r as v}from"./index-cdff92b7.js";const H=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),s=w();function i(){n.$emit("click")}return{title:b(()=>s.t("base.systemTitle")),handleClick:i}}});const J={class:"side-action-container"},K={class:"action-list"};function U(n,s,i,o,g,h){return t(),d("div",J,[a("ul",K,[(t(),d(N,null,k(3,e=>a("li",{key:e,class:"action-item"}," Action "+y(e),1)),64))])])}const q=f(H,[["render",U],["__scopeId","data-v-9309dda5"]]),G=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){D(),E();const n=w();return{commandList:b(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:o=>{o==null||o.click()}}}}),O=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const P=a("div",{style:{padding:"0 12px"}},[a("img",{src:O})],-1),Q={class:"navigation-avatar__dropdown-command"};function W(n,s,i,o,g,h){const e=T,l=R,_=j,x=I;return t(),u(x,{class:"navigation-avatar",trigger:"click"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(t(!0),d(N,null,k(n.commandList,(p,C)=>(t(),u(l,{key:C,onClick:tn=>n.handleCommand(p)},{default:c(()=>[a("div",Q,[r(e,null,{default:c(()=>[(t(),u(L(p.icon)))]),_:2},1024),a("span",null,y(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[P]),_:1})}const X=f(G,[["render",W]]),Y=m({name:"NavigationNavBar",components:{Translations:A,NavigationSideAction:q,NavigationAvatar:X},props:{fixed:{type:Boolean,default:!0}}});const Z=n=>(M("data-v-6f983a1d"),n=n(),V(),n),nn={class:"navbar-header-box"},an=Z(()=>a("div",{style:{flex:"1"}},null,-1));function on(n,s,i,o,g,h){const e=v("NavigationSideAction"),l=v("NavigationAvatar"),_=v("Translations");return t(),d("div",null,[a("header",{class:F(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[a("div",nn,[z(n.$slots,"default",{},void 0,!0),an,r(e),r(l),r(_,{dark:""})])],2)])}const cn=f(Y,[["render",on],["__scopeId","data-v-6f983a1d"]]);export{cn as N};
