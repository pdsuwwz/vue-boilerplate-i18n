import{d as u,aw as i,C as c,_ as f,b as V,ab as o,w as t,o as g}from"./index-BbiW2NEH.js";import{d as b,e as h,E as w}from"./input-BNoubFAg.js";import"./index-DvmZnrwf.js";import"./castArray-8Mb1YDtH.js";const _=u({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){i();const l=c();return{refForm:l,validateRules:async()=>new Promise(r=>{l.value.validate(m=>{r(!!m)})})}}}),j={class:"project-form-container"};function R(e,l,p,r,m,F){const s=w,n=h,d=b;return g(),V("div",j,[o(d,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"145px"},{default:t(()=>[o(n,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(s,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.modelValue.name=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(n,{prop:"corpName",label:e._t("project.corpName"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(s,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=a=>e.modelValue.corpName=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.corpName")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(n,{prop:"notes",label:e._t("project.notes")},{default:t(()=>[o(s,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=a=>e.modelValue.notes=a),type:"textarea",placeholder:e._t("project.notes"),maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])])}const C=f(_,[["render",R],["__scopeId","data-v-e41c7062"]]);export{C as default};
