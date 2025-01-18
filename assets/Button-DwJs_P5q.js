const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Icon-BtIB6gpb.js","./vue.esm-bundler-C_ybislz.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./iframe-Czv9Drgh.js";import{e as p,g as c,f as r,n as m,j as b,k as y,o as u,l as v,m as j,u as s,p as l,d as g,q as h}from"./vue.esm-bundler-C_ybislz.js";const i=p({__name:"Button",props:{tag:{default:"button"},type:{default:"button"},href:{default:void 0},size:{default:"md"},round:{type:Boolean},status:{default:void 0},outline:{type:Boolean},icon:{default:void 0},disabled:{type:Boolean}},setup(a){const n=h(()=>f(()=>import("./Icon-BtIB6gpb.js"),__vite__mapDeps([0,1]),import.meta.url)),o=c(()=>{const e=j().default;let t="";return e().forEach(d=>t+=d.children),t});return(e,t)=>(u(),r(y(e.tag),{to:e.tag==="router-link"?e.href:void 0,href:e.href,type:e.tag==="button"?e.type:void 0,class:m(["j-btn",{"j-btn--icon-only":e.icon?.position==="icon-only","j-btn--icon-before":e.icon?.position==="before-text","j-btn--icon-after":e.icon?.position==="after-text"}]),title:e.icon?.position==="icon-only"?o.value:void 0,style:b({"--j-btn-font-size":`var(--j-text-${e.size})`,"--j-btn-border-radius":e.round?"2rem":"0.5rem",...e.status?e.outline?{"--j-btn-color":`var(--j-${e.status})`,"--j-btn-border-color":`var(--j-${e.status})`}:{"--j-btn-color":"#fff","--j-btn-background-color":`var(--j-${e.status})`,"--j-btn-border-color":`var(--j-${e.status})`,"--j-btn-hover-background-color":`var(--j-${e.status}-alt)`,"--j-btn-hover-border-color":`var(--j-${e.status}-alt)`}:{}}),disabled:e.disabled},{default:v(()=>[e.icon&&e.icon.position!=="after-text"?(u(),r(s(n),{key:0,icon:e.icon},null,8,["icon"])):l("",!0),e.icon?.position!=="icon-only"?g(e.$slots,"default",{key:1},void 0,!0):l("",!0),e.icon&&e.icon.position==="after-text"?(u(),r(s(n),{key:2,icon:e.icon},null,8,["icon"])):l("",!0)]),_:3},8,["to","href","type","title","style","class","disabled"]))}}),T=(a,n)=>{const o=a.__vccOpts||a;for(const[e,t]of n)o[e]=t;return o},q=T(i,[["__scopeId","data-v-14875d91"]]);i.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"tag",description:"The element to use.",tags:{default:[{description:'"<button>"',title:"default"}]},required:!1,type:{name:"TSTypeReference"},defaultValue:{func:!1,value:"'button'"}},{name:"type",description:"The button type. _Ignored if not `<button>`._",tags:{see:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type",title:"see"}],default:[{description:'"button"',title:"default"}]},required:!1,type:{name:"TSTypeReference"},defaultValue:{func:!1,value:"'button'"}},{name:"href",description:"_Ignored if `<button>`._",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",required:!1,type:{name:"TSTypeReference"},defaultValue:{func:!1,value:"'md'"}},{name:"round",required:!1,type:{name:"boolean"}},{name:"status",required:!1,type:{name:"TSTypeReference"},defaultValue:{func:!1,value:"undefined"}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSTypeReference"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/Button/Button.vue"]};export{q as B,T as _};
