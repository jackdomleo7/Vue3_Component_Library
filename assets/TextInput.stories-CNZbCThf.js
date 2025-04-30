import{e as B,s as H,f as P,b as t,o as s,t as l,m as o,d as k,p as N,F as q,v as M,j as _,x as F,y as O,n as U,z as G}from"./vue.esm-bundler-C4zPe_8p.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=["for"],Q={key:0,class:"j-textinput__count"},X={class:"j-textinput__input-wrapper"},Y=["id","type","value","aria-invalid","aria-errormessage","aria-describedby"],Z={key:0,class:"j-textinput__validation-icon","aria-hidden":"true"},ee=["id"],ae=["id"],R=B({inheritAttrs:!1,__name:"TextInput",props:{rootClass:{type:String,default:void 0},rootStyle:{type:String,default:void 0},id:{type:String,required:!0,validator:e=>!/\s/g.test(e)},type:{type:String,default:"text"},status:{type:String,default:void 0},hiddenLabel:{type:Boolean,default:!1},characterCount:{type:String,default:void 0},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:I}){const E=H(),n=e,z=I,D=P(()=>{const a=E.maxlength?Number(E.maxlength)??void 0:void 0;if(n.characterCount){if(n.characterCount==="ascending"&&a===void 0)return`${n.modelValue.length}`;if(n.characterCount==="ascending"&&a)return`${n.modelValue.length} / ${a}`;if(n.characterCount==="descending"&&a)return`${a-n.modelValue.length} characters remaining`}});return(a,r)=>(s(),t("div",{class:_(["j-textinput",e.rootClass]),style:U(e.rootStyle)},[l("label",{class:_(["j-textinput__label",{"sr-only":e.hiddenLabel}]),for:e.id},[k(a.$slots,"label",{},void 0,!0),N(E).required?(s(),t(q,{key:0},[r[1]||(r[1]=l("span",{class:"j-textinput__asterisk","aria-hidden":"true"},"*",-1)),r[2]||(r[2]=M()),r[3]||(r[3]=l("span",{class:"sr-only"},"(required)",-1))],64)):o("",!0)],10,K),D.value?(s(),t("p",Q,F(D.value),1)):o("",!0),l("div",X,[l("input",O(N(E),{class:"j-textinput__input",id:e.id,type:e.type,value:e.modelValue,"aria-invalid":e.status==="error"?"true":e.status==="success"?"false":void 0,"aria-errormessage":a.$slots.error?`${e.id}-error`:void 0,"aria-describedby":a.$slots.description?`${e.id}-description`:void 0,onInput:r[0]||(r[0]=W=>z("update:modelValue",W.target.value))}),null,16,Y),e.status?(s(),t("span",Z,[e.status==="error"?(s(),t(q,{key:0},[M("✘")],64)):o("",!0),e.status==="success"?(s(),t(q,{key:1},[M("✔")],64)):o("",!0)])):o("",!0)]),a.$slots.error?(s(),t("div",{key:1,class:"j-textinput__error",id:`${e.id}-error`},[k(a.$slots,"error",{},void 0,!0)],8,ee)):o("",!0),a.$slots.description?(s(),t("div",{key:2,class:"j-textinput__description",id:`${e.id}-description`},[k(a.$slots,"description",{},void 0,!0)],8,ae)):o("",!0)],6))}}),A=J(R,[["__scopeId","data-v-f8920c2f"]]);R.__docgenInfo={exportName:"default",displayName:"TextInput",description:"",tags:{},props:[{name:"rootClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rootStyle",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},required:!0},{name:"type",description:"The type of the input. Will only allow text-based types. If another type is needed, see other components.",tags:{see:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types",title:"see"}]},values:["text","email","tel","url","password","search"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"status",values:["success","error"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hiddenLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"characterCount",description:"The character count can be shown in three ways:\n- `ascending` no limit: The number of characters typed.\n- `ascending` with `maxlength` prop: The number of characters typed, and the maximum number of characters allowed.\n- `descending` with `maxlength` prop: The number of characters remaining until the maximum number of characters allowed.",values:["ascending","descending"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"error"},{name:"description"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/TextInput/TextInput.vue"]};const re={title:"Components/TextInput",component:A,argTypes:{type:{control:"radio",options:[void 0,"text","email","url","tel","password","search"]},status:{control:"radio",options:[void 0,"error","success"]}},render:e=>({components:{TextInput:A},setup(){const I=G(e.modelValue);return{args:e,value:I}},template:`
      <TextInput
        v-bind="args"
        v-model="value"
      >
        <template v-if="args.label" v-slot:label>${e.label}</template>
        <template v-if="args.error" v-slot:error>${e.error}</template>
        <template v-if="args.description" v-slot:description>${e.description}</template>
      </TextInput>
    `})},i={args:{id:"type-text",label:"Label",type:"text"}},c={args:{id:"type-email",label:"Label",type:"email"}},d={args:{id:"type-url",label:"Label",type:"url"}},u={args:{id:"type-tel",label:"Label",type:"tel"}},p={args:{id:"type-password",label:"Label",type:"password"}},m={args:{id:"type-search",label:"Label",type:"search"}},g={args:{id:"status-error",label:"Label",status:"error"}},b={args:{id:"status-success",label:"Label",status:"success"}},h={args:{id:"hidden-label",label:"Label",hiddenLabel:!0}},y={args:{id:"character-count-ascending",label:"Label",characterCount:"ascending"}},f={args:{id:"character-count-ascending",label:"Label",characterCount:"ascending",maxlength:20}},v={args:{id:"character-count-descending",label:"Label",characterCount:"descending",maxlength:20}},L={args:{id:"disabled",label:"Label",disabled:!0}},S={args:{id:"readonly",label:"Label",readonly:!0}},x={args:{id:"required",label:"Label",required:!0}},T={args:{id:"minlength",label:"Label",minlength:5}},C={args:{id:"maxlength",label:"Label",maxlength:5}},w={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p>"}},V={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p><p>This is another error message</p>"}},$={args:{id:"with-description",label:"Label",description:"<p>Enter your <strong>full</strong> name</p>"}},j={args:{id:"custom",label:"Label",rootStyle:`
      --j-textinput-height: 4rem;`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-text',
    label: 'Label',
    type: 'text'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-email',
    label: 'Label',
    type: 'email'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-url',
    label: 'Label',
    type: 'url'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-tel',
    label: 'Label',
    type: 'tel'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-password',
    label: 'Label',
    type: 'password'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-search',
    label: 'Label',
    type: 'search'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-error',
    label: 'Label',
    status: 'error'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-success',
    label: 'Label',
    status: 'success'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hidden-label',
    label: 'Label',
    hiddenLabel: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending'
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending',
    maxlength: 20
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-descending',
    label: 'Label',
    characterCount: 'descending',
    maxlength: 20
  }
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'Label',
    disabled: true
  }
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'readonly',
    label: 'Label',
    readonly: true
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'Label',
    required: true
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'minlength',
    label: 'Label',
    minlength: 5
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'maxlength',
    label: 'Label',
    maxlength: 5
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p>'
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p><p>This is another error message</p>'
  }
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    description: '<p>Enter your <strong>full</strong> name</p>'
  }
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom',
    label: 'Label',
    rootStyle: \`
      --j-textinput-height: 4rem;\`
  }
}`,...j.parameters?.docs?.source}}};const te=["TypeText","TypeEmail","TypeUrl","TypeTel","TypePassword","TypeSearch","StatusError","StatusSuccess","HiddenLabel","CharacterCountAscendingNoLimit","CharacterCountAscending","CharacterCountDescending","Disabled","Readonly","Required","Minlength","Maxlength","SingleError","MultipleErrors","WithDescription","Custom"],oe=Object.freeze(Object.defineProperty({__proto__:null,CharacterCountAscending:f,CharacterCountAscendingNoLimit:y,CharacterCountDescending:v,Custom:j,Disabled:L,HiddenLabel:h,Maxlength:C,Minlength:T,MultipleErrors:V,Readonly:S,Required:x,SingleError:w,StatusError:g,StatusSuccess:b,TypeEmail:c,TypePassword:p,TypeSearch:m,TypeTel:u,TypeText:i,TypeUrl:d,WithDescription:$,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{y as C,L as D,h as H,T as M,S as R,b as S,oe as T,$ as W,i as a,c as b,d as c,u as d,p as e,m as f,g,f as h,v as i,x as j,C as k,w as l,V as m,j as n};
