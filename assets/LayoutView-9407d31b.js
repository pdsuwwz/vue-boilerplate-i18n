import{d as i,_,o as r,b as k,D as t,w as o,r as a,e as n,M as $,a0 as N,ag as B,c as h,a5 as y,a7 as S}from"./index-cdff92b7.js";import{N as w}from"./NavBar-977797ee.js";import"./Translations-45aaf279.js";const b=i({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}});const G={class:"go-back-container"},L={class:"go-back-title"};function V(e,l,p,u,d,m){const s=N,c=a("router-link");return r(),k("div",G,[t(c,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(s,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",L,$(e.title),1)]),_:1},8,["to"])])}const x=_(b,[["render",V],["__scopeId","data-v-35983dc8"]]),C=i({name:"LayoutView",components:{NavigationNavBar:w,NavigationSideGoBack:x},setup(){return B(),{}}}),D=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function I(e,l,p,u,d,m){const s=a("NavigationSideGoBack"),c=a("NavigationNavBar"),f=S,g=a("router-view"),v=y;return r(),h(v,null,{top:o(()=>[t(c,{fixed:!1},{default:o(()=>[t(s,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(f,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[D]),_:1},8,["title"])]),content:o(()=>[t(g)]),_:1})}const M=_(C,[["render",I]]);export{M as default};
