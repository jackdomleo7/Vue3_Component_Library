import{_ as G}from"./iframe-Q-HGp9yg.js";import{d as K,f as Q,o as f,e as g,g as W,n as X,j as Y,k as Z,u as C,l as v,m as e2,p as t2,q as s2}from"./vue.esm-bundler-L6kgnhFo.js";import"../sb-preview/runtime.js";const F=K({__name:"Button",props:{href:{},status:{},outline:{type:Boolean},icon:{},disabled:{type:Boolean}},setup(p){const s=t2(()=>G(()=>import("./Icon-AugPy0Zv.js"),__vite__mapDeps([0,1]),import.meta.url)),o=Q(()=>{const e=s2().default;let t="";return e().forEach(a=>t+=a.children),t});return(e,t)=>{var a,h,b,k;return f(),g(Z(e.href?"a":"button"),{href:e.href,class:X(["btn",{"btn--status":e.status,"btn--icon-only":((a=e.icon)==null?void 0:a.position)==="icon-only","btn--icon-before":((h=e.icon)==null?void 0:h.position)==="before-text","btn--icon-after":((b=e.icon)==null?void 0:b.position)==="after-text"}]),title:((k=e.icon)==null?void 0:k.position)==="icon-only"?o.value:void 0,style:Y(e.status?e.outline?`
            --j-btn-color: var(--j-${e.status});
            --j-btn-border-color: var(--j-${e.status})
          `:`
            --j-btn-color: #fff;
            --j-btn-background-color: var(--j-${e.status});
            --j-btn-border-color: var(--j-${e.status})
          `:""),disabled:e.disabled},{default:W(()=>{var y;return[e.icon&&e.icon.position!=="after-text"?(f(),g(C(s),{key:0,icon:e.icon},null,8,["icon"])):v("",!0),((y=e.icon)==null?void 0:y.position)!=="icon-only"?e2(e.$slots,"default",{key:1},void 0,!0):v("",!0),e.icon&&e.icon.position==="after-text"?(f(),g(C(s),{key:2,icon:e.icon},null,8,["icon"])):v("",!0)]}),_:3},8,["href","title","style","class","disabled"])}}}),o2=(p,s)=>{const o=p.__vccOpts||p;for(const[e,t]of s)o[e]=t;return o},a2=o2(F,[["__scopeId","data-v-09c45f04"]]);F.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"href",required:!1,type:{name:"string"}},{name:"status",required:!1,type:{name:"TSTypeReference"}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSTypeReference"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/Button/Button.vue"]};const i2={title:"Components/Button",component:a2,tags:["autodocs"],argTypes:{status:{control:"radio",options:[void 0,"accent","info","error","warning","success"]}}},n={args:{default:"Click me"}},r={args:{default:"Click me",status:"info"}},c={args:{default:"Click me",status:"info",outline:!0}},i={args:{default:"Click me",status:"info",icon:{src:new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20viewBox='0%200%20512.001%20512.001'%3e%3cpath%20d='M492.977%20219.06c-11.854-6.513-25.73-6.081-37.119%201.151-32.916%2020.896-79.957%2030.239-136.975%2027.373%2012.867-20.341%2019.778-43.956%2019.778-68.435%200-70.739-57.551-128.291-128.29-128.291-67.26.002-122.524%2051.371-127.858%20117.721-10.914%2010.909-37.836%2034.276-71.473%2038.288-4.67.557-8.636%203.684-10.264%208.096-1.629%204.413-.65%209.366%202.539%2012.825%201.592%201.727%2037.457%2039.74%20105.634%2039.738%202.705%200%205.468-.068%208.276-.192.526.556%201.044%201.121%201.58%201.667-19.416%2020.845-30.445%2048.099-30.664%2076.66-.224%2030.788%2011.594%2059.774%2033.278%2081.615%2021.682%2021.84%2050.568%2033.867%2081.338%2033.867h155.517c50.332%200%2091.082-19.931%20117.84-57.636C499.591%20370.425%20512%20324.207%20512%20269.846v-18.648c.001-13.375-7.288-25.689-19.023-32.138zM41.04%20225.209c17.138-6.245%2031.695-15.589%2042.887-24.412%202.488%2014.537%207.473%2028.522%2014.704%2041.344-25.533-1.704-44.748-9.525-57.591-16.932zm445.914%2044.638c0%2049.136-10.812%2090.342-31.265%20119.164-22.173%2031.244-54.948%2047.086-97.414%2047.086H202.757c-24.045%200-46.62-9.399-63.563-26.467-16.946-17.07-26.182-39.723-26.006-63.781.199-25.927%2011.87-50.51%2032.015-67.442%202.854-2.401%204.492-5.947%204.465-9.678-.026-3.73-1.714-7.254-4.605-9.612-4.689-3.827-9.093-8.13-13.091-12.79-.001-.001-.003-.004-.005-.006-16.028-18.66-24.854-42.515-24.854-67.17%200-1.628.035-3.11.113-4.625%202.423-55.299%2047.73-98.618%20103.148-98.618%2056.928%200%20103.243%2046.315%20103.243%20103.244%200%2026.306-9.92%2051.373-27.934%2070.583-3.257%203.474-4.262%208.495-2.594%2012.956%201.669%204.461%205.723%207.588%2010.462%208.07%2072.976%207.425%20133.734-2.74%20175.735-29.401%205.133-3.261%209.843-1.328%2011.629-.346%201.816.998%206.039%203.989%206.039%2010.187v18.646z'/%3e%3cpath%20d='M302.82%20374.732h-10.432c-6.915%200-12.523%205.607-12.523%2012.524s5.607%2012.524%2012.523%2012.524h10.432c6.916%200%2012.524-5.607%2012.524-12.524s-5.609-12.524-12.524-12.524z'/%3e%3cpath%20d='M425.577%20324.05c-5.768-3.817-13.538-2.238-17.355%203.53-13.842%2020.912-34.649%2036.216-58.586%2043.091-6.649%201.91-10.488%208.847-8.58%2015.494%201.576%205.494%206.585%209.07%2012.029%209.07%201.145%200%202.309-.158%203.464-.49%2029.662-8.52%2055.429-27.463%2072.559-53.34%203.816-5.767%202.236-13.538-3.531-17.355z'/%3e%3cpath%20d='M179.087%20126.365c-6.916%200-12.524%205.607-12.524%2012.524v31.434c0%206.917%205.608%2012.524%2012.524%2012.524s12.524-5.607%2012.524-12.524v-31.434c0-6.917-5.608-12.524-12.524-12.524z'/%3e%3c/svg%3e",import.meta.url).href,position:"before-text"}}},l={args:{default:"Click me",status:"info",icon:{src:new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20viewBox='0%200%20512.001%20512.001'%3e%3cpath%20d='M492.977%20219.06c-11.854-6.513-25.73-6.081-37.119%201.151-32.916%2020.896-79.957%2030.239-136.975%2027.373%2012.867-20.341%2019.778-43.956%2019.778-68.435%200-70.739-57.551-128.291-128.29-128.291-67.26.002-122.524%2051.371-127.858%20117.721-10.914%2010.909-37.836%2034.276-71.473%2038.288-4.67.557-8.636%203.684-10.264%208.096-1.629%204.413-.65%209.366%202.539%2012.825%201.592%201.727%2037.457%2039.74%20105.634%2039.738%202.705%200%205.468-.068%208.276-.192.526.556%201.044%201.121%201.58%201.667-19.416%2020.845-30.445%2048.099-30.664%2076.66-.224%2030.788%2011.594%2059.774%2033.278%2081.615%2021.682%2021.84%2050.568%2033.867%2081.338%2033.867h155.517c50.332%200%2091.082-19.931%20117.84-57.636C499.591%20370.425%20512%20324.207%20512%20269.846v-18.648c.001-13.375-7.288-25.689-19.023-32.138zM41.04%20225.209c17.138-6.245%2031.695-15.589%2042.887-24.412%202.488%2014.537%207.473%2028.522%2014.704%2041.344-25.533-1.704-44.748-9.525-57.591-16.932zm445.914%2044.638c0%2049.136-10.812%2090.342-31.265%20119.164-22.173%2031.244-54.948%2047.086-97.414%2047.086H202.757c-24.045%200-46.62-9.399-63.563-26.467-16.946-17.07-26.182-39.723-26.006-63.781.199-25.927%2011.87-50.51%2032.015-67.442%202.854-2.401%204.492-5.947%204.465-9.678-.026-3.73-1.714-7.254-4.605-9.612-4.689-3.827-9.093-8.13-13.091-12.79-.001-.001-.003-.004-.005-.006-16.028-18.66-24.854-42.515-24.854-67.17%200-1.628.035-3.11.113-4.625%202.423-55.299%2047.73-98.618%20103.148-98.618%2056.928%200%20103.243%2046.315%20103.243%20103.244%200%2026.306-9.92%2051.373-27.934%2070.583-3.257%203.474-4.262%208.495-2.594%2012.956%201.669%204.461%205.723%207.588%2010.462%208.07%2072.976%207.425%20133.734-2.74%20175.735-29.401%205.133-3.261%209.843-1.328%2011.629-.346%201.816.998%206.039%203.989%206.039%2010.187v18.646z'/%3e%3cpath%20d='M302.82%20374.732h-10.432c-6.915%200-12.523%205.607-12.523%2012.524s5.607%2012.524%2012.523%2012.524h10.432c6.916%200%2012.524-5.607%2012.524-12.524s-5.609-12.524-12.524-12.524z'/%3e%3cpath%20d='M425.577%20324.05c-5.768-3.817-13.538-2.238-17.355%203.53-13.842%2020.912-34.649%2036.216-58.586%2043.091-6.649%201.91-10.488%208.847-8.58%2015.494%201.576%205.494%206.585%209.07%2012.029%209.07%201.145%200%202.309-.158%203.464-.49%2029.662-8.52%2055.429-27.463%2072.559-53.34%203.816-5.767%202.236-13.538-3.531-17.355z'/%3e%3cpath%20d='M179.087%20126.365c-6.916%200-12.524%205.607-12.524%2012.524v31.434c0%206.917%205.608%2012.524%2012.524%2012.524s12.524-5.607%2012.524-12.524v-31.434c0-6.917-5.608-12.524-12.524-12.524z'/%3e%3c/svg%3e",import.meta.url).href,position:"after-text"}}},u={args:{default:"Click me",status:"info",icon:{src:new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20viewBox='0%200%20512.001%20512.001'%3e%3cpath%20d='M492.977%20219.06c-11.854-6.513-25.73-6.081-37.119%201.151-32.916%2020.896-79.957%2030.239-136.975%2027.373%2012.867-20.341%2019.778-43.956%2019.778-68.435%200-70.739-57.551-128.291-128.29-128.291-67.26.002-122.524%2051.371-127.858%20117.721-10.914%2010.909-37.836%2034.276-71.473%2038.288-4.67.557-8.636%203.684-10.264%208.096-1.629%204.413-.65%209.366%202.539%2012.825%201.592%201.727%2037.457%2039.74%20105.634%2039.738%202.705%200%205.468-.068%208.276-.192.526.556%201.044%201.121%201.58%201.667-19.416%2020.845-30.445%2048.099-30.664%2076.66-.224%2030.788%2011.594%2059.774%2033.278%2081.615%2021.682%2021.84%2050.568%2033.867%2081.338%2033.867h155.517c50.332%200%2091.082-19.931%20117.84-57.636C499.591%20370.425%20512%20324.207%20512%20269.846v-18.648c.001-13.375-7.288-25.689-19.023-32.138zM41.04%20225.209c17.138-6.245%2031.695-15.589%2042.887-24.412%202.488%2014.537%207.473%2028.522%2014.704%2041.344-25.533-1.704-44.748-9.525-57.591-16.932zm445.914%2044.638c0%2049.136-10.812%2090.342-31.265%20119.164-22.173%2031.244-54.948%2047.086-97.414%2047.086H202.757c-24.045%200-46.62-9.399-63.563-26.467-16.946-17.07-26.182-39.723-26.006-63.781.199-25.927%2011.87-50.51%2032.015-67.442%202.854-2.401%204.492-5.947%204.465-9.678-.026-3.73-1.714-7.254-4.605-9.612-4.689-3.827-9.093-8.13-13.091-12.79-.001-.001-.003-.004-.005-.006-16.028-18.66-24.854-42.515-24.854-67.17%200-1.628.035-3.11.113-4.625%202.423-55.299%2047.73-98.618%20103.148-98.618%2056.928%200%20103.243%2046.315%20103.243%20103.244%200%2026.306-9.92%2051.373-27.934%2070.583-3.257%203.474-4.262%208.495-2.594%2012.956%201.669%204.461%205.723%207.588%2010.462%208.07%2072.976%207.425%20133.734-2.74%20175.735-29.401%205.133-3.261%209.843-1.328%2011.629-.346%201.816.998%206.039%203.989%206.039%2010.187v18.646z'/%3e%3cpath%20d='M302.82%20374.732h-10.432c-6.915%200-12.523%205.607-12.523%2012.524s5.607%2012.524%2012.523%2012.524h10.432c6.916%200%2012.524-5.607%2012.524-12.524s-5.609-12.524-12.524-12.524z'/%3e%3cpath%20d='M425.577%20324.05c-5.768-3.817-13.538-2.238-17.355%203.53-13.842%2020.912-34.649%2036.216-58.586%2043.091-6.649%201.91-10.488%208.847-8.58%2015.494%201.576%205.494%206.585%209.07%2012.029%209.07%201.145%200%202.309-.158%203.464-.49%2029.662-8.52%2055.429-27.463%2072.559-53.34%203.816-5.767%202.236-13.538-3.531-17.355z'/%3e%3cpath%20d='M179.087%20126.365c-6.916%200-12.524%205.607-12.524%2012.524v31.434c0%206.917%205.608%2012.524%2012.524%2012.524s12.524-5.607%2012.524-12.524v-31.434c0-6.917-5.608-12.524-12.524-12.524z'/%3e%3c/svg%3e",import.meta.url).href,position:"icon-only"}}},m={args:{default:"Click me",status:"info",href:"#"}},d={args:{default:"Click me",status:"info",disabled:!0}};var w,z,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    default: 'Click me'
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var B,M,L;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info'
  }
}`,...(L=(M=r.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var j,I,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    outline: true
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,O,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'before-text'
    }
  }
}`,...(q=(O=i.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var D,T,U;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'after-text'
    }
  }
}`,...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var $,x,A;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'icon-only'
    }
  }
}`,...(A=(x=u.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var E,V,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    href: '#'
  }
}`,...(H=(V=m.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var N,J,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    default: 'Click me',
    status: 'info',
    disabled: true
  }
}`,...(P=(J=d.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};const l2=["Default","Status","Outline","IconBefore","IconAfter","IconOnly","Link","Disabled"];export{n as Default,d as Disabled,l as IconAfter,i as IconBefore,u as IconOnly,m as Link,c as Outline,r as Status,l2 as __namedExportsOrder,i2 as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Icon-AugPy0Zv.js","./vue.esm-bundler-L6kgnhFo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}