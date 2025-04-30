import{e as T,s as w,b as s,t as o,m as n,d as h,p as j,F as N,v as V,j as C,x as M,n as D,o as t,y as x}from"./vue.esm-bundler-D37E-MbO.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R=["for"],B={class:"j-numberinput__input-wrapper"},z=["id","value","aria-invalid","aria-errormessage","aria-describedby"],F={key:0,class:"j-numberinput__validation-icon","aria-hidden":"true"},H=["id"],O=["id"],k=T({inheritAttrs:!1,__name:"NumberInput",props:{rootClass:{type:String,default:void 0},rootStyle:{type:String,default:void 0},id:{type:String,required:!0,validator:e=>!/\s/g.test(e)},status:{type:String,default:void 0},hiddenLabel:{type:Boolean,default:!1},modelValue:{type:Number,default:void 0}},emits:["update:modelValue"],setup(e,{emit:L}){const $=w(),q=L;return(a,r)=>(t(),s("div",{class:C(["j-numberinput",e.rootClass]),style:D(e.rootStyle)},[o("label",{class:C(["j-numberinput__label",{"sr-only":e.hiddenLabel}]),for:e.id},[h(a.$slots,"label",{},void 0,!0),j($).required?(t(),s(N,{key:0},[r[1]||(r[1]=o("span",{class:"j-numberinput__asterisk","aria-hidden":"true"},"*",-1)),r[2]||(r[2]=V()),r[3]||(r[3]=o("span",{class:"sr-only"},"(required)",-1))],64)):n("",!0)],10,R),o("div",B,[o("input",M(j($),{class:"j-numberinput__input",id:e.id,type:"number",value:e.modelValue,"aria-invalid":e.status==="error"?"true":e.status==="success"?"false":void 0,"aria-errormessage":a.$slots.error?`${e.id}-error`:void 0,"aria-describedby":a.$slots.description?`${e.id}-description`:void 0,onInput:r[0]||(r[0]=E=>q("update:modelValue",Number(E.target.value)))}),null,16,z),e.status?(t(),s("span",F,[e.status==="error"?(t(),s(N,{key:0},[V("✘")],64)):n("",!0),e.status==="success"?(t(),s(N,{key:1},[V("✔")],64)):n("",!0)])):n("",!0)]),a.$slots.error?(t(),s("div",{key:0,class:"j-numberinput__error",id:`${e.id}-error`},[h(a.$slots,"error",{},void 0,!0)],8,H)):n("",!0),a.$slots.description?(t(),s("div",{key:1,class:"j-numberinput__description",id:`${e.id}-description`},[h(a.$slots,"description",{},void 0,!0)],8,O)):n("",!0)],6))}}),I=_(k,[["__scopeId","data-v-deba3b0e"]]);k.__docgenInfo={exportName:"default",displayName:"NumberInput",description:"",tags:{},props:[{name:"rootClass",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rootStyle",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},required:!0},{name:"status",values:["success","error"],type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hiddenLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],slots:[{name:"label"},{name:"error"},{name:"description"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/NumberInput/NumberInput.vue"]};const W={title:"Components/NumberInput",component:I,argTypes:{status:{control:"radio",options:[void 0,"error","success"]}},render:e=>({components:{NumberInput:I},setup(){const L=x(e.modelValue);return{args:e,value:L}},template:`
      <NumberInput
        v-bind="args"
        v-model="value"
      >
        <template v-if="args.label" v-slot:label>${e.label}</template>
        <template v-if="args.error" v-slot:error>${e.error}</template>
        <template v-if="args.description" v-slot:description>${e.description}</template>
      </NumberInput>
    `})},i={args:{id:"default",label:"Label"}},l={args:{id:"status-error",label:"Label",status:"error"}},u={args:{id:"status-success",label:"Label",status:"success"}},d={args:{id:"hidden-label",label:"Label",hiddenLabel:!0}},c={args:{id:"disabled",label:"Label",disabled:!0}},m={args:{id:"readonly",label:"Label",readonly:!0}},p={args:{id:"required",label:"Label",required:!0}},b={args:{id:"min",label:"Label",min:5}},g={args:{id:"max",label:"Label",max:5}},f={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p>"}},y={args:{id:"with-description",label:"Label",status:"error",error:"<p>This is an error message</p><p>This is another error message</p>"}},v={args:{id:"with-description",label:"Label",description:"<p>Enter your <strong>full</strong> name</p>"}},S={args:{id:"custom",label:"Label",rootStyle:`
      --j-numberinput-height: 4rem;`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    label: 'Label'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-error',
    label: 'Label',
    status: 'error'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-success',
    label: 'Label',
    status: 'success'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hidden-label',
    label: 'Label',
    hiddenLabel: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'Label',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'readonly',
    label: 'Label',
    readonly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'Label',
    required: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'min',
    label: 'Label',
    min: 5
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'max',
    label: 'Label',
    max: 5
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p>'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p><p>This is another error message</p>'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-description',
    label: 'Label',
    description: '<p>Enter your <strong>full</strong> name</p>'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom',
    label: 'Label',
    rootStyle: \`
      --j-numberinput-height: 4rem;\`
  }
}`,...S.parameters?.docs?.source}}};const A=["Default","StatusError","StatusSuccess","HiddenLabel","Disabled","Readonly","Required","Min","Max","SingleError","MultipleErrors","WithDescription","Custom"],J=Object.freeze(Object.defineProperty({__proto__:null,Custom:S,Default:i,Disabled:c,HiddenLabel:d,Max:g,Min:b,MultipleErrors:y,Readonly:m,Required:p,SingleError:f,StatusError:l,StatusSuccess:u,WithDescription:v,__namedExportsOrder:A,default:W},Symbol.toStringTag,{value:"Module"}));export{S as C,i as D,d as H,b as M,J as N,m as R,u as S,v as W,l as a,c as b,p as c,g as d,f as e,y as f};
