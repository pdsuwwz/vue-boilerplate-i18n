import{d as S,aQ as I,aR as L,aP as R,aS as k,x as l,aD as x,aE as C,y as A,A as T,ab as E,aT as U,aO as $,aH as D,_ as F,r as u,o as M,b as P,e as o,Q as B,F as p,w as O,R as V,aF as j,aG as q}from"./index-0fc8f1a1.js";import N from"./ContainerLayout-f51e89db.js";import{T as Q}from"./Translations-3961dc5b.js";import"./input-5d9c57fd.js";import"./lodash-daebe3f0.js";const z=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:N,Promotion:I,Translations:Q},setup(){const{proxy:t}=D(),m=L(),g=R(),_=k(),a=l(!0),n=l(""),s=l(""),c=x({email:"vite.admin@gmail.com",password:"123456"}),e=C.useI18n(),f=A(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:e.t("login.signin"),on:{click(i){v(i)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules(){return[t.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),t.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return t.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function r(i=!1){a.value=i}function v(i){a.value||i.validate(async h=>{if(!h)return;n.value="",s.value="",r(!0);const{error:y,data:b,msg:w}=await m.login(c);if(y){n.value=" ",s.value=w,r(!1);return}U.set("token",b.user.token),_.replace(`/${g.params.locale||""}`).then(()=>{$({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}return r(!0),T(()=>{E(()=>{r(!1)})}),{isLoading:a,inputErrorEmail:n,inputErrorPassword:s,formData:c,configLogin:f,setLoading:r,onSubmit:v}}}),G=""+new URL("pinia-7ed2c830.svg",import.meta.url).href;const d=t=>(j("data-v-537cba66"),t=t(),q(),t),H={class:"user-account-login"},J={class:"user-account-nav"},K={class:"nav-left"},W=d(()=>o("div",{class:"nav-logo"},null,-1)),X=d(()=>o("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"},te=d(()=>o("img",{src:G,alt:""},null,-1));function oe(t,m,g,_,a,n){const s=u("Translations"),c=u("UserAccountContainerLayout"),e=u("MyFooter");return M(),P("div",H,[o("div",J,[o("div",K,[W,X,o("div",Y,B(t._t("base.systemTitle")),1)]),o("div",Z,[p(s)])]),o("div",ee,[p(c,V(t.configLogin,{"form-data":t.formData,onOnSubmit:t.onSubmit}),{titleIcon:O(()=>[te]),_:1},16,["form-data","onOnSubmit"])]),p(e)])}const ce=F(z,[["render",oe],["__scopeId","data-v-537cba66"]]);export{ce as default};
