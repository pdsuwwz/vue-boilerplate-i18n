import{T}from"./Translations.24270ba8.js";import{i as m,Y as b,f as w,o as i,v as d,x as n,H as x,C as h,G as N,a3 as S,a4 as j,k as B,b as A,r as o,l as u,m as s,n as l,p as I,J as L,A as $,M as G,O as H}from"./vendor.eda49c29.js";import{u as J,_ as p}from"./index.059c3ea8.js";const M=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=J(),t=b();return{title:w(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),O={class:"side-action-container"},Y={class:"action-list"};var q=p(M,[["render",function(a,t,f,g,k,_){return i(),d("div",O,[n("ul",Y,[(i(),d(x,null,h(3,e=>n("li",{key:e,class:"action-item"}," Action "+N(e),1)),64))])])}],["__scopeId","data-v-86e728c6"]]);const z=m({name:"NavigationAvatar",components:{SwitchButton:S},setup(){j(),B();const a=b();return{commandList:w(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{A.remove("token"),A.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),E={class:"navigation-avatar__dropdown-command"},F=m({name:"NavigationNavBar",components:{Translations:T,NavigationSideAction:q,NavigationAvatar:p(z,[["render",function(a,t,f,g,k,_){const e=o("el-icon"),c=o("el-dropdown-item"),r=o("el-dropdown-menu"),y=o("el-dropdown");return i(),u(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(r,null,{default:s(()=>[(i(!0),d(x,null,h(a.commandList,(v,C)=>(i(),u(c,{key:C,onClick:Q=>a.handleCommand(v)},{default:s(()=>[n("div",E,[l(e,null,{default:s(()=>[(i(),u(I(v.icon)))]),_:2},1024),n("span",null,N(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[D]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),K={class:"navbar-header-box"},P=(a=>(G("data-v-31d19f53"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var W=p(F,[["render",function(a,t,f,g,k,_){const e=o("NavigationSideAction"),c=o("NavigationAvatar"),r=o("Translations");return i(),d("div",null,[n("header",{class:$(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",K,[L(a.$slots,"default",{},void 0,!0),P,l(e),l(c),l(r,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{W as N};
