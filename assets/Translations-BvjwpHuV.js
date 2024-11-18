import{t as j,z as A,d as z,K as N,A as x,ba as Je,B as h,N as S,X as de,a5 as Ve,b3 as ne,am as J,o as O,c as Y,w as I,ac as je,e as U,G as H,E,F as te,an as Xe,ai as qe,b as W,ad as k,a9 as pe,ag as Z,u as K,bf as ie,Q as le,bc as Qe,R as ce,a3 as V,au as Ze,bt as xe,a8 as Se,bb as eo,br as oo,C as M,a as Te,a0 as re,av as $e,bu as no,r as R,bv as to,bw as lo,bd as Oe,a2 as P,aP as ro,aS as ao,D as ae,I as so,P as io,af as Re,Z as Ne,as as Le,at as ke,Y as ue,bx as Fe,by as co,bi as Pe,_ as ze,aE as uo,aG as po,aF as fo,bz as vo,bA as mo,aa as bo,a1 as go}from"./index-ClLpj4dm.js";import{c as G,u as we,b as _o,O as ho,a as wo,w as ye}from"./popper-DhWeZkMP.js";import{u as yo}from"./index-CXii8_Ct.js";import{c as Eo}from"./castArray-DzDjbnnB.js";const q=4,Io={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Co=({move:e,size:n,bar:a})=>({[a.size]:n,transform:`translate${a.axis}(${e}%)`}),fe=Symbol("scrollbarContextKey"),So=j({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),To="Thumb",$o=z({__name:"thumb",props:So,setup(e){const n=e,a=N(fe),o=x("scrollbar");a||Je(To,"can not inject scrollbar context");const c=h(),u=h(),d=h({}),i=h(!1);let p=!1,b=!1,s=Ve?document.onselectstart:null;const l=S(()=>Io[n.vertical?"vertical":"horizontal"]),v=S(()=>Co({size:n.size,move:n.move,bar:l.value})),t=S(()=>c.value[l.value.offset]**2/a.wrapElement[l.value.scrollSize]/n.ratio/u.value[l.value.offset]),f=_=>{var $;if(_.stopPropagation(),_.ctrlKey||[1,2].includes(_.button))return;($=window.getSelection())==null||$.removeAllRanges(),w(_);const F=_.currentTarget;F&&(d.value[l.value.axis]=F[l.value.offset]-(_[l.value.client]-F.getBoundingClientRect()[l.value.direction]))},g=_=>{if(!u.value||!c.value||!a.wrapElement)return;const $=Math.abs(_.target.getBoundingClientRect()[l.value.direction]-_[l.value.client]),F=u.value[l.value.offset]/2,L=($-F)*100*t.value/c.value[l.value.offset];a.wrapElement[l.value.scroll]=L*a.wrapElement[l.value.scrollSize]/100},w=_=>{_.stopImmediatePropagation(),p=!0,document.addEventListener("mousemove",T),document.addEventListener("mouseup",C),s=document.onselectstart,document.onselectstart=()=>!1},T=_=>{if(!c.value||!u.value||p===!1)return;const $=d.value[l.value.axis];if(!$)return;const F=(c.value.getBoundingClientRect()[l.value.direction]-_[l.value.client])*-1,L=u.value[l.value.offset]-$,ee=(F-L)*100*t.value/c.value[l.value.offset];a.wrapElement[l.value.scroll]=ee*a.wrapElement[l.value.scrollSize]/100},C=()=>{p=!1,d.value[l.value.axis]=0,document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",C),r(),b&&(i.value=!1)},B=()=>{b=!1,i.value=!!n.size},y=()=>{b=!0,i.value=p};de(()=>{r(),document.removeEventListener("mouseup",C)});const r=()=>{document.onselectstart!==s&&(document.onselectstart=s)};return ne(J(a,"scrollbarElement"),"mousemove",B),ne(J(a,"scrollbarElement"),"mouseleave",y),(_,$)=>(O(),Y(qe,{name:E(o).b("fade"),persisted:""},{default:I(()=>[je(U("div",{ref_key:"instance",ref:c,class:H([E(o).e("bar"),E(o).is(E(l).key)]),onMousedown:g},[U("div",{ref_key:"thumb",ref:u,class:H(E(o).e("thumb")),style:te(E(v)),onMousedown:f},null,38)],34),[[Xe,_.always||i.value]])]),_:1},8,["name"]))}});var Ee=A($o,[["__file","thumb.vue"]]);const Oo=j({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ro=z({__name:"bar",props:Oo,setup(e,{expose:n}){const a=e,o=N(fe),c=h(0),u=h(0),d=h(""),i=h(""),p=h(1),b=h(1);return n({handleScroll:v=>{if(v){const t=v.offsetHeight-q,f=v.offsetWidth-q;u.value=v.scrollTop*100/t*p.value,c.value=v.scrollLeft*100/f*b.value}},update:()=>{const v=o==null?void 0:o.wrapElement;if(!v)return;const t=v.offsetHeight-q,f=v.offsetWidth-q,g=t**2/v.scrollHeight,w=f**2/v.scrollWidth,T=Math.max(g,a.minSize),C=Math.max(w,a.minSize);p.value=g/(t-g)/(T/(t-T)),b.value=w/(f-w)/(C/(f-C)),i.value=T+q<t?`${T}px`:"",d.value=C+q<f?`${C}px`:""}}),(v,t)=>(O(),W(pe,null,[k(Ee,{move:c.value,ratio:b.value,size:d.value,always:v.always},null,8,["move","ratio","size","always"]),k(Ee,{move:u.value,ratio:p.value,size:i.value,vertical:"",always:v.always},null,8,["move","ratio","size","always"])],64))}});var No=A(Ro,[["__file","bar.vue"]]);const Lo=j({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:K([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...yo(["ariaLabel","ariaOrientation"])}),ko={scroll:({scrollTop:e,scrollLeft:n})=>[e,n].every(Z)},Fo="ElScrollbar",Po=z({name:Fo}),zo=z({...Po,props:Lo,emits:ko,setup(e,{expose:n,emit:a}){const o=e,c=x("scrollbar");let u,d,i=0,p=0;const b=h(),s=h(),l=h(),v=h(),t=S(()=>{const r={};return o.height&&(r.height=ie(o.height)),o.maxHeight&&(r.maxHeight=ie(o.maxHeight)),[o.wrapStyle,r]}),f=S(()=>[o.wrapClass,c.e("wrap"),{[c.em("wrap","hidden-default")]:!o.native}]),g=S(()=>[c.e("view"),o.viewClass]),w=()=>{var r;s.value&&((r=v.value)==null||r.handleScroll(s.value),i=s.value.scrollTop,p=s.value.scrollLeft,a("scroll",{scrollTop:s.value.scrollTop,scrollLeft:s.value.scrollLeft}))};function T(r,_){oo(r)?s.value.scrollTo(r):Z(r)&&Z(_)&&s.value.scrollTo(r,_)}const C=r=>{Z(r)&&(s.value.scrollTop=r)},B=r=>{Z(r)&&(s.value.scrollLeft=r)},y=()=>{var r;(r=v.value)==null||r.update()};return le(()=>o.noresize,r=>{r?(u==null||u(),d==null||d()):({stop:u}=Qe(l,y),d=ne("resize",y))},{immediate:!0}),le(()=>[o.maxHeight,o.height],()=>{o.native||ce(()=>{var r;y(),s.value&&((r=v.value)==null||r.handleScroll(s.value))})}),V(fe,Ze({scrollbarElement:b,wrapElement:s})),xe(()=>{s.value&&(s.value.scrollTop=i,s.value.scrollLeft=p)}),Se(()=>{o.native||ce(()=>{y()})}),eo(()=>y()),n({wrapRef:s,update:y,scrollTo:T,setScrollTop:C,setScrollLeft:B,handleScroll:w}),(r,_)=>(O(),W("div",{ref_key:"scrollbarRef",ref:b,class:H(E(c).b())},[U("div",{ref_key:"wrapRef",ref:s,class:H(E(f)),style:te(E(t)),tabindex:r.tabindex,onScroll:w},[(O(),Y(Te(r.tag),{id:r.id,ref_key:"resizeRef",ref:l,class:H(E(g)),style:te(r.viewStyle),role:r.role,"aria-label":r.ariaLabel,"aria-orientation":r.ariaOrientation},{default:I(()=>[M(r.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),r.native?re("v-if",!0):(O(),Y(No,{key:0,ref_key:"barRef",ref:v,always:r.always,"min-size":r.minSize},null,8,["always","min-size"]))],2))}});var Bo=A(zo,[["__file","scrollbar.vue"]]);const Mo=$e(Bo),Ao=z({inheritAttrs:!1});function Do(e,n,a,o,c,u){return M(e.$slots,"default")}var Ko=A(Ao,[["render",Do],["__file","collection.vue"]]);const Ho=z({name:"ElCollectionItem",inheritAttrs:!1});function Go(e,n,a,o,c,u){return M(e.$slots,"default")}var Yo=A(Ho,[["render",Go],["__file","collection-item.vue"]]);const Be="data-el-collection-item",Me=e=>{const n=`El${e}Collection`,a=`${n}Item`,o=Symbol(n),c=Symbol(a),u={...Ko,name:n,setup(){const i=h(null),p=new Map;V(o,{itemMap:p,getItems:()=>{const s=E(i);if(!s)return[];const l=Array.from(s.querySelectorAll(`[${Be}]`));return[...p.values()].sort((t,f)=>l.indexOf(t.ref)-l.indexOf(f.ref))},collectionRef:i})}},d={...Yo,name:a,setup(i,{attrs:p}){const b=h(null),s=N(o,void 0);V(c,{collectionItemRef:b}),Se(()=>{const l=E(b);l&&s.itemMap.set(l,{ref:l,...p})}),de(()=>{const l=E(b);s.itemMap.delete(l)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:u,ElCollectionItem:d}},Uo=j({style:{type:K([String,Array,Object])},currentTabId:{type:K(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:K(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Wo,ElCollectionItem:Jo,COLLECTION_INJECTION_KEY:ve,COLLECTION_ITEM_INJECTION_KEY:Vo}=Me("RovingFocusGroup"),me=Symbol("elRovingFocusGroup"),Ae=Symbol("elRovingFocusGroupItem"),jo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Xo=(e,n)=>e,qo=(e,n,a)=>{const o=Xo(e.code);return jo[o]},Qo=(e,n)=>e.map((a,o)=>e[(o+n)%e.length]),be=e=>{const{activeElement:n}=document;for(const a of e)if(a===n||(a.focus(),n!==document.activeElement))return},Ie="currentTabIdChange",Ce="rovingFocusGroup.entryFocus",Zo={bubbles:!1,cancelable:!0},xo=z({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Uo,emits:[Ie,"entryFocus"],setup(e,{emit:n}){var a;const o=h((a=e.currentTabId||e.defaultCurrentTabId)!=null?a:null),c=h(!1),u=h(!1),d=h(null),{getItems:i}=N(ve,void 0),p=S(()=>[{outline:"none"},e.style]),b=g=>{n(Ie,g)},s=()=>{c.value=!0},l=G(g=>{var w;(w=e.onMousedown)==null||w.call(e,g)},()=>{u.value=!0}),v=G(g=>{var w;(w=e.onFocus)==null||w.call(e,g)},g=>{const w=!E(u),{target:T,currentTarget:C}=g;if(T===C&&w&&!E(c)){const B=new Event(Ce,Zo);if(C==null||C.dispatchEvent(B),!B.defaultPrevented){const y=i().filter(L=>L.focusable),r=y.find(L=>L.active),_=y.find(L=>L.id===E(o)),F=[r,_,...y].filter(Boolean).map(L=>L.ref);be(F)}}u.value=!1}),t=G(g=>{var w;(w=e.onBlur)==null||w.call(e,g)},()=>{c.value=!1}),f=(...g)=>{n("entryFocus",...g)};V(me,{currentTabbedId:no(o),loop:J(e,"loop"),tabIndex:S(()=>E(c)?-1:0),rovingFocusGroupRef:d,rovingFocusGroupRootStyle:p,orientation:J(e,"orientation"),dir:J(e,"dir"),onItemFocus:b,onItemShiftTab:s,onBlur:t,onFocus:v,onMousedown:l}),le(()=>e.currentTabId,g=>{o.value=g??null}),ne(d,Ce,f)}});function en(e,n,a,o,c,u){return M(e.$slots,"default")}var on=A(xo,[["render",en],["__file","roving-focus-group-impl.vue"]]);const nn=z({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Wo,ElRovingFocusGroupImpl:on}});function tn(e,n,a,o,c,u){const d=R("el-roving-focus-group-impl"),i=R("el-focus-group-collection");return O(),Y(i,null,{default:I(()=>[k(d,to(lo(e.$attrs)),{default:I(()=>[M(e.$slots,"default")]),_:3},16)]),_:3})}var ln=A(nn,[["render",tn],["__file","roving-focus-group.vue"]]);const rn=z({components:{ElRovingFocusCollectionItem:Jo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:a,loop:o,onItemFocus:c,onItemShiftTab:u}=N(me,void 0),{getItems:d}=N(ve,void 0),i=Oe(),p=h(null),b=G(t=>{n("mousedown",t)},t=>{e.focusable?c(E(i)):t.preventDefault()}),s=G(t=>{n("focus",t)},()=>{c(E(i))}),l=G(t=>{n("keydown",t)},t=>{const{code:f,shiftKey:g,target:w,currentTarget:T}=t;if(f===P.tab&&g){u();return}if(w!==T)return;const C=qo(t);if(C){t.preventDefault();let y=d().filter(r=>r.focusable).map(r=>r.ref);switch(C){case"last":{y.reverse();break}case"prev":case"next":{C==="prev"&&y.reverse();const r=y.indexOf(T);y=o.value?Qo(y,r+1):y.slice(r+1);break}}ce(()=>{be(y)})}}),v=S(()=>a.value===E(i));return V(Ae,{rovingFocusGroupItemRef:p,tabIndex:S(()=>E(v)?0:-1),handleMousedown:b,handleFocus:s,handleKeydown:l}),{id:i,handleKeydown:l,handleFocus:s,handleMousedown:b}}});function an(e,n,a,o,c,u){const d=R("el-roving-focus-collection-item");return O(),Y(d,{id:e.id,focusable:e.focusable,active:e.active},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var sn=A(rn,[["render",an],["__file","roving-focus-item.vue"]]);const cn=j({trigger:_o.trigger,effect:{...we.effect,default:"light"},type:{type:K(String)},placement:{type:K(String),default:"bottom"},popperOptions:{type:K(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:K([Number,String]),default:0},maxHeight:{type:K([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:K(Object)},teleported:we.teleported}),De=j({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ro}}),un=j({onKeydown:{type:K(Function)}}),dn=[P.down,P.pageDown,P.home],Ke=[P.up,P.pageUp,P.end],pn=[...dn,...Ke],{ElCollection:fn,ElCollectionItem:vn,COLLECTION_INJECTION_KEY:mn,COLLECTION_ITEM_INJECTION_KEY:bn}=Me("Dropdown"),se=Symbol("elDropdown"),{ButtonGroup:gn}=Le,_n=z({name:"ElDropdown",components:{ElButton:Le,ElButtonGroup:gn,ElScrollbar:Mo,ElDropdownCollection:fn,ElTooltip:wo,ElRovingFocusGroup:ln,ElOnlyChild:ho,ElIcon:Ne,ArrowDown:Re},props:cn,emits:["visible-change","click","command"],setup(e,{emit:n}){const a=ke(),o=x("dropdown"),{t:c}=so(),u=h(),d=h(),i=h(null),p=h(null),b=h(null),s=h(null),l=h(!1),v=[P.enter,P.numpadEnter,P.space,P.down],t=S(()=>({maxHeight:ie(e.maxHeight)})),f=S(()=>[o.m(r.value)]),g=S(()=>Eo(e.trigger)),w=Oe().value,T=S(()=>e.id||w);le([u,g],([m,D],[X])=>{var ge,_e,he;(ge=X==null?void 0:X.$el)!=null&&ge.removeEventListener&&X.$el.removeEventListener("pointerenter",$),(_e=m==null?void 0:m.$el)!=null&&_e.removeEventListener&&m.$el.removeEventListener("pointerenter",$),(he=m==null?void 0:m.$el)!=null&&he.addEventListener&&D.includes("hover")&&m.$el.addEventListener("pointerenter",$)},{immediate:!0}),de(()=>{var m,D;(D=(m=u.value)==null?void 0:m.$el)!=null&&D.removeEventListener&&u.value.$el.removeEventListener("pointerenter",$)});function C(){B()}function B(){var m;(m=i.value)==null||m.onClose()}function y(){var m;(m=i.value)==null||m.onOpen()}const r=io();function _(...m){n("command",...m)}function $(){var m,D;(D=(m=u.value)==null?void 0:m.$el)==null||D.focus()}function F(){}function L(){const m=E(p);g.value.includes("hover")&&(m==null||m.focus()),s.value=null}function ee(m){s.value=m}function oe(m){l.value||(m.preventDefault(),m.stopImmediatePropagation())}function Q(){n("visible-change",!0)}function Ue(m){(m==null?void 0:m.type)==="keydown"&&p.value.focus()}function We(){n("visible-change",!1)}return V(se,{contentRef:p,role:S(()=>e.role),triggerId:T,isUsingKeyboard:l,onItemEnter:F,onItemLeave:L}),V("elDropdown",{instance:a,dropdownSize:r,handleClick:C,commandHandler:_,trigger:J(e,"trigger"),hideOnClick:J(e,"hideOnClick")}),{t:c,ns:o,scrollbar:b,wrapStyle:t,dropdownTriggerKls:f,dropdownSize:r,triggerId:T,triggerKeys:v,currentTabId:s,handleCurrentTabIdChange:ee,handlerMainButtonClick:m=>{n("click",m)},handleEntryFocus:oe,handleClose:B,handleOpen:y,handleBeforeShowTooltip:Q,handleShowTooltip:Ue,handleBeforeHideTooltip:We,onFocusAfterTrapped:m=>{var D,X;m.preventDefault(),(X=(D=p.value)==null?void 0:D.focus)==null||X.call(D,{preventScroll:!0})},popperRef:i,contentRef:p,triggeringElementRef:u,referenceElementRef:d}}});function hn(e,n,a,o,c,u){var d;const i=R("el-dropdown-collection"),p=R("el-roving-focus-group"),b=R("el-scrollbar"),s=R("el-only-child"),l=R("el-tooltip"),v=R("el-button"),t=R("arrow-down"),f=R("el-icon"),g=R("el-button-group");return O(),W("div",{class:H([e.ns.b(),e.ns.is("disabled",e.disabled)])},[k(l,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(d=e.referenceElementRef)==null?void 0:d.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},ao({content:I(()=>[k(b,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I(()=>[k(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I(()=>[k(i,null,{default:I(()=>[M(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:I(()=>[k(s,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(O(),Y(g,{key:0},{default:I(()=>[k(v,ae({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I(()=>[M(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),k(v,ae({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I(()=>[k(f,{class:H(e.ns.e("icon"))},{default:I(()=>[k(t)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):re("v-if",!0)],2)}var wn=A(_n,[["render",hn],["__file","dropdown.vue"]]);const yn=z({name:"DropdownItemImpl",components:{ElIcon:Ne},props:De,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const a=x("dropdown"),{role:o}=N(se,void 0),{collectionItemRef:c}=N(bn,void 0),{collectionItemRef:u}=N(Vo,void 0),{rovingFocusGroupItemRef:d,tabIndex:i,handleFocus:p,handleKeydown:b,handleMousedown:s}=N(Ae,void 0),l=Fe(c,u,d),v=S(()=>o.value==="menu"?"menuitem":o.value==="navigation"?"link":"button"),t=G(f=>{if([P.enter,P.numpadEnter,P.space].includes(f.code))return f.preventDefault(),f.stopImmediatePropagation(),n("clickimpl",f),!0},b);return{ns:a,itemRef:l,dataset:{[Be]:""},role:v,tabIndex:i,handleFocus:p,handleKeydown:t,handleMousedown:s}}});function En(e,n,a,o,c,u){const d=R("el-icon");return O(),W(pe,null,[e.divided?(O(),W("li",{key:0,role:"separator",class:H(e.ns.bem("menu","item","divided"))},null,2)):re("v-if",!0),U("li",ae({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:i=>e.$emit("clickimpl",i),onFocus:e.handleFocus,onKeydown:ue(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:i=>e.$emit("pointermove",i),onPointerleave:i=>e.$emit("pointerleave",i)}),[e.icon?(O(),Y(d,{key:0},{default:I(()=>[(O(),Y(Te(e.icon)))]),_:1})):re("v-if",!0),M(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var In=A(yn,[["render",En],["__file","dropdown-item-impl.vue"]]);const He=()=>{const e=N("elDropdown",{}),n=S(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:n}},Cn=z({name:"ElDropdownItem",components:{ElDropdownCollectionItem:vn,ElRovingFocusItem:sn,ElDropdownItemImpl:In},inheritAttrs:!1,props:De,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:a}){const{elDropdown:o}=He(),c=ke(),u=h(null),d=S(()=>{var t,f;return(f=(t=E(u))==null?void 0:t.textContent)!=null?f:""}),{onItemEnter:i,onItemLeave:p}=N(se,void 0),b=G(t=>(n("pointermove",t),t.defaultPrevented),ye(t=>{if(e.disabled){p(t);return}const f=t.currentTarget;f===document.activeElement||f.contains(document.activeElement)||(i(t),t.defaultPrevented||f==null||f.focus())})),s=G(t=>(n("pointerleave",t),t.defaultPrevented),ye(p)),l=G(t=>{if(!e.disabled)return n("click",t),t.type!=="keydown"&&t.defaultPrevented},t=>{var f,g,w;if(e.disabled){t.stopImmediatePropagation();return}(f=o==null?void 0:o.hideOnClick)!=null&&f.value&&((g=o.handleClick)==null||g.call(o)),(w=o.commandHandler)==null||w.call(o,e.command,c,t)}),v=S(()=>({...e,...a}));return{handleClick:l,handlePointerMove:b,handlePointerLeave:s,textContent:d,propsAndAttrs:v}}});function Sn(e,n,a,o,c,u){var d;const i=R("el-dropdown-item-impl"),p=R("el-roving-focus-item"),b=R("el-dropdown-collection-item");return O(),Y(b,{disabled:e.disabled,"text-value":(d=e.textValue)!=null?d:e.textContent},{default:I(()=>[k(p,{focusable:!e.disabled},{default:I(()=>[k(i,ae(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I(()=>[M(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Ge=A(Cn,[["render",Sn],["__file","dropdown-item.vue"]]);const Tn=z({name:"ElDropdownMenu",props:un,setup(e){const n=x("dropdown"),{_elDropdownSize:a}=He(),o=a.value,{focusTrapRef:c,onKeydown:u}=N(co,void 0),{contentRef:d,role:i,triggerId:p}=N(se,void 0),{collectionRef:b,getItems:s}=N(mn,void 0),{rovingFocusGroupRef:l,rovingFocusGroupRootStyle:v,tabIndex:t,onBlur:f,onFocus:g,onMousedown:w}=N(me,void 0),{collectionRef:T}=N(ve,void 0),C=S(()=>[n.b("menu"),n.bm("menu",o==null?void 0:o.value)]),B=Fe(d,b,c,l,T),y=G(_=>{var $;($=e.onKeydown)==null||$.call(e,_)},_=>{const{currentTarget:$,code:F,target:L}=_;if($.contains(L),P.tab===F&&_.stopImmediatePropagation(),_.preventDefault(),L!==E(d)||!pn.includes(F))return;const oe=s().filter(Q=>!Q.disabled).map(Q=>Q.ref);Ke.includes(F)&&oe.reverse(),be(oe)});return{size:o,rovingFocusGroupRootStyle:v,tabIndex:t,dropdownKls:C,role:i,triggerId:p,dropdownListWrapperRef:B,handleKeydown:_=>{y(_),u(_)},onBlur:f,onFocus:g,onMousedown:w}}});function $n(e,n,a,o,c,u){return O(),W("ul",{ref:e.dropdownListWrapperRef,class:H(e.dropdownKls),style:te(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:ue(e.handleKeydown,["self"]),onMousedown:ue(e.onMousedown,["self"])},[M(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var Ye=A(Tn,[["render",$n],["__file","dropdown-menu.vue"]]);const On=$e(wn,{DropdownItem:Ge,DropdownMenu:Ye}),Rn=Pe(Ge),Nn=Pe(Ye),Ln=z({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}});function kn(e,n,a,o,c,u){return O(),W("span",{class:H(["locales-logo-icon",{"is-dark":e.dark}])},n[0]||(n[0]=[U("svg",{viewBox:"0 0 512 512"},[U("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),U("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)]),2)}const Fn=ze(Ln,[["render",kn],["__scopeId","data-v-e36434ef"]]),Pn=z({name:"TranslationsBox",components:{ArrowDown:Re,LogoIcon:Fn},props:{dark:{type:Boolean,default:!1}},setup(){const e=uo(),n=po(),a=fo(),o=h(vo),c=S(()=>a.locale);return{localesList:o,currentLocale:c,handleChange:d=>{setTimeout(()=>{const{localeCode:i}=d;n.replace({params:{...e.params,locale:i}}),mo(i)})}}}}),zn={class:"icon-outer"},Bn={class:"custom-dropdown-item"};function Mn(e,n,a,o,c,u){const d=R("LogoIcon"),i=Rn,p=Nn,b=On;return O(),Y(b,{class:H(["translations-box",{"is-dark":e.dark}]),trigger:"hover","popper-class":"translations-box",onCommand:e.handleChange},{dropdown:I(()=>[k(p,null,{default:I(()=>[(O(!0),W(pe,null,bo(e.localesList,(s,l)=>(O(),Y(i,{key:l,command:s,disabled:e.currentLocale===s.localeCode},{default:I(()=>[U("span",Bn,go(s.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:I(()=>[U("span",zn,[k(d,{dark:e.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const Un=ze(Pn,[["render",Mn]]);export{Mo as E,Un as T,Nn as a,Rn as b,On as c};
