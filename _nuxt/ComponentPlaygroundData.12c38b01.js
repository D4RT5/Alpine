import y from"./TabsHeader.b8a3bc0e.js";import g from"./ComponentPlaygroundProps.4dc661ed.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.6522287b.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.9b10f9b0.js";import{a as k}from"./index.d5f33d44.js";import{d as D,r as V,b as n,c as C,g as P,M as o,X as m,as as T,f as s,k as B}from"./entry.e5db143a.js";import"./ProseH4.e7152051.js";import"./ProseCodeInline.bb1b6155.js";import"./Badge.9fb113ba.js";import"./MDCSlot.db60b3ab.js";import"./slot.7274b8c5.js";import"./ProseP.56109591.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],c=d=>e.value=d;return(d,l)=>{const u=y,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":c},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=b=>T(a)?a.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=B(j,[["__scopeId","data-v-d4bd37d5"]]);export{A as default};