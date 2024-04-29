import{j as M,aP as T,aQ as U,aR as B,aS as j,aT as G,aU as q,t as K,aV as Z,d as P,C as Y,H,o as l,b as p,c as f,w as _,a as I,P as C,X as R,Y as g,U as E,Z as A,a2 as X,aW as z,e as d,G as S,aX as Q,aA as W,_ as J,$ as y,ad as $,ak as x,aC as ee,a8 as L,a9 as O,aa as F,a0 as w,aY as te,aZ as ne,au as oe}from"./index-DefLFGBz.js";import{e as se,f as ae,h as re,j as le,c as ie,E as ue,d as ce}from"./input-CH8FP1JS.js";var de="[object Object]",fe=Function.prototype,pe=Object.prototype,V=fe.toString,me=pe.hasOwnProperty,_e=V.call(Object);function ye(e){if(!M(e)||T(e)!=de)return!1;var t=se(e);if(t===null)return!0;var n=me.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&V.call(n)==_e}function ge(e,t,n){var s=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(a);++s<a;)u[s]=e[s+t];return u}function ve(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function he(e,t){return t.length<2?e:U(e,ge(t,0,-1))}function ke(e,t){return t=B(t,e),e=he(e,t),e==null||delete e[j(ve(t))]}function be(e){return ye(e)?void 0:e}var Ce=1,$e=2,we=4,Ae=G(function(e,t){var n={};if(e==null)return n;var s=!1;t=q(t,function(u){return u=B(u,e),s||(s=u.length>1),u}),ae(e,re(e),n),s&&(n=le(n,Ce|$e|we,be));for(var a=t.length;a--;)ke(n,t[a]);return n});const Pe=K({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:Z}}),Ee={click:e=>e instanceof MouseEvent},Se=["href","target"],Le=P({name:"ElLink"}),Oe=P({...Le,props:Pe,emits:Ee,setup(e,{emit:t}){const n=e,s=Y("link"),a=H(()=>[s.b(),s.m(n.type),s.is("disabled",n.disabled),s.is("underline",n.underline&&!n.disabled)]);function u(o){n.disabled||t("click",o)}return(o,v)=>(l(),p("a",{class:E(C(a)),href:o.disabled||!o.href?void 0:o.href,target:o.disabled||!o.href?void 0:o.target,onClick:u},[o.icon?(l(),f(C(R),{key:0},{default:_(()=>[(l(),f(I(o.icon)))]),_:1})):g("v-if",!0),o.$slots.default?(l(),p("span",{key:1,class:E(C(s).e("inner"))},[A(o.$slots,"default")],2)):g("v-if",!0),o.$slots.icon?A(o.$slots,"icon",{key:2}):g("v-if",!0)],10,Se))}});var Fe=X(Oe,[["__file","link.vue"]]);const Be=z(Fe),Ie={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ve=d("path",{fill:"currentColor",d:"M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.34 131.34 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.69 130.69 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.33 109.33 0 0 1 128 188m123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.48 130.48 0 0 0 226.48 128a130.36 130.36 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51c36 0 68.63 13.67 94.49 39.52c19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75"},null,-1),De=[Ve];function Ne(e,t){return l(),p("svg",Ie,[...De])}const Me={name:"ph-eye-slash-bold",render:Ne},Te={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ue=d("path",{fill:"currentColor",d:"M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"},null,-1),je=[Ue];function Ge(e,t){return l(),p("svg",Te,[...je])}const qe={name:"ph-eye-bold",render:Ge},Ke=P({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=W(),t=S(!1),n=S();function s(){t.value=!t.value}function a(i){const c={},m=i.type==="password";return m?c.type=t.value?"text":"password":c.type="text",{clearable:!m,placeholder:i.placeholder,...c}}function u(i){return{rules:Q(i.rules)?i.rules.call(e):"",...Ae(i,["rules"])}}function o(i){const c={};return Object.keys(i).forEach(m=>{c[m]=i[m].bind(e.$parent,n.value)}),c}function v(i){i.click.call(e.$parent,n.value)}function k(){e.$emit("on-submit",n.value)}return{showPassword:t,boxForm:n,tooglePassword:s,getInputItemAttrs:a,getFormItemAttrs:u,getActionItemEvent:o,handleClickLink:v,onSubmit:k}}}),Ze={class:"user-account-container-layout"},Ye={class:"form-title"},He={class:"form-title-icon"},Re={class:"form-title-text"},Xe={class:"form-desc-text"},ze={class:"form-custom-label"},Qe={class:"flex items-center cursor-pointer"};function We(e,t,n,s,a,u){const o=ee,v=Be,k=qe,i=Me,c=ue,m=ce,D=oe,N=ie;return l(),p("div",Ze,[d("div",Ye,[d("div",He,[e.titleIcon?(l(),f(o,{key:0,icon:e.titleIcon},null,8,["icon"])):g("",!0),A(e.$slots,"titleIcon",{},void 0,!0)]),d("p",Re,y(e.title),1),d("p",Xe,y(e.desc),1)]),$(N,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[2]||(t[2]=x(r=>e.onSubmit(),["enter"]))},{default:_(()=>[(l(!0),p(L,null,O(e.formConfig,(r,b)=>(l(),f(m,w({key:b,ref_for:!0},e.getFormItemAttrs(r.attrs)),{default:_(()=>[d("div",ze,[d("p",null,y(r.label),1),r.link?(l(),f(v,{key:0,type:"primary",underline:!1,onClick:h=>e.handleClickLink(r.link)},{default:_(()=>[F(y(r.link.text),1)]),_:2},1032,["onClick"])):g("",!0)]),$(c,w({modelValue:e.formData[r.attrs.prop],"onUpdate:modelValue":h=>e.formData[r.attrs.prop]=h,ref_for:!0},e.getInputItemAttrs(r)),te({_:2},[r.prefixIcon?{name:"prefix",fn:_(()=>[(l(),f(I(r.prefixIcon),{class:"input-icon-prefix"}))]),key:"0"}:void 0,r.type==="password"?{name:"suffix",fn:_(()=>[d("div",Qe,[e.showPassword?(l(),f(k,{key:0,onClick:t[0]||(t[0]=h=>e.tooglePassword())})):(l(),f(i,{key:1,onClick:t[1]||(t[1]=h=>e.tooglePassword())}))])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),p(L,null,O(e.actionList,(r,b)=>(l(),p("div",{key:`${b}-`,class:"submit-form-action-list"},[$(D,w({ref_for:!0},r.attrs,{class:"submit-form-action-button"},ne(e.getActionItemEvent(r.on)||{})),{default:_(()=>[F(y(r.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const et=J(Ke,[["render",We],["__scopeId","data-v-7abcaf5a"]]);export{et as default};
