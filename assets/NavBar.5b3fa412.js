import{T as L}from"./Translations.d831d361.js";import{d as u,y as h,i as _,C as S,_ as p,o,b as d,e as n,F as N,u as x,t as y,J as T,K as B,L as I,M as w,r as i,c as m,w as s,h as l,a as $,N as F,n as J,v as K,x as j}from"./index.a4840dd9.js";const M=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=S(),t=h();return{title:_(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),R={class:"side-action-container"},U={class:"action-list"},q=p(M,[["render",function(a,t,f,g,b,k){return o(),d("div",R,[n("ul",U,[(o(),d(N,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+y(e),1)),64))])])}],["__scopeId","data-v-97ff2a97"]]),z=u({name:"NavigationAvatar",components:{SwitchButton:T},setup(){B(),I();const a=h();return{commandList:_(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{w.remove("token"),w.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=""+new URL("navigation-avatar.d1925bd8.webp",import.meta.url).href,E=n("div",{style:{padding:"0 12px"}},[n("img",{src:D})],-1),G={class:"navigation-avatar__dropdown-command"},H=u({name:"NavigationNavBar",components:{Translations:L,NavigationSideAction:q,NavigationAvatar:p(z,[["render",function(a,t,f,g,b,k){const e=i("el-icon"),c=i("el-dropdown-item"),r=i("el-dropdown-menu"),A=i("el-dropdown");return o(),m(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(r,null,{default:s(()=>[(o(!0),d(N,null,x(a.commandList,(v,C)=>(o(),m(c,{key:C,onClick:Q=>a.handleCommand(v)},{default:s(()=>[n("div",G,[l(e,null,{default:s(()=>[(o(),m($(v.icon)))]),_:2},1024),n("span",null,y(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[E]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),O={class:"navbar-header-box"},P=(a=>(K("data-v-3730fb23"),a=a(),j(),a))(()=>n("div",{style:{flex:"1"}},null,-1)),X=p(H,[["render",function(a,t,f,g,b,k){const e=i("NavigationSideAction"),c=i("NavigationAvatar"),r=i("Translations");return o(),d("div",null,[n("header",{class:J(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",O,[F(a.$slots,"default",{},void 0,!0),P,l(e),l(c),l(r,{dark:""})])],2)])}],["__scopeId","data-v-3730fb23"]]);export{X as N};
