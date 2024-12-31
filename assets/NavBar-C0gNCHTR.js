import{d as m,br as B,av as w,P as h,aH as S,aD as D,aG as g,_ as v,o as e,c as u,w as r,ab as c,b as l,a8 as k,e as a,a as E,a2 as C,a7 as b,$ as L,aw as T,C as I,F as j,r as R}from"./index-C0vs9URT.js";import{a as F,b as U,c as V,T as z}from"./Translations-D2_jN8UU.js";import"./popper-BI8zXbxq.js";const G=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){S(),D();const n=w.useI18n();return{commandList:h(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{g.remove("token"),g.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),H=""+new URL("navigation-avatar-C_sSr5U5.webp",import.meta.url).href,M={class:"navigation-avatar__dropdown-command"};function P(n,o,i,t,f,$){const s=L,d=U,_=V,y=F;return e(),u(y,{class:"navigation-avatar",trigger:"hover"},{dropdown:r(()=>[c(_,null,{default:r(()=>[(e(!0),l(b,null,k(n.commandList,(p,A)=>(e(),u(d,{key:A,onClick:Y=>n.handleCommand(p)},{default:r(()=>[a("div",M,[c(s,null,{default:r(()=>[(e(),u(E(p.icon)))]),_:2},1024),a("span",null,C(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[o[0]||(o[0]=a("div",{style:{outline:"none",padding:"0 12px"}},[a("img",{src:H})],-1))]),_:1})}const x=v(G,[["render",P]]),q=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=T(),o=w.useI18n();function i(){n.$emit("click")}return{title:h(()=>o.t("base.systemTitle")),handleClick:i}}}),J={class:"side-action-container"},K={class:"action-list"};function O(n,o,i,t,f,$){return e(),l("div",J,[a("ul",K,[(e(),l(b,null,k(3,s=>a("li",{key:s,class:"action-item"}," Action "+C(s),1)),64))])])}const N=v(q,[["render",O],["__scopeId","data-v-9309dda5"]]),Q=m({name:"NavigationNavBar",components:{Translations:z,NavigationSideAction:N,NavigationAvatar:x},props:{fixed:{type:Boolean,default:!0}}}),W={class:"navbar-header-box"};function X(n,o,i,t,f,$){const s=N,d=x,_=R("Translations");return e(),l("div",null,[a("header",{class:j(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[a("div",W,[I(n.$slots,"default",{},void 0,!0),o[0]||(o[0]=a("div",{style:{flex:"1"}},null,-1)),c(s),c(d),c(_,{dark:""})])],2)])}const an=v(Q,[["render",X],["__scopeId","data-v-0368ae15"]]);export{an as _};
