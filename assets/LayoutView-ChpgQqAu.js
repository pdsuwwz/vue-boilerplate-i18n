import B from"./LayoutArea-CfeNrh0K.js";import{_ as N}from"./LayoutSection-D6tJkEII.js";import{_}from"./NavBar-Dkfn4fXJ.js";import{d as c,_ as r,b as w,o as l,ad as t,w as o,e,az as b,a3 as y,r as p,aK as S,c as h}from"./index-BB-PUWqq.js";import"./index-DfxtRmy8.js";import"./Translations-DEWDEVAr.js";import"./popper-Cyf6O7Pz.js";import"./index-T9JoAIeN.js";import"./castArray-DuUKusP4.js";const L=c({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),V={class:"go-back-container"},C={class:"go-back-title"};function G(n,a,m,d,f,g){const i=b,s=p("router-link");return l(),w("div",V,[t(s,{to:`/${n.$route.params.locale||""}`},{default:o(()=>[t(i,{icon:"iconarrow_left",class:"go-back-icon"}),e("h1",C,y(n.title),1)]),_:1},8,["to"])])}const u=r(L,[["render",G],["__scopeId","data-v-35983dc8"]]),x=c({name:"LayoutView",components:{NavigationNavBar:_,NavigationSideGoBack:u},setup(){return S(),{}}});function I(n,a,m,d,f,g){const i=u,s=_,v=N,$=p("router-view"),k=B;return l(),h(k,null,{top:o(()=>[t(s,{fixed:!1},{default:o(()=>[t(i,{title:n._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(v,{"has-divider":"",title:n._t("result.title")},{default:o(()=>a[0]||(a[0]=[e("ul",null,[e("li",null,"111"),e("li",null,"222"),e("li",null,"333")],-1)])),_:1},8,["title"])]),content:o(()=>[t($)]),_:1})}const H=r(x,[["render",I]]);export{H as default};
