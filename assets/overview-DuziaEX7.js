import{_ as i}from"./LayoutSection-DqJZiJTT.js";import{ax as c,ay as u,d as v,G as p,aB as l,_ as d,o as _,c as w,w as f,e as m,Z as g}from"./index-CjVcAWbL.js";const h={title:"测试标题总览",content:"测试内容 overview"},D=c("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{},actions:{async getResultOverview(e){await u(800);const t={msg:"ok",error:0,data:h};return this.filterResponse(t,({data:o})=>{this.overviewData=o},()=>{})}}}),R=v({name:"ResultOverView",setup(){const e=D(),t=l(),o=p(()=>e.overviewData);async function s(){const{error:a,data:r}=await e.getResultOverview({projectId:t.params.projectId})}return s(),{overviewData:o}}}),x={style:{height:"100%",flex:"1",border:"1px solid"}};function y(e,t,o,s,a,r){const n=i;return _(),w(n,{"flex-content":"",title:e.overviewData.title},{default:f(()=>[m("div",x,g(e.overviewData.content),1)]),_:1},8,["title"])}const B=d(R,[["render",y],["__scopeId","data-v-83b889a5"]]);export{B as default};
