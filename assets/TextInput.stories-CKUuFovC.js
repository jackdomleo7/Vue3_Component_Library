import{e as H,s as P,f as F,b as t,o as s,t as l,m as o,d as q,p as _,F as D,v as M,j as A,z as O,x as U,n as G,y as J}from"./vue.esm-bundler-D37E-MbO.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q=["for"],X={key:0,class:"j-textinput__count"},Y={class:"j-textinput__input-wrapper"},Z=["id","type","value","aria-invalid","aria-errormessage","aria-describedby"],ee={key:0,class:"j-textinput__validation-icon","aria-hidden":"true"},ae=["id"],re=["id"],z=H({inheritAttrs:!1,__name:"TextInput",props:{rootClass:{type:String,default:void 0},rootStyle:{type:String,default:void 0},id:{type:String,required:!0,validator:e=>!/\s/g.test(e)},type:{type:String,default:"text"},status:{type:String,default:void 0},hiddenLabel:{type:Boolean,default:!1},characterCount:{type:String,default:void 0},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:k}){const I=P(),n=e,W=k,N=F(()=>{const a=I.maxlength?Number(I.maxlength)??void 0:void 0;if(n.characterCount){if(n.characterCount==="ascending"&&a===void 0)return`${n.modelValue.length}`;if(n.characterCount==="ascending"&&a)return`${n.modelValue.length} / ${a}`;if(n.characterCount==="descending"&&a)return`${a-n.modelValue.length} characters remaining`}});return(a,r)=>(s(),t("div",{class:A(["j-textinput",e.rootClass]),style:G(e.rootStyle)},[l("label",{class:A(["j-textinput__label",{"sr-only":e.hiddenLabel}]),for:e.id},[q(a.$slots,"label",{},void 0,!0),_(I).required?(s(),t(D,{key:0},[r[1]||(r[1]=l("span",{class:"j-textinput__asterisk","aria-hidden":"true"},"*",-1)),r[2]||(r[2]=M()),r[3]||(r[3]=l("span",{class:"sr-only"},"(required)",-1))],64)):o("",!0)],10,Q),N.value?(s(),t("p",X,O(N.value),1)):o("",!0),l("div",Y,[l("input",U(_(I),{class:"j-textinput__input",id:e.id,type:e.type,value:e.modelValue,"aria-invalid":e.status==="error"?"true":e.status==="success"?"false":void 0,"aria-errormessage":a.$slots.error?`${e.id}-error`:void 0,"aria-describedby":a.$slots.description?`${e.id}-description`:void 0,onInput:r[0]||(r[0]=B=>W("update:modelValue",B.target.value))}),null,16,Z),e.status?(s(),t("span",ee,[e.status==="error"?(s(),t(D,{key:0},[M("✘")],64)):o("",!0),e.status==="success"?(s(),t(D,{key:1},[M("✔")],64)):o("",!0)])):o("",!0)]),a.$slots.error?(s(),t("div",{key:1,class:"j-textinput__error",id:`${e.id}-error`},[q(a.$slots,"error",{},void 0,!0)],8,ae)):o("",!0),a.$slots.description?(s(),t("div",{key:2,class:"j-textinput__description",id:`${e.id}-description`},[q(a.$slots,"description",{},void 0,!0)],8,re)):o("",!0)],6))}}),R=K(z,[["__scopeId","data-v-f8920c2f"]]);z.__docgenInfo={exportName:"default",displayName:"TextInput",description:"",tags:{},props:[{name:"rootClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rootStyle",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},required:!0},{name:"type",description:"The type of the input. Will only allow text-based types. If another type is needed, see other components.",tags:{see:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types",title:"see"}]},values:["text","email","tel","url","password","search"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"status",values:["success","error"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hiddenLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"characterCount",description:"The character count can be shown in three ways:\n- `ascending` no limit: The number of characters typed.\n- `ascending` with `maxlength` prop: The number of characters typed, and the maximum number of characters allowed.\n- `descending` with `maxlength` prop: The number of characters remaining until the maximum number of characters allowed.",values:["ascending","descending"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"error"},{name:"description"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/TextInput/TextInput.vue"]};const te={title:"Components/TextInput",component:R,argTypes:{type:{control:"radio",options:[void 0,"text","email","url","tel","password","search"]},status:{control:"radio",options:[void 0,"error","success"]}},render:e=>({components:{TextInput:R},setup(){const k=J(e.modelValue);return{args:e,value:k}},template:`
      <TextInput
        v-bind="args"
        v-model="value"
      >
        <template v-if="args.label" v-slot:label>${e.label}</template>
        <template v-if="args.error" v-slot:error>${e.error}</template>
        <template v-if="args.description" v-slot:description>${e.description}</template>
      </TextInput>
    `})},i={args:{id:"default",label:"Label"}},c={args:{id:"type-text",label:"Label",type:"text"}},d={args:{id:"type-email",label:"Label",type:"email"}},u={args:{id:"type-url",label:"Label",type:"url"}},p={args:{id:"type-tel",label:"Label",type:"tel"}},m={args:{id:"type-password",label:"Label",type:"password"}},g={args:{id:"type-search",label:"Label",type:"search"}},b={args:{id:"status-error",label:"Label",status:"error"}},h={args:{id:"status-success",label:"Label",status:"success"}},y={args:{id:"hidden-label",label:"Label",hiddenLabel:!0}},f={args:{id:"character-count-ascending",label:"Label",characterCount:"ascending"}},v={args:{id:"character-count-ascending",label:"Label",characterCount:"ascending",maxlength:20}},L={args:{id:"character-count-descending",label:"Label",characterCount:"descending",maxlength:20}},S={args:{id:"disabled",label:"Label",disabled:!0}},x={args:{id:"readonly",label:"Label",readonly:!0}},T={args:{id:"required",label:"Label",required:!0}},C={args:{id:"minlength",label:"Label",minlength:5}},w={args:{id:"maxlength",label:"Label",maxlength:5}},V={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p>"}},$={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p><p>This is another error message</p>"}},j={args:{id:"with-description",label:"Label",description:"<p>Enter your <strong>full</strong> name</p>"}},E={args:{id:"custom",label:"Label",rootStyle:`
      --j-textinput-height: 4rem;`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    label: 'Label'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-text',
    label: 'Label',
    type: 'text'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-email',
    label: 'Label',
    type: 'email'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-url',
    label: 'Label',
    type: 'url'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-tel',
    label: 'Label',
    type: 'tel'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-password',
    label: 'Label',
    type: 'password'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'type-search',
    label: 'Label',
    type: 'search'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-error',
    label: 'Label',
    status: 'error'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-success',
    label: 'Label',
    status: 'success'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hidden-label',
    label: 'Label',
    hiddenLabel: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending',
    maxlength: 20
  }
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count-descending',
    label: 'Label',
    characterCount: 'descending',
    maxlength: 20
  }
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'Label',
    disabled: true
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'readonly',
    label: 'Label',
    readonly: true
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'Label',
    required: true
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'minlength',
    label: 'Label',
    minlength: 5
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'maxlength',
    label: 'Label',
    maxlength: 5
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p>'
  }
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p><p>This is another error message</p>'
  }
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    description: '<p>Enter your <strong>full</strong> name</p>'
  }
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom',
    label: 'Label',
    rootStyle: \`
      --j-textinput-height: 4rem;\`
  }
}`,...E.parameters?.docs?.source}}};const se=["Default","TypeText","TypeEmail","TypeUrl","TypeTel","TypePassword","TypeSearch","StatusError","StatusSuccess","HiddenLabel","CharacterCountAscendingNoLimit","CharacterCountAscending","CharacterCountDescending","Disabled","Readonly","Required","Minlength","Maxlength","SingleError","MultipleErrors","WithDescription","Custom"],le=Object.freeze(Object.defineProperty({__proto__:null,CharacterCountAscending:v,CharacterCountAscendingNoLimit:f,CharacterCountDescending:L,Custom:E,Default:i,Disabled:S,HiddenLabel:y,Maxlength:w,Minlength:C,MultipleErrors:$,Readonly:x,Required:T,SingleError:V,StatusError:b,StatusSuccess:h,TypeEmail:d,TypePassword:m,TypeSearch:g,TypeTel:p,TypeText:c,TypeUrl:u,WithDescription:j,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{f as C,S as D,y as H,C as M,x as R,h as S,le as T,j as W,c as a,d as b,u as c,p as d,m as e,g as f,b as g,v as h,L as i,T as j,w as k,V as l,$ as m,E as n};
