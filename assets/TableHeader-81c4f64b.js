import{d as l,aE as i,y as d,_,o as a,b as n,K as p,L as m,E as u,Q as f}from"./index-d4d9121b.js";const b=l({name:"ProjectTableHeader",setup(){const e=i(),r=d(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);function s(t){return{width:t.width,flex:t.width?"initial":1}}return{list:r,getHeadItem:s}}});const h={class:"project-table-header-container"};function j(e,r,s,t,y,g){return a(),n("ul",h,[(a(!0),n(p,null,m(e.list,(o,c)=>(a(),n("li",{key:c,style:u(e.getHeadItem(o)),class:"project-table-header-container__head-item"},f(o.name),5))),128))])}const H=_(b,[["render",j],["__scopeId","data-v-1cab7628"]]);export{H as default};