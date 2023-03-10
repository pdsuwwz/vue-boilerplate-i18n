import{i as je,f as ee,h as Fe,j as Me,k as re,N as Oe,u as De,U as H,l as Q,I as te,C as fe,m as Re,d as j,n as xe,p as We,q as He,t as b,v as L,x as Ke,y as Ue,o as C,c as U,w as d,e as B,z as W,A as i,B as ie,D as h,E as qe,b as K,F as me,G as ge,H as ze,J as Ge,K as D,L as he,M as ae,O as ne,P as R,Q as ce,R as ve,S as Xe,T as Je,V as _e,W as Y,X as Qe,Y as Ye,Z as ue,$ as ye,_ as q,r as A,a0 as be,a1 as $e,a2 as Ze,a3 as et,a4 as tt,a5 as at,a6 as nt,a7 as ot}from"./index-cdff92b7.js";import{u as st,E as lt}from"./input-a9d84f9a.js";import{N as rt}from"./NavBar-977797ee.js";import{l as it}from"./lodash-94d6a48a.js";import{c as ct,P as ut,u as dt}from"./TableBody-587c903a.js";import pt from"./ProjectForm-f6ac99bb.js";import ft from"./TableHeader-1d7d9cf5.js";import"./Translations-45aaf279.js";import"./ProjectItem-934bed00.js";var mt=/\s/;function gt(e){for(var a=e.length;a--&&mt.test(e.charAt(a)););return a}var ht=/^\s+/;function vt(e){return e&&e.slice(0,gt(e)+1).replace(ht,"")}var de=0/0,_t=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,bt=/^0o[0-7]+$/i,$t=parseInt;function pe(e){if(typeof e=="number")return e;if(je(e))return de;if(ee(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ee(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=vt(e);var o=yt.test(e);return o||bt.test(e)?$t(e.slice(2),o?2:8):_t.test(e)?de:+e}var St=function(){return Fe.Date.now()};const Z=St;var Et="Expected a function",wt=Math.max,Tt=Math.min;function It(e,a,o){var n,p,m,u,s,r,_=0,g=!1,E=!1,T=!0;if(typeof e!="function")throw new TypeError(Et);a=pe(a)||0,ee(o)&&(g=!!o.leading,E="maxWait"in o,m=E?wt(pe(o.maxWait)||0,a):m,T="trailing"in o?!!o.trailing:T);function w(l){var S=n,N=p;return n=p=void 0,_=l,u=e.apply(N,S),u}function v(l){return _=l,s=setTimeout(y,a),g?w(l):u}function f(l){var S=l-r,N=l-_,x=a-S;return E?Tt(x,m-N):x}function F(l){var S=l-r,N=l-_;return r===void 0||S>=a||S<0||E&&N>=m}function y(){var l=Z();if(F(l))return k(l);s=setTimeout(y,f(l))}function k(l){return s=void 0,T&&n?w(l):(n=p=void 0,u)}function I(){s!==void 0&&clearTimeout(s),_=0,n=r=p=s=void 0}function V(){return s===void 0?u:k(Z())}function M(){var l=Z(),S=F(l);if(n=arguments,p=this,r=l,S){if(s===void 0)return v(r);if(E)return clearTimeout(s),s=setTimeout(y,a),w(r)}return s===void 0&&(s=setTimeout(y,a)),u}return M.cancel=I,M.flush=V,M}const Ct=()=>Math.floor(Math.random()*1e4),kt=Me({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:re(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:re([Function,Array]),default:Oe},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},label:{type:String},teleported:De.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String}),Vt={[H]:e=>Q(e),[te]:e=>Q(e),[fe]:e=>Q(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,select:e=>Re(e)},Nt=["aria-expanded","aria-owns"],Pt={key:0},Lt=["id","aria-selected","onClick"],Se="ElAutocomplete",At=j({name:Se,inheritAttrs:!1}),Bt=j({...At,props:kt,emits:Vt,setup(e,{expose:a,emit:o}){const n=e,p=st(),m=xe(),u=We(),s=He("autocomplete"),r=b(),_=b(),g=b(),E=b();let T=!1,w=!1;const v=b([]),f=b(-1),F=b(""),y=b(!1),k=b(!1),I=b(!1),V=L(()=>s.b(String(Ct()))),M=L(()=>m.style),l=L(()=>(v.value.length>0||I.value)&&y.value),S=L(()=>!n.hideLoading&&I.value),N=L(()=>r.value?Array.from(r.value.$el.querySelectorAll("input")):[]),x=async()=>{await _e(),l.value&&(F.value=`${r.value.$el.offsetWidth}px`)},Te=()=>{f.value=-1},oe=It(async t=>{if(k.value)return;const c=$=>{I.value=!1,!k.value&&(Y($)?(v.value=$,f.value=n.highlightFirstItem?0:-1):Qe(Se,"autocomplete suggestions must be an array"))};if(I.value=!0,Y(n.fetchSuggestions))c(n.fetchSuggestions);else{const $=await n.fetchSuggestions(t,c);Y($)&&c($)}},n.debounce),Ie=t=>{const c=!!t;if(o(te,t),o(H,t),k.value=!1,y.value||(y.value=c),!n.triggerOnFocus&&!t){k.value=!0,v.value=[];return}oe(t)},Ce=t=>{var c;u.value||(((c=t.target)==null?void 0:c.tagName)!=="INPUT"||N.value.includes(document.activeElement))&&(y.value=!0)},ke=t=>{o(fe,t)},Ve=t=>{w?w=!1:(y.value=!0,o("focus",t),n.triggerOnFocus&&!T&&oe(String(n.modelValue)))},Ne=t=>{setTimeout(()=>{var c;if((c=g.value)!=null&&c.isFocusInsideContent()){w=!0;return}y.value&&O(),o("blur",t)})},Pe=()=>{y.value=!1,o(H,""),o("clear")},se=async()=>{l.value&&f.value>=0&&f.value<v.value.length?z(v.value[f.value]):n.selectWhenUnmatched&&(o("select",{value:n.modelValue}),v.value=[],f.value=-1)},Le=t=>{l.value&&(t.preventDefault(),t.stopPropagation(),O())},O=()=>{y.value=!1},Ae=()=>{var t;(t=r.value)==null||t.focus()},Be=()=>{var t;(t=r.value)==null||t.blur()},z=async t=>{o(te,t[n.valueKey]),o(H,t[n.valueKey]),o("select",t),v.value=[],f.value=-1},G=t=>{if(!l.value||I.value)return;if(t<0){f.value=-1;return}t>=v.value.length&&(t=v.value.length-1);const c=_.value.querySelector(`.${s.be("suggestion","wrap")}`),P=c.querySelectorAll(`.${s.be("suggestion","list")} li`)[t],X=c.scrollTop,{offsetTop:le,scrollHeight:J}=P;le+J>X+c.clientHeight&&(c.scrollTop+=J),le<X&&(c.scrollTop-=J),f.value=t,r.value.ref.setAttribute("aria-activedescendant",`${V.value}-item-${f.value}`)};return Ke(E,()=>{l.value&&O()}),Ue(()=>{r.value.ref.setAttribute("role","textbox"),r.value.ref.setAttribute("aria-autocomplete","list"),r.value.ref.setAttribute("aria-controls","id"),r.value.ref.setAttribute("aria-activedescendant",`${V.value}-item-${f.value}`),T=r.value.ref.hasAttribute("readonly")}),a({highlightedIndex:f,activated:y,loading:I,inputRef:r,popperRef:g,suggestions:v,handleSelect:z,handleKeyEnter:se,focus:Ae,blur:Be,close:O,highlight:G}),(t,c)=>(C(),U(i(Xe),{ref_key:"popperRef",ref:g,visible:i(l),placement:t.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[i(s).e("popper"),t.popperClass],teleported:t.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${i(s).namespace.value}-zoom-in-top`,persistent:"",onBeforeShow:x,onHide:Te},{content:d(()=>[B("div",{ref_key:"regionRef",ref:_,class:W([i(s).b("suggestion"),i(s).is("loading",i(S))]),style:ie({[t.fitInputWidth?"width":"minWidth"]:F.value,outline:"none"}),role:"region"},[h(i(qe),{id:i(V),tag:"ul","wrap-class":i(s).be("suggestion","wrap"),"view-class":i(s).be("suggestion","list"),role:"listbox"},{default:d(()=>[i(S)?(C(),K("li",Pt,[h(i(me),{class:W(i(s).is("loading"))},{default:d(()=>[h(i(ge))]),_:1},8,["class"])])):(C(!0),K(ze,{key:1},Ge(v.value,($,P)=>(C(),K("li",{id:`${i(V)}-item-${P}`,key:P,class:W({highlighted:f.value===P}),role:"option","aria-selected":f.value===P,onClick:X=>z($)},[D(t.$slots,"default",{item:$},()=>[he(ae($[t.valueKey]),1)])],10,Lt))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:d(()=>[B("div",{ref_key:"listboxRef",ref:E,class:W([i(s).b(),t.$attrs.class]),style:ie(i(M)),role:"combobox","aria-haspopup":"listbox","aria-expanded":i(l),"aria-owns":i(V)},[h(i(lt),ne({ref_key:"inputRef",ref:r},i(p),{clearable:t.clearable,disabled:i(u),name:t.name,"model-value":t.modelValue,onInput:Ie,onChange:ke,onFocus:Ve,onBlur:Ne,onClear:Pe,onKeydown:[c[0]||(c[0]=R(ce($=>G(f.value-1),["prevent"]),["up"])),c[1]||(c[1]=R(ce($=>G(f.value+1),["prevent"]),["down"])),R(se,["enter"]),R(O,["tab"]),R(Le,["esc"])],onMousedown:Ce}),ve({_:2},[t.$slots.prepend?{name:"prepend",fn:d(()=>[D(t.$slots,"prepend")])}:void 0,t.$slots.append?{name:"append",fn:d(()=>[D(t.$slots,"append")])}:void 0,t.$slots.prefix?{name:"prefix",fn:d(()=>[D(t.$slots,"prefix")])}:void 0,t.$slots.suffix?{name:"suffix",fn:d(()=>[D(t.$slots,"suffix")])}:void 0]),1040,["clearable","disabled","name","model-value","onKeydown"])],14,Nt)]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var jt=Je(Bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]);const Ft=Ye(jt);const Mt=j({name:"SearchSelect",components:{Loading:ge},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default(){return()=>{}}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:a}=ye(),o=b(!1),n=b("");return ue(()=>e.modelValue,p=>{n.value=p},{immediate:!0}),ue(()=>n,it.debounce(function(p){a.$emit("update:modelValue",p),a.$emit("change",p)},300)),{loading:o,searchValue:n}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText(e){return e.replace(new RegExp(/(<([^>]+)>)/,"gi"),"")},handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,a){const o=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let n=[];if(!o){a(n);return}this.loading=!0,n=await this.fetch(o)||[],n.forEach(m=>{m.label=m.label.replace(new RegExp(o,"gi"),u=>`<span class="search-select-highlight">${u}</span>`)}),a(n),setTimeout(()=>{_e(()=>{this.loading=!1})},200)}}});const Ot=["title","innerHTML"];function Dt(e,a,o,n,p,m){const u=A("loading"),s=me,r=be,_=Ft;return C(),U(_,ne({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=g=>e.searchValue=g),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:a[1]||(a[1]=g=>e.keydown(g))}),ve({default:d(({item:g})=>[B("span",{title:e.getExecText(g.label),innerHTML:g.label},null,8,Ot)]),_:2},[e.loading?{name:"suffix",fn:d(()=>[h(s,{class:"search-loading-icon"},{default:d(()=>[h(u)]),_:1})]),key:"0"}:{name:"suffix",fn:d(()=>[B("i",{class:"search-icon"},[h(r,{icon:"iconsearch"})])]),key:"1"}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}const Ee=q(Mt,[["render",Dt]]),Rt=j({name:"SearchCorporation",components:{SearchSelect:Ee},emits:["select"],setup(){return{searchValue:b("")}},methods:{async handleFetchSearch(e){return ct.map(a=>({value:a,label:a}))},handleSelectSearch(e){this.$emit("select",e)}}});function xt(e,a,o,n,p,m){const u=Ee;return C(),U(u,ne({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.searchValue=s),fetch:e.handleFetchSearch,placeholder:"搜索项目","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}const we=q(Rt,[["render",xt]]),Wt=j({name:"NavigationSideLogo",setup(){const e=$e();return{title:L(()=>e.t("base.systemTitle"))}}}),Ht=""+new URL("i18n-8595eb6e.svg",import.meta.url).href;const Kt=e=>(Ze("data-v-1e977b98"),e=e(),et(),e),Ut={class:"side-logo-container"},qt=Kt(()=>B("img",{class:"side-logo-img",src:Ht,alt:"商标"},null,-1)),zt={class:"side-logo-title"};function Gt(e,a,o,n,p,m){const u=A("router-link");return C(),K("div",Ut,[h(u,{to:`/${e.$route.params.locale||""}`},{default:d(()=>[qt,B("h1",zt,ae(e.title),1)]),_:1},8,["to"])])}const Xt=q(Wt,[["render",Gt],["__scopeId","data-v-1e977b98"]]),Jt=j({name:"ProjectList",components:{NavigationNavBar:rt,NavigationSideLogo:Xt,ProjectTableHeader:ft,ProjectTableBody:ut,SearchCorporation:we},setup(){const{proxy:e}=ye(),a=dt(),o=$e();function n(){const m=tt({name:"",corpName:"",notes:""});e.$ModalDialog({title:o.t("project.create"),top:"10vh",width:"50vw",showClose:!0,closeOnClickModal:!1,closeOnPressEscape:!1,renderComponent:{data:m,component:pt},async onConfirm(u,s){if(!await u.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:_,data:g}=await a.createProject(m);if(s.fullLoading=!1,_)return Promise.reject(new Error("error"));a.getProjectList()}})}function p(m){a.getProjectList({kw:m})}return p(),{handleCreateProject:n,handleSelectSearch:p}}});function Qt(e,a,o,n,p,m){const u=A("NavigationSideLogo"),s=A("NavigationNavBar"),r=be,_=nt,g=ot,E=we,T=A("ProjectTableHeader"),w=A("ProjectTableBody"),v=at;return C(),U(v,null,{top:d(()=>[h(s,{fixed:!1},{default:d(()=>[h(u)]),_:1})]),side:d(()=>[h(g,{title:e._t("project.manageTitle")},{default:d(()=>[h(_,{type:"primary",class:"create-action",onClick:a[0]||(a[0]=f=>e.handleCreateProject())},{default:d(()=>[h(r,{icon:"iconestablish"}),he(" "+ae(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:d(()=>[h(g,{"has-divider":"","flex-content":""},{head:d(()=>[h(E,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:d(()=>[h(T),h(w)]),_:1})]),_:1})}const ia=q(Jt,[["render",Qt],["__scopeId","data-v-47bf0c16"]]);export{ia as default};
