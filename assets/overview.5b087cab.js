import{d as i,i as n,k as v,f as d,r as c,o as l,l as m,m as u,x as w,G as f}from"./vendor.6e796c6a.js";import{a as p,_ as x}from"./index.eb9b51d5.js";const D={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},g=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:e=>e.demoList},actions:{async getResultOverview({commit:e},a){await p(800);const t={msg:"ok",error:0,data:D};return this.filterResponse(t,({data:s})=>{this.overviewData=s},()=>{})}}}),R=n({name:"ResultOverView",setup(){const e=g(),a=v(),t=d(()=>e.overviewData);return async function(){const{error:s,data:o}=await e.getResultOverview({projectId:a.params.projectId})}(),{overviewData:t}}}),b={style:{height:"100%",flex:"1",border:"1px solid"}};var L=x(R,[["render",function(e,a,t,s,o,h){const r=c("LayoutSection");return l(),m(r,{"flex-content":"",title:e.overviewData.title},{default:u(()=>[w("div",b,f(e.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-6022bdaf"]]);export{L as default};