import{d as b,r as l,a7 as v,b as s,c as a,F as g,Z as x,e as u,f as y,a5 as k,n as I,t as T,p as S,i as C,Q as $,k as w}from"./entry.c7d46601.js";const B=t=>(S("data-v-05f9cc0d"),t=t(),C(),t),H={class:"tabs-header"},N=["onClick"],U=B(()=>u("span",{class:"tab"},null,-1)),q=[U],F=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,f=_,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,c)=>{f("update:activeTabIndex",c),$(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",H,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(g,null,x(t.tabs,({label:d},i)=>(s(),a("button",{key:`${i}${d}`,class:I([t.activeTabIndex===i?"active":"not-active"]),onClick:m=>h(m,i)},T(d),11,N))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},q,512)],512)):y("",!0),k(e.$slots,"footer",{},void 0,!0)]))}});const R=w(F,[["__scopeId","data-v-05f9cc0d"]]);export{R as default};