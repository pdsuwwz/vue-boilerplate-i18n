import{i as k,a9 as x,k as S,a4 as R,L as c,S as _,Y as I,f as T,aa as A,X as C,r as u,o as D,v as E,x as e,G as O,n as g,m as U,D as q,b,M as P,O as $}from"./vendor.a530cadc.js";import j from"./ContainerLayout.0b065b37.js";import{T as z}from"./Translations.a36c473c.js";import{_ as F,u as G,c as M}from"./index.07b39c6a.js";import"./lodash.e51f0785.js";const V=k({name:"UserAccountLogin",components:{UserAccountContainerLayout:j,Promotion:x,Translations:z},setup(){const{proxy:a}=G(),p=M(),d=S(),v=R(),o=c(!0),i=c(""),t=c(""),l=_({email:"vite.admin@gmail.com",password:"123456"}),s=I(),y=T(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:i.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function n(r=!1){o.value=r}return n(!0),A(()=>{C(()=>{n(!1)})}),{isLoading:o,inputErrorEmail:i,inputErrorPassword:t,formData:l,configLogin:y,setLoading:n,onSubmit:function(r){o.value||r.validate(async L=>{if(!L)return;i.value="",t.value="",n(!0);const{error:w,data:f,msg:h}=await p.login(l);if(w)return i.value=" ",t.value=h,void n(!1);b.set("token",f.user.token),b.set("name",f.user.username),v.replace(`/${d.params.locale||""}`).then(()=>{a.$message({type:"success",message:s.t("login.logingSuccess")})}).catch(()=>{})})}}}}),m=a=>(P("data-v-107e6037"),a=a(),$(),a),X={class:"user-account-login"},Y={class:"user-account-nav"},B={class:"nav-left"},H=m(()=>e("div",{class:"nav-logo"},null,-1)),J=m(()=>e("div",{class:"nav-circle"},null,-1)),K={class:"nav-title"},N={class:"nav-right"},Q={class:"user-account-body"},W=m(()=>e("img",{src:"assets/pinia.7ed2c830.svg",alt:""},null,-1));var oa=F(V,[["render",function(a,p,d,v,o,i){const t=u("Translations"),l=u("UserAccountContainerLayout"),s=u("Footer");return D(),E("div",X,[e("div",Y,[e("div",B,[H,J,e("div",K,O(a._t("base.systemTitle")),1)]),e("div",N,[g(t)])]),e("div",Q,[g(l,q(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:U(()=>[W]),_:1},16,["form-data","onOnSubmit"])]),g(s)])}],["__scopeId","data-v-107e6037"]]);export{oa as default};
