import{j as T,aJ as j,aK as G,aL as B,aM as K,aN as q,t as U,aO as R,d as P,B as Z,G as Y,o as l,b as p,c as f,w as _,a as I,O as C,W as z,X as g,T as E,Y as A,a0 as H,as as J,aP as N,e as d,F as L,aQ as Q,aw as W,_ as X,Z as y,aa as $,ag as x,ax as ee,a6 as S,a7 as O,a8 as F,$ as w,aR as te,aS as ne,ap as oe}from"./index-DRvp6Ep9.js";import{e as se,f as ae,h as re,j as le,c as ie,E as ue,d as ce}from"./input-DV4CBCem.js";import{a as de}from"./index-DbGruRb_.js";import"./castArray-DaLH7MeG.js";var fe="[object Object]",pe=Function.prototype,me=Object.prototype,D=pe.toString,_e=me.hasOwnProperty,ye=D.call(Object);function ge(e){if(!T(e)||j(e)!=fe)return!1;var t=se(e);if(t===null)return!0;var n=_e.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&D.call(n)==ye}function ve(e,t,n){var s=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(a);++s<a;)u[s]=e[s+t];return u}function he(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function ke(e,t){return t.length<2?e:G(e,ve(t,0,-1))}function be(e,t){return t=B(t,e),e=ke(e,t),e==null||delete e[K(he(t))]}function Ce(e){return ge(e)?void 0:e}var $e=1,we=2,Ae=4,Pe=de(function(e,t){var n={};if(e==null)return n;var s=!1;t=q(t,function(u){return u=B(u,e),s||(s=u.length>1),u}),ae(e,re(e),n),s&&(n=le(n,$e|we|Ae,Ce));for(var a=t.length;a--;)be(n,t[a]);return n});const Ee=U({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:R}}),Le={click:e=>e instanceof MouseEvent},Se=P({name:"ElLink"}),Oe=P({...Se,props:Ee,emits:Le,setup(e,{emit:t}){const n=e,s=Z("link"),a=Y(()=>[s.b(),s.m(n.type),s.is("disabled",n.disabled),s.is("underline",n.underline&&!n.disabled)]);function u(o){n.disabled||t("click",o)}return(o,v)=>(l(),p("a",{class:E(C(a)),href:o.disabled||!o.href?void 0:o.href,target:o.disabled||!o.href?void 0:o.target,onClick:u},[o.icon?(l(),f(C(z),{key:0},{default:_(()=>[(l(),f(I(o.icon)))]),_:1})):g("v-if",!0),o.$slots.default?(l(),p("span",{key:1,class:E(C(s).e("inner"))},[A(o.$slots,"default")],2)):g("v-if",!0),o.$slots.icon?A(o.$slots,"icon",{key:2}):g("v-if",!0)],10,["href","target"]))}});var Fe=H(Oe,[["__file","link.vue"]]);const Be=J(Fe),Ie={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ne=d("path",{fill:"currentColor",d:"M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.3 131.3 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.7 130.7 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.3 109.3 0 0 1 128 188m123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.5 130.5 0 0 0 226.48 128a130.4 130.4 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51c36 0 68.63 13.67 94.49 39.52c19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75"},null,-1),De=[Ne];function Me(e,t){return l(),p("svg",Ie,[...De])}const Ve=N({name:"ph-eye-slash-bold",render:Me}),Te={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},je=d("path",{fill:"currentColor",d:"M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.4 130.4 0 0 1 29.52 128a130.5 130.5 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.4 130.4 0 0 1 226.48 128a130.5 130.5 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"},null,-1),Ge=[je];function Ke(e,t){return l(),p("svg",Te,[...Ge])}const qe=N({name:"ph-eye-bold",render:Ke}),Ue=P({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=W(),t=L(!1),n=L();function s(){t.value=!t.value}function a(i){const c={},m=i.type==="password";return m?c.type=t.value?"text":"password":c.type="text",{clearable:!m,placeholder:i.placeholder,...c}}function u(i){return{rules:Q(i.rules)?i.rules.call(e):"",...Pe(i,["rules"])}}function o(i){const c={};return Object.keys(i).forEach(m=>{c[m]=i[m].bind(e.$parent,n.value)}),c}function v(i){i.click.call(e.$parent,n.value)}function k(){e.$emit("on-submit",n.value)}return{showPassword:t,boxForm:n,tooglePassword:s,getInputItemAttrs:a,getFormItemAttrs:u,getActionItemEvent:o,handleClickLink:v,onSubmit:k}}}),Re={class:"user-account-container-layout"},Ze={class:"form-title"},Ye={class:"form-title-icon"},ze={class:"form-title-text"},He={class:"form-desc-text"},Je={class:"form-custom-label"},Qe={class:"flex items-center cursor-pointer"};function We(e,t,n,s,a,u){const o=ee,v=Be,k=qe,i=Ve,c=ue,m=ce,M=oe,V=ie;return l(),p("div",Re,[d("div",Ze,[d("div",Ye,[e.titleIcon?(l(),f(o,{key:0,icon:e.titleIcon},null,8,["icon"])):g("",!0),A(e.$slots,"titleIcon",{},void 0,!0)]),d("p",ze,y(e.title),1),d("p",He,y(e.desc),1)]),$(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[2]||(t[2]=x(r=>e.onSubmit(),["enter"]))},{default:_(()=>[(l(!0),p(S,null,O(e.formConfig,(r,b)=>(l(),f(m,w({key:b,ref_for:!0},e.getFormItemAttrs(r.attrs)),{default:_(()=>[d("div",Je,[d("p",null,y(r.label),1),r.link?(l(),f(v,{key:0,type:"primary",underline:!1,onClick:h=>e.handleClickLink(r.link)},{default:_(()=>[F(y(r.link.text),1)]),_:2},1032,["onClick"])):g("",!0)]),$(c,w({modelValue:e.formData[r.attrs.prop],"onUpdate:modelValue":h=>e.formData[r.attrs.prop]=h,ref_for:!0},e.getInputItemAttrs(r)),te({_:2},[r.prefixIcon?{name:"prefix",fn:_(()=>[(l(),f(I(r.prefixIcon),{class:"input-icon-prefix"}))]),key:"0"}:void 0,r.type==="password"?{name:"suffix",fn:_(()=>[d("div",Qe,[e.showPassword?(l(),f(k,{key:0,onClick:t[0]||(t[0]=h=>e.tooglePassword())})):(l(),f(i,{key:1,onClick:t[1]||(t[1]=h=>e.tooglePassword())}))])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),p(S,null,O(e.actionList,(r,b)=>(l(),p("div",{key:`${b}-`,class:"submit-form-action-list"},[$(M,w({ref_for:!0},r.attrs,{class:"submit-form-action-button"},ne(e.getActionItemEvent(r.on)||{})),{default:_(()=>[F(y(r.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const nt=X(Ue,[["render",We],["__scopeId","data-v-7abcaf5a"]]);export{nt as default};
