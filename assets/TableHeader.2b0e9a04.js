import{i,Y as o,f as c,o as a,v as r,H as d,C as l,V as m,G as p}from"./vendor.66220bb1.js";import{_ as u}from"./index.1a10f702.js";const f=i({name:"ProjectTableHeader",setup(){const e=o();return{list:c(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]),getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),h={class:"project-table-header-container"};var x=u(f,[["render",function(e,t,j,b,w,_){return a(),r("ul",h,[(a(!0),r(d,null,l(e.list,(s,n)=>(a(),r("li",{key:n,style:m(e.getHeadItem(s)),class:"project-table-header-container__head-item"},p(s.name),5))),128))])}],["__scopeId","data-v-ae7c48c0"]]);export{x as default};