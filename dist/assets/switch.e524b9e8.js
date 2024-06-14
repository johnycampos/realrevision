import{$ as u,o as m,ar as w,a as e,ah as d,c as v,w as i,dR as V,f as c,a5 as s,a6 as x,at as S,au as O,V as h,e as L}from"./index.4bc17e10.js";import{_ as y}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const $={class:"demo-space-x"},D={__name:"DemoSwitchStates",setup(p){const a=u("on"),o=u("on"),n=u("on");return(t,l)=>(m(),w("div",$,[e(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),value:"on",label:"On"},null,8,["modelValue"]),e(d,{label:"Off"}),e(d,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=r=>o.value=r),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),e(d,{disabled:"",label:"Off disabled"}),e(d,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value=r),loading:"warning",value:"on",label:"On loading"},null,8,["modelValue"]),e(d,{loading:"warning",label:"Off loading"})]))}},U={class:"demo-space-x"},C={__name:"DemoSwitchTrueAndFalseValue",setup(p){const a=u(1),o=u("Show");return(n,t)=>(m(),w("div",U,[e(d,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),label:a.value.toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),e(d,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),label:o.value.toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}},J=c(" Turn on the progress: "),T={__name:"DemoSwitchLabelSlot",setup(p){const a=u(!1);return(o,n)=>(m(),v(d,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value=t)},{label:i(()=>[J,e(V,{indeterminate:a.value,value:0,size:"24",class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}},A={class:"demo-space-x"},F={class:"mt-2 mb-0"},M={__name:"DemoSwitchModelAsArray",setup(p){const a=u(["John"]);return(o,n)=>(m(),w(S,null,[s("div",A,[e(d,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value=t),label:"John",value:"John"},null,8,["modelValue"]),e(d,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=t=>a.value=t),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),s("p",F,x(a.value),1)],64))}},z={class:"demo-space-x"},I={__name:"DemoSwitchColors",setup(p){const a=u(["Primary","Secondary","Success","Info","Warning","Error"]),o=u(["Primary","Secondary","Success","Info","Warning","Error"]);return(n,t)=>(m(),w("div",z,[(m(!0),w(S,null,O(o.value,l=>(m(),v(d,{key:l,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),label:l,value:l,color:l.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}},P={class:"demo-space-x"},j={__name:"DemoSwitchInset",setup(p){const a=u(!0),o=u(!1);return(n,t)=>(m(),w("div",P,[e(d,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),inset:"",label:`Switch 1: ${a.value.toString()}`},null,8,["modelValue","label"]),e(d,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l),inset:"",label:`Switch 2: ${o.value.toString()}`},null,8,["modelValue","label"])]))}},k={class:"demo-space-x"},B={__name:"DemoSwitchBasic",setup(p){const a=u(!0),o=u(!1),n=t=>{const l=t.toString();return l.charAt(0).toUpperCase()+l.slice(1)};return(t,l)=>(m(),w("div",k,[e(d,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=r=>a.value=r),label:n(a.value)},null,8,["modelValue","label"]),e(d,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=r=>o.value=r),label:n(o.value)},null,8,["modelValue","label"])]))}},E={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)
const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},W={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>

const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},H={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},N={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        :value="0"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>

const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        :value="0"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},Y={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},q={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error'
])
const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error'
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},G=s("p",null,[c("A "),s("code",null,"v-switch"),c(" in its simplest form provides a toggle between 2 values.")],-1),K=s("p",null,"You can make switch render in inset mode.",-1),Q=s("p",null,[c("Switches can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),c(" prop.")],-1),X=s("p",null,[c("Multiple "),s("code",null,"v-switch"),c("'s can share the same "),s("code",null,"v-model"),c(" by using an array.")],-1),Z=s("p",null,[c("Switch labels can be defined in "),s("code",null,"label"),c(" slot - that will allow to use HTML content.")],-1),ee=s("p",null,[c(" Use "),s("code",null,"false-value"),c(" and "),s("code",null,"true-value"),c(" prop to sets value for truthy and falsy state ")],-1),te=s("p",null,[s("code",null,"v-switch"),c(" can have different states such as "),s("code",null,"default"),c(", "),s("code",null,"disabled"),c(", and "),s("code",null,"loading"),c(".")],-1),ne={__name:"switch",setup(p){return(a,o)=>{const n=B,t=y,l=j,r=I,b=M,f=T,_=C,g=D;return m(),v(L,null,{default:i(()=>[e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"Basic",code:E},{default:i(()=>[G,e(n)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"Inset",code:Y},{default:i(()=>[K,e(l)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"Colors",code:q},{default:i(()=>[Q,e(r)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"Model as array",code:W},{default:i(()=>[X,e(b)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"Label slot",code:R},{default:i(()=>[Z,e(f)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"True and False Value",code:H},{default:i(()=>[ee,e(_)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:i(()=>[e(t,{title:"States",code:N},{default:i(()=>[te,e(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ne as default};
