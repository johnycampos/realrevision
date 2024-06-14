import{$ as u,o as p,ar as x,a as e,w as r,V as m,ad as C,e as v,at as k,c as f,a5 as c,aF as L,ac as y,f as n,a6 as S,au as O}from"./index.4bc17e10.js";import{V as i}from"./VCheckbox.f318de96.js";import{V as I}from"./VTooltip.6547da95.js";import{_ as U}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const $={__name:"DemoCheckboxInlineTextField",setup(h){const o=u(!0),a=u(!1);return(d,l)=>(p(),x(k,null,[e(v,null,{default:r(()=>[e(m,{sm:"1",cols:"2"},{default:r(()=>[e(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t)},null,8,["modelValue"])]),_:1}),e(m,{sm:"11",cols:"10"},{default:r(()=>[e(C,{label:"Include files"})]),_:1})]),_:1}),e(v,null,{default:r(()=>[e(m,{cols:"2",sm:"1"},{default:r(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t)},null,8,["modelValue"])]),_:1}),e(m,{cols:"10",sm:"11"},{default:r(()=>[e(C,{disabled:!a.value,label:"I only work if you check the box"},null,8,["disabled"])]),_:1})]),_:1})],64))}},z=n(" I agree that "),D=n(" Opens in new window "),J=n(" is awesome "),A={__name:"DemoCheckboxLabelSlot",setup(h){const o=u(!1);return(a,d)=>(p(),f(i,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=l=>o.value=l)},{label:r(()=>[c("div",null,[z,e(I,{location:"bottom"},{activator:r(({props:l})=>[c("a",L({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},l,{onClick:d[0]||(d[0]=y(()=>{},["stop"]))})," Vuetify ",16)]),default:r(()=>[D]),_:1}),J])]),_:1},8,["modelValue"]))}},F={class:"demo-space-x"},j={__name:"DemoCheckboxStates",setup(h){const o=u(!0),a=u(!0),d=u(!0),l=u(!1);return(t,s)=>(p(),x("div",F,[e(i,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=b=>o.value=b),label:"On"},null,8,["modelValue"]),e(i,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=b=>l.value=b),label:"Off"},null,8,["modelValue"]),e(i,{indeterminate:a.value,"onUpdate:indeterminate":s[2]||(s[2]=b=>a.value=b),modelValue:a.value,"onUpdate:modelValue":s[3]||(s[3]=b=>a.value=b),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(i,{"model-value":d.value,disabled:"",label:"On disabled"},null,8,["model-value"]),e(i,{disabled:"",label:"Off disabled"})]))}},E={class:"demo-space-x"},R={__name:"DemoCheckboxCheckboxValue",setup(h){const o=u(1),a=u("Show");return(d,l)=>(p(),x("div",E,[e(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),"true-value":1,"false-value":0,label:`${o.value.toString()}`},null,8,["modelValue","label"]),e(i,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t),"true-value":"Show","false-value":"Hide",color:"success",label:`${a.value.toString()}`},null,8,["modelValue","label"])]))}},B={class:"demo-space-x"},M={__name:"DemoCheckboxIcon",setup(h){const o=u(!0),a=u(!0),d=u(!0),l=t=>{const s=t.toString();return s.charAt(0).toUpperCase()+s.slice(1)};return(t,s)=>(p(),x("div",B,[e(i,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=b=>o.value=b),label:l(o.value),"true-icon":"mdi-check","false-icon":"mdi-close"},null,8,["modelValue","label"]),e(i,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=b=>a.value=b),label:l(a.value),"true-icon":"mdi-alarm-check","false-icon":"mdi-alarm",color:"success"},null,8,["modelValue","label"]),e(i,{modelValue:d.value,"onUpdate:modelValue":s[2]||(s[2]=b=>d.value=b),label:l(d.value),"true-icon":"mdi-check-circle","false-icon":"mdi-close-circle",color:"error"},null,8,["modelValue","label"])]))}},H={class:"demo-space-x"},P={class:"mt-1"},N={__name:"DemoCheckboxModelAsArray",setup(h){const o=u(["John"]);return(a,d)=>(p(),x(k,null,[c("div",H,[e(i,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=l=>o.value=l),label:"John",value:"John"},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=l=>o.value=l),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(i,{modelValue:o.value,"onUpdate:modelValue":d[2]||(d[2]=l=>o.value=l),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),c("p",P,S(o.value),1)],64))}},W={class:"demo-space-x"},Y={__name:"DemoCheckboxColors",setup(h){const o=u(["Primary","Secondary","Success","Info","Warning","Error"]),a=u([]);return(d,l)=>(p(),x("div",W,[(p(!0),x(k,null,O(o.value,t=>(p(),f(i,{key:t,modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),label:t,color:t.toLowerCase(),value:t},null,8,["modelValue","label","color","value"]))),128))]))}},q={class:"demo-space-x"},G={__name:"DemoCheckboxDensity",setup(h){const o=u(!0),a=u(!1),d=l=>{const t=l.toString();return t.charAt(0).toUpperCase()+t.slice(1)};return(l,t)=>(p(),x("div",q,[e(i,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),density:"compact",label:d(o.value)},null,8,["modelValue","label"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),density:"compact",label:d(a.value)},null,8,["modelValue","label"])]))}},K={class:"demo-space-x"},Q={__name:"DemoCheckboxBasic",setup(h){const o=u(!0),a=u(!1),d=l=>{const t=l.toString();return t.charAt(0).toUpperCase()+t.slice(1)};return(l,t)=>(p(),x("div",K,[e(i,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),label:d(o.value)},null,8,["modelValue","label"]),e(i,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),label:d(a.value)},null,8,["modelValue","label"])]))}},X={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>

const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},ee={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)
const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)
const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <VTextField label="Include files" />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <VTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      />
    </VCol>
  </VRow>
