import{d as p,t as i,_ as F,o as f,b as c,D as o,w as a}from"./index-c77263e2.js";import{a as _,E as V,b as g}from"./input-cae6c494.js";const b=p({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){const l=i();return{refForm:l,validateRules:async()=>new Promise(t=>{l.value.validate(n=>{t(!!n)})})}}});const w={class:"project-form-container"};function E(e,l,s,t,n,h){const r=V,m=g,d=_;return f(),c("div",w,[o(d,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:a(()=>[o(m,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"请输入项目名称"})},{default:a(()=>[o(r,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=u=>e.modelValue.name=u),maxlength:"30","show-word-limit":"",placeholder:"请输入项目名称"},null,8,["modelValue"])]),_:1},8,["label","rules"]),o(m,{prop:"corpName",label:"公司名称",rules:e.getRequiredRules({trigger:"change",message:"请输入公司名称"})},{default:a(()=>[o(r,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=u=>e.modelValue.corpName=u),maxlength:"30","show-word-limit":"",placeholder:"请输入公司名称"},null,8,["modelValue"])]),_:1},8,["rules"]),o(m,{prop:"notes",label:"备注"},{default:a(()=>[o(r,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=u=>e.modelValue.notes=u),type:"textarea",placeholder:"请输入备注",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const C=F(b,[["render",E],["__scopeId","data-v-fde3c6b4"]]);export{C as default};