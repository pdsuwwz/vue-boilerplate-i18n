import{_ as k}from"./index-HCiWgBUk.js";import{d as S,aD as x,aE as L,F as l,ar as R,as as E,G as T,a5 as A,I as U,aF as $,aB as B,aC as D,aG as F,aH as _,av as j,_ as O,o as P,b as V,e as o,T as f,Z as q,aa as u,w as z,$ as G,r as v,at as M,au as N}from"./index-8KwthGsz.js";import H from"./ContainerLayout-DZwDPta0.js";import{T as Y}from"./Translations-DWVszPmw.js";import"./input-DAciTb2x.js";import"./castArray-C3qf3bx_.js";import"./index-DLaI7zwA.js";import"./popper-BB11FKZ8.js";const Z=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:H,Promotion:x,Translations:Y},setup(){const{proxy:t}=j(),p=L(),g=D(),m=F(),a=l(!0),n=l(""),s=l(""),c=R({email:"vite.admin@gmail.com",password:"123456"}),e=E.useI18n(),b=T(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:e.t("login.signin"),on:{click(i){d(i)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules(){return[t.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),t.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:_("span",{class:"text-16px i-ic:baseline-mail-lock"}),placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return t.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:_("span",{class:"text-16px i-ri:lock-password-fill"}),placeholder:e.t("login.plspwd")}]}));function r(i=!1){a.value=i}function d(i){a.value||i.validate(async w=>{if(!w)return;n.value="",s.value="",r(!0);const{error:y,data:C,msg:I}=await p.login(c);if(y){n.value=" ",s.value=I,r(!1);return}$.set("token",C.user.token),m.replace(`/${g.params.locale||""}`).then(()=>{B({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}return r(!0),A(()=>{U(()=>{r(!1)})}),{isLoading:a,inputErrorEmail:n,inputErrorPassword:s,formData:c,configLogin:b,setLoading:r,onSubmit:d}}}),J=""+new URL("pinia-4CdhEOYF.svg",import.meta.url).href,h=t=>(M("data-v-811e182d"),t=t(),N(),t),K={class:"user-account-nav"},Q={class:"nav-left"},W=h(()=>o("div",{class:"nav-circle"},null,-1)),X={class:"nav-title"},ee={class:"nav-right"},te={class:"user-account-body"},oe=h(()=>o("img",{src:J,alt:""},null,-1));function se(t,p,g,m,a,n){const s=v("Translations"),c=v("UserAccountContainerLayout"),e=k;return P(),V("div",{class:f(["user-account-login",["bgimage-images-logo-background-jpg","bg-no-repeat bg-cover"]])},[o("div",K,[o("div",Q,[o("div",{class:f(["nav-logo",["bgimage-images-i18n-svg","bg-no-repeat bg-contain bg-center"]])}),W,o("div",X,q(t._t("base.systemTitle")),1)]),o("div",ee,[u(s)])]),o("div",te,[u(c,G(t.configLogin,{"form-data":t.formData,onOnSubmit:t.onSubmit}),{titleIcon:z(()=>[oe]),_:1},16,["form-data","onOnSubmit"])]),u(e)])}const ge=O(Z,[["render",se],["__scopeId","data-v-811e182d"]]);export{ge as default};