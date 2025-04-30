import{j as e,M as d,T as c,S as s}from"./index-BpftePvR.js";import{useMDXComponents as l}from"./index-BfswRw2K.js";import{T as h,a as r,b as o,c as a,d as x,e as j,f as u,S as p,g as m,H as g,C as f,h as b,i as y,D as T,R as w,j as v,M as C,k as S,l as D,m as M,W as I,n as R}from"./TextInput.stories-CKUuFovC.js";import"./iframe-Cx5srZ20.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CDuLr8kb.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-D37E-MbO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/TextInput",of:h}),`
`,e.jsx(c,{children:"TextInput"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import TextInput from '@jackdomleo7/vue3-library/components/TextInput/TextInput.vue';
`})}),`
`,e.jsx(s,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"v-model",children:e.jsx(n.code,{children:"v-model"})}),`
`,e.jsxs(n.p,{children:["You can bind any string value to the ",e.jsx(n.code,{children:"v-model"})," prop. This is a two-way binding, so any changes to the input will update the bound value, and vice versa."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { ref } from 'vue';

const value = ref<string>('');
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput v-model="value" />
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
`,e.jsx(n.h3,{id:"type",children:"Type"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"type"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:'"text"|"email"|"tel"|"url"|"password"|"search"'})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:'"text"'})]}),`
`,e.jsxs(n.li,{children:["Extends: ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types",rel:"nofollow",children:e.jsx(n.code,{children:"<input type />"})})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The type of the ",e.jsx(n.code,{children:"<input/>"})," element. This component restricts the type to those that are string-based (excluding dates)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="text"'})}),`
`,e.jsx(s,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="email"'})}),`
`,e.jsx(s,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="url"'})}),`
`,e.jsx(s,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="tel"'})}),`
`,e.jsx(s,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="password"'})}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'type="search"'})}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"status",children:"Status"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"status"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:'"error"|"success"'})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The validation status of the input."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"hidden-label",children:"Hidden Label"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"hiddenLabel"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"false"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you want to hide the label, you will still need to set a label (for accessibility), but you can then set this prop to ",e.jsx(n.code,{children:"true"})," to hide the label visually."]}),`
`,e.jsx(n.p,{children:"Only to be used where the context of its use is clear."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"character-count",children:"Character Count"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prop: ",e.jsx(n.code,{children:"characterCount"})]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:'"ascending"|"descending"'})]}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"undefined"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Whether to show the character count."}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:'characterCount="ascending"'}),", the character count will be an incremental counter that counts up from 0."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:'characterCount="ascending"'})," ",e.jsx(n.strong,{children:"and"})," a ",e.jsx(n.code,{children:"maxlength"})," value has been set, the character count will be shown as ",e.jsx(n.code,{children:"0/{maxlength}"})," up to the ",e.jsx(n.code,{children:"maxlength"})," value."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:'characterCount="descending"'})," ",e.jsx(n.strong,{children:"and"})," a ",e.jsx(n.code,{children:"maxlength"})," value has been set, the character count will be shown as ",e.jsx(n.code,{children:"{maxlength} characters remaining"})," down to ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:'characterCount="descending"'})," ",e.jsx(n.strong,{children:"without"})," a ",e.jsx(n.code,{children:"maxlength"})," value, no counter will show because there is no limit to count down from."]}),`
`,e.jsx(n.h3,{id:"fallthrough-attributes",children:"Fallthrough Attributes"}),`
`,e.jsxs(n.p,{children:["Any non-prop attributes and any event listeners will fallthrough to the ",e.jsx(n.code,{children:"<input/>"})," element. This means you can use any native HTML attributes that are valid for an ",e.jsx(n.code,{children:"<input/>"})," element with the ",e.jsx(n.code,{children:"type"})," specified. Below are just some examples."]}),`
`,e.jsx(n.h4,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput disabled />
`})}),`
`,e.jsx(s,{of:T}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"readonly",children:"Readonly"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput readonly />
`})}),`
`,e.jsx(s,{of:w}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"required",children:"Required"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput required />
`})}),`
`,e.jsx(s,{of:v}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"minlength",children:"Minlength"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput minlength="5" />
`})}),`
`,e.jsx(s,{of:C}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"maxlength",children:"Maxlength"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<TextInput maxlength="5" />
`})}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Slot: ",e.jsx(n.code,{children:"error"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Recommended to use with ",e.jsx(n.code,{children:'status="error"'}),"."]}),`
`,e.jsx(n.p,{children:"Single error."}),`
`,e.jsx(s,{of:D}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"Multiple errors."}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.h3,{id:"description",children:"Description"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Slot: ",e.jsx(n.code,{children:"description"})]}),`
`]}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(n.h2,{id:"customisation",children:"Customisation"}),`
`,e.jsxs(n.p,{children:["You can customise the component using the ",e.jsx(n.code,{children:"rootClass"})," and ",e.jsx(n.code,{children:"rootStyle"})," props to apply top-level styles. You can also use the provided CSS variables to alter deep styles."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--j-textinput-height"})," | ",e.jsx(n.strong,{children:"Type:"})," ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/height",rel:"nofollow",children:e.jsx(n.code,{children:"height"})})," | ",e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:"2.5rem"})," | The height of the input element."]}),`
`]}),`
`,e.jsx(s,{of:R}),`
`,e.jsx(n.h2,{id:"behaviour",children:"Behaviour"}),`
`,e.jsx(n.h3,{id:"width",children:"Width"}),`
`,e.jsxs(n.p,{children:["This component will take up the full width of the parent component by default. You can use the ",e.jsx(n.code,{children:"rootClass"})," or ",e.jsx(n.code,{children:"rootStyle"})," props to set a custom width."]}),`
`,e.jsxs(n.p,{children:["The minimum width is 1.5× the ",e.jsx(n.code,{children:"--j-textinput-height"})," variable."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["This component uses native HTML behaviour for ",e.jsx(n.code,{children:"<input />"})," elements. This means that it will be keyboard navigable and screen reader friendly out of the box."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-invalid"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"status"})," prop is set. This will be set to ",e.jsx(n.code,{children:"true"})," when ",e.jsx(n.code,{children:'status="error"'})," and ",e.jsx(n.code,{children:"false"})," when ",e.jsx(n.code,{children:'status="success"'}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-describedby"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"description"})," slot is used to associate this content with the input."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"aria-errormessage"})," is added to the ",e.jsx(n.code,{children:"<input />"})," element when the ",e.jsx(n.code,{children:"error"})," slot is used to associate this content with the input."]})]})}function Y(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{Y as default};
