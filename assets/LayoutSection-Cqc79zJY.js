import{d as i,_ as c,b as o,o as s,e as t,Z as a,D as n,a1 as l,H as r}from"./index-BbiW2NEH.js";const d=i({name:"LayoutSection",props:{hasDivider:{type:Boolean,default:!1},flexContent:{type:Boolean,default:!1},title:{type:String,default:""}}}),_={class:"layout-section-container"},u={class:"layout-section-container__header"},p={class:"layout-section-container__header-head text_nowrap"},h=["title"],f={class:"layout-section-container__header-action"},v={class:"layout-section-container__content"},y={key:0,class:"content-divider"};function m(e,$,B,C,k,D){return s(),o("div",_,[t("div",u,[t("div",p,[e.title?(s(),o("h1",{key:0,title:e.title,class:"layout-section-container__header-title text_nowrap"},l(e.title),9,h)):a("",!0),n(e.$slots,"head",{},void 0,!0)]),t("div",f,[n(e.$slots,"action",{},void 0,!0)])]),t("div",v,[e.hasDivider?(s(),o("div",y)):a("",!0),t("div",{class:r(["layout-section-container__content-inner",{"is-flex":e.flexContent}])},[n(e.$slots,"default",{},void 0,!0)],2)])])}const g=c(d,[["render",m],["__scopeId","data-v-ca9437e7"]]);export{g as _};
