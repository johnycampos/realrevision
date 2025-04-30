import{$ as V,o as u,c as f,w as l,a as e,a9 as T,aF as P,dR as A,b as w,ab as v,cK as U,cJ as S,dg as q,ar as j,aa as N,ad as i,f as o,V as n,e as g,_ as x,a5 as t}from"./index.1a258bbd.js";import{V as L}from"./VTooltip.59e1d1ba.js";import{r as B,e as E}from"./validators.650e3200.js";import{V as W}from"./VForm.fd5811bb.js";import{_ as z}from"./AppCardCode.6c8a8473.js";import"./vue.runtime.esm-bundler.86261bcd.js";import"./VCard.319647d9.js";const H=o(" I'm a tooltip "),J={key:0,class:"ms-3"},Y={__name:"DemoTextfieldIconSlots",setup(_){const a=V("Hey!"),d=V(!1),p=()=>{d.value=!0,a.value="Wait for it...",setTimeout(()=>{d.value=!1,a.value="You've clicked me!"},2e3)};return(s,m)=>(u(),f(i,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=r=>a.value=r),clearable:"","clear-icon":"mdi-close-circle-outline",label:"Message",type:"text"},{prepend:l(()=>[e(L,{location:"bottom"},{activator:l(({props:r})=>[e(T,P(r,{icon:"mdi-help-circle-outline"}),null,16)]),default:l(()=>[H]),_:1})]),"append-inner":l(()=>[e(q,{"leave-absolute":""},{default:l(()=>[d.value?(u(),f(A,{key:0,size:"24",color:"info",indeterminate:""})):w("",!0),e(v(U),{nodes:v(S).app.logo},null,8,["nodes"])]),_:1})]),append:l(()=>[e(N,{size:s.$vuetify.display.smAndDown?"small":"large",class:"mt-n3",icon:s.$vuetify.display.smAndDown,onClick:p},{default:l(()=>[e(T,{icon:"mdi-target"}),s.$vuetify.display.smAndUp?(u(),j("span",J,"Click me")):w("",!0)]),_:1},8,["size","icon"])]),_:1},8,["modelValue"]))}},O={__name:"DemoTextfieldPasswordInput",setup(_){const a=V(!1),d=V(!0),p=V("Password"),s=V("wqfasds"),m={required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters"};return(r,c)=>(u(),f(g,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=b=>p.value=b),"append-inner-icon":a.value?"mdi-eye-outline":"mdi-eye-off-outline",rules:[m.required,m.min],type:a.value?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":c[1]||(c[1]=b=>a.value=!a.value)},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=b=>s.value=b),"append-inner-icon":d.value?"mdi-eye-outline":"mdi-eye-off-outline",rules:[m.required,m.min],type:d.value?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":c[3]||(c[3]=b=>d.value=!d.value)},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1}))}},K={},G=o(" What about \xA0"),Q=t("strong",null,"icon",-1),X=o("\xA0here? ");function Z(_,a){return u(),f(i,null,{label:l(()=>[G,Q,X,e(T,{icon:"mdi-file-find-outline"})]),_:1})}const ee=x(K,[["render",Z]]),le={__name:"DemoTextfieldIconEvents",setup(_){const a=V("Hey!"),d=V(!0),p=V(0),s=()=>{d.value=!d.value},m=()=>{a.value=""},r=()=>{p.value=0},c=()=>{r(),m()};return(b,h)=>(u(),f(i,{modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=C=>a.value=C),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"mdi-close-circle-outline","append-icon":a.value?"mdi-send-outline":"mdi-microphone","append-inner-icon":d.value?"mdi-map-marker-outline":"mdi-map-marker-off-outline","onClick:appendInner":s,"onClick:append":c,"onClick:clear":m},null,8,["modelValue","append-icon","append-inner-icon"]))}},te={__name:"DemoTextfieldValidation",setup(_){const a=V("");return(d,p)=>(u(),f(W,null,{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=s=>a.value=s),rules:[v(B),v(E)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}},oe={};function ne(_,a){return u(),f(i,{label:"Regular","single-line":""})}const ae=x(oe,[["render",ne]]),se={__name:"DemoTextfieldPrefixesAndSuffixes",setup(_){const a=V(10.05),d=V(28.02),p=V("example"),s=V("04:56");return(m,r)=>(u(),f(g,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=c=>d.value=c),label:"Weight",suffix:"lbs"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:p.value,"onUpdate:modelValue":r[2]||(r[2]=c=>p.value=c),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":r[3]||(r[3]=c=>s.value=c),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1}))}},ie={};function re(_,a){return u(),f(g,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend","prepend-icon":"mdi-map-marker-outline"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{label:"Prepend Inner","prepend-inner-icon":"mdi-map-marker-outline"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{label:"Append","append-icon":"mdi-map-marker-outline"})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{label:"Append Inner","append-inner-icon":"mdi-map-marker-outline"})]),_:1})]),_:1})}const de=x(ie,[["render",re]]),ce={};function me(_,a){return u(),f(i,{color:"success",label:"First name"})}const ue=x(ce,[["render",me]]),pe={};function fe(_,a){return u(),f(i,{label:"Regular",clearable:""})}const Ve=x(pe,[["render",fe]]),_e={__name:"DemoTextfieldCounter",setup(_){const a=V("Preliminary report"),d=V("California is a state in the western United States"),p=[s=>s.length<=25||"Max 25 characters"];return(s,m)=>(u(),f(g,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=r=>a.value=r),rules:p,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{modelValue:d.value,"onUpdate:modelValue":m[1]||(m[1]=r=>d.value=r),rules:p,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}},xe={};function be(_,a){return u(),f(g,null,{default:l(()=>[e(n,null,{default:l(()=>[e(i,{value:"John Doe",label:"Disabled",disabled:""})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(i,{value:"John Doe",label:"Readonly",readonly:""})]),_:1})]),_:1})}const ge=x(xe,[["render",be]]),he={};function ve(_,a){return u(),f(g,null,{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Outlined"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Filled",variant:"filled"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Solo",variant:"solo"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Plain",variant:"plain"})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(i,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Ce=x(he,[["render",ve]]),Te={};function we(_,a){return u(),f(i,{label:"Compact",density:"compact"})}const ye=x(Te,[["render",we]]),Fe={};function ke(_,a){return u(),f(i,{label:"Regular"})}const Re=x(Fe,[["render",ke]]),$e={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},De={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},Pe={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')
const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters'
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'
const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},Se={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`},qe={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},je={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},Ne={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},Le={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}
const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)
const toggleMarker = () => {
  marker.value = !marker.value
}
const clearMessage = () => {
  message.value = ''
}
const resetIcon = () => {
  iconIndex.value = 0
}
const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Ee={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        value="John Doe"
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        value="John Doe"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        value="John Doe"
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        value="John Doe"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},We={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer :nodes="themeConfig.app.logo" />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.smAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)
const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer :nodes="themeConfig.app.logo" />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.smAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},ze=t("p",null,"Text fields components are used for collecting user provided information.",-1),He=t("p",null,[o("The "),t("code",null,"density"),o(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("strong",null,"default"),o(", "),t("strong",null,"comfortable"),o(", and "),t("strong",null,"compact"),o(".")],-1),Je=t("p",null,[o("Use "),t("code",null,"solo"),o(", "),t("code",null,"filled"),o(", "),t("code",null,"outlined"),o(", "),t("code",null,"plain"),o(" and "),t("code",null,"underlined"),o(" option of "),t("code",null,"variant"),o(" prop to change the look of the textfield. ")],-1),Ye=t("p",null,"Text fields can be disabled or readonly.",-1),Oe=t("p",null,[o("Use a "),t("code",null,"counter"),o(" prop to inform a user of the character limit.")],-1),Ke=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Ge=t("p",null,[o("Use "),t("code",null,"color"),o(" prop to change the input text color.")],-1),Qe=t("p",null,[o("You can add icons to the text field with "),t("code",null,"prepend-icon"),o(", "),t("code",null,"append-icon"),o(" and "),t("code",null,"append-inner-icon"),o(" and "),t("code",null,"prepend-inner-icon"),o(" props.")],-1),Xe=t("p",null,[o("The "),t("code",null,"prefix"),o(" and "),t("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Ze=t("p",null,[t("code",null,"single-line"),o(" text fields do not float their label on focus or with data.")],-1),el=t("p",null,[o("Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop.")],-1),ll=t("p",null,[t("code",null,"click:prepend"),o(", "),t("code",null,"click:append"),o(", "),t("code",null,"click:append-inner"),o(", and "),t("code",null,"click:clear"),o(" will be emitted when you click on the respective icon")],-1),tl=t("p",null,[o("Text field label can be defined in "),t("code",null,"label"),o(" slot - that will allow to use HTML content.")],-1),ol=t("p",null,[o("Using the HTML input "),t("code",null,"type"),o(" password can be used with an appended icon and callback to control the visibility.")],-1),nl=t("p",null,[o("Instead of using "),t("code",null,"prepend"),o("/"),t("code",null,"append"),o("/"),t("code",null,"append-inner"),o(" icons you can use slots to extend input's functionality.")],-1),ul={__name:"textfield",setup(_){return(a,d)=>{const p=Re,s=z,m=ye,r=Ce,c=ge,b=_e,h=Ve,C=ue,y=de,F=se,k=ae,R=te,$=le,I=ee,D=O,M=Y;return u(),f(g,{class:"match-height"},{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Basic",code:Ne},{default:l(()=>[ze,e(p)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Density",code:Me},{default:l(()=>[He,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(s,{title:"Variant",code:Ue},{default:l(()=>[Je,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"State",code:Ee},{default:l(()=>[Ye,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Counter",code:$e},{default:l(()=>[Oe,e(b)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Clearable",code:je},{default:l(()=>[Ke,e(h)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Custom Colors",code:qe},{default:l(()=>[Ge,e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Icons",code:De},{default:l(()=>[Qe,e(y)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Prefixes and suffixes",code:Le},{default:l(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Single line",code:Ie},{default:l(()=>[Ze,e(k)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Validation",code:Ae},{default:l(()=>[el,e(R)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Icon events",code:Be},{default:l(()=>[ll,e($)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Label Slot",code:Se},{default:l(()=>[tl,e(I)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Password input",code:Pe},{default:l(()=>[ol,e(D)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Icon slots",code:We},{default:l(()=>[nl,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ul as default};
