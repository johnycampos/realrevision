import{_ as c}from"./AppDateTimePicker.2a994193.js";import{$ as s,o as r,c as l,ab as d,w as m,a as o,V as p,e as g}from"./index.4bc17e10.js";import{_ as A}from"./AppCardCode.e951a0d9.js";import"./vue.runtime.esm-bundler.9a01116a.js";import"./VCard.2c35d430.js";const v={__name:"DemoDateTimePickerInline",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Inline",config:{inline:!0}},null,8,["modelValue"]))}},b={__name:"DemoDateTimePickerDisabledRange",setup(n){const a=new Date,i=a.toLocaleString("default",{month:"2-digit"}),e=a.getFullYear(),t=s("");return(f,u)=>(r(),l(c,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=D=>t.value=D),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${d(e)}-${d(i)}-20`,to:`${d(e)}-${d(i)}-25`}]}},null,8,["modelValue","config"]))}},F={__name:"DemoDateTimePickerHumanFriendly",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},V={__name:"DemoDateTimePickerRange",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Range",config:{mode:"range"}},null,8,["modelValue"]))}},Y={__name:"DemoDateTimePickerMultipleDates",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"]))}},$={__name:"DemoDateTimePickerDateAndTime",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"]))}},R={__name:"DemoDateTimePickerTimePicker",setup(n){const a=s("");return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"]))}},w={__name:"DemoDateTimePickerBasic",setup(n){const a=s();return(i,e)=>(r(),l(c,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),label:"Default"},null,8,["modelValue"]))}},M={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref<string>()
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref()
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`},H={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},I={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},j={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},C={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},q={__name:"date-time-picker",setup(n){return(a,i)=>{const e=w,t=A,f=R,u=$,D=Y,_=V,T=F,k=b,P=v;return r(),l(g,null,{default:m(()=>[o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Basic",code:M},{default:m(()=>[o(e)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Time Picker",code:H},{default:m(()=>[o(f)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Date and Time",code:I},{default:m(()=>[o(u)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Multiple Dates",code:j},{default:m(()=>[o(D)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Range",code:x},{default:m(()=>[o(_)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Human Friendly",code:U},{default:m(()=>[o(T)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Disabled Range",code:y},{default:m(()=>[o(k)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12",md:"6"},{default:m(()=>[o(t,{title:"Inline",code:C},{default:m(()=>[o(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{q as default};
