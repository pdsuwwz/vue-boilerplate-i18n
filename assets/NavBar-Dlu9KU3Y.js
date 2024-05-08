import{d as m,bF as A,ax as g,H as w,aN as I,aJ as B,aM as $,_ as v,o as t,c as u,w as c,bG as D,ad as r,b as l,a9 as b,e as o,a as E,$ as k,a8 as C,X as L,bH as T,bI as j,aA as R,Z as U,U as z,r as F,ay as H,az as M}from"./index-BvTJVpzy.js";import{T as V}from"./Translations-CjhkBBWO.js";const G=m({name:"NavigationAvatar",components:{SwitchButton:A},setup(){I(),B();const n=g.useI18n();return{commandList:w(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:a=>{a==null||a.click()}}}}),J=""+new URL("navigation-avatar-C_sSr5U5.webp",import.meta.url).href,X=o("div",{style:{outline:"none",padding:"0 12px"}},[o("img",{src:J})],-1),Z={class:"navigation-avatar__dropdown-command"};function q(n,s,i,a,f,h){const e=L,d=T,_=j,y=D;return t(),u(y,{class:"navigation-avatar",trigger:"hover"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(t(!0),l(C,null,b(n.commandList,(p,S)=>(t(),u(d,{key:S,onClick:tn=>n.handleCommand(p)},{default:c(()=>[o("div",Z,[r(e,null,{default:c(()=>[(t(),u(E(p.icon)))]),_:2},1024),o("span",null,k(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[X]),_:1})}const N=v(G,[["render",q]]),K=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=R(),s=g.useI18n();function i(){n.$emit("click")}return{title:w(()=>s.t("base.systemTitle")),handleClick:i}}}),O={class:"side-action-container"},P={class:"action-list"};function Q(n,s,i,a,f,h){return t(),l("div",O,[o("ul",P,[(t(),l(C,null,b(3,e=>o("li",{key:e,class:"action-item"}," Action "+k(e),1)),64))])])}const x=v(K,[["render",Q],["__scopeId","data-v-9309dda5"]]),W=m({name:"NavigationNavBar",components:{Translations:V,NavigationSideAction:x,NavigationAvatar:N},props:{fixed:{type:Boolean,default:!0}}}),Y=n=>(H("data-v-6f983a1d"),n=n(),M(),n),nn={class:"navbar-header-box"},on=Y(()=>o("div",{style:{flex:"1"}},null,-1));function an(n,s,i,a,f,h){const e=x,d=N,_=F("Translations");return t(),l("div",null,[o("header",{class:z(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",nn,[U(n.$slots,"default",{},void 0,!0),on,r(e),r(d),r(_,{dark:""})])],2)])}const cn=v(W,[["render",an],["__scopeId","data-v-6f983a1d"]]);export{cn as _};