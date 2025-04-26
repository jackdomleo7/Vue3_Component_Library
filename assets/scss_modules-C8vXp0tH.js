import{j as e,M as o,T as c}from"./index-cxDLX-ur.js";import{useMDXComponents as t}from"./index-CqgerLtJ.js";import"./iframe-pI3kEG9O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CDuLr8kb.js";import"./index-DrFu-skq.js";function l(n){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/SCSS Modules"}),`
`,e.jsx(c,{children:"SCSS Modules"}),`
`,e.jsxs(s.p,{children:["This library comes with a set of SCSS modules that you can ",e.jsx(s.code,{children:"@use"})," into your project. These do not come bundled as default, they need to be imported manually."]}),`
`,e.jsx(s.h2,{id:"_sr-onlyscss",children:e.jsx(s.code,{children:"_sr-only.scss"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`@use '@jackdomleo7/vue3-library/src/styles/modules/sr-only' as *;
`})}),`
`,e.jsx(s.p,{children:"This module contains 2 classes that can be used to hide elements visually but keep them accessible to screen readers."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".sr-only"}),": Hides the element visually but keeps it accessible to screen readers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".sr-only--focusable"}),": Hides the element visually but keeps it accessible to screen readers. It will be visible when focused."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<button class="icon-only"><span class="sr-only">Close</span> &times;</button>

<button class="sr-only sr-only--focusable">Skip to main content</button>
`})})]})}function m(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{m as default};
