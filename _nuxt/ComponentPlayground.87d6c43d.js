import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.e5db143a.js";import{u as d}from"./asyncData.25183c5d.js";import f from"./Ellipsis.e64b8a25.js";import _ from"./ComponentPlaygroundData.12c38b01.js";import"./TabsHeader.b8a3bc0e.js";import"./ComponentPlaygroundProps.4dc661ed.js";import"./ProseH4.e7152051.js";import"./ProseCodeInline.bb1b6155.js";import"./Badge.9fb113ba.js";import"./MDCSlot.db60b3ab.js";import"./slot.7274b8c5.js";import"./ProseP.56109591.js";import"./index.d5f33d44.js";import"./ComponentPlaygroundSlots.vue.6522287b.js";import"./ComponentPlaygroundTokens.vue.9b10f9b0.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-51227037"]]);export{V as default};