import{d as I,ae as L,af as k,ad as C,ag as R,t as l,a4 as x,a1 as A,v as T,y as U,V as $,ah as h,ac as E,$ as M,_ as D,r as u,o as V,b as B,e as o,M as O,D as p,w as P,O as q,a2 as F,a3 as N}from"./index-c77263e2.js";import j from"./ContainerLayout-c5501e06.js";import{T as z}from"./Translations-d65d5c4b.js";import"./input-cae6c494.js";import"./lodash-ae3db68c.js";const G=I({name:"UserAccountLogin",components:{UserAccountContainerLayout:j,Promotion:L,Translations:z},setup(){const{proxy:t}=M(),m=k(),g=C(),_=R(),a=l(!0),n=l(""),s=l(""),c=x({email:"vite.admin@gmail.com",password:"123456"}),e=A(),y=T(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:e.t("login.signin"),on:{click(i){f(i)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules(){return[t.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),t.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return t.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function r(i=!1){a.value=i}function f(i){a.value||i.validate(async w=>{if(!w)return;n.value="",s.value="",r(!0);const{error:S,data:v,msg:b}=await m.login(c);if(S){n.value=" ",s.value=b,r(!1);return}h.set("token",v.user.token),h.set("name",v.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{E({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}return r(!0),U(()=>{$(()=>{r(!1)})}),{isLoading:a,inputErrorEmail:n,inputErrorPassword:s,formData:c,configLogin:y,setLoading:r,onSubmit:f}}}),H=""+new URL("pinia-7ed2c830.svg",import.meta.url).href;const d=t=>(F("data-v-588fc2c8"),t=t(),N(),t),J={class:"user-account-login"},K={class:"user-account-nav"},Q={class:"nav-left"},W=d(()=>o("div",{class:"nav-logo"},null,-1)),X=d(()=>o("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"},te=d(()=>o("img",{src:H,alt:""},null,-1));function oe(t,m,g,_,a,n){const s=u("Translations"),c=u("UserAccountContainerLayout"),e=u("MyFooter");return V(),B("div",J,[o("div",K,[o("div",Q,[W,X,o("div",Y,O(t._t("base.systemTitle")),1)]),o("div",Z,[p(s)])]),o("div",ee,[p(c,q(t.configLogin,{"form-data":t.formData,onOnSubmit:t.onSubmit}),{titleIcon:P(()=>[te]),_:1},16,["form-data","onOnSubmit"])]),p(e)])}const ce=D(G,[["render",oe],["__scopeId","data-v-588fc2c8"]]);export{ce as default};