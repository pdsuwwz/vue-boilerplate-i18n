import{d as i,i as n,k as v,f as c,r as d,o as l,l as m,m as u,x as w,G as f}from"./vendor.0a72399e.js";import{a as p,_ as x}from"./index.3c508bb9.js";const D={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},g=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:t=>t.demoList},actions:{async getResultOverview({commit:t},a){await p(800);const e={msg:"ok",error:0,data:D};return this.filterResponse(e,({data:s})=>{this.overviewData=s},()=>{})}}}),R=n({name:"ResultOverView",setup(){const t=g(),a=v(),e=c(()=>t.overviewData);return async function(){const{error:s,data:o}=await t.getResultOverview({projectId:a.params.projectId})}(),{overviewData:e}}}),b={style:{height:"100%",flex:"1",border:"1px solid"}};var L=x(R,[["render",function(t,a,e,s,o,h){const r=d("LayoutSection");return l(),m(r,{"flex-content":"",title:t.overviewData.title},{default:u(()=>[w("div",b,f(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-6022bdaf"]]);export{L as default};
