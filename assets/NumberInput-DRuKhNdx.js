import{j as e,M as d,T as t,S as s}from"./index-BpftePvR.js";import{useMDXComponents as l}from"./index-BfswRw2K.js";import{N as o,D as c,S as h,a,H as x,b as j,R as u,c as p,M as m,d as b,e as f,f as y,W as g,C as v}from"./NumberInput.stories-C6XaoMab.js";import"./iframe-Cx5srZ20.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CDuLr8kb.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-D37E-MbO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function r(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/NumberInput",of:o}),`
`,e.jsx(t,{children:"NumberInput"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import NumberInput from '@jackdomleo7/vue3-library/components/NumberInput/NumberInput.vue';
`})}),`
`,e.jsx(s,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"v-model",children:e.jsx(n.code,{children:"v-model"})}),`
`,e.jsxs(n.p,{children:["You can bind any number value to the ",e.jsx(n.code,{children:"v-model"})," prop. This is a two-way binding, so any changes to the input will update the bound value, and vice versa."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { ref } from 'vue';

const value = ref<number>(7);
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput v-model="value" />
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"root-class",children:"Root Class"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"rootClass"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Classes to add directly to the root element's ",e.jsx(n.code,{children:"class"})," attribute."]}),`
`,e.jsx(n.h3,{id:"root-style",children:"Root Style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"rootStyle"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Styles to add directly to the root element's ",e.jsx(n.code,{children:"style"})," attribute."]}),`
`,e.jsx(n.h3,{id:"id",children:"ID"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"id"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"string"})]}),`
`,e.jsxs(n.li,{children:["Required: ",e.jsx(n.code,{children:"true"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"id"})," of the ",e.jsx(n.code,{children:"<input/>"})," and the ",e.jsx(n.code,{children:"for"})," of the ",e.jsx(n.code,{children:"<label/>"})," element. This may also be used in various ARIA attributes."]}),`
`,e.jsx(n.h3,{id:"status",children:"Status"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"status"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:'"error"|"success"'})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The validation status of the input."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"hidden-label",children:"Hidden Label"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"hiddenLabel"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you want to hide the label, you will still need to set a label (for accessibility), but you can then set this prop to ",e.jsx(n.code,{children:"true"})," to hide the label visually."]}),`
`,e.jsx(n.p,{children:"Only to be used where the context of its use is clear."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"fallthrough-attributes",children:"Fallthrough Attributes"}),`
`,e.jsxs(n.p,{children:["Any non-prop attributes and any event listeners will fallthrough to the ",e.jsx(n.code,{children:"<input/>"})," element. This means you can use any native HTML attributes that are valid for an ",e.jsx(n.code,{children:"<input/>"})," element with the ",e.jsx(n.code,{children:"type"})," specified. Below are just some examples."]}),`
`,e.jsx(n.h4,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput disabled />
`})}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"readonly",children:"Readonly"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput readonly />
`})}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"required",children:"Required"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput required />
`})}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"minlength",children:"Minlength"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput min="5" />
`})}),`
`,e.jsx(s,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"maxlength",children:"Maxlength"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<NumberInput max="5" />
`})}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Slot: ",e.jsx(n.code,{children:"error"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Recommended to use with ",e.jsx(n.code,{children:'status="error"'}),"."]}),`
`,e.jsx(n.p,{children:"Single error."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"Multiple errors."}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"description",children:"Description"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Slot: ",e.jsx(n.code,{children:"description"})]}),`
`]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"customisation",children:"Customisation"}),`
`,e.jsxs(n.p,{children:["You can customise the component using the ",e.jsx(n.code,{children:"rootClass"})," and ",e.jsx(n.code,{children:"rootStyle"})," props to apply top-level styles. You can also use the provided CSS variables to alter deep styles."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--j-numberinput-height"})," | ",e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/height",rel:"nofollow",children:e.jsx(n.code,{children:"height"})})," | ",e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"2.5rem"})," | The height of the input element."]}),`
`]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsx(n.h3,{id:"width",children:"Width"}),`
`,e.jsxs(n.p,{children:["This component will take up the full width of the parent component by default. You can use the ",e.jsx(n.code,{children:"rootClass"})," or ",e.jsx(n.code,{children:"rootStyle"})," props to set a custom width."]}),`
`,e.jsxs(n.p,{children:["The minimum width is 1.5× the ",e.jsx(n.code,{children:"--j-numberinput-height"})," variable."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["This component uses native HTML behaviour for ",e.jsx(n.code,{children:'<input type="number" />'}),". This means that it will be keyboard navigable and screen reader friendly out of the box."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-invalid"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"status"})," prop is set. This will be set to ",e.jsx(n.code,{children:"true"})," when ",e.jsx(n.code,{children:'status="error"'})," and ",e.jsx(n.code,{children:"false"})," when ",e.jsx(n.code,{children:'status="success"'}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-describedby"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"description"})," slot is used to associate this content with the input."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-errormessage"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"error"})," slot is used to associate this content with the input."]})]})}function L(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{L as default};
