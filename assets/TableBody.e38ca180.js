import{p as n,q as D,j as s,d as l,i as p,_ as d,o as u,b as a,e as o,F as m,u as h,t as E,m as _,c as j,v as g,x as y,r as C}from"./index.17abac66.js";import f from"./ProjectItem.a8c1af38.js";function b(e){return n({url:"/project/list",method:"get",params:e})}function P(e){return n({url:"/project/toggle_status",method:"get",params:e})}const F={id:Math.random(),name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},L=[{id:"111",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"",isPublished:!1,createTime:"2021.02.29"}],J=["Alabama","Alaska","Arizona","\u6D4B\u8BD5","\u6D4B\u8BD51","\u6D4B\u8BD52","\u6D4B\u8BD53","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],N=D("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{},actions:{async getSearchProjectByQuery(e){await s(2e3);const t=await b(e);return this.filterResponse(t,null,()=>{})},async getProjectList(e={}){await s(2e3);const t={msg:"ok",error:0,data:{projectList:L}};return this.filterResponse(t,()=>{this.projectList=t.data.projectList},()=>{})},async createProject(e){const t={msg:"ok",error:0,data:{}};return await s(1e3),this.filterResponse(t,()=>{this.projectList.push(JSON.parse(JSON.stringify(F)))})},async updateTogglePublishStatus({commit:e},t){const r=await P(t);return this.filterResponse(r,null)}}}),S=l({name:"ProjectTableBody",components:{ProjectItem:f},setup(){const e=N();return{projectList:p(()=>e.projectList)}}}),k=""+new URL("project-empty.ef06cc83.svg",import.meta.url).href;const T=e=>(g("data-v-f338549a"),e=e(),y(),e),v={class:"project-table-body-container"},w={class:"project-table-body-container__inner"},I={key:0,class:"project-empty-box"},M=T(()=>o("img",{src:k,alt:"Empty"},null,-1));function O(e,t,r,x,V,A){const i=C("ProjectItem");return u(),a("div",v,[o("div",w,[(u(!0),a(m,null,h(e.projectList,(c,B)=>(u(),j(i,{key:B,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?_("",!0):(u(),a("div",I,[M,o("span",null,E(e._t("base.empty")),1)]))])])}const R=d(S,[["render",O],["__scopeId","data-v-f338549a"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{R as P,z as T,J as c,N as u};