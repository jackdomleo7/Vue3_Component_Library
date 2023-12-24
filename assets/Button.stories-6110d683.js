import{_ as M}from"./iframe-11bd60b8.js";import{d as Q,f as W,o as p,c as g,g as X,n as Y,j as Z,k as x,u as h,l as b,m as ee,p as oe,q as te}from"./vue.esm-bundler-7a2e3787.js";import"../sb-preview/runtime.js";const K=Q({__name:"Button",props:{href:{},status:{},outline:{type:Boolean},icon:{},disabled:{type:Boolean}},setup(f){const t=oe(()=>M(()=>import("./Icon-d19b090b.js"),["./Icon-d19b090b.js","./vue.esm-bundler-7a2e3787.js"],import.meta.url)),s=W(()=>{const e=te().default;let o="";return e().forEach(n=>o+=n.children),o});return(e,o)=>{var n,k,y,C;return p(),g(x(e.href?"a":"button"),{href:e.href,class:Y(["btn",{"btn--status":e.status,"btn--icon-only":((n=e.icon)==null?void 0:n.position)==="icon-only","btn--icon-before":((k=e.icon)==null?void 0:k.position)==="before-text","btn--icon-after":((y=e.icon)==null?void 0:y.position)==="after-text"}]),title:((C=e.icon)==null?void 0:C.position)==="icon-only"?s.value:void 0,style:Z(e.status?e.outline?`
            --j-btn-color: var(--j-${e.status});
            --j-btn-border-color: var(--j-${e.status})
          `:`
            --j-btn-color: #fff;
            --j-btn-background-color: var(--j-${e.status});
            --j-btn-border-color: var(--j-${e.status})
          `:""),disabled:e.disabled},{default:X(()=>{var v;return[e.icon&&e.icon.position!=="after-text"?(p(),g(h(t),{key:0,icon:e.icon},null,8,["icon"])):b("",!0),((v=e.icon)==null?void 0:v.position)!=="icon-only"?ee(e.$slots,"default",{key:1},void 0,!0):b("",!0),e.icon&&e.icon.position==="after-text"?(p(),g(h(t),{key:2,icon:e.icon},null,8,["icon"])):b("",!0)]}),_:3},8,["href","title","style","class","disabled"])}}});const se=(f,t)=>{const s=f.__vccOpts||f;for(const[e,o]of t)s[e]=o;return s},ne=se(K,[["__scopeId","data-v-09c45f04"]]);K.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"href",required:!1,type:{name:"string"}},{name:"status",required:!1,type:{name:"TSTypeReference"}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSTypeReference"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/Button/Button.vue"]};const ce={title:"Components/Button",component:ne,tags:["autodocs"],argTypes:{status:{control:"radio",options:[void 0,"accent","info","error","warning","success"]}}},r={args:{default:"Click me"}},a={args:{default:"Click me",status:"info"}},i={args:{default:"Click me",status:"info",outline:!0}},c={args:{default:"Click me",status:"info",icon:{src:new URL(""+new URL("duck-bc5d3109.svg",import.meta.url).href,self.location).href,position:"before-text"}}},u={args:{default:"Click me",status:"info",icon:{src:new URL(""+new URL("duck-bc5d3109.svg",import.meta.url).href,self.location).href,position:"after-text"}}},l={args:{default:"Click me",status:"info",icon:{src:new URL(""+new URL("duck-bc5d3109.svg",import.meta.url).href,self.location).href,position:"icon-only"}}},d={args:{default:"Click me",status:"info",href:"#"}},m={args:{default:"Click me",status:"info",disabled:!0}};var _,S,L;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: 'Click me'
  }
}`,...(L=(S=r.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var B,w,R;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info'
  }
}`,...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,I,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    outline: true
  }
}`,...(U=(I=i.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var O,q,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'before-text'
    }
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var T,$,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'after-text'
    }
  }
}`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var E,V,N;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'icon-only'
    }
  }
}`,...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var z,J,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    href: '#'
  }
}`,...(P=(J=d.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    disabled: true
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ue=["Default","Status","Outline","IconBefore","IconAfter","IconOnly","Link","Disabled"];export{r as Default,m as Disabled,u as IconAfter,c as IconBefore,l as IconOnly,d as Link,i as Outline,a as Status,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=Button.stories-6110d683.js.map
