const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-D6FBT3PG.js","./index-E5lH4SHk.js","./iframe-BMOhcaWz.js","./index-Cu4lwwaE.js","./index-BnQ49SPI.js","./index-ogSvIofg.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./iframe-BMOhcaWz.js";import{i as h,r as a,k as E,A as R,H as v,R as n,D as f}from"./index-E5lH4SHk.js";import"./index-Cu4lwwaE.js";import"./index-BnQ49SPI.js";import"./index-ogSvIofg.js";var s={},m;function w(){if(m)return s;m=1;var e=h();return s.createRoot=e.createRoot,s.hydrateRoot=e.hydrateRoot,s}var _=w(),i=new Map;function y(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var x=({callback:e,children:r})=>{let t=a.useRef();return a.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise((t,o)=>{e=t,r=o}),resolve:e,reject:r}});var C=async(e,r,t)=>{let o=await g(r,t);if(y()){o.render(e);return}let{promise:u,resolve:c}=Promise.withResolvers();return o.render(a.createElement(x,{callback:c},e)),u},D=(e,r)=>{let t=i.get(e);t&&(t.unmount(),i.delete(e))},g=async(e,r)=>{let t=i.get(e);return t||(t=_.createRoot(e,r),i.set(e,t)),t},A={code:E,a:R,...v},M=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:n.createElement(n.Fragment,null,r)}},O=class{constructor(){this.render=async(e,r,t)=>{let o={...A,...r?.components},u=f;return new Promise((c,d)=>{p(async()=>{const{MDXProvider:l}=await import("./index-D6FBT3PG.js");return{MDXProvider:l}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({MDXProvider:l})=>C(n.createElement(M,{showException:d,key:Math.random()},n.createElement(l,{components:o},n.createElement(u,{context:e,docsParameter:r}))),t)).then(()=>c())})},this.unmount=e=>{D(e)}}};export{O as DocsRenderer,A as defaultComponents};
