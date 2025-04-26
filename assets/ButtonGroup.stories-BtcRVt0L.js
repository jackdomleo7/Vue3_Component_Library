import{b as c,d as p,o as i}from"./vue.esm-bundler-Dxyv6e--.js";import{_ as B,B as u}from"./Button-7mTihEl6.js";import"./iframe-pI3kEG9O.js";const a={},d={role:"group",class:"j-btn-group"};function m(t,o){return i(),c("div",d,[p(t.$slots,"default",{},void 0,!0)])}const s=B(a,[["render",m],["__scopeId","data-v-eedfa3fd"]]);a.__docgenInfo={displayName:"ButtonGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/Vue3_Component_Library/Vue3_Component_Library/src/components/ButtonGroup/ButtonGroup.vue"]};const v={title:"Components/ButtonGroup",component:s},n={render:t=>({components:{ButtonGroup:s,Button:u},setup(){return{args:t}},template:`<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info">Edit</Button>
      <Button status="info">Delete</Button>
    </ButtonGroup>`})},e={render:t=>({components:{ButtonGroup:s,Button:u},setup(){const o=new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20320%20512'%3e%3cpath%20d='M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z'/%3e%3c/svg%3e",import.meta.url).href;return{args:t,iconSrc:o}},template:`<ButtonGroup v-bind="args">
      <Button status="info" round>Save</Button>
      <Button status="info" round>Edit</Button>
      <Button status="info" round>Delete</Button>
    </ButtonGroup>`})},r={render:t=>({components:{ButtonGroup:s,Button:u},setup(){const o=new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3cpath%20d='M233.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200l192-192c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L256%20338.7%2086.6%20169.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l192%20192z'/%3e%3c/svg%3e",import.meta.url).href;return{args:t,iconSrc:o}},template:`<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info" :icon="{ src: iconSrc, position: 'icon-only' }">More</Button>
    </ButtonGroup>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonGroup,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info">Edit</Button>
      <Button status="info">Delete</Button>
    </ButtonGroup>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonGroup,
      Button
    },
    setup() {
      const iconSrc = new URL('@/docs/assets/ChevronRight.svg', import.meta.url).href;
      return {
        args,
        iconSrc
      };
    },
    template: \`<ButtonGroup v-bind="args">
      <Button status="info" round>Save</Button>
      <Button status="info" round>Edit</Button>
      <Button status="info" round>Delete</Button>
    </ButtonGroup>\`
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ButtonGroup,
      Button
    },
    setup() {
      const iconSrc = new URL('@/docs/assets/ChevronDown.svg', import.meta.url).href;
      return {
        args,
        iconSrc
      };
    },
    template: \`<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info" :icon="{ src: iconSrc, position: 'icon-only' }">More</Button>
    </ButtonGroup>\`
  })
}`,...r.parameters?.docs?.source}}};const G=["Group1","Group2","Group3"];export{n as Group1,e as Group2,r as Group3,G as __namedExportsOrder,v as default};
