import{_ as k}from"./index-Bd7ITgai.js";import{d as x,aC as L,aD as I,F as u,ar as R,at as S,G as A,a5 as E,I as T,aE as U,aA as $,aB as B,aF as D,aG as f,au as F,_ as j,o as O,b as P,e as o,T as v,Z as V,aa as p,w as q,$ as z,r as _}from"./index-CjVcAWbL.js";import G from"./ContainerLayout-CxcJVLn2.js";import{T as M}from"./Translations-DPec4dpO.js";import"./input-BtJLATIg.js";import"./castArray-DUA3sI8d.js";import"./index-BnvCFMzU.js";import"./popper-BHRUts1D.js";const N=x({name:"UserAccountLogin",components:{UserAccountContainerLayout:G,Promotion:L,Translations:M},setup(){const{proxy:t}=F(),s=I(),g=B(),m=D(),n=u(!0),r=u(""),a=u(""),c=R({email:"vite.admin@gmail.com",password:"123456"}),e=S.useI18n(),b=A(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:e.t("login.signin"),on:{click(l){d(l)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[t.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),t.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:f("span",{class:"text-16px i-ic:baseline-mail-lock"}),placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:a.value,rules(){return t.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:f("span",{class:"text-16px i-ri:lock-password-fill"}),placeholder:e.t("login.plspwd")}]}));function i(l=!1){n.value=l}function d(l){n.value||l.validate(async h=>{if(!h)return;r.value="",a.value="",i(!0);const{error:y,data:w,msg:C}=await s.login(c);if(y){r.value=" ",a.value=C,i(!1);return}U.set("token",w.user.token),m.replace(`/${g.params.locale||""}`).then(()=>{$({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}return i(!0),E(()=>{T(()=>{i(!1)})}),{isLoading:n,inputErrorEmail:r,inputErrorPassword:a,formData:c,configLogin:b,setLoading:i,onSubmit:d}}}),Y=""+new URL("pinia-4CdhEOYF.svg",import.meta.url).href,Z={class:"user-account-nav"},H={class:"nav-left"},J={class:"nav-title"},K={class:"nav-right"},Q={class:"user-account-body"};function W(t,s,g,m,n,r){const a=_("Translations"),c=_("UserAccountContainerLayout"),e=k;return O(),P("div",{class:v(["user-account-login",["bgimage-images-logo-background-jpg","bg-no-repeat bg-cover"]])},[o("div",Z,[o("div",H,[o("div",{class:v(["nav-logo",["bgimage-images-i18n-svg","bg-no-repeat bg-contain bg-center"]])}),s[0]||(s[0]=o("div",{class:"nav-circle"},null,-1)),o("div",J,V(t._t("base.systemTitle")),1)]),o("div",K,[p(a)])]),o("div",Q,[p(c,z(t.configLogin,{"form-data":t.formData,onOnSubmit:t.onSubmit}),{titleIcon:q(()=>s[1]||(s[1]=[o("img",{src:Y,alt:""},null,-1)])),_:1},16,["form-data","onOnSubmit"])]),p(e)])}const ie=j(N,[["render",W],["__scopeId","data-v-811e182d"]]);export{ie as default};