</template>
`},te={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="mdi-check"
      false-icon="mdi-close"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="mdi-alarm-check"
      false-icon="mdi-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="mdi-check-circle"
      false-icon="mdi-close-circle"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)
const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="mdi-check"
      false-icon="mdi-close"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="mdi-alarm-check"
      false-icon="mdi-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="mdi-check-circle"
      false-icon="mdi-close-circle"
      color="error"
    />
  </div>
</template>
`},ce={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>

const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ae={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},se={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error'
])
const selectedCheckbox = ref([])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},ne=c("p",null,[c("code",null,"v-checkbox"),n(" in its simplest form provides a toggle between 2 values.")],-1),de=c("p",null,[n("Use "),c("code",null,"density"),n(" prop to reduces the input height. Available options are: "),c("code",null,"default"),n(", "),c("code",null,"comfortable"),n(", and "),c("code",null,"compact"),n(".")],-1),re=c("p",null,[n("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),c("code",null,"color"),n(" prop.")],-1),ie=c("p",null,[n("Multiple "),c("code",null,"v-checkbox"),n("'s can share the same "),c("code",null,"v-model"),n(" by using an array.")],-1),ue=c("p",null,[n("Use "),c("code",null,"off-icon"),n(" and "),c("code",null,"on-icon"),n(" prop to change the icon on the checkbox.")],-1),be=c("p",null,[n("Use "),c("code",null,"false-value"),n(" and "),c("code",null,"true-value"),n(" prop to sets value for truthy and falsy state")],-1),me=c("p",null,[c("code",null,"v-checkbox"),n(" can have different states such as "),c("code",null,"default"),n(", "),c("code",null,"disabled"),n(", and "),c("code",null,"indeterminate"),n(".")],-1),pe=c("p",null,[n("Checkbox labels can be defined in "),c("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),he=c("p",null,[n("You can place "),c("code",null,"v-checkbox"),n(" in line with other components such as "),c("code",null,"v-text-field"),n(".")],-1),_e={__name:"checkbox",setup(h){return(o,a)=>{const d=Q,l=U,t=G,s=Y,b=N,V=M,_=R,g=j,T=A,w=$;return p(),f(v,{class:"match-height"},{default:r(()=>[e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Basic",code:ee},{default:r(()=>[ne,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Density",code:le},{default:r(()=>[de,e(t)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Colors",code:se},{default:r(()=>[re,e(s)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Model as array",code:Z},{default:r(()=>[ie,e(b)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Icon",code:te},{default:r(()=>[ue,e(V)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Checkbox Value",code:X},{default:r(()=>[be,e(_)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"States",code:ae},{default:r(()=>[me,e(g)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Label Slot",code:ce},{default:r(()=>[pe,e(T)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(l,{title:"Inline text-field",code:oe},{default:r(()=>[he,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{_e as default};
